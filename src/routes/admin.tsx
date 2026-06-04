import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import {
  LogOut, Check, X, Calendar, Euro, Mail, Phone, Users,
  Eye, EyeOff, ChevronLeft, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — 3K The Residence" }] }),
  component: Admin,
});

// ── Types ──────────────────────────────────────────────────────────────────
type Booking = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  guests: number;
  check_in: string;
  check_out: string;
  nights: number;
  total_price: number;
  status: "read" | "unread";
  created_at: string;
};

// ── Auth (secret code — same pattern as original 3K project) ──────────────
const SECRET = "3ktheresidents2026!";
const SESSION_KEY = "3k_admin_auth";

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

// ── Shared glass styles ────────────────────────────────────────────────────
const glass = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(20px)",
} as React.CSSProperties;

const glassHover = "rgba(255,255,255,0.025)";
const amber = "#c9a84c";
const amberGrad = "linear-gradient(135deg,#c9a84c 0%,#e8c96a 100%)";
const navy = "#0a0e1a";

// ══════════════════════════════════════════════════════════════════════════
function Admin() {
  // ── Auth
  const [authed, setAuthed] = React.useState<boolean>(() => sessionStorage.getItem(SESSION_KEY) === "1");
  const [code, setCode] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [shake, setShake] = React.useState(false);

  // ── Data
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const [blocked, setBlocked] = React.useState<string[]>([]);
  const [pricePerNight, setPrice] = React.useState<number>(0);
  const [newPrice, setNewPrice] = React.useState<string>("");

  // ── UI
  const [tab, setTab] = React.useState<"bookings" | "calendar" | "pricing">("bookings");
  const [filter, setFilter] = React.useState<"all" | "unread" | "read">("all");
  const [calMonth, setCalMonth] = React.useState(new Date());
  const [selected, setSelected] = React.useState<Booking | null>(null);
  const [priceSaved, setPriceSaved] = React.useState(false);
  const [loadingData, setLoadingData] = React.useState(false);

  const today = formatDate(new Date());

  // ── Auth submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === SECRET) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
      setErr(false);
    } else {
      setErr(true);
      setShake(true);
      setCode("");
      setTimeout(() => setShake(false), 600);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setCode("");
    setBookings([]);
    setSelected(null);
  };

  // ── Load data
  React.useEffect(() => {
    if (!authed) return;
    setLoadingData(true);
    Promise.all([
      supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      supabase.from("blocked_dates").select("date"),
      supabase.from("pricing").select("price_per_night").single(),
    ]).then(([b, bl, p]) => {
      if (b.data) setBookings(b.data as Booking[]);
      if (bl.data) setBlocked(bl.data.map((d: { date: string }) => d.date));
      if (p.data) {
        setPrice(Number(p.data.price_per_night));
        setNewPrice(String(p.data.price_per_night));
      }
      setLoadingData(false);
    });
  }, [authed]);

  // ── Booking actions
  const markStatus = async (id: string, status: "read" | "unread") => {
    await supabase.from("bookings").update({ status }).eq("id", id);
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    if (selected?.id === id) setSelected((s) => s ? { ...s, status } : s);
  };

  const deleteBooking = async (id: string) => {
    await supabase.from("bookings").delete().eq("id", id);
    setBookings((prev) => prev.filter((b) => b.id !== id));
    setSelected(null);
  };

  // ── Calendar actions
  const toggleBlocked = async (dateStr: string) => {
    if (blocked.includes(dateStr)) {
      await supabase.from("blocked_dates").delete().eq("date", dateStr);
      setBlocked((prev) => prev.filter((d) => d !== dateStr));
    } else {
      await supabase.from("blocked_dates").insert({ date: dateStr });
      setBlocked((prev) => [...prev, dateStr]);
    }
  };

  const isBookedDate = (dateStr: string) =>
    bookings.some((b) => dateStr >= b.check_in && dateStr < b.check_out);

  // ── Pricing
  const savePrice = async () => {
    const val = Number(newPrice);
    if (isNaN(val) || val < 0) return;
    const { data } = await supabase.from("pricing").select("id").single();
    if (data?.id) {
      await supabase.from("pricing").update({ price_per_night: val, updated_at: new Date().toISOString() }).eq("id", data.id);
    }
    setPrice(val);
    setPriceSaved(true);
    setTimeout(() => setPriceSaved(false), 2500);
  };

  const filtered = bookings.filter((b) => filter === "all" ? true : b.status === filter);
  const unreadCount = bookings.filter((b) => b.status === "unread").length;
  const { first: startDay, days: daysInMonth } = getCalDays(calMonth);

  // ══ LOGIN SCREEN ══════════════════════════════════════════════════════════
  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: navy }}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px] rounded-full opacity-10
            bg-[radial-gradient(circle,_#c9a84c_0%,_transparent_70%)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm relative z-10"
        >
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
              style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              <span className="font-display text-xl tracking-wider" style={{ color: amber }}>3K</span>
            </div>
            <h1 className="font-display text-3xl text-white tracking-wide">The Residence</h1>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2">Admin Panel</p>
          </div>

          <motion.form
            onSubmit={handleLogin}
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 space-y-5"
            style={glass}
          >
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block">Access Code</label>
              <input
                type="password"
                value={code}
                onChange={(e) => { setCode(e.target.value); setErr(false); }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin(e as any)}
                placeholder="Enter secret code"
                autoFocus
                className="w-full px-4 py-3 rounded-lg text-white text-sm bg-transparent
                  placeholder-white/20 focus:outline-none transition-all duration-200"
                style={{
                  border: err ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
                  boxShadow: err ? "0 0 0 3px rgba(239,68,68,0.1)" : "none",
                }}
              />
              <AnimatePresence>
                {err && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-red-400 text-xs pt-0.5"
                  >
                    Incorrect code. Try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-xs tracking-[0.2em] uppercase font-medium
                transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: amberGrad, color: navy, boxShadow: "0 4px 24px rgba(201,168,76,0.25)" }}
            >
              Enter
            </button>
          </motion.form>
        </motion.div>
      </div>
    );
  }

  // ══ ADMIN PANEL ═══════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen" style={{ background: navy }}>

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2
          w-[800px] h-[400px] rounded-full opacity-5
          bg-[radial-gradient(circle,_#c9a84c_0%,_transparent_70%)]" />
      </div>

      {/* Top bar */}
      <div
        className="relative z-10 h-16 px-6 lg:px-10 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,14,26,0.8)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-display tracking-wider"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", color: amber }}
          >
            3K
          </div>
          <span className="text-white/80 font-display text-lg tracking-wide">The Residence</span>
          <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/35
            hover:text-white/70 transition-colors duration-200"
        >
          <LogOut className="w-3.5 h-3.5" /> Sign out
        </button>
      </div>

      {/* Tabs */}
      <div
        className="relative z-10 px-6 lg:px-10 flex gap-8"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {([
          { key: "bookings", label: "Κρατήσεις" },
          { key: "calendar", label: "Ημερολόγιο" },
          { key: "pricing",  label: "Τιμολόγηση" },
        ] as const).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="relative py-4 text-sm tracking-wide transition-colors duration-200"
            style={{ color: tab === t.key ? amber : "rgba(255,255,255,0.4)" }}
          >
            {t.label}
            {t.key === "bookings" && unreadCount > 0 && (
              <span
                className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                style={{ background: amberGrad, color: navy }}
              >
                {unreadCount}
              </span>
            )}
            {tab === t.key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: amberGrad }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-8">

        {/* ── BOOKINGS TAB ── */}
        {tab === "bookings" && (
          <div className="flex gap-6" style={{ minHeight: "calc(100vh - 200px)" }}>

            {/* Left: list */}
            <div className="w-full lg:w-96 flex flex-col gap-3 overflow-y-auto pr-1">

              {/* Filter pills */}
              <div className="flex gap-2 mb-1">
                {(["all", "unread", "read"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className="px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: filter === f ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                      border: filter === f ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      color: filter === f ? amber : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {f === "all" ? "Όλες" : f === "unread" ? "Αδιάβαστες" : "Διαβασμένες"}
                  </button>
                ))}
              </div>

              {loadingData && (
                <div className="py-12 text-center text-white/25 text-sm">Loading…</div>
              )}

              {!loadingData && filtered.length === 0 && (
                <div className="py-12 text-center text-white/25 text-sm">Δεν υπάρχουν κρατήσεις</div>
              )}

              {filtered.map((b) => (
                <motion.div
                  key={b.id}
                  layout
                  onClick={() => { setSelected(b); markStatus(b.id, "read"); }}
                  className="cursor-pointer rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: selected?.id === b.id ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                    border: selected?.id === b.id
                      ? "1px solid rgba(201,168,76,0.35)"
                      : b.status === "unread"
                      ? "1px solid rgba(201,168,76,0.2)"
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                  whileHover={{ y: -1 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm text-white/90">
                        {b.first_name} {b.last_name}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        {b.check_in} → {b.check_out}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {b.status === "unread" && (
                        <span className="w-2 h-2 rounded-full" style={{ background: amber }} />
                      )}
                      <span className="text-xs font-medium" style={{ color: amber }}>
                        {b.total_price ? `${b.total_price}€` : "—"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[10px] text-white/30 tracking-wide">
                    <span>{b.guests} επισκ.</span>
                    <span>{b.nights} {b.nights === 1 ? "βράδι" : "βράδια"}</span>
                    <span>{new Date(b.created_at).toLocaleDateString("el-GR")}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: detail */}
            <div className="hidden lg:block flex-1">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="rounded-2xl p-8 h-full overflow-y-auto"
                    style={glass}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h2 className="font-display text-3xl text-white">
                          {selected.first_name} {selected.last_name}
                        </h2>
                        <p className="text-[10px] tracking-widest text-white/30 mt-1 uppercase">
                          {new Date(selected.created_at).toLocaleDateString("el-GR", {
                            day: "numeric", month: "long", year: "numeric",
                          })}
                        </p>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase"
                        style={
                          selected.status === "unread"
                            ? { background: "rgba(201,168,76,0.15)", color: amber }
                            : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
                        }
                      >
                        {selected.status === "unread" ? "Αδιάβαστη" : "Διαβασμένη"}
                      </span>
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {[
                        { icon: <Mail className="w-4 h-4" />, label: "Email", value: selected.email },
                        { icon: <Phone className="w-4 h-4" />, label: "Τηλέφωνο", value: selected.phone },
                        { icon: <Users className="w-4 h-4" />, label: "Επισκέπτες", value: `${selected.guests}` },
                        { icon: <Euro className="w-4 h-4" />, label: "Σύνολο", value: selected.total_price ? `${selected.total_price} €` : "—" },
                        { icon: <Calendar className="w-4 h-4" />, label: "Check-in", value: selected.check_in },
                        { icon: <Calendar className="w-4 h-4" />, label: "Check-out", value: selected.check_out },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl p-4"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <div className="flex items-center gap-2 mb-1" style={{ color: amber }}>
                            {item.icon}
                            <span className="text-[10px] tracking-[0.2em] uppercase">{item.label}</span>
                          </div>
                          <p className="text-sm font-medium text-white/85">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Price breakdown */}
                    <div
                      className="rounded-xl p-5 mb-8"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>Σύνολο</p>
                          <p className="font-display text-3xl text-white mt-1">{selected.total_price ?? "—"} €</p>
                        </div>
                        <div className="text-right text-sm text-white/50">
                          <p>{selected.nights} {selected.nights === 1 ? "βράδι" : "βράδια"}</p>
                          <p>{pricePerNight} € / βράδι</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 flex-wrap">
                      {selected.status === "unread" ? (
                        <button
                          onClick={() => markStatus(selected.id, "read")}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-widest uppercase
                            transition-all duration-200 hover:opacity-80"
                          style={{ background: amberGrad, color: navy }}
                        >
                          <Eye className="w-3.5 h-3.5" /> Σήμανση ως Διαβασμένη
                        </button>
                      ) : (
                        <button
                          onClick={() => markStatus(selected.id, "unread")}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-widest uppercase
                            transition-all duration-200"
                          style={{ border: "1px solid rgba(201,168,76,0.4)", color: amber }}
                        >
                          <EyeOff className="w-3.5 h-3.5" /> Σήμανση ως Αδιάβαστη
                        </button>
                      )}
                      <button
                        onClick={() => deleteBooking(selected.id)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs tracking-widest uppercase
                          transition-all duration-200 hover:bg-red-500/20"
                        style={{ border: "1px solid rgba(239,68,68,0.3)", color: "rgba(239,68,68,0.8)" }}
                      >
                        <X className="w-3.5 h-3.5" /> Διαγραφή
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center gap-3"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Calendar className="w-5 h-5 text-white/20" />
                    </div>
                    <p className="text-white/25 text-sm tracking-wide">Επιλέξτε μια κράτηση</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ── CALENDAR TAB ── */}
        {tab === "calendar" && (
          <div className="max-w-xl">
            <div className="rounded-2xl p-8" style={glass}>
              <h2 className="font-display text-2xl text-white mb-1">Διαχείριση Ημερών</h2>
              <p className="text-xs text-white/35 mb-2">
                Κλικ σε μια μέρα για κλείσιμο/άνοιγμα.
              </p>
              <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/40 mb-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-red-500/60 inline-block" /> Κλειστή
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm inline-block" style={{ background: "rgba(201,168,76,0.3)" }} /> Κρατημένη
                </span>
              </div>

              <div className="flex items-center justify-between mb-5">
                <button
                  onClick={() => setCalMonth((m) => addMonths(m, -1))}
                  className="p-2 rounded-full transition-colors duration-200 text-white/50 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-display text-lg text-white">
                  {calMonth.toLocaleDateString("el-GR", { month: "long", year: "numeric" })}
                </span>
                <button
                  onClick={() => setCalMonth((m) => addMonths(m, 1))}
                  className="p-2 rounded-full transition-colors duration-200 text-white/50 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 mb-2">
                {["Δε","Τρ","Τε","Πε","Πα","Σα","Κυ"].map((d) => (
                  <div key={d} className="text-center text-[10px] tracking-widest text-white/25 py-1">{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: startDay }).map((_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dateStr = `${calMonth.getFullYear()}-${String(calMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                  const isPast = dateStr < today;
                  const isBlock = blocked.includes(dateStr);
                  const isBooked = isBookedDate(dateStr);

                  let bg = "transparent";
                  let color = "rgba(255,255,255,0.75)";
                  let cursor = "pointer";
                  let border = "1px solid transparent";

                  if (isPast) { color = "rgba(255,255,255,0.2)"; cursor = "default"; }
                  else if (isBlock) { bg = "rgba(239,68,68,0.5)"; color = "#fff"; border = "1px solid rgba(239,68,68,0.7)"; }
                  else if (isBooked) { bg = "rgba(201,168,76,0.2)"; color = amber; border = `1px solid rgba(201,168,76,0.3)`; }

                  return (
                    <div
                      key={dateStr}
                      onClick={() => !isPast && toggleBlocked(dateStr)}
                      title={isBlock ? "Κλειστή — κλικ για άνοιγμα" : isBooked ? "Κρατημένη" : "Κλικ για κλείσιμο"}
                      className="h-10 w-full flex items-center justify-center text-sm rounded-lg transition-all duration-150 select-none"
                      style={{ background: bg, color, cursor, border }}
                      onMouseEnter={(e) => { if (!isPast && !isBlock && !isBooked) (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.06)"; }}
                      onMouseLeave={(e) => { if (!isPast && !isBlock && !isBooked) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── PRICING TAB ── */}
        {tab === "pricing" && (
          <div className="max-w-md">
            <div className="rounded-2xl p-8" style={glass}>
              <h2 className="font-display text-2xl text-white mb-1">Τιμολόγηση</h2>
              <p className="text-xs text-white/35 mb-8">
                Ορίστε την τιμή ανά βράδι. Εμφανίζεται αυτόματα στους πελάτες κατά την κράτηση.
              </p>

              <div className="mb-6">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-2">
                  Τιμή ανά βράδι (€)
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="0"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg text-white text-sm bg-transparent
                      placeholder-white/20 focus:outline-none transition-all duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                    placeholder="π.χ. 400"
                  />
                  <button
                    onClick={savePrice}
                    className="px-5 py-3 rounded-lg text-xs tracking-[0.2em] uppercase font-medium
                      flex items-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{ background: amberGrad, color: navy, boxShadow: "0 4px 20px rgba(201,168,76,0.2)" }}
                  >
                    <Check className="w-4 h-4" />
                    {priceSaved ? "Αποθηκεύτηκε!" : "Αποθήκευση"}
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: "rgba(201,168,76,0.6)" }}>
                  Προεπισκόπηση
                </p>
                <div className="space-y-2.5 text-sm">
                  {[2, 3, 5, 7].map((n) => (
                    <div key={n} className="flex justify-between">
                      <span className="text-white/45">{n} {n === 1 ? "βράδι" : "βράδια"}</span>
                      <span className="font-medium" style={{ color: amber }}>
                        {(n * Number(newPrice || 0)).toLocaleString("el-GR")} €
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}