---
title: Extradata Propagation
sidebar_position: 4
---

# Propagazione degli ExtraData - Aspetti introduttivi

La funzionalità relativa alla propagazione degli ExtraData consente di estendere un determinato ExtraData definito su uno specifico oggetto ad un altro oggetto derivato.  
Ad esempio, un'ExtraData definito sull'oggetto FSItem (Articolo) potrà essere propagato sull'oggetto FSSalesOrderItem (Articoli dell'ordine di vendita).  
FSSalesOrderItem è un'estensione della classe FSItem.  

Poiché in FSItem è presente l'ExtraData definito al paragrafo precedente, la classe derivata FSSalesOrderItem potrà ereditare questa proprietà in funzione del meccanismo di inerithence proprio del paradigma di programmazione orientata agli oggetti.   


## Corpo Centrale

![](/img/en-US/extradata/20250317090341.png)

Il tab **Propagation** si compone di una griglia con le seguenti colonne:  
* **Property path**: obbligatorio - proprietà che collegherà le classi.  
* **Collection property**: obbligatorio - la proprietà della collection.  
* **Editable**: rende l’extradata modificabile in modo indipendente.  
* **Proprity**: indica la priorità. 
* **From val.  date / To validity date**: se vogliamo che sia temporanea, quindi abbia un inizio ed una fine.  

Nello screenshot d'esempio procediamo a collegare l'ExtraData 'FinituraExtraData' che abbiamo definito in uno scenario precedente 
[**Link Scenario Precedente**](docs\configurations\utility\extra-data\extradata\new-extradata-datasource.md).  

Per gestire la propagazione da un oggetto principale ad uno derivato è necessario avere, nel tab delle **attivazioni**, l'ExtraData attivo su entrambi gli oggetti e gestire poi la propagazione attraverso l'apposito tab **propagation**.

Nell'esempio, inseriamo la regola di collegamento tra le due classi.  

## Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'**ordine di vendita** interessato, per includere l'ExtraData nella form di dettaglio possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo della collezione degli **articoli**, e quindi espandiamo il nodo ExtraData.  
2. Trasciniamo l'ExtraData direttamente sulla griglia degli articoli associati all'ordine di vendita.   

![](/img/en-US/extradata/20250317101524.png)

L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà il valore **codice** salvato sulla corrispondente tabella lato MSSQL.  













