import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `sm:grid-cols-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `md:grid-cols-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `lg:grid-cols-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `xl:grid-cols-${i + 1}`),

		// Column span for different breakpoints
		...Array.from({ length: 12 }, (_, i) => `col-span-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `sm:col-span-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `md:col-span-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `lg:col-span-${i + 1}`),
		...Array.from({ length: 12 }, (_, i) => `xl:col-span-${i + 1}`),

		// Gap classes for different breakpoints
		...Array.from({ length: 12 }, (_, i) => `gap-${i}`),
		...Array.from({ length: 12 }, (_, i) => `sm:gap-${i}`),
		...Array.from({ length: 12 }, (_, i) => `md:gap-${i}`),
		...Array.from({ length: 12 }, (_, i) => `lg:gap-${i}`),
		...Array.from({ length: 12 }, (_, i) => `xl:gap-${i}`),
		// Añade todas las clases que usas condicionalmente
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
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
				sm: 'calc(var(--radius) - 4px)',

			}
		}
	},

	plugins: [require("tailwindcss-animate")],
};
export default config;
