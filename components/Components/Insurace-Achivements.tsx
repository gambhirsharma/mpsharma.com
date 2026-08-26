import Image from 'next/image'
import { Award, Users, TrendingUp, Briefcase, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  type: "award" | "client" | "sales" | "certification" | "other"
  imageUrl: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top Sales Agent of the Year",
    description: "Recognized for outstanding performance in policy sales and client acquisition",
    date: "2023",
    type: "award",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "1000th Client Milestone",
    description: "Successfully provided life insurance coverage to 1000 families",
    date: "2022",
    type: "client",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "$5 Million in Annual Premiums",
    description: "Achieved a personal record of $5 million in annual premium sales",
    date: "2023",
    type: "sales",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Certified Financial Planner (CFP)",
    description: "Obtained CFP certification to provide comprehensive financial planning services",
    date: "2021",
    type: "certification",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Client Satisfaction Award",
    description: "Received the highest client satisfaction ratings in the regional office",
    date: "2022",
    type: "award",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Million Dollar Round Table",
    description: "Qualified for MDRT, recognizing exceptional professionals in life insurance and financial services",
    date: "2023",
    type: "other",
    imageUrl: "/placeholder.svg"
  }
]

const renderIcon = (type: Achievement["type"]) => {
  switch (type) {
    case "award":
      return <Award className="h-6 w-6" />
    case "client":
      return <Users className="h-6 w-6" />
    case "sales":
      return <TrendingUp className="h-6 w-6" />
    case "certification":
      return <Briefcase className="h-6 w-6" />
    default:
      return <Star className="h-6 w-6" />
  }
}

export default function InsuranceAchievementSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Professional Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200">
              <div className="relative h-48 w-full">
                <Image
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-full text-gray-600">
                  {renderIcon(achievement.type)}
                </div>
                <div>
                  <CardTitle className="text-gray-800">{achievement.title}</CardTitle>
                  <CardDescription className="text-gray-600">{achievement.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

