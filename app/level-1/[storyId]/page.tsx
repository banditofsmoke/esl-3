import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, ArrowRight } from "lucide-react"
import SummarySubmission from "@/components/summary-submission"

interface StoryPageProps {
  params: {
    storyId: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const { storyId } = params

  // All stories data
  const stories = [
    {
      id: "the-tortoise-and-the-hare",
      title: "The Tortoise and the Hare",
      origin: "Greek",
      content: [
        "Once upon a time, there was a speedy hare who bragged about how fast he could run. Tired of hearing him boast, the tortoise challenged him to a race. The hare laughed at the idea that a tortoise could run faster than him, but agreed to the race.",
        'The race began, and the hare quickly ran ahead of the tortoise. Seeing that he was far ahead, the hare decided to take a nap midway through the course. "I\'ll just sleep here for a while and still win the race," he thought.',
        "The tortoise never stopped, moving slowly but steadily. While the hare was sleeping, the tortoise passed him. When the hare woke up, he saw that the tortoise was near the finish line. He ran as fast as he could, but it was too late. The tortoise had won the race!",
        "The hare felt ashamed that he had lost the race because of his overconfidence. The tortoise taught him an important lesson that day: slow and steady can win the race. Being too proud can lead to failure, while perseverance often leads to success.",
      ],
      vocabulary: [
        { word: "bragged", definition: "talked too proudly about oneself" },
        { word: "boast", definition: "to talk with excessive pride" },
        { word: "challenged", definition: "invited someone to compete" },
        { word: "midway", definition: "in the middle of the way" },
        { word: "steadily", definition: "in a constant, regular manner" },
        { word: "perseverance", definition: "continuing despite difficulties" },
        { word: "ashamed", definition: "feeling shame or guilt" },
        { word: "overconfidence", definition: "too much confidence" },
        { word: "excessive", definition: "more than necessary" },
        { word: "failure", definition: "lack of success" },
      ],
      region: "Europe",
      moral: "Slow and steady wins the race. Perseverance is more important than speed.",
    },
    {
      id: "the-lion-and-the-mouse",
      title: "The Lion and the Mouse",
      origin: "African",
      content: [
        "One day, a mighty lion was sleeping in the forest. A small mouse accidentally ran across the lion's body and woke him up. The angry lion caught the mouse and was about to eat him.",
        'The mouse begged for mercy. "Please let me go, King of the Forest! I promise I\'ll help you someday." The lion laughed at the idea that such a tiny creature could ever help him, but he was feeling generous that day, so he set the mouse free.',
        "A few days later, the lion was caught in a hunter's net. He roared loudly in frustration, unable to escape. The little mouse heard the lion's roars and quickly ran to help. He began gnawing at the ropes of the net.",
        'The mouse\'s sharp teeth soon cut through the ropes, and the lion was free! The lion was amazed and grateful. "You were right, little friend," said the lion. "Even the smallest creature can help the mightiest. Thank you for saving my life."',
      ],
      vocabulary: [
        { word: "mighty", definition: "very powerful and strong" },
        { word: "accidentally", definition: "by chance or unintentionally" },
        { word: "begged", definition: "asked for something urgently" },
        { word: "mercy", definition: "compassion shown to someone" },
        { word: "generous", definition: "willing to give and share" },
        { word: "frustration", definition: "feeling of being upset or annoyed" },
        { word: "gnawing", definition: "biting or chewing repeatedly" },
        { word: "grateful", definition: "feeling or showing thanks" },
        { word: "mightiest", definition: "most powerful" },
        { word: "compassion", definition: "concern for others' suffering" },
      ],
      region: "Africa",
      moral: "A kindness is never wasted. Even the smallest friend can be a great help.",
    },
    {
      id: "the-crow-and-the-pitcher",
      title: "The Crow and the Pitcher",
      origin: "Greek",
      content: [
        "On a hot summer day, a thirsty crow flew over the fields looking for water. After a long search, he found a pitcher with a small amount of water at the bottom. The crow tried to reach the water with his beak, but the pitcher was too tall and his beak was too short.",
        "The crow thought for a moment. He looked around and saw small pebbles on the ground. He had an idea! He began picking up the pebbles one by one and dropping them into the pitcher.",
        "As each pebble fell into the pitcher, the water level rose a little bit. The crow continued dropping pebbles into the pitcher, watching the water rise higher and higher. Finally, the water was high enough for him to reach it with his beak.",
        "The crow drank the cool water and flew away, satisfied with his clever solution. He had learned that thinking and patience can solve difficult problems.",
      ],
      vocabulary: [
        { word: "thirsty", definition: "feeling a need to drink" },
        { word: "pitcher", definition: "a container for holding liquids" },
        { word: "beak", definition: "the hard pointed mouth of a bird" },
        { word: "pebbles", definition: "small smooth stones" },
        { word: "dropping", definition: "letting fall" },
        { word: "level", definition: "the height of something" },
        { word: "rose", definition: "move upward (past tense of rise)" },
        { word: "continued", definition: "kept doing something" },
        { word: "satisfied", definition: "content or pleased" },
        { word: "solution", definition: "a way to solve a problem" },
      ],
      region: "Europe",
      moral: "Where there's a will, there's a way. Intelligence can solve problems that strength cannot.",
    },
    {
      id: "the-monkey-and-the-crocodile",
      title: "The Monkey and the Crocodile",
      origin: "Indian",
      content: [
        "A monkey lived in a large tree by a river. The tree had delicious fruit, and the monkey was very happy there. One day, a crocodile swam up to the tree and rested under it. The kind monkey offered the crocodile some fruit. The crocodile enjoyed the fruit and thanked the monkey.",
        "The crocodile began visiting the monkey regularly, and they became friends. The crocodile's wife heard about the sweet fruit and wanted to taste the monkey's heart, believing it would be as sweet as the fruit he ate. She told her husband to invite the monkey home for dinner, planning to eat him.",
        'The crocodile felt bad about this plan but agreed. He told the monkey, "My wife has invited you for dinner at our home across the river." The monkey was excited but couldn\'t swim. "I\'ll carry you on my back," offered the crocodile.',
        'While swimming, the crocodile revealed the truth. The clever monkey quickly thought of a plan. "Oh no! I left my heart in the tree. We must go back to get it," he said. When they returned to the tree, the monkey jumped to safety and learned never to trust the crocodile again.',
      ],
      vocabulary: [
        { word: "delicious", definition: "very pleasant to taste" },
        { word: "offered", definition: "presented for acceptance" },
        { word: "regularly", definition: "at constant times" },
        { word: "believing", definition: "accepting as true" },
        { word: "planning", definition: "arranging how to do something" },
        { word: "excited", definition: "very enthusiastic and eager" },
        { word: "revealed", definition: "made known" },
        { word: "clever", definition: "quick to understand and learn" },
        { word: "safety", definition: "the state of being safe" },
        { word: "constant", definition: "happening repeatedly" },
      ],
      region: "Asia",
      moral: "Quick thinking can save you from danger. Don't trust those who have betrayed you.",
    },
    {
      id: "the-rabbit-and-the-moon",
      title: "The Rabbit and the Moon",
      origin: "Japanese",
      content: [
        'Long ago, the Old Man of the Moon decided to visit Earth. He disguised himself as a beggar and approached three animals: a monkey, a fox, and a rabbit. "I am hungry. Could you find some food for me?" he asked them.',
        "The monkey quickly climbed trees and gathered fruit. The fox caught a fish from the stream. But the rabbit could only gather grass, which humans cannot eat. The rabbit felt sad that he had nothing good to offer the hungry beggar.",
        'Then the rabbit had an idea. "I will offer myself as food," he thought. The rabbit built a fire and was ready to jump into it when the beggar stopped him. The beggar revealed himself as the Old Man of the Moon.',
        'Touched by the rabbit\'s selfless act, the Old Man of the Moon carried the rabbit back to the moon with him. "Your kindness deserves to be remembered forever," he said. And that is why, if you look at the moon, you can see the shape of a rabbit there to this day.',
      ],
      vocabulary: [
        { word: "disguised", definition: "changed appearance to hide identity" },
        { word: "approached", definition: "came near or nearer to" },
        { word: "gathered", definition: "collected or brought together" },
        { word: "stream", definition: "small flowing body of water" },
        { word: "offer", definition: "present for acceptance" },
        { word: "selfless", definition: "concerned more with others than self" },
        { word: "revealed", definition: "made known or visible" },
        { word: "touched", definition: "emotionally moved" },
        { word: "deserves", definition: "worthy of or qualified for" },
        { word: "identity", definition: "who someone is" },
      ],
      region: "Asia",
      moral: "True sacrifice and selflessness are the greatest virtues.",
    },
    {
      id: "the-coyote-and-the-rabbit",
      title: "The Coyote and the Rabbit",
      origin: "Native American",
      content: [
        'Coyote was always hungry and always looking for his next meal. One day, he spotted Rabbit hopping through the desert. "Aha!" thought Coyote. "Today I will have rabbit stew for dinner." He chased after Rabbit, but Rabbit was too quick and disappeared into a hole.',
        'Coyote waited by the hole, determined to catch Rabbit when he came out. After a while, Rabbit called from behind him, "What are you waiting for, Coyote?" Surprised, Coyote turned around. "How did you get out?" he asked. "There\'s another exit," Rabbit explained. "I\'ll show you where it is."',
        'Rabbit led Coyote to a cactus patch. "The hole is under that big cactus," said Rabbit. Coyote began digging frantically, getting pricked by cactus spines. While Coyote was distracted and in pain, Rabbit quietly hopped away.',
        "When Coyote finally realized there was no hole, Rabbit was long gone. Coyote howled in frustration. Once again, the clever Rabbit had outsmarted him. Coyote vowed to be more careful next time, but somehow, Rabbit always seemed to be one step ahead.",
      ],
      vocabulary: [
        { word: "spotted", definition: "noticed or recognized" },
        { word: "determined", definition: "firmly decided" },
        { word: "exit", definition: "a way out" },
        { word: "explained", definition: "made clear by describing" },
        { word: "frantically", definition: "in a hurried, excited manner" },
        { word: "pricked", definition: "pierced slightly with a sharp point" },
        { word: "distracted", definition: "unable to concentrate" },
        { word: "realized", definition: "became fully aware of" },
        { word: "howled", definition: "made a long, loud cry" },
        { word: "vowed", definition: "made a serious promise" },
      ],
      region: "North America",
      moral: "Cleverness can overcome strength. Think before you act on someone else's advice.",
    },
    {
      id: "the-ant-and-the-grasshopper",
      title: "The Ant and the Grasshopper",
      origin: "Greek",
      content: [
        "All summer long, the ant worked hard. Every day, she collected food and stored it in her anthill. She knew that winter would come, bringing cold weather and no food. The grasshopper, on the other hand, spent his summer singing, dancing, and playing in the sun.",
        '"Why do you work so hard?" the grasshopper asked the ant. "Come and play with me! Summer is for fun." The ant replied, "I\'m preparing for winter. You should do the same." But the grasshopper just laughed and continued playing.',
        "When winter came, the ground froze and snow covered the fields. There was no food to be found anywhere. The ant was safe and warm in her anthill with plenty of food. The grasshopper, however, was cold and hungry with nothing to eat.",
        'The grasshopper went to the ant\'s home and begged for food. The ant shared a little food with him but said, "Now you see why I worked so hard in summer. Next year, you should plan ahead too." The grasshopper learned an important lesson about preparation and hard work.',
      ],
      vocabulary: [
        { word: "collected", definition: "gathered together" },
        { word: "stored", definition: "kept or saved for future use" },
        { word: "preparing", definition: "getting ready" },
        { word: "continued", definition: "kept on doing something" },
        { word: "froze", definition: "turned into ice (past tense of freeze)" },
        { word: "plenty", definition: "a large amount" },
        { word: "however", definition: "but; on the other hand" },
        { word: "begged", definition: "asked for urgently" },
        { word: "shared", definition: "gave a portion to someone else" },
        { word: "preparation", definition: "the act of getting ready" },
      ],
      region: "Europe",
      moral: "It is wise to prepare for hard times during good times.",
    },
    {
      id: "the-fox-and-the-crane",
      title: "The Fox and the Crane",
      origin: "Greek",
      content: [
        "One day, a fox invited a crane to dinner at his home. The crane was happy to accept the invitation and arrived at the fox's house right on time. The fox served soup for dinner, but he served it on a flat plate. The crane, with her long beak, could not drink the soup from the flat plate, while the fox lapped it up easily.",
        "The crane left the fox's house hungry, but she didn't complain. Instead, she invited the fox to dinner at her house the next evening. The fox happily accepted, thinking about what a fine meal he would have.",
        "When the fox arrived at the crane's house, dinner was served in a tall, narrow jar with a long neck. The crane could easily eat from it by dipping her long beak into the jar. But the fox, with his short snout, couldn't reach the food at all.",
        'The fox went home hungry and realized that the crane had taught him a lesson. "I played a trick on you, and you played a trick on me," he thought. The fox learned that he should treat others the way he wants to be treated.',
      ],
      vocabulary: [
        { word: "invitation", definition: "a request to come or participate" },
        { word: "served", definition: "presented food to someone" },
        { word: "lapped", definition: "took up food with the tongue" },
        { word: "complain", definition: "express dissatisfaction" },
        { word: "narrow", definition: "having little width" },
        { word: "dipping", definition: "putting something into liquid briefly" },
        { word: "snout", definition: "the projecting nose and mouth of an animal" },
        { word: "realized", definition: "understood clearly" },
        { word: "trick", definition: "a clever action meant to deceive" },
        { word: "dissatisfaction", definition: "lack of contentment" },
      ],
      region: "Europe",
      moral: "Treat others the way you want to be treated. What goes around comes around.",
    },
    {
      id: "the-magic-fish",
      title: "The Magic Fish",
      origin: "Russian",
      content: [
        'An old fisherman lived with his wife in a small hut by the sea. One day, he caught a golden fish in his net. To his surprise, the fish spoke to him. "Please let me go, kind fisherman. I will grant you a wish if you do." The fisherman was a simple man with a kind heart. He released the fish without asking for anything.',
        'When he told his wife about the magic fish, she was angry. "You fool! Go back and ask the fish for a new washtub. Ours is broken." The fisherman returned to the sea and called the fish. The fish appeared and granted the wish. When the fisherman returned home, a new washtub was there.',
        "But his wife was not satisfied. Each day, she sent him back to ask for more: a new house, then to be a noble, then to be a queen. The fish granted each wish. Finally, the wife wanted to be ruler of the sea and command even the fish.",
        "The fisherman reluctantly went back to the sea. When he told the fish his wife's wish, the fish disappeared without a word. When the fisherman returned home, he found his wife sitting by their old broken washtub in front of their small hut. All the magic gifts were gone because of her greed.",
      ],
      vocabulary: [
        { word: "fisherman", definition: "a person who catches fish" },
        { word: "grant", definition: "to give or allow" },
        { word: "released", definition: "set free" },
        { word: "washtub", definition: "a large tub for washing clothes" },
        { word: "satisfied", definition: "content or pleased" },
        { word: "noble", definition: "a person of high rank" },
        { word: "command", definition: "to give orders" },
        { word: "reluctantly", definition: "unwillingly; with hesitation" },
        { word: "disappeared", definition: "vanished from sight" },
        { word: "greed", definition: "excessive desire for more than needed" },
      ],
      region: "Europe",
      moral: "Be grateful for what you have. Greed leads to loss.",
    },
    {
      id: "the-dragons-pearl",
      title: "The Dragon's Pearl",
      origin: "Chinese",
      content: [
        "Long ago in China, there lived a poor boy named Xiao Ming with his mother. One day while working in the fields, he found a large, shining pearl. It was the most beautiful thing he had ever seen. That night, he discovered the pearl was magic—it could create water and make plants grow.",
        "Xiao Ming used the pearl to water his family's crops. Soon, their farm was thriving even though there was a drought in the land. The Emperor heard about this miracle and sent soldiers to investigate. When they demanded to know his secret, Xiao Ming showed them the pearl.",
        'The soldiers took the pearl to the Emperor. That night, a huge dragon appeared in Xiao Ming\'s dream. "That pearl is mine," said the dragon. "It fell from my crown. Without it, I cannot make rain for the people. Please help me get it back."',
        "Xiao Ming traveled to the palace and told the Emperor about the dragon. The wise Emperor returned the pearl to Xiao Ming, who brought it to the nearby lake. The dragon emerged, thanked the boy for his honesty, and placed the pearl back in his crown. From that day on, the rains came regularly, and the land was never dry again. The Emperor rewarded Xiao Ming and his mother with a fine house for their honesty.",
      ],
      vocabulary: [
        { word: "shining", definition: "giving out or reflecting light" },
        { word: "discovered", definition: "found or learned of" },
        { word: "thriving", definition: "growing or developing well" },
        { word: "drought", definition: "a long period with no rain" },
        { word: "miracle", definition: "an extraordinary event" },
        { word: "investigate", definition: "to examine carefully" },
        { word: "demanded", definition: "asked forcefully" },
        { word: "emerged", definition: "came out or appeared" },
        { word: "honesty", definition: "the quality of being truthful" },
        { word: "regularly", definition: "at constant or definite times" },
      ],
      region: "Asia",
      moral: "Honesty is rewarded. What belongs to others should be returned.",
    },
    {
      id: "anansi-and-the-wisdom-pot",
      title: "Anansi and the Wisdom Pot",
      origin: "West African",
      content: [
        "Anansi the spider wanted to collect all the wisdom in the world. He traveled far and wide, gathering wisdom from every village and storing it in a clay pot. When the pot was full of wisdom, Anansi decided to hide it at the top of a tall tree so no one else could get it.",
        "He tied the pot to his belly and began climbing the tree. But the pot kept getting in his way, making it difficult to climb. Anansi tried different ways to climb, but he kept slipping down the trunk of the tree.",
        "Anansi's young son was watching from below. \"Father,\" he called, \"why don't you tie the pot to your back instead of your belly? Then it won't get in your way.\" Anansi was surprised by his son's smart suggestion.",
        'Suddenly, Anansi realized something important. "I have collected all the wisdom in the world in this pot, yet my own son still has wisdom I didn\'t collect!" In his frustration, Anansi dropped the pot, and it broke open. The wisdom scattered everywhere, spreading throughout the world. And that is why everyone has some wisdom today.',
      ],
      vocabulary: [
        { word: "collect", definition: "to gather together" },
        { word: "wisdom", definition: "knowledge and good judgment" },
        { word: "storing", definition: "keeping for future use" },
        { word: "difficult", definition: "hard to do or accomplish" },
        { word: "slipping", definition: "sliding out of place" },
        { word: "trunk", definition: "the main stem of a tree" },
        { word: "suggestion", definition: "an idea proposed" },
        { word: "realized", definition: "understood clearly" },
        { word: "frustration", definition: "feeling of being upset" },
        { word: "scattered", definition: "spread over a wide area" },
      ],
      region: "Africa",
      moral: "No one person can have all the wisdom in the world. Wisdom is meant to be shared.",
    },
    {
      id: "the-llama-and-the-great-flood",
      title: "The Llama and the Great Flood",
      origin: "Peruvian",
      content: [
        'Long ago in the Andes Mountains, a farmer owned a very special llama. One day, the llama seemed sad and refused to eat. The farmer asked, "What\'s wrong, my friend?" The llama replied, "A great flood is coming that will destroy the world. You must take your family to the top of Mount Willka to be safe."',
        "The farmer was surprised that his llama could talk, but he trusted the animal. He gathered his wife, children, and a few animals, and they followed the llama up the mountain. Other people in the village laughed at the farmer for listening to a llama.",
        "Soon after they reached the top, heavy rains began to fall. The water rose higher and higher, covering the villages and fields below. For five days, the rain continued until only the top of Mount Willka remained above water.",
        "When the flood finally ended, the farmer and his family were the only humans left. The llama revealed that he was sent by the gods to save the kind farmer. Together, they descended the mountain and began to rebuild their lives. The farmer's family became the ancestors of the Peruvian people, and they always remembered to be kind to llamas.",
      ],
      vocabulary: [
        { word: "refused", definition: "said or showed that you will not do something" },
        { word: "replied", definition: "answered or responded" },
        { word: "destroy", definition: "to ruin completely" },
        { word: "gathered", definition: "brought together" },
        { word: "trusted", definition: "believed in the reliability of" },
        { word: "continued", definition: "kept on happening" },
        { word: "revealed", definition: "made known" },
        { word: "descended", definition: "moved downward" },
        { word: "rebuild", definition: "to build again" },
        { word: "ancestors", definition: "people from whom one is descended" },
      ],
      region: "South America",
      moral: "Listen to warnings from unexpected sources. Kindness to animals can bring great rewards.",
    },
  ]

  // Find the current story
  const story = stories.find((s) => s.id === storyId)

  if (!story) {
    return <div>Story not found</div>
  }

  // Find the index of the current story
  const currentIndex = stories.findIndex((s) => s.id === storyId)
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/level-1" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Stories</span>
      </Link>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 1</Badge>
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">{story.origin} Fable</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{story.title}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Story
              </CardTitle>
              <CardDescription>Read the story carefully and prepare to write a summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {story.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-6 rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-2 font-semibold">Moral of the Story</h3>
                  <p className="italic text-slate-700">{story.moral}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <SummarySubmission level="1" />
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
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Explore more stories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {prevStory && (
                  <Link
                    href={`/level-1/${prevStory.id}`}
                    className="flex items-center gap-2 text-slate-800 hover:underline"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous: {prevStory.title}</span>
                  </Link>
                )}
                {nextStory && (
                  <Link
                    href={`/level-1/${nextStory.id}`}
                    className="flex items-center gap-2 text-slate-800 hover:underline"
                  >
                    <span>Next: {nextStory.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/level-1" className="w-full">
                <Button variant="outline" className="w-full">
                  All Stories
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
