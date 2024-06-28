---
title: Parametri DDT acquisto
sidebar_position: 6
---

I parametri delle DDT di acquisto permettono l'impostazione di base per poter gestire correttamente e secondo le specifiche richieste da ogni singola società.

*Pulsanti*:

> **Salva**: permette di salvare i parametri impostati.  
> **Ripristina**: permette di ripristinare i parametri ai valori iniziali.

### Generale

**Gestione doppia unità misura**: solo se questo flag è attivato, il sistema può gestire l'unità di misura alternativa nel DDT.

**Proposta automatica UM alternativa:** se attivato, viene proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato;

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente;

**Visualizza dimensioni:** se attivo, vengono gestite le colonne dimensioni (Altezza, Larghezza, Profondità) della griglia *Articoli*.

**Permetti DDT con stesso numero e fornitore:** se attivo, permette l'inserimento di due ddt per lo stesso fornitore con lo stesso numero. È consigliato lasciare disattivato questo flag per permettere al sistema di fare il controllo di univocità;

**Lotti e S.N. (Serial Number) obbligatori:** se attivo, obbliga l'utente ad inserire a livello di riga articolo il lotto ed il serial number per tutti gli articoli per cui è prevista questa gestione. Si consiglia l'attivazione di questo flag qualora si utilizzi la gestione articoli con lotto;

**Ricerca prezzi articoli in tutti i listini predefiniti**: se attivo, l'articolo inserito nella riga DDT verrà ricercato in tutti i listini specificati nell'anagrafica fornitore, oltre al listino di default;

**Consentire sconti per articoli omaggio**: se attivo, permette l'inserimento di sconti sulle righe del Ddt di tipo omaggio.

**Uso articolo fornitore**: se attivo, nella griglia articoli del DDT viene proposto anche il campo per inserire il codice articolo fornitore.

**Verifica articoli in esaurimento:** se attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga DDT ed avvisa qualora l'articolo fosse in esaurimento;

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli imballi a rendere. La gestione delle imballi a rendere verranno spiegati nel video relativo.

**Mantieni prezzi da ordini per gli scaglioni**: è utilizzato in evasione degli ordini in DDT nel caso in cui la quantità evasa sia diversa (solitamente parziale) della quantità ordinata per la quale è stato inserito un prezzo o uno sconto a scaglione di quantità. Se il prezzo o lo sconto non dipendono dalla quantità consegnata ma solo dalla quantità in ordine questo flag deve essere attivato, se invece il prezzo o sconto a scaglione non deve essere inserito nel documento di consegna nel caso l'evasione non avvenga per la quantità totale dell'ordine il flag non deve essere attivato.

**Ricalcola trasporto**: se attivo, calcola il peso e volume dai valori di anagrafica articoli sul documento, impostando il valore del trasporto in automatico. Se non attivo, il costo del trasporto del DDT dovrà essere calcolato manualmente poiché non verrà proposto;

**DEF U.M. volume:** se attivo, indica l'unità di misura di default per il volume quando si calcola il trasporto del DDT;

**Def. U.M. pesi:** se attivo, indica l'unità di misura di default per il peso quando si calcola il trasporto del DDT.

### Carico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data del DDT e non sarà necessario specificare la data registrazione nella form di carico. Se non attivo, sarà necessario specificare la data nella form di carico;

**Priorità magazzino e causale di carico**: se attivo, il magazzino e la causale di carico vengono letti dalle righe del DDT. Qualora non fossero presenti sulle righe del DDT verranno recuperati dal tab parametri della procedura di carico (vedi [Registrazione DDT di acquisto in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)). Qualora questi parametri non fossero settati verranno usati i valori impostati nei campi sottostanti: **Magazzino** e **Causale magazzino**;

**Carico/Scarico automatico**: se attivo, il carico del DDT verrà effettuato in automatico all'attivazione del flag Stampata e direttamente dal DDT di acquisto mediante il pulsante “Carico automatico da magazzino”. Se non attivo, il carico dovrà essere fatto con l'apposito pulsante (vedi [Registrazione DDT di acquisto in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse));

**Avviso articoli fittizi**: se attivo, durante il carico del DDT viene controllato se sono presenti degli articoli fittizi. Se sono presenti viene dato un messaggio per il completamento della procedura; se la risposta è affermativa tutto il DDT verrà caricato (ad eccezione degli articoli fittizi ovviamente). Rispondendo di no, il DDT non verrà caricato. L'articolo fittizio può essere senza distinta base di primo livello se nei parametri MRP è dichiarato con tipo approvvigionamento di acquisto altrimenti la registrazione di carico darà un messaggio di errore nel caso ci siano degli articoli fittizi nel documento da caricare.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga DDT.

È possibile modificare le priorità utilizzando i pulsanti:

> **Sposta su** ![](/img/neutral/common/move-up.png) e 
> **Sposta giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisti](/docs/configurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, ricalcola i centri di costo/profitto secondo la priorità scelta.

Una volta impostati i parametri come meglio conviene, sarà necessario salvarli perché questi diventino effettivi, cliccando sul pulsante **Salva**.