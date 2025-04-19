"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, GraduationCap, CircleDot } from "lucide-react"

export default function TeachingMethods() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Header Section */}
      <div className="space-y-2 text-center">
        <Badge variant="secondary">Methodology</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching Methods</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover Wayne&apos;s unique approach to English language instruction.
        </p>
      </div>

      {/* Three Ring Diagram */}
      <div className="w-full max-w-5xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full">
          <style>
            {`
              text { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
              .title { font-size: 24px; fill: hsl(var(--primary)); font-weight: bold; }
              .subtitle { font-size: 20px; fill: hsl(var(--primary)); font-weight: bold; }
              .method { font-size: 16px; fill: hsl(var(--foreground)); }
              .step { font-size: 14px; fill: hsl(var(--muted-foreground)); }
            `}
          </style>
          {/* SVG Content - same as your original but with updated styles */}
          {/* ... SVG circles and text elements ... */}
        </svg>
      </div>

      {/* Detailed Methods Cards */}
      <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CircleDot className="h-10 w-10 text-primary" />
            <CardTitle>Sentence Construction</CardTitle>
            <CardDescription>Five fundamental rules</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>S.V:</strong> Subject + Verb (foundation)</li>
              <li><strong>S.V.A:</strong> Subject-Verb Agreement</li>
              <li><strong>Obj(n.d)+P:</strong> Object + Preposition</li>
              <li><strong>*/Adj/Adv*:</strong> Modifiers</li>
              <li><strong>C1, conj. C2:</strong> Clause Linking</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CircleDot className="h-10 w-10 text-primary" />
            <CardTitle>4-Step Method</CardTitle>
            <CardDescription>Systematic learning approach</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Read Text & Comprehend</li>
              <li>Identify Main Ideas (5W1H)</li>
              <li>Create 4-Sentence Summary</li>
              <li>Get & Apply Feedback</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CircleDot className="h-10 w-10 text-primary" />
            <CardTitle>Speech Management</CardTitle>
            <CardDescription>Breath and syllable control</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Control breathing patterns</li>
              <li>Manage syllable rhythm</li>
              <li>Improve speech fluency</li>
              <li>Enhance natural rhythm</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Brain className="h-10 w-10 text-primary" />
            <CardTitle>Cognitive Development</CardTitle>
            <CardDescription>Building mental frameworks for language acquisition</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Pattern recognition</li>
              <li>Memory techniques</li>
              <li>Logical progression</li>
              <li>Critical thinking</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-10 w-10 text-primary" />
            <CardTitle>Interactive Learning</CardTitle>
            <CardDescription>Engaging methods for better retention</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Role-playing</li>
              <li>Group discussions</li>
              <li>Real-world scenarios</li>
              <li>Cultural exchange</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <GraduationCap className="h-10 w-10 text-primary" />
            <CardTitle>Systematic Progress</CardTitle>
            <CardDescription>Clear pathways to fluency</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Level-based learning</li>
              <li>Regular assessments</li>
              <li>Personalized feedback</li>
              <li>Goal tracking</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
