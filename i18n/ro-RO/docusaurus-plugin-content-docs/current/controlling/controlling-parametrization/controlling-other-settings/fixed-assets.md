---
title: Anagrafiche Cespiti
sidebar_position: 7
---

Per prima cosa dobbiamo definire se ci è sufficiente applicare le logiche contabili, o se il nostro controllo di gestione deve svincolarsi da queste per applicare criteri più o meno differenti.

Nel primo caso andremo ad aprire i ***Parametri del modulo cespiti*** per attivare il flag *Abilitazione centro contabilità*. Con questa opzione, all’interno delle categorie cespiti avremo visibilità della griglia dei default dei *Centri di costo* da utilizzare, così come in testata del cespite avremo la griglia che valorizza sul singolo cespite i *Centri di costo*: in entrambe le griglie, sostanzialmente, posso indicare la lista dei centri da valorizzare con la relativa percentuale. Quando andremo a creare i nostri consuntivi contabili attraverso la ***Chiusura infrannuale***, entreremo nella *Ripresa ammortamento cespiti*, selezioneremo la nostra chiusura e ***FluentisERP*** proporrà il calcolo degli ammortamenti sul numero dei giorni di competenza della chiusura stessa, applicando le percentuali di categoria per valorizzarle sui centri con questa priorità: per primo i centri inseriti in testata del cespite, per poi andare a livello di categoria cespite e infine quelli del conto di costo nel piano dei conti.

Se invece siamo in una società con il *Controlling* attivo e vogliamo svincolarci dalle logiche contabili, non imposteremo il flag *Abilitazione centro contabilità* e a questo punto spariranno i centri nelle categorie e in testata cespite, e diventerà obbligatoria la scheda delle ***Impostazioni per il controlling*** per poter salvare un cespite.

Se entriamo in un'anagrafica cespiti e andiamo alla scheda Ammortamento per controlling, abbiamo a disposizione i seguenti campi:

- la ***CATEGORIE CESPITI PER IL CONTROLLING***, campo obbligatorio, che valorizzerà con i suoi default i campi seguenti comuni

- l’eventuale ***VALORE DI RIACQUISTO*** da valorizzare se la base di calcolo lo prevede

- la ***QUANTITA' TOTALE*** che il cespite può gestire nella sua vita utile 

- la relativa ***UNITA' DI MISURA***

:::tip Nota
Il calcolo a quantità, in sostanza, prenderà la base di calcolo dell’ammortamento, lo suddividerà per la quantità totale in modo da ottenere un ammortamento unitario e poi, leggendo le quantità prodotte nel singolo periodo dal cespite (valori che ci arriveranno tipicamente dalla ***Ripresa dati da produzione***), si otterrà il valore dell’ammortamento del periodo.
:::

- la ***BASE DI CALCOLO***, ripresa dalla categoria di appartenenza cui si rimanda per le spiegazioni del caso, può essere modificata nel singolo cespite

- il ***TIPO DI CALCOLO***, ripreso dalla categoria di appartenenza cui si rimanda per le spiegazioni del caso, può essere modificata nel singolo cespite

- il campo della ***PERCENTUALE PER IL CONTROLLING*** da valorizzare quando il tipo calcolo è legato a logiche percentuali, viene proposta dalla categoria di appartenenza ma può essere modificata

- il flag ***USA ATTUALIZZAZIONE PERCENTUALE***

- il flag ***RICREARE I VALORI DI CONTROLLO***

Gli ultimi due flag riprendono quelli che sono nella categoria di appartenenza (cui si rimanda per le spiegazioni del caso), ma come i precedenti campi l’impostazione della categoria serve solo per proporre il relativo default del singolo cespite, perché poi ogni cespite può potenzialmente differenziarsi dall’impostazione della categoria.

Nella griglia in basso, infine, andremo a definire quali sono i ***CENTRI DI COSTO*** ai quali attribuire l’ammortamento del cespite, o potenzialmente anche il ***PROGETTO*** sul quale scaricarlo come ammortamento diretto.

I campi ***PERIODO*** e ***ANNO*** si abiliteranno, invece, solo nel caso in cui sia stato impostato l’ammortamento totale nell’anno e serve, appunto, per definire in che anno spesarlo completamente o in che specifico periodo dell’anno.

:::tip Nota
Nel modulo cespiti abbiamo a disposizione la form di *Verifica dati per il controlling*: questa maschera, molto simile alla ricerca cespiti normale, consente di ricercare i cespiti che non hanno collegamenti validi ai centri di costo nella scheda degli ammortamenti per il *Controlling*. Se apriamo il primo della lista, ad esempio, possiamo vedere che ha percentuale 0 e quindi non avrà nessun ammortamento risultante; l’errore potrebbe altrimenti essere che non c’è nessun centro di costo inserito, oppure che il moltiplicatore è 0.
:::
