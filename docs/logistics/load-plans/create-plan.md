---
title: Creazione Piano di Carico
sidebar_position: 2
---

Il **Piano di carico** è un documento che viene creato tra l'ordine cliente e il picking.        

## Ricerca ordini cliente

Il punto di partenza per la creazione di un piano di carico è la ricerca e selezione degli ordini clienti da inserire nel piano. Dalla sezione di filtro è possibile effettuare una ricerca avanzata sugli ordini che si vuole evadere tra quelli *Non evasi* o *Parzialmente evasi*.      
Di default vengono proposte come Da data consegna e A data consegna le date di inizio e fine della settimana corrente, ma possono essere impostate anche diversamente. 
Nei [Parametri Piani di Carico](/docs/configurations/parameters/logistics/load-plan-parameters) è infatti possibile cambiare le date consegna proposte per la ricerca, scegliere se visualizzare anche righe articoli presenti in piani di carico aperti e impostare colori diversi per riga, a seconda che ci sia la disponibilità necessaria per evadere l’ordine o meno.

Il flag **Visualizza ordini con data consegna in giorno escluso** permette di visualizzare in griglia anche gli ordini che hanno una data bloccata (es. festiva) sul calendario.         
**Visualizza ordini con data consegna corretta** permette di visualizzare gli ordini con una data valida.           
E' possibile aprire gli Ordini con il doppio click.           

Di seguito riportati alcuni dei dati presenti nella griglia dei risultati:         
**Tipo**: contiene la [tipologia](/docs/configurations/tables/sales/sales-order-types) dell'ordine cliente, seguito dai dati dell'ordine come il **Numero**, la **Data**, l'**Articolo**, ecc.;         
**Note**: sono consultabili le note delle righe ordine e le note del piano di carico;       
**Quantità**: riporta la quantità totale della riga articolo nell'ordine;        
**Quantità residua**: riporta il residuo dell'ordine non ancora evaso;          
**Ordine presente in altro piano carico**: questo flag indica che l'ordine è già presente in un altro piano;         
**Ordine presente in altro piano carico aperto**: questo flag indica che l'ordine è già presente in un altro piano aperto; questi due flag sono utili se l'utente non imposta diversi colori per le righe (nei [parametri](/docs/configurations/parameters/logistics/load-plan-parameters));          
**Articolo**: in questa colonna è possibile inserire la quantità dell'articolo che si vuole evadere; questa quantità può essere diversa dalla quantità residua.           

Dopo la selezione delle righe ordine da processare nel piano di carico, è possibile effettuare diverse operazioni con i pulsanti della ribbon bar. Ricordiamo che se nei parametri non è richiesta la disponibilità obbligatoria, allora potranno essere evase righe senza disponibilità.           

**Pulsanti specifici**       
> **Inserisci ordine**: questo pulsante trasferisce le righe selezionate nella tab **Preparazione piano di carico**; 
> **Note spedizione**: questo pulsante permette di visualizzare le *Note spedizione* presenti nel tab *Consegna* dell'*Anagrafica cliente*;               
> **Proprietà ordine**: questo pulsante apre lo **Stato evasione** dell'ordine selezionato;       
> **Modifica Note piano di carico**: questo pulsante permette di modificare le **Note piano di carico** inserite nel tab *Articoli* dell'Ordine cliente.        

## Preparazione piano carico

In questo tab vengono proposti i dati per la preparazione del piano di carico. I dati visualizzati di default sono quelli impostati nella tabella [Tipi piano di carico](/docs/configurations/tables/logistics/load-plan-type), gli altri possono essere inseriti manualmente.      

**Pulsanti specifici**         
> **Salva**: permette il salvataggio del piano di carico;     
> **Imposta vettore**: questo pulsante permette di aprire la maschera di ricerca **Vettori** e selezionarne uno da associare al piano di carico; esso verrà riportato nella colonna Vettore della griglia;      
> **Modifica note vettore**: questo pulsante permette di modificare le note del vettore e riporta le note nella colonna della griglia *Note vettore*;       
> **Modifica numero vettore**: se lo stesso vettore arrivasse, per esempio, con più furgoni, potrei dividere la spedizione;       
> **Rilascio piano**: questo pulsante rende disponibile il piano per la creazione di altri documenti (ad esempio il picking);    
> **Sposta in altro piano di carico**: questo pulsante sposta la riga in un piano di carico già esistente, scelto dalla maschera di ricerca;      
> **Creazione picking**: questo pulsante permette di creare il *Picking* dal piano di carico; nella maschera è necessario inserire il **Tipo picking**, l'**Operatore** ed è possibile scegliere se creare un picking diverso per ogni ordine o meno. Il picking creato sarà disponibile nella Ricerca picking.         

## Legenda

In questo tab vengono visualizzate le posizioni ed i vani per righe del piano di carico; queste vengono configurate nell'anagrafica dell'*Automezzo*.     

## Riepilogo piani di carico

In questo tab viene visualizzato il riepilogo dei dati relativi al *Piano di carico*.