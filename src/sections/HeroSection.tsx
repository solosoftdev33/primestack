'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui';
import { Cpu, Database, Mail, Globe, Smartphone, Code2 } from 'lucide-react';

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Supabase',
  'Flutter',
  'Odoo',
  'OpenAI',
];

function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    function move(event: MouseEvent) {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    }
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: 'overlay' }}
    >
      <motion.div
        className="h-[500px] w-[500px] rounded-full bg-accent/10"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          filter: 'blur(120px)',
        }}
      />
    </div>
  );
}

const integrationLogs = [
  { type: 'sync', target: 'crm.leads', status: '200 OK', color: 'text-emerald-400' },
  { type: 'route', target: 'high-intent inquiry', status: 'routed', color: 'text-sky-300' },
  { type: 'notify', target: 'sales pipeline', status: 'delivered', color: 'text-accent' },
  { type: 'deploy', target: 'mobile app build', status: 'complete', color: 'text-violet-400' },
  { type: 'connect', target: 'odoo_db', status: 'synced', color: 'text-emerald-400' },
  { type: 'process', target: 'ai qualification', status: 'scored', color: 'text-sky-300' },
];

export default function HeroSection() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % integrationLogs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CursorGlow />
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background"
      >
        <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0 opacity-70" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-slow" />

        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Enterprise-Quality Software & Automation
              </motion.div>

              <motion.h1
                className="max-w-[720px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-foreground leading-[1.02] mb-6 font-heading"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                Transform Your Business With Software, AI & Automation
              </motion.h1>

              <motion.p
                className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                PrimeStack US helps businesses streamline operations, improve customer
                experiences, and increase efficiency through custom software, mobile
                applications, CRM systems, ERP solutions, websites, and AI-powered automation.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-accent/20 bg-accent/[0.06] mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-xs font-bold text-accent">Premium software solutions.</span>
                <span className="text-xs text-muted-foreground">Lean agency pricing.</span>
                <span className="text-xs text-accent font-bold">Measurable business results.</span>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button id="hero-cta-consultation" href="#contact" variant="primary" size="lg">
                  Book a Strategy Call
                </Button>
                <Button id="hero-cta-success-stories" href="#success-stories" variant="outline" size="lg">
                  View Success Stories
                </Button>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 pt-6 border-t border-border w-full max-w-[600px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  Full-Stack Technology Capabilities
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

            {/* Right Column: Dashboard Mockups */}
            <div className="lg:col-span-5 relative w-full h-[550px] flex items-center justify-center mt-12 lg:mt-0 select-none">

              {/* Card 1: Database Sync */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1], y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute top-4 left-0 w-60 bg-muted text-foreground rounded-[20px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/[0.08]"
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

              {/* Card 2: Live Lead Feed */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1], y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
                className="absolute top-20 right-2 w-68 bg-card border border-white/[0.08] rounded-[20px] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] z-20"
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
                <h4 className="text-[13.5px] font-bold text-foreground tracking-tight">Inbound Lead</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">Commercial Client — High Intent</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Estimated ROI</span>
                  <span className="text-[14px] font-extrabold text-accent">$14,850/mo</span>
                </div>
              </motion.div>

              {/* Animated Integration Log */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 40 }}
                animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1], y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 } }}
                className="absolute bottom-4 left-4 w-64 bg-card border border-white/[0.08] rounded-[20px] p-5 shadow-[0_24px_55px_rgba(0,0,0,0.5)] z-30"
              >
                <div className="flex items-center gap-2 mb-3.5 border-b border-border pb-2.5">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-[9px] text-accent-foreground font-extrabold shrink-0">
                    <Code2 size={10} className="text-accent-foreground" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-bold">Integration Log</span>
                  <motion.span
                    key={logIndex}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="ml-auto text-[9px] font-mono text-emerald-400"
                  >
                    {integrationLogs[logIndex].status}
                  </motion.span>
                </div>
                <div className="font-mono text-[10px] text-white/70 space-y-1.5">
                  {integrationLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-2 ${i === logIndex ? 'bg-white/[0.04] -mx-2 px-2 py-1 rounded-lg' : ''}`}
                      animate={i === logIndex ? { opacity: 1 } : { opacity: 0.4 }}
                    >
                      <span className={`${log.color} font-semibold`}>{log.type}</span>
                      <span className="text-white/50">{log.target}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Card 4: Mobile/Web Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1], y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
                className="absolute bottom-16 right-0 w-52 bg-card border border-white/[0.08] rounded-[20px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-15"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={10} className="text-accent" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Live Metrics</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Conversion', value: '+42%' },
                    { label: 'Response', value: '14ms' },
                    { label: 'Automation', value: '99.8%' },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
                      <span className="text-[9px] text-muted-foreground">{metric.label}</span>
                      <span className="text-[10px] font-bold text-accent">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="absolute w-[110%] h-[110%] bg-gradient-to-tr from-accent/[0.02] to-transparent blur-2xl rounded-full z-0 pointer-events-none" />

            </div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mt-16 md:mt-24 pt-8 border-t border-border w-full"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold text-center mb-6">
              Trusted by businesses across key industries
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-12 gap-y-6 opacity-60 hover:opacity-90 transition-opacity duration-300">
              <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
                <span className="w-2.5 h-2.5 bg-accent rounded-sm" />
                Restaurant Group
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
                <span className="w-2.5 h-2.5 bg-accent rounded-full" />
                HVAC Services
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 22h20L12 2z"/></svg>
                Construction Co.
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
                <div className="w-2.5 h-2.5 border-2 border-accent rotate-45" />
                Healthcare
              </div>
              <div className="flex items-center gap-1.5 font-bold text-xs tracking-wider text-foreground/80 hover:text-accent transition-colors duration-200 uppercase cursor-default">
                <span className="w-3 h-1.5 bg-accent rounded-full" />
                Logistics Co.
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
