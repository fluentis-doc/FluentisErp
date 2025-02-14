---
title: Confezionamento
sidebar_position: 8
---

:::important A cosa serve
Il tab di confezionamento dell'anagrafica articoli di Fluentis è essenziale per definire la modalità di confezionamento di un articolo, specificando i tipi di Unità di Carico (UDC) che lo compongono. Questa configurazione può avere una struttura ad albero, nel quale un pallet, ad esempio, può contenere diverse scatole, ognuna delle quali a sua volta può contenere un certo numero di articoli.

Definire accuratamente il confezionamento è fondamentale poiché permette di generare automaticamente le UDC necessarie per la spedizione nel momento in cui si prepara un ordine. 

Inoltre, è possibile associare specifiche unità di misura per il volume e definire la descrizione per cliente o fornitore, permettendo così una gestione personalizzata a seconda delle esigenze specifiche di ciascun cliente. Questo tab si configura quindi come uno strumento chiave per ottimizzare la logistica e la gestione dei magazzini
:::

Attraverso questo tab si va a definire la modalità di confezionamento dell'articolo definendo quali sono i tipi di unità di carico  che lo compongono.

Può essere una struttura ad albero in quanto per esempio possiamo stabilire come metodo di confezionamento il pallet, che al suo interno può aver un determinato numero di scatole che possono contenere un determinato numero di articoli.

Definire il confezionamento consente di creare attraverso il sistema le unità di carico necessarie per la spedizione nel momento in cui dobbiamo preparare un ordine per la spedizione;

La finestra si compone di una griglia all'interno della quale si vanno ad inserire le seguenti informazioni:

**Tipo unità di carico / Tipo unità di carico  contenuto**: in questi campi si vanno ad inserire il tipo di unità di carico  quindi il tipo di imballo, e il tipo di contenuto selezionando la voce interessata tramite la relativa combo; i dati presenti nelle combo di questi campi sono stati precedetemene codificati nella relativa tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);

**Quantità**: in questo campo si indica la quantità che quell'unità di carico può contenere;

**Priorità**: in questo campo di va ad indicare la priorità del confezionamento (per esempio se abbiamo un pallet al cui interno abbiamo delle scatole, bisognerà dare la priorità in modo che quando il sistema va a creare le unità di carico sappia già la priorità di confezionamento);

**Conto / Sottoconto / Descrizione cliente/fornitore**: in questo campo viene inserito il cliente/fornitore che richiede questo tipo di unità di carico. Quindi è possibile definire diverse unità di carico a livello di singolo cliente;

**Dimensione Unità di misura**: in questo campo si va a selezionare l'unità di misura per le dimensioni dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);  

**Altezza / Larghezza / Profondità**: in questi campi di vanno a specificare le dimensioni dell'unità di carico completa; all'inserimento del **Tipo unità di carico** questi valori vengono riportati dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) solo nel caso in cui anche il flag **Volume variabile** (presente sempre in Tipi unità di carico) sia disattivato; altrimenti i dati non verranno proposti e dovranno essere inseriti manualmente dall'operatore data l'impossibilità di prevedere come vengano posizioni gli articoli sull'unità di carico selezionata. In ogni caso possono essere modificati manualmente, ed ad ogni loro modifica verrà ricalcolato anche il **Volume**;

**Unità di misura volume**: in questo campo si andrà ad indicare l'unità di misura del volume dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);  

**Volume**: in questo campo si andrà ad indicare il volume dell'unità di carico completa. Se il flag **Volume variabile** è attivo, all'inserimento del **Tipo unità di carico** questo valore viene calcolato sommando il valore del volume dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) e il valore del volume dell'articolo (preso dal campo *Volume* presente nel tab Pesi / Dimensioni dell'anagrafica articolo moltiplicato per la relativa quantità) dal volume delle unità di carico contenute; invece, se il flag **Volume variabile** non è attivo, all'inserimento del **Tipo unità di carico** verrà riportato direttamente il valore del volume dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) dato che questo non è variabile. Nel caso in cui venissero modificate le dimensioni di **Altezza / Larghezza / Profondità** il valore del **Volume** sarà ricalcolato di conseguenza. Il **volume** verrà ricalcolato anche se ci fossero delle variazioni nel volume del **Tipo unità di carico  contenuto**. Questo valore può sempre essere modificato manualmente;

**Volume variabile**: indica che si tratta di un'unità di carico con volume variabile, quindi il volume totale varierà a seconda di che cosa e come ci verrà caricato; è campo in sola lettura valorizzabile nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);

**Unità di misura Peso**: in questo campo si andrà ad indicare l'unità di misura del peso dell'unità di carico; all'inserimento del **Tipo unità di carico** questo valore viene riportato dalla tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types);     

**Peso**: in questo campo si andrà ad indicare il peso dell'unità di carico completa; all'inserimento del **Tipo unità di carico** e della **Quantità** questo valore viene calcolato sommando al peso dell'unità di carico a vuoto presente nella tabella [Tipi unità di carico](/docs/configurations/tables/logistics/loading-unit-types) il peso degli articoli (preso dal campo *Peso lordo* presente nel tab Pesi / Dimensioni dell'anagrafica articolo moltiplicato per la relativa quantità) o dal peso delle unità di carico contenute. Questo valore può sempre essere modificato manualmente;

**Tolleranza dimensioni/Tolleranza quantità**: sono utilizzati nelle personalizzazioni e servirebbero quando da un piano di carico si crea una lista di prelievo UDC con le unità di carico disponibili a magazzino. La procedura dovrebbe inserire nella lista UDC, unità di carico con dimensioni o quantità che differiscono da quelle specificate nel confezionamento per le percentuali specificate. Attualmente non sono utilizzati a standard;                

**Dimensioni obbligatorie**: se attivo, questo flag sta ad indicare che le dimensioni indicate sono tassative;

**Unità di carico obbligatoria**: se attivo, questo flag sta ad indicare che questo articolo deve essere obbligatoriamente gestito tramite unità di carico nelle dichiarazioni di produzione e nel ricevimento merci del WMS;

**Descrizione tipo unità di carico / Descrizione Tipo unità di carico contenuto**: in questi campi, una volta inseriti il tipo unità di carico e il tipo unità di carico contenuto , si visualizzeranno automaticamente le descrizioni dei tipi selezionati.
