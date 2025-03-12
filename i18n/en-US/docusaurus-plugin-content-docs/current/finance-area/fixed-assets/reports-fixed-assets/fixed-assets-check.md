---
title: Controllo cespiti
sidebar_position: 4
---

Con questo report è possibile eseguire una quadratura, conto per conto, tra le registrazioni contabili relative al cespite selezionato e le risultanze del libro cespiti.

Vengono confrontati i totali presenti a modulo cespiti rispetto ai totali presenti in contabilità generale. Il risultato del report sarà una lista di conti contabili (individuati dalle categorie cespiti selezionate nella form e valorizzate a modulo cespiti) con i relativi valori totali rilevati nei due moduli di Fluentis, al fine di facilitarne la verifica della quadratura.

La form di parametrizzazione della stampa è simile a quella delle altre stampe disponibili nel modulo cespiti, pertanto evidenziamo 3 campi in particolare:

**Data riferimento:**  viene impostato di default con la data odierna ed è la data finale che Fluentis utilizzerà per la ricerca dei dati all’interno del modulo cespiti: in sostanza, prenderemo tutti i valori patrimoniali che sono minori-uguali a questa data (quindi tutto l’attivo e tutti i fondi fino a questa data) mentre andremo a leggere i soli ammortamenti nell’anno, fino a questa data.


**Da data - a data**: obbligatorio per poter eseguire il report, sarà invece il periodo di ricerca dei dati all’interno della contabilità generale: per ogni sottoconto (attivo, fondo, ammortamento) utilizzato nei cespiti delle categorie selezionate si andrà a calcolare il saldo contabile all’interno di questo range di date.
Nell’ottica di controllo di quadratura di fine anno, quindi, andremo a impostare la data riferimento 31/12/yyyy e il range come 01/01/yyyy – 31/12/yyyy.


**Flag Dettagli operazioni**: attivando questo flag viene creato un dettaglio per ogni data movimentata al fine di capire se per ogni data registrazione esiste il relativo movimento nella scheda cespite.

Il report visualizza la lista dei conti utilizzati nei cespiti delle categorie selezionate, la colonna con il valore ottenuto dal modulo cespiti, quello dalla contabilità e poi l’eventuale differenza tra i due.

