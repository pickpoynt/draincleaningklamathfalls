import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency slab leak detection in Escondido?",
    answer: "Yes. Our Escondido teams are available 24/7 for technical acoustic diagnostics and sub-slab leak restoration. We provide rapid support across North County to stabilize your foundation and stop water damage."
  },
  {
    question: "How do you find water leaks under Escondido concrete slabs?",
    answer: "We utilize non-invasive electronic sensors and sonic correlation. By identifying the specific acoustic frequency of the leak within the foundation, we can pinpoint the failure without excavating your entire floor."
  },
  {
    question: "Are your technicians licensed for Southern California projects?",
    answer: "Absolutely. Our technicians are fully licensed and insured professionals who adhere strictly to California plumbing codes and Escondido building standards."
  },
  {
    question: "How long does a typical Escondido slab leak detection take?",
    answer: "Most slab leak diagnostics can be completed in a few hours. Our team focuses on rapid, non-destructive identifying of the leak source to provide you with immediate repair options."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Escondido <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about slab leak detection and sub-slab foundation repair in Escondido, California.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
