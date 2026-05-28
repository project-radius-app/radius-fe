import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { GlassBackground } from '@/components/glass-background'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Home } from '@/pages/home'
import { Contact } from '@/pages/contact'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home')

  return (
    <ThemeProvider defaultTheme="dark" storageKey="radius-ui-theme">
      <div className="relative min-h-screen flex flex-col antialiased">
        <GlassBackground />
        
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {currentPage === 'home' ? (
            <Home onNavigateToContact={() => setCurrentPage('contact')} />
          ) : (
            <Contact onBackToHome={() => setCurrentPage('home')} />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
