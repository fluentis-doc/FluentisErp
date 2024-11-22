---
title: Crea ordine cliente - sezione superiore
sidebar_position: 1
---

La form **Crea ordine cliente** si apre tramite il percorso **Vendite > Ordini clienti > Nuovo ordine** oppure tramite il pulsante ![](/img/neutral/common/new.png) che si trova nella form [Ricerca ordini clienti](/docs/sales/sales-orders/search-sales-orders).

Per continuare la creazione del ordine cliente, l'utente deve inserire i campi **obbligatori**:

- **Tipo ordine**: predefinito in  Configurazione > Tabelle > Vendite > [Tipi ordini](/docs/configurations/tables/sales/sales-order-types); rimandiamo alla documentazione relativa alla tabella per lo studio delle varie configurazioni possibili, ma per poter inserire un ordine è necessario che il tipo Ordine abbiamo definito la tipologia di numerazione, dato obbligatorio. In base alla configurazione presente nel tipo Ordine si possono aprire scenari diversi per l’inserimento dell’ordine cliente, ad esempio avere la creazione automatica di un progetto, la gestione a prezzi ivati, la gestione delle matrici, ecc.   
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione ordini clienti](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di ordine prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente. 
- **Cliente**: usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data ordine**: indica la data di creazione dell’ordine. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data.      
- **Tipo ritenuta**: questo campo è visibile solo se il cliente gestisce la ritenuta d’acconto, e quindi se in anagrafica presenta l’omonimo flag e il tipo di ritenuta, nel tab [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). La ritenuta d'acconto è una trattenuta fiscale applicata su pagamenti per prestazioni lavorative o professionali, anticipata al fisco dal committente e successivamente dedotta dall'imposta sul reddito del beneficiario. Per una gestione corretta di questa funzionalità, nella tabella tipi ritenuta deve essere codificato correttamente il codice per la fatturazione elettronica. il documento reperirà in automatico l'assoggettamento alla ritenuta per le righe sulle quali è possibile fare il calcolo, e in automatico calcolerà l'importo della ritenuta. 

La form contiene una serie di tab:

- [Testata](/docs/sales/sales-orders/create-new-sales-orders/header) e le sue Procedure;

- [Articoli](/docs/sales/sales-orders/create-new-sales-orders/items);

- [Riepiloghi](/docs/sales/sales-orders/create-new-sales-orders/summaries).

