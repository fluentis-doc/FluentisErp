---
title: 成本会计科目表
---

成本会计科目表意味着 用户将组列表插入到掩码的上部分。

通过插入分组/组的按钮，用户可以插入新的“第一”层级或者或者比选中的层级下。每个层级包括某个唯一的字母数字代码、某个说明以及某个参考的账户类型。参考账户类型与总会计的账户同一。

选择最低组之后，在下的网格中，属于本组的成本会计账户的列表开始工作。

与总会计科目表不同，成本会计不包括账户的层级（缺乏明细账目的账户代码）。系统直接地创建账户+明细账目的详细：

每个字段可以包括7字的代码，可是我们建议用户使用顺序编号的方式以及字的均匀性（例如所有的账户4字，所有的明细账目3字）。每个行的账户类型作为属于组的账户类型。用户可以编辑本代码。

其中详细内的列：

总会计的**账户/明细账目**可选择的字段。它使用户定义与在使用中成本明细账目有关的总会计明细账目。通过本方式，从成本会计，系统自动地计价总会计。 

**插入日期：**创建账户/明细账目的日期 ；

**上次编辑日期：**账户/明细账目代码的上次编辑日期，系统自动地更新本日期；

**有效期结束日期：**在新的成本记录阻止明细账目的使用（从已插入日期以来），同时保证以前插入的移动；

**业务流程：** i本字段将成本明细账目与某个业务流程联系。现今，系统不使用本字段；

**产品类别：**本字段将成本明细账目与某个产品类别联系。本操作有统计的目标；

在下的部分中用户可以将每个成本明细账目与成本/利润中心关联：系统自动地表示按照成本/利润中心的百分比价值（仅对经济明细账目），用户可以随便编辑价值。

为了实现这个链接，用户得选择参考的明细账目然后将成本/利润中心列表插入到这两个网格，同时得指定某个有关的业务流程。本操作可以关于不同的公司部门。系统不监控如果已插入的百分比总计等于100%。

请注意：

- 成本会计的计价依赖于 成本会计模板或者与移动有关的总会计模板模板的成本/利润中心的标记

- 系统可以包括双价值：例如，如果某个成本明细账目包括成本/利润中心，模板可以包括这两个中心。通过成本中心/利润中心分开管理的选项，这两个中心包括价值，要不然仅成本中心包括价值（在利润明细账目的情况下，系统基价利润中心）； 

还有别的成本/利润中心的编码点：客户/供应商/代理商登记、项目登记、仓库、固定资产。在 单一模块 的管理参数中，用户可以设置计价的优先。

功能导航栏：功能导航栏包含格式菜单，在这里可以执行相关过程的操作。包含的功能如下表：



| RibbonFunction | RibbonMeaning |
| --- | --- |
| 搜索 | 按照选中组中设置的搜索筛选器，本按钮搜索明细账目 |
| 新账户 | 用户将新的成本会计明细账目插入到选中组的时候，本按钮设置光标 |
| 向上搜索账户 | 将筛选器明细账目搜索于上组 |
| 向下搜索账户 | 将筛选器明细账目搜索于下组 |
| 删除账户 | 用于删除选中的成本会计明细账目。如果系统使用本明细账目，用户不能删除它 |
| 插入新账户分类 | 将新的”根“组插入到成本会计科目表的结构 |
| 新账户 | 将某个新子组插入到 属于成本会计科目表的结构的选中组 |
| 删除账户 | 用于删除选中的组 |
| 增加 | 增加树形结构的项卡 |
| 减小 | 减小树形结构的项卡 |
| 展开 | 展开选中组之下的树形 |
| 折叠 | 折叠选中组之下的树形 |
| 新活动 | 插入选中明细账目的新活动的时候，设置光标 |
| 删除活动 | 用于删除选中的活动 |
| 新成本中心 | 插入选中明细账目的新成本中心的时候，设置光标 |
| 删除成本中心 | 用于删除选中的成本中心 |
| 新利润中心 | 插入选中明细账目的新利润成本的时候，设置光标 |
| 删除利润中心 | 用于删除选中利润中心 |
| 预览 | 用于预览选中组的成本会计明细账目 |
| 打印 | 用于打印选中组的成本会计明细账目 |






