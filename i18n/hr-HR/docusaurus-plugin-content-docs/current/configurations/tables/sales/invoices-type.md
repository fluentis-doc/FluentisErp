---
title: Tipi fatture di vendita
sidebar_position: 20
---

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi fatture di vendita** ed è utilizzata per determinare le proprietà di una fattura.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Tipo/Descrizione**: tipo fattura e descrizione del tipo fattura. Il codice inserito deve essere univoco

**Numerazione:** in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti fare riferimento all'articolo relativo alle [numerazioni fluentis](/docs/configurations/tables/fluentis-numerations) ;

**Natura fattura**: in questo campo va inserita la natura associata al tipo fattura.Il valore verrà selezionato da un elenco;

**Ordine**: se attivo, la fattura potrà essere creata dall'evasione dell'ordine tramite l'apposita procedura;

**Fattura immediata**: se attivo, significa che la fattura è di tipo immediato e dovranno essere compilati, nella fattura, anche i dati per il trasporto. Se non attivo la fattura sarà di tipo differito e i dati del trasporto saranno recuperati dalla DDT;

**Natura Transazione**: in questo campo va inserito il codice transazione utilizzato per la dichiarazione intrastat. Per approfondimenti fare riferimento alla [Natura transazioni intrastat](/docs/configurations/tables/finance/nature-of-intrastat-transaction); 

**In statistica**: se attivo, la fattura con questo tipo verrà riportata nelle statistiche quindi sarà visibile nelle stampe *Fatturato*;

**Proforma**: se attivo, la fattura è di tipo proforma e non può essere contabilizzata;

**Causale**: in questo campo va inserita la causale contabile utilizzata per la contabilizzazione della fattura. Per approfondimenti fare riferimento alle [causali di contabilità generale](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates);

**Causale analitica**: in questo campo va inserita la causale analitica utilizzata pe la contabilizzazione della fattura in contabilità analitica;

**Note**: campo di testo libero in cui è possibile inserire delle note descrittive del tipo fattura;

**Controllo cliente**: se attivo, questo flag consente al sistema di effettuare un controllo sul tipo anagrafica del conto/sottoconto che si è inserito nel documento per verificare che sia obbligatoriamente un cliente. Se così non fosse il sistema avviserà l'utente riportando un messaggio di errore. Sarebbe *obbligatorio* attivarlo su tutte le tipologie di fattura di vendita;

**Blocca doc. stampato**: se attivo, questo flag non permette di modificare una fattura che risulti essere già con il flag *Stampato* settato in testata;

**Intracomunitaria**: se attivo, il sistema verifica che la nazione del cliente sia una *nazione CEE*. Questo flag andrà *impostato solo su tipi fattura Intracomunitari*. Qualora non ci fosse il link tra cliente e tipo fattura intracomunitaria, il sistema ritornerà un messaggio di avviso;

**Evasione fattura proforma**: se settato, e la fattura è proforma, l'evasione evade l'ordine altrimenti l'ordine rimane non evaso;

**Causale trasporto**: Campo di testo libero in cui va indicata una causale di trasporto da poter stampare in fattura;

**Fido**: se attivo, la fattura con questo tipo rientrerà nel controllo del fido;

**Escludi blocco**: se attivo, il sistema per questo tipo fattura non andrà a considerare il blocco del documento dovuto all'eventuale superamento fido ma permetterà comunque all'utente di poterlo inserire e stampare;

**Magazzino/Descrizione magazzino**: in questi campi di dovrà inserire il magazzino di arrivo della merce contenuta nelle DDT appartenenti a questa tipologia. Questo valore verrà utilizzato come valore di default;

**Causale magazzino/Descrizione causale magazzino**: in questi campi invece si dovrà andare ad indicare la casuale di movimentazione della merce in arrivo contenuta nelle DDT appartenenti a questa tipologia;

**Raggruppamento partite**: se attivo, nella contabilizzazione fatture vengono raggruppate le partite. Per approfondimenti fare riferimento a [raggruppamento partite](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping); 

**Evasione quantità articolo non sommata**: se settato questo flag consentirà, nel momento in cui si andranno ad evadere queste tipologie di fatture, di riportare le quantità evase del documento di evasione suddivise per riga articolo (per esempio nel caso in cui venga divisa la quantità in più righe) senza andare a sommare le quantità;

**Agr. Acq. IVA**: se attivo, in fase di creazione DDT, il sistema andrà a verificare se per l'articolo utilizzato è presente un codice dell'IVA agricola altrimenti verrà utilizzato il codice IVA presente nell'anagrafica dell'articolo;

**Controlla Picking scaricato**: se attivo, quando si crea una fattura da un Picking scaricato, si attiva in automatico il flag scaricato per la DDT. Se non attivo, il flag non viene attivato. 

**Blocca quantità Picking**: se attivo, blocca la quantità e la quantità alternativa nella fattura  creata da lista UDC. Se non attivo non blocca la quantità ma la lascia libera. Si consiglia di attivare sempre questo flag qualora si utilizzi la gestione picking e UDC;

**Calcola provvigioni**: se attivo, le fatture appartenenti a questa tipologia, verranno conteggiate nel il calcolo delle provvigioni agenti;

**Scollega DDT**: se attivo, è possibile scaricare da magazzino anche le fatture differite (Normalmente lo scarico magazzino avviene tramite DDT);

**Gestione EDI**: se attivo, il sistema permette la creazione del file EDI per questo tipo di fatture;

**Non evade Picking**: se attivo, non farà evadere il picking qualora venga generata una fattura;

**Prezzo Ivato**: se attivo, il sistema recupera il prezzo di vendita da listini o dall'anagrafica articolo e lo riporta con l'aggiunta dell'IVA. Se non trova il listino (nel caso per esempio di listino scaduto o listino in valuta non compatibile) recupera i costi o i prezzi dall'anagrafica articolo e li riporta comprensivi di IVA.

I costi e i prezzi in anagrafica sono in EUR, quindi il sistema li andrà anche a convertire nella valuta del cliente.

**Competenza economica**: se attivo, il tipo fattura ha competenza economica e quindi sarà necessario impostare le date del periodo di competenza;

**Causale Competenza Economica**: in questo campo va indicata la causale di competenza economica utilizzata in contabilizzazione delle fatture. Questo valore potrà essere scelto da un elenco. Per approfondimenti fare riferimento alle [Causali di contabilità generale](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Gestione matrici Extra Data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo TAB e la conseguente matrice.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).