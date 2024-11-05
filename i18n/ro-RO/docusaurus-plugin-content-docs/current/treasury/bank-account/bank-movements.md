---
title: Movimenti Bancari
sidebar_position: 1
---


Il modulo conti correnti consente all'operatore di controllare e riconciliare i movimenti bancari in contabilità con l'estratto conto (o lista movimenti) che è possibile scaricare come file telematico da molti siti di Corporate banking. 

Il modulo è presente nell'area tesoreria e preleva i dati dalla contabilità. 


### Importazione movimenti
La presente maschera consente di eseguire l'importazione dei movimenti di conto corrente dal file telematico (standard abi) che si può estrarre dall'home banking.

Per procedere all'importazione è necessario innanzi tutto impostare alla base della maschera (in basso) il sottoconto bancario per il quale si vuole importare il file, poi premendo il pulsante ***Nuovo*** si aprirà la maschera di importazione del file telematico che permette di definire la posizione dove è memorizzato il file da importare. Al buon fine dell'operazione apparirà in griglia una nuova riga di importazione: con un doppio click sulla stessa oppure attraverso il pulsante ***Modifica*** è possibile visualizzare il dettaglio dei dati importati.

I movimenti così importati saranno così utilizzabili nella procedura di riconciliazione C/C oppure, in alternativa, (se il movimento o i movimenti contenuti nel file non sono ancora stati contabilizzati) di procedere alla creazione automatica della scrittura contabile a partire dai dati del file.


### Maschera di ricerca / lista movimenti importati
Nella maschera principale dove vengono ricercati tutti i movimenti importati, è possibile filtrare tramite gli appositi flag solo i movimenti da riconciliare, solo quelli riconciliati o entrambi.
Nella griglia del risultato sono riportati due flag che identificano se il movimento sia già stato ***Riconciliato*** con le scritture contabili inserite in precedenza, oppure se il movimento importato ha generato automaticamente la scrittura contabile (***Conto Riconciliato***).

Seguono ulteriori dati riportati dal dettaglio del file importato dei quali segnaliamo i più importanti quali la data, i saldi, totali e parziali della lista movimenti, il segno (debito / credito) ed il numero dei movimenti contenuti.

### Dettaglio del movimento e procedure di riconciliazione
Entrando nel dettaglio del movimento tramite il doppio click o il tasto ***Modifica***, vengono visualizzati nella griglia del risultato i vari movimenti contenuti nel file con il relativo importo, segno e data valuta banca. Vengono inoltre riportati i dati della registrazione contabile presente o generata in Fluentis corrispondente. Al primo posto il flag che identifica se il movimento di dettaglio sia già stato riconciliato o non ancora.

Per visualizzare il dettaglio della descrizione del movimento contenuta nel file utilizzare il pulsante + presenta alla sinistra del campo Riconciliati (in primissima posizione). 

**PROCEDURE POSSIBILI:**

- ***Riconciliazione automatica***: appare un popup che permette si scegliere tramite flag i criteri automatici dell'incrocio dati (esempio stessa data, stesso importo ecc.) la ricerca e riconciliazione si avvia con il tasto ***Esegui*** e può essere cancellata con il tasto ***Annulla***. In automatico i movimenti saranno aggiornati apponendo il flag di riconciliato mentre quelli non trovati potranno essere riconciliati manualmente o se effettivamente mancanti, procedere alla loro creazione automatica.

- ***Riconciliazione manuale***: Premendo il tasto si apre automaticamente la maschera di [***Visualizzazione conti*** ](/docs/finance-area/ledger-records/records/view-accounts) ed in automatico sono compilati i filtri del sottoconto (corrispondente a quello della nostra banca) e delle date per corrispondere al movimento da riconciliare. A questo punto **occorre premere il bottone Visualizza conti** e ricercare. Una volta individuato il movimento corrispondente, selezionare la riga e premere il bottone ***Riconcilia*** (sempre nella ribbon bar). A questo punto il movimento è riconciliato manualmente, e vengono aggiornati i collegamenti alla registrazione ed i flag.

- ***Annulla riconciliazione***: permette di annullare una procedura di riconciliazione già effettuata cancellando i collegamenti alle registrazioni contabili.

- ***Contabilizza***: premendo il bottone, al fine di creare automaticamente la scrittura contabile, compare un popup dove selezionare la caudale contabile desiderata, procedendo viene aperta automaticamente la maschera della registrazione contabile dove sono preimpostati tutti i dati rilevabili dal file importato e non resta che compilare gli eventuali dati aggiuntivi (quali ad esempio le partite da chiudere nel caso di incassi o pagamenti ecc...) e quindi salvare la registrazione contabile.

:::important[Dettaglio procedura di contabilizzazione: aggancio automatico delle partite aperte]
A seconda della banca che rende disponibili i file telematici, esistono file più o meno dettagliati.

La logica secondo la quale Fluentis riesce a gestire automaticamente, nella scrittura generata (ad esempio di incasso o pagamento), la chiusura della partita aperta eventualmente presente a sistema, è la seguente:

- Se nel file telematico importato è presente il campo *Riferimento Creditore Rimessa* (visibile su Fluentis aprendo il dettaglio delle righe del file con il bottoncino + a sinistra) il codice di riferimento presente in questo campo sarà usato per cercare le partite aperte. Il dato dovrà corrispondere nel campo *Numero di riferimento* presente nella partita (quello adiacente al campo *Modello riferimento pagamento*).
- Se non viene soddisfatta la prima condizione, la procedura leggerà nel file telematico il campo *Creditore conto IBAN* (visibile sempre aprendo il dettaglio delle righe come spiegato al punto precedente) e cercherà se esiste un conto contabile con anagrafica Cliente / Fornitore che riporti lo stesso IBAN. Tale IBAN **deve** essere trovato nel campo IBAN della **griglia Banca d'appoggio** ovvero quella inferiore in anagrafica nel tab pagamenti, destinata esclusivamente a coordinate bancarie di clienti e fornitori, ovvero le "controparti" e mai della nostra azienda. Non deve dunque essere confuso con il medesimo campo presente nella griglia superiore, cioè la griglia principale denominata *Tipi pagamento*.
Se l'IBAN corrisponde, sarà cercata una partita aperta per quel conto che abbia il medesimo importo, se ve ne sono più di una con il medesimo importo verrà presa quella con data scadenza più vecchia.
- Se non viene trovata nessuna partita che corrisponde ai criteri precedenti, ma viene comunque trovato il conto del cliente o fornitore con IBAN corrispondente, Fluentis inserirà soltanto la riga in contabilità senza generare automaticamente il pagamento.
- Se non viene trovato alcun conto cliente / fornitore attraverso il codice IBAN, Fluentis inserirà nella scrittura contabile, solo la riga relativa alla banca e rimarrà da completare la scrittura con la riga cliente / fornitore
:::

:::danger[Attenzione]
La **causale contabile** utilizzata per generare le scritture di incasso e pagamento automaticamente come sopra descritto **deve essere modificata** rispetto ai settaggi consueti.
In particolare dovrà essere modificata la riga, ad esempio quella relativa alla banca che solitamente è associata al tipo importo *Totale documento / registrazione*. Questo tipo importo dovrà essere variato ad esempio ponendo **Importo sottoconto**, come per la riga del cliente / fornitore.

**Se questo non viene fatto la procedura inserirà due volte la riga banca e la scrittura non quadrerà automaticamente**.
:::