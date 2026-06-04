import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n, pick } from "@/lib/i18n";
import { PlaceCard } from "@/components/PlaceCard";
import { LeafletMap } from "@/components/LeafletMap";
import { categoryMeta, placesByCategory, RESIDENCE, type Category } from "@/data/places";
import sliderIMG from "@/assets/slider-1.jpeg";
import slider2IMG from "@/assets/slider-2.jpeg";
import slider3IMG from "@/assets/slider-3.jpeg";
import slider4IMG from "@/assets/slider-4.jpeg";
import slider5IMG from "@/assets/slider-5.jpeg";
import slider6IMG from "@/assets/slider-6.jpeg";
import slider7IMG from "@/assets/slider-7.jpeg";
import slider8IMG from "@/assets/slider-8.jpeg";
import slider9IMG from "@/assets/slider-9.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3K The Residence — Luxury Apartment in Heraklion, Crete" },
      { name: "description", content: "A brand-new two-bedroom apartment with private garden, one minute from the sea in Heraklion." },
    ],
  }),
  component: Home,
});

const HERO_IMAGES = [
  sliderIMG,
  slider2IMG,
  slider3IMG,
  slider4IMG,
  slider5IMG,
  slider6IMG,
  slider7IMG,
  slider8IMG,
  slider9IMG,
];

