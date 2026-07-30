---
title: Firmware Engineer Roadmap
sidebar_position: 1
displayed_sidebar: knowledgeHubSidebar
---

# Firmware Engineer Roadmap

這個站從「零散筆記入口」改成「Firmware Engineer Roadmap」。

核心目標不是把所有知識收成百科，而是幫助自己建立真正能在工作與面試裡使用的能力：

- 系統架構理解
- component 關係判讀
- IPC 與資料流追蹤
- source code 對照能力
- build、trace、debug 實作能力
- 面試時的說明與畫圖能力

## 四個主要區域

| 區域 | 你要先回答的問題 | 第一版狀態 |
| --- | --- | --- |
| Architecture | 整個 OpenBMC / Linux 系統有哪些 layer 與責任邊界？ | 已建立主骨架，Linux 既有文章已接入 |
| Components | 每個 daemon、library、service 誰呼叫誰、用什麼 IPC？ | 已建立統一模板與 `phosphor-mctp` 示範 |
| Labs | 要怎麼 build、trace、debug 才算真的會？ | 已建立 Build / Trace / Debug / Mini Project 路徑 |
| Interview | 我能不能解釋、畫圖、讀 code、回答除錯題？ | 已建立面試練習骨架 |

## 每頁的設計原則

新頁面盡量依照這個順序建立理解：

1. Architecture
2. Components
3. Terminology
4. Data Flow
5. IPC
6. Code Mapping
7. Debug
8. Checkpoint

這樣做的原因很簡單：先知道這個主題在系統裡的位置，再看它跟誰互動，最後才進到 source code 與 debug。

## 既有內容怎麼保留

- `Linux Internals` 既有 6 篇文章直接保留，並重新歸位到 `Architecture / Linux`
- `Yocto`、`Docker`、`Firmware Debugging` 被重新歸進 `Labs`
- `Modern C++` 先保留在 `Knowledge Base`，不讓原始筆記消失
- 原本的獨立 repo 仍然保留，作為長期筆記來源

## 建議使用方式

1. 先看 [Learning Roadmap](./learning-roadmap.md)
2. 再進到 [Architecture](./architecture/index.md)，把系統地圖畫起來
3. 然後進入 [Components](./components/index.md)，開始把元件對到 code 與 IPC
4. 最後用 [Labs](./labs/index.md) 與 [Interview](./interview/index.md) 檢查自己是否真的能用
