---
title: Driver
displayed_sidebar: knowledgeHubSidebar
---

# Driver

這一頁先回答：

> Driver 在 firmware stack 裡到底負責哪一段責任，什麼問題應該先切到 driver 層？

## Architecture

driver 是 Linux kernel 與實體硬體之間的接口層，也是 user space 能否穩定觀察硬體的關鍵橋樑。

## Components

後續會逐步整理：

- bus controller driver
- peripheral driver
- hwmon / sensor-related driver
- platform driver

## Terminology

- `probe`
- `bind`
- `sysfs`
- `interrupt`
- `resource`

## Data Flow

典型路徑會是：

`user space service -> sysfs or device node -> kernel driver -> bus controller -> hardware`

## IPC

driver 本身通常不直接參與高層 IPC，但它會決定上層能不能正確拿到資料與事件。

## Code Mapping

TODO:

- 補上 kernel driver source tree 對照方式
- 補上 `probe()`、`remove()`、`of_match_table` 常見入口

## Debug

第一刀先分清楚：

1. device 沒出現
2. driver 沒接上
3. driver 接上了但資料錯

## Checkpoint

如果你能回答「這個現象是 service 問題還是 driver 問題」，這一頁就有達到第一步目的。
