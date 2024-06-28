---
title: Articoli
sidebar_position: 3
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

> **Articolo omaggio**: questo tipo di riga sta ad indicare che l'articolo inserito in quella riga sarà un articolo omaggio, e quindi non avrà un costo per il cliente;

> **Fattura d'acconto**: la riga articolo acconto viene utilizzata per creare delle fatture di acconto;

> **Storno fattura d'acconto**: la riga articolo storno acconto chiude la riga articolo acconto e gli acconti possono essere selezionati tramite un help acconti. Questi dati possono essere inseriti automaticamente quando si inserisce direttamente la classe o la matricola perché il tipo riga 'articolo codificato' viene selezionato in automatico.

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'anagrafica articolo, tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs) oppure verrà recuperato in base alle impostazioni dei parametri del documento.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

### Dati non obbligatori

**Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*.

Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

## Sconti/Listini

import TabDiscount from './../../../import/sections/sales-tab-discount.md'

<TabDiscount />

## Dati articolo

**Variante**: contiene l'eventuale variante dell'articolo;    

**Magazzino, causale e ubicazione**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi fatture*;     

**Articolo**: riporta l'articolo selezionato;     

**Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo; 

**Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale fattura;     

**Dettaglio dichiarazioni**: contiene eventuale [dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) del cliente;

**Riferimento ordine**: fa riferimento all'ordine dal quale è stata creata la fattura;

**Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

**Note**: offre la possibilità di inserire note per ogni articolo;

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

## Varianti

import TabVariant from './../../../import/sections/tab-variant.md'

<TabVariant />

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number]*(/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) oppure possono essere inserite manualmente.

Questa operazione è condizionata dalla presenza dei lotti e dei numeri seriali nel magazzino. 

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.

*Pulsanti specifici*

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />  
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

