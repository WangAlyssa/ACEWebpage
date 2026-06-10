"use client";

import { CreditCard, RefreshCw, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function Pricing() {
  const { locale } = useLocale();

  const paymentMethods = [
    { icon: CreditCard, label: locale === "zh" ? "信用卡 / 借记卡" : "Credit / Debit Card" },
    { icon: CreditCard, label: locale === "zh" ? "支付宝 / 微信支付" : "Alipay / WeChat Pay" },
    { icon: CreditCard, label: locale === "zh" ? "银行转账" : "Bank Transfer" },
    { icon: CreditCard, label: locale === "zh" ? "分期付款" : "Installment Plans" },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            {locale === "zh" ? "优惠与支付" : "Pricing & Payment"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            {locale === "zh" ? "灵活支付，早鸟优惠" : "Flexible Payment Options"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-2xl border border-navy-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5">
              <CreditCard className="w-6 h-6 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              {locale === "zh" ? "支付方式" : "Payment Methods"}
            </h3>
            <ul className="mt-5 space-y-3">
              {paymentMethods.map((method) => (
                <li key={method.label} className="flex items-center gap-3 text-navy-700">
                  <method.icon className="w-4 h-4 text-navy-400" />
                  <span className="text-sm">{method.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-navy-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-5">
              <RefreshCw className="w-6 h-6 text-navy-700" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              {locale === "zh" ? "退款政策" : "Refund Policy"}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-600 leading-relaxed">
              <li>
                {locale === "zh"
                  ? "开课前 30 天：全额退款"
                  : "30+ days before start: Full refund"}
              </li>
              <li>
                {locale === "zh"
                  ? "开课前 15-30 天：退还 80%"
                  : "15-30 days before: 80% refund"}
              </li>
              <li>
                {locale === "zh"
                  ? "开课前 15 天内：退还 50%"
                  : "Within 15 days: 50% refund"}
              </li>
              <li>
                {locale === "zh"
                  ? "开课后：按具体情况协商"
                  : "After start: Case-by-case basis"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white font-semibold rounded-xl hover:bg-navy-900 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {locale === "zh" ? "咨询客服获取优惠" : "Contact for Early Bird Discount"}
          </a>
        </div>
      </div>
    </section>
  );
}
