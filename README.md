# Firmware Learning Hub

以 Docusaurus 建立的個人技術知識庫網站，用來集中整理：

- OpenBMC / Embedded Linux 學習筆記
- Linux Internals 與 Firmware Debugging 思維
- Modern C++ / Yocto / Docker 技術地圖
- 長期維護的面試作品集與技術成長軌跡

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

## 文件架構設計

這個網站先以單一 repo 管理所有文件，但資料夾結構已經預留未來擴充：

- 每個主題各自獨立資料夾
- 各主題底下可再切多層子目錄
- 左側 sidebar 由檔案系統自動產生
- 每個資料夾可用 `_category_.json` 定義標題、排序與 landing page

這樣做的好處是：

- 現在先維持單站集中管理
- 未來若部分主題獨立成 repo，也能把內容平順搬移
- 不需要手動維護一份巨大 sidebar

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

## 下一步建議

1. 先把網站 repo push 到 GitHub
2. 確認 GitHub Pages Actions 正常部署
3. 開始把六個主題的內容逐步收斂到 `docs/`
4. 每篇文件維持「學習筆記 + 面試輸出 + debug 視角」的寫法
