---
title: "Creazione Piano di Carico"
sidebar_position: 2
sidebar_label: "Creazione Piano di Carico"
description: "Guida alla creazione e gestione del Piano di Carico in Fluentis ERP."
schema: "TechArticle"
tags: ["Piano di Carico", "Logistica", "ERP"]
keywords: ["Piano di Carico", "Creazione", "Ordini Cliente", "Picking"]
---

# Creazione Piano di Carico

Il **Piano di carico** è un documento che viene creato tra l'ordine cliente e il picking.

## Ricerca ordini cliente

Il punto di partenza per la creazione di un piano di carico è la ricerca e selezione degli ordini clienti da inserire nel piano. Dalla sezione di filtro è possibile effettuare una ricerca avanzata sugli ordini che si vuole evadere tra quelli *Non evasi* o *Parzialmente evasi*.

**Impostazioni di ricerca**:
- Di default, sono proposte come Da data consegna e A data consegna le date di inizio e fine della settimana corrente, ma possono essere impostate diversamente.
- Nei [Parametri Piani di Carico](/docs/configurations/parameters/logistics/load-plan-parameters) è possibile:
  - Cambiare le date consegna proposte per la ricerca.
  - Scegliere se visualizzare anche righe articoli presenti in piani di carico aperti.
  - Impostare colori diversi per riga, a seconda della disponibilità necessaria per evadere l'ordine.

**Filtri disponibili**:
- **Visualizza ordini con data consegna in giorno escluso**: permette di visualizzare in griglia anche gli ordini che hanno una data bloccata (es. festiva) sul calendario.  
- **Visualizza ordini con data consegna corretta**: permette di visualizzare gli ordini con una data valida.
È possibile aprire gli ordini con il doppio click.

### Dati nella griglia dei risultati

- **Tipo**: contiene la [tipologia](/docs/configurations/tables/sales/sales-order-types) dell'ordine cliente, seguito dai dati dell'ordine come il **Numero**, la **Data**, l'**Articolo**, ecc.
- **Note**: sono consultabili le note delle righe ordine e le note del piano di carico.
- **Quantità**: riporta la quantità totale della riga articolo nell'ordine.
- **Quantità residua**: riporta la residuo dell'ordine non ancora evaso.
- **Ordine presente in altro piano carico**: indica che l'ordine è già presente in un altro piano.
- **Ordine presente in altro piano carico aperto**: indica che l'ordine è già presente in un altro piano aperto.
- **Disponibilità**: visibile solo se attivati i flag della disponibilità nei [Parametri dei piani di carico](/docs/configurations/parameters/logistics/load-plan-parameters).  
La disponibilità è quella del magazzino della riga ordine alla data prevista di consegna (se nel futuro), mentre se la data di consegna è nel passato la disponibilità viene calcolata ad oggi. Inoltre, se la riga articolo è già inclusa in un altro piano di carico per il quale non sono stati creati altri documenti (picking, bolle o fatture), questa viene esclusa dalla disponibilità presente nella riga dell'articolo stesso. Quindi la disponibilità presente nei piani di carico potrebbe discostarsi da quella presente in **Analisi disponibilità**.
- **Giacenza**: visibile solo se attivati i flag della disponibilità nei [Parametri dei piani di carico](/docs/configurations/parameters/logistics/load-plan-parameters).  
La giacenza è quella del magazzino della riga ordine alla data prevista di consegna (se nel futuro), mentre se la data di consegna è nel passato la giacenza viene calcolata ad oggi.
- **Articolo**: consente di inserire la quantità dell'articolo da evadere.  
Il valore *Articoli*, viene calcolato per gli articoli non gestiti ad udc e mentre viene calcolato il *Numero unità di carico* per quelli gestiti ad udc;se il valore *Articoli* è uguale a zero significa che le righe ordine sono senza disponibilità per il piano carico. 

### Operazioni con i pulsanti

Dopo la selezione delle righe ordine da processare nel piano di carico, è possibile effettuare diverse operazioni con i pulsanti della ribbon bar. Se nei parametri non è richiesta la disponibilità obbligatoria, allora potranno essere evase righe senza disponibilità.

