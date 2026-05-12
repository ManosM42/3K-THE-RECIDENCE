import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PlaceCard } from "@/components/PlaceCard";
import { useI18n, pick } from "@/lib/i18n";
import { categoryMeta, placesByCategory, type Category } from "@/data/places";

const VALID: Category[] = ["restaurants", "beaches", "attractions", "entertainment"];

const HERO: Record<Category, string> = {
  restaurants: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
  beaches: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  attractions: "https://images.unsplash.com/photo-1605346495257-7e4d5b1aab38?auto=format&fit=crop&w=1920&q=80",
  entertainment: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80",
};

export const Route = createFileRoute("/nearby/$category/")({
  beforeLoad: ({ params }) => {
    if (!VALID.includes(params.category as Category)) throw notFound();
  },
  head: ({ params }) => {
    const c = params.category as Category;
    return {
      meta: [
        { title: `${categoryMeta[c]?.en ?? "Nearby"} — 3K The Residence` },
        { name: "description", content: categoryMeta[c]?.tagline.en ?? "" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const c = category as Category;
  const { lang } = useI18n();
  const meta = categoryMeta[c];
  const items = placesByCategory(c);

  return (
    <div>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 12, ease: "linear" }}
          className="absolute inset-0"
        >
          <img src={HERO[c]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/40 to-[var(--navy-deep)]" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 max-w-7xl mx-auto pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-3xl mb-3">{meta.emoji}</div>
            <h1 className="font-display text-5xl md:text-7xl text-white">{pick({ en: meta.en, gr: meta.gr }, lang)}</h1>
            <p className="text-white/70 mt-3 max-w-xl">{pick(meta.tagline, lang)}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => <PlaceCard key={p.id} place={p} index={i} />)}
        </div>
      </section>
    </div>
  );
}
