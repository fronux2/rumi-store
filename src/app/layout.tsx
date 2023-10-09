import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar2 from './components/side-bar'

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
              <div className='flex flex-col'>
                <SideBar2/>
                {children}
              </div>

            </body>
        </html>
  )
}
