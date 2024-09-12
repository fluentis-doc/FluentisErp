---
title: Categorie cespiti per il controllo
sidebar_position: 2
---

:::note Percorso
**Tabelle > Controlling > Contabilità analitica > Categorie cespiti per il controllo**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

Questa tabella serve per definire una serie di logiche standard di GESTIONE DEI CESPITI. 

In particolare CONTI DI COSTO e di FONDO specifici per il controllo di gestione. 

Le logiche del controllo di gestione, relativamente ai cespiti, si discostano da quelle contabili al fine di utilizzare delle logiche legate, ad esempio, alle quantità prodotte da un determinato macchinario, piuttosto che ad un valore di riacquisto.
Facendo questo si evitano le distorsioni legate, ad esempio, ai criteri di ammortamento contabili che sono fortemente influenzati dalle logiche fiscali. 

I dati contabili e dunque i movimenti sui sottoconti contabili degli ammortamenti, andranno successivamente conguagliati, ovvero riconciliati, con i calcoli effettuati nel modulo controlling.


:::note Campi tabella

**CODICE / DESCRIZIONE:** Necessari per per distinguere e richiamare le varie logiche che si stanno codificando

**Conto / Sottoconto / Descrizione COSTO:** Widget per inserire il conto contabile desitnato ad accogliere la quota di ammortamento calcolata in modo specifico per il controlling rispetto alla quota ordinaria calcolata per la contabilità

**Conto / Sottoconto / Descrizione FONDO:** Widget per inserire il conto contabile desitnato ad accogliere l'incremento del fondo ammortamento calcolato in modo specifico per il controlling rispetto alla  la contabilità generale

**BASE DI CALCOLO:** Valore sul quale sarà calcolato l'ammortamento per il controlling

> VALORE PATRIMONIALE: il valore di bilancio che sarà la base imponibile dell’ ammortamento 

> VALORE OGGETTIVO: un dato extra-contabile del cespite

> VALORE DI RIACQUISTO: dato specifico del controlling basato sul costo di riacquisto del bene.

**TIPO DI CALCOLO:** Metodo di calcolo che sarà usato nel calcolo ammortamento per il controlling

> PERCENTUALE: sempre un residuo fino a fine vita utile

> PERCENTUALE PERPETUA: finché utilizzo quel cespite, continuo ad ammortizzarlo.

> QUANTITA’: quantità totale che il cespite può produrre nella sua vita utile

> QUANTITA’ PERPETUA: Se continuo a registrare quantità prodotte su quel centro aziendale/cespite continuerò ad ammortizzare ed a assegnare i costi rispetto alla quantità che produco. 

**PERCENTUALE:** Aliquota percentuale per il calcolo della quota di ammortamento (specifica per il controlling)

**USA ATTUALIZZAZIONE PERCENTUALE:** Il flag, riportato anche nella corrispondente tab *Ammortamento per controlling* presente nella scheda cespite, se attivato, fa si che il valore del cespite venga incrementato di anno in anno in base al valore impostato nel campo *Fattore di attualizzazione* nei ** [*Parametri di contabilità* ](/docs/configurations/parameters/finance/accounting-parameters) **. Questa impostazione ha effetto unicamente ai fini dell'ammortamento calcolato in mdo specifico all'interno del modulo Controlling.

**RICREARE I VALORI DI CONTROLLO:** Permette, se attivo, di ricalcolare lo storico dei dati del controlling a seguito del cambiamento di qualche logica. (Ad esempio se ho cambiato in corsa qualche percentuale o caratteristica di quella categoria). 

:::

---

:::tip Nota

Le categorie inserite in questa tabella, con i relativi settaggi, saranno poi richiamate all'interno delle [**schede cespite**](/docs/finance-area/fixed-assets/fixed-assets-management) nella tab *Ammortamento per controlling*, per associare il singolo cespite alla categoria.

:::