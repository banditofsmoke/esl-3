"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Award, BookText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import SummarySubmission from "@/components/summary-submission"

interface LevelPageProps {
  params: {
    level: string
  }
}

export default function LevelPage({ params }: LevelPageProps) {
  const levelInfo = {
    beginner: {
      title: "Beginner Level",
      description: "Perfect for those starting their English journey",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      timeframe: "6 months program",
      content:
        "This beginner-level text is designed to introduce basic vocabulary and simple sentence structures. It focuses on everyday situations and common expressions to help you build a strong foundation in English.",
    },
    intermediate: {
      title: "Intermediate Level",
      description: "For those with basic English knowledge looking to improve",
      icon: <BookText className="h-10 w-10 text-primary" />,
      timeframe: "3 months program",
      content:
        "This intermediate-level text challenges you to expand your vocabulary and work with more complex sentence structures. It introduces nuanced expressions and varied contexts to enhance your English proficiency.",
    },
    advanced: {
      title: "Advanced Level",
      description: "For fluent speakers aiming for mastery",
      icon: <Award className="h-10 w-10 text-primary" />,
      timeframe: "6 weeks program",
      content:
        "This advanced-level text explores sophisticated language use, including idiomatic expressions, cultural references, and academic vocabulary. It's designed to refine your English to near-native proficiency through critical analysis and nuanced understanding.",
    },
  }

  const level = params.level as keyof typeof levelInfo
  const info = levelInfo[level] || levelInfo.beginner

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/#start-learning" className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Levels</span>
      </Link>

      <div className="mb-12 flex items-center gap-4">
        {info.icon}
        <div>
          <h1 className="text-3xl font-bold">{info.title}</h1>
          <p className="text-muted-foreground">{info.description}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
            <CardDescription>What to expect in this level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Duration</h3>
                <p className="text-muted-foreground">{info.timeframe}</p>
              </div>
              <div>
                <h3 className="font-medium">Overview</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <SummarySubmission level={level} />
      </div>
    </div>
  )
}
