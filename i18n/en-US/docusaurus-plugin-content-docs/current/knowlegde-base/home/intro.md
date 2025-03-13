---
title: FAQ Home (FAQ Home)
sidebar_position: 2
---


<details>

  <summary>1. Entering the VAT number in a new contact registry and clicking Propose Data in the ribbon bar, the generic fields are completed. Is there a direct link to the chambers of commerce or other similar service? (Inserendo la Partita IVA in una nuova anagrafica contatto e cliccando Proponi dati nella ribbon bar, vengono completati i campi generici. C'è un collegamento diretto alle camere di commercio o altro servizio simile?)</summary>
  
Fluentis is connected with the VIES databases provided by the European Community, hence information on many Italian and European companies can be retrieved. Therefore, upon entering the VAT number, the known data will be proposed.

</details>

<details>

  <summary>2. Is it possible to color the cells in the search grids as desired if they contain a certain value? (E' possibile colorare a piacimento le celle delle griglie di ricerca se contengono un determinato valore?)</summary>

Yes, this functionality is possible by using **Conditional formatting (Conditional formatting)**. To choose the color to assign to a cell containing a certain value, position yourself on the column header, then right-click > Conditional Formatting > Manage rules. In the popup window, select **New Rule** to open the New Formatting Rule dialog. 
Here, select the type of rule desired from the list. In the **Edit the rule description** section, select **[...]** and in the popup window, enter the first value that the column could take; save. 
Then click **Format** and in the popup window, tab **Fill**, choose the color that the column should take if the value corresponds to the one just entered. Confirm. 
Create a new rule for each value that the column can assume. Save and refresh the form to view the result.

</details>


<details>

  <summary>3. Is it possible to hide a certain type of invoice from a user? (E' possibile nascondere ad un utente una determinata tipologia di fattura?)</summary>
  
Yes, with **Restrictions**. They prevent users from creating, viewing, or modifying certain types of documents. Below is an example of how to prevent a user from using the invoice type with code FVITDIF. Remember that it is also necessary to add the restriction in the user’s Arm profile, in the appropriate grid.           


![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>