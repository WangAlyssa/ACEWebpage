# ACEWebpage

ACE 国际学分课程 — 企业级暑校官网

## 技术栈

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Lucide React** (图标)
- **Framer Motion** (动画，预留)

## 功能模块

| 模块 | 说明 |
|------|------|
| 导航栏 | 多级下拉菜单、中英切换、登录/报名 |
| Hero | 品牌主视觉、数据统计、校区预览 |
| 校区课程 | 6 个校区卡片 + Coming Soon |
| 转学分查询 | 大学搜索、政策说明 |
| 优势展示 | 6 大核心卖点 |
| 教授团队 | 无限滚动 Marquee |
| 学员故事 | 轮播 testimonial |
| 照片墙 | 网格布局（占位，可替换真实照片） |
| 新闻快讯 | 3 篇最新资讯 |
| 支付退款 | 支付方式和退款政策 |
| 联系表单 | 咨询表单 + 联系方式 |
| 浮动客服 | 右下角快捷入口 |

## 设计

- 主题色：中性深蓝 (`navy-800/900/950`) + 天蓝 accent (`accent-500`)
- 风格：大学生有朝气、现代简洁、与 AUIA 差异化设计

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 构建部署

### 推荐：Vercel 免费域名（无 github 字样）

完全免费，可自定义项目名，例如 **`acesummercourse.vercel.app`**。

**一键部署（约 2 分钟）：**

1. 点击下方按钮（或打开链接），用 GitHub 登录 Vercel  
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWangAlyssa%2FACEWebpage&project-name=acesummercourse)

   直接链接：  
   https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWangAlyssa%2FACEWebpage&project-name=acesummercourse

2. **Project Name** 填 `acesummercourse`（或你喜欢的名字，即成为子域名）
3. 点击 **Deploy**，等待完成
4. 访问：**https://acesummercourse.vercel.app**

之后每次 push 到 `main`，Vercel 会自动更新网站。

**其他免费子域名（同样无 github）：**

| 平台 | 示例地址 | 说明 |
|------|----------|------|
| Vercel | `acesummercourse.vercel.app` | 推荐，Next.js 原生支持 |
| Netlify | `acesummercourse.netlify.app` | 导入 GitHub 仓库即可 |
| Cloudflare Pages | `acesummercourse.pages.dev` | 免费，速度好 |

> 真正的 `.com` / `.cn` 域名无法长期免费获得；上面这些**免费子域名**最适合你的需求。

### GitHub Pages（备用，地址含 github.io）

推送到 `main` 后 GitHub Actions 自动部署。

**首次启用：** 仓库 Settings → Pages → Source 选 **GitHub Actions**

地址：https://wangalyssa.github.io/ACEWebpage/（含 github 字样，可作备用）

### 本地构建

```bash
npm run build          # Vercel / 本地
npm run build:gh-pages # GitHub Pages 专用
npx serve out          # 预览 GitHub Pages 静态产物
```


## 目录结构

```
src/
├── app/
│   ├── globals.css      # 全局样式 & 设计 token
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── components/          # UI 组件
└── lib/
    ├── data.ts          # 站点数据（文案、校区、教授等）
    └── locale-context.tsx  # 中英切换
```

## 后续微调

- 替换 `src/lib/data.ts` 中的真实文案和数据
- 替换 Gallery 占位图为真实学员照片
- 接入后端 API（表单提交、转学分查询）
- 添加独立子页面（各校区详情页等）
