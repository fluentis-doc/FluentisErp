---
title: Novi ExtraData
sidebar_position: 1
---

Obrascu **ExtraData** može se pristupiti putem menija **Konfigurisanje > Korisnost > Dodatni podaci > Dodatni podaci**.

:::note
Podaci potrebni za kreiranje novih ExtraData zapisa razlikuju se u zavisnosti od odabranog tipa ExtraData zapisa:

1. **Jednostavni ExtraData**
2. **ExtraData zasnovan na objektu**
3. **ExtraData zasnovan na izvoru podataka**
:::

### 1. Jednostavni ExtraData

Pomoću jednostavnog ExtraData zapisa moguće je dodati nova jednostavna svojstva postojećem Fluentis objektu.

Svojstva koja se mogu dodati mogu biti različitih tipova:

- **Bulove vrednosti**
- **Tekstualni nizovi**
- **Celi brojevi**, **decimalni brojevi**
- **Nizovi (Array)**

#### 1.1 Zaglavlje

U ovom primeru kreiraćemo **jednostavni** ExtraData tekstualnog tipa i nazvaćemo ga **Model**.

#### Posebna polja

- **Šifra**: identifikuje ExtraData.
- **Tip sadržaja**: bira se jednostavni tip.
- **Tip widgeta**: definiše način prikaza i izbora za tipove Objekt i Izvor podataka. Za tip Simple ovo polje treba ostaviti praznim jer će se učitati podrazumevani widget okvira povezan sa tipom podatka.
- **Naziv**: mora biti reč koja postoji u rečniku; u suprotnom je potrebno dodati je u rečnik.
- **Tip podatka**: određuje tip podatka.
- **Stereotip**: dodatne mogućnosti oblikovanja polja, kao što su višeredni tekst ili definisanje broja decimalnih mesta.
- **Opis**: obavezno polje – opis koji će se prikazivati. Kao i Naziv, bira se iz rečnika.
- **Početak/kraj važenja**: koristi se ako želimo da definišemo vremenski ograničeno važenje ExtraData zapisa.
- **Pravo prikaza / Pravo izmene**: omogućava povezivanje određenog prava kojim se dozvoljava pregled ili izmena ExtraData zapisa.

**Stereotip** se može aktivirati za sledeće tipove podataka: Date (DateTime i Time); Decimal (Currency i Numeric); Double, Float i Long (Numeric); Int (Color, Numeric i Year); Short (Numeric i Year); String (MultiLine).

Stereotip se može aktivirati za sve aktivirane objekte ili za pojedinačni objekat.

#### 1.2 Aktivacije

Tabela **Aktivacije** odnosi se na **nadređene objekte** Fluentisa sa kojima se povezuju ExtraData zapisi.

Svaki ExtraData zapis može imati više nadređenih objekata.

Tabela aktivacija omogućava definisanje klasa za koje će ExtraData biti dostupan.

### Posebna polja

- **Nadređeni objekat**: objekat sa kojim se povezuje ExtraData, u našem slučaju FSItem. Svaki ExtraData zapis može se povezati sa više objekata.
- **Svojstva**: svojstvo nadređenog objekta u koje će se učitati ExtraData. U ovom slučaju svojstvo ExtraData prisutno je na objektu FSItem, a generiše se referencom koja povezuje FSItem i FSItemExtraData.
- **Obavezno**: označava da li je ExtraData obavezan za objekat sa kojim je povezan.
- **Odštampati**: označava da li ExtraData treba da bude dostupan za štampanje.
- **Sortiraj**: određuje redosled nadređenog objekta. Ne utiče na funkcionisanje i obično se ostavlja na vrednosti 0.
- **Početak važenja / Kraj važenja**: ako je važenje vremenski ograničeno, označava početak i kraj perioda tokom kojeg se ExtraData može koristiti.
- **Stereotip**: oblikovanje polja koje se razlikuje u zavisnosti od tipa podatka. Može nadjačati opšti stereotip definisan za ExtraData ako se za određeni objekat želi nametnuti drugačije ponašanje od podrazumevanog.

**### Umetanje ExtraData zapisa u obrazac sa detaljima**

Jedna od glavnih novosti uvedenih od verzije Fluentis 2021. jeste mogućnost direktnog umetanja widgeta u obrazac sa detaljima, koji će učitati sadržaj ExtraData zapisa.

U ovom slučaju, budući da je ExtraData jednostavnog tipa, učitaće se podrazumevani widget okvira povezan sa tipom podatka.

Za uključivanje ExtraData zapisa u obrazac sa detaljima artikla (FSItem) možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekat i odaberemo željeni ExtraData.
2. U odeljku **Form Navigator** proširimo navigator do kartice Opšti podaci u koju želimo da umetnemo ExtraData.

