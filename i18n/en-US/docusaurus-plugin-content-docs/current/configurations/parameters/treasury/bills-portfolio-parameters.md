---
title: Bills Portfolio Parameters
sidebar_position: 4
---

The parameters of the Effects Portfolio module can be found in **Parameters > Treasury**.

In the parameters of the Effects Portfolio module, you can pre-set the default elements to propose in the procedures of the module. In particular:

#### Bills Acquisition    
- **Automatic accounting**: allows you to predefine the accounting of effects directly at the time of effect acquisition from invoices or from items. 
- **Acquisition only with due date beyond specified number of days**: if a number of days is indicated, then ***FluentisERP*** will block the creation of an effect with a more recent due date that cannot be banked.
- **Block bills creation without abi / cab**: if set, ***FluentisERP*** will block the creation of effects to which it is not possible to assign ABI/CAB supporting codes.
- **Group credit notes by due date**: if set, the automatic cancellation of credit notes, which can be set for each customer, will operate only for dates uniform with invoice due dates.

#### Bills Accounting  
- **Ledger Records Template**: allows you to define the default accounting reason to propose in the identical procedure.  
- **Grouping by bill account**: allows you to define the grouping parameter of effects to the records made with that procedure.  
- **Temporary records**: allows you to define the state of provisional registration for the records made with that procedure.  

#### Lists Accounting    
- **Ledger Records Template**: allows you to define the default accounting reason to propose in the identical procedure.  
- **Accounting on maturity date**: the first option will split the recording of the list to the various due dates of the effects, adding the bank days set in the bank registry for the established reason.  
- **Account on due date with bank value date = maturation date**: the second option will register the various effects on their due dates but with the bank value date adjusted according to the bank days set in the bank registry for the established reason. 
- **Close client in lists accounting**: with this setting, effects accounting will not be performed, therefore a support account *Bills in portfolio* will not be used, but the customer will be directly closed with the *Lists Accounting* with typically *sbf effects* as the counterpart, which is the transit account inserted in the header of the list itself.

#### Bills Accounting by Vendor   
- **Bills Accounting by Vendor**: allows you to predefine the accounting reason to propose in the procedure for Accounting effects to the supplier, i.e., the turnover of credit titles in payment to suppliers.

#### Credits Accounting    
- **Ledger Records Template**: allows you to define the default accounting reason to propose in the identical procedure.  
- **Commission charges**: allows you to define the sub-account for commission expenses for the records made with that procedure.  
- **Passive expenses**: allows you to define the sub-account for passive charges for the records made with that procedure.  

#### Grouping    
- **Group values smaller than**: this field, if not empty and different from zero, determines the threshold value for items to be grouped. For example, if set to ‘1000', this means that items with amounts less than this figure will be grouped, i.e., up to 999.99.