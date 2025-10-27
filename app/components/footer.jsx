
"use client"

import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <Image src={"/logo.png"} alt="Proyojon.bd" width={500} height={500} />
              </div>
              <span className="font-bold text-lg">Proyojon.bd</span>
            </div>
            <p className="text-background/70 text-sm">Professional moving services in Khulna, Bangladesh</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#home" className="hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-background transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Home Shifting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Office Relocation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Packing Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Transportation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+880 1969-231095" className="hover:text-background transition-colors">
                  +880 1969-231095
                </a>
              </li>
              <li>
                <a href="proyojon0804@gmail.com" className="hover:text-background transition-colors">
                  proyojon0804@gmail.com
                </a>
              </li>
              <li>Khulna, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; {currentYear} Proyojon.bd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
