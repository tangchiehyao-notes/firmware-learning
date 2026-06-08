---
sidebar_position: 1
---

# Process vs Thread

## 一句話總結

Process 是資源隔離的單位，thread 是執行流的單位；理解這兩者差異，是分析 OpenBMC service 行為、crash 範圍與 concurrency bug 的基礎。

## 為什麼重要

很多韌體工程問題表面上在問：

- 為什麼 service 只掛一個功能？
- 為什麼一個 thread 卡住，整個 process 卻還活著？
- 為什麼某些 race condition 只在高負載時出現？

本質上都跟 process / thread 模型有關。

## 核心差異

| 項目 | Process | Thread |
| --- | --- | --- |
| 主要角色 | 資源隔離 | 執行流 |
| 位址空間 | 通常獨立 | 同一 process 內共享 |
| crash 影響 | 通常侷限於單一 process | 可能拖垮整個 process |
| 常見問題 | IPC、fork、resource isolation | race、deadlock、shared state |

## OpenBMC 視角

以 OpenBMC daemon 來說，很多 service 本質上是一個 process，裡面可能有多個 worker thread：

- 主 thread 接事件
- background thread 做 polling
- I/O thread 等待 socket 或 bus event

當 thread 卡住時，要先分清楚：

- 是單一 thread block
- 還是整個 process deadlock

這會直接影響你是先看 `top -H`、`gdb thread apply all bt`，還是回頭檢查 event loop 設計。

## Interview Takeaway

面試如果只回答「thread 較輕量、process 較重」，通常不夠。  
更好的回答是把資源隔離、shared address space、debug 差異一起講出來。
