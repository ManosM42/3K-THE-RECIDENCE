import * as React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n, pick } from "@/lib/i18n";
import logo from "@/assets/logo.png";

const navLinks = (t: ReturnType<typeof useI18n>["t"]) => [
  { to: "/", label: t.nav.home },
  { to: "/apartment", label: t.nav.apartment },
  { to: "/nearby/restaurants", label: t.nav.restaurants },
  { to: "/nearby/beaches", label: t.nav.beaches },
  { to: "/nearby/attractions", label: t.nav.attractions },
  { to: "/nearby/entertainment", label: t.nav.entertainment },
  { to: "/contact", label: t.nav.contact },
] as const;

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [location.pathname]);

  const links = navLinks(t);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-baseline gap-2 group">
            <img src={logo} alt="The Residence" className="w-25 h-auto" />
            <span className="hidden sm:inline text-[10px] tracking-luxury uppercase text-white/70 group-hover:text-amber transition-colors">
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[12px] tracking-widest uppercase text-white/70 hover:text-amber transition-colors"
                activeProps={{ className: "text-amber" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {pick(l.label, lang)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-[11px] tracking-widest border border-white/10 rounded-full overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-amber text-navy-deep" : "text-white/70 hover:text-amber"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("gr")}
                className={`px-3 py-1.5 transition-colors ${lang === "gr" ? "bg-amber text-navy-deep" : "text-white/70 hover:text-amber"}`}
              >
                GR
              </button>
            </div>
            <button
              className="lg:hidden text-white/80 hover:text-amber p-1"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[var(--navy-deep)] lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-3xl text-amber">3K</span>
              <button onClick={() => setOpen(false)} className="text-white/80 p-1" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-6 pt-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-white/90 hover:text-amber transition-colors"
                  >
                    {pick(l.label, lang)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-1 text-xs tracking-widest border border-white/10 rounded-full overflow-hidden"
              >
                <button
                  onClick={() => setLang("en")}
                  className={`px-4 py-2 ${lang === "en" ? "bg-amber text-navy-deep" : "text-white/70"}`}
                >
                  EN 🇬🇧
                </button>
                <button
                  onClick={() => setLang("gr")}
                  className={`px-4 py-2 ${lang === "gr" ? "bg-amber text-navy-deep" : "text-white/70"}`}
                >
                  GR 🇬🇷
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  const { lang } = useI18n();
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
        <div>
          <div className="font-display text-3xl text-amber">3K The Residence</div>
          <p className="text-sm text-white/50 mt-2 max-w-xs">
            {lang === "en"
              ? "A private retreat in Heraklion, Crete — one minute from the port."
              : "Ιδιωτική κατοικία στο Ηράκλειο της Κρήτης — ένα λεπτό από το λιμάνι."}
          </p>
        </div>
        <div className="text-xs tracking-luxury uppercase text-white/40">
          © {new Date().getFullYear()} 3K The Residence · Heraklion · Crete
        </div>
      </div>
    </footer>
  );
}
