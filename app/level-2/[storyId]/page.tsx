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

  // All Level 2 stories data
  const stories = [
    {
      id: "the-emperors-new-clothes",
      title: "The Emperor's New Clothes",
      origin: "Danish",
      author: "Hans Christian Andersen",
      content: [
        'Many years ago, there lived an emperor who cared so much about having the finest clothes that he spent all his money on being well-dressed. He had a different outfit for every hour of the day, and instead of saying, as one might about any other ruler, "The King is in his council chamber," people would say, "The Emperor is in his dressing room."',
        "One day, two swindlers arrived in the city, claiming to be weavers who could make the most magnificent cloth imaginable. Not only were the colors and patterns extraordinarily beautiful, but the clothes made from this material had a special power—they were invisible to anyone who was either incompetent in their job or hopelessly stupid.",
        '"Those would be perfect clothes!" thought the Emperor. "If I wore them, I could discover which of my officials are unfit for their positions, and I could also distinguish the clever from the foolish!" So he gave the two swindlers a large sum of money to start working on the special garments right away.',
        "The swindlers set up two looms and pretended to work, though there was nothing on the looms at all. They requested the finest silk and the most precious gold thread, which they promptly hid in their own bags while they worked diligently at the empty looms, often late into the night.",
        "\"I'd like to know how they're getting on with the cloth,\" the Emperor thought. But he felt slightly uncomfortable when he remembered that those who were unfit for their positions would not be able to see the fabric. He believed, of course, that he had nothing to fear for himself, but still, he thought it would be better to send someone else first to see how the work was progressing.",
        "\"I'll send my honest old minister to the weavers,\" the Emperor decided. \"He'll be the best person to see how the material is coming along. He's a sensible man, and no one is more suitable for his job than he is.\" So the honest old minister went to the room where the two swindlers sat working at the empty looms.",
        "\"Heaven help me!\" thought the old minister, opening his eyes wide. \"I can't see anything at all!\" But he didn't say this out loud. Both swindlers invited him to come closer and asked him if he didn't think the colors and patterns were beautiful. They pointed to the empty looms, and the poor old minister stared as hard as he could, but he couldn't see anything, because there was nothing to see.",
        '"Oh dear," he thought, "am I a fool? Am I unfit for my position? No one can ever know that I couldn\'t see the material." So he praised the fabric he couldn\'t see and assured them of his delight in the beautiful colors and the exquisite pattern.',
        '"Well, we\'re pleased to hear that," said the swindlers, and they proceeded to name all the colors and describe the special pattern. The old minister listened carefully so that he could repeat it all to the Emperor, which is exactly what he did.',
        "The swindlers now asked for more money, more silk, and more gold thread to continue their work. They put it all in their own pockets, and not a single thread ever went into the fabric, though they continued to work at the empty looms.",
        "Soon the Emperor sent another honest official to see how the work was progressing. The same thing happened to him as had happened to the minister. He looked and looked, but since there was nothing on the looms, he couldn't see anything.",
        "\"Isn't it a beautiful piece of fabric?\" asked the swindlers, showing and explaining the magnificent pattern that wasn't there at all. \"I know I'm not stupid,\" the man thought, \"so it must be that I'm unworthy of my good position. That's strange. I mustn't let anyone know this.\" So he praised the material he couldn't see and expressed his enthusiasm for the beautiful colors and patterns.",
        "Eventually, the Emperor himself wished to see the splendid fabric while it was still on the loom. Accompanied by a select group of officials, including the two who had already been there, he went to the two clever swindlers, who were now weaving with all their might, but without a single thread.",
        '"Isn\'t it magnificent?" said the two officials who had been there before. "Your Majesty, look at the colors and the patterns!" And they pointed to the empty looms, each believing that the others could see the fabric.',
        '"What\'s this?" thought the Emperor. "I can\'t see anything! This is terrible! Am I a fool? Am I unfit to be Emperor? This is the most dreadful thing that could happen!" But aloud he said, "Oh, it\'s very beautiful! It has my highest approval!" And he nodded his appreciation as he gazed at the empty looms. Nothing would induce him to say that he couldn\'t see anything.',
        'His whole entourage stared and stared, but no one could see anything, because there was nothing to see. Nevertheless, they all said, just like the Emperor, "Oh, it\'s beautiful!" They advised him to have clothes made from this magnificent material for the grand procession that was soon to take place.',
        '"Magnificent! Excellent! Splendid!" went from mouth to mouth, and everyone was extremely pleased. The Emperor gave each of the swindlers a cross to wear in their buttonholes and the title of "Sir Weaver."',
        'The night before the procession, the swindlers stayed up late, burning more than sixteen candles. People could see they were hard at work, finishing the Emperor\'s new clothes. They pretended to take the fabric off the looms; they cut the air with huge scissors; they sewed with needles without thread; and at last they said, "Now the clothes are ready!"',
        'The Emperor, with his grandest courtiers, went to the swindlers himself, and both swindlers raised their arms as if they were holding something. They said, "These are the trousers! Here is the coat! Here is the cloak!" and so on. "They\'re as light as a spider\'s web! You might almost feel you had nothing on, but that\'s the beauty of them!"',
        '"Yes," agreed all the courtiers, though they could see nothing, for there was nothing to see. "Would Your Imperial Majesty graciously consent to take off your clothes," said the swindlers, "so that we may put the new ones on you, in front of this large mirror?"',
        "The Emperor took off all his clothes, and the swindlers pretended to put each new garment on him, one after the other. They took him around the waist and seemed to be fastening something—that was the train—and the Emperor turned round and round in front of the mirror.",
        '"How well His Majesty looks in the new clothes! How becoming they are!" everyone in the crowd said. "What a design! What colors! These are indeed royal robes!"',
        '"The canopy that is to be carried above Your Majesty in the procession is waiting outside," the chief master of ceremonies reported.',
        '"Well, I\'m ready," the Emperor said. "Don\'t the clothes fit well?" Then he turned around once more in front of the mirror, pretending to study his finery with great care.',
        "The chamberlains who were to carry the train fumbled on the floor, trying to pick it up. They pretended to lift and hold it high. They didn't dare admit they couldn't see anything.",
        "So the Emperor walked in the procession under the beautiful canopy, and all the people in the streets and at the windows said, \"Oh, how fine the Emperor's new clothes are! What a perfect fit! And the colors—how beautiful!\" No one wanted to admit that they couldn't see anything, for that would prove them either unfit for their positions or hopelessly stupid.",
        'None of the Emperor\'s clothes had ever been such a success. "But he doesn\'t have anything on!" a little child said. "Listen to the voice of innocence!" said the child\'s father, and one person whispered to another what the child had said. "A child says he doesn\'t have anything on!"',
        '"He doesn\'t have anything on!" the whole crowd was shouting at last. The Emperor shivered, for he was certain that they were right, but he thought, "I must go through with the procession." So he held himself even more proudly, and the chamberlains walked along holding the train that wasn\'t there at all.',
      ],
      vocabulary: [
        { word: "swindlers", definition: "people who obtain money dishonestly by deceiving others" },
        { word: "incompetent", definition: "not having the necessary skills or ability to do something successfully" },
        { word: "diligently", definition: "in a way that shows care and effort in your work" },
        { word: "proceeded", definition: "continued with a course of action" },
        { word: "exquisite", definition: "extremely beautiful and delicate" },
        { word: "entourage", definition: "a group of people who attend or accompany an important person" },
        { word: "induce", definition: "to persuade or influence someone to do something" },
        { word: "magnificent", definition: "extremely beautiful, elaborate, or impressive" },
        {
          word: "courtiers",
          definition: "people who attend a royal court as companions or advisers to the king or queen",
        },
        { word: "finery", definition: "expensive or impressive clothes" },
        { word: "chamberlains", definition: "officers who manage the household of a monarch or noble person" },
        { word: "canopy", definition: "a covering suspended over a bed, throne, or other piece of furniture" },
      ],
      region: "Europe",
      moral:
        "People often pretend to know or believe things they don't understand out of fear of appearing foolish or incompetent. Sometimes it takes the innocence of a child to speak the simple truth that everyone else is afraid to acknowledge.",
    },
    {
      id: "the-nightingale",
      title: "The Nightingale",
      origin: "Danish",
      author: "Hans Christian Andersen",
      content: [
        "In ancient times, there lived an emperor in a magnificent palace made of the finest porcelain. The palace walls were adorned with intricate designs of flowers and dragons, and in the garden grew the most beautiful flowers, with tiny silver bells tied to their stems that tinkled when the wind blew. The garden extended so far that even the gardener didn't know where it ended.",
        "In this vast garden lived a nightingale, whose song was so beautiful that even the poor fishermen, who had so many other things to do, would stop to listen. Travelers from every corner of the world wrote books about the magnificent city, the palace, and most of all, about the nightingale's song, saying it was the most wonderful thing in the entire kingdom.",
        "These books eventually reached the emperor, who had never known about this treasure in his own garden. 'What? A nightingale?' he exclaimed. 'I have never heard of it. Is there such a bird in my empire, and even in my own garden? Why have I never been told about it? I have to read about things in my own kingdom in books!'",
        "The emperor immediately commanded his lord-in-waiting to bring the nightingale to court the very next evening. 'If it is not found,' he declared, 'the entire court will be punished after supper.' The lord-in-waiting ran up and down all the stairs, through halls and corridors, but none of the people he met had ever heard of the nightingale.",
        "Finally, a little kitchen maid said, 'Oh yes, I know the nightingale well. Every evening I get permission to take scraps from the kitchen to my poor sick mother. She lives down by the shore. On my way back, when I am tired, I rest in the forest and listen to the nightingale's song. Its music brings tears to my eyes; it's like my mother's kiss.'",
        "'Little kitchen maid,' said the lord-in-waiting, 'I will get you a permanent position in the kitchen and permission to see the emperor dining if you will take us to the nightingale.' So they set out to the forest where the nightingale sang.",
        "As they walked, a cow began to moo. 'Oh!' said the court gentlemen, 'Now we have found it! What remarkable power for such a small creature. We have certainly heard it before.' 'No,' said the little kitchen maid, 'that is just a cow mooing. We still have quite a way to go.'",
        "Then they heard frogs croaking in a pond. 'Wonderful!' said the Chinese court preacher. 'Now I hear it, it sounds just like little church bells.' 'No,' said the little kitchen maid, 'those are frogs. But I think we shall soon hear the nightingale.'",
        "Suddenly the nightingale began to sing. 'There it is!' said the little kitchen maid. 'Listen! Listen! And there it sits!' She pointed to a small gray bird up in the branches. The lord-in-waiting looked at it in surprise. 'I never imagined it would look like that,' he said. 'It seems so plain after all the beautiful things I have heard about it.'",
        "'Little nightingale,' called the kitchen maid, 'our gracious Emperor would like you to sing for him.' 'With the greatest pleasure!' replied the nightingale, and it sang even more beautifully than before.",
        "When the nightingale was brought to the palace, the emperor was so moved by its song that tears rolled down his cheeks. That was the highest honor he could bestow. The nightingale's song touched his heart so deeply that he offered to hang his golden slipper around the bird's neck, but the nightingale declined, saying the emperor's tears were reward enough.",
        "Soon after, the Emperor of Japan sent a gift: an artificial nightingale, decorated with diamonds, rubies, and sapphires. When wound up, it could sing one of the songs the real nightingale sang. Everyone at court was delighted with this mechanical bird, which could sing the same tune thirty-three times without getting tired.",
        "The real nightingale flew away, and the artificial one was given a special cushion next to the emperor's bed. But one evening, as the mechanical bird was singing its thirty-third repetition of the same tune, something inside it snapped. The music stopped, and the wheels ran down with a whirring noise.",
        "The court physician tried to repair it, but the bird could only be played once a year, as its wheels were badly worn. Five years passed, and a great sadness fell over the land, for the emperor became very ill and weak, and felt cold throughout his palace. As he lay in his grand bed, Death sat on his chest, wearing the emperor's crown, holding his sword in one hand and his banner in the other.",
        "Through the open window came the sweet sound of singing. It was the real nightingale, who had heard of the emperor's illness and come to sing of hope and trust. As it sang, the emperor's illness began to fade away like a cold, white mist through the window.",
        "'Thank you, thank you!' said the emperor. 'You drove Death from my heart with your heavenly song. How can I reward you?' 'You have already rewarded me,' said the nightingale. 'I brought tears to your eyes the first time I sang for you. Those tears are the jewels that gladden a singer's heart. But now sleep and grow strong again, and I will sing for you.'",
        "From that day on, the nightingale came to sing at the palace, not as a captive but as a free bird, bringing joy to all who heard its song. The mechanical bird remained in its special box, for the emperor and his court had learned that the song of a living heart, though perhaps not as perfect or predictable, was far more precious than the most elaborate artificial creation."
      ],
      vocabulary: [
        { word: "porcelain", definition: "a white, translucent ceramic material" },
        { word: "intricate", definition: "very complicated or detailed" },
        { word: "bestow", definition: "to present or confer (an honor, right, or gift)" },
        { word: "mechanical", definition: "operated by a machine or machinery" },
        { word: "artificial", definition: "made or produced by human beings; not natural" },
        { word: "deathly", definition: "resembling or characteristic of death" },
        { word: "whirring", definition: "making a continuous, low-pitched buzzing sound" },
        { word: "elaborate", definition: "involving many carefully arranged parts or details" }
      ],
      region: "Europe",
      moral: "True beauty and authenticity are more valuable than artificial imitations, no matter how ornate they may be. The most precious things in life cannot be replicated by machines."
    },
    {
      id: "the-happy-prince",
      title: "The Happy Prince",
      origin: "Irish",
      author: "Oscar Wilde",
      content: [
        "High above the city, on a tall column, stood the statue of the Happy Prince. He was gilded all over with thin leaves of fine gold, for eyes he had two bright sapphires, and a large red ruby glowed on his sword-hilt. He was very much admired indeed by everyone in the city for his beauty and grace.",
        "'He is as beautiful as a weathercock,' remarked one of the Town Councillors who wished to gain a reputation for having artistic tastes. 'Only not quite so useful,' he added, fearing lest people should think him unpractical, which he really was not.",
        "'Why can't you be like the Happy Prince?' asked a sensible mother of her little boy who was crying for the moon. 'The Happy Prince never dreams of crying for anything.' 'I am glad there is someone in the world who is quite happy,' muttered a disappointed man as he gazed at the wonderful statue.",
        "One night there flew over the city a little Swallow. His friends had gone away to Egypt six weeks before, but he had stayed behind, for he was in love with the most beautiful Reed. He had met her early in the spring as he was flying down the river after a big yellow moth, and had been so attracted by her slender waist that he had stopped to talk to her.",
        "When the autumn came, all the other swallows flew away to Egypt, but the Swallow could not leave the Reed. 'It is a ridiculous attachment,' twittered the other Swallows; 'she has no money, and far too many relations.' Indeed, the river was quite full of Reeds. Then, when the winter came, the Swallow felt very lonely.",
        "The Reed had been quite selfish and never spoke to him anymore, having grown tired of his company. Eventually, the Swallow decided to leave her. 'I am off to the Pyramids. Good-bye!' he cried. But no one minded, and when the moon rose, he flew back to the Happy Prince.",
        "'I have come to bid you good-bye,' he said to the statue. But as he prepared to fly away, a large drop of water fell on him. He looked up and saw that the Happy Prince's eyes were filled with tears. 'Who are you?' he asked.",
        "'I am the Happy Prince.' 'Why are you weeping then?' asked the Swallow; 'You have quite drenched me.' 'When I was alive and had a human heart,' answered the statue, 'I lived in the Palace of Sans-Souci, where sorrow is not allowed to enter. In the daytime I played with my companions in the garden, and in the evening I led the dance in the Great Hall.'",
        "'My courtiers called me the Happy Prince, and happy indeed I was. So I lived, and so I died. And now that I am dead they have set me up here so high that I can see all the ugliness and all the misery of my city, and though my heart is made of lead, I cannot choose but weep.'",
        "The Prince told the Swallow about a poor seamstress whose young son was lying ill with fever. 'She is embroidering passion-flowers on a satin gown for the loveliest of the Queen's maids-of-honor to wear at the next Court-ball. In a bed in the corner of the room her little boy is lying ill. He has a fever, and is asking for oranges. His mother has nothing to give him but river water.'",
        "'Swallow, Swallow, little Swallow,' said the Prince, 'will you not bring her the ruby from my sword-hilt? My feet are fastened to this pedestal and I cannot move.' 'I am waited for in Egypt,' said the Swallow. But the Happy Prince looked so sad that the little Swallow was sorry.",
        "He plucked out the great ruby from the Prince's sword and flew away with it in his beak over the roofs of the town. At last he came to the poor house and looked in. The boy was tossing feverishly on his bed, and the mother had fallen asleep, she was so tired. In he hopped, and laid the great ruby on the table beside the woman's thimble.",
        "Night after night, the Swallow flew down to the city, helping the Prince give away his sapphires and gold leaf to the poor. The Prince became blind and dull, having given away his eyes and his gold covering. The Swallow stayed with him, fanning the boy with his wings to keep him cool.",
        "But winter came, and the poor Swallow grew colder and colder. At last he knew that he was going to die. He had just strength to fly up to the Prince's shoulder once more. 'Good-bye, dear Prince!' he murmured, 'will you let me kiss your hand?'",
        "'I am glad that you are going to Egypt at last, little Swallow,' said the Prince. 'You have stayed too long here; but you must kiss me on the lips, for I love you.' 'It is not to Egypt that I am going,' said the Swallow. 'I am going to the House of Death. Death is the brother of Sleep, is he not?'",
        "And he kissed the Happy Prince on the lips, and fell down dead at his feet. At that moment a curious crack sounded inside the statue, as if something had broken. The fact was that the leaden heart had snapped right in two.",
        "Early the next morning, the Mayor and the Town Councillors passed by the column. 'Dear me! How shabby the Happy Prince looks!' said the Mayor. 'We must take him down.' They melted the statue in a furnace, but the broken heart would not melt, so they threw it on a dust-heap where the dead Swallow was also lying.",
        "'Bring me the two most precious things in the city,' said God to one of His Angels; and the Angel brought Him the leaden heart and the dead bird. 'You have rightly chosen,' said God, 'for in my garden of Paradise this little bird shall sing forevermore, and in my city of gold the Happy Prince shall praise me.'"
      ],
      vocabulary: [
        { word: "gilded", definition: "covered thinly with gold leaf or gold paint" },
        { word: "weathercock", definition: "a weathervane in the shape of a rooster" },
        { word: "sans-souci", definition: "without worries (French)" },
        { word: "seamstress", definition: "a woman who sews, especially one who makes her living by sewing" },
        { word: "pedestal", definition: "the base or support on which a statue is mounted" },
        { word: "thimble", definition: "a small cap worn on the finger to push a needle in sewing" },
        { word: "furnace", definition: "an enclosed structure in which material can be heated to very high temperatures" },
        { word: "forevermore", definition: "forever; for all future time" }
      ],
      region: "Europe",
      moral: "True happiness comes from helping others, and material wealth means nothing compared to kindness and compassion. Love and sacrifice are the most precious gifts one can give."
    },
    {
      id: "the-selfish-giant",
      title: "The Selfish Giant",
      origin: "Irish",
      author: "Oscar Wilde",
      content: [
        "Every afternoon, as they were coming from school, the children used to go and play in the Giant's garden. It was a large lovely garden, with soft green grass. Here and there over the grass stood beautiful flowers like stars, and there were twelve peach-trees that in the spring-time broke out into delicate blossoms of pink and pearl, and in the autumn bore rich fruit. The birds sat on the trees and sang so sweetly that the children used to stop their games in order to listen to them.",
        "'How happy we are here!' they cried to each other. The Giant's garden was their paradise. Then one day, the Giant came back. He had been to visit his friend the Cornish ogre, and had stayed with him for seven years. After the seven years were over, he returned to his own castle. When he arrived he saw the children playing in the garden.",
        "'What are you doing here?' he cried in a very gruff voice, and the children ran away. 'My own garden is my own garden,' said the Giant; 'anyone can understand that, and I will allow nobody to play in it but myself.' So he built a high wall all round it, and put up a notice-board: 'TRESPASSERS WILL BE PROSECUTED.'",
        "The poor children had now nowhere to play. They tried to play on the road, but the road was very dusty and full of hard stones, and they did not like it. They used to wander round the high walls when their lessons were over, and talk about the beautiful garden inside. 'How happy we were there,' they said to each other.",
        "Then the Spring came, and all over the country there were little blossoms and little birds. Only in the garden of the Selfish Giant it was still winter. The birds did not care to sing in it as there were no children, and the trees forgot to blossom. Once a beautiful flower put its head out from the grass, but when it saw the notice-board it was so sorry for the children that it slipped back into the ground again, and went off to sleep.",
        "The only people who were pleased were the Snow and the Frost. 'Spring has forgotten this garden,' they cried, 'so we will live here all the year round.' The Snow covered up the grass with her great white cloak, and the Frost painted all the trees silver. Then they invited the North Wind to stay with them, and he came.",
        "Every day for three hours he rattled on the roof of the castle till he broke most of the slates, and then he ran round and round the garden as fast as he could go. 'I cannot understand why the Spring is so late in coming,' said the Selfish Giant, as he sat at the window and looked out at his cold white garden; 'I hope there will be a change in the weather.'",
        "But the Spring never came, nor the Summer. The Autumn gave golden fruit to every garden, but to the Giant's garden she gave none. 'He is too selfish,' she said. So it was always Winter there, and the North Wind, and the Hail, and the Frost, and the Snow danced about through the trees.",
        "One morning the Giant was lying awake in bed when he heard some lovely music. It sounded so sweet to his ears that he thought it must be the King's musicians passing by. It was really only a little linnet singing outside his window, but it was so long since he had heard a bird sing in his garden that it seemed to him to be the most beautiful music in the world.",
        "Then the Hail stopped dancing over his head, and the North Wind ceased roaring, and a delicious perfume came to him through the open casement. 'I believe the Spring has come at last,' said the Giant; and he jumped out of bed and looked out.",
        "What did he see? He saw a most wonderful sight. Through a little hole in the wall the children had crept in, and they were sitting in the branches of the trees. In every tree that he could see there was a little child. And the trees were so glad to have the children back again that they had covered themselves with blossoms, and were waving their arms gently above the children's heads.",
        "The birds were flying about and twittering with delight, and the flowers were looking up through the green grass and laughing. It was a lovely scene, only in one corner it was still winter. It was the farthest corner of the garden, and in it was standing a little boy. He was so small that he could not reach up to the branches of the tree, and he was wandering all round it, crying bitterly.",
        "The poor tree was still quite covered with frost and snow, and the North Wind was blowing and roaring above it. 'Climb up! little boy,' said the Tree, and it bent its branches down as low as it could; but the little boy was too tiny.",
        "And the Giant's heart melted as he looked out. 'How selfish I have been!' he said; 'now I know why the Spring would not come here. I will put that poor little boy on top of the tree, and then I will knock down the wall, and my garden shall be the children's playground for ever and ever.'",
        "He was really very sorry for what he had done. He crept downstairs and opened the front door quite softly, and went out into the garden. But when the children saw him they were so frightened that they all ran away, and the garden became winter again. Only the little boy did not run, for his eyes were so full of tears that he did not see the Giant coming.",
        "And the Giant stole up behind him and took him gently in his hand, and put him up into the tree. And the tree broke at once into blossom, and the birds came and sang on it, and the little boy stretched out his arms and flung them round the Giant's neck, and kissed him.",
        "And the other children, when they saw that the Giant was not wicked any longer, came running back, and with them came the Spring. 'It is your garden now, little children,' said the Giant, and he took a great axe and knocked down the wall. And when the people were going to market at twelve o'clock they found the Giant playing with the children in the most beautiful garden they had ever seen."
      ],
      vocabulary: [
        { word: "paradise", definition: "a place or state of perfect happiness" },
        { word: "gruff", definition: "rough and unfriendly in manner or speech" },
        { word: "trespassers", definition: "people who enter someone's land or property without permission" },
        { word: "casement", definition: "a window that opens on hinges like a door" },
        { word: "linnet", definition: "a small brown and gray bird of the finch family" },
        { word: "delicious", definition: "highly pleasant to the senses" },
        { word: "twittering", definition: "making a series of light, high-pitched sounds" },
        { word: "melted", definition: "become softer or more tender in emotion" }
      ],
      region: "Europe",
      moral: "Selfishness brings loneliness and sadness, while sharing and kindness bring joy and friendship. When we open our hearts to others, we create happiness not only for them but also for ourselves."
    },
    {
      id: "aladdins-lamp",
      title: "Aladdin's Lamp",
      origin: "Middle Eastern",
      author: "Unknown",
      content: [
        "In a far-off city in the Middle East lived a poor tailor who had a son named Aladdin. Aladdin was a careless, idle boy who would do nothing but play all day long in the streets with other idle children of his own age. This so grieved his father that he died, yet Aladdin continued in his idle ways.",
        "One day, as he was playing in the streets as usual, a stranger approached him. This stranger was a sorcerer who had noticed Aladdin's resemblance to someone he needed for his magical plans. He approached Aladdin, pretending to be his uncle who had been away for many years.",
        "The sorcerer told Aladdin about a wonderful lamp hidden in a cave, which would make them both rich. Though Aladdin was suspicious at first, the promise of wealth convinced him to help. The sorcerer led him to a secret cave filled with treasures, but what he really wanted was an old lamp that seemed worthless compared to the jewels surrounding it.",
        "Before entering the cave, the sorcerer gave Aladdin a ring for protection. 'Remember,' he said, 'you must bring me the lamp before you touch any other treasure.' Aladdin descended into the cave and found himself in a garden where precious stones hung from trees like fruit. The sight almost made him forget his purpose.",
        "At last he found the lamp, tucked away in a niche. He carefully picked it up and was about to climb out when he thought, 'Surely it wouldn't hurt to gather a few of these beautiful fruits?' So he filled his pockets with jewels. But when he tried to climb out, the weight of the jewels made it difficult.",
        "'First give me the lamp!' called the sorcerer impatiently. 'Help me out first!' replied Aladdin, struggling with his heavy load. The sorcerer grew angry and demanded the lamp again. When Aladdin refused, the sorcerer spoke magical words that caused the cave's entrance to close, trapping Aladdin inside.",
        "For three days, Aladdin sat in darkness, wondering if he would die there. In his despair, he clasped his hands together to pray, accidentally rubbing the ring the sorcerer had given him. Instantly, a great genie appeared! 'What is your wish, master?' the genie asked.",
        "'Take me home!' Aladdin cried, and in an instant, he found himself back in his mother's house. He still had the lamp, though it was so dirty you could hardly tell what it was. 'Perhaps if we clean it, we can sell it for a few coins,' his mother said, and began to rub it.",
        "No sooner had she rubbed the lamp than another, even more magnificent genie appeared! 'What is your wish, master?' this genie asked. Aladdin, who was very hungry after his adventure, wished for food. Immediately, twelve golden platters appeared, laden with the most delicious dishes they had ever seen.",
        "Day by day, Aladdin used the lamp's power wisely. He obtained an education, learned courtly manners, and became known for his generosity to the poor. He even built a magnificent palace and married the Sultan's daughter, Princess Badroulbadour, whom he had fallen in love with from afar.",
        "But the sorcerer heard of Aladdin's good fortune and guessed the truth. He returned to the city disguised as a lamp seller, calling, 'New lamps for old!' The princess, not knowing the value of the old lamp, traded it for a shiny new one while Aladdin was away.",
        "With the lamp in his possession, the sorcerer commanded the genie to transport the palace and the princess to his own country. Aladdin returned to find both gone. But he still had the ring! He rubbed it, and though this genie was not as powerful as the lamp's genie, it could transport Aladdin to where his wife and palace were.",
        "Using his wit and courage, Aladdin sneaked into the palace. The princess was overjoyed to see him and together they devised a plan. She would pretend to be warming to the sorcerer's advances and invite him to drink wine with her. But in his cup, she put a sleeping powder.",
        "When the sorcerer fell asleep, Aladdin retrieved the lamp. He commanded the genie to return the palace and princess to their rightful place, and to rid them of the sorcerer forever. From that day forward, Aladdin and the princess lived in happiness, ruling their kingdom with wisdom and kindness.",
        "Years later, when Aladdin became Sultan, he never forgot his humble beginnings. He remained generous to the poor and ruled with justice and compassion. The people loved him, not for his wealth or his magical lamp, but for his kind heart and wise leadership."
      ],
      vocabulary: [
        { word: "sorcerer", definition: "a person who practices magic; a wizard" },
        { word: "idle", definition: "avoiding work; lazy" },
        { word: "niche", definition: "a shallow recess, especially in a wall" },
        { word: "genie", definition: "a spirit of Arabian folklore, enslaved to a lamp or ring" },
        { word: "magnificent", definition: "impressively beautiful, elaborate, or extravagant" },
        { word: "devised", definition: "planned or invented" },
        { word: "retrieved", definition: "got or brought something back" },
        { word: "compassion", definition: "sympathetic concern for others' suffering" }
      ],
      region: "Asia",
      moral: "True worth lies not in magical powers or material wealth, but in using whatever gifts we have wisely and for the good of others. Power must be tempered with wisdom and kindness."
    },
    {
      id: "the-adventures-of-sinbad",
      title: "The Adventures of Sinbad",
      origin: "Middle Eastern",
      author: "Unknown",
      content: [
        "In the time of Harun al-Rashid, there lived in Baghdad a poor porter named Hindbad. One day, while resting outside a grand mansion, he heard wonderful tales being told inside. The mansion belonged to the great traveler Sinbad, who had made seven remarkable voyages.",
        "'Why does fate treat us so differently?' sighed Hindbad, comparing his own poverty to Sinbad's wealth. Hearing this, the master of the house invited him inside. 'Do not think I gained my fortune easily,' said Sinbad. 'Let me tell you of my seven voyages, and you will understand the price I paid for my wealth.'",
        "'On my first voyage,' Sinbad began, 'our ship anchored near what appeared to be an island. It was covered in green grass, and we were glad to stretch our legs. We built a fire to cook our food, but suddenly the island began to shake. It was no island at all, but an enormous whale sleeping on the ocean's surface!'",
        "As the whale dove deep into the sea, the ship sailed away without Sinbad. He managed to grab a wooden tub that had fallen from the ship. For days he floated alone on the vast ocean until he reached an island with trees laden with exotic fruits. There he found the king's grooms watering their horses.",
        "'The second voyage was even more perilous,' continued Sinbad. 'I discovered an island where grew trees with trunk-like vines. Taking one such vine to tie up firewood, I found it was actually a sleeping serpent! The creature awakened and would have devoured me had I not been quick to escape.'",
        "On that same voyage, Sinbad encountered the giant roc, a bird so enormous its eggs were fifty paces around. The roc carried him in its claws to the Valley of Diamonds, where giant serpents guarded precious gems. Merchants would throw pieces of meat into the valley; diamonds would stick to the meat, and giant birds would carry the meat—and the diamonds—to their nests.",
        "'My third voyage brought me to an island of savage dwarfs. They captured our crew and took us to their king—a hideous giant cyclops who began eating my companions one by one. We escaped by blinding the giant with heated spits, but only after losing many brave sailors.'",
        "The fourth voyage found Sinbad shipwrecked in a land where people buried living husbands with their dead wives, and living wives with their dead husbands. When Sinbad's wife died, he was trapped in a deep cavern with her body and only a small supply of bread and water. He survived by finding a secret passage that led to the sea.",
        "During his fifth voyage, the ship was attacked by the Old Man of the Sea, who forced Sinbad to carry him on his shoulders. The creature would not dismount, and Sinbad could find no rest. Finally, he made the Old Man drunk with wine and threw him off, killing the wicked creature.",
        "'The sixth voyage,' Sinbad continued, 'brought me to an island rich in precious stones, but the ship was wrecked in a powerful current. I discovered ruins of ancient peoples, including a river that flowed with precious stones into a great cavern. Building a raft, I followed the river through darkness until I emerged in the city of Baghdad.'",
        "The seventh and final voyage began when the Caliph asked Sinbad to deliver a gift to the King of Serendib. Pirates attacked the ship, selling Sinbad into slavery. He escaped and made his way home, vowing never to travel again. 'But here I am,' he told Hindbad, 'living in comfort because I dared to risk everything.'",
        "'Each voyage taught me something valuable,' Sinbad concluded. 'Courage, wisdom, patience, and most importantly, gratitude for what we have. For though I gained great wealth, I also faced death many times and lost dear friends. Remember, Hindbad, that each person's fate is written, but it is our choices that make us who we are.'",
        "Hindbad left that day with a purse of gold and a new understanding. He realized that wealth gained through courage and perseverance was sweeter than riches gained by chance. From that day forward, he visited Sinbad's house often, and the two men became great friends.",
        "Years later, when asked about his greatest treasure, Sinbad would say it was not the wealth he had accumulated, but the wisdom he had gained. 'For gold can be spent,' he would say, 'but wisdom, once earned, stays with you forever.'"
      ],
      vocabulary: [
        { word: "porter", definition: "a person employed to carry luggage and other loads" },
        { word: "perilous", definition: "full of danger or risk" },
        { word: "devoured", definition: "eaten quickly and eagerly" },
        { word: "dismount", definition: "get off something on which one is riding" },
        { word: "cavern", definition: "a large cave or chamber in rock" },
        { word: "perseverance", definition: "persistence in doing something despite difficulty" },
        { word: "accumulated", definition: "gradually gathered or acquired" },
        { word: "fate", definition: "the development of events beyond a person's control" }
      ],
      region: "Asia",
      moral: "Wealth and success often come at a price, and true riches lie not just in gold but in the wisdom and experience gained through facing life's challenges. Perseverance and courage can overcome any obstacle."
    },
    {
      id: "the-firebird",
      title: "The Firebird",
      origin: "Russian",
      author: "Traditional",
      content: [
        "In a far away kingdom lived a mighty Tsar who had a beautiful garden. In this garden grew a tree that bore golden apples which glowed with their own light. Each morning, the Tsar would walk in his garden and count the apples, but every night, one would disappear. This troubled the Tsar greatly, for the golden apples gave youth and strength to all who ate them.",
        "The Tsar called his three sons—Dmitri, Vasily, and Ivan—and said, 'My sons, someone is stealing my golden apples. Whoever catches the thief will receive half my kingdom and be my heir.' The eldest sons positioned themselves in the garden that very night, but they soon fell asleep at their posts.",
        "On the third night, it was young Prince Ivan's turn to watch. As midnight approached, the garden filled with a strange light. A magnificent bird with feathers that glowed like flames descended from the sky. Its feathers shone silver and gold, and its eyes sparkled like diamonds. This was the legendary Firebird.",
        "As the Firebird plucked a golden apple with its beak, Ivan crept closer. He managed to grab one of its tail feathers, but the bird escaped, leaving behind only the single glowing feather. The next morning, Ivan presented the feather to his father. The Tsar was amazed—the feather lit up his whole throne room with a golden light.",
        "'This is indeed from the Firebird,' the Tsar declared, 'but one feather is not enough. You must capture the bird itself!' Though Ivan's brothers protested, saying the task was impossible, Ivan set out on his quest. His father gave him his fastest horse and his blessing.",
        "Ivan rode for many days until he came to a crossroads marked by a stone. The inscription read: 'Take the left road and know cold and hunger. Take the right road and live, though your horse will die. Take the middle road and die, though your horse will live.' After careful thought, Ivan chose the right road.",
        "As prophesied, his horse died, but soon Ivan met a great gray wolf. Instead of eating Ivan, the wolf offered to help him, feeling guilty for killing his horse. 'I will be your steed,' said the wolf, 'and help you in your quest. The Firebird belongs to Tsar Kusman, and it lives in a golden cage.'",
        "The wolf carried Ivan to Tsar Kusman's palace. 'Take the bird,' advised the wolf, 'but not the golden cage, or disaster will follow.' But when Ivan saw the magnificent cage, he couldn't resist. As he lifted it, bells rang throughout the palace. The guards seized Ivan and brought him before Tsar Kusman.",
        "'You tried to steal my Firebird,' said Tsar Kusman, 'but I will spare your life if you complete a task. Bring me the Horse with the Golden Mane from Tsar Dalmat's kingdom.' Ivan agreed, and once again the wolf helped him. But again, Ivan disobeyed the wolf's warning not to touch the horse's golden bridle.",
        "Captured once more, Ivan was given another task: to bring Princess Elena the Beautiful to be Tsar Dalmat's bride. With the wolf's help, Ivan found Elena, and they fell in love. The wolf used its magic to transform itself into Elena's likeness, allowing Ivan to deliver the 'princess' while escaping with the real Elena.",
        "Through clever trickery and the wolf's magic, Ivan eventually gained possession of the Horse with the Golden Mane and the Firebird as well. But on the journey home, his jealous brothers found him sleeping. They killed Ivan, stole his treasures, and threatened Elena to say nothing.",
        "The gray wolf found Ivan's body and fetched magical Water of Death to make the body whole and Water of Life to revive him. When Ivan returned to his father's palace, Elena revealed the truth. The Tsar banished the elder princes and blessed Ivan's marriage to Elena.",
        "Together, Ivan and Elena ruled wisely and well. The Firebird stayed with them willingly, its light brightening their kingdom. The gray wolf became their most trusted advisor. As for the golden apples, they were shared with all the people, so that everyone in the kingdom might know health and happiness.",
        "And so Prince Ivan learned that the greatest treasures come not from gold or magic, but from kindness, loyalty, and love. The gray wolf's faithfulness, Elena's devotion, and Ivan's own courage proved more valuable than all the magical objects he had sought."
      ],
      vocabulary: [
        { word: "tsar", definition: "an emperor of Russia before 1917" },
        { word: "prophesied", definition: "predicted or foretold" },
        { word: "bridle", definition: "the headpiece used to guide and control a horse" },
        { word: "transformation", definition: "a complete change in form or appearance" },
        { word: "devotion", definition: "deep love, loyalty, or commitment" },
        { word: "banished", definition: "ordered to leave a place as punishment" },
        { word: "willingly", definition: "done by choice; not forced" },
        { word: "treasures", definition: "valuable or precious things" }
      ],
      region: "Europe",
      moral: "True treasures are not found in magical objects or gold, but in loyalty, love, and courage. Sometimes the journey teaches us more than reaching the destination."
    },
    {
      id: "the-snow-queen",
      title: "The Snow Queen",
      origin: "Danish",
      author: "Hans Christian Andersen",
      content: [
        "In a city where the houses stood shoulder to shoulder, two children lived as close as brother and sister. Kai and Gerda had known each other since they were babies, and their favorite pastime was tending the roses that bloomed between their window boxes. In winter, they would heat copper pennies on the stove to melt peepholes in the frost on their windows.",
        "One evening, Kai's grandmother told them about the Snow Queen, who ruled over the snowflakes, each one unique like a white flower. 'When she looks in through windows, they freeze into wonderful patterns like flowers,' she said, 'but her heart is made of ice. She can freeze your heart and make you forget everyone you love.'",
        "That very night, high in the sky, a wicked troll's magic mirror shattered into millions of pieces. This mirror had the power to make everything good and beautiful appear ugly and evil. Two tiny shards—no larger than grains of sand—fell into Kai's eye and heart.",
        "Immediately, Kai changed. He no longer cared for the roses or for Gerda. He found fault with everything and mocked what others found beautiful. One winter day, while sledding in the town square, he tied his sled to a magnificent white sleigh that passed by. It was the Snow Queen's sleigh.",
        "The Snow Queen appeared to Kai as a tall lady in white fur. She kissed him on the forehead, and her kiss was colder than ice, but to Kai it felt like fire, and suddenly he forgot about the cold. The Snow Queen offered him another kiss that would make him forget Gerda and his family, and he went willingly with her.",
        "Gerda was heartbroken when Kai disappeared. Everyone believed he had drowned in the river, but Gerda knew in her heart he was alive. She set out alone to find him, first throwing her new red shoes—her most precious possession—into the river as an offering. 'Have you seen Kai?' she asked the river, but it only gave her back her shoes.",
        "Her journey took her to a cottage where an old woman who knew magic lived among eternal summer flowers. The woman combed Gerda's hair with a golden comb, making her forget Kai temporarily, but the roses in the garden reminded Gerda of her mission. She fled from the enchanted garden and continued her search.",
        "Next, she met a crow who thought he had seen Kai at a princess's palace. Though it proved to be a different boy, the princess and her prince gave Gerda a golden carriage to continue her journey. But robbers attacked the carriage, and Gerda was captured by a little robber girl who initially wanted to keep her as a pet.",
        "The robber girl's reindeer told Gerda that he had seen the Snow Queen fly toward Lapland with Kai. Moved by Gerda's tears, the robber girl set her free, giving her warm clothes and the reindeer to ride. Gerda traveled north through the bitter cold, meeting first a Lapp woman and then a Finn woman, who told her that Kai was at the Snow Queen's palace.",
        "'Kai is indeed with the Snow Queen,' said the Finn woman, 'and he thinks he is in the finest place in the world. This is because he has splinters of the troll-mirror in his eye and heart. Until they are removed, he will never see the truth or feel true love again. But Gerda's warm heart is her power—she needs no other magic.'",
        "Finally, Gerda reached the Snow Queen's vast palace of ice, where everything was sharp, shimmering, and cold. She found Kai sitting on the frozen lake that was the Snow Queen's throne room, trying to spell the word 'eternity' with pieces of ice. The Snow Queen had promised him the whole world and a new pair of skates if he could do it.",
        "But Kai was blue with cold, almost black, and did not recognize Gerda. She ran to him, threw her arms around his neck, and wept warm tears that melted the ice in his heart. Kai began to cry, washing out the splinter in his eye. He remembered Gerda and his home, and his tears formed the word 'eternity' that the Snow Queen had demanded.",
        "Together they danced with joy, and their dancing caused the pieces of ice around them to dance too, until they fell into the exact letters that would set them free. Kai was now his own master, and they could leave the palace. The reindeer carried them first to the Finn woman, then the Lapp woman, and finally toward home.",
        "As they traveled south, they noticed that spring was coming. When they reached their hometown, they found that while they had grown taller, their grandmother's rose garden remained the same. The roses still bloomed, and as Kai and Gerda sat in their old places, they realized they were grown up but still children at heart."
      ],
      vocabulary: [
        { word: "troll", definition: "a supernatural being in Scandinavian folklore" },
        { word: "splinter", definition: "a small, thin, sharp piece of material" },
        { word: "enchanted", definition: "under a magical spell or influence" },
        { word: "eternal", definition: "lasting or existing forever" },
        { word: "reindeer", definition: "a deer of the arctic and subarctic regions" },
        { word: "Lapland", definition: "a region in northern Scandinavia" },
        { word: "shimmering", definition: "shining with a soft, tremulous light" },
        { word: "eternity", definition: "infinite or unending time" }
      ],
      region: "Europe",
      moral: "The warmth of true love and friendship can overcome the coldest heart, and innocence and perseverance are more powerful than any evil magic. Sometimes the strongest power lies in the purity of a child's love."
    },
    {
      id: "the-story-of-momotaro",
      title: "The Story of Momotaro",
      origin: "Japanese",
      author: "Traditional",
      content: [
        "Long ago in Japan, there lived an old couple who had no children. One day, while the old woman was washing clothes in the river, a huge peach came floating down. She brought it home to share with her husband, but when they tried to cut it open, out popped a baby boy!",
        "They named him Momotaro, which means 'Peach Boy,' and raised him with great love. As he grew, the villagers were amazed by his incredible strength and noble heart. He was kind to everyone, especially to the elderly and children, and he worked hard to help his adoptive parents in their daily tasks.",
        "When Momotaro turned fifteen, troubling news reached his village. Fierce demons from a distant island were terrorizing the coastal villages of Japan, stealing food and treasures, and kidnapping people. These demons were led by a powerful oni chief who lived in a fortress on Onigashima (Demon Island).",
        "Seeing the suffering of his people, Momotaro decided to undertake the dangerous journey to defeat the demons. Before he left, his mother gave him kibidango (special millet dumplings) that she had made with great care, infusing them with her love and prayers for his safety.",
        "On his journey, Momotaro first met a hungry dog who could smell the delicious kibidango. 'Share your dumpling with me,' said the dog, 'and I will be your loyal companion.' Momotaro kindly shared his food, and the dog joined him, offering his keen sense of smell and brave heart.",
        "Further along, they encountered a monkey trapped in a tree. Momotaro helped free him and shared another dumpling. The monkey, grateful for both the rescue and the food, joined their group, bringing his agility and clever mind to their quest.",
        "Finally, they met a pheasant who was fighting off a snake. Momotaro and his companions helped save the bird, and once again, he shared his magical dumplings. The pheasant joined them, offering his ability to fly and scout ahead.",
        "Together, the unlikely team crossed the sea to Onigashima. The pheasant flew ahead to scout, the monkey climbed the fortress walls to unlock the gates, and the dog helped fight the demon guards. Momotaro, with his extraordinary strength and leadership, led them to victory.",
        "In the final battle, Momotaro confronted the oni chief. Instead of killing him, Momotaro showed mercy when the demons promised to stop their evil ways. They returned all the stolen treasures and vowed never to harm humans again.",
        "Momotaro and his animal friends returned home as heroes. The village celebrated their victory, but what made Momotaro happiest was seeing his parents' proud faces. From that day forward, he continued to protect his village, ruling with the same kindness and wisdom that had won him such loyal friends."
      ],
      vocabulary: [
        { word: "demons", definition: "evil spirits or supernatural beings" },
        { word: "fortress", definition: "a military stronghold, especially a strongly fortified place" },
        { word: "loyal", definition: "giving or showing firm and constant support or allegiance" },
        { word: "terrorizing", definition: "frightening or threatening people" },
        { word: "oni", definition: "a demon or ogre in Japanese folklore" },
        { word: "quest", definition: "a long search or journey for something" },
        { word: "agility", definition: "ability to move quickly and easily" },
        { word: "scout", definition: "to explore an area to obtain information" },
        { word: "mercy", definition: "compassion shown toward someone whom it is within one's power to punish" }
      ],
      region: "Asia",
      moral: "Kindness and sharing can win powerful friends, and working together makes difficult tasks possible. True strength lies not just in physical power, but in showing mercy and wisdom."
    },
    {
      id: "the-stone-soup",
      title: "The Stone Soup",
      origin: "North America",
      author: "Traditional",
      content: [
        "In a small village during a time of scarcity, a clever traveler arrived carrying nothing but an empty cooking pot. The villagers were wary of strangers and had hidden away their food, unwilling to share with anyone.",
        "The traveler went to the village square, filled his pot with water, and placed a smooth stone inside. As he built a fire under the pot, a curious villager approached and asked what he was doing. 'I'm making stone soup,' the traveler replied cheerfully. 'It's delicious, though it could use a little garnish.'",
        "The villager thought it impossible to make soup from a stone, but she was intrigued. The traveler assured her the soup would be ready soon, though he mentioned how much better it would be with a few carrots. The villager hurried home and returned with carrots from her garden.",
        "Another villager stopped to observe and heard about the magical stone that made soup. 'Of course,' said the traveler, 'it would taste even better with some potatoes.' The second villager ran home and brought back potatoes from his storehouse.",
        "Soon, more villagers gathered, each hearing about the wonderful stone soup. One brought fresh corn, another offered onions, and someone else contributed beans. A child arrived with a handful of fresh herbs from his mother's garden.",
        "As the soup cooked, its aroma filled the village square. The traveler stirred the pot, occasionally tasting and commenting on how the stone was producing such wonderful flavor. Someone brought bowls and spoons, while another villager offered fresh-baked bread.",
        "When the soup was ready, everyone gathered to taste it. They had never experienced such delicious soup, amazed that it came from a simple stone. The villagers listened intently as the traveler explained how the stone's magic worked best when people worked together.",
        "That evening, the entire village enjoyed a feast. There was music, laughter, and sharing of old stories. The villagers who had been suspicious of each other began to talk and smile, rediscovering their sense of community.",
        "Before leaving the next morning, the traveler removed the stone from the pot and washed it carefully. A child asked if he would leave the magical stone behind. The traveler smiled and said, 'The magic is not in the stone, but in what happens when people come together and share.'"
      ],
      vocabulary: [
        { word: "scarcity", definition: "a lack of something; not having enough" },
        { word: "wary", definition: "careful or suspicious about something" },
        { word: "garnish", definition: "something added to food to make it look or taste better" },
        { word: "intrigued", definition: "very interested or curious about something" },
        { word: "contribute", definition: "to give or provide something to help a common purpose" },
        { word: "aroma", definition: "a pleasant, noticeable smell" },
        { word: "community", definition: "a group of people living in the same place or having characteristics in common" },
        { word: "feast", definition: "a large meal, usually for many people celebrating something" }
      ],
      region: "North America",
      moral: "When people come together and share their resources, they can create something greater than what they could achieve alone. True magic lies in cooperation and community spirit."
    },
    {
      id: "the-gift-of-the-magi",
      title: "The Gift of the Magi",
      origin: "American", 
      author: "O. Henry",
      content: [
        "In a modest apartment on the third floor of a weathered brownstone lived a young couple, Jim and Della Young. Though poor in material wealth, they were rich in love for each other. Their small home was sparsely furnished, but they had two possessions of which they were immensely proud. Della's beautiful long hair fell like a cascade of brown waters, reaching below her knees - a shimmering curtain that glinted gold when sunlight touched it. Jim's gold watch, inherited from his father and grandfather, was his most precious possession, its gleaming case and crystal face a reminder of his family's noble history.",
        "Winter had been harsh that year, and Christmas was approaching fast. Despite careful saving and penny-pinching throughout the year, Della had only $1.87 to buy Jim a present. She had tried everything - bargaining at the market, taking in extra laundry, even skipping meals to save a few cents. But New York City was expensive, and their eight dollars a week didn't stretch far. Each night, after Jim fell asleep, she would cry quietly, desperate to find a way to buy him something special.",
        "The day before Christmas, Della stood before the mirror in their tiny apartment, letting down her beautiful hair. She had always known that Jim loved watching her brush it in the evenings, his eyes following the rippling waves of brown. As she stared at her reflection, an idea formed - terrifying yet perfect. Her hands trembling, she grabbed her old brown jacket and hurried out into the cold December air.",
        "Madame Sofronie's Hair Goods shop was dark and cramped, smelling of dust and old perfume. The proprietress, a harsh-faced woman, barely glanced at Della's magnificent hair before naming her price: 'Twenty dollars.' It was more than Della had hoped for. Fighting back tears, she watched as her beautiful hair fell to the floor in long, thick strands. The cold air felt strange against her newly-bare neck.",
        "With the twenty dollars clutched tightly in her hand, Della spent the next two hours searching every shop in the city. Finally, in a small jeweler's window, she found it - the perfect platinum fob chain for Jim's precious watch. Simple yet elegant, it was worthy of being attached to such a fine timepiece. It cost her all twenty-one dollars and eighty-seven cents, but as she hurried home with the precious package, her heart was light.",
        "Back in their apartment, Della used her small curling iron to try to fix her now-short hair, worried that Jim would be shocked by her changed appearance. The tiny clock on the mantlepiece struck seven - Jim would be home any minute. She sat nervously by the door, the platinum chain wrapped in brown paper and ribbons in her lap, praying he wouldn't be too upset about her hair.",
        "When Jim stepped in from the cold and saw her, he froze. His eyes held an expression she couldn't read, and her heart nearly stopped. 'Jim, darling,' she cried, 'don't look at me that way. I had my hair cut and sold it because I couldn't have lived through Christmas without giving you a present. It'll grow back - you won't mind, will you? My hair grows awfully fast.'",
        "But instead of responding, Jim pulled a package from his overcoat and handed it to her, a gentle smile playing on his lips. Della's fingers tore at the string and paper. A gasp of joy emerged from her lips, immediately followed by a wail of despair. For there lay The Combs - the set of pure tortoise shell hair combs, banded with jewels, that she had worshipped for months in a Broadway window. Beautiful combs, suitable for the beautiful hair that was no longer hers.",
        "Through her tears, Della saw that Jim hadn't yet looked at his beautiful present. She held out the chain on her open palm. 'Isn't it perfect, Jim? I hunted all over town to find it. Now you'll need to check the time a hundred times a day. Give me your watch. I want to see how it looks on it.'",
        "Jim sank into their old couch and smiled. 'Dell,' he said softly, 'let's put our Christmas presents away and keep them a while. They're too nice to use just at present. I sold the watch to get the money to buy your combs.'",
        "Della crawled into Jim's lap, the platinum chain in one hand, the beautiful combs in the other. They held each other and smiled, knowing that their love was worth more than all the watches and hair in the world. For they had each given up their most precious possession to show their love for each other, unknowingly following the example of the Magi - those wise men who invented the art of giving Christmas gifts.",
        "Later that evening, as they sat down to their simple dinner of meat loaf and potatoes, they realized that no gift could ever be as precious as their love for each other. The combs would wait for Della's hair to grow back, and someday they might have enough saved for another watch. But for now, they had the greatest gift of all - two hearts that beat as one, willing to sacrifice everything for love."
      ],
      vocabulary: [
        { word: "cascade", definition: "a small waterfall or anything falling like one" },
        { word: "fob", definition: "a short chain attached to a watch" },
        { word: "precious", definition: "of great value or worth" },
        { word: "sacrifice", definition: "giving up something valued for something else" },
        { word: "proprietress", definition: "a woman who owns a business or property" },
        { word: "pittance", definition: "a very small amount of money" },
        { word: "prudent", definition: "careful and wise in handling practical matters" },
        { word: "sparsely", definition: "thinly scattered or distributed" },
        { word: "procured", definition: "obtained with care or effort" },
        { word: "reverent", definition: "feeling or showing deep respect" }
      ],
      region: "North America",
      moral: "The greatest gifts are those given with love, and true wealth lies not in possessions but in the depth of love we share."
    },
    {
      id: "why-the-sky-is-far-away", 
      title: "Why the Sky is Far Away",
      origin: "Nigerian",
      author: "Traditional",
      content: [
        "Long ago, the sky was close to the earth, so close that people could reach up and break off pieces to eat. The sky was made of sweet, nourishing food that never ran out. The food from the sky had every flavor imaginable - sweet like honey, savory like roasted nuts, and refreshing like spring water. People only needed to reach up when they were hungry, take what they needed, and the sky would replenish itself overnight.",
        "Life was peaceful in those days. Children would play beneath the low-hanging clouds, occasionally reaching up to pluck a treat. The elderly never went hungry, and even the smallest villages had plenty to share. This was a special gift from the sky, and most people treated it with reverence and gratitude.",
        "The king of this land repeatedly warned his people to take only what they needed and never waste the sky's food. 'The sky gives us this gift,' he would say, 'but we must respect it.' He would gather the village elders each month to discuss how to preserve this blessing and teach the young ones about responsibility. Most people heeded his words, taking only what they could eat and sharing with others.",
        "However, as time passed, some people became wasteful. They would take more than they needed, let food spoil, and even use the sky's food to play games. Young men would compete to see who could grab the most pieces, letting them fall unused to the ground. Women would gather more than their families could eat, letting the excess turn bad in their storage bins. Children began throwing the sacred food at each other in play, forgetting its true purpose.",
        "The king was deeply troubled by this behavior. He sent messengers to every village, reminding people of their duty to respect the sky's gift. He organized festivals where the elders would tell stories about the sky's generosity, hoping to restore people's gratitude. But despite his efforts, the wastefulness continued to grow.",
        "The sky watched all of this with growing sadness. Dark clouds began to gather, and the taste of the sky's food became less sweet. Still, people failed to notice these warning signs. They continued their wasteful ways, ignoring the king's warnings and the pleas of their neighbors. The wind would whisper warnings at night, but few paid attention.",
        "One day, after seeing people throwing away piles of uneaten sky-food, the sky spoke in a voice like thunder: 'I gave you this gift out of love, but you have not respected it. For generations, I have provided for you, asking only for gratitude and respect in return. Now you must learn to work for your food.' With that, the sky began to move upward, slowly at first, then faster.",
        "People watched in horror as their source of easy food drifted away. Children cried and reached up with their small hands, but the sky continued to rise. The king and his advisors prayed for forgiveness, but it was too late. The sky moved up and up until it reached where it remains today, high above the tallest trees.",
        "From that day forward, people had to plant seeds, tend crops, and work hard for their food. They learned to plow fields and wait patiently for harvest time. The sky's lesson was clear: Earth's gifts must be respected and never wasted. Through their labor, people began to understand the true value of food and the importance of preserving nature's gifts.",
        "The king established new traditions to honor this lesson. Before each meal, families would remember the time when the sky was close enough to touch. Parents taught their children to value every morsel of food, and nothing was wasted. The people learned that working for their food made them appreciate it more, and the community grew stronger through sharing and helping each other in the fields.",
        "Even today, when people look up at the distant sky, they remember this story and teach their children to respect the earth's gifts. And on quiet nights, some say they can still taste a hint of sweetness in the rain - a reminder of the time when the sky fed its children directly from above."
      ],
      vocabulary: [
        { word: "replenish", definition: "to fill or make complete again" },
        { word: "heed", definition: "to pay attention to; take notice of" },
        { word: "wasteful", definition: "using more than is needed" },
        { word: "bounty", definition: "something given generously" },
        { word: "sacred", definition: "connected with God or a god; holy and deserving respect" },
        { word: "abundance", definition: "a very large quantity; plenty" },
        { word: "morsel", definition: "a small piece or bit of food" },
        { word: "gratitude", definition: "the quality of being thankful" },
        { word: "trembled", definition: "shook or vibrated with quick, short movements" },
      ],
      region: "Africa",
      moral: "We must respect and not waste nature's gifts, for they are precious and can be taken away if we don't show proper gratitude and responsibility."
    },
    {
      id: "the-two-cousins",
      title: "The Two Cousins",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "Deb and Nan are talking on the phone. Deb is excited. Soon she is going to see her cousin, Nan. Nan is from Jamaica. She is just a little older than Deb.",
        "Nan is flying from Jamaica today. Deb is going to the airport to meet her. Nan gets off the plane with her mother. Deb knows it is Nan. She waves her hand when she sees her. Nan is so happy, she has a big smile on her face.",
        "That afternoon, the two cousins go to the zoo. They like the hippos and the elephants. They love the monkeys! Then they go into a building where it is dark. Deb sees a big, long snake. She gets scared and jumps.",
        "Deb and Nan have a good time. They take the bus to the city, and they go to a carnival. After a week, it is time to say good-bye. The two girls are sad. They take pictures before Nan has to go."
      ],
      vocabulary: [
        { word: "excited", definition: "very happy about something" },
        { word: "airport", definition: "place where planes land and take off" },
        { word: "carnival", definition: "fun fair with rides and games" },
        { word: "scared", definition: "feeling afraid" }
      ],
      region: "Global",
      moral: "Family bonds are special and can bridge any distance or cultural differences."
    },
    {
      id: "malcolms-saturday-morning",
      title: "Malcolm's Saturday Morning",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "Malcolm usually sleeps late on weekends, but today he got up early. 'Good morning,' said Mother. 'I am going shopping now. Father is in the study working on the computer. After breakfast, please wash your dishes and take out the garbage. I will return in time to go to that movie we talked about.'",
        "Malcolm said good-bye to Mother. Then he went back to the kitchen. Surprise! His breakfast was on the table—an egg sandwich. What a nice surprise, but what a mess!",
        "'Hello,' someone said. Malcolm had never seen him before. 'Who are you?' Malcolm asked. 'My name is Red,' he said. 'I made you a sandwich. Enjoy it!'",
        "'Thank you,' said Malcolm. After Malcolm ate the sandwich he said, 'Great sandwich! Thanks. Now I will wash my dishes and take out the garbage.'",
        "'That is no fun,' Red said. 'Let's sing and dance!' So they sang and danced, It was fun, but what a mess Red made!",
        "Then Red said, 'Your mother is home! Run and hug her. Then come back.' When Malcolm and Mother got back to the kitchen, Red was not there. But the kitchen was clean, clean, clean.",
        "Mother said, 'This looks so good! You worked hard.' 'Oh, no,' said Malcolm. 'It was fun!'"
      ],
      vocabulary: [
        { word: "garbage", definition: "trash or waste that needs to be thrown away" },
        { word: "surprise", definition: "something unexpected" },
        { word: "mess", definition: "dirty or untidy state" },
        { word: "chores", definition: "regular household tasks" }
      ],
      region: "Global",
      moral: "Work can be fun when approached with the right attitude and a little imagination."
    },
    {
      id: "robertos-dinner",
      title: "Roberto's Dinner",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "One head of lettuce. Roberto was writing the grocery list. He put it on the refrigerator. He dropped into his chair.",
        "'I miss Father,' he said. Roberto's father opened a new restaurant in the city last week. He always worked days. Now he worked some nights, too. Roberto hoped to see the new restaurant soon.",
        "'I know,' Roberto's mother said. 'Your father is working hard. I miss him, too. But you and I can have some fun. Let's go out to get dinner. Then we can go to a movie.'",
        "'I'm not hungry,' said Roberto. 'Come on,' his mother said. 'You like to eat at restaurants.' So they went.",
        "'I like onion soup, lemon chicken, milk, and a fruit salad, please,' Mother told the waiter. Roberto looked at the menu. 'I'm not very hungry,' he said.",
        "'He misses his father,' Mother said. 'I can order for Roberto. He would like a hamburger, fries, green beans, and a soda. And chocolate cake!'",
        "The waiter served the food. Mother ate. Roberto did not. 'Don't you like our food?' the waiter asked. 'Let me get the owner.' Roberto did not see his mother smile.",
        "Then a man asked, 'You don't like our cooking?' Roberto looked up. It was Father! 'Welcome to my new restaurant, Roberto,' Father said. 'I missed you so much!'"
      ],
      vocabulary: [
        { word: "restaurant", definition: "place where people pay to eat meals" },
        { word: "waiter", definition: "person who serves food in a restaurant" },
        { word: "menu", definition: "list of food available to order" },
        { word: "owner", definition: "person who owns something" }
      ],
      region: "Global",
      moral: "Sometimes what seems like a sad situation can turn into a happy surprise."
    },
    {
      id: "take-care-of-yourself",
      title: "Take Care of Yourself",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "Richard and Amy love sports. When they exercise, they feel healthy and happy. How do they do it? Let's take a look.",
        "Amy plays baseball and is on a swim team at her school. So, she needs to take care of herself. Amy says you can do many things to take care of yourself.",
        "When you play baseball, you should stretch before every game. Amy says you shouldn't drink much water right before a game. When she did, she got a stomachache.",
        "Amy says that the night before a game, you should eat foods like spaghetti and bread. The morning of a game, you should eat foods like toast and fruit for breakfast.",
        "There can be accidents in a baseball game. So you should always wear a helmet on your head when you go to hit the ball.",
        "Richard is on Amy's swim team. He swims all year. He is at the pool every morning at six o'clock and swims for ninety minutes. After that, he starts his school day.",
        "Before Richard swims, he likes to stretch. This is how he prepares his body for swimming. He stretches because he doesn't want to hurt his body while he's swimming.",
        "Richard says that you should swim and eat foods like fruit, chicken, and bread to stay healthy. He does not eat a lot of sweets. Richard says that when he doesn't take care of himself, he sometimes gets sick. He gets an earache or a cold.",
        "Richard says that when you work hard to be healthy, you will feel good about yourself. And that's what sports are all about!"
      ],
      vocabulary: [
        { word: "exercise", definition: "physical activity to keep fit and healthy" },
        { word: "stretch", definition: "extend your arms and legs to prepare for exercise" },
        { word: "stomachache", definition: "pain in your stomach" },
        { word: "healthy", definition: "in good health" }
      ],
      region: "Global",
      moral: "Taking care of your body through proper exercise and nutrition helps you stay healthy and feel good."
    },
    {
      id: "dear-diary",
      title: "Dear Diary",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "Dear Diary, Here we are in Costa Rica! We got to the hotel just in time for lunch. Our waiter said that the fish with vegetables was good. It was wonderful! We also enjoyed the tropical fruit we ate for dessert. We could see a lake and the Arenal Volcano from the dining room window. Dad and I took a boat ride and Mom and Mario rested by the pool. Now Mario wants to be a lifeguard so he can stay by the pool all day!",
        "Dear Diary, Today we hiked to the rain forest. And it was NOT rainy! That's because it's the dry season. It hasn't rained for three months! I'm happy I decided to take photos. I took some good pictures of monkeys and bees at a water hole. The monkeys love to play in the water and get very wet. But they didn't look happy with the bees.",
        "Dear Diary, We went back to the rain forest to watch other animals at the water hole. A loud noise made the animals run, but in a short time they returned. The water hole stays wet because it gets water from under the ground. It's still sunny. When does the weather change here?",
        "Dear Diary, Last night we slept inside a tent in the rain forest. It was cool, but we were warm in our sleeping bags. When it started to rain, we were hiking. Then it poured! It was not a day to be outdoors, so we went back to the hotel. Later today we fly home—at eleven o'clock. What a wonderful, wonderful trip!"
      ],
      vocabulary: [
        { word: "tropical", definition: "characteristic of hot regions near the equator" },
        { word: "volcano", definition: "a mountain that can erupt with lava and ash" },
        { word: "rainforest", definition: "a dense forest in a tropical region with high rainfall" },
        { word: "waterhole", definition: "a natural pool where animals gather to drink" }
      ],
      region: "Global",
      moral: "Travel helps us appreciate nature and different environments, creating lasting memories with family."
    },
    {
      id: "can-inventions-make-our-world-smaller",
      title: "Can Inventions Make Our World Smaller?",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "Did you ever wonder how things were discovered or invented? This is the story of four important inventions. Thanks to the Chinese, we can enjoy fireworks! How they were invented is a mystery. We think that the Chinese made fireworks to protect themselves from enemies. But, it all happened a long, long time ago.",
        "Think of fireworks. Imagine a rainbow of colors dancing in the sky. Imagine the BOOM! Billions all over the world enjoy this wonderful Chinese invention.",
        "A very important invention for all of us was the calendar. Calendars were invented in a number of countries: China, Mexico, France, and India. But the first calendar with 365 days was invented in Egypt. The Egyptian calendar had twelve months, every month had thirty days. The five days left at the end of the year were used for celebrations. Can you imagine where we might be without the calendar?",
        "Chocolate! We know where it came from. For years and years the Aztecs used the beans of a tree to make chocolate. Then in the 1500s, the Aztec Emperor Montezuma presented a delicious chocolate drink to explorers who had come to Mexico from Spain. They took it back to Spain. It was one of the first exports from the New World to the Old World. From that time on, chocolate was very popular in Spain. Today, the world loves chocolate milk, ice cream, and candy!"
      ],
      vocabulary: [
        { word: "invention", definition: "something new that someone has created" },
        { word: "fireworks", definition: "explosive devices that produce colorful displays in the sky" },
        { word: "calendar", definition: "a system for organizing days and months" },
        { word: "exports", definition: "goods sent to another country for sale" }
      ],
      region: "Global",
      moral: "Inventions from different cultures have enriched our lives and brought the world closer together."
    },
    {
      id: "anitasaurus",
      title: "Anitasaurus",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "'Look at the size of those teeth!' said Marcos. 'They are huge! Like sharp spikes! And those bony plates on its head are a meter longer than those of most other dinosaurs. Just what kind of dinosaur is this, Dr. Anita?' Anita smiled and looked at the big fossil again.",
        "'I named her Anitasaurus,' Anita told him. 'Isn't she sweet? I hunted for her for years. She's bigger than a T. rex. She's bigger than anything!' Anita picked up a chisel. 'Come on, Marcos. Help me cut the rock from her leg bone.'",
        "'The last dinosaurs died 65 million years ago,' said Marcos. 'But they are still making work for me now!'",
        "Anita looked at Anitasaurus. The fossil was so different! Its head was the size of a car. And it had four horns on its head and five claws on every foot.",
        "Anita was so happy she found Anitasaurus. 'Come on, Marcos,' she said. 'We want to get an award for finding this dinosaur, so let's finish working.'",
        "Clank! Clank! Clank! Anita felt as if she were falling.",
        "But Anita's hat was hitting the bed. She was not digging up the dinosaur, after all. She was just dreaming she was digging up the dinosaur!",
        "'I am going to find a real dinosaur one day,' Anita said. 'I really am. And when I find it, I am going to name it Anitasaurus!'"
      ],
      vocabulary: [
        { word: "fossil", definition: "remains of an ancient animal preserved in rock" },
        { word: "chisel", definition: "tool used for cutting rock or wood" },
        { word: "horns", definition: "hard pointed parts that grow on an animal's head" },
        { word: "award", definition: "prize given for an achievement" }
      ],
      region: "Global",
      moral: "Dreams can inspire us to work hard and achieve our goals."
    },
    {
      id: "my-trip-to-cartagena",
      title: "My Trip to Cartagena",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "We traveled by airplane to Cartagena. It is a city in Colombia. A guide told us about the city long ago.",
        "'Who knows who lived here then?' she asked.",
        "'Was it the Spanish?' I asked.",
        "'Yes,' she said, 'but the tribe of Caribes lived here first. The Spanish came in the 1500s and built many of the buildings you see today.'",
        "'Then one day in 1586, the explorer Sir Francis Drake and his men came to Cartagena from England,' she said. 'They heard that the Spanish had lots of gold. Drake wanted the gold.'",
        "'Did he get it?' I asked.",
        "'Drake went in at night,' she said.",
        "'Did they have lights?' I asked.",
        "'No,' she said, 'It was different in 1586. Electric lights weren't invented then. The city didn't have street lamps. It was very dark. So one of Drake's men lit a small fire to help him see. The Spanish saw the light.'",
        "'What happened then?' I asked.",
        "'Some of the men hid the gold. Some started to fight Drake and his men.'",
        "'Did Drake get any gold?' I asked.",
        "'Yes, he got some of it. His men took it away by boat. But Drake was not the last person to try to take gold from the city. The Spanish people needed to protect their gold. So they built this and lots of other strong buildings to protect the city. We are lucky they did, because these old buildings are still standing for us to see today!'"
      ],
      vocabulary: [
        { word: "guide", definition: "person who shows and explains places to visitors" },
        { word: "explorer", definition: "person who travels to discover new places" },
        { word: "tribe", definition: "group of people who live together" },
        { word: "protect", definition: "keep safe from harm" }
      ],
      region: "Global",
      moral: "History helps us understand how the past shaped the places we see today."
    },
    {
      id: "lina-and-the-calendar",
      title: "Lina and the Calendar",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "Lina hung up the watering can. She put the shovel away. She was helping her father clean up the yard.",
        "'I know what I am going to be one day,' she told him.",
        "'What are you going to be?' Father asked.",
        "'I am going to be Queen of the Calendar,' Lina said.",
        "'What does a Calendar Queen do?' Father asked. He gave her a rake.",
        "'She names new holidays to celebrate,' Lina said. 'She names special holidays for every week and every month of the year.'",
        "Father smiled. 'What are some of them going to be?' he asked. He started to rake.",
        "'April tenth is going to be Drop-the-Broom Day,' Lina said. 'No work on that date! Friday can be Fireworks Day. And every Monday is going to be Joke Day. We can tell jokes all day. There is not going to be any time for school on Mondays!'",
        "'I like this!' Father said. 'October sixteenth can be Hug-a-Tree Day. And July thirtieth can be Be-Nice-to-Horses Day.'",
        "Father stopped raking. 'What is the date today?' he asked.",
        "'June twenty-first,' Lina said.",
        "'The first day of summer,' Father said.",
        "'Let's make it Chocolate Ice-Cream Day,' said Father.",
        "'I like that idea!' said Lina. So they did."
      ],
      vocabulary: [
        { word: "calendar", definition: "a chart showing days, weeks, and months of the year" },
        { word: "celebrate", definition: "to do something special and enjoyable for an important event" },
        { word: "holiday", definition: "a special day of celebration or rest" },
        { word: "rake", definition: "a tool with long teeth for gathering leaves" }
      ],
      region: "Global",
      moral: "Imagination and creativity can make everyday tasks more enjoyable when shared with others."
    },
    {
      id: "who-took-my-baseball-cards",
      title: "Who Took My Baseball Cards?",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "Hello! I'm Rick. I like to play soccer, and I like to play basketball. But my favorite sport is baseball. I love to play baseball! I'm the fastest runner on my team. Baseball is never boring to me. But it is really exciting when you win. Last year, my team won a trophy!",
        "When I'm not playing baseball, I like to collect baseball cards. It's a fun and easy hobby. And it is interesting, too. Now I know everything about the players on all the different teams. I think I have the biggest collection in my town. That is because I spend all my money on baseball cards!",
        "One day I was putting my newest baseball cards in my book. I saw that some of my old cards weren't there. How strange! What happened? I looked every day for my baseball cards, but I didn't find them. Was this some joke? I did not think it was funny. I felt awful.",
        "Then, last night, I saw my dog Socks in the yard. I ran out to look. 'What's wrong, Socks?' I asked. Then I saw them. My baseball cards were behind the big rock! Socks took them! I was happy to see my wonderful cards, so I didn't get mad at Socks.",
        "I think he likes collecting baseball cards, too!"
      ],
      vocabulary: [
        { word: "hobby", definition: "an activity done regularly for enjoyment" },
        { word: "collection", definition: "a group of similar things gathered together" },
        { word: "trophy", definition: "a prize awarded for winning" },
        { word: "strange", definition: "unusual or unexpected" }
      ],
      region: "Global",
      moral: "Sometimes what we think is lost might just be misplaced, and forgiveness is better than anger."
    },
    {
      id: "the-rabbit-and-the-turtle",
      title: "The Rabbit and the Turtle",
      origin: "Lower Intermediate",
      author: "Reading Series",
      content: [
        "That rabbit! What a character! He was proud of his long ears. He was proud of his long feet. And he was very proud of how fast he ran.",
        "'No one can catch me,' Rabbit said. 'I'm wonderful. Wonderful!'",
        "'He is terrible,' said Mouse.",
        "'Awful!' said Spider.",
        "'I know what to do,' said Turtle.",
        "'Would you like to have a race?' Turtle asked Rabbit. 'Let's race to Big Rock.'",
        "'Do I want to race? With you?' Rabbit laughed. 'You are a dirty, dull turtle. A SLOW turtle.'",
        "Turtle smiled. 'I can win,' he said.",
        "Rabbit stopped laughing. 'Let's go!' he said.",
        "They ran.",
        "That rabbit was fast. He left Turtle behind in no time. Then he saw a restaurant. 'I'm hungry,' he thought. 'And that turtle is slow. I have time for dinner.'",
        "Rabbit ate a delicious meal of fruit, cheese, and cake.",
        "Turtle went past the restaurant. He didn't stop. But Rabbit caught up with him later and left him behind again.",
        "Rabbit felt a little tired then. He found a log. He decided to crawl in. He slept.",
        "Turtle did not stop. He went past the log. He was slow, but he ran and he ran.",
        "Suddenly Rabbit opened his eyes. He jumped up. He ran faster than before. But he was too late.",
        "That turtle was slow. But he did not stop, He did not give up. And he won!"
      ],
      vocabulary: [
        { word: "character", definition: "a person or animal in a story" },
        { word: "proud", definition: "feeling very pleased with oneself" },
        { word: "delicious", definition: "very tasty and enjoyable" },
        { word: "crawl", definition: "to move forward on hands and knees" }
      ],
      region: "Global",
      moral: "Slow and steady progress wins over quick but careless actions. Never give up, even if you seem to be at a disadvantage."
    },
    {
      id: "the-most-wonderful-present",
      title: "The Most Wonderful Present",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "Once upon a time, there lived a king who had a daughter. The king was a good father. His daughter wanted to get married, so he and his wife decided to help her look for a husband.",
        "The king said, 'The one who brings us the most wonderful present can meet my daughter. If she falls in love with him, he can marry her.' People sent special presents to the castle. There were beautiful clay bowls, glasses, clocks, and coins. But not one of the presents was special enough.",
        "In a small town lived three brothers. The three brothers decided to find presents for the princess. The oldest brother had black hair. He chose a special glass that let you see what was happening anywhere. The second brother was the shortest and had brown hair. He found a beautiful red rug. It let you fly anywhere.",
        "The youngest brother had short blond hair. He didn't know what to choose. Then he heard a man say, 'Lemons! Lemons!' The man said that if anyone is sick, the lemon juice can make them well. The youngest brother picked one of the lemons.",
        "The oldest brother looked in the glass. He saw the princess and she was sick! The second brother said, 'We must hurry up!' The brothers climbed onto the magic rug. Soon they were at the castle.",
        "The youngest brother said, 'Take this lemon. The juice will make your daughter well.' The lemon worked! The princess was well! When the king found out why the brothers had come, he said, 'Thank you for the glass and the rug. But it was the lemon that made my daughter well. It was the most wonderful present.'",
        "So she and the youngest brother got married. Cousins, aunts, uncles, and all the relatives came to celebrate. It was the most wonderful wedding anyone saw!"
      ],
      vocabulary: [
        { word: "present", definition: "something given as a gift" },
        { word: "princess", definition: "daughter of a king and queen" },
        { word: "relatives", definition: "people who are part of the same family" },
        { word: "wonderful", definition: "very good or amazing" }
      ],
      region: "Global",
      moral: "The most valuable gifts are those that help others, not the most expensive or magical ones."
    },
    {
      id: "a-day-at-the-mall",
      title: "A Day at the Mall",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "It was Saturday. Saturday was shopping day in my family. My mother saw an ad about a sale at the mall. The biggest department store was having an anniversary sale, and everything was half price. My mother decided I needed new clothes. I was in big trouble.",
        "I liked my clothes. They fit me, and they looked great. But my mother loves shopping, and she loves sales. There was no stopping her. For a minute I thought I was lucky. Dad had the car. How could we get there? But Mom said, 'We can take the bus!'",
        "The bus stopped at Sixth Avenue, just one block from the mall. At the mall, my mother asked for directions to the big department store. A man said the store was across from the pet store. We went past my favorite stores—Guitar World, Music Corner, and Sneaker Stop.",
        "I wanted a new CD. But my mother said not to look in the window. We had to go straight to the department store. We had to turn right and go past the luggage store. It was next to the jewelry store. Mom moved so fast! She ran down the aisle and found the racks of clothes. She was excited.",
        "Her fingers moved through shirt after shirt. 'Here!' she said. 'Try these on!' Everything Mom picked was awful. There were flowered shirts and checked shirts. There were pairs of plaid pants and pairs of striped pants. One shirt had sleeves that were too short. One pair of jeans had no pockets.",
        "I wasn't surprised they were half price. Who would wear them? My mother was getting tired. 'These clothes look comfortable,' I said. 'And they're my size. I'll try them on.' I came out wearing my plain, solid-colored T-shirt and baggy pants.",
        "'May I get them?' I asked. 'Yes. I like those clothes,' my mother said with a smile. 'How much do they cost?' 'Imagine that!' I said. 'My old clothes are free!' 'Wow! That's better than half price,' said Mom.",
        "'Don't tell the salesperson,' I said to my mother. 'But my old clothes are better than any of the new clothes here!' 'You're right,' Mom said as we walked out the door. 'Sometimes something old can be better than something new.'"
      ],
      vocabulary: [
        { word: "sale", definition: "selling things at lower prices than usual" },
        { word: "aisle", definition: "a passage between rows of shelves or seats" },
        { word: "plaid", definition: "a pattern of crossed lines forming squares" },
        { word: "baggy", definition: "loose-fitting and hanging in folds" }
      ],
      region: "Global",
      moral: "New isn't always better, and what we already have might be just what we need."
    },
    {
      id: "do-your-homework",
      title: "Do Your Homework",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "Maria Flores has one brother and one sister. After school they share the chores. One day they see this note on the table: 'Maria, please sweep the floor and weed the garden. Matilde, please wash the dishes and feed the dog. Daniel, please mow the lawn and make your bed. All of you, DO YOUR HOMEWORK! We are at the grocery store. Mother and Father.'",
        "Maria looks at Matilde. Matilde looks at Daniel. Daniel looks at his sisters. 'I want to play the piano!' Maria says. 'I want to play soccer!' Daniel says. 'Can you mow the lawn for me, Matilde?'",
        "'Listen to you!' Matilde says. 'I want to read my riddle book. You spend all your free time playing video games. And I have all the hard chores.'",
        "'I set the table and pick up the dirty dishes,' says Daniel. 'You always break a dish,' says Matilde. 'I help cook the supper.' 'And you always burn the soup!' says Maria.",
        "'I take out the garbage,' says Daniel. 'I did that twice last week!' says Maria. They talk and talk and talk. No one does any chores.",
        "'Here we are!' shouts Father. 'Did you finish your chores?' asks Mother. 'We are going to go to the beach when you do!'",
        "Maria looks at Matilde. Matilde looks at Daniel. Daniel looks at his sisters. Then they all run to do their chores."
      ],
      vocabulary: [
        { word: "chores", definition: "regular tasks or duties to be done" },
        { word: "weed", definition: "to remove unwanted plants" },
        { word: "mow", definition: "to cut grass with a machine" },
        { word: "riddle", definition: "a puzzling question or problem" }
      ],
      region: "Global",
      moral: "Responsibilities should be fulfilled before play, and working together makes tasks easier."
    },
    {
      id: "headlines",
      title: "Headlines",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "My father works hard at his office. He is the head of a computer lab. He works all the time. And when he gets home after work, he disappears. Where? Behind his newspaper!",
        "He reads every inch of that newspaper—current events, crime and sports, and weather. He even reads the movie reviews and the gossip column. Father enjoys that newspaper! But I don't like it. Why? Because he gets lost in it!",
        "Once we were late for the school play because he did not stop reading. Once his beeper rang and rang. He didn't look up. Once I said, 'Father, the dog is flying,' just to see what he would do. 'Just a minute,' he said. 'I'm reading the book reviews.'",
        "I can shout! I can cheer! When he reads the newspaper, he cannot hear me.",
        "So today I played a little trick. I got some paper. I printed some headlines—different headlines. And I glued them to Father's newspaper.",
        "What did he do? Father picked up the newspaper. He opened it. I waited. The newspaper began to shake. I heard a giggle. Then I heard a laugh. My trick was working!",
        "'Very funny,' father said. 'Now I am hungry. Do you want to get some ice cream with me?'",
        "'But you didn't read all of your newspaper, Father,' I said.",
        "'I will do that later,' he said. 'Come on.' My father is wonderful!"
      ],
      vocabulary: [
        { word: "headlines", definition: "titles of newspaper articles" },
        { word: "current events", definition: "things happening in the present time" },
        { word: "gossip", definition: "casual talk about other people" },
        { word: "beeper", definition: "a device that makes a sound when receiving a message" }
      ],
      region: "Global",
      moral: "Sometimes we need to be creative to get attention from those we love, and spending time together is more important than any distraction."
    },
    {
      id: "i-love-new-york-city",
      title: "I Love New York City",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "I love New York City. I like the East. We always lived there. Then my father got a new job. It was in Arizona, where the Grand Canyon is. Out West!",
        "Hollywood, in California, is all right. There are beautiful movie stars there. Washington, D.C. is all right. It is the capital of the United States. You can see famous buildings and the President there.",
        "But what can you see in Arizona? Cows! Horses! I didn't want to move!",
        "Do you know what I saw at the mall? A cow! But it wasn't real. It was in the window of the ice-cream store. We had one just like it in New York.",
        "Do you know what? I think I'm going to like Arizona!"
      ],
      vocabulary: [
        { word: "capital", definition: "the main city of a country or state" },
        { word: "mall", definition: "a large building with many shops" },
        { word: "Grand Canyon", definition: "a famous deep canyon in Arizona" },
        { word: "move", definition: "to go to live in a different place" }
      ],
      region: "Global",
      moral: "Being open to change can lead to unexpected happiness, and new places can become just as special as familiar ones."
    },
    {
      id: "mouses-invention",
      title: "Mouse's Invention",
      origin: "Intermediate",
      author: "Reading Series",
      content: [
        "Mouse got some wood and some cloth. Then he found some shiny paper clips, an old shoelace, a metal wheel, and a leather belt. 'You never know what you might use to make a mouse fly,' he said.",
        "Just then, Bird flew by. 'I know,' said Mouse. 'I can make wings like Bird's.' So Mouse cut the cloth to make two wings. He glued them to pieces of wood to make wings. 'Now I have brand-new Mouse wings!' Mouse said.",
        "He ran to show Rosa the wings. 'Look at my invention!' he said. Rosa looked at him. 'What an invention!' she said. 'Thank you,' Mouse said. 'Look! Now I'm going to test them.'",
        "'Be careful!' said Rosa. Mouse ran to the end of the table. The wings went up and down. Mouse then jumped into the air. But he did not fly. Instead he went down, down, down... right into Rosa's hands!",
        "'I caught you!' she said. She looked at Mouse. 'But why did you do that strange experiment anyway?'",
        "'I wanted to invent a special flying machine so that I can go to Grandma's house,' Mouse said.",
        "'Mouse,' Rosa said, 'I'm going to fly to Grandma's house, too.'",
        "'In an airplane?' Then Mouse smiled. 'I think I can solve this,' he said. 'I can invent a flying machine for a mouse.'",
        "Rosa pointed up to the sky. 'You don't need a special flying machine for a mouse! You can fly with me.' And that is what they did."
      ],
      vocabulary: [
        { word: "invention", definition: "something new that someone has created" },
        { word: "experiment", definition: "a test to try something new" },
        { word: "glue", definition: "sticky substance used to join things together" },
        { word: "solve", definition: "to find an answer to a problem" }
      ],
      region: "Global",
      moral: "Sometimes the simplest solution is right in front of us, and working together is better than trying to solve problems alone."
    }
  ]

  // Find the current story
  const story = stories.find(s => s.id === storyId)

  if (!story) {
    return <div>Story not found</div>
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/level-2" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Level 2 Stories</span>
      </Link>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 2</Badge>
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">{story.origin} Tale</Badge>
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

          <SummarySubmission level="2" />
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
              <CardTitle>Reading Comprehension</CardTitle>
              <CardDescription>Think about these questions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {story.id === "the-firebird" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why were the golden apples so important to the Tsar?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What did Ivan learn from disobeying the wolf's warnings?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did the gray wolf prove to be a true friend to Ivan?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What were the most valuable treasures Ivan found on his journey?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-snow-queen" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Kai change after the mirror shards entered his eye and heart?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why was Gerda able to resist the magic that tried to stop her?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What helped Gerda finally free Kai from the Snow Queen's spell?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How does the story show that love is stronger than magic?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-gift-of-the-magi" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What sacrifices did Jim and Della make for each other, and why?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did their financial situation affect their gift-giving choices?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why are Jim and Della considered "wise" despite their "foolish" sacrifices?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What does the story teach us about the true meaning of love and giving?
                      </p>
                    </li>
                  </>
                )}
                {story.id === "why-the-sky-is-far-away" && (
                <>
                  <li className="rounded-lg border p-3">
                    <p className="text-sm text-slate-700">
                      How did people's behavior toward the sky's food change over time?
                    </p>
                  </li>
                  <li className="rounded-lg border p-3">
                    <p className="text-sm text-slate-700">
                      What important lessons did the king try to teach his people?
                    </p>
                  </li>
                  <li className="rounded-lg border p-3">
                    <p className="text-sm text-slate-700">
                      Why was working for food considered the sky's final gift?
                    </p>
                  </li>
                  <li className="rounded-lg border p-3">
                    <p className="text-sm text-slate-700">
                      How did the people's understanding of food's value change after the sky moved away?
                    </p>
                  </li>
                </>
              )}

                {story.id === "aladdins-lamp" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Aladdin change after finding the magic lamp?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did the sorcerer want the lamp so badly?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Aladdin use both wisdom and magic to succeed?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What made people love Aladdin as their ruler in the end?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-story-of-momotaro" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Momotaro show kindness to each animal companion?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What made each animal want to join Momotaro's quest?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did Momotaro choose mercy over revenge with the demons?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did teamwork help them succeed in their mission?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-emperors-new-clothes" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did the Emperor believe the swindlers' claims about the special cloth?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did pride prevent the ministers from telling the truth?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why was the child the only one who spoke the truth?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What lesson did the Emperor learn about honesty and pride?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-nightingale" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did the kitchen maid know about the nightingale when the court officials didn't?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How was the real nightingale different from the mechanical bird?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did the nightingale return to help the sick Emperor?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What did the Emperor learn about true beauty and friendship?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-sinbad" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What important lesson did Sinbad want to teach Hindbad?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What challenges did Sinbad face during his seven voyages?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Sinbad's cleverness help him survive?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What was the most valuable treasure Sinbad gained from his adventures?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-happy-prince" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did the Prince's understanding of happiness change after his death?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did the Swallow decide to stay with the Prince instead of flying to Egypt?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What made the broken lead heart and dead Swallow the most precious things in the city?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did the Prince and the Swallow help the poor people of the city?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-selfish-giant" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What happened to the garden after the Giant built the wall?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did the presence of children affect the Giant's garden?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did Spring return to the garden when the Giant changed?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What did the Giant learn about sharing and happiness?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-adventures-of-sinbad" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why did Sinbad share his story with Hindbad?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What challenges did Sinbad face during his seven voyages?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did Sinbad's cleverness help him survive?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What was the most valuable treasure Sinbad gained from his adventures?
                      </p>
                    </li>
                  </>
                )}

                {story.id === "the-stone-soup" && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        How did the traveler's clever plan help bring the village together?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What made each villager want to contribute to the soup?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Why was the soup so delicious even though it was made with just a stone?
                      </p>
                    </li>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        What was the real magic in the stone soup story?
                      </p>
                    </li>
                  </>
                )}

                {!story.id.includes("the-firebird") && 
                 !story.id.includes("the-snow-queen") && 
                 !story.id.includes("the-gift-of-the-magi") &&
                 !story.id.includes("why-the-sky-is-far-away") &&
                 !story.id.includes("aladdins-lamp") &&
                 !story.id.includes("the-story-of-momotaro") &&
                 !story.id.includes("the-emperors-new-clothes") &&
                 !story.id.includes("the-nightingale") &&
                 !story.id.includes("the-sinbad") &&
                 !story.id.includes("the-happy-prince") &&
                 !story.id.includes("the-selfish-giant") &&
                 !story.id.includes("the-adventures-of-sinbad") &&
                 !story.id.includes("the-stone-soup") && (
                  <>
                    <li className="rounded-lg border p-3">
                      <p className="text-sm text-slate-700">
                        Can you formulate your own questions about this story using the 5 W's and 1 H?
                      </p>
                      <ul className="mt-2 ml-4 list-disc text-sm text-slate-600">
                        <li>Who are the main characters?</li>
                        <li>What happens in the story?</li>
                        <li>Where does the story take place?</li>
                        <li>When does the story occur?</li>
                        <li>Why do the characters make their choices?</li>
                        <li>How do events unfold and lead to the conclusion?</li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Explore more stories</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/level-2" className="w-full">
                <Button variant="outline" className="w-full">
                  All Level 2 Stories
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
