import { useState } from "react"
import { GlassPanel } from "@/components/glass-panel"
import { Button } from "@/components/ui/button"
import { Sparkles, Layers, Sliders, ArrowRight } from "lucide-react"

interface HomeProps {
  onNavigateToContact: () => void
}

export function Home({ onNavigateToContact }: HomeProps) {
  const [blurAmount, setBlurAmount] = useState<number>(12)
  const [opacityAmount, setOpacityAmount] = useState<number>(20)

  return (
    <div className="space-y-16 py-8 md:py-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          <span>Introducing Radius Design</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-purple-400 to-indigo-500 bg-clip-text text-transparent pb-2">
          Elegant Interfaces Built for the Future
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
          A minimal, glassmorphic design language designed with React, Tailwind CSS, and shadcn UI. Gorgeous in dark theme, responsive by default.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-purple-500/20 px-8 h-12"
            onClick={onNavigateToContact}
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/10 dark:border-white/5 rounded-xl h-12"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Core Features</h2>
          <p className="text-muted-foreground">Exquisite design details that make interfaces feel premium.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassPanel hoverEffect className="space-y-4">
            <div className="h-10 w-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 border border-purple-500/25">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Glassmorphism</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Backdrop blurs, multi-layered translucencies, and thin light-refracting borders that blend naturally with background lighting.
            </p>
          </GlassPanel>

          <GlassPanel hoverEffect className="space-y-4">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 border border-indigo-500/25">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">shadcn UI Integrations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equipped with accessibility-tested components built on Radix primitives, restyled to incorporate modern translucent design.
            </p>
          </GlassPanel>

          <GlassPanel hoverEffect className="space-y-4">
            <div className="h-10 w-10 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-400 border border-teal-500/25">
              <Sliders className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">Dynamic Theme Engine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smooth custom color-mode switching. Transitions from deep space-like dark aesthetics to pristine crystalline light layout elements.
            </p>
          </GlassPanel>
        </div>
      </section>

      {/* Interactive Glass sandbox preview */}
      <section className="pt-8">
        <GlassPanel className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 dark:bg-black/15 border-white/5">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-purple-400">Interactive Demo</span>
              <h2 className="text-2xl font-bold">Glass Sandbox</h2>
              <p className="text-sm text-muted-foreground">
                Customize your background blur and card overlay density in real time to visualize the transparency dynamics.
              </p>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Backdrop Blur</span>
                  <span>{blurAmount}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Background Opacity</span>
                  <span>{opacityAmount}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={opacityAmount}
                  onChange={(e) => setOpacityAmount(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center py-6 relative overflow-hidden rounded-xl border border-white/5 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/10">
            {/* Background design elements strictly inside the frame */}
            <div className="absolute top-[20%] left-[25%] h-24 w-24 rounded-full bg-purple-500 animate-bounce duration-[6000ms]" />
            <div className="absolute bottom-[20%] right-[25%] h-20 w-20 rounded-full bg-teal-400 animate-pulse duration-[4000ms]" />

            <div
              className="z-10 w-[80%] max-w-[340px] p-6 rounded-xl border border-white/15 dark:border-white/5 shadow-2xl transition-all"
              style={{
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                backgroundColor: `rgba(var(--glass-bg-rgb, 120, 120, 120), ${opacityAmount / 100})`,
              }}
            >
              <div className="space-y-4">
                <div className="h-6 w-16 rounded-md bg-purple-500/20 border border-purple-500/30 text-[10px] flex items-center justify-center text-purple-400 font-bold uppercase tracking-wider">
                  Live View
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-lg">Crystalline Layer</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Watch how the animated colorful spheres behind this card refract light based on your settings.
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </section>
    </div>
  )
}
