---
title: Lock manager
sidebar_position: 3
---

La form si trova in Tesoreria > Rischio Cliente > Procedure > Lock Manager

Attraverso questa procedura si gestisce l'autorizzazione dei documenti che sforano i fidi, così come il blocco diretto del cliente indipendentemente dal superamento del fido.

Ricordiamo che il blocco dei documenti presuppone la gestione [**dell'anagrafica cliente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (sui clienti da sottoporre a fido e secondo la modalità scelta) e delle vari tabelle relative ai [**tipi documenti di vendita**](/docs/configurations/tables/sales/sales-order-types) (es. Tipo Ordine, Tipo DDT ...) al fine di impostare quali tipologie siano sottoposte a controllo ed eventualmente a blocco.




## Scheda Autorizzazione

l'utente che ha i diritti di accesso ha la possibilità di verificare la lista dei documenti segnalati, bloccati, autorizzati ecc. 

Nella griglia sarà possibile modificare lo stato da ***Doc. bloccato*** ad ***Autorizzazione rilasciata*** per consentire la continuazione del flusso documentale relativo al documento stesso. 

:::tip Info
Con un doppio click nella griglia sarà possibile visualizzare il documento stesso in tutti i suoi dettagli.
:::

## Scheda **Blocco clienti**

consente di forzare un ***Blocco ordini*** o ***Blocco ddt*** (o entrambi tramite i rispettivi flag) per una determinata lista di clienti, con un range di date blocco. 

### Come bloccare un cliente

Ad esempio, se il cliente ha mandato insoluta una riba, l'amministrazione potrebbe  e forzare il blocco di tutte le operazioni nei confronti del cliente. 

1. accedere a questa maschera
2. compilare il campo Descrizione inserendo l'anagrafica del cliente da bloccare
3. attivare i flag del Blocco ordini e/o del Blocco DDT e compilare le date di inizio e fine blocco

:::note[MNota]
Per riabilitare il cliente sarà sufficiente impostare una **data di fine validità** (in modo da tenere una traccia storica del blocco) oppure direttamente eliminare la riga dal sistema. 
Viene memorizzato **l'utente e la data di blocco e di sblocco**.
:::




I flag **Autorizza Ordine** e **Autorizza Bolle** fanno in modo che sia richiesta sempre l’autorizzazione all’ordine o al ddt, indipendentemente dal fatto che ci sia disponibilità di fido o meno.

**Note**: permette di aggiungere una nota libera all'operazione di blocco (o sblocco se viene mantenuta la riga).
