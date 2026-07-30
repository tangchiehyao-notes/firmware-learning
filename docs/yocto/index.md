---
sidebar_position: 1
title: Build
displayed_sidebar: knowledgeHubSidebar
slug: /labs/build
---

這個 lab 區塊先回答：

> 一個 firmware engineer 要怎麼把 build 變成可重現、可觀察、可 debug 的流程？

## Architecture

Build 不是單一指令，而是一條從 source、dependency、toolchain、image 到 artifact 的供應鏈。

## Components

第一版先把 build lab 拆成兩個既有入口：

- `Yocto`：image、layer、recipe、task
- `Docker`：固定開發環境與重現 build 條件

## Data Flow

後續這一區要能回答：

1. source code 怎麼變成 image
2. 哪一層負責 dependency 與 artifact 組裝
3. build fail 時第一刀要切哪裡

## 第一版收錄方向

- What is Yocto
- Poky / BitBake / OpenEmbedded
- Layers
- Recipes / bbappend
- Tasks / Dependencies
- Build Flow
- Reproducible development environment

## Repository

- [yocto-notes](https://github.com/tangchiehyao-notes/yocto-notes)

## Checkpoint

- 目前先作為 `Labs / Build` 的入口頁
- 詳細內容先維持在獨立 repo 與後續 lab 頁面
