import React from 'react'
import Navbar from '../components/Navbar'
import WelcomeSection from '../components/WelcomeSection'
import TemplateSection from '../components/TemplateSection'
import HighlightSection from '../components/HighlightSection'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <WelcomeSection />
        <TemplateSection />
        <HighlightSection />
      </main>
    </div>
  )
}

export default HomePage