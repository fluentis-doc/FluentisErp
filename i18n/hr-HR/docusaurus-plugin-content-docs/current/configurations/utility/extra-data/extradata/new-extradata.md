---
title: Novi Extra Data
sidebar_position: 1
---

Obrascu **ExtraData** može se pristupiti putem izbornika **Konfiguriranje > Korisnost > Dodatni podaci > Dodatni podaci**.

:::note
Podaci potrebni za izradu novih ExtraData zapisa razlikuju se ovisno o odabranoj vrsti ExtraData zapisa:

1. **Jednostavni ExtraData**
2. **ExtraData temeljeni na predmetu (objektu)**
3. **ExtraData temeljeni na izvoru podataka**
:::

### 1. Jednostavni ExtraData

Pomoću jednostavnog ExtraData zapisa moguće je dodati nova jednostavna svojstva postojećem Fluentisovu objektu.

Svojstva koja se mogu dodati mogu biti različitih vrsta:

- **Booleove vrijednosti**
- **Tekstualni nizovi**
- **Cijeli brojevi**, **decimalni brojevi**
- **Polja (Array)**

#### 1.1 Zaglavlje

U ovom ćemo primjeru izraditi **jednostavni** ExtraData tekstualne vrste i nazvati ga **Model**.

#### Posebna polja

- **Šifra**: identificira ExtraData.
- **Vrsta sadržaja**: odabire se jednostavna vrsta.
- **Tip widgeta**: definira način prikaza i odabira za vrste Objekt i Izvor podataka. Za vrstu Simple ovo polje treba ostaviti praznim jer će se učitati zadani widget okvira povezan s vrstom podatka.
- **Naziv**: mora biti riječ koja postoji u rječniku; u suprotnom je potrebno dodati je u rječnik.
- **Vrsta podataka**: određuje vrstu podatka.
- **Stereotip**: dodatne mogućnosti oblikovanja polja, kao što su višeredni tekst ili definiranje broja decimalnih mjesta.
- **Opis**: obvezno polje – opis koji će se prikazivati. Kao i Naziv, odabire se iz rječnika.
- **Početak/kraj valjanosti**: koristi se ako želimo definirati vremenski ograničenu valjanost ExtraData zapisa.
- **Pravo prikaza / Pravo izmjene**: omogućuje povezivanje određenog prava kojim se dopušta pregled ili izmjena ExtraData zapisa.

**Stereotip** se može aktivirati za sljedeće vrste podataka: Date (DateTime i Time); Decimal (Currency i Numeric); Double, Float i Long (Numeric); Int (Color, Numeric i Year); Short (Numeric i Year); String (MultiLine).

Stereotip se može aktivirati za sve aktivirane objekte ili za pojedinačni objekt.

#### 1.2 Aktivacije

Tablica **Aktivacije** odnosi se na **nadređene objekte** Fluentisa na koje se povezuju ExtraData zapisi.

Svaki ExtraData zapis može imati više nadređenih objekata.

Tablica aktivacija omogućuje definiranje klasa za koje će ExtraData biti dostupan.

#### Posebna polja

- **Nadređeni objekt**: objekt s kojim se povezuje ExtraData, u našem slučaju FSItem. Svaki ExtraData zapis može se povezati s više objekata.
- **Svojstva**: svojstvo nadređenog objekta u koje će se učitati ExtraData. U ovom je slučaju svojstvo ExtraData prisutno na objektu FSItem, a generira se referencom koja povezuje FSItem i FSItemExtraData.
- **Obvezan**: označava je li ExtraData obvezan za objekt s kojim je povezan.
- **Ispisati**: označava treba li ExtraData biti dostupan za ispis.
- **Sortiraj**: određuje redoslijed nadređenog objekta. Ne utječe na funkcioniranje i obično se ostavlja na vrijednosti 0.
- **Početak valjanosti / Kraj valjanosti**: ako je valjanost vremenski ograničena, označava početak i kraj razdoblja tijekom kojeg se ExtraData može koristiti.
- **Stereotip**: oblikovanje polja koje se razlikuje ovisno o vrsti podatka. Može nadjačati opći stereotip definiran za ExtraData ako se za određeni objekt želi nametnuti drukčije ponašanje od zadanog.

### Umetanje ExtraData zapisa u obrazac s detaljima

Jedna od glavnih novosti uvedenih od verzije Fluentis2021 mogućnost je izravnog umetanja widgeta u obrazac s detaljima, koji će učitati sadržaj ExtraData zapisa.

U ovom će se slučaju, budući da je ExtraData jednostavne vrste, učitati zadani widget okvira povezan s vrstom podatka.

