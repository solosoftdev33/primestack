'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { Cpu, Database, Mail } from 'lucide-react';

const techStack = [
  'Python',
  'FastAPI',
  'Flutter',
  'Odoo',
  'PostgreSQL',
  'Next.js',
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0 opacity-70" />
      
      {/* Secondary ambient blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-slow" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              ROI-Driven Systems
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="max-w-[650px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-foreground leading-[1.02] mb-6 font-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              We Build Systems That Make Businesses More Profitable.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="max-w-[550px] text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Websites. Automation. ERP. AI. <br className="hidden sm:inline" />
              Everything designed around growth, efficiency, and measurable ROI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                id="hero-cta-consultation"
                href="#contact"
                variant="primary"
                size="lg"
              >
                Book a Strategy Call
              </Button>
              <Button
                id="hero-cta-success-stories"
                href="#success-stories"
                variant="outline"
                size="lg"
              >
                View Success Stories
              </Button>
            </motion.div>

            {/* Social Proof Strip */}
            <motion.div
              className="flex flex-col gap-3 pt-6 border-t border-border w-full max-w-[550px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Trusted Technologies
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-foreground/90 font-semibold">
                {techStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    {idx > 0 && <span className="text-white/10 font-light">•</span>}
                    <span className="hover:text-accent transition-colors cursor-default">{tech}</span>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Abstract Layered SaaS Workflow Mockups */}
          <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center mt-12 lg:mt-0 select-none">
            
            {/* Card 1: Database Node Sync (Dark Mode) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-8 left-0 w-60 bg-muted text-foreground rounded-[20px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                    <Database size={10} className="text-white/50" />
                    ERP Sync Node
                  </span>
                </div>
                <span className="text-[9px] font-mono text-white/40">200 OK</span>
              </div>
              <div className="font-mono text-[10px] text-white/70 space-y-1.5 bg-white/[0.03] p-3 rounded-xl border border-white/[0.05]">
                <div><span className="text-emerald-400">CONNECT</span> odoo_db</div>
                <div><span className="text-blue-400">POST</span> /api/v1/leads</div>
                <div className="text-white/30">{"// Syncing database records..."}</div>
              </div>
            </motion.div>

            {/* Card 2: CRM Lead Card (Luxury Dark Mode) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 right-4 w-68 bg-card border border-white/[0.08] rounded-[20px] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] z-20"
            >
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3.5">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold flex items-center gap-1.5">
                  <Mail size={10} className="text-muted-foreground" />
                  Live Lead Feed
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  Qualified
                </span>
              </div>
              <h4 className="text-[13.5px] font-bold text-foreground tracking-tight">Sarah Jenkins</h4>
              <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">Apex Commercial HVAC Services</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Estimated ROI</span>
                <span className="text-[14px] font-extrabold text-accent">$14,850/mo</span>
              </div>
            </motion.div>

            {/* Card 3: AI Conversational Chat Bot (Luxury Dark Mode) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-2 left-6 w-80 bg-card border border-white/[0.08] rounded-[20px] p-5 shadow-[0_24px_55px_rgba(0,0,0,0.5)] z-30"
            >
              <div className="flex items-center gap-2 mb-3.5 border-b border-border pb-2.5">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-[9px] text-accent-foreground font-extrabold shrink-0">
                  <Cpu size={10} className="text-accent-foreground" />
                </div>
                <span className="text-[10px] text-muted-foreground font-bold">Scheduling Agent</span>
              </div>
              <div className="space-y-3">
                <div className="bg-muted text-muted-foreground border border-border text-xs p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-left font-medium leading-normal">
                  &quot;I verified your integration sync. Do you have 15 minutes tomorrow at 2 PM for a final review?&quot;
                </div>
                <div className="bg-accent/20 border border-accent/30 text-foreground text-xs p-3 rounded-2xl rounded-tr-sm max-w-[80%] ml-auto text-left font-medium leading-normal">
                  &quot;Perfect. Please send the link.&quot;
                </div>
              </div>
            </motion.div>

            {/* Behind Mockup Backdrop Glows */}
            <div className="absolute w-[110%] h-[110%] bg-gradient-to-tr from-accent/[0.02] to-transparent blur-2xl rounded-full z-0 pointer-events-none" />

          </div>
          
        </div>

        {/* Trusted By Logos Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-20 md:mt-28 pt-8 border-t border-border w-full"
        >
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-center mb-6">
            Trusted by businesses across key industries
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6 opacity-60 hover:opacity-90 transition-opacity duration-300">
            {/* Logo 1 */}
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm" />
              Flavor Flight
            </div>
            {/* Logo 2 */}
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
              <span className="w-2.5 h-2.5 bg-accent rounded-full" />
              Apex Home
            </div>
            {/* Logo 3 */}
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 22h20L12 2z"/></svg>
              Logistix
            </div>
            {/* Logo 4 */}
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
              <div className="w-2.5 h-2.5 border-2 border-accent rotate-45" />
              Retail Labs
            </div>
            {/* Logo 5 */}
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
              <span className="w-3 h-1.5 bg-accent rounded-full" />
              Intelligent Partners
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
