"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Palette,
  TrendingUp,
  Search,
  ArrowRight,
  Target,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  Brain,
  Smartphone,
  ShoppingCart,
  WorkflowIcon as Wordpress,
  MessageSquare,
  Send,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function StartProjectPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    projectTitle: "",
    projectDescription: "",
    budget: "",
    timeline: "",

    // Additional Info
    additionalRequirements: "",
    hearAboutUs: "",
  })

  const services = [
    {
      id: "web-development",
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "wordpress-development",
      icon: Wordpress,
      title: "WordPress Development",
      description: "Professional WordPress websites",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      id: "ai-solutions",
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and AI applications",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
    {
      id: "mobile-development",
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS and Android applications",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      id: "ecommerce-solutions",
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Online stores and payment systems",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Marketing strategies and campaigns",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "seo-optimization",
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description: "User interface and experience design",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ]

  const budgetRanges = [
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000-25000", label: "$10,000 - $25,000" },
    { value: "25000-50000", label: "$25,000 - $50,000" },
    { value: "50000-100000", label: "$50,000 - $100,000" },
    { value: "100000+", label: "$100,000+" },
    { value: "discuss", label: "Let's Discuss" },
  ]

  const timelineOptions = [
    { value: "asap", label: "ASAP (Rush Project)" },
    { value: "1-2months", label: "1-2 Months" },
    { value: "3-4months", label: "3-4 Months" },
    { value: "5-6months", label: "5-6 Months" },
    { value: "6months+", label: "6+ Months" },
    { value: "flexible", label: "Flexible Timeline" },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Design & Prototype",
      description: "Create wireframes, mockups, and interactive prototypes",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: 3,
      title: "Development",
      description: "Build your project using cutting-edge technologies",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Thorough testing and smooth deployment to production",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
    },
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { ...formData, selectedServices })
    // You can add API call or other submission logic here
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-60 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full opacity-60 animate-pulse delay-3000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
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
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-blue-100 shadow-sm mb-6">
            <Rocket className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Let's Build Something Amazing</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Start Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Project
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your ideas into reality? Let's discuss your project requirements and create something
            extraordinary together.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep >= step
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 h-1 mx-2 rounded-full transition-all ${
                      currentStep > step ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Services Selection */}
            {currentStep === 1 && (
              <Card className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">What services do you need?</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Select all the services that apply to your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? `${service.bgColor} border-2 ${service.borderColor} shadow-lg scale-105`
                            : "bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-md"
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <CardContent className="p-6 text-center">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform ${
                              selectedServices.includes(service.id) ? "scale-110" : ""
                            }`}
                          >
                            <service.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                          {selectedServices.includes(service.id) && (
                            <div className="mt-3">
                              <Badge className={`bg-gradient-to-r ${service.color} text-white border-0`}>
                                Selected
                              </Badge>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={selectedServices.length === 0}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <Card className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Tell us about yourself</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    We need some basic information to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-900 font-bold mb-3">Company/Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-full"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <Card className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Project Details</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Help us understand your project requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Project Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.projectTitle}
                        onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="e.g., E-commerce Website for Fashion Brand"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Project Description *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none resize-none transition-all"
                        placeholder="Describe your project in detail. What are your goals, target audience, key features, etc.?"
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-900 font-bold mb-3">Budget Range *</label>
                        <select
                          required
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-900 font-bold mb-3">Timeline *</label>
                        <select
                          required
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-full"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Additional Information & Submit */}
            {currentStep === 4 && (
              <Card className="bg-white border-2 border-gray-100 shadow-xl rounded-3xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Final Details</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Any additional information to help us serve you better
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="block text-gray-900 font-bold mb-3">Additional Requirements</label>
                      <textarea
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none resize-none transition-all"
                        placeholder="Any specific requirements, technologies, or features you'd like to mention?"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-bold mb-3">How did you hear about us?</label>
                      <select
                        value={formData.hearAboutUs}
                        onChange={(e) => handleInputChange("hearAboutUs", e.target.value)}
                        className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral from Friend/Colleague</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="portfolio">Portfolio Website</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Project Summary */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Project Summary</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-gray-700">Selected Services:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {selectedServices.map((serviceId) => {
                              const service = services.find((s) => s.id === serviceId)
                              return service ? (
                                <Badge
                                  key={serviceId}
                                  className={`bg-gradient-to-r ${service.color} text-white border-0`}
                                >
                                  {service.title}
                                </Badge>
                              ) : null
                            })}
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Contact:</span>
                          <span className="ml-2 text-gray-600">
                            {formData.firstName} {formData.lastName} ({formData.email})
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Project:</span>
                          <span className="ml-2 text-gray-600">{formData.projectTitle || "Not specified"}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Budget:</span>
                          <span className="ml-2 text-gray-600">
                            {budgetRanges.find((b) => b.value === formData.budget)?.label || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">Timeline:</span>
                          <span className="ml-2 text-gray-600">
                            {timelineOptions.find((t) => t.value === formData.timeline)?.label || "Not specified"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-full"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      Submit Project
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">How We</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bring Ideas to Life
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step process ensures your project is delivered on time, within budget, and exceeds
              expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group text-center rounded-2xl"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Need to</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Talk First?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prefer to discuss your project before filling out the form? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 text-center rounded-2xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get a detailed response within 24 hours</p>
                <a href="mailto:contact@falcodev.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  contact@falcodev.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 text-center rounded-2xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <a href="tel:+923492104868" className="text-green-600 font-semibold hover:text-green-700">
                  +92-349-2104868
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 text-center rounded-2xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Instant support during business hours</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700">Start Chat</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">FalcoDev</span>
          </div>
          <p className="text-gray-300 mb-6">
            Ready to transform your ideas into digital reality? Let's build something amazing together.
          </p>
          <p className="text-gray-400">
            &copy; 2025 FalcoDev. All rights reserved. Developed with ❤️ for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}
