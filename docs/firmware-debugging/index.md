---
sidebar_position: 3
title: Debug
displayed_sidebar: knowledgeHubSidebar
slug: /labs/debug
---

這個 lab 區塊先回答：

> 當封包、訊息或 service 狀態消失時，第一刀應該從哪裡開始查？

## Architecture

Debug 不是最後補上的技能，而是 architecture、components、IPC、build 全部收斂後的驗證場。

## Components

這一區會逐步整理：

- logging
- journal and service state
- bus / protocol trace
- root cause analysis workflow

## Data Flow

真正有用的 debug，不是把所有 log 打開，而是先找出：

1. request 是從哪裡進來
2. 哪一層先失真
3. 哪個 component 持有關鍵狀態

## 第一版收錄方向

- Debugging Mindset
- Root Cause Analysis
- Log Analysis
- GDB / Core Dump
- Race Condition
- Issue Investigation Workflow

## Repository

- [firmware-debugging-notes](https://github.com/tangchiehyao-notes/firmware-debugging-notes)

## Checkpoint

- 目前先作為 `Labs / Debug` 的入口頁
- 詳細內容先維持在獨立 repo，之後會逐步補回站內
