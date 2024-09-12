---
title: Parametri ordini clienti
sidebar_position: 2
---

I parametri degli ordini clienti permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società. La finestra relativa a questi parametri si compone di 4 diversi tab: Generale, Evasione, Scarico e Analitica.

### Generale

**Proponi provvigioni per tutti gli articoli:** campo diventato obsoleto, in quanto la provvigione viene sempre gestita indipendentemente da questo flag;

**Gestione doppia unità misura**: questo flag, se attivo, consente al sistema di gestire l'unità di misura alternativa nell'ordine cliente; se non è attivo nell'ordine si vedrà riportata solamente l'unità di misura gestionale dell'articolo;

**Proposta automatica UM alternativa:** questo flag è editabile solo se è stato attivato il flag di gestione della doppia unità di misura; se attivo, l'unità di misura alternativa verrà riproposta nell'ordine cliente nel tab articolo nel campo 'UM alternativa';

**Controllo sequenza data e numero documento**: se attivo, questo flag permette di controllare la sequenzialità data/numero degli ordini di vendita. Qualora non ci fosse sequenzialità il sistema ritornerà un errore impedendo l'inserimento dell'ordine;

**Recupera solo nella giornata**: se attivo, permette di recuperare i numeri solo per la giornata in corso, mentre il **Recupero automatico **(attivabile solo se si è attivato il recupero solo nella giornata) segnala il fatto che verrà proposto in automatico il primo numero disponibile.  Se questo flag è disattivato il sistema permetterà comunque il recupero del numero, ma quest'ultimo dovrà essere inserito manualmente dall'utente;

**Inserimento automatico varianti in attributi Varianti**: se attivo, le varianti degli attributi verranno inserite in automatico nell'anagrafica.

**Controlla disponibilità**: se attivato, il sistema va a controllare la disponibilità dell'articolo;

**Disponibilità obbligatoria**: se attivo, questo flag va a indicare che la quantità per articolo dell'ordine cliente non potrà essere maggiore alla disponibilità di quell'articolo; e se lo fosse il sistema andrà a fare un controllo e ad avvisare l'utente nel moment dell'inserimento di questo dato nell'ordine;

**Copri i buchi di numerazione**: se attivo, il sistema recupera eventuali numeri non assegnati altrimenti viceversa, il sistema proseguirà con la numerazione  lasciando eventuali buchi nella numerazione. L'attivazione di questo flag NON permetterà l'attivazione dei flag successivi 'Recupera solo nella giornata' e 'Recupero automatico';

**Esplodi distinta base**: se attivo, nel momento dell'inserimento di un articolo questo verrà sostituito dal primo livello della sua distinta base, se esiste. Quindi invece dell'articolo “prodotto Finito” l'ordine sarà popolato con la distinta base di questo articolo;

**Escludi ordine cliente**: se attivo, questo flag indica che l'impegno degli ordini clienti non verrà considerato nel calcolo della disponibilità;

**Vis. disponibilità**: se attivo, grazie a questo flag vi sarà la possibilità di visualizzare l'eventuale stato in esaurimento a livello di riga articolo quando si inserisce la quantità. Le condizioni per ottenere il messaggio che l'articolo sta per esaurire sono:         
- nei parametri Ordini cliente deve essere settato il flag "Verifica articoli in esaurimento";          
- in [Anagrafica articolo](/docs/erp-home/registers/items/create-new-items/create-new-item), tab Generalità, deve essere settato il flag "In esaurimento" e inoltre la "Data esaurimento" deve essere minore o uguale alla data dell'ordine.

**Considera disponibilità provenienti da**:  
In questa sezione è possibile andare ad indicare quali tipologie di movimenti debbano essere considerati per il calcolo della disponibilità articolo tra *Conto lavoro*, *Acquisto*, *Vendite*, *Produzione pianificata*, *Produzione rilasciata* e *Magazzino*.

### Evasione

**Pagamento**: specifica il valore usato per il pagamento dell'ordine cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Destinatario**: specifica il valore usato per il destinatario dell'ordine cliente nel caso dell'evasione multipla commessa vendita: *Primo ordine*, *Anagrafica* oppure *Selezione manuale*.

**Raggruppamento per tipo e soluzione pagamento**: Specifica il fatto che gli ordini clienti verranno raggruppati per tipo e soluzione pagamento all'evasione diretta nelle DDT o nelle fatture;

**Raggruppamento per destinazione**: Specifica il fatto che gli ordini clienti verranno raggruppati per il destinatario e la destinazione all'evasione diretta nelle DDT o nelle fatture;

**Valori automatici:** questo flag verrà tolto prossimamente.

### Scarico

**Priorità parametri inseriti per ogni riga ordine**: se attivo il magazzino e la causale di scarico vengono letti dalle righe dell'ordine mentre se non viene attivato, verranno utilizzati il magazzino e la causale inseriti nei campi successivi (*Magazzino* e *Causale di magazzino*).

### Analitica

Questo TAB specifica con che priorità recuperare il Centro di costo(CDC) o Centro di profitto(CDP) nella riga ordine.

È possibile modificare le priorità utilizzando i tasti **Sposta su**![](/img/neutral/common/move-up.png) e **Sposta Giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato](/docs/configurations/tables/sales/sales-turnover).

Qualora non fosse presente nel *Tipo fatturato* il sistema lo cercherà in *Anagrafica cliente*. Se non presente verrà cercato in anagrafica articolo e successivamente a livello di magazzino.


<iframe width="560" height="315" src="https://www.youtube.com/embed/WgkLl-D27io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

