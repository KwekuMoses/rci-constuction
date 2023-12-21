import Hero from '../components/hero/Hero'
import Introduction from '../components/introduction/Introduction'
import ServicesSection from '../components/service-section/ServicesSection'
import CustomerQuote from '../components/customer-quote/CustomerQuote'
import BookingSection from '../components/booking-section/BookingSection'
import CareerNote from '../components/career-note/CareerNote'
import CustomMarquee from '../components/custom-marquee/CustomMarquee'
import SecondaryButton from '@/components/secondary-button/SecondaryButton'
import DesktopMarquee from '@/components/desktop-marquee/DesktopMarquee'
import styles from './page.module.css'

import { fetchHomePageData } from '../api/wordpress/api'

export default async function Home() {

  const homeData = await fetchHomePageData("hem")
  const { buttonText, services, hero, introduction, logos, callToAction, socialProof, careerNote } = homeData.data.pageBy.home

  return (
    <main className={styles.Home}>
      <Hero heroData={hero} />
      <Introduction introductionData={introduction} />
      <ServicesSection servicesData={services} />
      <div className={styles.ButtonWrapper}>
        <SecondaryButton buttonData={buttonText} />
      </div>
      <CustomerQuote socialProofData={socialProof} />
      <BookingSection bookingData={callToAction} />
      <CustomMarquee logoData={logos} />
      <DesktopMarquee logoData={logos} />
      <CareerNote careerData={careerNote} />
    </main>
  )
}
