---
title: Articoli
sidebar_position: 4
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.

Di seguito analizzati i campi *obbligatori* presenti nella griglia principale:
- **Riga**: questo campo contiene il numro riga e si compilerà automaticamente e progressivamente all'inserimento dei dati nella riga.

- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
>- *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.
>- *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.
>- *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.
>- *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
>- *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.
:::note[NOTA]
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga - Articolo codificato vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note[NOTA]
In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.
:::

- **Imponibile**: questo campo contiene il Prezzo unitario moltiplicato per la quantità, al netto degli sconti.

- **Sconti articolo**: contiene gli sconti validi per l'articolo, provenienti dalla testata, dal listino o dall'inserimento manuale.

- **Sconti finali articolo**: contiene gli sconti finali articolo imputati nei riepiloghi del documenti, che hanno la caratteristica di venire spalmati in tutti gli articoli.   

import Vat from './../../../import/fields/item-vat.md'

<Vat />

I campi *non obbligatori*, invece, sono:

- **Barcode/Articolo cliente e Descrizione articolo cliente**: questi dati verranno ripresi dalle informazioni presenti nell'*Anagrafica articoli*; per gestire i Barcode è necessario attivarne la gestione nei [Parametri ordine cliente](/docs/configurations/parameters/sales/sales-orders-parameters). Questa colonna permette la proposta dell’articolo ricercandolo per il suo barcode. Essendo il barcode univoco, una volta digitato il barcode inserito in anagrafica articolo, verrà proposto l’articolo.   

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*; se non viene recuperato va inserito scegliendo una voce tra quelle proposte dalla relativa combo altrimenti la mancanza di questo dato potrebbe causare degli errori nella contabilizzazione della fattura che verrà generata dall'ordine, se in *Anagrafica cliente > Dati contabili > tab Amministrativa* non è stato impostato un valore nel campo *Ricavo di contropartita predefinito*.

- **Evaso forzato**: se attivo, questo flag indica che la riga articolo è stata evasa forzatamente: perchè il cliente non vuole più quell'articolo, oppure la quantità prodotta e spedita è inferiore alla quantità ordinata ma non verrà prodotto il saldo e quindi si andrà ad evadere forzatamente la quantità. 

:::note[NOTA]
Se viene gestita la produzione, quando il flag viene attivato, viene mostrato un messaggio che avvisa l'utente: “L'evasione forzata della riga comporta l'automatica eliminazione di eventuali ordini pianificati collegati a commesse in stato schedulata e l’evasione delle commesse in stato schedulata e non esaminata". Per quanto riguarda invece i documenti generati a fronte di commesse in stato lanciato o esecutivo, le commesse e documenti non verranno modificati.     
:::

- **Data Merce pronta e Data consegna**: queste date indicano la data in cui il materiale sarà pronto (quindi quando la produzione sarà terminata) e la data in cui si prevede di consegnare il materiale; la Data Merce Pronta deve essere minore o uguale alla Data consegna.

Nella sezione Articoli sono presenti i seguenti pulsanti, nella barra degli strumenti: 

