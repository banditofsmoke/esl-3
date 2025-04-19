"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPlans() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="space-y-2 text-center">
        <Badge variant="secondary">Pricing</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Choose the plan that best fits your learning needs.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>Perfect for self-paced learners</CardDescription>
            <div className="mt-4 text-4xl font-bold">Free</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Access to all phonics materials
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Basic story access
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Community support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardDescription>For dedicated language learners</CardDescription>
            <div className="mt-4 text-4xl font-bold">$29.99</div>
            <p className="text-sm text-muted-foreground">per month</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Everything in Basic
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Advanced story access
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Weekly group sessions
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Progress tracking
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription>For intensive learning needs</CardDescription>
            <div className="mt-4 text-4xl font-bold">$99.99</div>
            <p className="text-sm text-muted-foreground">per month</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Everything in Premium
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                1-on-1 tutoring sessions
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Custom learning plan
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Direct instructor access
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                Priority support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
