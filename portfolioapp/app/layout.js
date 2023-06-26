import './globals.css'

export const metadata = {
  title: 'Pranav\'s site',
  description: 'Pranav Chunchur\'s portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
