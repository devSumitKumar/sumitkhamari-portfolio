import React from 'react';
import { Navigation, About, Skills, Timeline, Resume, Footer, ClickSpark } from './components';

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <ClickSpark
      >
        <About />
        <Skills />
        <Timeline />
        <Resume />
        <Footer />
      </ClickSpark>

    </div>
  )
}

export default App