function HeroSlider() {
  const { lang, t } = useI18n();
  const slides = [
    { img: HERO_IMAGES[0], eyebrow: t.hero.location1, title: t.hero.title1, sub: t.hero.subtitle1, cta: t.hero.cta1, to: "/contact" as const },
    { img: HERO_IMAGES[1], eyebrow: t.hero.location2, title: t.hero.title2, sub: t.hero.subtitle2, cta: t.hero.cta2, to: "/apartment" as const },
    { img: HERO_IMAGES[2], eyebrow: t.hero.location3, title: t.hero.title3, sub: t.hero.subtitle3, cta: t.hero.cta3, to: "/nearby/restaurants" as const },
    { img: HERO_IMAGES[3], eyebrow: t.hero.location1, title: t.hero.title1, sub: t.hero.subtitle1, cta: t.hero.cta1, to: "/contact" as const },
    { img: HERO_IMAGES[4], eyebrow: t.hero.location2, title: t.hero.title2, sub: t.hero.subtitle2, cta: t.hero.cta2, to: "/apartment" as const },
    { img: HERO_IMAGES[5], eyebrow: t.hero.location3, title: t.hero.title3, sub: t.hero.subtitle3, cta: t.hero.cta3, to: "/nearby/restaurants" as const },
    { img: HERO_IMAGES[6], eyebrow: t.hero.location1, title: t.hero.title1, sub: t.hero.subtitle1, cta: t.hero.cta1, to: "/contact" as const },
    { img: HERO_IMAGES[7], eyebrow: t.hero.location2, title: t.hero.title2, sub: t.hero.subtitle2, cta: t.hero.cta2, to: "/apartment" as const },
    { img: HERO_IMAGES[8], eyebrow: t.hero.location3, title: t.hero.title3, sub: t.hero.subtitle3, cta: t.hero.cta3, to: "/nearby/restaurants" as const },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img src={slides[i].img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/60 via-[var(--navy-deep)]/40 to-[var(--navy-deep)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-xs md:text-sm tracking-luxury uppercase text-amber mb-6">
              {pick(slides[i].eyebrow, lang)}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white max-w-4xl"
            >
              {pick(slides[i].title, lang)}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="mt-6 text-base md:text-lg text-white/70 max-w-xl">
              {pick(slides[i].sub, lang)}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="mt-10">
              <Link
                to={slides[i].to}
                className="inline-flex items-center gap-2 bg-amber text-[var(--navy-deep)] px-7 py-3.5 rounded-md text-sm tracking-widest uppercase font-medium amber-glow hover:amber-glow-strong transition-all"
              >
                {pick(slides[i].cta, lang)} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10 z-10">
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-amber origin-left"
          style={{ boxShadow: "0 0 8px var(--amber)" }}
        />
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`w-8 h-px transition-all ${idx === i ? "bg-amber h-0.5" : "bg-white/30"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const [v, setV] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setV(Math.round(start + (to - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}</span>;
}

function AboutSection() {
  const { lang, t } = useI18n();
  return (
    <section className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-luxury uppercase text-amber mb-4">{pick(t.about.eyebrow, lang)}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-white">{pick(t.about.title, lang)}</h2>
          <p className="mt-8 text-white/70 leading-relaxed text-[15px]">{pick(t.about.body, lang)}</p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.about.stats.map((s, idx) => (
              <div key={idx} className="border-l border-amber/40 pl-4">
                <div className="font-display text-4xl text-amber">
                  <Counter to={s.value} />
                </div>
                <div className="text-[10px] tracking-luxury uppercase text-white/50 mt-1">{pick(s.label, lang)}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 h-[600px]"
        >
          <div className="space-y-4">
            <img src={HERO_IMAGES[2]} alt="Bedroom" className="w-full h-2/3 object-cover rounded-xl" />
            <img src={HERO_IMAGES[6]} alt="Kitchen" className="w-full h-1/3 object-cover rounded-xl" />
          </div>
          <div className="space-y-4 pt-12">
            <img src={HERO_IMAGES[1]} alt="Living Room" className="w-full h-1/3 object-cover rounded-xl" />
            <img src={HERO_IMAGES[7]} alt="Garden" className="w-full h-2/3 object-cover rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function BookingBanner() {
  const { lang } = useI18n();
  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 md:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* subtle gradient accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-amber/10 blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-amber/5 blur-3xl" />
        </div>

        <div className="relative z-10">
          <p className="text-xs tracking-luxury uppercase text-amber mb-2">
            {lang === "gr" ? "Κρατήστε Θέση" : "Reserve Your Stay"}
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-white leading-snug">
            {lang === "gr" ? "Διαθέσιμο στο Booking.com" : "Available on Booking.com"}
          </h3>
          <p className="text-white/50 text-sm mt-1 max-w-sm">
            {lang === "gr"
              ? "Ελέγξτε διαθεσιμότητα και κρατήστε απευθείας με ασφάλεια."
              : "Check availability and book securely with instant confirmation."}
          </p>
        </div>

        
        <a  href="https://www.booking.com/hotel/gr/k3-the-residence.el.html?aid=318615&label=New_Greek_EL_GR_27026349385-QXtLJSPeIP_80J0br3yCkwS217289183938%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-199483742665%3Alp9230143%3Ali%3Adec%3Adm&sid=3cd9e81a714086fe1c330f4d55e3fb7b&dest_id=900063017&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778521926&srpvid=fa4f7d96957f0691&type=total&ucfs=1&activeTab=photosGallery&chal_t=1778764351989&force_referer="
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex-shrink-0 inline-flex items-center gap-3 bg-[#003580] hover:bg-[#00297a] transition-colors text-white px-7 py-3.5 rounded-md text-sm font-semibold tracking-wide shadow-lg shadow-[#003580]/30"
        >
          {/* Booking.com "b." wordmark */}
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="17" fontFamily="Georgia, serif" fontSize="17" fontWeight="bold" fill="white">b.</text>
          </svg>
          <span>booking.com</span>
          <ArrowRight className="w-4 h-4 opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
function CategoryRow({ category }: { category: Category }) {
  const { lang } = useI18n();
  const meta = categoryMeta[category];
  const items = placesByCategory(category);
  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between flex-wrap gap-4 mb-10"
      >
        <div>
          <div className="text-2xl mb-2">{meta.emoji}</div>
          <h2 className="font-display text-4xl md:text-5xl text-white">{pick({ en: meta.en, gr: meta.gr }, lang)}</h2>
          <p className="text-white/50 mt-2 max-w-md text-sm">{pick(meta.tagline, lang)}</p>
        </div>
        <Link
          to="/nearby/$category"
          params={{ category }}
          className="text-xs tracking-luxury uppercase text-amber flex items-center gap-2 hover:gap-3 transition-all"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p, i) => <PlaceCard key={p.id} place={p} index={i} />)}
      </div>
    </section>
  );
}

function FindUs() {
  const { lang, t } = useI18n();
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="font-display text-5xl md:text-6xl text-white">{pick(t.findUs.title, lang)}</h2>
        <p className="text-white/60 mt-3">{pick(t.findUs.sub, lang)}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <LeafletMap lat={RESIDENCE.lat} lng={RESIDENCE.lng} zoom={15} label={RESIDENCE.name} height={500} />
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <BookingBanner />           {/* ← add this line */}
      <CategoryRow category="restaurants" />
      <CategoryRow category="beaches" />
      <CategoryRow category="attractions" />
      <CategoryRow category="entertainment" />
      <FindUs />
    </>
  );
}
