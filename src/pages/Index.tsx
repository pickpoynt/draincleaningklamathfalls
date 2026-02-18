import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import EscondidoSlabLeakInfo from "@/components/landing/EscondidoSlabLeakInfo";
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
        <title>slab leak detection escondido | Escondido Slab Leak Pros</title>
        <meta name="description" content="slab leak detection escondido - Professional concrete slab leak detection in Escondido, CA. Expert sub-slab diagnostics and foundation plumbing solutions. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak detection escondido, Escondido CA slab repair, sub-slab water leak detection, foundation leak repair North County" />
        <link rel="canonical" href="https://slab-leak-detection-escondido.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Escondido Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "201 N Broadway",
              "addressLocality": "Escondido",
              "addressRegion": "CA",
              "postalCode": "92025",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.1247",
              "longitude": "-117.0809"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Escondido, California"
            },
            "priceRange": "$$$",
            "description": "Expert slab leak detection and sub-slab foundation repair services in Escondido, CA. Specialized in non-invasive electronic diagnostics and structural solutions."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Escondido Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Escondido, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Escondido Slab Detection Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Under-Slab Pipe Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak detection escondido - Escondido Slab Leak Pros" />
        <meta property="og:description" content="Advanced slab leak detection and sub-slab foundation repair in Escondido, CA. Protect your property with non-invasive diagnostics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-detection-escondido.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak detection escondido
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Escondido Slab Leak Pros</span>
            </>
          }
          subtitle="Escondido's premier experts in non-invasive slab leak detection and sub-slab foundation repair. We utilize advanced electronic acoustic technology and thermal imaging to pinpoint leaks with zero unnecessary demolition. Safeguarding North County homes."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80"
          badge="ESCONDIDO SLAB DETECTION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <EscondidoSlabLeakInfo />
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
