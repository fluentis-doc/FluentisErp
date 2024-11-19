---
title: Crea DDT di vendita - sezione superiore
sidebar_position: 1
---

La form **Crea DDT di vendita** si apre tramite il percorso **Vendite > DDT > Crea DDT di vendita** oppure tramite il pulsante ![](/img/neutral/common/new.png) che si trova nella form [Ricerca DDT di vendita](/docs/sales/sales-delivery-notes/search-sales-dn).

Per continuare la creazione del DDT di vendita, l'utente deve inserire i campi obbligatori:
- **Tipo DDT**: predefinito in  *Configurazione > Tabelle > Vendite> [Tipi DDT](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di DDT prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente.    
- **Cliente**: digitabile usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i dati oppure usando la procedura automatica, se si sceglie di creare i documenti tramite l'[Evasione DDT da ordine cliente](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/execution-from-order).  Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data**: indica la data di creazione del DDT. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data. 

La form contiene una serie di tab:    

- [Testata](/docs/sales/sales-delivery-notes/insert-delivery-notes/header) e le sue Procedure;

- [Articoli](/docs/sales/sales-delivery-notes/insert-delivery-notes/items);

- [Riepiloghi](/docs/sales/sales-delivery-notes/insert-delivery-notes/summary).