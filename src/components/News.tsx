"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function News() {
  const { locale, t } = useLocale();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              NEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              {locale === "zh" ? "暑期快讯" : "Summer News"}
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
          >
            {locale === "zh" ? "查看更多" : "View All"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <article
              key={item.id}
              className={`group p-6 rounded-2xl border border-navy-100 card-hover ${
                i === 0 ? "md:col-span-2 md:flex md:gap-8 md:items-start bg-navy-50/50" : "bg-white"
              }`}
            >
              <div className={i === 0 ? "flex-1" : ""}>
                <div className="flex items-center gap-2 text-sm text-navy-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={item.date}>{item.date}</time>
                </div>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors leading-snug">
                  {t(item.title)}
                </h3>
                <p className="mt-3 text-navy-600 text-sm leading-relaxed line-clamp-3">
                  {t(item.excerpt)}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  {locale === "zh" ? "阅读全文" : "Read More"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              {i === 0 && (
                <div className="hidden md:block w-48 h-32 rounded-xl bg-gradient-to-br from-navy-700 to-accent-600 shrink-0 mt-4 md:mt-0" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
