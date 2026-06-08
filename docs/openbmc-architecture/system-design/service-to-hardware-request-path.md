---
sidebar_position: 1
---

# Service to Hardware Request Path

OpenBMC 真正難的地方，通常不在單一 service，而是在 request 如何穿越多層軟體邊界。

## 一條典型路徑

```mermaid
flowchart LR
    A[Redfish / Web UI] --> B[bmcweb]
    B --> C[D-Bus service]
    C --> D[Kernel driver / sysfs]
    D --> E[Hardware]
```

## 為什麼這條路徑重要

因為當問題發生時，你需要立刻判斷：

- API layer 壞了？
- service 沒回？
- D-Bus object 不存在？
- driver 卡住？
- bus transaction timeout？

如果能快速切層，debug 效率會比只看應用層 log 高很多。
