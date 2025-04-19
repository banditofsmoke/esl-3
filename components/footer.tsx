"use client"

import Link from "next/link"
import { BookOpen, Linkedin, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-bold">Wayne Sletcher</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Personalized English instruction with a focus on interactive learning and cultural understanding.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about" },
                { name: "Teaching Methods", href: "/#methods" },
                { name: "Level 0: Phonics", href: "/#phonics" },
                { name: "Level 1: Stories", href: "/level-1" },
                { name: "Level 2: Intermediate", href: "/level-2" },
                { name: "Level 3: Advanced", href: "/level-3" },
                { name: "Level 4: High School", href: "/level-4" },
                { name: "Advanced Reading", href: "/advanced-reading" },
                { name: "Pricing", href: "/#pricing" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Reading Materials", href: "/resources" },
                { name: "Phonics Chart", href: "/#phonics" },
                { name: "Story Collection", href: "/level-1" },
                { name: "Intermediate Stories", href: "/level-2" },
                { name: "Advanced Stories", href: "/level-3" },
                { name: "High School Resources", href: "/level-4" },
                { name: "Advanced Resources", href: "/advanced-reading" },
                { name: "Perfect English Grammar", href: "https://www.perfect-english-grammar.com/", external: true },
                { name: "Engoo Daily News", href: "https://engoo.com/app/daily-news", external: true },
              ].map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a
                  href="https://www.linkedin.com/in/waynesletcher/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  linkedin.com/in/waynesletcher
                </a>
              </li>
              <li>
                <a
                  href="https://ko-fi.com/waynesletcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
                >
                  <Coffee className="h-4 w-4" />
                  Support on Ko-fi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Wayne Sletcher. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
