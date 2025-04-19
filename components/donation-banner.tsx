"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Coffee, X } from "lucide-react"
import Link from "next/link"

export default function DonationBanner() {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const storedMinimized = localStorage.getItem("donationBannerMinimized")
    if (storedMinimized) {
      setIsMinimized(storedMinimized === "true")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("donationBannerMinimized", isMinimized.toString())
  }, [isMinimized])

  if (isHidden) return null

  return (
    <div
      className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isMinimized ? "w-12 rounded-tl-lg" : "w-full md:w-auto md:max-w-md md:rounded-tl-lg"
      } bg-primary text-primary-foreground shadow-lg`}
    >
      {isMinimized ? (
        <div
          className="flex h-12 w-12 cursor-pointer items-center justify-center"
          onClick={() => setIsMinimized(false)}
        >
          <Coffee className="h-6 w-6" />
        </div>
      ) : (
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <Coffee className="h-5 w-5" />
            <div className="flex-1">
              <p className="text-sm font-medium">Support this free educational resource</p>
              <p className="text-xs opacity-90">Help keep these materials free for everyone</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://ko-fi.com/waynesletcher" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary">
                Donate
              </Button>
            </Link>
            <button
              onClick={() => setIsMinimized(true)}
              className="rounded-full p-1 hover:bg-muted/20"
              aria-label="Minimize"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
