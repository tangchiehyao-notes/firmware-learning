---
title: Linux
sidebar_position: 1
displayed_sidebar: knowledgeHubSidebar
slug: /architecture/linux
---

這個區塊不是要把 Linux 拆成教科書章節，而是先回答一個 firmware engineer 最常遇到的問題：

> 一條 request 或 bug 發生時，Linux 系統裡到底是哪一層擁有狀態？

## Architecture

Linux 在這個 roadmap 裡扮演的是系統地圖，而不是背景知識。

- user space / kernel space 邊界
- boot path
- device tree
- driver model
- 後續要補上的 process、IPC、memory、I/O、debug

## Components

這條主線目前先聚焦幾個最會直接影響 OpenBMC debug 的系統 component：

- bootloader / boot path
- kernel core
- device tree
- driver model

## Data Flow

閱讀順序建議先從整體地圖開始，再進到 boundary、boot、hardware description 與 driver matching。

## 預計收錄主題

- [Linux Internals Overview](./01-linux-architecture.md)
- [User Space vs Kernel Space](./02-user-space-vs-kernel-space.md)
- [Linux Boot Process](./03-linux-boot-process.md)
- [Device Tree](./04-device-tree.md)
- [Linux Driver Model](./05-linux-driver-model.md)
- [U-Boot](./06-u-boot.md)
- Process / Thread
- System Call
- IPC
- Synchronization
- Memory Management
- Filesystem / I/O
- Networking Basics
- Linux Debugging
- Interview Questions

## Code Mapping

目前既有文章已經開始把概念對到：

- kernel subsystem
- bootloader handoff
- device tree node
- driver `probe()` / matching path

之後會繼續補上更明確的 source tree 對照。

## Repository

- [linux-internals-notes](https://github.com/tangchiehyao-notes/linux-internals-notes)

## Checkpoint

- 目前已同步 6 篇文章，並重新歸位到 `Architecture / Linux`
- 後續會再補 process、system call、IPC、memory 與 debugging
- `linux-internals-notes` 仍保留作為原始筆記 repo
