import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  MessageCircle,
  MapPin,
  Sparkles,
  Instagram,
  Facebook,
  Target,
  PenTool,
  BarChart3,
  ShoppingBag,
  GraduationCap,
  Heart,
  ArrowRight,
  Quote,
  Flower2,
  Cake,
} from "lucide-react";
import bgTexture from "@/assets/bg-texture.jpg";
import { PetalRain } from "@/components/PetalRain";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areeba — Digital Marketing Specialist & Educator" },
      {
        name: "description",
        content:
          "Portfolio of Areeba — digital marketing, social media strategy, e-commerce management and Montessori education. Based in Rawalpindi, Pakistan.",
      },
    ],
  }),
  component: Portfolio,
});

const CONTACT = {
  email: "theareeba350@gmail.com",
  phone: "+923700533737",
  phoneDisplay: "+92 370 0533737",
  linkedin: "https://www.linkedin.com/in/areeba-nadeem-478602361/",
  whatsapp: "https://wa.me/923700533737?text=Hi%20Areeba%2C%20I%20saw%20your%20portfolio%20%E2%9C%A8",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=theareeba350@gmail.com&su=Hello%20Areeba",
  address: "Rawalpindi, Punjab, Pakistan",
  birthday: "May 28",
};

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "Social Media Strategy", level: 95, icon: Target },
  { name: "Content Planning & Creation", level: 92, icon: PenTool },
  { name: "Paid Ads (Meta / Google)", level: 90, icon: BarChart3 },
  { name: "E-Commerce Management", level: 88, icon: ShoppingBag },
  { name: "SEO & Digital Marketing", level: 85, icon: Sparkles },
  { name: "Early Childhood Education", level: 96, icon: GraduationCap },
];

const EXPERIENCE = [
  {
    role: "Social Media Marketing Officer",
    company: "DG International Technology",
    period: "Feb 2023 — Present · 3 yrs 6 mos",
    location: "Rawalpindi, Pakistan",
    points: [
      "Manages end-to-end paid & organic campaigns across Facebook, Instagram, Google & LinkedIn.",
      "Executes content strategies, audience targeting and campaign optimization to drive engagement & ROI.",
      "Handles professional customer & IT-related sales communications with high-quality service delivery.",
    ],
    tag: "Digital Marketing",
  },
  {
    role: "Sales Manager",
    company: "DG International Technology",
    period: "Feb 2023 — Feb 2025 · 2 yrs 1 mo",
    location: "Rawalpindi, Pakistan",
    points: [
      "Led sales operations while coordinating cross-channel marketing initiatives.",
      "Built long-term client relationships and mentored the outbound team.",
    ],
    tag: "Sales & Strategy",
  },
  {
    role: "Montessori Teacher",
    company: "Allied Schools — Central Campus",
    period: "Apr 2022 — Present · 4 yrs 4 mos",
    location: "Rawalpindi, Pakistan",
    points: [
      "Three years of Montessori-level teaching focused on early childhood development.",
      "Lesson planning, classroom management and interactive teaching methodologies.",
      "Creates a nurturing environment that promotes cognitive, social and emotional growth.",
    ],
    tag: "Education",
  },
];

const SERVICES = [
  {
    icon: Target,
    title: "Paid Social Campaigns",
    desc: "Meta & Google ad funnels built around audience segmentation and creative that actually converts.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    desc: "Monthly calendars, visuals and copy crafted to grow reach and community with a consistent brand voice.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Growth",
    desc: "Storefront optimisation, catalog management and marketing that turn browsers into loyal buyers.",
  },
  {
    icon: GraduationCap,
    title: "Early Learning Programs",
    desc: "Montessori-inspired lesson planning and classroom design for cognitive and emotional growth.",
  },
];

