import { useState } from "react"
import { GlassPanel } from "@/components/glass-panel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react"

interface ContactProps {
  onBackToHome: () => void
}

export function Contact({ onBackToHome }: ContactProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return

    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }, 1500)
  }

  return (
    <div className="space-y-12 py-8 md:py-16 max-w-5xl mx-auto">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground via-purple-400 to-indigo-500 bg-clip-text text-transparent pb-1">
          Get in Touch
        </h1>
        <p className="text-muted-foreground">
          Have questions or want to collaborate? Send us a message and we'll reply shortly.
        </p>
      </section>

      {isSubmitted ? (
        <div className="flex justify-center animate-scale-in">
          <GlassPanel className="text-center p-12 max-w-md space-y-6 border-purple-500/20 bg-purple-500/5">
            <div className="mx-auto h-16 w-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thank you for reaching out. We have received your query and our team will get back to you within 24 hours.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl"
                onClick={onBackToHome}
              >
                Back to Home
              </Button>
              <Button variant="outline" className="w-full rounded-xl" onClick={() => setIsSubmitted(false)}>
                Send Another
              </Button>
            </div>
          </GlassPanel>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <GlassPanel className="space-y-8 bg-white/5 dark:bg-black/10">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Contact Info</h3>
                <p className="text-xs text-muted-foreground">Reach us directly through any of these coordinates.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Email</h4>
                    <p className="text-sm font-medium">hello@radius-design.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Phone</h4>
                    <p className="text-sm font-medium">+1 (555) 723-4871</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Office</h4>
                    <p className="text-sm font-medium leading-relaxed">
                      100 Crystalline Way,<br />
                      Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel className="bg-gradient-to-tr from-purple-500/5 to-indigo-500/5 border-purple-500/10 p-6 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-purple-400 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Looking for job opportunities? Check out our careers section or send a cover letter to our email directly.
              </p>
            </GlassPanel>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <GlassPanel className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/5 border-white/10 focus-visible:ring-purple-500/40 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-white/10 focus-visible:ring-purple-500/40 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-semibold">Subject (Optional)</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="bg-white/5 border-white/10 focus-visible:ring-purple-500/40 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message details here..."
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/5 border-white/10 focus-visible:ring-purple-500/40 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-purple-500/10 h-11"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </GlassPanel>
          </div>
        </div>
      )}
    </div>
  )
}
