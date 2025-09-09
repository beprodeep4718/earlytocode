import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Code Explorers",
    price: "$149/month",
    features: ["Basic coding lessons", "1:1 mentorship", "Weekly projects"],
    button: "Start Basic Program"
  },
  {
    name: "Code Builders",
    price: "$189/month",
    features: ["Intermediate concepts", "Math + Logic focus", "Group projects"],
    button: "Start Intermediate Program"
  },
  {
    name: "Code Maestros",
    price: "$229/month",
    features: ["Advanced coding + AI", "Competitive programming prep", "Career guidance"],
    button: "Start Advanced Program"
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold">Choose Your Child's <span className="text-purple-600">Coding Journey</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <p className="text-2xl font-bold text-purple-600">{plan.price}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {plan.features.map((f, i) => (
                  <p key={i} className="text-gray-600">• {f}</p>
                ))}
                <Button className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700">{plan.button}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
