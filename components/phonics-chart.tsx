"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, SkipForward, SkipBack, Clock, Volume2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

// Updated phonics data with suggested structure
const phonicsData = {
  shortVowels: [
    "a - ant, cat, hat, bad, map, pan, rat, tap, back, flag, snack, happy, magic, apple, happen, cabinet, family, camera, pattern, travel, abstract, radical, attitude, animals",
    "e - egg, bed, net, pen, red, set, best, head, desk, fresh, dress, trendy, measure, every, empty, spread, level, special, plenty, present, better, express, method, strength",
    "i - in, sit, big, fish, milk, gift, spin, grip, chick, brick, stick, listen, middle, simple, insist, visit, winter, silly, river, dinner, living, single, history, similar",
    "o - ox, hot, top, box, fog, lot, drop, stop, clock, block, frog, pocket, cover, bottle, bottom, proper, model, modern, product, bodies, honest, process, problem, promise",
    "u - up, cut, sun, bus, cup, run, jump, luck, drum, trust, brush, hundred, butter, bundle, summer, number, uncle, under, struggle, sudden, public, subject, result, support",
    "y - gym, myth, sync, cyst, system, symbol, crystal, mystery, rhythm, symptom, typical, pyramid, dynasty, enzyme, analyze, bicycle, cylinder, symphony, cryptic, syllable"
  ],
  longVowels: [
    "a - lake, came, day, rain, gate, tape, grade, plane, whale, drain, paint, waiting, nature, basic, flavor, radar, donate, create, escape, debate, relate, famous, station, vacation",
    "e - me, see, eat, feet, tree, week, sweet, dream, clean, beach, reach, teaching, reason, leader, proceed, either, region, fever, needle, creature, freedom, evening, complete, deceive",
    "i - ice, kite, sky, night, bike, time, drive, shine, bright, slight, fight, writing, silent, private, advice, decide, provide, require, remind, survive, climate, arrived, describe, surprise",
    "o - go, boat, snow, pole, home, nose, rope, stone, smoke, globe, remote, hoping, moment, noticed, ocean, frozen, chosen, broken, promote, propose, compose, control, approach, devoted",
    "u - mute, cube, blue, fruit, tune, rule, flute, prune, truth, cruise, include, student, future, useful, reduce, consume, confuse, excuse, produce, salute, pollute, conclude, dispute, refuse",
    "y - why, fly, type, style, deny, reply, supply, multiply, identify, classify, satisfy, qualify, notify, signify, specify, justify, modify, apply, occupy, rely, defy, verify, comply, imply"
  ],
  consonantBlendEndings: [
    "-ft - lift, drift, shift, craft, swift, gift, thrift, aircraft, aloft, cleft, draft, shaft, theft, uplift, raft, soften, drifted, sifting, crafted, shifting",
    "-lt - belt, melt, built, felt, tilt, adult, result, consult, dealt, gilt, halt, jolt, quilt, vault, revolt, default, rebuilt, guilty, filtered, resulted",
    "-mp - lamp, jump, camp, bump, stamp, dump, clamp, trumpet, limp, pump, swamp, crimp, plump, shrimp, stump, tramp, glimpse, thumping, cramped, jumping",
    "-nd - sand, hand, send, blend, grand, trend, friend, weekend, bond, fund, mind, pond, wind, stand, strand, beyond, command, defend, expand, respond",
    "-nk - sink, think, bank, drink, thank, blink, shrink, wrinkle, blank, chunk, flank, plank, rank, slink, trunk, wink, blanket, thinking, linked, ranking",
    "-nt - tent, sent, plant, went, paint, front, silent, present, bent, dent, hunt, mint, stint, grant, print, blunt, ancient, content, distant, instant",
    "-pt - kept, slept, crept, swept, accept, adapt, attempt,escript, apt, dept, inept, rapt, wept, adopt, erupt, prompt, corrupt, equipped, scripted, adapted",
    "-sk - desk, task, risk, mask, flask, dusk, asterisk, kiosk, bask, brisk, cask, husk, rusk, tusk, whisk, mosque, basking, risking, masked, desktop",
    "-sp - wasp, grasp, clasp, crisp, wisp, gasp, hospital, whisper, cusp, lisp, rasp, hasp, asp, steep, grasped, clasping, lisping, grasping, whispered",
    "-st - nest, test, list, trust, frost, coast, forest, fastest, best, dust, east, ghost, host, most, post, quest, lasting, casting, testing, resting",
    "-ct - fact, sect, act, direct, collect, perfect, inspect, protect, pact, tract, exact, effect, object, select, strict, contact, correct, direct, instruct",
    "-xt - text, next, sixth, pretext, context, mixture, texture, boxed, fixed, mixed, relaxed, vexed, affixed, prefixed, textured, textbook, textiles"
  ],
  // ... rest of phonicsData remains the same
}

