---
sidebar_position: 1
---

# Layers and Recipes

Yocto 最容易讓人卡住的，不是指令，而是搞不清楚 layer 與 recipe 到底在系統裡扮演什麼角色。

## 我會怎麼理解

- layer：組織與覆寫規則的邏輯邊界
- recipe：描述怎麼取 source、怎麼 build、怎麼安裝、怎麼打包

## 為什麼重要

如果這兩個概念不清楚，遇到：

- package 沒進 image
- patch 沒吃到
- dependency 不對
- build 行為跟預期不同

就很難有系統地查。
