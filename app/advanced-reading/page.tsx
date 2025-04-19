import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AdvancedReading from "@/components/advanced-reading"

export default function AdvancedReadingPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <AdvancedReading />
    </div>
  )
}
