"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  WorkflowIcon as Wordpress,
  ArrowRight,
  CheckCircle,
  Zap,
  Palette,
  ShoppingCart,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Code,
  Smartphone,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function WordPressDevelopmentPage() {
  const features = [
    {
      icon: Palette,
      title: "Custom Themes",
      description: "Unique, responsive themes tailored to your brand identity",
    },
    {
      icon: Code,
      title: "Plugin Development",
      description: "Custom plugins to extend functionality and meet specific needs",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Integration",
      description: "WooCommerce setup and customization for online stores",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization for better user experience and SEO",
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Advanced security measures to protect your website",
    },
    {
      icon: Search,
      title: "SEO Ready",
      description: "Built-in SEO optimization for better search rankings",
    },
  ]

  const services = [
    {
      title: "Custom WordPress Themes",
      description: "Unique designs that reflect your brand",
      price: "From $1,999",
      features: ["Responsive design", "Custom post types", "Theme customizer", "Cross-browser compatibility"],
    },
    {
      title: "Plugin Development",
      description: "Custom functionality for your specific needs",
      price: "From $999",
      features: ["Custom features", "Admin interfaces", "Database integration", "API connections"],
    },
    {
      title: "WooCommerce Stores",
      description: "Complete e-commerce solutions",
      price: "From $2,999",
      features: ["Product catalog", "Payment gateways", "Inventory management", "Order tracking"],
    },
    {
      title: "WordPress Maintenance",
      description: "Ongoing support and updates",
      price: "From $199/month",
      features: ["Security updates", "Backup management", "Performance monitoring", "Content updates"],
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "User-Friendly",
      description: "Easy content management for non-technical users",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Built-in SEO features for better search visibility",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect display on all devices and screen sizes",
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Faster development and launch times",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Wordpress className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-indigo-100 shadow-sm mb-8">
              <Wordpress className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">WordPress Development Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                WordPress Development
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create powerful, flexible websites with WordPress. From custom themes to complex e-commerce solutions, we
              build WordPress sites that are beautiful, functional, and easy to manage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full px-8 py-4"
              >
                Start Your WordPress Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services/wordpress-development/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 rounded-full px-8 py-4"
                >
                  View WordPress Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">WordPress Development</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WordPress solutions that combine flexibility with powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our WordPress</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple blogs to complex e-commerce sites, we cover all your WordPress needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">{service.price}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              <span className="text-gray-900">Why Choose</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                WordPress
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WordPress powers over 40% of the web for good reasons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your WordPress Site?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's create a powerful WordPress website that grows with your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-indigo-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start Your WordPress Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Get Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
