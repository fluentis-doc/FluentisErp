---
title: Crea Fattura - sezione superiore
sidebar_position: 1
---

La form si apre:  
1. tramite il percorso **Vendite > Fatture > Crea fattura di vendita**  
oppure 
2. tramite il pulsante **Nuova** che si trova nella form [Ricerca fatture di vendita](/docs/sales/sales-invoices/search-sales-invoices).

Per continuare la creazione del documento, l'utente deve inserire i campi *obbligatori*:

- **Tipo fattura**: predefinito in *Configurazione > Tabelle >Vendite > [Tipo fattura di vendita](/docs/configurations/tables/sales/invoices-type)*.          
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di fattura prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente.            
- **Cliente**: usando l' [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i dati. Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data fattura**: indica la data di creazione della fattura. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data. 

Continuare la creazione inserendo almeno i dati obbligatori su ognuno dei tab sotto:  

- [Testata](/docs/sales/sales-invoices/invoicing/header) e le sue Procedure;

- [Articoli](/docs/sales/sales-invoices/invoicing/items);

- [Trasporto](/docs/sales/sales-invoices/invoicing/transport).

- [Riepiloghi](/docs/sales/sales-invoices/invoicing/summaries).

*Vedi formazione video*:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qwt9bknOOng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
