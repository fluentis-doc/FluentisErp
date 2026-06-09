---
title: Formula za ažuriranje politike cena/popusta
sidebar_position: 4
---

U ovom obrascu moguće je definisati pravila povezivanja između nabavnih i prodajnih dokumenata kako bi se cene artikala automatski ažurirale nakon prijema novog kataloga ili cenovnika dobavljača.

U prvoj tabeli definišu se:

- **Šifra**
- **Opis**

formule za ažuriranje cena.

U drugoj tabeli definišu se izvorni dokumenti, odredišni dokumenti i formule koje će se koristiti za izračunavanje novih cena.

Za jednu stavku moguće je definisati do pet uzastopnih operacija.

U obračunu se uzimaju u obzir samo popunjena polja, dok se prazna polja zanemaruju.

Korisnik treba da popuni samo polja koja su relevantna za željenu transformaciju cene.

## Polja formule

- **Vrsta odredišnog prodajnog cenovnika**: određuje vrstu prodajnog cenovnika koji će biti ažuriran primenom formule definisane u redu.

- **Konto / Podkonto / Naziv – odredišni prodajni cenovnik**: određuje prilagođeni prodajni cenovnik na kojem će se izvršiti ažuriranje.

- **Vrsta odredišnog nabavnog cenovnika**: određuje vrstu nabavnog cenovnika koji će biti ažuriran.

- **Konto / Podkonto / Naziv – odredišni nabavni cenovnik**: određuje prilagođeni nabavni cenovnik na kojem će se izvršiti ažuriranje.

- **(Izvorna) vrsta prodajnog cenovnika**: određuje vrstu prodajnog cenovnika iz kojeg se preuzimaju podaci za obračun.

- **Konto / Podkonto / Naziv – izvorni kupac**: određuje prilagođeni prodajni cenovnik koji se koristi kao izvor podataka.

- **(Izvorna) vrsta nabavnog cenovnika**: određuje vrstu nabavnog cenovnika koji se koristi kao izvor.

- **Konto / Podkonto / Naziv – izvorni dobavljač**: određuje prilagođeni nabavni cenovnik koji se koristi kao izvor podataka.

- **Izvor troškova skladišta**: omogućava korišćenje prosečnog, poslednjeg ili standardnog troška artikla kao izvora za obračun cene.

- **Operand**: matematička operacija koja se primenjuje na izvornu vrednost.

  Dostupne operacije su:

  - `+`
  - `-`
  - `*`
  - `/`
  - `%`

- **Vrednost**: omogućava unos fiksne numeričke vrednosti koja će se koristiti zajedno sa odabranom operacijom.

- **Vrednost svojstva**: omogućava korišćenje vrednosti drugog polja umesto fiksne vrednosti.

  Kada je ovo polje popunjeno, polje **Vrednost** se zanemaruje.

  Vrednost može biti:

  - ručno unet podatak
  - vrednost drugog polja
  - svojstvo dokumenta ili artikla

  Klikom na polje otvara se navigator objekata iz kojeg se bira željeno svojstvo.

  Među dostupnim svojstvima nalaze se i:

  - ***AddedValue***
  - ***AddedPercentage***

  koja se koriste za preuzimanje vrednosti iz nabavnog cenovnika dobavljača.

- **Prenos popusta**: prenosi popuste iz odabranog izvornog cenovnika na odredišni cenovnik.

- **Prenos popusta preferiranog dobavljača**: prenosi popuste iz cenovnika preferiranog dobavljača definisanog na kartici artikla.