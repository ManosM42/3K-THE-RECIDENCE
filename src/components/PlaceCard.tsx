import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import type { Place } from "@/data/places";
import { useI18n, pick } from "@/lib/i18n";

export function PlaceCard({ place, index = 0 }: { place: Place; index?: number }) {
  const { lang, t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Link
        to="/nearby/$category/$id"
        params={{ category: place.category, id: place.id }}
        className="group block glass-card rounded-xl overflow-hidden hover-lift hover:border-[color:var(--amber)]/60 hover:amber-glow transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={place.image}
            alt={pick(place.name, lang)}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
          <div className="absolute top-3 right-3 glass px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase text-white/80">
            {place.distance}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-1 text-amber text-xs mb-2">
            <Star className="w-3 h-3 fill-current" />
            <span>{place.rating.toFixed(1)}</span>
          </div>
          <h3 className="font-display text-2xl leading-tight text-white group-hover:text-amber transition-colors">
            {pick(place.name, lang)}
          </h3>
          <p className="mt-2 text-sm text-white/60 line-clamp-2">{pick(place.shortDescription, lang)}</p>
          <div className="mt-4 flex items-center gap-1.5 text-xs tracking-widest uppercase text-amber">
            {pick(t.common.explore, lang)} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
