---
title: Articoli
sidebar_position: 4
---


In questo tab vengono inseriti tutti gli articoli con i relativi dati.

I dati si inseriscono manualmente, con l'ausilio dell'help di campo oppure possono essere proposti dalle procedure collegate ([Creazione DDT da Ricevimento merci](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o [Evasione DDT di acquisto da ordini](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).


## Griglia articoli

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

:::note Nota
Se il DDT è stato creato mediante evasione di un ordine fornitore tutti i dati saranno ripresi dall'ordine.
:::

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Sconti/Listini*. Lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contatti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo **Listini** (tab *Sconti/Listini*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.    
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri DDT Acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) il flag *Costo a zero in assenza di listini* non è attivo.

- **Importo**: viene calcolato in automatico al netto degli sconti.

- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'*Anagrafica contatto*. Se questo non è presente, viene proposto il valore presente nell'*Anagrafica articolo*, ma l'utente ha la possibilità di inserire un dato diverso. È un campo obbligatorio.

### Dati non obbligatori

- **Codice/Descrizione articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) è stato associato un articolo fornitore. 

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

*Pulsanti specifici*

> **Ricalcolo Conai**: se la [Gestione Conai](/docs/sales/sales-flow/conai) è abilitata per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.
>
> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisto.   
Il pulsante diventa attivo se il documento è salvato, ma non caricato.   
Con clic su questo pulsante si apre la form corrispondente dove inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante **Execute**. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli [Imballi a rendere](/docs/configurations/tables/logistics/package-to-be-returned).    
>
> **Aggiorna ubicazione**: utilizzata per aggiornare l'ubicazione su più righe articolo. Il pulsante diventa attivobselezionando almeno due articoli e apre l'help ubicazioni da cui scegliere la nuova ubicazione per tutti gli articoli selezionati.   
>
> **Storno ricevimenti**: il pulsante è attivo solo per i [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) che hanno la *Natura DDT* di tipo *Reso*. Nella form vengono visualizzati tutti i DDT intestati a quel fornitore che sono già stati caricati a magazzino. Dopo aver selezionato le righe articolo e le relative quantità da stornare sarà sufficiente premere il pulsante *Storno ricevimenti* per inserirli nel DDT.    
>
> **Aggiornamento listini**: il pulsante **Aggiorna listino corrente** permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata.    
il pulsante **Crea nuovo listino con nuova validità** invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nel DDT.


:::important Ricorda   
Quando si crea/aggiorna un listino mediante questa procedura vengono riportati nel listino solo gli sconti che sono stati inseriti manualmente nel DDT. 
:::

## Sconti/Listini

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

*Pulsante specifico*

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 


## Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riporta classe, codice e descrizione dell'articolo selezionato nella griglia.   
- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.   
- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) oppure dall'ordine fornitore, se il DDT deriva da evasione di un ordine. Possono essere modificati manualmente per ciascuna riga articolo.   
- **Ubicazione**: viene proposta in automatico se alla causale utilizzata è stata associata un'ubicazione nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates) oppure se l'articolo è stato inserito nella [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map/). Può essere inserita o modificata manualmente.   
- **Valorizzata**: indica se la riga articolo è stata valorizzata, ovvero se è stata evasa all'interno di una fattura di acquisto.   
- **Valorizzata parzialmente**: indica se la riga articolo è stata valorizzata per una quantità parziale.   
- **Valorizzata forzatamente**: indica se la riga articolo è stata valorizzata forzatamente.   
- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.   
- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo, altrimenti è possibile selezionare una tra le unità di misura alternative codificate per l'articolo.   
- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    
Questo flag assieme ai campi *Unità di misura alternativa* e *Quantità alternativa* sono visibili solo se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters) è stato attivato il flag *Gestione doppia unità di misura*.
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
- **Riferimento ordine**: nel caso in cui il DDT viene generato dall'ordine, il riferimento all'ordine sarà riportato in questo campo.
- **Dettaglio dichiarazioni**: viene riportata la [Dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) usata per proporre l'iva dell'articolo; dalla combo box è possibile cambiare la dichiarazione d'intento di riferimento, se presenti più dichiarazioni valide.

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino.   
Se l'articolo non prevede la gestione dei [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), questo tab sarà disabilitato.

:::tip Ricorda
Se nei [Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-orders-parameters) il flag *Lotti e S.N. obbligatori* è disabilitato sarà possibile salvare il documento senza inserire i lotti/serial number. Inoltre, se la *Tipologia di prelievo* del lotto codificata nell'[anagrafica articolo](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) è *FIFO* o con *Data scadenza* al momento del carico a magazzino del DDT i lotti saranno proposti in automatico se non sono già stati inseriti in precedenza.
:::

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

## Materiale Conai per l'articolo

Questo tab è visibile se per la società attiva è stata attivata la gestione Conai.

Questa sezione riporterà i materiali d’imballaggio che compongono l’articolo, con la relativa unità di misura, peso unitario (abbattuto dell’eventuale percentuale d’esenzione dell’anagrafica cliente) e il totale del peso ottenuto dalla moltiplicazione tra numero di articoli venduti per il peso unitario.    
Al salvataggio del documento, o alla pressione del pulsante **Ricalcolo Conai**, Fluentis inserirà una o più righe spese recuperando l’articolo dei materiali, con quantità uguale alla somma delle quantità e prezzo uguale al costo conai per quel materiale.

Per maggiori informazioni sulla [Gestione Conai](/docs/sales/sales-flow/conai) in Fluentis vedere la pagina allegata.

## Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono: 

- **Prezzo unitario**: il valore del campo *Prezzo*; 
- **Quantità**: il valore del campo *Quantità* o *Quantità alternativa*, a seconda del flag *Prezzo unità di misura alternativa*;
- **Importo di riga**: Prezzo articolo * Quantità articolo; 
- **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
- **Importo**: Importo di riga - Totale sconti;
- **Imposta**: Importo * aliquota IVA dell'articolo; 
- **Totale**: Importo + Imposta.