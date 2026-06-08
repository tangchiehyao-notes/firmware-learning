---
sidebar_position: 1
---

# RAII and Ownership

RAII 對 firmware 工程師的價值，不只是「自動釋放資源」，而是把資源生命週期從人腦記憶改成程式結構本身的一部分。

## 為什麼重要

- 降低 memory leak 與 file descriptor leak
- 讓 error path 不用到處手動 cleanup
- 在 OpenBMC service 這種長時間運行程式裡，能顯著提升穩定性

## 工程視角

如果 ownership 不清楚，後面常出現的是：

- double free
- dangling pointer
- cleanup 順序錯誤
- exception / early return 時漏釋放資源

所以寫筆記時，我會把重點放在：

- 這個資源誰擁有
- 生命週期何時開始與結束
- 錯誤路徑是否仍然安全
