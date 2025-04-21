import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookMarked, ArrowLeft, Globe } from "lucide-react"

export default function Level1Page() {
  // Array of 12 stories from around the world
  const stories = [
    {
      id: "mary-has-a-little-lamb",
      title: "Mary Has a Little Lamb",
      origin: "American",
      description: "A classic nursery rhyme about Mary and her faithful lamb that follows her to school.",
      region: "North America",
    },
    {
      id: "the-three-bears",
      title: "The Three Bears",
      origin: "English",
      description: "A simple version of the classic tale of three bears and a little girl who visits their house.",
      region: "Europe",
    },
    {
      id: "school-trip",
      title: "School Trip",
      origin: "Mexican",
      description: "A story about children exploring their city on a school field trip in Monterrey.",
      region: "North America",
    },
    {
      id: "lee-and-the-singing-cat",
      title: "Lee and the Singing Cat",
      origin: "International",
      description: "A tale about a boy who trades his singing cat for a horse to make a better life.",
      region: "Asia",
    },
    {
      id: "school-days",
      title: "School Days",
      origin: "Spanish",
      description: "A day in the life of Teresa, a young student in Spain.",
      region: "Europe",
    },
    {
      id: "who-wants-a-fish",
      title: "Who Wants a Fish?",
      origin: "International",
      description: "A humorous story about a cat trying to catch a fish in a bowl.",
      region: "Global",
    },
    {
      id: "lion-cant-sneeze",
      title: "Lion Can't Sneeze",
      origin: "International",
      description: "A funny tale about a lion who needs help from a little bird to learn how to sneeze.",
      region: "Global",
    },
    {
      id: "loose-tooth",
      title: "Loose Tooth",
      origin: "International",
      description: "Stories about how children from different countries celebrate losing a tooth.",
      region: "Global",
    },
    {
      id: "the-big-rain",
      title: "The Big Rain",
      origin: "International",
      description: "A story about two siblings walking to school on a rainy day.",
      region: "Global",
    },
    {
      id: "my-pet-turtle",
      title: "My Pet Turtle",
      origin: "International",
      description: "A child describes their pet turtle named Slow and how they take care of it.",
      region: "Global",
    },
    {
      id: "the-lost-mitten",
      title: "The Lost Mitten",
      origin: "International",
      description: "A winter tale about a child who loses and finds their favorite mitten.",
      region: "Global",
    },
    {
      id: "lunch-time",
      title: "Lunch Time",
      origin: "International",
      description: "A story about children enjoying their lunch break at school.",
      region: "Global",
    },
    {
      id: "the-soccer-game",
      title: "The Soccer Game",
      origin: "International",
      description: "An exciting tale about a child's soccer game and scoring the winning goal.",
      region: "Global",
    },
    {
      id: "the-new-student",
      title: "The New Student",
      origin: "International",
      description: "A heartwarming story about making friends with a new student from China.",
      region: "Global",
    },
    {
      id: "my-birthday-party",
      title: "My Birthday Party",
      origin: "International",
      description: "A child describes their seventh birthday celebration with friends and family.",
      region: "Global",
    },
    {
      id: "the-hungry-squirrel",
      title: "The Hungry Squirrel",
      origin: "International",
      description: "A gentle tale about sharing food with a friendly squirrel in the park.",
      region: "Global",
    },
    {
      id: "going-to-the-doctor",
      title: "Going to the Doctor",
      origin: "International",
      description: "A story about a child's visit to the doctor when feeling sick.",
      region: "Global",
    },
    {
      id: "the-broken-toy",
      title: "The Broken Toy",
      origin: "International",
      description: "A touching story about a father fixing his child's favorite broken toy car.",
      region: "Global",
    },
    {
      id: "the-class-pet",
      title: "The Class Pet",
      origin: "International",
      description: "A story about students taking care of their classroom's pet rabbit named Spot.",
      region: "Global",
    },
    {
      id: "the-tortoise-and-the-hare",
      title: "The Tortoise and the Hare",
      origin: "Greek",
      description: "A classic tale about a race between a confident hare and a persistent tortoise, teaching the value of steady effort.",
      region: "Europe",
    },
    {
      id: "the-lion-and-the-mouse",
      title: "The Lion and the Mouse",
      origin: "African",
      description: "A tiny mouse proves that even the smallest can help the mightiest when a lion needs help escaping a hunter's net.",
      region: "Africa",
    },
    {
      id: "the-crow-and-the-pitcher",
      title: "The Crow and the Pitcher",
      origin: "Greek",
      description: "A clever crow uses pebbles to raise the water level in a pitcher, showing how intelligence solves problems.",
      region: "Europe",
    },
    {
      id: "the-monkey-and-the-crocodile",
      title: "The Monkey and the Crocodile",
      origin: "Indian",
      description: "A quick-thinking monkey outsmarts a crocodile who tries to trick him, teaching about friendship and betrayal.",
      region: "Asia",
    },
    {
      id: "the-rabbit-and-the-moon",
      title: "The Rabbit and the Moon",
      origin: "Japanese",
      description: "A selfless rabbit is rewarded for offering himself as food to a disguised Moon God.",
      region: "Asia",
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
  const regionOrder = ["Global", "Asia", "Africa", "Europe", "North America", "South America"]

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
          Explore these 42 classic stories from around the world. These stories are perfect for beginning readers and will help
          you practice your reading skills while learning new vocabulary. Don't forget to write your four sentence summary of each story you read. 
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
