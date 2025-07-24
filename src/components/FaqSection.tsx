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
              How long will it take to receive my order?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              Shipping times vary depending on your location and the shipping method chosen at checkout. Standard shipping usually takes <strong className="font-bold text-gray-900">3-7 business days</strong>. Expedited options are also available. You will receive a tracking number once your order ships.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              Yes, SeaNeverDry ships to many countries worldwide. Shipping costs and delivery times for international orders will be calculated at checkout.
            </AccordionContent>
          </AccordionItem>

          {/* Returns & Exchanges */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              We accept returns within <strong className="font-bold text-gray-900">30 days of delivery</strong> for a full refund on unused, unworn items in their original packaging. Please visit our <a href="/returns-policy" className="text-green-700 hover:underline">Returns & Exchanges</a> page for detailed instructions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              How do I care for my SeaNeverDry product?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              Each SeaNeverDry product comes with specific care instructions on its label. Generally, we recommend gentle washing and air drying to maintain product quality and longevity.
            </AccordionContent>
          </AccordionItem>

          {/* Products */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              What materials are SeaNeverDry products made from?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              Our products are crafted from high-quality, durable materials chosen for comfort, style, and longevity. Specific material compositions can be found on each individual product page description.
            </AccordionContent>
          </AccordionItem>

          {/* Payments & Security */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              What payment methods do you accept and is my payment secure?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              We accept major credit cards (Visa, Mastercard, American Express), PayPal, and other local payment options as available at checkout. Yes, your payment information is secure. We use SSL encryption and trusted payment gateways to protect your data.
            </AccordionContent>
          </AccordionItem>

          {/* General Questions */}
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              How can I contact SeaNeverDry customer support?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              You can reach our customer support team via email at <a href="mailto:support@SeaNeverDry.com" className="text-green-700 hover:underline">support@SeaNeverDry.com</a> or through our <a href="/contact" className="text-green-700 hover:underline">contact form</a> on the website. We aim to respond within 24 business hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-900 data-[state=open]:text-green-700"> {/* Adjusted text color for contrast */}
              Are SeaNeverDry products ethically sourced and sustainable?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700"> {/* Adjusted text color for contrast */}
              Yes, we are committed to ethical sourcing and sustainable practices throughout our supply chain. We strive to minimize our environmental footprint and work with partners who adhere to fair labor standards.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;