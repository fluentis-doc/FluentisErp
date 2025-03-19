---
title: Weights/Dimensions 
sidebar_position: 18
---

:::important Purpose 
The Weights and Dimensions tab of the item registry in Fluentis is essential for the logistical management of items. In this section, users can specify details regarding the dimensions and weight of items, facilitating warehouse and procurement operations.         
This allows for the entry of dimensions (length, width, height) using the chosen unit of measure, and it automatically calculates the volume.           
Additionally, it is possible to define gross, net, and specific weight, which are important information for shipping planning and cost management.
:::

This section contains several areas:

**Item Dimensions**

In the combo box, the user has the option to choose the unit of measure for the dimension from the proposed options, and in the area below, they can indicate the first, second, and third dimensions along with their respective values, in order to specify height, width, and depth.

**Volume**

In the combo box, the user will choose the unit of measure for the volume, and in the field below, they will indicate the reference volume value.

**Material Type**

In the combo box, the user selects the type of material from the predefined material types in the relevant table **Tables > Logistics > Material Types**. Additionally, the user can also define the material's profile type with the respective dimensions.

**Weight**

In the combo box, the user will select the unit of measure for weight, and then indicate in the fields below the gross weight, net weight, and specific weight. The gross weight and net weight are the weights that are reported in the various documents related to the item.

**Load Unit Type**

In the combo box, the user defines the packaging of the item (whether it's a pallet, euro pallet, etc.), and in the field below, the number of items per load unit can be indicated. Based on the load unit type and the number of items per load unit, when creating loading plans, the quantities and packing for vehicle preparation can be automatically calculated. It is important to note that these values are considered if there are no generic values present in the [Packaging tab](/docs/erp-home/registers/items/create-new-items/item-registry/packaging).

**Number of Packages**  
This section is used to manage the number of packages in documents; it can be managed either based on the number of items per package or the number of packages needed to form the item by setting the flag on the parameter that is to be used for this calculation; this way, the calculation of the number of packages will be automatically recorded in the documents.