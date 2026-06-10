"use client";

import { Zap, Shield, Wallet, Globe, CheckCircle, GraduationCap } from "lucide-react";
import { benefits } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

const iconMap = {
  zap: Zap,
  shield: Shield,
  wallet: Wallet,
  globe: Globe,
  check: CheckCircle,
  graduation: GraduationCap,
};

export default function Benefits() {
  const { locale, t } = useLocale();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            {locale === "zh" ? "优质体验" : "Why ACE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            {locale === "zh" ? "由我们一起创造" : "Better Summer Experience"}
          </h2>
          <p className="mt-4 text-navy-600">
            {locale === "zh"
              ? "学分 + 体验，这才是真正的暑假"
              : "Credits + experience — that's what summer should be"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={t(benefit.title)}
                className="group p-6 bg-white rounded-2xl border border-navy-100 card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    i % 3 === 0
                      ? "bg-accent-500/10 text-accent-600 group-hover:bg-accent-500 group-hover:text-white"
                      : i % 3 === 1
                      ? "bg-navy-100 text-navy-700 group-hover:bg-navy-800 group-hover:text-white"
                      : "bg-warm-500/10 text-warm-500 group-hover:bg-warm-500 group-hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{t(benefit.title)}</h3>
                <p className="mt-2 text-navy-600 text-sm leading-relaxed">{t(benefit.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
