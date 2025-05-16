---
title: Capacità centri di lavoro
sidebar_position: 2
---

:::important A cosa serve
La funzione **Capacità centri di lavoro** in Fluentis offre un panorama chiaro e immediato dei carichi di lavoro nei centri produttivi, evidenziando picchi di sovraccarico o inefficienze. Attraverso una form organizzata in quattro sezioni, gli operatori possono filtrare e visualizzare gli ordini per reparto, data o stato (pianificato, lanciato, esecutivo) e intervenire con facilità tramite il drag & drop per spostare, posticipare o modificare le lavorazioni.     
La visualizzazione grafica illustra la capacità massima e l'impegno giornaliero dei centri, consentendo una gestione visiva e interattiva delle fasi produttive. Pulsanti specifici rendono possibile modificare le fasi, cambiare date e navigare attraverso il dettaglio temporale del carico di lavoro, ottimizzando in tal modo l'efficienza operativa dell'intero processo produttivo.
:::

L’operatore può ottenere una visualizzazione immediata dei carichi di ciascun centro di lavoro attivo nell’ambito dei singoli reparti per un determinato periodo temporale, permettendogli di conoscere in modo immediato gli eventuali picchi di sovraccarico o di inefficienza produttiva. 
Con un semplice *drag & drop* l’operatore può anticipare, posticipare o cambiare centro di lavoro ad una lavorazione, e con un doppio click nell’ambito della singola barra di capacità, è possibile conoscere nel dettaglio le informazioni relative a quali ordini di lavoro impegnano il centro nella specifica data selezionata.

Questa form, è costituita da 4 sezioni: 

- la prima permette di filtrare per *Reparto* e/o per *Centro di lavoro* e di visualizzare i risultati nella griglia sottostante;  

- nella seconda è possibile filtrare gli ordini per *Data inizio* e *Data fine* ed inoltre, decidere se visualizzare gli ordini: 

> *Pianificati*: mostra gli ordini pianificati di produzione;              
> *Lanciati*: mostra gli ordini di produzione in stato lanciato;                
> *Esecutivi*: mostra gli ordini di produzione in stato esecutivo.          

Inoltre, è possibile visualizzare tutti i dati relativi ai centri di lavoro selezionati nella prima sezione.

- nella terza sezione è possibile visualizzare una riga per ogni fase degli ordini pianificati e/o di produzione filtrati corrispondenti ai centri di lavoro selezionati nella prima sezione con tutti i dettagli relativi.

- nella quarta sezione denominata **Dati di dettaglio Fase selezionata** è possibile visualizzare graficamente i carichi di lavoro relativi ai centri di lavoro selezionati nella prima sezione. 

**Dati di dettaglio Fase selezionata**

All'interno della parte grafica, la linea arancione rappresenta la capacità produttiva massima giornaliera del centro di lavoro, mentre in blu viene rappresentato l'impegno del centro di lavoro in una certa giornata. In rosso, invece, viene evidenziata la sovrallocazione del centro stesso.
Selezionando una fase nella terza sezione, questa viene visualizzata in giallo all'interno della sezione grafica.

Inoltre, tramite drag & drop è possibile selezionare una fase dalla griglia e trascinarla all'interno della sezione grafica e rilasciarla per variarne la data di inizio e di conseguenza quella di fine. Selezionando più centri di lavoro alternativi vi è la possibilità di spostare le fasi da un centro ad un altro in modo da ottimizzare la produzione.

Esercitando un semplice doppio click sulla riga della griglia delle fasi, l'utente entra direttamente nel documento (ordine pianificato o ordine di produzione) che contiene la fase rappresentata nella riga da cui si è partiti, con la possibilità, subordinata alla presenza dei diritti utente, di modificare il documento e vedere, dopo aver dato un refresh della visualizzazione, la situazione aggiornata anche dal punto di vista grafico.
Invece, con un doppio click su un elemento del grafico viene aperto un pop-up contenente l'elenco della fasi di lavoro che contribuiscono a determinarne l'impegno.

*Pulsanti specifici*:  

> **Cambia fasi**: una volta selezionata una fase, questo comando permette di *Aggiornare* la fase stessa variando: fase, macchina, centro di lavoro, totale del tempo macchina, del tempo operaio e del tempo di attrezzaggio. Inoltre, selezionando la voce *Inserisci* è possibile aggiungere una nuova fase oppure, tramite la voce *Cancella* di eliminarla definitivamente;            
> **Cambio date**: permette di variare la data di inizio della fase selezionata;        
> **Attiva tassativo**: permette di attivare il flag **Tassativo** all'interno di tutti gli ordini selezionati;       
> **Disattiva tassativo**: permette di disattivare il flag **Tassativo** all'interno di tutti gli ordini selezionati;         
> **Zoom in**: permette di diminuire il dettaglio temporale nel grafico;          
> **Zoom alla finestra**: permette di visualizzare il dettaglio temporale nel grafico sulla base delle *Date Inizio/Fine* indicate nei filtri;                    
> **Zoom out**: permette di aumentare il dettaglio temporale nel grafico;              
> **Zoom settimana**: permette di visualizzare un arco temporale di una settimana nel grafico a partire dalla *Data Inizio*;              
> **Zoom 2 settimane**: permette di visualizzare un arco temporale di due settimane nel grafico a partire dalla *Data Inizio*;     
> **Zoom mese**: permette di visualizzare un arco temporale di un mese nel grafico a partire dalla *Data Inizio*;     
> **Zoom data**: permette di visualizzare un arco temporale indicando *Date Inizio* e *Data fine* dello stesso.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
