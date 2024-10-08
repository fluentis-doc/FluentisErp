---
title: Tipi area - Area
sidebar_position: 5
---

:::tip Nota
Le due tabelle sono d'interesse solo nelle società con il flag *Controlling* attivo.
:::

Possiamo immaginare l'**Area** come una scatola fisica: ogni scatola viene alimentata con valori contabili e valori quantitativi e ogni scatola può avere un suo modello di calcolo diverso e a sé stante. Un’area comprende i dati di tutte le *dimensioni* dei centri e ci permette di manipolare questi dati in modo plurimo con finalità differenti.

E' obbligatorio definire un'area di tipo **Set di regole** e un'area generica da valorizzare con i dati dei **Consuntivi** di periodo. Opzionale è la definizione di un'area di tipo **Budget**, se l'azienda è interessata ad inserire un Budget per centro di costo.

:::tip Nota
Possiamo definire liberamente quante aree di analisi vogliamo. L'obiettivo tipico è quello di simulare *cosa succede se* cambio le regole dei cost driver aziendali, o magari con il fine di applicare configurazioni di costo differenziate.

Altro utilizzo è quello di 'cristallizzare' le elaborazioni del controlling: come avremo modo di spiegare parlando dei cost driver, le elaborazioni del controlling cancellano e ricreano i dati dell'anno che si sta elaborando. Se si vuole storicizzare, ad esempio, il primo *trimestre* per poterlo poi confrontare con i primi 3 mesi del calcolato nell'elaborazione del primo *semestre*, possiamo ottenere questo risultato creando aree consuntive differenti.
:::

Prima di definire le aree dobbiamo codificare i **Tipi di area**, che distinguiamo in 3 tipologie: 
- il *tipo budget*, con il flag omonimo impostato
- il *tipo del set di regole generali*, con il flag omonimo impostato
- la terza tipologia è quella che non è una di queste due precedenti, senza flag impostati

Le **Aree**, di conseguenza, potrebbero essere:
- area di BUDGET con il tipo area BUDGET, dove avremo i dati di budget;
- area CONSUNTIVI, che valorizzeremo tipicamente quando creiamo le chiusure infrannuali e riprendiamo i dati di periodo dalla produzione;
- l’area delle REGOLE STANDARD: questa è un’area che non ha valori, se non qualche misura fisica. E’ l’area depositaria delle regole standard dei cost driver. Se sto elaborando, ad esempio, l’area dei consuntivi e sto cercando di ripartire il mio costo per gli affitti tramite un cost driver, se trovo un Cost driver specifico per i consuntivi Fluentis userà quella, altrimenti andrà a ricercare dalle regole generali valide di default collegandole all'area *set di regole*

