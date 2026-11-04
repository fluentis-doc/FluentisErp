---
title: Izvori podataka
sidebar_label: Izvori podataka
sidebar_position: 3
---

**### Obrazac**

Obrascu za upravljanje izvorima podataka može se pristupiti putem sledeće putanje: **Applications Resource Manager** > **Database** > **Data Sources**.

Obrazac za upravljanje izvorima podataka sastoji se od:

- **Trake sa alatima (Ribbon)** koja omogućava uobičajene CRUD operacije, kao i dugmeta **Pregled**, koje omogućava prikaz rezultata izvršavanja izvora podataka.
- Standardnog filtera koji omogućava filtriranje postojećih zapisa (izvora podataka) prema šifri, opisu, objektu, oblasti i datumu.
- Tabele sa rezultatima u kojoj je moguće pregledati listu izvora podataka dostupnih u bazi podataka.

**### Kreiranje novog izvora podataka**

Novi izvor podataka kreira se pomoću dugmeta **Novo**, a potrebno je popuniti:

- podatke zaglavlja, kao što su šifra i opis
- tip izvora podataka, pri čemu je moguće odabrati:
  - izvore podataka zasnovane na standardnom ili prilagođenom Fluentis objektu
  - izvore podataka zasnovane na SQL upitu
  - izvore podataka tipa **GROUP BY**, zasnovane na standardnom ili prilagođenom Fluentis objektu

U zavisnosti od odabranog tipa izvora podataka, potrebno je popuniti različita polja.

- Za jednostavne izvore podataka, odnosno one zasnovane na **objektu**, potrebno je popuniti:
  - šifru
  - tip izvora podataka, odabirom jednostavnog tipa
  - opis
  - šifru Fluentis objekta na kojem želimo da zasnujemo izvor podataka
  - datum završetka važenja, kojim se određuje datum nakon kojeg izvor podataka više nije dostupan korisniku Fluentisa
  - **Take Rows / Skip Rows**, što omogućava definisanje raspona redova koje treba preuzeti ili preskočiti
  - **Oblast**, odnosno opis preuzet iz rečnika

- Za izvore podataka zasnovane na **SQL upitu** potrebno je popuniti:
  - podatke zaglavlja:
    - šifru
    - opis
  - tip izvora podataka, odabirom opcije **SQL Query DataSource**
  - datum završetka važenja, kojim se određuje datum nakon kojeg izvor podataka više nije dostupan korisniku Fluentisa
  - **SQL Query**, odabirom upita koji je prethodno kreiran i sačuvan pomoću alata **FluentisQueryStudio**
  - kontekst (opciono)
  - parametre (opciono)
  - oblast, odnosno opis preuzet iz rečnika
  - poslovni modul

Za informacije o korišćenju alata **FluentisQueryStudio** za kreiranje i čuvanje upita u bazi podataka pogledajte sledeću [poveznicu](/docs/applications/application-resource-manager/database/database-intro).

Veoma je važno da upit kreiran pomoću alata **FluentisQueryStudio** poštuje određena pravila oblikovanja:

- Upit mora da vraća najmanje polja **Id**, **Code** i **Description** kako bi mogao da se koristi unutar izvora podataka. U suprotnom neće biti vidljiv u odgovarajućem padajućem meniju (combobox).

- Na kraju, postoje i izvori podataka zasnovani na klauzuli **GROUP BY**.

- Za ovu vrstu izvora podataka potrebno je popuniti:
  - šifru i opis
  - tip izvora podataka, odabirom opcije **GROUP BY Data Source**
  - datum završetka važenja (opciono)
  - objekat na kojem će se zasnivati izvor podataka
  - **Take Rows / Skip Rows**
  - oblast, odnosno opis preuzet iz rečnika

Putem kartice **Svojstva** moguće je definisati kriterijume agregiranja koji će se koristiti u klauzuli **GROUP BY**.

Kao i u SQL jeziku, klauzula **GROUP BY** omogućava grupisanje zapisa prema određenim kriterijumima agregiranja.

Na desnoj kartici **Vidljiva svojstva** nalazi se tabela sa sledećim poljima:

- šifra
- alias
- uloga
- kriterijum agregiranja
- putanja svojstva
- formula
- sortiranje prema položaju
- redosled sortiranja
- kumulativni zbir

Kriterijum agregiranja postavlja se u koloni **Kriterijum agregiranja**, u kojoj je moguće odabrati jednu od sledećih vrednosti:

- **Dimenzija**
- **Metrika**

**Dimenzije** su kvalitativni atributi, odnosno kategorije ili opisne oznake. Služe za segmentiranje ili grupisanje podataka.

**Metrike** su kvantitativni atributi, odnosno brojčane vrednosti koje je moguće meriti, agregirati ili izračunavati.

Na primer, prodajne fakture (objekat FSSalesInvoice) možemo grupisati prema tipu fakture (FSSalesInvoiceType.Code), kao što je prikazano na slici u nastavku.

![](/img/it-it/applications/database/20250529162809.png)