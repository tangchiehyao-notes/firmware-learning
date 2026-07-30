---
title: Trace
displayed_sidebar: knowledgeHubSidebar
---

# Trace

這一頁先回答：

> 一條 request、signal 或狀態更新，怎麼從 architecture 一路追到 code？

## 第一版目標

- 建立 trace mindset
- 先畫出 request path
- 找出 path 上的狀態擁有者

## 後續要補的內容

- D-Bus method / signal trace
- journal 與 service-level trace
- protocol message trace
- bus / hardware event trace

## TODO

- 補一個從 Redfish 到 service，再到 protocol stack 的 trace 範例
- 補一個從 sensor 狀態到 sysfs / driver 的 trace 範例
