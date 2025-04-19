"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X, Coffee, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Methods", href: "/#methods" },
    { name: "Level 0: Phonics", href: "/#phonics" },
    { name: "Level 1: Stories", href: "/level-1" },
    { name: "Level 2: Intermediate", href: "/level-2" },
    { name: "Level 3: Advanced", href: "/level-3" },
    { name: "Level 4: High School", href: "/level-4" },
    { name: "Advanced Reading", href: "/advanced-reading" },
    { name: "Pricing", href: "/#pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-lg font-bold">Wayne Sletcher</span>
        </Link>

        <nav className="ml-auto hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto md:ml-6 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/#start-learning" className="hidden md:block">
            <Button size="sm">Start Learning</Button>
          </Link>

          <Link
            href="https://ko-fi.com/waynesletcher"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Coffee className="h-4 w-4" />
            <span>Donate</span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link href="/#start-learning" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full" size="sm">
                  Start Learning
                </Button>
              </Link>
              <Link
                href="https://ko-fi.com/waynesletcher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                <Coffee className="h-4 w-4" />
                <span>Support on Ko-fi</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
