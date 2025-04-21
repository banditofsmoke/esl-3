"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Award,
  BookText,
  Clock,
  Star,
  BookMarked,
  Newspaper,
  GraduationCap,
  Brain,
  Coffee,
} from "lucide-react"
import TeacherProfile from "@/components/teacher-profile"
import TeachingMethods from "@/components/teaching-methods"
import PricingPlans from "@/components/pricing-plans"
import PhonicsChart from "@/components/phonics-chart"

// Move static data outside the component
const LEVEL_1_STORIES = [
  {
    title: "The Tortoise and the Hare",
    origin: "Greek",
    description: "A classic tale about the race between a tortoise and a hare.",
  },
  {
    title: "The Lion and the Mouse",
    origin: "African",
    description: "A small mouse helps a mighty lion, proving that size isn't everything.",
  },
  {
    title: "The Crow and the Pitcher",
    origin: "Greek",
    description: "A thirsty crow uses its intelligence to get water from a pitcher.",
  },
  {
    title: "The Monkey and the Crocodile",
    origin: "Indian",
    description: "A clever monkey outsmarts a hungry crocodile.",
  },
] as const

const LEVEL_2_STORIES = [
  {
    title: "The Emperor's New Clothes",
    origin: "Danish",
    description: "A vain emperor is tricked by swindlers who promise him invisible clothes.",
  },
  {
    title: "The Happy Prince",
    origin: "Irish",
    description: "A statue of a prince helps the poor people of the city with the help of a swallow.",
  },
  {
    title: "Aladdin's Lamp",
    origin: "Middle Eastern",
    description: "A young man finds a magic lamp containing a genie who grants wishes.",
  },
  {
    title: "The Legend of Mulan",
    origin: "Chinese",
    description: "A young woman disguises herself as a man to take her father's place in the army.",
  },
] as const

const LEVEL_3_STORIES = [
  {
    title: "The Time Traveler",
    origin: "Science Fiction",
    description: "A brilliant inventor creates a machine that allows him to travel through time.",
  },
  {
    title: "The Final Leaf",
    origin: "American",
    description: "A young woman believes she will die when the last leaf falls from the vine outside her window.",
  },
  {
    title: "The Diamond Necklace",
    origin: "French",
    description: "A woman borrows an expensive necklace for a party but loses it, with unexpected consequences.",
  },
  {
    title: "The Hidden Garden",
    origin: "British",
    description: "A lonely girl discovers a locked garden and brings it back to life, finding healing in the process.",
  },
] as const

const LEARNING_LEVELS = [
  {
    title: "Level 0: Phonics",
    description: "Master English sounds and pronunciation",
    icon: <BookMarked className="h-10 w-10 text-primary" />,
    features: ["Letter sounds", "Blending", "Sight words", "Pronunciation"],
    timeframe: "6 weeks",
    link: "/#phonics",
    grade: "All Levels",
  },
  {
    title: "Level 1: Stories",
    description: "Build vocabulary through engaging stories",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    features: ["Basic vocabulary", "Simple grammar", "Reading comprehension", "Cultural lessons"],
    timeframe: "1 month",
    link: "/level-1",
    grade: "Grades 1-3",
  },
  {
    title: "Level 2: Intermediate",
    description: "Enhance your English communication",
    icon: <BookText className="h-10 w-10 text-primary" />,
    features: ["Complex grammar", "Writing skills", "Speaking practice", "Listening exercises"],
    timeframe: "1 month",
    link: "/level-2",
    grade: "Grades 4-6",
  },
  {
    title: "Level 3: Advanced",
    description: "Perfect your English proficiency",
    icon: <Star className="h-10 w-10 text-primary" />,
    features: ["Advanced grammar", "Essay writing", "Public speaking", "Business English"],
    timeframe: "1 month",
    link: "/level-3",
    grade: "Grades 7-8",
  },
  {
    title: "Level 4: High School",
    description: "Prepare for academic success",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    features: ["College prep", "Life skills", "AI literacy", "Career readiness"],
    timeframe: "Self-paced",
    link: "/level-4",
    grade: "Grades 9-12",
  },
  {
    title: "Advanced Resources",
    description: "For fluent speakers aiming for mastery",
    icon: <Award className="h-10 w-10 text-primary" />,
    features: ["Current events", "Classic literature", "Academic writing", "Grammar mastery"],
    timeframe: "Self-paced",
    link: "/advanced-reading",
    grade: "College+",
  },
] as const

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Learn English with Wayne Sletcher
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience personalized English instruction with a focus on phonics, reading comprehension, and cultural understanding.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/#start-learning">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Learning</Button>
              </Link>
              <Link href="/#about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-6 md:py-12 lg:py-16 bg-secondary">
        <TeacherProfile />
      </section>

      {/* Teaching Methods Section */}
      <section id="methods" className="w-full py-12 md:py-24 lg:py-32">
        <TeachingMethods />
      </section>

      {/* Phonics Section */}
      <section id="phonics" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Level 0: Phonics</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Master the building blocks of English pronunciation and reading.
              </p>
            </div>
            <PhonicsChart />
          </div>
        </div>
      </section>

      {/* Level 1 Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Level 1: Stories</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Begin your journey with engaging stories that build vocabulary and comprehension.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LEVEL_1_STORIES.slice(0, 3).map((story, index) => (
                <Card key={`story-${index}`} className="flex flex-col">
                  <CardHeader>
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                      {story.origin}
                    </div>
                    <CardTitle className="line-clamp-1">{story.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{story.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>5-10 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-primary" />
                        <span>Beginner</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/level-1" className="w-full">
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        variant="secondary"
                      >
                        Start Reading
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Link href="/level-1">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Articles Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Reading</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Challenge yourself with current events and complex topics.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                    Technology
                  </div>
                  <CardTitle className="line-clamp-1">The Future of Artificial Intelligence</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Explore the latest developments in AI and their impact on society.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>15-20 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>Advanced</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/advanced-reading" className="w-full">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      variant="secondary"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                    Business
                  </div>
                  <CardTitle className="line-clamp-1">Global Economic Trends</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Analyze current economic developments and their worldwide implications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>15-20 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Newspaper className="h-4 w-4 text-primary" />
                      <span>Advanced</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/advanced-reading" className="w-full">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      variant="secondary"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                    Culture
                  </div>
                  <CardTitle className="line-clamp-1">Modern Art Movements</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Discover the evolution and influence of contemporary art.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>15-20 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Advanced</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/advanced-reading" className="w-full">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      variant="secondary"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <Link href="/advanced-reading">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Advanced Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section id="start-learning" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learning Levels</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose your level and start your English learning journey today.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
              {LEARNING_LEVELS.map((level, index) => (
                <Card key={`level-${index}`} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {level.icon}
                      <CardTitle>{level.title}</CardTitle>
                    </div>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-2 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      {level.grade}
                    </div>
                    <ul className="space-y-2">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={level.link} className="w-full">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <PricingPlans />
      </section>
    </div>
  )
}
