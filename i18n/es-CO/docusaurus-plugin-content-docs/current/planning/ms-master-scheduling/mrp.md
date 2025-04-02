---
title: MRP
sidebar_position: 3
---

:::important A cosa serve
La funzione **MRP** (**Manufacturing Resourse Planning**) di Fluentis permette agli utenti di analizzare la disponibilità dei materiali e delle risorse produttive in base alla pianificazione della produzione. Attraverso questa procedura, l'operatore riceve suggerimenti su come ottimizzare la gestione dei materiali, comprese le indicazioni per anticipare forniture, integrare quantità necessarie o annullare ordini superflui. L'MRP di Fluentis tiene conto dei vincoli di produzione, delle materie prime, dei semilavorati disponibili o ordinati, consentendo così un controllo efficiente di ogni commessa attiva. Questo sistema mira a ottimizzare le scorte aziendali, riducendo i livelli di magazzino e migliorando l'efficienza operativa
:::

Tale procedura permette all’utente di avere l’analisi della corretta disponibilità dei materiali e delle risorse produttive in funzione della pianificazione di produzione. Attraverso questa elaborazione l’operatore può ricevere una serie di suggerimenti relativi all’anticipo di alcune forniture di materiali, all’integrazione di quantità necessarie, piuttosto che provvedere ad annullare ordini di articoli inutili in modo da rendere il più agevole possibile il controllo e la gestione delle operazioni.
L’MRP realizza una pianificazione di produzione tenendo conto dei diversi vincoli di produzione, delle materie prime e semilavorati disponibili e di quelli ordinati.
Grazie a questa procedura l’operatore è in grado di analizzare la copertura produttiva di ogni commessa attiva, gestendo e coordinando tutti i processi relativi all’acquisizione, alla produzione e alla consegna del prodotto finito.
Il principio base del sistema di fabbisogno dei materiali di produzione è l’ottimizzazione delle scorte sulla base delle esigenze aziendali, questo si riflette in un abbassamento dei livelli delle scorte ed in un conseguente aumento di efficienza.
In sostanza, attraverso gli algoritmi di questa funzione, l’MRP di Fluentis è in grado di conoscere l’impegno di ogni materiale presente a magazzino e la disponibilità alla data interessata. 

### M.R.P.

In questo tab è possibile consultare i risultati selezionando l’elaborazione tra quelle presenti nello storico.      
Si ricorda che le elaborazioni sono mantenute nello storico per il numero di giorni indicato nel campo **Giorni storico MRP da mantenere**, presente nei [Parametri fabbisogno materiali](/docs/configurations/parameters/production/resource-requirements-parameters).      
Questa form si compone di un’area di filtro dove è possibile filtrare per articolo, tipo di approvvigionamento oppure anche per tipo di suggerimento dato dalla procedura.   
Nella parte destra è presente un elenco di tutti gli articoli che la procedura ha elaborato e per ognuno dei quali sono riportati anche le azioni proposte.     
Una volta selezionata una di queste righe, nella tabella centrale vengono riportate tutte le informazioni relative alle azioni da intraprendere, dove per ognuna è riportata la disponibilità, il fabbisogno e l’eventuale fabbisogno confermato se la procedura è stata lanciata con il flag **Differenza domanda di produzione confermata** attivo; mentre nella tabella inferiore, troviamo tutte le informazioni relative a tutti i documenti legati all’articolo, con l’indicazione di domanda, offerta e disponibilità alla data indicata.     
Selezionando un ordine pianificato creato dalla procedura MRP è possibile rilasciarlo premendo il pulsante **Rilascio ordini pianificati**.

### Commessa

In questo tab è possibile filtrare e selezionare le commesse di produzione che si desidera processare, in modo da  operare in modo parziale su alcune commesse selezionate o in modo globale su tutto l’insieme delle commesse presenti in produzione.

### Parametri

Attraverso questo tab vengono settati tutti i parametri generali che riguardano la procedura MRP. Alcune impostazioni presente in questo tab vengono riprese dalla finestra [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) e sono relative allo specifico articolo. 

**Pianificazione**: 
> **Pianificare fino al**: indica la data entro la quale il sistema dovrà andare a considerare i documenti inseriti. Questa, viene proposta come l’ultimo giorno dell’anno nel caso in cui la data odierna sia entro il trenta giugno dell’anno in corso, altrimenti dopo il primo luglio viene proposto l’ultimo giorno dell’anno successo.     
> **Flag Materiali**: se abilitato, all’interno degli ordini pianificati creati vengono riportati i materiali da consumare. Nel caso il flag non fosse attivo, gli ordini pianificati verranno comunque creati ma senza i materiali all’interno;       
> **Flag Risorse**: se abilitato, all’interno degli ordini pianificati creati vengono riportate anche le fasi di lavorazione. Nel caso il flag non fosse attivo, gli ordini pianificati verranno comunque creati ma senza le fasi di lavorazione all’interno;            
> **Flag Ordini pianificati di acquisto**: se abilitato, vengono considerati gli ordini pianificati di acquisto nella pianificazione;    
> **Flag Ordini pianificati di produzione**: se abilitato, vengono considerati gli ordini pianificati di produzione nella pianificazione;    
> **Flag Ordini pianificati di conto lavoro**: se abilitato, vengono considerati gli ordini pianificati di conto lavoro nella pianificazione;   

