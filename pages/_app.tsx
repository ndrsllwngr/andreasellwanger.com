import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/index.css'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
