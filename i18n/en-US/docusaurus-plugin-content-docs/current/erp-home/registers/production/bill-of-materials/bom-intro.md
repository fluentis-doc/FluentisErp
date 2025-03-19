---
title: Bill of Materials 
sidebar_position: 0
---

:::important **Introduction**

The bill of materials is a data structure of a physical-logical type that describes how a product is made.             
Normally, it is only used for production products and not for purchased items, indicating the components that are part of the assembled product and the necessary quantity of each to produce a predefined amount of the assembled product (component usage coefficient).            
In addition to the component code and quantity representing the basic information, there are many others that will be illustrated in the Fluentis online help.

The bill of materials serves the following purposes:

- To plan the need for materials (semi-finished goods and raw materials) and production resources

- To manage the inventory movements of the components against the realization of an assembled product (knowing the quantity produced of the assembly allows for calculating the theoretically consumed quantity of each component and therefore making the respective inventory reductions)

- To calculate the estimated cost of an assembly; in fact, the structure of the product along with the costs of purchased or externally processed materials and the description of the processing process through work cycles allows for calculating the theoretical cost of a product. 
The actual cost varies for each transformation order based on the actual purchase value of the materials, the worked times accounted for, and the resources actually used.

- To describe and document the structure of a product.

Sometimes a bill of materials is created for a product that is not manufactured internally (for example, a purchased product), solely to represent its structure for maintenance or repair purposes.

Regarding planning, in addition to physical bills where both the assembled code and components are real products handled in inventory with purchasing and production processes, logical but non-physical bills called planning bills are used, whose purpose is to simplify the medium-long term planning process as downstream activity of sales forecasting that is carried out not for individual finished product codes but for families of products and typically at value and not at quantity.

The main types of planning bills are as follows:

<details>
<summary> Modular Bills </summary>

This type of bill describes the modules and options of a finished product.
The modules are common parts that do not depend on customer choices, whereas the options are chosen by customers.
It is widely used in environments where a product can be ordered with various options by the customer, such as in the automotive industry (accessory choices, engine options, etc.).

</details>

<details>
<summary> Container Bills </summary>

In this case, the code of the assembled product does not correspond to a real product managed in inventory but represents a logical grouping of its components.
The advantage is that with a single item code, many are managed in both the planning phase and inventory movement and product costing.
The container code is thus used as a component in other bills, both physical and logical.

</details>

<details>
<summary> Super Bills </summary>

These are bills used to represent families of finished products that use modular bills and common parts bills as components.
The usage coefficient assigned to each option represents the probability of ordering that option out of the total units sold of the finished product family (for example, if the 2000 cc gasoline engine is chosen in 23% of cases, the usage coefficient for that option will be 0.23).
The usage coefficient assigned to each common parts bill represents the quantity needed to produce one unit of finished product of that group.

</details>

<details>
<summary> Family Bills </summary>

The assembled code of such a bill is a logical and not physical element that serves to identify a family of products by indicating its individual members when the number of members in a family is not large.
Often the members of the family are the “models” that compose it.
Consider, for example, a large company that produces several families of products such as motorcycles, cars, heavy transport vehicles, buses, earth-moving machines, tractors, etc.
In this example, the family of cars consists of the various car models sold by the company, and so on for the other families.
Each “model” will be present in the bill with a usage coefficient that represents the percentage of sales of that model in the total family.

</details>

<details>
<summary> Average Bills </summary>

Once again, the code of the assembled product is logical and not physical.
It represents the average structure of a product similarly to how a super bill does, but unlike the latter, its components are not modules or kits (i.e., logical components) but physical codes actually managed in inventory and in most cases consist solely of purchased components.
It is mainly used when finished products differ in physical characteristics such as shape, size, volume, weight, etc.

</details>

<details>
<summary> Imaginary Bills </summary>

This is a type of bill used in companies that work on Engineer to Order type orders where very complex products with long realization times are produced and not yet engineered at the time of the customer order (industrial plants, large machinery, ships, airplanes, etc.).
In this case, the bill of the finished product would only be available at the end of the entire design activity, making it too late for the planning system to take action.
For this reason, an "imaginary" bill is initially created, copied from a similar product made in the past containing known parts and temporary parts that will be replaced by definitive ones as the design progresses.
This bill allows for the processing of the planning system and the scheduling of activities and procurements appropriately spaced in time, as well as the rescheduling of activities as the order evolves.

</details>
:::