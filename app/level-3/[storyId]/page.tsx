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

interface VocabularyItem {
  word: string
  definition: string
}

interface LiteraryElement {
  element: string
  description: string
}

interface Story {
  id: string
  title: string
  origin: string
  author: string
  content: string[]
  vocabulary: VocabularyItem[]
  region: string
  themes: string[]
  literaryElements: LiteraryElement[]
}

const stories: { [key: string]: Story } = {
  "the-time-machine": {
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
  },
  "the-last-leaf": {
    id: "the-last-leaf",
    title: "The Final Leaf",
    origin: "American",
    author: "Original Story",
    content: [
      "In the bustling art district of Greenwich Village, where creativity flourished amid narrow streets and old brownstones, lived two young artists named Sue and Johnsy. They shared a small studio apartment on the third floor of a weathered building, their walls adorned with half-finished canvases and dreams of artistic success.",
      "Winter had arrived early that year, bringing with it not just cold winds but also a deadly pneumonia epidemic that swept through the neighborhood. Johnsy, the younger of the two friends, had fallen victim to the illness and lay in her bed, growing weaker by the day.",
      "Through the window near her bed, Johnsy could see an old ivy vine clinging to the brick wall of the neighboring building. As her fever rose and her strength diminished, she began to fixate on the vine's leaves, which were gradually falling due to the autumn winds and early frost.",
      '"When the last leaf falls, I shall go too," Johnsy whispered one morning, her voice barely audible. Sue, who had been tending to her friend day and right, felt her heart sink at these words. She knew that when pneumonia patients lost their will to live, no medicine could save them.',
      'Sue reported Johnsy\'s concerning behavior to their elderly neighbor, Mr. Behrman. A failed artist who had spent forty years attempting to paint his masterpiece, Behrman lived in the basement apartment. Despite his gruff exterior and apparent cynicism about art, he had always felt protective of the two young women upstairs.',
      '"Vat!" he exclaimed upon hearing about Johnsy\'s morbid countdown. "Are there people in ze world so foolish to die because leaves drop from a vine? I have not heard of such nonsense!" Nevertheless, concern shadowed his weathered face.',
      "That night, a harsh storm battered the city. Rain poured in torrents, and the wind howled through the streets, tearing leaves from trees and vines. Sue drew the blinds in Johnsy's room, insisting that her friend not watch the ivy vine in such weather.",
      "The next morning, Johnsy demanded that Sue raise the shade. There, miraculously, a single leaf still clung to the vine. Dark green near its stem, it faded to a striking yellow at its edges, appearing almost lifelike against the red brick wall.",
      '"It is the last one," Johnsy observed. "I thought it would surely fall during the night. I heard the wind. It will fall today, and then I shall die too."',
      "Hour after hour passed. The leaf remained. Another night fell, and in the morning, the leaf continued its vigil. Days passed, and gradually, Johnsy's fever began to break. Her appetite returned, and with it, her will to live.",
      '"Sue," she said one day, as she sipped hot soup, "I\'ve been a foolish girl. It was silly to think that falling leaves could determine when someone dies. Would you please tell me what\'s happening in the neighborhood? I\'ve missed so much."',
      "Only after Johnsy had recovered did Sue share the truth. Mr. Behrman had been found in his basement apartment, soaked and shivering, his shoes and clothing drenched from the storm. Beside him lay a ladder, some scattered green and yellow paint, and a palette with traces of brown and red pigments.",
      "He had ventured out during that terrible night, braving the storm to paint his masterpiece: a single, perfect ivy leaf on the brick wall. The leaf that had given Johnsy the will to live. Two days later, Mr. Behrman died of pneumonia in the hospital.",
      '"He was so gruff and seemed to care so little about art," Johnsy said softly, tears in her eyes. "Yet he created the most meaningful masterpiece I\'ve ever seen."',
      "Sue squeezed her friend's hand. \"Sometimes the greatest art isn't what hangs in galleries,\" she replied. \"It's the kind that saves lives.\"",
      "In the years that followed, both Sue and Johnsy became successful artists, their work displayed in prestigious galleries. But in their shared studio, they kept a small, simple painting of an ivy leaf. It served as a reminder that the most profound masterpieces are often born not from a desire for fame or recognition, but from an act of love.",
      "And though the painted leaf had long since faded from the brick wall outside, its impact had created ripples that continued to touch lives. The story of Mr. Behrman's final masterpiece became a legend in Greenwich Village, whispered among artists as a testament to the transformative power of both art and sacrifice.",
      "Whenever young artists arrived in the neighborhood, full of dreams and uncertainty, they would eventually hear the tale of the last leaf and the artist who gave his life to paint it. It reminded them that true art wasn't merely about technique or recognition—it was about touching hearts and saving souls.",
    ],
    vocabulary: [
      { word: "flourished", definition: "grown or developed in a healthy or vigorous way" },
      { word: "epidemic", definition: "a widespread occurrence of an infectious disease" },
      { word: "fixate", definition: "become obsessively focused on something" },
      { word: "cynicism", definition: "an inclination to believe that people are motivated purely by self-interest" },
      { word: "vigil", definition: "a period of keeping awake during normal sleeping hours" },
      { word: "weathered", definition: "showing the effects of exposure to weather; worn by age and exposure" },
      { word: "torrents", definition: "strong and fast-moving streams of water or other liquid" },
      { word: "gruff", definition: "rough or stern in manner or speech" },
      { word: "profound", definition: "very great or intense; showing great knowledge or insight" },
      { word: "testament", definition: "something that serves as evidence or proof of a specified fact" },
      { word: "prestigious", definition: "inspiring respect and admiration" },
      { word: "transformative", definition: "causing a marked change in someone or something" },
      { word: "ripples", definition: "spreading effects or consequences of an action or event" },
      { word: "resilience", definition: "the capacity to recover quickly from difficulties" },
      { word: "masterpiece", definition: "a work of outstanding artistry or skill" }
    ],
    region: "North America",
    themes: [
      "The power of hope and resilience",
      "Sacrifice and selfless love",
      "Art as a force for healing",
      "The impact of individual actions",
      "The true meaning of masterpiece"
    ],
    literaryElements: [
      { element: "Setting", description: "Greenwich Village art district during a winter epidemic" },
      { element: "Protagonist", description: "Johnsy, a young artist battling pneumonia, and Mr. Behrman, the elderly artist" },
      { element: "Conflict", description: "Man vs. Self (Johnsy's will to live) and Man vs. Nature (the winter storm)" },
      { element: "Symbolism", description: "The ivy leaf represents hope, resilience, and the power of art to inspire" },
      { element: "Theme", description: "True artistry lies not in technical skill but in the ability to touch and save lives" }
    ]
  },
  "the-necklace": {
    id: "the-necklace",
    title: "The Diamond Necklace",
    origin: "French",
    author: "Original Story",
    content: [
      "Mathilde Loisel was born into a family of clerks, yet she dreamed of a life filled with luxury and admiration. Despite her modest social status, she possessed a natural elegance that seemed at odds with her simple surroundings. Her small apartment, practical furniture, and ordinary life felt like a prison to her imagination, which constantly wandered to grand salons and glittering ballrooms.",
      "Her husband, a minor clerk in the Ministry of Education, was content with their life. One evening, he returned home clutching an invitation with obvious pride. \"Look at this,\" he said excitedly. \"An invitation to the Ministry's annual ball! Everyone who matters will be there.\" Instead of the joy he expected, Mathilde burst into tears.",
      '"What could I possibly wear?" she sobbed. "I can\'t attend such an event in any of my simple dresses." Her husband, eager to please, offered his small savings meant for a hunting rifle. "Buy something suitable," he said gently. Though the sacrifice touched her, Mathilde\'s tears didn\'t subside.',
      '"It\'s not enough to have a dress," she explained. "I don\'t have a single piece of jewelry to wear. I\'ll look like a pauper among all those rich women." After a moment of thought, she added, "I should just decline the invitation. Give it to a colleague whose wife has proper attire."',
      'Her husband suggested, "Why don\'t you visit your friend Madame Forestier? She has plenty of jewelry. Surely she would lend you something." Mathilde\'s eyes lit up at the idea. The next day, she visited her wealthy friend, who gladly opened her jewel box and told her to choose anything she liked.',
      "After trying several pieces, Mathilde discovered a stunning diamond necklace. When she held it against her neck, her heart raced with excitement. This was exactly what she needed to feel equal to the other guests. Madame Forestier readily agreed to loan it, and Mathilde left clutching the precious jewels as if they were already a part of her.",
      "The night of the ball exceeded all of Mathilde's dreams. She was the most beautiful woman there, elegant, graceful, smiling, and wild with joy. All the men noticed her, asked to be introduced, and wanted to dance with her. Even high-ranking officials sought her company. She danced with intoxicating pleasure, carried away by the music, thinking of nothing but her own beauty and success.",
      "They left around four in the morning. Mathilde wanted to flee quickly, avoiding the other guests who were donning their modest wraps. But her husband insisted on following proper etiquette. While he went to find their coats, she waited in an empty hallway. When they finally stepped into the cold street, they found no carriages remaining.",
      "They walked through the deserted streets of Paris, their footsteps echoing in the pre-dawn silence. Reaching home, Mathilde removed her wraps and gave one final look at herself in the mirror. Suddenly, she screamed. The necklace was gone.",
      "What followed was a week of desperate searching. They retraced their steps, contacted the police, offered rewards, and checked with every possible person who might have found it. But the necklace had vanished completely. Finally, they visited every jeweler in Paris until they found one who could make an exact replica. The cost: thirty-six thousand francs.",
      "To raise the money, they borrowed from everyone they knew, making ruinous promises and commitments. Mr. Loisel took additional jobs at night, while Mathilde dismissed their servant and moved to an even smaller apartment. She learned to do heavy housework, to wash dishes, to haggle with merchants over every centime.",
      "For ten long years, they lived this harsh life, paying back their enormous debt. Mathilde's beauty faded; her hands grew red and rough, her voice became loud, and her elegant manners disappeared. By the end of it, she had transformed into a strong, hard, common woman of a poor household.",
      "One Sunday, while taking a rare walk in the Champs-Élysées to rest from the week's labors, Mathilde spotted Madame Forestier, still young, still beautiful, still wealthy. Impulsively, she decided to speak to her. \"Should I tell her about the replacement necklace?\" she wondered. \"Why not? We've paid for it fully now.\"",
      '"Jeanne!" she called out. Madame Forestier didn\'t recognize her old friend at first. When Mathilde explained who she was, Madame Forestier exclaimed, "Oh, my poor Mathilde! You\'ve changed so much!"',
      '"Yes," Mathilde replied, "I\'ve had a hard life since I last saw you. And you\'re responsible for much of it!" At her friend\'s confused expression, she explained everything: the loss of the necklace, the replacement, the decade of poverty and hard work to pay for it.',
      'Madame Forestier stopped walking and stared at her. "You say you bought a diamond necklace to replace mine?" she asked. "Yes," Mathilde replied proudly. "You never noticed the difference, did you? They were very similar." Madame Forestier took her hands. "Oh, my poor Mathilde! My necklace was fake. It was worth at most five hundred francs!"',
      "The revelation hit Mathilde like a physical blow. All those years of hardship, of backbreaking work, of living in poverty—all for nothing. She had paid thirty-six thousand francs for a replica of a piece of costume jewelry. The irony of her situation struck her with such force that she couldn't speak.",
      "As she walked home alone that day, Mathilde thought about pride, appearances, and the true value of things. She had wanted so desperately to appear wealthy for one night that she had condemned herself to a decade of genuine poverty. The fake diamonds she had borrowed had cost her more than real ones ever could.",
      "Yet something else occurred to her: during those ten years of hardship, she had discovered strength she never knew she possessed. She had learned to work, to endure, to build a life out of nothing. Perhaps these lessons, though dearly bought, were worth more than any diamond necklace, real or fake.",
    ],
    vocabulary: [
      { word: "elegance", definition: "graceful and stylish in appearance or manner" },
      { word: "intoxicating", definition: "exhilarating or exciting; making someone lose control" },
      { word: "pauper", definition: "a very poor person" },
      { word: "replica", definition: "an exact copy or model of something" },
      { word: "ruinous", definition: "causing financial ruin; disastrous" },
      { word: "haggle", definition: "dispute or bargain persistently about a price" },
      { word: "centime", definition: "a former French coin worth one-hundredth of a franc" },
      { word: "impulsively", definition: "acting or done without forethought" },
      { word: "revelation", definition: "a surprising and previously unknown fact" },
      { word: "irony", definition: "a state of affairs that appears deliberately contrary to what one expects" },
      { word: "endure", definition: "suffer patiently; remain in existence" },
      { word: "modest", definition: "unassuming in the estimation of one's abilities or achievements" },
      { word: "precious", definition: "of great value; not to be wasted or treated carelessly" },
      { word: "etiquette", definition: "the customary code of polite behavior" },
      { word: "dearly", definition: "at a high cost; expensively" }
    ],
    region: "Europe",
    themes: [
      "The price of pride and vanity",
      "Appearance versus reality",
      "The true value of possessions",
      "Personal transformation through adversity",
      "The cost of social ambition"
    ],
    literaryElements: [
      { element: "Setting", description: "Late 19th century Paris, contrasting between high society and working class" },
      { element: "Protagonist", description: "Mathilde Loisel, a beautiful but discontented young woman" },
      { element: "Conflict", description: "Person vs. Society (social class aspirations) and Person vs. Self (pride and vanity)" },
      { element: "Symbolism", description: "The necklace represents false value and the destructive power of appearances" },
      { element: "Irony", description: "The devastating cost paid for a worthless imitation of wealth" }
    ]
  },
  "the-open-window": {
    id: "the-open-window",
    title: "The Open Window",
    origin: "British",
    author: "Original Story",
    content: [
      "Framton Nuttel, a nervous man seeking solitude to cure his anxiety disorder, arrived at the rural estate of Mrs. Sappleton. The aunt's niece, a remarkably composed young lady of fifteen named Vera, received him in the drawing room while they waited for her aunt to appear.",
      '"Do you know many people here?" asked Vera, settling herself comfortably in a wicker chair. When Framton admitted that he knew absolutely nobody in the area, a gleam of opportunity flickered in the young girl\'s eyes.',
      '"Then you know nothing about my aunt?" she continued. Framton confessed his ignorance. Vera looked with pure sympathy at the large French window that opened onto the lawn. "That window is a rather tragic part of our history," she said solemnly.',
      '"How so?" Framton\'s nerves tingled with anticipation of some ghostly tale. Vera\'s voice dropped to a hushed, dramatic tone. "Exactly three years ago to the day, my aunt\'s husband and her two younger brothers went out through that window for their day\'s shooting. They never came back."',
      'Vera\'s eyes wandered to the window as she spoke. "In crossing the moor to their favorite snipe-shooting ground, they were all three engulfed in a treacherous bog. Their bodies were never recovered." Her voice trembled slightly. "That was the dreadful part of it."',
      '"Poor aunt always thinks they will return. She has that window opened every evening until dusk. And sometimes," Vera\'s voice became barely audible, "on still, quiet evenings like this, she says she can hear their voices calling to her from across the moor, and the sound of her husband\'s voice singing his favorite old song."',
      "There was a long silence. Framton felt his skin crawl. The setting sun cast long shadows across the lawn, and a chilly October breeze rustled through the garden. The open French window suddenly seemed more ominous than welcoming.",
      '"Here is my aunt," said Vera brightly, as Mrs. Sappleton entered the room. The older woman apologized for keeping Framton waiting. "I hope Vera has been amusing you?" she said cheerfully.',
      '"The window is open," Framton noted, trying to keep the tremor from his voice. "My husband and brothers will be home directly," Mrs. Sappleton announced happily. "They\'ve been out for their day\'s shooting. They\'re always so muddy when they come in."',
      "Framton cast a horrified glance at Vera, but she was staring through the window with rapt attention. Following her gaze, he saw three figures walking across the lawn, carrying guns and a hunting spaniel trotting at their heels.",
      "With a strangled cry, Framton grabbed his stick and hat. He fled the house at top speed, nearly colliding with a passing cyclist in his haste. He never returned to find out what happened next.",
      '"A most extraordinary man," said Mrs. Sappleton. "Could only talk about his illnesses, and dashed off without a word of goodbye when my husband and brothers came in. One would think he had seen a ghost."',
      '"I expect it was the spaniel," said Vera calmly. "He told me he had a horror of dogs. He was once hunted into a cemetery on a mountainside in India by a pack of stray dogs, and had to spend the night in a newly dug grave with the creatures snarling and foaming just above him. That\'s enough to make anyone lose their nerve."',
      "Mrs. Sappleton looked disappointed. \"I had hoped he might be someone interesting to add to our little social circle. Your uncle gets so few new listeners for his hunting stories.\"",
      "Vera returned to her book, hiding a small, satisfied smile. Romance at short notice was her specialty, and she had just added another masterpiece to her collection of improvised tales.",
      "Later that evening, as she prepared for bed, Vera reflected on her afternoon's performance. She had perfected the art of the open window story over many visitors, each telling slightly different, each reaction uniquely satisfying. The truth—that her aunt's husband and brothers had simply been delayed at their club that one time three years ago—was far too mundane for her theatrical tastes.",
      "In her imagination, she was not a young girl in a quiet country house, but a master storyteller, weaving tales that transformed ordinary afternoons into extraordinary adventures. The open window had become her stage, and unsuspecting visitors like Mr. Nuttel were her unwitting audience.",
      "And so the legacy of the open window continued, not as a tragic tale of loss, but as a testament to the power of imagination and the delightful mischief of a young girl who understood that sometimes the best stories are the ones we create ourselves.",
    ],
    vocabulary: [
      { word: "solitude", definition: "the state or situation of being alone" },
      { word: "composed", definition: "having one's feelings and expression under control; calm" },
      { word: "gleam", definition: "a brief or dim flash of light" },
      { word: "solemn", definition: "formal and dignified; serious" },
      { word: "treacherous", definition: "dangerous because of hidden risks; deceptively dangerous" },
      { word: "engulfed", definition: "swallowed up or overwhelmed by something" },
      { word: "ominous", definition: "giving the worrying impression that something bad is going to happen" },
      { word: "rapt", definition: "completely fascinated or absorbed by something" },
      { word: "mundane", definition: "lacking interest or excitement; dull" },
      { word: "improvised", definition: "created and performed spontaneously; made without preparation" },
      { word: "theatrical", definition: "exaggerated and dramatic, especially for effect" },
      { word: "legacy", definition: "something handed down from the past" },
      { word: "testament", definition: "something that serves as evidence or proof" },
      { word: "mischief", definition: "playful misbehavior or troublemaking" },
      { word: "unwitting", definition: "not aware of the full facts; unintentionally" }
    ],
    region: "Europe",
    themes: [
      "The power of imagination and storytelling",
      "Appearance versus reality",
      "The manipulation of truth",
      "Social expectations and manners",
      "The nature of fear and anxiety"
    ],
    literaryElements: [
      { element: "Setting", description: "A rural English country estate during the early 20th century" },
      { element: "Protagonist", description: "Vera, a young girl with a talent for improvised storytelling" },
      { element: "Conflict", description: "Person vs. Person (Vera's manipulation of Framton) and Person vs. Society (expectations vs. reality)" },
      { element: "Irony", description: "The contrast between the tragic tale and the mundane truth" },
      { element: "Theme", description: "The story explores how imagination and deception can transform ordinary situations into extraordinary ones" }
    ]
  },
  "the-gold-bug": {
    id: "the-gold-bug",
    title: "The Golden Scarab",
    origin: "American",
    author: "Original Story",
    content: [
      "William Legrand lived in seclusion on Sullivan's Island, off the coast of South Carolina, accompanied only by his faithful servant Jupiter and an unusual collection of scientific instruments. Once a wealthy man of New Orleans, he had retreated to this remote location after a series of financial misfortunes, finding solace in his naturalist pursuits.",
      "One autumn evening, while exploring the island's sandy shores, Legrand discovered an extraordinary specimen: a beetle that gleamed like burnished gold. The scarab's metallic shell reflected the setting sun with an almost supernatural brilliance, and its unusual markings immediately captured his scientific curiosity.",
      '"By Jupiter!" he exclaimed, carefully examining the insect. "I\'ve never seen anything like it in all my years of collecting. The markings... they\'re not random patterns. They almost look like... writing." His servant Jupiter, a devoted but superstitious man, regarded the beetle with unease.',
      "That night, Legrand couldn't sleep. The beetle's markings haunted his thoughts, seeming to shift and rearrange themselves in his mind. He began to sketch them on a piece of parchment, but in his excitement, he could find only an old letter to draw upon. As he finished the sketch, he held it near the fire to examine it better.",
      "To his astonishment, new marks began to appear on the parchment—invisible ink, revealed by the heat! The marks formed a cryptogram, a sequence of symbols that Legrand instantly recognized as an encrypted message. His hands trembled as he realized the magnitude of his discovery.",
      '"This is no ordinary beetle," he muttered, pacing his small cabin. "These markings... they\'re a key to something far more valuable." Over the next several days, Legrand became increasingly obsessed with decoding the message, barely eating or sleeping.',
      "Using his knowledge of frequency analysis and symbol substitution, he gradually began to crack the code. The message, written in multiple languages and layers of encryption, spoke of an immense treasure buried by the infamous pirate Captain Kidd somewhere on the island.",
      '"The beetle itself is the key," Legrand explained to a skeptical Jupiter. "Its markings match certain elements of the code, and its unusual composition—fool\'s gold, not real gold—was meant to mislead treasure hunters. The real gold lies elsewhere."',
      "The decoded message provided specific instructions: they needed to drop the beetle through the left eye of a skull attached to a particular tree branch, and where it fell would mark the center point for their excavation. But finding the right tree proved to be another puzzle entirely.",
      "For weeks, they searched the island, measuring distances, analyzing shadows, and comparing landmarks to the cryptic descriptions in the message. Jupiter worried about his master's growing obsession, but Legrand's calculations grew more precise with each passing day.",
      "Finally, on a moonless night, they located the tree—an ancient oak with one branch extending at exactly the angle described in the code. With trembling hands, Legrand attached a string to the golden scarab and carefully dropped it through the eye socket of a skull they had secured to the branch.",
      "They dug through the night, following additional instructions revealed by their measurements. At dawn, their shovels struck something solid. Beneath layers of soil and stone, they discovered a massive chest filled with gold coins, precious gems, and ancient artifacts—Captain Kidd's legendary treasure.",
      '"You see, Jupiter," Legrand said, holding up the beetle, "sometimes the greatest treasures are found not by chance, but by paying attention to the patterns that others overlook. This creature\'s markings weren\'t just decorative—they were a message waiting to be understood."',
      "The discovery made headlines across the country, but Legrand's greatest satisfaction came not from the treasure itself, but from having solved the intricate puzzle. He donated most of the find to museums and universities, using only enough to restore his modest estate.",
      "The golden scarab, now preserved in a small glass case on his desk, served as a reminder that knowledge and observation were often the most valuable treasures one could possess. Its mysterious markings had led not just to gold, but to a deeper understanding of how nature and human ingenuity could intertwine.",
      "In the years that followed, Legrand established a small but respected research institution on Sullivan's Island, dedicated to the study of cryptography and natural history. The story of the golden scarab became legend, inspiring generations of scientists and puzzle-solvers to look more closely at the patterns hidden in the natural world.",
      "Visitors to the institution would often ask to see the famous beetle, expecting to find a gaudy golden insect. Instead, they found a modest scarab whose true value lay not in its metallic sheen, but in the secrets it had revealed to those patient enough to understand its message.",
      "And sometimes, on quiet evenings, Legrand would hold the beetle up to the light, watching its markings shimmer, and wonder what other messages might still be waiting to be discovered in the seemingly ordinary things that surrounded them all.",
    ],
    vocabulary: [
      { word: "seclusion", definition: "the state of being private and away from other people" },
      { word: "burnished", definition: "polished and shining as if rubbed with metal" },
      { word: "cryptogram", definition: "a text written in code or cipher" },
      { word: "magnitude", definition: "the great size or extent of something" },
      { word: "frequency", definition: "the rate at which something occurs over a particular period" },
      { word: "composition", definition: "the nature of something's ingredients or constituents" },
      { word: "excavation", definition: "the act of digging something out of the ground" },
      { word: "cryptic", definition: "having a meaning that is mysterious or unclear" },
      { word: "meticulous", definition: "showing great attention to detail; very careful and precise" },
      { word: "ingenuity", definition: "the quality of being clever, original, and inventive" },
      { word: "intertwine", definition: "to connect or link closely together" },
      { word: "patron", definition: "a person who gives financial support to a person, organization, or cause" },
      { word: "superstitious", definition: "having or showing a belief in supernatural forces" },
      { word: "decipher", definition: "to succeed in understanding or interpreting something" },
      { word: "profound", definition: "very great or intense; showing great knowledge or insight" }
    ],
    region: "North America",
    themes: [
      "The relationship between observation and discovery",
      "The value of patience and persistence",
      "The interplay of science and mystery",
      "Knowledge versus material wealth",
      "The importance of pattern recognition"
    ],
    literaryElements: [
      { element: "Setting", description: "Sullivan's Island, South Carolina, during the mid-19th century" },
      { element: "Protagonist", description: "William Legrand, a reclusive naturalist with a talent for solving puzzles" },
      { element: "Conflict", description: "Man vs. Mystery (decoding the beetle's secret) and Man vs. Self (obsession with the puzzle)" },
      { element: "Symbolism", description: "The golden scarab represents hidden knowledge and the deceptive nature of appearances" },
      { element: "Theme", description: "True value lies not in gold but in the pursuit of knowledge and understanding" }
    ]
  },
  "the-monkey-paw": {
    id: "the-monkey-paw",
    title: "The Enchanted Talisman",
    origin: "British",
    author: "Original Story",
    content: [
      "In a cozy cottage on the outskirts of London, the White family—Herbert, Mary, and their son John—sat around a crackling fire, listening to their guest, Sergeant-Major Morris, tell tales of his adventures in India. The wind howled outside, but inside, the atmosphere was warm and comfortable until the sergeant produced a curious object from his pocket.",
      '"What\'s that?" asked John, leaning forward to examine what appeared to be a small, withered hand, dark and mummified. The sergeant-major hesitated before answering, "This is the Monkey\'s Paw—a powerful talisman that grants three wishes to three different owners."',
      '"How perfectly splendid!" exclaimed Mary, but Morris shook his head gravely. "It was enchanted by a holy man who wanted to prove that those who interfered with fate did so to their sorrow. Each wish is granted, but with such horrible consequences that the third owner always wishes for death."',
      '"If you\'ve had your three wishes," said Herbert, with a knowing smile, "why don\'t you pass it on to someone else?" Morris threw the talisman into the fire. Mr. White quickly retrieved it, despite Morris\'s warnings. "I have no more use for it," Morris said, "but I warn you: wish for reasonable things."',
      "After Morris left, the family sat contemplating the paw. \"Don't be absurd,\" Mary said to her husband. \"Surely you don't believe in magic?\" But there was an undercurrent of tension in the room, a sense that something extraordinary had entered their ordinary lives.",
      '"Why not wish for something simple?" John suggested. "Just to test it." His father held up the paw and, half-jokingly, wished for two hundred pounds to pay off their mortgage. As he made the wish, the paw twisted in his hand, and a cold wind swept through the room, extinguishing the fire.',
      "The next morning, life resumed its normal pattern. Herbert went to work at the local factory, Mary attended to her household duties, and John left for university. The mysterious events of the previous night seemed like a dream until a well-dressed stranger appeared at their door.",
      "The man was from Herbert's factory. His face was pale and his manner nervous. \"There's been an accident,\" he said. Herbert had been caught in the machinery. The company denied any wrongdoing but offered compensation to the family—exactly two hundred pounds.",
      "Grief-stricken and horrified, Mary and John realized the terrible price of their wish. Days passed in a blur of funeral arrangements and quiet despair. Late one night, Mary approached her husband with wild eyes. \"The paw!\" she exclaimed. \"We still have two wishes! Wish Herbert back!\"",
      "John protested, remembering Morris's warnings and imagining what condition Herbert might return in after ten days in the grave. But Mary's grief was too powerful to resist. With trembling hands, John held up the paw and wished for Herbert to return.",
      "The wind rose immediately, and strange noises began outside their home. Then came a knocking at the door. Soft at first, then louder, more insistent. Mary rushed to answer it, but John held her back, suddenly terrified of what might be on the other side.",
      '"Its Herbert!" Mary cried, struggling to reach the door. "Cant you hear him? Let me open it!" But the knocking was different now—not the familiar rhythm of their sons knock, but something else entirely. Something that made Johns blood run cold.',
      "As Mary finally broke free and reached for the door handle, John grabbed the paw and made his third and final wish. The knocking ceased instantly. When Mary opened the door, she found only empty darkness and the sound of the wind.",
      "They never spoke of that night again, but both knew what John's last wish had been. He had wished whatever was at their door away, choosing the pain of loss over the horror of what might have returned. The paw disappeared shortly after, perhaps to find its next owner.",
      "Years later, Mary would sometimes wonder about that night, about what might have been at the door. But John knew they had learned the cruel lesson of the talisman: some doors, once closed by death, should never be reopened, and fate's design, however painful, was not meant to be undone.",
      "The cottage still stands on the outskirts of London, and sometimes, new residents report hearing strange knocking at night. But if they ever find a withered monkey's paw, they would do well to remember the White family's story and leave fate's tapestry unwoven.",
      "For in the end, the true horror of the monkey's paw lay not in what it could do, but in the human desire to change what cannot be changed, to reach for power without understanding its price. And somewhere, perhaps, the paw still waits for those who have yet to learn this lesson.",
      "The White family's story became a whispered warning in their community: be careful what you wish for, for the price of defying fate might be more terrible than any misfortune it seeks to correct.",
    ],
    vocabulary: [
      { word: "talisman", definition: "an object believed to have magical powers" },
      { word: "mummified", definition: "preserved by drying and embalming" },
      { word: "splendid", definition: "magnificent; very impressive" },
      { word: "absurd", definition: "wildly unreasonable, illogical, or inappropriate" },
      { word: "compensation", definition: "payment for damages or loss" },
      { word: "grief-stricken", definition: "overwhelmed by intense sorrow" },
      { word: "insistent", definition: "demanding attention or action" },
      { word: "tapestry", definition: "a complex story or situation comprising many related elements" },
      { word: "undone", definition: "cancelled or reversed; brought to ruin" },
      { word: "defying", definition: "openly resisting or refusing to obey" },
      { word: "contemplating", definition: "looking thoughtfully at something for a long time" },
      { word: "extraordinary", definition: "very unusual or remarkable" },
      { word: "despair", definition: "complete loss or absence of hope" },
      { word: "fate", definition: "the development of events beyond a person's control" },
      { word: "horror", definition: "an intense feeling of fear, shock, or disgust" }
    ],
    region: "Europe",
    themes: [
      "The consequences of interfering with fate",
      "The price of human desire",
      "Grief and acceptance",
      "The danger of unrestrained wishes",
      "The wisdom in accepting natural order"
    ],
    literaryElements: [
      { element: "Setting", description: "A cozy cottage near London in the early 20th century" },
      { element: "Protagonist", description: "The White family, particularly John and Mary White" },
      { element: "Conflict", description: "Man vs. Supernatural (the cursed paw) and Man vs. Self (desire vs. wisdom)" },
      { element: "Symbolism", description: "The monkey's paw represents human greed and the danger of trying to control fate" },
      { element: "Theme", description: "The story explores the devastating consequences of trying to change destiny" }
    ]
  },
  "the-gift-of-the-river": {
    id: "the-gift-of-the-river",
    title: "The Gift of the River",
    origin: "Egyptian",
    author: "Original Story",
    content: [
      "In the time of the great pharaohs, when the Nile's annual flood brought life to the desert, there lived a young scribe named Amenemhat. Unlike other scribes who recorded tax collections and inventories, Amenemhat was fascinated by the ancient wisdom texts and spent his free hours studying the mysterious hieroglyphs carved in forgotten tombs.",
      "One morning, as he walked along the river's edge gathering reeds for paper-making, he noticed something unusual floating in the sacred waters. It was a scroll case made of alabaster, sealed with symbols he had never seen before. The rising sun caught the white stone, making it glow like a fallen star.",
      '"By the breath of Thoth," he whispered, carefully retrieving the case. The symbols seemed to shift under his touch, forming patterns that reminded him of the river\'s flow. His hands trembled as he broke the seal—an act that would normally be forbidden without permission from his superiors.',
      "Inside, he found a papyrus scroll of extraordinary quality, the hieroglyphs upon it written in what appeared to be liquid gold. As he began to read, he realized this was no ordinary text. It contained knowledge from the distant past—and, impossibly, from the future yet to come.",
      "The scroll spoke of great changes: the rise and fall of kingdoms, the coming of strange peoples from across the seas, and transformations that would reshape the very face of Egypt. But mixed with these prophecies were teachings about the eternal cycles of nature, the hidden powers of the sacred river, and wisdom that transcended time.",
      '"The river knows no past or future," the text declared. "It flows eternally in the present, carrying the wisdom of ages in every drop. Those who learn to read its waters will understand the pattern of all things."',
      "As Amenemhat studied the scroll, he began to see his world differently. The river was no longer simply a source of water and fertility—it was a living text, telling stories with its currents and eddies. The annual flood wasn't just a natural event; it was a renewal of knowledge itself.",
      "But the scroll's greatest secret was yet to reveal itself. As the sun set that evening, the golden hieroglyphs began to move on the page, rearranging themselves into new patterns. Each configuration contained different wisdom, as if the scroll could answer any question posed to it.",
      '"With such knowledge," Amenemhat thought, "I could become the most powerful scribe in Egypt. The pharaoh himself would seek my counsel." Yet something about this idea troubled him. The scroll had shown him that power itself was like the river—it flowed and changed, lifted and destroyed.',
      "Over the next several days, Amenemhat spent every free moment with the scroll, learning its secrets. He discovered that the floods would fail in the coming year, but that new irrigation methods could save the crops. He learned of healing techniques unknown to Egypt's physicians, and of stars that would guide travelers more accurately than any existing method.",
      "Word of his unusual insights began to spread. His predictions about the weather proved uncannily accurate, and his suggestions for crop rotation yielded unprecedented harvests. Soon, higher officials began to take notice. Questions arose about the source of his knowledge.",
      "One night, a high priest of Thoth visited him. \"You have found something, young scribe,\" the priest said. \"Something that does not belong in any one person's hands.\" Amenemhat knew he spoke the truth. The scroll's wisdom was like the river itself—it needed to flow freely to benefit all.",
      "Together, they devised a plan. Over the next year, Amenemhat would translate the scroll's essential wisdom into simpler texts, sharing the knowledge in ways that people could understand and use. But the scroll itself, with its shifting golden hieroglyphs and impossible prophecies, would be returned to the river.",
      '"Like the flood waters that recede to reveal fertile soil," Amenemhat wrote in his final translation, "the greatest gifts are those that leave us changed but do not remain themselves. True wisdom cannot be possessed—it must flow like the river, belonging to all and to none."',
      "On the anniversary of finding the scroll, Amenemhat returned to the same spot by the river. With trembling hands, he placed the alabaster case back into the sacred waters. As it disappeared beneath the surface, the rising sun caught it once more, making it glow like a fallen star returning to the heavens.",
      "In the years that followed, Amenemhat became known as a wise teacher, sharing knowledge that helped Egypt prosper through difficult times. Though he never spoke of the scroll's existence, its wisdom lived on through his teachings and writings, flowing through generations like the eternal river itself.",
      "When asked about the source of his knowledge, he would smile and point to the Nile. \"The river gives many gifts,\" he would say, \"but the greatest gift is understanding that wisdom, like water, must flow freely to give life.\"",
      "And so the story of the scroll became legend, whispered among scribes and priests, a reminder that the truest wisdom comes not from possessing knowledge, but from letting it flow onward to nourish future generations, like the great river that gave Egypt its life.",
    ],
    vocabulary: [
      { word: "alabaster", definition: "a fine-textured, translucent form of gypsum or calcite, typically white" },
      { word: "hieroglyphs", definition: "picture writing, especially that of ancient Egypt" },
      { word: "transcended", definition: "went beyond the limits of ordinary experience" },
      { word: "eddies", definition: "circular movements of water, counter to a main current" },
      { word: "uncannily", definition: "in a strange or mysterious way that suggests supernatural influences" },
      { word: "unprecedented", definition: "never done or known before" },
      { word: "prosperity", definition: "the state of being successful and flourishing" },
      { word: "fertile", definition: "capable of producing abundant vegetation or crops" },
      { word: "recede", definition: "go or move back or further away from a previous position" },
      { word: "nourish", definition: "provide with the food or other substances necessary for growth and health" },
      { word: "eternal", definition: "lasting or existing forever; without end" },
      { word: "prophecies", definition: "predictions of what will happen in the future" },
      { word: "configuration", definition: "an arrangement of elements in a particular form or pattern" },
      { word: "irrigation", definition: "the supply of water to land or crops to help growth" },
      { word: "sacred", definition: "connected with God or a god or dedicated to a religious purpose" }
    ],
    region: "Africa",
    themes: [
      "The cyclical nature of wisdom and knowledge",
      "The responsibility of possessing wisdom",
      "Balance between personal gain and common good",
      "The connection between nature and knowledge",
      "The importance of sharing wisdom"
    ],
    literaryElements: [
      { element: "Setting", description: "Ancient Egypt during the time of the pharaohs" },
      { element: "Protagonist", description: "Amenemhat, a young scribe who discovers ancient wisdom" },
      { element: "Conflict", description: "Man vs. Self (the temptation to keep knowledge for personal gain)" },
      { element: "Symbolism", description: "The Nile River represents the flow of wisdom and knowledge through time" },
      { element: "Theme", description: "True wisdom, like a river, must flow freely to benefit all" }
    ]
  },
  "the-secret-garden": {
    id: "the-secret-garden",
    title: "The Hidden Garden",
    origin: "British",
    author: "Original Story",
    content: [
      "Mary Lennox arrived at Misselthwaite Manor under a veil of sadness. Having lost her parents to a cholera epidemic in India, the sour-faced, disagreeable child found herself transplanted to her uncle's sprawling Yorkshire estate. The vast, lonely house with its hundred shuttered rooms seemed to hold as many secrets as its master, who was often away, leaving Mary in the care of the housekeeper, Mrs. Medlock.",
      "The constant Yorkshire rain kept Mary indoors at first, but gradually, she began to venture into the grounds. The gardens stretched endlessly, divided by high stone walls covered in ancient ivy. It was during one of her solitary explorations that she first heard about the hidden garden—a place that had been locked up and abandoned for ten years.",
      '"Why is it locked?" Mary asked Martha, her young maid. The servant girl hesitated before answering, "It were Mrs. Craven\'s garden. When she died, the master locked it up and buried the key. No one\'s been in there since."',
      "The story of the forbidden garden captured Mary's imagination. She began spending her days walking along the walls, searching for any sign of a hidden door. The winter wind that swept across the moor seemed to whisper secrets, and sometimes she thought she heard distant crying in the night—though Martha insisted it was just the wind in the corridors.",
      "One morning, a friendly robin caught her attention. The little bird seemed to be trying to tell her something, hopping along the ivy-covered wall until it landed near a patch where the leaves stirred differently. Mary's heart quickened as she pushed aside the ivy to reveal an old wooden door, nearly invisible against the weathered stone.",
      "But the door was locked. The key, she learned, could be anywhere in the vast estate. Yet Mary was changed by her discovery—she had a secret of her own now, and it gave her a sense of purpose she'd never known before. She began watching the grounds more carefully, especially Ben Weatherstaff, the old gardener who seemed to know more than he would say.",
      "Her persistence was rewarded one day when, following the robin again, she discovered something half-buried in the soil: a tarnished old key. With trembling hands, she returned to the hidden door. The key fitted perfectly, and with a turn that seemed to echo across the years, the door creaked open.",
      "Inside, Mary found a secret world. Though neglected for a decade, the garden had not died. Beneath the overgrown weeds and tangled branches, green shoots were pushing through the soil. The walls had protected this forgotten paradise, preserving its magic through the years of abandonment.",
      '"It\'s alive," she whispered, touching a dormant rose branch. "It\'s all alive, just sleeping."',
      "Over the following weeks, Mary began the painstaking work of bringing the garden back to life. She was joined in her secret by Dickon, Martha's brother, who had an almost magical way with plants and animals. Together, they cleared away dead growth, pruned old roses, and planted new seeds.",
      "But the garden wasn't the only thing coming back to life. Mary herself was changing. The fresh air and purpose had brought color to her cheeks, and the joy of watching things grow had softened her sharp edges. She was no longer the sullen, sickly child who had arrived at Misselthwaite.",
      "Then came her most startling discovery: the crying she had heard wasn't the wind at all. It was her cousin Colin, kept hidden away in a dark room, convinced he was too ill to walk or live. Like the garden, he too had been locked away after his mother's death, his father too grief-stricken to look at the son who reminded him so much of his lost wife.",
      '"You must see the garden," Mary told him one night, her eyes bright with excitement. "It\'s magic—real magic. It makes things come alive."',
      "At first, Colin refused, clinging to his fears and his father's grief. But gradually, through Mary's stubborn insistence and Dickon's gentle encouragement, they secretly brought him to the garden in a wheelchair. There, surrounded by awakening spring, Colin began to feel the same magic that had transformed Mary.",
      "Day by day, the three children worked in their secret sanctuary. As the garden bloomed, Colin grew stronger. He learned to stand, then to walk, his steps becoming surer as the roses climbed higher on the walls. The hidden garden had become a place of healing, not just for the plants, but for the wounded spirits within its walls.",
      "When Mr. Craven finally returned home, drawn by mysterious dreams of his wife's garden, he found not the sickly, bedridden son he remembered, but a healthy boy running and playing in the very place he had locked away in his grief. The garden, no longer hidden, had worked its final miracle.",
      "Years later, Mary would look back on that spring as the time when she truly began to live. The garden had taught her that growth requires patience, care, and sometimes a little magic. Most importantly, it showed her that even things that seem dead can come back to life if given enough love and attention.",
      "The hidden garden remained a special place, but it was no longer secret. Like the children it had helped heal, it had emerged from darkness into light, proving that sometimes the most powerful magic lies in the simple act of nurturing life and hope.",
    ],
    vocabulary: [
      { word: "transplanted", definition: "moved or transferred to another place or situation" },
      { word: "solitary", definition: "done or existing alone; unaccompanied" },
      { word: "forbidden", definition: "not allowed; prohibited" },
      { word: "weathered", definition: "worn by exposure to the weather" },
      { word: "dormant", definition: "temporarily inactive or sleeping" },
      { word: "painstaking", definition: "done with great care and thoroughness" },
      { word: "sanctuary", definition: "a place of refuge or safety" },
      { word: "grief-stricken", definition: "overwhelmed by intense sorrow" },
      { word: "transformation", definition: "a complete change in form or appearance" },
      { word: "nurturing", definition: "caring for and encouraging growth or development" },
      { word: "persistent", definition: "continuing firmly despite obstacles" },
      { word: "tangled", definition: "twisted together in a confused mass" },
      { word: "sullen", definition: "bad-tempered and sulky; gloomy" },
      { word: "mysterious", definition: "difficult to understand, explain, or identify" },
      { word: "emerged", definition: "came out from or up from something after being concealed" }
    ],
    region: "Europe",
    themes: [
      "The healing power of nature",
      "Personal transformation through nurturing",
      "The importance of human connection",
      "The destructive nature of grief and isolation",
      "The magic of new beginnings"
    ],
    literaryElements: [
      { element: "Setting", description: "A vast Yorkshire estate with its mysterious manor and hidden garden" },
      { element: "Protagonist", description: "Mary Lennox, a disagreeable child who learns to care for others through tending the garden" },
      { element: "Conflict", description: "Person vs. Self (overcoming isolation) and Person vs. Nature (reviving the garden)" },
      { element: "Symbolism", description: "The garden represents hope, healing, and the possibility of renewal" },
      { element: "Theme", description: "The story explores how nurturing others—whether plants, animals, or people—can lead to personal growth" }
    ]
  },
  "journey-to-the-stars": {
    id: "journey-to-the-stars",
    title: "Journey to the Stars",
    origin: "Science Fiction",
    author: "Original Story",
    content: [
      "Dr. Sarah Chen had always been drawn to the mysteries of the cosmos. As a young astronomer at the Mount Wilson Observatory, she spent countless nights studying the dance of distant stars, searching for patterns in their ancient light. But nothing in her years of research had prepared her for what she discovered on a clear autumn night.",
      "While analyzing data from a newly installed quantum telescope, Sarah noticed something unusual—a star that seemed to be moving in ways that defied the laws of physics. At first, she assumed it was an equipment malfunction, but repeated observations confirmed her initial findings.",
      '"This can\'t be right," she muttered, reviewing the data for the hundredth time. The star appeared to be moving in a perfect geometric pattern, as if following an invisible track through space. More incredibly, its light spectrum contained elements that shouldn\'t exist naturally.',
      "Sarah shared her findings with her colleague, Dr. James Martinez, who initially responded with skepticism. \"Stars don't move like that,\" he said, studying the data. \"And these spectral lines... they're like nothing we've ever seen. Are you sure the equipment is calibrated correctly?\"",
      "But as they gathered more data over the following weeks, even James had to admit that they were witnessing something extraordinary. The star's movement formed complex geometric patterns that seemed to repeat every 27 days, and its unusual spectrum suggested the presence of an element heavier than anything on the periodic table.",
      "Word of their discovery spread through the scientific community, leading to intense debate. Some suggested it was evidence of an advanced civilization capable of manipulating stellar bodies. Others argued for more conventional explanations—gravitational lensing, or previously unknown natural phenomena.",
      "Then came the breakthrough. Late one night, while processing new data, Sarah noticed that the star's spectral pattern contained regular pulses—like a signal. With James's help, she began the painstaking process of decoding what appeared to be a message embedded in starlight.",
      '"It\'s a language," Sarah realized, her hands trembling with excitement. "But not like any we\'ve ever encountered. It\'s not based on sound or symbols, but on mathematical relationships—pure patterns of energy."',
      "The message, when they finally decoded it, was both simple and profound: \"Your universe is larger than you know. When you are ready, look beyond the patterns to find us.\" It was an invitation—not just to explore, but to fundamentally change how humanity understood reality.",
      "Sarah and James's discovery sparked a global revolution in astronomy and physics. Scientists worldwide began detecting similar patterns in other stars, revealing a vast network of what they came to call 'quantum pathways' connecting distant parts of the universe.",
      "But the most startling revelation came from an unexpected source. A graduate student working with their data noticed that the geometric patterns matched ancient symbols found in cultures across Earth—in cave paintings, pottery designs, and architectural structures. It seemed that humanity had been unknowingly documenting these cosmic patterns for millennia.",
      '"We weren\'t just looking at stars," Sarah explained at a landmark conference. "We were seeing evidence of a universal language—one that connects everything from quantum particles to galactic clusters. The patterns we discovered aren\'t just in space; they\'re fundamental to the structure of reality itself."',
      "As their research progressed, they began to understand that the moving star was more than just a celestial anomaly—it was a beacon, deliberately placed to attract the attention of civilizations capable of detecting and understanding its message. The question was no longer whether intelligent life existed elsewhere in the universe, but how humanity would respond to its invitation.",
      "Working with a team of physicists and mathematicians, Sarah developed a theory that these quantum pathways could potentially be used for faster-than-light communication, possibly even travel. The implications were staggering—humanity stood on the brink of joining a cosmic community it hadn't known existed.",
      "Years later, as she trained a new generation of astronomers to look for these patterns, Sarah often reflected on that first discovery. \"The universe spoke to us in the language of mathematics and light,\" she would tell her students, \"but it took us learning to listen in the right way to hear its message.\"",
      "The moving star became known as Chen's Beacon, and its discovery marked the beginning of humanity's true journey into the cosmos. Observatories around the world began detecting more unusual stellar movements, each one adding to their understanding of the vast cosmic network they had stumbled upon.",
      "But perhaps the most profound impact was on human consciousness itself. The knowledge that the universe was not only teeming with intelligent life but structured in ways that transcended human understanding led to a new era of scientific and philosophical thought.",
      "Sarah's journey from observing an anomalous star to unlocking the secrets of cosmic communication became a testament to human curiosity and perseverance. Her discovery reminded humanity that the greatest mysteries often hide in plain sight, waiting for someone to look at them in just the right way.",
    ],
    vocabulary: [
      { word: "quantum", definition: "the smallest possible unit of energy or matter" },
      { word: "spectrum", definition: "a range of frequencies of electromagnetic radiation" },
      { word: "anomalous", definition: "deviating from what is standard, normal, or expected" },
      { word: "geometric", definition: "characterized by or according to the principles of geometry" },
      { word: "phenomena", definition: "remarkable or exceptional events or circumstances" },
      { word: "calibrated", definition: "adjusted precisely for a particular function" },
      { word: "spectral", definition: "of or like a spectrum" },
      { word: "profound", definition: "having great depth or insight" },
      { word: "transcended", definition: "went beyond the limits of ordinary experience" },
      { word: "beacon", definition: "a source of light or inspiration" },
      { word: "quantum pathways", definition: "theoretical connections through space-time" },
      { word: "consciousness", definition: "the state of being aware and responsive" },
      { word: "perseverance", definition: "persistence in doing something despite difficulty" },
      { word: "celestial", definition: "positioned in or relating to the sky or heavens" },
      { word: "anomaly", definition: "something that deviates from the standard or norm" }
    ],
    region: "Global",
    themes: [
      "The quest for understanding",
      "The connection between ancient knowledge and modern discovery",
      "Human potential for growth and adaptation",
      "The vastness of cosmic mystery",
      "Communication across barriers"
    ],
    literaryElements: [
      { element: "Setting", description: "Modern-day Earth, particularly the Mount Wilson Observatory" },
      { element: "Protagonist", description: "Dr. Sarah Chen, a dedicated astronomer who makes a world-changing discovery" },
      { element: "Conflict", description: "Person vs. Unknown (understanding the mysterious stellar patterns)" },
      { element: "Symbolism", description: "The moving star represents humanity's potential to connect with the greater universe" },
      { element: "Theme", description: "The story explores how scientific discovery can transform human understanding and consciousness" }
    ]
  },
  "the-jade-pendant": {
    id: "the-jade-pendant",
    title: "The Jade Pendant",
    origin: "Chinese",
    author: "Original Story",
    content: [
      "In the bustling city of Hangzhou during the Ming Dynasty, Master Chen was known as the finest jade craftsman in all of China. His workshop, nestled in a quiet corner of the city's artisan district, was where ordinary stones were transformed into objects of extraordinary beauty. But none of his creations would compare to the pendant he began carving on the night of the Autumn Moon Festival.",
      "The jade itself was unusual—a piece of pure white stone with veins of deepest green running through it like frozen rivers. It had been brought to him by a mysterious merchant who claimed to have found it in the mountains where immortals were said to dwell. \"This stone has a spirit,\" the merchant had said. \"It must find its rightful owner.\"",
      "Master Chen worked through the night, his hands guided by something beyond his own skill. As he carved, the stone seemed to respond to his touch, revealing patterns he had not planned. When dawn broke, he held up a pendant of such perfection that it brought tears to his eyes—a double-sided disk with a dragon on one face and a phoenix on the other, the green veins forming their eyes.",
      "But as he prepared to sell the pendant, strange things began to happen. Each time he thought he had found a buyer, circumstances would intervene—a sudden gust of wind would snatch it away, or the potential owner would be called away on urgent business. It seemed the merchant's words were true—the pendant was choosing its own path.",
      "The pendant's journey began with the Governor's daughter, Liu Mei. During a festival, she wore it briefly before losing it in a crowd. It was found by a young scholar, Wei Zhang, who was so moved by its beauty that he wrote a poem about it before it slipped from his fingers into a merchant's cart.",
      "Over the decades, the pendant passed from hand to hand, never staying with one owner for long. It adorned the neck of a warrior heading into battle, giving him courage before disappearing. It comforted a grieving widow before being carried away by a river, only to be caught in a fisherman's net months later.",
      "Each person who possessed the pendant reported similar experiences—dreams of ancient wisdom, moments of startling clarity, or warnings of impending danger. Some claimed that when they held it up to moonlight, the dragon and phoenix seemed to move, their jade eyes glowing with an inner fire.",
      "A pattern began to emerge. The pendant appeared to those at crucial moments in their lives, offering guidance or protection before moving on. A young emperor-to-be found it before making a decision that would bring prosperity to his people. A doctor held it before discovering a cure for a devastating illness.",
      "Scholars who studied the pendant's history noticed another peculiarity—it seemed to be gradually tracing a complex pattern across China, its path forming an ancient symbol of harmony. Each new owner was somehow connected to the previous ones, though they might not realize it until years later.",
      "One hundred years after its creation, the pendant returned to Hangzhou. A young girl named Ming Yi, the last descendant of Master Chen, found it in her grandmother's garden. As she held it, the pendant began to warm in her hands, and the dragon and phoenix designs started to glow.",
      "Ming Yi discovered she could see the memories of all who had held the pendant before her. She learned of the courage it had inspired, the wisdom it had shared, and the lives it had touched. Through these visions, she understood that the pendant was more than a beautiful ornament—it was a keeper of stories, a guardian of balance.",
      "Under Ming Yi's care, the pendant's purpose became clear. It was not meant to remain with any one person but to connect them all, weaving their stories into the grand tapestry of China's history. She established a tradition of lending the pendant to those who needed its guidance, ensuring it could continue its journey.",
      "The pendant's fame grew, not for its beauty alone, but for the wisdom it seemed to impart. Those who sought it came not to possess it, but to learn from it. Each person who held it added their own story to its collection, enriching the legacy it carried.",
      "Centuries later, when scholars tried to trace the pendant's path through history, they discovered that its journey had formed a perfect map of China's cultural evolution. Every major movement, every significant change in society could be linked to moments when the pendant had appeared.",
      "In modern times, the pendant resides in a special chamber in the Palace Museum, but it is said that on nights of the full moon, it still disappears briefly, continuing its ancient mission of guiding those in need. Its surface now bears the subtle marks of countless hands that have held it, each adding to its power and wisdom.",
      "Some say the pendant's true magic lies not in its supernatural properties, but in its ability to reveal the connections between all things—past and present, joy and sorrow, wisdom and folly. It reminds us that we are all part of an endless chain of stories, each one adding to the next.",
      "Master Chen's final journal entry, discovered long after his death, revealed that he had understood the pendant's nature from the beginning. \"I did not create this pendant,\" he wrote. \"I merely released what was already within the stone—a thread that connects all souls who seek wisdom and harmony.\"",
      "The Jade Pendant remains one of China's most enigmatic treasures, not for its monetary value, but for the countless tales of transformation and enlightenment that surround it. Each generation adds new stories to its legacy, proving that some treasures are not meant to be possessed, but to possess us with their eternal wisdom.",
    ],
    vocabulary: [
      { word: "artisan", definition: "a skilled craft worker who makes things by hand" },
      { word: "enigmatic", definition: "difficult to interpret or understand; mysterious" },
      { word: "prosperity", definition: "the state of being successful and flourishing" },
      { word: "legacy", definition: "something handed down from the past" },
      { word: "tapestry", definition: "a complex story or situation comprising many related elements" },
      { word: "intervene", definition: "come between so as to prevent or alter a result or course of events" },
      { word: "clarity", definition: "the quality of being clear and easily understood" },
      { word: "impending", definition: "about to happen; approaching" },
      { word: "crucial", definition: "decisive or critical, especially in the success or failure of something" },
      { word: "peculiarity", definition: "an unusual or distinctive feature or characteristic" },
      { word: "enlightenment", definition: "the state of having knowledge or understanding" },
      { word: "harmony", definition: "a state of peaceful existence and agreement" },
      { word: "transformation", definition: "a thorough or dramatic change in form or appearance" },
      { word: "enigmatic", definition: "difficult to interpret or understand; mysterious" },
      { word: "eternal", definition: "lasting or existing forever; without end" }
    ],
    region: "Asia",
    themes: [
      "The interconnectedness of human experience",
      "The relationship between wisdom and time",
      "The power of stories and shared history",
      "The balance between possession and stewardship",
      "The role of destiny in human lives"
    ],
    literaryElements: [
      { element: "Setting", description: "Ming Dynasty China, spanning centuries through to the modern era" },
      { element: "Protagonist", description: "The Jade Pendant itself, and those whose lives it touches" },
      { element: "Conflict", description: "The tension between possessing wisdom and sharing it" },
      { element: "Symbolism", description: "The pendant represents the flow of wisdom and the interconnectedness of human experience" },
      { element: "Theme", description: "True treasures are not possessed but shared through generations" }
    ]
  },
  "echoes-of-thunder": {
    id: "echoes-of-thunder",
    title: "Echoes of Thunder",
    origin: "Native American",
    author: "Original Story",
    content: [
      "Rising Storm stood at the edge of her village, watching lightning dance across the distant mountains. Tomorrow, on her sixteenth summer, she would begin her Vision Quest—a journey that would reveal her true name and her place within the tribe. But unlike those who had gone before her, Rising Storm carried an extra burden: she was born during a great thunderstorm, and according to tribal prophecy, such children were destined to either bring great wisdom or great destruction.",
      "Her grandmother, Moon Singer, had prepared her for this moment since childhood. \"The thunder speaks to those who know how to listen,\" she would say, teaching Rising Storm the ancient songs and stories of their people. \"But first, you must learn to hear your own heart's drumbeat.\"",
      "As dawn broke, Rising Storm began her journey into the wilderness, carrying only a small pouch of ceremonial herbs, a water skin, and the sacred eagle feather that had been passed down through generations of medicine women in her family. The elders had chosen her path: she would travel to Thunder Mesa, a sacred place where the sky spirits were said to gather.",
      "The first day tested her physical strength as she climbed through dense forests and across swift streams. Each step seemed to echo with the voices of her ancestors, their wisdom carried on the wind. But it was the silence between these echoes that made her heart race—the moments when she felt utterly alone with her thoughts.",
      "On the second day, a massive storm gathered overhead. Rather than seeking shelter, Rising Storm remembered her grandmother's teachings: \"Sometimes we must dance with our fears to understand them.\" She stood on an exposed ridge, letting the rain soak her clothes and the wind whip her hair, watching lightning split the sky.",
      "In that moment, something changed. The thunder no longer seemed like separate booms but became a rhythm, a language she had known before words. Each crash brought with it fragments of visions: she saw her people's past—great migrations, battles, celebrations, and quiet moments of teaching and learning.",
      "The third day brought physical challenges that tested her resolve. Her water ran low, and the summer sun beat down mercilessly. When she discovered a hidden spring, she recognized it from her grandmother's stories—the Weeping Rock, where the earth itself was said to cry for those lost in the great drought generations ago.",
      "As she drank from the spring, Rising Storm noticed pictographs on the rock face—ancient drawings that seemed to move in the shifting sunlight. Among them was a figure holding what appeared to be lightning bolts, standing between two worlds. The image resonated with something deep within her.",
      "That night, as she made camp beneath Thunder Mesa's towering cliffs, the true test began. The silence of the wilderness became a mirror, reflecting back every doubt, every fear, every question about her identity and purpose. The stars wheeled overhead, and in their dance, she began to see patterns that matched the rhythms of the thunder she had heard.",
      "In her dreams, she walked with her ancestors. They showed her that thunder was not just sound, but the voice of change itself. She saw how change could bring both destruction and renewal, how the same storm that felled dead trees also planted new seeds. She understood that her destiny was not to control these forces, but to help her people navigate them.",
      "Dawn of the fourth day brought clarity. Rising Storm realized that the prophecy about thunder children wasn't about power—it was about understanding. She had been given the ability to hear both the thunder's warning and its wisdom, to stand between the old ways and the new without breaking either.",
      "As she made her way back to the village, she found herself walking differently. Each step was more certain, more purposeful. She had entered the wilderness as Rising Storm, but she would return as Thunder Bridge—one who could help her people cross between worlds while keeping their roots strong.",
      "The tribe's elders were waiting at the village boundary, their faces painted with lightning patterns. Before Rising Storm could speak, her grandmother stepped forward, smiling. \"I see you have found what you were seeking,\" Moon Singer said. \"Tell us, granddaughter, what name did the thunder give you?\"",
      '"I am Thunder Bridge," she answered, her voice carrying the strength of her journey. "I have learned that wisdom and destruction are not opposites, but parts of the same circle. Like thunder, they remind us that change is both ending and beginning."',
      "The elders nodded, recognizing the truth in her words. That evening, as the tribe gathered to celebrate her return and new name, another storm rolled in. But now, Rising Storm—now Thunder Bridge—could translate its message for her people. The thunder spoke of changes coming, of challenges and opportunities, of the need to bend like willows rather than break like pines.",
      "In the years that followed, Thunder Bridge became known not just within her tribe but among many nations. People sought her guidance not because she could control the thunder, but because she could help them understand the storms in their own lives. She taught that wisdom often comes wrapped in fear, and that true strength lies not in avoiding changes, but in learning to dance with them.",
      "The prophecy of the thunder child had been fulfilled, but not as anyone had expected. Thunder Bridge brought neither pure wisdom nor pure destruction, but something more valuable: the understanding that both are necessary parts of growth. Her story became part of the tribe's oral tradition, told around fires when storm clouds gathered.",
      "And on nights when thunder rolled across the mountains, people would remember that its echoes carried not just sound, but stories—stories of a girl who learned to bridge worlds, of wisdom found in wilderness, and of the endless dance between what was and what could be.",
    ],
    vocabulary: [
      { word: "prophecy", definition: "a prediction of what will happen in the future" },
      { word: "ceremonial", definition: "relating to or used in formal religious or public events" },
      { word: "mercilessly", definition: "in a way that shows no mercy or pity" },
      { word: "resonated", definition: "evoked a response or produced a continuing effect" },
      { word: "navigate", definition: "find one's way through a complex situation or place" },
      { word: "migration", definition: "movement from one area or place to another" },
      { word: "pictographs", definition: "ancient rock paintings or drawings" },
      { word: "resolve", definition: "firm determination to do something" },
      { word: "destiny", definition: "the events that will necessarily happen to someone in the future" },
      { word: "renewal", definition: "the replacing or repair of something that is worn out or broken" },
      { word: "wisdom", definition: "the quality of having experience, knowledge, and good judgment" },
      { word: "tremendous", definition: "very great in amount, scale, or intensity" },
      { word: "sacred", definition: "connected with God or a god or dedicated to a religious purpose" },
      { word: "heritage", definition: "valued objects and qualities passed down from previous generations" },
      { word: "tradition", definition: "the transmission of customs or beliefs from generation to generation" }
    ],
    region: "North America",
    themes: [
      "Coming of age and self-discovery",
      "The balance between tradition and change",
      "The relationship between humans and nature",
      "Understanding one's cultural heritage",
      "The power of personal transformation"
    ],
    literaryElements: [
      { element: "Setting", description: "A Native American tribal land with sacred wilderness areas" },
      { element: "Protagonist", description: "Rising Storm/Thunder Bridge, a young woman seeking her identity and purpose" },
      { element: "Conflict", description: "Person vs. Self (understanding one's destiny) and Person vs. Nature (surviving the wilderness)" },
      { element: "Symbolism", description: "Thunder represents change and transformation; the bridge symbolizes connection between old and new" },
      { element: "Theme", description: "The story explores how understanding change and tradition can lead to wisdom" }
    ]
  },
  "the-lighthouse-keeper": {
    id: "the-lighthouse-keeper",
    title: "The Lighthouse Keeper",
    origin: "Maritime",
    author: "Original Story",
    content: [
      "The Blackrock Lighthouse stood like a sentinel at the edge of the world, its beam cutting through the perpetual mist that shrouded the northern seas. For fifteen years, Thomas Kane had been its keeper, maintaining the light that guided ships safely through the treacherous waters. But no previous winter had brought a storm like this one—a tempest that would test not only his courage but his grip on reality itself.",
      "The first signs came with the barometer's sudden drop. Thomas had seen low pressure before, but never had the mercury plunged so dramatically. The sea responded with mounting fury, waves crashing against the lighthouse's base with such force that spray reached the lantern room, eighty feet above the water.",
      '"Just another storm," he told himself, making his hourly checks of the great Fresnel lens that focused the light into its life-saving beam. But even as he spoke those words, he knew this was different. The wind didn\'t just howl—it seemed to speak, carrying whispers that made him strain to understand.',
      "As night fell, the temperature plummeted. Ice began to form on the lighthouse's exterior, creating fantastic shapes that seemed to shift and move in the rotating beam of light. Thomas found himself spending more time than necessary in the lantern room, watching the patterns of frost spread across the windows like ghostly fingers.",
      "Then he saw the first ship. It appeared suddenly through a break in the storm, an ancient-looking vessel with tattered sails and a listing deck. Thomas immediately reached for his logbook and emergency flares, but when he looked again, the ship had vanished. \"A trick of the light,\" he muttered, though he knew the beam should have illuminated any ship in that location.",
      "The radio crackled with static, occasionally catching fragments of transmissions that made no sense—voices speaking in languages he didn't recognize, and sometimes what sounded like the same messages he used to exchange with his wife Sarah, before she and their daughter were lost to the influenza epidemic three years ago.",
      "As midnight approached, the storm intensified. The lighthouse swayed slightly with each massive wave, a movement Thomas had grown accustomed to over the years. But now each sway seemed to last a fraction too long, as if the tower was standing in a reality that had begun to stretch and distort.",
      "The logbook began to fill with entries Thomas didn't remember writing. Notes about ships that couldn't exist, coordinates that didn't match any known location, and repeated references to something called \"the convergence.\" His own handwriting, but not his words—or at least, not words he remembered writing.",
      "In the early hours of the morning, the temperature dropped even further, and the strange ice formations completely covered the lantern room windows. As Thomas chipped away at them, he noticed that they formed patterns—not random crystalline structures, but intricate designs that resembled star charts and navigation symbols he had never seen before.",
      "The ghostly ship appeared again, closer this time. Through his binoculars, Thomas could make out figures on deck, moving with an odd, fluid grace. One turned to face the lighthouse, and Thomas dropped the binoculars in shock. The figure had Sarah's face, but with eyes that reflected the beam like a cat's.",
      '"This isn\'t real," Thomas said aloud, his voice shaking. "The storm is playing tricks." But even as he spoke, more ships began to appear—vessels from different eras, some modern, some ancient, all converging on the lighthouse. The radio burst into life, flooding the room with a cacophony of distress calls spanning centuries.',
      "Understanding dawned slowly. The lighthouse didn't just stand at a dangerous point in space, but at a confluence of time itself. The storm had weakened the barriers between different periods, and his light was now guiding ships from multiple eras, all trapped in the same treacherous waters.",
      "Thomas knew what he had to do. If he maintained the regular pattern of the lighthouse beam, it would draw more ships into this temporal convergence. Instead, he began to adjust the light's rhythm, using an ancient pattern of signals he had learned from his grandfather, also a keeper. The pattern was meant to ward off evil spirits, but now it served a different purpose.",
      "Hour by hour, he worked to establish a new pattern, one that would guide each ship back to its proper time. The phantom vessels began to disappear one by one, fading like mist in morning sun. The strange ice formations melted, revealing normal glass beneath. Even the radio fell silent, save for the regular shipping forecasts.",
      "As dawn approached, the storm began to subside. Thomas made his final entry in the logbook, describing not what had happened—who would believe that?—but the new signal pattern he had discovered. \"Some lights guide ships through space,\" he wrote, \"while others must guide them through time.\"",
      "The authorities who arrived to check on the lighthouse after the storm found everything in perfect order. If they noticed that Thomas's hair had turned white overnight, or that his logbook contained some oddly worded entries, they didn't mention it. Lighthouse keepers were known to be an eccentric lot, after all.",
      "Thomas remained at his post for another decade, maintaining his unique signal pattern during every storm. Ships' crews began to speak of the Blackrock Light as a lucky beacon—no vessel was ever lost in its waters again, no matter how terrible the weather. Some even claimed that when the fog was thick and the waves were high, they could see other ships in the distance, strange vessels that appeared and disappeared like dreams.",
      "And on stormy nights, if you stand at the base of the Blackrock Lighthouse, you might hear Thomas Kane's story whispered in the wind—a tale of a man who learned that some lights guide more than just ships, and that love can transcend not just distance, but time itself.",
    ],
    vocabulary: [
      { word: "sentinel", definition: "a person or thing that watches or guards" },
      { word: "perpetual", definition: "continuing forever in the same way; eternal and unchanging" },
      { word: "treacherous", definition: "dangerous because of hidden or unpredictable risks" },
      { word: "confluence", definition: "the junction of two rivers; the act or process of merging" },
      { word: "cacophony", definition: "a harsh mixture of sounds" },
      { word: "temporal", definition: "relating to time or earthly life" },
      { word: "phantom", definition: "something apparently seen but having no physical reality; a ghost" },
      { word: "convergence", definition: "the process of coming together; meeting at a point" },
      { word: "eccentric", definition: "unconventional and slightly strange" },
      { word: "barometer", definition: "an instrument for measuring atmospheric pressure" },
      { word: "plummet", definition: "fall or drop straight down at high speed" },
      { word: "crystalline", definition: "having a regular geometric arrangement of atoms" },
      { word: "ethereal", definition: "extremely delicate and light; heavenly or spiritual" },
      { word: "transcend", definition: "go beyond the usual limits of something" },
      { word: "sentinel", definition: "a soldier or guard whose job is to stand and keep watch" }
    ],
    region: "Global",
    themes: [
      "The intersection of time and space",
      "Love that transcends physical boundaries",
      "Duty and responsibility in isolation",
      "The blurred line between reality and perception",
      "The power of tradition and ancient knowledge"
    ],
    literaryElements: [
      { element: "Setting", description: "An isolated lighthouse during a supernatural storm" },
      { element: "Protagonist", description: "Thomas Kane, a dedicated lighthouse keeper facing extraordinary circumstances" },
      { element: "Conflict", description: "Man vs. Nature (the storm) and Man vs. Supernatural (the time convergence)" },
      { element: "Symbolism", description: "The lighthouse represents guidance through both physical and temporal storms" },
      { element: "Theme", description: "The story explores how duty and love can transcend normal boundaries of time and space" }
    ]
  },
} as const;

export default function StoryPage({ params }: StoryPageProps) {
  const { storyId } = params;
  const story = stories[storyId as keyof typeof stories];

  if (!story) {
    return <div>Story not found</div>;
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
