---
title: Parametri fatture di vendita
sidebar_position: 5
---

I parametri delle fatture di vendita permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra relativa a questi parametri si compone di 4 diversi tab: Generale, Evasione, Scarico e Analitica.

### Generale

**Proponi provvigioni per tutti gli articoli:** campo diventato OBSOLETO, in quanto la provvigione viene sempre gestita indipendentemente da questo flag.

**Inserimento provvigioni nei tipi 6 e 7 (Acconto/Storno):** se attivo, permette l'inserimento e la gestione delle provvigioni anche per le i tipi riga 6 e 7 delle fatture. Per approfondimenti fare riferimento all'articolo relativo all' [inserimento della fattura](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Gestione doppia unità misura**: questo flag, se attivo, consente al sistema di gestire l'unità di misura alternativa nella fattura di vendita; se non è attivo nella fattura si vedrà riportata solamente l'unità di misura gestionale dell'articolo;

**Proposta automatica UM alternativa**: questo flag è editabile solo se è stato attivato il flag di gestione della doppia unità di misura; se attivo, l'unità di misura alternativa verrà riproposta nella fattura di vendita nel tab articolo nel campo 'UM alternativa';

**Recupera solo nella giornata**: se attivo, permette di recuperare i numeri solo per la giornata in corso, mentre il **Recupero automatico**(attivabile solo se si è attivato il recupero solo nella giornata) segnala il fatto che verrà proposto in automatico il primo numero disponibile.  Se questo flag è disattivato il sistema permetterà comunque il recupero del numero, ma quest'ultimo dovrà essere inserito manualmente dall'utente;

**Prezzi negativi delle note di credito**: se attivo, il sistema notificherà un avviso qualora ci fossero dei prezzi positivi all'interno di note di accredito. Se non attivo, il sistema non farà nessun controllo e non restituirà nessun avviso.

**Controlla disponibilità**: se attivo controlla la disponibilità dell'articolo.

**Disponibilità obbligatoria**: se attivo, questo flag va a indicare che la quantità per articolo della fattura non potrà essere maggiore alla disponibilità di quell'articolo; e se lo fosse il sistema andrà a fare un controllo e ad avvisare l'utente nel momento dell'inserimento di questo dato nella fattura.

**Escludi ordini cliente**: se attivo, questo flag indica che l'impegno degli ordini clienti non verrà considerato nel calcolo della disponibilità;

**Vis. Disponibilità**: se attivo, grazie a questo flag vi sarà la possibilità di visualizzare la disponibilità a livello di riga articolo quando si inserisce la quantità,

**Considera disponibilità provenienti da**: 
In questa sezione è possibile andare ad indicare quali tipologie di movimenti debbano essere considerati per il calcolo della disponibilità articolo tra Conto lavoro, Acquisto, Vendite, Produzione pianificata, Produzione rilasciata e Magazzino.

**Recupero automatico**: se attivo, segnala il fatto che nel recupero verrà proposto in automatico il primo numero disponibile.  Questo flag è attivabile solo se il flag precedente è attivato. Se disattivato il sistema permetterà il recupero del numero, ma dovrà essere inserito manualmente dall'utente.

### Evasione

**Pagamento**: specifica il valore usato per il pagamento della fattura cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Destinatario**: specifica il valore usato per il destinatario dell'ordine cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Ricalcola CDC/CDP**: nel caso in cui si sia scelto di generare la fattura partendo dall'ordine cliente con l'apposta procedura, attivando questo flag, il sistema andrà a ricalcolare i centri di costo e di profitto nella fattura, non considerando quelli impostati nell'ordine di vendita. Se non attivo il sistema non ricalcolerà questi dati ma terrà quelli inseriti nell'ordine cliente;

**Proposta lotti**:

### Scarico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data della fattura, e non sarà necessario specificare la data registrazione nella form di scarico. Se non attivo, sarà necessario specificare la data nella form di scarico della fattura;

**Priorità magazzino e causale di scarico alle righe articoli dei DDT**: se attivo il magazzino e la causale di scarico vengono letti dalle righe della fattura mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (Magazzino e Causale di magazzino);

**Carico/Scarico Automatico**: se attivo, lo scarico del DDT verrà effettuato in automatico all'attivazione del flag Stampata. Se non attivo lo scarico dovrà essere fatto con l'apposito pulsante presente nella ribbon bar della form di inserimento fattura (vedi [Inserimento fatture di vendita](/docs/sales/sales-invoices/invoicing/sales-invoice)) oppure con l'apposita procedura;

**Avviso articoli fittizi**: se attivo, durante lo scarico della fattura il sistema andrà a controllare se sono presenti degli articoli fittizi e nel caso in cui ve ne siano comparirà un messaggio che permetterà all'utente di scegliere se completare lo stesso la procedura oppure no; in caso di risposta affermativa tutta la fattura verrà scaricata (ad eccezione degli articoli fittizi ), mentre in caso di risposta negativa la fattura NON verrà scaricata.

### Analitica

Questo TAB specifica con che priorità recuperare il Centro di costo(CDC) o Centro di profitto(CDP) nella riga documento.

È possibile modificare le priorità utilizzando i tasti **Sposta su**![](/img/neutral/common/move-up.png) e **Sposta Giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato](/docs/configurations/tables/sales/sales-turnover);

Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in anagrafica Cliente. Se non presente verrà cercato in anagrafica articolo e successivamente a livello di magazzino.