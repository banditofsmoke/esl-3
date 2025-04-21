"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { BookingModal } from "./booking-modal"

export default function PricingPlans() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2 text-center">
          <Badge variant="secondary">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that best fits your learning needs.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Plan</CardTitle>
              <CardDescription>Pay as you go</CardDescription>
              <div className="mt-4 text-4xl font-bold">$40</div>
              <p className="text-sm text-muted-foreground">per week</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  4 lessons per week
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Access to course materials
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Weekly progress review
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsBookingOpen(true)}
              >
                Schedule a Consultation
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Full 6-Week Course</CardTitle>
              <CardDescription>Best value option</CardDescription>
              <div className="mt-4 text-4xl font-bold">$200</div>
              <p className="text-sm text-muted-foreground">one-time payment</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  30 lessons (5 per week)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Weekly progress tracking
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Personal learning plan
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsBookingOpen(true)}
              >
                Schedule a Consultation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}