> **Distinta Base**: permette di aprire la distinta base dell'articolo selezionato per poterne visualizzare i dettagli; (per maggiori informazioni su questo argomento si rimanda alll'articolo Albero della disinta base e gestione strutture).  
> **Esplodi primo livello distinta**: permette di aggiungere nell'ordine cliente i materiali (materie prime e semilavorati) presenti nella distinta base dell'articolo; verranno quindi riportati nell'ordine i componenti di primo livello del prodotto finito. Questa opzione per esempio è molto utilizzata per i prodotti a Kit (quindi composti da più parti).  
> **Aggiornamento listini**: permette di aggiornare il prezzo dell'articolo in un listino esistente (salvare il documento per abilitare questi bottoni), oppure di creare un nuovo listino con l'articolo e il relativo prezzo selezionato.       
> **Suddividi quantità in più consegne**: consente di suddividere la quantità di una riga articolo in più righe in base alle date di consegna. Selezionando la riga e cliccando sul pulsante si aprirà la form **Consegne diverse** all'interno della quale verrà riportata la *Data merce pronta*, la *Data consegna* e la *Quantità* della riga. Nella riga successiva si dovrà andare ad indicare la *Data merce pronta* (che dovrebbe essere la stessa), la *Data di consegna* che sarà diversa e la *Quantità* che si andrà a spedire in quella data e poi bisognerà andare a modificare la data nella prima riga aggiornandola alla quantità rimanente in modo che la somma delle quantità delle due righe dia come risultato la quantità iniziale della riga prima dello sdoppiamento. Confermare l'operazione con il pulsante *OK*.  
> **Confezionamento**: permette di creare una UDC a partire dalla riga selezionata. La riga deve essere un articolo codificato e salvato nel documento. L'utente deve avere i diritti all'interno dei [Parametri di carico/scarico](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) per il caricamento del pallet. Inoltre l'articolo deve essere gestito a UDC ed in base alle impostazione del Tipo UDC inserite in anagrafica articolo, tab [Confezionamento](/docs/erp-home/registers/items/create-new-items/item-registry/packaging), verrà creato l'UDC rispettando i criteri.      

Analizziamo a questo punto le tab presenti sotto la griglia articoli. 

## Sconti/Listini

Questa tab ha come primo campo l'eventuale **Listino** valido per il cliente e collegato all'articolo, altrimenti è un campo che si può compilare manualmente per prendere il prezzo dell'articolo da uno specifico listino. Accanto ai dati del listino assegnato è presente il campo **Tipo scaglione**: esso riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica cliente oppure dal listino stesso.
Il flag **Prezzo manuale** permette di modificare il prezzo e gli sconti manualmente, e di mantenerli nei documenti che vengono creati dal documento dove la modifica è stata apportata.

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica cliente, dalla soluzione di pagamento assegnata al documento, dal listino dall'associazione listino-cliente. Tutti i dati proposti sono modificabili.

Da questa griglia è possibile utilizzare il bottone **Cancell sconti** della barra degli strumenti. 

## Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino/descrizione/Causale**: in questi campi andrà indicato il magazzino di scarico del materiale con la relativa causale necessario per gli scarichi della merce al momento dell'emissione del DDT o della fattura; questi dati vengono impostati nella tabella dei [Tipi ordine](/docs/configurations/tables/sales/sales-order-types).

- **Progetto**: è il progetto associato al documento; questo può essere assegnata, nel caso dell'ordine cliente, con l'ausilio della procedura *Evasione da commessa* oppure può essere assegnata con l'ausilio del help di campo.

- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale documento.

- **Offerta**: riporta il riferimento dell'offerta cliente se l'ordine proviene da [Offerta](/docs/sales/offers/search-offers).

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Note**: offre la possibilità di inserire note per ogni articolo che si vuole vengano riportate in tutti i documenti.  

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* oppure possono essere inserite manualmente.

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

## Matrici

Questo tab viene visualizzato esclusivamente per i [Tipi ordine](/docs/configurations/tables/sales/sales-order-types) che hanno il flag di gestione delle matrici Extra Data. 

## Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Il campo **Stato** in cima a questa sezione riporta la situazione dell'articolo nell'eventuale ciclo di produzione e si aggiorna in automatico in base allo stato della commessa collegata.
L'articolo può avere i seguenti stati:
- *Inserito* quando viene inserito l'articolo;
- *Confermato* quando l'ordine viene confermato, con i relativi flag e data in testata; 
- *In produzione* quando viene generata la commessa, attraverso la procedura di [Generazione commesse di produzione](/docs/planning/ms-master-scheduling/general-schedule) o automaticamente se il tipo ordine lo prevede; 
- *Prodotto* se la commessa collegata è in stato evaso;
- *Annullato* se l'articolo viene evaso forzatamente. 