"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function Testimonials() {
  const { locale, t } = useLocale();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const current = testimonials[active];

  return (
    <section id="stories" className="py-20 lg:py-28 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-accent-400 text-sm font-medium mb-4">
            {locale === "zh" ? "学员故事" : "Student Stories"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ACEer {locale === "zh" ? "说" : "Says"}
          </h2>
          <p className="mt-4 text-navy-300">
            {locale === "zh" ? "学分 + 体验，这才是真正的暑假！" : "Credits + experience — the real summer!"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 sm:p-12">
            <Quote className="w-10 h-10 text-accent-500/40 mb-6" />
            <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed">
              {t(current.quote)}
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold">
                {current.name[0]}
              </div>
              <div>
                <div className="text-white font-semibold">{current.name}</div>
                <div className="text-navy-400 text-sm">
                  {t(current.school)} · {locale === "zh" ? "校区" : "Campus"}：{t(current.campus)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active ? "bg-accent-500 w-6" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
