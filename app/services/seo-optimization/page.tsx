"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  Users,
  Award,
  Eye,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function SEOOptimizationPage() {
  const seoServices = [
    {
      icon: Target,
      title: "Keyword Research",
      description: "Strategic keyword analysis to target the right audience",
      features: ["Competitor analysis", "Search volume research", "Long-tail keywords", "Keyword mapping"],
    },
    {
      icon: Zap,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation",
      features: ["Site speed optimization", "Mobile optimization", "Schema markup", "XML sitemaps"],
    },
    {
      icon: Globe,
      title: "On-Page SEO",
      description: "Optimize individual pages for better rankings",
      features: ["Content optimization", "Meta tags", "Internal linking", "URL structure"],
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results in your area",
      features: ["Google My Business", "Local citations", "Review management", "Local content"],
    },
  ]

  const seoPackages = [
    {
      name: "SEO Starter",
      price: "$999/month",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword research (20 keywords)",
        "On-page optimization",
        "Technical SEO audit",
        "Monthly reporting",
        "Google Analytics setup",
        "Basic link building",
      ],
      color: "from-purple-500 to-violet-500",
      popular: false,
    },
    {
      name: "SEO Professional",
      price: "$1,999/month",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Keyword research (50 keywords)",
        "Advanced on-page optimization",
        "Technical SEO implementation",
        "Content strategy",
        "Link building campaign",
        "Local SEO optimization",
        "Bi-weekly reporting",
        "Competitor analysis",
      ],
      color: "from-blue-500 to-purple-500",
      popular: true,
    },
    {
      name: "SEO Enterprise",
      price: "$3,999/month",
      description: "Advanced SEO for large businesses and e-commerce",
      features: [
        "Unlimited keyword research",
        "Enterprise-level optimization",
        "Advanced technical SEO",
        "Content marketing strategy",
        "Authority link building",
        "Multi-location SEO",
        "Weekly reporting",
        "Dedicated SEO manager",
        "Custom SEO tools",
      ],
      color: "from-green-500 to-blue-500",
      popular: false,
    },
  ]

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance",
      icon: Search,
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy for your business",
      icon: Target,
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, technical, and off-page optimizations",
      icon: Zap,
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Track performance and continuously improve rankings",
      icon: BarChart3,
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Organic Traffic",
      description: "Drive more qualified visitors to your website through search engines",
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "SEO improvements enhance overall website usability and performance",
    },
    {
      icon: Award,
      title: "Higher Authority",
      description: "Build domain authority and establish your brand as an industry leader",
    },
    {
      icon: Eye,
      title: "Improved Visibility",
      description: "Appear in front of customers when they're searching for your services",
    },
  ]

  const tools = [
    { name: "Google Analytics", icon: "📊", description: "Traffic analysis" },
    { name: "Search Console", icon: "🔍", description: "Search performance" },
    { name: "SEMrush", icon: "📈", description: "Keyword research" },
    { name: "Ahrefs", icon: "🔗", description: "Backlink analysis" },
    { name: "Screaming Frog", icon: "🐸", description: "Technical SEO" },
    { name: "GTMetrix", icon: "⚡", description: "Site speed testing" },
    { name: "Moz", icon: "🎯", description: "SEO metrics" },
    { name: "Yoast", icon: "🟢", description: "WordPress SEO" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                <Search className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-purple-100 shadow-sm mb-8">
              <Search className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">SEO Optimization Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Rank Higher on</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Google
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Boost your search engine rankings and drive organic traffic with our proven SEO strategies. From keyword
              research to technical optimization, we help your business get found online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full px-8 py-4"
              >
                Start SEO Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 rounded-full px-8 py-4">
                Get Free SEO Audit
              </Button>
            </div>

            {/* SEO Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">300%</div>
                <div className="text-gray-600 font-medium">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">90%</div>
                <div className="text-gray-600 font-medium">First Page Rankings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">6 Months</div>
                <div className="text-gray-600 font-medium">Average Results Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO services that cover every aspect of search engine optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-purple-600" />
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

      {/* SEO Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that delivers measurable SEO results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the SEO package that fits your business goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {seoPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? "border-purple-200 shadow-xl scale-105" : "border-gray-100"} hover:shadow-lg transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent my-4`}
                  >
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${pkg.color} text-white rounded-full py-3`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">SEO Tools</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                We Use
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional SEO tools for comprehensive analysis and optimization
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
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
              <span className="text-gray-900">Why SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-purple-600 to-violet-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's boost your search rankings and drive more organic traffic to your website
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start SEO Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Get Free SEO Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
