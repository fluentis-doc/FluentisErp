---
title: Matrica konfiguracije popusta
sidebar_position: 1
---

U ovom obrascu definišu se politike popusta na osnovu podešavanja definisanih u ostalim obrascima grupe **Upravljanje cenama**.

U prvoj tabeli nalaze se sledeće kolone:

> - **Opis konta**: sadrži šifarnik na koji se odnosi politika popusta.
> - **Klasa**: označava klasu artikala na koju se odnosi politika popusta; ovo je neobavezno polje.
> - **Kategorija popusta nabavke**: omogućava izbor kategorije popusta nabavke koja će biti povezana sa šifarnikom među onima definisanim u tabeli [Kategorije popusta nabavke](/docs/configurations/tables/purchase/category-discounts-price-management/).
> - **Detaljna kategorija popusta**: ako korisnik želi da koristi i **Potkategoriju popusta**, u ovo polje mora uneti isti kod koji koristi dobavljač.
> - **Od datuma važenja**: određuje period važenja politike popusta, čime je moguće primenjivati različite politike popusta u različitim periodima godine.

U drugoj tabeli definišu se **Popusti** koji će se primenjivati za kombinacije definisane u prvoj tabeli. Ovi popusti će se automatski predlagati u dokumentima izdatim za odgovarajući šifarnik i određenu klasu artikla.

Popusti definisani u **Definiciji politika popusta** primenjuju se prema sledećem redosledu prioriteta:

1. Dobavljač + Klasa artikla + Kategorija popusta artikla + Potkategorija popusta artikla
2. Dobavljač + Klasa artikla + Kategorija popusta artikla
3. Dobavljač + Kategorija popusta artikla + Potkategorija popusta artikla
4. Dobavljač + Kategorija popusta artikla
5. Dobavljač + Klasa artikla
6. Dobavljač

Ako za određeni artikal važi više uslova popusta, u dokument će biti primenjen prvi pronađeni popust prema navedenom redosledu prioriteta.

Na primer, ako je u politikama popusta definisana jedna stavka koja je povezana samo sa dobavljačem i druga koja je povezana sa dobavljačem i određenom klasom artikla:

- za artikle koji pripadaju navedenoj klasi primeniće se popust definisan u drugom uslovu;
- ako artikal ne pripada toj klasi, primeniće se popust definisan samo za dobavljača.

### Upravljanje kategorijama popusta u dokumentima

Moguće je definisati popuste prema kategoriji artikla koji će se zatim automatski primenjivati u dokumentima nabavke. Za to je potrebno izvršiti sledeće korake:

1. U **Šifarniku artikla** > kartica **Kategorija popusta nabavke** potrebno je uneti kategoriju popusta zajedno sa **Datumom početka važenja**.
2. U **Šifarniku dobavljača** > kartica **Cenovnici** potrebno je definisati **Cenovnik** sa uključenom oznakom **Upravljanje cenama**.
3. U obrascu **Definicija politika popusta** potrebno je uneti **Dobavljača**, istu **Kategoriju popusta nabavke** koja je definisana u šifarniku artikla, **Datum važenja**, **Popust** i, po potrebi, **Klasu artikala** na koju će se popust primenjivati.
4. Takođe mora postojati **Cenovnik dobavljača** koji važi na datum važenja politike popusta i koji sadrži artikle kojima je u šifarniku dodeljena odgovarajuća kategorija popusta, kako bi osnovna cena mogla biti preuzeta.

Nakon toga će se prilikom unosa dokumenta nabavke automatski predlagati i popusti prema kategoriji popusta.