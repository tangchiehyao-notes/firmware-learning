---
title: phosphor-mctp Data Flow
displayed_sidebar: knowledgeHubSidebar
---

# phosphor-mctp Data Flow

## 問題

一條 MCTP 相關 request 在這個 component 內怎麼流動？

## 第一版回答

先從下面這三件事開始看：

1. request 從哪個 service 進來
2. 中間在哪裡被 encode / route / forward
3. response 或 event 怎麼回到上層

## TODO

- 補一條 request path 範例
- 補 outbound 與 inbound flow 差異
