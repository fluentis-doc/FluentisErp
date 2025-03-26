---
title: Extra Data
sidebar_position: 0
---

## ExtraData - Aspetti introduttivi

Gli **ExtraData** sono una modalità per aggiungere **nuove proprietà** sia ad oggetti standard che custom di Fluentis senza dover ricorrere all'utilizzo di codice custom e quindi alla compilazione di progetti basati su del **codice custom**.    
Tutti i principali oggetti funzionali come articoi, ordini, fatture, sono già predisposti all'aggiunta di ExtraData.  
La form degli **ExtraData** è raggiungibile da **Configurazione** > **Utilità** > **ExtraData.**

### Categorie di ExtraData

Gli ExtraData possono essere di n. 3 tipologie:
* **ExtraData semplici.**
* **ExtraData basati su un oggetto.**
* **ExtraData basati su un datasource.**

Ciascuna tipologia di ExtraData presenta delle caratteristiche specifiche.    
***La form degli ExtraData si presenta così come segue:***   

### Ribbon Menu  
Il RIbbon menu permette all'utente di svolgere le operazioni sugli ExtraData, nello specifico:
* **Search**: permette di cercare gli ExtraData presenti.
* **New**: permette di creare un nuovo ExtraData.
* **Edit**: permette di aprire in modalità read-write un ExtraData presente.
* **View**: permette di aprire in modalità read-only un ExtraData presente.
* **Remove**: permette di eliminare un ExtraData presente.

### Filtro Standard  
Il filtro standard permette la ricerca degli ExtraData definiti in Fluentis per **codice**.  

### Corpo Centrale  
Il corpo centrale presenta presenta una griglia dei risultati relativa ai singoli Extra Data definiti in Fluentis.  
Tale griglia si compone così come segue: 

    <table>
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Attributo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">**ExtraData**</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>
            
            <tr>
                <td rowspan="3">**Business Object**</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">**Data Type**</td>
                <td>Data type</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>

            <tr>
                <td rowspan="2">**DataSource**</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">**Validity**</td>
                <td>Start Validity</td>
            </tr>
            <tr>
                <td>End Validity</td>
            </tr>
        </tbody>
    </table>

Aprendo la form di dettaglio di un ExtraData, si avrà accesso al pannello di parametrizzazione dell'ExtraData.

La form è composta da n. 3 tab.
* **Testata**
* **Attivazioni**
* **Propagazione**

Il tab relativo alla **testata** fa riferimento alle informazioni relative all'Extra Data, e nel dettaglio:

Il tab delle **Attivazioni** fa riferimento agli **oggetti padre** di Fluentis su cui vengono agganciati gli ExtraData.  
Ciascun ExtraData può avere molti oggetti padre.   

Il tab delle **Attivazioni** fa riferimento agli **oggetti padre** di Fluentis su cui vengono agganciati gli ExtraData.  
Ciascun ExtraData può avere molti oggetti padre.   

il tab della **Propagazione** consente di **estendere** un determinato ExtraData definito su uno specifico oggetto su un altro oggetto **derivato**.  

## ExtraData Semplice

Tramite l'ExtraData semplice è possibile aggiungere delle nuove proprietà semplici ad un oggetto Fluentis esistente.  
Le proprietà semplici che possono essere aggiunte sono di diverse tipologie:  

* **Booleani**.
* **Stringhe**.
* **Numeri interi**, **decimali**.
* **Array**.

### Testata

Andare in **Home > Utilità > ExtraData > ExtraData** e cliccare sul pulsante **Nuovo** **ExtraData**.  
In questo caso procediamo a crare un ExtraData **semplice** di tipo stringa chiamandolo **Modello**.  

La form di dettaglio di creazione dell'ExtraData è composta così come segue:

* **Codice**: che identifica l'extradata.
* **Tipo contenuto**: sarà di tipo semplice.
* **Tipo Widget**: definisce le modalità di visualizzazione e selezione per le tipologie Oggetto e Datasource. Per il tipo Simple va lasciato vuoto perché il widget caricato sarà il widget di default del framework associato al tipo di dato.
* **Nome**: deve essere una parola presente nel dizionario altrimenti dovremo aggiungerla.  
* **Tipo di dati**: si tratta della tipologia del dato.
* **Stereotipo**: opzioni aggiuntive sulla formattazione del campo, come testo multilinea o definizione del numero di decimali.
* **Descrizione**: è obbigatorio - descrizione che verrà visualizzata, esattamente come il Name è selezionabile dal dizionario.
* **Validity Start/End**: se vogliamo dare all’extradata una validità temporanea
* **View right / Modify right**: per associare uno specifico diritto che consenta la visualizzazione o la modifica dell'extradata.


Lo **stereotipo** è attivabile per il **Tipo di dati**: Date (DateTime e Time); Decimal (Currency e Numeric); Double, Float e Long (Numeric); Int (Color, Numeric e Year); Short (Numeric e Year); String (MultiLine).

Lo stereotipo è attivabile per tutti gli oggetti attivati e per singolo oggetto. 

### Attivazioni

La griglia delle attivazioni permette di definire le classi su cui l'ExtraData dovrà essere disponibile.  
La griglia si compone di:
* **Oggetto padre**: è l'oggetto a cui si lega l'ExtraData, nel nostro caso FSItem. Ciascun ExtraData può essere associato a più oggetti.  
* **Proprietà**: si tratta della proprietà dell'oggetto padre in cui verrà caricato l'ExtraData. In questo caso la proprietà ExtraData è presente sull'oggetto FSItem, generata dalla referenza che collega FSItem a FSItemExtraData.  
* **Required**: indica se l'ExtraData èobbligatorio per l'oggetto a cui è associato.
* **To Print**: indicato se l'ExtraData deve essere disponibile per la stampa.
* **Ordinamento**: si tratta dell'ordinmaneto dell'oggetto padre, non ha ripercussioni sul funzionamento, solitamente viene lasciato a 0.
* **Start valid**. **/** **End validity**: se la validità è temporanea, indica inizio e fine del periodo in cui l'ExtraData potrà essere utilizzato.  
* **Stereotype**: la formattazione del campo, cambia a seconda del tipo di dato. Andrebbe a sovrascrivere lo stereotype generale definito per l'extradata se si volesse forzare un comportamento specifico per un particolare oggetto diverso da quello di default.

### Inserimento dell'ExtraData nella form di dettaglio

Una delle principali novità introdotte a partire da Fluentis2021 riguarda la possibilità di inserire direttamente nella form di dettaglio il widget che caricherà i contenuto dell'ExtraData.  
In questo caso, poiché L'ExtraData è di tipo semplice, verrà caricato il widget di default del framework associato al tipo di dato.  

Per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente dare drag and drop dal Navigatore Oggetti al Form Navigator.  
Per rendere **persistente** la visualizzazione dell'ExtraData nella form di dettaglio dell'articolo è sufficiente creare uno specifico profilo e caricarlo ogni qualvolta ci sia la necessità di visualizzare l'ExtraData.  
Infine, sempre nella form di dettaglio dell'articolo, è presenta uno specifico tab denominato **Extra data** dove possiamo trovare ciascun ExtraData associato all'articolo.  

## ExtraData Basato su oggetto
Tramite l'ExtraData basato su oggetto è possibile legare una proprietà rappresentata da un oggetto **standard** o **custom** con un oggetto di **Fluentis**.   
*Per spiegare meglio questo concetto utilizziamo un esempio pratico dove leghiamo l'oggetto **FSColor** che rappresenta un set di **colori**, con l'oggetto Standard di Fluentis **FSItem (Articolo)***.  


### Testata
Procediamo a creare l'**ExtraData** basato sull'oggetto **FSColor** chiamandolo **Color**.

* **Code:** obbligatorio - codice.
* **Content Type:** obbligatorio - permette di selezionare il widget di visualizzazione dell'ExtraData, sono disponibili tre opzioni:
  * **Combobox**: si tratta di un menu a tendina che mostra i valori per codice/descrizione.
  * **Autocomplete Code**: che permette di scrivere il codice che andrà ad autocompletarsi filtrando I record disponibili.​
  * **Autocomplete Description**: che permette di scrivere la descrizione che andrà ad autocompletarsi filtrando I record disponibili.
* **Widget Type:**
* **Business Object:** obbligatorio - permette di selezionare l'oggetto su cui dovrà essere creato l'extradata ad esempio **FSColor** per permettere di creare un extradata basato sulla **tabella codici colore**. 

### Attivazioni

Procediammo a legare l'**ExtraData** all'oggetto di business **FSItem** (Articolo).  
Vale esattamente quanto illustrato al paragrafo precedente.  

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'articolo interessato, per includere l'ExtraData nella form di dettaglio dell'articolo **FSItem**, possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  


Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente fare drag and drop dal Navigatore Oggetti al Form Navigator.  
Nell'esempio è stato riportato L'ExtraData 'Color' nel LayoutGroup che definisce i dati di testata dell'articolo (FSItem).   
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà esattamente i valori di **codice** e **descrizione** salvati sulla corrispondente tabella MSSQL.

## ExtraData Basato su Datasource

Tramite l'ExtraData basato su un datasource è possibile legare un oggetto Fluentis ad una tabella esterna non presente a standard. 

*Per spiegare meglio questo scenario applicativo utilizziamo un esempio pratico dove è stata creata una tabella custom denominata 'typology', che rappresenta n. 3 diverse finiture*
Tramite il **FluentisQueryStudio**, procediamo a salvare una query SQL per la selezione di tutti i valori nella tabella.  

La tabella che abbiamo creato si presenta così:   

| Id  | Code      | Description |
| --- | --------- | ----------- |
| 1   | Finitura1 | Satinata    |
| 2   | Finitura2 | Lucida      |
| 3   | Finitura3 | Opaca       |

ed è il risultato di questa query sql.  

```SQL
SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```

:::danger Attenzione
La struttura della query deve essere necessariamente basata sulle tre colonne: **Id**, **Code**, **Description**, altrimenti non sarà possibile creare il relativo datasource.  
:::

Tramite il **FluentisQueryStudio** procediamo a creare il datasource che sarà basato sulla query vista sopra. Per l'utilizzo del **FluentisQueryStudio** si rimanda all'apposita documentazione al seguente [**Link**](#) 

### Testata
Procediamo ora a creare l'ExtraData popolando i dati relativi alla testata. 

* **Code** e **Descrizione**.
* **DataSource** Type: selezionare SQL Query DataSource.
* **SQL Query**: selezionare la query desiderata.
* **Area**: valore di dizionario.

### Attivazioni
Procediamo a legare l'**ExtraData** all'oggetto di business **FSItem** (Articolo).  
Vale esattamente quanto illustrato al paragrafo precedente.  

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'articolo interessato, per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente fare drag and drop dal Navigatore Oggetti al Form Navigator.  
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà esattamente i valori di **codice** e **descrizione** salvati sulla corrispondente tabella sul database.   


## Propagazione degli ExtraData

La funzionalità relativa alla propagazione degli ExtraData consente di **estendere** un determinato **ExtraData** definito su uno specifico oggetto ad un altro oggetto **derivato**.  
Ad esempio, un ExtraData definito sull'oggetto **FSItem** (Articolo) potrà essere propagato sull'oggetto **FSSalesOrderItem** (Articoli dell'ordine di vendita) perchè **FSSalesOrderItem** **estende** la classe **FSItem**.  


### Corpo Centrale - Propagation

Il tab **Propagation**: si compone di una griglia con le seguenti colonne:  
* **Property path**: obbligatorio - proprietà che collegherà le classi.  
* **Collection property**: obbligatorio - la proprietà della collection.  
* **Editable**: rende l’extradata modificabile in modo indipendente.  
* **Proprity**: indica la priorità. 
* **From val.  date / To validity date**: se vogliamo che sia temporanea, quindi abbia un inizio ed una fine.  

Per gestire la propagazione da un oggetto principale ad uno derivato è necessario avere, nel tab delle **attivazioni**, l'ExtraData attivo su entrambi gli oggetti e gestire poi la propagazione attraverso l'apposito tab **propagation**.

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'**ordine di vendita** interessato, per includere l'ExtraData nella form di dettaglio possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo della collezione degli **articoli**, e quindi espandiamo il nodo ExtraData.  
2. Trasciniamo l'ExtraData direttamente sulla griglia degli articoli associati all'ordine di vendita.   
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà il valore **codice** salvato sulla corrispondente tabella lato MSSQL.  




