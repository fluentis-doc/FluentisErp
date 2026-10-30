---
title: Barkod tokenizator
sidebar_position: 4
---

Mnoge operacije koje se mogu izvršavati unutar Fluentis WMS sistema mogu se znatno olakšati i ubrzati korišćenjem polja *Kod barkoda*, koje, ako je pravilno konfigurisano, inteligentno obrađuje podatke dobijene očitavanjem barkoda i automatski popunjava odgovarajuća polja.

To operatoru donosi veliku prednost u pogledu brzine unosa i efikasnosti, jer podatke uvek unosi u isto polje *Kod barkoda*, bez potrebe za promenom fokusa unutar forme.

U tabeli zaglavlja potrebno je uneti sledeća polja:

> **Šifra**: označava prefiks tokenizatora barkoda;
> **Opis**: opisuje tokenizator barkoda;
> **Separator**: znak koji se koristi kao razdelnik unutar tokenizatora barkoda.

U tabeli detalja definišu se objekti i svojstva koja će se očitavati iz barkoda.

Barkod mora biti sastavljen prema formatu: **KodBarkoda** + **Separator** + **PoslovniObjekat.Svojstvo** [ + **Separator** + **PoslovniObjekat.Svojstvo** ]

Poslednji deo **PoslovniObjekat.Svojstvo** može se ponavljati više puta; dužina vrednosti ili **Separator** definisan u tabeli omogućiće pravilnu identifikaciju svakog podatka.

Po pravilu, svaki tokenizator barkoda sadrži jedan **glavni objekat**, koji može biti sastavljen od više **poslovnih objekata**.

Ovi **poslovni objekti** mogu biti direktna svojstva **glavnog objekta** (u tom slučaju su **poslovni** i **glavni objekat** isti) ili mogu pripadati drugim **poslovnim objektima**, ali su i dalje referencirani unutar **glavnog objekta**.

Može se reći da **glavni objekat** dobijen očitavanjem barkoda predstavlja skup svih svojstava definisanih u **poslovnim objektima**.

:::note Napomena
Naravno, u zavisnosti od skupa podataka na kojem se koristi tokenizator, važno je obezbediti da konfiguracija daje jedinstven rezultat.
:::

Primeri sastavljanja tokenizatora barkoda:

Primer: Item-MOB-ART

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Item | Item Barcode | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| Item | Item Barcode | - | FSItem | Code | 50 | - | 20 | FSItem |

Primer: Loc-01-L1

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Loc | Location Barcode | - | FSWarehouse | Code | 10 | - | 10 | FSLocation |
| Loc | Location Barcode | - | FSLocation | CodeLocation | 100 | - | 20 | FSLocation |

Primer: UDC-2023-5-21

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| UDC | UDC Barcode | - | FSLoadingUnit | Year | 4 | - | 10 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Group | 4 | - | 20 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Number | 4 | - | 30 | FSLoadingUnit |

Primer: Lot-MOB-ART-123

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Lot | Lotto | - | FSItemClass | Code | 3 | - | 10 | FSBatchRegister |
| Lot | Lotto | - | FSItem | Code | 50 | - | 20 | FSBatchRegister |
| Lot | Lotto | - | FSBatchRegister | Code | 05 | - | 30 | FSBatchRegister |

Primer: MesPop-10824

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| MesPop | Production Order Phase | - | FSProductionOrderPhase | Id |  | - | 10 | FSProductionOrderPhase |

Primer: Qta-50

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Qta | Quantity | - |  |  | 100 | - | 10 |  |

Primer: ItemQta-MOB-ART-35

| Šifra | Opis | Razd. | Poslovni objekat | Svojstvo | Dužina | Razd. | Redosled | Glavni objekat |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| ItemQta | Item Quantity | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| ItemQta | Item Quantity | - | FSItem | Code | 50 | - | 20 | FSItem |
| ItemQta | Item Quantity | - |  |  | 100 | - | 30 |  |

Poslednji primeri ne prate klasičnu logiku tokenizatora barkoda, jer je želela da se omogući i interpretacija količine koja u trenutku očitavanja barkoda nije povezana ni sa jednim konkretnim objektom/svojstvom.

Naravno, ovu logiku potrebno je zasebno implementirati unutar svake forme.