Za prikaz ExtraData zapisa u obrascu sa detaljima artikla dovoljno je prevući ga iz Object Navigatora u Form Navigator.

Kako bi prikaz ExtraData zapisa u obrascu sa detaljima artikla bio **trajan**, dovoljno je kreirati poseban profil i učitati ga svaki put kada je potrebno prikazati ExtraData.

Na kraju, u obrascu sa detaljima artikla postoji i posebna kartica **Extra data**, na kojoj se nalaze svi ExtraData zapisi povezani sa artiklom.

### 2. ExtraData zasnovan na objektu

Pomoću ExtraData zapisa zasnovanog na objektu moguće je povezati svojstvo predstavljeno **standardnim** ili **prilagođenim** objektom sa Fluentis objektom.

*Kako bismo bolje objasnili ovaj koncept, poslužićemo se praktičnim primerom u kojem povezujemo objekat **FSColor**, koji predstavlja skup **boja**, sa standardnim Fluentis objektom **FSItem (Artikal)**.*

#### 2.1 Zaglavlje

Kreiraćemo **ExtraData** zasnovan na objektu **FSColor** i nazvaćemo ga **Color**.

- **Code**: obavezno polje – šifra.
- **Content Type**: obavezno polje – omogućava odabir widgeta za prikaz ExtraData zapisa. Dostupne su tri mogućnosti:
  - **Combobox**: padajući meni koji prikazuje vrednosti prema šifri/opisu.
  - **Autocomplete Code**: omogućava unos šifre koja se automatski dopunjava filtriranjem dostupnih zapisa.
  - **Autocomplete Description**: omogućava unos opisa koji se automatski dopunjava filtriranjem dostupnih zapisa.
- **Widget Type**:
- **Business Object**: obavezno polje – omogućava odabir objekta na kojem će se kreirati ExtraData. Na primer, odabirom objekta **FSColor** omogućava se kreiranje ExtraData zapisa zasnovanog na **tabeli šifara boja**.

#### 2.2 Aktivacije

Povezaćemo **ExtraData** sa poslovnim objektom **FSItem** (Artikal).

Primenjuju se ista uputstva kao u prethodnom odeljku.

### Umetanje ExtraData zapisa u obrazac sa detaljima

Nakon otvaranja obrasca sa detaljima željenog artikla, za uključivanje ExtraData zapisa u obrazac sa detaljima artikla **FSItem** možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekat i odaberemo željeni ExtraData.
2. U odeljku **Form Navigator** proširimo navigator do kartice Opšti podaci u koju želimo da umetnemo ExtraData.

Za prikaz ExtraData zapisa u obrascu sa detaljima artikla dovoljno je prevući ga iz Object Navigatora u Form Navigator.

U primeru je ExtraData „Color” smešten u LayoutGroup koji definiše podatke zaglavlja artikla (FSItem).

ExtraData će imati widget tipa combobox (padajući meni) i prikazivaće vrednosti **šifre** i **opisa** sačuvane u odgovarajućoj MSSQL tabeli.

### 3. ExtraData zasnovan na izvoru podataka

Pomoću ExtraData zapisa zasnovanog na izvoru podataka moguće je povezati Fluentis objekat sa eksternom tabelom koja nije deo standardne konfiguracije.

*Kako bismo bolje objasnili ovaj scenario primene, poslužićemo se praktičnim primerom u kojem je kreirana prilagođena tabela pod nazivom „typology”, koja predstavlja tri različite završne obrade.*

Pomoću alata **FluentisQueryStudio** sačuvaćemo SQL upit za preuzimanje svih vrednosti iz tabele.

Kreirana tabela izgleda ovako:

| Id | Code | Description |
| --- | --- | --- |
| 1 | Finitura1 | Satinata |
| 2 | Finitura2 | Lucida |
| 3 | Finitura3 | Opaca |

Ovo je rezultat sledećeg SQL upita:

```sql
    SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```

:::danger[Pažnja]
Struktura upita obavezno mora da se zasniva na tri kolone: **Id**, **Code** i **Description**. U suprotnom neće biti moguće kreirati odgovarajući izvor podataka.
:::

