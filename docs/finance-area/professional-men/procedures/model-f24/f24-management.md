---
title: Gestione F24
sidebar_position: 2
---

La creazione del modello F24 prevede il caricamento di un nuovo modello all'interno del quale i dati di testata sono compilati sulla base dei riferimenti inseriti all'interno della tabella 'Società'. 

Attualmente non è implementata l'esportazione del tracciato telematico e, pertanto, la funzionalità in commento risulta utile per verificare gli importi da versare relativamente al debito iva ed al debito relativo alle ritenute d'acconto operate nei confronti dei percipienti e come fac simile per la compilazione del modello di versamento effettivo.

 

Il periodo IVA e il periodo ritenuta sono proposti come il mese attuale: possono essere variati per richiamare il mese di riferimento (sia per i dati dell'iva da versare che per le ritenute d'acconto da versare). 

In particolare, per quanto riguarda le  liquidazioni IVA, sarà ricercato il periodo memorizzato nella maschera ** [Versamenti IVA](/docs/finance-area/declarations/declarations/vat-payment) ** presente in contabilità generale (dove sono memorizzati automaticamente i valori della liquidazione al momento della sua stampa in definitivo: è consentito un caricamento manuale del valore).

E' possibile scegliere di elaborare solo i dati iva o solo i dati delle ritenute cancellando i dati dai campi (periodo e anno di riferimento) del dato che non interessa.

Una volta memorizzati i dati di testata si attiverà il pulsante 'Proponi valori' che andrà a compilare le varie righe della prima scheda erario. 

Una volta compilate manualmente anche tutte le altre sezioni della dichiarazione, a seconda delle necessità, impostato il versante/firmatario e il percorso di creazione del file sarà possibile eseguire la creazione del file con l'apposito pulsante che andrà a creare un file con il nome strutturato come 'Partita IVA società' + '_' + 'Numero dichiarazione' + '_' + 'Data dichiarazione' con estensione F24. In caso di dati obbligatori mancanti sarà restituito un messaggio di errore esplicativo e il file non sarà creato.

È possibile annullare la creazione del file con l'apposito pulsante di gestione.



| Funzione | Significato |
| --- | --- |
| Salva | Salva il modello in uso. |
| Proponi valori | Esegue la ripresa dei dati dai versamenti iva e dalle ritenute dei compensi pagati. |
| Nuovo dettaglio | Imposta il cursore nella griglia di inserimento dei dettagli. |
| Cancella dettaglio | Cancella la riga di dettaglio selezionata. |






