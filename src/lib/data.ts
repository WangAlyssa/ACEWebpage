export type Locale = "zh" | "en";

export interface NavItem {
  label: { zh: string; en: string };
  href: string;
  children?: NavItem[];
}

export interface Campus {
  id: string;
  name: { zh: string; en: string };
  university: { zh: string; en: string };
  duration: { zh: string; en: string };
  season: string;
  dates: string;
  type: "offline" | "online";
  featured?: boolean;
}

export interface Professor {
  name: string;
  university: string;
  avatar?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  school: { zh: string; en: string };
  campus: { zh: string; en: string };
  quote: { zh: string; en: string };
}

export interface NewsItem {
  id: string;
  title: { zh: string; en: string };
  excerpt: { zh: string; en: string };
  date: string;
}

export interface Benefit {
  icon: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
}

export const siteConfig = {
  name: { zh: "ACE 国际学分课程", en: "ACE International Credit Courses" },
  tagline: {
    zh: "让暑假，成为大学里最值得的投资",
    en: "Make your summer the best investment in college",
  },
  email: "info@acesummerschool.com",
  facultyEmail: "faculty@acesummerschool.com",
  address: {
    us: "101 Arch Street, Boston, MA, USA, 02111",
    cn: "上海市黄浦区淮海中路138号 WeWork 05N161室",
  },
};

export const navItems: NavItem[] = [
  {
    label: { zh: "关于 ACE", en: "About ACE" },
    href: "#about",
    children: [
      { label: { zh: "ACE 介绍", en: "About Us" }, href: "#about" },
      { label: { zh: "校园大使", en: "Campus Ambassadors" }, href: "#about" },
      { label: { zh: "ACE 校友会", en: "Alumni Network" }, href: "#about" },
      { label: { zh: "加入我们", en: "Join Us" }, href: "#contact" },
      { label: { zh: "联系我们", en: "Contact" }, href: "#contact" },
    ],
  },
  {
    label: { zh: "校区与课程", en: "Campuses & Courses" },
    href: "#campuses",
    children: [
      { label: { zh: "HUFS 暑假 4 周", en: "HUFS Summer 4 Weeks" }, href: "#campuses" },
      { label: { zh: "HUFS 暑假 5 周", en: "HUFS Summer 5 Weeks" }, href: "#campuses" },
      { label: { zh: "实践大学 4 周", en: "Sahmyook 4 Weeks" }, href: "#campuses" },
      { label: { zh: "SFSU 线上暑校", en: "SFSU Online" }, href: "#campuses" },
      { label: { zh: "BC 线上暑校", en: "BC Online" }, href: "#campuses" },
    ],
  },
  {
    label: { zh: "轻松转学分", en: "Credit Transfer" },
    href: "#credit",
    children: [
      { label: { zh: "专业指导", en: "Expert Guidance" }, href: "#credit" },
      { label: { zh: "各高校转学分参考", en: "University Policies" }, href: "#credit" },
      { label: { zh: "权威学分认证", en: "Accreditation" }, href: "#credit" },
    ],
  },
  {
    label: { zh: "优惠与支付", en: "Pricing" },
    href: "#pricing",
    children: [
      { label: { zh: "支付方式", en: "Payment Methods" }, href: "#pricing" },
      { label: { zh: "退款方式", en: "Refund Policy" }, href: "#pricing" },
    ],
  },
  {
    label: { zh: "精彩回忆", en: "Memories" },
    href: "#stories",
    children: [
      { label: { zh: "学员故事", en: "Student Stories" }, href: "#stories" },
      { label: { zh: "学员照片墙", en: "Photo Gallery" }, href: "#gallery" },
    ],
  },
];

