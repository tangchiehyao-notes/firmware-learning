# Firmware Engineer Roadmap

以 Docusaurus 建立的 Firmware Engineer 學習網站，主軸是把 OpenBMC / Embedded Linux 的零散筆記整理成可以持續擴充的 roadmap。

## 目標

這個網站不只是知識整理，而是要幫助 Firmware Engineer 建立：

- 系統架構理解
- component 關係判讀
- IPC 與資料流理解
- source code 對照能力
- build、trace、debug 實作能力
- 面試表達能力

## 網站主架構

```text
Firmware Engineer Roadmap
├── Architecture
│   ├── OpenBMC
│   ├── Linux
│   ├── Driver
│   ├── IPC
│   ├── Bus
│   └── Protocol
├── Components
│   ├── phosphor-mctp
│   ├── pldmd
│   ├── sdbusplus
│   ├── libpldm
│   └── systemd
├── Labs
│   ├── Build
│   ├── Trace
│   ├── Debug
│   └── Mini Project
├── Interview
│   ├── Explain
│   ├── Draw
│   ├── Code Reading
│   └── Debug Questions
└── Knowledge Base
    └── Modern C++
```

## 內容設計原則

每個主題頁盡量依照同一個順序建立理解：

1. Architecture
2. Components
3. Terminology
4. Data Flow
5. IPC
6. Code Mapping
7. Debug
8. Checkpoint

## 技術選型

- Framework: Docusaurus 3.10.1
- Language: TypeScript / React
- Content model: Markdown / MDX
- Hosting: GitHub Pages
- Search: local search plugin
- Diagram: Mermaid

## 本地開發

```bash
npm install
npm start
```

開發站台預期會啟在 `http://localhost:3000/firmware-learning/`。

## Build

```bash
npm run build
npm run serve
```

## 目前第一版範圍

- 新首頁
- 新 sidebar
- Architecture / Components / Labs / Interview 骨架
- 各分類 intro 頁
- component 統一模板
- `phosphor-mctp` 示範骨架
- 既有 Linux / Yocto / Docker / Debug 內容重新歸位

## 專案結構

```text
firmware-learning/
├── docs/
│   ├── architecture/
│   ├── components/
│   ├── interview/
│   ├── knowledge-base/
│   ├── labs/
│   ├── linux-internals/
│   ├── openbmc-architecture/
│   ├── docker/
│   ├── firmware-debugging/
│   ├── modern-cpp/
│   ├── yocto/
│   ├── index.md
│   └── learning-roadmap.md
├── src/
│   ├── css/
│   └── pages/
├── static/
│   └── img/
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## 既有筆記保留方式

- `Linux Internals` 既有文章直接接到 `Architecture / Linux`
- `Yocto`、`Docker`、`Firmware Debugging` 重新歸到 `Labs`
- `Modern C++` 先保留在 `Knowledge Base`
- 原本獨立 repo 繼續作為原始筆記來源
