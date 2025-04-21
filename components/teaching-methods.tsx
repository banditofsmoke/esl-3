"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles, GraduationCap, CircleDot, BookOpen, Lightbulb, Gauge } from "lucide-react"

export default function TeachingMethods() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Header Section */}
      <div className="space-y-2 text-center">
        <Badge variant="secondary">Methodology</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teaching Methods</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Discover Wayne&apos;s unique approach to English language instruction that builds fluency through structured learning and practice.
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
            <CardDescription>Five fundamental rules for clear communication</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>S.V:</strong> Subject + Verb (foundation)
                <p className="text-xs mt-1 ml-4">Example: "Students learn." - The simplest complete sentence.</p>
              </li>
              <li><strong>S.V.A:</strong> Subject-Verb Agreement
                <p className="text-xs mt-1 ml-4">Example: "The team plays" vs. "The players play" - Number matters.</p>
              </li>
              <li><strong>Obj(n.d)+P:</strong> Object + Preposition
                <p className="text-xs mt-1 ml-4">Example: "They put the book on the table." - Proper positioning.</p>
              </li>
              <li><strong>*/Adj/Adv*:</strong> Modifiers
                <p className="text-xs mt-1 ml-4">Example: "The extremely bright student quickly solved the difficult problem."</p>
              </li>
              <li><strong>C1, conj. C2:</strong> Clause Linking
                <p className="text-xs mt-1 ml-4">Example: "Although it was raining, we went to the park."</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CircleDot className="h-10 w-10 text-primary" />
            <CardTitle>4-Step Method</CardTitle>
            <CardDescription>Systematic learning approach for mastery</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>1. Consume:</strong> Read Text & Comprehend
                <p className="text-xs mt-1 ml-4">Actively engage with various materials like news articles, books, and academic texts.</p>
              </li>
              <li><strong>2. Analyse:</strong> Identify Main Ideas (5W1H)
                <p className="text-xs mt-1 ml-4">Who? What? When? Where? Why? How? Extract key points methodically.</p>
              </li>
              <li><strong>3. Create:</strong> Develop 4-Sentence Summary
                <p className="text-xs mt-1 ml-4">Structured summary following the 4-sentence format (see examples below).</p>
              </li>
              <li><strong>4. Feedback:</strong> Get & Apply Corrections
                <p className="text-xs mt-1 ml-4">Identify patterns of errors and track improvements over time.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CircleDot className="h-10 w-10 text-primary" />
            <CardTitle>Speech Management</CardTitle>
            <CardDescription>Breath and syllable control for natural speech</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li><strong>Breathing Patterns:</strong> 
                <p className="text-xs mt-1 ml-4">Aim for 5-7 words per breath for natural pausing. Example: "I went to the store | to buy some groceries."</p>
              </li>
              <li><strong>Syllable Rhythm:</strong>
                <p className="text-xs mt-1 ml-4">Stress important syllables: "I'm GO-ing to the SU-per-MAR-ket."</p> 
              </li>
              <li><strong>Linking Words:</strong>
                <p className="text-xs mt-1 ml-4">Connect sounds smoothly: "Turn_it_on" sounds like "Tur-ni-ton"</p>
              </li>
              <li><strong>Intonation Patterns:</strong>
                <p className="text-xs mt-1 ml-4">Questions rise ↗, statements fall ↘, lists have a pattern ↗↗↘</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* 4-Sentence Method Examples */}
      <div className="w-full max-w-5xl">
        <Card>
          <CardHeader>
            <BookOpen className="h-10 w-10 text-primary" />
            <CardTitle>The 4-Sentence Method in Detail</CardTitle>
            <CardDescription>Master structured summaries for effective communication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-2">Structure Breakdown:</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li><strong>Topic Sentence:</strong> Introduce the main subject while incorporating at least 4 of the 5W1H elements (Who, What, When, Where, Why, How)</li>
                <li><strong>Supporting Sentence 1:</strong> Expand on one or two key ideas from the topic sentence</li>
                <li><strong>Supporting Sentence 2:</strong> Develop additional key points with specific details</li>
                <li><strong>Conclusion Sentence:</strong> Provide closure with your opinion or a logical conclusion</li>
              </ol>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium text-lg mb-3">Example 1: News Article Summary</h3>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">1</span>
                  <p className="inline-block ml-2"><strong>Topic:</strong> <span className="text-primary">Last Monday</span>, <span className="text-primary">marine scientists</span> <span className="text-primary">discovered a new species of coral</span> <span className="text-primary">off the coast of Australia</span> <span className="text-primary">using advanced underwater drones</span>.</p>
                  <p className="text-xs ml-8 mt-1 text-muted-foreground"><em>(Includes When, Who, What, Where, and How)</em></p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">2</span>
                  <p className="inline-block ml-2"><strong>Support 1:</strong> The newly identified coral species, which glows bright blue under certain light conditions, thrives at depths previously thought too dark for coral growth.</p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">3</span>
                  <p className="inline-block ml-2"><strong>Support 2:</strong> Researchers from the Australian Marine Institute have collected samples to study its unique biological properties, including potential medical applications for its luminescent compounds.</p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">4</span>
                  <p className="inline-block ml-2"><strong>Conclusion:</strong> This groundbreaking discovery highlights how much remains unexplored in our oceans and reinforces the urgent need for marine conservation efforts.</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium text-lg mb-3">Example 2: Academic Article Summary</h3>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">1</span>
                  <p className="inline-block ml-2"><strong>Topic:</strong> <span className="text-primary">In a recent study published in Nature</span>, <span className="text-primary">neuroscientists</span> <span className="text-primary">from Oxford University</span> <span className="text-primary">demonstrated how sleep consolidates memory</span> <span className="text-primary">through complex neural pathways</span>.</p>
                  <p className="text-xs ml-8 mt-1 text-muted-foreground"><em>(Includes When, Who, Where, What, and How)</em></p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">2</span>
                  <p className="inline-block ml-2"><strong>Support 1:</strong> The research team used advanced brain imaging techniques to observe how memories transfer from the hippocampus to the neocortex during different sleep phases.</p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">3</span>
                  <p className="inline-block ml-2"><strong>Support 2:</strong> Test subjects who experienced uninterrupted deep sleep showed significantly better retention of newly learned information compared to those with disrupted sleep patterns.</p>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 rounded-full bg-primary text-white text-center font-bold">4</span>
                  <p className="inline-block ml-2"><strong>Conclusion:</strong> These findings suggest that prioritizing quality sleep should be considered an essential component of effective learning strategies, especially during intensive study periods.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-medium mb-2">Tips for Creating Effective 4-Sentence Summaries:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Underline or highlight the 5W1H elements in your source material before writing</li>
                <li>Use different sentence structures to maintain reader interest</li>
                <li>Connect your supporting sentences with transition words (additionally, furthermore, moreover)</li>
                <li>End with a conclusion that reflects the significance of the information</li>
                <li>Revise to ensure all sentences clearly connect to the main topic</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Educational Content */}
      <div className="w-full max-w-5xl space-y-6">
        <Card>
          <CardHeader>
            <Brain className="h-10 w-10 text-primary" />
            <CardTitle>Integrated Learning Approach</CardTitle>
            <CardDescription>How the three core elements work together</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              These three methodologies combine to create a holistic approach to language learning:
            </p>
            <ul className="list-inside list-disc space-y-3 text-muted-foreground">
              <li>
                <strong>Build the foundation:</strong> First, master the five sentence structures to ensure grammatical accuracy
              </li>
              <li>
                <strong>Apply through practice:</strong> Use the 4-step method to actively work with real language examples
              </li>
              <li>
                <strong>Polish delivery:</strong> Finally, refine speech with proper breathing and syllable management
              </li>
            </ul>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Proposed Learning Progression:</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Week 1-2: Focus on phonics, and Wayne's Three Core Teaching Elements.</li>
                <li>Week 3-4: Read levels 1&2, identify main ideas and summarise each story in four sentences.</li>
                <li>Week 5: Read and summarise level 3 stories, and daily news.</li>
                <li>Week 6: Master integrated skills through conversation practice and final assessment.</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary" />
              <CardTitle>Practical Applications</CardTitle>
              <CardDescription>Real-world uses of these methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Academic Writing</h4>
                  <p className="text-sm text-muted-foreground">
                    Apply sentence construction rules to create clear, logical academic papers. 
                    Example: "Although research findings vary (C1), they consistently demonstrate a correlation between sleep and academic performance (C2)."
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Business Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the 4-step method to analyze and summarize meeting notes, reports, and business proposals efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Public Speaking</h4>
                  <p className="text-sm text-muted-foreground">
                    Breathing techniques help manage presentation anxiety and create natural pauses for emphasis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GraduationCap className="h-10 w-10 text-primary" />
              <CardTitle>Student Success Stories</CardTitle>
              <CardDescription>Outcomes from applying these methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    "After focusing on sentence construction patterns for just two weeks, my IELTS writing score improved from 6.0 to 7.0. Breaking down complex sentences into smaller parts made a huge difference."
                  </p>
                  <p className="text-xs mt-2 font-medium">— Business Professional, Advanced English Student</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    "The breathing techniques completely transformed my speaking confidence. I no longer run out of breath mid-sentence during presentations."
                  </p>
                  <p className="text-xs mt-2 font-medium">— University Student, Intermediate English Level</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    "The 4-step method helped me organize my thoughts before speaking. Now I can participate in meetings without feeling like my ideas are jumbled."
                  </p>
                  <p className="text-xs mt-2 font-medium">— IT Professional, Upper-Intermediate Level</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Section: Practice Tools */}
        <Card>
          <CardHeader>
            <Gauge className="h-10 w-10 text-primary" />
            <CardTitle>Interactive Practice Tools</CardTitle>
            <CardDescription>Track your progress and enhance your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                  Progress Tracking Worksheet
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Download our structured worksheet to track your improvement over time:
                </p>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1">
                  <li>Weekly practice goals checklist</li>
                  <li>Error pattern identification</li>
                  <li>Sentence structure mastery level</li>
                  <li>4-sentence summary practice space</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                  Breathing Exercise Timer
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Use our specialized timer to practice breathing techniques:
                </p>
                <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 space-y-1">
                  <li>Timed breathing patterns</li>
                  <li>Word-per-breath counter</li>
                  <li>Reading passage practice</li>
                  <li>Performance analytics</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 border-t pt-4">
              <h4 className="font-medium mb-2">Weekly Practice Schedule Template:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Day</th>
                      <th className="text-left p-2">Focus Area</th>
                      <th className="text-left p-2">Practice Activities (45 min total)</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-xs">
                    <tr className="border-b">
                      <td className="p-2">Monday</td>
                      <td className="p-2">Basic Sentence Structure</td>
                      <td className="p-2">S.V & S.V.A practice (15 min) → Read & identify in article (15 min) → Practice with controlled breathing (15 min)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Wednesday</td>
                      <td className="p-2">Expanding Sentences</td>
                      <td className="p-2">Object + Preposition practice (15 min) → Create 4-sentence summaries (15 min) → Apply with syllable stress (15 min)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Friday</td>
                      <td className="p-2">Complex Sentences</td>
                      <td className="p-2">Clause linking practice (15 min) → Apply 4-step method (15 min) → Practice with intonation patterns (15 min)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Weekend</td>
                      <td className="p-2">Integrated Practice</td>
                      <td className="p-2">Review all structures (15 min) → Apply in real conversation (15 min) → Record, analyze and refine (15 min)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}