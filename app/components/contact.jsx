"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get Your Free Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today and let&apos;s discuss your moving needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+880 1969-231095",
                href: "tel:+880 1969-231095",
              },
              {
                icon: Mail,
                title: "Email",
                content: "proyojon0804@gmail.com",
                href: "mailto:proyojon0804@gmail.com",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Khulna, Bangladesh",
                href: "#",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group flex items-center p-5 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 shadow-md hover:shadow-xl hover:border-primary/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={24} className="text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{item.content}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.textarea
                name="message"
                placeholder="Tell us about your moving needs..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <motion.div whileHover={{ x: 3 }}>
                  <Send size={20} />
                </motion.div>
              </motion.button>

              {submitted && (
                <motion.div
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thank you! We&apos;ll contact you soon.
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
