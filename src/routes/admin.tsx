import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — 3K The Residence" }] }),
  component: Admin,
});

type Inquiry = {
  id: string; full_name: string; email: string; phone: string | null;
  check_in: string | null; check_out: string | null; guests: number | null;
  message: string | null; status: string; created_at: string;
};

const SECRET = "3ktheresidents2026!";
const SESSION_KEY = "3k_admin_auth";

type StatusFilter = "all" | "new" | "read";

function Admin() {
  const [authed, setAuthed] = React.useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  });
  const [code, setCode] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [shake, setShake] = React.useState(false);
  const [rows, setRows] = React.useState<Inquiry[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<StatusFilter>("all");
  const [expanded, setExpanded] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!authed) return;
    setLoading(true);
    supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error(error);
        setRows((data as Inquiry[]) ?? []);
        setLoading(false);
      });
  }, [authed]);

  const handleSubmit = (e: React.FormEvent) => {
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

  const handleSignOut = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setCode("");
    setRows([]);
  };

  const markAs = async (id: string, status: string) => {
    await supabase.from("contact_inquiries").update({ status }).eq("id", id);
    setRows((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
  };

  const filtered = rows.filter((r) => {
    const matchSearch =
      r.full_name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      (r.message ?? "").toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || r.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const counts = {
    all: rows.length,
    new: rows.filter((r) => r.status === "new").length,
    read: rows.filter((r) => r.status !== "new").length,
  };

  // ── LOGIN ──────────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "var(--navy-deep, #0a0e1a)" }}>

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
          {/* Logo mark */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full
              border border-amber/30 mb-5"
              style={{ background: "rgba(201,168,76,0.07)" }}>
              <span className="font-display text-amber text-xl tracking-wider">3K</span>
            </div>
            <h1 className="font-display text-3xl text-white tracking-wide">The Residence</h1>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2">Admin Access</p>
          </div>

          {/* Card */}
          <motion.form
            onSubmit={handleSubmit}
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">
                Access Code
              </label>
              <input
                type="password"
                value={code}
                onChange={(e) => { setCode(e.target.value); setErr(false); }}
                placeholder="Enter secret code"
                autoFocus
                className="w-full px-4 py-3 rounded-lg text-white text-sm
                  bg-transparent placeholder-white/20
                  focus:outline-none transition-all duration-200"
                style={{
                  border: err
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(255,255,255,0.12)",
                  boxShadow: err ? "0 0 0 3px rgba(239,68,68,0.1)" : "none",
                }}
              />
              <AnimatePresence>
                {err && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
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
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #e8c96a 100%)",
                color: "#0a0e1a",
                boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
              }}
            >
              Enter
            </button>
          </motion.form>
        </motion.div>
      </div>
    );
  }

  // ── DASHBOARD ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between flex-wrap gap-4 mb-10"
      >
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-amber/70 mb-1">3K The Residence</p>
          <h1 className="font-display text-4xl md:text-5xl text-white">Inquiries</h1>
        </div>
        <button
          onClick={handleSignOut}
          className="text-[10px] tracking-[0.2em] uppercase text-white/40
            hover:text-white/80 transition-colors duration-200 mt-2"
        >
          Sign out
        </button>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3 mb-6"
      >
        {(["all", "new", "read"] as StatusFilter[]).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className="rounded-xl p-4 text-left transition-all duration-200"
            style={{
              background: statusFilter === s
                ? "rgba(201,168,76,0.12)"
                : "rgba(255,255,255,0.03)",
              border: statusFilter === s
                ? "1px solid rgba(201,168,76,0.3)"
                : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className={`text-2xl font-display ${statusFilter === s ? "text-amber" : "text-white"}`}>
              {counts[s]}
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-white/40 mt-0.5">
              {s === "all" ? "Total" : s === "new" ? "New" : "Read"}
            </div>
          </button>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-6"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or message…"
          className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/25
            bg-transparent focus:outline-none transition-all duration-200"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        />
      </motion.div>

      {/* Table / Cards */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Name", "Email", "Phone", "Check-in", "Check-out", "Guests", "Status", "Submitted", ""].map((h) => (
                  <th key={h} className="px-5 py-4 text-left text-[10px] tracking-[0.18em] uppercase text-white/35">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={9} className="px-5 py-12 text-center text-white/30 text-sm">
                    Loading…
                  </td>
                </tr>
              )}
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-5 py-14 text-center text-white/25 text-sm">
                    No inquiries found.
                  </td>
                </tr>
              )}
              {filtered.map((r, i) => (
                <React.Fragment key={r.id}>
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                    className="cursor-pointer transition-colors duration-150"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.025)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td className="px-5 py-3.5 text-white/90 font-medium">{r.full_name}</td>
                    <td className="px-5 py-3.5 text-white/60">{r.email}</td>
                    <td className="px-5 py-3.5 text-white/60">{r.phone || "—"}</td>
                    <td className="px-5 py-3.5 text-white/60">{r.check_in || "—"}</td>
                    <td className="px-5 py-3.5 text-white/60">{r.check_out || "—"}</td>
                    <td className="px-5 py-3.5 text-white/60">{r.guests ?? "—"}</td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase ${
                        r.status === "new"
                          ? "bg-amber/15 text-amber"
                          : "bg-white/8 text-white/45"
                      }`}>{r.status}</span>
                    </td>
                    <td className="px-5 py-3.5 text-white/40 text-xs whitespace-nowrap">
                      {new Date(r.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit", month: "short", year: "numeric",
                      })}
                      <br />
                      <span className="text-white/25">
                        {new Date(r.created_at).toLocaleTimeString("en-GB", {
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        {r.status === "new" ? (
                          <button
                            onClick={() => markAs(r.id, "read")}
                            className="text-[10px] tracking-widest uppercase text-white/35
                              hover:text-white/70 transition-colors duration-150 whitespace-nowrap"
                          >
                            Mark read
                          </button>
                        ) : (
                          <button
                            onClick={() => markAs(r.id, "new")}
                            className="text-[10px] tracking-widest uppercase text-amber/50
                              hover:text-amber transition-colors duration-150 whitespace-nowrap"
                          >
                            Mark new
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>

                  {/* Expanded message row */}
                  <AnimatePresence>
                    {expanded === r.id && (
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <td colSpan={9} className="px-5 pb-5 pt-1">
                          <div className="rounded-xl p-4 text-sm text-white/60 leading-relaxed"
                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <span className="text-[10px] tracking-widest uppercase text-white/30 block mb-2">Message</span>
                            {r.message || <em className="text-white/25">No message provided.</em>}
                          </div>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y divide-white/5">
          {loading && (
            <div className="py-12 text-center text-white/30 text-sm">Loading…</div>
          )}
          {!loading && filtered.length === 0 && (
            <div className="py-14 text-center text-white/25 text-sm">No inquiries found.</div>
          )}
          {filtered.map((r) => (
            <div key={r.id} className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-white/90 font-medium text-sm">{r.full_name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{r.email}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase shrink-0 ${
                  r.status === "new" ? "bg-amber/15 text-amber" : "bg-white/8 text-white/45"
                }`}>{r.status}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { label: "Check-in", value: r.check_in },
                  { label: "Check-out", value: r.check_out },
                  { label: "Guests", value: r.guests },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-lg p-2.5"
                    style={{ background: "rgba(255,255,255,0.03)" }}>
                    <p className="text-[9px] tracking-widest uppercase text-white/30 mb-1">{label}</p>
                    <p className="text-white/65">{value ?? "—"}</p>
                  </div>
                ))}
              </div>

              {r.message && (
                <div className="rounded-lg p-3 text-xs text-white/50 leading-relaxed"
                  style={{ background: "rgba(255,255,255,0.03)" }}>
                  {r.message}
                </div>
              )}

              <div className="flex items-center justify-between text-[10px]">
                <span className="text-white/30">
                  {new Date(r.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit", month: "short", year: "numeric",
                  })}
                </span>
                {r.status === "new" ? (
                  <button onClick={() => markAs(r.id, "read")}
                    className="tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors">
                    Mark read
                  </button>
                ) : (
                  <button onClick={() => markAs(r.id, "new")}
                    className="tracking-widest uppercase text-amber/50 hover:text-amber transition-colors">
                    Mark new
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer count */}
      {!loading && filtered.length > 0 && (
        <p className="text-center text-white/20 text-xs tracking-widest mt-6">
          {filtered.length} of {rows.length} inquiries
        </p>
      )}
    </div>
  );
}