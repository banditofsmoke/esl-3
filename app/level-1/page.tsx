import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookMarked, ArrowLeft, Globe } from "lucide-react"

export default function Level1Page() {
  // Array of 12 stories from around the world
  const stories = [
    {
      id: "the-tortoise-and-the-hare",
      title: "The Tortoise and the Hare",
      origin: "Greek",
      description:
        "A classic tale about the race between a tortoise and a hare, teaching that slow and steady wins the race.",
      region: "Europe",
    },
    {
      id: "the-lion-and-the-mouse",
      title: "The Lion and the Mouse",
      origin: "African",
      description: "A small mouse helps a mighty lion, proving that even the smallest creature can help the strongest.",
      region: "Africa",
    },
    {
      id: "the-crow-and-the-pitcher",
      title: "The Crow and the Pitcher",
      origin: "Greek",
      description: "A thirsty crow uses its intelligence to get water from a pitcher by dropping pebbles into it.",
      region: "Europe",
    },
    {
      id: "the-monkey-and-the-crocodile",
      title: "The Monkey and the Crocodile",
      origin: "Indian",
      description: "A clever monkey outsmarts a hungry crocodile who tries to trick him into becoming his meal.",
      region: "Asia",
    },
    {
      id: "the-rabbit-and-the-moon",
      title: "The Rabbit and the Moon",
      origin: "Japanese",
      description: "A kind rabbit is rewarded for his selflessness when he offers himself as food to a hungry beggar.",
      region: "Asia",
    },
    {
      id: "the-coyote-and-the-rabbit",
      title: "The Coyote and the Rabbit",
      origin: "Native American",
      description: "A trickster rabbit repeatedly outsmarts a coyote who is trying to catch him for dinner.",
      region: "North America",
    },
    {
      id: "the-ant-and-the-grasshopper",
      title: "The Ant and the Grasshopper",
      origin: "Greek",
      description:
        "An ant works hard preparing for winter while the grasshopper plays, teaching the importance of preparation.",
      region: "Europe",
    },
    {
      id: "the-fox-and-the-crane",
      title: "The Fox and the Crane",
      origin: "Greek",
      description: "A fox and a crane invite each other to dinner, but each serves food in a way the other cannot eat.",
      region: "Europe",
    },
    {
      id: "the-magic-fish",
      title: "The Magic Fish",
      origin: "Russian",
      description: "A fisherman catches a magic fish that grants wishes, but his wife's greed leads to their downfall.",
      region: "Europe",
    },
    {
      id: "the-dragons-pearl",
      title: "The Dragon's Pearl",
      origin: "Chinese",
      description:
        "A poor boy finds a magical pearl that belongs to a dragon, leading to an adventure of honesty and reward.",
      region: "Asia",
    },
    {
      id: "anansi-and-the-wisdom-pot",
      title: "Anansi and the Wisdom Pot",
      origin: "West African",
      description:
        "Anansi the spider tries to keep all wisdom to himself in a pot, but learns that wisdom should be shared.",
      region: "Africa",
    },
    {
      id: "the-llama-and-the-great-flood",
      title: "The Llama and the Great Flood",
      origin: "Peruvian",
      description: "A llama warns a family about a coming flood, saving them by leading them to a mountain top.",
      region: "South America",
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
  const regionOrder = ["Asia", "Africa", "Europe", "North America", "South America"]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 1</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reading Stories</h1>
        </div>
        <p className="max-w-[800px] text-slate-700 md:text-xl">
          Explore 12 classic fables from around the world. These stories are perfect for beginning readers and will help
          you practice your reading skills while learning new vocabulary.
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
                    <CardDescription>{story.origin} Fable</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-slate-700">{story.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/level-1/${story.id}`} className="w-full">
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