**Per i documenti privi di date necessarie:**    
> **Ordini fornitori e richieste di acquisto**: è possibile decidere di non considerare gli articoli privi di data prevista ricevimento, oppure di considerare come data di prevista consegna quella indicata manualmente in questa sezione;    
> **Ordini clienti**: è possibile decidere di non considerare gli articoli privi di data prevista ricevimento, oppure di considerare come data di prevista consegna quella indicata manualmente in questa sezione;    

**Considera le disponibilità provenienti da**:    
> **Acquisti**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Acquisti* debbano essere presi in considerazione durante l’elaborazione della procedura MRP;   
> **Vendite**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Vendite* debbano essere presi in considerazione durante l’elaborazione della procedura MRP;    
> **Magazzino**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Magazzino* debbano essere presi in considerazione durante l’elaborazione della procedura MRP;   
> **Conto Lavoro**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Conto Lavoro* debbano essere presi in considerazione durante l’elaborazione della procedura MRP;   
> **Pianificazione**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Pianificazione*, (quindi Commesse di Produzione, Ordini Pianificati di Acquisto, Conto Lavoro e/o Produzione), debbano essere presi in considerazione durante l’elaborazione della procedura MRP;
> **Produzione**: se attivato, il flag consente di fare in modo che i documenti dell’area gestionale *Produzione* Rilasciata (quindi Ordini di Produzione), debbano essere presi in considerazione durante l’elaborazione della procedura MRP;    

**Considera anche le alternative dei materiali**: *IN SVILUPPO*    
**Considera anche le fasi alternative**: *IN SVILUPPO* 

**Lettura distinte/cicli**:   
> **Versione**: indica la versione di default da prendere in considerazione per distinta / ciclo;   

**Considera le quantità in base al lotto economico**: se attivato, il flag consente di fare in modo che per l’articolo venga considerato il lotto economico (ovvero la quantità minima) di produzione o di acquisto;   
**Considera i multipli del lotto economico**: se attivato, il flag consente di fare in modo che per l’articolo venga considerato il multiplo del lotto economico di produzione o di acquisto;   
**Reintegro scorta minima dell’articolo**: se attivato, il flag consente di fare in modo che per l’articolo venga reintegrata la scorta minima impostata nella sua anagrafica, tab *Approvvigionamento*;   
**Considera indice di copertura**: se attivato, il flag consente di fare in modo che per l’articolo venga considerato l’indice di copertura impostato nella sua anagrafica, tab *Approvvigionamento*; l'indice di copertura viene espresso in settimane e quando viene indicato, significa che si va a dire al sistema di coprire il fabbisogno per le settimane indicate in questo campo;   
**Senza suggerimenti**: se attivo, l'MRP non fa le proposte delle azioni di aumento, diminuzione, cancellazione, anticipo e posticipo sugli ordini pianificati già creati;   
**Considera passato**: se attivo, per quei documenti con la data di prevista consegna passata rispetto alla data corrente (oggi), considera la disponibilità anche nel passato; se non attivo tutti i documenti passati (rispetto ad oggi) verranno considerati con data prevista consegna oggi;       
**Differenzia domanda di produzione confermata**: se attivo, l'mrp viene eseguito due volte; la prima esecuzione considera solamente i fabbisogni provenienti da documenti esecutivi (aree: SCM - Acquisti, SCS - Conto Lavoro e MES - Produzione), generando ordini pianificati, se necessari, valorizzando anche il campo "quantità confermata" (presente nell'ordine pianificato appena creato); questa prima esecuzione genera i documenti strettamente necessari a soddisfare la domanda di documenti più urgenti, per l'appunto quelli esecutivi.
La seconda esecuzione prende in considerazione i fabbisogni provenienti da tutti i documenti comprese la Commesse di produzione; questa seconda esecuzione genera i documenti mancanti senza però ottimizzarli con quelli generati nella prima esecuzione per poter dare la possibilità di poterli confermare/rilasciare separatamente;       
**Considera articoli privi di commessa**: se attivo, durante l’elaborazione della procedura MRP verranno presi in considerazione tutti gli articoli con politica di gestione previsionale e fabbisogno (ad esclusione di quelli archiviati e/o fittizi) e con politica di gestione per commessa (solamente se con il flag *Considera l'articolo nel calcolo MRP* attivo nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell’articolo), anche se privi di commessa;     
**Controllo fabbisogni con generazione ordini pianificati**: permette di scegliere se far generare gli ordini pianificati o meno. Se non attivo, vengono proposti solo  i suggerimenti di creazione degli ordini pianificati; da notare che gli ordini pianificati creati dal MRP non hanno i riferimenti a commesse;    
**Articoli a scorta**: prende tutti gli articoli che hanno politica di gestione “A scorta” nei parametri MRP dell’articolo; inoltre, nei parametri MRP almeno uno tra i parametri di scorta minima e punto di riordino devono essere settati;    
**Tolleranza per l’occupazione dei C.d.L.**: viene utilizzato in generazione occupazione per le fasi degli ordini pianificati di produzione per definire quando l'MRP deve utilizzare una fase di lavoro alternativa.     

### Storico

In questo tab è possibile filtrare e visualizzare l'elenco delle procedure MRP lanciate, con l'indicazione dell'utente e del momento in cui sono state eseguite.     