export const campuses: Campus[] = [
  {
    id: "hufs-4w",
    name: { zh: "HUFS 暑假 4 周", en: "HUFS Summer · 4 Weeks" },
    university: { zh: "韩国外国语大学", en: "Hankuk University of Foreign Studies" },
    duration: { zh: "4 周", en: "4 Weeks" },
    season: "Summer 2026",
    dates: "2026/06/15 – 2026/07/10",
    type: "offline",
    featured: true,
  },
  {
    id: "hufs-5w",
    name: { zh: "HUFS 暑假 5 周", en: "HUFS Summer · 5 Weeks" },
    university: { zh: "韩国外国语大学", en: "Hankuk University of Foreign Studies" },
    duration: { zh: "5 周", en: "5 Weeks" },
    season: "Summer 2026",
    dates: "2026/07/13 – 2026/08/14",
    type: "offline",
  },
  {
    id: "sahmyook-4w",
    name: { zh: "实践暑假 4 周", en: "Sahmyook Summer · 4 Weeks" },
    university: { zh: "实践大学", en: "Sahmyook University" },
    duration: { zh: "4 周", en: "4 Weeks" },
    season: "Summer 2026",
    dates: "2026/06/15 – 2026/07/10",
    type: "offline",
  },
  {
    id: "sahmyook-5w",
    name: { zh: "实践暑假 5 周", en: "Sahmyook Summer · 5 Weeks" },
    university: { zh: "实践大学", en: "Sahmyook University" },
    duration: { zh: "5 周", en: "5 Weeks" },
    season: "Summer 2026",
    dates: "2026/07/13 – 2026/08/14",
    type: "offline",
  },
  {
    id: "sfsu-online",
    name: { zh: "SFSU 暑假线上", en: "SFSU Online Summer" },
    university: { zh: "旧金山州立大学", en: "San Francisco State University" },
    duration: { zh: "5 / 7 / 9 周", en: "5 / 7 / 9 Weeks" },
    season: "Summer 2026",
    dates: "06/01–07/03 · 06/15–08/07 · 07/06–08/07",
    type: "online",
    featured: true,
  },
  {
    id: "bc-online",
    name: { zh: "BC 暑假线上", en: "BC Online Summer" },
    university: { zh: "贝尔维尤学院", en: "Bellevue College" },
    duration: { zh: "7 周", en: "7 Weeks" },
    season: "Summer 2026",
    dates: "2026/07/06 – 2026/08/21",
    type: "online",
  },
];

export const professors: Professor[] = [
  { name: "Islam Rizvanoghlu", university: "University of Houston" },
  { name: "Amiko Li", university: "University of Georgia" },
  { name: "Vadim Olshevsky", university: "University of Connecticut" },
  { name: "Kang Cheng", university: "Morgan State University" },
  { name: "Mo Sha", university: "Binghamton University" },
  { name: "Roberto Vega", university: "Southern Methodist University" },
  { name: "Margaret Stiffler", university: "North Carolina State University" },
  { name: "Kun Zhao", university: "Tulane University" },
  { name: "Ravichandra Bachu", university: "Carnegie Mellon University" },
  { name: "Joseph Bowling", university: "University of Wisconsin" },
  { name: "Susan Hinely", university: "Stony Brook University" },
  { name: "Sherry D. Molock", university: "The George Washington University" },
  { name: "Byung-Joo Lee", university: "University of Notre Dame" },
  { name: "Steven J. Cody", university: "Purdue University" },
  { name: "Todd A. Wells", university: "University of Denver" },
  { name: "Robert Barsky", university: "Vanderbilt University" },
];

