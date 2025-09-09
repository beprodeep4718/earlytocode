import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, AlertTriangle, Users } from "lucide-react";
export default function WhyTechGiantsPay() {
    const companies = [
    {
      name: "Meta (Facebook)",
      logo: "FB",
      position: "Software Engineer",
      salary: "₹58+ LPA",
      description: "Facebook's news feed algorithm processes billions of posts using advanced data structures. Their interview process heavily focuses on DSA problem-solving skills.",
      bgColor: "bg-blue-600",
    },
    {
      name: "Google",
      logo: "G",
      position: "Software Engineer",
      salary: "₹50-₹9 LPA",
      description: "Google's search engine relies on complex algorithms and data structures. Their hiring process is famous for challenging DSA questions and system design.",
      bgColor: "bg-red-500",
    },
    {
      name: "Amazon",
      logo: "A",
      position: "Software Engineer",
      salary: "₹45-₹60 LPA",
      description: "Amazon's recommendation system and logistics optimization depend on sophisticated algorithms. Strong DSA skills are mandatory for their technical interviews.",
      bgColor: "bg-orange-500",
    },
  ];

  const advantages = [
    {
      title: "Age 6-12:",
      description: "Brain plasticity is at its peak - perfect time to build algorithmic thinking"
    },
    {
      title: "By Age 16:",
      description: "Your child will have 10+ years of problem-solving experience behind them"
    },
    {
      title: "College Advantage:",
      description: "While peers struggle with DSA, your child will excel effortlessly"
    },
    {
      title: "Career Impact:",
      description: "Land ₹50+ LPA offers straight out of graduation"
    }
  ];

  const salaryProgression = [
    { role: "Fresh Graduate (22 years)", salary: "₹60+ LPA", color: "text-green-400" },
    { role: "Senior Engineer (25 years)", salary: "₹80+ LPA", color: "text-blue-400" },
    { role: "Tech Lead (28 years)", salary: "₹1.6+ Crore", color: "text-purple-400" },
    { role: "Engineering Manager (30 years)", salary: "₹3+ Crore", color: "text-orange-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto rounded-4xl bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Hero Section */}
      <div className="container p-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Tech Giants Pay{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              ₹50+ LPA
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Facebook, Google, Amazon, and Microsoft heavily rely on Data Structures & Algorithms. Your child's
            early start could mean landing these dream jobs straight out of college!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Company Cards */}
          <div className="space-y-6">
            {companies.map((company, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${company.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
                      {company.logo}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{company.name}</h3>
                        <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                          {company.salary}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{company.position}</p>
                      <p className="text-gray-300 leading-relaxed">{company.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            {/* Early Bird Advantage */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">The Early Bird Advantage</h2>
                </div>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-orange-400">{advantage.title}</span>
                        <span className="text-gray-300 ml-2">{advantage.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Salary Progression */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Salary Progression</h2>
                </div>
                <div className="space-y-4">
                  {salaryProgression.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-b-0">
                      <span className="text-gray-300 text-sm">{item.role}</span>
                      <span className={`font-bold text-lg ${item.color}`}>{item.salary}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Warning Section */}
        <Card className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">The Competition is Getting Fierce</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-4xl mx-auto text-lg leading-relaxed">
              Every year, millions of engineering graduates compete for these high-paying positions. Only those with strong DSA
              foundations and early problem-solving experience get selected.
            </p>
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-8">
              <p className="text-yellow-400 font-semibold text-lg">
                Don't let your child start the race when others are already at the finish line!
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Child's Journey Today
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            Give your child the competitive advantage they need for tomorrow's tech careers
          </p>
        </div>
      </div>
    </div>
  );
}
