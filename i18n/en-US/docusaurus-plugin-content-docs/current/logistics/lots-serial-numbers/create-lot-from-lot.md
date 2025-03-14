---
title: Create Lot from Lot and Create Lot from Lot with Item Change (Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo)
sidebar_position: 5
---

### Create Lot from Lot (Creazione lotto da lotto)

:::important What it is for (A cosa serve)
The Create Lot from Lot procedure of Fluentis is an important feature that allows the generation of a new lot from an existing lot of the same item. This operation is fundamental for effectively managing the warehouse and promptly responding to production and logistics needs.

The procedure is structured into three main sections: a filter for data selection, a grid that displays information related to the chosen lot, and a section dedicated to the data of the new lot. Users can enter crucial information such as the initial quantity, the number of packages, and the reasons for shipping and loading to complete the registration of the new lot. The implementation of this procedure not only simplifies lot movement but also helps maintain accurate traceability within the system, ensuring quality requirements and regulatory compliance.
:::

This form allows you to create a new lot of the same item, starting from the old lot.

The form is composed of 3 distinct sections:

- filter: where you can filter the desired data, and using the **Search** button present in the *Ribbon bar*, the data can be displayed in the grid below;     
- results grid: containing all information related to the searched lot;          
- new lot data: in this section, below the results grid, the data related to the new lot is contained.

Below are the data related to the new lot to be created:

> **Initial quantity of the destination batch**: indicates the initial quantity that the destination lot will have;         
> **Package number of the destination batch**: indicates the number of packages that the destination lot will have;              
> **Unload template of the origin batch**: indicates the reason for the shipping with which the origin lot will be shipped;        
> **Load template of the destination batch**: indicates the reason for the loading with which the destination lot will be loaded;      
> **Location of the destination batch**: indicates the location where the destination lot will be loaded.

:::note **WARNING (ATTENZIONE)** 
The warehouse reasons that can be used in this procedure are only those that have the **Create lot from lot (Crea lotto da lotto)** flag active in the [Warehouse Reasons table (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).     
To set this, it is necessary to create a **Unload** reason, with the flags **Batches management** and **Integrate initial quantity (Integra quantità iniziale)** active, the **Bill of Materials** flag deactivated, and it must have a **counter entry (contro partita)** of **Load**.
:::

Once all desired filters are set, simply click on the **Search** button present in the *Ribbon bar* to display the results within the results grid.

After that, it is necessary to select the desired lot and enter the data related to the new lot in the section below the form; at this point, simply press the **Create batch** button to create the new lot for the same item.

For details on the common functioning of the forms, refer to the link [Common features, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).

### Create Lot from Lot with Item Change (Creazione lotto da lotto con cambio articolo)

:::important What it is for (A cosa serve)
The Create Lot from Lot with Item Change is an advanced procedure of Fluentis that allows creating a new lot for a different item starting from an origin lot. This functionality is particularly useful in inventory management when it is necessary to transfer quantities from one item to another while always maintaining detailed lot records.

This procedure is also organized into three sections: a filter for searching for existing lots, a grid that shows the search results, and a section for entering data related to the new lot. Users can specify details such as the destination item code, the initial quantity, and the reasons for shipping and loading. Thanks to this procedure, companies can optimize warehouse flows and ensure greater operational efficiency, ensuring that all movements are traceable and correctly recorded in the system.
:::

This form allows you to create a new lot with a new item starting from a different lot with a different item.

The form is composed of 3 distinct sections:

- filter: where you can filter the desired data, and using the **Search** button present in the *Ribbon bar*, the data can be displayed in the grid below;     
- results grid: containing all information related to the searched lot;          
- new lot data: in this section, below the results grid, the data related to the new lot is contained.

Below are the data related to the new lot to be created:

> **Destination batch item**: allows you to enter the class, code, and description of the destination item;            
> **Item variant**: allows you to enter the variant of the destination item;              
> **Initial quantity of the destination batch**: indicates the initial quantity that the destination lot will have;         
> **Package number of the destination batch**: indicates the number of packages that the destination lot will have;              
> **Unload template of the origin batch**: indicates the reason for the shipping with which the origin lot will be shipped;        
> **Load template of the destination batch**: indicates the reason for the loading with which the destination lot will be loaded;      
> **Location of the destination batch**: indicates the location where the destination lot will be loaded.

:::note **WARNING (ATTENZIONE)** 
The warehouse reasons that can be used in this procedure are only those that have the **Create lot from lot (Crea lotto da lotto)** flag active in the [Warehouse Reasons table (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).        
To activate it, it is necessary to create a **Unload** reason, with the flags **Batches management** and **Integrate initial quantity (Integra quantità iniziale)** active, the **Bill of Materials** flag deactivated, and it must have a **counter entry (contro partita)** of **Load**.
:::

Once all desired filters are set, simply click on the **Search** button present in the *Ribbon bar* to display the results within the results grid.

After that, it is necessary to select the desired lot and enter the data related to the new lot in the section below the form; at this point, simply press the **Create batch** button to create the new lot for the same item.

For details on the common functioning of the forms, refer to the link [Common features, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).