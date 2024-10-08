---
title: Riclassificazioni
sidebar_position: 4
---

Le riclassificazioni sono sostanzialmente l'applicazione dei dati di una *Chiusura conti infrannuale* (o di un *Consolidato*) ad un *Modello di riclassificazione*.

Nel caso di inserimento di una nuova riclassificazione, all'apertura della maschera è necessario impostare il codice univoco di *5* caratteri alfanumerici, la descrizione della riclassificazione e inserire il modello di riclassificazione: a questo punto avremo la possibilità di richiamare una *Chiusura conti infrannuale* da utilizzare oppure utilizzare il pulsante di creazione di una nuova *Chiusura conti infrannuale*. In questo secondo caso si aprirà la maschera di creazione della chiusura, una volta completata la procedura ***FluentisERP*** assegnerà automaticamente la nuova creazione alla riclassificazione in elaborazione.

:::tip Nota
Questa possibilità è utilizzabile nelle situazioni più semplici, dove non si ritiene necessario applicare le procedure attualmente escluse dalla gestione automatica della chiusura stessa
:::

Nel caso in cui sia stato impostato il flag di ***Consolidato*** sarà possibile richiamare il codice del *Consolidamento* intersocietario da gestire nel riclassificato.

Per riclassificazioni su modelli di contabilità, nella testata del Riclassificato sono presenti, inoltre, un campo di collegamento con le commesse di vendita, uno per i centri di costo e un ultimo per i centri di profitto: una volta impostata uno di questi, il gestionale ricalcolerà tutta la struttura del riclassificato riprendendo i dati dalle registrazioni infrannuali collegate al filtro impostato.

Ultimo campo della testata della riclassificazione è denominato **Chiusura di rif. per calcolo ad incrementi**: si tratta in sostanza del valore iniziale sul quale il programma andrà a calcolare le differenze per valorizzare i dettagli dei sottoconti con tipo saldo *Incrementale* (si veda la documentazione di dettaglio dei tipi di livello sottoconti e commesse).

Al di sotto di questa sezione, sul lato sinistro della maschera sarà riproposta la struttura del *Modello di riclassificazion*e valorizzato dai dati della chiusura/consolidato impostato. Selezionando da questa parte un nodo di tipo differente da *Somma dei figli* o *Espressione*, ***FluentisERP*** mostrerà sul lato di destra due griglie: in quella superiore sarà visualizzata la lista dei saldi della chiusura (o consolidato) coerente con le impostazioni del livello stesso, in quella inferiore la lista dei dati che hanno valorizzato effettivamente il livello. Attraverso i pulsante presenti nella ribbon sarà possibile apportare una modifica direttamente al riclassificato senza modificare il modello di riferimento. È consentito anche l'intervento manuale sui dati presenti nella griglia sottostante, con anche la possibilità di inserire nuove righe manuali.

:::tip Nota
Se un nodo di tipo *Espressione* è stato impostato con valore fisso 0, allora nel riclassificato sarà disponibile sul lato destro un campo per settare manualmente il valore da utilizzare nell'elaborazione corrente
:::

Nella maschera (come anche nella ricerca delle Riclassificazioni) è disponibile una stampa del Riclassificato: in alternativa, è disponibile la stampa ***Valorizzazione riclassificazioni*** che consente di comparare due riclassificazioni già memorizzate a sistema.

