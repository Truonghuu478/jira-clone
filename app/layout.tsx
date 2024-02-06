import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
// import { ThemeProvider } from '@emotion/react'
// import { theme } from '@/configs'
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const inter = Inter({ subsets: ['latin'] })

  export const metadata: Metadata = {
    title: 'Jira Clone',
    description: 'A Jira-like application for project management',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
       <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        {/* Các meta khác */}
      </Head>
      <body className={inter.className}>
        {/* <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider> */}
          {children}
      </body>
    </html>
  )
}