- **Inserisci ordine**: trasferisce le righe selezionate nella tab **Preparazione piano di carico**.
- **Note spedizione**: visualizza le *Note spedizione* presenti nel tab *Consegna* dell'*Anagrafica cliente*.
- **Proprietà ordine**: apre lo **Stato evasione** dell'ordine selezionato.
- **Modifica Note piano di carico**: modifica le **Note piano di carico** nel tab *Articoli* dell'ordine cliente.

## Preparazione piano carico

In questo tab vengono proposti i dati per la preparazione del piano di carico. I dati visualizzati di default sono quelli impostati nella tabella [Tipi piano di carico](/docs/configurations/tables/logistics/load-plan-type); gli altri possono essere inseriti manualmente. 

#### Pulsanti specifici
- **Salva**: permette il salvataggio del piano di carico.
- **Imposta vettore**: apre la maschera di ricerca **Vettori** per selezionare uno da associare al piano di carico; esso verrà riportato nella colonna Vettore della griglia.
- **Modifica note vettore**: modifica le note del vettore e riporta le note nella colonna della griglia *Note vettore*.
- **Modifica numero vettore**: consente di dividere la spedizione se lo stesso vettore arriva con più furgoni.
- **Rilascio piano**: rende disponibile il piano per la creazione di altri documenti (es. picking).
- **Sposta in altro piano di carico**: sposta la riga in un piano di carico già esistente, scelto dalla maschera di ricerca.
- **Creazione picking**: crea il *Picking* dal piano di carico; nella maschera è necessario inserire il **Tipo picking**, l'**Operatore** ed è possibile scegliere se creare un picking diverso per ogni ordine o meno. Il picking creato sarà disponibile nella Ricerca picking.

### Gestione dei lotti

Nel caso in cui gli articoli presenti nel Piano di carico fossero gestiti a lotti, i lotti nel picking creato vengono proposti in base alla configurazione:
- Se presenti, vengono proposti quelli nell'ordine cliente, indipendentemente dai flag **Lotti / Serial Number obbligatori** e **Proposta lotti / Serial Number**,  presenti nei [Parametri picking](/docs/configurations/parameters/logistics/picking-parameters/).
- Se non presenti nell'ordine cliente e i flag **Lotti / Serial Number obbligatori** e **Proposta lotti / Serial Number** presenti nei [Parametri picking](/docs/configurations/parameters/logistics/picking-parameters/) sono attivi vengono proposti secondo la **Tipologia prelievo** (FIFO o Data scadenza) presente nel tab Lotti e Serial number dell'anagrafica articolo (se la **Tipologia prelievo** è Manuale il picking verrà creato senza lotti e Serial Number anche se c'è l'obbligatorietà attiva); se il flag **Lotti / Serial Number obbligatori** è attivo, mentre il flag **Proposta lotti / Serial Number** non è attivo, allora non sarà possibile creare il picking perchè non verrebbero proposti i lotti e Serial Number dato che la proposta non è attiva. Invece, con il flag **Lotti / Serial Number obbligatori** non attivo e il flag **Proposta lotti / Serial Number** attivo il picking verrà creato con i lotti proposti secondo la **Tipologia prelievo** (FIFO o Data scadenza) presente nel tab Lotti e Serial number dell'anagrafica articolo, nel caso in cui la *Tipologia prelievo** fosse *Manuale* verrà creato senza. 
- Se entrambi i flag **Lotti / Serial Number obbligatori** e **Proposta lotti / Serial Number** non sono attivi, il picking verrà creato senza lotti e Serial Number.

## Legenda

In questo tab vengono visualizzate le posizioni ed i vani per righe del piano di carico; queste vengono configurate nell'anagrafica dell'*Automezzo*.

## Riepilogo piani di carico

In questo tab viene visualizzato il riepilogo dei dati relativi al *Piano di carico*.

## Riepilogo e approfondimenti

In sintesi, la creazione di un Piano di Carico richiede la ricerca e selezione accurata degli ordini cliente non evasi. Sono disponibili diverse operazioni per ottimizzare il processo, inclusa la preparazione e gestione dei picking. 

Per approfondimenti, consultare i collegamenti ai [Parametri Piani di Carico](/docs/configurations/parameters/logistics/load-plan-parameters) e ai [Tipi piano di carico](/docs/configurations/tables/logistics/load-plan-type).