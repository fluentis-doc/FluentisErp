---
title: Articoli
sidebar_position: 3
---

## Articoli

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

## Articoli

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.


### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

import RowType from './../../../import/sections/row-type.md'

<RowType />

> **Articolo omaggio**: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi]*(/docs/erp-home/registers/items/create-new-items/item-registry/costs) oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

### Dati non obbligatori

**Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*. Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

**Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dai *Tipi DDT* oppure si inseriscono manualmente.

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

*Pulsanti specifici*

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />


## Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

## Dati

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

**Articolo**: visualizza la descrizione della matricola ed eventualmente, della variante dell'articolo;

**Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo.

**Riferimento ordine**: fa riferimento all'ordine dal quale è stata creata la DDT;

**Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

**Note**: offre la possibilità di inserire note per ogni articolo.

**Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale documento.

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### Varianti

import TabVariant from './../../../import/sections/tab-variant.md'

<TabVariant />

*Pulsante specifico*

import DeleteVariant from './../../../import/buttons/delete-variant.md'

> <DeleteVariant />

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number]*(/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) oppure possono essere inserite manualmente.

Questa operazione è condizionata dalla presenza dei lotti e dei numeri seriali nel magazzino. 

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.  

*Pulsanti specifici*

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

## Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />