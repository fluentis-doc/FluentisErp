---
title: Update policies prices/discounts formula
sidebar_position: 2
---

In this screen, it is possible to link the rules between purchase and sales documents, in order to automatically modify the prices of items in price lists when the supplier sends a new catalog.     

In the first grid, **Code** and **Description** of the formulas are present.     

In the second grid, origin documents, destination documents, and formulas must be indicated. A maximum of 5 operations can be applied for the same line. Only columns with content are considered; those left empty will not be updated nor taken into consideration as a source of modification. The user should only fill in the columns of interest for origin, destination, operation, and value of operation. Let’s analyze the columns of the second grid.      

- **Destination sales price list type**: contains the *Price list type* of the destination to which the formula present in this row will be applied.        
- **Destination sales price list description**: contains the customer's registry to which the customized price list subject to modification will be addressed.          
- **Destination supplier price list type**: contains the *Purchase price list type* subject to modification.       
- **Destination supplier price list description**: contains the supplier's registry to which the price list subject to modification will be addressed.          
- **Origin sales price list type**: contains the type of origin sales price list, to which the *Operation (Operando)* will be applied.      
- **Description customer source**: contains the customized price list to be considered as origin.       
- **Origin supplier price list type**: contains the type of origin supplier price list.         
- **Description vendor source**: contains the customized origin price list.         
- **Origin warehouse cost**: this field should be filled if the *Average cost*, *Last*, or *Standard* cost of the item is to be considered as origin.        
- **Operation N**: the operation selected in this combo box between +, -, *, /, or % will be applied to the document considered as *Origin*.          
- **Value N**: in this field, a manual value can be entered to be applied based on the selected operation.       
- **Property Value N**: in this field, a field can be entered to which the selected operation will be applied; this field excludes the previous one: the sum/subtraction/division, etc., can indeed be of a manual value or of the value of another field; double-clicking in this field opens the *Object Navigator* from which to select the property to be considered as part of the operation; the first two lines of the Object Navigator are the flags **AddedValue** and **AddedPercentage**, which are used to bring these values from the supplier price list.           
- **Discount resumption**: this flag carries the discounts from the selected Price List into the destination document. If this flag is active, when creating a new sales price list using the *Advanced Price List Creation* procedure, discounts entered in the *Definition of Discount Policies* of the origin document will also be applied.     
- **Take discount from preferred supplier**: this flag retrieves the discount from the default preferred supplier price list.