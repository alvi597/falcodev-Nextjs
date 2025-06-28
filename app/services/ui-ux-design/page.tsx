"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Users,
  Eye,
  Smartphone,
  Monitor,
  Figma,
  Layers,
  Target,
  Zap,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function UIUXDesignPage() {
  const services = [
    {
      icon: Eye,
      title: "User Research",
      description: "Understanding your users through research and analysis",
      features: ["User interviews", "Persona development", "Journey mapping", "Competitive analysis"],
    },
    {
      icon: Layers,
      title: "Wireframing",
      description: "Creating the blueprint for your digital product",
      features: ["Low-fidelity wireframes", "Information architecture", "User flow diagrams", "Prototyping"],
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Beautiful interfaces that align with your brand",
      features: ["UI design systems", "Brand integration", "Icon design", "Visual hierarchy"],
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Mobile-first design for optimal user experience",
      features: ["Responsive design", "Touch interactions", "Mobile patterns", "App design"],
    },
  ]

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding users, business goals, and market landscape",
      icon: Target,
    },
    {
      step: "02",
      title: "Wireframing & Architecture",
      description: "Creating the structural foundation of your product",
      icon: Layers,
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful and functional user interfaces",
      icon: Palette,
    },
    {
      step: "04",
      title: "Prototyping & Testing",
      description: "Building interactive prototypes and validating designs",
      icon: Zap,
    },
  ]

  const designTypes = [
    {
      title: "Website Design",
      description: "Beautiful, conversion-focused website designs",
      price: "From $2,999",
      features: [
        "Homepage design",
        "Landing pages",
        "Responsive layouts",
        "Brand integration",
        "User experience optimization",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Mobile App Design",
      description: "Intuitive mobile app interfaces for iOS and Android",
      price: "From $4,999",
      features: [
        "App screen designs",
        "User flow optimization",
        "Interactive prototypes",
        "Platform-specific guidelines",
        "Usability testing",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Dashboard Design",
      description: "Data-rich dashboards and admin interfaces",
      price: "From $3,999",
      features: [
        "Data visualization",
        "Admin interfaces",
        "Chart and graph design",
        "User role management",
        "Complex workflows",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Design System",
      description: "Comprehensive design systems for consistency",
      price: "From $6,999",
      features: ["Component library", "Style guide", "Design tokens", "Documentation", "Team collaboration"],
      color: "from-green-500 to-blue-500",
    },
  ]

  const tools = [
    { name: "Figma", icon: "🎨", description: "Design and prototyping" },
    { name: "Adobe XD", icon: "🔷", description: "UI/UX design tool" },
    { name: "Sketch", icon: "💎", description: "Vector design tool" },
    { name: "InVision", icon: "🔮", description: "Prototyping platform" },
    { name: "Principle", icon: "⚡", description: "Animation tool" },
    { name: "Framer", icon: "🖼️", description: "Interactive design" },
    { name: "Miro", icon: "🧠", description: "Collaboration board" },
    { name: "Maze", icon: "🔍", description: "User testing" },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Better User Experience",
      description: "Designs that users love and find easy to use",
    },
    {
      icon: Target,
      title: "Higher Conversions",
      description: "Optimized designs that drive business results",
    },
    {
      icon: Heart,
      title: "Brand Consistency",
      description: "Cohesive design language across all touchpoints",
    },
    {
      icon: Zap,
      title: "Faster Development",
      description: "Clear design specifications speed up development",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-pink-100 shadow-sm mb-8">
              <Palette className="h-5 w-5 text-pink-600" />
              <span className="text-sm font-medium text-gray-700">UI/UX Design Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Designs That</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Convert</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create exceptional user experiences that delight your customers and drive business results. From user
              research to visual design, we craft interfaces that are both beautiful and functional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full px-8 py-4"
              >
                Start Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services/ui-ux-design/portfolio">
                <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 rounded-full px-8 py-4">
                  View Design Portfolio
                </Button>
              </Link>
            </div>

            {/* Design Icons */}
            <div className="flex justify-center items-center space-x-8 mt-16">
              <div className="flex items-center space-x-2 text-gray-600">
                <Monitor className="h-8 w-8" />
                <span className="font-medium">Web Design</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Smartphone className="h-8 w-8" />
                <span className="font-medium">Mobile Design</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Figma className="h-8 w-8" />
                <span className="font-medium">Prototyping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our Design</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services that cover every aspect of user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our Design</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Design</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored design solutions for every type of digital product
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designTypes.map((designType, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-gray-900">{designType.title}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${designType.color} text-white`}>{designType.price}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">{designType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {designType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${designType.color} text-white rounded-full`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Design Tools</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                We Master
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading design tools to create exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Why Great Design</span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Matters</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-pink-600 to-rose-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing Designs?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's design user experiences that your customers will love and that drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-pink-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start Design Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Schedule Design Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
