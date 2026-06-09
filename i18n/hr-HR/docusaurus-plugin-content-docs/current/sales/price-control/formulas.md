---
title: Formula ažuriranja politike cijena/popusta
sidebar_position: 4
---

U ovom obrascu moguće je definirati pravila povezivanja između nabavnih i prodajnih dokumenata kako bi se cijene artikala automatski ažurirale nakon zaprimanja novog kataloga ili cjenika dobavljača.

U prvoj tablici definiraju se:

- **Šifra**
- **Opis**

za formulu za ažuriranje cijena.

U drugoj tablici definiraju se izvorni dokumenti, odredišni dokumenti i formule koje će se koristiti za izračun novih cijena.

Za jednu stavku moguće je definirati do pet uzastopnih operacija.

Razmatraju se samo popunjena polja, dok se prazna polja zanemaruju tijekom izračuna.

Korisnik treba ispuniti samo polja koja su relevantna za željenu transformaciju cijene.

## Polja formule

- **Vrsta odredišnog prodajnog cjenika**: određuje vrstu prodajnog cjenika koji će biti ažuriran primjenom formule definirane u retku.

- **Konto / Podkonto / Naziv – odredišni prodajni cjenik**: određuje prilagođeni prodajni cjenik na kojem će se izvršiti ažuriranje.

- **Vrsta odredišnog nabavnog cjenika**: određuje vrstu nabavnog cjenika koji će biti ažuriran.

- **Konto / Podkonto / Naziv – odredišni nabavni cjenik**: određuje prilagođeni nabavni cjenik na kojem će se izvršiti ažuriranje.

- **(Izvorna) vrsta prodajnog cjenika**: određuje vrstu prodajnog cjenika iz kojeg se preuzimaju podaci za izračun.

- **Konto / Podkonto / Naziv – izvorni kupac**: određuje prilagođeni prodajni cjenik koji se koristi kao izvor podataka.

- **(Izvorna) vrsta nabavnog cjenika**: određuje vrstu nabavnog cjenika koji se koristi kao izvor.

- **Konto / Podkonto / Naziv – izvorni dobavljač**: određuje prilagođeni nabavni cjenik koji se koristi kao izvor podataka.

- **Izvor troškova skladišta**: omogućuje korištenje prosječnog, zadnjeg ili standardnog troška artikla kao izvora za izračun cijene.

- **Operand**: matematička operacija koja se primjenjuje na izvornu vrijednost.

  Dostupne operacije su:

  - `+`
  - `-`
  - `*`
  - `/`
  - `%`

- **Vrijednost**: omogućuje unos fiksne numeričke vrijednosti koja će se koristiti zajedno s odabranom operacijom.

- **Vrijednost svojstva**: omogućuje korištenje vrijednosti drugog polja umjesto fiksne vrijednosti.

  Kada je ovo polje popunjeno, zanemaruje se polje **Vrijednost**.

  Vrijednost može biti:

  - ručno uneseni podatak
  - vrijednost drugog polja
  - svojstvo dokumenta ili artikla

  Klikom na polje otvara se navigator objekata iz kojeg se odabire željeno svojstvo.

  Među dostupnim svojstvima nalaze se i:

  - ***AddedValue***
  - ***AddedPercentage***

  koja se koriste za preuzimanje vrijednosti iz nabavnog cjenika dobavljača.

- **Prenošenje popusta**: prenosi popuste iz odabranog izvornog cjenika na odredišni cjenik.

- **Prenošenje popusta od preferiranog dobavljača**: prenosi popuste iz cjenika preferiranog dobavljača definiranog na kartici artikla.