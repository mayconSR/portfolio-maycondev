// /app/layout.jsx
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

// 🔎 SEO global (pode ajustar à vontade)
export const metadata = {
  metadataBase: new URL('https://maycondev.com.br'),
  title: {
    default: 'Maycon Dev | Front-End Developer',
    template: '%s | Maycon Dev',
  },
  description:
    'Portfólio do Maycon Dev — Front-End Developer com foco em React, Next.js, Node.js, performance, acessibilidade e SEO.',
  keywords: [
    'Maycon Dev',
    'Maycon Rodrigues',
    'Front-End',
    'React',
    'Next.js',
    'Node.js',
    'Portfolio',
    'Acessibilidade',
    'SEO',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: 'https://maycondev.com.br',
    siteName: 'maycondev.com.br',
    title: 'Maycon Dev | Front-End Developer',
    description:
      'Portfólio do Maycon Dev — projetos com React, Next.js e foco em performance e SEO.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Maycon Dev' }],
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maycon Dev | Front-End Developer',
    description:
      'Portfólio do Maycon Dev — React, Next.js, Node.js, performance e SEO.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)',  color: '#0b1220' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {/* next-themes aplica a classe `dark` no <html>; lembre de setar darkMode: 'class' no tailwind.config.js */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
