
import Nav from './components/Nav'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import { Footer } from './components/Footer'
import { Provides } from './components/Provides'
import { WhatItIs } from './components/WhatItIs'


function App() {

  return (
    <div class="bg-neutral-200">
      <Nav />
      <div class="lg:container lg:mx-auto">
        {/* <Colors /> */}
        <Hero />
        <Newsletter />
        <Provides />
        <WhatItIs />
        
        
        {/* <Features /> */}
        {/* <HowTo /> */}
        {/* <Architecture /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
