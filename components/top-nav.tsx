import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Need support", "/need-support"],
  ["Have capacity", "/have-capacity"],
  ["Matches", "/matches"],
  ["Safety", "/safety"],
] as const;

export function TopNav() {
  return (
    <nav className="soft-shell mb-5 flex flex-wrap items-center gap-2 rounded-2xl border border-white/70 p-3 text-sm shadow-sm">
      <Link href="/" className="mr-2 rounded-full bg-slate-900 px-3 py-1.5 font-medium text-white">
        Tether
      </Link>
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="rounded-full px-3 py-1.5 text-slate-700 transition hover:bg-white/70">
          {label}
        </Link>
      ))}
    </nav>
  );
}
