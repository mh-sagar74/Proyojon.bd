
"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Services from "./components/services"
import WhyChooseUs from "./components/why-choose-us"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
