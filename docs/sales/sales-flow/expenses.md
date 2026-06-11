---
title: Gestione Spese
sidebar_position: 8
---

**Contesto funzionale**

Il sistema gestisce gli oneri aggiuntivi (trasporto, spedizione e oneri vari) all’interno dei documenti di vendita, con particolare attenzione alla loro propagazione tra documenti collegati (offerte, ordini, DDT e fatture).

La logica prevede che tali oneri possano essere definiti a livello di anagrafica cliente e successivamente proposti, calcolati e trasferiti nei documenti in base alle regole di generazione e alle configurazioni attive.

**Gestione oneri in anagrafica cliente**

All’interno dell’[Anagrafica cliente > Dati contabili > Spese/Sconti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts) è possibile definire gli oneri applicabili. Per ogni riga spesa sono presenti quattro flag che determinano a partire da quale fase del ciclo documentale l’onere deve essere ricalcolato:

- calcolo a partire dalle offerte
- calcolo a partire dagli ordini
- calcolo a partire dai documenti di consegna
- calcolo a partire dalle fatture

Ogni riga onere può avere attivo un solo flag, che definisce il punto del processo in cui il sistema deve interrompere la propagazione del valore e ricalcolare l’onere direttamente sulla base dei dati del documento corrente.

**Comportamento senza flag attivi**

Nel caso in cui nessun flag sia attivo, il comportamento del sistema è il seguente: gli oneri definiti nell’anagrafica cliente vengono proposti in fase di creazione del documento.

Questo significa che l’onere viene applicato solo ai documenti generati manualmente o tramite duplicazione, importazione Excel o WebAPI, cioè in tutti i casi in cui non esiste un documento sorgente collegato attraverso processi di conversione, evasione o valorizzazione.

In questi scenari, il sistema non esegue alcuna propagazione automatica degli oneri tra documenti collegati.

Quando un nuovo documento viene creato, il sistema propone automaticamente gli oneri definiti in anagrafica cliente.

Nel caso in cui il documento venga generato a partire da un documento precedente tramite evasione o valorizzazione, gli oneri presenti nel documento sorgente vengono trasferiti nel documento di destinazione.

Gli oneri a importo fisso vengono riportati senza alcuna modifica del valore. Gli oneri percentuali, invece, devono essere convertiti in valore assoluto sulla base del rapporto tra il valore netto trasferito e il valore netto totale del documento sorgente. Il calcolo avviene secondo la seguente logica:
- l’onere nel documento di destinazione è pari all’onere del documento sorgente moltiplicato per il rapporto tra il valore netto trasferito e il valore netto del documento sorgente.
- nel caso in cui un documento di destinazione sia generato da più documenti sorgenti contenenti lo stesso tipo di onere, i valori omogenei vengono sommati tra loro, determinando un unico importo consolidato nel documento finale.

**Comportamento con flag di calcolo attivo**

Quando uno dei flag di calcolo è attivo (con la regola che ne è ammesso uno solo per ogni riga onere), la gestione cambia in modo sostanziale.

In questo caso, l’onere che deve essere applicato nei documenti di destinazione non viene più trasferito dal documento sorgente, ma viene ricalcolato direttamente a partire dai dati presenti nell’anagrafica cliente.

Se il documento di destinazione corrisponde al livello definito dal flag (ad esempio ordini, DDT o fatture), il sistema non riporta gli oneri dai documenti precedenti, ma li ricrea ex novo sulla base della configurazione corrente del cliente.

Questo comporta che eventuali oneri presenti nei documenti sorgente non vengono trasferiti, ma sostituiti dal nuovo calcolo.

**Modifiche ai documenti dopo evasione o valorizzazione**

Nel caso in cui un documento di destinazione venga modificato dopo un processo di evasione o valorizzazione (ad esempio variazione di quantità, prezzi o sconti rispetto al documento sorgente), i valori degli oneri già calcolati possono risultare non più coerenti rispetto alla base originaria di calcolo.

Poiché non è possibile determinare automaticamente un nuovo ricalcolo corretto, il deve notifica l’utente con un messaggio informativo che segnala la necessità di intervento manuale. Il messaggio è il seguente:

*Quantities, prices, or discounts have been modified compared to the fulfillment generated through the procedure. Miscellaneous, transportation, and shipping charges must be manually adjusted by the user.*
