---
title: Kartica Detalji
sidebar_position: 1
---

**Status osnovnog sredstva**: statusom se upravlja automatski na osnovu operacija povezanih sa osnovnim sredstvom i ne bi ga trebalo ručno menjati. Kod prenetog osnovnog sredstva, za koje je uneta i akumulirana amortizacija, status će se automatski promeniti u **Delimično amortizovano** ili **Potpuno amortizovano**. Za ispravan unos prenetog osnovnog sredstva pogledajte članak **[Knjiženje osnovnog sredstva](/docs/finance-area/ledger-records/records/ledger-record)**.

**Početak korišćenja**: prema podrazumevanim postavkama predlaže se današnji datum i predstavlja datum od kojeg je osnovno sredstvo stvarno stavljeno u upotrebu. Tek od tog datuma moguće je obračunavati amortizaciju.

**Kraj korišćenja**: po pravilu se ne popunjava, osim u posebnim slučajevima kada je potrebno onemogućiti dalji obračun amortizacije i isključiti osnovno sredstvo iz registra. U uobičajenom radu, nakon završetka amortizacije, sredstvo će se automatski voditi kao potpuno amortizovano.

**Datumi garancije** služe isključivo kao informativni podaci i nisu povezani ni sa jednom automatskom funkcionalnošću.

Podkonto osnovnog sredstva za izabranu kategoriju automatski se prikazuje u polju **Osnovno sredstvo**.

Polje **Dobavljač osnovnog sredstva** ne popunjava se automatski jer se dobavljači i kupci pojedinačnih transakcija evidentiraju zasebno kroz odgovarajuće operacije.

Polje **Lokacija** koristi istoimenu tabelu za evidentiranje mesta na kojem se osnovno sredstvo fizički nalazi (npr. sedište preduzeća), dok je **Serijski broj** slobodno tekstualno polje namenjeno unosu serijskog broja sredstva.

Polje **Zaposleni** omogućava evidentiranje osobe koja koristi osnovno sredstvo.

U zavisnosti od postavki u **Konfiguracija > Parametri > Administracija > Parametri osnovnih sredstava**, može biti dostupno i polje **Prilagođena stopa amortizacije**. Ako je definisana, koristi se umesto stope amortizacije zadate u kategoriji osnovnog sredstva. Takođe je moguće definisati mernu jedinicu za količinsko praćenje.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)

U polju **Vrsta odbitka** moguće je pojedinačnom osnovnom sredstvu dodeliti posebnu vrstu poreskog odbitka amortizacije. Vrednosti se biraju iz odgovarajuće tabele, u kojoj su definisani tipovi odbitaka i pripadajući procenti koji će se koristiti tokom obračuna amortizacije.

### Centri troškova

Odeljak **Centri troškova** omogućava raspodelu amortizacije na više centara troškova prema unapred definisanim procentima.

Za korišćenje ove funkcionalnosti potrebno je aktivirati opciju **Omogući centre troškova** u obrascu **Parametri osnovnih sredstava**.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)

### Dodatni podaci

Otvaranjem odeljka **Dodatni podaci** dostupne su dodatne opcije:

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)

Prema podrazumevanim postavkama osnovno sredstvo ima status **U upotrebi**. Ako ova oznaka nije aktivna, za sredstvo neće biti moguće obračunati amortizaciju.

Moguće je označiti i da je sredstvo **Polovno**. U tom slučaju amortizacija će se obračunavati samo tokom prve godine korišćenja, a postavka **Prva godina amortizacije** iz tabele **[Kategorije osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-category)** neće se primenjivati, odnosno stopa amortizacije prve godine neće biti umanjena.

Opcija **Na održavanju** označava da se sredstvo uključuje u izveštaje o održavanju.

Opcija **Pozajmljeno** dostupna je samo za kategorije nematerijalne imovine i služi za isključivanje takve imovine iz štampanja registra osnovnih sredstava kada je njena vrednost već otpisana iz bilansa.

Opcija **Jednokratna amortizacija** omogućava obračun 100% amortizacije već u prvoj godini. Prilikom čuvanja sredstva ERP proverava da li je takav obračun dozvoljen prema ograničenjima definisanim u kategoriji osnovnog sredstva.

Vidljiv je i status koji označava da li je osnovno sredstvo već uključeno u zvaničan ispis registra osnovnih sredstava. Ako jeste, podaci zaglavlja više se ne mogu menjati.

Oznake **Prihod** i **Studija sektora** koriste se za označavanje osnovnih sredstava koja ulaze u posebne poreske obračune.

| Funkcija | Značenje |
| --- | --- |
| Sačuvaj | Čuva osnovno sredstvo, dodeljuje mu broj i čuva izabrane postavke. |
| [Dokumenti](/docs/guide/common/operations-with-data/document-manager) | Upravljanje dokumentima povezanim sa osnovnim sredstvom. |