"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function Hero() {
  const { locale, t } = useLocale();

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-warm-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-6">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span>Summer 2026 · {locale === "zh" ? "报名开放中" : "Now Open"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {locale === "zh" ? (
                <>
                  让暑假，成为
                  <br />
                  <span className="text-accent-400">最值得的投资</span>
                </>
              ) : (
                <>
                  Make Summer Your
                  <br />
                  <span className="text-accent-400">Best Investment</span>
                </>
              )}
            </h1>

            <p className="mt-6 text-lg text-navy-200 leading-relaxed max-w-lg">
              {t(siteConfig.tagline)}。
              {locale === "zh"
                ? "北美名校教授亲授，全球校区任你选，轻松转学分回校。"
                : " Learn from top US professors, choose global campuses, transfer credits with ease."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#campuses"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50"
              >
                {locale === "zh" ? "探索校区" : "Explore Campuses"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#credit"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                {locale === "zh" ? "查转学分政策" : "Check Credit Policy"}
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={t(stat.label)}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-navy-300 mt-1">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-warm-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="space-y-4">
                  {[
                    { city: "Seoul", uni: "HUFS", weeks: "4-5", color: "from-blue-500 to-cyan-400" },
                    { city: "Taipei", uni: "NTUST", weeks: "4-5", color: "from-emerald-500 to-teal-400" },
                    { city: "Online", uni: "SFSU / BC", weeks: "5-9", color: "from-violet-500 to-purple-400" },
                  ].map((campus) => (
                    <div
                      key={campus.city}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${campus.color} flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                      >
                        {campus.city.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{campus.city}</div>
                        <div className="text-navy-300 text-sm">{campus.uni} · {campus.weeks} weeks</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <span className="text-navy-300 text-sm">
                    {locale === "zh" ? "覆盖全球热门城市" : "Campuses across global cities"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
    </section>
  );
}
