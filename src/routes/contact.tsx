import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { useI18n, pick } from "@/lib/i18n";
import { LeafletMap } from "@/components/LeafletMap";
import { RESIDENCE } from "@/data/places";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Reserve — 3K The Residence" }] }),
  component: Contact,
});

const schema = z.object({
  full_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  check_in: z.string().optional().or(z.literal("")),
  check_out: z.string().optional().or(z.literal("")),
  guests: z.coerce.number().int().min(1).max(20).optional().or(z.nan()),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Contact() {
  const { lang, t } = useI18n();
  const [state, setState] = React.useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = React.useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setState("sending");
    const d = parsed.data;
    const { error } = await supabase.from("contact_inquiries").insert({
      full_name: d.full_name,
      email: d.email,
      phone: d.phone || null,
      check_in: d.check_in || null,
      check_out: d.check_out || null,
      guests: Number.isFinite(d.guests as number) ? (d.guests as number) : null,
      message: d.message || null,
    });
    if (error) {
      console.error(error);
      setState("error");
      return;
    }
    setState("ok");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
        <div className="text-xs tracking-luxury uppercase text-amber">{lang === "en" ? "CONTACT" : "ΕΠΙΚΟΙΝΩΝΙΑ"}</div>
        <h1 className="font-display text-5xl md:text-7xl text-white mt-4">{pick(t.contact.title, lang)}</h1>
        <p className="text-white/60 mt-3">{pick(t.contact.sub, lang)}</p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 glass-card rounded-xl p-8"
        >
          {state === "ok" ? (
            <div className="py-16 text-center">
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="mx-auto w-16 h-16 rounded-full bg-amber/15 border border-amber flex items-center justify-center amber-glow"
              >
                <Check className="w-8 h-8 text-amber" />
              </motion.div>
              <h3 className="font-display text-3xl text-white mt-6">{pick(t.contact.success, lang)}</h3>
              <button onClick={() => setState("idle")} className="mt-6 text-amber text-xs tracking-widest uppercase">
                {lang === "en" ? "Send another" : "Νέο μήνυμα"}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field name="full_name" label={pick(t.contact.name, lang)} required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="email" type="email" label={pick(t.contact.email, lang)} required />
                <Field name="phone" label={pick(t.contact.phone, lang)} />
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                <Field name="check_in" type="date" label={pick(t.contact.checkin, lang)} />
                <Field name="check_out" type="date" label={pick(t.contact.checkout, lang)} />
                <Field name="guests" type="number" label={pick(t.contact.guests, lang)} min={1} max={20} />
              </div>
              <div>
                <label className="text-[10px] tracking-luxury uppercase text-white/50 block mb-2">{pick(t.contact.message, lang)}</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-white text-sm focus:border-amber focus:outline-none transition-colors"
                />
              </div>
              {err && <div className="text-destructive text-sm">{err}</div>}
              {state === "error" && <div className="text-destructive text-sm">{pick(t.contact.error, lang)}</div>}
              <button
                type="submit"
                disabled={state === "sending"}
                className="bg-amber text-[var(--navy-deep)] px-8 py-3.5 rounded-md text-sm tracking-widest uppercase amber-glow hover:amber-glow-strong transition disabled:opacity-50"
              >
                {state === "sending" ? "..." : pick(t.contact.submit, lang)}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          <ContactCard icon={<MapPin className="w-5 h-5" />} title={lang === "en" ? "Location" : "Τοποθεσία"} value="Heraklion, Crete, Greece" />
          <ContactCard icon={<Mail className="w-5 h-5" />} title="Email" value="stay@3ktheresidence.com" />
          <ContactCard icon={<Phone className="w-5 h-5" />} title={lang === "en" ? "Phone" : "Τηλέφωνο"} value="+30 2810 000 000" />
        </motion.div>
      </div>

      <div className="mt-16">
        <LeafletMap lat={RESIDENCE.lat} lng={RESIDENCE.lng} zoom={15} label={RESIDENCE.name} height={420} />
      </div>
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-[10px] tracking-luxury uppercase text-white/50 block mb-2">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-white text-sm focus:border-amber focus:outline-none transition-colors"
      />
    </div>
  );
}

function ContactCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="glass-card rounded-xl p-5 flex items-start gap-4">
      <div className="text-amber">{icon}</div>
      <div>
        <div className="text-[10px] tracking-luxury uppercase text-white/50">{title}</div>
        <div className="text-white/90 mt-1 text-sm">{value}</div>
      </div>
    </div>
  );
}
