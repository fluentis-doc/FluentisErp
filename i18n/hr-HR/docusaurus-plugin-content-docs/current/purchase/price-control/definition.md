---
title: Matrica Konfiguracije Popusta
sidebar_position: 1
---

U ovom se obrascu definiraju politike popusta na temelju postavki definiranih u ostalim obrascima skupine **Upravljanje cijenama**.

U prvoj tablici nalaze se sljedeći stupci:

> - **Opis konta**: sadrži šifarnik na koji se odnosi politika popusta.
> - **Klasa**: označava klasu artikala na koju se odnosi politika popusta; ovo je neobvezno polje.
> - **Kategorija popusta nabave**: omogućuje odabir kategorije popusta nabave koja će se povezati sa šifarnikom među onima definiranima u tablici [Kategorije popusta nabave](/docs/configurations/tables/purchase/category-discounts-price-management/).
> - **Detaljna kategorija popusta**: ako korisnik želi koristiti i **Potkategoriju popusta**, u ovo polje mora unijeti isti kod koji koristi dobavljač.
> - **Od datuma valjanosti**: određuje razdoblje valjanosti politike popusta, čime je moguće primjenjivati različite politike popusta u različitim razdobljima godine.

U drugoj tablici definiraju se **Popusti** koji će se primjenjivati za kombinacije definirane u prvoj tablici. Ti će se popusti automatski predlagati u dokumentima izdanim za odgovarajući šifarnik i određenu klasu artikla.

Popusti definirani u **Definiciji politika popusta** primjenjuju se prema sljedećem redoslijedu prioriteta:

1. Dobavljač + Klasa artikla + Kategorija popusta artikla + Potkategorija popusta artikla
2. Dobavljač + Klasa artikla + Kategorija popusta artikla
3. Dobavljač + Kategorija popusta artikla + Potkategorija popusta artikla
4. Dobavljač + Kategorija popusta artikla
5. Dobavljač + Klasa artikla
6. Dobavljač

Ako za određeni artikl vrijedi više uvjeta popusta, u dokument će se primijeniti prvi pronađeni popust prema navedenom redoslijedu prioriteta.

Primjerice, ako je u politikama popusta definirana jedna stavka koja je povezana samo s dobavljačem i druga koja je povezana s dobavljačem i određenom klasom artikla:

- za artikle koji pripadaju navedenoj klasi primijenit će se popust definiran u drugom uvjetu;
- ako artikl ne pripada toj klasi, primijenit će se popust definiran samo za dobavljača.

### Upravljanje kategorijama popusta u dokumentima

Moguće je definirati popuste prema kategoriji artikla koji će se zatim automatski primjenjivati u dokumentima nabave. Za to je potrebno izvršiti sljedeće korake:

1. U **Šifarniku artikla** > kartica **Kategorija popusta nabave** potrebno je unijeti kategoriju popusta zajedno s **Datumom početka valjanosti**.
2. U **Šifarniku dobavljača** > kartica **Cjenici** potrebno je definirati **Cjenik** s uključenom oznakom **Upravljanje cijenama**.
3. U obrascu **Definicija politika popusta** potrebno je unijeti **Dobavljača**, istu **Kategoriju popusta nabave** koja je definirana u šifarniku artikla, **Datum valjanosti**, **Popust** te, prema potrebi, **Klasu artikala** na koju će se popust primjenjivati.
4. Također mora postojati **Cjenik dobavljača** koji je važeći na datum valjanosti politike popusta i koji sadrži artikle kojima je u šifarniku dodijeljena odgovarajuća kategorija popusta, kako bi se mogla preuzeti osnovna cijena.

Nakon toga će se prilikom unosa dokumenta nabave automatski predlagati i popusti prema kategoriji popusta.