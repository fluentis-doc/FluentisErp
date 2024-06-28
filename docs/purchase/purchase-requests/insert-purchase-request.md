---
title: Inserimento richiesta di acquisto
sidebar_position: 3
---

Questa funzionalità permette di inserire una nuova richiesta d'acquisto che dovrà poi essere approvata con l'aiuto del pulsante **Autorizzazione RdA**.

**Tipo**: è un campo obbligatorio. A seconda del **Tipo RDA** scelto, saranno attivate alcune funzionalità quali ad esempio il controllo della disponibilità. All'inserimento del tipo verranno compilati anche **Data/Anno/Numero**;           
**Annotazioni**: inserire note visibili a livello di RDA;             
**Stato richiesta**: non editabile. Visualizza lo stato di evasione dell'intera richiesta considerando lo stato evasione di ogni singola riga articolo.

Successivamente è presente la griglia Articoli con i relativi dati. 

**Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse.

import ClassDescription from './../../import/sections/item-class-description.md'

<ClassDescription />

import Variant from './../../import/fields/item-variant.md'

<Variant />

**Evaso forz.**: è possibile impostare l'evasione forzata per la riga selezionata. In questo modo, non verrà fatto il carico di magazzino.

Questa tab si suddivide a sua volta in diverse tab.

### Dati Articoli{#items-data}

Sono tutti campi informativi che vengono presi di default dall'articolo/fornitore. È possibile comunque sovrascrivere tali informazioni a livello di riga.
Il flag **Autorizzata** può essere inserito attraverso il bottone della ribbon bar **Autorizzazione RDA**; da questo momento il documento è considerato confermato.

### Analitica

Contiene campi relativi alla contabilità analitica. Vengono riportati i centri di costo/profitto sui quali sono distribuiti i valori dei prodotti acquistati. Questi dati possono essere inseriti: manualmente oppure automaticamente, nel caso in cui i centri di costo/profitti sono stati inseriti precedentemente nell'anagrafica del contatto, anagrafica articolo oppure nel piano dei conti.

### Documenti allegati

Viene visualizzato il dettaglio di un eventuale documento allegato (nome, tipo di documento, eventuali note, ns/vs riferimento). Per le istruzioni relative a come allegare un documento si rimanda all'articolo  [Allega documenti](/docs/guide/operations-with-data/attach-documents).

### Generatore RDO

In questa tab vengono riportati i fornitori preferenziali presenti nell'anagrafica articolo selezionato in griglia con i relativi dati. Da questa tab è possibile quindi scegliere il miglior prezzo. 
E' possibile in alternativa inserire manualmente il fornitore da considerare per questo articolo. 
La presenza di almeno una riga in questa tab fa attivare il bottone della ribbon bar **Generazione RDO**. Cliccando questo bottone, verrà creata la Richiesta di Offerta per le righe selezionate. Il documento creatò sarà consultabile nella ricerca RDO, oppure è possibile aprirlo direttamente col bottone **Apri richiesta di offerta** della ribbon bar.
Per annullare una creazione effettuata, è possibile utilizzare il bottone della ribbon bar **Rollback RDO**, il quale cancellerà la Richiesta di offerta creata.


Comunemente in tutte le tab, in fondo alla form vengono riportati il totale **Imponibile**, il totale del **Imposta** e il **Totale** dell'intera richiesta di acquisto.
