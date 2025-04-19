"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function TeacherProfile() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="space-y-2 text-center">
        <Badge variant="secondary">About Wayne</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Teacher</h2>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Learn about Wayne Sletcher&apos;s experience and teaching philosophy.
        </p>
      </div>
      <Card className="mx-auto max-w-2xl overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full md:h-60 md:w-60">
              <Image
                src="/placeholder-user.jpg"
                alt="Wayne Sletcher"
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h3 className="text-2xl font-bold">Wayne Sletcher</h3>
                <p className="text-muted-foreground">English Language Instructor</p>
              </div>
              <p className="text-muted-foreground">
                With over a decade of experience teaching English to students worldwide, Wayne specializes in phonics,
                reading comprehension, and cultural understanding.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>TEFL Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Master&apos;s in Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
