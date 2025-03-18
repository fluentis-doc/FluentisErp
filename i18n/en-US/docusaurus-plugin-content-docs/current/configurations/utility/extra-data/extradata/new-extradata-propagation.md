---
title: Extradata Propagation (Propagazione degli ExtraData)
sidebar_position: 4
---

# Extradata Propagation - Introductory Aspects (Propagazione degli ExtraData - Aspetti introduttivi)

The functionality related to the propagation of ExtraData allows extending a specific ExtraData defined on one object to another derived object.  
For example, an ExtraData defined on the FSItem (Item) object can be propagated to the FSSalesOrderItem (Sales Order Item) object.  
FSSalesOrderItem is an extension of the FSItem class.  

Since the ExtraData is present in FSItem as defined in the previous paragraph, the derived class FSSalesOrderItem can inherit this property based on the inheritance mechanism of object-oriented programming.   


## Central Body (Corpo Centrale)

![](../../../../../static/images/20250317090341.png)

The **Propagation** tab consists of a grid with the following columns:  
* **Property path (Property path)**: required - property that will link the classes.  
* **Collection property (Collection property)**: required - the property of the collection.  
* **Editable (Editable)**: makes the extra data independently modifiable.  
* **Priority (Proprity)**: indicates the priority. 
* **From val. date / To validity date (From val. date / To validity date)**: if we want it to be temporary, thus having a start and an end.  

In the example screenshot, we proceed to link the ExtraData 'FinituraExtraData' that we defined in a previous scenario  
[**Link to Previous Scenario (Link Scenario Precedente)**](docs\configurations\utility\extra-data\extradata\new-extradata-datasource.md).  

To manage the propagation from a main object to a derived one, it is necessary to have the ExtraData active on both objects in the **activations** tab and then manage the propagation through the specific **propagation** tab.

In the example, we insert the linking rule between the two classes.  

## Inserting ExtraData in the Detail Form (Inserimento dell'ExtraData nella form di dettaglio)

After opening the detail form of the relevant **sales order**, to include the ExtraData in the detail form, we can use the **form navigator** and **object navigator**.  
1. From the **Object Navigator**, expand the node of the **items** collection and then expand the ExtraData node.  
2. Drag the ExtraData directly onto the grid of items associated with the sales order.   

![](../../../../../static/images/20250317101524.png)

The ExtraData will have a combobox (dropdown) widget and will show the **code** value saved in the corresponding table on the MSSQL side.