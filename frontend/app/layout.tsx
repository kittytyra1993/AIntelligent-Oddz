import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AIntelligent Oddz',
  description: 'AI-powered sports predictions platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">AIntelligent Oddz</h1>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 AIntelligent Oddz. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

