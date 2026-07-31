---
title: Zaduženje skladišta ulaznim računima
sidebar_position: 1
keywords:
- Fattura di acquisto
- Magazzino
---

Postupak se otvara putem putanje **Nabavka > Ulazni računi > Procedure > Zaduženje skladišta ulaznim računima**.

Ovaj postupak omogućava izvršavanje/ponovno izvršavanje automatskog evidentiranja u skladištu artikala koji se nalaze na računu.

:::important ZAPAMTI
Računi mogu generisati skladišna kretanja samo ako su tipa **Neposredni (Immediato)**.
:::

:::tip NAPOMENA
Ako dokument sadrži fiktivne artikle, postupak će uzeti u obzir tip nabavke definisan u MRP parametrima artikla:

- artikli tipa **Nabavka** neće biti uključeni u skladišno knjiženje;
- artikli tipa **Proizvodnja** ili **Podizvođač** biće knjiženi u skladište korišćenjem prvog nivoa sastavnice (BOM-a).
:::

### Filter

Na ovoj kartici korisnik može podesiti filtere za pronalaženje ulaznih računa, njihov izbor i naknadno knjiženje u skladište.

**Datum skladišnog knjiženja**: omogućava definisanje datuma koji će biti povezan sa skladišnim knjiženjem, ako taj datum već nije podešen u [Parametrima ulaznih računa](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > kartica *Utovar* (tačnije, ako nije aktivirana opcija *Kreiraj zapis sa datumom dokumenta*).

:::important ZAPAMTI
Ako je u **Parametrima ulaznih računa > kartica Utovar** aktivirana opcija **Kreiraj zapis sa datumom dokumenta**, skladišno knjiženje će uvek biti izvršeno sa datumom dokumenta, bez obzira na vrednost unetu u polje **Datum skladišnog knjiženja** u ovom obrascu.
Ako navedena opcija nije aktivirana, koristiće se **Datum skladišnog knjiženja** ručno unet u zaglavlju računa.
Ako **Datum skladišnog knjiženja** nije definisan, skladišno knjiženje biće kreirano sa datumom navedenim u polju **Datum skladišnog knjiženja** u ovom obrascu.
:::

*Specifična dugmad*

> **Traži**: omogućava pretragu računa za knjiženje u skladište.  
> **Zaduženje**: omogućava izvršavanje skladišnog knjiženja izabranih računa, prema algoritmima unosa i parametrima podešenim na sledećoj kartici *Parametri*.

### Parametri

Ako stavke na računu nemaju skladište i predložak za knjiženje, kroz ovaj prozor korisnik može definisati način postupanja sa izuzecima za stavke artikala.

Dostupne opcije su:

- **Ne knjiži ceo račun**: ne dozvoljava delimično knjiženje dokumenta;

- **Ignoriši stavke bez skladišta i predloška**: dozvoljava delimično knjiženje dokumenta;

- **Prihvati sledeće podatke kao skladište i predložak**: obezbeđuje potpuno knjiženje dokumenta. Za sve artikle koji nemaju skladište i predložak u izabranim računima, postavlja vrednosti unete u polja: *Skladište* i *Predložak*.

*Specifično dugme*

> **Sačuvaj parametre**: omogućava čuvanje podešenih parametara za knjiženje.

Nakon izbora računa (na kartici *Filter*) i podešavanja parametara, računi se mogu knjižiti pomoću dugmeta **Zaduženje**.

### Sažetak

Na ovoj kartici korisnik može pretraživati, pregledati i poništavati izvršena skladišna knjiženja koja ispunjavaju uslove za poništavanje skladišnog knjiženja.

Podaci u donjim pregledima, **Računi** i **Zapis**, odnose se na izabrano skladišno knjiženje iz gornjeg pregleda (nakon filtriranja podataka). Pored toga, u ova dva pregleda moguće je dvostrukim klikom na red otvoriti i pregledati račun i odgovarajuće skladišno knjiženje.

*Specifična dugmad*

> **Traži**: pretražuje knjižene račune. Rezultat ovog postupka prikazuje se u pregledima rezultata.  
> **Obriši zaduženje**: poništava kompletno knjiženje izabranog skladišnog knjiženja, sa svim njegovim detaljima prikazanim u donja dva pregleda.  
> **Vrati račun**: poništava knjiženje dokumenta izabranog skladišnog knjiženja. Ova operacija će takođe poništiti skladišno knjiženje ako odgovara samo jednom dokumentu ili ažurirati njegove podatke ako odgovara većem broju računa.