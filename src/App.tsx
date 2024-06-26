
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
// import Colors from './components/Colors'
import { HowTo } from './components/HowTo'
import { Architecture } from './components/Architecture'
import Newsletter from './components/Newsletter'


function App() {

  return (
    <div class="bg-neutral-200">
      <Nav />
      <div class="lg:container lg:mx-auto">
        {/* <Colors /> */}
        <Hero />
        <Newsletter />
        <Features />
        <HowTo />
        <Architecture />
      </div>
    </div>
  )
}

export default App
