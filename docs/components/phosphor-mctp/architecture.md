---
title: phosphor-mctp Architecture
displayed_sidebar: knowledgeHubSidebar
---

# phosphor-mctp Architecture

## 問題

`phosphor-mctp` 在整個 OpenBMC system view 裡的位置是什麼？

## 第一版回答

- 它位於 protocol / transport 邊界附近
- 上游通常會是需要 MCTP 路徑的 service 或 protocol stack
- 下游會連到 transport / endpoint 管理能力

## TODO

- 補上系統圖
- 補上與 `pldmd`、`libpldm`、bus transport 的相對位置
