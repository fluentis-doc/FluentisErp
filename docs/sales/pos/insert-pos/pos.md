---
title: Nuovo POS
sidebar_position: 2
---

La form **Crea POS** si apre tramite il percorso **Vendite > POS > Crea POS** oppure tramite il pulsante **Nuovo** che si trova nella form di ricerca *POS*.

## **1. Dati obbligatori**
Nella form di inserimento vengono proposti automaticamente la **Data** e **Anno** corrente, ma possono essere modificati.

Per continuare la creazione della fattura di vendita, l'utente deve inserire i campi obbligatori:

- **Tipo POS** predefinito in *Configurazione > Tabelle > Vendite > Tipi POS*.

- **Numero** ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione POS](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione.

- **Conto**, usando l' [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure digitando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i dati.- 

:::danger[Attenzione]
Questo campo non è rilevante per la gestione della [**Contabilizzazione POS**](/docs/sales/pos/pos-accounting). La causale contabile associata alla contabilizzazione POS dovrà avere al suo interno la definizione di un conto Cliente **FISSO** e dettagliato con codice di **sottoconto** (ad esempio un conto "Cliente corrispettivi"). Il tipo importo sulla riga causale per il sottoconto clienti sarà impostato come *Totale Documento / registrazione*.
:::

- **Anagrafica**: si tratta di un campo alternativo al precedente *Conto* che può essere utilizzato per inserire un *Contatto* che non è abbinato ad alcun sottoconto

### 1.1 Totali documento

Nella parte destra della form sono presenti i totali del documento.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Pulsanti specifici  
> **Fiscale**: permette di lanciare la generazione dello scontrino fiscale interfacciandosi con un registratore di cassa (previa configurazione del collegamento mediante  campi appositi)  
> **Scarico POS**: permette lo scarico POS, se per ogni articolo sono state inserite il magazzino e la causale.


## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Inserendo il **Conto** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica contatto](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Altri campi 

- **Stato POS**: in fase di creazione, il POS non presenta nessun flag attivo. La sezione comprende i campi:
> - **Stampato** si attiva quando viene lanciata la stampa dello scontrino.  
> - **Scaricato** indica che il POS è stato scaricato dal magazzino manualmente oppure tramite la procedura di scarico automatico.  
> - **Contabilizzato**: viene automaticamente selezionato quando il POS viene contabilizzato.  
> - **Annullato**: il flag attivo permette di annullare il POS.

:::note
I flag possono essere tolti con la procedura di ripristino operazione.
:::

- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il POS in oggetto.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **Operatore**: permette di inserire l'utente che crea il documento. I dipendenti sono stati inseriti in precedenza nella tabella *Dipendenti* che si trova nel percorso *Home > Dipendenti*. 

- **Progetto**: usando il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
Questa associazione funziona solo al livello della testata dell'articolo.

### 2.1 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

#### Pulsante specifico

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.2  Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è associato, ma non percepisce provvigione.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

#### Pulsante specifico

> **Cancella agenti**: permette di cancellare gli agenti selezionati.

## **3. Articoli**

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.


### 3.1 Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare gli articoli con caratteristiche diverse:

> - **Articolo codificato**: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino; 
> - **Articolo note**: è una semplice nota, non incide sulla contabilità e sul magazzino.
> - **Articolo omaggio**: questo tipo di riga sta ad indicare che l'articolo inserito in quella riga sarà un articolo omaggio, e quindi non avrà un costo per il cliente;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo ivato**: rappresenta il prezzo con IVA e deve essere inserito in precedenza in *Anagrafica articoli > tab Costi* è può essere diverso per magazzini;

- **IVA** e **Imponibile** vengono calcolati in automatico, prelevando i valori dal prezzo ivato.

#### Pulsanti specifici

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Dettaglio articolo

All'interno di questo tab vengono riportarte/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riprende le informazioni dell'articolo selezionato nella griglia degli articoli.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo.

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*.

Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* 

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi POS*.

- **Note**: offre la possibilità di inserire note per ogni articolo.

### 3.4 Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **4. Riepiloghi**

### 4.1 Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Spese/Sconti/Maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.4 Riepilogo scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento. 
 
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto/sottoconto cliente**: conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso)