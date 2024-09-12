---
title: Tab Filtro
sidebar_position: 1
---

| Funzione | Significato |
| --- | --- |
| Ricerca | Pulsante per cercare le partite relative al sottoconto da girare su un altro sottoconto. |
| Contabilizza | Pulsante per operare la contabilizzazione del giroconto partite. |

### UTILIZZO GENERICO

La maschera si compone di una parte superiore di filtro, all'interno della quale è obbligatorio indicare il sottoconto sul quale ricercare le partite da girare, una griglia di selezione delle partite e in basso l'impostazione della causale di contabilità, le date di registrazione/competenza e il sottoconto sul quale riaprire le partite. In particolare, la causale di contabilità deve prevedere sia il flag di chiusura partite che quello di apertura. Il risultato sarà la rilevazione della chiusura delle partite selezionate per riaprirle, mantenendo gli stessi riferimenti d'origine, ma sul sottoconto di destinazione.


### UTILIZZO NELL'AMBITO DELL'IVA IN SOSPENSIONE
Questa procedura può essere utilizzata anche nell'ambito delle casistiche di IVA in sospensione (c.d. iva per cassa) che, come noto, prevede che, decorso un anno dalla fatturazione dell'operazione attiva o passiva, se non è avvenuto l'incasso o il pagamento (che avrebbero reso esigibile o detraibile l'iva relativa) si debba in ogni caso rendere l'iva imponibile o detrarre l'imposta sull'acquisto.

Apponendo il flag (in basso) **Mostra scadenze sospese non chiuse alla data** e valorizzando opportunamente il campo **Data iva sospesa** vengono estratte soltanto le partite aperte riferite ad operazioni con iva in sospensione (identificate tramite le causali contabili appositamente configurate) alla data impostata nel campo di cui sopra.

A questo punto, selezionandole ed impostando la causale contabile desiderata, premendo **Contabilizza**, si va a creare la registrazione di giro dai conti utilizzati per l'iva in sospensione ai conti per l'iva a debito o a credito, lasciando tuttavia (ecco la particolarità della procedura in commento)le partite aperte. 
La registrazione contabile di incasso o pagamento rileverà automaticamente l'avvenuto giroconto e non farà scattare nuovamente la scrittura automatica per il giroconto dell'iva.





