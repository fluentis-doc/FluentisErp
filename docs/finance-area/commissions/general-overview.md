---
title: Introduzione
sidebar_position: 1
---

A partire dalla versione 805 Il modulo Commissioni di Fluentis ERP gestisce le attività legate al calcolo elle commissioni agenti (basate sui dati dell'area amministrativa) ed ai compensi erogati successivamente, in base al calcolo provvigionale, 

Il modulo può ricevere i dati di base per il calcolo elle commissioni degli agenti dai documenti dell'area **Vendite**.  

Nelle versioni precedenti alcune form erano già presenti nei moduli *Partite* e *Percipienti*.


:::tip[Importante]
A partire dalla versione 805 l’oggetto *FSCommission* è stato modificato per aggiungere un link diretto alla fattura di origine, nella proprietà FSCommission.SalesInvoice (db field fluentis.FI_Commissions.FIC_SalesInvoice_SDSI_Id), collegamento che viene valorizzato automaticamente con la contabilizzazione della fattura di vendita.

Inoltre, la contabilizzazione delle fatture di vendita valorizza l’oggetto FSCommission anche senza aver impostato il flag *Commissioni* nella causale di contabilità, che ora ha il solo scopo di rendere visibile all’utente i dati direttamente dall’interno della registrazione della fattura.

:::


**Funzionalità Principali**

- Ricerca e gestione delle Commissioni e dei compensi Agenti: Consente di inserire, modificare e visualizzare le commissioni con i relativi dettagli sugli incassi avvenuti ed i compensi agenti.

- Contabilizzazione compensi e pagamenti: I compensi possono essere contabilizzati direttamente, sia per la parte fiscale (ritenute, INPS, ENASARCO), sia per la gestione dei centri di costo e profitto aziendali. I compensi definitivi vengono poi inseriti in contabilità​




**Stampe Disponibili**

- Calcolo provvigioni: Genera il calcolo in anteprima delle provvigioni maturate spettanti agli agenti

- Stampe Agenti: elabora una serie di ulteriori stampe relative alla situazione previdenziale e contributiva degli agenti




**Procedure Principali**

- Calcolo provvigioni: Automatizza il calcolo delle provvigioni per gli agenti, con la possibilità di collegare i compensi a specifici progetti o commesse​

- Simulazione provvigioni: Permette di calcolare in anteprima il risultato delle liquidazioni a trasformare successivamente in compenso agenti.






