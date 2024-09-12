---
title: Crea picking
sidebar_position: 3
---

La form si apre tramite:  
 -  il percorso **Logistica > Picking > Crea picking** 

oppure tramite 

 - il pulsante **Nuovo** che si trova nella form  [Ricerca picking](/docs/logistics/picking/search-picking).

*Pulsante specifico*:

> **Evasione da ordine**: permette di inserire gli articoli all'interno del picking evadendo un ordine cliente. Premendo il pulsante si aprirà una maschera dove è possibile filtrare gli ordini cliente relativi al cliente in questione. E' quindi possibile evadere totalmente o parzialmente un intero ordine o una riga.

*Campi specifici*:

**Tipo picking**: predefinito in  *Configurazione > Tabelle >Logistica > Tipi picking*. Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il numero picking in base alla data inserimento e all'ultimo numero inserito;  

**Conto**: rappresenta il cliente/fornitore di riferimento (non è obbligatorio);  

**Numero**: viene proposto automaticamente in base al tipo, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero;  

**Data/Ora**: vengono proposte automaticamente la data e ora correnti, ma possono essere modificate manualmente sempre rispettando la regola di progressione tra data e numero.

**Stato**: rappresenta lo stato del documento (che può essere *Terminato*, *Da verificare* o *Sospeso*).

**Stato evasione**: può assumere i seguenti valori: *Non evaso*, *Evaso*, *Parzialmente evaso* o *Forzatamente evaso*; questo stato si riferisce allo stato di evasione delle singole righe, quindi ad esempio, se tramite la gestione spunta viene evasa anche una singola riga lo **Stato evasione** passerà da *Non evaso* a *Parzialmente evaso*.    

:::note Nota
Da notare che la colonna *Documento* presente in [Ricerca picking](/docs/logistics/picking/search-picking), si riferisce allo stato del picking e non a quello delle righe, quindi passerà in stato evaso solo quando sarà stato creato il DDT o la fattura.
:::

Nella griglia di inserimento si vanno ad inserire gli articoli specificando **Classe**, **Codice articolo** e **Quantità di prelievo**. E' inoltre possibile inserire un'**Unità di misura alternativa** con la relativa quantità. Nel campo **Magazzino** si definisce il magazzino di movimentazione e nel campo **Causale** la relativa causale. E' inoltre possibile specificare l'**Ubicazione** dalla quale prelevare l'articolo inserito.

Dati necessari per la movimentazione del magazzino:  
**Data prelievo magazzino**: rappresenta la data in cui deve essere fatta la registrazione di magazzino;  
**Utente**: rappresenta il codice utente di riferimento per il picking corrente. Per quanto riguarda i picking di trasferimento è necessario specificare il **Magazzino di partenza e di destinazione**: informazione utile per i picking di trasferimento;  
**Ubicazione**: rappresenta l'ubicazione sulla quale caricare gli articoli;  
**Cliente/fornitore**: rappresenta il conto per il quale effettuare il movimento a magazzino.

**Lotti**

Il tab, attivo solo se l'articolo selezionato nella griglia è gestito a lotti, permette l'inserimento del numero lotto e della relativa quantità.

La sezione Numeri di serie, attivo solo se l'articolo selezionato nella griglia è gestito a serial number, permette l'inserimento del numero di serie da attribuire all'articolo in questione.

**Extra Data Articolo**

Permette di inserire e visualizzare gli *Extra data* relativi alla singola riga.           
Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).

**Ordini di produzione collegati**

Se l'articolo è agganciato ad un ordine di produzione, questo tab permette di vedere tutte le informazioni relative all'ordine stesso.

**Documenti allegati**

Permette di allegare e visualizzare i documenti relativi ai singoli articoli.  

**Spunta**

Questo tab permette di visualizzare le righe spuntate tramite la [Gestione spunta](/docs/logistics/wms/sales/check-row-menagement) del WMS.    
Nel caso in cui non venga utilizzato il **WMS**, è comunque possibile inserire nuove righe di articoli spuntati manualmente.
La **Gestione spunta** serve a confermare le righe del picking realmente prelevate dall'operatore in magazzino; quindi, se in questa tabella è presente almeno una riga spuntata le procedure di creazione DDT e Fattura prenderanno in considerazione solo queste righe.         
Nel caso in cui non fosse presente nemmeno una riga nella tabella **Gestione spunta**, allora le procedure di creazione DDT e Fattura prenderanno in considerazione tutte le righe presenti nel picking.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).