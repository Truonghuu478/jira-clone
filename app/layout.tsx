import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { LoadingProvider } from '@/contexts'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jira Clone',
  description: 'A Jira-like application for project management',
}

interface IProps{
  children: React.ReactNode,
}

 function RootLayout({
  children
}: IProps) {

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <link rel="icon" href={""} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content={metadata.description as string} />
        {/* Các meta khác */}
      </Head>
      <body className={`${inter.className}`}>
      {/* <SessionProvider session={session}> */}
          <LoadingProvider>
            {children}
            <Toaster />
          </LoadingProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

// RootLayout.getInitialProps = async (ctx:any)=>{
//   const session = await getSession();

//   return {
//     props: {
//       session,
//     },
//   };
// }
export default RootLayout