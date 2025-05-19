import React from 'react';
import { Navigation, About, Skills, Timeline, Resume,Footer } from './components';

function App() {

  return (
     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <About/>
      <Skills/>
      <Timeline/>
      <Resume/>
      <Footer/>
    </div>
  )
}

export default App
