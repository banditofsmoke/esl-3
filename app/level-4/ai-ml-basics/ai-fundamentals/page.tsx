import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Share2, MessageSquare } from "lucide-react"
import SummarySubmission from "@/components/summary-submission"

export default function AIFundamentalsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/level-4" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Level 4 Resources</span>
      </Link>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 4</Badge>
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">AI & Machine Learning</Badge>
          <Badge variant="outline">Technology</Badge>
          <Badge variant="outline">Ethics</Badge>
          <Badge variant="outline">AI Basics</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          AI Fundamentals: What Everyone Should Know
        </h1>
        <p className="text-slate-600">Reading time: 12 minutes</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Article
              </CardTitle>
              <CardDescription>An introduction to artificial intelligence for high school students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h2>Introduction: Understanding AI in Our World</h2>
                <p>
                  Artificial Intelligence (AI) has moved from science fiction into our everyday lives, often in ways we
                  don't even notice. From the recommendations on your favorite streaming service to the voice assistant
                  on your phone, AI technologies are quietly reshaping how we interact with the world. But what exactly
                  is AI, how does it work, and what does it mean for your future?
                </p>
                <p>
                  This article aims to provide you with a clear, accessible introduction to artificial intelligence—no
                  advanced math or computer science background required. By understanding the fundamentals of AI, you'll
                  be better equipped to navigate a world where these technologies play an increasingly important role.
                </p>

                <h2>What Is Artificial Intelligence?</h2>
                <p>
                  At its core, artificial intelligence refers to computer systems designed to perform tasks that
                  typically require human intelligence. These include recognizing patterns, learning from experience,
                  making decisions, understanding language, and solving problems.
                </p>
                <p>It's important to distinguish between two major categories of AI:</p>
                <ul>
                  <li>
                    <strong>Narrow or Weak AI:</strong> Systems designed to perform specific tasks within a limited
                    context. Examples include voice assistants, recommendation systems, and image recognition software.
                    This is the type of AI we encounter in our daily lives.
                  </li>
                  <li>
                    <strong>General or Strong AI:</strong> Systems with human-like intelligence that can understand,
                    learn, and apply knowledge across a wide range of tasks. Despite what science fiction might suggest,
                    true general AI doesn't exist yet and remains a theoretical goal.
                  </li>
                </ul>

                <h2>How Does AI Work? The Basics</h2>
                <p>
                  While AI systems can seem magical, they operate on principles we can understand. Here are the key
                  concepts that power most modern AI:
                </p>

                <h3>1. Machine Learning: Teaching Computers to Learn</h3>
                <p>
                  Machine learning is the most common approach to creating AI systems today. Rather than explicitly
                  programming a computer with rules to follow, machine learning allows computers to learn patterns from
                  data.
                </p>
                <p>
                  Imagine teaching a child to recognize cats. You wouldn't provide a detailed list of measurements and
                  features; instead, you'd show them many examples of cats until they learn to recognize the patterns
                  that make a cat a cat. Machine learning works similarly—algorithms improve their performance as
                  they're exposed to more data.
                </p>

                <h3>2. Neural Networks: Inspired by the Human Brain</h3>
                <p>
                  Many modern AI systems use artificial neural networks, which are loosely inspired by the structure of
                  the human brain. These networks consist of interconnected "neurons" organized in layers that process
                  information.
                </p>
                <p>
                  When data enters the network, each layer extracts increasingly complex features. For example, in an
                  image recognition system, early layers might detect simple edges and shapes, while deeper layers
                  identify more complex patterns like eyes, ears, or entire faces.
                </p>

                <h3>3. Deep Learning: Going Deeper</h3>
                <p>
                  Deep learning refers to neural networks with many layers (hence "deep"). These systems have
                  revolutionized AI by achieving remarkable performance in tasks like image and speech recognition,
                  language translation, and game playing.
                </p>
                <p>
                  The "depth" allows these systems to learn hierarchical representations of data, from simple to
                  complex. This approach has enabled breakthroughs like ChatGPT, which can generate human-like text, and
                  DALL-E, which creates images from text descriptions.
                </p>

                <h2>AI in Everyday Life: Where You Already Encounter It</h2>
                <p>AI is already integrated into many aspects of daily life, often working behind the scenes:</p>
                <ul>
                  <li>
                    <strong>Digital Assistants:</strong> Siri, Alexa, and Google Assistant use natural language
                    processing to understand your requests and machine learning to improve over time.
                  </li>
                  <li>
                    <strong>Recommendation Systems:</strong> Netflix, Spotify, and Amazon suggest content or products
                    based on your past behavior and the patterns they've identified from millions of users.
                  </li>
                  <li>
                    <strong>Social Media:</strong> Algorithms determine what appears in your feed, recognize faces in
                    photos, and filter unwanted content.
                  </li>
                  <li>
                    <strong>Navigation Apps:</strong> Google Maps and Waze use AI to analyze traffic patterns and
                    suggest optimal routes.
                  </li>
                  <li>
                    <strong>Smartphones:</strong> From predictive text to computational photography that enhances your
                    pictures, AI powers many smartphone features.
                  </li>
                </ul>

                <h2>The Capabilities and Limitations of AI</h2>
                <p>
                  Understanding what AI can and cannot do helps set realistic expectations and recognize its appropriate
                  applications.
                </p>

                <h3>What AI Does Well:</h3>
                <ul>
                  <li>
                    <strong>Pattern Recognition:</strong> AI excels at identifying patterns in large datasets, whether
                    they're images, text, or numerical data.
                  </li>
                  <li>
                    <strong>Automation of Routine Tasks:</strong> AI can efficiently perform repetitive tasks that
                    follow consistent patterns.
                  </li>
                  <li>
                    <strong>Processing Vast Amounts of Data:</strong> AI can analyze more information than a human could
                    in a lifetime.
                  </li>
                  <li>
                    <strong>Consistency:</strong> AI doesn't get tired, distracted, or emotional, allowing for
                    consistent performance in suitable tasks.
                  </li>
                </ul>

                <h3>What AI Struggles With:</h3>
                <ul>
                  <li>
                    <strong>True Understanding:</strong> AI systems process patterns rather than truly understanding
                    meaning or context the way humans do.
                  </li>
                  <li>
                    <strong>Common Sense Reasoning:</strong> Basic knowledge that humans take for granted is often
                    difficult for AI to apply appropriately.
                  </li>
                  <li>
                    <strong>Adapting to Novel Situations:</strong> AI typically performs well only in scenarios similar
                    to its training data.
                  </li>
                  <li>
                    <strong>Ethical Judgment:</strong> AI lacks the moral reasoning and empathy that guide human
                    decision-making.
                  </li>
                  <li>
                    <strong>Creativity:</strong> While AI can generate content that appears creative, it's ultimately
                    recombining and building upon existing patterns rather than creating truly original ideas.
                  </li>
                </ul>

                <h2>Ethical Considerations and Challenges</h2>
                <p>
                  As AI becomes more integrated into society, it raises important ethical questions that we must
                  address:
                </p>

                <h3>1. Bias and Fairness</h3>
                <p>
                  AI systems learn from historical data, which often contains human biases. Without careful design and
                  oversight, these systems can perpetuate or even amplify existing biases in areas like hiring, lending,
                  criminal justice, and healthcare.
                </p>
                <p>
                  For example, if a hiring algorithm is trained on data from a company that has historically favored
                  certain demographic groups, the algorithm may continue this pattern, even if programmers don't
                  explicitly instruct it to do so.
                </p>

                <h3>2. Privacy Concerns</h3>
                <p>
                  Many AI systems require vast amounts of data to function effectively. This raises questions about data
                  collection, consent, and how personal information is used and protected.
                </p>
                <p>
                  Facial recognition technology, for instance, has sparked debates about surveillance and privacy rights
                  in public spaces.
                </p>

                <h3>3. Transparency and Explainability</h3>
                <p>
                  Many advanced AI systems, particularly deep learning models, function as "black boxes" where even
                  their creators cannot fully explain how they reach specific conclusions. This lack of transparency
                  becomes problematic when these systems make important decisions affecting people's lives.
                </p>

                <h3>4. Job Displacement and Economic Impact</h3>
                <p>
                  As AI automates tasks previously performed by humans, it will transform the job market. While new jobs
                  will emerge, the transition may be difficult for many workers, potentially exacerbating economic
                  inequality without thoughtful policies.
                </p>

                <h3>5. Autonomy and Control</h3>
                <p>
                  As AI systems become more capable, questions arise about how much decision-making authority they
                  should have, particularly in high-stakes areas like healthcare, transportation, and warfare.
                </p>

                <h2>Preparing for an AI-Integrated Future</h2>
                <p>
                  As a high school student, you're entering a world where AI will likely play an increasingly
                  significant role throughout your lifetime. Here are some ways to prepare:
                </p>

                <h3>1. Develop AI Literacy</h3>
                <p>
                  Understanding the basics of how AI works, its capabilities, and its limitations will help you evaluate
                  claims about AI and make informed decisions about its use in your life and work.
                </p>

                <h3>2. Cultivate Uniquely Human Skills</h3>
                <p>Focus on developing skills that AI currently struggles with, such as:</p>
                <ul>
                  <li>Creative thinking and innovation</li>
                  <li>Emotional intelligence and empathy</li>
                  <li>Ethical reasoning and judgment</li>
                  <li>Complex problem-solving across domains</li>
                  <li>Adaptability and learning how to learn</li>
                </ul>

                <h3>3. Consider Ethical Implications</h3>
                <p>
                  As you encounter AI systems, think critically about their design, implementation, and impact. Who
                  benefits? Who might be harmed? What values are embedded in these systems?
                </p>

                <h3>4. Explore Career Opportunities</h3>
                <p>
                  AI will create new career paths, not just for those who build the technology but also for those who
                  apply it in fields like healthcare, education, environmental science, and the arts. Consider how AI
                  might intersect with your interests and strengths.
                </p>

                <h2>Conclusion: Becoming an Informed Digital Citizen</h2>
                <p>
                  Artificial intelligence is neither a magical solution to all problems nor an existential threat to
                  humanity. It's a powerful tool with tremendous potential for both benefit and harm, depending on how
                  we develop and deploy it.
                </p>
                <p>
                  By understanding the fundamentals of AI, you can participate in important conversations about how
                  these technologies should be designed, regulated, and integrated into society. As digital citizens in
                  an AI-enhanced world, your informed perspective matters.
                </p>
                <p>
                  The future of AI will be shaped not just by technologists but by all of us who use, interact with, and
                  are affected by these systems. By developing AI literacy now, you're preparing to contribute to that
                  future in meaningful ways.
                </p>
              </div>
            </CardContent>
          </Card>

          <SummarySubmission level="4" />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Concepts</CardTitle>
              <CardDescription>Essential terms and ideas from this article</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Artificial Intelligence (AI)</div>
                  <div className="text-sm text-slate-600">
                    Computer systems designed to perform tasks that typically require human intelligence, such as
                    recognizing patterns, learning, and problem-solving.
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Machine Learning</div>
                  <div className="text-sm text-slate-600">
                    An approach to AI where algorithms learn patterns from data rather than following explicitly
                    programmed rules.
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Neural Networks</div>
                  <div className="text-sm text-slate-600">
                    Computing systems inspired by the human brain's structure, consisting of interconnected "neurons"
                    that process information in layers.
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Deep Learning</div>
                  <div className="text-sm text-slate-600">
                    A subset of machine learning using neural networks with many layers, enabling more complex pattern
                    recognition.
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Narrow vs. General AI</div>
                  <div className="text-sm text-slate-600">
                    Narrow AI performs specific tasks in limited contexts, while General AI (theoretical) would have
                    human-like intelligence across diverse domains.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discussion Questions</CardTitle>
              <CardDescription>Think critically about these aspects of AI</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    How might AI systems perpetuate existing biases in society, and what steps could be taken to make
                    them more fair?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    Should there be limits on what decisions we allow AI systems to make? If so, where would you draw
                    the line?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    How might your future career field be affected by advances in artificial intelligence? What new
                    opportunities might emerge?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    What responsibilities do companies developing AI have to ensure their technologies benefit society?
                  </p>
                </li>
                <li className="rounded-lg border p-3">
                  <p className="text-sm text-slate-700">
                    How can we balance the benefits of AI-powered personalization with concerns about privacy and data
                    collection?
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Further Learning</CardTitle>
              <CardDescription>Resources to explore this topic further</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Elements of AI</div>
                  <div className="text-sm text-slate-600 mb-2">
                    A free online course that introduces AI concepts in an accessible way.
                  </div>
                  <a
                    href="https://www.elementsofai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Visit Website →
                  </a>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">AI for Everyone (Coursera)</div>
                  <div className="text-sm text-slate-600 mb-2">
                    A non-technical course by Andrew Ng that explains AI concepts for a general audience.
                  </div>
                  <a
                    href="https://www.coursera.org/learn/ai-for-everyone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Visit Website →
                  </a>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Book: "You Look Like a Thing and I Love You"</div>
                  <div className="text-sm text-slate-600 mb-2">
                    By Janelle Shane - An entertaining exploration of AI capabilities and limitations.
                  </div>
                  <a
                    href="https://www.janelleshane.com/book-you-look-like-a-thing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Learn More →
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/level-4/ai-ml-basics" className="w-full">
                <Button variant="outline" className="w-full">
                  All AI & ML Articles
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share This Article
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 mb-4">Was this article helpful to you?</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Very Helpful
                </Button>
                <Button variant="outline" size="sm">
                  Somewhat Helpful
                </Button>
                <Button variant="outline" size="sm">
                  Not Helpful
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
