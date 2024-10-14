---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > DDT Acquisto**.   

Il DDT viene generato quando un fornitore spedisce la merce ordinata e contiene informazioni come i dettagli del fornitore e dell'acquirente, la descrizione degli articoli spediti con le relative quantità, unità di misura e prezzi, oltre ai dati relativi al trasporto. Questo modulo consente di registrare i movimenti dei beni in entrata, facilitando il controllo e la tracciabilità della merce ricevuta e permettendo una gestione precisa del materiale disponibile a magazzino.

### **Flusso operativo**

La generazione automatica del DDT può avvenire mediante:

- **Evasione da Ordini fornitore**: sia dall'interno del DDT utilizzando il pulsante Evasione da ordini, sia attraverso l'apposita [procedura](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders). Entrambe le modalità permettono l'evasione parziale o totale di più ordini intestati allo stesso fornitore all'interno di un unico DDT.   
- **Creazione da ricevimento merci**: utilizzando la [procedura](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) omonima; permette la creazione del DDT anche quando l'ordine è già stato evaso all'interno di un *Ricevimento merci*.  

Una volta generato e controllato, il DDT di acquisto può essere [caricato a magazzino](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) per registrare l'arrivo della merce e aggiornare le giacenze di materiale e [valorizzato](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

### **Funzionalità principali**

- Articoli non codificati e varianti: È possibile inserire nel DDT articoli non presenti a sistema, specificando solo la descrizione, oppure gestire varianti di articoli con ulteriori attributi, visualizzando le combinazioni direttamente nel DDT.
- Gestione di più tipi di DDT: È possibile classificare i DDT in base alla loro natura commerciale, permettendo un filtro rapido e accurato dei documenti.
- Spese e note: Il DDT può includere spese aggiuntive per la merce spedita, oltre alla possibilità di inserire note specifiche per ogni articolo.
- Gestione lotti e magazzino: i codici lotti e serial number possono essere codificati automaticamente o manualmente. 
- Stampa e personalizzazioni: È possibile stampare il DDT, con layout personalizzati per il cliente, insieme a etichette per le merci spedite.
- Integrazione con immagini: Il sistema permette di visualizzare le immagini degli articoli all'interno del DDT.

### **Impostazioni**

Prima di utilizzare il modulo, è necessario configurare correttamente i seguenti parametri e tabelle:     
> - [Numerazioni](/docs/configurations/tables/fluentis-numerations)
> - [Fatturato acquisti](/docs/configurations/tables/purchase/purchase-turnover/)
> - [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type)
> - [Parametri DDT acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters).