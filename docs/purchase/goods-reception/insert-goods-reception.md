---
title: Inserimento Ricevimento Merci
sidebar_position: 3
---

Percorsi creazione nuovo **Ricevimento Merci**:

- andando in **Acquisti > Ordine fornitore > Crea ricevimento merci**  

- oppure tramite il pulsante **Nuovo** che si trova nella form  [Ricerca ricevimento merci](/docs/purchase/goods-reception/search-goods-reception).

## Dati obbligatori

import Vendor from './../../import/fields/vendor.md'

<Vendor />

**Tipo ricevimento merci**: predefinito in  *Configurazione > Tabelle > Acquisti > Tipi ricevimento merci*. Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il **Numero** in base alla data inserimento e all'ultimo numero inserito;  
**Numero**: viene proposto automaticamente in base al tipo, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero;  
**Data ricevimento**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente sempre rispettando la regola di progressione tra data e numero.

## Articoli

import RowType from './../../import/sections/row-type.md'

<RowType />

**Codice**: fa riferimento al *Codice articolo barcode* inserito nei *Articoli > tab Codice barcode*.  

import ItemClassDescription from './../../import/sections/item-class-description.md'

<ItemClassDescription />

import Variant from './../../import/fields/item-variant.md'

<Variant />

**Codice articolo fornitore**: fa riferimento alla tabella degli *Articoli fornitore*;  
**Variante articolo fornitore**: fa riferimento alla tabella delle *Varianti* degli articoli fornitore;  

import UM from './../../import/fields/item-um.md'

<UM />

**Quantità documento**: rappresenta la quantità della U.M. principale; viene inserita la quantità riferita all'ordine fornitore evaso, non è un dato obbligatorio;  
**Quantità ricevuta**: rappresenta la quantità effettivamente ricevuta;  
**Unità di misura alternativa**: viene proposta U.M. presente nel tab U.M. alternative dell'*Anagrafica articolo* con il flag di *Default* impostato;  
**Quantità alternativa**: viene proposto il valore relativo all' U.M. alternativa, calcolato moltiplicando o dividendo la quantità gestionale (relativa all' U.M. principale) con il fattore di conversione impostato nell'*Anagrafica articolo > tab UM alternativa*;  
**Prezzo**: rappresenta il *prezzo* presente nell'ordine fornitore, se la riga ricevimento ha evaso una riga ordine fornitore, o il *costo ultimo* di anagrafica articoli;  
**Opzione**: il dato, obbligatorio, corrisponde alla tabella delle *Opzioni* della distinta base;  
**Magazzino**: è il magazzino di ricevimento della merce, viene ripreso dall'ordine fornitore se la riga ricevimento ha evaso una riga ordine fornitore oppure può essere inserito [manualmente ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dall'utente;  
**Causale**: è la causale di ricevimento della merce, viene ripresa dall'ordine fornitore se la riga ricevimento ha evaso una riga ordine fornitore oppure può essere inserita [manualmente ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dall'utente;  
**Riferimento ordine**: se la riga è stata creata evadendo una riga ordine fornitore viene riportato il numero ordine evaso;  
**Ubicazione**: se la causale ha un'ubicazione di default viene proposta tale ubicazione altrimenti può essere inserita [manualmente ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se il magazzino è gestito ad ubicazioni.  

*Pulsanti specifici*:

import PackagesManagement from './../../import/procedure/packages-management.md'

> **Evasione da ordine**: permette di di creare un ricevimento merci evadendo le righe di un ordine fornitore con la procedura [Evasione da ordini fornitori](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order).
> <PackagesManagement />

### Lotti

Vengono riportati i lotti che devono essere caricati nel magazzino e che sono collegati all'articolo in  Anagrafica articolo > tab [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) oppure possono essere inserite manualmente.

*Pulsante specifico*:

> **Cancella lotto**: permette di cancellare la riga lotto selezionata

### Analitica

import TabAnalytic from './../../import/buttons/delete-pc.md'

<TabAnalytic />

*Pulsanti specifici*

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### Extra data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />