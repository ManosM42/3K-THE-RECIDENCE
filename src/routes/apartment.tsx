import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n, pick } from "@/lib/i18n";
import imageIMG from "@/assets/slider-1.jpeg";
import image2IMG from "@/assets/slider-2.jpeg";
import image3IMG from "@/assets/slider-3.jpeg";
import image4IMG from "@/assets/image5.jpeg";
import image5IMG from "@/assets/slider-5.jpeg";
import image6IMG from "@/assets/slider-6.jpeg";
import image7IMG from "@/assets/slider-7.jpeg";
import image8IMG from "@/assets/slider-8.jpeg";
import image9IMG from "@/assets/slider-4.jpeg";

export const Route = createFileRoute("/apartment")({
  head: () => ({
    meta: [
      { title: "The Apartment — 3K The Residence" },
      { name: "description", content: "Two bedrooms, private garden, fully equipped kitchen, one minute from the sea in Heraklion." },
    ],
  }),
  component: Apartment,
});

const GALLERY = [
  { src: image3IMG, label: { en: "Master bedroom", gr: "Κύριο υπνοδωμάτιο" } },
  { src: imageIMG, label: { en: "Private garden", gr: "Ιδιωτικός κήπος" } },
  { src: image2IMG, label: { en: "Living area", gr: "Καθιστικό" } },
  { src: image7IMG, label: { en: "Kitchen", gr: "Κουζίνα" } },
  { src: image4IMG, label: { en: "Second bedroom", gr: "Δεύτερο υπνοδωμάτιο" } },
  { src: image9IMG, label: { en: "Modern bathroom", gr: "Σύγχρονο μπάνιο" } },
];

const FEATURES = [
  { en: "Two comfortable bedrooms", gr: "Δύο άνετα υπνοδωμάτια" },
  { en: "Cozy living area", gr: "Άνετο καθιστικό" },
  { en: "Fully equipped kitchen", gr: "Πλήρως εξοπλισμένη κουζίνα" },
  { en: "Modern bathroom", gr: "Σύγχρονο μπάνιο" },
  { en: "Private garden", gr: "Ιδιωτικός κήπος" },
  { en: "Air conditioning", gr: "Κλιματισμός" },
  { en: "Free Wi-Fi", gr: "Δωρεάν Wi-Fi" },
  { en: "Easy parking", gr: "Εύκολο πάρκινγκ" },
];

function Apartment() {
  const { lang, t } = useI18n();
  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      >
        <div className="text-xs tracking-luxury uppercase text-amber">{pick(t.about.eyebrow, lang)}</div>
        <h1 className="font-display text-5xl md:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
          {pick(t.about.title, lang)}
        </h1>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 text-white/75 text-[15px] leading-relaxed space-y-5"
        >
          <p>{pick(t.about.body, lang)}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="text-xs tracking-luxury uppercase text-amber mb-4">
            {lang === "en" ? "Features" : "Χαρακτηριστικά"}
          </div>
          <ul className="space-y-3">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-white/75 text-sm">
                <span className="text-amber mt-1">·</span>
                <span>{pick(f, lang)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GALLERY.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <img src={g.src} alt={pick(g.label, lang)} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] to-transparent" />
            <div className="absolute bottom-4 left-5 text-sm tracking-widest uppercase text-white/85">{pick(g.label, lang)}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-amber text-[var(--navy-deep)] px-8 py-4 rounded-md text-sm tracking-widest uppercase amber-glow hover:amber-glow-strong transition-all"
        >
          {pick(t.hero.cta1, lang)} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
