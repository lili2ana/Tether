"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TopNav } from "@/components/top-nav";

const steps = ["State", "Support", "Format"];

export default function NeedSupportPage() {
  const [energyLevel, setEnergyLevel] = useState("Low");
  const [emotionalState, setEmotionalState] = useState("Overwhelmed");
  const [urgency, setUrgency] = useState("Today");
  const [supportType, setSupportType] = useState("Grounding");
  const [preferredFormat, setPreferredFormat] = useState("Voice note");
  const [explanationLoad, setExplanationLoad] = useState("Minimal");

  const completion = useMemo(() => {
    return [energyLevel, emotionalState, urgency, supportType, preferredFormat, explanationLoad].filter(Boolean).length;
  }, [energyLevel, emotionalState, urgency, supportType, preferredFormat, explanationLoad]);

  return (
    <div>
      <TopNav />
      <section className="rounded-3xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-semibold">I need support</h1>
        <p className="mt-2 text-sm text-slate-600">A 60-second check-in to shape a clear, low-friction request.</p>
        <div className="mt-4 flex gap-2 text-xs">
          {steps.map((step) => (
            <span key={step} className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700">
              {step}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <SelectField label="Energy level" value={energyLevel} setValue={setEnergyLevel} options={["Low", "Medium", "High"]} />
          <SelectField label="Emotional state" value={emotionalState} setValue={setEmotionalState} options={["Anxious", "Overwhelmed", "Flat", "Hopeful"]} />
          <SelectField label="Urgency" value={urgency} setValue={setUrgency} options={["Soon", "Today", "Now"]} />
          <SelectField label="Support type needed" value={supportType} setValue={setSupportType} options={["Check-in", "Practical help", "Grounding", "Accountability"]} />
          <SelectField label="Preferred format" value={preferredFormat} setValue={setPreferredFormat} options={["Text", "Voice note", "Call"]} />
          <SelectField label="Explanation load" value={explanationLoad} setValue={setExplanationLoad} options={["Minimal", "Some context", "Detailed"]} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-slate-500">Completion: {completion}/6</p>
          <Link
            href={`/need-support/review?energy=${energyLevel}&emotion=${emotionalState}&urgency=${urgency}&type=${supportType}&format=${preferredFormat}&load=${explanationLoad}`}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Review support card
          </Link>
        </div>
      </section>
    </div>
  );
}

function SelectField({
  label,
  value,
  setValue,
  options,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="text-sm">
      <span className="mb-1 block text-slate-600">{label}</span>
      <select className="w-full rounded-xl border border-slate-200 p-3" value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
