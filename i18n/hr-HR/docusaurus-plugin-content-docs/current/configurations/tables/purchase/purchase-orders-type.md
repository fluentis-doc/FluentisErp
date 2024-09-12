---
title: Tipi ordini fornitori
sidebar_position: 10
---

La tabella si apre tramite il percorso **Tabelle > Acquisti > Tipi ordini fornitori** e viene utilizzata per determinare le proprietà di un ordine.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Tipo/Descrizione**: campi obbligatori per definire il tipo e la descrizione dell'ordine cliente;

**Tipo num./Descrizione**: campo obbligatorio per la [numerazione](/docs/configurations/tables/fluentis-numerations) da associare al tipo ordine;

**Autoevasione**: se settato, l'ordine può essere evaso da documenti DDT di acquisto, ricevimento merci e fatture di acquisto;

**Cash Flow**: se settato, il tipo ordine concorre al calcolo del cash flow;

**Mag./Descrizione magazzino**: magazzino di arrivo della merce contenuta in ordini di questo tipo ordine;

**Causale/Descrizione causale**: casuale di movimentazione della merce in arrivo contenuta in ordini di questo tipo ordine;

**Controllo disponibilità**: se settato, gli ordini di questo tipo concorrono al calcolo della disponibilità;

**Agricola acquisti IVA**: se attivo, in fase di creazione ordine, il sistema controlla se per l'articolo utilizzato è presente un codice dell'IVA agricola, se non esiste viene preso il codice IVA normale.

**Righe documento raggruppate**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice.

**Listini da aggiornare: **serve per far aggiornare in automatico i prezzi di listino in base ai prezzi specificati in ordine. Se tale flag non è selezionato, sarà comunque possibile, sulle righe dell'ordine, far aggiornare manualmente il valore del listino in  base al prezzo indicato sulla riga.

**Tipo DDT**: è la tipologia di DDT di acquisto utilizzato in automatico quando dalla ricerca ordini fornitori si vuole creare il DDT evadendo completamente l'ordine selezionato. 

**Stampa**: permette di indicare il modello di stampa che verrà utilizzato in fase di stampa dell'ordine e, mediante il campo **Numero copie**, il numero di copie del documento che sarà proposto di default per la stampa.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).