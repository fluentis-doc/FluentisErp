---
title: ExtraData konfiguracija 
sidebar_position: 1
---

Idi na **Početna stranica > Uslužni programi > ExtraData > ExtraData** i klikni na tipku **Novo**

:::note Informacije potrebne za kreiranje novih ExtraData variraju ovisno o vrsti odabranog ExtraData:   
1. **Jednostavni ExtraData**
2. **ExtraData bazirani na objektu**
3. **ExtraData bazirani na izvoru podataka**
:::

### **1.Jednostavni ExtraData**


Kroz jednostavni ExtraData moguće je dodati nova jednostavna svojstva (propertiji) postojećem Fluentis objektu.    
Takva svojstva mogu biti različitih tipova:  

- **Booleani**.
- **String**.
- **Cijeli brojevi**, **decimalni brojevi**.
- **Nizovi**.

#### 1.1 Zaglavlje
 
U ovom primjeru kreiramo **jednostavni** ExtraData tipa string s nazivom **Model**.  

#### Specifična polja  
- **Kod**: identificira extradata polje.
- **Vrsta sadržaja**: bit će jednostavnog tipa.
- **Vrsta widgeta**: definira način prikaza i odabira za tipove Predmeta i Datasource. Za tip Simple ovo polje ostaje prazno jer će se koristiti zadani widget okvira vezan uz tip podatka.  
- **Naziv**: mora biti riječ prisutna u rječniku, u suprotnom ju je potrebno dodati.    
- **Vrsta podataka**: odnosi se na tip podatka.  
- **Stereotip**: dodatne opcije za formatiranje polja, poput višelinijskog teksta ili definiranja broja decimalnih mjesta.  
- **Opis**: obavezan – opis koji će biti prikazan; kao i Naziv, mora biti odabran iz rječnika.  
- **Početak/Kraj valjanosti**: koristi se ako želimo da extradata ima vremensko ograničenje valjanosti.  
- **Pravo za prikaz / Pravo za izmjenu**: omogućuje povezivanje određenog prava koje dozvoljava prikaz ili izmjenu extradata polja.  

**Stereotip** je aktivan za **Vrstu podataka**: Date (DateTime e Time); Decimal (Currency e Numeric); Double, Float e Long (Numeric); Int (Color, Numeric e Year); Short (Numeric e Year); String (MultiLine).

Stereotip je moguće aktivirati za sve aktivirane objekte i za svaki pojedinačni objekt.  

#### 1.2 Aktivacije

Kartica **Aktivacije** odnosi se na **nadređene objekte** sustava Fluentis na koje se povezuju ExtraData polja.  
Svaki ExtraData može imati više nadređenih objekata.  

Mreža aktivacija omogućuje definiranje klasa na kojima će ExtraData biti dostupan.   

