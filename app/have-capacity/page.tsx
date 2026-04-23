"use client";

import { useState } from "react";
import { TopNav } from "@/components/top-nav";

export default function HaveCapacityPage() {
  const [timeAvailable, setTimeAvailable] = useState("20 min");
  const [supportTypes, setSupportTypes] = useState<string[]>(["Check-in"]);
  const [formatPreference, setFormatPreference] = useState("Text");
  const [bandwidth, setBandwidth] = useState("Steady");

  function toggleType(type: string) {
    setSupportTypes((current) => (current.includes(type) ? current.filter((t) => t !== type) : [...current, type]));
  }

  return (
    <div>
      <TopNav />
      <section className="rounded-3xl bg-white p-6 shadow-md">
        <h1 className="text-2xl font-semibold">I have capacity</h1>
        <p className="mt-2 text-sm text-slate-600">Share your limits clearly so support stays sustainable.</p>
        <div className="mt-5 grid gap-3">
          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Time available</span>
            <select className="w-full rounded-xl border border-slate-200 p-3" value={timeAvailable} onChange={(e) => setTimeAvailable(e.target.value)}>
              <option>10 min</option>
              <option>20 min</option>
              <option>30+ min</option>
            </select>
          </label>

          <div>
            <p className="mb-1 text-sm text-slate-600">Support types available</p>
            <div className="flex flex-wrap gap-2">
              {["Check-in", "Practical help", "Grounding", "Accountability"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`rounded-full px-3 py-1.5 text-sm ${supportTypes.includes(type) ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Format preference</span>
            <select className="w-full rounded-xl border border-slate-200 p-3" value={formatPreference} onChange={(e) => setFormatPreference(e.target.value)}>
              <option>Text</option>
              <option>Voice note</option>
              <option>Call</option>
            </select>
          </label>

          <label className="text-sm">
            <span className="mb-1 block text-slate-600">Bandwidth level</span>
            <select className="w-full rounded-xl border border-slate-200 p-3" value={bandwidth} onChange={(e) => setBandwidth(e.target.value)}>
              <option>Light</option>
              <option>Steady</option>
              <option>High</option>
            </select>
          </label>
        </div>

        <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
          You are currently offering {timeAvailable}, {supportTypes.join(", ") || "no support types"}, via {formatPreference.toLowerCase()} with {bandwidth.toLowerCase()} bandwidth.
        </p>
      </section>
    </div>
  );
}
