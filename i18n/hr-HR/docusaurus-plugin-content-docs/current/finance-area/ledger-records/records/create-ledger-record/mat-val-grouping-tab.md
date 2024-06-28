---
title: Tab Raggruppamento partite
sidebar_position: 9
---

La gestione dei Raggruppamenti partite permette di creare, in fase di apertura partite oppure in un secondo tempo, dei gruppi di partite (il gruppo è una sorta di contenitore con all'interno, anche visivamente, le partite di dettaglio).

Questi gruppi possono essere poi manipolati aggregando o disaggregando le partite. Quindi in fase di pagamento è possibile assegnare il pagamento stesso in maniera flessibile rispetto ai gruppi ed alle relative partite di dettaglio.

Questo genere di gestione, evidentemente particolare, si addice a chi opera in settori quali la grande distribuzione o il commercio al dettaglio, o comunque a chi gestisca molteplici partite / pagamenti di piccolo importo e alta numerosità e dove il collegamento tra le fatture emesse o ricevute ed i relativi pagamenti sia soggetto ad elevata flessibilità e collegamento meno netto rispetto all'ordinaria operatività. 



Questa funzionalità, una volta inserita, è una gestione incompatibile con la normale gestione a partite e pagamenti: la scelta tra una gestione e l'altra, quindi, va effettuata inizialmente all'atto dell'impostazione delle causali di contabilità generale con ben chiara le caratteristiche di questa gestione.

 

**GESTIONE DELLA CAUSALE CONTABILE E RISULTATO NELLA REGISTRAZIONE**:

Causale di apertura partite (esempio per "Emissione fattura" o "Fattura Fornitore"): attivare i consueti flag per l'apertura partite (ed eventualmente la chiusura e compensazione), aggiungendo il flag Crea Gruppo.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

Nella registrazione contabile di prima nota, con la causale così modificata, in fase di inserimento della registrazione non si noteranno differenze ed il gruppo partite non sarà visibile, ma esso sarà creato con i medesimi riferimenti della partita in esso contenuta: 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Per effettuare modifiche al gruppo accorpando altre partite o de-raggruppando si deve operare all'interno della maschera **[Raggruppamenti partite](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Qui l'utente potrà procedere a creare, per queste partite, uno o più nuovi gruppi partite (che prenderanno numero e data dal numero e data documento della partita che lo crea). La gestione di queste operazioni si effettua utilizzando il menù contestuale che appare premendo il pulsante destro del mouse partita per partita: 

mark: per selezionare più partite/gruppi 

crea nuovo gruppo:  per creare nuovi gruppi; 

de-raggruppa: per sganciare una partita dal gruppo  

abbuoni: per creare abbuoni  e per chiudere un gruppo, 

dettagli: per visualizzare i dettagli della singola partita ; 

suddividi partita: per suddividere la partita inserita in un gruppo . 

La visualizzazione dei gruppi è effettuata per il sottoconto selezionato nella griglia in alto.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)   ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Con drag and drop si può spostare le partite da un gruppo all'altro

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

NOTA:

Nel caso di contabilizzazione automatica di fatture dal modulo acquisti o vendite nelle tabelle **Tipi fatture** (in **[acquisti ](/docs/configurations/tables/purchase/purchase-invoices-type)** e **[vendite](/docs/configurations/tables/sales/invoices-type)**) c'è un flag analogo per quando si contabilizza la fattura automaticamente (Ragg. partite)

Causale di chiusura partite: (esempio la causale "Pagamento in contanti") attivare il flag ‘Raggruppamenti partite' che rende visibile la scheda **Pagamenti gruppi.**

E' obbligatorio indicare il tipo pagamento corrispondente nella combo box adiacente.



 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

 A questo punto l'operatività dell'utente nelle registrazioni di incasso/pagamento è completamente differente da quella di una chiusura partite normale: in questo caso, infatti, l'utente inizierà la registrazione dalla scheda **[Registrazione](/docs/finance-area/ledger-records/records/create-ledger-record/record-tab)**, imputando direttamente un valore al pagamento/incasso (tramite la compilazione delle sezioni della prima nota), sul quale l'applicativo creerà comunque una partita dare/avere che l'utente procederà poi ad assegnare manualmente (se vuole) ad un gruppo dalla scheda ‘Pagamenti gruppi'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

 

Operativamente l'applicativo andrà a creare, su ognuna di queste partite, i relativi pagamenti reciproci (ed è per questo che la lettura di uno scadenziario ‘standard' non sarà più chiaro e si dovrà utilizzare solo i report e le maschere di visualizzazione/gestione dei raggruppamenti per avere una visione chiara dei partitari). Quando il saldo del gruppo, per effetto delle varie partite assegnate, andrà a 0 allora il gruppo avrà passerà automaticamente allo stato ‘chiuso'.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

**NOTA: Per visualizzare i raggruppamenti selezionare con il mouse la riga nella griglia superiore.**

 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Direttamente nella tab **Pagamenti gruppi** è possibile effettuare ulteriori modifiche quali de-raggruppamenti o nuovi raggruppamenti.

 

RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni. La lista delle funzionalità possibili nel tab corrente è di seguito rappresentata:



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la registrazione. |
| Nuova registrazione | Pulsante per creare una nuova registrazione. |
| Parametri di inserimento | Richiama i parametri di inserimento della prima nota. |



| Funzione | Significato |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Pulsante per il collegamento alla gestione documentale. |






