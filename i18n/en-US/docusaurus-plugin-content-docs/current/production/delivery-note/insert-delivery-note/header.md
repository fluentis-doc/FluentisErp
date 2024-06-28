---
title: Header
sidebar_position: 2
---

In this tab it is possible to manage all the header characteristics of the Delivery Note, so the data related to the inserted subcontractor, that have been automatically proposed by the procedure (those precompiled in the subcontractor register) and editable by the user.

The data managed in “Header” tab are the following:


 1. Subcontractor Address: in these fields it is possible to view subcontractor address, post code, city and province, without the possibility for the user to edit
 2. Currency: in this combo box the currency is proposed automatically into the subcontractor register, together with the possibility for the user to edit according to this delivery note
 3. Exchange: in this fields there is the exchange rate linked to the selected currency. If the currency is the same as the company currency, the exchange rate is 1
 4. Carriage: in this combo box the carriage code set in the subcontractor register is proposed automatically together with the possibility for the user to edit according to this delivery note. The combo box can take data from the “Carriage” table, that is located within the General Settings
 5. Delivery: in this combo box the delivery code set in subcontractor register is proposed automatically, together with the possibility for the user to edit according to this delivery note. The combo box can take data from the “Deliveries” table, that is located within the General Settings
 6. Packing: in this combo box the packing code set in the subcontractor register is proposed automatically, together with the possibility for the user to edit according to this delivery note. The combo box can take data from the “Packings” table, that is located within the General Settings
 7. User: in this combo box the user can insert the dipendent code that has inserted the delivery note. The combo box can take data from the “Dipendent” table, that is located within the “Employee” module
 8. Goods Appearance: in this combo box the user can insert the goods appearance code by taking data from the “Goods Appearance” table, that is located within the General Settings
 9. Recipient: in this combo box the recipient code, that is set in the subcontracto register of “Deliveries” tab, is proposed automatically together with the possibility for the user to edit according to this delivery note. Then according to what the user selects in this combo box appears in the field below the detail about company name, address, post code, city, province and nation of the recipient register. In this field it is possible to edit even manually data or to search data by using registers help that can be opened thanks to a double click on field
 10. Destination: in this combo box the destination code, linked to the recipient set in the subcontractor register of “Deliveries” tab, is proposed automatically with the possibility for the user to edit according to this delivery note. Then according to what the user selects in this combo box appears in the field below the detail about company name, address, post code, city, province and nation of the destination. In this field it is possible to edit even manually data or to search data by using registers help that can be opened thanks to a double click on field
 11. Packages No.: in this field it is possible to establish the packages number of the delivery note
 12. Volume, Net Weight, Gross Weight: in these fields it is possible to establish the information related to weights and volumes of the delivery note, using also the specific combo box in order to insert the related unit of measure and using the “Unit of Measure” table that is located into the “General Settings”
 13. Transport made by: through these radio buttons the user can set the transport modality that can be made by the sender, recipient and vector. If “sender”, the user can view automatically the personal company address in the tab below; if “Recipient”, the user can view automatically the subcontractor address; if “vector”, it is possible to set a series of data related to the delivery note and so addresses of vector, consignor, owner and address of the load place. Lastly, all these situations can set the numberplate, time and date of transport
 14. Delivery Note Status: through these 2 flags it is possible to identify the delivery note status, that can be printed (after that it has been previuosly printed the delivery note report) and loaded (after that the unload of the same delivery note from warehouse is occured). If the delivery note has not been printed, it is not possible to be unloaded
 15. Payment Typologies: in this section there is a grid, within which the situation related to subcontractor payments of document is shown. The grid can be edited by user, who can edit payment types and solutions proposed by the procedure, which takes from subcontractor register, “Payments” tab

At the bottom of tab there are 3 fields on which it is possible to calculate “Amount Origin”, “VAT” and “Total Delivery”.

After having inserted the header data, the user has to save document through the specific “Save” button on the ribbon bar. After the Delivery Note saving it is possible to active the “Estimated Deliveries” button, which opens a second window called  [Execution from Order](/docs/production/delivery-note/insert-delivery-note/execute-from-order). Through this window the user can view the whole number of subcontractor orders that have some partially or completely line to be delivered and from which it is possible to create some Subcontractor Delivery Notes.

Operating on this window, the user can select and subsequently transfer the items lines that wants to insert into Subcontractor Delivery Note just generated. At this point the user can close the execution window, return to the New Deliver Note window and complete possibly the information related to the same delivery note (lots, warehouse and pickup template, unit price, etc…), using “Deliveries” tab as follows.






