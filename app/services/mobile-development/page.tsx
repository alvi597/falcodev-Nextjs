"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ArrowRight, CheckCircle, Zap, Users, Shield, Globe, Code, Tablet, Monitor } from "lucide-react"
import Link from "next/link"

export default function MobileDevelopmentPage() {
  const platforms = [
    {
      icon: "📱",
      title: "iOS Development",
      description: "Native iOS apps with Swift and Objective-C",
      features: [
        "App Store optimization",
        "iOS-specific features",
        "Performance optimization",
        "Apple guidelines compliance",
      ],
    },
    {
      icon: "🤖",
      title: "Android Development",
      description: "Native Android apps with Kotlin and Java",
      features: ["Google Play optimization", "Material Design", "Android SDK integration", "Multi-device support"],
    },
    {
      icon: "⚛️",
      title: "React Native",
      description: "Cross-platform apps with single codebase",
      features: ["Code reusability", "Faster development", "Native performance", "Hot reloading"],
    },
    {
      icon: "🎯",
      title: "Flutter",
      description: "Beautiful cross-platform apps with Dart",
      features: ["Single codebase", "Custom widgets", "Fast rendering", "Hot reload"],
    },
  ]

  const features = [
    {
      icon: Smartphone,
      title: "Native Performance",
      description: "Optimized for each platform's specific capabilities and performance",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for mobile user behavior",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect user data and privacy",
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Reach both iOS and Android users with efficient development",
    },
    {
      icon: Zap,
      title: "Fast Development",
      description: "Rapid prototyping and development with modern frameworks",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable code following best practices",
    },
  ]

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Mobile shopping experiences with payment integration",
      features: ["Product catalogs", "Secure payments", "Order tracking", "Push notifications"],
      price: "From $8,999",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Social Media Apps",
      description: "Community and social networking applications",
      features: ["User profiles", "Real-time messaging", "Content sharing", "Social features"],
      price: "From $12,999",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Business Apps",
      description: "Enterprise solutions for productivity and management",
      features: ["Dashboard analytics", "Team collaboration", "Data synchronization", "Offline support"],
      price: "From $15,999",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Healthcare Apps",
      description: "Medical and wellness applications with compliance",
      features: ["Patient management", "Appointment booking", "Health tracking", "HIPAA compliance"],
      price: "From $18,999",
      color: "from-red-500 to-pink-500",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define app goals, target audience, and technical requirements",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create wireframes, prototypes, and visual designs",
    },
    {
      step: "03",
      title: "Development",
      description: "Build the app with chosen technology stack",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Quality assurance, app store submission, and deployment",
    },
  ]

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
            <Link href="/">
              <Button
                variant="outline"
                className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-emerald-100 shadow-sm mb-8">
              <Smartphone className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Mobile App Development</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Mobile Apps That</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create engaging mobile experiences for iOS and Android. From native apps to cross-platform solutions, we
              build mobile applications that drive user engagement and business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full px-8 py-4"
              >
                Start Mobile Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services/mobile-development/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 text-emerald-600 rounded-full px-8 py-4"
                >
                  View App Portfolio
                </Button>
              </Link>
            </div>

            {/* Device Mockups */}
            <div className="flex justify-center items-center space-x-8 mt-16">
              <div className="flex items-center space-x-2 text-gray-600">
                <Smartphone className="h-8 w-8" />
                <span className="font-medium">iOS</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Tablet className="h-8 w-8" />
                <span className="font-medium">Android</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Monitor className="h-8 w-8" />
                <span className="font-medium">Cross-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Development</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in all major mobile development platforms and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{platform.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{platform.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg">{platform.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {platform.features.map((feature, idx) => (
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Why Choose Our</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Mobile Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver mobile apps that combine great user experience with powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">App Types We</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Develop
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to healthcare, we build apps for every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((appType, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-gray-900">{appType.title}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${appType.color} text-white`}>{appType.price}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">{appType.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {appType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${appType.color} text-white rounded-full`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our Development</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your mobile app succeeds in the market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-100 hover:shadow-lg transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-emerald-600 to-green-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's create a mobile experience that your users will love and that drives your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start Mobile Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
