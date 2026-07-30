---
title: phosphor-mctp Dependencies
displayed_sidebar: knowledgeHubSidebar
---

# phosphor-mctp Dependencies

## 問題

誰會呼叫 `phosphor-mctp`，它又依賴誰？

## 第一版回答

- 上游：需要 MCTP path 的 service / daemon
- 下游：transport implementation、system service、可能的 D-Bus object 與 endpoint 管理

## TODO

- 列出明確上游與下游 component
- 補依賴方向圖
