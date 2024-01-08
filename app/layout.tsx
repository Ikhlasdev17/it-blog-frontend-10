import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.scss'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'IT Blogers',
	description: 'IT Blogers for writing any posts and articles',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={montserrat.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
