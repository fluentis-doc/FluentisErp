---
title: Visualizza ordini
sidebar_position: 4
---

La finestra 'Visualizza Ordini' si compone di 2 tab identici, ciascuno dei quali si compone di 2 griglie. La griglia inferiore dipende da ciò che si seleziona nella griglia superiore.

Nel primo tab, chiamato 'Ordini in Gantt', viene visualizzata, nella griglia superiore, una riga per ogni fase di ogni ordine di produzione interessato dall'impegno del centro di lavoro dal cui istogramma si è partiti per esplodere la finestra in oggetto.

Le colonne visualizzate nella griglia di risultato sono le seguenti:

**Tipo Ordine**: la colonna visualizza il tipo di documento; può essere 'Esecutivo', 'Lanciato' e, nel caso di ordine pianificato, 'Pianificato';

**Commesse di Produzione**: la colonna visualizza anno e numero della commessa di produzione da cui è stato generato l'ordine. La colonna risulta vuota nel caso in cui l'ordine pianificato sia stato generato manualmente o provenga da elaborazione MRP;

**Codice Tipo Commessa**: la colonna visualizza il codice del Tipo Commessa di Produzione;

**Descrizione Tipo Commessa**: la colonna visualizza la descrizione del Tipo Commessa di Produzione;

**Ordine**: la colonna visualizza il numero dell'Ordine Pianificato o di Produzione;

**Codice Tipo Ordine**: la colonna visualizza il codice del Tipo Ordine Pianificato;

**Descrizione Tipo Ordine**: la colonna visualizza la descrizione del Tipo Ordine Pianificato;

**Data Inizio Ordine**: la colonna visualizza la data prevista di inizio dell'Ordine Pianificato o di Produzione; questa data rappresenta la data di previsto iniio della prima fase di lavorazione del ciclo dell'articolo;

**Data Fine Ordine**: la colonna visualizza la data di prevista fine dell'Ordine Pianificato o di Produzione; questa data rappresenta la data di prevista fine dell'ultima fase di lavorazione del ciclo dell'articolo;

**Exec Order**: la colonna il valore '0' se l'ordine non è ancora stato segnalato, il valore '1' se ha già subito delle segnalazioni di produzione;

**Classe**: la colonna visualizza la classe dell'articolo oggetto dell'Ordine;

**Codice articolo**: la colonna visualizza il codice dell'articolo oggetto dell'Ordine;

**Descrizione Articolo**: la colonna visualizza la descrizione dell'articolo oggetto dell'Ordine Pianificato;

**Variante**: la colonna visualizza l'eventuale variante dell'articolo;

**Descrizione Variante**: la colonna visualizza l'eventuale descrizione variante dell'articolo;

**Codice / Descrizione Zona Cons.**: le colonne visualizzano l'eventuale codice e descrizione della zona di consegna;

**Fase di Produzione**: la colonna visualizza i codici di fase e sottofase della fase di produzione;

**Descrizione Fase**: la colonna visualizza la descrizione della fase di produzione;

**Tempo CdL**: la colonna visualizza il totale del tempo che il Centro di Lavoro da cui si è partiti dedica a quella fase;

**%**: la colonna visualizza il valore del tempo in termini percentuali sul totale della capacità produttiva disponibile per quel giorno;

**Articolo, Descrizione, Variante, Descrizione Variante primo livello**: le colonne visualizzano le informazioni relative al semilavorato di primo livello presente in distinta base;

**Quantità**: la colonna visualizza la quantità dell'Ordine Pianificato dell'articolo;

**Quantità Confermata**: la colonna visualizza la quantità confermata dell'Ordine Pianificato dell'articolo, diversa da zero solo in caso di ordine pianificato proveniente da elaborazione MRP;

**Cliente**: la colonna visualizza il conto e il sottoconto del cliente legato all'Ordine Pianificato;

**Fornitore**: la colonna visualizza il conto e il sottoconto del fornitore legato all'Ordine Pianificato, se di acquisto o di conto lavoro.

Nella griglia sottostante vengono visualizzate le righe degli ordini clienti, ove presenti, da cui sono state generate le commesse di produzione la cui schedulazione ha portato alla creazione degli ordini pianificati o di produzione rappresentati nella griglia superiore. Le informazioni visualizzate sono Tipo, Anno, Numero e Data Inserimento dell'ordine cliente, il Cliente presente in testata Ordine cliente, Classe, Codice, Descrizione, Variante e Descrizione Variante dell'articolo presente nella riga d'ordine cliente, nonché la sua data di prevista consegna.

Nel secondo tab vengono esposti, con una struttura identica a quella del tab 'Ordini in Gantt', gli 'Ordini non in Gantt'.

Esiste anche una piccola ribbon bar che consente all'utente di sostituire il centro di lavoro per il documento selezionato e di spostare di 'x' giorni o ad una determinata data il documento selezionato nella griglia superiore.

RIBBON BAR: rappresenta il menù della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni collegate al tab 'Visualizza Gantt'. La lista delle funzionalità possibili è di seguito rappresentata:



| Funzione | Significato |
| --- | --- |
| Importazione simulazione | Richiama la procedura che conferma le modifiche eseguite dall'utente sui documenti visualizzati nel grafico. |
| Salva la simulazione | Richiama la procedura che salva in un file la simulazione eseguita dall'utente ma senza che le sue modifiche vengano imposte sui documenti del grafico. |
| Carica simulazione | Richiama la procedura che carica nel grafico una simulazione precedentemente salvata. |
| Zoom Out | Consente di aumentare il dettaglio temporale nel grafico. |
| Zoom In | Consente di diminuire il dettaglio temporale nel grafico. |
| M.R.P. | Richiama la procedura che lancia l'elaborazione MRP su tutto il database. |
| CdL sovraccaricati | Apre una finestra di pop-up all'interno della quale compare una griglia in cui vengono visualizzati i centri di lavoro interessati dai documenti del grafico, con l'evidenza, in rosso, dei giorni in cui i CdL stessi risultano essere impegnati maggiormente rispetto alla loro capacità produttiva giornaliera. |
| Rollback della simulazione | Richiama la procedura per eseguire il rollback della simulazione su cui si sta lavorando. |






