---
title: Stampe
sidebar_position: 5
---

Sono disponibili diverse **Stampe** standard. Per visualizzare un'anteprima di ciascuna stampa, serve impostare i filtri desiderati e premere il pulsante *Anteprima* sulla barra degli strumenti. Questa operazione mostrerà la stampa a video senza modificare lo stato del documento. Se necessario procedere con la stampa cartacea o salvarla su file, serve invece cliccare sul pulsante *Stampa*.

## Stampa fatture

Questa stampa serve per stampare massivamente le fatture di vendita già inserite a sistema, secondo i filtri specificati nella form iniziale. La prima scelta che viene richiesta è quella tra la stampa temporanea e quella definitiva: la differenza tra le due tipologie è che quella temporanea non ha alcun effetto sullo stato della fattura, mentre la stampa cartacea o digitale effettuata in definitiva porta il documento allo stato *Stampato*. I primi filtri che ci vengono mostrati sono quelli relativi alle informazioni di testata dei documenti, quali il tipo fattura, il numero documento ed il cliente. Nella groupbox *Ricerca avanzata* si possono spuntare gli stati della fattura su cui effettuare il filtro ed il progetto indicato nella testata del documento.
Nella groupbox *Articolo* è invece possibile filtrare, oltre che sul codice dell’articolo, anche su altre informazioni relative alle righe del corpo del documento, quali il barcode, la descrizione articolo o se sia presente un progetto collegato alla riga articolo.       
Vengono messi a disposizione due layout diversi per questa stampa, selezionabili dalla combo box della barra degli strumenti. Il primo si chiama *fattura accompagnatoria* e prevede l'inserimento anche dei dati relativi al trasporto insieme ai Dettagli della fattura; il secondo si chiama *fattura di vendita* e non prevede l'inserimento dei dati sul trasporto, quindi è consigliato per le fatture differite.     
Con questa stampa, ogni fattura viene impaginata separatamente, ognuna con le seguenti sezioni:
- Intestazione con Logo e informazioni aziendali
- Informazioni sulla fattura (tipologia, numero, data, ecc.)
- Informazioni sul cliente (partita iva, agente, ecc.)
- Dettagli della fattura (codice articolo, quantità, prezzo, ecc.)
- Riepilogo del DDT (totale merce, spese, totale imposta, ecc.)        
In questa stampa vengono stampate, solo per le fatture EXTRA UE, le Nomenclature degli Articoli sotto il Codice articolo; inoltre, nella colonna della descrizione articolo viene riportato uno specchietto con il Riepilogo degli importi per nomenclatura.

## Bilancino di fatturazione

La stampa bilancino di fatturazione fornisce un riepilogo dettagliato del fatturato aziendale, organizzando le fatture di vendita in modo da facilitare l'analisi e la gestione contabile.      
Grazie ai filtri disponibili, è possibile personalizzare la stampa per includere solo le fatture che soddisfano criteri specifici, come quelle emesse a partire da una certa data, quelle relative a determinati articoli, ecc.     
Questa stampa è suddivisa in diverse sezioni per una visione approfondita degli dati, sotto diversi aspetti.        
Evidenziando dare, avere e totale nelle varie sezioni, consente di avere una visione chiara delle entrate e delle uscite legate alle vendite.            
Le principali sezioni sono:
- Clienti: Mostra il fatturato suddiviso per gruppi di clienti. Sotto ogni gruppo, vengono elencati i clienti con i relativi dare, avere e totale. Alla fine della sezione è indicato il totale per il gruppo.
- Conti di Ricavo: Riporta le fatture suddivise per fatturato vendite. Solo le fatture con fatturato vendite specificato vengono incluse. Alla fine della sezione, è presente il totale per il fatturato vendite.
- Pagamenti: Dettaglia il fatturato suddiviso per tipologia di pagamento (ad es. contante, bonifico, carta di credito). Ogni tipo di pagamento ha il proprio riepilogo di dare, avere e totale, con il totale della sezione riportato alla fine.
- Agenti: Fornisce, per ciascun agente, il netto merce e la provvigione maturata. Questa sezione permette di valutare le performance degli agenti e il loro impatto sul fatturato.
- Spese: Riporta il dare, l'avere e il totale delle spese accessorie, fornendo una visione delle spese associate alle vendite.          
      
Nella parte finale è presente un Riepilogo per codice iva, dove per ogni gruppo iva viene riportata la descrizione, il totale imponibile e l'iva.      

## Lista fatture

Con questa stampa è possibile stampare un elenco delle fatture inserite a sistema.
I filtri presentati sono i medesimi delle stampe precedenti, ai quali si aggiunge la possibilità di selezionare un ordinamento delle fatture mostrate a scelta tra cliente, numero fattura e tipologia. C’è inoltre la possibilità di selezionare due diverse tipologie di stampa: la stampa *Sintetica* mostra un elenco delle testate delle fatture, con l’indicazione degli importi totali e la suddivisione per le scandenze; la stampa *Completa* mostra invece il dettaglio delle singole righe delle fatture, con indicazioni relative anche alle quantità ed al valore delle stesse.

