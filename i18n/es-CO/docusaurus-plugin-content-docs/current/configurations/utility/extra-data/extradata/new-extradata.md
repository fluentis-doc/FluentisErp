---
title: Nuovo Extra Data
sidebar_position: 1
---

Andare in **Home > Utilità > ExtraData > ExtraData** e cliccare sul pulsante **Nuovo**

:::note Le informazioni richieste per creare nuovi ExtraData variano in base alla tipologia di ExtraData selezionata:   
1. **ExtraData Semplici**
2. **ExtraData basati su oggetto**
3. **ExtraData basati su datasource**
:::

### **1. ExtraData Semplice**


Tramite l'ExtraData semplice è possibile aggiungere delle nuove proprietà semplici ad un oggetto Fluentis esistente.  
Le proprietà semplici che possono essere aggiunte sono di diverse tipologie:  

- **Booleani**.
- **Stringhe**.
- **Numeri interi**, **decimali**.
- **Array**.

#### 1.1 Testata
 
In questo caso procediamo a creare un ExtraData **semplice** di tipo stringa chiamandolo **Modello**.  

#### Campi specifici  
- **Codice**: che identifica l'extradata.
- **Tipo contenuto**: sarà di tipo semplice.
- **Tipo Widget**: definisce le modalità di visualizzazione e selezione per le tipologie Oggetto e Datasource. Per il tipo Simple va lasciato vuoto perché il widget caricato sarà il widget di default del framework associato al tipo di dato.
- **Nome**: deve essere una parola presente nel dizionario altrimenti dovremo aggiungerla.  
- **Tipo di dati**: si tratta della tipologia del dato.
- **Stereotipo**: opzioni aggiuntive sulla formattazione del campo, come testo multilinea o definizione del numero di decimali.
- **Descrizione**: è obbigatorio - descrizione che verrà visualizzata, esattamente come il Name è selezionabile dal dizionario.
- **Validity Start/End**: se vogliamo dare all’extradata una validità temporanea
- **View right / Modify right**: per associare uno specifico diritto che consenta la visualizzazione o la modifica dell'extradata.

Lo **stereotipo** è attivabile per il **Tipo di dati**: Date (DateTime e Time); Decimal (Currency e Numeric); Double, Float e Long (Numeric); Int (Color, Numeric e Year); Short (Numeric e Year); String (MultiLine).

Lo stereotipo è attivabile per tutti gli oggetti attivati e per singolo oggetto. 

#### 1.2 Attivazioni

Il tab delle **Attivazioni** fa riferimento agli **oggetti padre** di Fluentis su cui vengono agganciati gli ExtraData.  
Ciascun ExtraData può avere molti oggetti padre.

La griglia delle attivazioni permette di definire le classi su cui l'ExtraData dovrà essere disponibile.  

