'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionContainer, AnimatedHeading } from '@/components/ui';
import { FadeUp } from '@/components/animations';
import { faqItems } from '@/lib/site-content';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: readonly FAQItem[] = faqItems;

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
