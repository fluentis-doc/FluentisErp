---
title: Sottoscorta
sidebar_position: 3
---

La stampa si trova sul percorso **Logistica > Magazzino  >  Stampe gestionali > Sottoscorta** e permette all'operatore di effettuare dei controlli al fine di gestire correttamente le scorte. In particolare è possibile, dopo aver opportunamente compilato l'anagrafica articoli, interrogare il sistema per ricercare gli articoli che in futuro andranno in sottoscorta. E' inoltre possibile, una volta eseguita la procedura, emettere le richieste di acquisto in automatico e nei tempi corretti per gli articoli che vanno in sottoscorta.

**Tabelle e parametri**

Una serie di impostazioni di natura sia tabellare precodificata, che anche una corretta parametrizzazione degli algoritmi di base, sono consigliate prima di procedere con l'esecuzione del sottoscorta:
- in *Anagrafica articoli* è necessario compilare il tab *Approvvigionamento* e in particolare i dati per l'approvvigionamento.        
- nei *Parametri MRP* degli articoli che si desidera gestire con il sottoscorta è necessario che la *politica di gestione sia a scorta*.        
- la Scorta minima deve essere minore o uguale al Punto di riordino.

Inoltre va tenuto in considerazione quanto segue:
- se la Scorta minima o la Scorta massima non sono valorizzate sull'articolo, vengono ricavate dalle scorte per ubicazione.
- gli articoli con Scorta minima e Punto di riordino entrambi a zero, o con Scorta massima valorizzata ma inferiore alla Scorta minima, non vengono considerati dal calcolo.
- è consigliato che i Giorni per il riordino siano maggiori di zero: con valore zero il consumo medio risulta nullo e l'articolo viene proposto solo se la disponibilità è già inferiore al Punto di riordino.

**Calcolo**

Il calcolo del sottoscorta utilizza un algoritmo che si basa sul consumo medio giornaliero calcolato dal tab *Approvvigionamento* dell'*Anagrafica articoli*.

Si parte quindi dalla giacenza al momento dell'elaborazione e si controlla se alla data richiesta, tramite il consumo medio, si va o meno in sottoscorta.
I giorni sono giorni lavorativi, secondo il calendario aziendale, e il calcolo parte dalla data odierna. 
L'articolo risulta in sottoscorta se, alla data richiesta, la giacenza prevista scende sotto il Punto di riordino; i movimenti previsti prima di tale data (ad esempio l'arrivo di ordini) vengono considerati.

    Consumo Medio Giornaliero = (Punto di riordino - Scorta minima) / Giorni per il riordino

    Quantità da riordinare = Punto di riordino + Consumo Medio nel periodo − Giacenza

**Procedura**

La procedura permette di scegliere: **Articolo** (classe, codice articolo, descrizione), eventuale **Variante** solo per articoli gestiti a variante, la **Data** limite fino alla quale si vuole calcolare il sottoscorta. E' inoltre possibile abilitare la **Creazione automatica delle richieste di acquisto** per gli articoli in sottoscorta. Se viene attivata questa funzione è necessario specificare il **Tipo** richiesta documento e, volendo, una **Nota** da inserire in testata richiesta di acquisto.

Dopo l'inserimento di questi filtri premere il pulsante **Esegui** per elaborare i dati.

La griglia di risultato dell’esecuzione rappresenta l’elenco delle elaborazioni effettuate specificando **Numero** e **Data elaborazione**.

È importante notare che nella procedura del sottoscorta quando la RDA viene generata e la disponibilità è inferiore al Punto di Riordino, se per l’articolo non è stato impostato un valore di *scorta massima*, la quantità richiesta sarà pari a **Punto di Riordino + Consumo Medio nel periodo – Disponibilità**; mentre, se è presente anche il valore di *scorta massima*, la quantità richiesta sarà pari a **Scorta max – Scorta min (o Lotto economico, se maggiore di Scorta max)**.

Il lotto economico e il multiplo, se definiti, vengono rispettati nella quantità richiesta. Se una sola quantità non copre il fabbisogno fino alla data richiesta, per lo stesso articolo vengono generate più righe.

:::note Nota
Da notare che nel caso in cui l'articolo sia di tipo approvvigionamento *Acquisto* verrà creata la richiesta di acquisto ma non la commessa, mentre nel caso in cui l'articolo sia di approvvigionamento *Produzione* o *Conto lavoro* allora verrà creata la relativa commessa,
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form di stampa fare riferimento al seguente link [Anteprima e stampa](/docs/guide/common/operations-with-data/reports).