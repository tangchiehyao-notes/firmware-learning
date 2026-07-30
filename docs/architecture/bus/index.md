---
title: Bus
displayed_sidebar: knowledgeHubSidebar
---

# Bus

這一頁先回答：

> I2C、SPI、PCIe 這類 bus 在整個系統路徑裡扮演什麼角色？

## Architecture

bus 是 driver 與硬體交換資料的 transport path，也是很多「看起來像 service bug」的真正根因。

## Components

後續會整理：

- bus controller
- bus client device
- mux / bridge / expander

## Terminology

- `controller`
- `target`
- `transaction`
- `timeout`
- `mux`

## Data Flow

典型硬體資料流：

`service -> driver -> bus controller -> target device -> response`

## IPC

bus 本身不是高層 IPC，但它常是高層 IPC 背後真正卡住的地方。

## Code Mapping

TODO:

- 補上常見 bus driver source tree 與 log 位置

## Debug

先問：

1. 是 controller 沒起來？
2. 還是 target device 無回應？
3. 還是 transaction 成功但資料格式錯？

## Checkpoint

如果你知道要從 controller、mux、target 三層切，這頁就完成第一版任務。
