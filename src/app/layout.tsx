import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar2 from './components/side-bar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rumi-Store',
  description: 'Tienda de amigurumis creados a crochet, con diferente tematicas, anime, series, etc.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body className={inter.className}>
                <div className='grid grid-cols-1'>
                  <SideBar2/>
                  <div className='w-full h-full'>
                    {children}
                  </div>
                  <Footer/>
                </div>

            </body>
        </html>
  )
}
