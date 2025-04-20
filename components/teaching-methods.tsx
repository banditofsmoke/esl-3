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
      <div className="w-full max-w-5xl p-8 bg-card rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full">
          <style>
            {`
              text { 
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
              }
              .title { 
                font-size: 24px; 
                fill: hsl(var(--primary)); 
                font-weight: bold; 
              }
              .subtitle { 
                font-size: 20px; 
                fill: hsl(var(--primary)); 
                font-weight: bold; 
              }
              .method { 
                font-size: 16px; 
                fill: hsl(var(--muted-foreground));
              }
              .step { 
                font-size: 14px; 
                fill: hsl(var(--muted-foreground)); 
              }
            `}
          </style>
          
          {/* Title */}
          <text x="400" y="40" text-anchor="middle" className="title">Three Core Teaching Elements</text>
          
          {/* 5 Rules to Make a Sentence */}
          <circle cx="200" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
          <text x="200" y="120" text-anchor="middle" className="subtitle">1. Five Rules for</text>
          <text x="200" y="150" text-anchor="middle" className="subtitle">Sentence Construction</text>
          <text x="200" y="190" text-anchor="middle" className="method">S.V</text>
          <text x="200" y="220" text-anchor="middle" className="method">S.V.A</text>
          <text x="200" y="250" text-anchor="middle" className="method">Obj(n,d)+P</text>
          <text x="200" y="280" text-anchor="middle" className="method">*/Adj/Adv*</text>
          <text x="200" y="310" text-anchor="middle" className="method">C1, conj. C2</text>
          
          {/* 4 Step Method to Practice */}
          <circle cx="600" cy="200" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
          <text x="600" y="120" text-anchor="middle" className="subtitle">2. Four Step Method</text>
          <text x="600" y="150" text-anchor="middle" className="subtitle">to Practice</text>
          <text x="600" y="190" text-anchor="middle" className="method">1. Consume</text>
          <text x="600" y="220" text-anchor="middle" className="method">2. Analyse</text>
          <text x="600" y="250" text-anchor="middle" className="method">3. Create</text>
          <text x="600" y="280" text-anchor="middle" className="method">4. Feedback</text>
          
          {/* Words per Breath and Syllable Management */}
          <circle cx="400" cy="450" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
          <text x="400" y="370" text-anchor="middle" className="subtitle">3. Words per Breath and</text>
          <text x="400" y="400" text-anchor="middle" className="subtitle">Syllable Management</text>
          <text x="400" y="440" text-anchor="middle" className="method">Control breathing</text>
          <text x="400" y="470" text-anchor="middle" className="method">Manage syllables</text>
          <text x="400" y="500" text-anchor="middle" className="method">Improve fluency</text>
          <text x="400" y="530" text-anchor="middle" className="method">Enhance rhythm</text>
          
          {/* Connecting lines */}
          <path d="M320 250 L480 250" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          <path d="M200 330 L400 330" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
          <path d="M400 330 L600 330" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
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
      </div>
    </div>
  )
}
