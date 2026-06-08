---
sidebar_position: 1
---

# Reproducible Development Environments

對 Firmware / Embedded Linux 團隊來說，Docker 最大的價值常常不是 deployment，而是把開發環境固定下來。

## 典型收益

- 新成員 onboarding 更快
- toolchain version 固定
- build script 不再依賴個人 host 狀態
- CI 與本地行為更接近

## 為什麼這對 OpenBMC 特別有用

因為 OpenBMC / Yocto 類型專案通常依賴多、建置慢、環境敏感。  
如果沒有可重現環境，問題很容易在「環境差異」上浪費很多時間。
