---
title: Introduction (Introduzione)
sidebar_position: 0
---

:::important **Product Identification and Related Parts (Identificazione dei prodotti e relative parti)**

Every manufacturing company sells physical products commonly referred to as finished products. 

To create these, raw materials and components available in the market are necessary.

It is evident that every manufacturing company needs to identify incoming and outgoing goods at a minimum to manage the purchasing, sales, and accounting processes involved.

Each product is uniquely identified by an item code, which is typically alphanumeric, according to the coding logic specific to each company.

Theoretically, it is always possible to describe the structure of finished products simply through a bill of materials at a level that encompasses all raw materials and/or purchased components.

However, very often, what has been stated is too simplistic and ineffective a method of representation, and it is necessary to also code intermediary products, known as semi-finished goods.

What logic should be adopted to determine when it is necessary to create an item code for a semi-finished product? 

Given a finished product, how many semi-finished goods need to be coded to define its structure? 

From a design/engineering perspective, it is possible to identify many parts in a finished product, but from a production standpoint, the need for coding can vary significantly.

In general, if a logical component of the structure is always immediately reused after it is created, it is not advisable to create an item code (with some exceptions explained below).

If, on the other hand, the time of creation and utilization is not temporally coincident, then there is a need to store the element, and therefore it must be coded in order to manage the related processes and year-end financial accounting.

Thus, the need to store an element is a sufficient condition for requiring its coding via an item code.

The reasons that lead to the necessity of storing a component are typically the following:
- The production of the component involves a non-negligible machine setup cost, so minimum production batches are established to minimize setups and increase the ratio of actual production hours to available work hours. Therefore, normally, the batches are of a size greater than the current needs, hence part of the production will be stored to be consumed in the future.
- Some components need to be produced in advance of requirements to deliver finished products within the timeframes demanded by the market, thus the quantities actually needed at the time of production are unknown, leading to the creation of a stock in anticipation of future consumption.
- Some production processes have inconsistent yields, so it is necessary to have a stock of materials for use.
- A stock is desired upstream of a critical resource (bottleneck) to avoid the risk of it stopping due to a lack of material to work on, as the production rate of the factory is determined precisely by the bottlenecks.
- Production processes are to be separated in order to reduce their interdependence when they are not synchronizable, as occurs in continuous flow production.

Sometimes, a decision is made to code an element even if no stock is kept.

This typically occurs for the following reasons:
- The item serves only as a logical grouping of a group of items that are used together in other products or sold as a group. 
This allows for faster and easier creation of bills of materials by managing a single item instead of a group of items that would otherwise need to be entered and managed individually in the bills in which they are used (often referred to in literature as kit bills).
- The item is normally consumed immediately after use but it is necessary to maintain a small stock as spare parts for technical assistance.
- The work cycle of an assembled item cannot be represented by a linear sequence of phases as it has a network nature (i.e., with multiple branches). 
In fact, the vast majority of ERP systems only allow for defining sequential work cycles, therefore in the case of network cycles, it is necessary to introduce item codes corresponding to each branch of the work cycle.
- To identify parts of the product from a logical point of view or because there is a need to calculate costs for parts of it.
- For reasons of technical documentation for repair and maintenance interventions.

In cases where an item code is created but there is never stock of it, the item is identified as a phantom or fictitious item, therefore it will not be possible to issue orders or perform stock movements for it, and the MRP system will directly consider its components without planning for it since it cannot have stock or orders.*

:::