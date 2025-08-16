import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "MOKSHA STUDIO - Premium NFT Gaming Assets",
  description:
    "Creative studio creating unique NFT items for top gaming worlds. Specializing in weapons, armor, artifacts and rare collectibles for The Sandbox, Minecraft, and metaverses.",
  generator: "MOKSHA STUDIO",
  keywords: "NFT, gaming assets, The Sandbox, Minecraft, metaverse, digital collectibles, voxel art, blockchain",
  authors: [{ name: "MOKSHA STUDIO" }],
  openGraph: {
    title: "MOKSHA STUDIO - Premium NFT Gaming Assets",
    description: "Creative studio creating unique NFT items for top gaming worlds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOKSHA STUDIO - Premium NFT Gaming Assets",
    description: "Creative studio creating unique NFT items for top gaming worlds.",
    creator: "@MOKSHA_STUDIO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
