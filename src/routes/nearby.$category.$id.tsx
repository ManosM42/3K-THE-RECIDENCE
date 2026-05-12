import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as React from "react";
import { ArrowLeft, Star, MapPin, Compass, Calendar, Lightbulb, X } from "lucide-react";
import { useI18n, pick } from "@/lib/i18n";
import { LeafletMap } from "@/components/LeafletMap";
import { categoryMeta, placeById, type Category } from "@/data/places";

const VALID: Category[] = ["restaurants", "beaches", "attractions", "entertainment"];

export const Route = createFileRoute("/nearby/$category/$id")({
  beforeLoad: ({ params }) => {
    if (!VALID.includes(params.category as Category)) throw notFound();
    if (!placeById(params.id)) throw notFound();
  },
  head: ({ params }) => {
    const p = placeById(params.id);
    return {
      meta: [
        { title: `${p?.name.en ?? "Place"} — 3K The Residence` },
        { name: "description", content: p?.shortDescription.en ?? "" },
        { property: "og:image", content: p?.image ?? "" },
      ],
    };
  },
  component: PlaceDetail,
});

function PlaceDetail() {
  const { category, id } = Route.useParams();
  const { lang, t } = useI18n();
  const place = placeById(id)!;
  const meta = categoryMeta[category as Category];
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  return (
    <article>
      <section className="relative h-[75vh] min-h-[500px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, y: 0 }}
          animate={{ scale: 1.2, y: -20 }}
          transition={{ duration: 14, ease: "linear" }}
          className="absolute inset-0"
        >
          <img src={place.image} alt={pick(place.name, lang)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/30 via-transparent to-[var(--navy-deep)]" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 max-w-7xl mx-auto pb-16">
          <Link
            to="/nearby/$category"
            params={{ category }}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 hover:text-amber transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> {pick(t.common.back, lang)} · {pick({ en: meta.en, gr: meta.gr }, lang)}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex bg-amber text-[var(--navy-deep)] px-3 py-1 rounded-full text-[10px] tracking-luxury uppercase">
              {meta.emoji} {pick({ en: meta.en, gr: meta.gr }, lang)}
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white mt-5 max-w-3xl leading-[1.05]">{pick(place.name, lang)}</h1>
            <div className="flex items-center gap-1 mt-4 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(place.rating) ? "fill-current" : "opacity-30"}`} />
              ))}
              <span className="ml-2 text-sm text-white/70">{place.rating.toFixed(1)}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {pick(place.description, lang).split("\n\n").map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-white/80 leading-relaxed text-lg font-light"
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-xl p-6 space-y-5 h-fit"
        >
          <InfoRow icon={<MapPin className="w-4 h-4" />} label={pick(t.common.distance, lang)} value={place.distance} />
          <InfoRow icon={<Compass className="w-4 h-4" />} label={pick(t.common.type, lang)} value={pick(place.type, lang)} />
          <InfoRow icon={<Calendar className="w-4 h-4" />} label={pick(t.common.bestSeason, lang)} value={pick(place.bestSeason, lang)} />
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber mb-2">
              <Lightbulb className="w-4 h-4" /> {pick(t.common.tip, lang)}
            </div>
            <p className="text-sm text-white/80 leading-relaxed">{pick(place.tip, lang)}</p>
          </div>
        </motion.aside>
      </section>

      <section className="px-6 md:px-16 max-w-6xl mx-auto pb-20">
        <h2 className="font-display text-3xl text-white mb-6">{pick(t.common.gallery, lang)}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {place.gallery.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightbox(g)}
              className="aspect-[4/3] overflow-hidden rounded-lg group"
            >
              <img src={g} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </motion.button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 max-w-6xl mx-auto pb-24">
        <h2 className="font-display text-3xl text-white mb-6">{pick(t.common.map, lang)}</h2>
        <LeafletMap lat={place.lat} lng={place.lng} zoom={15} label={pick(place.name, lang)} height={380} />
      </section>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] bg-[var(--navy-deep)]/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-amber" onClick={() => setLightbox(null)}>
            <X className="w-7 h-7" />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-lg" />
        </motion.div>
      )}
    </article>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-amber mt-0.5">{icon}</div>
      <div>
        <div className="text-[10px] tracking-luxury uppercase text-white/50">{label}</div>
        <div className="text-sm text-white/90 mt-0.5">{value}</div>
      </div>
    </div>
  );
}
