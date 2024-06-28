---
title: Articoli
sidebar_position: 2
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

**Tipo riga** offre la possibilità di selezionare gli articoli con caratteristiche diverse:

> **Articolo codificato**: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino; 
> **Articolo note**: è una semplice nota, non incide sulla contabilità e sul magazzino.
> **Articolo omaggio**: questo tipo di riga sta ad indicare che l'articolo inserito in quella riga sarà un articolo omaggio, e quindi non avrà un costo per il cliente;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

**Prezzo ivato**: rappresenta il prezzo con IVA e deve essere inserito in precedenza in *Anagrafica articoli > tab Costi* è può essere diverso per magazzini;

**IVA** e **Imponibile** vengono calcolati in automatico, prelevando i valori dal prezzo ivato.

*Pulsanti specifici*

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

## Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

## Dettaglio articolo

All'interno di questo tab vengono riportarte/inserite ulteriori informazioni relative all'articolo.

**Articolo**: riprende le informazioni dell'articolo selezionato nella griglia degli articoli.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

**Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo.

**Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

**Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*.

Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* 

**Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi POS*.

**Note**: offre la possibilità di inserire note per ogni articolo.

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />