import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What my clients say</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Trusted by the best teams in the world. We help teams of all sizes.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage alt={testimonial.name} src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <blockquote className="text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "This platform has transformed how our team collaborates. The efficiency gains are remarkable.",
    name: "Alex Thompson",
    title: "CTO at TechCorp",
    avatar: "/placeholder.svg?height=400&width=400"
  },
  {
    quote: "The best investment we've made in our workflow. Customer support is outstanding.",
    name: "Sarah Chen",
    title: "Product Manager",
    avatar: "/placeholder.svg?height=400&width=400"
  },
  {
    quote: "Intuitive, powerful, and constantly improving. It's exactly what we needed.",
    name: "Michael Roberts",
    title: "Engineering Lead",
    avatar: "/placeholder.svg?height=400&width=400"
  }
]

