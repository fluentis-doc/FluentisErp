---
title: ExtraData Object (Extradata Object)
sidebar_position: 2
---

## ExtraData Based on Object - Introductory Aspects (ExtraData Basato su oggetto - Aspetti introduttivi)

Through the object-based ExtraData, it is possible to link a property represented by a standard or custom object with a Fluentis object.   
*To better explain this concept, let's use a practical example where we link the object **FSColor**, which represents a set of **colors**, with the Fluentis standard object **FSItem (Articolo)***.

## Creation of Object-Based ExtraData (Creazione Extradata Basato su oggetto)
Go to **Home > Utilities > ExtraData > ExtraData** and click on the **New** **ExtraData** button.

![](/img/en-US/extradata/20250313151835.png)

### Header (Testata)

Let's proceed to create the **ExtraData** based on the object **FSColor**, naming it **Color**.

![](/img/en-US/extradata/20250313165106.png)

* **Code (Code):** mandatory - code.
* **Content Type (Content Type):** mandatory - allows you to select the visualization widget of the ExtraData, there are three options available:
  * **Combobox (Combobox):** this is a dropdown menu that shows values for code/description.
  * **Autocomplete Code (Autocomplete Code):** allows you to write the code that will autocomplete by filtering the available records.
  * **Autocomplete Description (Autocomplete Description):** allows you to write the description that will autocomplete by filtering the available records.
* **Widget Type (Widget Type):**
* **Business Object (Business Object):** mandatory - allows you to select the object on which the ExtraData should be created, for example, FSColor to allow creating ExtraData based on the color code table.

### Activations (Attivazioni)

We will proceed to link the **ExtraData** to the business object **FSItem (Articolo)**.  

![](/img/en-US/extradata/20250313170414.png)

This exactly follows what was illustrated in the introduction to ExtraData.  

### Inserting the ExtraData in the Detail Form (Inserimento dell'ExtraData nella form di dettaglio)

After opening the detail form of the relevant item, to include the ExtraData in the detail form of the item (FSItem), we can use the **form navigator** and **object navigator**.  
1. From the **Object Navigator**, expand the ExtraData node related to the business object and select the ExtraData that we are interested in.
2. From the **Form Navigator**, expand the navigator until reaching the General tab where we want to insert the ExtraData.  

![](/img/en-US/extradata/20250313172149.png)

To display the ExtraData in the detail form of the item, it is sufficient to drag and drop from the Object Navigator to the Form Navigator.  
In the example, the ExtraData 'Color' has been shown in the LayoutGroup that defines the header data of the item (FSItem).   
The ExtraData will have a combobox (dropdown) widget type and will exactly show the values of **code** and **description** saved in the corresponding table on the MSSQL side.

![](/img/en-US/extradata/20250313172543.png)