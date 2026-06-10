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

### GitHub Pages（自动部署）

推送到 `main` 分支后，GitHub Actions 会自动构建并部署。

**首次启用（只需做一次）：**

1. 打开仓库 Settings → Pages
2. Source 选择 **GitHub Actions**
3. 推送代码后等待 workflow 完成

**默认访问地址：**

https://wangalyssa.github.io/ACEWebpage/

### 绑定自定义域名

GitHub **不提供**域名购买，需要自行在域名注册商购买（如 Cloudflare、Namecheap、GoDaddy、阿里云等），然后绑定到 GitHub Pages。

**步骤：**

1. 购买域名，例如 `acesummerschool.com`
2. 在 DNS 添加记录：
   - 类型 `CNAME`，主机 `www`，值 `wangalyssa.github.io`
   - 根域名 `@` 可用 ALIAS/ANAME 指向 `wangalyssa.github.io`，或用 A 记录指向 GitHub IP：
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. 复制 `public/CNAME.example` 为 `public/CNAME`，写入你的域名（如 `www.acesummerschool.com`）
4. 修改 `.github/workflows/deploy.yml`，将 build 步骤改为**不使用** basePath：

```yaml
- name: Build static site
  run: npm run build
  # 自定义域名时不要用 build:gh-pages
```

5. 仓库 Settings → Pages → Custom domain 填入域名并启用 HTTPS
6. 推送后生效（DNS 传播可能需要几小时）

> 自定义域名与 `github.io/ACEWebpage` 路径不能同时完美工作——绑定域名后应去掉 `basePath`；未绑域名时用 `build:gh-pages` 即可。

### 本地构建

```bash
npm run build          # 本地预览用（无 basePath）
npm run build:gh-pages # 模拟 GitHub Pages 路径
npm start              # 需先 build，本地不支持 static export 的 start
npx serve out          # 静态预览 build 产物
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
