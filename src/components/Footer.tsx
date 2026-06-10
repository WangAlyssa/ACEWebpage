"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-700 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ACE</span>
              </div>
              <span className="font-semibold text-white">{t(siteConfig.name)}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              {locale === "zh"
                ? "北美留学生首选的国际暑校平台，让暑假成为大学里最值得的投资。"
                : "The preferred international summer school platform for North American students."}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === "zh" ? "快速链接" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">{locale === "zh" ? "关于我们" : "About"}</Link></li>
              <li><Link href="#campuses" className="hover:text-white transition-colors">{locale === "zh" ? "校区课程" : "Campuses"}</Link></li>
              <li><Link href="#credit" className="hover:text-white transition-colors">{locale === "zh" ? "转学分" : "Credit Transfer"}</Link></li>
              <li><Link href="#stories" className="hover:text-white transition-colors">{locale === "zh" ? "学员故事" : "Stories"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === "zh" ? "联系方式" : "Contact"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="leading-relaxed">{siteConfig.address.cn}</li>
              <li className="leading-relaxed">{siteConfig.address.us}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {locale === "zh" ? "关注我们" : "Follow Us"}
            </h4>
            <div className="flex gap-3">
              {["微信", "微博", "Ins"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-white/10 hover:text-white transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-navy-500">
              {locale === "zh" ? "扫码关注微信公众号" : "Scan to follow WeChat"}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-500">
          <p>© {new Date().getFullYear()} ACE International Credit Courses. All rights reserved.</p>
          <p>{locale === "zh" ? "沪ICP备XXXXXXXX号" : "ICP License XXXXXXXX"}</p>
        </div>
      </div>
    </footer>
  );
}
