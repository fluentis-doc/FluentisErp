---
title: Create Batch from Batch and Create Batch from Batch with Item Change 
sidebar_position: 5
---

### Create Batch from Batch 

:::important What it is for 
The Create Batch from Batch procedure of Fluentis is an important feature that allows the generation of a new Batch from an existing Batch of the same item. This operation is fundamental for effectively managing the warehouse and promptly responding to production and logistics needs.

The procedure is structured into three main sections: a filter for data selection, a grid that displays information related to the chosen Batch, and a section dedicated to the data of the new Batch. Users can enter crucial information such as the initial quantity, the number of packages, and the templates for shipping and loading to complete the registration of the new Batch. The implementation of this procedure not only simplifies Batch movement but also helps maintain accurate traceability within the system, ensuring quality requirements and regulatory compliance.
:::

This form allows you to create a new Batch of the same item, starting from the old Batch.

The form is composed of 3 distinct sections:

- filter: where you can filter the desired data, and using the **Search** button present in the *Ribbon bar*, the data can be displayed in the grid below;     
- results grid: containing all information related to the searched Batch;          
- new Batch data: in this section, below the results grid, the data related to the new Batch is contained.

Below are the data related to the new Batch to be created:

> **Initial quantity of the destination batch**: indicates the initial quantity that the destination Batch will have;         
> **Package number of the destination batch**: indicates the number of packages that the destination Batch will have;              
> **Unload template of the origin batch**: indicates the template for the shipping with which the origin Batch will be shipped;        
> **Load template of the destination batch**: indicates the template for the loading with which the destination Batch will be loaded;      
> **Location of the destination batch**: indicates the location where the destination Batch will be loaded.

:::note **WARNING** 
The warehouse templates that can be used in this procedure are only those that have the **Create Batch from Batch** flag active in the [Warehouse Templates](/docs/configurations/tables/logistics/warehouse-templates/).     
To set this, it is necessary to create a **Unload** template, with the flags **Batches management** and **Integrate initial quantity** active, the **Bill of Materials** flag deactivated, and it must have an **Offset** of **Load**.
:::

Once all desired filters are set, simply click on the **Search** button present in the *Ribbon bar* to display the results within the results grid.

After that, it is necessary to select the desired Batch and enter the data related to the new Batch in the section below the form; at this point, simply press the **Create batch** button to create the new Batch for the same item.

For details on the common functioning of the forms, refer to the link [Custom features, buttons, and fields](/docs/guide/common).

### Create Batch from Batch with Item Change 

:::important What it is for 
The Create Batch from Batch with Item Change is an advanced procedure of Fluentis that allows creating a new Batch for a different item starting from an origin Batch. This functionality is particularly useful in inventory management when it is necessary to transfer quantities from one item to another while always maintaining detailed Batch records.

This procedure is also organized into three sections: a filter for searching for existing Batchs, a grid that shows the search results, and a section for entering data related to the new Batch. Users can specify details such as the destination item code, the initial quantity, and the templates for shipping and loading. Thanks to this procedure, companies can optimize warehouse flows and ensure greater operational efficiency, ensuring that all movements are traceable and correctly recorded in the system.
:::

This form allows you to create a new Batch with a new item starting from a different Batch with a different item.

The form is composed of 3 distinct sections:

- filter: where you can filter the desired data, and using the **Search** button present in the *Ribbon bar*, the data can be displayed in the grid below;     
- results grid: containing all information related to the searched Batch;          
- new Batch data: in this section, below the results grid, the data related to the new Batch is contained.

Below are the data related to the new Batch to be created:

> **Destination batch item**: allows you to enter the class, code, and description of the destination item;            
> **Item variant**: allows you to enter the variant of the destination item;              
> **Initial quantity of the destination batch**: indicates the initial quantity that the destination Batch will have;         
> **Package number of the destination batch**: indicates the number of packages that the destination Batch will have;              
> **Unload template of the origin batch**: indicates the template for the shipping with which the origin Batch will be shipped;        
> **Load template of the destination batch**: indicates the template for the loading with which the destination Batch will be loaded;      
> **Location of the destination batch**: indicates the location where the destination Batch will be loaded.

:::note **WARNING** 
The warehouse templates that can be used in this procedure are only those that have the **Create Batch from Batch** flag active in the [Warehouse Templates](/docs/configurations/tables/logistics/warehouse-templates/).        
To activate it, it is necessary to create a **Unload** template, with the flags **Batches management** and **Integrate initial quantity** active, the **Bill of Materials** flag deactivated, and it must have an **Offset** of **Load**.
:::

Once all desired filters are set, simply click on the **Search** button present in the *Ribbon bar* to display the results within the results grid.

After that, it is necessary to select the desired Batch and enter the data related to the new Batch in the section below the form; at this point, simply press the **Create batch** button to create the new Batch for the same item.

For details on the common functioning of the forms, refer to the link [Custom features, buttons, and fields](/docs/guide/common).