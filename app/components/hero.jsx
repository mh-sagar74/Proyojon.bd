
"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background with Framer Motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-accent font-semibold text-sm">Professional Moving Services</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Your Trusted Moving Partner in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Khulna</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Professional office and home shifting services with experienced team, modern equipment, and commitment to
            safe, timely delivery of your belongings.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <motion.div whileHover={{ x: 5 }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>
            <motion.a
              href="#services"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1000+", label: "Moves Completed" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
