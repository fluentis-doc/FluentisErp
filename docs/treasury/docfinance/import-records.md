---
title: Importazione registrazioni
sidebar_position: 3
---

Attraverso questa procedura si esegue la procedura di importazione del file delle registrazioni contabili creato da DocFinance.

L'importazione avviene attraverso un flusso *Folder Monitor* di Bizlink.

Pertanto il file con le registrazioni da importare sarà depositato nella cartella monitorata dal servizio il quale provvederà ad importarle n automatico.

A questo punto il sistema andrà a creare le registrazioni contabili relative, chiudendo le partite indicate da DocFinance e rilevando contabilmente i movimenti sui conti mappati nel sistema (le causali contabili devono avere lo stesso codice tra ERP e DocFinance).

Il risultato dell'importazione sarà visibile nella griglia inferiore (mentre nella superiore saranno visualizzati le importazioni eseguite) e con i comandi della ribbon bar sarà possibile cancellare l'importazione e visualizzare il dettaglio degli errori riscontrati nel corso dell'importazione.

:::danger ATTENZIONE
L'importazione dei pagamenti prevede che nel tracciato Docfinance sia passato l'id della partita aperta da chiudere andando così a generare da parte di Fluentis un pagamento ad essa agganciato.

Se per qualsiasi motivo l'id della partita non corrisponde a quello presente nel tracciato (modifiche manuali di qualsiasi genere effettuate dopo l'esportazione partite che sono state poi gestite in Docfinance) saranno generati dei pagamenti, ma essi non saranno correttamente agganciati alle partite le quali rimarranno aperte. E' possibile procedere a compensare tali partite oppure a ricercare i pagamenti importati in questa situazione, cancellarli e manualmente ricrearli agganciando correttamente la relativa partita. L'operazione si esegue, dopo aver cancellato il pagamento, premendo il tasto *Nuovo* e poi *Crea da partite / pagamenti* e selezionando la partita da chiudere.
:::


:::danger[ATTENZIONE]
Ricordiamo che resta in gestione **su Fluentis la creazione della distinta Sbf** (e quindi creeremo il file in Fluentis per importarlo in DocFinance) **così come la creazione dell’insoluto** (per la riapertura delle partite originali): in particolare, **è necessario mantenere la gestione del portafoglio effetti in Fluentis per poter gestire correttamente le maturazioni delle provvigioni sul pagamento**.

**La contabilizzazione insoluti deve prevedere in avere un conto transitorio banca (che è possibile impostare nei parametri del modulo insoluti) perché DocFinance invia l’addebito in conto corrente con contropartita questo stesso conto transitorio.**
:::




:::note Info
[Link alle specifiche tecniche **Docfinance**](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::






