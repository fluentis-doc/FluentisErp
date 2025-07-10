---
title: DDMRP Bill of Material
sidebar_position: 8
---

This form displays the bill of materials for a product and differs from the Fluentis bill management form because it provides information that makes sense only in a Ddmrp environment (it is not possible to modify a bill of materials through this form).

Items managed on Ddmrp stock are highlighted with a three-colored trash can symbol, and specific information such as ADU, DLT, Red zone, Yellow zone, Green zone, and Working capital are displayed for them.

These values are the ones valid today as found in the **DDMRP parameters** form, while for working capital, it should be highlighted that the value refers to the item and not to the stock needed to produce the product for which the bill of materials is being viewed. Therefore, the value is determined by the needs of all items that require the stock product. The working capital value shown is relative to the last calculation performed; therefore, to ensure it is updated, simply run the relevant calculation procedure.

From this form, you can launch the [**DLT Calculation**](/docs/ddmrp/procedures/dlt-calculation), the [**Zones Calculation**](/docs/ddmrp/procedures/zones-calculation), the [**Average Daily Consumption Update (ADU)**](/docs/ddmrp/procedures/adu-update), and the [**Stock value calculation**](/docs/ddmrp/procedures/inventory-value). 

The DDMRP view of the bill is useful when running simulations to verify variations in DLT and working capital (use the working capital printout for more meaningful analysis).

Note that for some items that are not Ddmrp stock, the corresponding DLT is still displayed; this happens for those items highlighted in red, meaning that they are on the critical path of some finished product.

The reason is that some of them are stored in distribution centers, so to calculate the DLT in distribution centers, you need to add the transport time from the factory to the time required to produce the products.

For some items that are not finished products, this is due to the fact that to calculate the DLT of a Ddmrp buffer, the procedure must necessarily calculate this value even for items that are on the "critical path" of the buffer.

The DLT calculation procedure identifies all items that are on the critical paths of all bills of materials present in the system (thus not only those of Ddmrp buffer items).

In the Ddmrp bill view, items present on any critical path are highlighted in red; therefore, in the view of a bill of materials, there can be multiple branches highlighted in red, either because the product for which the bill is displayed can have multiple critical paths (whose DLT values are therefore the same), or because some branches are pieces of critical paths of other products.

The decrease in the decoupled lead time (DLT) of the product for which the bill of materials is being viewed can only be achieved by creating a Ddmrp stock for one of the items highlighted in red that is on the critical path of the same (this clarification is necessary because in some cases there can be multiple red branches, some of which highlight critical paths of other products), therefore this type of view simplifies understanding which stocked items can lead to a reduction in the delivery time of the finished product.

The view of working capital then allows understanding which stock positioning choices simultaneously reduce delivery time and minimize the working capital committed to achieving this result (see working capital printout).

The unit cost displayed for all items is the one used in the last calculation of the average invested working capital in Ddmrp stocks (average, last, standard) and takes into account only the costs of materials and external processing for job orders, i.e., costs attributable only to external suppliers (see the section related to this calculation).

Note that for job order items, the unit cost of processing is derived by subtracting the costs of its bill of materials children from the item cost.

Multiplying this by the average stock (red zone + green zone/2) gives the value of the working capital invested in the stock on average.

Please note that the working capital value displayed in the bill may not be accurate as it refers to the last found values. 

If after this calculation the values of the buffer zones have changed, or if the unit cost has changed, what is displayed is not updated.

To ensure that the correct and updated value is displayed, run the working capital cost calculation procedure (inventory value calculation).