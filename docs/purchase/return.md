---
title: Note di Accredito
sidebar_position: 9
--- 

Dalla versione 607, le Note di Accredito hanno le righe Articolo con la Quantità negativa; nel caso di inserimento Quantità positiva, uscirà un pop up per cambiare il segno della quantità.
I resi fornitore si differenziano dalle altre tipologie di fatture perchè la **Natura fattura** (presente nella tabella [Tipi fatture di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type)) è **Nota accredito da Fornitore** (analogamento, il ddt di reso avrà Natura **Reso**). 

La creazione di un reso fornitore può avvenire manualmente oppure da procedura.

La creazione manuale di un Reso fornitore prevede la creazione di una nuova Fattura di acquisto. Il Tipo fattura deve avere la Natura Nota accredito da fornitore, ed il fornitore deve essere colui a cui viene effettuato il reso. Dall'anagrafica fornitore vengono riportati nel documento i dati di default, quali la Divisa, il Pagamento, il Listino, ecc.      
Gli altri dati, come gli articoli da rendere, possono essere compilati liberamente. Il documento può poi essere salvato e controllato.      

La creazione di un Reso fornitore può avvenire anche da procedura.       
Nella ribbon bar della [Ricerca fatture di acquisto](/docs/purchase/purchase-invoices/search-purchase-invoices) è presente il bottone **Storno fatturazione**(analogamente, nella Ricerca DDT di acquisto è presente il bottone **Storno**). Questo bottone permette di crare un reso collegato alla fattura di acquisto selezionata. Una volta selezionata la fattura da stornare e premuto il bottone, si apre la maschera **Storno documento**, nella quale è necessario flaggare gli articoli da rendere e indicare la [tipologia](/docs/configurations/tables/purchase/purchase-invoices-type) di documento da creare (vengono proposti solo i documenti con Natura Nota accredito da fornitore). Una volta confermata la procedura, verrà creata la fattura di storno, visibile dalla Ricerca fatture. La fattura viene creata con la data odierna e avrà l'importo totale degli articoli da stornare, preso dalla fattura di partenza. 

I Resi fornitore possono essere utilizzati come gli altri documenti, e quindi stampati, contabilizzati, ecc.    
Anche per i resi è possibile utilizzare le diverse **Stampe** previste dal modulo, basterà filtrare per la tipologia di documento prescelto. 