// Update the description first
const syllableDescription = {
  title: "Syllable Management",
  subtitle: "Master English pronunciation with Wayne's syllable system",
  description: "Breaking words into syllables is crucial for ESL learners. It helps with pronunciation, spelling, and vocabulary retention. Write each word in both English and your native language to reinforce learning.",
  instructions: "1. Read each word carefully\n2. Practice the syllable breaks\n3. Write the word in English\n4. Write the translation in your language\n5. Review and repeat daily"
}

// Enhanced syllable breakdown with grade 0-3 vocabulary
const syllableBreakdown: Record<string, string[]> = {
  // Short Vowels (12 words)
  "rabbit": ["rab", "bit"],
  "captain": ["cap", "tain"],
  "traffic": ["traf", "fic"],
  "practice": ["prac", "tice"],
  "sentence": ["sen", "tence"],
  "blanket": ["blan", "ket"],
  "million": ["mil", "lion"],
  "connect": ["con", "nect"],
  "sandwich": ["sand", "wich"],
  "pumpkin": ["pump", "kin"],
  "dentist": ["den", "tist"],
  "plastic": ["plas", "tic"],

  // Long Vowels (12 words)
  "baseball": ["base", "ball"],
  "seaside": ["sea", "side"],
  "sunshine": ["sun", "shine"],
  "rainbow": ["rain", "bow"],
  "seashore": ["sea", "shore"],
  "detail": ["de", "tail"],
  "preview": ["pre", "view"],
  "ahread": ["a", "head"],
  "daylight": ["day", "light"],
  "freedom": ["free", "dom"],
  "peaceful": ["peace", "ful"],
  "either": ["ei", "ther"],

  // Vowel Patterns (12 words)
  "railroad": ["rail", "road"],
  "payment": ["pay", "ment"],
  "keyboard": ["key", "board"],
  "teaspoon": ["tea", "spoon"],
  "seafood": ["sea", "food"],
  "rainfall": ["rain", "fall"],
  "sidewalk": ["side", "walk"],
  "daytime": ["day", "time"],
  "weekend": ["week", "end"],
  "mailbox": ["mail", "box"],
  "highway": ["high", "way"],
  "outbreak": ["out", "break"],

  // R-Controlled (12 words)
  "hardware": ["hard", "ware"],
  "marker": ["mar", "ker"],
  "corner": ["cor", "ner"],
  "forward": ["for", "ward"],
  "morning": ["morn", "ing"],
  "server": ["ser", "ver"],
  "partner": ["part", "ner"],
  "garden": ["gar", "den"],
  "circle": ["cir", "cle"],
  "birthday": ["birth", "day"],
  "ourself": ["our", "self"],
  "northern": ["nor", "thern"],

  // Consonant Blends (12 words)
  "splendid": ["splen", "did"],
  "strongest": ["stron", "gest"],
  "crystal": ["crys", "tal"],
  "struggle": ["strug", "gle"],
  "platform": ["plat", "form"],
  "instance": ["in", "stance"],
  "transport": ["trans", "port"],
  "scramble": ["scram", "ble"],
  "standard": ["stan", "dard"],
  "fragment": ["frag", "ment"],
  "blister": ["blis", "ter"],
  "splinter": ["splin", "ter"],

  // Common Digraphs (12 words)
  "teacher": ["tea", "cher"],
  "chicken": ["chic", "ken"],
  "shadow": ["sha", "dow"],
  "thunder": ["thun", "der"],
  "physics": ["phy", "sics"],
  "graphic": ["gra", "phic"],
  "washing": ["wash", "ing"],
  "weather": ["wea", "ther"],
  "shooter": ["shoo", "ter"],
  "chapter": ["chap", "ter"],
  "whisper": ["whis", "per"],
  "thinker": ["think", "er"],

  // Silent Letters (12 words)
  "writing": ["wri", "ting"],
  "knocking": ["knock", "ing"],
  "climbing": ["climb", "ing"],
  "wrapper": ["wrap", "per"],
  "science": ["sci", "ence"],
  "whistle": ["whis", "tle"],
  "autumn": ["au", "tumn"],
  "castle": ["cas", "tle"],
  "honest": ["ho", "nest"],
  "answer": ["an", "swer"],
  "foreign": ["fo", "reign"],
  "design": ["de", "sign"],

  // Complex Patterns (12 words)
  "action": ["ac", "tion"],
  "nation": ["na", "tion"],
  "motion": ["mo", "tion"],
  "station": ["sta", "tion"],
  "picture": ["pic", "ture"],
  "nature": ["na", "ture"],
  "future": ["fu", "ture"],
  "culture": ["cul", "ture"],
  "mission": ["mis", "sion"],
  "passion": ["pas", "sion"],
  "vision": ["vi", "sion"],
  "tension": ["ten", "sion"]
}

