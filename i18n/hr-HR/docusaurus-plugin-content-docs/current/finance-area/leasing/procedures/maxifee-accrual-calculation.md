---
title: Calcolo Risconto Maxicanone
sidebar_position: 1
---

Da questa form è possibile ricercare i risconti già calcolati e procedere al calcolo di nuovi risconti annuali per quanto riguarda il maxicanone.

La procedura, in modo simile rispetto alle procedure per le scritture di assestamento del modulo Contabilità, prevedono di eseguire **prima** il **calcolo** del risconto da questa posizione e **poi** di procedere alla sua **contabilizzazione** tramite l'apposita procedura contabile del modulo.

Premendo il tasto nuovo si inizializza la form di inserimento parametri per il calcolo.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

E' necessario specificare l'**Anno** contabile, la **Causale** da utilizzare per la scrittura di rettifica, la **Data** registrazione e di competenza contabile che sarà inserita nella scrittura.

Nonostante l'inserimento della casuale, lo schema della scrittura contabile sarà pilotato dalla logica della procedura.

Dopo aver salvato è possibile premere Calcola per ottenere la proposta dei valori che potranno essere confermati tramite la spunta (spunta tutto per confermare i risconti relativi ai vari leasing presenti) per poi procedere a contabilizzarli.

I valori proposti dal calcolo sono editabili e pertanto possono essere forzati nel caso in cui il calcolo ottenuto necessiti di leggeri aggiustamenti ad esempio nel numero di giorni di competenza calcolati o nei valori risultanti.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

Vengono ripresi **Tipo Leasing**, **Data di stipula**, **Numero Leasing**, **Descrizione** e **Data di estinzione**.

**Totale giorni**: = differenza in giorni tra **data stipula** e **data estinzione**

**Costo giornaliero**: = Valore totale del contratto / Totale giorni:  (dove Valore totale del contratto = Maxicanone + Spese istruttorie e pratica + Sommatoria di (Quota capitale + Quota interessi + Spese per ogni singolo canone)).

**Giorni di competenza**: = numero di giorni intercorrenti tra (la più recente tra data stipula e data inizio esercizio) e Data registrazione impostata per il risconto del maxicanone.

**Costo di competenza**: = Costo giornaliero * Giorni di competenza

**Pagato contab. **: calcolo di quanto pagato nell'esercizio dal punto di vista contabile (canoni contabilizzati + Maxicanone se contabilizzato) 

= Sommatoria del Maxicanone contabilizzato e dei canoni (quota capitale + quota interessi + spese) aventi il flag Contabilizzato attivo (a seguito di manovra di contabilizzazione o impostato manualmente) e la data prevista scadenza per il canone, indicata sulla riga di dettaglio del piano di ammortamento del leasing, minore rispetto alla data di registrazione del risconto maxicanone.

Viene verificato anche che l'anno contenuto nelle date dei canoni e nella testata del leasing (data stipula) siano compatibili, rispetto alla data della contabilizzazione del risconto, con la presenza dei parametri contabili per l'anno in questione.

**Risconto anno precedente**: in questo campo viene riportato il valore del campo Valore risconto relativo all'anno precedente e pertanto il primo anno in cui viene caricato il contratto di leasing a sistema risulterà zero.

**Valore risconto**: in questo campo viene calcolato il valore del risconto da applicare:

= Pagato contab. + Risconto anno prec. - Costo di competenza

**Controllata**: apporre il flag in corrispondenza della riga per abilitare la possibilità di contabilizzare il risconto in quanto approvato il calcolo automatico o dopo aver editato i campi manualmente.

E' possibile mettere il flag su Spunta tutto (sopra la griglia) per approvare massivamente tutti i risconti proposti.

**Contabilizzata**: il flag si attiva in seguito al lancio della contabilizzazione del risconto proposto ed approvato. Vengono inseriti i riferimenti alla scrittura contabile generata.

La procedura di contabilizzazione può essere eseguita dalla presente form attraverso i bottoni sulla ribbon bar oppure, indifferentemente utilizzando la procedura accessibile dal menù delle procedure contabili del modulo.

Sempre da questa posizione è possibile eseguire anche il ripristino della procedura di contabilizzazione.

Il risconto Maxicanone calcolato e contabilizzato come sopra illustrato può essere gestito automaticamente anche nella fase di riapertura automatica conti (attivabile dalla **[Chiusura automatica conti](/docs/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab)**) attivando il flag Giroconto scritture di assestamento.

In questo caso saranno eseguite automaticamente le consuete scritture di riapertura dei risconti per maxicanone, accodandole alle altre scritture automatiche di apertura saldi e giroconti degli altri ratei e risconti attivi e passivi.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)






