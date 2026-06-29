import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Check, Star, ArrowRight, MapPin, Clock, Shield, Award, Hammer } from "lucide-react";
import heroAsset from "@/assets/workshop.jpg.asset.json";
const heroHouse = heroAsset.url;
import serviceCladding from "@/assets/service-cladding.jpg";
import serviceReroof from "@/assets/service-reroof.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MJ Roofing & Cladding Ltd — Christchurch Roofing Specialists" },
      {
        name: "description",
        content:
          "5.0-rated Christchurch roofing & architectural cladding contractors. Re-roofs, new builds, repairs & spouting across Canterbury. Free quotes — call 022 658 0216.",
      },
      { property: "og:title", content: "MJ Roofing & Cladding Ltd — Christchurch Roofing Specialists" },
      {
        property: "og:description",
        content:
          "Premium longrun roofing and architectural cladding across Christchurch. 5.0 Google rating. Free on-site quotes.",
      },
      { property: "og:image", content: heroHouse },
      { name: "twitter:image", content: heroHouse },
    ],
  }),
  component: Home,
});

const PHONE_DISPLAY = "022 658 0216";
const PHONE_HREF = "tel:0226580216";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex flex-col">
          <span className="font-display text-xl font-bold leading-none tracking-tight">MJ ROOFING</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            & Cladding Ltd
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium transition-colors hover:text-accent">
            Services
          </a>
          <a href="#reviews" className="text-sm font-medium transition-colors hover:text-accent">
            Reviews
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-accent">
            Contact
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:bg-primary/90"
          >
            <Phone className="size-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground md:hidden"
        >
          <Phone className="size-3.5" />
          Call now
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <div className="z-10 lg:col-span-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for Christchurch projects
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl">
            Precision <span className="text-muted-foreground">Roofing</span> for the Modern Era.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Specialist longrun roofing and architectural cladding across Christchurch. 5.0-rated quality
            for residential and commercial re-roofs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-accent px-8 py-4 text-center text-lg font-bold text-accent-foreground shadow-accent transition-all hover:brightness-110"
            >
              Request a Free Quote
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-4 text-lg font-bold text-foreground transition-all hover:bg-secondary"
            >
              <Phone className="size-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <img
            src={heroHouse}
            alt="MJ Roofing & Cladding workshop on Alloy Street, Sockburn, Christchurch"
            width={1200}
            height={750}
            className="aspect-[16/10] w-full rounded-2xl object-cover shadow-card outline outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-xl border border-border bg-card p-6 shadow-2xl">
            <div className="mb-2 flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm font-bold">5.0 rating from Google clients</p>
            <p className="mt-1 text-xs italic text-muted-foreground">
              “MJ Roofing was engaged to re-roof a 1960s block of flats…”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Award, label: "Licensed Building Practitioner" },
    { icon: Shield, label: "10-Year Workmanship Warranty" },
    { icon: Hammer, label: "Colorsteel® Specialists" },
    { icon: MapPin, label: "Christchurch Owned & Operated" },
  ];
  return (
    <section className="border-y border-border bg-surface py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-center gap-3 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            <it.icon className="size-4 shrink-0 text-accent" />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Architectural Cladding",
      desc: "Premium vertical and horizontal cladding solutions using high-grade NZ steel and timber composites.",
      img: serviceCladding,
      alt: "Modern charcoal vertical metal tray cladding detail",
    },
    {
      title: "Full Re-Roofing",
      desc: "Expert replacement of aging roofs with modern, insulated systems designed for the Canterbury climate.",
      img: serviceReroof,
      alt: "Roofer installing new dark long-run steel roofing",
    },
    {
      title: "New Builds & Commercial",
      desc: "Large-scale cladding and roofing for new residential builds, industrial sheds and multi-unit developments.",
      img: serviceCommercial,
      alt: "Aerial view of a newly finished commercial steel roof",
    },
  ];
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight">Specialist Solutions</h2>
            <p className="text-muted-foreground">
              From high-end residential cladding to large scale commercial re-roofing, we bring Sockburn's
              finest craftsmanship to every square metre.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 border-b-2 border-accent pb-1 font-bold text-accent"
          >
            Get a free quote <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-xl bg-surface">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={800}
                  height={608}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Anna Macauley",
      role: "Property Developer · Local Guide",
      text: "MJ Roofing was engaged to re-roof a 1960s block of flats for our property development company. The quality of work was exceptional and they communicated brilliantly throughout.",
    },
    {
      name: "JJ Josling",
      role: "Local Guide · 28 reviews",
      text: "Professional, punctual, and the site was left spotless. Highly recommend for any architectural cladding work in Christchurch.",
    },
    {
      name: "Josh",
      role: "Christchurch homeowner",
      text: "Great communication throughout the whole process. The new roof looks incredible and has completely changed the look of the house.",
    },
  ];
  return (
    <section id="reviews" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-xl">
          <div className="mb-4 flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm font-semibold">5.0 on Google</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight">
            What Christchurch property owners say.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="text-base leading-relaxed text-foreground">“{r.text}”</blockquote>
              <figcaption className="mt-8 border-t border-border pt-4">
                <div className="text-sm font-bold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Protect your investment with{" "}
              <span className="text-accent">Christchurch Experts</span>.
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Free On-Site Assessment",
                  desc: "We visit anywhere in Greater Christchurch for a precise, no-obligation quote.",
                },
                {
                  title: "Certified Materials",
                  desc: "Premium Colorsteel® and certified fastening systems on every job.",
                },
                {
                  title: "Local Team, Local Accountability",
                  desc: "Owner-operated from Sockburn — we stand behind every roof we install.",
                },
              ].map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10">
                    <Check className="size-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">{b.title}</h4>
                    <p className="text-sm text-primary-foreground/60">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-12 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-primary-foreground/50">
                  Direct line
                </p>
                <a href={PHONE_HREF} className="font-display text-3xl font-bold hover:text-accent">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-primary-foreground/50">
                  Workshop
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Unit 5/6 Alloy Street
                  <br />
                  Sockburn, Christchurch 8042
                </p>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "Residential Re-Roof",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-10 text-center text-card-foreground">
        <div className="mb-6 grid size-14 place-items-center rounded-full bg-accent/10">
          <Check className="size-6 text-accent" />
        </div>
        <h3 className="mb-3 font-display text-2xl font-bold">Request received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks {data.name.split(" ")[0]} — we'll be in touch within 4 business hours. Need an answer
          sooner?
        </p>
        <a
          href={PHONE_HREF}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground"
        >
          <Phone className="size-4" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card p-8 text-card-foreground shadow-card"
    >
      <h3 className="mb-6 font-display text-2xl font-bold">Request a Quote</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              required
              maxLength={100}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary p-3 text-sm outline-none transition-all focus:ring-2 focus:ring-accent"
              placeholder="John Smith"
            />
          </Field>
          <Field label="Phone">
            <input
              required
              type="tel"
              maxLength={20}
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full rounded-lg border border-border bg-secondary p-3 text-sm outline-none transition-all focus:ring-2 focus:ring-accent"
              placeholder="022…"
            />
          </Field>
        </div>
        <Field label="Project address">
          <input
            maxLength={200}
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary p-3 text-sm outline-none transition-all focus:ring-2 focus:ring-accent"
            placeholder="Street, suburb"
          />
        </Field>
        <Field label="Project type">
          <select
            value={data.service}
            onChange={(e) => setData({ ...data, service: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary p-3 text-sm outline-none transition-all focus:ring-2 focus:ring-accent"
          >
            <option>Residential Re-Roof</option>
            <option>New Build Roofing</option>
            <option>Architectural Cladding</option>
            <option>Spouting & Repairs</option>
            <option>Commercial Project</option>
          </select>
        </Field>
        <Field label="Message">
          <textarea
            rows={4}
            maxLength={1000}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="w-full rounded-lg border border-border bg-secondary p-3 text-sm outline-none transition-all focus:ring-2 focus:ring-accent"
            placeholder="Tell us about your roof…"
          />
        </Field>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent py-4 text-lg font-bold text-accent-foreground transition-all hover:shadow-accent"
        >
          Submit Request
        </button>
        <p className="text-center text-xs text-muted-foreground">
          We typically respond within 4 business hours.
        </p>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold tracking-tight">MJ ROOFING & CLADDING LTD</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Premium roofing and cladding specialists serving Greater Christchurch with craftsmanship and
            integrity.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Contact
          </h4>
          <address className="space-y-2 text-sm not-italic text-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Unit 5/6 Alloy Street, Sockburn, Christchurch 8042</span>
            </div>
            <a href={PHONE_HREF} className="flex items-center gap-2 font-bold hover:text-accent">
              <Phone className="size-4 text-accent" />
              {PHONE_DISPLAY}
            </a>
          </address>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Hours
          </h4>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-accent" />
              <span>Mon – Fri · 8am – 5pm</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-accent" />
              <span>Sat – Sun · 9am – 5pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} MJ Roofing & Cladding Ltd. Licensed Building Practitioner.
      </div>
    </footer>
  );
}
