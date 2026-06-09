---
title: Povezivanje kategorija popusta
sidebar_position: 5
---

U ovom obrascu moguće je pregledati i definisati veze između kategorija popusta.

Generička kategorija popusta (na primer kategorija definisana na nivou matične kompanije) povezuje se sa jednom kategorijom popusta za prodaju i jednom kategorijom popusta za nabavku.

Ovakvo povezivanje omogućava pravilnu primenu uslova popusta između modula nabavke i prodaje.

Primer:

- distributeri mogu preuzeti katalog artikala od matične kompanije putem procedure za uvoz dobavljačkih cenovnika (/docs/purchase/purchase-price-lists/procedures/supplier-price)
- matična kompanija koristi jednu kategoriju popusta
- distributeri mogu koristiti drugu kategoriju popusta za isti artikal

Na taj način moguće je primenjivati različite komercijalne uslove uz zadržavanje zajedničke baze artikala.

## Polja obrasca

- **Klasa artikla**: određuje klasu artikala kojoj pripada definisana kategorija popusta.

- **Konto / Podkonto / Naziv**: prikazuje poslovnog partnera kojem je dodeljena kategorija popusta.

- **Kategorija popusta prodaje**: kategorija popusta koja se koristi kada poslovni partner prodaje artikal.

- **Kategorija popusta nabavke**: kategorija popusta koja se koristi kada poslovni partner nabavlja artikal.

- **Formula za ažuriranje politike cena**: određuje formulu koja će se koristiti u procedurama ažuriranja cena.

- **Datum početka važenja**: datum od kojeg se definisana veza primenjuje.

  Na ovaj način moguće je koristiti različite kategorije popusta za različite vremenske periode.

- **Kategorija rabata**: generička kategorija popusta definisana na nivou matične kompanije.

  Ovo polje povezuje modul **Nabavka** sa modulom **Prodaja**.