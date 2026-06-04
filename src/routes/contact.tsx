import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useI18n, pick } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Reserve — 3K The Residence" }] }),
  component: BookingPage,
});

// ── Helpers ────────────────────────────────────────────────────────────────
function formatDate(d: Date) {
  return d.toISOString().split("T")[0];
}
function addMonths(d: Date, n: number) {
  const r = new Date(d);
  r.setMonth(r.getMonth() + n);
  return r;
}
function getDatesInRange(start: Date, end: Date): string[] {
  const dates: string[] = [];
  const cur = new Date(start);
  while (cur < end) {
    dates.push(formatDate(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}
function getCalDays(month: Date) {
  const year = month.getFullYear();
  const m = month.getMonth();
  const first = new Date(year, m, 1).getDay();
  const days = new Date(year, m + 1, 0).getDate();
  return { first: first === 0 ? 6 : first - 1, days };
}

// ── Shared styles ──────────────────────────────────────────────────────────
const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
};
const amber = "#c9a84c";
const amberGrad = "linear-gradient(135deg,#c9a84c 0%,#e8c96a 100%)";
const navy = "#0a0e1a";

// ── Field component (matches 3K contact page style) ────────────────────────
function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">{label}</label>
      <input
        {...rest}
        className="w-full bg-transparent px-4 py-3 rounded-lg text-white text-sm
          placeholder-white/20 focus:outline-none transition-all duration-200"
        style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.5)"; }}
        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
function BookingPage() {
  const { lang } = useI18n();

  // Form fields
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName]   = React.useState("");
  const [phone, setPhone]         = React.useState("");
  const [email, setEmail]         = React.useState("");
  const [guests, setGuests]       = React.useState(2);

  // Calendar
  const [checkIn, setCheckIn]   = React.useState<string | null>(null);
  const [checkOut, setCheckOut] = React.useState<string | null>(null);
  const [hovered, setHovered]   = React.useState<string | null>(null);
  const [calMonth, setCalMonth] = React.useState(new Date());

  // Data
  const [blocked, setBlocked]     = React.useState<string[]>([]);
  const [pricePerNight, setPrice] = React.useState<number>(0);

  // Status
  const [loading, setLoading] = React.useState(false);
  const [state, setState]     = React.useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError]     = React.useState<string | null>(null);

  const today = formatDate(new Date());

  React.useEffect(() => {
    supabase.from("blocked_dates").select("date").then(({ data }) => {
      if (data) setBlocked(data.map((d: { date: string }) => d.date));
    });
    supabase.from("pricing").select("price_per_night").single().then(({ data }) => {
      if (data) setPrice(Number(data.price_per_night));
    });
  }, []);

  const nights =
    checkIn && checkOut
      ? Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)
      : 0;
  const total = nights * pricePerNight;

  const locale = lang === "gr" ? "el-GR" : "en-GB";
  const dayLabels = lang === "gr"
    ? ["Δε","Τρ","Τε","Πε","Πα","Σα","Κυ"]
    : ["Mo","Tu","We","Th","Fr","Sa","Su"];

  function isInRange(dateStr: string) {
    if (!checkIn) return false;
    const end = checkOut || hovered;
    if (!end) return false;
    return dateStr > checkIn && dateStr < end;
  }

  function handleDayClick(dateStr: string) {
    if (dateStr < today || blocked.includes(dateStr)) return;
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr);
      setCheckOut(null);
    } else {
      if (dateStr <= checkIn) {
        setCheckIn(dateStr);
      } else {
        const range = getDatesInRange(new Date(checkIn), new Date(dateStr));
        if (range.some((d) => blocked.includes(d))) {
          setError(lang === "gr" ? "Η επιλογή περιέχει μη διαθέσιμες ημέρες." : "Selection contains unavailable dates.");
          return;
        }
        setCheckOut(dateStr);
        setError(null);
      }
    }
  }

  async function handleSubmit() {
    if (!firstName || !lastName || !phone || !email || !checkIn || !checkOut) {
      setError(lang === "gr" ? "Παρακαλώ συμπληρώστε όλα τα πεδία." : "Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError(null);
    setState("sending");
    const { error: err } = await supabase.from("bookings").insert({
      first_name:  firstName,
      last_name:   lastName,
      phone,
      email,
      guests,
      check_in:    checkIn,
      check_out:   checkOut,
      nights,
      total_price: total,
      status:      "unread",
    });
    setLoading(false);
    if (err) {
      setState("error");
      setError(lang === "gr" ? "Κάτι πήγε στραβά. Δοκιμάστε ξανά." : "Something went wrong. Please try again.");
    } else {
      setState("ok");
    }
  }

  const { first: startDay, days: daysInMonth } = getCalDays(calMonth);

  // ── SUCCESS SCREEN ─────────────────────────────────────────────────────
  if (state === "ok") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: navy }}>
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px] rounded-full opacity-10
            bg-[radial-gradient(circle,_#c9a84c_0%,_transparent_70%)]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: `1px solid ${amber}`,
              boxShadow: `0 0 32px rgba(201,168,76,0.2)`,
            }}
          >
            <Check className="w-8 h-8" style={{ color: amber }} />
          </motion.div>
          <h2 className="font-display text-4xl text-white">
            {lang === "gr" ? "Ευχαριστούμε!" : "Thank you!"}
          </h2>
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            {lang === "gr"
              ? "Το αίτημά σας ελήφθη. Θα επικοινωνήσουμε σύντομα μαζί σας."
              : "Your reservation request has been received. We'll be in touch shortly."}
          </p>
          <button
            onClick={() => {
              setState("idle");
              setCheckIn(null); setCheckOut(null);
              setFirstName(""); setLastName(""); setPhone(""); setEmail("");
            }}
            className="mt-8 px-6 py-3 rounded-lg text-xs tracking-[0.2em] uppercase font-medium
              transition-all duration-200 hover:opacity-90"
            style={{ background: amberGrad, color: navy }}
          >
            {lang === "gr" ? "Νέα Κράτηση" : "New Reservation"}
          </button>
        </motion.div>
      </div>
    );
  }

  // ── MAIN PAGE ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-3xl mx-auto" style={{ color: "#fff" }}>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2
          w-[700px] h-[400px] rounded-full opacity-5
          bg-[radial-gradient(circle,_#c9a84c_0%,_transparent_70%)]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: amber }}>
          3K The Residence
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white">
          {lang === "gr" ? "Κράτηση" : "Reserve"}
        </h1>
        <p className="mt-3 text-sm text-white/45">
          {lang === "gr"
            ? "Συμπληρώστε τα στοιχεία σας και επιλέξτε τις ημερομηνίες σας."
            : "Fill in your details and select your dates."}
        </p>
      </motion.div>

      {/* ── Guest Info ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="rounded-2xl p-8 mb-5 relative z-10"
        style={glass}
      >
        <h2 className="font-display text-xl text-white mb-6 tracking-wide">
          {lang === "gr" ? "Στοιχεία Επισκέπτη" : "Guest Details"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label={lang === "gr" ? "Όνομα" : "First Name"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={lang === "gr" ? "Μάνος" : "John"}
          />
          <Field
            label={lang === "gr" ? "Επώνυμο" : "Last Name"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lang === "gr" ? "Παπαδόπουλος" : "Smith"}
          />
          <Field
            label={lang === "gr" ? "Τηλέφωνο" : "Phone"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+30 694 000 0000"
          />
          <Field
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
          <div>
            <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">
              {lang === "gr" ? "Επισκέπτες" : "Guests"}
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-transparent px-4 py-3 rounded-lg text-white text-sm
                focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[1,2,3,4,5,6,7,8].map((n) => (
                <option key={n} value={n} style={{ background: navy }}>
                  {n} {lang === "gr" ? (n === 1 ? "επισκέπτης" : "επισκέπτες") : (n === 1 ? "guest" : "guests")}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* ── Calendar ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-2xl p-8 mb-5 relative z-10"
        style={glass}
      >
        <h2 className="font-display text-xl text-white mb-2 tracking-wide">
          {lang === "gr" ? "Επιλογή Ημερομηνιών" : "Select Dates"}
        </h2>
        <p className="text-xs text-white/35 mb-6">
          {checkIn && checkOut
            ? `Check-in: ${checkIn}  →  Check-out: ${checkOut}`
            : checkIn
            ? (lang === "gr" ? "Τώρα επιλέξτε check-out" : "Now select check-out")
            : (lang === "gr" ? "Επιλέξτε ημερομηνία check-in" : "Select check-in date")}
        </p>

        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => setCalMonth((m) => addMonths(m, -1))}
            className="p-2 rounded-full transition-colors duration-200 text-white/50 hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-display text-lg text-white">
            {calMonth.toLocaleDateString(locale, { month: "long", year: "numeric" })}
          </span>
          <button
            onClick={() => setCalMonth((m) => addMonths(m, 1))}
            className="p-2 rounded-full transition-colors duration-200 text-white/50 hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 mb-2">
          {dayLabels.map((d) => (
            <div key={d} className="text-center text-[10px] tracking-widest text-white/25 py-1">{d}</div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = `${calMonth.getFullYear()}-${String(calMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isPast       = dateStr < today;
            const isBlockedDay = blocked.includes(dateStr);
            const isStart      = dateStr === checkIn;
            const isEnd        = dateStr === checkOut;
            const inRange      = isInRange(dateStr);

            let bg = "transparent";
            let color = "rgba(255,255,255,0.8)";
            let cursor: React.CSSProperties["cursor"] = "pointer";
            let border = "1px solid transparent";
            let textDecoration = "none";

            if (isPast || isBlockedDay) {
              color = "rgba(255,255,255,0.2)";
              cursor = "not-allowed";
              textDecoration = "line-through";
              if (isBlockedDay && !isPast) { color = "rgba(239,68,68,0.5)"; }
            } else if (isStart || isEnd) {
              bg = amber;
              color = navy;
              border = `1px solid ${amber}`;
            } else if (inRange) {
              bg = "rgba(201,168,76,0.12)";
              color = amber;
              border = "1px solid rgba(201,168,76,0.2)";
            }

            return (
              <div
                key={dateStr}
                className="relative h-10 w-full flex items-center justify-center text-sm
                  rounded-lg transition-all duration-150 select-none"
                style={{ background: bg, color, cursor, border, textDecoration }}
                onClick={() => handleDayClick(dateStr)}
                onMouseEnter={(e) => {
                  if (checkIn && !checkOut) setHovered(dateStr);
                  if (!isPast && !isBlockedDay && !isStart && !isEnd && !inRange) {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  setHovered(null);
                  if (!isPast && !isBlockedDay && !isStart && !isEnd && !inRange) {
                    (e.currentTarget as HTMLDivElement).style.background = "transparent";
                  }
                }}
              >
                {day}
                {isBlockedDay && !isPast && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-400" />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Price Summary ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {checkIn && checkOut && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-2xl p-6 mb-5 relative z-10"
            style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                  {lang === "gr" ? "Σύνολο" : "Total"}
                </p>
                <p className="mt-1 font-display text-3xl text-white">
                  {total.toLocaleString(locale)} €
                </p>
              </div>
              <div className="text-right text-sm text-white/45">
                <p>{nights} {lang === "gr" ? (nights === 1 ? "βράδι" : "βράδια") : (nights === 1 ? "night" : "nights")}</p>
                <p>{pricePerNight} € / {lang === "gr" ? "βράδι" : "night"}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 px-4 py-3 rounded-lg text-sm relative z-10"
            style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "rgba(239,68,68,0.9)" }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        onClick={handleSubmit}
        disabled={loading || !checkIn || !checkOut || !firstName || !lastName || !phone || !email}
        className="w-full py-4 rounded-lg text-sm tracking-[0.2em] uppercase font-medium
          transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-35 disabled:cursor-not-allowed
          relative z-10"
        style={{ background: amberGrad, color: navy, boxShadow: "0 4px 32px rgba(201,168,76,0.2)" }}
      >
        {loading
          ? (lang === "gr" ? "Αποστολή..." : "Sending...")
          : (lang === "gr" ? "Αποστολή Αιτήματος" : "Send Request")}
      </motion.button>

      <p className="mt-4 text-center text-xs text-white/25 relative z-10">
        {lang === "gr"
          ? "Το αίτημά σας δεν είναι επιβεβαιωμένη κράτηση. Θα επικοινωνήσουμε για επιβεβαίωση."
          : "This request is not a confirmed reservation. We will contact you to confirm."}
      </p>
    </div>
  );
}