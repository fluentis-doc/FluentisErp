---
title: VAT Books
sidebar_position: 20
---

Form path: **Configuration > Tables > Administration > VAT Books (Configurazione > Tabelle > Amministrazione > Registri IVA)**

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist of the linked page.

The registers created by the Fast Start are already ready to manage:
- Purchases and sales in Italy
- Purchases and sales Reverse Charge as well as a section for purchase offsetting
- Purchases and sales EU as well as a section for purchase offsetting
- Purchases and sales Extra EU
- Revenue
- Summary for VAT liquidation printing
:::

### Specific Buttons

**New**: allows for the entry of a new VAT register.  
**Insert year**: allows for the entry of a new year for the VAT register on which you are positioned.  
**Cancel**: allows for the deletion of the VAT register on which you are positioned.  
**Delete year**: allows for the deletion of the year of the VAT register on which you are positioned.  
**Preview**: allows for printing.  
**Print Report**: allows for printing.  
**Cancel definitive reports**: allows for the cancellation of the definitive prints of the registers. A dialog opens in which to select the register and the period you want to cancel.  
:::

### First Section

**Code**: alphanumeric code identifying the register.

**Description**: description of the register typically printed in official reports.

**Nomenclature type**: pre-coded type of the register. Pay attention to the correct setting for registers that accommodate offsetting for intra or reverse charge purchases, which will be set to *Sales* and differentiate correctly between purchases/sales under tax suspension and the special regime ex art. 74 ter dpr 633/72.

**Control VAT reference no.**: setting this flag blocks the ability to definitively print a register that has gaps in the protocols or inconsistencies in their ordering.

**To allocate**: this flag imposes management of the related register in the procedure for the allocation of revenues.

**To settle**: allows determining which VAT registers are to be managed in the printing of the periodic VAT liquidation.

**Ref. purchase reg. (Rif. reg. acquisto)**: the field is active only for sales/revenue registers, to indicate the originating purchase VAT register of the revenue allocation.

**Description**: description of the ref. purchase register.

**Numeration**: allows setting a numerator for each register with the usual standard options common to other numerators present in the management system, instead of the standard numbering provided for VAT registers. In the Italian localization, this field is not used.

**Description**: description of the associated numerator.

**Vat Activity Type**: the combo box refers to the VAT Activity Type table where various types of activities can be freely coded for VAT purposes (for example, "Production" and "Real Estate") to which a percentage of *Pro Rata* VAT deductibility can be associated. There is also a flag to define which is the main activity predominant on which to total the values in the VAT liquidation.

**Description**: description of the VAT activity type.

### Second Section  

Allows setting the protocol counter for each fiscal year in the 'Initial VAT Prot. (Prot. IVA Iniziale)' field.

**Year**: reference year.

**Initial VAT Prot. (Prot. IVA iniziale)**: initial VAT protocol for the reference year.

**Last VAT Prot. (Ultimo prot. IVA)**: allows viewing which is the last VAT protocol that has been definitively printed in the register itself.

**Last print date**: date of execution of the last definitive print.

**Last printed page (Ultima pag. stampata)**: last page number printed definitively.

:::tip Note
Printing this table allows viewing the last period printed definitively for each register and year.
:::

:::important See Also
[**VIDEO TUTORIALS ON ADMINISTRATIVE TABLES**](/docs/video/finance/intro)
:::