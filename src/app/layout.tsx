import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Appomize - Digital Solutions for Modern Businesses',
  description: 'Transforming businesses through innovative digital solutions and cutting-edge technology.',
  keywords: 'digital solutions, web development, mobile apps, AI, machine learning, business transformation',
  authors: [{ name: 'Appomize Team' }],
  creator: 'Appomize',
  publisher: 'Appomize',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://appomize.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Appomize - Digital Solutions for Modern Businesses',
    description: 'Transforming businesses through innovative digital solutions and cutting-edge technology.',
    url: 'https://appomize.com',
    siteName: 'Appomize',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Appomize - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appomize - Digital Solutions for Modern Businesses',
    description: 'Transforming businesses through innovative digital solutions and cutting-edge technology.',
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  themeColor: '#2563EB',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Appomize',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/water-mark.jpeg" as="image" />
        <link rel="preload" href="/images/logo.jpg" as="image" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Google Analytics - Load asynchronously */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        
        {/* Performance Monitor - Load after page load */}
        <PerformanceMonitor />
        
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 