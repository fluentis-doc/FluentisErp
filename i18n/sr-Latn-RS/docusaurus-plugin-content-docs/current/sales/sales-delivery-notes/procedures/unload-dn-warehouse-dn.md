---
title: Razduženje robe po otpremnici
sidebar_position: 1
---

Postupak se otvara putem **Prodaja > Otpremnice > Procedure > Razduženje robe po otpremnici**.

Ovaj postupak omogućava izvršavanje ili poništavanje operacija automatskog razduženja skladišta za artikle koji se nalaze na otpremnici.

:::info Zapamti
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir **vrstu nabavke** definisanu u **MRP parametrima artikla**:

- Artikli tipa **Nabavka** neće biti uključeni u skladišnu evidenciju.
- Artikli tipa **Proizvodnja** ili **Radni nalog** biće evidentirani u skladištu zajedno sa prvim nivoom sastavnice (BOM-a).
:::

## Filter

Na ovoj kartici korisnik može pretraživati i obrađivati otpremnice koje su interno označene statusom **Kontrolisano**.

### Posebna dugmad

> **Traži**: omogućava pretragu otpremnica za razduženje.  
> **Razduženje**: izvršava razduženje izabranih otpremnica iz skladišta, na osnovu algoritama razduženja i parametara definisanih na kartici **Parametri**.

:::info Zapamti
Ako u **Parametrima otpremnica > Izvršenje** opcija **Kreiraj skladišni zapis sa datumom dokumenta** nije aktivna, skladišno knjiženje će uvek biti kreirano sa trenutnim datumom.

Ako je opcija aktivna, knjiženje će koristiti:

- **datum transporta** definisan na kartici **Prevoz** otpremnice, ukoliko je popunjena;
- u suprotnom, koristiće se datum same otpremnice.
:::

## Parametri

Na ovoj kartici korisnik definiše način obrade stavki.

U slučaju da redovi otpremnice nemaju definisano skladište i tip skladišnog dokumenta, dostupne su sledeće opcije:

- **Ne razdužuj/zadužuj kompletnu otpremnicu** – ne dozvoljava delimično razduženje otpremnice;

- **Ignoriši stavke bez skladišta i tipa dokumenta** – dozvoljava delimično razduženje dokumenta;

- **Koristi sledeće skladište i tip dokumenta** – za sve artikle kod kojih nisu definisani skladište i tip dokumenta automatski postavlja vrednosti unesene u polja:

  - **Skladište**
  - **Tip dokumenta**

  Na taj način omogućava potpuno razduženje dokumenta.

### Posebno dugme

> **Sačuvaj parametre**: omogućava čuvanje podešenih parametara za obradu.

Nakon izbora otpremnice na kartici **Filter** i definisanja parametara, razduženje se pokreće klikom na dugme **Razduženje**.

## Pregled

Na ovoj kartici korisnik može pretraživati, pregledati i poništavati izvršene operacije razduženja koje ispunjavaju uslove za brisanje skladišnih evidencija.

Podaci prikazani u donjim pregledima **Otpremnica** i **Zapis** odgovaraju operaciji izabranoj u gornjoj tabeli rezultata.

Takođe je moguće otvoriti i pregledati:

- otpremnicu,
- skladišni dokument,

dvostrukim klikom na odgovarajući red.

### Posebna dugmad

> **Traži**: pretražuje već razdužene otpremnice. Rezultati se prikazuju u tabeli rezultata.  

> **Poništi**: potpuno briše izabrane operacije razduženja iz rezultata pretrage, pod uslovom da su ispunjeni uslovi za brisanje skladišnih evidencija.  

> **Vrati otpremnicu/prijemnicu**: briše izabrane operacije razduženja za otpremnicu koja je trenutno prikazana u detaljnom pregledu.