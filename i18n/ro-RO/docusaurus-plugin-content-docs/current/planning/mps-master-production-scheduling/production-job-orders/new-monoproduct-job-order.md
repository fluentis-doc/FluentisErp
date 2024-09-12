---
title: Nuova Commessa Monoprodotto
sidebar_position: 4
---

La form si apre tramite il percorso **Pianificazione > Commesse di produzione** cliccando nella form **Commesse di produzione** sull'pulsante **Inserisci commessa**.  

## Pulsanti specifici

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): tramite questo pulsante è possibile aprire la schermata relativa ai parametri MRP dell'articolo.  
> [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permette di aprire la schermata relativa alla distinta base dell'articolo;  
> [Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route): permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.

## Gestione commesse monoprodotto

All'interno di questo tab si vanno ad indicare i dati principali che deve contenere la commessa di produzione.

**Tipo commessa**: viene proposto il tipo predefinito come tipo di default;  
**Numero**: indica il numero progressivo della commessa, che viene proposto in automatico;  
**Anno/Data**: vengono proposti in automatico quelli correnti;  
**Tassativa**: se attivo, indica se questa commessa sia di importanza fondamentale;   
**Tipo approvvigionamento**: generalmente coincide con il tipo di approvvigionamento dell'articolo inserito nella commessa di produzione. Il tipo di approvvigionamento dell'articolo viene indicato all'interno dei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) di quest'ultimo;   
**Priorità**: proposta in automatico, ma modificabile come i campi precedenti;    
**Conto/sottoconto e descrizione del cliente**: indica i riferimenti del cliente;
**Priorità approvvigionamento**: indica la priorità dell'approvvigionamento;     
**Stato commessa**: il sistema in automatico propone come *Non esaminata*, stato che la commessa assume appena creata.   

Gli altri stati che può assumere sono:

- **Schedulata**: la commessa passa in questo stato dopo che ha subito il processo di Schedulazione Generale;  
- **Lanciata**: la commessa passa in questo stato dopo che almeno uno degli ordini pianificati di produzione da essa generati durante la Schedulazione Generale sono stati rilasciati (non devono essere stati rilasciati altri ordini pianificati di tipo acquisto o conto lavoro altrimenti lacommessa passa in stato esecutivo);      
- **Esecutiva**: la commessa passa in questo stato dopo che almeno uno degli ordini di produzione da essa generati è stato rilasciato ed è diventato esecutivo, oppure dopo che almeno uno degli ordini pianificati di acquisto o conto lavoro da essa generati è stato rilasciato;   
- **Evasa**: la commessa passa in questo stato dopo che l'ordine di produzione generato per l'articolo oggetto della commessa è passato in stato *Evaso*;   
- **Storicizzata**: la commessa può essere messa in questo stato manualmente per fare in modo che non esca più quando si effettua una ricerca delle commesse *Evase*;  
- **Annullata**: la commessa può essere messa in questo stato manualmente, anziché eliminarla del tutto, per indicare che la commessa, che inizialmente era stata prevista, non è poi stata portata in produzione.

**Data suggerita**: un campo in cui compare la data suggerita dal sistema nel caso in cui l'utente abbia schedulato la commessa utilizzando il parametro *Controlla documenti in ritardo con ATP* e avendo impostato, sempre nei parametri di *Schedulazione generale*, una *Data Inizio MS* (Master Scheduling). La data suggerita è quella che poi l'utente ha la facoltà di decidere che diventi la data di prevista fine della commessa;

**Data lavorazione prevista Inizio/Fine**: in questi campi compaiono le date di previsto inizio/fine della *Commessa di produzione*. Fino a quando la Commessa di Produzione resta in stato *Non esaminata*, queste date sono identiche tra loro ed uguali alla data di merce pronta della riga dell'Ordine Cliente da cui la commessa è stata generata, oppure uguali alla data di fine della Previsione di Vendita da cui la commessa è stata generata. Dopo che la Commessa di Produzione è stata schedulata, la data di previsto inizio della commessa coincide con la data di previsto inizio del primo ordine pianificato che viene generato dalla schedulazione della commessa. Infine, si ricorda che in caso di inserimento manuale della Commessa di Produzione, l'utente è tenuto ad inserire questo dato manualmente, pena l'impossibilità di salvare la commessa stessa;

**Data Lavorazione effettiva Inizio/Fine**: in questi campi compaiono le date di Inizio/Fine della lavorazione effettiva, cioè rispettivamente la data della prima segnalazione di produzione di un ordine di produzione generato dalla commessa e la data dell'ultima segnalazione di produzione che ha causato la chiusura definitiva dell'ordine di produzione il cui articolo è lo stesso della Commessa di Produzione. Ovviamente la data di effettiva fine è presente solo nel caso in cui la commessa si trovi nello stato di *Evasa*;

*Campi obbligatori per la generazione della commessa di produzione*: **Articolo** (con il suo relativo codice e descrizione), **Versione**, **Quantità** della commessa e la relativa **Unità di misura**.  
Infine vi sono una serie di campi che vengono tutti ripresi dai [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  dell'artcolo selezionato quali: il **Ciclo**, il **Lotto economico** con i relativi **Multipli**, il **Lead time** e la **Percentuale di scarto** sulla quantità.
I campi **Inizio / Fine previsione** indicano l'inizio e fine del periodo preso in considerazione della previsione di vendita che ha generato quella commessa. 

### Riferimenti ordini clienti

Il tab contiene una griglia di sola lettura, in cui compaiono gli ordini clienti collegati alla commessa di produzione di riferimento quando la commessa è stata generata da una o più righe ordini clienti.  
**Tipo/Anno/Numero**: in queste colonne vengono visualizzati il *Tipo/Anno/Numero* dell'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio;  
**N./Quantità/*UM**: in questa colonna viene visualizzata la quantità della riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Data merce pronta**: in questa colonna viene visualizzata la data della merce pronta che è stata impostata nella riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Conto**: in questa colonna vengono visualizzati conto e sottoconto del cliente a cui è intestato l'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio.

### Varianti

Questo tab è costituito da una griglia in cui l'utente può inserire le differenti quantità delle differenti **Varianti** dell'articolo da produrre oggetto della *Commessa di produzione*. Se l'articolo è gestito a Varianti infatti, l'utente può, dopo aver inserito la quantità totale di articolo da produrre nell'apposito box della finestra principale della *Commessa di produzione*, spostarsi su questa griglia e dettagliare le quantità per le singole varianti dell'articolo, tenendo conto che dopo aver inserito la prima riga in griglia la quantità da produrre dell'articolo si trasforma in una cella *read only*, e l'utente deve inserire le altre righe fino a riempire completamente quella quantità totale.

**Variante**: in questa colonna l'utente può, tramite l'apposita combo box, selezionare il codice della *Variante* dell'articolo da produrre;  
**Descrizione**: in questa colonna l'utente può visualizzare la descrizione della *Variante* selezionata;  
**Quantità**: in questa colonna l'utente può inserire la quantità da produrre per la singola *Variante* dell'articolo da produrre nella *Commessa di produzione*.

### Extra data

Anche questo tab è costituito da una griglia in cui verranno riportati tutti gli extra data collegati all'articolo presente nella commessa di produzione.

##  Costificazione

Tutte le informazioni relative alla **Costificazione** si possono consultare nella pagina [Costificazione].

## EXTRA DATA

Questo tab, che affianca il tab *Gestione commesse multiprodotto*, contiene tutto l'insieme degli [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) collegati alla commessa di produzione.

Per i dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).