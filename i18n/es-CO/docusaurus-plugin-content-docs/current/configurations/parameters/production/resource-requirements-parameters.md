---
title: Parametri Fabbisogno Materiali
sidebar_position: 7
tags: [Fabbisogno materiali]
---

Attraverso questa finestra vengono settati i parametri che riguardano alcune delle impostazioni di base dell'area Produzione.

**Primo giorno della settimana cal. capacità produttiva**: è possibile decidere quale sia il giorno che debba essere considerato come primo della settimana nel [Calendario delle capacità produttive](/docs/configurations/tables/production/factory-calendar), quindi nel calendario dei centri di lavoro. Solitamente si imposta il lunedì.

**Ultimo ordine pianificato inserito per l'anno in corso**: rappresenta l'ultimo numero progressivo utilizzato nell'anno in corso per gli ordini pianificati.

**Colori tipologie documento**: permette di impostare il colore dello sfondo e del testo per le diverse tipologie di ordine: di Acquisto, di Produzione o di C/Lavoro, in ritardo e/o scaduti.

## Parametri per il rilascio ordini pianificati  

In questa sezione l'utente può impostare il tipo richiesta d'acquisto e il tipo ordine di conto lavoro (se chiuso quindi non modificabile ulteriormente o aperto e quindi modificabile) che devono essere generati automaticamente durante il rilascio degli ordini pianificati rispettivamente di acquisto e di conto lavoro.

**Controllo terzista obbligatorio per le fasi esterne**: se attivo, nel caso non sia indicato il terzista in una fase esterna, questo verrà segnalato con il **Colore testo riga ordine** sotto indicato. 

**Gestione semplificata della produzione**: è obsoleto e viene utilizzato solo nelle vecchie versioni.  

**Mantenimento legame tra ordini di una Commessa**: se attivo, permette, sfruttando anche i flag immediatamente successivi, di decidere che qualora venga modificata manualmente la data di un ordine pianificato, la procedura attui la modifica conseguente anche sugli ordini pianificati immediatamente adiacenti a quello che ha subito la modifica iniziale.

**Numero giorni per il calcolo disponibilità**: indica fino a quanto spingersi avanti per la valutazione del calcolo della disponibilità, non considerando ordini e fabbisogni che superano quella data.

**Data impegno materiali alla fase di scarico materiali**: se attivo, la data impiego materiale indicata negli ordini pianificati sarà pari alla data inizio maggiore tra tutte le fasi, il che significa che sarà uguale alla data inizio dell'ultima fase. Mentre, se il flag non è attivo, la data impiego materiale indicata negli ordini pianificati sarà pari alla data inizio dell'ordine, quindi alla data inizio della prima fase.         

**Giorni anticipo impegno materiali**: il valore indicato permette di anticipare di quel numero di giorni la disponibilità del materiale rispetto l’inizio della lavorazione (sia negli ordini pianificati di produzione che negli ordini di produzione), in modo da permettere alla logistica di portare il materiale in tempo in produzione. Questo è preso in considerazione dalle seguenti procedure: tutte le schedulazioni "al più presto", "al più tardi", "a capacità finita", "MRP", "Completamento dati ordine" sia negli ordini pianificati che negli ordini di produzione, "Ricalcola data inizio" sia negli ordini pianificati che negli ordini di produzione tutte le procedure del CRP ("Gantt", "Capacità centri di lavoro" e "Sequenza fasi") che operano sul cambio data inizio o fine della fase dell'ordine.

**Giorni storico M.R.P. da mantenere**: permette di indicare quale sia il periodo in giorni per il quale verranno mantenuti i risultati delle elaborazioni M R P all’interno dello storico. Quando un’elaborazione supera il numero di giorni inserito in questo campo, questa alla successiva elaborazione M R P verrà rimossa dallo storico. Lasciando il campo vuoto non verrà cancellata nessuna elaborazione dallo storico.
 
## Magazzini di schedulazione ordini  

La griglia è la semplice visualizzazione della lista di magazzini si cui deve essere controllata la disponibilità. Questa lista viene impostata nella form chiamata *Calcolo disponibilità* che si trova tra le Utilità del gestionale.

## Parametri Gantt  

Permette di inserire dei parametri di default per la gestione della form del Gantt (*Tipo simulazione Gantt* e *Tipo simulazione Snapshot*).

## Parametri Calcolo Fattibilità  

Permette di inserire le indicazioni per l'attivazione e la visualizzazione della **Fattibilità** delle Fasi di lavorazione.   

Per la versione di prodotto attuale l'unica attivazione possibile è nelle gestioni di *Sequenza fasi*. Nelle prossime versioni verranno introdotte anche le altre procedure.  

E' possibile attivare il controllo della fattibilità: 

- **Considera Materiali**: abilità il pulsante *Dettaglio Fattibilità materiale* e il campo *Fattibilità materiali* nella griglia delle procedure attive nel box **Calcolo fattibilità da applicare in**;    
- **Considera Fasi precedenti**: abilità il pulsante *Dettaglio Fattibilità fasi* e il campo *Fattibilità fasi* nella griglia delle procedure attive nel box **Calcolo fattibilità da applicare in**.      

## Calcolo fattibilità da applicare in  
Permette di abilitare la fattibilità nelle singole procedure:
- Sequenza fasi
- Capacità centri di lavoro
- Rilascio ordini pianificati
- Lista prelievo materiali
- Filtro ordini di produzione

## Colori calcolo fattibilità  

Si possono impostare dei colori che evidenziano le diverse informazioni sulle disponibilità dei materiali da utilizzare:   
- *Materiale non disponibile*: indica che non c'è nessun materiale disponibile nemmeno in quantità parziale;   
- *Materiale disponibile parzialmente*: indica che abbiamo almeno una quantità parziale di uno dei materiali, ma non la disponibilità completa di tutti;   
- *Materiale disponibile*: indica che ho la disponibilità di tutti i materiali per le quantità totali;   
- *Materiale non necessario*: indica che non è necessario nessun materiale;   

e sullo stato di avanzamento delle fasi di lavoro precedenti alla fase analizzata:   
- *Fase precedente non iniziata*: indica che la fase precedente a quella considerata non è stata iniziata;   
- *Fase precedente iniziata*: indica che la fase precedente a quella considerata è stata iniziata, ma non completata;   
- *Fase precedente completata*: indica che la fase precedente a quella considerata è stata completata;   
- *Fase iniziata*: indica che la fase considerata è iniziata.   

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).