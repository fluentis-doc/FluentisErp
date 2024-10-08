---
title: Dimensioni
sidebar_position: 2
---

:::tip Nota
La tabella è d'interesse solo nelle società con il flag *Controlling* attivo.
:::

La ***Dimensione*** è sostanzialmente un criterio coerente di suddivisione di COSTI e RICAVI all’interno dell’azienda.

La contabilità analitica avrà tipicamente *sempre* una dimensione INDUSTRIALE/DIREZIONALE, che è tipica di tutte le aziende, dove andiamo a suddividere l’azienda nelle varie entità funzionali: in questa dimensione, in sostanza, avremo CENTRO AZIENDALE AMMINISTRATIVO, IL CENTRO DIREZIONE, IL CENTRO DELL’UFFICIO TECNICO, IL CENTRO DEL COMMERCIALE e poi i vari CENTRI PRODUTTIVI ovvero i centri che identificano le singole macchine o raggruppamenti di macchine piuttosto che i gruppi manodopera.

Caso tipico di dimensione alternativa sono i PROGETTI ovvero le aziende che lavorano su PROGETTO o commessa; i progetti sono una dimensione parallela alla dimensione direzionale, e questa dimensione dei progetti accoglierà tutti i costi e ricavi DIRETTI di progetto, mentre riceverà dalla dimensione industriale/direzionale quelli che sono i centri ausiliari e generici come quelli citato poco fa (direzione, amministrazione ecc.): possiamo infatti, attraverso i cost driver, ribaltare i dati da una dimensione all’altra. 

Possiamo anche definire dimensioni alternative dove l’azienda vuole assegnare valori separandoli dalle logiche normali, perché vuole tenere nota di alcuni tipi di costi: es. una dimensione fiere piuttosto che investimenti, o budget d'acquisto.

:::tip Nota
Queste dimensioni alternative, che non impattano nelle logiche del modello industriale/direzionale piuttosto che di progetto, sono normalmente elementi a se stante che possono nascere anche in seguito alla configurazione iniziale.
:::

Vediamo ora quali sono le caratteristiche delle dimensioni:
- Il flag **QUADRATURA OBBLIGATORIA** va ad identificare che questa deve avere quadratura con la contabilità. Non è più la contabilità generale che va quadrata al centro di costo/profitto o commessa ma va quadrata rispetto alla singola dimensione d’analisi che prevede quadratura. Il test di quadratura sarà effettuato solo se la causale contabile di movimentazione prevede a sua volta il blocco al salvataggio di movimenti non quadrati a livello di valorizzazione dei centri;
- Il flag **COMMESSA** indica che la riga dell’analitica viene associata in via prioritaria al progetto per il quale il costo o ricavo è movimentato in modo diretto, e da questo progetto si deriverà un centro di costo da valorizzare, centro che potrà essere un codice generico uguale per tutti i progetti oppure magari un centro legato ad una caratteristica specifica del progetto selezionato;
- Il flag **VINCOLO CONTO/CENTRO** va a dire che si vuole limitare quello che l’utente può fare quando registra in contabilità un centro di questa dimensione: dato che nel piano dei conti possiamo agganciare ad ogni sottoconto di costo e di ricavo uno o più centri aziendali, con questa opzione dico che quello che è inserito nel piano dei conti non può essere modificato dall’utente. In sostanza, un costo di produzione non mi può diventare un costo assegnato al centro direzionale. Il vincolo può essere legato al singolo centro, piuttosto che sulle categorie dei centri;
- Il flag **ABILITA COMMESSA**, invece, serve per poter collegare una commessa di riferimento anche nelle righe della dimensione industriale/direzionale normale, per evitare di gestire due dimensioni differenti.
