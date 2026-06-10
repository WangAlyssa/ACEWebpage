"use client";

import Link from "next/link";
import { MapPin, Calendar, Clock, ArrowUpRight, Wifi, Building2 } from "lucide-react";
import { campuses } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function Campuses() {
  const { locale, t } = useLocale();

  return (
    <section id="campuses" className="py-20 lg:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            {locale === "zh" ? "校区一览" : "Our Campuses"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            {locale === "zh" ? "覆盖全球热门城市" : "Global Campus Network"}
          </h2>
          <p className="mt-4 text-navy-600 leading-relaxed">
            {locale === "zh"
              ? "线下沉浸体验与线上灵活修学分，总有一款适合你的暑假计划"
              : "Immersive on-campus experiences and flexible online options for every summer plan"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campuses.map((campus) => (
            <article
              key={campus.id}
              className={`group relative bg-white rounded-2xl border card-hover overflow-hidden ${
                campus.featured ? "border-accent-500/30 ring-1 ring-accent-500/20" : "border-navy-100"
              }`}
            >
              {campus.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                    {locale === "zh" ? "热门" : "Popular"}
                  </span>
                </div>
              )}

              <div className="h-32 bg-gradient-to-br from-navy-800 to-navy-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  {campus.type === "online" ? (
                    <Wifi className="w-4 h-4 text-accent-400" />
                  ) : (
                    <Building2 className="w-4 h-4 text-accent-400" />
                  )}
                  <span className="text-white/80 text-sm font-medium">
                    {campus.type === "online"
                      ? locale === "zh" ? "线上" : "Online"
                      : locale === "zh" ? "线下" : "On-campus"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                      {t(campus.name)}
                    </h3>
                    <p className="text-sm text-navy-500 mt-1">{t(campus.university)}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Calendar className="w-4 h-4 text-navy-400 shrink-0" />
                    <span>{campus.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <MapPin className="w-4 h-4 text-navy-400 shrink-0" />
                    <span>{campus.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Clock className="w-4 h-4 text-navy-400 shrink-0" />
                    <span>{t(campus.duration)}</span>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  {locale === "zh" ? "了解详情" : "Learn More"}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}

          <article className="group relative bg-navy-50 rounded-2xl border border-dashed border-navy-200 flex flex-col items-center justify-center p-8 min-h-[280px] card-hover">
            <div className="w-14 h-14 rounded-2xl bg-navy-100 flex items-center justify-center mb-4">
              <span className="text-2xl">🌏</span>
            </div>
            <h3 className="text-lg font-bold text-navy-700">COMING SOON</h3>
            <p className="text-sm text-navy-500 mt-2 text-center">
              {locale === "zh" ? "更多校区敬请期待" : "More campuses coming soon"}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
