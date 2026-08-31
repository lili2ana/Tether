import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate God Mode',
  description: 'AI operated real estate acquisition command center',
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body style={{margin:0}}>{children}</body></html>
}
