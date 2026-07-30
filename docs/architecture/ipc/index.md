---
title: IPC
displayed_sidebar: knowledgeHubSidebar
---

# IPC

這一頁先回答：

> OpenBMC 裡的 service 怎麼互相溝通，當訊息不見時應該先查哪一段？

## Architecture

IPC 是把 architecture 變成可運作系統的膠水。沒有 IPC，service 只是孤立程式。

## Components

第一版先把常見 IPC 路徑列出：

- D-Bus
- socket
- systemd activation
- signal / event-driven callback

## Terminology

- `request / response`
- `signal`
- `object path`
- `method call`
- `timeout`

## Data Flow

後續要能清楚描述：

1. 誰發 request
2. 誰持有 state
3. 誰回應或發 signal

## IPC

這頁本身就是 IPC 區的入口，所以後續會補：

- D-Bus 常見互動模式
- 與 protocol stack 的交會點
- 與 service lifecycle 的交會點

## Code Mapping

TODO:

- 補上 `sdbusplus`、service main loop、object registration 的 code mapping

## Debug

訊息消失時，先分清楚：

1. sender 沒發
2. bus 沒送
3. receiver 沒收
4. state 根本沒更新

## Checkpoint

如果你能把「timeout」拆成 sender、bus、receiver 三段來查，這頁就達到第一版目標。
