---
title: Supplier Payment Parameters (Parametri Pagamenti Fornitore)
sidebar_position: 3
---

The parameters of the **Supplier Payments** module can be found under **Parameters > Treasury (Parametri > Tesoreria)**.

In the Supplier Payments module parameters, default elements can be pre-set to be proposed in the procedures of the module.

- **Path for creating file formats**: setting the standard directory for creating the electronic track for bank transfers in Italy. It is advisable to create a shared network directory within a server so that it can be accessed from all workstations of the procedure. **NOTE**: the field is mandatory, but ***FluentisERP*** uses the integrated document management system to store the .xml file of the electronic track for the payment records. The file will thus be directly retrievable from the payment record form.
- **ABI Application Center (ABI Centro Applicativo)**: obsolete  
- **Use historic exchange rate**: with this option, in the case of transactions in foreign currency, the equivalent value in the company's currency will be managed at the historical exchange rate of the transaction, without recognition of exchange differences.  
- **Insert the bank present on vendor register**: with the flag active, the use of the supporting bank entered in the supplier registry (Supporting Bank Grid) will be enforced compared to the supporting bank defined in the accounting registration, and connected to the open transaction through the Payment Types grid in the registry. The parameter is visible (and can be disabled again each time) in the Automatic Supplier Payment Creation procedure. However, it is not visible if a new payment record is created (Supplier Payments > Create Supplier Payment), and in this case, it must be managed from here.  
- **Accounting for supplier payments**: set by default to account for the operation from the Supplier Payments module and exclude the closure of the transaction present in the accounting registration record.  
- **Management of Iban references (Gestione rif. Iban)**: setting the obligation to manage IBAN codes: in this case, the track will not be created if some payments in the record are missing their IBANs.  
- **Payment type for promissory alerts**: in case passive Riba notices are imported, it is necessary to indicate the default payment type to assign to the created record.