"use client";


import Image from "next/image";
import type React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Code, Laptop, Zap, Users, MessageSquare } from "lucide-react";

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`text-[#1a3a1a] hover:text-[#ff4d2e] transition-colors ${
        isActive ? "font-semibold text-[#ff4d2e]" : ""
      }`}
    >
      {children}
    </Link>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
  inView,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#1a3a1a] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function PortfolioCard({
  image,
  title,
  category,
  delay,
  inView,
}: {
  image: string
  title: string
  category: string
  delay: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href="#"
            className="bg-[#ff4d2e] hover:bg-[#e63e20] text-white font-medium py-2 px-6 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="p-4 bg-white">
        <span className="text-sm text-[#ff4d2e] font-medium">{category}</span>
        <h3 className="text-lg font-bold text-[#1a3a1a] mt-1">{title}</h3>
      </div>
    </motion.div>
  )
}

function DevAnimation() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Image
          src="/dev-character.png"
          alt="Developer with watermelon"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute top-[30%] right-[20%] text-[#1a3a1a] opacity-70"
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-2xl font-mono">010</div>
        <div className="text-2xl font-mono">110</div>
      </motion.div>

      <motion.div
        className="absolute top-[40%] left-[10%] text-[#1a3a1a] opacity-70"
        animate={{
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <div className="text-3xl font-mono">&lt;/&gt;</div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[20%] text-[#1a3a1a] opacity-70"
        animate={{
          y: [0, 5, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <div className="text-2xl font-mono">{"{}"}</div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])

  const [homeRef, homeInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div className="bg-[#f9ecd9] min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9ecd9]/80 backdrop-blur-md border-b border-[#1a3a1a]/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="#home" className="text-[#1a3a1a] font-bold text-2xl flex items-center">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <span className="text-[#1a3a1a]">dot</span>
              <motion.span
                initial={{ color: "#1a3a1a" }}
                animate={{
                  color: ["#1a3a1a", "#ff4d2e", "#1a3a1a"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Melon
              </motion.span>
              <motion.div
                className="absolute -top-1 -right-3 text-lg"
                animate={{
                  rotate: [0, 10, 0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
              </motion.div>
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" isActive={homeInView}>
              Home
            </NavLink>
            <NavLink href="#features" isActive={featuresInView}>
              Features
            </NavLink>
            <NavLink href="#about" isActive={aboutInView}>
              About
            </NavLink>
            <NavLink href="#portfolio" isActive={portfolioInView}>
              Portfolio
            </NavLink>
            <NavLink href="#contact" isActive={contactInView}>
              Contact Us
            </NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#1a3a1a] hover:text-[#ff4d2e] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#1a3a1a] flex items-center justify-center text-white text-xs">
                P
              </div>
            </Link>
            <Link href="#" className="text-[#1a3a1a] hover:text-[#ff4d2e] transition-colors">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.09.682-.217.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
            </Link>
          </div>
          <button className="md:hidden text-[#1a3a1a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" ref={homeRef} className="min-h-screen pt-24 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-[#1a3a1a] mb-4 leading-tight">
                    Juicy Meets <br /> Genius{" "}
                    <motion.span
                      animate={{
                        rotate: [0, 10, 0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                      className="inline-block"
                    >
                      🍉
                    </motion.span>
                  </h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-700 mb-6 max-w-md"
                >
                  DotMelon helps you launch websites and AI services without the hassle
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-gray-700 mb-8 max-w-md"
                >
                  You bring the vision. Biglu brings the watermelon. We bring the team that makes it all happen — fast,
                  friendly, and with zero code headaches.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="bg-[#ff4d2e] hover:bg-[#e63e20] text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Connect With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <DevAnimation />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="flex flex-col space-y-4">
              <Link
                href="#home"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${homeInView ? "bg-[#ff4d2e] scale-125" : "bg-gray-400"}`}
              ></Link>
              <Link
                href="#features"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${featuresInView ? "bg-[#ff4d2e] scale-125" : "bg-gray-400"}`}
              ></Link>
              <Link
                href="#about"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${aboutInView ? "bg-[#ff4d2e] scale-125" : "bg-gray-400"}`}
              ></Link>
              <Link
                href="#portfolio"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${portfolioInView ? "bg-[#ff4d2e] scale-125" : "bg-gray-400"}`}
              ></Link>
              <Link
                href="#contact"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${contactInView ? "bg-[#ff4d2e] scale-125" : "bg-gray-400"}`}
              ></Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1a3a1a] mb-4">Our Features</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We provide cutting-edge solutions to help your business grow and succeed in the digital landscape.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="h-10 w-10 text-[#ff4d2e]" />}
                title="Custom Web Development"
                description="We build beautiful, responsive websites tailored to your specific needs and brand identity."
                delay={0}
                inView={featuresInView}
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#ff4d2e]" />}
                title="AI Integration"
                description="Leverage the power of artificial intelligence to automate processes and enhance user experience."
                delay={0.2}
                inView={featuresInView}
              />
              <FeatureCard
                icon={<Laptop className="h-10 w-10 text-[#ff4d2e]" />}
                title="Mobile Applications"
                description="Create stunning mobile apps that work seamlessly across all devices and platforms."
                delay={0.4}
                inView={featuresInView}
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-[#ff4d2e]" />}
                title="Team Collaboration"
                description="Our experienced team works closely with you to ensure your vision becomes reality."
                delay={0.6}
                inView={featuresInView}
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-[#ff4d2e]" />}
                title="24/7 Support"
                description="We're always here to help with any issues or questions you might have about your project."
                delay={0.8}
                inView={featuresInView}
              />
              <FeatureCard
                icon={
                  <svg
                    className="h-10 w-10 text-[#ff4d2e]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 12H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Scalable Solutions"
                description="Our solutions grow with your business, ensuring long-term success and adaptability."
                delay={1}
                inView={featuresInView}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="min-h-screen py-20 bg-[#f0e3c9]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="About DotMelon"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12"
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-[#1a3a1a] mb-6">About DotMelon</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2020, DotMelon has quickly established itself as a leader in web development and AI
                  integration services. Our mission is to make technology accessible and effective for businesses of all
                  sizes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe in creating solutions that are not only visually stunning but also functionally powerful.
                  Our team of experts combines creativity with technical expertise to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  At DotMelon, we're passionate about helping businesses thrive in the digital world. We're committed to
                  innovation, quality, and customer satisfaction.
                </p>
                <Link
                  href="#contact"
                  className="bg-[#1a3a1a] hover:bg-[#2a4a2a] text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" ref={portfolioRef} className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1a3a1a] mb-4">Our Portfolio</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Check out some of our recent projects and see how we've helped businesses achieve their goals.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="E-commerce Platform"
                category="Web Development"
                delay={0}
                inView={portfolioInView}
              />
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="AI Chatbot"
                category="Artificial Intelligence"
                delay={0.2}
                inView={portfolioInView}
              />
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="Mobile Banking App"
                category="Mobile Development"
                delay={0.4}
                inView={portfolioInView}
              />
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="Healthcare Dashboard"
                category="UI/UX Design"
                delay={0.6}
                inView={portfolioInView}
              />
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="Real Estate Platform"
                category="Web Development"
                delay={0.8}
                inView={portfolioInView}
              />
              <PortfolioCard
                image="/placeholder.svg?height=300&width=400"
                title="Educational App"
                category="Mobile Development"
                delay={1}
                inView={portfolioInView}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center mt-12"
            >
              <Link
                href="#contact"
                className="bg-[#ff4d2e] hover:bg-[#e63e20] text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="min-h-screen py-20 bg-[#f0e3c9]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1a3a1a] mb-4">Contact Us</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Ready to start your project? Get in touch with us today and let's create something amazing together.
              </p>
            </motion.div>
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff4d2e] focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ff4d2e] hover:bg-[#e63e20] text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-8"
                initial={{ opacity: 0, x: 50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-[#1a3a1a] mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-[#ff4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-[#1a3a1a]">Address</h4>
                        <p className="text-gray-600 mt-1">Horamavu,Bangalore,India</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-[#ff4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-[#1a3a1a]">Email</h4>
                        <p className="text-gray-600 mt-1">info@dotmelon.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-6 w-6 text-[#ff4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                         <svg className="h-6 w-6 text-[#ff4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth={2}
                             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                         </svg>
                       </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-[#1a3a1a]">Business Hours</h4>
                        <p className="text-gray-600 mt-1">Monday - Friday: 9am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
