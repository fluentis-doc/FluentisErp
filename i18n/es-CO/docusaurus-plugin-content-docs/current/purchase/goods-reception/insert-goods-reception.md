---
title: Nuovo Ricevimento merci
sidebar_position: 3
---

La form si apre tramite il percorso **Acquisti > Ricevimento merci > Crea ricevimento merci** oppure dal filtro di ricerca del Ricevimento merci, mediante il pulsante *Nuovo*.

## *Come creare un ricevimento merci*

<details>
 
<summary>Clicca per vedere i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo* e *Fornitore*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
3. **Inserisci eventuali informazioni aggiuntive** nei tab *Lotti e Serial Number* e *Dati articolo*.
 
</details>

## **1. Dati obbligatori**

Per creare il ricevimento merci, l'utente deve inserire i seguenti dati:

- **Fornitore**: può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) oppure [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Tipo documento**: predefinito nella tabella [Tipi ricevimento merci](/docs/configurations/tables/purchase/goods-receipt-types). Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il *Numero* in base alla data inserimento e all'ultimo numero inserito.   
- **Numero ricevuta**: viene proposto automaticamente in base al tipo, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero.  
- **Data ricevimento**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente sempre rispettando la regola di progressione tra data e numero.
- **Progetto**: posizionato nella parte inferiore alla griglia articoli; rappresenta il progetto da associare al documento e può essere selezionato tramite l'apposito help progetti.

## **2. Articoli**

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo omaggio*: viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Codice**: fa riferimento al Codice articolo barcode inserito nell'*Anagrafica articoli > tab Codice barcode*. 

- **Classe/Codice/Descrizione articolo**: si possono inserire manualmente oppure con l'ausilio dell'help di campo il quale proporrà tutti i dati relativi inseriti nell'Anagrafica articolo. Dopo l'inserimento dell'articolo, la sua Descrizione sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha Varianti, sarà possibile selezionare la variante desiderata dal tab Dati articolo.

- **Codice/Variente articolo fornitore**: fa riferimento al codice che il fornitore utilizza per identificare l'articolo e all'eventuale variante; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-item/) è stato associato un articolo fornitore. 

- **Unità di misura**: viene proposta l'unità di misura principale dell'articolo, ma nel caso in cui nell'anagrafica articolo siano codificate unità di misura alternative l'utente ha la possibilità di sceglierne un'altra.

- **Quantità documento**: rappresenta la quantità della U.M. principale; viene inserita la quantità riferita all'ordine fornitore evaso, non è un dato obbligatorio.   

- **Quantità ricevuta**: rappresenta la quantità effettivamente ricevuta.  

- **Prezzo**: rappresenta il *prezzo* presente nell'ordine fornitore, se la riga ricevimento ha evaso una riga ordine fornitore, o il *costo ultimo* di anagrafica articoli.

- **Riferimento ordine**: se la riga è stata creata evadendo una riga ordine fornitore viene riportato il numero ordine evaso.

- **Ubicazione**: se la causale ha un'ubicazione di default viene proposta tale ubicazione altrimenti può essere inserita [manualmente ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se il magazzino è gestito ad ubicazioni.  

#### Pulsanti specifici 

> **Evasione da ordine**: permette di di creare un ricevimento merci evadendo le righe di un ordine fornitore con la procedura [Evasione da ordini fornitori](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).   
>
> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisto. Il pulsante diventa attivo se il documento è salvato, ma non caricato.   
> Con clic su questo pulsante si apre la form corrispondente dove inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante *Execute*. In questa form vengono riportati gli articoli che sono stati inseriti con natura *Imballo* e che sono presenti nella tabella degli [Imballi a rendere](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lotti

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino. 
Se l'articolo non prevede la gestione dei [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-item), questo tab sarà disabilitato.   

#### Pulsante specifico 

> **Cancella lotto**: permette di cancellare la riga lotto selezionata

### 2.2 Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: visualizza l'articolo selezionato nella griglia superiore.   

- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.   

- **Magazzino e causale**: permette di inserire il magazzino e la causale di riferimento da utilizzare per il carico degli articoli relativi in magazzino. Se la riga articolo è stata ripresa a un ordine di acquisto, saranno proposti il magazzino e la causale inseriti nell'ordine, altrimenti possono essere inseriti manualmente per ciascuna riga articolo. Se i campi non sono valorizzati, al momento del carico del ricevimento merci saranno utilizzati quelli inseriti nei parameti ordini fornitori, tab [Carico](/docs/configurations/parameters/purchase/purchase-orders-parameters#carico). 

- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.

- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-item) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo.

### 2.3 Analitica

Può contenere informazioni sui centri di costo/profitto sui quali sono distribuiti i valori degli articoli.   

Questi dati possono essere inseriti manualmente oppure automaticamente (nel caso in cui i centri di costo/profitto siano stati inseriti precedentemente nell'*anagrafica contatto*, *anagrafica articolo* oppure nel *piano dei conti*).   

#### Pulsanti specifici

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Extra data

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />