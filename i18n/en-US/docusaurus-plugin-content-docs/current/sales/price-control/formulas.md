---
title: Update policies prices/discounts formula
sidebar_position: 4
---

In this screen, it is possible to link the rules between purchase and sales documents, so as to automatically modify the prices of the items when the supplier sends the new catalog.     
In the first grid, there are **Code** and **Description** of the formulas.      
In the second grid, however, there are the source documents, destination documents, and formulas. Up to 5 operations can be applied for the same line. Only the columns with content are considered; those left empty will not be updated or taken into account as a source of modification. The user should therefore fill in only the columns of interest for source, destination, operating, and value operating. Let's analyze the columns of the second grid.      
**Destination sales price list type (Destinazione tipo listino di vendita)**: contains the sales price list type that will receive the modification when the formula present in this row is applied;        
**Account/Subaccount/Description of destination sales price list (Conto/sottoconto/descrizione destinazione listino di vendita)**: contains the customized price list that will receive the modification;          
**Destination supplier price list type (Destinazione tipo listino fornitori)**: contains the supplier price list type that will receive the modification;       
**Account/Subaccount/Description of destination supplier price list (Conto/Sottoconto/Descrizione destinazione listino fornitore)**: contains the customized purchase price list that will receive the modification;          
**Source sales price list type (Origine tipo listino di vendita)**: contains the type of sales price list of origin to which the Operation will be applied;      
**Account/Subaccount/Description of customer origin (Conto/sottoconto/descrizione origine cliente)**: contains the customized price list to be considered as origin;       
**Source supplier price list type (Origine tipo listino fornitore)**: contains the source supplier price list type;         
**Account/Subaccount/Description of supplier origin (Conto/sottoconto/descrizione origine fornitore)**: contains the customized price list of origin;         
**Source cost of inventory (Costo origine magazzino)**: this field must be filled in if the average, last, or standard cost of the item is to be considered as origin;        
**N Operation (Operando N)**: the selected operation from this combo box among +, -, *, / or % will be applied to the document considered as Origin;          
**N Value (Valore N)**: in this field, a manual value can be inserted to apply based on the selected operation;       
**N Property Value (Valore Proprietà N)**: in this field, a field can be entered to add/subtract, etc., based on the selected operation; this field excludes the previous one: the addition/subtraction/division, etc., can indeed be either a manual value or a value from another field; double-clicking in this field opens the Object Navigator from which the property to be considered as the operation's invoice can be selected; the last two rows of the Object Navigator are the flags **AddedValue (AddedValue)** and **AddedPercentage (AddedPercentage)**, which are used to pull these values from the supplier price list;           
**Discount resumption**: this flag brings the discounts of the selected Price List into the destination document;      
**Recovery of discount from preferred supplier (Ripresa sconto da fornitore preferenziale)**: this flag retrieves the discount from the default preferred supplier's price list.