Za uključivanje ExtraData zapisa u obrazac s detaljima artikla (FSItem) možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odjeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekt i odaberemo željeni ExtraData.
2. U odjeljku **Form Navigator** proširimo navigator do kartice Opći podaci u koju želimo umetnuti ExtraData.

Za prikaz ExtraData zapisa u obrascu s detaljima artikla dovoljno ga je povući iz Object Navigatora u Form Navigator.

Kako bi prikaz ExtraData zapisa u obrascu s detaljima artikla bio **trajan**, dovoljno je izraditi poseban profil i učitati ga svaki put kada je potrebno prikazati ExtraData.

Naposljetku, u obrascu s detaljima artikla postoji i posebna kartica **Extra data**, na kojoj se nalaze svi ExtraData zapisi povezani s artiklom.

### 2. ExtraData temeljen na objektu (predmetu)

Pomoću ExtraData zapisa temeljenog na objektu moguće je povezati svojstvo predstavljeno **standardnim** ili **prilagođenim** objektom s Fluentisovim objektom.

*Kako bismo bolje objasnili ovaj koncept, poslužit ćemo se praktičnim primjerom u kojem povezujemo objekt **FSColor**, koji predstavlja skup **boja**, sa standardnim Fluentisovim objektom **FSItem (Artikl)**.*

#### 2.1 Zaglavlje

Izradit ćemo **ExtraData** temeljen na objektu **FSColor** i nazvati ga **Color**.

- **Code**: obvezno polje – šifra.
- **Content Type**: obvezno polje – omogućuje odabir widgeta za prikaz ExtraData zapisa. Dostupne su tri mogućnosti:
  - **Combobox**: padajući izbornik koji prikazuje vrijednosti prema šifri/opisu.
  - **Autocomplete Code**: omogućuje unos šifre koja se automatski dopunjava filtriranjem dostupnih zapisa.
  - **Autocomplete Description**: omogućuje unos opisa koji se automatski dopunjava filtriranjem dostupnih zapisa.
- **Widget Type**:
- **Business Object**: obvezno polje – omogućuje odabir objekta na kojem će se izraditi ExtraData. Primjerice, odabirom objekta **FSColor** omogućuje se izrada ExtraData zapisa temeljenog na **tablici šifri boja**.

#### 2.2 Aktivacije

Povezat ćemo **ExtraData** s poslovnim objektom **FSItem** (Artikl).

Primjenjuju se iste upute kao u prethodnom odjeljku.

### Umetanje ExtraData zapisa u obrazac s detaljima

Nakon otvaranja obrasca s detaljima željenog artikla, za uključivanje ExtraData zapisa u obrazac s detaljima artikla **FSItem** možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odjeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekt i odaberemo željeni ExtraData.
2. U odjeljku **Form Navigator** proširimo navigator do kartice Opći podaci u koju želimo umetnuti ExtraData.

Za prikaz ExtraData zapisa u obrascu s detaljima artikla dovoljno ga je povući iz Object Navigatora u Form Navigator.

U primjeru je ExtraData „Color” smješten u LayoutGroup koji definira podatke zaglavlja artikla (FSItem).

ExtraData će imati widget vrste combobox (padajući izbornik) i prikazivat će vrijednosti **šifre** i **opisa** spremljene u odgovarajućoj MSSQL tablici.

### 3. ExtraData temeljen na izvoru podataka

Pomoću ExtraData zapisa temeljenog na izvoru podataka moguće je povezati Fluentisov objekt s vanjskom tablicom koja nije dio standardne konfiguracije.

*Kako bismo bolje objasnili ovaj scenarij primjene, poslužit ćemo se praktičnim primjerom u kojem je izrađena prilagođena tablica pod nazivom „typology”, koja predstavlja tri različite završne obrade.*

Pomoću alata **FluentisQueryStudio** spremit ćemo SQL upit za dohvaćanje svih vrijednosti iz tablice.

Izrađena tablica izgleda ovako:

| Id | Code | Description |
| --- | --- | --- |
| 1 | Finitura1 | Satinata |
| 2 | Finitura2 | Lucida |
| 3 | Finitura3 | Opaca |

Ovo je rezultat sljedećeg SQL upita:

```sql
    SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```
:::danger[Pozor]
Struktura upita obvezno se mora temeljiti na trima stupcima: **Id**, **Code** i **Description**. U suprotnom neće biti moguće izraditi odgovarajući izvor podataka.
:::