Pomoću alata **FluentisQueryStudio** kreiraćemo izvor podataka koji će se zasnivati na prethodno navedenom upitu. Za korišćenje alata **FluentisQueryStudio** pogledajte odgovarajuću dokumentaciju na sledećoj [**poveznici**](#).

#### 3.1 Zaglavlje

Sada ćemo kreirati ExtraData i popuniti podatke zaglavlja:

- **Code** i **Opis**.
- **DataSource Type**: odabrati SQL Query DataSource.
- **SQL Query**: odabrati željeni upit.
- **Oblast**: vrednost iz rečnika.

#### 3.2 Aktivacije

Povezaćemo **ExtraData** sa poslovnim objektom **FSItem** (Artikal).

Primenjuju se ista uputstva kao u prethodnom odeljku.

### Umetanje ExtraData zapisa u obrazac sa detaljima

Nakon otvaranja obrasca sa detaljima željenog artikla, za uključivanje ExtraData zapisa u obrazac sa detaljima artikla (FSItem) možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odeljku **Object Navigator** proširimo čvor ExtraData koji se odnosi na poslovni objekat i odaberemo željeni ExtraData.
2. U odeljku **Form Navigator** proširimo navigator do kartice Opšti podaci u koju želimo da umetnemo ExtraData.

Za prikaz ExtraData zapisa u obrascu sa detaljima artikla dovoljno je prevući ga iz Object Navigatora u Form Navigator.

ExtraData će imati widget tipa combobox (padajući meni) i prikazivaće vrednosti **šifre** i **opisa** sačuvane u odgovarajućoj tabeli u bazi podataka.

#### 3.3 Propagacija dodatnih podataka (ExtraData)

Funkcionalnost propagacije dodatnih podataka omogućava **proširivanje** određenog **ExtraData** zapisa, definisanog na jednom objektu, na drugi **izvedeni objekat**.

Na primer, ExtraData definisan na objektu **FSItem** (Artikal) može se propagirati na objekat **FSSalesOrderItem** (Stavke prodajnog naloga) jer klasa **FSSalesOrderItem** proširuje klasu **FSItem**.

#### Specifična polja

- **Property path**: obavezno – svojstvo koje povezuje klase.
- **Collection property**: obavezno – svojstvo kolekcije.
- **Editable**: omogućava nezavisno uređivanje dodatnih podataka (ExtraData).
- **Priority**: označava prioritet.
- **From validity date / To validity date**: koristi se ako želimo da zapis bude privremen, odnosno da ima datum početka i završetka važenja.

Za upravljanje propagacijom sa glavnog objekta na izvedeni objekat potrebno je na kartici **Aktivacije** aktivirati ExtraData na oba objekta, a zatim propagaciju konfigurisati putem odgovarajuće kartice **Propagation**.

### Umetanje dodatnih podataka (ExtraData) u obrazac sa detaljima

Nakon otvaranja obrasca sa detaljima željenog **prodajnog naloga**, za uključivanje ExtraData zapisa u obrazac možemo koristiti **Form Navigator** i **Object Navigator**.

1. U odeljku **Object Navigator** proširimo čvor kolekcije **artikala**, a zatim čvor ExtraData.
2. Prevucimo ExtraData direktno na tabelu artikala povezanih sa prodajnim nalogom.

ExtraData će imati widget tipa combobox (padajući meni) i prikazivaće vrednost **šifre** sačuvanu u odgovarajućoj tabeli u MSSQL bazi podataka.

### 4. Umetanje dodatnih podataka (ExtraData) u izveštaj

Prilikom uključivanja dodatnih podataka (ExtraData) u izveštaje moguće je konfigurisati tri različita scenarija, u zavisnosti od tipa ExtraData zapisa:

- Jednostavni ExtraData.
- ExtraData zasnovan na objektu.
- ExtraData zasnovan na izvoru podataka.

### 4.1 Jednostavni ExtraData

Za jednostavni ExtraData potrebno je uključiti sledeću metodu u odeljak skripte izveštaja.

U primeru je ExtraData tipa objekt povezan sa prodajnom fakturom.
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
### 4.2 ExtraData zasnovan na objektu

Za ExtraData zasnovan na objektu potrebno je uključiti sledeću metodu u odeljak skripte izveštaja.

U primeru je ExtraData tipa objekt povezan sa prodajnom fakturom.

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

### 4.3 ExtraData zasnovan na izvoru podataka

Za ExtraData zasnovan na izvoru podataka potrebno je uključiti sledeću metodu u odeljak skripte izveštaja.

ExtraData zasnovan na izvoru podataka naziva se `Model`.

U primeru je kreirana prilagođena tabela `dbo.Model` koja sadrži sledeće podatke:

```sql
    SELECT Code, Description FROM dbo.Model
```

| Šifra | Opis |
|---|---|
| Finitura1 | Lucida |
| Finitura2 | Opaca |
| Finitura3 | Cromata |

U skriptu za generisanje izveštaja potrebno je uključiti sledeću metodu kao primer.

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

