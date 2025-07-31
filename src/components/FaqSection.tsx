'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  return (
    // Replaced the previous gradient with the exact one from your HeroSection
    // bg-gradient-to-br from-green-100 to-green-50
    <section className="py-20 bg-gradient-to-br from-green-100 to-green-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"> {/* Adjusted text color for contrast */}
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center mb-10 text-lg"> {/* Adjusted text color for contrast */}
          Find answers to some of the questions people often ask about SeaNeverDry.
        </p>

        <Accordion type="multiple" className="space-y-4">

          {/* Orders & Shipping */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              How long will it take to receive my order within Nigeria?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              we deliver Nationwide within 2 days of your order payment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              Do you offer free delivery Nationwide?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
             No. We do not offer free delivery Nationwide but only to few locations Abuja ( Inside city), Lagos ( ikeja ,ogba and Berger) Asaba and Onitsha
            </AccordionContent>
          </AccordionItem>

          {/* Returns & Exchanges */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              Is my order payment on delivery?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              No we don&apos;t offer payment on delivery. When you contact us and place your order we will send you company account details for your payment and when you make payment you shall WhatsApp us your payment receipt with your name, location and phone number for your delivery immediately.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              How do you offer international shipping
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              All our international orders are made through our WhatsApp number. We ship also through Nigerian post office ( Express courier).
            </AccordionContent>
          </AccordionItem>

          {/* Products */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              What materials are Rigirx Healthcare made from?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              All Rigirx Healthcare products are natural ingredients.
            </AccordionContent>
          </AccordionItem>

          {/* Payments & Security */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              Is Sea Never Dry Services ventures the manufacturing company of the herbal products
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
               No, Sea Never Dry Services ventures is the sole marketer of Rigirx Healthcare herbal products.
            </AccordionContent>
          </AccordionItem>

          {/* General Questions */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
             Is Rigirx Healthcare Nigeria a registered company in Nigeria?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
               Yes. It is a registered company in Nigeria.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              How do I contact Sea Never Dry Services Ventures?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              You can contact us through email <a href="mailto:seaneverdrynatural@gmail.com"></a> seaneverdrynatural@gmail.com or whatapp ‪+234 8033913721‬ or phone call ‪ <a href="tell:+2348121718772"></a> +2348121718772‬.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;