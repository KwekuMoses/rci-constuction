import ContactSection from "@/components/contact-section/ContactSection";



export default async function ServiceLayout({ children }: { children: React.ReactNode }) {


    return (
        <main>
            {children}
            <ContactSection />
        </main>
    );
}
