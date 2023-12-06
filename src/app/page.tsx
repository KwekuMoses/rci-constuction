import Hero from '../components/Hero/Hero'
import Introduction from '../components/Introduction/Introduction'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import CustomerQuote from '../components/CustomerQuote/CustomerQuote'
import BookingSection from '../components/BookingSection/BookingSection'
import CareerNote from '../components/CareerNote/CareerNote'
import CustomMarquee from '../components/CustomMarquee/CustomMarquee'
import { fetchData } from '../utils/fetchData'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import styles from './page.module.css'

export default async function Home() {
  const homePageId = 11
  const homePageData = await fetchData(homePageId)
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
      <CareerNote careerData={careerData} />
    </main>
  )
}
