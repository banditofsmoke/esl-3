import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen } from "lucide-react"
import SummarySubmission from "@/components/summary-submission"

interface StoryPageProps {
  params: {
    storyId: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const { storyId } = params

  // Sample story data for "The Time Traveler"
  // In a real implementation, you would have all stories or fetch them from an API
  const story = {
    id: "the-time-machine",
    title: "The Time Traveler",
    origin: "Science Fiction",
    author: "Original Story",
    content: [
      "Professor Alexander Morris had always been fascinated by the concept of time. Not just the measurement of it—the ticking of clocks or the turning of calendar pages—but the very fabric of it. What if time wasn't a river flowing in one direction, but an ocean that could be navigated with the right vessel? This question consumed him, driving him to spend countless hours in his laboratory, surrounded by equations, mechanical parts, and the skeptical whispers of his colleagues.",
      '"It\'s theoretically impossible," they would say. "Even if you could build such a device, the paradoxes alone would make it unworkable." But Alexander wasn\'t deterred. He had discovered something in his calculations—a loophole in the laws of physics that suggested time travel might be possible after all.',
      "After three years of relentless work, he stood before his creation: a gleaming chair surrounded by a complex array of spinning discs and pulsing lights. It wasn't beautiful in the conventional sense, but to Alexander, it was the most magnificent thing he had ever seen. The Time Machine, as he called it, represented the culmination of his life's work.",
      '"Tonight," he wrote in his journal, "I will make the first journey through time. I\'ve set the coordinates for one hundred years in the future—far enough to see significant changes, but not so distant that I might find Earth uninhabitable. If I don\'t return, this journal will serve as a record of what I attempted."',
      "With trembling hands, he made the final adjustments to the machine. The laboratory hummed with energy as he settled into the chair and activated the mechanism. There was a blinding flash of blue light, a sensation of being stretched and compressed simultaneously, and then... silence.",
      "When Alexander opened his eyes, his laboratory was gone. He sat in his machine in what appeared to be a small park, surrounded by structures that defied description—buildings that seemed to be made of light and material that shifted colors as he watched. The air felt different, charged with an energy he couldn't identify.",
      "People—or what he assumed were people—moved about, their forms obscured by clothing or technology he couldn't comprehend. They paid him little attention, as if a man appearing in a strange machine was a common occurrence. Perhaps, in this future, it was.",
      "Alexander cautiously stepped out of his machine, making sure to secure it with the special key he had designed. The ground beneath his feet pulsed with subtle vibrations, and the sky above was a shade of blue he had never seen before—deeper, more intense, as if the atmosphere itself had changed.",
      'He approached one of the figures, attempting to communicate. "Excuse me," he began, "I\'ve come from the past—your year would be 2124, I believe?"',
      'The figure turned, revealing a face that was almost human but not quite—the proportions were slightly off, the eyes a bit too large, the skin possessing an iridescent quality. "Visitor," it said in a voice that seemed to bypass Alexander\'s ears and speak directly to his mind, "you are mistaken. This is the year 2418."',
      "Alexander staggered back in shock. He had traveled much further than intended—nearly three hundred years instead of one hundred. Something had gone wrong with his calculations or the machine itself. He was now in a world far more advanced and alien than he had prepared for.",
      'Over the next few days, Alexander learned about this new world through a combination of observation and interaction with the beings who called themselves the "Evolved." They were indeed human, but generations of genetic modification and technological integration had changed them significantly. They lived in harmony with advanced artificial intelligence, and the boundaries between human, machine, and environment had blurred.',
      'The most disturbing discovery came when Alexander inquired about the history of the 21st and 22nd centuries. The Evolved spoke of a period they called the "Great Transition"—a time of catastrophic climate change, resource wars, and societal collapse. Billions had perished, and the survivors had been forced to adapt in ways that led to their current evolved state.',
      '"Your time," one of the Evolved told him, "was the precipice. The decisions made then determined our path."',
      "Alexander was overwhelmed with the implications. He had come seeking knowledge, but now carried the burden of foresight. If he returned to his time, what should he do with this information? Try to prevent the catastrophes? But would that change the course of human evolution, potentially preventing the existence of the Evolved?",
      "As he contemplated these questions, Alexander noticed something alarming: his machine was beginning to phase in and out of visibility, suggesting that its connection to his original timeline was unstable. If he didn't return soon, he might be stranded in this future forever.",
      'With a heavy heart, Alexander said goodbye to the Evolved and returned to his machine. As he prepared to activate it, one of them approached him with a small crystalline object. "Take this," the being said. "It contains knowledge that may help your people choose a different path."',
      "Alexander accepted the gift and activated the machine. The journey back was more turbulent than the trip forward, the blue light now interspersed with flashes of red. When the machine finally stabilized, he found himself back in his laboratory, mere hours after his departure.",
      "His colleagues would never believe what he had witnessed. The crystal given to him by the Evolved had become inert during the journey back, its knowledge lost. All he had were his memories and the profound understanding that the future was not fixed—it was shaped by the actions of the present.",
      "Alexander dismantled the Time Machine the next day. Some knowledge, he decided, was too dangerous to pursue. Instead, he dedicated the rest of his life to environmental science and sustainable technology, subtly guiding humanity away from the path that led to the Great Transition.",
      "Years later, as an old man watching his grandchildren play in a garden he had planted, Alexander wondered about the future he had visited. Would it still come to pass? Or had his actions, however small, created ripples that would grow into waves of change? He would never know, and perhaps that was for the best. The future, after all, should remain unwritten—a story for each generation to tell in its own way.",
    ],
    vocabulary: [
      { word: "consumed", definition: "completely filled someone's mind or attention" },
      { word: "deterred", definition: "prevented or discouraged from doing something" },
      { word: "relentless", definition: "continuing without becoming weaker or less determined" },
      { word: "culmination", definition: "the highest point or final result of something" },
      { word: "trembling", definition: "shaking slightly, typically as a result of anxiety, excitement, or weakness" },
      { word: "defied", definition: "openly resisted or refused to obey" },
      { word: "obscured", definition: "made unclear or difficult to see" },
      { word: "comprehend", definition: "understand the meaning or nature of something" },
      { word: "iridescent", definition: "showing luminous colors that change when seen from different angles" },
      { word: "staggered", definition: "moved or caused to move unsteadily as if about to fall" },
      { word: "catastrophic", definition: "involving or causing sudden great damage or suffering" },
      {
        word: "precipice",
        definition: "a very steep rock face or cliff, especially a tall one; figuratively, a dangerous situation",
      },
      {
        word: "implications",
        definition: "the conclusion that can be drawn from something although it is not explicitly stated",
      },
      {
        word: "contemplated",
        definition: "looked thoughtfully at something for a long time; considered a possible future action",
      },
      { word: "inert", definition: "lacking the ability or strength to move; chemically inactive" },
    ],
    region: "Global",
    themes: [
      "The consequences of technological advancement",
      "Human responsibility for the future",
      "The ethical dilemmas of knowledge",
      "Adaptation and evolution",
      "The interconnectedness of time and human decisions",
    ],
    literaryElements: [
      { element: "Setting", description: "Both present-day laboratory and a far-future Earth (2418)" },
      { element: "Protagonist", description: "Professor Alexander Morris, a scientist driven by curiosity" },
      {
        element: "Conflict",
        description:
          "Man vs. Nature/Society - Alexander's discovery of humanity's future challenges his understanding of his responsibility to the present",
      },
      {
        element: "Symbolism",
        description:
          "The Time Machine represents human ambition and the crystal gift symbolizes hope for a different path",
      },
      {
        element: "Theme",
        description: "The story explores how knowledge of the future creates responsibility in the present",
      },
    ],
  }

  if (!story) {
    return <div>Story not found</div>
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/level-3" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Level 3 Stories</span>
      </Link>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 3</Badge>
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">{story.origin} Story</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{story.title}</h1>
        <p className="text-slate-600">By {story.author}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Story
              </CardTitle>
              <CardDescription>Read the story carefully and prepare to analyze its elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {story.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <SummarySubmission level="3" />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Vocabulary</CardTitle>
              <CardDescription>Key words from the story</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {story.vocabulary.map((item, index) => (
                  <li key={index} className="rounded-lg border p-3">
                    <div className="font-medium">{item.word}</div>
                    <div className="text-sm text-slate-600">{item.definition}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literary Elements</CardTitle>
              <CardDescription>Analyze the components of the story</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {story.literaryElements.map((item, index) => (
                  <li key={index} className="rounded-lg border p-3">
                    <div className="font-medium">{item.element}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discussion Questions</CardTitle>
              <CardDescription>Think critically about these aspects of the story</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    How does the author use the concept of time travel to explore human responsibility for the future?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    What ethical dilemmas does Alexander face when he learns about the future? What would you do in his
                    position?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    Compare the "Evolved" humans with present-day humanity. What does this suggest about adaptation and
                    evolution?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    Analyze Alexander's decision to dismantle the Time Machine. Was this the right choice? Why or why
                    not?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    How does the story's ending reflect the theme of individual actions creating larger change?
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Themes</CardTitle>
              <CardDescription>Major themes explored in this story</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {story.themes.map((theme, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-slate-800"></div>
                    <span className="text-sm text-slate-700">{theme}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/level-3" className="w-full">
                <Button variant="outline" className="w-full">
                  All Level 3 Stories
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
