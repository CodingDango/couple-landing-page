import AppGallery from "./components/AppGallery"
import AppHeroSection from "./components/AppHeroSection"
import EditorialStats from "./components/EditorialStats"
import Footer from "./components/Footer"
import HeartSection from "./components/HeartSection"
import Timeline from "./components/Timeline"

function App() {
  return (
    <main className="w-full flex flex-col">
      <AppHeroSection/>
      <Timeline/>
      <AppGallery/>
      <EditorialStats/>
      <HeartSection/>
      <Footer/>
    </main>
  )
}

export default App
