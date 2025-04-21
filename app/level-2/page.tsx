import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookMarked, ArrowLeft, Globe } from "lucide-react"

export default function Level2Page() {
  const stories = [
    {
      id: "the-two-cousins",
      title: "The Two Cousins",
      origin: "Global",
      description: "Two cousins from different countries spend a wonderful week together, exploring new places and strengthening their family bond.",
      region: "Global",
    },
    {
      id: "malcolms-saturday-morning",
      title: "Malcolm's Saturday Morning",
      origin: "Global",
      description: "Malcolm meets a mysterious visitor named Red who helps him complete his chores in an unexpected way.",
      region: "Global",
    },
    {
      id: "robertos-dinner",
      title: "Roberto's Dinner",
      origin: "Global",
      description: "Roberto misses his father who works at a new restaurant, leading to a heartwarming surprise dinner.",
      region: "Global",
    },
    {
      id: "take-care-of-yourself",
      title: "Take Care of Yourself",
      origin: "Global",
      description: "Two young athletes share their tips for staying healthy and taking care of yourself while playing sports.",
      region: "Global",
    },
    {
      id: "anitasaurus",
      title: "Anitasaurus",
      origin: "Global",
      description: "A young girl dreams of discovering a new species of dinosaur and naming it after herself.",
      region: "Global",
    },
    {
      id: "my-trip-to-cartagena",
      title: "My Trip to Cartagena",
      origin: "Global",
      description: "A child learns about the fascinating history of Cartagena, Colombia, and its encounters with pirates.",
      region: "Global",
    },
    {
      id: "lina-and-the-calendar",
      title: "Lina and the Calendar",
      origin: "Global",
      description: "Lina imagines being Queen of the Calendar and creating special holidays with her father.",
      region: "Global",
    },
    {
      id: "who-took-my-baseball-cards",
      title: "Who Took My Baseball Cards",
      origin: "Global",
      description: "A young baseball fan discovers his missing baseball card collection in an unexpected place.",
      region: "Global",
    },
    {
      id: "the-rabbit-and-the-turtle",
      title: "The Rabbit and the Turtle",
      origin: "Global",
      description: "A classic tale of a race between a confident rabbit and a persistent turtle.",
      region: "Global",
    },
    {
      id: "dear-diary",
      title: "Dear Diary",
      origin: "Global",
      description: "A child documents their exciting family vacation to Costa Rica, exploring rainforests and experiencing new adventures.",
      region: "Global",
    },
    {
      id: "can-inventions-make-our-world-smaller",
      title: "Can Inventions Make Our World Smaller?",
      origin: "Global",
      description: "Learn about important inventions from different cultures that have changed our world, from fireworks to calendars to chocolate.",
      region: "Global",
    },
    {
      id: "the-emperors-new-clothes",
      title: "The Emperor's New Clothes",
      origin: "Danish",
      description:
        "A vain emperor is tricked by two swindlers who promise him the finest clothes that are invisible to those who are unfit for their positions or incompetent.",
      region: "Europe",
    },
    {
      id: "the-nightingale",
      title: "The Nightingale",
      origin: "Danish",
      description:
        "The Emperor of China discovers a nightingale that sings beautifully, but later replaces it with a mechanical bird, only to learn which one truly matters.",
      region: "Europe",
    },
    {
      id: "the-happy-prince",
      title: "The Happy Prince",
      origin: "Irish",
      description:
        "A statue of a prince, decorated with gold and jewels, asks a swallow to help him distribute his riches to the poor people of the city.",
      region: "Europe",
    },
    {
      id: "the-selfish-giant",
      title: "The Selfish Giant",
      origin: "Irish",
      description:
        "A giant forbids children from playing in his garden, causing it to remain in perpetual winter until he learns to share with others.",
      region: "Europe",
    },
    {
      id: "the-gift-of-the-magi",
      title: "The Gift of the Magi",
      origin: "American",
      description:
        "Two young friends each give up their most precious possession to buy a special holiday gift for each other, teaching us about friendship and generosity.",
      region: "North America",
    },
    {
      id: "the-stone-soup",
      title: "The Stone Soup",
      origin: "North America",
      description:
        "When people come together and share their resources, they can create something greater than what they could achieve alone. True magic lies in cooperation and community spirit.",
      region: "North America",
    },
    {
      id: "aladdins-lamp",
      title: "Aladdin's Lamp",
      origin: "Middle Eastern",
      description:
        "A young man named Aladdin finds a magical lamp containing a genie who grants wishes, leading to amazing adventures and learning about wisdom and kindness.",
      region: "Asia",
    },
    {
      id: "the-adventures-of-sinbad",
      title: "The Adventures of Sinbad",
      origin: "Middle Eastern",
      description:
        "A brave sailor named Sinbad goes on seven exciting voyages, meeting friendly creatures and discovering wonderful places.",
      region: "Asia",
    },
    {
      id: "the-firebird",
      title: "The Firebird",
      origin: "Russian",
      description:
        "Prince Ivan captures the magical Firebird and embarks on a quest that leads him to face the evil Koschei the Deathless.",
      region: "Europe",
    },
    {
      id: "the-snow-queen",
      title: "The Snow Queen",
      origin: "Danish",
      description:
        "A young girl embarks on a dangerous journey to rescue her friend who has been taken by the Snow Queen to her palace of ice.",
      region: "Europe",
    },
    {
      id: "the-story-of-momotaro",
      title: "The Story of Momotaro",
      origin: "Japanese",
      description:
        "A boy who was born from a peach grows up to become a hero who defeats a band of troublesome demons with the help of animal companions.",
      region: "Asia",
    },
    {
      id: "why-the-sky-is-far-away",
      title: "Why the Sky is Far Away",
      origin: "Nigerian",
      description:
        "A Nigerian folk tale about why the sky moved away from Earth, teaching lessons about waste, greed, and respecting nature's gifts.",
      region: "Africa",
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

  // Update the region order to show Global first
  const regionOrder = ["Global", "Europe", "Asia", "North America", "Africa"]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 2</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Intermediate Stories</h1>
        </div>
        <p className="max-w-[800px] text-slate-700 md:text-xl">
          Explore 23 classic tales from around the world. These stories are designed for intermediate readers (Grade
          4-5) and will help you develop more advanced reading skills and vocabulary.
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
                    <CardDescription>{story.origin} Tale</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-slate-700">{story.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/level-2/${story.id}`} className="w-full">
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
