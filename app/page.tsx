"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Palette,
  TrendingUp,
  Search,
  Star,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Zap,
  Rocket,
  Users,
  Eye,
  Heart,
  Sparkles,
  Globe,
  Shield,
  Clock,
  WorkflowIcon as Wordpress,
  Brain,
  Smartphone,
  ShoppingCart,
} from "lucide-react"
import Link from "next/link"

export default function FalcoDevHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      slug: "web-development",
    },
    {
      icon: Wordpress,
      title: "WordPress Development",
      description: "Professional WordPress websites with custom themes and powerful functionality",
      features: ["Custom Themes", "Plugin Development", "E-commerce Integration", "Performance Optimization"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      slug: "wordpress-development",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered applications for modern businesses",
      features: ["Machine Learning", "Chatbots & Automation", "Data Analytics", "AI Integration"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      slug: "ai-solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      slug: "mobile-development",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Shopify Development", "WooCommerce", "Payment Integration", "Inventory Systems"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      slug: "ecommerce-solutions",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver measurable results",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "Analytics & Reporting"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      slug: "digital-marketing",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic growth",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      slug: "seo-optimization",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      slug: "ui-ux-design",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      text: "FalcoDev transformed our online presence completely. Their web development and SEO services increased our traffic by 300%.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Marketing Director",
      text: "The team's marketing expertise helped us achieve a 250% ROI on our digital campaigns. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Design Studio",
      role: "Creative Director",
      text: "Outstanding design work and attention to detail. They delivered exactly what we envisioned and more.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const team = [
    {
      name: "Muhammad Hasnain Muawia",
      role: "Founder & CEO",
      bio: "Full-stack developer with 6+ years of experience in building scalable web applications.",
      avatar: "/placeholder.svg?height=120&width=120",
      skills: ["React", "Node.js", "Next.js", "Python", "AWS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Muhamamd Bilal",
      role: "Co-Founder & COO",
      bio: "Creative Lead Expert specializing in user experience and brand identity with 6+ years of experience.",
      avatar: "/placeholder.svg?height=120&width=120",
      skills: ["Figma", "Adobe Suite", "UI/UX", "Branding", "Prototyping", "Wordpress Designing"],
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Shahmer Abbas Khan",
      role: "App Developer",
      bio: "Digital marketing expert with proven track record of growing businesses online.",
      avatar: "/placeholder.svg?height=120&width=120",
      skills: ["SEO", "PPC", "Analytics", "Content"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Rana Ahmad",
      role: "Project Manager",
      bio: "Experienced project manager ensuring smooth delivery and client satisfaction.",
      avatar: "/placeholder.svg?height=120&width=120",
      skills: ["Agile", "Scrum", "Communication", "Leadership"],
      color: "from-purple-500 to-violet-500",
    },
  ]

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Modern e-commerce solution with payment integration",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Brand Identity Design",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity for a tech startup",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "SEO Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "300% increase in organic traffic for local business",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile App UI",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "User-friendly mobile application interface",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional corporate website with CMS",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Social Media Campaign",
      category: "Marketing",
      image: "/placeholder.svg?height=300&width=400",
      description: "Viral social media campaign with 2M+ reach",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupHub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DesignStudio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "E-Commerce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FinanceApp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HealthTech", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const faqs = [
    {
      question: "What services does FalcoDev offer?",
      answer:
        "We offer comprehensive digital services including web development, WordPress development, AI solutions, mobile development, e-commerce solutions, UI/UX design, digital marketing, and SEO optimization. Our team specializes in creating custom solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications or AI solutions can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your website or application continues to perform optimally. This includes security updates, bug fixes, feature enhancements, and technical support.",
    },
    {
      question: "Can you help with AI integration for existing businesses?",
      answer:
        "We specialize in integrating AI solutions into existing business processes. Whether it's chatbots, automation, data analytics, or machine learning models, we can help modernize your operations with AI technology.",
    },
    {
      question: "Do you work with WordPress and other CMS platforms?",
      answer:
        "Yes, we're experts in WordPress development, including custom themes, plugins, and e-commerce integration. We also work with other CMS platforms and can recommend the best solution for your specific needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-60 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full opacity-60 animate-pulse delay-3000"></div>

        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>

        {/* Mouse Follower */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <Sparkles className="h-2 w-2 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="#team" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Team
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded-full px-6"
              >
                Get Quote
              </Button>
              <Link href="/start-project">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                  Start Project
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="#home" className="text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="#about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
                <Link href="#services" className="text-gray-600 hover:text-blue-600">
                  Services
                </Link>
                <Link href="#portfolio" className="text-gray-600 hover:text-blue-600">
                  Portfolio
                </Link>
                <Link href="#team" className="text-gray-600 hover:text-blue-600">
                  Team
                </Link>
                <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-blue-200 text-blue-600 rounded-full">
                    Get Quote
                  </Button>
                  <Link href="/start-project">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                      Start Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 min-h-screen flex items-center relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 border border-blue-100">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Digital Innovation Experts</span>
                  <Sparkles className="h-4 w-4 text-purple-600" />
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Crafting</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Digital Magic
                  </span>
                  <br />
                  <span className="text-gray-700">for Your Business</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  We transform ideas into stunning digital experiences through innovative web development, AI solutions,
                  WordPress expertise, strategic marketing, and beautiful design that drives real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/start-project">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all group"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-full group"
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Our Work
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">75+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-gray-600 font-medium">Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Illustration Container */}
                <div className="w-full max-w-lg mx-auto relative">
                  {/* Central Circle */}
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border-4 border-white shadow-2xl mx-auto relative">
                    {/* Developer Avatar */}
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Code className="h-16 w-16 text-white" />
                    </div>

                    {/* Floating Service Icons */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-blue-100 animate-bounce">
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-green-100 animate-bounce delay-500">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-pink-100 animate-bounce delay-1000">
                      <Palette className="h-8 w-8 text-pink-600" />
                    </div>
                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-purple-100 animate-bounce delay-1500">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl opacity-60 rotate-12"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl opacity-60 -rotate-12"></div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl opacity-60 rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">About Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Passionate About</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a creative team of innovators, designers, and strategists who believe in the power of digital
              transformation to change businesses and lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  At FalcoDev, we don't just build websites and campaigns – we craft digital experiences that inspire,
                  engage, and convert. Our mission is to empower businesses with innovative solutions that drive growth
                  and create lasting impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white border-2 border-blue-100 hover:border-blue-200 transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-gray-600 font-medium">Years Innovation</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-green-100 hover:border-green-200 transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-gray-600 font-medium">Client Success</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Choose FalcoDev?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Expert Team</h4>
                    <p className="text-gray-600">Skilled professionals with years of industry experience and passion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored approaches designed specifically for your business goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Ongoing Support</h4>
                    <p className="text-gray-600">Continuous support and maintenance for long-term success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Results-Driven</h4>
                    <p className="text-gray-600">Focus on delivering measurable outcomes and business growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 border border-blue-100 mb-6">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Services That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand and accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`${service.bgColor} border-2 ${service.borderColor} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              >
                <CardHeader className="relative pb-4">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all rounded-full`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <Eye className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Portfolio of</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our best work and the incredible results we've achieved for our clients
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12 bg-white border border-gray-200 rounded-full p-1">
              <TabsTrigger value="all" className="rounded-full">
                All
              </TabsTrigger>
              <TabsTrigger value="web" className="rounded-full">
                Web Dev
              </TabsTrigger>
              <TabsTrigger value="design" className="rounded-full">
                Design
              </TabsTrigger>
              <TabsTrigger value="marketing" className="rounded-full">
                Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-200 hover:border-gray-300 rounded-full group"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-6 py-3 border border-green-100 mb-6">
              <Users className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Meet the Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Creative Minds</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Behind the Magic
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the talented individuals who bring passion, creativity, and expertise to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group text-center rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${member.color} text-white text-xl`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 border border-gray-200 rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Trusted Partners</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Loved by</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Amazing Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600">Companies that trust us with their digital transformation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all group p-6 rounded-2xl"
              >
                <div className="flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full px-6 py-3 border border-yellow-100 mb-6">
              <Star className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">Client Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">What Our</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from satisfied clients who achieved amazing results</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-100 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl text-gray-800 mb-8 italic font-light leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-6">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                    <AvatarImage src={testimonials[activeTestimonial].avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white text-xl">
                      {testimonials[activeTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-xl">{testimonials[activeTestimonial].name}</div>
                    <div className="text-yellow-600 font-semibold">{testimonials[activeTestimonial].role}</div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Got Questions?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about working with FalcoDev</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-2 border-gray-100 hover:border-gray-200 rounded-2xl">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-6 py-3 border border-purple-100 mb-6">
              <Mail className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Ready to Start</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-600">Let's discuss how we can bring your vision to life</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-lg">Email Us</div>
                      <div className="text-gray-600 text-lg">Contact@falcodev.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-lg">Call Us</div>
                      <div className="text-gray-600 text-lg">+92-349-2104868</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-lg">Visit Us</div>
                      <div className="text-gray-600 text-lg">Bhakkar , Punjab , Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: "from-blue-500 to-blue-600" },
                    { icon: Twitter, color: "from-sky-500 to-sky-600" },
                    { icon: Instagram, color: "from-pink-500 to-rose-500" },
                    { icon: Linkedin, color: "from-blue-600 to-blue-700" },
                    { icon: Github, color: "from-gray-700 to-gray-800" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                    >
                      <social.icon className="h-6 w-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-100 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-bold mb-3">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-bold mb-3">Service Needed</label>
                    <select className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none transition-colors">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="wordpress-development">WordPress Development</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="ecommerce-solutions">E-commerce Solutions</option>
                      <option value="design">UI/UX Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="seo">SEO Optimization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-900 font-bold mb-3">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FalcoDev</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Crafting digital experiences that inspire, engage, and convert. Your trusted partner in digital
                transformation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, color: "hover:text-blue-400" },
                  { icon: Twitter, color: "hover:text-sky-400" },
                  { icon: Instagram, color: "hover:text-pink-400" },
                  { icon: Linkedin, color: "hover:text-blue-400" },
                ].map((social, index) => (
                  <a key={index} href="#" className={`text-gray-400 ${social.color} transition-colors`}>
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WordPress Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Contact Info</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact@falcodev.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+92-349-2104868</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bhakkar , Punjab , Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2025 FalcoDev. All rights reserved. Developed By Hasnain with{" "}
              <Heart className="inline h-5 w-5 text-red-500" /> for digital excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
