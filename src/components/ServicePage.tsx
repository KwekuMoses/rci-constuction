import React from 'react'
import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceQuote from "@/components/ServiceQuote/ServiceQuote";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import { fetchServicesData } from '@/utils/fetchData'

interface Props {
    id: number
}


const ServicePage = async ({ id }: Props) => {
    const servicesData = await fetchServicesData(id)
    const acfData = servicesData.acf.service
    const { hero, intro, cards, quote_text, showcase, contact } = acfData
    console.log(cards)



    return (
        <div>
            <ServiceHero heroUrl={hero} intro={intro} />
            <ServiceCards cards={cards} />
            <ServiceQuote />
        </div>
    )
}

export default ServicePage