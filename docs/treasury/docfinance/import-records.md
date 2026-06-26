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

:::tip[Nuova gestione delle note per le registrazioni contabili]
A partire dalla versione Fluentis2025 è stato introdotto un nuovo parametro generale **FS-PR-DocFinanceNote** per la gestione nei movimenti contabili delle note provenienti da DocFinance.

1) se il parametro NON è impostato (quindi parametro nullo o stringa vuota) 
Il valore del file (MovDescrDett) viene **sempre** inserito nella proprietà *TransactionDecription*

2) quando il parametro viene impostato (quindi non vuoto/nullo VEDI IMMAGINE DI ESEMPIO SOTTO).
> 2.1 Se c'è un **(DF)** nella stringa, verrà mantenuta sempre la stringa proveniente da DocFinance e poi sarà creata la stringa secondo le logiche Fluentis (con i parametri numerici) impostate nella stringa stessa

>2.2 Se **non c'è (DF)**, allora si usa (MovDescrDett) del file solo quando la riga non è collegata ad una partita, altrimenti si usano le impostazioni della stringa stessa

Quindi, per avere una nota standard tipo “IsNull(@DescrizioneCausale, '') + ' FT.N. ' + @MovDescrDett + ' del ' + IsNull(@DataDocPart, '') + ' - ' + IsNull(@AccountDescription, '')” imposteremo la stringa del parametro come

(2) FT.N. (DF) del (4) – (6)

-->          Dato che c'è (DF), allora manterremo la nota di DocFinance e compileremo il resto secondo le impostazioni

Per avere “'FT. ' + @NumDocPartita + ' del ' + @DataDocPartita” imposteremo il parametro come

FT. (3) del (4)
-->          Dato che non c'è (DF), useremo la stringa descrittiva del file di DocFinance solo quando la riga importata non è legata alle partite.

**ATTENZIONE:Rispetto ai codici standard delle note in causale, nell'import da DocFinance i codici assumono i seguenti significati**:

- (1) – è il codice della causale della registrazione corrente
- (2) – è la descrizione della causale della registrazione corrente
- (3) – è il numero documento dalla partita collegata
- (4) – è la data documento dalla partita collegata
- (5) – è il codice di conto dalla partita collegata
- (6) – è la descrizione del conto dalla partita collegata
- (7) – non ha senso nell'import da DocFinance, non si ricevono fatture in questo import
- (8) – è ‘document number + ‘-‘ + ‘document date’ dalla partita collegata (come quando si chiudono le partite)
- (9) – Posting.Description preso dalla registrazione della partita collegata
- (10) – l'importo valuta della riga corrente
- (11) – la descrizione2 dal conto della partita collegata


![](/img/it-it/treasury/docfinance/importnote.png)
:::


:::note Info
[Link alle specifiche tecniche **Docfinance**](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::






