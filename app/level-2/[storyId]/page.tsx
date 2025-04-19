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
        "In ancient China, there lived an emperor in a magnificent palace made of the finest porcelain. The palace walls were adorned with intricate designs of flowers and dragons, and in the garden grew the most beautiful flowers, with tiny silver bells tied to their stems that tinkled when the wind blew. The garden extended so far that even the gardener didn't know where it ended.",
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
      id: "the-gift-of-the-magi",
      title: "The Gift of the Magi",
      origin: "American",
      author: "O. Henry",
      content: [
        "One dollar and eighty-seven cents. That was all Della had saved, and tomorrow was her best friend Jim's birthday. She had been saving one penny and two pennies at a time, careful with every purchase at the grocery store and the vegetable market. Three times Della counted it. One dollar and eighty-seven cents.",
        "Della flopped down on her small couch with a sigh. She had hoped to buy something really special for Jim. You see, they each had one thing they were especially proud of. Jim had a beautiful gold watch that had belonged to his grandfather. Della had beautiful long brown hair that fell past her waist like a cascade of silk.",
        "Suddenly, Della had an idea! She jumped up and looked in the mirror at her long, beautiful hair. Twenty minutes later, she walked into Madame Sofronie's Hair Goods shop. 'Will you buy my hair?' asked Della. 'I give good prices for good hair,' said Madame Sofronie. Soon, Della left the shop with twenty dollars!",
        "With the money, Della found the perfect gift - a platinum chain for Jim's precious watch. Simple and elegant, it was just right for Jim's treasured timepiece. She couldn't wait to give it to him!",
        "That evening, when Jim came for his birthday celebration, he stared at Della in surprise. She had tied a ribbon around her now-short hair. 'Don't worry!' she said quickly. 'It grows back! And look - I got you this for your watch!'",
        "Jim smiled softly and handed Della a package. 'Open it,' he said. Della unwrapped it eagerly. Inside were the beautiful combs she had admired in a shop window - perfect for long hair. 'I sold my watch to buy them for you,' Jim admitted.",
        "They sat quietly for a moment, these two young friends who had each given up their most precious possession to buy a gift for the other. Then they began to laugh. The combs would have to wait for Della's hair to grow back, and the watch chain would have to wait for Jim to save up for another watch.",
        "But as they shared birthday cake and ice cream, they knew they had given each other the most valuable gift of all - the gift of friendship and sacrifice. And that made them the wisest of all who give gifts."
      ],
      vocabulary: [
        { word: "cascade", definition: "a small waterfall; something falling or hanging like a waterfall" },
        { word: "precious", definition: "of great value; not to be wasted or treated carelessly" },
        { word: "sacrifice", definition: "giving up something valued for the sake of something else" },
        { word: "elegant", definition: "graceful and stylish in appearance" },
        { word: "admired", definition: "regarded with respect or warm approval" }
      ],
      region: "North America",
      moral: "True friendship is shown not in the gifts we give, but in the sacrifices we make for others. The most valuable things in life can't be bought with money."
    },
    {
      id: "the-legend-of-sleepy-hollow",
      title: "The Legend of Sleepy Hollow",
      origin: "American",
      author: "Washington Irving",
      content: [
        "In a peaceful valley called Sleepy Hollow lived Ichabod Crane, a tall, lanky schoolteacher who loved telling stories. The valley was known for its mysterious fog and strange shadows at night, which made people's imaginations create wonderful tales.",
        "In this by-place of nature there abode, some thirty years since, a worthy wight of the name of Ichabod Crane, who sojourned in Sleepy Hollow for the purpose of instructing the children of the vicinity. He was tall, but exceedingly lank, with narrow shoulders, long arms and legs, hands that dangled a mile out of his sleeves.",
        "His head was small, and flat at top, with huge ears, large green glassy eyes, and a long snipe nose, so that it looked like a weather-cock perched upon his spindle neck to tell which way the wind blew. To see him striding along the profile of a hill on a windy day, with his clothes bagging and fluttering about him, one might have mistaken him for some scarecrow eloped from a cornfield.",
        "From his school-house, he would often make his way to the farmhouse of old Baltus Van Tassel, who had an only child, the blooming Katrina Van Tassel. She was a little of a coquette, as might be perceived even in her dress, which was a mixture of ancient and modern fashions, well suited to set off her charms.",
        "Ichabod had a soft and foolish heart towards the sex, and it is not to be wondered at that so tempting a morsel soon caught his eye, especially after he had visited her in her paternal mansion. Old Baltus Van Tassel was a perfect picture of a thriving, contented, liberal-hearted farmer.",
        "But there was one who was a formidable rival to Ichabod: the renowned Brom Bones, a burly, roaring, roistering blade who was always ready for either a fight or a frolic. He had more mischief than ill-will in his composition, and with all his overbearing roughness, there was a strong dash of waggish good humor at bottom.",
        "One autumnal evening, Ichabod was invited to a merrymaking, or 'quilting frolic,' at the Van Tassels'. All the wealth of glorious foodstuffs of the farms was there. And there were the treasures of fruit dishes of various kinds that had been garrulously praised by Ichabod.",
        "After the feast came the dance. Ichabod was attracted by Katrina's charms, while Brom Bones sat brooding by himself in a corner. When the party broke up, Ichabod stayed behind to have a tête-à-tête with Katrina. What passed between them no one knows, but something must have gone wrong, for he soon took his leave with an air quite desolate.",
        "It was the very witching time of night as Ichabod made his way home along the high hills which rise above Tarry Town. All the stories of ghosts and goblins that he had heard in the afternoon now came crowding upon his recollection. The night grew darker and darker; the stars seemed to sink deeper in the sky.",
        "Suddenly he heard a groan—his teeth chattered and his knees smote against the saddle. It was but the rubbing of one huge bough upon another as they were swayed about by the breeze. He passed the tree in safety, but new perils lay before him.",
        "About two hundred yards from the tree, a small brook crossed the road. Just at this moment, in the dark shadow of the grove, on the margin of the brook, he beheld something huge, misshapen, black, and towering. It stirred not, but seemed gathered up in the gloom, like some gigantic monster ready to spring upon the traveler.",
        "The hair of the affrighted pedagogue rose upon his head with terror. What was to be done? To turn and fly was now too late. Summoning up, therefore, a show of courage, he demanded in stammering accents, 'Who are you?' He received no reply.",
        "He repeated his demand in a still more agitated voice. Still there was no answer. Once more he cudgeled the sides of the inflexible Gunpowder, his horse, and, shutting his eyes, broke forth with involuntary fervor into a psalm tune. Just then the shadowy object of alarm put itself in motion, and with a scramble and a bound stood at once in the middle of the road.",
        "Though the night was dark and dismal, yet the form of the unknown might now in some degree be ascertained. He appeared to be a horseman of large dimensions, and mounted on a black horse of powerful frame. He made no offer of molestation or sociability, but kept aloof on one side of the road, jogging along on the blind side of old Gunpowder.",
        "Ichabod quickened his steed in hopes of leaving him behind. The stranger, however, quickened his horse to an equal pace. Ichabod pulled up, and fell into a walk, thinking to lag behind—the other did the same. His heart began to sink within him."
      ],
      vocabulary: [
        { word: "indent", definition: "form deep recesses in a coastline or surface" },
        { word: "sequestered", definition: "isolated and hidden away" },
        { word: "apparition", definition: "a ghost or ghostlike image" },
        { word: "sojourned", definition: "stayed temporarily" },
        { word: "pedagogue", definition: "a teacher, especially a strict or pedantic one" },
        { word: "garrulously", definition: "excessively talkative, especially about trivial matters" },
        { word: "inflexible", definition: "unwilling to change or compromise" },
        { word: "molestation", definition: "pestering or harassing behavior" }
      ],
      region: "North America",
      moral: "Fear and imagination can transform ordinary circumstances into extraordinary terrors, and sometimes our own superstitions become our greatest enemies."
    },
    {
      id: "the-thousand-and-one-nights",
      title: "Aladdin's Lamp",
      origin: "Middle Eastern",
      author: "Unknown",
      content: [
        "In a far-off city of China lived a poor tailor who had a son named Aladdin. Aladdin was a careless, idle boy who would do nothing but play all day long in the streets with other idle children of his own age. This so grieved his father that he died, yet Aladdin continued in his idle ways.",
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
      id: "the-legend-of-mulan",
      title: "The Legend of Mulan",
      origin: "Chinese",
      author: "Traditional",
      content: [
        "In ancient China, a young woman named Hua Mulan lived with her elderly father, mother, and younger sister. When the Emperor decreed that one man from each family must serve in the Imperial Army to defend against invaders, Mulan was worried because her father was too old and frail to fight.",
        "Mulan had grown up learning both traditional women's arts and martial skills from her father, a retired warrior. In secret, she had practiced archery and swordsmanship, showing natural talent that matched her determination. She knew she could not let her father march to certain death.",
        "Late one night, Mulan cut her long hair with her father's sword and bound her chest. She donned her father's armor, took his conscription notice, and rode away on her horse, Black Wind, before dawn. Her parents discovered her absence and the letter she left behind, explaining her decision to protect both her father and their family's honor.",
        "Life in the army was challenging. Mulan had to be constantly vigilant to maintain her disguise. She bathed at night when no one could see her, spoke little to avoid suspicion, and worked twice as hard as any other soldier to prove herself. Her skill with both bow and sword soon earned her the respect of her fellow warriors.",
        "For twelve long years, Mulan fought in numerous battles, rising through the ranks through her combination of physical prowess and clever strategy. She became known for finding ways to win battles while minimizing casualties on both sides. Her commanders praised her ability to think differently from other generals.",
        "In one crucial battle, Mulan saved the entire army by leading them through a mountain pass that others had deemed too dangerous. She had noticed the migration patterns of local birds, which revealed a safe route. This victory earned her a position as a high-ranking general.",
        "Her most challenging moment came when she was wounded in battle. A physician was summoned, but Mulan managed to treat her own injuries in private, using knowledge of medicine she had learned from her mother. This incident only added to her legend, as soldiers spoke of a warrior who needed no help even when gravely injured.",
        "After twelve years of service, the Emperor himself summoned Mulan to the capital to honor her achievements. He offered her a position as his minister, but Mulan declined, revealing her true identity. The Emperor was amazed by her courage and dedication, declaring that gender matters not in the service of one's country.",
        "When offered wealth and titles, Mulan asked only for a swift horse to carry her home to her family. The Emperor honored her request but also sent her home with gifts symbolizing both masculine and feminine virtues: a sword representing her courage in war, and jade representing her unwavering devotion to family.",
        "Returning home at last, Mulan found her parents had aged but were well, and her sister had grown into a beautiful young woman. She changed from her armor into her old clothes, letting down what remained of her hair. When her old comrades visited later, they were shocked to discover that their brilliant general was a woman.",
        "The story of Mulan spread throughout China, inspiring generations to come. She became a symbol of loyalty, courage, and the belief that one's worth comes not from gender but from the strength of one's heart and the righteousness of one's actions. Her legend taught that the greatest power lies not in physical strength alone, but in the unwavering spirit to protect what one loves."
      ],
      vocabulary: [
        { word: "decree", definition: "an official order issued by a legal authority" },
        { word: "invaders", definition: "people who enter a country or region by force" },
        { word: "disguised", definition: "changed one's appearance to conceal identity" },
        { word: "campaigns", definition: "series of military operations intended to achieve a goal" },
        { word: "warrior", definition: "a brave or experienced soldier or fighter" },
        { word: "vigilant", definition: "keeping careful watch for possible danger" },
        { word: "prowess", definition: "exceptional valor, bravery, or ability" },
        { word: "casualties", definition: "people killed or injured in war or accidents" },
        { word: "minister", definition: "a high-ranking government official" },
        { word: "unwavering", definition: "steady, resolute, not changing or faltering" }
      ],
      region: "Asia",
      moral: "Courage, dedication, and love for family know no gender. True honor comes not from following traditional roles, but from having the strength to do what is right, even in the face of great adversity."
    },
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
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    Why did the Emperor believe the swindlers' claims about the special cloth?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    Why did the officials pretend to see the clothes when there was nothing there?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">What does the child's honesty represent in the story?</p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">How does this story relate to situations in real life?</p>
                </li>
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