const STATS = [
  { value: "3.5+", label: "Years in Digital" },
  { value: "4+", label: "Years Teaching" },
  { value: "4", label: "Channels Managed" },
  { value: "100%", label: "Passion Poured" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundLayer />
      <PetalRain />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundLayer() {
  return (
    <div aria-hidden className="fixed inset-0 z-0">
      <img
        src={bgTexture}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-rose/30 blur-[120px] animate-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-plum/40 blur-[140px] animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gold/20 blur-[120px] animate-glow" style={{ animationDelay: "4s" }} />
    </div>
  );
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(94%,880px)]"
    >
      <div className="glass-card rounded-full flex items-center justify-between px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display text-lg">
          <Flower2 className="h-5 w-5 text-primary" />
          <span className="text-gradient-rose font-semibold tracking-wide">Areeba</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-rose/10 transition-all"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-medium text-primary-foreground hover:scale-105 transition-transform"
        >
          Hire me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Portfolio · Est. 2026
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 font-script text-3xl md:text-4xl text-accent"
        >
          Hello, lovely — I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-2 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] font-medium tracking-tight"
        >
          <span className="text-gradient-rose italic">Areeba</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed"
        >
          Digital Marketing Specialist · Social Media Strategist · E-Commerce Manager · Montessori Educator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground rose-glow hover:scale-[1.03] transition-transform"
          >
            Let's collaborate
            <Heart className="h-4 w-4 group-hover:scale-125 transition-transform" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-7 py-3 text-sm font-medium text-foreground hover:bg-primary/15 transition-colors"
          >
            View my journey
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-14 flex items-center justify-center gap-6 text-muted-foreground"
        >
          <ContactChip href={CONTACT.whatsapp} label="WhatsApp">
            <WhatsAppLogo className="h-5 w-5" />
          </ContactChip>
          <ContactChip href={CONTACT.gmail} label="Gmail">
            <GmailLogo className="h-5 w-5" />
          </ContactChip>
          <ContactChip href={CONTACT.linkedin} label="LinkedIn">
            <LinkedInLogo className="h-5 w-5" />
          </ContactChip>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Rawalpindi, Pakistan
          </span>
        </motion.div>
      </motion.div>

      {/* decorative florals */}
      <FloralCorner className="absolute -top-6 -left-6 w-64 md:w-80 opacity-40 animate-float" />
      <FloralCorner className="absolute -bottom-10 -right-6 w-64 md:w-80 opacity-40 animate-float rotate-180" style={{ animationDelay: "3s" }} />
    </section>
  );
}

