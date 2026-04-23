import { TopNav } from "@/components/top-nav";

const resources = [
  { name: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 anytime" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741" },
  { name: "Emergency Services", detail: "If immediate danger, call 911" },
];

export default function SafetyPage() {
  return (
    <div>
      <TopNav />
      <section className="rounded-3xl bg-white p-6 shadow-md">
        <p className="text-xs uppercase tracking-wide text-rose-500">Safety resources</p>
        <h1 className="mt-2 text-2xl font-semibold">If this feels bigger than peer support</h1>
        <p className="mt-2 text-sm text-slate-600">
          Tether is not therapy or emergency care. This page keeps immediate support pathways one tap away.
        </p>

        <ul className="mt-5 space-y-3">
          {resources.map((resource) => (
            <li key={resource.name} className="rounded-xl bg-rose-50 p-4">
              <p className="font-medium text-rose-900">{resource.name}</p>
              <p className="text-sm text-rose-800">{resource.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
