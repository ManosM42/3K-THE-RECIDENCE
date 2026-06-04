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
import image10IMG from "@/assets/slider-9.jpeg";
import image11IMG from "@/assets/image2.jpeg";
import image12IMG from "@/assets/image4.jpeg";


export const Route = createFileRoute("/apartment")({
  head: () => ({
    meta: [
      { title: "The Apartment — 3K The Residence" },
      { name: "description", content: "Two bedrooms, private garden, fully equipped kitchen, one minute from the sea in Heraklion." },
    ],
  }),
  component: Apartment,
});

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

const ROOMS = [
  {
    title: { en: "Master Bedroom", gr: "Κύριο Υπνοδωμάτιο" },
    description: {
      en: "Spacious and serene, with a comfortable double bed and ample natural light.",
      gr: "Ευρύχωρο και ήρεμο, με άνετο διπλό κρεβάτι και άφθονο φυσικό φως.",
    },
    photos: [
      { src: image3IMG, label: { en: "Master bedroom", gr: "Κύριο υπνοδωμάτιο" } },
      { src: image6IMG, label: { en: "Detail", gr: "Λεπτομέρεια" } },
      { src: image10IMG, label: { en: "Another view", gr: "Άλλη απόψη" } },
    ],
  },
  {
    title: { en: "Second Bedroom", gr: "Δεύτερο Υπνοδωμάτιο" },
    description: {
      en: "A cozy second bedroom perfect for families or additional guests.",
      gr: "Ένα άνετο δεύτερο υπνοδωμάτιο, ιδανικό για οικογένειες ή επιπλέον επισκέπτες.",
    },
    photos: [
      { src: image4IMG, label: { en: "Second bedroom", gr: "Δεύτερο υπνοδωμάτιο" } },
      // Add a third photo: { src: yourImgIMG, label: { en: "...", gr: "..." } },
    ],
  },
  {
    title: { en: "Living Area", gr: "Καθιστικό" },
    description: {
      en: "A welcoming open-plan living space where comfort meets elegant design.",
      gr: "Ένας φιλόξενος ανοιχτός χώρος καθιστικού όπου η άνεση συναντά την κομψή διακόσμηση.",
    },
    photos: [
      { src: image2IMG, label: { en: "Living area", gr: "Καθιστικό" } },
      // Add a third photo: { src: yourImgIMG, label: { en: "...", gr: "..." } },
    ],
  },
  {
    title: { en: "Kitchen", gr: "Κουζίνα" },
    description: {
      en: "Fully equipped modern kitchen with everything you need for a comfortable stay.",
      gr: "Πλήρως εξοπλισμένη σύγχρονη κουζίνα με όλα όσα χρειάζεστε.",
    },
    photos: [
      { src: image7IMG, label: { en: "Kitchen", gr: "Κουζίνα" } },
      { src: image11IMG, label: { en: "Microwave Oven", gr: "Φούρνος Μικροκυμάτων" } },
    ],
  },
  {
    title: { en: "Private Garden", gr: "Ιδιωτικός Κήπος" },
    description: {
      en: "Your own private outdoor retreat — a quiet garden just steps from the sea.",
      gr: "Ο δικός σας ιδιωτικός υπαίθριος χώρος — ένας ήσυχος κήπος δίπλα στη θάλασσα.",
    },
    photos: [
      { src: imageIMG, label: { en: "Garden", gr: "Κήπος" } },
      { src: image5IMG, label: { en: "Garden", gr: "Κήπος" } },
      { src: image8IMG, label: { en: "Garden", gr: "Κήπος" } },
    ],
  },
  {
    title: { en: "Bathroom", gr: "Μπάνιο" },
    description: {
      en: "A modern, clean bathroom with premium fixtures and bright finishes.",
      gr: "Ένα σύγχρονο, καθαρό μπάνιο με premium εξοπλισμό και φωτεινές επιφάνειες.",
    },
    photos: [
      { src: image9IMG, label: { en: "Bathroom", gr: "Μπάνιο" } },
      { src: image12IMG, label: { en: "Bathroom", gr: "Μπάνιο" } },
    ],
  },
];

function Apartment() {
  const { lang, t } = useI18n();

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-xs tracking-luxury uppercase text-amber">
          {pick(t.about.eyebrow, lang)}
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-white mt-4 max-w-3xl leading-[1.05]">
          {pick(t.about.title, lang)}
        </h1>
      </motion.div>

      {/* Description + features */}
      <div className="mt-16 grid lg:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 text-white/75 text-[15px] leading-relaxed space-y-5"
        >
          <p>{pick(t.about.body, lang)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

      {/* Room sections */}
      <div className="mt-24 space-y-24">
        {ROOMS.map((room, roomIdx) => (
          <motion.div
            key={roomIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Room header */}
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-5">
              <div>
                <div className="text-xs tracking-luxury uppercase text-amber mb-2">
                  {lang === "en" ? `Room ${roomIdx + 1}` : `Χώρος ${roomIdx + 1}`}
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-white">
                  {pick(room.title, lang)}
                </h2>
                <p className="text-white/50 text-sm mt-2 max-w-lg">
                  {pick(room.description, lang)}
                </p>
              </div>
            </div>

            {/* Room photos — grid adapts to photo count */}
            <div
              className={`grid gap-4 ${
                room.photos.length === 1
                  ? "grid-cols-1 max-w-2xl"
                  : room.photos.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {room.photos.map((photo, photoIdx) => (
                <motion.div
                  key={photoIdx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: photoIdx * 0.08 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl"
                >
                  <img
                    src={photo.src}
                    alt={pick(photo.label, lang)}
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-xs tracking-widest uppercase text-white/80">
                    {pick(photo.label, lang)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
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