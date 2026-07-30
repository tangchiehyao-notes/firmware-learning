---
title: OpenBMC Architecture
displayed_sidebar: knowledgeHubSidebar
slug: /architecture/openbmc
---

這一頁先回答一個問題：

> 整個 OpenBMC 系統有哪些 layer，它們彼此怎麼接起來？

## Architecture

先把 OpenBMC 看成一條從 hardware 到 user-facing API 的系統鏈，而不是一堆零散 service 名稱。

```mermaid
flowchart LR
    A[Hardware and Buses] --> B[Linux Kernel and Drivers]
    B --> C[systemd and Base Services]
    C --> D[D-Bus Services]
    D --> E[Protocol and Management Layer]
    E --> F[Redfish / CLI / Automation]
```

## Components

第一版先聚焦幾個之後會展開的核心元件：

- `systemd`
- `sdbusplus`
- `phosphor-mctp`
- `pldmd`
- `libpldm`

## Terminology

- `daemon`: 長時間背景執行的服務
- `D-Bus`: OpenBMC 常見的 service-to-service IPC
- `MCTP`: 管理訊息傳輸層
- `PLDM`: 建立在 MCTP 上的重要管理協定之一
- `inventory / sensors`: BMC 觀察系統狀態的核心資料來源

## Data Flow

OpenBMC 最重要的不是元件名，而是你能不能順著一條 request path 往下切：

- 請求是從 Redfish 進來，還是從內部 event 進來？
- 中間跨過哪些 D-Bus service？
- 最後落在哪個 driver、bus 或 protocol？

## IPC

第一版先把 IPC 當成主路徑之一來看：

- D-Bus
- socket
- systemd activation / service dependency
- protocol stack 內的 message handoff

## Code Mapping

這個區塊後續會逐步補上：

- system architecture 對應到哪些 repo
- 每個 service 的 entry point
- 關鍵 interface 與 type 在哪裡
- 常看的 log 與 unit 名稱

## Debug

遇到 OpenBMC 問題時，先問：

1. 問題在 architecture 的哪一層？
2. 是 service 邏輯錯，還是 IPC 斷了？
3. 是 user space 問題，還是 driver / bus / protocol 問題？

## Checkpoint

讀完這一頁後，應該至少能回答：

- OpenBMC 為什麼不能只背 service 名稱？
- 一條典型資料流會跨過哪些 layer？
- 後續哪些 component 需要優先拆開看？

## 第一版收錄方向

- OpenBMC Overview
- systemd and service graph
- D-Bus / sdbusplus
- MCTP / PLDM path
- inventory / sensors / protocol-facing layers

## Repository

- [openbmc-architecture-notes](https://github.com/tangchiehyao-notes/openbmc-architecture-notes)

## 目前狀態

- 先作為 Architecture 區的入口頁
- 詳細拆解會逐步擴充到 Components 與 Labs
- 既有獨立 repo 仍保留作為原始筆記來源
