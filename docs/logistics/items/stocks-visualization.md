---
title: "Visualizzazione giacenze"
sidebar_position: 2
description: "Guida alla visualizzazione delle giacenze di magazzino in Fluentis ERP per una gestione efficace delle risorse logistiche."
schema: "TechArticle"
tags: ["magazzino", "giacenze", "Fluentis"]
keywords: ["Fluentis ERP", "giacenze", "magazzino", "risorse logistiche"]
---

# Visualizzazione giacenze

:::important
A cosa serve  
L'introduzione alla visualizzazione delle giacenze di Fluentis costituisce un elemento fondamentale per una gestione efficiente del magazzino. Questa funzionalità consente agli operatori di estrapolare in modo semplice e pratico le giacenze di magazzino, permettendo di monitorare e confrontare la giacenza fisica con quella logica.

La visualizzazione delle giacenze offre la possibilità di raggruppare i dati per articolo, fornendo anche un dettaglio per magazzino. Ciò significa che è possibile visualizzare più righe dello stesso articolo, qualora questo fosse presente in magazzini diversi. Inoltre, l'operatore ha la possibilità di filtrare i dati per ubicazione, progetto, cliente/fornitore o lotto, fornendo così una panoramica completa e dettagliata delle giacenze in relazione ai diversi contesti di utilizzo.

Nel tab di dettaglio, ulteriori informazioni sui movimenti di magazzino sono accessibili, e da questo stesso tab è possibile generare registrazioni di magazzino per uno o più articoli, quando appartenenti allo stesso magazzino. Questa flessibilità permette un’efficace operatività, rendendo Fluentis uno strumento potente per la gestione delle risorse logistiche.
:::

La form consente all'operatore di estrapolare facilmente le giacenze di magazzino per controllare il magazzino e la corrispondenza tra giacenza fisica e logica.

Attraverso i filtri è possibile fare una ricerca mirata secondo i parametri e visualizzare il risultato dell'interrogazione nelle griglie dei risultati. Tali risultati possono essere raggruppati per vari parametri per facilitare la lettura dei dati. Dalla finestra è inoltre possibile inserire in modo veloce alcune registrazioni di magazzino.

I risultati della ricerca sono suddivisi in diversi tab:

## Articolo

- I risultati vengono raggruppati per articolo e vengono specificati i valori di classe, codice articolo, descrizione, seconda descrizione, variante (eventuale), descrizione variante (eventuale), quantità e unità di misura.

## Magazzino

- I risultati vengono raggruppati per magazzino e vengono specificati, oltre ai valori del tab articolo, anche i valori di magazzino e descrizione magazzino.

## Ubicazione

- I risultati vengono raggruppati per ubicazione e vengono specificati, oltre ai valori del tab articolo, anche i valori di ubicazione, descrizione ubicazione e stato ubicazione.

## Progetti

- I risultati vengono raggruppati per progetto e vengono specificati, oltre ai valori del tab articolo, anche i valori di numero, anno e descrizione articolo progetto.

## Cliente/Fornitore

- I risultati vengono raggruppati per cliente/fornitore (presenti nelle registrazioni di magazzino) e vengono specificati, oltre ai valori del tab articolo, anche i valori del cliente/fornitore.

## Lotto

- Se ci sono articoli gestiti a lotti, i risultati vengono raggruppati per lotto e vengono specificati, oltre ai valori del tab articolo, anche i valori di magazzino, lotto e quantità disponibile.

## Commessa produzione

- I risultati vengono raggruppati per commessa di produzione e vengono specificati, oltre ai valori del tab articolo, anche i valori di magazzino, descrizione magazzino, ubicazione, numero commessa di produzione e anno commessa di produzione.

## Dettaglio

- È il dettaglio massimo dei risultati raggruppato per tutti i tab precedenti. Vengono specificati i valori di classe, codice articolo, descrizione articolo, seconda descrizione articolo, variante, descrizione variante, opzione, descrizione opzione, magazzino, ubicazione, numero commessa, anno commessa, descrizione cliente/fornitore, lotto, quantità disponibile, quantità giacenza, unità di misura e stato dell'ubicazione.

### Generazione registrazioni

Nel tab **Dettaglio** della giacenza articolo è possibile utilizzare il pulsante **Generazione registrazioni** per inserire delle registrazioni di magazzino.

**Procedimento**:
1. Selezionare un *Articolo* sulla griglia di risultato.
2. Scegliere un *Magazzino* sui filtri.
3. Impostare la visualizzazione giacenze con flag su visualizza **Giacenza** *Positiva* o *Negativa* a seconda che si voglia creare una registrazione di *scarico* o di *carico*.
4. Premere il pulsante *Generazione registrazioni*, il quale aprirà la form *Movimentazione* dove è necessario inserire i valori di *Causale*, *Quantità*, *Data registrazione* ed eventualmente *Ubicazione*. Le causali di magazzino presenti nella combo sono di tipo *Carico* se è attivo il flag di visualizzazione giacenze *Negative* e di *Scarico* se è attivo il flag di visualizzazione giacenze *Positive*.
5. Una volta terminato l'inserimento dei campi nella form *Movimentazione*, premendo il pulsante *OK* verrà aperta la *Registrazione* appena creata per poter apportare eventuali modifiche e la maschera di *Visualizzazione giacenze* sarà già aggiornata in base alla registrazione inserita.

Quando si inserisce nella form *Movimentazione* una causale con contropartita, questa sarà proposta nel campo **Causale CPT** con la sua **Ubicazione**, se codificata nella tabella della causale.  
Se l'*Ubicazione* viene cancellata verrà inserita nella registrazione quella codificata nella [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map), se presente, altrimenti il campo resterà vuoto.

### Azzeramento giacenze

Nel tab **Dettaglio** è possibile azzerare in modo massivo le giacenze di magazzino. Solitamente questa funzione si utilizza nel caso siano presenti a sistema dei dati non coerenti di giacenze negative che si vogliono azzerare.

**Procedimento**:
1. Scegliere un *Magazzino* sui filtri.
2. Impostare la visualizzazione giacenze con flag su visualizza **Giacenza** *Positiva* o *Negativa*.
3. Nel tab *Dettaglio* giacenza articolo, selezionare tutti gli articoli da azzerare.
4. Premere il pulsante *Generazione registrazioni*, il quale aprirà la form *Movimentazioni* dalla quale scegliere la causale e, senza specificare la quantità, premere il pulsante *OK*. In questo modo si noterà l'azzeramento delle giacenze degli articoli desiderati.

## Riepilogo e approfondimenti

In questo documento abbiamo esplorato la funzionalità di visualizzazione delle giacenze in Fluentis, evidenziando l'importanza di gestire efficacemente le risorse di magazzino. Sono state descritte le diverse modalità di raggruppamento dei dati e i procedimenti per generare registrazioni di magazzino e azzerare le giacenze. 

Per ulteriori informazioni, consulta le sezioni relative alla [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map) e alla gestione delle registrazioni di magazzino.