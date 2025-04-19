"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface SummarySubmissionProps {
  level: string
}

export default function SummarySubmission({ level }: SummarySubmissionProps) {
  const { toast } = useToast()
  const [sentences, setSentences] = useState<string[]>(["", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>(["", "", "", ""])
  const [submissionCount, setSubmissionCount] = useState(0)

  const handleSentenceChange = (index: number, value: string) => {
    const newSentences = [...sentences]
    newSentences[index] = value
    setSentences(newSentences)

    // Clear error when typing
    if (errors[index]) {
      const newErrors = [...errors]
      newErrors[index] = ""
      setErrors(newErrors)
    }
  }

  const validateSummary = () => {
    const newErrors = ["", "", "", ""]
    let isValid = true

    // Check if any sentence is empty
    sentences.forEach((sentence, index) => {
      if (!sentence.trim()) {
        newErrors[index] = "This sentence cannot be empty"
        isValid = false
      }
    })

    // Check if sentences end with proper punctuation
    sentences.forEach((sentence, index) => {
      if (sentence.trim() && !sentence.trim().match(/[.!?]$/)) {
        newErrors[index] = "Sentence must end with proper punctuation (. ! ?)"
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async () => {
    if (!validateSummary()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Increment submission count
      setSubmissionCount((prev) => prev + 1)

      toast({
        title: "Summary Submitted!",
        description: "Your 4-sentence summary has been recorded.",
        variant: "default",
      })

      // Reset form
      setSentences(["", "", "", ""])
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your summary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>4-Sentence Summary</CardTitle>
        <CardDescription>Create a summary following the 4-sentence structure method</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { label: "Sentence 1: Topic", placeholder: "Write your topic sentence..." },
            { label: "Sentence 2: Supporting", placeholder: "Write your first supporting sentence..." },
            { label: "Sentence 3: Supporting", placeholder: "Write your second supporting sentence..." },
            { label: "Sentence 4: Opinion/Conclusion", placeholder: "Write your opinion or conclusion..." },
          ].map((field, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor={`sentence-${index}`} className="text-sm font-medium">
                  {field.label}
                </label>
                {sentences[index] && !errors[index] && <CheckCircle2 className="h-4 w-4 text-green-500" />}
              </div>
              <Textarea
                id={`sentence-${index}`}
                placeholder={field.placeholder}
                value={sentences[index]}
                onChange={(e) => handleSentenceChange(index, e.target.value)}
                className={errors[index] ? "border-red-500" : ""}
              />
              {errors[index] && (
                <div className="flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle className="h-3 w-3" />
                  <span>{errors[index]}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Submissions</span>
            <span className="text-sm text-slate-600">{submissionCount} summaries</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Submit 4-8 summaries weekly to complete the program on time.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-slate-800 hover:bg-slate-700">
          {isSubmitting ? "Submitting..." : "Submit Summary"}
        </Button>
      </CardFooter>
    </Card>
  )
}
