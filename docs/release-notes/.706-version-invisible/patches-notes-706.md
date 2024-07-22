---
title: Patch notes Versione 706
sidebar_position: 1
---

### Patch 706.1-0003 - 18/07/2024
> - FI - nella contabilizzazione fatture di vendita, allineamento della gestione del cambio per la sezione dei centri di costo ( TT02172/24)
> - SCM - contabilizzazione fatture di acquisto, assegnazione divisione alle righe di movimento centro di costo per righe di spese finali (#TT03239/24)
> - Solved problem with Excel Import parameters for User profile
> - SD - Corretto errore che non permetteva di effettuare un ordinamento per stato evasione nella griglia degli Ordini clienti (#TT03404/24)
> - WM - In visualizzazione giacenze, i decimali utilizzati dall'UM alternativa utilizzati, sono quelli indicati sul campo UM decimali dell'UM alternativa utilizzata. (#TT03313/24)
> - SH - Base static widgets modification SH ( TT01708/24)
> - ARM – Attachments tab fixes in Documentation forms

### Patch 706.1-0002 - 17/07/2024
> - SCS-Add nomenclature code to subcontractor delivery note (#TT03397/24)
> - MES - Corretto bug nella lista prelievo materiali che non variava correttamente lo stato degli ordini di produzione da lanciato ad esecutivo se venivano elaborati più di uno alla volta. (#TT03383/24)
> - MS – Nella form di Generazione Commesse di Produzione da Sottoscorta è stata aggiunta la colonna della Giacenza alla data odierna, mentre per i documenti privi della Data Consegna viene ora preso in considerazione il parametro “Se non è specificata la data di consegna” presente nel tab Parametri della form (#TT02573/24)
> - PR - per la generazione file Sepa, Sepa estero, Sepa Sdd vengono ora verificati i parametri generali "FS-PR-SEPA-PaymentRequest", "FS-PR-SEPA-ForeignPaymentRequest", "FS-PR-SEPA-SDD", per capire quale flusso BizLink chiamare. Se non impostato, si usa il flusso predefinito per la localizzazione della società ( TT03341/24)

### Patch 706.1-0002 - 16/07/2024
> - CRM - FL Browser: CRM contact copy phone number, copies the whole row data (TT03399/24)
> - SD – Revisione test controllo della nazione cedente/prestatore in fattura Sdi per autofatture, da campo nazione al campo codice iso della partita iva. (#TT03368/24)
> - WM - Nel picking, migliorata l'accessibilità al campo lotto nel caso in cui si riapra un picking e l'utente vari la quantità nel campo quantità prelievo. Prima era necessario cambiare riga prima di variare il lotto, mentre ora non è più necessario. (#TT03228/24)
> - PM: wbs assegnazione risorse, migliorato refresh visualizzazione tree progetto in seguito a cambio filtri (#TT03376/24)
> - MS – Corretto bug nel rilascio degli ordini pianificati di acquisto, ora le RDA create vengono raggruppate correttamente per cliente, tipo e anno. (#TT03382/24)