#### Specifična polja   
- **Nadređeni objekt**: objekt na koji je vezan ExtraData, u našem slučaju FSItem. Svaki ExtraData može biti povezan s više objekata.  
- **Svojstvo**: odnosi se na svojstvo nadređenog objekta u kojem će se učitati ExtraData. U ovom slučaju, svojstvo ExtraData je prisutno na objektu FSItem, generirano referencom koja povezuje FSItem s FSItemExtraData.   
- **Required**: označava je li ExtraData obavezan za objekt s kojim je povezan.  
- **To Print**: označava treba li ExtraData biti dostupan za ispis.  
- **Naručivanje**: odnosi se na redoslijed nadređenog objekta, nema utjecaja na funkcioniranje, obično ostaje postavljeno na 0.  
- **Start valid**/**End validity**: ako je valjanost vremenski ograničena, označava početak i kraj razdoblja u kojem se ExtraData može koristiti.   
- **Stereotype**: formatiranje polja, mijenja se ovisno o vrsti podatka. Prepisuje opći stereotip definiran za ExtraData ako se želi prisiliti specifično ponašanje za određeni objekt koji se razlikuje od zadanog.  

### Unos ExtraData polja u formu detalja  

Jedna od glavnih novosti uvedenih od verzije Fluentis2021 je mogućnost da se widget koji učitava sadržaj ExtraData polja umetne izravno u formu detalja.  
U ovom slučaju, budući da je ExtraData jednostavnog tipa, bit će učitan zadani widget frameworka povezan s vrstom podatka.   

Za uključivanje ExtraData polja u formu detalja artikla (FSItem), možemo koristiti **form navigator** i **object navigator**.  
1. Iz **Object Navigatora**, proširujemo čvor ExtraData koji se odnosi na poslovni objekt i odabiremo željeni ExtraData.  
2. Iz **Form Navigatora**, proširujemo navigator do kartice Općenito u koji želimo umetnuti ExtraData.  

Za prikaz ExtraData polja u formi detalja artikla dovoljno je povuci i ispusti (drag and drop) iz Object Navigatora u Form Navigator.  
Za **trajni** prikaz ExtraData polja u formi detalja artikla dovoljno je kreirati specifičan profil i učitati ga svaki put kada je potrebno prikazati ExtraData.  
Na kraju, također unutar forme detalja artikla, postoji poseban tab nazvan **Extra data**, gdje možemo pronaći sva ExtraData polja povezana s artiklom.  
### **2. ExtraData temeljen na objektu**  
Putem ExtraData temeljenog na objektu moguće je povezati svojstvo koje predstavlja **standardni** ili **prilagođeni (custom)** objekt s objektom u **Fluentis**.   
*Kako bismo bolje objasnili ovaj koncept, koristit ćemo praktičan primjer u kojem povezujemo objekt **FSColor** koji predstavlja skup **boja**, s Fluentis standardnim objektom **FSItem (Artikl)***. 

#### 2.1 Zaglavlje

Nastavljamo s kreiranjem **ExtraData** temeljenog na objektu **FSColor** koji ćemo nazvati **Color**.

- **Kod**: obbligatorio - codice.
- **Content Type**: obavezno – omogućuje odabir widgeta za prikaz ExtraData. Dostupne su tri opcije:  
  - **Combobox**: padajući izbornik koji prikazuje vrijednosti prema šifri/opisu.  
  - **Autocomplete Code**: omogućuje unos šifre koja se automatski dovršava filtriranjem dostupnih zapisa.  
  - **Autocomplete Description**: omogućuje unos opisa koji se automatski dovršava filtriranjem dostupnih zapisa.  
- **Widget Type:**
- **Business Object**: obavezno – omogućuje odabir objekta na kojem će se kreirati ExtraData, na primjer **FSColor** kako bi se stvorio ExtraData temeljen na **tablici šifri boja**.   

#### 2.2 Aktivacije

Nastavljamo s povezivanjem **ExtraData** s poslovnim objektom **FSItem** (Artikl).  
Vrijedi sve što je prethodno objašnjeno u prethodnom odlomku.  

### Umetanje ExtraData u formu s detaljima

Nakon što otvorimo formu s detaljima za željeni artikl, kako bismo uključili ExtraData u detaljnu formu objekta **FSItem**, possiamo utilizzare il **form navigator** e **l'object navigator**.  
1. U **Object Navigatoru**, proširujemo čvor ExtraData koji se odnosi na poslovni objekt i odabiremo odgovarajući ExtraData.  
2. U **Form Navigatoru**, proširujemo navigator sve do taba Općenito (Generalità) u koji želimo umetnuti ExtraData.    

Za prikaz ExtraData u detaljnoj formi artikla dovoljno je povući i ispustiti (drag and drop) iz Object Navigatora u Form Navigator.  
U ovom primjeru, ExtraData 'Color' umetnut je u LayoutGroup koji definira zaglavlje podataka artikla (FSItem).  
ExtraData će imati widget tipa combobox (padajući izbornik) i prikazivat će točno vrijednosti **šifre** i **opisa** spremljene u odgovarajućoj tablici na MSSQL-u.  

### **3. ExtraData temeljen na vanjskom DataSource-u**

Putem ExtraData temeljenog na vanjskom DataSource-u moguće je povezati Fluentis objekt s vanjskom tablicom koja nije standardno prisutna u sustavu.  

*Kako bismo bolje objasnili ovaj scenarij korištenja, koristimo praktičan primjer u kojem je kreirana prilagođena tablica pod nazivom 'typology', koja predstavlja 3 različite završne obrade*.  
Pomoću **FluentisQueryStudio**, spremamo SQL upit za dohvaćanje svih vrijednosti iz navedene tablice.  

Tablica koju smo kreirali izgleda ovako:    

| Id  | Code      | Description |
| --- | --------- | ----------- |
| 1   | Završna obrada1 | Satinirana  |
| 2   | Završna obrada2 | Sjajna      |
| 3   | Završna obrada3 | Matirana    |

i rezultat je sljedećeg SQL upita:   

```SQL
SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```

:::danger Pažnja  
Struktura SQL upita mora sadržavati točno tri kolone: **Id**, **Code**, **Description**, u protivnom neće biti moguće kreirati odgovarajući DataSource.  
:::

Pomoću **FluentisQueryStudio** sada kreiramo DataSource koji će biti baziran na gore prikazanom SQL upitu. Za detalje o korištenju **FluentisQueryStudio** pogledajte službenu dokumentaciju na sljedećem [**Linku**](#) 

#### 3.1 Zaglavlje

Sada nastavljamo s kreiranjem ExtraData ispunjavanjem informacija u zaglavlju:  
- **Šifra** i **Opis**.
- **DataSource** Type: odabrati SQL Query DataSource.   
- **SQL Query**: odabrati željeni upit.  
- **Area**: vrijednost iz rječnika.  

#### 3.2 Aktivacije 

Nastavljamo s povezivanjem **ExtraData** s poslovnim objektom **FSItem** (Artikl).  
Vrijedi sve što je prethodno objašnjeno u prethodnom odlomku.  

### Umetanje ExtraData u formu s detaljima  

Nakon što otvorimo formu s detaljima za željeni artikl, kako bismo uključili ExtraData u formu s detaljima objekta FSItem, možemo koristiti **form navigator** i **l'object navigator**.  
1. U **Object Navigatoru**, proširujemo čvor ExtraData koji se odnosi na poslovni objekt i odabiremo željeni ExtraData.  
2. U **Form Navigatoru**, proširujemo navigator sve do taba Općenito (Generalità) u koji želimo umetnuti ExtraData.   

Za prikaz ExtraData u detaljnoj formi artikla dovoljno je povući i ispustiti (drag and drop) iz Object Navigatora u Form Navigator.  
ExtraData će imati widget tipa combobox (padajući izbornik) i prikazivat će točno vrijednosti **šifre** i **opisa** spremljene u odgovarajućoj tablici na bazi podataka.  


#### 3.3 Propagacija ExtraData  

Funkcionalnost vezana uz propagaciju ExtraData omogućuje **proširenje** određenog **ExtraData** definiranog na jednom objektu prema drugom, **izvedenom objektu**.  
Na primjer, ExtraData definiran na objektu **FSItem** (Artikl) može se propagirati na objekt **FSSalesOrderItem** (Stavke prodajnog naloga),jer **FSSalesOrderItem*- **estende** la classe **FSItem**.  

#### Specifična polja   
- **Property path**: obavezno – svojstvo koje povezuje klase.    
- **Collection property**: obavezno – svojstvo kolekcije.   
- **Editable**: omogućuje da ExtraData bude samostalno uređivan.  
- **Proprity**: označava prioritet.   
- **From val.  date / To validity date**: skoristi se ako želimo da vrijednost bude privremena – s definiranim početnim i završnim datumom.   

Za upravljanje propagacijom s glavnog objekta na izvedeni objekt, potrebno je da ExtraData bude aktiviran na oba objekta unutar kartice **aktivacije**, a zatim se propagacija definira putem posebne kartice **propagation**.

### Umetanje ExtraData u formu s detaljima  

Nakon što otvorimo formu s detaljima za odgovarajući **prodajni nalog** kako bismo uključili ExtraData u formu, koristimo **form navigator** i **l'object navigator**.  
1. U **Object Navigator** proširujemo čvor kolekcije **artikala**, zatim i čvor ExtraData.   
2. Povučemo željeni ExtraData direktno na mrežu artikala povezanih s prodajnim nalogom.     
ExtraData će imati widget tipa combobox (padajući izbornik) i prikazivat će vrijednost **šifre** spremljene u odgovarajućoj tablici na MSSQL bazi.  

### **4. Umetanje ExtraData u izvještaj**  

Što se tiče uključivanja **ExtraData** u izvještaje, moguće je konfigurirati tri različita scenarija, ovisno o vrsti ExtraData:  
* Jednostavni ExtraData  
* ExtraData temeljen na objektu  
* ExtraData temeljen na vanjskom DataSource-u  

### 4.1 Jednostavni ExtraData  

Za jednostavni ExtraData potrebno je uključiti sljedeću metodu u sekciju skripte izvještaja.
U primjeru, ExtraData tipa objekt je povezan s računom za prodaju.  

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

### 4.2 ExtraData temeljen na objektu  

Za ExtraData temeljen na objektu, potrebno je uključiti sljedeću metodu u sekciju skripte izvještaja.  
U ovom primjeru, ExtraData tipa objekt je povezan s računom za prodaju.   

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
### 4.3 ExtraData temeljen na vanjskom DataSource-u  
Za ExtraData temeljen na vanjskom DataSource-u, potrebno je uključiti sljedeću metodu u sekciju skripte izvještaja.  
ExtraData temeljen na DataSource-u naziva se ```Model```.  
U ovom primjeru kreirana je prilagođena tablica ```dbo.Model``` koja sadrži sljedeće podatke:  
```sql
SELECT Code, Description FROM dbo.Model
```

 <table>
        <tr>
            <th>Šifra</th>
            <th>Opis</th>
        </tr>
        <tr>
            <td>Završna obrada1</td>
            <td>Sjajna</td>
        </tr>
        <tr>
            <td>Završna obrada2</td>
            <td>Matirana</td>
        </tr>
        <tr>
            <td>Završna obrada3</td>
            <td>Kromirana</td>
        </tr>
    </table>


U skripti koja se odnosi na generiranje izvještaja potrebno je uključiti sljedeću primjer metodu.   

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



