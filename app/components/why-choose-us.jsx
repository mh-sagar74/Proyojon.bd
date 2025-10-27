
"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Award, Users, Zap, Truck } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Award,
    title: "Experienced Team",
    description: "Over 10 years of professional moving experience in Khulna",
  },
  {
    icon: Users,
    title: "Trusted by Hundreds",
    description: "Thousands of satisfied customers who trust us with their moves",
  },
  {
    icon: Zap,
    title: "Quick & Efficient",
    description: "Fast, professional service without compromising on quality",
  },
  {
    icon: CheckCircle2,
    title: "Fully Insured",
    description: "Complete insurance coverage for all your belongings",
  },
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
      id="why-us"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Proyojon.bd</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              We understand that moving is more than just transporting items. It's about trust, reliability, and peace
              of mind. That's why we go the extra mile for every customer.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon size={24} className="text-primary" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Truck className="w-24 h-24 text-primary/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Professional Moving Services</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
