---
title: Finance
sidebar_position: 1
---

**Intraweb or Entratel file creation** (code FS-FI-Intrastat-ItalianFileType): this parameter, previously visible only in the database, allows you to set directly from the interface the type of export layout for Intrastat models, in order to make it compatible respectively with the Intraweb application of the customs agency or with Entratel of the revenue agency (two possible alternative channels for sending the models). The difference, technically, lies particularly in the header track record of the file required for Entratel submission. The parameter is normally already set and can be managed simply in the VALUE column, where, as noted, the flag in FALSE condition (0 - deactivated) = Intraweb, while TRUE (1 - active) = Entratel. In case of manual creation (technical problems or backwards compatibility), set the Type column to Boolean, the start validity date, and the value field. The *Code* field in the master grid is FS-FI-Intrastat-ItalianFileType.

**Use document weight in Intrastat purchases/sales (Utilizza il peso del documento nell'Intrastat acquisti / Vendite)** (code FS-FI-Intrastat-UseDocumentWeightInPurchase and FS-FI-Intrastat-UseDocumentWeightInSale): By enabling (in the Value field) the flag (boolean type parameter) for each of the two parameters, the automatic procedure for creating Intrastat from invoices detects the weights of the items from the ‘NetWeight’ field of the document lines of purchases/sales, instead of the theoretical weights from the item registry as default. The accounting of the sales invoice, if the accounting reason provides for Intrastat management, in turn brings the document weights into accounting: in this way, the acquisition procedure from accounting records will also have the document weight.

These parameters can be combined with an additional parameter (**visible only in the database**) with which Fluentis brings the weights as present in automatic creation into the Bis/Ter section, without rounding row values. The rounding will be managed in the subsequent phase with the grouping button present in the Bis/Ter section.

The query to execute is:

        update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)
        
        --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)
        	
        from fluentis.SH_CompanyParameters
        		
        join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id
        	
        where SHLP_Code like 'IN-IntrastatRoundByOperation'

**Block accounting when the registration date is before the reception date (Blocca la contabilizzazione quando la data di registrazione è precedente alla data di ricezione)** (code FS-FI-Posting-BlockPostingBeforeReceiveDate): by enabling this parameter, the registration of purchase invoices from Sdi files will not be allowed on dates prior to the actual Sdi reception date.

**Allow creation of dunning letters from closed maturities** (code FS-FI-DunningLetters-AllowClosedMaturities): with this parameter, the generation of reminders can also create letters of payment received.