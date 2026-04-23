import { TopNav } from "@/components/top-nav";
import { matchHelpers } from "@/lib/matching";
import { sampleCapacity, sampleRequests } from "@/lib/sample-data";

export default function MatchResultsPage() {
  const results = matchHelpers(sampleRequests[0], sampleCapacity);

  return (
    <div>
      <TopNav />
      <section className="rounded-3xl bg-white p-6 shadow-md">
        <p className="text-xs uppercase tracking-wide text-indigo-500">Match results</p>
        <h1 className="mt-2 text-2xl font-semibold">Best-fit humans ready to respond</h1>
        <p className="mt-2 text-sm text-slate-600">Ranked using support type, urgency, format fit, and reliability signal.</p>

        <ul className="mt-5 space-y-3">
          {results.map(({ helper, score }) => (
            <li key={helper.id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{helper.name} · {helper.pronouns}</p>
                  <p className="text-sm text-slate-600">{helper.timeAvailable} · {helper.formatPreference.join(" / ")}</p>
                  <p className="mt-1 text-xs text-slate-500">Supports: {helper.supportTypes.join(", ")}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Match {score}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-3xl border border-dashed border-slate-300 p-5 text-sm text-slate-500">
        Empty state: if no immediate matches exist, Tether offers “quiet-mode” support prompts, delayed matching, and direct links
        to safety resources.
      </section>
    </div>
  );
}
