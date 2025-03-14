---
title: Administration FAQ (FAQ Amministrazione)
sidebar_position: 1
---

<details>

  <summary>1. Which electronic invoices are inserted into the folder set in the <b>Electronic Document Configuration</b> table?</summary>
  
There are two conditions to meet in the customer registry. 

The first condition is the <b>Document signature</b> flag, which must be active.                 
The second condition is the <b>Signed electronic invoicing</b> flag, which is a 3-state flag:   

- When it is 1 for the customer, a signature is required, regardless of other configuration options, so the file is always exported to the folder defined in electronic document configuration for signing;           

- When it is 0 for the customer, a signature is not required, regardless of other configuration options, so the file is not exported to the electronic document configuration folder, even if the folder is set;      

- When it is Null as above (which is the default setting), the setting in the ‘electronic document configuration’ applies, meaning if there is a path to create the file, it is always created; otherwise, it is not created.

</details>


<details>

  <summary>2. For weights, during the creation of the electronic invoice, Fluentis tells me that they cannot exceed 9,999. How can I remove this block?</summary>
  
This block is related to the rules of Electronic Invoicing, which does not accept weights above 9,999. To overcome this problem, it is necessary to scale down to a unit of measure if the threshold of 9,999 is exceeded, in order to use a coherent unit of measure and achieve the desired values.

</details>


<details>

  <summary>3. How can the <b>VAT Group</b> flag be added to an already created <b>Declaration of Intent</b>?</summary>
  
It is necessary to perform the following update, inserting the id of the declaration of intent.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[ID of the declaration of intent]'

</details>


<details>

  <summary>4. How can I print a trial balance filtering the movements based on economic competence? For example, when setting the requested period, in the printing of the sub-accounts, the fields "from competence date" and "to competence date" do not consider economic competence, but it seems that the competence date is read, which in accounting records is placed next to the registration date.</summary>

I confirm that in the filters, when writing from competence date to competence date, it refers to that of competence (so to speak "accounting") of the header. Normally they coincide, but it can be used (though rarely) to record, for example, adjustment entries as of the balance approval date that refer to 12/31 where at that date maybe the period is already blocked for the final printing of the journal and would not accept the registration date. Regarding the economic competence date, the trial balance printing and more generally the system is not designed to operate that way. The most correct procedure is to calculate an end-of-period (interim closures) closure and launch the related adjustment integration entries. Alternatively, I recommend using the account visualization form where you can add from the object navigator the properties From AccrualDate ToAccrualDate that are the economic competence dates (From To) and use the filter placed on the first row of the detail grid. Alternatively, a customization of the report and of the launch form may be necessary by adding filters and headings, etc.

</details>

<details>

  <summary>5. Why, when comparing an interim closure calculated from 1/1 to 12/31 with the results of the administrative module, do I find entries in controlling that are not calculated in administration?</summary>

The controlling module reasons in a more flexible manner, in some situations, compared to the administrative module. In fact, it is able to adjust any cost revenue (with a compatible account type) even for shares of economic competence in the past. For example, if the cost recorded in year X has partial (or total) competence in year X-1, processing the closure of year X will still result in an adjustment (for example, an active entry). Special attention should be paid to the **management of adjustments made in the administrative module**. **It is recommended to execute the calculation and accounting of adjustments and the closure and reopening of accounts with reopening adjustments through automatic procedures, avoiding manual entries**. The automatic procedure imposes, in fact, the reopening entries' date of the adjustments to be the same as the original entry being adjusted and the economic competence of such entry to be the year X-1. This way, it avoids that when processing the period closures of year X, the software calculates additional adjustments as the correct competence result for the balance of year X (or interim period of year X) is already present due to the correct reopening of the previous adjustment.  

</details>

<details>

  <summary>6. Why in the adjustment management screen (accruals and deferrals), even though I am sure that I have entered suitable accounting movements, does it not calculate anything?</summary>

After ensuring that you have effectively entered accounting movements with economic competence dates straddling the accounting exercise and have used cost accounts having the type "to be adjusted" (db Fast Start) or having the Service flag in the *account types* table, if I still do not see any proposed accruals or deferrals, I might have inadvertently activated the *Monthly closure* flag in the general accounting parameters. This flag activates logics for non-Italian foreign localizations.

</details>

<details>

  <summary>7. I have associated a withholding tax type with a customer to generate the electronic invoice complete with the necessary tags, now I want to account for the invoice but I see that the accounting entry is not correct and does not include the withholding tax, why?</summary>

Inside the *Withholding Types* table, open the type associated with the relevant customer and check that the *Party Types* field is set to *Net Parties*.

</details>

<details>

  <summary>8. Fluentis always proposes the last currency used with the selected reason in a new accounting registration, ignoring the default currency of the customer or supplier. Why?</summary>

Check the setting of the general parameter in the PARAM_Parameter table code CA-RegCont-General_PurposeCurrencyByTemplate. If the parameter is set to 1, the last currency used with the reason will be proposed; if set to 0, no currency will be proposed following the basic logic of the company's currency and then reading the customer's or supplier's currency.

</details>

<details>

  <summary>9. I need to create multiple numbering for sales invoices. It is not clear if I need to create as many sales VAT registers for as many numberings or if a single sales register can have multiple numberings.</summary>

The relationship present in the sales accounting cycle is Invoice Type > Numbering > Associated accounting reason > VAT register associated with the reason. In a standard environment, it is noted that there can be multiple types, but if combined with the same reason, which therefore has the same VAT section, the numbering is the same (shared, so FT nr 1 for type A and then for type B will be nr 2). In the case of different invoice types with competing numberings, it is advisable to differentiate the VAT sections and therefore associate them with different reasons; otherwise, VAT sequencing will conflict. This is because normally in the reasons there is an option checked that proposes the VAT protocol equal to the document number (so as not to have to be careful to account for invoices in the order of number). Conversely, it is necessary to deactivate this option.

</details>