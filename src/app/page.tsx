import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import TaglineSection from '../components/TaglineSection/TaglineSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import CustomerQuoteSection from '../components/CustomerQuoteSection/CustomerQuoteSection'
import BookingSection from '../components/BookingSection/BookingSection'
import LogoSection from '../components/LogoSection/LogoSection'
import WorkWithUs from '../components/WorkWithUs/WorkWithUs'
import CustomMarquee from '../components/CustomMarquee/CustomMarquee'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TaglineSection />
      <ServicesSection />
      <CustomerQuoteSection />
      <BookingSection />
      <CustomMarquee />
      <LogoSection />
      <WorkWithUs />
      <Footer />
    </main>
  )
}