function ContactChip({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full glass-card hover:scale-110 hover:rose-glow transition-all"
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14"
    >
      <p className="font-script text-2xl text-accent">{eyebrow}</p>
      <h2 className="mt-1 font-display text-5xl md:text-6xl font-medium text-gradient-rose">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
        <Flower2 className="h-4 w-4 text-primary" />
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="who she is" title="A little about me" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/15" />
          <p className="relative font-display text-2xl md:text-3xl leading-relaxed italic text-foreground/90">
            Areeba is a <span className="text-gradient-rose not-italic font-semibold">highly talented individual</span>,
            looking forward toward growth and success. She brings solid experience in{" "}
            <span className="text-accent">e-commerce</span>, works as a{" "}
            <span className="text-accent">social media strategist</span>, plans{" "}
            <span className="text-accent">content</span> that converts, drives{" "}
            <span className="text-accent">digital marketing</span> campaigns, and holds a warm background in{" "}
            <span className="text-accent">school teaching</span>.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl text-shimmer font-semibold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="what she does"
          title="Skills & Craft"
          sub="A blend of analytical marketing brain and a nurturing educator's heart."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass-card rounded-2xl p-6 hover:rose-glow transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-rose/30 to-plum/30 border border-primary/20 group-hover:scale-110 transition-transform">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-display text-xl">{s.name}</span>
                </div>
                <span className="font-display text-2xl text-shimmer font-semibold">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted/40 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-rose-glow to-gold"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {["Facebook Ads", "Instagram Growth", "LinkedIn Marketing", "Google Ads", "Copywriting", "Audience Segmentation", "Lesson Planning", "Classroom Management", "Brand Voice", "Analytics", "Mentoring", "Customer Comms"].map((t) => (
            <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-primary/15 transition-colors">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="the journey so far"
          title="Experience"
          sub="From classrooms to campaign dashboards — every chapter shapes the strategist she is today."
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-primary rose-glow ring-4 ring-background" />

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:col-start-2"}`}>
                  <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                    <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-[10px] uppercase tracking-widest text-accent">
                      {e.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl text-foreground">{e.role}</h3>
                    <p className="text-primary font-medium">{e.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{e.period} · {e.location}</p>
                    <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {e.points.map((p, k) => (
                        <li key={k} className="flex gap-2 md:justify-end md:text-left">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span className="flex-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="how she can help"
          title="Services"
          sub="Handpicked offerings for brands and small businesses ready to bloom."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-transform"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-plum/30 border border-primary/25 mb-4 group-hover:rose-glow transition-shadow">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Get started <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="let's talk"
          title="Get in touch"
          sub="Whether it's a campaign, a collaboration or a coffee chat — the inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-rose/30 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-plum/40 blur-[80px]" />

          <div className="relative grid gap-4 md:grid-cols-3">
            <ContactCard
              href={CONTACT.whatsapp}
              icon={<WhatsAppLogo className="h-7 w-7" />}
              label="WhatsApp"
              value={CONTACT.phoneDisplay}
              accent="from-[#25D366]/30 to-[#128C7E]/20"
            />
            <ContactCard
              href={CONTACT.gmail}
              icon={<GmailLogo className="h-7 w-7" />}
              label="Gmail"
              value="theareeba350"
              accent="from-[#EA4335]/30 to-[#FBBC05]/20"
            />
            <ContactCard
              href={CONTACT.linkedin}
              icon={<LinkedInLogo className="h-7 w-7" />}
              label="LinkedIn"
              value="areeba"
              accent="from-[#0A66C2]/40 to-[#0A66C2]/10"
            />
          </div>

          <div className="relative mt-10 flex flex-col items-center gap-3">
            <p className="font-script text-2xl text-accent">or simply say hi —</p>
            <a
              href={CONTACT.gmail}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground rose-glow hover:scale-105 transition-transform"
            >
              <Mail className="h-4 w-4" />
              theareeba350@gmail.com
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5">
                <MapPin className="h-3 w-3 text-primary" /> {CONTACT.address}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5">
                <MessageCircle className="h-3 w-3 text-primary" /> {CONTACT.phoneDisplay}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5">
                <Cake className="h-3 w-3 text-primary" /> Birthday · {CONTACT.birthday}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-background/40 p-5 backdrop-blur-sm hover:border-primary/60 hover:-translate-y-1 transition-all"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-background/60 border border-white/10">
          {icon}
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
      </div>
      <p className="relative mt-4 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="relative mt-1 font-display text-lg text-foreground truncate">{value}</p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-primary/15">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display">
          <Flower2 className="h-4 w-4 text-primary" />
          <span className="text-gradient-rose font-semibold">Areeba</span>
          <span>· Crafted with</span>
          <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
        </div>
        <div className="flex items-center gap-4">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-foreground transition"><WhatsAppLogo className="h-4 w-4" /></a>
          <a href={CONTACT.gmail} target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="hover:text-foreground transition"><GmailLogo className="h-4 w-4" /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><LinkedInLogo className="h-4 w-4" /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-foreground transition"><Facebook className="h-4 w-4" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition"><Instagram className="h-4 w-4" /></a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}

/* ---------- Brand logos (real SVG marks) ---------- */

function WhatsAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="#25D366"
        d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.75 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
      />
      <path
        fill="#fff"
        d="M23.47 19.63c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.62-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.29 3.27c.16.21 2.23 3.4 5.4 4.77.76.33 1.35.52 1.8.67.76.24 1.45.2 2 .12.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"
      />
    </svg>
  );
}

function GmailLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285f4" d="M6 12v24a2 2 0 0 0 2 2h4V16l12 9 12-9v22h4a2 2 0 0 0 2-2V12l-18 13.5z" />
      <path fill="#34a853" d="M12 38V16l12 9 12-9v22h-4V22l-8 6-8-6v16z" />
      <path fill="#fbbc04" d="M36 12l-12 9-12-9-6-2v2l18 13.5L42 12v-2z" />
      <path fill="#ea4335" d="M6 12h6l12 9 12-9h6L24 25.5z" />
    </svg>
  );
}

function LinkedInLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="6" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M10.5 12.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8.6 13.9h3.8v10.5H8.6zM14.5 13.9h3.6v1.4h.05c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5v5.4h-3.8v-4.8c0-1.15 0-2.6-1.6-2.6s-1.85 1.25-1.85 2.55v4.85h-3.8z"
      />
    </svg>
  );
}

function FloralCorner({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
      <g fill="none" stroke="oklch(0.72 0.18 12)" strokeWidth="1" opacity="0.8">
        <circle cx="60" cy="60" r="20" />
        <circle cx="60" cy="60" r="14" />
        <circle cx="60" cy="60" r="8" />
        <path d="M60 40 Q 80 30 100 40 T 140 60" />
        <path d="M60 80 Q 80 100 60 130 T 40 170" />
        <path d="M40 60 Q 20 80 30 110" />
        <circle cx="120" cy="90" r="6" fill="oklch(0.82 0.13 60 / 0.4)" />
        <circle cx="90" cy="140" r="8" fill="oklch(0.72 0.18 12 / 0.3)" />
        <circle cx="40" cy="130" r="4" fill="oklch(0.82 0.14 20 / 0.5)" />
      </g>
    </svg>
  );
}
