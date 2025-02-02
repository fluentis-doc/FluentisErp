---
title: 搜索计划的订单
sidebar_position: 2
---

为了打开搜索计划的订单窗户请按照计划 > 生产总计划表  > 计划订单 > 搜索计划订单的路径。本窗户表示已插入的计划订单的列表。用户可以编辑，查看以及插入新的订单。

窗户由某个筛选区域以及某个结果网格组成。

功能导航栏：功能导航栏包含格式菜单，在这里可以执行相关过程的操作。包含的功能如下表：



| RibbonFunction | RibbonMeaning |
| --- | --- |
| 搜索 | 用户将搜索筛选器应用于已插入的计划订单 |
| 插入订单 | 用于插入新的计划订单 |
| 编辑订单 | 用于编辑某个计划的订单 |
| 查看订单 | 用于查看某个计划的订单 |
| 删除订单 | 用于删除已插入的计划订单 |
| 检查可用性 | 用于计算以及查看属于计划的生产订单的物料可用性（关于使用日期）。 |
| 编辑属性筛选器 | 用于启动属性的筛选器。通过本窗户，按照已插入的属性，用户可以筛选计划订单。 |

**筛选器的区域**：包含使用户做选择的数据类型清单。典型地，这些筛选器的状态是“AND”而且在同一时间内 用户可以确定多类标准的筛选器。 

用户可以利用下列的筛选器：

**项目：**第一个组合框使用户设置项目的分类。双击于第二字段用户打开某个“帮助项目”。通过本工具用户可以选择每个项目（代码和说明）；

**变量：**双击之后用户可以打开某个“帮助变量”。通过本工具用户可以选择项目的变量；

**客户： **这三字段表示客户的数据：帐户、明细账目、客户名称。双击于第一字段用户可以打开某个“帮助帐户”。通过本工具用户可以选择得筛选的客户；

**作业单：**通过合适的“帮助作业单”，用户可以插入销售作业单的编号；

**加工开始从...到：**用户可以将  加工开始的预计日期（从...到）插入到本字段；

**加工结束从.....到：** 用户可以将加工结束的预计日期（从....到）插入到本字段；

**作业单类型**:  用户可以将生产作业单类型插入到本组合框然后按照本标准筛选，因此查看选中类型的生产作业单。

**生产作业单；**表示生产作业单的编号和年份；

**订单：** 在本字段中用户可以按照计划订单的编号和年份筛选；

**订单类型**: 通过这些标记用户只可以筛选采购、生产以及包工的订单：如果所有的标记激活的话，系统表示所有的订单；

**分组：**用户可以将 计划订单属于的分组编号插入到本组合框；

**维护订单**:通过本标记用户可以查看计划的维护订单； 

**月度总结**: 通过本标记，为每个单一的项目结果网格表一个月行，将    属于月的计划订单的计划的完全数量总计。击于 刷新窗户的图表之后，新的窗户激活。

**结果** **网格**：结果网格表示相当于已确定的筛选器数据的计划订单的清单。搜索参数确定了以后，通过掩码中的搜索按钮，用户能够获得需要的计划订单清单。

结果网格表示的列是下列的：

**采购**：表示计划订单的采购类型。按照   在物料需求计划参数设置  的采购类型,可以是生产的、采购的或者包工的；

**年份：**表示计划订单的年份；

**订单：**表示计划订单的编号；

**层级：**表示物料清单的层级，指定计划订单的项目；

**订单类型的代码：**表示计划订单类型的代码；

**订单类型的说明：**表示计划订单类型的说明；

**作业单年份：**表示生成计划订单的生产作业单的年份。如果用户直接地生成计划订单或者计划订单来自于物料需求计划的处理，本列是空的；

**作业单编号：**表示生成计划订单的生产作业单的编号。如果用户直接地生成计划订单或者计划订单来自于物料需求计划的处理，本列是空的；

**作业单类型的代码：**表示作业单类型的代码；

**作业单类型的说明：**表示作业单类型的说明；

**初始日期：**表示计划订单的预计日期。如果是采购或者包工的计划订单，本日期表示用户将 采购订单寄给供应商的日期。如果是生产的计划订单，本日期表示项目周期的第一个加工阶段的预计初始日期。

**离岸价格的日期：**表示离岸价格的日期；预计初始的日期+ 插入到首先供应商表格的采购时间，只对有“采购”的采购类型的项目被管理；

**估计的到达时间的日期：**表示估计的到达时间的日期，离岸价格的日期+插入到首先供应商表格的提前期,只对有“采购”的采购类型的项目被管理；

**结束日期：**表示计划订单的预计结束日期。如果是采购或者包工的计划订单，本日期表示  得接收物料的日期，等于 供应商行 预计接收的日期: 如果是计划的生产订单，本日期表示项目周期的最后阶段的预计结束日期；

**从最小可用性：**表示某个标记。仅档计划订单被总计划过程被生成以及计划参数的 考虑时段最小可用性的标记激活，本标记激活；

**分类：**表示计划订单的项目分类；

**项目代码：**表示计划订单的项目代码；

**变量：**表示项目的变量；

**数量：**表示计划订单的项目数量；

**确认的数量：**表示计划订单的确认的数量，与0不同，仅当计划订单来自物料需求计划处理来的； 

**客户：**表示与计划订单有关的客户帐户和明细账目；

**供应商：**表示与计划订单有关的供应商帐户和明细账目，又采购的有包工的；

**特征：** 表示计划订单的项目的特征；

**作业单：**表示与计划订单有关的作业单；

**项目说明：**表示计划订单的项目说明；

**客户的说明：**表示与计划订单有关的客户的合法名称；

**供应商说明：**表示与计划订单有关的供应商的合法名称，可以是采购的或者包工的；

**特征说明：**表示计划订单的项目的特征说明；

**采购的经济批次：**表示计划的采购订单的首先供应商的经济批次；

**采购的经济批次的多种：**表示首先供应商的采购的经济批次的多种；  

**采购时间：**表示计划订单的项目的首先供应商的采购时间；

**生产的经济批次：**表示 插入到物料需求计划参数的生产的经济批次；

**生产的经济批次的多种：**表示插入到物料需求计划参数的生产的经济批次的多种；

**再订购点：**表示插入到属于项目登记的采购表格的再订购点价值； 

**最小库存：**表示插入到属于项目登记的采购表格的最小库存价值；

**抵押数量**；表示计划订单醒目的抵押数量；

**必须的：**表示某个使用户指定计划订单不能被转移的标记。 






