---
title: Esecuzioni F.C.S.
sidebar_position: 6
---

## Esecuzioni F.C.S. (griglia principale)

La form si compone di una griglia principale dove premendo il tasto **Ricerca** si ottiene l'elenco delle simulazioni salvate. Selezionando una di queste, vengono caricati i relativi dati nelle varie tab del form.     
E' possibile eliminare una simulazione selezionandola e premendo il tasto **Cancella**.

Tutti i dati relativa alla simulazione selezionata, sono presenti nei seguenti seguenti tab:

### Parametri

Questo tab mostra i parametri che sono stati usati per la simulazione selezionata.

### Errori d'importazione

Questo tab elenca gli avvertimenti generati al momento dell'importazione della simulazione. Non sono elencati errori perché in tal caso la simulazione non sarebbe stata possibile.

### Errori d'esecuzione

Questo tab riporta eventuali errori rilevati durante la simulazione.

### Ordini fornitori

Questo tab elenca le righe ordini fornitori pianificate e confermate ed inevase, con la relativa data fine schedulata. Questa è intesa come data di consegna simulata dallo schedulatore. In caso di ordini confermati, la data fine schedulata coincide con quella pianificata, eventualmente posticipata secondo il valore del parametro di schedulazione **Giorni ritardo disponibilità per acquisti**.         
Se tale data fosse anteriore alla data inizio simulazione, verrebbe fatta coincidere con essa. Se l'ordine è pianificato, in caso la data inizio risulti anteriore alla data inizio simulazione, questa verrebbe fatta coincidere con essa e di conseguenza sarebbe spostata in avanti la data fine e la data fine schedulata è calcolata come somma della data fine e del parametro **Giorni ritardo disponibilità per acquisti**. 

### Ordini conto lavoro

Questo tab elenca le righe ordini terzisti pianificate e confermate ed inevase. La data inizio schedulata è quella in cui è stato simulato il prelievo delle merci da consegnare al terzista. Tali merci devono tutte esser disponibili a magazzino per poter essere spedite ed avviare l'ordine, non vengono simulati prelievi parziali di merci se queste non sono completamente disponibili, come invece viene simulato per gli ordini di produzione.         
La data fine schedulata è data dalla data inizio sommata al lead time dell'ordine, ed al parametro di schedulazione "Giorni ritardo disponibilità per conto lavoro".          
Anche per il rientro della merce lavorata non sono simulate consegne parziali, come invece avviene per gli ordini di produzione. In sintesi, per gli ordini di conto lavoro i valori dei lotti di prelievo e di versamento degli articoli nei parametri MRP sono considerati comunque nulli, cioè gli ordini di conto lavoro sono gestiti a lotti e non a flusso.

### Ordini di produzione

Questo tab contiene gli ordini di produzione sia pianificati che confermati ed inevasi. Le date inizio e fine schedulate sono determinate dal risultato della schedulazione.

### Operazioni

Questo tab contiene le fasi relative agli ordini di produzione visualizzati nel relativo tab. Le date inizio e fine schedulate sono determinate dal risultato della schedulazione.      
Sul lato destro ci sono altri tab che mostrano le macchine alternative, le risorse necessarie e gli attributi di attrezzaggio.

### Domanda dipendente

Questo tab mostra i fabbisogni di materiali di tutti gli ordini di produzione e di conto lavoro.

### Ordini cliente

Questo tab mostra le righe ordine cliente inevase. La data fine schedulata è quella in cui lo schedulatore ha simulato la consegna. Questa non è mai anteriore alla data di consegna dell'ordine, e può essere successiva ad essa se non può essere eseguita alla data prevista per indisponibilità della merce a magazzino.

### Ordini interni DDMRP

In un ambiente di tipo Ddmrp, questo tab mostra le righe di ordini interni per merce da consegnare ai nodi della supply chain gestita dal Ddmrp. Ciascuno di questi ordini funziona come un ordine cliente, dove il cliente è un nodo della supply chain.

### Tasks

Questo tab contiene il nucleo del risultato della schedulazione. I task sono le singole attività (indivisibili ed inaccorpabili) eseguite in fabbrica.       
La maggior parte di essi ha una corrispondenza biunivoca con le righe del tab operazioni. Alcuni di essi sono il risultato di accorpamento di più operazioni (macchine che hanno una regola di accorpamento), secondo una relazione uno a molti tra i task e le operazioni.       
In alcuni casi è vero anche il contrario, ovvero ad una operazione possono corrispondere più task (solo per le macchine che hanno una regola di accorpamento), poichè la quantità da produrre della operazione eccede i limiti di carico della macchina, e quindi la lavorazione della operazione richiede più sessioni di lavoro della macchina. Nel caso in cui un task non risulti schedulabile, nella colonna "avvertimenti" è disponibile un messaggio che riporta una (spesso l'unica) causa della mancata schedulazione, per aiutare a comprendere come agire per rimuovere la causa del problema.

### Registrazioni di magazzino

Questo tab riporta tutte le simulazioni di versamenti (quantità positiva) e prelievi merci (quantità negativa) dai magazzini, con l'indicazione dell'ordine al quale fa riferimento. Sono pertanto relative a tutti i tipi di ordini importati dallo schedulatore.      
Solo alcune registrazioni non fanno riferimento d alcun ordine, infatti per ogni articolo ed ogni magazzino è presente una registrazione che corrisponde al valore della giacenza al momento della importazione dei dati della simulazione. Questa registrazione non riporta il valore della giacenza alla data dell'inizio della simulazione, perchè avrebbe senso solo se fosse possibile anche importare gli ordini confermati e pianificati in qualsiasi giorno del passato, il che richiederebbe il salvataggio di una mole gigantesca di dati che sarebbe in generale di poca utilità.

### Attività lavoratori

Questo tab elenca le attività eseguite dai lavoratori durante la simulazione,  relativamente ai task presenti nel relativo tab. Per ciascuna attività viene indicato se si riferisce ad attrezzaggio macchina o a lavorazione.

### Attività risorse

Questo tab elenca gli impieghi delle risorse generiche di produzione gestite a capacità finita, relativamente ai task presenti nel relativo tab.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).