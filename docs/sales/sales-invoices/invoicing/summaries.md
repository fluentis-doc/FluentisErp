---
title: Riepiloghi
sidebar_position: 5
---

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

## IVA/Scadenze

### Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### Riepilogo scadenze

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

Generalmente le scadenze si ricalcolano se viene modificato il pagamento in testata del documento. Le casistiche nelle quali non vengono aggiornate le scadenze, se modifico il pagamento in testata, sono le seguenti:      
-	Quando la fattura ha il link SDI ed ha stato diverso da NotExamined, Controlled, Canceled, Excluded 
-	Quando c’è almeno una scadenza con il flag ‘Modifica manuale’ attivo 
-	Quando la fattura ha il collegamento con uno o più Effetti oppure è collegata con una riga FSAdvanceInvoiceMaturity
-	Quando c’è lo sconto nella scadenza che però non proviene dal pagamento
-	Quando la somma dell’Importo nella griglia Pagamenti è maggiore dell’Imponibile della fattura
-	Oppure se le fatture sono state modificate fuori da Fluentis

In questi casi è necessario cliccare il bottone della barra degli strumenti 'Ricalcola e raggruppa scadenze'.    


## Agenti/Sconti/Spese

### Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### Spese/Sconti

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Altri campi 

**Note finali**: è un campo libero che può essere compilato dall'utente con l'ausilio del 'Help note codificate'.

## Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

- **Sconto totale percentuale**: è possibile inserire un ulteriore sconto finale in percentuale; inserendo questo campo si popola automaticamente anche il successivo.     

- **Sconto totale valore**: è possibile inserire uno sconto finale in valore.      

- **Arrotondamento**: è presente un ulteriore campo per arrotondare in eccesso il documento.     

- **Totale a pagare**: viene infine riportato il totale definitivo ottenuto.     
