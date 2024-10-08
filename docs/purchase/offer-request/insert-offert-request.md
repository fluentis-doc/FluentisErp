---
title: Inserimento richiesta di offerta
sidebar_position: 3
---

Questa funzionalità permette di inserire una nuova richiesta di offerta.

**Tipo**: è un campo obbligatorio. A seconda del **Tipo RDO** scelto, saranno attivate alcune funzionalità. All'inserimento del tipo verranno compilati anche **Data/Anno/Numero**;   
**Fornitore**: contiene l'anagrafica contatto;                
**Versione**: contiene la versione dell'offerta; è possibile creare una nuova versione con il pulsante della ribbon bar **Nuova versione**.       

### Tab Testata 

:::note Ricorda
Se il documento viene *creato automaticamente* da una RDA, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)


**Annotazioni**: questo campo viene ripreso dall'anagrafica fornitore, ma può essere inserito anche manualmente.             
**Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento.  

import InitialNote from './../../import/fields/initial-note.md'

<InitialNote />

import User from './../../import/fields/user.md'

<User /> 

*Pulsanti specifici*

> **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la data richiesta consegna e/o la data prevista consegna in testata è possibile sostituire in massa tali date nelle righe articolo già inserite.

## Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

*Pulsante specifico*

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

## Sconti 

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore> tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../import/sections/tab-discount.md'

<TabDiscount />

## Extra Data

import TabExtraData from './../../import/sections/tab-extra-data.md'

<TabExtraData />


### Tab Articoli 

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per dettagli sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.

### Dati obbligatori

import RowNumber from './../../import/fields/row-number.md'

<RowNumber />

import RowType from './../../import/sections/row-type.md'

<RowType />

import ItemClassDescription from './../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../import/fields/item-um.md'

<UM />

import Variant from './../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../import/fields/item-quantity.md'

## Sconti

**Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.

*Pulsante specifico*

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

## Dati articolo 

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

**Progetto**: rappresenta il progetto associato al documento. Si può inserire anche tramite l'apposito help progetti

**Articolo/Variante**: visualizza l'articolo selezionato nella griglia sopra e la sua variante;

**Richiesta di acquisto**: se l'offerta è stato creata da richiesta viene riportata la [Richiesta d'acquisto](/docs/purchase/purchase-requests/insert-purchase-request) di riferimento;

**Note**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.

**Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.

## Extra data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### Tab Riepiloghi

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

**Sconti finali articoli**:

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />