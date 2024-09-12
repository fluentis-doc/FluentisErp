---
title: Crea POS - sezione superiore
sidebar_position: 1
---

La form **Crea POS** si apre tramite il percorso **Vendite > POS > Crea POS** oppure tramite il pulsante **Nuovo** che si trova nella form di ricerca *POS*.

Nella form di inserimento vengono proposti automaticamente la **Data** e **Anno** corrente, ma possono essere modificati.

Per continuare la creazione della fattura di vendita, l'utente deve inserire i campi **obbligatori**:

- **Tipo POS** predefinito in *Configurazione > Tabelle > Vendite > Tipi POS*.

- **Numero** ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione POS](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione.

- **Conto**, usando l' [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) i dati.


**Totali documento**

Nella parte destra della form sono presenti i totali del documento.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

*Pulsanti specifici*:
> **Fiscale**: permette  
> **Scarico POS**: permette lo scarico POS, se per ogni articolo sono state inserite il magazzino e la causale.

La form contiene una serie di tab:

- [Testata](/docs/sales/pos/insert-pos/header) e le sue Procedure;

- [Articoli](/docs/sales/pos/insert-pos/items);

- [Riepiloghi](/docs/sales/pos/insert-pos/summaries).
