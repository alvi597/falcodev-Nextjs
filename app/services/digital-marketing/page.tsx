"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Mail,
  Share2,
  BarChart3,
  Target,
  Zap,
  Globe,
  Heart,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence across all social platforms",
      features: ["Content creation", "Community management", "Paid advertising", "Analytics & reporting"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with targeted campaigns",
      features: ["Campaign design", "List segmentation", "Automation workflows", "Performance tracking"],
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Drive immediate results with paid search and display ads",
      features: ["Google Ads", "Facebook Ads", "Campaign optimization", "ROI tracking"],
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description: "Engage your audience with valuable, relevant content",
      features: ["Content strategy", "Blog writing", "Video content", "SEO optimization"],
    },
  ]

  const marketingPackages = [
    {
      name: "Marketing Starter",
      price: "$1,499/month",
      description: "Essential marketing for small businesses",
      features: [
        "Social media management (3 platforms)",
        "Monthly content calendar",
        "Basic email campaigns",
        "Google Ads setup",
        "Monthly reporting",
        "2 blog posts per month",
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      name: "Marketing Professional",
      price: "$2,999/month",
      description: "Comprehensive marketing for growing businesses",
      features: [
        "Social media management (5 platforms)",
        "Advanced content creation",
        "Email automation sequences",
        "PPC campaign management",
        "Content marketing strategy",
        "Influencer outreach",
        "Bi-weekly reporting",
        "A/B testing",
      ],
      color: "from-blue-500 to-green-500",
      popular: true,
    },
    {
      name: "Marketing Enterprise",
      price: "$5,999/month",
      description: "Full-scale marketing for large businesses",
      features: [
        "Multi-platform management",
        "Custom content production",
        "Advanced automation",
        "Multi-channel PPC campaigns",
        "Video marketing",
        "Marketing automation",
        "Weekly reporting",
        "Dedicated marketing manager",
        "Custom analytics dashboard",
      ],
      color: "from-purple-500 to-blue-500",
      popular: false,
    },
  ]

  const marketingChannels = [
    {
      title: "Social Media Advertising",
      description: "Targeted ads on Facebook, Instagram, LinkedIn, and Twitter",
      price: "From $500/month",
      features: ["Ad creative design", "Audience targeting", "Campaign optimization", "Performance reporting"],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Google Ads Management",
      description: "Search and display advertising on Google's network",
      price: "From $800/month",
      features: ["Keyword research", "Ad copywriting", "Bid management", "Conversion tracking"],
      color: "from-green-500 to-blue-500",
    },
    {
      title: "Email Marketing Campaigns",
      description: "Automated email sequences and newsletters",
      price: "From $300/month",
      features: ["Email design", "List management", "Automation setup", "Analytics tracking"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Content Marketing",
      description: "Blog posts, videos, and social content creation",
      price: "From $1,200/month",
      features: ["Content strategy", "Blog writing", "Video production", "Social content"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const marketingProcess = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Analyze your market and create a comprehensive marketing strategy",
      icon: Target,
    },
    {
      step: "02",
      title: "Campaign Creation",
      description: "Design and develop marketing campaigns across channels",
      icon: Zap,
    },
    {
      step: "03",
      title: "Launch & Execute",
      description: "Deploy campaigns and monitor performance in real-time",
      icon: Globe,
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuously improve performance and scale successful campaigns",
      icon: TrendingUp,
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Increased Brand Awareness",
      description: "Reach more potential customers and build brand recognition",
    },
    {
      icon: DollarSign,
      title: "Higher ROI",
      description: "Data-driven campaigns that deliver measurable returns",
    },
    {
      icon: Heart,
      title: "Customer Engagement",
      description: "Build stronger relationships with your audience",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Drive leads, sales, and long-term business growth",
    },
  ]

  const platforms = [
    { name: "Google Ads", icon: "🔍", description: "Search advertising" },
    { name: "Facebook", icon: "📘", description: "Social media marketing" },
    { name: "Instagram", icon: "📷", description: "Visual content marketing" },
    { name: "LinkedIn", icon: "💼", description: "B2B marketing" },
    { name: "YouTube", icon: "📺", description: "Video advertising" },
    { name: "TikTok", icon: "🎵", description: "Short-form video content" },
    { name: "Mailchimp", icon: "📧", description: "Email marketing" },
    { name: "HubSpot", icon: "🎯", description: "Marketing automation" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-green-100 shadow-sm mb-8">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Digital Marketing Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Marketing That</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Drives Results
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Grow your business with data-driven digital marketing strategies. From social media to PPC advertising, we
              create campaigns that reach your target audience and drive conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full px-8 py-4"
              >
                Start Marketing Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-green-600 rounded-full px-8 py-4">
                Get Marketing Audit
              </Button>
            </div>

            {/* Marketing Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">250%</div>
                <div className="text-gray-600 font-medium">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500%</div>
                <div className="text-gray-600 font-medium">Lead Generation Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">90%</div>
                <div className="text-gray-600 font-medium">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing services that drive growth and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-green-600" />
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

      {/* Marketing Channels Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Channels
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-channel marketing strategies tailored to your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingChannels.map((channel, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-gray-900">{channel.title}</CardTitle>
                    <Badge className={`bg-gradient-to-r ${channel.color} text-white`}>{channel.price}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${channel.color} text-white rounded-full`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent marketing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingProcess.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the marketing package that fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marketingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? "border-green-200 shadow-xl scale-105" : "border-gray-100"} hover:shadow-lg transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2">
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

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Platforms
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major marketing platforms and tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Why Choose Our</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 hover:shadow-lg transition-all text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's create marketing campaigns that drive real results and grow your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start Marketing Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Get Free Marketing Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
