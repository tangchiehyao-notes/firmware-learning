---
sidebar_position: 1
---

# Knowledge Hub Overview

這個網站是我給自己的長期技術知識庫，也是未來用來展示 OpenBMC / Embedded Linux 能力的作品集入口。

它不只是筆記集合，而是希望把下面幾件事放到同一個地方：

- 學習路線
- 技術深度
- Debug 經驗
- 面試輸出
- 長期維護的知識結構

![Knowledge Hub Architecture](/img/knowledge-hub-architecture.svg)

:::tip 這個網站適合怎麼使用

如果你是從頭開始整理內容，建議先從：

1. `Linux Internals`
2. `Modern C++`
3. `OpenBMC Architecture`
4. `Yocto / Docker / Firmware Debugging`

這條順序往下走，整體會比較連貫。
:::

## 站點設計原則

| 原則 | 說明 |
| --- | --- |
| Single Site | 先把內容集中在同一個網站，避免維護多站成本 |
| Markdown-driven | 內容優先，方便長期累積與 Git 管理 |
| Portfolio-ready | 每個主題都能逐步演化成面試可展示內容 |
| Scalable Structure | 可逐步擴充成多主題、多層文件架構 |

## 目前的主題地圖

| 主題 | 重點 |
| --- | --- |
| Linux Internals | system call、memory、process、I/O、debugging fundamentals |
| Modern C++ | ownership、RAII、template、concurrency |
| OpenBMC Architecture | service、D-Bus、sensor、Redfish、PLDM/MCTP |
| Yocto | layer、recipe、build flow、OpenBMC build system |
| Docker | 開發環境封裝、toolchain、CI reproducibility |
| Firmware Debugging | RCA、log、core dump、race condition、case study |

## 內容會怎麼長大

- 先從章節入口與結構開始
- 每個主題先補關鍵第一性原理
- 再把工作中遇到的真實問題抽象化整理
- 最後把內容打磨成面試官看得懂、也看得出深度的技術作品

## 下一步

- 先看 [Learning Roadmap](./learning-roadmap.md)
- 或直接進入 `Linux Internals` 作為第一條主線
