"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from "next-themes";

interface ParticlesProps {
  className?: string
  shouldAdaptToTheme?: boolean;
  quantity?: number
  staticity?: number
  ease?: number
}

export default function Particles({
  className = '',
  shouldAdaptToTheme = true,
  quantity = 30,
  staticity = 50,
  ease = 50,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })

  // We'll track mouse coords locally in this component.
  // This ensures we read from the iframe's doc directly.
  const mouse = useRef({ x: 0, y: 0 })

  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
  const [animationHandle, setAnimationHandle] = useState<number>(-1)
  const { theme } = useTheme();

  // Circle shape params
  interface Circle {
    x: number
    y: number
    translateX: number
    translateY: number
    size: number
    alpha: number
    targetAlpha: number
    dx: number
    dy: number
    magnetism: number
  }

  /**
   * 1) SETUP & INIT
   */
  useEffect(() => {
    // Grab rendering context
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d')
    }
    initCanvas()

    // Cancel any old animation and start a new one
    if (animationHandle !== -1) {
      window.cancelAnimationFrame(animationHandle)
    }
    animate()

    // On resize, re-init
    const handleResize = () => initCanvas()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationHandle !== -1) {
        window.cancelAnimationFrame(animationHandle)
      }
    }
    // Re-run if quantity changes or if theme changes
  }, [quantity, theme])

  // Instead of using a custom hook, attach mousemove within the iframe.
  useEffect(() => {
    if (!canvasRef.current) return
    const doc = canvasRef.current.ownerDocument

    const handleMouseMove = (e: MouseEvent) => {
      // Check the bounding rect of the canvas
      const rect = canvasRef.current!.getBoundingClientRect()
      const { w, h } = canvasSize.current

      // Convert the absolute mouse coords to coords relative to the canvas center
      const x = e.clientX - rect.left - w / 2
      const y = e.clientY - rect.top - h / 2

      // Update only if the pointer is “inside” the container.
      // (Optional: you can remove this check if you want continuous movement.)
      const inside =
        x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }

    doc.addEventListener('mousemove', handleMouseMove)
    return () => {
      doc.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  /**
   * 2) CANVAS DRAW & INIT
   */
  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      // Clear circle array, so we re-draw new ones
      circles.current.length = 0

      // Update canvas size
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = canvasSize.current.w + 'px'
      canvasRef.current.style.height = canvasSize.current.h + 'px'

      context.current.scale(dpr, dpr)
    }
  }

  const drawParticles = () => {
    clearContext()
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams()
      drawCircle(circle)
    }
  }

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const translateX = 0
    const translateY = 0
    const size = Math.floor(Math.random() * 2) + 1
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 4
    return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism }
  }

  const drawCircle = (circle: Circle, update = false) => {
    if (!context.current) return
    const { x, y, translateX, translateY, size, alpha } = circle

    context.current.translate(translateX, translateY)
    context.current.beginPath()
    context.current.arc(x, y, size, 0, 2 * Math.PI)

    // Fill style depends on theme
    if (theme === "dark" || !shouldAdaptToTheme) {
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`
    } else {
      context.current.fillStyle = `rgba(0, 0, 0, ${alpha})`
    }
    context.current.fill()
    // Reset transform
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!update) {
      circles.current.push(circle)
    }
  }

  const clearContext = () => {
    if (!context.current) return
    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
  }

  /**
   * 3) ANIMATE
   */
  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    clearContext()

    circles.current.forEach((circle: Circle, i: number) => {
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left
        canvasSize.current.w - circle.x - circle.translateX - circle.size, // right
        circle.y + circle.translateY - circle.size, // top
        canvasSize.current.h - circle.y - circle.translateY - circle.size, // bottom
      ]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))

      // Fade alpha in or out depending on how close to an edge the circle is
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge
      }

      // Move the circle
      circle.x += circle.dx
      circle.y += circle.dy

      // Use magnetism to follow the mouse coords
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease

      // If the circle has moved entirely out of canvas, re-spawn it
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1)
        const newCircle = circleParams()
        drawCircle(newCircle)
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true
        )
      }
    })

    const handle = window.requestAnimationFrame(animate)
    setAnimationHandle(handle)
  }

  /**
   * 4) RENDER
   */
  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
