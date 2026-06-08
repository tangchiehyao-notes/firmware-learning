# Firmware Learning Hub

以 Docusaurus 建立的個人技術知識庫網站。

目前的定位是單一入口站點，用來集中整理：

- OpenBMC / Embedded Linux 學習筆記
- Linux Internals 與 Firmware Debugging 思維
- Modern C++ / Yocto / Docker 技術地圖
- 長期維護的面試作品集與技術成長軌跡

## 站點定位

- 單一網站管理知識庫入口
- Markdown-driven 文件維護
- GitHub Pages 自動部署
- 未來可逐步把獨立 repo 內容回收進站內

## 技術選型

- Framework: Docusaurus 3
- Content model: Markdown / MDX
- Hosting: GitHub Pages
- CI/CD: GitHub Actions
- Search: local search plugin
- Diagram: Mermaid

## 本地啟動

```bash
npm install
npm start
```

開發站台會啟在 `http://localhost:3000/firmware-learning/`。

## Build

```bash
npm run build
npm run serve
```

## 目前站內頁面

- `Learning Roadmap`
- `Introduction`
- `Linux Internals`
- `OpenBMC Architecture`
- `Yocto`
- `Docker`
- `Firmware Debugging`

`Modern C++` 目前先保留在獨立 repo，之後再視整理進度加回站內主導航。

## 專案結構

```text
firmware-learning/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── index.md
│   ├── learning-roadmap.md
│   ├── linux-internals/
│   ├── modern-cpp/
│   ├── openbmc-architecture/
│   ├── yocto/
│   ├── docker/
│   └── firmware-debugging/
├── src/
│   ├── css/
│   └── pages/
├── static/
│   └── img/
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## 文件架構原則

這個網站先以單一 repo 管理所有文件，但資料夾結構已經預留未來擴充：

- 每個主題各自獨立資料夾
- 各主題底下可再切多層子目錄
- 左側 sidebar 由 `sidebars.ts` 控制主要順序
- 每個主題先以 landing page 形式維護

這樣做的好處：

- 現在先維持單站集中管理
- 未來若部分主題獨立成 repo，也能把內容平順搬移
- 主導航不會過早變得太複雜

## GitHub Pages 部署

這個專案已包含 `.github/workflows/deploy.yml`，推到 GitHub 後即可透過 Actions 自動部署。

### 建議的 GitHub Pages 設定

1. 在 GitHub 建立 repo：`firmware-learning`
2. 把這個專案 push 到 `main`
3. 到 `Settings > Pages`
4. `Build and deployment` 選擇 `GitHub Actions`

之後每次 push 到 `main`，GitHub Actions 都會自動 build 並部署。

## 重要設定

目前 `docusaurus.config.ts` 預設使用：

- `url`: `https://tangchiehyao-notes.github.io`
- `baseUrl`: `/firmware-learning/`
- `organizationName`: `tangchiehyao-notes`
- `projectName`: `firmware-learning`

如果你未來更改 repo 名稱，請同步更新：

- `baseUrl`
- `projectName`

## 已啟用功能

- Mermaid Diagram
- Code Block
- Admonition / Callout
- Table
- Image
- Search
- Auto-generated sidebar
- Multi-level docs folders

## 維護建議

- 先維持 `Roadmap + Introduction + Topic Landing Page` 的骨架
- 詳細內容可以先留在各自獨立 repo
- 等單一主題累積到一定程度，再回收到 `docs/`
- 每篇文件盡量維持學習筆記、面試視角與 debug 視角
