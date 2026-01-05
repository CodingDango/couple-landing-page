import AppGallery from "./components/AppGallery"
import AppHeroSection from "./components/AppHeroSection"
import EditorialStats from "./components/EditorialStats"
import HeartSection from "./components/HeartSection"
import InteractiveHeart from "./components/InteractiveHeart"
import Timeline from "./components/Timeline"

function App() {
  return (
    <main className="w-full flex flex-col">
      <AppHeroSection/>
      <Timeline/>
      <AppGallery/>
      <EditorialStats/>
      <HeartSection/>
    </main>
  )
}

export default App