export const benefits: Benefit[] = [
  {
    icon: "zap",
    title: { zh: "高效省时", en: "Time Efficient" },
    description: { zh: "集中修学分，暑假不虚度", en: "Earn credits efficiently during summer break" },
  },
  {
    icon: "shield",
    title: { zh: "轻松稳妥", en: "Reliable Grades" },
    description: { zh: "专业团队全程护航，成绩有保障", en: "Expert support ensures strong academic outcomes" },
  },
  {
    icon: "wallet",
    title: { zh: "多快好省", en: "Save on Tuition" },
    description: { zh: "暑校学分转回，大幅节省学费", en: "Transfer credits back and save significantly" },
  },
  {
    icon: "globe",
    title: { zh: "丰富广泛", en: "Global Campuses" },
    description: { zh: "覆盖全球热门城市，多样选择", en: "Choose from campuses across top global cities" },
  },
  {
    icon: "check",
    title: { zh: "安全放心", en: "Credit Assurance" },
    description: { zh: "权威认证，转学分无忧", en: "Accredited programs with proven transfer records" },
  },
  {
    icon: "graduation",
    title: { zh: "名校教授", en: "Top Professors" },
    description: { zh: "北美名校教授亲授，品质保证", en: "Learn from professors at leading US universities" },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "丁绍庭",
    school: { zh: "台湾佛光大学", en: "Fo Guang University" },
    campus: { zh: "国立台湾科技大学", en: "National Taiwan University of Science and Technology" },
    quote: {
      zh: "2015年暑假，是我在大学生涯中最后一个，也是非常难忘的暑假。从2012年刚升大学时偶然进入ACE这个大家庭，我看到了ACE为学生着想的心，更宝贵的是我和各地学生交流所带来的成长。",
      en: "Summer 2015 was my last and most unforgettable college summer. Since joining ACE in 2012, I've seen their dedication to students and grown through connections with peers worldwide.",
    },
  },
  {
    id: "2",
    name: "陈玮",
    school: { zh: "乔治华盛顿大学", en: "George Washington University" },
    campus: { zh: "国立台湾科技大学", en: "National Taiwan University of Science and Technology" },
    quote: {
      zh: "暑假在台北一个月来，最庆幸的是我不是一个游客。我可以平心静气地走在公馆夜市里，走在台北夜晚的灯光里，顺应它的节拍慢慢品味这座城市的温度。",
      en: "Spending a month in Taipei, I'm grateful I wasn't just a tourist. I could truly experience the city — its night markets, its rhythm, its warmth.",
    },
  },
  {
    id: "3",
    name: "宋一韦",
    school: { zh: "波士顿大学", en: "Boston University" },
    campus: { zh: "国立台湾科技大学", en: "National Taiwan University of Science and Technology" },
    quote: {
      zh: "在来台湾之前，我对它的印象完全出自台湾电影：文艺以及小清新。我想很久很久以后，我都会感谢自己毫不犹豫地做出了来台湾读暑校的决定。",
      en: "Before coming to Taiwan, my impression came entirely from Taiwanese films. I'll forever be grateful for deciding to study here for summer school.",
    },
  },
  {
    id: "4",
    name: "谢至诚",
    school: { zh: "雪城大学", en: "Syracuse University" },
    campus: { zh: "国立台湾科技大学", en: "National Taiwan University of Science and Technology" },
    quote: {
      zh: "刚入境台湾，就感受到台北潮热的天气和浓重的历史包袱。不过，这种感觉一点也不恼人，还能隐隐透露一股神秘的吸引力。",
      en: "Arriving in Taiwan, I felt the humid warmth and rich history immediately — not annoying at all, but mysteriously captivating.",
    },
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: {
      zh: "Fitchburg State University 教授暑假在中国任教",
      en: "Fitchburg State University Faculty to Teach in China This Summer",
    },
    excerpt: {
      zh: "菲奇堡州立大学的教职员工将把他们的才华带到中国，这是与 ACE 国际暑期学校达成的新协议的一部分。",
      en: "Fitchburg State University faculty will bring their expertise to China as part of a new partnership with ACE International Summer School.",
    },
    date: "2026-03-15",
  },
  {
    id: "2",
    title: {
      zh: "留学生家长不知道的暑校知识",
      en: "What Parents Should Know About Summer School",
    },
    excerpt: {
      zh: "近年，北美留学界迎来美式学分制暑期项目登陆亚洲的新风潮。参与人数呈爆炸状蹿升，迅速成为北美留学生暑期安排的首选。",
      en: "American credit-based summer programs in Asia are surging in popularity, quickly becoming the top choice for North American international students.",
    },
    date: "2026-02-20",
  },
  {
    id: "3",
    title: {
      zh: "ACE 国际暑期学校 — 横跨三大不同地域的暑校",
      en: "ACE International Summer School — Three Global Regions",
    },
    excerpt: {
      zh: "ACE 国际暑期学校拥有台北、首尔两大校区，以及多个线上项目，为全球学生提供灵活多样的选择。",
      en: "ACE operates campuses in Taipei and Seoul, plus online programs, offering flexible options for students worldwide.",
    },
    date: "2026-01-10",
  },
];

export const stats = [
  { value: "10+", label: { zh: "合作名校", en: "Partner Universities" } },
  { value: "5000+", label: { zh: "累计学员", en: "Students Served" } },
  { value: "200+", label: { zh: "北美教授", en: "US Professors" } },
  { value: "95%", label: { zh: "转学分成功率", en: "Credit Transfer Rate" } },
];

export const popularUniversities = [
  "NYU", "USC", "UCLA", "Boston University", "UIUC", "Purdue",
  "Ohio State", "Penn State", "Michigan", "Cornell", "Berkeley", "UW",
];
