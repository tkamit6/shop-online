import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NextSession from '@/components/NextSession'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:{
    template: 'shopping_mart',
    default: 'Shopping Mart',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 w-full text-darkText `}>
        <NextSession>
          <Header />
          {children}
          <Footer />
        </NextSession>
      </body>
    </html>
  )
}
