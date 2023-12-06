import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Introduction from '../components/Introduction/Introduction'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import CustomerQuoteSection from '../components/CustomerQuoteSection/CustomerQuoteSection'
import BookingSection from '../components/BookingSection/BookingSection'
// import LogoSection from '../components/LogoSection/LogoSection'
import WorkWithUs from '../components/WorkWithUs/WorkWithUs'
import CustomMarquee from '../components/CustomMarquee/CustomMarquee'
import Footer from '../components/Footer/Footer'
import { fetchData } from '../utils/fetchData'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'


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
    <main>
      <Hero heroData={heroData} />
      <Introduction introductionData={introductionData} />
      <ServicesSection servicesData={servicesData} />
      <SecondaryButton buttonData={buttonData} />
      <CustomerQuoteSection socialProofData={socialProofData} />
      <BookingSection bookingData={bookingData} />
      <CustomMarquee logoData={logoData} />
      <WorkWithUs careerData={careerData} />
    </main>
  )
}
