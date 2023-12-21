import React from 'react'
import ServiceHero from "@/components/service-hero/ServiceHero";
import ServiceQuote from "@/components/service-quote/ServiceQuote";
import ServiceCards from "@/components/service-cards/ServiceCards";
import ServiceShowcase from "@/components/service-showcase/ServiceShowcase";
import { fetchServicesData } from '@/api/wordpress/api'

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