import Carrousel from './components/Carrousel'
import DataInsights from './components/DataInsights'
import Footer from './components/Footer'
import Header from './components/Header'
import HealthEquity from './components/HealthEquity'
import LastNews from './components/LastNews'
import WhoWeAre from './components/WhoWeAre'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Carrousel />
      <WhoWeAre />
      <HealthEquity />
      <DataInsights />
      <LastNews />
      <Footer />
    </main>
  )
}
