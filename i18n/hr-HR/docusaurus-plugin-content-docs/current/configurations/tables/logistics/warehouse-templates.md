---
title: Causali di magazzino
sidebar_position: 9
---

Attraverso questa finestra vengono impostate tutte le causali di magazzino che servono alla movimentazione degli articoli da e per i vari magazzini inseriti nell'apposita tabella *Magazzini*.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Causali di Magazzino**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Causali di Magazzino**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

**Magazzino**: in questa colonna l'utente deve impostare, usando l'apposita combo box che richiama i dati dalla tabella *Magazzini*, il codice del magazzino per il quale deve inserire la causale di movimentazione;

**Causale**: in questa colonna l'utente deve inserire il codice della causale di magazzino. Esso può raggiungere una lunghezza massima di 3 caratteri alfanumerici. È possibile creare più causali di magazzino con lo stesso codice, a patto che le causali siano generate per magazzini diversi; due causali con lo stesso codice sullo stesso magazzino non sono quindi ammesse;

**Descrizione**: in questa colonna l'utente deve inserire la descrizione della causale di magazzino, che può raggiungere una lunghezza massima di 80 caratteri alfanumerici;

**Tipo**: in questa colonna l'utente deve inserire *Tipo di movimentazione* che caratterizza la causale. Essa può essere di *Carico*, nel qual caso la quantità del movimento di magazzino creato con quella causale viene salvata nel database come positiva, oppure di *Scarico*, nel qual caso la quantità del movimento di magazzino creato con quella causale viene salvata come negativa;

**Visibile in Acq.**: se attivo, rende visibile la causale nell’area acquisti;

**Visibile in Ven.**: se attivo, rende visibile la causale nell’area vendite;

**Visibile in Prd.**: se attivo, rende visibile la causale nell’area produzione;

**Visibile in C.Lav.**: se attivo, rende visibile la causale nell’area conto lavoro;

**Visibile in Log.**: se attivo, rende visibile la causale nell’area logistica;

**Costo proposto**: in questa colonna l'utente deve scegliere quale costo deve essere proposto automaticamente quando si inserisce un movimento manualmente. Il costo proposto può essere il costo ultimo, il costo medio, il prezzo di vendita oppure il costo standard dell'articolo movimentato. Da notare che i valori proposti vengono ripresi direttamente dall'anagrafica dell'articolo. Inoltre, è molto importante tener presente che il costo proposto ha priorità sui documenti; quindi, le causali di magazzino che saranno usate nei documenti dovranno avere come “Costo proposto” il valore “Nessuno”, in questo modo andrà a prendersi il costo indicato all’interno del documento.

**Agg. C.M.**: tutti i movimenti eseguiti usando una causale che ha questo flag attivato concorrono al calcolo del costo medio ponderato dell'articolo. Da notare che il flag non è attivabile o disattivabile dopo che la causale sia già stata utilizzata anche per un solo movimento di magazzino. Solitamente questo flag si attiva solo per i movimenti di carico, ma può essere attivato anche per i movimenti di scarico, quando si vuole fare in modo che la media ponderata del costo dell'articolo sia calcolata anche considerando i prezzi di vendita legati agli scarichi di magazzino dell'articolo stesso. 
Il costo medio in anagrafica dell'articolo viene aggiornato con l'importo del movimento solo se è attivo anche il flag *Agg. C.Art.*;    

**Agg. C.U.**: tutti i movimenti eseguiti usando una causale che ha questo flag attivato concorrono al calcolo del costo ultimo dell'articolo. Da notare che il flag non è attivabile o disattivabile dopo che la causale sia già stata utilizzata anche per un solo movimento di magazzino. Questo flag si attiva solo per i movimenti di carico. 
Il costo ultimo in anagrafica dell'articolo viene aggiornato con l'importo del movimento solo se è attivo anche il flag *Agg. C.Art.*;    

**Agg. P.V.**: Da notare che il flag non è attivabile o disattivabile dopo che la causale sia già stata utilizzata anche per un solo movimento di magazzino. Questo flag si attiva solo per i movimenti di scarico. 
Il prezzo di vendita in anagrafica dell'articolo viene aggiornato con l'importo del movimento solo se è attivo anche il flag *Agg. C.Art.*;     

