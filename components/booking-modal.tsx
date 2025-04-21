'use client'

import { useState, useEffect } from 'react'
import { Loader } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

function CalendarContent() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <Loader className="h-8 w-8 text-primary animate-spin" />
        </div>
      )}
      <iframe 
        src="https://cal.com/sletcher-systems"
        className="h-[600px] w-full border-0"
        title="Scheduling Calendar"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="text-xl font-semibold">
              Schedule a Consultation
            </h3>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-4">
            <CalendarContent />
          </div>
        </div>
      </div>
    </div>
  )
}