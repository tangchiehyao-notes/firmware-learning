---
title: Architecture
displayed_sidebar: knowledgeHubSidebar
---

# Architecture

這個區塊先回答：

> OpenBMC / Embedded Linux 系統有哪些 layer，資料與狀態如何在這些 layer 之間流動？

## 區塊目標

- 先建立整張系統地圖
- 把 component 放回正確上下文
- 先知道哪一層擁有狀態，再去看 source code

## 第一版子主題

| 子主題 | 這一頁要回答的核心問題 |
| --- | --- |
| OpenBMC | 整個 OpenBMC 系統有哪些 layer？ |
| Linux | Linux system view 如何幫助 OpenBMC debug？ |
| Driver | driver 在整個 firmware stack 裡扮演什麼角色？ |
| IPC | service 與 service 之間怎麼交換資料？ |
| Bus | 硬體與 driver 之間的 transport path 怎麼看？ |
| Protocol | MCTP / PLDM 這類協定在系統裡的位置是什麼？ |

## 閱讀順序

1. 先看 `OpenBMC`
2. 再進到 `Linux`
3. 補上 `Driver`
4. 之後再從 `IPC`、`Bus`、`Protocol` 把資料流補齊

## 第一版現況

- `Linux` 已接入既有 6 篇文章
- `OpenBMC` 已建立新的入口頁
- `Driver`、`IPC`、`Bus`、`Protocol` 先建立骨架與待補問題
