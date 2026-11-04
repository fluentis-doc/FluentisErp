---
title: Izvori podataka
sidebar_label: Izvori podataka
sidebar_position: 3
---

### Obrazac

Obrascu za upravljanje izvorima podataka može se pristupiti putem sljedeće putanje: **Applications Resource Manager** > **Database** > **Data Sources**.

Obrazac za upravljanje izvorima podataka sastoji se od:

- **Trake s alatima (Ribbon)** koja omogućuje uobičajene CRUD operacije te gumba **Pregled**, koji omogućuje prikaz rezultata izvršavanja izvora podataka.
- Standardnog filtra koji omogućuje filtriranje postojećih zapisa (izvora podataka) prema šifri, opisu, objektu, području i datumu.
- Tablice s rezultatima u kojoj je moguće pregledati popis izvora podataka dostupnih u bazi podataka.

### Izrada novog izvora podataka

Novi izvor podataka izrađuje se pomoću gumba **Novo**, a potrebno je popuniti:

- podatke zaglavlja, kao što su šifra i opis
- vrstu izvora podataka, pri čemu je moguće odabrati:
  - izvore podataka temeljene na standardnom ili prilagođenom Fluentisovu objektu
  - izvore podataka temeljene na SQL upitu
  - izvore podataka vrste **GROUP BY**, temeljene na standardnom ili prilagođenom Fluentisovu objektu

Ovisno o odabranoj vrsti izvora podataka, potrebno je popuniti različita polja.

- Za jednostavne izvore podataka, odnosno one temeljene na **objektu**, potrebno je popuniti:
  - šifru
  - vrstu izvora podataka, odabirom jednostavne vrste
  - opis
  - šifru Fluentisova objekta na kojem želimo temeljiti izvor podataka
  - datum završetka valjanosti, kojim se određuje datum nakon kojeg izvor podataka više nije dostupan korisniku Fluentisa
  - **Take Rows / Skip Rows**, što omogućuje definiranje raspona redaka koje treba dohvatiti ili preskočiti
  - **Područje**, odnosno opis preuzet iz rječnika

- Za izvore podataka temeljene na **SQL upitu** potrebno je popuniti:
  - podatke zaglavlja:
    - šifru
    - opis
  - vrstu izvora podataka, odabirom opcije **SQL Query DataSource**
  - datum završetka valjanosti, kojim se određuje datum nakon kojeg izvor podataka više nije dostupan korisniku Fluentisa
  - **SQL Query**, odabirom upita koji je prethodno izrađen i spremljen pomoću alata **FluentisQueryStudio**
  - kontekst (neobvezno)
  - parametre (neobvezno)
  - područje, odnosno opis preuzet iz rječnika
  - poslovni modul

Za informacije o korištenju alata **FluentisQueryStudio** za izradu i spremanje upita u bazu podataka pogledajte sljedeću [poveznicu](/docs/applications/application-resource-manager/database/database-intro).

Vrlo je važno da upit izrađen pomoću alata **FluentisQueryStudio** poštuje određena pravila oblikovanja:

- Upit mora vraćati najmanje polja **Id**, **Code** i **Description** kako bi se mogao koristiti unutar izvora podataka. U suprotnom neće biti vidljiv u odgovarajućem padajućem izborniku (combobox).

- Na kraju, postoje i izvori podataka temeljeni na klauzuli **GROUP BY**.

- Za ovu vrstu izvora podataka potrebno je popuniti:
  - šifru i opis
  - vrstu izvora podataka, odabirom opcije **GROUP BY Data Source**
  - datum završetka valjanosti (neobvezno)
  - objekt na kojem će se temeljiti izvor podataka
  - **Take Rows / Skip Rows**
  - područje, odnosno opis preuzet iz rječnika

Putem kartice **Svojstva** moguće je definirati kriterije agregiranja koji će se koristiti u klauzuli **GROUP BY**.

Kao i u SQL jeziku, klauzula **GROUP BY** omogućuje grupiranje zapisa prema određenim kriterijima agregiranja.

Na desnoj kartici **Vidljiva svojstva** nalazi se tablica sa sljedećim poljima:

- šifra
- alias
- uloga
- kriterij agregiranja
- putanja svojstva
- formula
- sortiranje prema položaju
- redoslijed sortiranja
- kumulativni zbroj

Kriterij agregiranja postavlja se u stupcu **Kriterij agregiranja**, u kojem je moguće odabrati jednu od sljedećih vrijednosti:

- **Dimenzija**
- **Metrika**

**Dimenzije** su kvalitativni atributi, odnosno kategorije ili opisne oznake. Služe za segmentiranje ili grupiranje podataka.

**Metrike** su kvantitativni atributi, odnosno brojčane vrijednosti koje je moguće mjeriti, agregirati ili izračunavati.

Primjerice, prodajne račune (objekt FSSalesInvoice) možemo grupirati prema vrsti računa (FSSalesInvoiceType.Code), kao što je prikazano na slici u nastavku.

![](/img/it-it/applications/database/20250529162809.png)