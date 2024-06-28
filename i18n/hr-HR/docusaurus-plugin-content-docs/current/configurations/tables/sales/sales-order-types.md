---
title: Tipi ordine cliente
sidebar_position: 23
---

La tabella si apre tramite il percorso **Tabelle > Vendite > Tipi ordine cliente**.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

Per inserire nuovi record è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

**Tipo/Descrizione:** campi in cui viene indicato il codice e la descrizione della tipologia di ordine cliente. Importante: il codice che si inserisce deve essere univoco;

**Numerazione**: in questo campo va inserito il codice della numerazione appropriato. Per approfondimenti sulla numerazione dei documenti si rimanda all'articolo  [Numerazioni Fluentis](/docs/configurations/tables/fluentis-numerations);

**Genera commessa produzione**: se attivo, il sistema provvederà, in fase di inserimento ordine cliente, a creare la testata della commessa di vendita con lo stesso numero dell'ordine cliente e ad associarla in testata allo stesso ordine. Se non attivo il sistema non creerà la testata della commessa.

**Conferma ordine automatica**: se attivo, l'ordine può essere evaso da documenti DDT, Picking, Fatture di vendita. Unica condizione: l'ordine deve essere stampato e confermato. Se questo flag è attivo permette anche l'inserimento automatico della data conferma ordine impostandola con la data inserimento ordine;

**Escludi blocco:** se attivo, il sistema per questo tipo ordine non considererà il blocco del documento dovuto al superamento del fido ma lascerà all'utente la possibilità di inserire e stampare il documento; se non attivo, il tipo ordine verrà bloccato qualora si superi il fido e all'utente verrà impedito l'inserimento del documento;

**D-Evasione tipo DDT**: contiene il tipo DDT che si vuole venga generata al lancio della procedura automatica di *creazione DDT partendo dagli ordini clienti*;

**D-Evasione tipo fattura**: contiene il tipo fattura  che si vuole venga generata al lancio della procedura automatica di *creazione delle fatture di vendita partendo dall'ordine cliente*;

**D-Evasione tipo picking**: contiene il tipo picking che si vuole venga generato al lancio della procedura automatica di *creazione del picking per l'evasione degli ordini disponibili o tramite i piani di carico*;

**Blocca Doc. Stampato**: se attivo, non permette la modifica dell'ordine cliente che abbia il flag “Stampato” attivo in testata;

**Fido**: se attivo, l'ordine con questo tipo rientra nel controllo del fido;

**Cash flow**: se attivo, il tipo ordine concorre al calcolo del [cash flow](/docs/treasury/cash-flow/cash-flow/search-cash-flow);

**Magazzino/Descrizione magazzino**: in questi campi si andrà ad indicare il [magazzino](/docs/configurations/tables/logistics/warehouses)  di impegno degli articoli presenti in quel determinato tipo di ordine; 

**Causale /Descrizione causale magazzino**: in questi campi si andrà invece ad indicare la *causale di movimentazione* degli articoli impegnati contenuti in quel determinato tipo di ordine;

**Senza sommare quantità**: se attivo, nel momento dell'evasione dell'ordine le quantità in evasione di questi tipi ordine vengono riportate nel documento di evasione per singole righe articolo (per esempio se la quantità è stata divisa in più righe) senza sommare le quantità;

**Controllo disponibilità**: se attivo, questi tipi ordine verranno considerati nel [calcolo della disponibilità](/docs/erp-home/registers/items/calculate-availability);

**Agr. Acq. IVA**: se attivo, in fase di creazione dell'ordine, il sistema andrà a controllare se per l'articolo utilizzato è presente un codice dell'IVA agricola, altrimenti verrà utilizzato il codice IVA presente nell'[anagrafica articolo;](/docs/erp-home/registers/items/create-new-items/item-registry/generality);

**Tipo commessa produzione**: in questo campo è possibile indicare il tipo di commessa di produzione che si vuole venga generata da questo tipo di ordine all'interno della *Definizione MPS* nel momento della generazione delle commesse di produzione da ordine cliente;

**Prezzo Ivato**: se attivo, il sistema recupera il prezzo di vendita da listini o dall'anagrafica articolo e lo riporta con l'aggiunta dell'IVA. Se non trova il listino (nel caso per esempio di listino scaduto o listino in valuta non compatibile) recupera i costi o i prezzi dall'anagrafica articolo e li riporta comprensivi di IVA.

I costi e i prezzi in anagrafica sono in EUR, quindi il sistema li andrà anche a convertire nella valuta del cliente.

**Tipo ordini fornitori. /Descrizione tipo OF**: in questi campi va indicato il codice e la descrizione del tipo ordine fornitore che si vuole venga generato, nel caso si scelga di generare l'ordine fornitore partendo dall'ordine cliente, tramite l'apposita procedura;

**Controllo cliente** **: se attivo, nel momento in cui viene inserito il cliente all'interno dell'ordine, il sistema andrà a fare un controllo sulle anagrafiche, andando a verificare che il codice inserito corrisponda obbligatoriamente al codice di un'anagrafica cliente. Se così non fosse il sistema avviserà l'utente;

**Righe documento raggruppate**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice. Se non attivo, non viene visualizzato questo TAB e la conseguente matrice.

**Configurazione:** in questo campo di andrà ad inserire un codice per l'impostazione degli Extradata nell'ordine cliente.

Sempre all'interno di questa schermata è possibile cancellare un tipo ordine inserito, selezionando la riga corrispondente all'interno della griglia e cliccando sul pulsante **Cancella** presente nella ribbon bar della form.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

<iframe width="560" height="315" src="https://www.youtube.com/embed/dXsheWUPC6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
