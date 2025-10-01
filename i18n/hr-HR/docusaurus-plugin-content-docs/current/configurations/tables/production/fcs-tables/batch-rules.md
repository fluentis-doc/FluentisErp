---
title: Regole di accorpamento macchina
sidebar_position: 3
---

La tabella si trova sul percorso **Tabelle > Produzione > Tabelle F.C.S. > Regole di accorpamento macchina**.

I dati presenti in questa tabella sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Ogni regola di accorpamento è definita tramite un solo record di questa tabella. 

**Campi Specifici**

> **Elemento da considerare**: va selezionato l'elemento in base al quale calcolare il livello di riempimento della macchina (una delle dimensioni lineari degli articoli, oppure il volume, oppure il peso, o si può impostare il numero massimo di lavorazioni a prescindere dalle dimensioni degli articoli, o la somma totale del numero pezzi da lavorare). Nel caso di valore dimensionale, il relativo valore ricavato dalla anagrafica articolo verrà moltiplicato per la quantità dell'ordine di produzione, a meno che il flag "Quantità indipendente" non sia stato selezionato.      
> **Valore minimo**: valore minimo di riempimento della macchina affinchè venga avviata.      
> **Valore massimo**: valore massimo di riempimento della macchina. Se le lavorazioni con lo stesso codice di accorpamento superano questo limite, lo schedulatore gestirà più sessioni di lavoro della macchina, creando un task per ciascuna di esse.     
> **Quantità indipendente**: se questo flag è selezionato, il valore dimensionale dell'articolo al quale la regola fa riferimento, non verrà moltiplicato per la quantità dell'ordine di produzione.          
> **Accorpa solo ordini con la stessa quantità**: se questo flag è selezionato, verranno accorpate le fasi aventi lo stesso codice di accorpamento e la stessa quantità da produrre. 
Lo schedulatore creerà per queste fasi un codice accorpamento fittizio come stringa che concatena il codice di accorpamento e la quantità da produrre.           
> **Note**: permette di inserire una nota libera.            

:::note Nota
Notare che, se per il centro di lavoro non fosse stato abilitato il flag di tempo fisso di lavorazione, potremmo avere fasi da lavorare con lo stesso codice di accorpamento e tempi di lavorazione diversi (tempo di lavorazione unitario x quantità da produrre).          
In questo caso verrebbe considerato come tempo di lavorazione il maggiore tra le fasi da accorpare (ipotesi pessimistica e cautelativa).          
Durante la fase di importazione dati che precede l’avvio della schedulazione, il sistema elencherebbe dei warning nella lista degli errori di importazione, per ricordarci che verrà considerato il tempo di lavorazione maggiore.
:::

**Ricerca Regole di accorpamento macchina**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Regole di accorpamento macchina**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e **Elemento da considerare**.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).