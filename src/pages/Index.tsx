import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PlanoDrainInstallationInfo from "@/components/landing/PlanoDrainInstallationInfo";
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
        <title>drain pipe installation plano tx | Plano Drain Pipe Pros</title>
        <meta name="description" content="drain pipe installation plano tx - Professional drain pipe installation in Plano, TX. Expert sewage line replacement and residential drainage solutions. Call (877) 792-1410." />
        <meta name="keywords" content="drain pipe installation plano tx, Plano TX drain repair, sewer line installation, residential drainage Plano, French drain Plano" />
        <link rel="canonical" href="https://drain-pipe-installation-plano.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Plano Drain Pipe Pros",
            "image": "https://images.unsplash.com/photo-1541944743827-e04bb645d99d?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5800 Tennyson Pkwy",
              "addressLocality": "Plano",
              "addressRegion": "TX",
              "postalCode": "75024",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0198",
              "longitude": "-96.6989"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Plano, Texas"
            },
            "priceRange": "$$$",
            "description": "Expert drain pipe installation and sewer line replacement services in Plano, TX. Specialized in residential drainage solutions and yard drainage systems."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Drain Pipe Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Plano Drain Pipe Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Plano, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plano Drainage Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Line Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "French Drain Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Storm Drain Management"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="drain pipe installation plano tx - Plano Drain Pipe Pros" />
        <meta property="og:description" content="Professional drain pipe installation and sewer line replacement in Plano, TX. Protect your property with advanced drainage solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drain-pipe-installation-plano.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541944743827-e04bb645d99d?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              drain pipe installation plano tx
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Plano Drain Pipe Pros</span>
            </>
          }
          subtitle="Plano's premier experts in master-grade drain pipe installation and sewer main replacement. We design high-performance drainage systems tailored for North Texas soils, ensuring long-term structural integrity. Engineering excellence for Collin County."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
          badge="PLANO DRAINAGE INSTALLATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <PlanoDrainInstallationInfo />
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

