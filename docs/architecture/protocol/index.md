---
title: Protocol
displayed_sidebar: knowledgeHubSidebar
---

# Protocol

這一頁先回答：

> MCTP、PLDM 這類 protocol 在 OpenBMC 裡的位置是什麼？

## Architecture

protocol 不是孤立規格，而是把 component、IPC、bus 與對外管理行為串起來的規則層。

## Components

第一版先聚焦：

- `phosphor-mctp`
- `pldmd`
- `libpldm`

## Terminology

- `endpoint`
- `message type`
- `transport`
- `discovery`
- `command / response`

## Data Flow

之後會逐步補齊：

`component request -> protocol encode -> transport -> remote endpoint -> response decode`

## IPC

protocol stack 常同時跨兩種互動：

- 上層 service IPC
- 下層 transport / bus message path

## Code Mapping

TODO:

- 補上 `phosphor-mctp`、`pldmd`、`libpldm` 的 repo 與 entry point 對照

## Debug

先切三層：

1. 上層 service 有沒有送出請求
2. transport path 有沒有真的發包
3. 對端有沒有回應，回應有沒有被 decode

## Checkpoint

如果你能分清楚「規格問題」和「實作路徑問題」，這頁就有價值。
