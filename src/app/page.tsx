import Hero from '../components/Hero/Hero'
import Introduction from '../components/Introduction/Introduction'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import CustomerQuote from '../components/CustomerQuote/CustomerQuote'
import BookingSection from '../components/BookingSection/BookingSection'
import CareerNote from '../components/CareerNote/CareerNote'
import CustomMarquee from '../components/CustomMarquee/CustomMarquee'
import { fetchHomeData } from '../utils/fetchData'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import DesktopMarquee from '@/components/DesktopMarquee/DesktopMarquee'
import styles from './page.module.css'
import Footer from '@/components/Footer/Footer'

export default async function Home() {
  const homePageId = 11
  const homePageData = await fetchHomeData(homePageId)
  const heroData = homePageData.acf.hero
  const introductionData = homePageData.acf.introduction
  const servicesData = homePageData.acf.services
  const buttonData = homePageData.acf.button_text
  const socialProofData = homePageData.acf.social_proof
  const bookingData = homePageData.acf.call_to_action
  const logoData = homePageData.acf.logos
  const careerData = homePageData.acf.career_note

  return (
    <main className={styles.Home}>
      <Hero heroData={heroData} />
      <Introduction introductionData={introductionData} />
      <ServicesSection servicesData={servicesData} />
      <div className={styles.ButtonWrapper}>
        <SecondaryButton buttonData={buttonData} />
      </div>
      <CustomerQuote socialProofData={socialProofData} />
      <BookingSection bookingData={bookingData} />
      <CustomMarquee logoData={logoData} />
      <DesktopMarquee logoData={logoData} />
      <CareerNote careerData={careerData} />
    </main>
  )
}
