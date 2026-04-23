import Link from "next/link";
import { TopNav } from "@/components/top-nav";

export default function AuthPage() {
  return (
    <div>
      <TopNav />
      <section className="mx-auto max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        <h1 className="text-2xl font-semibold">Welcome back to Tether</h1>
        <p className="mt-2 text-sm text-slate-600">Demo auth only. No real credentials required.</p>

        <form className="mt-6 space-y-3">
          <input className="w-full rounded-xl border border-slate-200 p-3" placeholder="Email" />
          <input type="password" className="w-full rounded-xl border border-slate-200 p-3" placeholder="Password" />
          <button type="button" className="w-full rounded-xl bg-slate-900 p-3 font-medium text-white">
            Sign in
          </button>
        </form>

        <div className="my-4 flex items-center gap-2 text-xs text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />OR<span className="h-px flex-1 bg-slate-200" />
        </div>

        <button className="w-full rounded-xl border border-slate-200 p-3 font-medium text-slate-700">Create account</button>
        <Link href="/dashboard" className="mt-4 block text-center text-sm font-medium text-indigo-600">
          Continue to dashboard →
        </Link>
      </section>
    </div>
  );
}
