import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BartlettPlumbingInfo from "@/components/landing/BartlettPlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>plumber bartlett il Location</title>
        <meta name="description" content="plumber bartlett il Location - Specialized plumbing solutions, leak detection & residential infrastructure services in Bartlett, IL. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="plumber bartlett il, Bartlett plumber, plumbing repair Bartlett, emergency plumber Bartlett, Cook County plumbing, DuPage County plumbing" />
        <link rel="canonical" href="https://bartlett-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bartlett Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bartlett",
              "addressRegion": "IL",
              "postalCode": "60103",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.9792",
              "longitude": "-88.1848"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Bartlett, IL"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in Bartlett, Illinois. Specialized in technical diagnostics, infrastructure restoration, and master-licensed care for Tri-County property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bartlett Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bartlett, Illinois"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bartlett Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cook & DuPage Co. Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bartlett District Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Hard Water Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber bartlett il Location - Bartlett Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in Bartlett, Illinois. Technical restoration and infrastructure maintenance for Tri-County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bartlett-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber bartlett il Location
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Bartlett Plumbing Pros</span>
            </>
          }
          subtitle="Bartlett's trusted authority for resilient home infrastructure in the Tri-County area. We provide precision diagnostics, technical restoration, and master-licensed support for Cook, DuPage, and Kane County property owners. Illinois Engineering Excellence."
          image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000"
          badge="BARTLETT AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <BartlettPlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
