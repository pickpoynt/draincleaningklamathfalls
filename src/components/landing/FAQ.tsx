import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency drain pipe installation in Plano?",
    answer: "Yes. Our Plano teams are available 24/7 for technical drainage diagnostics and main line restoration. We provide rapid support across Collin County to stabilize your property and stop yard flooding."
  },
  {
    question: "How do you install pipes in Plano's heavy clay soil?",
    answer: "We utilize specialized high-density polyethylene (HDPE) and PVC materials engineered to withstand soil shifting. Our installation process includes proper bedding and grade correction to ensure long-term flow integrity."
  },
  {
    question: "Are your technicians licensed for Texas drainage projects?",
    answer: "Absolutely. Our technicians are fully licensed master plumbers and drainage specialists who adhere strictly to Texas building codes and Plano municipal standards."
  },
  {
    question: "How long does a typical sewer line replacement in Plano take?",
    answer: "Most residential drain pipe installations can be completed in 1-3 days depending on the scope. Our team focuses on rapid, efficient installation to minimize disruption to your property."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Plano <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about drain pipe installation and sewer line replacement in Plano, Texas.
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
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6 uppercase tracking-tight">
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
