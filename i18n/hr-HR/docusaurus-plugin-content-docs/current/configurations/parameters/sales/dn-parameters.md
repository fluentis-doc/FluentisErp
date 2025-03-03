---
title: Parametri DDT
sidebar_position: 3
---

I parametri dei DDT permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra si compone di quattro tab: Generale, evasione, scarico e analitica.

### Generale

**Proponi provvigioni per tutti gli articoli:** campo diventato obsoleto, in quanto la provvigione viene sempre gestita indipendentemente da questo flag;

**Gestione doppia unità misura**: se attivo, il sistema andrà a gestire l'unità di misura alternativa all'interno del DDT cliente;

**Proposta automatica UM alternativa:** questo flag diventa editabile solo se è stato attivato il flag di gestione della doppia unità di misura e consente di riportare nel tab articoli del DDT l'unità di misura alternativa impostata nell'anagrafica articolo, nel apposita colonna 'UM alternativa'; altrimenti se non se attivo, l'unità di misura non verrebbe riproposta nel DDT;

**Controllo sequenza data e numero documento**: questo flag, se attivo, fa si che il sistema controlli la sequenzialità data/numero dei DDT. Qualora non ci fosse sequenzialità il sistema ritornerà un errore impedendo all'utente di inserire il DDT; se questo flag è attivo, non sarà possibile attivare i due flag successivi 'Recupera solo nella giornata' e ' Recupero automatico';

**Recupera solo nella giornata**: se attivo, permette di recuperare i numeri solo per la giornata in corso.

**Controlla disponibilità**: se attivo, fa si che il sistema vada a controllare la disponibilità dell'articolo.

**Disponibilità obbligatoria**: se attivo, la disponibilità dell'articolo nel DDT sarà obbligatoria, cioè la quantità non potrà essere maggiore della disponibilità. Se non attivo il sistema non farà questo controllo;

**Recupero automatico**: se attivo, segnala il fatto che nel recupero verrà proposto in automatico il primo numero disponibile.  Questo flag è attivabile solo se il flag precedente è attivato. Se disattivato il sistema permetterà il recupero del numero, ma dovrà essere inserito manualmente dall'utente,

**Escludi ordine cliente**: se attivo, l'impegno degli ordini clienti non verrà considerato nel calcolo della disponibilità;

**Visualizza Disponibilità**: se attivo, verrà visualizzata la disponibilità a livello di riga articolo nel momento in cui si andrà ad inseire la quantità;

**Considera disponibilità provenienti da**: questi flag permettono di decidere quali tipologie di movimenti debbano essere considerati per il calcolo della disponibilità dell'articolo nel DDT cliente, scegliendo tra: Conto lavoro, Acquisti, Vendite, Produzione Pianificata, Produzione rilasciata e Magazzino.

### Evasione

**Pagamento**: specifica il valore usato per il pagamento dell'ordine cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Destinatario**: specifica il valore usato per il destinatario dell'ordine cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Controllo coerenza tra pagamenti DDT e ordine**: se attivo, il sistema non permetterà l'evasione da ordini con pagamenti diversi.

**Ricalcola CDC/CDP:** nel caso in cui si sia scelto di generare il DDT partendo dall'ordine cliente con l'apposta procedura, attivando questo flag, il sistema andrà a ricalcolare i centri di costo e di profitto se il DDT è stato generato da ordine, non considerando quelli impostati nell'ordine di vendita. Se non attivo il sistema non ricalcolerà questi dati ma terrà quelli inseriti nell'ordine cliente;

**Proposta lotti**: 

### Scarico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data del DDT, e non sarà necessario specificare la data registrazione nella form di scarico. Se non attivo, sarà necessario specificare la data nella form di scarico DDT

**Priorità magazzino e causale di scarico alle righe articoli dei DDT**: se attivo il magazzino e la causale di scarico vengono letti dalle righe del DDT mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (Magazzino e Causale di magazzino);

**Carico/Scarico Automatico**: se attivo, lo scarico del DDT verrà effettuato in automatico all'attivazione del flag Stampata. Se non attivo lo scarico dovrà essere fatto con l'apposito pulsante (vedi [Inserimento DDT](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) oppure con l'apposita procedura.

**Avviso articoli fittizi**: se attivo, durante lo scarico del DDT il sistema andrà a controllare se sono presenti degli articoli fittizi e nel caso in cui ve ne siano comparirà un messaggio che permetterà all'utente di scegliere se completare lo stesso la procedura oppure no; in caso di risposta affermativa tutto il DDT verrà scaricato (ad eccezione degli articoli fittizi ), mentre in caso di risposta negativa il DDT NON verrà scaricato.

### Analitica

Questo TAB specifica con che priorità recuperare il Centro di costo(CDC) o Centro di profitto(CDP) nella riga del DDT.

È possibile modificare le priorità utilizzando i tasti **Sposta su**![](/img/neutral/common/move-up.png) e **Sposta Giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato](/docs/configurations/tables/sales/sales-turnover).

Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in anagrafica Cliente. Se non presente verrà cercato in anagrafica articolo e successivamente a livello di magazzino.

<iframe width="560" height="315" src="https://www.youtube.com/embed/fEpcxS9pRkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
