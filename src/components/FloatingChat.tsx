"use client";

import { MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function FloatingChat() {
  const { locale } = useLocale();

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-navy-800 text-white rounded-full shadow-xl shadow-navy-900/30 hover:bg-navy-900 transition-all hover:scale-105 group"
      aria-label={locale === "zh" ? "联系客服" : "Contact support"}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline group-hover:inline">
        {locale === "zh" ? "客服" : "Support"}
      </span>
    </a>
  );
}
