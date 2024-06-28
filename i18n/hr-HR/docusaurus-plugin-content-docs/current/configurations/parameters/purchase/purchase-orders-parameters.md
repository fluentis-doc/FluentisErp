---
title: Parametri ordini fornitori
sidebar_position: 5
---

I parametri degli ordini fornitori permettono l'impostazione di base per gestire correttamente e secondo le specifiche richieste da ogni singola società.

La finestra si compone di pulsanti e tre diversi tab: Generale, Carico, Analitica. 

*Pulsanti*:

> **Salva**: permette di salvare i parametri impostati.  
> **Ripristina**: permette di ripristinare i parametri ai valori iniziali.

### Generale

**Gestione doppia unità misura**: solo se attivato, il sistema può gestire l'unità di misura alternativa nell'ordine fornitore.

**Proposta automatica UM alternativa:** se attivato, fa in modo che venga proposta la quantità relativa all'unità di misura alternativa, a patto che sull'anagrafica dell'articolo ne sia stata impostata una di default. È possibile attivare questo flag solo se il flag precedente è stato attivato;

**Recupera solo nella giornata**: permette di recuperare eventuali buchi nella numerazione degli ordini solo se l'ordine presenta la data odierna;

**Auto insert varianti in attributi varianti:** non è piu' utilizzato;

**Non permettere di evadere qtà superiore:** se attivo, impedisce, in fase di evasione dell'ordine con un ricevimento merce, di indicare quantità superiori a quelle indicate nelle righe dell'ordine, evitando eventuali disallineamenti tra le quantità ordinate e quelle effettivamente caricate a magazzino;

**Controllo sequenza data e numero documento**: controlla la sequenzialità data/numero degli ordini di acquisto. Qualora non ci fosse sequenzialità il sistema ritornerà un errore impedendo l'inserimento dell'ordine;

**Costo zero in assenza di listini**: se attivo, in assenza di un listino valido popola il prezzo con il valore zero. Nel caso in cui questa voce non fosse spuntata, il campo sarebbe valorizzato con il costo ultimo dell'articolo, se presente;

**Visualizza dimensioni:** se attivo, le colonne dimensioni (Altezza, Larghezza, Profondità) della griglia Articoli vengono gestite e mostrati;

**Permetti DDT con stesso numero e fornitore:** se attivo, permette l'inserimento dello stesso numero DDT per lo stesso fornitore. È consigliato lasciare disattivato questo flag per permettere al sistema di fare il controllo di univocità;

**Blocca inserimento in date festive:** se attivo, il sistema non permette l'inserimento dell'ordine in date festive (sabato, domenica e festività). Se non attivo, il sistema non effettua nessun controllo e lascia inserire l'ordine;

**Evadi solo ordini autorizzati:** se attivo, non permette l'evasione di ordini fornitori non autorizzati con il relativo check (in *Ordini fornitori* > tab *Testata*);

**Proponi marca con priorità listino fornitore/ordine cliente**: non più utilizzato;

**Permetti modifica IVA:** se attivo, in caso di [Creazione automatica Ordini da Richieste di acquisto](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) viene proposto il codice IVA dall'anagrafica del fornitore;

**Codice operatore obbligatorio**: se attivo, è necessario specificare in testata il codice dell'operatore. Senza questo dato non è possibile proseguire con la compilazione dell'ordine. Se non attivo, questo dato non è obbligatorio ma facoltativo;

**Ricerca prezzi articoli in tutti i listini predefiniti**: se attivo, articolo inserito nella riga ordine fornitore verrà ricercato in tutti i listini specificati nell'anagrafica fornitore, oltre al listino di default;

**Uso articolo fornitore**: se attivo, nella griglia articoli dell'ordine fornitore viene proposto anche il campo per inserire il codice articolo fornitore. Se non attivo questo campo non sarà visibile;

**Verifica articoli in esaurimento: s**e attivato, il sistema fa un controllo sulla disponibilità degli articoli in riga ordine ed avvisa qualora l'articolo fosse in esaurimento;

**Contabilizzazione imballi**: consente di poter contabilizzare, in contabilità generale, anche le righe con articoli di natura imballo che solitamente vengono gestiti per avere la verifica delle giacenze degli imballi a rendere. La gestione delle imballi a rendere verranno spiegati nel video relativo.

### Carico

**Crea registrazione con la data del documento**: se attivo, la registrazione di magazzino viene fatta con la stessa data dell'ordine e non sarà necessario specificare la data registrazione nella form di carico. Se non attivo, sarà necessario specificare la data nella form di carico.

**Priorità magazzino e causale di carico**: se attivo, fa in modo che il carico di magazzino venga effettuato utilizzando il magazzino e la causale definiti nella procedura di carico oppure se assenti utilizza il magazzino e causale definiti in questo tab di *Carico*. Se invece il flag non è settato utilizza il **Magazzino** e la **Causale** definita nelle righe del ricevimento merci.

### Analitica

In questo tab si specifica con che priorità recuperare il centro di costo (CdC) o centro di profitto (CdP) nella riga documento.

È possibile modificare le priorità utilizzando i pulsanti:

> **Sposta su** ![](/img/neutral/common/move-up.png) e 
> **Sposta giù**![](/img/neutral/common/delete-cc.png).

*Valori di default*: il CDC o CDP viene recuperato dal tipo fatturato qualora presente. Per approfondimenti fare riferimento a tabella [Tipo Fatturato Acquisti](/docs/configurations/tables/purchase/purchase-invoices-type). Qualora non fosse presente nel tipo fatturato il sistema lo cercherà in *Anagrafica fornitore*. Se non presente verrà cercato in *Anagrafica articolo* e successivamente a livello di *Magazzino*.

**Ricalcolo**: se attivo, questo flag, ricalcola i centri di costo/profitto secondo la priorità scelta.

**CdP/CDC obbligatori**: se attivo, questo flag, rende obbligatoria l'imputazione dei centri di costo/profitto.

Una volta impostati i parametri come meglio conviene, sarà necessario salvarli perché questi diventino effettivi, cliccando sul pulsante **Salva**.


<iframe width="560" height="315" src="https://www.youtube.com/embed/Ly9eQJHYYro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>