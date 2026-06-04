---
title: Barkod tokenizator
sidebar_position: 4
---

Mnoge operacije koje se mogu izvršavati unutar Fluentis WMS sustava mogu biti znatno olakšane i ubrzane korištenjem polja *Kod barkoda*, koje ako je pravilno konfigurirano, inteligentno obrađuje podatke dobivene očitavanjem barkoda i automatski popunjava odgovarajuća polja.
To operatoru donosi veliku prednost u smislu brzine unosa i učinkovitosti, jer podatke uvijek unosi u isto polje *Kod barkoda* bez potrebe za promjenom fokusa unutar forme

U tablici zaglavlja potrebno je unijeti sljedeća polja:

> **Kod**: označava prefiks barcode tokenizer-a;        
> **Opis**: opisuje barcode tokenizer;        
> **Razdjelnik**: znak koji se koristi kao razdjelnik unutar barcode tokenizer-a.

U tablici detalja definiraju se objekti i svojstva koja će se čitati iz barkoda.

Barkod se mora sastaviti prema formatu: **KodBarkoda** + **Razdjelnik** + **PoslovniObjekt.Svojstvo** [ + **Razdjelnik** + **PoslovniObjekt.Svojstvo** ]  

Zadnji dio **PoslovniObjekt.Svojstvo** može se ponavljati više puta; duljina vrijednosti ili **razdjelnik** definiran u tablici omogućit će ispravnu identifikaciju svakog podatka.      
 
U pravilu, svaki barcode tokenizer sadrži jedan **glavni objekt**, koji može biti sastavljen od više **poslovnih objekata**.      
Ovi **poslovni objekti** mogu biti direktna svojstva **glavnog objekta** (u tom slučaju su **poslovni** i **glavni objekt** isti) ili mogu pripadati drugim **poslovnim objektima**, ali su i dalje referencirani unutar **glavnog objekta**.          
Možemo reći da **glavni objekt** koji se dobiva čitanjem barkoda čini skup svih svojstava definiranih **poslovnih objekata**.     

:::note Napomena
Naravno, ovisno o skupu podataka na kojem se koristi tokenizer, važno je osigurati da konfiguracija daje jedinstveni rezultat. 
:::

Primjeri sastavljanja Barcode Tokenizer-a: 

Primjer: Item-MOB-ART

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Item | Item Barcode | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| Item | Item Barcode | - | FSItem | Code | 50 | - | 20 | FSItem |

Primjer: Loc-01-L1

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Loc | Location Barcode | - | FSWarehouse | Code | 10 | - | 10 | FSLocation |
| Loc | Location Barcode | - | FSLocation | CodeLocation | 100 | - | 20 | FSLocation |

Primjer: UDC-2023-5-21

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| UDC | UDC Barcode | - | FSLoadingUnit | Year | 4 | - | 10 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Group | 4 | - | 20 | FSLoadingUnit |
| UDC | UDC Barcode | - | FSLoadingUnit | Number | 4 | - | 30 | FSLoadingUnit |

Primjer: Lot-MOB-ART-123

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Lot | Lotto | - | FSItemClass | Code | 3 | - | 10 | FSBatchRegister |
| Lot | Lotto | - | FSItem | Code | 50 | - | 20 | FSBatchRegister |
| Lot | Lotto | - | FSBatchRegister | Code | 05 | - | 30 | FSBatchRegister |

Primjer: MesPop-10824

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| MesPop | Production Order Phase | - | FSProductionOrderPhase | Id |  | - | 10 | FSProductionOrderPhase |

Primjer: Qta-50

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Qta | Quantity | - |  |  | 100 | - | 10 |  |

Primjer: ItemQta-MOB-ART-35

| Kod | Opis | Razd | Poslovni objekt | Svojstvo | Duljina | Razd | Redoslijed | Glavni objekt |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| ItemQta | Item Quantity | - | FSItemClass | Code | 3 | - | 10 | FSItem |
| ItemQta | Item Quantity | - | FSItem | Code | 50 | - | 20 | FSItem |
| ItemQta | Item Quantity | - |  |  | 100 | - | 30 |  |

Zadnji primjeri ne slijede klasičnu logiku barcode tokenizer-a, budući da se željela omogućiti i interpretacija količine, koja u trenutku očitavanja barkoda nije vezana ni uz jedan konkretan objekt/svojstvo.  
Naravno, ova logika mora biti zasebno implementirana unutar svake forme.