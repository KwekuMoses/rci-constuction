import React from 'react'
import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceQuote from "@/components/ServiceQuote/ServiceQuote";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import ServiceShowcase from "@/components/ServiceShowcase/ServiceShowcase";
import { fetchServicesData } from '@/utils/fetchData'

interface Props {
    id: number
}


const ServicePage = async ({ id }: Props) => {
    const servicesData = await fetchServicesData(id)
    const acfData = servicesData.acf.service
    const { hero, intro, cards, quote_text, showcase, contact } = acfData

    return (
        <div>
            <ServiceHero heroUrl={hero} intro={intro} />
            <ServiceCards cards={cards} />
            <ServiceQuote quote={quote_text} />
            <ServiceShowcase showcase={showcase} />
        </div>
    )
}

export default ServicePage