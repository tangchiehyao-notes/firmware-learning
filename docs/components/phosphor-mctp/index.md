---
title: phosphor-mctp Overview
displayed_sidebar: knowledgeHubSidebar
---

# phosphor-mctp Overview

這一頁先回答：

> `phosphor-mctp` 在 OpenBMC 裡是什麼，它為什麼值得先整理？

## Overview

`phosphor-mctp` 是 OpenBMC 中與 MCTP 管理訊息路徑相關的重要 component 之一。它適合作為第一個示範元件，因為它同時跨到 protocol、IPC、service lifecycle 與 debug 問題。

## 為什麼先做它

- 能直接連到 `MCTP`
- 能往 `PLDM`、`pldmd` 延伸
- 適合練習 component template 的完整流程

## 本區子頁

- Architecture
- Dependencies
- Data Flow
- IPC
- Code Mapping
- Debug
- Checkpoint

## TODO

- 補上更精確的 service 責任描述
- 補上與 transport layer 的關係圖
