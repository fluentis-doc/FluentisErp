---
title: Introduzione
sidebar_position: 1
---

Il modulo pagamenti fornitori si utilizza principalmente per creare **distinte di pagamento**, tipicamente per **bonifico bancario**: il modulo, infatti, prevede la possibilità dell'invio telematico del tracciato **SEPA** (.xml) dei pagamenti per bonifico.

E' possibile inoltre gestire tracciati per **distinte SDD** (Sepa Direct Debit) un formato che ha sostituito, a livello europeo, le precedenti distinte R.i.d. utilizzate per le autorizzazioni di addebito automatico in conto corrente.

Il modulo consente inoltre di importare telematicamente gli **avvisi di pagamento per le ricevute bancarie passive** e procedere quindi con la loro autorizzazione e pagamento, tramite invio alla banca del flusso di ritorno con le ricevute autorizzate, quindi completare la procedura con la contabilizzazione automatica dei pagamenti eseguiti.

Si procede alla creazione di una nuova distinta di pagamento andando a prelevare i dati dalle partite aperte fornitori presenti , direttamente interfacciandosi con il modulo amministrativo: sarà possibile procedere alla contabilizzazione dei movimenti relativi, con la chiusura delle partite relative inserite nella distinta di pagamento e lo storno del relativo saldo a livello contabile.



**Tabelle Preliminari per utilizzare il modulo**:

- **Anagrafiche associate a tipo conto Banca**: necessarie per intestare la distinta, il tipo conto Banca viene popolato alla procedura di Fast Start
- Causali contabili da utilizzare per la contabilizzazione: sono quelle normali di pagamento fornitore che vengono create dalla procedura di Fast Start
- Tabella Tipi pagamento: da richiamare in testata distinta, tabella già popolata dalla procedura di Fast Start
- Numerazione pagamenti fornitori: per definire i numeratori associati, tabella già popolata dal fast Start

 

**Parametri**:   

[Parametri pagamenti fornitore](/docs/configurations/parameters/treasury/vendor-payments-parameters).

---

| Funzione | Significato | Link Video Tutorial |
| --- | --- | --- |
|  [Blocco partite passive](/docs/treasury/vendors-payments/procedures/block-passive-maturity-values)  | Pulsante per  procedere alla gestione massiva dei blocchi delle partite passive. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=05s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
|  [Creazione automatica pagamento fornitori](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation/parameters-filter)  | Pulsante per la creazione automatica di un pagamento fornitore. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
|  [Gestione appoggi pagamenti](/docs/treasury/vendors-payments/procedures/payments-support-management)  | Pulsante per gestire gli appoggi bancari dei pagamenti. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=5m37s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |
|  [Contabilizzazione](/docs/finance-area/professional-men/accounting/payments-accounting/filter)  | Pulsante per procedere alla contabilizzazione dei pagamenti fornitore. | <a href="https://youtu.be/CDCVq0iC29s&amp;t=5m40s" target="_blank" rel="noopener noreferrer">Link YouTube </a> |

---
 
<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkxoWgTkvUg" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>