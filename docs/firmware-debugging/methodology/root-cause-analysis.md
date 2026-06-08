---
sidebar_position: 1
---

# Root Cause Analysis

對 Firmware Engineer 來說，RCA 不是報告格式，而是一套避免自己太早下結論的工作方法。

## 我會先分清楚的四件事

1. 現象是什麼
2. 證據是什麼
3. 假設是什麼
4. 根因是什麼

## 如果沒有這樣做

常見結果就是：

- 把 symptom 當 root cause
- 修掉表面問題，但 bug 很快再回來
- log 看很多，卻沒有真正縮小範圍

## OpenBMC / Embedded Linux 實務

在這類系統上，RCA 通常需要跨層：

- user space service
- D-Bus
- systemd
- kernel driver
- hardware / bus

所以好的 RCA，不只是找到哪一行 code 壞掉，而是能說清楚它是怎麼一路壞出來的。
