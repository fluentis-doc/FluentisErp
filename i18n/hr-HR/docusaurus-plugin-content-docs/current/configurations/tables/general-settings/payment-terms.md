---
title: Uvjeti plaćanja
sidebar_position: 10
---

:::tip[Fast Start]
Na tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako se konfiguracija unosi ručno, potrebno je slijediti kontrolni popis na povezanoj stranici.
:::

Tablica sadrži načine (uvjete) plaćanja koji se koriste u ERP sustavu za izračun datuma dospijeća i otvorenih stavki.

:::danger Pažnja
Za ispravan unos načina plaćanja potrebno je popuniti i gornju tablicu i tablicu s detaljima, koja definira izračun dana dospijeća. Iako program omogućuje spremanje bez popunjene tablice s detaljima, tako kreiran način plaćanja neće se moći koristiti.
:::

### Gornja tablica

**Uvjeti plaćanja / Opis**: Predstavlja šifru i opis odgode plaćanja koja se primjenjuje.

**Plaćanje krajem mjeseca**: Ako je ova oznaka aktivna, odgoda plaćanja pomiče se na kraj mjeseca nakon primjene broja dana definiranog u donjoj tablici s detaljima.

**Kraj tjedna**: Ako je ova oznaka aktivna, odgoda plaćanja pomiče se na sljedeći petak nakon datuma dobivenog primjenom broja dana definiranog u donjoj tablici s detaljima.

**Dani**: Broj dana koji se dodaju na kraj mjeseca kako bi se dobio fiksni dan dospijeća. Ispravno postavljanje podrazumijeva da se najprije u donjoj tablici definira broj dana odgode, uključujući i nulu ako je potrebno. Zatim se primjenjuje oznaka za kraj mjeseca, a na kraju se dodaju dodatni dani nakon završetka mjeseca. Radi ujednačavanja izračuna preporučuje se uključiti i oznaku za komercijalni kalendar, kojom se svi mjeseci tretiraju kao da imaju 30 dana.

**Zadano za čl. 62**: Oznaka koja identificira dvije rate s dospijećem od 30 i 60 dana, a koje se koriste za izračun rokova plaćanja na računima koji sadrže lako pokvarljivu robu, u skladu s člankom 62. Zakonske uredbe br. 1 od 24. siječnja 2012.

[**Pogledajte šifarnike kupaca i dobavljača**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)

**Država**: Filtar kojim se određuje da taj način plaćanja bude vidljiv samo poduzećima u bazi podataka koja imaju navedenu nacionalnost. To je korisno jer je tablica, kao osnovna tablica, vidljiva svim poduzećima u istoj bazi podataka.

### Donja tablica

Kod obročne otplate moguće je raspodijeliti oporezivi iznos, PDV i troškove dokumenta po pojedinim ratama u postotcima. Postotak troškova ne može se izravno primijeniti na knjiženja u glavnoj knjizi. Ako se postotak ostavi na nuli, **_Fluentis_** će iznose ravnomjerno raspodijeliti na sve definirane rate.

**Komercijalni kalendar**: Uz ovu opciju u odgovarajuće polje moguće je unijeti samo višekratnike od 30 dana, koji će se obrađivati kao cijeli mjeseci.

Tipičan je primjer dospijeće 30 dana od kraja mjeseca kada je datum računa 31. 1. Ako primijenimo 30 kalendarskih dana (bez oznake „Komercijalni kalendar”), dobit ćemo datum dospijeća 2. 3., a pomicanjem na kraj mjeseca datum dospijeća postaje 31. 3. To znači da je rok zapravo 60 dana, a ne 30, kako je predviđeno nazivom. Ako je uključena oznaka „Komercijalni kalendar”, 30 dana obrađuje se kao dodatni mjesec, nakon čega se primjenjuje pravilo kraja mjeseca. Tako će se od datuma 31. 1. ispravno dobiti 28. ili 29. veljače, ovisno o kalendaru.

### Jezici

Za svaki način plaćanja odabran u gornjoj tablici moguće je definirati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.