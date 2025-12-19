---
title: Generazione manuale task
sidebar_position: 1
---

La funzionalità **Creazione manuale Task** consente di creare e gestire manualmente i **Task** di produzione raggruppando le Fasi di lavorazione (non ancora dichiarate) di Ordini di Produzione in stato *Lanciato* e/o *Esecutivo*, a partire da un Materiale previsto da utilizzare.

L’obiettivo è permettere all’operatore di:
- individuare rapidamente le fasi che consumano un determinato materiale;
- verificare la fattibilità delle fasi in base alla disponibilità del materiale;
- creare nuovi Task, oppure consolidare le fasi dentro Task già esistenti;
- rimuovere fasi da un Task quando necessario.

:::note Nota
La disponibilità del materiale viene valutata considerando le logiche di giacenza e la disponibilità scalare in base all’ordinamento impostato. 
:::

*Pulsanti specifici*:
> **Nascondi / Visualizza filtro dati**: consente di nascondere o visualizzare il filtro presente all'inizio della form.  
> **Nascondi / Visualizza dettagli task**: consente di nascondere o visualizzare le griglie **Task** e **Fasi di lavorazione previste per il Task selezionato**.  

La schermata è composta da quattro elenchi principali.

Elenco 1 – **Materiali**

Nel primo elenco sono mostrati i Materiali di consumo previsti, con indicazione di:

- Magazzino di riferimento;
- Giacenza disponibile;
- Giacenza non disponibile.

Questo elenco è il punto di partenza: selezionando un materiale si aggiornano gli elenchi sottostanti.

Elenco 2 – **Fasi di lavorazione previste il materiale selezionato**
Nel secondo elenco vengono visualizzate le Fasi di lavorazione per le quali è previsto il consumo del materiale selezionato (elenco 1).

Per ogni fase è disponibile il dettaglio della *Fattibilità fase*, determinata dalla disponibilità scalare del materiale calcolata in funzione dell’ordinamento impostato in elenco,(data di previsto inizio, sequenza manuale modificabile dall’operatore, ecc.). Quindi, la fattibilità indica se, seguendo l’ordine delle fasi, la giacenza/disponibilità del materiale è sufficiente a coprire il fabbisogno previsto.         

*Pulsanti specifici*:
> **Ricalcola sequenza**: consente di ricalcolare la sequenza delle fasi presenti in griglia.     
> **Azzera sequenza**: consente di azzerare la sequenza delle fasi presenti in griglia.     
> **Crea task**: consente di creare un nuovo task partendo dalla fase selezionata. Premuto il pulsante verrà visualizzato un pop up nel quale è possibile modificare: *Tipo task*, *Centro di lavoro*, *Macchina*, *Data inizio*, *Tempo di setup*, *Tempo di attesa* (con anche la possibilità di rendere quel tempo di attesa un tempo che impegna il centro di lavoro) e *Note*.

Elenco 3 – **Task**
Nel terzo elenco sono mostrati i Task già esistenti associati al materiale selezionato (elenco 1).

Questo elenco consente di:
- selezionare un Task esistente per verificarne il contenuto;
- selezionare un Task in cui includere nuove fasi tramite il pulsante **Aggiungi fasi a task**.

*Pulsanti specifici*:
> **Aggiungi fasi a task**: consente di aggiungere un una nuova fase al task selezionato.     

Elenco 4 – **Fasi di lavorazione previste per il Task selezionato**
Nel quarto elenco vengono visualizzate le Fasi di lavorazione già presenti nel Task selezionato nell’elenco 3 ed è possibile eliminarle tramite l'apposito pulsante **Elimina fasi da task**.

*Pulsanti specifici*:
> **Elimina fasi da task**: consente di eliminare una nuova fase dal task selezionato.     

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).






