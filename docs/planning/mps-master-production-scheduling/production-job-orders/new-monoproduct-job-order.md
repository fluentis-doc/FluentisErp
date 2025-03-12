---
title: Commessa Monoprodotto
sidebar_position: 4
---

La form si apre tramite il percorso **Pianificazione > Commesse di produzione** cliccando nella form **Commesse di produzione** sull'pulsante **Inserisci commessa**.  

## Pulsanti specifici

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): tramite questo pulsante è possibile aprire la schermata relativa ai parametri MRP dell'articolo;      
> [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permette di aprire la schermata relativa alla distinta base dell'articolo;  
> [Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route): permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.

## Gestione commesse monoprodotto

All'interno di questo tab si vanno ad indicare i dati principali che deve contenere la commessa di produzione.

**Tipo commessa**: viene proposto il tipo predefinito come tipo di default con il *codice standard CP* (che indica la commessa di produzione) presente nella tabella [Tipo documenti](/docs/configurations/tables/production/documents-types/);    

**Numero**: indica il numero progressivo della commessa, che viene proposto in automatico;     

**Anno**: viene proposto in automatico quello corrente;   

**Cliente**: indica i riferimenti di conto / sottoconto e descrizione del cliente;    

**Data**: viene proposta in automatico quella corrente;        

**Tassativa**: se attivo, rende tassativa la commessa e tutti gli ordini pianificati generati da questa saranno tassativi e verranno considerati nella [Schedulazione a capacità finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling);    

**Stato commessa**: il sistema in automatico propone come *Non esaminata*, stato che la commessa assume appena creata;   

Gli altri stati che può assumere sono:

- **Pianificata**: la commessa passa in questo stato dopo che ha subito il processo di Pianificazione  Generale;  
- **Lanciata**: la commessa passa in questo stato dopo che almeno uno degli ordini pianificati di produzione da essa generati durante la [Pianificazione Generale](/docs/planning/ms-master-scheduling/general-schedule) sono stati rilasciati (non devono essere stati rilasciati altri ordini pianificati di tipo acquisto o conto lavoro altrimenti la commessa passa in stato esecutivo);      
- **Esecutiva**: la commessa passa in questo stato dopo che almeno uno degli ordini di produzione da essa generati è stato rilasciato ed è diventato esecutivo, oppure dopo che almeno uno degli ordini pianificati di acquisto o conto lavoro da essa generati è stato rilasciato;   
- **Evasa**: la commessa passa in questo stato dopo che l'ordine di livello uno generato per l'articolo oggetto della commessa è passato in stato *Evaso*;   
- **Storicizzata**: la commessa può essere messa in questo stato manualmente per fare in modo che non esca più quando si effettua una ricerca delle commesse *Evase*;  
- **Annullata**: la commessa può essere messa in questo stato manualmente, anziché eliminarla del tutto, per indicare che la commessa, che inizialmente era stata prevista, non è poi stata portata in produzione.

**Descrizione**: permette di inserire una descrizione relativa alla commessa;        

**Tipo approvvigionamento**: generalmente coincide con il tipo di approvvigionamento dell'articolo inserito nella commessa di produzione. Il tipo di approvvigionamento dell'articolo viene indicato all'interno dei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) di quest'ultimo;     

**Priorità approvvigionamento**: indica la priorità dell'approvvigionamento;           
       
**Progetti**: indica il progetto in cui è inserita la commessa;       

**Sito Produzione**: indica il sito di produzione in cui verrà prodotta la commessa. Su questo campo è presente un controllo che, nel caso in cui la commessa nasca da un ordine cliente, verifica che il magazzino indicato sulla riga dell’ordine cliente appartenga allo stesso sito produttivo indicato nella commessa di produzione.  

**Data merce pronta**: in questa colonna viene visualizzata la data della merce pronta che è stata impostata nella riga dell'ordine cliente di cui viene esposto il dettaglio;      

**Data suggerita**: un campo in cui compare la data suggerita dal sistema nel caso in cui l'utente abbia schedulato la commessa utilizzando il parametro *Controlla documenti in ritardo con ATP* e avendo impostato, sempre nei parametri di *Pianificazione generale*, una *Data Inizio MS* (Master Scheduling). La data suggerita è quella che poi l'utente ha la facoltà di decidere che diventi la data di prevista fine della commessa;

**Data lavorazione prevista Inizio/Fine**: in questi campi compaiono le date di previsto inizio/fine della *Commessa di produzione*. Fino a quando la Commessa di Produzione resta in stato *Non esaminata*, queste date sono identiche tra loro ed uguali alla data di merce pronta della riga dell'Ordine Cliente da cui la commessa è stata generata, oppure uguali alla data di fine della Previsione di Vendita da cui la commessa è stata generata. Dopo che la Commessa di Produzione è stata schedulata, la data di previsto inizio della commessa coincide con la data di previsto inizio del primo ordine pianificato che viene generato dalla schedulazione della commessa. Infine, si ricorda che in caso di inserimento manuale della Commessa di Produzione, l'utente è tenuto ad inserire questo dato manualmente, pena l'impossibilità di salvare la commessa stessa;

**Data Lavorazione effettiva Inizio/Fine**: in questi campi compaiono le date di Inizio/Fine della lavorazione effettiva, cioè rispettivamente la data della prima segnalazione di produzione di un ordine di produzione generato dalla commessa e la data dell'ultima segnalazione di produzione che ha causato la chiusura definitiva dell'ordine di produzione il cui articolo è lo stesso della Commessa di Produzione. Ovviamente la data di effettiva fine è presente solo nel caso in cui la commessa si trovi nello stato di *Evasa*;

*Campi obbligatori per la generazione della commessa di produzione*: **Articolo** (con il suo relative classe, codice e descrizione), **Versione**, **Quantità** della commessa e la relativa **Unità di misura**.  
Infine vi sono una serie di campi che vengono tutti ripresi dai [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)  dell'articolo selezionato quali: il **Ciclo**, il **Lotto economico** con i relativi **Multipli**, il **Lead time**, la **Percentuale di scarto** sulla quantità e il **Tipo approvvigionamento**.
I campi **Inizio / Fine previsione** indicano l'inizio e fine del periodo preso in considerazione della previsione di vendita che ha generato quella commessa. 

È importante tenere presente che lo stato di testata della commessa multiprodotto è influenzato automaticamente dagli stati delle singole righe. Lo stato di testata sarà pari a quello più avanzato delle singole righe tra: non esaminata, pianificata, lanciata ed esecutiva.
Mentre, la testata, assumerà lo stato di evasa quando tutte le righe saranno evase; lo stesso vale per gli stati storicizzata e annullata.

### Riferimenti ordini clienti

Il tab contiene una griglia di sola lettura, in cui compaiono gli ordini clienti collegati alla commessa di produzione di riferimento quando la commessa è stata generata da una o più righe ordini clienti.  
**Tipo/Anno/Numero**: in queste colonne vengono visualizzati il *Tipo/Anno/Numero* dell'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio;  
**N./Quantità/Unità di misura**: in questa colonna viene visualizzata la quantità della riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Data merce pronta**: in questa colonna viene visualizzata la data della merce pronta che è stata impostata nella riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Conto**: in questa colonna vengono visualizzati conto e sottoconto del cliente a cui è intestato l'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio.

### Extra data

Anche questo tab è costituito da una griglia in cui verranno riportati tutti gli extra data collegati all'articolo presente nella commessa di produzione.

##  Costificazione

Tutte le informazioni relative alla **Costificazione** si possono consultare nella pagina [Costificazione](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Questo tab, che affianca il tab *Gestione commesse monoprodotto*, contiene tutto l'insieme degli [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) collegati alla commessa di produzione.

Per i dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).