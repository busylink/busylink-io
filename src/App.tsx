
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
// import Colors from './components/Colors'
import { HowTo } from './components/HowTo'
import { Architecture } from './components/Architecture'
import Newsletter from './components/Newsletter'
import { Footer } from './components/Footer'


function App() {

  return (
    <div class="bg-neutral-200">
      <Nav />
      <div class="lg:container lg:mx-auto">
        {/* <Colors /> */}
        <Hero />
        <Features />
        <Newsletter />
        <HowTo />
        <Architecture />
        <Footer />
      </div>
    </div>
  )
}

export default App
