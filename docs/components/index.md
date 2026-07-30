---
title: Components
displayed_sidebar: knowledgeHubSidebar
---

# Components

這個區塊先回答：

> 一個 component 到底是什麼、誰呼叫它、它呼叫誰、怎麼對到 source code？

## 第一版原則

每個 component 都盡量用同一套結構整理：

1. Overview
2. Architecture
3. Dependencies
4. Data Flow
5. IPC
6. Code Mapping
7. Debug
8. Checkpoint

## 第一版範圍

- `phosphor-mctp`：完整骨架示範
- `pldmd`
- `sdbusplus`
- `libpldm`
- `systemd`

## 使用方式

- 先看 [Component Template](./component-template.md)
- 再看 `phosphor-mctp` 示範
- 其他 component 先用相同欄位保留 TODO，後續再逐步補齊
