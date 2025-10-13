---
title: Datasources
sidebar_label: Datasources
sidebar_position: 3
---

### Form
La form dei datasource è raggiungibile tramite il seguente percorso: **Applications Resource Manager** > **Database** > **Data Sources**.  

La form dei datasource si presenta è così composta:
* un **ribbon** menu con cui è possibile eseguire le consuete operazioni di CRUD ed il tasto **anteprima** che consente di visualizzare il risultato dell'esecuzione del datasource.
* un filtro standard con cui è possibile filtrare i record esistenti (i datasources) per Codice, Descrizione, Oggetto, Area e Data.  
* una griglia dei risultati dove è possibile visualizzare l'elenco dei datasource presenti in base dati.  

### Creazione di un nuovo datasource

La creazione di un nuovo datasource avviene mediante il pulsante 'Nuovo' e prevede che vengano popolati:
* i dati di testata, quali codice e descrizione.
* la tipologia del datasource, distinguendo tra
  * datasource basati su un oggetto standard o custom di fluentis.
  * datasource basati su una query SQL.
  * datasource di tipologia **GROUP BY** basati su un oggetto standard o custom di fluentis.

A seconda della tipologia di datasource selezionato i campi di input da popolare saranno differenti.   

* Per i datasource semplici, cioè basati su un **oggetto** dovremmo popolare:
  * codice.
  * tipo di datasource, scegliendone uno di tipo semplice.
  * descrizione.
  * codice dell'oggetto fluentis su cui vogliamo basare il datasource.
  * data di fine validità, che consente di specificare una data dopo la quale il datasource non è più disponibile per l'utente di Fluentis.
  * Take Rows / Skip Rows, permette di definire un range di righe da prendere o saltare.
  * Area, si tratta di una descrizione presa da dizionario.
* Per i datasource basati su un **query SQL** dovremmo popolare:
  * i campi di testata, quali
    * codice.
    * descrizione.
  * tipo di datasource, selezionando SQL Query DataSource,
  * data di fine validità, che consente di specificare una data dopo la quale il datasource non è più disponibile per l'utente di Fluentis.
  * SQL Query, specificando una query creata e salvata precedentemente tramite il **FluentisQueryStudio**.   
  * contesto (opzionale).
  * parametri (opzionale).
  * area, si tratta di una descrizione presa da dizionario.
  * Modulo di business.

Per quanto concerne l'utilizzo di **FluentisQueryStudio** quale strumento per la creazione / salvataggio di query in base dati, si rimanda al seguente [LINK](/docs/applications/database/database-intro).   
E' fondamentale che la query creata tramite il **FluentisQueryStudio** rispetti delle precise regole di formattazione:
* la query deve restituire almeno i campi **Id**, **Code**, **Description** per poter essere riutilizzata all'interno di un datasource altrimenti non sarà visibile all'interno della relativa combobox.   
  
* Infine, ci sono i datasource basati su clausola **GROUP BY**.
* Per questa tipologia di datasource, è necessario popolare:
  * codice e descrizione,
  * tipo datasource, scegliendo 'GROUP BY Data Source',
  * data fine validità (opzionale),
  * oggetto su cui basare il datasource,
  * take rows / skip rows,
  * area, si tratta di una descrizione presa dal dizionario.

* Tramite il tab delle Proprietà è possibile definire i criteri di aggregazione che sfrutteranno la clausola di GROUP BY.
Analogamente al linguaggio SQL, la clausola di GROUP BY, permette di raggruppare i record secondo determinati criteri di aggregazione.
In particolare, nel tab di destra 'Proprietà visibili' è presente una tabella con i seguenti campi:
* codice
* alias
* ruolo
* criterio di aggregazione
* percorso della proprietà
* formula
* ordina per posizione
* ordinamento
* somma incrementale

Per la gestione del criterio di aggregazione è necessario agire sulla colonna 'Criterio di aggregazione', la quale permette di scegliere un valore tra cui:
* Dimensione, oppure
* Metrica.

Le **dimensioni** sono un attributo qualitativo, ovvero una categoria o un descrittore. Servono per segmentare o ragruppare i dati.  
Le **metriche** sono un attributo quantitativo, ovvero un valore numerico che può essere misurato, aggregato o calcolato.  
Potremmo quindi aggregare le fatture di vendita (oggetto FSSalesInvoice) per tipologia di fattura (FSSalesInvoiceType.Code), così come da screenshot sottostante.  
![](/img/it-it/applications/database/20250529162809.png)


