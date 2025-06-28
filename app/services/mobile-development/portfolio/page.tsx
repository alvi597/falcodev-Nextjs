"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ArrowRight, Calendar, Users, Apple, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MobileDevelopmentPortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
    {
      title: "FitTracker Pro",
      category: "Health & Fitness",
      description:
        "Comprehensive fitness tracking app with workout plans, nutrition tracking, progress analytics, and social features.",
      image: "/images/mobile-fitness.png",
      platforms: ["iOS", "Android"],
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress analytics",
        "Social challenges",
        "Wearable integration",
        "Offline mode",
      ],
      metrics: {
        downloads: "100K+",
        rating: "4.8/5",
        retention: "75%",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "December 2024",
      client: "FitLife Solutions",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "ShopEasy",
      category: "E-commerce",
      description:
        "Modern shopping app with AR try-on features, personalized recommendations, and seamless checkout experience.",
      image: "/images/mobile-shopping.png",
      platforms: ["iOS", "Android"],
      technologies: ["Flutter", "Dart", "Firebase", "Stripe"],
      features: [
        "AR try-on feature",
        "Personalized recommendations",
        "One-click checkout",
        "Wishlist & favorites",
        "Push notifications",
        "Multi-payment options",
      ],
      metrics: {
        downloads: "250K+",
        rating: "4.7/5",
        conversion: "18%",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "November 2024",
      client: "RetailTech Inc",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "TaskMaster",
      category: "Productivity",
      description:
        "Advanced task management app with team collaboration, time tracking, project management, and analytics dashboard.",
      image: "/images/mobile-productivity.png",
      platforms: ["iOS", "Android", "Web"],
      technologies: ["React Native", "TypeScript", "PostgreSQL", "WebSocket"],
      features: [
        "Task management",
        "Team collaboration",
        "Time tracking",
        "Project templates",
        "Analytics dashboard",
        "Calendar integration",
      ],
      metrics: {
        downloads: "75K+",
        rating: "4.9/5",
        teams: "5K+",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "October 2024",
      client: "ProductivityPro",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "MediCare Connect",
      category: "Healthcare",
      description:
        "Telemedicine app connecting patients with healthcare providers, featuring video consultations and health records.",
      image: "/images/mobile-healthcare.png",
      platforms: ["iOS", "Android"],
      technologies: ["React Native", "WebRTC", "Node.js", "AWS"],
      features: [
        "Video consultations",
        "Health records",
        "Appointment booking",
        "Prescription management",
        "Secure messaging",
        "Insurance integration",
      ],
      metrics: {
        downloads: "50K+",
        rating: "4.6/5",
        consultations: "25K+",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "September 2024",
      client: "HealthTech Solutions",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "EduLearn",
      category: "Education",
      description:
        "Interactive learning platform with video courses, quizzes, progress tracking, and offline content access.",
      image: "/images/mobile-education.png",
      platforms: ["iOS", "Android"],
      technologies: ["Flutter", "Firebase", "Video.js", "SQLite"],
      features: [
        "Video courses",
        "Interactive quizzes",
        "Progress tracking",
        "Offline access",
        "Discussion forums",
        "Certificate generation",
      ],
      metrics: {
        downloads: "150K+",
        rating: "4.8/5",
        completion: "82%",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "August 2024",
      client: "EduTech Academy",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "CryptoWallet Pro",
      category: "Finance",
      description:
        "Secure cryptocurrency wallet with multi-currency support, trading features, and portfolio management.",
      image: "/images/mobile-crypto.png",
      platforms: ["iOS", "Android"],
      technologies: ["React Native", "Blockchain APIs", "Biometric Auth", "Redux"],
      features: [
        "Multi-currency wallet",
        "Trading interface",
        "Portfolio tracking",
        "Biometric security",
        "Price alerts",
        "Transaction history",
      ],
      metrics: {
        downloads: "80K+",
        rating: "4.5/5",
        volume: "$10M+",
      },
      appStoreUrl: "#",
      playStoreUrl: "#",
      completedDate: "July 2024",
      client: "CryptoTech Ltd",
      color: "from-yellow-500 to-orange-500",
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
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/services/mobile-development">
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full"
                >
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
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-emerald-100 shadow-sm mb-8">
              <Smartphone className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Mobile App Development Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Mobile Apps That</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our collection of innovative mobile applications across various industries, from fitness and
              e-commerce to healthcare and education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full px-8 py-4"
              >
                Start Mobile Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-600 rounded-full px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Mobile Apps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our innovative mobile applications that deliver exceptional user experiences across iOS and
              Android platforms.
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
                          <div className="absolute top-6 right-6 flex space-x-2">
                            {project.platforms.map((platform, idx) => (
                              <div
                                key={idx}
                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                              >
                                {platform === "iOS" ? (
                                  <Apple className="h-6 w-6 text-gray-700" />
                                ) : platform === "Android" ? (
                                  <Play className="h-6 w-6 text-green-600" />
                                ) : (
                                  <Smartphone className="h-6 w-6 text-blue-600" />
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="absolute bottom-6 right-6">
                            <div className="flex space-x-2">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                                <Apple className="h-5 w-5 text-gray-700" />
                              </div>
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer">
                                <Play className="h-5 w-5 text-green-600" />
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
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="bg-gray-50 text-gray-700 border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 transition-colors px-3 py-1"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Key Features */}
                            <div className="mb-8">
                              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                                Key Features
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                                App Performance
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
                                <Apple className="mr-2 h-5 w-5" />
                                App Store
                              </Button>
                              <Button
                                variant="outline"
                                className="border-2 border-gray-200 text-gray-700 rounded-2xl flex-1 h-12 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                              >
                                <Play className="mr-2 h-5 w-5" />
                                Google Play
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
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 w-8"
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
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
        <div className="container mx-auto relative">
          <Card className="bg-gradient-to-br from-emerald-600 to-green-600 text-white border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-green-600/90"></div>
            <CardContent className="p-12 lg:p-16 text-center relative">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
                <p className="text-xl mb-10 opacity-90 leading-relaxed">
                  Let's create a mobile experience that your users will love and that drives your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-emerald-600 hover:bg-gray-100 rounded-2xl px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start Mobile Project
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
