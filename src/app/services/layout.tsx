import ContactSection from "@/components/ContactSection/ContactSection";
import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceQuote from "@/components/ServiceQuote/ServiceQuote";
import { fetchServicesData } from '@/utils/fetchData'



export default async function ServiceLayout({ children }: { children: React.ReactNode }) {


    return (
        <main>

            {children}

            <ContactSection />
        </main>
    );
}
