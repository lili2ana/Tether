import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { generateSupportCard } from "@/lib/support-card";
import { matchHelpers } from "@/lib/matching";
import { sampleCapacity, SupportRequest } from "@/lib/sample-data";

export default async function SupportCardReviewPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const request: SupportRequest = {
    id: "demo-request",
    userName: "You",
    location: "Local",
    energyLevel: (params.energy as SupportRequest["energyLevel"]) || "Low",
    emotionalState: (params.emotion as SupportRequest["emotionalState"]) || "Overwhelmed",
    urgency: (params.urgency as SupportRequest["urgency"]) || "Today",
    supportType: (params.type as SupportRequest["supportType"]) || "Grounding",
    format: (params.format as SupportRequest["format"]) || "Text",
    explanationLoad: (params.load as SupportRequest["explanationLoad"]) || "Minimal",
  };

  const card = generateSupportCard(request);
  const matches = matchHelpers(request, sampleCapacity);

  return (
    <div>
      <TopNav />
      <section className="rounded-3xl bg-white p-6 shadow-md">
        <p className="text-xs uppercase tracking-wide text-indigo-500">AI-generated support card</p>
        <h1 className="mt-2 text-2xl font-semibold">Review before sending</h1>
        <div className="mt-4 rounded-2xl bg-indigo-50 p-4">
          <p className="font-medium text-indigo-900">{card.headline}</p>
          <p className="mt-2 text-sm text-indigo-900/85">{card.body}</p>
          <p className="mt-3 text-xs text-indigo-900/70">{card.toneGuidance}</p>
        </div>
        <div className="mt-5 flex gap-2">
          <Link href="/matches" className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">Send request</Link>
          <Link href="/need-support" className="rounded-xl border border-slate-200 px-4 py-2 text-sm">Edit details</Link>
        </div>
      </section>

      <section className="mt-4 rounded-3xl bg-white p-6 shadow-md">
        <h2 className="text-lg font-semibold">Preview likely matches</h2>
        <ul className="mt-3 space-y-2">
          {matches.map((m) => (
            <li key={m.helper.id} className="rounded-xl bg-slate-50 p-3 text-sm">
              {m.helper.name} · {m.helper.pronouns} · score {m.score}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
