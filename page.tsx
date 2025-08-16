"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nftAssets = [
    { src: "/nft-weapon-1.jpg", title: "Legendary Weapons", alt: "NFT Weapon Collection" },
    { src: "/nft-armor-1.jpg", title: "Epic Armor Sets", alt: "NFT Armor Collection" },
    { src: "/nft-artifact-1.jpg", title: "Mystical Artifacts", alt: "NFT Artifact Collection" },
    { src: "/nft-vehicle-1.jpg", title: "Combat Vehicles", alt: "NFT Vehicle Collection" },
    { src: "/nft-pet-1.jpg", title: "Digital Companions", alt: "NFT Pet Collection" },
    { src: "/nft-accessory-1.jpg", title: "Rare Accessories", alt: "NFT Accessory Collection" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="MOKSHA STUDIO Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                loading="eager"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                MOKSHA STUDIO
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
              <a href="#showcase" className="hover:text-cyan-400 transition-colors duration-300">
                Showcase
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Cyberpunk Hero Background" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            MOKSHA STUDIO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium NFT Gaming Assets for the Metaverse
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Creating unique digital collectibles for The Sandbox, Minecraft, and top gaming worlds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Explore Collection
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Geometric Separator */}
      <div className="flex justify-center py-16">
        <Image
          src="/geometric-accent.png"
          alt="Geometric Accent"
          width={200}
          height={50}
          className="opacity-60"
          loading="lazy"
        />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About MOKSHA STUDIO
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  MOKSHA STUDIO is a creative studio that creates unique NFT items for top gaming worlds. We specialize
                  in developing highly detailed weapons, armor, artifacts and rare collectibles that seamlessly
                  integrate into gaming ecosystems of The Sandbox, Minecraft, RPG platforms and other popular
                  metaverses.
                </p>
                <p>
                  Our mission is to combine art, technology and gaming, creating digital assets that are not only
                  visually impressive, but also have value in gaming economies. Each NFT from MOKSHA STUDIO is a
                  thoughtful design, gameplay functionality and rarity confirmed by the blockchain.
                </p>
                <p>
                  We work in premium quality standards, using advanced 3D tools, voxel art and author's styles. Our
                  works are already attracting the attention of collectors, gamers and investors, forming a new culture
                  of digital trophies.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/voxel-studio.png"
                  alt="MOKSHA STUDIO Voxel Art"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl shadow-cyan-500/20"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Separator */}
      <div className="flex justify-center py-16">
        <Image
          src="/geometric-accent.png"
          alt="Geometric Accent"
          width={200}
          height={50}
          className="opacity-60 rotate-180"
          loading="lazy"
        />
      </div>

      {/* NFT Showcase Section */}
      <section id="showcase" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NFT Project Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our premium collection of gaming assets designed for the metaverse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nftAssets.map((asset, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={asset.src || "/placeholder.svg"}
                    alt={asset.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {asset.title}
                  </h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-cyan-500/0 group-hover:ring-cyan-500/30 rounded-xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to bring your gaming vision to life? Let's create something extraordinary together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:mokshastudionft@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    mokshastudionft@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Silicon Beach, Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href="https://x.com/MOKSHA_STUDIO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Twitter</p>
                  <p className="text-cyan-400 group-hover:text-cyan-300 transition-colors">@MOKSHA_STUDIO</p>
                </div>
              </a>

              <a
                href="https://discord.gg/U3Z3Huf5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-gray-400">Discord</p>
                  <p className="text-cyan-400 group-hover:text-cyan-300 transition-colors">Join Community</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="MOKSHA STUDIO Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  loading="lazy"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  MOKSHA STUDIO
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Creating premium NFT gaming assets for the metaverse. Combining art, technology, and gaming.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </a>
                <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About
                </a>
                <a href="#showcase" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Showcase
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/MOKSHA_STUDIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/U3Z3Huf5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 MOKSHA STUDIO. All rights reserved. Creating the future of gaming assets.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
