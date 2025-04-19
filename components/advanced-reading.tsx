"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Globe, Newspaper, BookText } from "lucide-react"
import Link from "next/link"

export default function AdvancedReading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Reading</h2>
        <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          For advanced English learners, we recommend these resources to further develop your reading skills.
        </p>
      </div>

      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-slate-800" />
              <CardTitle>Engoo Daily News</CardTitle>
            </div>
            <CardDescription>Current events written for English learners</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-slate-700">
              Engoo Daily News provides articles on current events written specifically for English learners at various
              levels. Each article includes vocabulary explanations and discussion questions.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://engoo.com/app/daily-news" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-slate-800 hover:bg-slate-700">
                Visit Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-slate-800" />
              <CardTitle>Classic Literature</CardTitle>
            </div>
            <CardDescription>Timeless works of English literature</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-slate-700">
              Reading classic literature helps advanced learners understand cultural references and sophisticated
              language. We recommend starting with these accessible classics.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-700">• "The Great Gatsby" by F. Scott Fitzgerald</li>
              <li className="text-sm text-slate-700">• "To Kill a Mockingbird" by Harper Lee</li>
              <li className="text-sm text-slate-700">• "Animal Farm" by George Orwell</li>
              <li className="text-sm text-slate-700">• "The Old Man and the Sea" by Ernest Hemingway</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.gutenberg.org/browse/scores/top"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-slate-800 hover:bg-slate-700">
                Find Free Classics
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-slate-800" />
              <CardTitle>News Websites</CardTitle>
            </div>
            <CardDescription>Current events from reputable sources</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-slate-700">
              Reading news from reputable sources helps advanced learners stay updated on current events while improving
              their vocabulary and understanding of formal writing.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-700">• BBC News - Simplified English section</li>
              <li className="text-sm text-slate-700">• VOA Learning English</li>
              <li className="text-sm text-slate-700">• News in Levels</li>
              <li className="text-sm text-slate-700">• Breaking News English</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="https://learningenglish.voanews.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-slate-800 hover:bg-slate-700">
                VOA Learning English
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookText className="h-5 w-5 text-slate-800" />
              <CardTitle>Perfect English Grammar</CardTitle>
            </div>
            <CardDescription>Comprehensive grammar resource</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-slate-700">
              Perfect English Grammar offers clear explanations and exercises for all aspects of English grammar. It's
              an excellent resource for advanced learners who want to refine their grammatical accuracy.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-700">• Detailed grammar explanations</li>
              <li className="text-sm text-slate-700">• Practice exercises with answers</li>
              <li className="text-sm text-slate-700">• Common error corrections</li>
              <li className="text-sm text-slate-700">• Advanced tenses and structures</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="https://www.perfect-english-grammar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-slate-800 hover:bg-slate-700">
                Perfect English Grammar
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-slate-50 p-6 text-center">
        <h3 className="text-xl font-bold">Reading Practice Tips</h3>
        <ul className="mt-4 space-y-2 text-left">
          <li className="flex items-start gap-2">
            <div className="mt-1 h-4 w-4 rounded-full bg-slate-800"></div>
            <p className="text-slate-700">
              <span className="font-medium">Read actively:</span> Take notes, highlight unfamiliar words, and summarize
              what you've read.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-4 w-4 rounded-full bg-slate-800"></div>
            <p className="text-slate-700">
              <span className="font-medium">Use a dictionary:</span> Look up words you don't know, but try to guess
              meanings from context first.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-4 w-4 rounded-full bg-slate-800"></div>
            <p className="text-slate-700">
              <span className="font-medium">Discuss what you read:</span> Talk about articles with friends or in a study
              group to practice speaking.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-4 w-4 rounded-full bg-slate-800"></div>
            <p className="text-slate-700">
              <span className="font-medium">Read diverse materials:</span> Mix news, fiction, and non-fiction to expose
              yourself to different writing styles.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
