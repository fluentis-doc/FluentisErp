---
title: Panoramica vendite
sidebar_position: 1.1
description: Panorama 
draft: true
---

### Creazione documenti di vendita

Fluentis permette la creazione dei seguenti documenti, generalmente in questo ordine, *ma solo la fattura è obbligatoria nel processo di vendita*.  

| <div style={{ width:'200px' }}>Documento</div> | <div style={{ width:'400px' }}>Note</div> |
| :-- | :--|
| 1. [Offerta di vendita](/docs/sales/sales-price-list/insert-sales-price-list) | Costituisce una proposta della merce e/o servizi offerti a un cliente/cliente potenziale. *Un'offerta non comporta alcuna registrazione che modifichi le quantità / i valori nella gestione magazzino o in contabilità*. |
| 2. [Ordine cliente](/docs/sales/sales-orders/create-new-sales-orders\header) | Il documento è utile per *pianificare la produzione*, *creare ordini di acquisto* e *pianificare le risorse*. Ogni documento aggiorna le quantità del magazzino e della contabilità generale. |
| 3. [Documento di trasporto](/docs/sales/sales-price-list/insert-sales-price-list) | Serve per indicare che il prodotto è stato spedito. |
| 4. [Fattura di vendita](/docs/sales/sales-price-list/insert-sales-price-list) | Con la fattura si richiede il **pagamento** e si **registra** il ricavo nel conto economico. La fattura di vendita creata senza alcun riferimento alla consegna riduce la quantità in magazzino. La fattura di vendita crea sempre un'operazione contabile con la registrazione dei ricavi e delle imposte e l'aggiornamento dei conti dei clienti sulla base di un nuovo saldo insoluto. |

**Creazione altri documenti di vendita**

| <div style={{ width:'200px' }}>Documento</div> | <div style={{ width:'400px' }}>Note</div> |
| :-- | :--|
| *Fattura proforma* | Influenza l'importo del magazzino confermato al cliente (e la quantità disponibile in magazzino) e crea un'operazione contabile.|
| *Reso cliente*| Aumentano la quantità in magazzino e aggiornano i conti magazzino associati.|
| *Fattura di vendita con pagamento* | Riduce la quantità in magazzino e registra ricavi e imposte.|
| *Nota di credito da fornitore* | Aumenta i livelli di magazzino disponibile e crea operazioni contabili. Esegue l'addebito sul conto clienti nella contabilità generale e corregge il conto ricavi in base allo stesso importo.|

### Procedure vendita

Elenchiamo una serie di procedure più frequenti:  

| <div style={{ width:'200px' }}>Procedura</div> | <div style={{ width:'400px' }}>Note</div> |
| :-- | :--|
| Creazione manuale documenti di vendita | Consultare [Offerta di vendita](/docs/sales/sales-price-list/insert-sales-price-list), [Ordine cliente](/docs/sales/sales-orders/create-new-sales-orders\header), [Documento di trasporto](/docs/sales/sales-price-list/insert-sales-price-list), [Fattura di vendita](/docs/sales/sales-price-list/insert-sales-price-list)|
| Creazione automatica documenti di vendita | Fluentis permette anche la creazione di nuovi documenti a partire da quelli esistenti (per esempio [Creazione fatture da DDT](/docs/sales/sales-price-list/insert-sales-price-list)). Quando si effettua questa operazione, vengono visualizzati solo i documenti ancora aperti (documenti per i quali non è stato creato alcun documento successivo e restano tali fino al trasferimento completo di tutti gli articoli al documento successivo oppure fino alla chiusura manuale o al relativo storno.).|
| Inserimento prezzi e sconti | riprendere i prezzi dai listini di vendita o dall'anagrafica articoli, riprendere gli sconti dai listini di vendita|
| Inserimento articoli | l'inserimento in fattura anche di [articoli non codificati](/docs/sales/sales-price-list/insert-sales-price-list), specificando solo la loro descrizione|
| Inserimento note | inserimento delle [note per ogni articolo](/docs/sales/sales-price-list/insert-sales-price-list), specificando solo la loro descrizione|
| Inserimento variante | l'associazione delle [varianti esistenti con ulteriori attributi](/docs/sales/sales-price-list/insert-sales-price-list), al livello dell'articolo|
| Combinare le spedizioni in un unica fattura | la creazione delle fatture da DDT con la possibilità di [raggruppare i DDT](/docs/sales/sales-price-list/insert-sales-price-list) secondo le causali di magazzino, le valute, gli agenti ecc. oppure di raggruppare per scadenze o anni diversi|
| Registrazione di prezzi, sconti e contratti di pagamento per le vendite | Immettere sconti diversi e prezzi speciali che vengono concessi ai clienti a seconda dell'articolo, delle quantità e/o della data.|
| Contabilizzare i documenti | la contabilizzazione delle fatture e degli effetti|
| Utilizzare il barcode | la creazione della segnalazione da barcode|
| Stornare la vendita | Se la fattura di vendita registrata è stata pagata, allora sarà necessario creare una nota di credito di vendita o un ordine di reso da vendita per stornare la vendita|
| Gestione note di accredito | xxxxxxxxxxxx|
| Elaborare i resi | xxxxxxxxxxxx|
| Modificare o annullare la fattura | Operazioni che si possono effetuare per la fattura di vendita registrata prima che venga pagata. Ciò risulta utile se si desidera correggere un errore di digitazione o se il cliente richiede una modifica in anticipo nell'elaborazione dell'ordine|
| workflow di approvazione | https://learn.microsoft.com/it-it/dynamics365/business-central/across-use-workflows|
 
### Impostazioni vendite

| <div style={{ width:'200px' }}>Impostazione</div> | <div style={{ width:'400px' }}>Note</div> |
| :-- | :--|
| Impostare documenti | Ordini, DDT, [Fatture](/docs/configurations/parameters/sales/sales-invoices-parameters)|
| Impostare agenti | Impostare gli agenti in modo da poterli assegnare ai contatti clienti o misurarne le prestazioni per calcolare la provvigione sulle vendite|
| Impostare profili di invio documenti |Impostare profili di invio documenti....|
| Impostare i metodi di pagamento | Definire i diversi incoterm offerti ai clienti o dai fornitori.|
| Impostare vettori | Immettere le informazioni sui diversi fornitori di servizi di trasporto utilizzati.|


