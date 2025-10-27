
"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Building2, Package, Truck } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Home,
    title: "Home Shifting",
    description: "Complete residential moving solutions with careful handling of your household items and furniture.",
    features: ["Packing & Unpacking", "Safe Transport", "Insurance Coverage"],
  },
  {
    icon: Building2,
    title: "Office Relocation",
    description: "Professional office moving services ensuring minimal downtime for your business operations.",
    features: ["Equipment Moving", "Quick Setup", "Minimal Disruption"],
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Expert packing using quality materials to ensure your belongings arrive safely.",
    features: ["Quality Materials", "Professional Packing", "Secure Wrapping"],
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Modern fleet of vehicles equipped to handle moves of any size with care and efficiency.",
    features: ["Modern Fleet", "GPS Tracking", "Timely Delivery"],
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(services.map(() => true))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive moving solutions tailored to your needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-6 inline-block p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  <Icon size={32} className="text-primary group-hover:text-accent transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
