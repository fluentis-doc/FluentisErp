---
title: 修改-重新计算客户风险
sidebar_position: 1
---

这两个掩码用于查看指定客户的综合风险状态。“重算客户风险”仅用于查看客户的当前状态，而“使用信用额度”用于保存每项计算和历史查看。

字段查看的列表实际上与客户掩码显示的相同。

标头中包含计算参数：客户代码、开始计算日期（客户风险模块参数的默认设置）、结束参考日期（当前日期）、因到期付款账单和收款后账单（在模块参数中设置）而延迟的天数和与临时记录关联的到期值标记。单击计算按钮，将显示下列值：

**12个月的营业额**：是参考日期之前12个月的营业额（来自销售区和销售发票）；

**年销售额**：是从年初开始的营业额（来自销售区和销售发票）；

在区域**未结到期值**可以查看与其关联的借方/贷方总计和余额；

在区域**临时记录的支付**可以查看临时记录的支付金额；

在区域**分类账余额状况**可以查看总分类账的贷方/借方总计和总分类账余额；

**到期值/分类账余额**：显示从到期值或从余额计算的贷方/借方总计，以及之前部分查看过的余额；

**待记账的发票**：已打印但还未记账的发票（与信用额度关联的发票类型）的金额；

**待开发票的送货单**：已打印但未开发票的送货单（与信用额度关联的送货单类型）的金额；

**待发布的订单**：已打印、已确认但未发布的订单（与信用额度关联的订单类型）的金额；

**发布的账单**：已发布并记账但未显示的账单（属于账单公文包模块）的金额；

**按折扣-按到期付款-按收款显示的账单**：已显示，并且到期日（加上在计算标头中插入的参数天数）大于参考日期的账单金额；

**未付部分**：查看未记账的未付，或者（如果标记已插入）已记账未付的金额和编号；

根据以上值的总和，计算“客户风险”，与允许的信用额度对比，指出超出信用额度。

“已过期”字段显示未结但已过期的到期值，作为下一步客户状况分析的数据。

功能导航栏：功能导航栏为菜单窗体，包含对已有文档而不是新建文档进行的操作。当前选项卡的功能如下：



| RibbonFunction | RibbonMeaning |
| --- | --- |
| 保存 | 用于对已计算的信用额度修改的保存 |
| Calcola | Richiama la procedura per calcolare la situazione complessiva di rischio per il cliente. |






