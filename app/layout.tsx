import type React from "react"
import type { Metadata } from "next"
import { Figtree, Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hivegrid.dev"),
  title: {
    default: "HiveGrid - Open Source Project Management",
    template: "%s | HiveGrid",
  },
  description:
    "Advanced open source project management and software lifecycle platform. Plan, build, and document your projects with real-time collaboration.",
  keywords: [
    "project management",
    "open source",
    "team collaboration",
    "issue tracking",
    "kanban",
    "agile",
    "self-hosted",
  ],
  authors: [{ name: "HiveGrid Team" }],
  creator: "HiveGrid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hivegrid.dev",
    siteName: "HiveGrid",
    title: "HiveGrid - Open Source Project Management",
    description:
      "Advanced open source project management and software lifecycle platform. Plan, build, and document your projects with real-time collaboration.",
    images: [
      {
        url: "/images/hivegrid-logo.png",
        width: 512,
        height: 512,
        alt: "HiveGrid Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HiveGrid - Open Source Project Management",
    description:
      "Advanced open source project management and software lifecycle platform.",
    images: ["/images/hivegrid-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${figtree.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
