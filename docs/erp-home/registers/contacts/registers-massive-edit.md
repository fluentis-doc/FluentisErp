---
title: Modifica massiva contatti
sidebar_position: 3
---

## Introduzione

La procedura (disponibile a partire dalla versione 805) consente di ricercare ed aggiornare massivamente alcuni dei dati inseriti nei clienti/fornitori nella società attiva.

Nella parte superiore sono presenti una serie di filtri, legati ai campi principali che saranno oggetto di manutenzione massiva.

Nella griglia viene restituita la lista dei conti/sottoconti collegati ad anagrafiche clienti fornitori, dalla quale è possibile accedere alla singola anagrafica sfruttando l’hyperlink delle ultime due colonne.

Nella ribbon bar sono presenti due pulsanti: quello di **Ricerca** e quello di **Modifica massiva**, dove questo secondo si attiva solo quando sono state selezionate più righe in griglia.

Dopo aver premuto sul pulsante di **Modifica massiva** si aprirà una maschera che attualmente ha disponibili le seguenti schede:

- Amministrazione
- Informazioni fiscali
- Pagamenti
- Configurazione importazione fatture elettroniche
 
:::note[Nota]
Le schede e i campi effettivamente disponibili dipendono dal tipo di selezione effettuata inizialmente: se sono stati selezionati sia sottoconti Clienti che sottoconti Fornitori, infatti, saranno visualizzati solo gli elementi comuni ad entrambi i tipi di sottoconti; se sono stati selezionati solo dei clienti, si vedranno tutti quelli disponibili in un’anagrafica cliente e allo stesso modo selezionando solo i fornitori si vedranno tutti quelli di loro competenza.
:::

## Come operare le modifiche

Prendendo ad esempio la scheda *Amministrativa*:

- Attivare il **flag** corrispondente al campo o ai campi che si vuole modificare e impostare il valore desiderato. 

- Tutti i campi che non presentano il flag di attivazione non saranno oggetto di modifiche.

- I dati delle **griglie** (nella parte inferiore della maschera) che contengono una lista di elementi, ad esempio i conti di contropartita. Queste griglie presenteranno ogni combinazione i dati individuati nei clienti/fornitori selezionati inizialmente per la modifica massiva stessa.
Ad esempio potremmo avere alcune righe con dei sottoconti contabili di contropartita differenti e nell’ultima colonna leggiamo il valore numerico di quante anagrafiche sono interessate da quel conto nel **Totale righe selezionate**.
Tramite il primo campo possiamo scegliere, riga per riga, se vogliamo intervenire sulle anagrafiche che hanno quel dato: 
-	aggiornando la riga esistente con il nuovo dato impostato in questa form
-	cancellando la riga, 
-	eliminando l’esistente e inserendo i dati impostati.

Nella griglia è presente il flag **Aggiorna tutte le proprietà semplici**. Il suo significato è quello i gestire i campi di tipo proprietà semplice delle anagrafiche selezionate (esempio un campo descrizione) che non consentono per loro natura un raggruppamento nella griglia per rappresentare la situazione da modificare. Questi campi NON verranno aggiornati SE non viene attivato questo flag.

Alla chiusura della maschera sarà richiesto se si vuole salvare (se non lo si è già fatto attraverso l’unico pulsante presente nella form), in caso affermativo verrà ulteriormente restituito un messaggio di conferma dell’operazione, in modo da evitare salvataggi indesiderati.

 <details>
  <summary>NOTA TECNICA: Log Operazione (Click to expand)</summary>

  <p>Per ulteriore sicurezza, ad ogni salvataggio di un aggiornamento massivo, Fluentis2025 memorizza un XML dei dati precedenti e successivi, tracciando l'utente e la data della modifica.</p>

  <p>I dati sono salvati nella tabella <strong>fluentis.SH_ContactCustomerSupplierAccountLogs</strong>.</p>

  <p>Gli XML sono relativi alle proprietà gestite dalla procedura che sono state oggetto di modifica, come ad esempio:</p>

  <pre><code>
&lt;ContactLedgerAccount&gt;
  &lt;IsEDIManaged&gt;False&lt;/IsEDIManaged&gt;
  &lt;IsMaturityManaged&gt;True&lt;/IsMaturityManaged&gt;
  &lt;CustomerSupplierData&gt;
    &lt;DestinationCodeType&gt;1&lt;/DestinationCodeType&gt;
    &lt;IsElectronicInvoiceManaged&gt;False&lt;/IsElectronicInvoiceManaged&gt;
    &lt;IsPublicAdministration&gt;False&lt;/IsPublicAdministration&gt;
    &lt;Id&gt;42154&lt;/Id&gt;
    &lt;CustomerSupplierAccountAdministration&gt;
      &lt;IsAccountHolderManaged&gt;False&lt;/IsAccountHolderManaged&gt;
      &lt;IsContractIdentificationCodeEnabled&gt;False&lt;/IsContractIdentificationCodeEnabled&gt;
      &lt;IsDeliveryInvoiceExcluded&gt;False&lt;/IsDeliveryInvoiceExcluded&gt;
      &lt;IsIntrastat&gt;False&lt;/IsIntrastat&gt;
      &lt;IsNotBlackList&gt;False&lt;/IsNotBlackList&gt;
      &lt;IsNotGroupedByDestination&gt;False&lt;/IsNotGroupedByDestination&gt;
      &lt;IsNotInCustomerSupplierList&gt;False&lt;/IsNotInCustomerSupplierList&gt;
      &lt;IsProfessional&gt;False&lt;/IsProfessional&gt;
      &lt;IsUniqueProjectCodeEnabled&gt;False&lt;/IsUniqueProjectCodeEnabled&gt;
      &lt;Currency&gt;60&lt;/Currency&gt;
      &lt;OffsetCosts&gt;
        &lt;OffsetCost&gt;
          &lt;Account&gt;59115&lt;/Account&gt;
          &lt;Vat&gt;151&lt;/Vat&gt;
          &lt;VatTransactionType&gt;1&lt;/VatTransactionType&gt;
          &lt;Id&gt;951&lt;/Id&gt;
        &lt;/OffsetCost&gt;
      &lt;/OffsetCosts&gt;
    &lt;/CustomerSupplierAccountAdministration&gt;
    &lt;CustomerSupplierAccountPayments&gt;
      &lt;IsCreditNoteGroupedOnPromissory&gt;False&lt;/IsCreditNoteGroupedOnPromissory&gt;
      &lt;IsMaturityGrouped&gt;False&lt;/IsMaturityGrouped&gt;
      &lt;IsMaturityGroupedOnPromissory&gt;False&lt;/IsMaturityGroupedOnPromissory&gt;
      &lt;IsStatisticalCreditCheckEnabled&gt;False&lt;/IsStatisticalCreditCheckEnabled&gt;
      &lt;MaturityValueType&gt;1&lt;/MaturityValueType&gt;
    &lt;/CustomerSupplierAccountPayments&gt;
  &lt;/CustomerSupplierData&gt;
  &lt;Id&gt;77115&lt;/Id&gt;
&lt;/ContactLedgerAccount&gt;
  </code></pre>

  <p>Questa tabella non ha un'interfaccia utente e attualmente non prevede un'opzione di ripristino.</p>

</details>