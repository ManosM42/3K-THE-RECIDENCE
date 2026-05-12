import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "framer-motion";
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

function Admin() {
  const [session, setSession] = React.useState<"loading" | "in" | "out">("loading");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState<string | null>(null);
  const [rows, setRows] = React.useState<Inquiry[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const sub = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s ? "in" : "out");
    });
    supabase.auth.getSession().then(({ data }) => setSession(data.session ? "in" : "out"));
    return () => { sub.data.subscription.unsubscribe(); };
  }, []);

  React.useEffect(() => {
    if (session !== "in") return;
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
  }, [session]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setErr(error.message);
  };

  if (session === "loading") return <div className="pt-40 text-center text-white/50 text-sm">Loading…</div>;

  if (session === "out") {
    return (
      <div className="pt-32 pb-24 px-6 max-w-md mx-auto">
        <h1 className="font-display text-4xl text-white text-center">Admin</h1>
        <p className="text-white/50 text-sm text-center mt-2">Sign in to view inquiries</p>
        <form onSubmit={signIn} className="mt-10 glass-card rounded-xl p-7 space-y-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Email"
            className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-white text-sm focus:border-amber focus:outline-none" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password"
            className="w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-white text-sm focus:border-amber focus:outline-none" />
          {err && <div className="text-destructive text-sm">{err}</div>}
          <button className="w-full bg-amber text-[var(--navy-deep)] py-3 rounded-md text-sm tracking-widest uppercase amber-glow">
            Sign in
          </button>
          <p className="text-[11px] text-white/40 text-center">Admin role required to view data.</p>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-4xl text-white">Inquiries</h1>
          <p className="text-white/50 text-sm mt-1">{rows.length} total</p>
        </div>
        <button onClick={() => supabase.auth.signOut()} className="text-xs tracking-widest uppercase text-white/60 hover:text-amber">
          Sign out
        </button>
      </div>
      <div className="mt-10 overflow-x-auto glass-card rounded-xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] tracking-luxury uppercase text-white/50 border-b border-white/10">
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Phone</th>
              <th className="px-4 py-4">Check-in</th>
              <th className="px-4 py-4">Check-out</th>
              <th className="px-4 py-4">Guests</th>
              <th className="px-4 py-4">Message</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={9} className="px-4 py-8 text-center text-white/50">Loading…</td></tr>}
            {!loading && rows.length === 0 && <tr><td colSpan={9} className="px-4 py-12 text-center text-white/40">No inquiries yet.</td></tr>}
            {rows.map((r) => (
              <motion.tr
                key={r.id}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="border-b border-white/5 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3 text-white/90">{r.full_name}</td>
                <td className="px-4 py-3 text-white/70">{r.email}</td>
                <td className="px-4 py-3 text-white/70">{r.phone || "—"}</td>
                <td className="px-4 py-3 text-white/70">{r.check_in || "—"}</td>
                <td className="px-4 py-3 text-white/70">{r.check_out || "—"}</td>
                <td className="px-4 py-3 text-white/70">{r.guests ?? "—"}</td>
                <td className="px-4 py-3 text-white/70 max-w-xs truncate" title={r.message ?? ""}>{r.message || "—"}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] tracking-widest uppercase ${
                    r.status === "new" ? "bg-amber/20 text-amber" : "bg-white/10 text-white/60"
                  }`}>{r.status}</span>
                </td>
                <td className="px-4 py-3 text-white/50 text-xs">{new Date(r.created_at).toLocaleString()}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
