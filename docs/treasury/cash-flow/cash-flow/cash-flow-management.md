---
title: Gestione Cash flow
sidebar_position: 2
---

Da questa maschera si procede al caricamento/modifica del cash flow.

Da queste voci di menù è possibile creare/modificare i calcoli di simulazione del cash flow. Con la gestione manuale è possibile inserire righe manualmente oppure richiamare i dati attraverso il pulsante di acquisizione presente in testata, selezionando il tipo di flusso d'interesse che aprirà la maschera di ricerca e selezione relativa.

Da questa maschera è anche possibile visualizzare il documento d'origine per valutarne i dati.

#### Pulsanti specifici

> **Salva**: Salva il cash flow in gestione.  
> **Ricerca tutti**: Esegue la ricerca dei flussi per i conti finanziari.  
> **Ricerca movimenti cash flow**: Esegue la ricerca dei movimenti per i tipi di flusso previsionale.  
> **Acquisizione**: Da questo pulsante l'utente può selezionare il tipo di flusso dal quale riprendere i dati previsionali da inserire nel cash flow in uso. Ogni dettaglio di questo pulsante aprirà un help contestuale specifico per il tipo di flusso, vedi applicazione a.  
> **Nuovo mov. cont.**: Attiva il cursore nell'inserimento di una nuova riga di dettaglio nei movimenti dei conti finanziari.  
> **Nuovo mov. flow**: Attiva il cursore nell'inserimento di una nuova riga di dettaglio nei movimenti previsionali.  
> **Ripristino tutti**: Cancella tutti i movimenti inseriti.  
> **Ripristino contabilità**: Cancella i movimenti dei conti finanziari.  
> **Ripristino cash flow**: Cancella i movimenti previsionali.  
> **Visualizza doc. orig.**: Visualizza il documento d'origine del flusso previsionale selezionata.  

**PULSANTE (lista) *ACQUISIZIONE*:**

 1. Partite: la maschera consente di riprendere la partite contabili dalla contabilità;
 2. Contabilità: la maschera consente di riprendere i saldi dei tipi conto finanziari;
 3. Extra contabile: la maschera consente di riprendere i dati delle scadenze extracontabili di cash flow;
 4. Fatture (acquisto/vendita): da queste maschere si selezionano i dati delle scadenze fatture di acquisto/vendita ;
 5. Ordini (clienti/fornitori): da queste maschere si selezionano le simulazioni dei dati residui degli ordini clienti/fornitori (stampati e confermati). Nel caso in cui si desideri confrontare la ricerca, ad esempio, con la form generale di ricerca degli ordini (clienti o fornitori), tenere presente che: 
     - nel cashflow sono selezionati (di default) solo gli ordini non evasi (con possibilità di attivare l'apposito flag per la ricerca di quelli parzialmente evasi, soltanto, oppure in aggiunta ai non evasi, di cui è comunque visibile in griglia il flag identificativo) 
     - vengono esclusi ordini senza dettaglio di righe con valore diverso da zero (altrimenti non generano scadenze) 
     - sono esclusi quelli forzatamente evasi
     - la divisa deve essere non vuota
     - il conto di testata deve essere valorizzato
     - il numero dell'ordine eve essere maggiore di zero
     - il tipo ordine deve avere il flag cashflow (come per la creazione automatica del cashflow)
     - la data conferma ordine deve essere valorizzata
     - l'ordine non deve essere già stato incluso in un'altro cashflow calcolato
     
L'help consente due modalità di ricerca: ***Visualizza ordini*** che espone nelle righe i dati di testata degli ordini e ***Visualizza articoli*** che espone i dati delle righe ordine (quindi in caso di più righe sarà riportato più volte il numero ordine ed i dati di testata).

Il flag ***Escludi articoli in fattura*** verifica se le righe dell'ordine sono già state evase in fattura o in un DDT.

Esempio: un ordine con 3 articoli, il primo non evaso, il secondo parzialmente evaso ed il terzo totalmente evaso.

Con il flag attivo:
- nella modalità *Visualizza ordini* sarà estratto quell'ordine perchè la riga 1 e 2 non sono totalmente evase ed il valore per il cashflow sarà la somma della riga 1 ed il residuo ella riga 2
- nella modalità *Visualizza articoli* sarà estratta solo la riga 1 perchè non evasa.

 
6. Percipienti non contabilizzati: la maschera consente di inserire nel cash flow i dati dei compensi percipienti non contabilizzati;
 7. DDT (vendita/acquisto): le maschere consentono di riprendere i dati dei  DDT non valorizzate in fattura;
 8. Conto lavoro (ordini/rientri): le maschere consentono di riprendere i dati dagli ordini di conto lavoro e dai relativi rientri non fatturati (lasciare le impostazioni di default di entrambe la maschere).






