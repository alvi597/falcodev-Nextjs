"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, ArrowRight, Github, Globe, Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function WebDevelopmentPortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description:
        "Modern e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "/images/web-dev-ecommerce.png",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Advanced search & filtering",
        "Payment gateway integration",
        "Admin dashboard",
        "Mobile responsive design",
      ],
      metrics: {
        users: "10K+",
        conversion: "15%",
        performance: "98/100",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "December 2024",
      client: "TechMart Solutions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Healthcare Management System",
      category: "Web Application",
      description:
        "Comprehensive healthcare management system for hospitals and clinics with patient records, appointment scheduling, and billing.",
      image: "/images/web-dev-healthcare.png",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "AWS"],
      features: [
        "Patient management system",
        "Appointment scheduling",
        "Electronic health records",
        "Billing & insurance",
        "Doctor-patient portal",
        "HIPAA compliant",
      ],
      metrics: {
        users: "5K+",
        uptime: "99.9%",
        performance: "95/100",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "November 2024",
      client: "MediCare Plus",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Real Estate Platform",
      category: "Property Management",
      description:
        "Advanced real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      image: "/images/web-dev-realestate.png",
      technologies: ["Next.js", "React", "Node.js", "MySQL", "Cloudinary"],
      features: [
        "Property search & filters",
        "Virtual tour integration",
        "Mortgage calculator",
        "Agent dashboard",
        "Lead management",
        "Map integration",
      ],
      metrics: {
        listings: "50K+",
        agents: "500+",
        performance: "96/100",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "October 2024",
      client: "PropertyHub Inc",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Learning Management System",
      category: "Educational Platform",
      description:
        "Complete LMS with course creation, student progress tracking, video streaming, and certification management.",
      image: "/images/web-dev-lms.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      features: [
        "Course creation tools",
        "Video streaming",
        "Progress tracking",
        "Quiz & assessments",
        "Certificate generation",
        "Discussion forums",
      ],
      metrics: {
        students: "25K+",
        courses: "1K+",
        completion: "85%",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "September 2024",
      client: "EduTech Academy",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Financial Dashboard",
      category: "FinTech Application",
      description:
        "Advanced financial dashboard with portfolio management, real-time market data, and investment tracking.",
      image: "/images/web-dev-finance.png",
      technologies: ["React", "D3.js", "Node.js", "Redis", "WebSocket"],
      features: [
        "Portfolio management",
        "Real-time market data",
        "Investment tracking",
        "Risk analysis",
        "Custom alerts",
        "Advanced charts",
      ],
      metrics: {
        users: "15K+",
        transactions: "1M+",
        uptime: "99.8%",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "August 2024",
      client: "InvestPro",
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Social Media Analytics",
      category: "Analytics Platform",
      description:
        "Comprehensive social media analytics platform with multi-platform integration and advanced reporting.",
      image: "/images/web-dev-analytics.png",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js"],
      features: [
        "Multi-platform integration",
        "Advanced analytics",
        "Custom reports",
        "Competitor analysis",
        "Automated posting",
        "Team collaboration",
      ],
      metrics: {
        accounts: "100K+",
        reports: "50K+",
        accuracy: "98%",
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "July 2024",
      client: "SocialMetrics",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/services/web-development">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-full">
                  Back to Service
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full">
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-blue-100 shadow-sm mb-8">
              <Code className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Web Development Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Our Web Development</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of custom web applications, e-commerce platforms, and enterprise solutions that have
              helped businesses achieve their digital goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full px-8 py-4"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 rounded-full px-8 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest web development projects that showcase innovation, functionality, and exceptional user
              experience.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-white border-0 shadow-lg mx-4 rounded-3xl overflow-hidden">
                      <div className="grid lg:grid-cols-5 gap-0">
                        {/* Project Image */}
                        <div className="lg:col-span-2 relative overflow-hidden">
                          <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="absolute top-6 left-6">
                            <Badge
                              className={`bg-gradient-to-r ${project.color} text-white border-0 px-4 py-2 text-sm font-medium shadow-lg`}
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-6 right-6">
                            <div className="flex space-x-2">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                                <Globe className="h-5 w-5 text-gray-700" />
                              </div>
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                                <Github className="h-5 w-5 text-gray-700" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="lg:col-span-3 p-8 lg:p-12">
                          <div className="h-full flex flex-col">
                            <div className="mb-8">
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{project.completedDate}</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center space-x-2">
                                  <Users className="h-4 w-4" />
                                  <span>{project.client}</span>
                                </div>
                              </div>

                              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>
                              <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors px-3 py-1"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div className="mb-8">
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                                Key Features
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Metrics */}
                            <div className="mb-8">
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                                Project Impact
                              </h4>
                              <div className="grid grid-cols-3 gap-6">
                                {Object.entries(project.metrics).map(([key, value], idx) => (
                                  <div
                                    key={idx}
                                    className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
                                  >
                                    <div
                                      className={`text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}
                                    >
                                      {value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                              <Button
                                className={`bg-gradient-to-r ${project.color} text-white rounded-2xl flex-1 h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                              >
                                <Globe className="mr-2 h-5 w-5" />
                                View Live Site
                              </Button>
                              <Button
                                variant="outline"
                                className="border-2 border-gray-200 text-gray-700 rounded-2xl flex-1 h-12 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                              >
                                <Github className="mr-2 h-5 w-5" />
                                View Source Code
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">
                {currentSlide + 1} of {projects.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
        <div className="container mx-auto relative">
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
            <CardContent className="p-12 lg:p-16 text-center relative">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Your Next Project?</h2>
                <p className="text-xl mb-10 opacity-90 leading-relaxed">
                  Let's create a custom web solution that drives your business forward and delivers exceptional results
                  for your users.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 rounded-2xl px-8 py-4 font-medium backdrop-blur-sm transition-all duration-300"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