**Agg. C.Art.**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Aggiorna Costo Articolo** attivato, vengono aggiornati ripsettivamente il costo medio, il costo ultimo e/o il prezzo di vendita in anagrafica dell'articolo con l'importo del movimento in base a quali dei seguenti flag sono attivi: *Agg. C.M.*, *Agg. C.U.* e *Agg. P.V.*.      

**Int. Fisc.**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Interesse Fiscale** attivato, il movimento stesso viene considerato nel giornale di magazzino e nel calcolo dell'inventario quantità valorizzato, sempre che l'articolo movimentato abbia anch'esso il flag *Interesse Fiscale* attivato sul tab *Generalità*;

**Calc. ABC**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Calcolo ABC** attivato il movimento verrà considerato per il calcolo ABC dell'articolo movimentato;

**P.to riord.**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Punto di Riordino** attivato, il movimento viene considerato dalla procedura che esegue il calcolo del punto di riordino.  
Di solito il flag viene attivato solo le causali di scarico;

**Gest. lotti**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Gestione lotti** attivato il movimento permette l'inserimento del lotto nell'apposita griglia della registrazione di magazzino per un dato articolo che è gestito a lotti.  
Lo stesso procedimento è valido per la gestione a **Serial Numbers**;

**Integra q.tà iniziale**: si utilizza solo con la gestione lotti; permette di incrementare la quantità di un lotto caricato con un movimento precedente mantenendo lo stesso numero di lotto; 

**Crea lotto da lotto**: se attivo, prevede di visualizzare quella causale come causale della procedura “Creazione lotto da lotto” per cambiare un lotto in un altro; quindi, il programma farà automaticamente lo scarico di un lotto e il carico di un altro dello stesso articolo; inoltre, è disponibile anche la procedura “Creazione lotto da lotto con cambio articolo” che permette di scaricare un articolo con un certo lotto e caricare un altro articolo con un altro lotto; per poter attivare questo flag la casuale creata deve essere di “Scarico” e devono essere attivi anche i seguenti flag: “Gest. Lotti”, “Integra q.ta iniziale” ed inoltre, non deve essere attivo il flag “Dist. Base” e deve esserci una causale in “Caus. CPT”;

**Lotti non disponibili**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag *Lotti non disponibili* attivato con il movimento si potranno anche scaricare lotti che si trovano in uno stato che non è disponibile;

**C.U. Lotto**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Costo Ultimo Lotto** e contemporaneamente il costo proposto è il costo ultimo, quando si carica un dato codice lotto, invece di proporre nell'importo del movimento il costo ultimo da anagrafica dell'articolo sarà proposto il costo dell'ultimo carico fatto con tale codice lotto;

**Sca. lotto**: il flag **Scarico Lotto** serve quando è necessario fare in modo che nel documento di vendita (ordine cliente, DDT di vendita o fattura di vendita) la causale di scarico del lotto venga proposta automaticamente nella griglia dei lotti del documento stesso. Sarà infatti la causale designata con questo flag ad essere proposta in automatico dalla procedura; sarà poi facoltà dell'utente sostituirla con un'altra causale a seconda dei casi;

**Crea S/N**: se attivo, permette di abilitare la creazione automatica dei serial number;

**Cons**: i movimenti effettuati con una causale che presenta il flag **Consumo** attivato vengono visualizzati nella finestra di costificazione della commessa di produzione nel tab *Riepilogo Costi e Tempi* nella griglia *Materiali utilizzati*;

**Doc. obbl**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Documento Obbligatorio** attivato, è obbligatorio specificare qualcosa nel campo *Documento di riferimento* della registrazione di magazzino;

**Conto obbl.**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag **Conto Obbligatorio** attivato, è obbligatorio specificare qualcosa nel campo *Cliente/Fornitore* della registrazione di magazzino. Viene usata di solito per le registrazioni relative al consumo e alla consegna materiali di conto lavoro;

**Dist. base**: quando si inserisce un movimento di magazzino utilizzando nella testata della registrazione la causale che ha il flag ‘Distinta Base' attivato allora nel momento in cui si salva la riga del movimento, anziché inserire l'articolo selezionato (che deve obbligatoriamente avere una distinta base) vengono inseriti gli articoli di primo livello della distinta base. Viene spesso usato in causali di scarico di contropartita per scaricare i componenti di un articolo caricato dalla causale principale;

