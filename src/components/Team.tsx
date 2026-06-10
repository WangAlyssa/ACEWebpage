"use client";

import { professors } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProfessorCard({ name, university }: { name: string; university: string }) {
  const colors = [
    "from-navy-700 to-navy-900",
    "from-accent-600 to-accent-500",
    "from-navy-600 to-accent-600",
    "from-navy-800 to-navy-600",
  ];
  const color = colors[name.length % colors.length];

  return (
    <div className="flex-shrink-0 w-56 mx-3 p-5 bg-white rounded-2xl border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm mb-3`}
      >
        {getInitials(name)}
      </div>
      <h4 className="font-semibold text-navy-900 text-sm leading-snug">{name}</h4>
      <p className="text-xs text-navy-500 mt-1 leading-relaxed">{university}</p>
    </div>
  );
}

export default function Team() {
  const { locale } = useLocale();
  const doubled = [...professors, ...professors];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            {locale === "zh" ? "教授团队" : "Faculty"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            {locale === "zh" ? "北美名校教授亲授" : "Professors from Top US Universities"}
          </h2>
          <p className="mt-4 text-navy-600">
            {locale === "zh"
              ? "200+ 位来自北美顶尖大学的教授，为你带来原汁原味的课堂体验"
              : "200+ professors from leading North American universities deliver authentic classroom experiences"}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee">
          {doubled.map((prof, i) => (
            <ProfessorCard key={`${prof.name}-${i}`} name={prof.name} university={prof.university} />
          ))}
        </div>
      </div>
    </section>
  );
}
