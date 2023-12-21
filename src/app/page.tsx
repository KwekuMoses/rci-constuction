import Hero from '../components/hero/Hero'
import Introduction from '../components/introduction/Introduction'
import ServicesSection from '../components/service-section/ServicesSection'
import CustomerQuote from '../components/customer-quote/CustomerQuote'
import BookingSection from '../components/booking-section/BookingSection'
import CareerNote from '../components/career-note/CareerNote'
import CustomMarquee from '../components/custom-marquee/CustomMarquee'
import { fetchPageData } from '../api/wordpress/api'
import SecondaryButton from '@/components/secondary-button/SecondaryButton'
import DesktopMarquee from '@/components/desktop-marquee/DesktopMarquee'
import styles from './page.module.css'


export default async function Home() {
  const homePageId = 11
  const homePageData = await fetchPageData(homePageId)
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
