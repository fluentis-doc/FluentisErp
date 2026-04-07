---
title: Analisi disponibilità
sidebar_position: 6
---

:::important A cosa serve
L'analisi disponibilità di Fluentis è uno strumento potente e versatile che consente agli utenti di monitorare e gestire in tempo reale le disponibilità degli articoli all'interno del magazzino. Attraverso un’interfaccia intuitiva, l'analisi è in grado di elaborare rapidamente i dati relativi a un articolo specifico, richiedendo semplicemente l'inserimento del codice articolo. Inoltre, l'analisi si estende anche ai componenti della distinta base, offrendo una visione completa delle disponibilità.

Nel pannello principale dell'analisi, vengono presentate informazioni dettagliate sulla disponibilità dell'articolo padre e dei suoi componenti, inclusi i dati sulle giacenze, eventuali giacenze non disponibili, e le quantità in ritardo. È possibile visualizzare anche i dettagli dei documenti che impegnano o rendono disponibili quantità all'interno del sistema, permettendo un'analisi approfondita delle operazioni in corso.

Grazie a questa funzionalità, gli utenti possono prendere decisioni informate riguardo agli approvvigionamenti e alla gestione delle scorte, riducendo il rischio di mancanze e ottimizzando l'efficienza operativa. L'analisi disponibilità riveste un ruolo cruciale nel garantire che le aziende possano rispondere efficacemente alle richieste del mercato e mantenere livelli ottimali di servizio.
:::

La finestra per la stampa dell'analisi disponibilità si apre tramite il percorso **Home > Articoli > Analisi disponibilità**, ed è composta da tre sezioni: l'area di filtro, la griglia di risultato per magazzino, la griglia di dettaglio.

### Area di filtro

Attraverso i filtri per **Articolo**, si può andare a definire per quale articolo o per quale serie di articoli si ha necessità di verificare la disponibilità prodotto a magazzino.

**Quantità cumulativa**

Questo flag serve per decidere se si vuole vedere la quantità disponibile per quell'articolo cumulativa, oppure se si vuole vedere la disponibilità per ogni singolo documento; sempre in questa sezione si può decidere se si vuole che venga presa in considerazione anche la giacenza che non è ancora disponibile nel periodo che si sta prendendo in esame oppure se visualizzare anche la giacenza che sarà disponibile a partire dalla data in cui si sta effettuando la ricerca se questa non è in ritardo.

**Considera le disponibilità provenienti da**

In questa sezione si può decidere di considerare le disponibilità provenienti da tutte o alcune delle categorie proposte quali: conto lavoro, produzione pianificata, acquisti, produzione rilasciata, vendite e magazzino.

**Periodo di verifica**

In questa sezione si può indicare il periodo per il quale si vuole verificare la disponibilità, che può essere: **Mensile** (in questo caso si indica il numero dei mesi che si vuole prendere in esame), **Settimanale**, **Giornaliero** oppure si può indicare una data precisa in cui effettuare la verifica.

**Visualizza righe senza disponibilità**

- *Visualizza righe senza disponibilità*: se attivo, questo flag indica che si vogliono visualizzare anche le righe senza nessun valore in ognuno dei campi della disponibilità in quel momento; se invece l'articolo ha carichi e scarichi con  somma pari a zero, questo viene visualizzato anche senza flag; 

- *Solo in ritardo*: quindi le righe la cui quantità alla data presa in esame dovrebbe essere già prodotta, ma a causa di ritardi produttivi ancora non lo è;

- *Solo con giacenza negativa*: quindi quantità che devono essere prodotte, che sono già pianificate ma per le quali la giacenza non basta a coprirne la produzione (probabilmente a sistema si troverà inserito un ordine fornitore a copertura della quantità mancante);

- *Riepilogativa*: la riepilogativa di queste due opzioni sopra citate;

- *Dettaglio distinta base*: decidendo di considerare il dettaglio distinta, si decide di vedere la disponibilità di tutti i singoli componenti della distinta base dell'articolo oggetto della ricerca (vengono visualizzati anche i componenti con disponibilità uguale a zero); in questo caso, nella visualizzazione dell'analisi disponibilità, vengono aggiunte le colonne *livello*, *priorità* (si riferisce alla priorità indicata in distinta base per quel componente), *codice e variante articolo padre* relative appunto all'articolo padre. Inoltre, la lista degli articoli sarà ordinata per *livello + codice padre + variante padre + Priorità + codice articolo + variante articolo*. 

**Punti vendita**

Nel caso del retail si può decidere di visualizzare la disponibilità filtrando per punto vendita.

**Per i documenti privi di date necessarie**

In questo caso si può scegliere se non considerare gli articoli privi di una data di ricevimento merce o privi di una data merce pronta, oppure se considerali lo stesso attribuendogli una data che viene stabilita al momento della ricerca e che si va ad indicare nel campo apposito;


**Disponibilità magazzini**

In questa sezione si possono scegliere quali magazzini considerare per verificare la giacenza.

Dopo aver impostato i vari filtri e flag, si andrà a cliccare sul pulsante **Ricerca** collocato nella ribbon Bar.

### Disponibilità prodotto

