---
title: Articoli
sidebar_position: 2
---


Per inserire un *Nuovo articolo* nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo articolo** presente nella ribbon bar.

### Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Classe/Codice/Descrizione articolo**: si possono inserire manualmente oppure con l'ausilio dell'help di campo il quale proporrà tutti i dati relativi inseriti nell'Anagrafica articolo. Dopo l'inserimento dell'articolo, la sua Descrizione sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha Varianti, sarà possibile selezionare la variante desiderata dal tab Dati articolo.

- **Unità di misura**: viene proposta l'unità di misura principale dell'articolo, ma nel caso in cui nell'anagrafica articolo siano codificate unità di misura alternative l'utente ha la possibilità di sceglierne un'altra.

- **Quantità**: rappresenta la quantità dell'U.M. principale e di default ha il valore 1; può essere modificata manualmente oppure può essere ripresa dal documento considerato per l'evasione.

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Dati articolo*; lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata. Attraverso il doppio click nel campo Listini l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'Anagrafica contatto. Se questo non è presente, viene proposto il valore presente nell'Anagrafica articolo, ma l'utente ha la possibilità di inserire un'altro dato. 

- **Importo unitario**: viene calcolato in automatico al netto degli sconti.

### Dati non obbligatori

- **Fatturato acquisti**: viene proposto il dato inserito nel tab *Generalità* dell'anagrafica articoli.   

- **Data chiusura**: indica la data di chiusura dell'offerta; viene compilata automaticamente se al momento della [creazione ordine fornitore da offerta fornitore](/docs/purchase/offer-request/procedures/order-creation) viene selezionato il flag di chiusura delle offerte. 

- **Data stimata di consegna**: indica la data prevista per la consegna della merce. Viene proposta in automatico se la *Data prevista consegna*è stata valorizzata nel tab testata.

- **Periodo di prevista consegna**: campo descrittivo libero in cui è possibile indicare il periodo di tempo previsto per la consegna della merce.

### Sconti

- **Tipo scaglione**: riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica fornitore oppure dal listino.  

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.   

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica fornitore, dalla soluzione di pagamento assegnata al documento, dal listino, dalla [definizione politiche sconti](/docs/purchase/price-control/definition). Tutti i dati proposti sono modificabili.

*Pulsante specifico*
> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

### Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

>- **Articolo**: visualizza l'articolo selezionato nella griglia superiore.   
>- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
>- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.
>- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino.    

>- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.
>- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la sua data inizio/fine validità.

>- **Unità di misura/Quantità alternativa**: permette di impostare un'unità di misura alternativa e la relativa quantità per l'articolo selezionato nella griglia.     
>- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    

>- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.   
>- **Richiesta di acquisto**: se l'offerta è stato creata da RDA viene riportata la [Richiesta d'acquisto](/docs/purchase/purchase-requests/insert-purchase-request) di riferimento.   


## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

