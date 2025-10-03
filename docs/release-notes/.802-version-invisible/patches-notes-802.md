---
title: Patch notes Versione 802
sidebar_position: 1
---

### Patch 801.0001 - 19/10/2025



### Patch 801.0001 - 19/10/2025

> -	FI - Declaration 300 and 394 for RO - vat code 11 and 21 ( TT04041/25) 
> -	FI - liquidazione iva periodica, aggiunto collegamento alle anagrafiche per impostare la società che presenta la comunicazione per conto di un altro contribuente. Modifications in periodic vat calculation form can have an impact on profiles. (#TT04050/25) 
> -	FI - propose department in postingCostCenter (TT04126/25) 
> -	MES - Corretta anomalia nella dichiarazioni di produzione che non inseriva correttamente il valore nella registrazione di magazzino nel caso in cui nel centro di costo fosse specificata una unità di misura. (#TT03519/25) 
> -	PM - procedura di generazione fattura di vendita da progetto, gestito caso in cui non compariva messaggio di blocco nel caso di cliente bloccato nel Lock Manager (TT03721/25) 
> -	PM - risolto caso per cui generando fattura da interventi tramite procedura di valorizzazione, in caso di ritenuta d'acconto veniva riportata solo come riferimento e non calcolata nei totali. (#TT03799/25) 
> -	SCS - Distinta base, intercettato caso in cui, la quantità padre di un componente risulta pari a zero, con conseguente anomalia in fase di Esplosione livello da struttura distinta nell’ordine di conto lavoro (#TT03891/25) 
> -	SD - Corretta anomalia che in alcuni casi non liberava la quantità residua del lotto dopo l’evasione forzata di un Ordine cliente in DDT di Vendita. (#TT03588/25) 
> -	SD - Creazione Fatture da DDT: corretti errori nella valorizzazione dei DDT di trasferimento merce con articoli gestiti a lotti e dei DDT contenenti articoli con lo stesso codice lotto riportato su più righe. (#TT03901/25, #TT04043/25) 
> -	SD - Gestione Acconti: Corretto l’aggiornamento del residuo acconto in caso di storno parziale. Abilitata la chiusura forzata dell’acconto tramite l’attivazione del flag Forzatamente evaso anche su fatture contabilizzate o con documento Sdi generato. (#TT03759/25) 
> -	SD - Nel caso in cui il parametro ‘Codice operatore obbligatorio’ sia attivo in fattura, la procedura ‘Creazione da DDT’ riporta l’operatore inserito nel DDT nel caso di evasione 1-1, mentre nel caso di evasione n-1 la creazione non avviene (#TT04107/25) 
> -	SD - Risolta anomalia nella duplicazione di DDT e Fatture di Vendita che applicava l’aliquota IVA del cliente anche alle righe di tipo Note. (#TT04147/25) 
> -	SD - Corretto problema di visibilità nel campo Descrizione agente per la bolla di vendita. Modifications in SalesDeliveryNote object form can have an impact on profiles. (#TT01258/21) 
> -	SH - Webapi di import FSLedgerAccount, revisione gestione banche d’appoggio e dati fido. (#TT04082/25) 
> -	WM - Anagrafica lotti: Aggiunti i campi “Quantità impegnata”, che consente di visualizzare i documenti e le quantità con cui il lotto risulta impegnato, e “Chiuso forzatamente”, che indica l’evasione forzata della riga con conseguente liberazione dell’impegno del lotto. (#TT03787/25) 
> -	WM - Corretto mancato filtro su componenti scaduti in inserimento massivo componenti distinta base (#TT04070/25) 
> -	WM - Nascosti dati sensibili (costi) nell’expander dell’articolo (#TT02167/25) 
> -	WM -  Corretto calcolo giacenza in griglia anagrafica lotti. (#TT04045/25) 

### Patch 801.0001 - 19/10/2025

> -	CO - Corretta anomalia nella procedura di calcolo costo nel caso di listini con prezzi con UM diversa da quella principale dell’articolo. (#TT03766/25) 
> -	CO - modificato algoritmo di creazione della chiusura da private a virtual. (#TT03923/25) 
> -	CO - revisione ‘Ripresa ammortamento cespiti’ nelle chiusure infrannuali, ottimizzazione (si consiglia di eseguire la procedura con l’opzione ‘singola registrazione’ attiva) (TT03929/25) 
> -	CRM - L’Agente principale viene riportato in testata Offerta anche se il Contatto CRM non ha un’anagrafica contabile associata (#TT02925/25) 
> -	FI - causali automatiche, revisione gestione Sottoconti automatici (#TT03869/25) 
> -	FI - Corretto comportamento del filtro Categoria amministrativa nelle form generazione solleciti e generazione automatica solleciti ( #TT03618/25) 
> -	FI - Declaration 300 and 394 for RO - vat code 11 and 21 ( TT04041/25) 
> -	FI - Fixed assets: new option for depreciation contabilization for F2025 - Ripresa ammortamento cespiti ( TT00384/25) 
> -	FI - revisione import da DocFinance per esclusione blocchi in ricerca solleciti. (#TT03926/25) 
> -	FI - stampa Liquidazioni Agenti - vuota ( TT03928/25) 
> -	Risolto bug esportazioni multiple (#TT03916/25) 
> -	SD - Fatture di vendita: Per le fatture di tipo differito, l’attivazione del flag Stampata a seguito della stampa del documento non richiama più la procedura di scarico automatico. (#TT03689/25) 
> -	SD - I campi CIG e CUP inseriti nella testata dell’Ordine Cliente vengono riportati automaticamente anche nel Progetto generato dall’ordine. Inoltre, durante l’evasione di un progetto in Ordine Cliente, i valori di CIG e CUP presenti nella testata del progetto vengono trasferiti anche sulle righe articolo dell’ordine. (#TT03627/25) 
> -	SD - I DDT valorizzati nella stessa fattura possono essere scaricati anche separatamente. Le fatture generate da DDT sono scaricabili solo se di tipo immediato e con flag Scollega DDT, altrimenti lo scarico va effettuato direttamente dai DDT. Per le fatture immediate, quando tutti i DDT risultano scaricati, l’attivazione del flag Stampata in fattura imposta automaticamente anche il flag Scaricata. (#TT03152/25) 
> -	SH - add FilterName and FilterPath in DashboardDatasource 
> -	SH - fast start, valorizzazione della tabella di dettaglio delle nature transazioni intrastat (#TT03930/25) 
> -	SH - revisione webapi di import dell’oggetto FSLedgerAccount per gestione anagrafica agenti (#TT03911/25) 
> -	Solved bug to edit BizLink Parser Objects 
> -	WM - Corretto bug nella procedura di chiusura di magazzino nel caso di gestione con UDC. Corretto bug nella procedura “Aggiungi / sposta articoli” presente in gestione UDC. (#TT03596/25) 
> -	WM - Corretto filtro magazzino nella chiamata API GetItemsAvailability . (TT03867/25 ) 
> -	WM - In analisi disponibilità migliorata la leggibilità del campo numero documento, dove nel caso in cui si tratti di un ordini di produzione viene visualizzato:  
> -	WM - In conferma picking di articoli gestiti a lotti aggiornata quantità di riga anche alla prima sovraevasione(#TT04004/25) 
> -	WM - Ottimizzata e migliorata la visualizzazione in analisi disponibilità degli ordini di produzione e delle relative dichiarazioni di produzione. (#TT03754/25 - #TT01102/25 - #TT04027/25) 
> -	WM - Ottimizzato e velocizzato il caricamento dei picking nella form di filtro picking. (#TT03764/25) 
> -	WM - Rinominate le labels relative alla giacenza in analisi disponibilità, da: “Giacenza, Giacenza Disponibile, Giacenza Non Disponibile” a “Giacenza Operativa, Giacenza Operativa Disponibile, Giacenza Operativa Non Disponibile”. 
> -	WMS - "numero ordine di produzione - numero lotto" e nel caso di una dichiarazione di produzione viene visualizzato: "numero ordine di produzione - numero lotto - numero dichiarazione di produzione". (#TT04069/25) 
