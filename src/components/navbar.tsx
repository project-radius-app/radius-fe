import { useTheme } from "@/components/theme-provider"
import { Sun, Moon, Sparkles } from "lucide-react"

interface NavbarProps {
  currentPage: "home" | "contact"
  onNavigate: (page: "home" | "contact") => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/10 dark:border-white/5 dark:bg-black/20 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-purple-400 transition-colors">
            RADIUS
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <button
            onClick={() => onNavigate("home")}
            className={`text-sm font-medium transition-colors ${
              currentPage === "home"
                ? "text-purple-500 dark:text-purple-400"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className={`text-sm font-medium transition-colors ${
              currentPage === "contact"
                ? "text-purple-500 dark:text-purple-400"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact Us
          </button>

          <div className="h-4 w-px bg-white/10 dark:bg-white/5" />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 hover:bg-white/10 dark:hover:bg-white/5 border border-transparent hover:border-white/10 dark:hover:border-white/5 transition-all text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-500 transition-transform hover:-rotate-12" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
