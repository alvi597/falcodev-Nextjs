"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, CheckCircle, Bot, BarChart3, Cog } from "lucide-react"
import Link from "next/link"

export default function AISolutionsPage() {
  const aiServices = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational AI for customer support and engagement",
      features: [
        "Natural language processing",
        "24/7 customer support",
        "Multi-platform integration",
        "Learning capabilities",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "AI-powered insights and predictive analytics for business intelligence",
      features: ["Predictive modeling", "Real-time analytics", "Custom dashboards", "Automated reporting"],
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: ["Workflow automation", "Document processing", "Task scheduling", "Integration APIs"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom ML models tailored to your specific business needs",
      features: ["Custom algorithms", "Model training", "Performance optimization", "Continuous learning"],
    },
  ]

  const technologies = [
    { name: "TensorFlow", icon: "🧠", description: "Machine learning framework" },
    { name: "PyTorch", icon: "🔥", description: "Deep learning platform" },
    { name: "OpenAI GPT", icon: "🤖", description: "Language models" },
    { name: "Python", icon: "🐍", description: "AI development language" },
    { name: "Scikit-learn", icon: "📊", description: "Machine learning library" },
    { name: "Pandas", icon: "🐼", description: "Data manipulation" },
    { name: "AWS AI", icon: "☁️", description: "Cloud AI services" },
    { name: "Docker", icon: "🐳", description: "AI model deployment" },
  ]

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI chatbots that handle customer inquiries 24/7",
      benefits: ["Reduced response time", "Lower operational costs", "Improved customer satisfaction"],
      industry: "E-commerce, SaaS",
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions",
      benefits: ["Better forecasting", "Risk reduction", "Optimized operations"],
      industry: "Finance, Retail",
    },
    {
      title: "Document Processing",
      description: "Automated extraction and processing of documents",
      benefits: ["Faster processing", "Reduced errors", "Cost savings"],
      industry: "Healthcare, Legal",
    },
    {
      title: "Recommendation Systems",
      description: "Personalized recommendations for users",
      benefits: ["Increased engagement", "Higher conversion", "Better user experience"],
      industry: "Media, E-commerce",
    },
  ]

  const packages = [
    {
      name: "AI Starter",
      price: "$4,999",
      description: "Perfect for small businesses exploring AI",
      features: [
        "Basic chatbot implementation",
        "Simple automation workflows",
        "Data analysis setup",
        "2 months support",
        "Training and documentation",
      ],
      color: "from-violet-500 to-purple-500",
      popular: false,
    },
    {
      name: "AI Professional",
      price: "$12,999",
      description: "Advanced AI solutions for growing businesses",
      features: [
        "Custom ML model development",
        "Advanced chatbot with NLP",
        "Predictive analytics dashboard",
        "API integrations",
        "6 months support",
        "Performance monitoring",
        "Regular model updates",
      ],
      color: "from-blue-500 to-violet-500",
      popular: true,
    },
    {
      name: "AI Enterprise",
      price: "$29,999",
      description: "Comprehensive AI transformation",
      features: [
        "Full AI strategy consultation",
        "Multiple custom AI models",
        "Enterprise-grade automation",
        "Real-time analytics platform",
        "12 months support",
        "Dedicated AI team",
        "Scalable infrastructure",
        "Compliance & security",
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                FalcoDev
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-violet-200 text-violet-600 hover:bg-violet-50 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-violet-100 shadow-sm mb-8">
              <Brain className="h-5 w-5 text-violet-600" />
              <span className="text-sm font-medium text-gray-700">AI Solutions & Machine Learning</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Intelligent</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with cutting-edge AI and machine learning solutions. From intelligent chatbots to
              predictive analytics, we help you harness the power of artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full px-8 py-4"
              >
                Explore AI Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-violet-200 text-violet-600 rounded-full px-8 py-4">
                Schedule AI Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Our AI</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to automate processes and drive intelligent decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-violet-600" />
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

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-violet-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">AI Technologies</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                We Master
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the most advanced AI frameworks and tools to build intelligent solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">AI Use</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of AI that drive business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-100 hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{useCase.description}</CardDescription>
                  <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white w-fit">
                    {useCase.industry}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-violet-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">AI Solution</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the AI package that fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-white border-2 ${pkg.popular ? "border-violet-200 shadow-xl scale-105" : "border-gray-100"} hover:shadow-lg transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2">
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-violet-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Embrace AI?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-violet-600 hover:bg-gray-100 rounded-full px-8"
                >
                  Start AI Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  Book AI Strategy Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
