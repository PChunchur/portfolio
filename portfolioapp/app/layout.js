import './globals.css'
import { Raleway } from 'next/font/google'

const inter = Raleway({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['200', '300', '400', '500', '700']
})

export const metadata = {
  title: 'Pranav\'s site',
  description: 'Pranav Chunchur\'s portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