#### Campi specifici  
- **Oggetto padre**: è l'oggetto a cui si lega l'ExtraData, nel nostro caso FSItem. Ciascun ExtraData può essere associato a più oggetti.  
- **Proprietà**: si tratta della proprietà dell'oggetto padre in cui verrà caricato l'ExtraData. In questo caso la proprietà ExtraData è presente sull'oggetto FSItem, generata dalla referenza che collega FSItem a FSItemExtraData.  
- **Required**: indica se l'ExtraData èobbligatorio per l'oggetto a cui è associato.
- **To Print**: indicato se l'ExtraData deve essere disponibile per la stampa.
- **Ordinamento**: si tratta dell'ordinmaneto dell'oggetto padre, non ha ripercussioni sul funzionamento, solitamente viene lasciato a 0.
- **Start valid**. **/*- **End validity**: se la validità è temporanea, indica inizio e fine del periodo in cui l'ExtraData potrà essere utilizzato.  
- **Stereotype**: la formattazione del campo, cambia a seconda del tipo di dato. Andrebbe a sovrascrivere lo stereotype generale definito per l'extradata se si volesse forzare un comportamento specifico per un particolare oggetto diverso da quello di default.

### Inserimento dell'ExtraData nella form di dettaglio

Una delle principali novità introdotte a partire da Fluentis2021 riguarda la possibilità di inserire direttamente nella form di dettaglio il widget che caricherà i contenuto dell'ExtraData.  
In questo caso, poiché L'ExtraData è di tipo semplice, verrà caricato il widget di default del framework associato al tipo di dato.  

Per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente dare drag and drop dal Navigatore Oggetti al Form Navigator.  
Per rendere **persistente** la visualizzazione dell'ExtraData nella form di dettaglio dell'articolo è sufficiente creare uno specifico profilo e caricarlo ogni qualvolta ci sia la necessità di visualizzare l'ExtraData.  
Infine, sempre nella form di dettaglio dell'articolo, è presenta uno specifico tab denominato **Extra data** dove possiamo trovare ciascun ExtraData associato all'articolo.  

### **2. ExtraData basato su oggetto**
Tramite l'ExtraData basato su oggetto è possibile legare una proprietà rappresentata da un oggetto **standard** o **custom** con un oggetto di **Fluentis**.   
*Per spiegare meglio questo concetto utilizziamo un esempio pratico dove leghiamo l'oggetto **FSColor** che rappresenta un set di **colori**, con l'oggetto Standard di Fluentis **FSItem (Articolo)***. 

#### 2.1 Testata

Procediamo a creare l'**ExtraData** basato sull'oggetto **FSColor** chiamandolo **Color**.

- **Code:** obbligatorio - codice.
- **Content Type:** obbligatorio - permette di selezionare il widget di visualizzazione dell'ExtraData, sono disponibili tre opzioni:
  - **Combobox**: si tratta di un menu a tendina che mostra i valori per codice/descrizione.
  - **Autocomplete Code**: che permette di scrivere il codice che andrà ad autocompletarsi filtrando I record disponibili.​
  - **Autocomplete Description**: che permette di scrivere la descrizione che andrà ad autocompletarsi filtrando I record disponibili.
- **Widget Type:**
- **Business Object:** obbligatorio - permette di selezionare l'oggetto su cui dovrà essere creato l'extradata ad esempio **FSColor** per permettere di creare un extradata basato sulla **tabella codici colore**. 

#### 2.2 Attivazioni

Procediamo a legare l'**ExtraData** all'oggetto di business **FSItem** (Articolo).  
Vale esattamente quanto illustrato al paragrafo precedente.  

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'articolo interessato, per includere l'ExtraData nella form di dettaglio dell'articolo **FSItem**, possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente fare drag and drop dal Navigatore Oggetti al Form Navigator.  
Nell'esempio è stato riportato L'ExtraData 'Color' nel LayoutGroup che definisce i dati di testata dell'articolo (FSItem).   
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà esattamente i valori di **codice** e **descrizione** salvati sulla corrispondente tabella MSSQL.

### **3. ExtraData basato su Datasource**

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

#### 3.1 Testata

Procediamo ora a creare l'ExtraData popolando i dati relativi alla testata:  
- **Code** e **Descrizione**.
- **DataSource** Type: selezionare SQL Query DataSource.
- **SQL Query**: selezionare la query desiderata.
- **Area**: valore di dizionario.

#### 3.2 Attivazioni

Procediamo a legare l'**ExtraData** all'oggetto di business **FSItem** (Articolo).  
Vale esattamente quanto illustrato al paragrafo precedente.  

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'articolo interessato, per includere l'ExtraData nella form di dettaglio dell'articolo (FSItem), possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo ExtraData relativo all'oggetto di business e selezionamo l'ExtraData che ci interessa.
2. Dal **Form Navigator**, espandiamo il navigator fino al tab Generalità di cui vogliamo inserire l'ExtraData.  

Per visualizzare l'ExtraData nella form di dettaglio dell'articolo è sufficiente fare drag and drop dal Navigatore Oggetti al Form Navigator.  
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà esattamente i valori di **codice** e **descrizione** salvati sulla corrispondente tabella sul database.   


#### 3.3 Propagazione degli ExtraData

La funzionalità relativa alla propagazione degli ExtraData consente di **estendere** un determinato **ExtraData** definito su uno specifico oggetto ad un altro oggetto **derivato**.  
Ad esempio, un ExtraData definito sull'oggetto **FSItem** (Articolo) potrà essere propagato sull'oggetto **FSSalesOrderItem** (Articoli dell'ordine di vendita) perchè **FSSalesOrderItem*- **estende** la classe **FSItem**.  

#### Campi specifici  
- **Property path**: obbligatorio - proprietà che collegherà le classi.  
- **Collection property**: obbligatorio - la proprietà della collection.  
- **Editable**: rende l’extradata modificabile in modo indipendente.  
- **Proprity**: indica la priorità. 
- **From val.  date / To validity date**: se vogliamo che sia temporanea, quindi abbia un inizio ed una fine.  

Per gestire la propagazione da un oggetto principale ad uno derivato è necessario avere, nel tab delle **attivazioni**, l'ExtraData attivo su entrambi gli oggetti e gestire poi la propagazione attraverso l'apposito tab **propagation**.

### Inserimento dell'ExtraData nella form di dettaglio

Dopo aver aperto la form di dettaglio dell'**ordine di vendita** interessato, per includere l'ExtraData nella form di dettaglio possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. Dall'**Object Navigator**, espandiamo il nodo della collezione degli **articoli**, e quindi espandiamo il nodo ExtraData.  
2. Trasciniamo l'ExtraData direttamente sulla griglia degli articoli associati all'ordine di vendita.   
L'ExtraData avrà un widget di tipo combobox (dropdown) e mostrerà il valore **codice** salvato sulla corrispondente tabella lato MSSQL.  

### **4. Inserting ExtraData into Report**

Per quanto riguarda l'inclusione degli **ExtraData** nei report si possono configuare n. 3 scenari distinti in base alla tipologia di ExtraData:
* ExtraData Semplice.
* ExtraData basato su un oggetto.
* ExtraData basato su un datasource.

### 4.1 ExtraData semplice

Per l'ExtraData semplice, è necessario includere il seguente metodo nella sezione dello script del report.
Nell'esempio, un ExtraData di tipo oggetto è stato associato a una fattura di vendita. 

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {
  FSSalesInvoice row = (FSSalesInvoice)e.Row;
 if (row != null)
 {
  var extraData = row.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "ExtradataXreport").FirstOrDefault();
  if (extraData != null)
  {
    e.Value = extraData.ExtraDataValue;
  }
 }  
}
```

### 4.2 ExtraData basato su oggetto

Per l'ExtraData basato su oggetti, è necessario includere il seguente metodo nella sezione dello script del report.
Nell'esempio, un ExtraData di tipo oggetto è stato associato a una fattura di vendita.  

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var extraData = row.ExtraData 
            .Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "ObjectExtraData")
            .FirstOrDefault();
        
        if (extraData != null)
        {
            var record = GetReport().DataProvider
                .Linq<FSColor>()
                .Where(x => x.Id == extraData.ExtraDataId)
                .FirstOrDefault();
            
            if (record != null)
            {
                e.Value = record.Description; 
            }
        }
    }
}
```
### 4.3 ExtraData basato su datasouce
Per l'ExtraData basato su datasource, è necessario includere il seguente metodo nella sezione dello script del report.  
L'ExtraData basato su datasource si chiama ```Model```.  
Nell'esempio, è stata creata una tabella custom ```dbo.Model``` contenente i seguenti dati:
```sql
SELECT Code, Description FROM dbo.Model
```

 <table>
        <tr>
            <th>Codice</th>
            <th>Descrizione</th>
        </tr>
        <tr>
            <td>Finitura1</td>
            <td>Lucida</td>
        </tr>
        <tr>
            <td>Finitura2</td>
            <td>Opaca</td>
        </tr>
        <tr>
            <td>Finitura3</td>
            <td>Cromata</td>
        </tr>
    </table>


Nello script relativo alla generazione del report va incluso il seguente metodo d'esempio.   

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var extraData = row.ExtraData 
            .Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "Model")
            .FirstOrDefault();

        if (extraData != null)
        {
            if (extraData.ExtraDataObject != null && 
                extraData.ExtraDataObject.DataSource != null && 
                !string.IsNullOrEmpty(extraData.ExtraDataObject.DataSource.SqlQuery.Script))
            {
                string extradDataObjectId = extraData.ExtraDataId.ToString();
                string sqlQueryExtraData = extraData.ExtraDataObject.DataSource.SqlQuery.Script + 
                                           " WHERE Id = " + extradDataObjectId;
                
                IExecuteSql execSql = (IExecuteSql)GetReport().DataProvider;
                using (IDbCommand command = execSql.CreateCommand())
                {
                    command.CommandText = sqlQueryExtraData;
                    using (IDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            e.Value = reader.GetValue(2);
                        }
                    }
                }
            }
        }
    }
}
```



