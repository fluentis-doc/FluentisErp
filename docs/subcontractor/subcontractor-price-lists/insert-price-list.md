---
title: Inserimento Listini di Conto lavoro
sidebar_position: 1
---

Da questa applicazione sarà possibile inserire i listini di conto lavoro.

## Sezione superiore

Nella sezione superiore è necessario inserire il **Fornitore**.
Nella form di inserimento vengono proposte automaticamente i valori dei campi **Da data validità** (viene proposta la data corrente per inizio validità) e la [Divisa](/docs/guide/glossary/glossary-intro#currency) (viene proposta la divisa della società, ma possono essere modificati.
Viene riportato un eventuale **Sconto listino da anagrafica** ed è possibile inserire delle **Note**

Nella sezione superiore è presente anche il filtro per ricercare gli Articoli all'interno del listino

## Articoli

In questa form verranno indicati gli articoli ed eventuali sconti associati a questo listino.

**Classe/Articolo/Descrizione**: indicare il codice dell'articolo da includere nel listino. La descrizione verrà recuperata in automatico grazie al codice articolo. Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

**Codice/Descrizione variante**: serve se oltre al codice articolo anche la variante contraddistingue un articolo da un altro.

**Codice fase**: è possibile associare all'articolo un'eventuale [Fase esterna](/docs/configurations/tables/production/standard-phases) che sarà svolta dal terzista. In questo modo è possibile definire un prezzo per ogni fase dello stesso articolo; verranno compilati in automatico i campi **Fase** e **Sottofase**;

**Unità di misura**: può essere quella gestionale dell'articolo o una delle sue unità di misura alternative.

**Quantità**: proposta uguale a 1, è la quantità di riferimento del prezzo; se diversa da 1, quando deve essere calcolato il prezzo viene diviso per la quantità del listino.

**Prezzo** riferito alla divisa del listino.

**IVA**: questo campo viene recuperato. Qualora sul cliente non fosse impostato sarà necessario popolare questo campo con il codice IVA.  

**Prezzo Ivato**: il sistema calcola questo prezzo a partire fa prezzo e dall'aliquota del codice IVA inserito. 

**Altezza/Larghezza/Profondità**: dati informativi relativi al listino. Il sistema non utilizza questi campi per eventuali elaborazioni. 

Per ogni articolo del listino è possibile inserire alcune tipologie di sconto come spiegato di seguito.

Si indica il **Tipo scaglione** nel campo omonimo, mentre nei campi successivi verranno riportati i dati relativi agli articoli inseriti a listino.

Questi scaglioni sono indicati nella tabella *Tipi Sconti*.

Nella parte destra della form troviamo una griglia in cui sono indicati tutti i possibili sconti per questo articolo. Queste vengono compilate solo selezionando un articolo presente nel listino.

### Sconti

Questi sconti sono degli sconti fissi che vengono riportati nei documenti.

Di seguito la corretta compilazione di questa griglia:

**N**: popolato dal sistema, indica l'ordine in cui vengono considerati gli sconti.

**Tipo sconto/Descrizione**: selezionare il tipo sconto tra quelli presenti. A standard sono previsti 3 tipologie diverse: *Sconto commerciale*, *Sconto a quantità* e *Sconto a valore*.

**Valore**: impostare la percentuale di sconto da applicare.

**Priorità**: questa priorità viene riportata dalle impostazioni eseguite nella tabella [Tipi sconti](/docs/configurations/tables/general-settings/discount-types).

**Casc./Imp.**: viene popolato a partire dal valore inserito nella tabella Tipi sconti.

### Sconti a quantità

Questa tipologia di sconto può avere diverse percentuali a seconda della quantità. 

**Tipo**: impostare il tipo sconto che dovrà essere *Sconto a quantità*. Questa dicitura verrà riportata poi nella stampa.

**Quantità**: impostare la quantità per la quale verrà attivato lo sconto.

**Percentuale**: inserire la percentuale di sconto al raggiungimento della quantità indicata

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Sconti a Valore

In questa tipologia lo sconto scatta quando si raggiunge un determinato importo per riga.

**Tipo**: impostare il tipo sconto che dovrà essere *Sconto a valore*.

**Valore**: impostare un valore superato il quale scatta lo sconto.

**Percentuale**: inserire la percentuale di sconto al raggiungimento del valore.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Prezzo per quantità

In questa caso, al raggiungimento di una certa quantità , il prezzo unitario cambia.

**Quantità**: impostare un valore superato il quale scatta il prezzo "personalizzato".

**Prezzo unitario**: inserire il prezzo unitario per la quantità ordinata.

Questi sconti si sommeranno ad altri eventuali sconti presenti.

### Note

A livello informativo è possibile inserire delle note legate ad un particolare tipo di scontistica.

### Documenti allegati

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />