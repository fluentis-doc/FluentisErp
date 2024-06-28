---
title: Articoli
sidebar_position: 4
---


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

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import UM from './../../../import/fields/item-um.md'

<UM />

import Price from './../../../import/fields/item-price.md'

<Price />

In assenza del listino, il dato proposto è il **Costo ultimo** ripreso dall'anagrafica articolo, tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs) oppure verrà recuperato in base alle impostazioni dei parametri del documento.

import Vat from './../../../import/fields/item-vat.md'

<Vat />


### Dati non obbligatori

import PurchaseTurnoverType from './../../../import/fields/purchase-turnover-type.md'

<PurchaseTurnoverType />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

import WarehouseDescriptionTemplate from './../../../import/sections/warehouse-description-template.md'

<WarehouseDescriptionTemplate />

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

*Pulsanti specifici*

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdateLocation from './../../../import/buttons/update-location.md'
import ReceptionsReversal from './../../../import/buttons/receptions-reversal.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdateLocation />
> <ReceptionsReversal />
> <UpdatePriceLists />


## Sconti/Listini

import PriceLists from './../../../import/fields/price-list.md'

<PriceLists />

import Discounts from './../../../import/fields/discounts.md'

<Discounts />


**Pulsante specifico**

import DeleteDiscounts from './../../../import/buttons/delete-discounts.md'

> <DeleteDiscounts />


## Dati articolo

import Location from './../../../import/fields/location.md'

<Location />

import Project from './../../../import/fields/project.md'

<Project />

**Rif. ordine**: nel caso in cui il DDT viene generato dall'ordine, il riferimento all'ordine in questo campo verrò riportato in automatico.

**Nota**: si possono inserire annotazioni riguardanti l'articolo che dopo saranno riportati in tutti i documenti generati da questo.

## Varianti

import TabVariant from './../../../import/sections/tab-variant.md'

<TabVariant />

*Pulsante specifico*

import DeleteVariant from './../../../import/buttons/delete-variant.md'

> <DeleteVariant />


## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab* [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) oppure possono essere inserite manualmente.

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.

*Pulsanti specifici*

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

## Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

*Pulsanti specifici*

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />