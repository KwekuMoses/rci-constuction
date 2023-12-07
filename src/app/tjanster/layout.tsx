import ContactSection from "@/components/ContactSection/ContactSection";



export default async function ServiceLayout({ children }: { children: React.ReactNode }) {


    return (
        <main>
            {children}
            <ContactSection />
        </main>
    );
}