export default function PhonicsChart() {
  const [activeTab, setActiveTab] = useState("chart")
  const [isPracticing, setIsPracticing] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [timer, setTimer] = useState(0)
  const [speed, setSpeed] = useState(1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Move practiceSets inside component
  const practiceSets = {
    basic: phonicsData.shortVowels.map(item => item.split('-')[1].trim().split(',')[0])
      .concat(phonicsData.longVowels.map(item => item.split('-')[1].trim().split(',')[0])),
    intermediate: phonicsData.consonantBlendEndings.map(item => item.split('-')[1].trim().split(',')[0]),
    advanced: Object.keys(syllableBreakdown)
      .filter(word => syllableBreakdown[word].length > 1)
      .slice(0, 20)
  }

  // Create phonicsWords array from syllable breakdown keys
  const phonicsWords = Object.keys(syllableBreakdown)

  // Start practice session
  const startPractice = () => {
    setIsPracticing(true)
    setCurrentWordIndex(0)
    setTimer(0)

    // Start timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 0.1)
    }, 100)
  }

  // Stop practice session
  const stopPractice = () => {
    setIsPracticing(false)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  // Next word
  const nextWord = () => {
    if (currentWordIndex < phonicsWords.length - 1) {
      setCurrentWordIndex((prev) => prev + 1)
    } else {
      // Completed first round
      if (isPracticing) {
        setCurrentWordIndex(0) // Start second round
      }
    }
  }

  // Previous word
  const prevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex((prev) => prev - 1)
    }
  }

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Get current word and its syllables
  const currentWord = phonicsWords[currentWordIndex]
  const currentSyllables = syllableBreakdown[currentWord as keyof typeof syllableBreakdown] || []

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-2 text-center">
        <Badge variant="secondary">Level 0</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Phonics Chart</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Master English pronunciation with Wayne&apos;s phonics system. Speed and syllable management are key to
          fluency.
        </p>
      </div>

      <Tabs defaultValue="chart" className="w-full max-w-4xl" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chart">Phonics Chart</TabsTrigger>
          <TabsTrigger value="practice">Practice Reading</TabsTrigger>
          <TabsTrigger value="syllables">Syllable Management</TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Phonics Chart</CardTitle>
              <CardDescription>
                Study this chart to understand the relationship between letters and sounds in English.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full rounded-lg bg-muted p-4">
                <Image
                  src="/EnglishPhonicCode.png"
                  width={800}
                  height={600}
                  alt="Phonics Chart"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-6 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {/* Short Vowels Section */}
                <Card className="col-span-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">
                      Short Vowels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 gap-4">
                      {phonicsData.shortVowels.map((sound, i) => (
                        <li key={i} className="rounded-lg bg-muted p-4 text-base hover:bg-muted/80">
                          {sound}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Long Vowels Section */}
                <Card className="col-span-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">
                      Long Vowels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 gap-4">
                      {phonicsData.longVowels.map((sound, i) => (
                        <li key={i} className="rounded-lg bg-muted p-4 text-base hover:bg-muted/80">
                          {sound}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Consonant Blend Endings Section */}
                <Card className="col-span-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold">
                      Consonant Blend Endings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {phonicsData.consonantBlendEndings.map((sound, i) => (
                        <li key={i} className="rounded-lg bg-muted p-4 text-base hover:bg-muted/80">
                          {sound}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => setActiveTab("practice")}>
                Start Practice
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Practice Reading</CardTitle>
              <CardDescription>
                Master each phonics pattern through structured practice. Write each word in English and your language.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isPracticing ? (
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(phonicsData).map(([category, items]) => (
                      <Card key={category}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </CardTitle>
                          <CardDescription className="text-xs">
                            Practice these patterns and write translations
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {items.map((item, idx) => (
                              <div key={idx} className="rounded bg-muted p-2 text-center">
                                <div className="font-medium">{item.split('-')[1].trim().split(',')[0]}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {item.split('-')[0].trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-2 font-medium">Study Tips:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Write each word in English</li>
                      <li>Write its translation in your language</li>
                      <li>Practice the pronunciation pattern</li>
                      <li>Review daily for best results</li>
                    </ul>
                  </div>
                  <Button onClick={startPractice} className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Start Practice
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-8">
                  <div className="flex items-center justify-center rounded-lg bg-muted p-8 text-center">
                    <h3 className="text-5xl font-bold tracking-tight">{currentWord}</h3>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span className="font-mono text-lg">{timer.toFixed(1)}s</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="icon" onClick={prevWord}>
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        className="h-12 w-12 rounded-full"
                        onClick={stopPractice}
                      >
                        <Pause className="h-6 w-6" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={nextWord}>
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <div className="w-24">
                        <Slider
                          defaultValue={[1]}
                          min={0.5}
                          max={2}
                          step={0.1}
                          value={[speed]}
                          onValueChange={(value) => setSpeed(value[0])}
                        />
                      </div>
                      <span className="text-sm">{speed.toFixed(1)}x</span>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {currentWordIndex + 1}/{phonicsWords.length}
                      </span>
                    </div>
                    <Progress value={((currentWordIndex + 1) / phonicsWords.length) * 100} className="h-2" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="syllables" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{syllableDescription.title}</CardTitle>
              <CardDescription>
                {syllableDescription.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isPracticing ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(phonicsData).map(([category, items], idx) => (
                    <Card key={idx}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{category.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid w-full grid-cols-2 gap-2">
                          {Object.entries(syllableBreakdown)
                            .filter(([word]) => items.some(item => 
                              item.toLowerCase().includes(word.toLowerCase())
                            ))
                            .slice(0, 4)
                            .map(([word, syllables], i) => (
                              <div key={i} className="rounded bg-secondary p-2 text-center">
                                <div className="font-medium text-foreground">{word}</div>
                                <div className="text-xs text-muted-foreground">{syllables.join("-")}</div>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-8">
                  <div className="flex flex-col items-center justify-center rounded-lg bg-muted p-8 text-center">
                    <h3 className="text-2xl font-medium text-muted-foreground">Syllable Breakdown</h3>
                    <div className="mt-4 flex items-center gap-2">
                      {currentSyllables.map((syllable, index) => (
                        <div key={index} className="rounded-md bg-primary px-4 py-2 text-2xl font-bold text-primary-foreground">
                          {syllable}
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-4xl font-bold">{currentWord}</p>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <Button variant="outline" size="icon" onClick={prevWord}>
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full"
                      onClick={stopPractice}
                    >
                      <Pause className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextWord}>
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {currentWordIndex + 1}/{phonicsWords.length}
                      </span>
                    </div>
                    <Progress value={((currentWordIndex + 1) / phonicsWords.length) * 100} className="h-2" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
