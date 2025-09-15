---
title: Izvori podataka
sidebar_label: Izvori podataka
sidebar_position: 0
---

### Obrazac
Kao što je prethodno spomenuto u općem pregledu u odjeljku [LINK](/docs/applications/database/database-intro), izvori podataka (datasources) omogućuju strukturirano i organizirano izlaganje podataka.  
Obrazac za izvore podataka dostupan je putem sljedeće putanje: **Applications Resource Manager** > **Baza podataka** > **Izvori podataka**.  

Obrazac za izvore podataka sastoji se od sljedećih elemenata:
* **Ribbon** izbornika koji omogućuje izvođenje uobičajenih CRUD operacija te gumba **pregled** (anteprima) koji omogućuje prikaz rezultata izvođenja izvora podataka.
* standardnog filtra kojim je moguće filtrirati postojeće zapise (izvore podataka) prema Kodu, Opisu, Objektu, Području i Datumu.
* mreže rezultata u kojoj je moguće pregledati popis izvora podataka prisutnih u bazi.  

### Kreiranje novog izvora podataka

Kreiranje novog izvora podataka vrši se putem gumba 'Novi', pri čemu je potrebno popuniti sljedeće informacije:
* zaglavlje, tj. kod i opis.
* tip izvora podataka, s mogućnošću odabira između:
  * izvora podataka temeljenih na standardnom ili prilagođenom (custom) Fluentis objektu.
  * izvora podataka temeljenih na SQL upitu.
  * izvora podataka tipa **GROUP BY** temeljenih na standardnom ili prilagođenom Fluentis objektu.

Ovisno o odabranoj vrsti izvora podataka, potrebna polja za unos će se razlikovati.

* Za jednostavne izvore podataka, tj. one temeljene na **objektu**, potrebno je unijeti:
  * kod.
  * tip izvora podataka (odabir jednostavnog tipa).
  * opis.
  * kod Fluentis objekta na kojem će se temeljiti izvor podataka.
  * datum završetka valjanosti – omogućuje definiranje datuma nakon kojeg izvor podataka više nije dostupan korisnicima Fluentisa.
  * Take Rows / Skip Rows – omogućuje definiranje raspona redaka koji se uzimaju ili preskaču.
  * područje – opis preuzet iz rječnika.
* * Za izvore podataka temeljene na **SQL upitu**, potrebno je unijeti:
  * zaglavlje:
    * kod.
    * opis.
  * tip izvora podataka – odabir SQL Query DataSource,
  * datum završetka valjanosti – definiranje datuma nakon kojeg izvor podataka nije više dostupan.
  * SQL upit – unos prethodno kreiranog i spremljenog upita putem **Fluentis Query Studio**.
  * kontekst (neobavezno).
  * parametre (neobavezno).
  * područje – opis preuzet iz rječnika.
  * poslovni modul.

Za korištenje **Fluentis Query Studio** kao alata za kreiranje/spremanje upita u bazu podataka, pogledaj sljedeći [LINK](/docs/applications/database/database-intro).  
Važno je da upit kreiran putem **Fluentis Query Studio** poštuje određena pravila formatiranja:
* upit mora vratiti barem polja **Id**, **Code**, **Description**, kako bi mogao biti ponovno korišten unutar izvora podataka – u suprotnom neće biti vidljiv u odgovarajućem padajućem izborniku (combobox).

* Konačno, postoje i izvori podataka temeljeni na **GROUP BY** klauzuli.
* Za ovu vrstu izvora podataka potrebno je unijeti:
  * kod i opis,
  * tip izvora podataka – odabir 'GROUP BY Data Source',
  * datum završetka valjanosti (neobavezno),
  * objekt na kojem se temelji izvor podataka,
  * take rows / skip rows,
  * područje – opis preuzet iz rječnika.

* Putem kartice *Svojstva* moguće je definirati kriterije agregacije koji koriste GROUP BY klauzulu.
Slično kao u SQL jeziku, GROUP BY klauzula omogućuje grupiranje zapisa prema definiranim kriterijima agregacije.
Na desnoj kartici *Vidljiva svojstva* nalazi se tablica sa sljedećim poljima:
* kod
* alias
* uloga
* kriterij agregacije
* putanja svojstva
* formula
* sortiraj po poziciji
* redoslijed sortiranja
* kumulativna suma

Za upravljanje kriterijem agregacije koristi se stupac *Kriterij agregacije*, u kojem je moguće odabrati jednu od vrijednosti:
* Dimenzija, ili
* Metrika.

**Dimenzije** su kvalitativni atributi – kategorije ili deskriptori koji služe za segmentaciju ili grupiranje podataka.  
**Metrike** su kvantitativni atributi – numeričke vrijednosti koje se mogu mjeriti, agregirati ili izračunavati.  
Na primjer, možemo agregirati izlazne račune (objekt FSSalesInvoice) prema tipu računa (FSSalesInvoiceType.Code), kao što je prikazano na sljedećem ekranu:   
![](/img/it-it/applications/database/20250529162809.png)


