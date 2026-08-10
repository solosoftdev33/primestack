import type { Metadata } from 'next';
import ContactSection from '@/sections/ContactSection';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Request a free business audit. Tell us what is slowing you down and get a practical improvement plan from an engineer — no obligation.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactSection />
    </main>
  );
}