**Gest. InvFis.**: il flag **Gestione Inventario Fisico** consente di decidere quali siano le causali di magazzino che debbano poter essere selezionabili nei *Parametri iniziali di magazzino* come causali da utilizzare nel calcolo delle differenze inventariali. Le registrazioni di magazzino che saranno create automaticamente dalla procedura *Differenze Inventariali* presenteranno in testata le causali di questo tipo;

**Mag. CPT**: in questa colonna l'utente può specificare il codice del **Magazzino di contropartita**, attingendo tramite l'apposita combo box alla tabella dei *Magazzini*. Esso non è altro che il magazzino che deve comparire nel tab *Contropartita* della registrazione di magazzino;

**Caus. CPT**: in questa colonna l'utente può specificare il codice della **Causale di contropartita**. Ciò consente di fare in modo che quando venga creato un movimento di magazzino utilizzando la causale principale, venga automaticamente inserito anche un movimento di segno opposto. Ad esempio, si imposta la causale di contropartita per eseguire spostamenti tra magazzini diversi o per fare spostamenti tra ubicazioni diverse all'interno dello stesso magazzino;

**Rimanenze**: con questo flag l'utente può designare per una sola causale per ciascun magazzino quale debba essere la causale usata dalla procedura *Valorizzazione magazzino* che esegue la chiusura di magazzino per creare le registrazioni carico per inventario iniziale. Per far si che i movimenti creati con questa causale, vengano presi in considerazione dall'*Inventario a quantità valorizzata*, è necessario che siano attivi anche i flag di **Interesse fiscale** e, a seconda della necessità, anche quelli di **Aggiornamento costo ultimo** e **Aggiornamento costo medio**; inoltre, per far si che il movimento di rimanenza creato abbia un costo deve essere anche inserito un valore nel campo **Costo proposto**;       

**Tipo doc. gestionale**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità;     

**Causale contab.**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità;     

**Tipo causale cont.**: si usano nelle localizzazioni estere tipo Romania/Croazia dove i movimenti di magazzino devono essere registrati anche in contabilità;    

**Ubicazione**: in questa colonna, identificata con una casella di colore giallo, l'utente può inserire, attingendo dall'apposito *Help ubicazioni*, che si esplode con un doppio click sulla casella, l' ubicazione predefinita che verrà proposta nel movimento di carico o di scarico qualora non sia passata dalla procedura che crea il movimento. L'impostazione dell'ubicazione di default è di solito utilizzata sulle causali di carico, in quanto lo scarico deve essere effettuato dall'ubicazione sulla quale si trova l'articolo nel momento in cui si esegue lo scarico stesso; quindi, l’ubicazione presente nel documento avrà la priorità su quella presente nella causale di magazzino;

**Ind. Rotaz** **.**: se questo flag è attivo allora le registrazioni create con tale causale vengono considerate nella procedura del calcolo dell'**Indice di rotazione** di magazzino (Stampa);

**Alternative**: l'attivazione di questo flag avviene in contemporanea al flag *Distinta Base*; se attivo, quando si crea un movimento con una causale di scarico che abbia entrambi i flag attivati e uno dei componenti non ha quantità sufficiente per essere scaricato, la procedura controlla se un articolo alternativo (specificato nella distinta base) ha invece quantità sufficiente per essere scaricato in luogo del componente principale;

**Alternative Miste**: l'attivazione di questo flag avviene in contemporanea al flag *Distinta Base*; se attivo, la procedura scarica contemporaneamente più articoli alternativi fino al completamento della quantità necessaria. Esso è strettamente legato al flag *Alternative*;

**Considera movimenti a zero**: con l'attivazione di questo flag l'utente può decidere quali siano i movimenti di magazzino con quantità pari a zero che debbano concorrere al calcolo del costo medio ponderato degli articoli; questa è l'unica causale che permette di inserire un movimento con quanittà pari a zero. Ovviamente il flag viene di solito attivato su casuali che abbiano il flag *Aggiornamento Costo Medio* attivato;

**Tracciabilità**: se attivo, indica che i movimenti generati con questa causale verranno usati per la tracciabilità dei lotti;	

**Scarto**: se attivo, rende visibile la causale per la definizione degli scarti dell’ordine di produzione;	

**Rettifica udc**: se attivo, rende visibile la causale per le rettifiche delle udc.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).