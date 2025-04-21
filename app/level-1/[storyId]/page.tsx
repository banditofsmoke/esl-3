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
      id: "mary-has-a-little-lamb",
      title: "Mary Has a Little Lamb",
      origin: "American",
      content: [
        "Mary has a little lamb,\nLittle lamb, little lamb,\nMary has a little lamb,\nLittle lamb so white.",
        "Where Mary goes, her lamb goes,\nHer lamb goes, her lamb goes,\nWhere Mary goes, her lamb goes,\nAll the day and night.",
        "Mary goes to school one day,\nSchool one day, school one day.\nMary goes to school one day,\nAnd her lamb goes, too.",
        "Twenty children laugh and say,\nLaugh and say, laugh and say,\nTwenty children laugh and say,\n\"Look! A lamb in school!\""
      ],
      vocabulary: [
        { word: "lamb", definition: "a young sheep" },
        { word: "follows", definition: "comes after" },
        { word: "white", definition: "the color of snow" },
        { word: "laugh", definition: "make happy sounds" }
      ],
      region: "North America",
      moral: "True friendship means staying together through all situations."
    },
    {
      id: "the-three-bears",
      title: "The Three Bears",
      origin: "English",
      content: [
        "The bears walk in the house.\nFather, Mother, and Baby Bear are in the kitchen.\nMother Bear puts milk on the table.\n\"It's too hot,\" says Baby Bear.\nSo they go out for a walk.",
        "A little girl walks into the kitchen.\nShe sees three cups of milk.\nShe picks up the little cup.\n\"This milk is for me,\" she says.\nAnd she drinks it.",
        "Then she walks into the bedroom.\nShe sees three beds.\nShe climbs into the little bed.\n\"This bed is for me!\" she says.\nAnd she goes to sleep.",
        "\"There's a little girl in our bedroom!\" says Father Bear.\nThe little girl climbs out the window and runs away."
      ],
      vocabulary: [
        { word: "bears", definition: "large furry animals" },
        { word: "hot", definition: "very warm" },
        { word: "walk", definition: "move on foot" },
        { word: "climbs", definition: "moves up something" }
      ],
      region: "Europe",
      moral: "Don't take things that don't belong to you."
    },
    {
      id: "school-trip",
      title: "School Trip",
      origin: "Mexican",
      content: [
        "Today we're going on a school trip.\nWe are looking at the buildings in our city.",
        "We ride the Metro to the post office.\nIt is next to the police station.",
        "We walk on the street.\nWe see a fire truck in the street.\n\"Hello, firefighter!\" we say.",
        "It is the end of our trip.\nI live in Monterrey.\nIt is a big city in Mexico.\nWe get ice cream cones and eat at the park.\n\"Where can we go now?\" we ask."
      ],
      vocabulary: [
        { word: "buildings", definition: "structures where people live or work" },
        { word: "metro", definition: "city train" },
        { word: "firefighter", definition: "person who puts out fires" },
        { word: "ice cream", definition: "cold sweet treat" }
      ],
      region: "North America",
      moral: "Learning about our community is fun and important."
    },
    {
      id: "lee-and-the-singing-cat",
      title: "Lee and the Singing Cat",
      origin: "International",
      content: [
        "Lee is a little boy in a little town.\nHe has no family.\nHe has no money. But he has a singing cat.",
        "On Saturday he goes to the market.\nHe stands in front of a shop.\nHis cat sings and sings.\nHis cat sings to the mail carrier.\nHis cat sings to the salesperson.",
        "A man on a horse stops and listens to the cat sing.\nHe asks, \"Can I have your cat?\"",
        "Lee says, \"You can have my cat, but I want your horse.\nThen I can work.\"",
        "Lee and the horse work and work.\nLee takes food to the market.\nHe gets money.\n\"Now I'm happy!\" says Lee."
      ],
      vocabulary: [
        { word: "singing", definition: "making musical sounds" },
        { word: "market", definition: "place where people buy and sell" },
        { word: "horse", definition: "large animal used for riding" },
        { word: "work", definition: "to do a job" }
      ],
      region: "Asia",
      moral: "Making wise choices can lead to better opportunities."
    },
    {
      id: "school-days",
      title: "School Days",
      origin: "Spanish",
      content: [
        "Hello! My name is Teresa.\nI live in Spain.\nI get up at 8:00 in the morning.\nI wash my face and brush my teeth.\nI get dressed.\nThen I comb my hair.",
        "I eat breakfast.\nBreakfast is hot milk and cookies.\nWe walk to school.\nWe read and write.\nAt 11:00 we play on the playground.",
        "At 1:00 we have a big hot lunch.\nYum! Then we have school again.\nAt 5:00 we go home and do our homework.\nWe watch TV.",
        "At 7:00 I take a bath.\nWe eat dinner at 8:00.\nIt is soup and salad.\nI look out my window at the town.\nAnd then it is 10:00 — time for bed!\nGood night!"
      ],
      vocabulary: [
        { word: "morning", definition: "early part of the day" },
        { word: "breakfast", definition: "first meal of the day" },
        { word: "playground", definition: "outdoor area for playing" },
        { word: "dinner", definition: "evening meal" }
      ],
      
      region: "Europe",
      moral: "Daily routines help us learn and grow."
    },
    {
      id: "who-wants-a-fish",
      title: "Who Wants a Fish?",
      origin: "International",
      content: [
        "Cat likes fish.\nShe does not like cookies.\nShe does not like apples.\nShe does not like oranges.",
        "One day Cat sees a fish in a bowl.\nShe jumps and she jumps.\nBut she can't touch the fish.\nShe is mad.",
        "Cat pushes the chair next to the table.\nShe climbs on the chair.\nShe jumps and she jumps.\nBut she can't touch the fish.",
        "Dog comes in the room.\n\"Do you want that fish?\" asks Dog.\n\"No, no, no! Who wants a fish? Not me!\" says Cat.\nFish looks happy, but Cat does not."
      ],
      vocabulary: [
        { word: "fish", definition: "animal that swims in water" },
        { word: "jumps", definition: "moves quickly up into the air" },
        { word: "pushes", definition: "moves something by force" },
        { word: "bowl", definition: "round container" }
      ],
      region: "Global",
      moral: "Sometimes we pretend not to want what we can't have."
    },
    {
      id: "lion-cant-sneeze",
      title: "Lion Can't Sneeze",
      origin: "International",
      content: [
        "Lion is not happy. The other animals in the zoo can sneeze, but he can't.",
        "The other animals say, \"Lion, you can't be king. You can't sneeze.\"",
        "Lion is sad. He sees Little Bird.\nShe asks, \"How are you, Lion?\"\n\"I'm sad, Little Bird,\" says Lion.\n\"I can't sneeze. I can't be king. Can you help me?\"",
        "\"You can't sneeze? I can help you. Watch this!\" says Little Bird.",
        "Little Bird flies up to Lion's nose. She moves her feet. She dances and dances on his nose. She tickles and tickles his nose.",
        "And Lion sneezes —a big, big sneeze.\n\"Thank you, Little Bird. I can sneeze. Now I can be king.\""
      ],
      vocabulary: [
        { word: "sneeze", definition: "sudden burst of air from nose" },
        { word: "king", definition: "leader of a group" },
        { word: "tickles", definition: "touches lightly to cause laughter" },
        { word: "sad", definition: "feeling unhappy" }
      ],
      region: "Global",
      moral: "Sometimes we need help from others to solve our problems."
    },
    {
      id: "loose-tooth",
      title: "Loose Tooth",
      origin: "International",
      content: [
        "I live in Colombia with my family.\nThis morning I touch a loose tooth.\nAt night we eat dinner.\nOops! The loose tooth falls out.\nI show it to my mother.",
        "My parents say, \"Let's celebrate your tooth!\"\nWe drive to the beach. I throw my tooth into the water.\nI ask for a gold tooth and I am happy.",
        "I live in Lebanon.\nOn my way to school today I feel a loose tooth.\nTonight at dinner we have soup and salad.\nOh, here is my loose tooth!",
        "At 9:00 I put my tooth under my pillow.\nI sleep and I wait for the little mouse.\nIn the morning my tooth is not there.\nBut I find some coins!"
      ],
      vocabulary: [
        { word: "tooth", definition: "hard white thing in mouth for eating" },
        { word: "loose", definition: "not firmly fixed" },
        { word: "pillow", definition: "soft cushion for head" },
        { word: "coins", definition: "metal money" }
      ],
      region: "Global",
      moral: "Different cultures celebrate growing up in different ways."
    },
    {
      id: "the-big-rain",
      title: "The Big Rain",
      origin: "International",
      content: [
        "It is Monday morning. I wake up and look outside.\nIt is raining very hard today.\nMy mother says, \"Take your umbrella to school.\"",
        "My brother and I walk to the bus stop.\nI see big puddles on the ground.\nMy little brother jumps in a puddle.\nSplash! Water goes everywhere.\nMy pants are wet now.",
        "I open my umbrella. It is blue with white stars.\nMy brother stands under my umbrella too.\nWe wait for the yellow school bus.",
        "At school, we hang our wet coats on hooks.\nOur shoes make a squeaky sound on the floor.\nMy teacher says, \"Good morning! You are wet!\"\nWe laugh. We are happy even in the rain!"
      ],
      vocabulary: [
        { word: "rain", definition: "water falling from clouds" },
        { word: "puddles", definition: "small pools of water" },
        { word: "umbrella", definition: "thing that keeps rain off" },
        { word: "squeaky", definition: "making a high sound" }
      ],
      region: "Global",
      moral: "We can find joy even on rainy days."
    },
    {
      id: "my-pet-turtle",
      title: "My Pet Turtle",
      origin: "International",
      content: [
        "This is my pet turtle. His name is Slow.\nI got him for my birthday last month.\nHe lives in a big glass tank in my room.",
        "Slow has a green and brown shell.\nHe has small eyes and a funny mouth.\nHe eats green leaves and special turtle food.\nSometimes I give him small pieces of apple.",
        "In the morning, I put Slow in the sun by the window.\nHe likes to feel warm.\nWhen I come home from school, I take him out of his tank.\nHe walks very slowly across the floor.",
        "At night, Slow sleeps inside his shell.\nI can only see his head when he is hungry.\nOn weekends, I clean his tank with fresh water.\nI love my turtle very much!"
      ],
      vocabulary: [
        { word: "turtle", definition: "animal with hard shell" },
        { word: "shell", definition: "hard covering that protects" },
        { word: "tank", definition: "container for animals" },
        { word: "slowly", definition: "not moving fast" }
      ],
      region: "Global",
      moral: "Taking care of pets teaches responsibility and love."
    },
    {
      id: "the-lost-mitten",
      title: "The Lost Mitten",
      origin: "International",
      content: [
        "It is winter. The snow falls softly outside my window.\n\"Time for school!\" calls my mother.\nI put on my warm coat, my hat, and my mittens.\nMy mittens are red with white snowflakes.\nMy grandmother made them for me.",
        "My friends and I play in the snow at recess.\nWe make a big snowman with a carrot nose.\nWe throw snowballs and laugh.",
        "After recess, I look at my hands.\nOh no! One mitten is gone!\n\"I lost my mitten,\" I tell my teacher.\n\"Let's go look for it,\" she says.",
        "We walk back to the playground.\nWe look and look in the snow.\nThen my friend points to a tree.\n\"Look! I see something red!\"\nIt is my mitten! Now I have two mittens again!"
      ],
      vocabulary: [
        { word: "mitten", definition: "warm covering for hand" },
        { word: "snowman", definition: "person made of snow" },
        { word: "snowballs", definition: "balls made of snow" },
        { word: "winter", definition: "cold season" }
      ],
      region: "Global",
      moral: "Working together helps solve problems."
    },
    {
      id: "lunch-time",
      title: "Lunch Time",
      origin: "International",
      content: [
        "The big clock in our classroom says 12:00.\nThe bell rings loudly.\n\"It is lunch time, children,\" says our teacher.\nWe line up at the door.",
        "We walk to the cafeteria together.\nIt is a big room with many tables and chairs.\nI sit with my friends Maria and Carlos.\nI open my lunch box. My mom packed it this morning.",
        "I have a cheese sandwich and an apple.\nI also have a small chocolate cookie.\nCarlos has rice and chicken in a thermos.\nMaria has a peanut butter sandwich and orange slices.",
        "We eat and talk about our favorite games.\nThe lunch monitor says, \"Five minutes left!\"\nWe finish our food quickly.\nThen we clean our table and put trash in the bin.\nLunch time is my favorite part of the school day!"
      ],
      vocabulary: [
        { word: "cafeteria", definition: "room where people eat" },
        { word: "thermos", definition: "container that keeps food warm" },
        { word: "monitor", definition: "person who watches and helps" },
        { word: "trash", definition: "things to throw away" }
      ],
      region: "Global",
      moral: "Sharing meals with friends makes them more enjoyable."
    },
    {
      id: "the-soccer-game",
      title: "The Soccer Game",
      origin: "International",
      content: [
        "Today is Saturday. The sun is bright in the sky.\nIt is a perfect day for soccer.\nMy team, the Blue Tigers, has a big game today.",
        "I put on my blue shirt with the number 7.\nMy mom drives me to the park at 10:00.\nMy teammates are already there.\nOur coach shows us some new moves to practice.",
        "The whistle blows. The game begins!\nThe other team, the Red Eagles, is very good.\nThey score the first goal.\n\"Don't worry,\" says our coach. \"Keep trying!\"",
        "In the second half, my friend kicks the ball to me.\nI run fast down the field.\nI kick the ball hard into the goal!\nEveryone cheers for me.",
        "The final score is 2-1. We win the game!\nOur coach gives us orange slices.\nWe shake hands with the Red Eagles.\nSoccer is the best sport in the world!"
      ],
      vocabulary: [
        { word: "soccer", definition: "game played with a ball and feet" },
        { word: "coach", definition: "person who teaches sports" },
        { word: "score", definition: "to get points in a game" },
        { word: "practice", definition: "to do something many times to improve" }
      ],
      region: "Global",
      moral: "Teamwork and persistence lead to success."
    },
    {
      id: "the-new-student",
      title: "The New Student",
      origin: "International",
      content: [
        "Our teacher, Ms. Lee, stands at the front of the class.\n\"Children, we have a new student today,\" she says.\nA girl with long black hair walks into our classroom.\nShe looks nervous.",
        "\"This is Lin,\" says Ms. Lee. \"She comes from China.\nPlease help her feel welcome at our school.\"\nLin sits at the desk next to mine.\nShe has a blue backpack and a pencil case with pandas on it.",
        "At recess, I see Lin sitting alone on a bench.\nI walk over to her and say, \"Hello. My name is Sofia.\nWould you like to play with me?\"\nLin smiles. \"Yes, thank you,\" she says softly.",
        "We play on the swings together.\nI show her around our school.\nThe next day, Lin brings a book to show me.\nIt has beautiful pictures of China.\nWe read it together at lunch time.",
        "Now Lin and I are good friends.\nShe is teaching me some Chinese words.\nI am glad she came to our school."
      ],
      vocabulary: [
        { word: "nervous", definition: "feeling worried" },
        { word: "welcome", definition: "to greet kindly" },
        { word: "recess", definition: "break time at school" },
        { word: "swings", definition: "playground equipment that goes back and forth" }
      ],
      region: "Global",
      moral: "Being welcoming to new friends enriches everyone's lives."
    },
    {
      id: "my-birthday-party",
      title: "My Birthday Party",
      origin: "International",
      content: [
        "Today is my birthday. I am seven years old.\nI wake up early. I am very excited!\nMy mom puts balloons all over our house.\nThere are blue, red, and yellow balloons.",
        "My party starts at 2:00 in the afternoon.\nMy friends come to my house one by one.\nThey bring colorful presents for me.\n\"Thank you!\" I say to each friend.",
        "We play games in the backyard.\nWe have a treasure hunt and musical chairs.\nMy dad is the DJ. He plays my favorite songs.\nWe dance and laugh a lot.",
        "My mom brings out a big chocolate cake.\nIt has seven candles on top.\nEveryone sings \"Happy Birthday\" to me.\nI make a wish and blow out all the candles!",
        "We eat cake and vanilla ice cream.\nThen I open my presents.\nI get a new book, a toy car, and a puzzle.\nMy grandmother gives me a soccer ball.",
        "At 5:00, the party is over.\nMy friends go home with goodie bags.\nThis is my happiest birthday ever!"
      ],
      vocabulary: [
        { word: "balloons", definition: "colored bags filled with air" },
        { word: "presents", definition: "gifts given to someone" },
        { word: "candles", definition: "sticks of wax that make light" },
        { word: "treasure", definition: "something valuable" }
      ],
      region: "Global",
      moral: "Sharing happiness with friends and family makes special days even better."
    },
    {
      id: "the-hungry-squirrel",
      title: "The Hungry Squirrel",
      origin: "International",
      content: [
        "It is autumn. The leaves are red and orange.\nI walk to the park after school.\nI sit on a bench and take out my snack.\nI have a sandwich and an apple.",
        "I see a small gray squirrel on a tree branch.\nHe has a bushy tail and bright black eyes.\nHe watches me eat my sandwich.\nHe has a nut in his tiny hands.",
        "The squirrel puts his nut down on the branch.\nSlowly, he climbs down the tree trunk.\nHe looks at me. Then he looks at my food.\nI break off a small piece of bread.",
        "The squirrel comes closer. He is careful.\nHe stops near my feet.\nI throw the bread on the ground near him.\nHe picks it up quickly in his front paws.",
        "The squirrel nibbles the bread.\nI sit very still and watch him eat.\nWhen he finishes, he looks at me again.\nI throw another piece to him.",
        "Then the squirrel takes the bread and runs away.\nHe climbs back up to his branch.\nI think he is saving the food for later.\nTomorrow I will bring more bread for my new friend."
      ],
      vocabulary: [
        { word: "squirrel", definition: "small animal with bushy tail" },
        { word: "autumn", definition: "season when leaves change color" },
        { word: "branch", definition: "part of a tree that grows out" },
        { word: "nibbles", definition: "takes small bites" }
      ],
      region: "Global",
      moral: "Being kind to animals can lead to unexpected friendships."
    },
    {
      id: "going-to-the-doctor",
      title: "Going to the Doctor",
      origin: "International",
      content: [
        "I wake up with a sore throat. My head hurts too.\n\"Mom,\" I say, \"I don't feel good today.\"\nShe puts her hand on my forehead.\n\"You feel warm,\" she says. \"I'll call the doctor.\"",
        "My doctor's office is in a tall white building.\nWe sit in the waiting room.\nThere are other children there too.\nSome look sick. Some are playing with toys.",
        "\"Sam Williams,\" calls the nurse. That's me!\nThe nurse is nice. She measures my height and weight.\nShe takes my temperature with a special thermometer.\n\"You have a fever,\" she tells me.",
        "Dr. Chen comes in. She wears a white coat.\n\"What's wrong today?\" she asks me.\nI tell her about my sore throat and headache.\nShe looks in my ears with a small light.\nShe looks in my throat and listens to my chest.",
        "\"You have a cold,\" says Dr. Chen.\nShe gives my mom a paper for medicine.\n\"Drink lots of water and get plenty of rest,\" she says.",
        "At home, I take my medicine.\nI lie on the couch and watch cartoons.\nMy mom makes me hot soup for lunch.\nTomorrow I will feel much better."
      ],
      vocabulary: [
        { word: "fever", definition: "being too warm from being sick" },
        { word: "thermometer", definition: "tool that measures temperature" },
        { word: "medicine", definition: "something that helps you feel better" },
        { word: "patient", definition: "person seeing a doctor" }
      ],
      region: "Global",
      moral: "Doctors and medicine help us get better when we're sick."
    },
    {
      id: "the-broken-toy",
      title: "The Broken Toy",
      origin: "International",
      content: [
        "My favorite toy is a red race car.\nMy uncle gave it to me for Christmas.\nI play with it every day.\nIt goes very fast on the kitchen floor.",
        "One day, I am playing with my car.\nI make it jump off the couch onto the floor.\nCrash! Something breaks!\nI pick up my car. The wheel falls off.\nI try to put it back, but I can't fix it.",
        "I feel sad. Tears come to my eyes.\nMy dad comes into the room.\n\"What's wrong?\" he asks.\n\"My car is broken,\" I say. \"Can you fix it?\"",
        "Dad looks at my car carefully.\n\"I think I can fix this,\" he says.\nHe goes to the garage and comes back with a toolbox.\nHe takes out a small screwdriver.",
        "Dad works on my car for ten minutes.\nHe puts the wheel back on and tightens a screw.\n\"Try it now,\" he says.",
        "I put my car on the floor and push it.\nIt rolls perfectly! The wheel stays on!\n\"Thank you, Dad!\" I say. I give him a big hug.\nMy dad can fix anything!"
      ],
      vocabulary: [
        { word: "broken", definition: "not working or damaged" },
        { word: "screwdriver", definition: "tool for turning screws" },
        { word: "wheel", definition: "round thing that turns" },
        { word: "fix", definition: "to make something work again" }
      ],
      region: "Global",
      moral: "Parents help us solve problems and make things better."
    },
    {
      id: "the-class-pet",
      title: "The Class Pet",
      origin: "International",
      content: [
        "Our classroom has a special pet.\nIt is a white rabbit with black spots.\nHis name is Spot. He lives in a large cage.\nHe has soft fur and long ears.",
        "Every morning, we say hello to Spot.\nHe wiggles his nose at us.\nDuring class, he hops around his cage.\nSometimes he watches us do our math problems.",
        "Our teacher, Mr. Johnson, makes a chart.\nThe chart shows who feeds Spot each day.\nWe take turns giving him fresh water and food.\nWe also clean his cage once a week.",
        "Today it is my turn to feed Spot!\nI am very excited.\nAfter lunch, Mr. Johnson gives me Spot's food.\nSpot eats carrots, lettuce, and special rabbit pellets.",
        "I put the food in his bowl.\nSpot hops over quickly.\nHe eats the carrots first. They are his favorite.\nI fill his water bottle with fresh water.",
        "Mr. Johnson lets me pet Spot's soft fur.\n\"Be gentle,\" he reminds me.\nI stroke Spot's back softly.\nTaking care of our class pet is an important job.\nI hope it will be my turn again soon!"
      ],
      vocabulary: [
        { word: "rabbit", definition: "animal with long ears" },
        { word: "cage", definition: "box for keeping animals" },
        { word: "pellets", definition: "small pieces of animal food" },
        { word: "gentle", definition: "soft and careful" }
      ],
      region: "Global",
      moral: "Taking care of animals teaches responsibility and gentleness."
    },
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
      id: "ant-and-grasshopper",
      title: "The Ant and the Grasshopper",
      origin: "International",
      content: [
        "Grasshopper looks at Ant's food. \"Can I eat some of your food?\" she asks. Ant lives next to Grasshopper. Ant says, \"I work every day. You hop and sing and play.\" Grasshopper says, \"After lunch, I can work.\" Ant gives Grasshopper some food.",
        "After lunch Grasshopper hops and sings and works! Ant likes to work and go to school every day. Every day Ant gets up at 7:15. She finds food before school. She reads and writes. After school she plays soccer.",
        "Ant works and works. Grasshopper doesn't like to work. One day Grasshopper gets up at 10:00. She says, \"I like to hop and sing every day.\" She gets dressed and eats breakfast. After breakfast she hops and sings and watches TV. At 11:45 she goes back to sleep.",
        "Ant walks home at lunch. She sees Grasshopper and says, \"Hello!\" Grasshopper opens one eye and asks, \"What time is it?\" Ant says, \"It's 12:45.\" Grasshopper sits up and smiles. \"Is it time for lunch?\" she asks. \"Yes,\" says Ant, \"but you don't have any food.\""
      ],
      vocabulary: [
        { word: "neighbor", definition: "person who lives next to you" },
        { word: "responsibility", definition: "having duties to take care of" },
        { word: "lazy", definition: "not wanting to work or be active" },
        { word: "schedule", definition: "plan for when to do things" },
        { word: "prepared", definition: "ready for something" },
        { word: "routine", definition: "things you do regularly" },
        { word: "discipline", definition: "training to follow rules or a code of behavior" },
        { word: "consequences", definition: "results of actions" },
        { word: "habits", definition: "things you do often without thinking" }
      ],
      region: "Global",
      moral: "It's important to work hard and prepare for the future instead of being lazy."
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
    {
      id: "two-brothers",
      title: "The Two Brothers",
      origin: "International",
      content: [
        "In a town in the mountains there is a little family. The father is a doctor. The mother is a doctor. The two brothers in the family say, \"We don't want to be doctors.\"",
        "\"What do you want to be?\" asks the father. The brothers say, \"We always go for walks in the mountains. How about shepherds?\" The next day the two brothers go up the mountain.",
        "They find a shepherd with his sheep and he teaches them. \"We can be shepherds!\" they say. After they eat lunch, they go to sleep under a tree.",
        "A horn pokes Big Brother in the arm. He jumps up and says to Little Brother, \"Get up! Let's get out of here!\" They do not look behind and see the sheep with horns. They start to run down the mountain.",
        "Horns poke into them from behind. They cry, \"Help!\" They get to a river and swim. When they get home their mother asks, \"Do you like being shepherds?\" Big Brother says, \"No! We can fight fires, fix teeth, help sick people, and teach sports.\" \"But we never want to be shepherds,\" says Little Brother."
      ],
      vocabulary: [
        { word: "shepherd", definition: "person who takes care of sheep" },
        { word: "mountain", definition: "very high hill" },
        { word: "profession", definition: "type of job requiring special training" },
        { word: "experience", definition: "something that happens to you" },
        { word: "decision", definition: "choice made after thinking" },
        { word: "career", definition: "job or profession for life" },
        { word: "horn", definition: "hard pointed part on an animal's head" },
        { word: "teach", definition: "to help someone learn" },
        { word: "escape", definition: "to get away from danger" }
      ],
      region: "Global",
      moral: "Try new things, but learn from your experiences to make better choices."
    },
    {
      id: "city-mouse-country-mouse",
      title: "City Mouse and Country Mouse",
      origin: "International",
      content: [
        "One day City Mouse takes a bus to the country to see his cousin, Country Mouse. He sees cows and horses in the fields. He sees ponds and fences and birds.",
        "The bus stops at a farm. Country Mouse is waiting. \"Hello, Cousin! I'm happy to see you,\" says Country Mouse. But soon City Mouse is not happy.",
        "\"I'm hungry. There is no food! And it's cold here in the barn,\" he says. \"Let's go to the city. You can live in my apartment. There's food and it's warm.\"",
        "Country Mouse touches his cold nose. \"Yes, let's go!\" he says. The two cousins take the bus to the city. They see a restaurant, a skating rink, and a museum.",
        "Country Mouse says, \"Here's our stop!\" They get off the bus and go into the apartment. There are milk and cheese on a table. City Mouse and Country Mouse are happy. But before they can eat, a big cat comes in. The cat wants to eat them! They have to hide behind the refrigerator. Country Mouse says, \"Now I'm hungry and a cat wants to eat me! I'm going back to the country!\""
      ],
      vocabulary: [
        { word: "cousin", definition: "child of your aunt or uncle" },
        { word: "field", definition: "open area of land" },
        { word: "barn", definition: "building for farm animals" },
        { word: "apartment", definition: "home in a building with many homes" },
        { word: "restaurant", definition: "place where people pay to eat" },
        { word: "museum", definition: "building with important things to see" },
        { word: "refrigerator", definition: "box that keeps food cold" },
        { word: "comfortable", definition: "feeling good and happy" },
        { word: "dangerous", definition: "not safe" }
      ],
      region: "Global",
      moral: "Different people prefer different ways of life. Home is where you feel most comfortable."
    },
    {
      id: "why-owl-says-who",
      title: "Why the Owl Says \"Who\"",
      origin: "International",
      content: [
        "There are many birds in the forest. Birds with red and green feathers sing in the trees. Birds with yellow and purple feathers come from the plains.",
        "But there is one bird in the forest who has no feathers. She sits in a tree and cries and cries. \"I have no feathers!\" The birds in the forest say, \"Let's help the bird with no feathers.\"",
        "The parrot gives her a red feather. The owl gives her a brown feather. Soon the sad bird gets five feathers, ten feathers, twenty feathers!",
        "She laughs, \"I don't need you. Now I have many feathers.\" And she flies out of the forest. The owl is mad. He wants to find that bird. He wants his feather.",
        "He flies out of the forest. He asks everyone he meets, \"Who—who—who has my feather?\" To this day the owl says, \"Who—who—who.\" He is always looking for his feather."
      ],
      vocabulary: [
        { word: "feather", definition: "soft covering on a bird" },
        { word: "forest", definition: "large area with many trees" },
        { word: "plains", definition: "flat land with few trees" },
        { word: "parrot", definition: "colorful talking bird" },
        { word: "owl", definition: "bird that flies at night" },
        { word: "ungrateful", definition: "not thankful" },
        { word: "generous", definition: "happy to give to others" },
        { word: "kindness", definition: "being nice to others" },
        { word: "search", definition: "to look for something" }
      ],
      region: "Global",
      moral: "Be grateful to those who help you. Don't be selfish with kindness."
    },
    {
      id: "seasons-around-world",
      title: "Seasons Around the World",
      origin: "International",
      content: [
        "Tropical countries are near the equator. In tropical countries, there is usually no Spring or Fall. There is a rainy season and a dry season.",
        "Go to tropical countries in the dry season. You can go in the rainy season but don't forget your umbrella, raincoat, and boots!",
        "Chile is south of the equator. Canada is north of the equator. In Chile, it is summer in December. It is winter in June.",
        "But in Canada, it's the opposite. It's usually cold and snowy in December. Do you like to go to the beach? You can go to the beach in July in Canada.",
        "And you can go to the beach in December in Chile. Do you like to play in the snow? Go to Canada from December to March. Go to Chile from June to August. Bring your jacket, hat, gloves, and skis!"
      ],
      vocabulary: [
        { word: "tropical", definition: "very warm all year" },
        { word: "equator", definition: "imaginary line around middle of Earth" },
        { word: "opposite", definition: "completely different" },
        { word: "season", definition: "part of year with certain weather" },
        { word: "temperature", definition: "how hot or cold it is" },
        { word: "climate", definition: "usual weather in a place" },
        { word: "hemisphere", definition: "half of the Earth" },
        { word: "weather", definition: "conditions outside like rain or sun" },
        { word: "geography", definition: "study of places on Earth" }
      ],
      region: "Global",
      moral: "The world is diverse, with different seasons happening at different times in different places."
    },
    {
      id: "princess-eva",
      title: "Princess Eva",
      origin: "International",
      content: [
        "Yesterday Princess Eva was happy. She went to a carnival. The weather was sunny, and the food was delicious. There were clowns and a band.",
        "But there was a bad magician at the carnival. Princess Eva saw the magician and she laughed. The magician didn't laugh.",
        "He touched her mouth with a wand. He said, \"From now on, you can't talk and you can't laugh.\" And Princess Eva couldn't make a sound.",
        "A doctor came. He looked at her fingers, her ears, her eyes, her nose, and her mouth. She wasn't sick. But something was wrong. Even a clown couldn't make her laugh.",
        "But then one day, a nice man came to town. He had a band of animals. His dog played the piano and it sounded bad! Princess Eva started to laugh, and the magic was broken."
      ],
      vocabulary: [
        { word: "carnival", definition: "fun fair with rides and shows" },
        { word: "magician", definition: "person who does magic tricks" },
        { word: "wand", definition: "magic stick" },
        { word: "spell", definition: "magic words or charm" },
        { word: "curse", definition: "magic that causes trouble" },
        { word: "examine", definition: "to look at carefully" },
        { word: "silent", definition: "making no sound" },
        { word: "perform", definition: "to do something for others to watch" },
        { word: "break", definition: "to end something" }
      ],
      region: "Global",
      moral: "Laughter can break any spell. Joy is stronger than meanness."
    },
    {
      id: "three-wishes",
      title: "Three Wishes",
      origin: "International",
      content: [
        "One day a farmer goes to cut down a tree on his farm. The tree says, \"Oh, farmer, please don't cut me down.\" The farmer stops. The tree says, \"Thank you! I am giving you and your family three wishes. You can have any three things you would like.\"",
        "The farmer runs into his house. His father is putting breakfast on the table. There are eggs, slices of tomato, toast and butter, and orange juice. The farmer says, \"We have three wishes from a tree!\"",
        "His father doesn't listen. \"Sit down and enjoy your breakfast,\" says his father. The farmer sits down and says, \"Oh, I'd like sausages with my breakfast.\" Poof! And there is a bunch of sausages on his dish.",
        "The father gets mad. \"You wish for sausages?\" he asks. \"I'd like to see those sausages on your nose!\" Poof! And the sausages are on the farmer's nose.",
        "Then the farmer and his father hear the mother at the door. \"Use wish number three!\" the father says. \"I'd like the sausages to disappear,\" the farmer says. Poof! The sausages disappear along with the three wishes."
      ],
      vocabulary: [
        { word: "wish", definition: "to want something to happen" },
        { word: "disappear", definition: "to stop being visible" },
        { word: "sausages", definition: "tubes of meat" },
        { word: "poof", definition: "sound of magic happening" }
      ],
      region: "Global",
      moral: "Think carefully before making wishes. Don't waste opportunities."
    },
    {
      id: "a-healthy-girl",
      title: "A Healthy Girl",
      origin: "International",
      content: [
        "Mai-Lan is from Vietnam. She lives in Chicago. Every day she eats fish and chicken. She likes rice and vegetables. And she loves salads. Her favorite fruits are apples and oranges. And she likes ice cream—chocolate ice cream!",
        "Mai-Lan likes to ride her bike. She loves to swim and go to the beach in the summer. On the playground, she jumps rope and plays games. Mai-Lan gets a lot of exercise. She's a healthy girl.",
        "Usually Mai-Lan eats healthy foods, but yesterday she didn't. She ate a lot of candy. Usually she drinks milk and juice, but yesterday she didn't. She drank pop. Usually her bedtime is 9:00 p.m., but yesterday she didn't go to bed at 9:00.",
        "Mai-Lan doesn't stay up late all the time. She did one time in the past year. Yesterday was the New Year celebration. Mai-Lan wanted to celebrate the New Year. She wanted to shout \"Happy New Year!\" with her family at midnight. And she did."
      ],
      vocabulary: [
        { word: "healthy", definition: "good for your body" },
        { word: "exercise", definition: "physical activity to stay fit" },
        { word: "celebrate", definition: "to do something special for an event" },
        { word: "midnight", definition: "twelve o'clock at night" }
      ],
      region: "Global",
      moral: "A healthy lifestyle is important, but it's okay to celebrate special occasions differently."
    },
    {
      id: "tv-time",
      title: "TV Time", 
      origin: "International",
      content: [
        "Hello! My name is David. I live in Miami. My parents moved here when I was little. They're from Guatemala, and they speak Spanish. A lot of families in Miami speak Spanish.",
        "So there are a lot of Spanish TV shows. There was a scary movie at 9:00. The TV reviewer awarded it four stars. But I didn't get to watch it.",
        "I did my homework. Then I watched a cartoon show. Why? Because cartoons are my favorite shows! I awarded the cartoon show three stars.",
        "Then it was time for bed. In a few more years, I can watch late TV shows!"
      ],
      vocabulary: [
        { word: "reviewer", definition: "person who gives opinions about shows" },
        { word: "awarded", definition: "gave a rating or prize" },
        { word: "cartoon", definition: "animated TV show or movie" },
        { word: "favorite", definition: "liked best of all" }
      ],
      region: "North America",
      moral: "Following rules and being responsible with TV time is important."
    },
    {
      id: "the-little-red-hen",
      title: "The Little Red Hen",
      origin: "English",
      content: [
        "The little red hen finds some wheat seeds. \"Who will help me plant these wheat seeds?\" she asks. \"Not I,\" says the cat. \"Not I,\" says the dog. \"Not I,\" says the mouse. \"Then I will plant them myself,\" says the little red hen. And she does.",
        "The wheat grows tall. \"Who will help me cut the wheat?\" asks the little red hen. \"Not I,\" says the cat. \"Not I,\" says the dog. \"Not I,\" says the mouse. \"Then I will cut it myself,\" says the little red hen. And she does.",
        "\"Who will help me take the wheat to the mill?\" asks the little red hen. \"Not I,\" says the cat. \"Not I,\" says the dog. \"Not I,\" says the mouse. \"Then I will take it myself,\" says the little red hen. And she does.",
        "The mill turns the wheat into flour. The little red hen makes bread with the flour. The bread smells delicious. \"Who will help me eat the bread?\" asks the little red hen. \"I will!\" says the cat. \"I will!\" says the dog. \"I will!\" says the mouse.",
        "\"No,\" says the little red hen. \"You didn't help me plant the wheat, cut the wheat, or take it to the mill. My chicks and I will eat the bread.\" And they do."
      ],
      vocabulary: [
        { word: "wheat", definition: "plant used to make flour" },
        { word: "mill", definition: "place where grain is ground into flour" },
        { word: "flour", definition: "powder made from ground wheat" },
        { word: "delicious", definition: "very tasty" }
      ],
      region: "Europe",
      moral: "Those who don't help with the work shouldn't expect to share in the reward."
    },
    {
      id: "the-wind-and-the-sun",
      title: "The Wind and the Sun",
      origin: "Greek",
      content: [
        "The wind and the sun are having an argument. They both think they are stronger. \"I am stronger than you,\" says the wind. \"No, I am stronger,\" says the sun.",
        "They see a man walking on the road. He is wearing a coat. The wind has an idea. \"Let's have a contest,\" says the wind. \"Whoever can make that man take off his coat is stronger.\" The sun agrees.",
        "The wind goes first. He blows and blows. The wind blows harder and harder. But the man holds his coat tightly. The harder the wind blows, the tighter the man holds his coat. The wind gives up.",
        "Now it's the sun's turn. The sun shines brightly. The man feels warm. The sun shines even brighter. The man starts to sweat. Finally, the man takes off his coat. \"You win,\" says the wind.",
        "\"Gentleness and kindness are sometimes stronger than force and anger,\" says the sun."
      ],
      vocabulary: [
        { word: "argument", definition: "a disagreement" },
        { word: "contest", definition: "competition between two or more sides" },
        { word: "force", definition: "strength or power used against something" },
        { word: "gentleness", definition: "being kind and soft" }
      ],
      region: "Europe",
      moral: "Gentleness and kindness can achieve more than force and harshness."
    },
    {
      id: "the-boy-who-cried-wolf",
      title: "The Boy Who Cried Wolf",
      origin: "Greek",
      content: [
        "A boy watches sheep on a hill near a village. The boy gets bored. He decides to play a trick on the villagers. \"Wolf! Wolf!\" he shouts.",
        "The villagers hear him and run up the hill to help him. But there is no wolf. The boy laughs. \"I tricked you!\" The villagers are angry and go back to the village.",
        "The next day, the boy does the same thing. \"Wolf! Wolf!\" he shouts. Again, the villagers run up the hill. Again, there is no wolf. The boy laughs at them. The villagers are very angry and go back home.",
        "On the third day, a real wolf comes. The boy is afraid. \"Wolf! Wolf!\" he shouts. \"Please help me!\" But the villagers think he is playing another trick. No one comes to help.",
        "The wolf eats some sheep. The boy learns a lesson: if you tell lies, people won't believe you when you tell the truth."
      ],
      vocabulary: [
        { word: "wolf", definition: "wild animal like a big dog" },
        { word: "trick", definition: "something done to fool others" },
        { word: "villagers", definition: "people who live in a village" },
        { word: "truth", definition: "what is real or actual" }
      ],
      region: "Europe",
      moral: "If you lie too often, people won't believe you even when you tell the truth."
    },
    {
      id: "the-fox-and-the-crow",
      title: "The Fox and the Crow",
      origin: "Greek",
      content: [
        "A crow sits on a tree branch. She has a piece of cheese in her beak. A fox walks by. He sees the cheese and wants it. The fox thinks of a plan.",
        "\"Hello, beautiful crow,\" says the fox. \"Your feathers are so shiny and black. You must be the queen of all birds.\" The crow likes the compliments, but she doesn't say anything. She keeps the cheese in her beak.",
        "\"I hear your voice is as beautiful as your feathers,\" says the fox. \"Please sing a song for me.\" The crow is very proud now. She wants to show the fox her voice.",
        "She opens her beak to sing, \"Caw! Caw!\" But when she opens her beak, the cheese falls down. The fox catches the cheese and eats it.",
        "\"Thank you for the cheese,\" says the fox. \"And here's some advice: don't trust people who give you too many compliments.\" The crow learns a lesson that day about pride and flattery."
      ],
      vocabulary: [
        { word: "compliments", definition: "nice things said about someone" },
        { word: "pride", definition: "feeling very pleased with yourself" },
        { word: "flattery", definition: "excessive praise to get something" },
        { word: "advice", definition: "suggestion about what to do" }
      ],
      region: "Europe",
      moral: "Don't let flattery make you act foolishly. Be careful of those who praise too much."
    }
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
