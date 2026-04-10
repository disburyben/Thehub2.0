import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { 
  title: 'HAVOC BRAIN // Command Centre', 
  description: 'High-fidelity intelligence dashboard by HAVOC Solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-brand/30">
        {children}
      </body>
    </html>
  )
}
