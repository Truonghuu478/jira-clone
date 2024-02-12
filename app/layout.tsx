import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import logo from "@/components/icons/logo.svg"

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
       <link rel="icon" href={logo} />
        <meta name="description" content={metadata.description as string} />
        {/* Các meta khác */}
      </Head>
      <body className={`${inter.className} px-3 py-4`}>
          {children}
      </body>
    </html>
  )
}
