"use client";

import { useLocale } from "@/lib/locale-context";

const galleryItems = [
  { id: 1, gradient: "from-navy-700 to-accent-600", label: "Campus Life" },
  { id: 2, gradient: "from-accent-600 to-cyan-500", label: "Study Group" },
  { id: 3, gradient: "from-navy-800 to-navy-600", label: "City Tour" },
  { id: 4, gradient: "from-warm-500 to-orange-400", label: "Night Market" },
  { id: 5, gradient: "from-violet-600 to-purple-500", label: "Graduation" },
  { id: 6, gradient: "from-emerald-600 to-teal-500", label: "Friends" },
  { id: 7, gradient: "from-navy-600 to-accent-500", label: "Lecture Hall" },
  { id: 8, gradient: "from-rose-500 to-pink-500", label: "Culture" },
];

export default function Gallery() {
  const { locale } = useLocale();

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            MOMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            {locale === "zh" ? "精彩瞬间" : "Memorable Moments"}
          </h2>
          <p className="mt-4 text-navy-600">
            {locale === "zh" ? "每一帧，都是青春最好的注脚" : "Every frame captures the best of youth"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden aspect-square card-hover cursor-pointer group ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[280px]" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-colors" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-navy-400 text-sm mt-8">
          {locale === "zh"
            ? "照片墙占位 — 后续可替换为真实学员照片"
            : "Photo gallery placeholder — replace with real student photos"}
        </p>
      </div>
    </section>
  );
}
