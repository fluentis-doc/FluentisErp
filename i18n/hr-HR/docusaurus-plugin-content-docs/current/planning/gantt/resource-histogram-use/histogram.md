---
title: Istogramma
sidebar_position: 3
---

In questo tab, costituito da una griglia di risultato e da una parte grafica, è possibile visualizzare una riga per ogni fase degli ordini pianificati e/o di produzione filtrati in base ai criteri di ricerca impostati nel tab *Filtro*.

Le colonne visualizzate nella griglia di risultato sono le seguenti:

**Documento**: la colonna visualizza l'indicazione relativa al fatto che la riga selezionata sia riferita ad un Ordine di Produzione o ad un Ordine Pianificato;

**Stato documento**: la colonna visualizza lo stato del documento, se si tratta di Ordine di Produzione. I valori esposti possono essere 'Lanciato', 'Esecutivo', 'Evaso';

**Priorità**: la colonna visualizza la priorità del documento;

**Tas**.: la colonna visualizza un flag ('Tassativo') che se attivo consente all'utente di indicare che l'ordine pianificato sia assolutamente non spostabile;

**Anno**: la colonna visualizza l'anno del documento;

**Ordine**: la colonna visualizza il numero del documento;

**Codice Tipo Ordine**: la colonna visualizza il codice del documento;

**Descrizione Tipo Ordine**: la colonna visualizza la descrizione del documento;

**Anno Commessa**: la colonna visualizza l'anno della commessa di produzione da cui è stato generato il documento. La colonna risulta vuota nel caso in cui il documento stesso sia stato generato manualmente o provenga da elaborazione MRP;

**Numero Commessa**: la colonna visualizza il numero della commessa di produzione da cui è stato generato il documento stesso. La colonna risulta vuota nel caso in cui il documento stesso sia stato generato manualmente o provenga da elaborazione MRP;

**Codice Tipo Commessa**: la colonna visualizza il codice del Tipo Commessa di Produzione;

**Descrizione Tipo Commessa**: la colonna visualizza la descrizione del Tipo Commessa di Produzione;

**Data Inizio Ordine**: la colonna visualizza la data prevista di inizio del documento; questa data rappresenta la data di previsto inizio della prima fase di lavorazione del ciclo dell'articolo;

**Data Fine Ordine**: la colonna visualizza la data di prevista fine del documento; questa data rappresenta la data di prevista fine dell'ultima fase di lavorazione del ciclo dell'articolo;

**Data Merce Pronta**: la colonna visualizza la data di merce pronta della riga dell'ordine cliente da cui è stata generata la commessa la cui schedulazione o elaborazione MRP ha generato l'ordine selezionato. Ovviamente il campo risulta vuoto se la commessa che ha generato l'ordine pianificato o di produzione sia stata creata da 'Previsionale' oppure manualmente;

**Data Prevista Consegna**: la colonna visualizza la data di prevista consegna della riga dell'ordine cliente da cui è stata generata la commessa la cui schedulazione o elaborazione MRP ha generato l'ordine selezionato. Ovviamente il campo risulta vuoto se la commessa che ha generato l'ordine pianificato o di produzione sia stata creata da 'Previsionale' oppure manualmente;

**Fase, Sottofase, Descrizione Fase**: in questi campi vengono visualizzati i dati relativi alla fase di lavorazione dell'ordine pianificato o di produzione oggetto della riga selezionata;

**CdL**: questa combo box, che visualizza il codice del Centro di Lavoro designato per la fase selezionata permette eventualmente anche di modificare il CdL, assegnando quindi la fase selezionata ad un altro Centro di Lavoro;

**Data inizio fase/ Data fine fase**: si tratta delle date di inizio e fine della fase selezionata. Esse vengono calcolate in base i tempi inseriti nelle fasi di lavorazione, e più precisamente in base al maggiore tra il tempo operaio e il tempo macchina totale per la fase selezionata;

**UM Tempo**: la colonna visualizza l'unità di misura utilizzata, per la fase selezionata, per i tempi che compaiono nelle colonne successive. Possono essere Secondi, Minuti, Ore, Giorni;

**Tempo Attrezz** **.**: la colonna visualizza il tempo attrezzaggio impostato per la fase selezionata;

**Tempo Macchina**: la colonna visualizza il tempo macchina unitario impostato, per la fase selezionata, per la quantità per fase;

**Tempo Assegnato**: la colonna visualizza il tempo operaio unitario impostato, per la fase selezionata, per la quantità per fase;

**Classe**: la colonna visualizza la classe dell'articolo oggetto del documento;

**Codice articolo**: la colonna visualizza il codice dell'articolo oggetto del documento;

**Variante**: la colonna visualizza l'eventuale variante dell'articolo oggetto del documento;

**Quantità**: la colonna visualizza la quantità da produrre per quell'ordine per la fase selezionata;

**Quantità Prodotta**: la colonna visualizza la quantità già prodotta (e quindi segnalata) per quell'ordine per la fase selezionata;

**Quantità Residua**: la colonna visualizza la differenza tra i 2 campi sopra indicati, quindi la quantità ancora da produrre per quell'ordine per la fase selezionata;

**Note**: la colonna visualizza le note inserite nel tab Note dell'ordine pianificato o di produzione per la fase selezionata;

**Commessa**: la colonna visualizza l'eventuale commessa di vendita legata al documento;

**Cliente**: la colonna visualizza il conto e il sottoconto del cliente legato al documento;

**Descrizione cliente**: la colonna visualizza la ragione sociale del cliente legato al documento;

**Descrizione Articolo**: la colonna visualizza la descrizione dell'articolo oggetto del documento;

**Descrizione Centro di Lavoro**: la colonna visualizza la descrizione del Centro di Lavoro designato per la fase selezionata.

Selezionando una riga della griglia, la sezione sottostante visualizza il grafico relativo al centro di lavoro impegnato sulla fase selezionata, evidenziando in giallo il tempo impegnato da quella fase. In rosso viene evidenziato l'istogramma relativo alla capacità produttiva disponibile del centro di lavoro rappresentato nel grafico esposto, in blu viene evidenziato l'istogramma relativo al tempo impegnato in ordini pianificati, mentre in verde viene evidenziato l'istogramma relativo al tempo impegnato in ordini di produzione. Sull'asse delle ascisse infatti vengono rappresentati i giorni del calendario di fabbrica (i giorni lavorativi sono contrassegnati dall'istogramma di colore rosso), mentre sull'asse delle ordinate vengono indicati i minuti di lavoro disponibili per un giorno, calcolati in base al calendario della singola capacità produttiva. Per esempio, se un centro di lavoro ha capacità giornaliera di 8 ore, nel grafico la barra verticale rossa arriverà fino al valore di 480 minuti raffigurato sull'asse delle ordinate.

Esercitando un semplice doppio click sulla riga della griglia, l'utente entra direttamente nel documento (ordine pianificato o ordine di produzione) che contiene la fase rappresentata nella riga da cui si è partiti, con la possibilità, subordinata alla presenza dei diritti utente, di modificare il documento e vedere, dopo aver dato un 'refresh' della visualizzazione, la situazione aggiornata anche dal punto di vista grafico.






