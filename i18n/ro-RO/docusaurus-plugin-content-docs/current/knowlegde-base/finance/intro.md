---
title: Amministrazione KB
sidebar_position: 1
---


<details>

  <summary>1. Quali fatture elettroniche vengono inserite nel folder impostato nella tabella <b>Configurazione documenti elettronici</b>?</summary>
  
Ci sono due condizioni da rispettare nell'anagrafica cliente. 

La prima condizione è il flag <b>Firma del documento</b>, che deve essere attivo.                 
La seconda condizione è il flag <b>Fatturazione elettronica firmata</b>, che è un 3-state flag:   

- Quando è 1 per il cliente si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi si esporta sempre il file nel folder definito in configurazione documenti elettronici per farne la firma;           

- Quando è 0 per il cliente non si prevede la firma, indipendentemente da altre opzioni di configurazione, quindi non si esporta il file nel folder di configurazione documenti elettronici, anche se è impostato il folder;      

- Quando è Null come qui sopra (che è l’impostazione di default) vale l’impostazione nella ‘configurazione documenti elettronici’, cioè se c’è un percorso dove creare il file lo crea sempre, altrimenti non lo crea.

</details>


<details>

  <summary>2. Per i pesi, in fase di creazione fattura elettronica, Fluentis mi dice che non possono essere superiori a 9.999 come faccio a togleire questo blocco? </summary>
  
Questo blocco è legato alle regole della Fatturazione Elettronica, la quale non accetta PESI superiori
Per ovviare a questo problema è necessario scalare di UM se si dovesse superare la soglia dei 9999, in modo tale da utilizzare una UM coerente ed ottenere i valori desiderati.

</details>


<details>

  <summary>3. Come è possibile inserire il flag <b>Gruppo IVA </b> in una <b>Dichiarazione di intento</b> già creata? </summary>
  
E' necessario effettuare il seguente update, inserendo l'id della dichiarazione di intento.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>
