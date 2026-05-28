import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverEffect?: boolean
}

export function GlassPanel({ children, className, hoverEffect = false, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300 dark:border-white/5 dark:bg-black/25 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
        hoverEffect && "hover:border-white/20 hover:bg-white/15 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] dark:hover:border-white/10 dark:hover:bg-black/35 dark:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:translate-y-[-2px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