Pomoću alata **FluentisQueryStudio** izradit ćemo izvor podataka koji će se temeljiti na prethodno navedenom upitu. Za korištenje alata **FluentisQueryStudio** pogledajte odgovarajuću dokumentaciju na sljedećoj [**poveznici**](#).

#### 3.1 Zaglavlje

Sada ćemo izraditi ExtraData i popuniti podatke zaglavlja:

- **Code** i **Opis**.
- **DataSource Type**: odabrati SQL Query DataSource.
- **SQL Query**: odabrati željeni upit.
- **Područje**: vrijednost iz rječnika.

#### 3.2 Aktivacije

Povezat ćemo **ExtraData** s poslovnim objektom **FSItem** (Artikl).

Primjenjuju se iste upute kao u prethodnom odjeljku.

### Umetanje ExtraData zapisa u obrazac s detaljima

Nakon otvaranja obrasca s detaljima željenog artikla, za uključivanje ExtraData zapisa u obrazac s detaljima artikla (FSItem) možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odjeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekt i odaberemo željeni ExtraData.
2. U odjeljku **Form Navigator** proširimo navigator do kartice Opći podaci u koju želimo umetnuti ExtraData.

Za prikaz ExtraData zapisa u obrascu s detaljima artikla dovoljno ga je povući iz Object Navigatora u Form Navigator.

ExtraData će imati widget vrste combobox (padajući izbornik) i prikazivat će vrijednosti **šifre** i **opisa** spremljene u odgovarajućoj tablici u bazi podataka.

#### 3.3 Propagacija dodatnih podataka (ExtraData)

Funkcionalnost propagacije dodatnih podataka omogućuje **proširivanje** određenog **ExtraData** zapisa, definiranog na jednom objektu, na drugi **izvedeni objekt**.

Primjerice, ExtraData definiran na objektu **FSItem** (Artikl) može se propagirati na objekt **FSSalesOrderItem** (Stavke prodajnog naloga) jer klasa **FSSalesOrderItem** proširuje klasu **FSItem**.

#### Specifična polja

- **Property path**: obvezno – svojstvo koje povezuje klase.
- **Collection property**: obvezno – svojstvo kolekcije.
- **Editable**: omogućuje neovisno uređivanje dodatnih podataka (ExtraData).
- **Priority**: označava prioritet.
- **From validity date / To validity date**: koristi se ako želimo da zapis bude privremen, odnosno da ima datum početka i završetka valjanosti.

Za upravljanje propagacijom s glavnog objekta na izvedeni objekt potrebno je na kartici **Aktivacije** aktivirati ExtraData na oba objekta, a zatim propagaciju konfigurirati putem odgovarajuće kartice **Propagation**.

### Umetanje dodatnih podataka (ExtraData) u obrazac s detaljima

Nakon otvaranja obrasca s detaljima željenog **prodajnog naloga**, za uključivanje ExtraData zapisa u obrazac možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odjeljku **Object Navigator** proširimo čvor kolekcije **artikala**, a zatim čvor ExtraData.
2. Povučemo ExtraData izravno na tablicu artikala povezanih s prodajnim nalogom.

ExtraData će imati widget vrste combobox (padajući izbornik) i prikazivat će vrijednost **šifre** spremljenu u odgovarajućoj tablici u MSSQL bazi podataka.

### 4. Umetanje dodatnih podataka (ExtraData) u izvješće

Kod uključivanja dodatnih podataka (ExtraData) u izvješća moguće je konfigurirati tri različita scenarija, ovisno o vrsti ExtraData zapisa:

- Jednostavni ExtraData.
- ExtraData temeljen na objektu.
- ExtraData temeljen na izvoru podataka.

### 4.1 Jednostavni ExtraData

Za jednostavni ExtraData potrebno je uključiti sljedeću metodu u odjeljak skripte izvješća.

U primjeru je ExtraData vrste objekt povezan s prodajnim računom.

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

### 4.2 ExtraData temeljen na objektu (predmetu)

Za ExtraData temeljen na objektu potrebno je uključiti sljedeću metodu u odjeljak skripte izvješća.

U primjeru je ExtraData vrste objekt povezan s prodajnim računom.

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

### 4.3 ExtraData temeljen na izvoru podataka

Za ExtraData temeljen na izvoru podataka potrebno je uključiti sljedeću metodu u odjeljak skripte izvješća.

ExtraData temeljen na izvoru podataka naziva se `Model`.

U primjeru je izrađena prilagođena tablica `dbo.Model` koja sadržava sljedeće podatke:

```sql
    SELECT Code, Description FROM dbo.Model
```

| Šifra | Opis |
|---|---|
| Finitura1 | Lucida |
| Finitura2 | Opaca |
| Finitura3 | Cromata |

U skriptu za generiranje izvješća potrebno je uključiti sljedeću primjer-metodu.

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