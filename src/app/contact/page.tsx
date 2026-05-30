import type { Metadata } from 'next';
import ContactSection from '@/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with PrimeStack. Book a free consultation to discuss how we can help your business grow through custom software, AI automation, and business systems.',
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactSection />
    </main>
  );
}
