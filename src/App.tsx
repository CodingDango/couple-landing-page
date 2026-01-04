import AppGallery from "./components/AppGallery"
import AppHeroSection from "./components/AppHeroSection"
import Timeline from "./components/Timeline"

function App() {
  return (
    <main className="w-full flex flex-col">
      <AppHeroSection/>
      <Timeline/>
      <AppGallery/>
    </main>
  )
}

export default App
