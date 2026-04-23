import Link from "next/link";
import { TopNav } from "@/components/top-nav";

const principles = [
  "Ask for support before things become unbearable",
  "Offer support within clear personal limits",
  "Make care feel lightweight, dignified, and human",
];

export default function LandingPage() {
  return (
    <div>
      <TopNav />
      <section className="soft-shell rounded-3xl border border-white/70 p-6 shadow-xl sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">Tether · Reciprocal Care Network</p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">Human support before disconnection turns into crisis.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Tether helps people ask for small forms of real support and helps others show up with clear boundaries. Private by
          default, emotionally intelligent by design.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/auth" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            Try investor demo
          </Link>
          <Link href="/safety" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
            View safety model
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-3">
        {principles.map((p) => (
          <article key={p} className="soft-shell rounded-2xl border border-white/80 p-4 text-sm text-slate-700">
            {p}
          </article>
        ))}
      </section>
    </div>
  );
}
