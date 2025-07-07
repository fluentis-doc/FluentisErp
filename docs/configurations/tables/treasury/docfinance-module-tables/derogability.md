---
title: Derogabilità
sidebar_position: 2
---

Consente di definire i codici di derogabilità dei flussi finanziari, cioè sostanzialmente il grado di priorità/importanza dei debiti, così come gestiti in DocFinance (il codice del gestionale deve essere lo stesso di DocFinance).

Va inteso pertanto come un dato necessario e specifico del software DocFinance.

:::note[Dettagli]
**se il parametro per l'esportazione è 0**; viene considerata per default la derogabilità dal piano dei conti:

	se è null nel piano dei conti, invece:

viene settato 01 se diverso da BO e RD (bonifico e rimessa diretta, stringhe fisse)

altrimenti viene letta la differenza in giorni tra scadenza e data odierna: se maggiore di 90 allora viene impostato 04, se compresa tra 30 e 90 giorni allora viene impostato 03, e se compresa tra 0 e 30 allora viene impostato 02, diversamente viene impostato 01.

**se parametro è 1 allora viene letta**:

	per i fornitori dalla derogabilità del tipo pagamento
	se la derogabilità è vuota (quindi quando non è definita nel fornitore oppure non è un fornitore) allora dalla derogabilità del piano dei conti

:::

E' possibile gestire nel piano dei conti e passare a DocFinance come dato statistico anche il campo **Voci di spesa**.

caratteri disponibili: 6, così compilati 

I primi 4 caratteri dal codice della voce spesa del conto del flusso di cash flow, se questo è null allora dai primi 4 caratteri del conto (FSLedgerAccount.Code)

I secondi 2 caratteri sono presi dalla voce spesa del conto con imponibile iva più alto nella registrazione contabile che ha creato la partita (quindi si gestisce solo per flusso di partite, dal conto della griglia iva che ha imponibile più alto)

esempio di impostazione tipica:

0101      Clienti Italia

0102      Clienti Estero

0201      Fornitori Italia

0202      Fornitori Estero





