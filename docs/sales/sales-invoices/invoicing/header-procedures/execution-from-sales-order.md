---
title: Evasione da ordini clienti
sidebar_position: 1
---

Nella testata della fattura, premendo il pulsante **Evasione da ordini clienti** si aprirà la form dove è possibile filtrare gli ordini relativi al cliente del documento.

Tramite questa procedura è possibile creare una fattura di vendita dall'evasione del relativo ordine cliente. E' quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:
 -  i/il cliente degli ordini deve essere lo stesso della fattura;
 -  l'ordine che si vuole evadere deve avere impostato il flag *Stampato* e la *Data conferma ordine*;
 -  i tipi documento devono essere compatibili: nella tabella dei *Tipi ordini* il tipo ordine che si vuole evadere deve avere impostato il tipo fattura corrispondente, mentre nella tabella dei *Tipi fatture* deve essere presente il flag su *Ordine* (che indica che la fattura deriva da un ordine);

Si dovrà poi andare ad impostare nella testata della nuovo DDT, il *Tipo DDT* che si vuole creare (che deve corrispondere a quello impostato nella tabella dei *Tipi ordini*) e il *Cliente*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

*Procedimento*:

I filtri per cliente e divisa verranno riportati in automatico in base al cliente selezionato nella fattura.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun ordine stampato, confermato e non evaso oppure evaso parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate(es: aggiornamento listini).
:::

:::note Nota
Le righe di tipo Nota saranno sempre visibili, anche se già evase, fino a quando tutte le righe delle altre tipologie saranno evase.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare l'*ordine per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga ordine.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* ma solo per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nella fattura.

*Pulsanti specifici:*

> **Ricerca**: permette di cercare gli ordini.  
> **Trasferimento**: permette di trasferire i dati dell'ordine selezionato all'interno della nuova fattura.  
> **Evasione forzata dell'ordine**: permette l'evasione forzata dell'ordine.  
> **Evasione ordini**: permette l'evasione dell'ordine.  
> **Espandi**: permette di espandere l'intero albero degli ordini nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi**: permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe ordine.  
> **Seleziona tutti**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista. 