"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Package,
  BarChart3,
  Shield,
  Globe,
  Smartphone,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function EcommerceSolutionsPage() {
  const platforms = [
    {
      icon: "🛍️",
      title: "Shopify Development",
      description: "Custom Shopify stores with advanced functionality",
      features: ["Custom themes", "App integrations", "Payment setup", "SEO optimization"],
    },
    {
      icon: "🔧",
      title: "WooCommerce",
      description: "WordPress-based e-commerce solutions",
      features: ["Custom plugins", "Payment gateways", "Inventory management", "Multi-vendor support"],
    },
    {
      icon: "⚡",
      title: "Custom E-commerce",
      description: "Bespoke e-commerce platforms built from scratch",
      features: ["Scalable architecture", "Custom features", "API integrations", "Advanced analytics"],
    },
    {
      icon: "📱",
      title: "Mobile Commerce",
      description: "Mobile-first e-commerce applications",
      features: ["Native mobile apps", "Progressive web apps", "Mobile payments", "Push notifications"],
    },
  ]

  const features = [
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment gateways with PCI compliance and fraud protection",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with automated stock management",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive sales analytics and business intelligence dashboards",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SSL, PCI DSS compliance",
    },
    {
      icon: Globe,
      title: "Multi-Channel Selling",
      description: "Sell across multiple platforms and marketplaces seamlessly",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive design optimized for mobile shopping experience",
    },
  ]

  const solutions = [
    {
      title: "Shopify Store Setup",
      description: "Complete Shopify store with custom design and functionality",
      price: "From $3,999",
      features: [
        "Custom theme development",
        "Product catalog setup",
        "Payment gateway integration",
        "SEO optimization",
        "Mobile responsive design",
        "Basic analytics setup",
      ],
      color: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      title: "WooCommerce Solution",
      description: "WordPress-based e-commerce with advanced features",
      price: "From $5,999",
      features: [
        "Custom WooCommerce development",
        "Advanced product variations",
        "Multi-vendor marketplace",
        "Subscription management",
        "Advanced shipping options",
        "Custom reporting dashboard",
        "Third-party integrations",
      ],
      color: "from-blue-500 to-purple-500",
      popular: true,
    },
    {
      title: "Enterprise E-commerce",
      description: "Custom-built e-commerce platform for large businesses",
      price: "From $25,999",
      features: [
        "Custom platform development",
        "Scalable architecture",
        "Advanced B2B features",
        "ERP/CRM integrations",
        "Multi-language support",
        "Advanced analytics",
        "24/7 support",
        "Performance optimization",
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
  ]

  const integrations = [
    { name: "Stripe", icon: "💳", description: "Payment processing" },
    { name: "PayPal", icon: "🅿️", description: "Global payments" },
    { name: "Mailchimp", icon: "📧", description: "Email marketing" },
    { name: "Google Analytics", icon: "📊", description: "Web analytics" },
    { name: "Facebook Pixel", icon: "📘", description: "Social advertising" },
    { name: "Klaviyo", icon: "📨", description: "Email automation" },
    { name: "Zendesk", icon: "🎧", description: "Customer support" },
    { name: "ShipStation", icon: "📦", description: "Shipping management" },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Sales",
      description: "Optimized checkout process and user experience to boost conversions",
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Intuitive navigation and personalized shopping experiences",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed to reduce bounce rates and improve SEO",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics to understand customer behavior",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-orange-100 shadow-sm mb-8">
              <ShoppingCart className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">E-commerce Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">E-commerce That</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Converts
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build powerful online stores that drive sales and grow your business. From Shopify to custom solutions, we
              create e-commerce experiences that customers love and that convert visitors into buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-8 py-4"
              >
                Start Your Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 rounded-full px-8 py-4">
                View E-commerce Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">E-commerce</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major e-commerce platforms to build the perfect solution for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group"
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">E-commerce</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive e-commerce features that drive sales and improve customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">E-commerce</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect e-commerce solution for your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`relative bg-white border-2 ${solution.popular ? "border-orange-200 shadow-xl scale-105" : "border-gray-100"} hover:shadow-lg transition-all`}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{solution.title}</CardTitle>
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent my-4`}
                  >
                    {solution.price}
                  </div>
                  <CardDescription className="text-gray-600">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${solution.color} text-white rounded-full py-3`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Powerful</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Connect your store with the tools you already use</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{integration.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.description}</p>
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
              <span className="text-gray-900">Why Choose Our</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                E-commerce Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's build an e-commerce solution that drives sales and grows your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start Your E-commerce Project
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
