---
title: Subcontractor Parameters
sidebar_position: 1
---

The user can open the Subcontractor Parameters window through the following path: Home > Parameters > Production > Subcontractor Parameters. Through this window, the user can set all the parameters concerning subcontractor management and, more specifically, the way in which warehouse transactions, that have been activated by procedures of the same module, are carried out.

Warehouse and the related template, that have to be used while unloading materials that are going to be delivered to the subcontractors, are set in the “Material Deliveries to Subcontractors” section. Consequently, the set warehouse is the one from which the materials inserted in the “Materials to Delivery” Tab of the subcontractor order are unloaded.

Warehouse and the related template that have to be used while loading materials that have to be delivered to the subcontractors, are set in the “Material Load to Subcontractors” section. Consequently the set warehouse is the one to which the materials inserted in the “Materials to Delivery” Tab of the subcontractor order are loaded. These data are then retrieved by the offset template inserted into template tab, in correspondence of the template that is in charge with the unloading procedures of the material addressed to the subcontractors (the template set in the dedicated combo box belonging to the “Material Deliveries to Subcontractors” section).

Warehouse and the related template that have to be used while transferring materials from a subcontractor to another one, are set in the “Materials Deliveries between Subcontractors” section. These data are used in “Transfer among Subcontractors” mask.

Warehouse and the related template that have to be used while unloading materials used by subcontractors, are set in the “Consumption of the used materials” section. Consequently, the set warehouse is the one from which materials inserted in the “Materials used of the subcontractor return” are unloaded.

The “Return Product Subjected to CQ” section is currently not active.

Warehouse and the related template that have to be used while loading finished/unfinished products, made by the subcontractors are set in the “Product Return” section. Consequently, the set warehouse is the one to which items inserted in the “Items Returned” tab (of the Subcontractor Return) are loaded.  

Warehouse and the related template that have to be used while loading the returned items, are set in the “Material Returned” section. Consequently, the set warehouse is the one to which the items inserted in the “Material Used” tab of the Subcontractors Return are loaded. This items are assigned with a returned amount of items.

In the “Delivery Note Type” (D.N Type) section it is possible to set the Purchase Delivery Note type that has to be suggested by default  while using the Delivery Note Creation procedure of the Subcontracting. This type of note automatically uses the warehouse and the template set in the dedicated combos of the “Materials Deliveries to Subcontractors” field that is in the subcontractors parameters window.

The “Mandatory user code” flag sets if it is necessary to insert the user code while inserting the delivery note of the subcontractor.

The “Last order number of the inserted subcontractor” box,  shows the last progressive number used in subcontractor orders.

Data of Suggested Materials: it shows 4 different possibilities to make the procedure automatically suggest materials in the “Materials to be Delivered” tab (of the subcontractor order). The possibilities are the following: 1. From the last delivery performed at the same subcontractor: it is necessary to control the last subcontractor order created for the same subcontractor. In this order the item to be produced is present; 2. Expand level from BOM structure: it controls the bill of materials of the item inserted in the “Items to be produced” tab. 3. Delivery of the same item to be produced: the item inserted in the “Items to be produced” tab has to be inserted in the “Materials to be delivered” tab; 4. No material: in the “Materials to be Delivered” there is not any material.

The “Proposal of the Last Price of Working Made” flag, if active, suggests the price of the last subcontractor order issued for that item for the same subcontractor; it is possible to find it in the subcontractor order, in the Unit price working box that belongs to the “Items to be Produced” tab.

Through the “Valorization of the work. Mat. To cost” radio buttons, the user determines if the material processing valorization follows the “Latest cost” or the “Average Cost” pattern. It is a way to decide if the materials used by subcontractors have to be assigned to the working process by using the “Latest Cost” or the “Average Cost” pattern, found within register of the item itself.

Version/Option Combos: through them the user can select the BOM version and the related option. Generally, data are suggested automatically as active version and Base Option.

 “Data of the Material Proposed in the Subcontractor Orders” section includes 4 other sections:


 1. It is possible to decide if it is necessary to consider the availabilities of the Subcontractor/Production/Purchases/Warehouse/Sales areas: each flag indicates if the user wants the subcontractor creation procedure includes materials availability, according to the data coming from the single applications areas of the ERP. For example, if the user wants to activate the flag only in “Purchases” and not in “Sales” area, it means that the system considers the availabilities of subcontractors orders, purchase bills and invoices and of purchase demands; therefore those ones, coming from customers' orders, sales bills and invoices are not taken into account.
 2. Finished Products (flag): while inserting an item within “Items to be Produced” tab  that belongs to the Subcontractor Order, the user can decide to take into account the amounts of items according to the economic lot and/or the multiples of the lot.
 3. Materials: while inserting an item in the “Items to be Produced” tab of the Subcontractor order, the user can take into account, for the materials to be delivered, the amounts of items according to the economic lot and /or the multiples of the lot.
 4. Regenerate materials while updating the item: if the flag is active, every time the user edits the item-line within the “Items to be Produced” tab of the subcontracted order, the procedure regenerates the information related to the materials to be delivered and to be used; they have to be inserted in the last tab of the same order.
 5. Warehouses: this section enables the user to consider warehouses according to the return bill or to the delivery note type; in this way the user does not have to use settings of the combos related to “Material deliveries to Subcontractors” and “Return Product”.

Through the “Control Availability” flag  the user can decide if the procedure controls (or not) the availability of flags set in the “Consider availabilities from” section.

 “Compulsory availability” flag prevents the insertion of materials in subcontractor orders in case of unavailability at the delivery date.

If the “No materials in delivery” flag is active, there is no item inserted regarding no item to be produced in the “Materials to be Delivered” tab.

If the “Check Materials Availability” flag is active, the procedure considers also the availability of the materials to be used during the subcontractor return phase.

If the “Automatic load/unload” flag is active, it enables warehouse movements to become automatic as soon as the delivery note has been printed. This feature enables the user to avoid the unloading of the subcontractor delivery notes.

If the “Block the Document Insertion in Public Holidays” flag is active, it blocks the insertion of an order, of a delivery note and of a subcontractor return in public holidays.

If the “Cost Zero if Price Lists are Missing” flag is active, it enables the insertion of an item within the “Items to be Produced” tab of the subcontractor order; consequently there is no need for the procedure to insert, as unit price working, the latest cost of the item taken from its register; a unit price equal to zero is then inserted.

If the “Check Reference Subcontractor for Items” flag is active, it enables the subcontracted orders creation procedure to check if the item inserted into the “Items to be Produced” tab has, as preferential vendor, the subcontractor inserted in the header of the order itself.

Hereinafter the list of actions that can be performed through the RIBBON BAR:



| Function | Meaning |
| --- | --- |
| Save | Button to save modifications made on the Subcontractor Parameters |






