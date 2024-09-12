---
title: Acquisti KB
sidebar_position: 1
---

<details>

  <summary>1. Come mai il campo <b>Descrizione</b> dell'articolo fornitore è obbligatorio mentre per il cliente non lo è?</summary>
  
Il cliente ha la necessità di sapere qual è il suo codice ma la descrizione non è importante, in quanto viene utilizzato il codice nello stampato. Invece, per il fornitore la descrizione potrebbe essere molto più tecnica e necessaria, essendo i dati importati, solitamente.

</details>


<details>

  <summary>2. A cosa serve il <b>Tipo scaglione</b> nelle righe articolo del listino? </summary>
  
Il tipo scaglione inserito nella riga articolo del listino viene proposto in automatico nei documenti, altrimenti sarà l'utente a scegliere manualmente il tipo di scaglione da applicare alla riga. Ricordiamo che per uno stesso articolo di listino è possibile inserire diversi scaglioni di sconto.

</details>


<details>

  <summary>3. Esiste un controllo che permetta di evitare un doppio carico di magazzino da ddt e da fattura? </summary>
  
Sì, se una fattura è collegata ad un ddt caricato o scaricato, la fattura non si potrà caricare/scaricare, a meno che nel tipo fattura non ci sia il flag “Scollega” attivo: in questo caso sarà possibile movimentare sia il ddt che la fattura.

</details>


<details>

  <summary>4. Come faccio a conservare lo storico dei prezzi precedenti di un listino aggiornato? </summary>
  
E’ necessario in questo caso effettuare una duplica del documento.

</details>


<details>

  <summary>5. Quali sono le condizioni per utilizzare la <b>Modifica massiva </b> nei Riepiloghi di una fattura di acquisto? </summary>
  
Le condizioni sono:       
 1. Il prezzo non deve essere Ivato;     
 2. Gli articoli non devono avere sconti;
 3. Gli articoli devono avere una quantità effettiva.

</details>


<details>

  <summary>6. Come posso impedire la modifica della quantità articoli in documenti già caricati a magazzino? </summary>
  
E' necessario aprire i Parametri iniziali di magazzino corrispondenti all'anno in corso e togliere il flag **Modifica quantità** dalla sezione *Modifica reg. di magazzino da documenti*. Questo impedirà la modifica della quantità di riga nei documenti già movimentati a magazzino.

</details>


<details>

  <summary>7. La fattura risulta Caricata anche se non ho effettuato nessun movimento di magazzino, inoltre il flag Caricata è bloccato e non si può togliere. </summary>
  
Nel caso di fattura creata da documento di trasporto già caricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag Caricata anche nella fattura.          

</details>