Nelle griglie di risultato per magazzino si vedranno le varie righe di disponibilità in base ai documenti oppure la riga cumulativa in base ai magazzini. Quindi si potranno vedere le disponibilità generali in base agli impegni di tutti i magazzini (Totale) oppure le disponibilità per singolo magazzino (una scheda per ogni magazzino su cui è attiva l'analisi).

Le colonne visualizzate in questa griglia sono:

- *Classe*, *Codice articolo*, *Descrizione articolo*, *Codice variante* e *U.M.*: dati anagrafici dell'articolo;

- *Data*: Data a cui fanno riferimento i dati visualizzati in riga; 

- *Disponibilità*: Disponibilità calcolata alla data; 

- *Giacenza Operativa*: Giacenza totale dell'articolo nei magazzini selezionati eslusi i lotti chiusi e/o non disponibili; 

- *Giacenza Operativa Disponibile*: *Giacenza Operativa* meno la *Giacenza Operativa Non Disponibile* (vedi colonna successiva); 

- *Giacenza Operativa Non Disponibile*: E' definita non disponibile la giacenza operativa che rientra in uno dei seguenti casi:
  - è collocata in una ubicazione bloccata,
  - è stata caricata con un movimento il cui flag "available stock" è spento (carico udc di riservazione),
  - è riferita a un lotto con stato contrassegnato come non disponibile,
  - è relativa a un movimento di fase standard (intermedio di produzione);

- *In ritardo*: rappresenta la somma algebrica di tutti i documenti in ritardo (con data consegna antecedente ad oggi) presenti nella disponibilità, quindi è dato dalla somma dei valori nella colonna domanda meno la somma dei valori della colonna offerta ma solo per i documenti in ritardo.

- *Ordini fornitori*: Disponibilità da ordini fornitori non forzatamente evasi e con residuo da consegnare; 

- *DDT di acquisto*: Disponibilità da DDT di acquisto non caricati; 

- *Fatture di acquisto*: Disponibilità da Fatture di acquisto immediate non caricate; 

- *Ricevimento Merci*: Disponibilità da documenti di Ricevimento Merci; 

- *Richieste di acquisto*: Disponibilità da documenti RDA nel magazzino dei parametri di produzione dei materiali; 

- *Carico da Conto Lavoro*: Disponibilità da Ordini di Conto Lavoro non forzatamente evasi e con residuo da consegnare; 

- *Carico da Ordini Pianificati*: Disponibilità da Ordini Pianificati; 

- *Carico da Ordini di Produzione*: Disponibilità da Ordini di Produzione non forzatamente evasi e con residuo da produrre; 

- *Ordini Clienti*: Disponibilità da documenti Ordini Clienti non forzatamente evasi e con residuo da spedire; 

- *DDT*: Disponibilità da DDT di Vendita non scaricati; 

- *Fatture di Vendita*: Disponibilità da Fatture di Vendita immediate non scaricate; 

- *Picking*: Disponibilità da documenti di Picking non forzatamente evasi e con residuo da prelevare; 

- *Scarico da Conto Lavoro*: Disponibilità da documenti di bolla di conto lavoro non forzatamente evasi e con residuo da spedire; 

- *Scarico da Ordini Pianificati*: Disponibilità derivante da fabbisogni di Ordini Pianificati non evasi; 

- *Scarico da Ordini di Produzione*: Disponibilità derivante da fabbisogni di Ordini di Produzione non evasi; 

- *Commesse di produzione*: Disponibilità da Commesse di produzione non ancora schedulate; 

- *Carico da ordine Ddmrp*: Disponibilità da ordini Ddmrp; 

- *Prelievo da ordine Ddmrp*: Disponibilità derivante da fabbisogni di Ordini Ddmrp; 


### Dettagli

Nella griglia di dettaglio si vedranno invece, cliccando sulla riga d'interesse nella griglia di magazzino, tutti i documenti collegati a quella singola riga. Quindi l'ordine cliente a cui fa riferimento, l'ordine di produzione e la commessa di riferimento ed eventuali documenti di vendita se presenti (come DDT, fatture).

Tramite un doppio click del tasto sx del mouse sulla riga seleziona è possibile aprire il relativo documento.     

:::note Nota
La disponibilità dell'articolo da produrre è data dalle fasi con i flag **produttiva** e **movimentabile** attivi presenti nel [Ciclo di lavoro](/docs/erp-home/registers/production/routes/new-route).
Tranne l'ultima di tali fasi che versa l'articolo prodotto tutte le altre movimentano i semilavorati intermedi dell'articolo da produrre, ovvero la giacenza per fase standard. 
:::

:::important Documenti in Analisi Disponibilità
In generale, un documento per essere incluso nell'analisi deve: 
- avere una data di disponibilità all'interno del periodo di analisi, 
- avere un tipo documento con il flag **Controlla disponibilità** attivo, 
- essere stampato, autorizzato o confermato a seconda dei casi e
- deve insistere su un magazzino incluso nell'analisi.

Nel caso della domanda dipendente e delle RDA che non hanno un proprio magazzino viene considerato il magazzino delle materie prime nei parametri MRP dell'articolo o, se non valorizzato, l'analogo magazzino nei parametri generali di produzione.
:::

Per quanto riguarda la descrizione delle funzionalità comuni a tutti le form, presenti nella ribbon bar, si rimanda all'articolo relativo ai [Pulsanti Comuni](/docs/guide/common/common-buttons), in particolare per le funzionalità delle stampe si rimanda anche all'articolo [Anteprima e Stampa](/docs/guide/common/operations-with-data/reports).


*Pulsante specifico*:
> **Espandi/riduci griglia articoli**: pulsante che permette di espandere o ridurre le griglie di risultato. 

:::note Creazione profili
In questa form si possono fare profili solo sul filtro e sul tab totale.
Nei tab dei magazzini non si possono fare profili in quanto sono costruiti e distrutti in maniera dinamica.
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
