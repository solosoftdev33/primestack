'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { FadeUp } from '@/components/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How much does a custom software project cost?',
    answer:
      'Project costs vary based on scope and complexity. Most projects range from $5,000 to $50,000+. We offer a free consultation to understand your needs and provide a detailed estimate tailored to your business goals and budget.',
  },
  {
    question: 'Do you build websites only?',
    answer:
      'No. While we build high-converting websites, we specialize in complete business systems including AI automation, CRM/ERP implementation, custom software, mobile apps, and business process optimization. We build whatever your business needs to grow.',
  },
  {
    question: 'Can you automate existing business processes?',
    answer:
      'Absolutely. We analyze your current workflows, identify manual bottlenecks, and implement automation solutions that can reduce manual work by up to 60%. From lead follow-up to inventory management, we automate what matters most.',
  },
  {
    question: 'Do you work with restaurants and local businesses?',
    answer:
      'Yes. We have extensive experience working with restaurants, HVAC companies, contractors, retail stores, and other local businesses. We understand the unique challenges of local businesses and build solutions that drive real growth.',
  },
  {
    question: 'Can you integrate with existing systems?',
    answer:
      'Yes. We specialize in integrating with existing tools and platforms including Odoo, popular CRMs, payment systems, and custom databases. Our solutions are designed to enhance your current workflow, not replace everything.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. We believe in long-term partnerships. We offer ongoing support, maintenance, performance monitoring, and continuous optimization to ensure your systems keep delivering results as your business grows.',
  },
];

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border select-none">
      <button
        id={`faq-toggle-${index}`}
        type="button"
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-[15px] sm:text-[17px] font-bold text-foreground pr-4 tracking-tight group-hover:text-accent transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4.5 h-4.5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-toggle-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-[15px] text-muted-foreground pb-6 leading-relaxed font-sans max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionContainer id="faq" background="white">
      <AnimatedHeading as="h2" align="center">
        Frequently Asked Questions
      </AnimatedHeading>
      <p className="text-muted-foreground text-center mt-4">
        Everything you need to know about working with PrimeStack.
      </p>

      <FadeUp delay={0.2}>
        <div className="max-w-3xl mx-auto mt-16">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </FadeUp>
    </SectionContainer>
  );
}
