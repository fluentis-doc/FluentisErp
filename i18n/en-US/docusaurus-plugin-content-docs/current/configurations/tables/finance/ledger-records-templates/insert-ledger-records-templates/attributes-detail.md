---
title: Attributes Detail
sidebar_position: 2
---

Fields of the **Attributes Detail** form are the following:

**Automatic Template**: During the save of a template recording the program will automatically create a second recording, based on the template of this field. In order to compile the second recording properly, it is necessary to respect the following parameters, established between the two recordings:



a) the first recording is with IntraCEE purchases VAT movement type und the second is with IntraCEE purchases VAT Giro, where the connection is established thanks to the purchases VAT survey even in sales register;



b) the first recording opens a maturity value, while the second one closes the maturity value immediately;



c) the present case is concerning the closing recording of a maturity value, that exists as a ‘Sales VAT to local governments' movement type and where the VAT is in suspension. This third situation creates a link with the recording of VAT Giro in suspencion; 



d) the fourth case refers to the purchase with VAT in suspencion;



f) the first recording is VAT, while the second one is valorized with the logic of the automatic detail accounts in the chart of accounts;



g) when there are not the previous cases, the program will attempt to set data of the second recording according to the VAT data of the first recording; as an alternative to that, the second recording will create by taking back the detail accounts without any defined value. 

**Reverse Columns if the Amount Is Less than Zero**: it is possible to reverse debit/credit columns of movement according to mark of VAT movement (for this field it's recommended the selection for all VAT recordings).

**Warning**: the field is active only if the previous one has been activated and consists to give user a warning about the sign inversion. The flag is non-influential as regards to templates used in the automatic accounting procedures.

**Allow Detail Account with Zero Values**: thanks to this flag the procedure:

a) will help user to enter lines manually with both debit and credit amount same as zero;



b) at the moment of the recording save the procedure WILL NOT cancel lines from template, which are not valorized by user in recording;



c) this flag will delete the zero amount in the lines, which valorize the debit/credit in journal, that only if there is not the insertion of the flag ‘Consent VAT 0 in journal' in table of ‘VAT rate mode'.

**Recording Prototype**: this is the most important (but not obligatory) section of the ledger template, where it is necessary to upload the typical scheme of the ledger recording type to manage. It is possible also to enter account general codes (e.g. vendors account), that will update automatically by program according to the customers/vendors list in the general ledger parameters. These detail accounts, as well as debit/credit sections, will manage the accounting valorizations, that could be edited in the course of the recording hand loading. 

The amount type codes are fundamental in order to valorize journal automatically on the base of VAT data and ledger in recording movements.

In particular:



**Manual**: it indicates that line will valorize manually by user during the recording stage;



**Taxable income of the detail account**: it indicates that line will be update according to every detail account code in VAT section and with the amount of the same taxable income; the use of this amount is recommended especially for all revenues within the sales templates;  



**Total amount origin**: it indicates that line will be update with the total taxable income of the recording. No considerations will be made on the entered account/detail account code;



**Total VAT value**: it indicates that line will be update with the recording total VAT value. No considerations will be made on the entered account/detail account code;



**Deductible VAT**: it indicates that line will be update with the total deductible VAT of the recording. No considerations will be made on the entered account/detail account code;



**Tot. Doc/Recording**: it indicates that line will be update with the detail account holder of the recording (if pursuant to ledger parameters) and according to the total value of the document/recording;



**Taxable income+deductible VAT**: indicate that line will be update with the total taxable income added to total deductible VAT of the recording. No considerations will be made on the entered account/detail account code;



**50% Taxable income**: it indicates that line will be update with 50% total taxable income of the recording. No considerations will be made on the entered account/detail account code;



**50% Taxable income+Nondeductible VAT**: indicate that line will be update with 50% total taxable income of the recording added to total nondeductible VAT of the same one. No considerations will be made on the entered account/detail account code;



**50% tax.inc.+ 50% Nondeductible VAT**: indicate that line will be update with 50% of recording total taxable income added to 50% of the nondeductible VAT of the same one. No considerations will be made on the entered account/detail account code;



**Tax. Inc. of detail account+detail account nondeductible VAT**: indicate that line will be update according to every detail account in VAT section with the amount obtained through the taxable income and its nondeductible VAT. The use of this amount is recommended to all costs within the purchase templates;



**Actives roundings**: it indicates that line will be update with the amount of actives roundings. Its use is connectable with templates of maturity values closing;



**Passives roundings**: it indicates that line will be update with the amount of passives roundings. Its use is connectable with templates of maturity values closing;



**Detail account amount**: it indicates that line will be update with the amount of the maturity values payments within recording and according to the same payement sign;



**Exchanges diff.profit**: it indicates that line will be update with profit detail account of the reference currency of the exchanges difference, for the amount obtained through the valorization differential between historical exchange and the closing exchange of the maturity value. If the flag is set with the historical exchange, the line will not have valorization;



**Exchanges diff. loss**: it indicates that line will be update with loss detail account of the reference currency of the exchanges difference, for the amount obtained through the valorization differential between historical exchange and the closing exchange of the maturity value. If the flag is set with the historical exchange, the line will not have valorization;



**Automatic**: it is an amount type, that is used in some automatic amounting procedures. The grid can be completed thanks both to a code field of the compensations (its use is not advised: in accounting there is a print, that shows the compensations regardless of this setting) and to a detail notes field: in this field it is possible to use all the codes, contained in the mask structure, and in particular for compensations closing templates, entered within the generic customers/vendors account, it is necessary to use the codes (8) or (9) in conjunction with the flag ‘Ref. doc. Maturity in payment' in order to record the information about paid/cashed documents in accounting. 



**Deduct. VAT and VAT compensation**: it is a type of amount used in order to valorize the VAT line with the VAT deductible amount and with the right compensation for ‘VAT accounting type' in conjunction with the recording or default register in ‘General ledger account parameters'.

**Parametric Description of Ledger Recording**: Within this description, some standard descriptions can be code and compile by program through different codes and then these descriptions will be reported in the accounting prints and in particular in the account statements and journal. For every movement line it is possible then to code some predefined note as well as the general description: in particular codes (8) and (9) are managed only in this specific line section. 






