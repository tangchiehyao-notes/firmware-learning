---
title: phosphor-mctp Debug
displayed_sidebar: knowledgeHubSidebar
---

# phosphor-mctp Debug

## 問題

當封包、endpoint 或上層 service 互動消失時，怎麼從 `phosphor-mctp` 開始查？

## 第一版切法

1. sender 有沒有真的送 request
2. `phosphor-mctp` 有沒有收到與轉發
3. transport path 有沒有發出去
4. response 是沒回來，還是回來後沒被對上狀態

## TODO

- 補常用 log 與命令
- 補常見故障現象與第一個觀察點
