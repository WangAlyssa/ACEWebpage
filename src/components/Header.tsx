"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";
import AceLogo from "@/components/AceLogo";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AceLogo
              size="md"
              priority
              imageClassName="transition-transform group-hover:scale-105"
            />
            <span
              className={`font-semibold text-lg hidden sm:block transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            >
              {t(siteConfig.name)}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t(item.label)}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-xl shadow-xl border border-navy-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + t(child.label)}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-navy-600 hover:bg-navy-50"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4" />
              {locale === "zh" ? "EN" : "中文"}
            </button>

            <Link
              href="#"
              className={`hidden sm:inline-flex px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                scrolled ? "text-navy-700 hover:bg-navy-50" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {locale === "zh" ? "登录" : "Login"}
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25 transition-all hover:shadow-accent-500/40"
            >
              {locale === "zh" ? "立即报名" : "Apply Now"}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-navy-700" : "text-white"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-navy-800 rounded-lg hover:bg-navy-50"
                >
                  {t(item.label)}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + t(child.label)}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-navy-600 rounded-lg hover:bg-navy-50"
                      >
                        {t(child.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
