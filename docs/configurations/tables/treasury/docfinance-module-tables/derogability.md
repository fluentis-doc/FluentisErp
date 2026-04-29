---
title: Derogabilità
sidebar_position: 2
---


## Derogabilità

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


## Settaggi Per causali contabili (dalla Versione Fluentis 2025) CONFIGURAZIONE NOTA DI DETTAGLIO RIGA 


Nella maschera dei ***Parametri generali*** è stato codificato il parametro specifico “FS-PR-DocFinanceNote”.

![](/img/it-it/treasury/docfinance/Derogabiliy.png)

Le casistiche possono essere le seguenti:
1) quando non ci sono impostazioni (parametro nullo o stringa vuota) 
Il valore del file (MovDescrDett) viene sempre inserito nel TransactionDecription di riga

2) quando il parametro è compilato
2.1 se c’è un (DF) nella stringa, questo significa che dobbiamo mantenere la stringa di DocFinance (MovDescrDett) e compilare la descrizione sulla base delle impostazioni della stringa stessa (i vari codici (2) (3) ecc. che richiamano le logiche di compilazione automatica delle causali contabili)
2.2 se non c’è (DF), allora si usa la stringa di DocFinance (MovDescrDett) solo quando la riga non è collegata ad una chiusura partite, nel qual caso si guarda all’impostazione della stringa nel parametro

Quindi, per avere la nota standard “IsNull(FSPostingTemplate.Description, '') + ' FT.N. ' + @MovDescrDett + ' del ' + IsNull(@DataDocPart, '') + ' - ' + IsNull(FSLedgerAccount.Description, '')” dovremo impostare il parametro come (2) FT.N. (DF) del (4) – (6)
Dato che c’è (DF) nella stringa, allora manterremo sempre questa andando poi a compilare gli altri dati codificati.

Per avere qualcosa come “'FT. ' + FSMaturity.DocumentNumber + ' del ' + FSMaturity.DocumentDate” imposteremo come FT. (3) del (4)
Dato che non c’è (DF), useremo questa stringa solo per le righe collegate a partite.

In relazione a tutti i codici standard, per DocFinance la compilazione non è esattamente la stessa che si ha tramite la logica standard della causale.

In particolare:
(1) – è il codice della causale della registrazione corrente
(2) – è la descrizione della causale della registrazione corrente
(3) – è il numero documento dalla partita collegata
(4) – è la data documento dalla partita collegata
(5) – è il codice di conto/sottoconto dalla partita collegata
(6) – è la descrizione sottoconto dalla partita collegata
(7) – non ha senso per causali usate da DocFinance, dove non abbiamo operazioni Iva
(8) – è ‘numero documento + ‘-‘ + ‘data documento’ dalla partita collegata (come quando si chiudono le partite a mano in una registrazione)
(9) – sconsigliato, ma è Posting.Description preso dalla partita collegata (come quando si chiudono le partite a mano in una registrazione)
(10) – l’importo valuta della riga
(11) – è la descrizione2 del sottoconto dalla partita collegata