## Fatturato

Il report analizza il fatturato vendite prodotto da tutti i [Tipi fattura](/docs/configurations/tables/sales/invoices-type) con il flag *In statistica* attivo, mostrando il valore del fatturato e la percentuale di incidenza sul totale di ogni singola riga articolo stampata.      
Nella form iniziale vengono mostrati alcuni filtri relativi alla testata dei documenti da estrarre, analoghi a quelli dei report già analizzati, ma ci sono alcune possibilità proprie di questo report.
Nel campo *Anni per il confronto* è possibile indicare gli esercizi per i quali si desidera effettuare un confronto.  Nella groupbox *Opzioni* sono presenti alcuni flag con i quali è possibile mostrare alcuni dati e includere o escludere alcune tipologie di righe articolo nel calcolo: spuntando la voce *Quantità* verranno mostrate, oltre al valore, anche le quantità delle singole righe; *Solo articoli codificati* farà in modo che la stampa prenda in considerazione solo le righe di tipo *Articolo codificato*; *Anche articoli spese* e *Anche articoli omaggio* faranno rientrare nei conteggi anche le righe di tipo spesa e/o omaggio. La combo box *Modalità ordinamento* dà la possibilità di scegliere l’ordinamento con cui verranno mostrati i dati tra: la descrizione del cliente, il codice cliente o l’importo del fatturato. Infine nella griglia *Raggruppa* è possibile impostare i raggruppamenti, a scalare, con cui dovrà essere mostrata la stampa: per popolare la tabella è sufficiente selezionare il raggruppamento desiderato nella tabella *Proprietà* e trascinarlo nella tabella dei raggruppamenti (nel caso in cui si voglia svuotare la tabella dei raggruppamenti è sufficiente premere sul pulsante della barra degli strumenti *Rimuovi raggruppamenti*).

## Statistiche di vendita

Questa sezione permette di analizzare le vendite focalizzandosi sui margini di profitto calcolati sul costo dei prodotti o servizi venduti.         
La stampa prevede due possibili visualizzazioni dei dati, selezionabili dalla combo box sulla barra degli strumenti. La prima visualizzazione, *Margini sul costo di acquisto da listino*, effettua un confronto tra il valore del venduto ed il relativo costo a livello di listino, con l’indicazione del valore del margine e la relativa percentuale. La seconda visualizzazione, *Margini sul costo di entrata merce da DDT*, mostra invece il confronto tra il valore del venduto ed il costo indicato sui movimenti di ricevimento merci registrati a magazzino.
Nella form iniziale vengono mostrati alcuni filtri relativi alla testata dei documenti da estrarre, analoghi a quelli dei report già analizzati, ma ci sono alcune possibilità proprie di questo report.
Nella groupbox *Opzioni* sono presenti alcuni flag con i quali è possibile mostrare alcuni dati e includere o escludere alcune tipologie di righe articolo nel calcolo: spuntando la voce *Quantità* verranno mostrate, oltre al valore, anche le quantità delle singole righe; *Solo articoli codificati* farà in modo che la stampa prenda in considerazione solo le righe di tipo *Articolo codificato*; *Anche articoli spese* e *Anche articoli omaggio* faranno rientrare nei conteggi anche le righe di tipo spesa e/o omaggio. La combo box *Modalità ordinamento* dà la possibilità di scegliere l’ordinamento con cui verranno mostrati i dati tra: la descrizione del cliente, il codice cliente o l’importo del fatturato. Infine nella griglia *Raggruppa* è possibile impostare i raggruppamenti, a scalare, con cui dovrà essere mostrata la stampa: per popolare la tabella è sufficiente selezionare il raggruppamento desiderato nella tabella *Proprietà* e trascinarlo nella tabella dei raggruppamenti.        

## Stampe Conai

Il documento di dichiarazione CONAI (Consorzio Nazionale Imballaggi) è un modulo che le aziende italiane devono compilare per dichiarare i dati relativi agli imballaggi che immettono sul mercato. Questo documento è fondamentale per calcolare il contributo ambientale CONAI, che è un costo che le imprese devono pagare per sostenere la raccolta differenziata e il riciclo degli imballaggi.        
Grazie ai filtri disponibili, è possibile personalizzare la stampa per includere solo i documenti che soddisfano criteri specifici; è inoltre possibile raggruppare i risultati per Materiale, Cliente o Articolo.         
Il documento comprende diverse sezioni:
- Periodo di riferimento
- Dati anagrafici
- Peso degli imballaggi
- Contributo ambientale
- Esenzione

Più dettagli su questo argomento negli articoli: [Anteprima e stampa](/docs/guide/common/operations-with-data/reports) 