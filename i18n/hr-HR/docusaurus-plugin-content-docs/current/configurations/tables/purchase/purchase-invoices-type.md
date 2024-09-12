---
title: Tipo fatture acquisto
sidebar_position: 9
---
 
La tabella si apre tramite il percorso **Tabelle > Acquisti > Tipo fatture acquisto** e viene utilizzata per determinare le proprietà di una fattura di acquisto.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Tipo/Descrizione**: sono campi obbligatori necessari per definire il tipo fattura.

**Numerazione**: determina la numerazione che è associata al tipo fattura. 

**Natura fattura**: indica la natura della fattura:fattura, ricevuta fiscale, ricevuta fiscale riepilogativa, nota accredito da fornitore, nota addebito da fornitore; si tratta di una tabella fissa che non può essere modificata.

**Causale/Descrizione causale**: causale contabile utilizzata per contabilizzare la fattura. Verrà utilizzata questa causale qualora non ci fosse un fatturato acquisti oppure un conto di contropartita di default inserito in anagrafica fornitore;

**Causale analitica/Descrizione causale analitica**: causale analitica utilizzata per contabilizzare la fattura;

**Tran. codice**: serve per indicare il codice di raggruppamento dei documenti per la dichiarazione Intrastat e deve essere compilato nei casi di fatture o documenti di variazione CEE.

**Magazzino/Descrizione **e **Causale magazzino/Descrizione**: sono proposti nell'inserimento delle righe della fattura accompagnatoria, dove possono essere poi variati e determinano il magazzino e la causale con cui verrà caricata la merce al momento del ricevimento.

**Da ordine**: se attivo, la fattura con questo tipo può evadere ordini fornitori;

**Fattura immediata**: se attivo, la fattura con questo tipo è di tipo immediato e dovranno essere compilati, nella fattura, anche i dati per il trasporto;

**Intracomunitaria**: se è settato, si verifica se la Nazione del fornitore è CEE; in caso contrario che il tipo fattura e il fornitore non siano dello stesso tipo si da un messaggio di avviso. Questo flag andrà impostato solo su tipi fattura Intracomunitari;

**In statistica**: se attivo, la fattura con questo tipo viene riportata nelle statistiche quindi sarà visibile nelle stampe “Fatturato” ;

**Controllo fornitore**: serve ad attivare un controllo per il quale, in fase di selezione del soggetto intestatario della fattura, la procedura ci permetterà di selezionare solo conti di tipo fornitore e non di tipo cliente.

**Raggruppamento  partite**: se settato, in fase di contabilizzazione della fattura le partite verranno raggruppate e si utilizzerà quindi la modalità raggruppamento partite;

**Senza sommare quantità**: se settato questo flag consentirà, nel momento in cui si andranno ad evadere queste tipologie di fatture, di riportare le quantità evase del documento di evasione suddivise per riga articolo anche nel caso di articoli dello stesso tipo; altrimenti andrebbe a sommare le quantità;

**Agricola acquisti IVA**: se attivo, in fase di creazione fattura, il sistema controlla se per l'articolo utilizzato è presente un codice dell'IVA agricola. Se non esiste viene preso il codice IVA presente nell'articolo;

**Righe documento raggruppate:** se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo TAB e la conseguente matrice.

**Causale competenza economica**: è legata alla gestione delle fatture da ricevere e, quindi, alla possibilità di rilevare automaticamente i risconti per eventuali righe di costo che avessero un range di date competenza al di fuori dell'esercizio contabile.

**Fatture da ricevere** e **Storno fatture da ricevere**: sono visualizzate solo per retro compatibilità con le versioni precedenti e sono ormai obsolete e non più utilizzate.

**Stampa**: permette di indicare il modello di stampa che verrà utilizzato in fase di stampa della fattura e, mediante il campo **Numero copie**, il numero di copie del documento che sarà proposto di default per la stampa. La stampa delle fatture d'acquisto in realtà non è di esteso utilizzo in quanto la fattura viene in realtà ricevuta dal fornitore e quindi non necessita di essere ulteriormente stampata da Fluentis.


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).