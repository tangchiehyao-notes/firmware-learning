---
title: Component Template
displayed_sidebar: knowledgeHubSidebar
---

# Component Template

每個 component 至少要回答下面七個問題：

1. 它是什麼？
2. 它的責任是什麼？
3. 誰會呼叫它？
4. 它會呼叫誰？
5. 使用什麼 IPC？
6. 程式進入點在哪裡？
7. 如何 trace 與 debug？

## 建議文件結構

```text
component-name/
├── Overview
├── Architecture
├── Dependencies
├── Data Flow
├── IPC
├── Code Mapping
├── Debug
└── Checkpoint
```

## 每頁應該長什麼樣

### Overview

- 先用一句話說明它在整個系統裡的位置
- 明確回答「它不是什麼」

### Architecture

- 放到 OpenBMC system view 裡
- 說清楚跟哪些 daemon、library、protocol 接壤

### Dependencies

- 上游誰呼叫它
- 下游誰提供它依賴

### Data Flow

- 用一條 request path 或 event path 說明

### IPC

- 明確列出 D-Bus、socket、protocol message、systemd lifecycle 等互動方式

### Code Mapping

- repo
- entry point
- 主要 type / class / service 名稱
- 常看 log 與 systemd unit

### Debug

- 問題表象
- 第一刀該切哪裡
- 常用觀察點

### Checkpoint

- 讀完後應該要能自己講出來，而不是只能看筆記
