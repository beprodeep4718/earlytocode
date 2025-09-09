"use client";
import { Button } from "@/components/ui/button";
import Hero from "@/components/custom/hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Calculator,
  CheckCircle,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import WhyMathData from "@/components/custom/WhyMathData";
import WhyTechGiantsPay from "@/components/custom/WhyTechGiantsPay";

export default function Home() {
  
  return (
    <>
      <main className="bg-background">
        <Hero />
        {/* why start coding */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Why Start Coding at an{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                Early Age?
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Research shows that children who learn coding early develop
              superior problem-solving skills, creativity, and logical thinking
              that benefits them throughout their lives.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Enhanced Problem-Solving
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Coding teaches children to break down complex problems into
                    manageable steps, developing critical thinking skills that
                    apply to all areas of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Boosts Creativity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Programming empowers kids to create their own games, apps,
                    and digital art, fostering imagination and creative
                    expression.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Improves Focus & Attention
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Coding requires concentration and attention to detail,
                    helping children develop focus and perseverance in
                    completing tasks.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Builds Strong Team Skills
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through collaborative coding projects, children learn
                    teamwork, communication, and how to work effectively with
                    others.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Makes Understanding
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Coding reinforces mathematical concepts through practical
                    application, making abstract math concepts more concrete and
                    understandable.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Develops for the Future
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Early exposure to programming concepts gives children a head
                    start in understanding technology that will shape their
                    future careers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full px-4 py-6">
          <div className="w-full max-w-6xl mx-auto rounded-xl flex flex-col items-center p-16 space-y-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white">
            <h1 className="text-2xl font-bold">Did You Know?</h1>
            <p className="mb-6 text-center font-medium">
              Children who start coding before age 10 are 3x more likely to
              crack top tech company interviews and earn ₹50+ LPA packages
              straight out of college. Early starters have a massive advantage!
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-medium px-8 py-6">
              Schedule Your Child&apos;s Assessment
            </Button>
          </div>

          {/* AI Revolution Section */}
          <div className="mt-10 w-full max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Stay Future-Ready in the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                AI Revolution
              </span>
            </h3>
            <p className="text-secondary-foreground mb-10 max-w-3xl mx-auto">
              While AI automates routine jobs, it creates massive demand for
              skilled programmers who can build, optimize, and maintain these AI
              systems. Your child&apos;s coding skills will be recession-proof!
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="shadow-md rounded-2xl border border-gray-200">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-3xl">🧑‍💻</div>
                  <h4 className="font-semibold">Software Engineering</h4>
                  <p className="text-secondary-foreground text-sm">
                    Building and maintaining software systems
                  </p>
                  <p className="font-semibold text-green-600">₹45&ndash;75 LPA</p>
                </CardContent>
              </Card>
              <Card className="shadow-md rounded-2xl border border-gray-200">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-3xl">🤖</div>
                  <h4 className="font-semibold">AI/ML Engineers</h4>
                  <p className="text-secondary-foreground text-sm">
                    Building the next generation of intelligent systems
                  </p>
                  <p className="font-semibold text-green-600">₹60&ndash;100 LPA</p>
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-2xl border border-gray-200">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-3xl">📊</div>
                  <h4 className="font-semibold">Data Scientists</h4>
                  <p className="text-secondary-foreground text-sm">
                    Extracting insights from big data to drive decisions
                  </p>
                  <p className="font-semibold text-green-600">₹50&ndash;80 LPA</p>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </section>
        <WhyTechGiantsPay />
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose Your Child&apos;s{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">Coding Journey</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Flexible learning paths designed for different skill levels and
              interests. Each plan includes personalized attention and
              project-based learning.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Kids Beginner */}
              <Card className="relative p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Kids Beginner
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Perfect for first-time coders
                    </p>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ₹149
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Visual programming basics
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Interactive games & animations
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Problem-solving challenges
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        4 live classes/month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Parent progress reports
                      </span>
                    </li>
                  </ul>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>

              {/* Code Builder - Popular */}
              <Card className="relative p-8 border-2 border-purple-400 hover:border-purple-500 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-purple-50 to-white">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
                  MOST POPULAR
                </Badge>
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Code Builder
                    </h3>
                    <p className="text-gray-600 mb-6">
                      For intermediate young coders
                    </p>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      ₹199
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Text-based programming
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Web development basics
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Mobile app creation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        6 live classes/month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Portfolio projects</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Start Building
                  </Button>
                </CardContent>
              </Card>

              {/* Tech Hacker */}
              <Card className="relative p-8 border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Tech Hacker
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Advanced coding & algorithms
                    </p>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      ₹299
                      <span className="text-lg font-normal text-gray-600">
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Advanced algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Data structures deep-dive
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Competitive programming
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        8 live classes/month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">1-on-1 mentoring</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Master Coding
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-700 to-blue-500 hover:bg-purple-700 text-white px-8 py-4"
              >
                Get Free Assessment & Recommendation
              </Button>
            </div>
          </div>
        </section>
        <WhyMathData />
      </main>
    </>
  );
}
