---
title: Articoli
sidebar_position: 4
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

## Griglia Articoli

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar. Le colonne disponibili sono le seguenti:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
>- *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.
>- *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.
>- *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.
>- *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
>- *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.
>- *Fattura d'acconto*: la riga articolo acconto viene utilizzata per creare delle fatture di acconto.  
>- *Storno fattura d'acconto*: la riga articolo storno acconto chiude la riga articolo acconto e gli acconti possono essere selezionati tramite un help acconti. Questi dati possono essere inseriti automaticamente quando si inserisce direttamente la classe o la matricola perché il tipo riga 'articolo codificato' viene selezionato in automatico.
:::note[NOTA]
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga - Articolo codificato vengono inseriti automaticamente.
:::

- **Barcode**: se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è stata abilitata la gestione dei Barcode, comparirà la colonna Barcode dove selezionare il dato per l'articolo tra i Barcode inseriti in *Anagrafica articolo > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Articolo cliente**: se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è stata abilitata la gestione degli Articolo cliente, comparirà la colonna Articolo cliente, con il codice articolo valido per il cliente intestatario del documento e inserito in *Anagrafica articolo > Clienti*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.
:::

- **Imponibile**: in questo campo viene riportato il Prezzo unitario, moltiplicato per la quantità articolo, al netto degli sconti.        

- **Sconti articolo**: viene riportata la somma degli sconti previsti per l'articolo.     

- **Sconti finali articolo**: viene riportata la somma degli sconti finali inseriti articolo inseriti nei Riepiloghi del documento.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*. Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.
Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.

*Pulsanti specifici*

> **Ricalcolo Conai**: se il [Conai](/docs/sales/sales-flow/conai) è abilitato per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.     

> **Aggiorna i dati Conai nell'anagrafica articolo**: se nel tab *Materiali Conai per l'articolo* vengono modificati Unità di misura e/o Peso, è possibile trasferire questi valori nella sezione Conai dell'anagrafica articolo.      

> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisti.
Il pulsante diventa attivo se il documento è salvato, ma non caricato.
Cliccando su questo pulsante si apre la form corrispondente dove: inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante Execute. In questa form vengono riportati gli articoli che spno stati inseriti con natura Imballo e che sono presenti nella tabella degli Imballi a rendere.         
  
> **Aggiornamento listini**: cliccando sulla tendina accanto al pulsante si accede a due procedure. La prima procedura è **Aggiorna il listino corrente**, che permette di allineare il prezzo dell'articolo internamente al Listino, a seguito di una eventuale variazione di prezzo direttamente nella riga articolo. Invece con la seconda procedura, **Crea nuovo listino con nuova validità**, è possibile creare un nuovo listino personalizzato per il cliente intestatario del documento; verranno richiesti, in un pop-up, le date di inizio e fine validità del nuovo listino.      

> **Mostra/Nascondi dettagli**: cliccando questo bottone si rendono o meno visibili le tab interne agli Articoli.   

> **Gestione acconti**: Fluentis permette di gestire le fatture di acconto e il relativo storno, procedure apribili cliccando questo pulsante.
> - **Creazione fattura di acconto**
Le fatture di acconto possono avere un [Tipo documento](/docs/configurations/tables/sales/invoices-type) dedicato o meno, in quanto la gestione degli acconti non avviene a livello di tabella, ma di articoli.
La gestione degli acconti prevede quindi la creazione di una normale fattura di vendita, per la quale sono richiesti un **Tipo**, un **Cliente**, ecc.
Dopo la compilazione dei dati di Testata, è possibile passare alla tab Articoli.
Nella griglia articoli, inserire un *Tipo riga 6 Fattura d'acconto*, una Descrizione libera,  il Prezzo, l'IVA, un Fatturato (che dovrebbe avere come conto Anticipi clienti), ed eventuali altri dati. E' quindi la riga di questa tipologia a determinare l'ammontare dell'acconto.
Una volta completata la fattura, è possibile stamparla. 
A questo punto la fattura d'acconto risulta confermata.
Al momento della creazione di altri documenti per questo cliente, Fluentis mi avviserà dell'esistenza di una fattura di acconto.
> - **Storno fattura di acconto**
Per stornare una fattura di acconto è necessario creare una nuova fattura di vendita intestata allo stesso cliente.
Nel tab Articoli, se il cliente ha almeno una fattura di acconto, sarà attivo il bottone della ribbon bar **Gestione acconti**. Cliccandolo verrà aperta l'omonima procedura.    
Nel tab **Storno acconti** è possibile selezionare gli acconti da stornare; dopo la selezione, con il bottone **Crea storno** verrà creato lo storno, il quale sarà riportato nella griglia in basso. 
Alla chiusura della maschera verrà chiesto se inserire il nuovo valore di storno in fattura. In caso di conferma, sarà possibile consultare la riga storno nel tab Articoli della fattura, che riporterà i dati della fattura di acconto precedentemente creata.

Sono poi presenti alcune tab che analizziamo di seguito. 

## Sconti/Listini

import TabDiscount from './../../../import/sections/sales-tab-discount.md'

<TabDiscount />

## Dati articolo

- **Variante**: contiene l'eventuale variante dell'articolo;    

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino, causale e ubicazione**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi fatture*;     

- **Articolo**: riporta l'articolo selezionato;     

- **Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo; 

- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale fattura;     

- **Dettaglio dichiarazioni**: contiene eventuale [dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) del cliente;

- **Riferimento ordine**: fa riferimento all'ordine dal quale è stata creata la fattura;

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Note**: offre la possibilità di inserire note per ogni articolo;

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

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

