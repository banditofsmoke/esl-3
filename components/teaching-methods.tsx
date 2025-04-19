"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, GraduationCap } from "lucide-react"

export default function TeachingMethods() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="space-y-2 text-center">
        <Badge variant="secondary">Methodology</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching Methods</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover Wayne&apos;s unique approach to English language instruction.
        </p>
      </div>
      <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
