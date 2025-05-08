import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				// Added max-width breakpoints
				'max-xs': { max: '479px' },
				'max-sm': { max: '639px' },
				'max-md': { max: '767px' },
				'max-lg': { max: '1023px' },
				'max-xl': { max: '1279px' },
				'max-2xl': { max: '1535px' },
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'nunito-sans': ['Nunito Sans', 'sans-serif'],
				'lora': ['Lora', 'serif'],
				'merriweather': ['Merriweather', 'serif'],
				'playfair-display': ['Playfair Display', 'serif'],
				'oswald': ['Oswald', 'sans-serif'],
				'bebas-neue': ['Bebas Neue', 'sans-serif'],   // Changed fallback from 'cursive' to 'sans-serif'
				'bungee': ['Bungee', 'sans-serif'],             // Changed fallback from 'cursive' to 'sans-serif'
				'pacifico': ['Pacifico', 'cursive'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
