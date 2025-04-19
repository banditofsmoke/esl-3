"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, GraduationCap, Brain, Lightbulb, Briefcase, Code } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Level4Page() {
  const categories = [
    {
      id: "life-skills",
      title: "Life Skills",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      description: "Essential skills for success in life beyond academics",
      articles: [
        {
          id: "effective-communication",
          title: "The Art of Effective Communication",
          description:
            "Learn how to express yourself clearly, listen actively, and navigate difficult conversations with confidence.",
          tags: ["Communication", "Social Skills", "Personal Growth"],
        },
        {
          id: "financial-literacy",
          title: "Financial Literacy 101",
          description:
            "Understanding budgeting, saving, investing, and managing debt to build a secure financial foundation.",
          tags: ["Finance", "Budgeting", "Planning"],
        },
        {
          id: "critical-thinking",
          title: "Developing Critical Thinking",
          description:
            "How to analyze information, evaluate arguments, and make reasoned judgments in an age of information overload.",
          tags: ["Thinking", "Analysis", "Decision Making"],
        },
        {
          id: "time-management",
          title: "Mastering Time Management",
          description:
            "Strategies for prioritizing tasks, avoiding procrastination, and achieving a balanced, productive life.",
          tags: ["Productivity", "Organization", "Balance"],
        },
        {
          id: "emotional-intelligence",
          title: "Building Emotional Intelligence",
          description:
            "Understanding and managing your emotions while navigating social complexities with empathy and awareness.",
          tags: ["Emotions", "Relationships", "Self-awareness"],
        },
        {
          id: "resilience",
          title: "Cultivating Resilience",
          description:
            "Developing the mental strength to overcome challenges, adapt to change, and bounce back from setbacks.",
          tags: ["Mental Health", "Adaptation", "Growth"],
        },
      ],
    },
    {
      id: "college-prep",
      title: "College Preparation",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      description: "Guidance for navigating the college application process and succeeding in higher education",
      articles: [
        {
          id: "college-application",
          title: "Navigating the College Application Process",
          description:
            "A comprehensive guide to researching schools, preparing applications, and writing compelling personal statements.",
          tags: ["Applications", "Essays", "Planning"],
        },
        {
          id: "scholarship-guide",
          title: "Finding and Securing Scholarships",
          description:
            "Strategies for identifying scholarship opportunities and crafting standout applications to fund your education.",
          tags: ["Financial Aid", "Scholarships", "Essays"],
        },
        {
          id: "college-essays",
          title: "Writing Powerful College Essays",
          description:
            "Techniques for crafting authentic, compelling personal statements that showcase your unique qualities and experiences.",
          tags: ["Writing", "Personal Statement", "Admissions"],
        },
        {
          id: "college-interviews",
          title: "Acing College Interviews",
          description:
            "Preparation strategies and tips for making a positive impression during college admissions interviews.",
          tags: ["Interviews", "Communication", "Preparation"],
        },
        {
          id: "college-success",
          title: "First-Year College Success Strategies",
          description:
            "Essential advice for transitioning to college life, from time management to building relationships with professors.",
          tags: ["Transition", "Study Skills", "Independence"],
        },
        {
          id: "major-selection",
          title: "Choosing the Right Major",
          description:
            "A framework for aligning your academic path with your interests, strengths, and career aspirations.",
          tags: ["Career Planning", "Decision Making", "Self-assessment"],
        },
      ],
    },
    {
      id: "ai-ml-basics",
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5 text-primary" />,
      description: "Introduction to artificial intelligence concepts and their real-world applications",
      articles: [
        {
          id: "ai-fundamentals",
          title: "AI Fundamentals: What Everyone Should Know",
          description:
            "An accessible introduction to artificial intelligence, its capabilities, limitations, and impact on society.",
          tags: ["AI Basics", "Technology", "Ethics"],
        },
        {
          id: "ml-explained",
          title: "Machine Learning Explained Simply",
          description:
            "Understanding the core concepts of machine learning without the technical jargon, with real-world examples.",
          tags: ["Machine Learning", "Algorithms", "Data"],
        },
        {
          id: "ai-ethics",
          title: "Ethical Considerations in AI",
          description:
            "Exploring the ethical challenges posed by AI technologies and frameworks for responsible development and use.",
          tags: ["Ethics", "Responsibility", "Society"],
        },
        {
          id: "ai-career-paths",
          title: "Career Paths in Artificial Intelligence",
          description:
            "Overview of educational pathways and career opportunities in the rapidly growing field of artificial intelligence.",
          tags: ["Careers", "Education", "Skills"],
        },
        {
          id: "ai-tools-students",
          title: "AI Tools for Students",
          description:
            "A guide to leveraging AI-powered tools to enhance learning, research, and productivity in academic settings.",
          tags: ["Tools", "Productivity", "Learning"],
        },
        {
          id: "future-with-ai",
          title: "Preparing for a Future with AI",
          description:
            "Developing the skills and mindset needed to thrive in a world increasingly shaped by artificial intelligence.",
          tags: ["Future Skills", "Adaptation", "Technology"],
        },
      ],
    },
    {
      id: "career-readiness",
      title: "Career Readiness",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      description: "Preparing for the professional world with essential workplace skills and knowledge",
      articles: [
        {
          id: "resume-building",
          title: "Crafting an Impressive Resume",
          description:
            "Step-by-step guidance for creating a resume that effectively showcases your skills, experiences, and potential.",
          tags: ["Resume", "Job Search", "Professional Development"],
        },
        {
          id: "interview-skills",
          title: "Mastering Job Interviews",
          description:
            "Preparation strategies, common questions, and techniques for presenting yourself confidently in job interviews.",
          tags: ["Interviews", "Communication", "Preparation"],
        },
        {
          id: "networking",
          title: "The Art of Professional Networking",
          description:
            "Building and maintaining professional relationships that can open doors to opportunities throughout your career.",
          tags: ["Networking", "Relationships", "Career Growth"],
        },
        {
          id: "digital-presence",
          title: "Building a Professional Digital Presence",
          description:
            "Creating and managing your online identity to make a positive impression on potential employers and connections.",
          tags: ["Social Media", "Personal Branding", "Online Identity"],
        },
        {
          id: "workplace-etiquette",
          title: "Workplace Etiquette and Communication",
          description:
            "Understanding unwritten rules and communication norms that contribute to success in professional environments.",
          tags: ["Professionalism", "Communication", "Workplace Culture"],
        },
        {
          id: "remote-work",
          title: "Thriving in Remote and Hybrid Work Environments",
          description:
            "Strategies for productivity, collaboration, and work-life balance in increasingly flexible work arrangements.",
          tags: ["Remote Work", "Productivity", "Collaboration"],
        },
      ],
    },
    {
      id: "coding-tech",
      title: "Coding & Technology",
      icon: <Code className="h-5 w-5 text-primary" />,
      description: "Introduction to programming concepts and digital literacy for the modern world",
      articles: [
        {
          id: "coding-basics",
          title: "Programming Fundamentals for Beginners",
          description:
            "An accessible introduction to core programming concepts that form the foundation of all coding languages.",
          tags: ["Programming", "Coding", "Fundamentals"],
        },
        {
          id: "web-development",
          title: "Introduction to Web Development",
          description:
            "Understanding the technologies that power the web and how to create your own simple websites and applications.",
          tags: ["Web Development", "HTML", "CSS", "JavaScript"],
        },
        {
          id: "data-literacy",
          title: "Data Literacy in the Digital Age",
          description:
            "Essential skills for understanding, interpreting, and communicating with data in personal and professional contexts.",
          tags: ["Data", "Analysis", "Visualization"],
        },
        {
          id: "cybersecurity",
          title: "Cybersecurity Essentials",
          description:
            "Practical knowledge for protecting your digital identity, personal information, and devices from cyber threats.",
          tags: ["Security", "Privacy", "Digital Safety"],
        },
        {
          id: "tech-careers",
          title: "Exploring Technology Careers",
          description:
            "Overview of diverse career paths in technology that don't necessarily require advanced programming skills.",
          tags: ["Careers", "Technology", "Industry"],
        },
        {
          id: "digital-creativity",
          title: "Digital Tools for Creativity",
          description:
            "Leveraging technology for creative expression through digital art, design, music, video, and storytelling.",
          tags: ["Creativity", "Digital Media", "Tools"],
        },
      ],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Level 4</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">High School Resources</h1>
        </div>
        <p className="max-w-[800px] text-muted-foreground md:text-xl">
          Explore our collection of articles and resources designed for high school students (Grades 9-12). These
          materials focus on essential life skills, college preparation, technology literacy, and understanding the
          rapidly evolving world of artificial intelligence.
        </p>
      </div>

      <Tabs defaultValue="life-skills" className="space-y-8">
        <TabsList className="flex w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 data-[state=active]:border-primary data-[state=active]:bg-secondary"
            >
              {category.icon}
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-8">
            <div className="rounded-lg border bg-secondary p-6">
              <div className="flex items-center gap-2">
                {category.icon}
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((article) => (
                <Card key={article.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                    </div>
                    <CardDescription>
                      {article.tags.map((tag, i) => (
                        <span key={i}>
                          {tag}
                          {i < article.tags.length - 1 ? " • " : ""}
                        </span>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/level-4/${category.id}/${article.id}`} className="w-full">
                      <Button className="w-full">Read Article</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
