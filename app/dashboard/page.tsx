import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { sampleRequests } from "@/lib/sample-data";

export default function DashboardPage() {
  return (
    <div>
      <TopNav />
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl bg-white p-6 shadow-md">
          <p className="text-xs uppercase tracking-wider text-indigo-500">Your care panel</p>
          <h2 className="mt-2 text-2xl font-semibold">How are you showing up today?</h2>
          <div className="mt-5 space-y-2">
            <Link href="/need-support" className="block rounded-2xl bg-slate-900 px-4 py-3 text-white">
              I need support
            </Link>
            <Link href="/have-capacity" className="block rounded-2xl border border-slate-200 px-4 py-3">
              I have capacity
            </Link>
          </div>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-md">
          <p className="text-xs uppercase tracking-wider text-indigo-500">Live network signal</p>
          <h3 className="mt-2 text-xl font-semibold">Recent requests</h3>
          <ul className="mt-4 space-y-3">
            {sampleRequests.map((r) => (
              <li key={r.id} className="rounded-xl bg-slate-50 p-3 text-sm">
                <p className="font-medium">{r.userName} · {r.supportType}</p>
                <p className="text-slate-600">{r.urgency} · prefers {r.format.toLowerCase()}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-4 rounded-3xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        Empty state preview: when no requests are active, this panel surfaces a soft reminder that rest is productive and that
        users can check safety resources any time.
      </section>
    </div>
  );
}
