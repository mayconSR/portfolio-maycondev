// /app/layout.jsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maycon Rodrigues - Front-End Developer | maycondev.com.br',
  description: 'Portfolio of Maycon Rodrigues - Front-End Developer specialized in React, Next.js and Node.js. Check out my best projects and get in touch!',
  keywords: ['Maycon Rodrigues', 'Front-End Developer', 'React', 'Next.js', 'Portfolio', 'maycondev.com.br'],
  metadataBase: new URL('https://maycondev.com.br'),
  openGraph: {
    title: 'Maycon Rodrigues - Front-End Developer',
    description: 'Portfolio of Maycon Rodrigues - Front-End Developer specialized in React, Next.js and Node.js.',
    url: 'https://maycondev.com.br',
    siteName: 'maycondev.com.br',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Maycon Rodrigues',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maycon Rodrigues - Front-End Developer',
    description: 'Portfolio of Maycon Rodrigues - React, Next.js, Node.js.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Maycon Rodrigues" />
        <meta name="theme-color" content="#0e2a47" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-[#10172a] dark:text-gray-100 transition-colors min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}