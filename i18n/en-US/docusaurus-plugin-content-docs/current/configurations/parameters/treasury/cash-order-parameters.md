---
title: Cash Order Parameters  
sidebar_position: 5
---

The parameters of the Bank Receipts module can be found in **Parameters > Treasury**.

In the related parameters, default elements can be pre-set to be proposed in the procedures of the module. In particular:

**Path for creating Riba tracks**: Setting the standard directory for creating the electronic track for bank receipts. It is recommended to create a shared network directory within a server, to be able to access it from all workstations of the procedure.  
**Customer references**: It is the company name of the active company that will be entered in the CBI presentation file.  
**Standard description of credit**: It is possible to code, using the codes indicated in parentheses, the text to be included in the file as a description of the document of reference for the Riba issuance. This is a text of the type Ft. Nr. (2) of (3).  
**Insert character of final control**: For some remote banking programs, a final line break in the file is necessary; set this flag if needed.  
**Without reference for unpaids import**: In some remote banking programs, an automatic update of records based on the data entered in the Riba file is provided. The field that we use for the overdue import procedure can cause a continuous update of records that can be avoided with this flag (which means that the overdue import procedure itself will not be usable).  
**Second description management**: With this flag, the customer description included in the file will be composed of the first description + second description.