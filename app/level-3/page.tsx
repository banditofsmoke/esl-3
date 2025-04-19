import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookMarked, ArrowLeft, Globe } from "lucide-react"

export default function Level3Page() {
  // Array of 12 stories for Level 3 (Grade 6-8)
  const stories = [
    {
      id: "the-time-machine",
      title: "The Time Traveler",
      origin: "Science Fiction",
      description:
        "A brilliant inventor creates a machine that allows him to travel through time, witnessing the distant future of humanity and confronting the consequences of progress.",
      region: "Europe",
    },
    {
      id: "the-last-leaf",
      title: "The Final Leaf",
      origin: "American",
      description:
        "In a small artist community, a young woman battling pneumonia believes she will die when the last leaf falls from the vine outside her window, until an unexpected act of sacrifice changes everything.",
      region: "North America",
    },
    {
      id: "the-necklace",
      title: "The Diamond Necklace",
      origin: "French",
      description:
        "A woman borrows an expensive necklace for a party but loses it, spending the next decade working to repay the debt, only to discover a shocking truth about its value.",
      region: "Europe",
    },
    {
      id: "the-open-window",
      title: "The Open Window",
      origin: "British",
      description:
        "A nervous man visiting a rural retreat is told a haunting story by a young girl about the open window in the house, leading to unexpected consequences when her uncle returns home.",
      region: "Europe",
    },
    {
      id: "the-gold-bug",
      title: "The Golden Scarab",
      origin: "American",
      description:
        "After finding an unusual golden beetle, a man becomes obsessed with deciphering a mysterious code that he believes will lead to buried treasure on a remote island.",
      region: "North America",
    },
    {
      id: "the-monkey-paw",
      title: "The Enchanted Talisman",
      origin: "British",
      description:
        "A family comes into possession of a magical item said to grant three wishes, but each wish comes with terrible consequences that teach them about fate and interference with destiny.",
      region: "Europe",
    },
    {
      id: "the-gift-of-the-river",
      title: "The Gift of the River",
      origin: "Egyptian",
      description:
        "In ancient Egypt, a young scribe discovers a mysterious papyrus floating on the Nile that contains wisdom from the past and predictions about the future, changing his destiny forever.",
      region: "Africa",
    },
    {
      id: "the-secret-garden",
      title: "The Hidden Garden",
      origin: "British",
      description:
        "A lonely, sickly girl discovers a locked garden on her uncle's estate and, with the help of unexpected friends, brings it back to life, finding healing and joy in the process.",
      region: "Europe",
    },
    {
      id: "journey-to-the-stars",
      title: "Journey to the Stars",
      origin: "Science Fiction",
      description:
        "A young astronomer makes a groundbreaking discovery that challenges our understanding of the universe, leading to an unexpected journey that tests the limits of human knowledge.",
      region: "Global",
    },
    {
      id: "the-jade-pendant",
      title: "The Jade Pendant",
      origin: "Chinese",
      description:
        "During the Ming Dynasty, a craftsman creates a jade pendant with unusual properties that passes through generations, influencing the lives of all who possess it.",
      region: "Asia",
    },
    {
      id: "echoes-of-thunder",
      title: "Echoes of Thunder",
      origin: "Native American",
      description:
        "A coming-of-age story about a young person who must complete a challenging journey through the wilderness to understand their heritage and find their place in the tribe.",
      region: "North America",
    },
    {
      id: "the-lighthouse-keeper",
      title: "The Lighthouse Keeper",
      origin: "Maritime",
      description:
        "Isolated on a remote island, a lighthouse keeper begins to experience strange occurrences during a violent storm, forcing them to confront both natural and supernatural forces.",
      region: "Global",
    },
  ]

  // Group stories by region
  const storiesByRegion = stories.reduce(
    (acc, story) => {
      if (!acc[story.region]) {
        acc[story.region] = []
      }
      acc[story.region].push(story)
      return acc
    },
    {} as Record<string, typeof stories>,
  )

  // Order of regions
  const regionOrder = ["Europe", "North America", "Asia", "Africa", "Global"]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 3</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Advanced Stories</h1>
        </div>
        <p className="max-w-[800px] text-slate-700 md:text-xl">
          Explore 12 engaging stories designed for advanced readers (Grade 6-8). These stories feature more complex
          themes, sophisticated vocabulary, and deeper character development to enhance your reading comprehension and
          critical thinking skills.
        </p>
      </div>

      <div className="space-y-12">
        {regionOrder.map((region) => (
          <div key={region} className="space-y-6">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-slate-800" />
              <h2 className="text-2xl font-bold">{region}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {storiesByRegion[region]?.map((story) => (
                <Card key={story.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BookMarked className="h-5 w-5 text-slate-800" />
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                    </div>
                    <CardDescription>{story.origin} Story</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-slate-700">{story.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/level-3/${story.id}`} className="w-full">
                      <Button className="w-full bg-slate-800 hover:bg-slate-700">Read Story</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
