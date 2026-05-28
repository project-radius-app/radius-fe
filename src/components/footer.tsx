
export function Footer() {
  return (
    <footer className="border-t border-white/10 dark:border-white/5 py-8 mt-auto backdrop-blur-sm bg-white/5 dark:bg-black/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RADIUS. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Design Guidelines</a>
        </div>
      </div>
    </footer>
  )
}
