---
title: Introduzione
sidebar_position: 2.0
---

L'area Controlling si compone di una serie di moduli che possono assolvere obiettivi differenti: 

- un primo obiettivo potrebbe essere quello di simulare, in pochi passaggi automatici, un bilancio contabile infrannuale attraverso il modulo delle *Chiusure infrannuali*. Per far questo non c'è niente di particolare da configurare in ***FluentisERP*** : basta entrare nel modulo e creare una nuova Chiusura conti infrannuale che calcola i saldi extracontabili riprendendoli dalla contabilità, per poi aggiungere  con le varie procedure automatiche ratei, risconti, ammortamenti, rimanenze, fatture da ricevere, ed infine eventuali ulteriori operazioni manuali di completamento del bilancio. Non resterà altro che procedere alla stampa del Bilancio ottenuto, magari consolidando più
 società in un unico prospetto intercompany tramite la procedura di *Consolidamento*.

- ma possiamo estendere l'uso di questi dati aggregandoli e riclassificandoli attraverso il modulo delle *Riclassificazioni*, all'interno del quale l'utente può sfruttare alcuni modelli preinstallati tramite il [***Fast start***](/docs/guide/fast-start) piuttosto che costruirsi i propri [*modelli*](/docs/controlling/reclassifications/create-reclassification-model) liberamente. Avremo qui a disposizione sia le stampe di questi riclassificati, che una potente funzione di comparazione dove mettere a confronto liberamente gli N riclassificati memorizzati, anche di anni precedenti, al fine di valutarne gli scostamenti. L'utente dovrà fare solo attenzione ad allineare i modelli già preconfigurati con gli eventuali codici di Piano dei conti che dovesse aver personalizzato rispetto al [***Fast start***](/docs/guide/fast-start) iniziale.
Ma siamo ancora ad un livello *contabile* di controlling.

- possiamo poi andare a configurare un vero e proprio sistema di Controllo di gestione, basato sulla struttura multilivello e [*multidimensionale*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) dei [***Centri aziendali***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers). Anche qui, però, si aprono più strade:
    - Potremo limitarci a configurare un'unica dimensione di analisi con una lista di centri da collegare alle sole anagrafiche d'uso contabile e quindi sostanzialmente utilizzare nuovamente solo i due moduli già citati delle *Chiusure infrannuali* e i *Riclassificati* (questa volta con un modello personalizzato basato sui centri aziendali specifici definiti in azienda), limitando quindi l'impatto della configurazione alle sole tabelle *Dimensione*, *Centri aziendali*, *Tipi area* e *Area*;
    - piuttosto che spingerci a integrare nelle nostre analisi dati quantitativi extracontabili o di produzione (*ore* e *quantità*), ammortamenti tecnici, definendo magari anche più dimensioni di analisi (per linea di business, piuttosto che per progetto/commessa) ed ottenere sia tariffe consuntive dei centri produttivi che un conto economico a margine di contribuzione, o magari una consuntivazione a full costing dei vari progetti/commesse di vendita.
A seconda della complessità aziendali e dei risultati richiesti, entreranno quindi in gioco le tabelle dei [*Cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), degli agganci dei centri aziendali nelle *macchine* e *gruppi manodopera* piuttosto che nelle varie wbs di progetto e attività del personale.

- a questi risultati poi 
    - potremo agganciare la gestione di un *Budget* per centro di costo, al fine di valutare gli scostamenti tra il previsionale e il consuntivo simulato del periodo d'interesse
    - potremo allineare le simulazioni di *Costo prodotto*, basate normalmente sugli standard di costo agganciate alle distinte base.

Completa l'area il modulo delle *Previsioni di vendita*

In questa sezione di panoramica generale andremo a dare le indicazioni logiche dei passi da seguire per chi vuole implementare un sistema di controllo di gestione ***completo***.

:::tip Nota
Non è quindi facile definire un percorso formativo lineare ed univoco dell'area, visto che magari nella stessa azienda due utenti differenti potrebbero utilizzare moduli e opzioni differenti fra loro.
Cercheremo quindi, dove necessario, di dettagliare i vari possibili obiettivi d'uso delle varie procedure.
:::