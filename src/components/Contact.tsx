"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export default function Contact() {
  const { locale } = useLocale();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              {locale === "zh" ? "联系我们" : "Contact Us"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              {locale === "zh" ? "准备好开启你的暑校之旅了吗？" : "Ready to Start Your Summer Journey?"}
            </h2>
            <p className="mt-4 text-navy-600 leading-relaxed">
              {locale === "zh"
                ? "填写表单或直接联系我们，专业顾问将为你提供一对一咨询服务。"
                : "Fill out the form or reach out directly. Our advisors are ready to help you one-on-one."}
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">
                    {locale === "zh" ? "邮箱咨询" : "Email"}
                  </div>
                  <a href={`mailto:${siteConfig.email}`} className="text-accent-600 hover:underline text-sm">
                    {siteConfig.email}
                  </a>
                  <div className="text-sm text-navy-500 mt-1">
                    {locale === "zh" ? "教授招聘" : "Faculty Recruitment"}:{" "}
                    <a href={`mailto:${siteConfig.facultyEmail}`} className="text-accent-600 hover:underline">
                      {siteConfig.facultyEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">
                    {locale === "zh" ? "办公地址" : "Office Locations"}
                  </div>
                  <p className="text-sm text-navy-600 mt-1">{siteConfig.address.us}</p>
                  <p className="text-sm text-navy-600 mt-1">{siteConfig.address.cn}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="p-8 bg-navy-50 rounded-2xl border border-navy-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  {locale === "zh" ? "姓名" : "Name"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                  placeholder={locale === "zh" ? "你的姓名" : "Your name"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  {locale === "zh" ? "邮箱" : "Email"}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-navy-700 mb-1.5">
                {locale === "zh" ? "所在大学" : "University"}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                placeholder={locale === "zh" ? "例如：NYU" : "e.g. NYU"}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-navy-700 mb-1.5">
                {locale === "zh" ? "意向校区" : "Preferred Campus"}
              </label>
              <select className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all">
                <option value="">{locale === "zh" ? "请选择" : "Select..."}</option>
                <option value="hufs">HUFS {locale === "zh" ? "首尔" : "Seoul"}</option>
                <option value="sahmyook">{locale === "zh" ? "实践大学" : "Sahmyook"}</option>
                <option value="sfsu">SFSU Online</option>
                <option value="bc">BC Online</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-navy-700 mb-1.5">
                {locale === "zh" ? "留言" : "Message"}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all resize-none"
                placeholder={locale === "zh" ? "有什么想了解的？" : "What would you like to know?"}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3.5 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-accent-500/25"
            >
              <Send className="w-4 h-4" />
              {locale === "zh" ? "提交咨询" : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
