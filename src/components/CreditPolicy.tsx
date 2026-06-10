"use client";

import { useState } from "react";
import { Search, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { popularUniversities } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function CreditPolicy() {
  const { locale } = useLocale();
  const [query, setQuery] = useState("");

  const filtered = popularUniversities.filter((u) =>
    u.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="credit" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 text-sm font-medium mb-4">
              {locale === "zh" ? "转学分政策" : "Credit Transfer"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              {locale === "zh" ? (
                <>
                  上暑校，还能
                  <span className="gradient-text"> 修学分？</span>
                </>
              ) : (
                <>
                  Earn Credits &
                  <span className="gradient-text"> Transfer Back</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-navy-600 leading-relaxed">
              {locale === "zh"
                ? "查一查你所在大学的转学分政策。ACE 拥有丰富的转学分成功案例，专业顾问团队为你一对一指导。"
                : "Check your university's credit transfer policy. ACE has proven transfer records with expert advisors ready to guide you."}
            </p>

            <ul className="mt-8 space-y-4">
              {[
                locale === "zh" ? "专业一对一转学分指导" : "One-on-one credit transfer guidance",
                locale === "zh" ? "200+ 北美名校教授授课" : "200+ professors from top US universities",
                locale === "zh" ? "95% 转学分成功率" : "95% credit transfer success rate",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-navy-100 to-accent-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-navy-900 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    {locale === "zh" ? "查转学分政策" : "Credit Policy Lookup"}
                  </h3>
                  <p className="text-navy-400 text-sm">
                    {locale === "zh" ? "输入你的大学名称" : "Enter your university name"}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={locale === "zh" ? "例如：NYU, USC, UCLA..." : "e.g. NYU, USC, UCLA..."}
                  className="w-full pl-12 pr-4 py-3.5 bg-navy-800 border border-navy-700 rounded-xl text-white placeholder:text-navy-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                />
              </div>

              {query && (
                <div className="mt-4 max-h-48 overflow-y-auto space-y-1">
                  {filtered.length > 0 ? (
                    filtered.map((uni) => (
                      <button
                        key={uni}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-navy-200 hover:bg-navy-800 transition-colors group"
                      >
                        <span>{uni}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent-400" />
                      </button>
                    ))
                  ) : (
                    <p className="text-navy-400 text-sm px-4 py-2">
                      {locale === "zh" ? "未找到匹配大学，请联系我们咨询" : "No match found. Contact us for guidance."}
                    </p>
                  )}
                </div>
              )}

              <button className="mt-6 w-full py-3.5 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors flex items-center justify-center gap-2">
                {locale === "zh" ? "查询" : "Search"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
