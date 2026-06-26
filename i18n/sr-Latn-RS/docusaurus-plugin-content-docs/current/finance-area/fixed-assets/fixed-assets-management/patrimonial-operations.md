---
title: Kartica Operacije na osnovnom sredstvu
sidebar_position: 2
---

Na ovoj kartici unose se detalji svih operacija koje se odnose na osnovno sredstvo.

Zajedno sa karticom **Detalji**, predstavlja glavni deo kartice osnovnog sredstva.

| Funkcija | Značenje |
| --- | --- |
| Nova operacija | Aktivira novi red u tabeli operacija na osnovnom sredstvu. |
| Obriši operaciju | Briše izabranu operaciju iz tabele operacija. |
| Novi obračun amortizacije | Aktivira novi red u tabeli amortizacija. |
| Obriši amortizaciju | Briše izabrani obračun amortizacije iz tabele amortizacija. |
| Automatski obračun amortizacije | Obračunava amortizaciju za osnovno sredstvo u upotrebi za godinu zadatu u polju iznad tabele amortizacija. |
| Dodaj centar troška | Aktivira novi red u tabeli centara troškova. |
| Obriši centar troška | Briše izabrani unos centra troška iz tabele. |
| Obračun centara troškova | Izvršava raspodelu iznosa izabrane stavke amortizacije po centrima troškova. |
| Dodaj nalog/projekat | Aktivira novi red u tabeli naloga/projekata. |
| Obriši nalog/projekat | Briše izabrani unos naloga/projekta iz tabele. |
| Obračun naloga/projekta | Izvršava raspodelu izabrane stavke amortizacije prema odgovarajućem nalogu/projektu. |
| Detalji revalorizacije | Otvara upravljanje detaljima revalorizacije. Dugme je aktivno samo ako je za kategoriju osnovnog sredstva omogućena opcija **Revalorizacija**. |
| Dokumenti | Upravljanje dokumentima povezanim sa trenutnim obrascem. |

## Gornji pregled

Ovaj pregled koristi se za evidentiranje nabavke (ili povećanja vrednosti) osnovnog sredstva, kao i za potpuno ili delimično otuđenje osnovnog sredstva.
Prvi red se najčešće odnosi na početnu nabavku osnovnog sredstva. Potrebno je uneti **datum operacije**, njen **redni broj** i odgovarajući **iznos**.
Moguće vrednosti su:
- **Izvorni trošak** – ako se iznos odnosi na nabavku osnovnog sredstva, predstavlja njegovu nabavnu vrednost;
- **Otuđenje** – ako se iznos odnosi na potpuno otuđenje, predstavlja prodajnu vrednost;
- **Delimično otuđenje** – ako se iznos odnosi na delimično otuđenje, predstavlja prodajnu vrednost otuđenog dela.

Ako je omogućeno vođenje količina, potrebno je popuniti i polje **Količina**.

:::danger NAPOMENA
Prilikom unosa već postojećeg osnovnog sredstva iz prethodnih perioda, iznos prethodno obračunate amortizacije **ne sme** se unositi u ovaj odeljak.
Ukupna vrednost već obračunate (akumulirane) amortizacije unosi se u odeljku za amortizaciju, sa statusom **Knjiženo**, kako bi ERP mogao pravilno da nastavi obračun amortizacije.
:::

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)

Nakon unosa reda koji se odnosi na operaciju nad osnovnim sredstvom (na primer, nabavka) i unosa odgovarajućeg iznosa u odgovarajuću kolonu (na primer, **Izvorni trošak** u slučaju nabavke), program automatski ažurira polje **Iznos za amortizaciju**.

**Iznos za amortizaciju**: vrednost nabavke (ili prenetog istorijskog troška) na osnovu koje se obračunava amortizacija.
**Knjigovodstvena vrednost**: Nabavna vrednost − Akumulirana amortizacija.
**Već amortizovano**: privremena vrednost koja se ažurira prilikom obračuna amortizacije, a zatim se vraća na nulu nakon ažuriranja ukupne akumulirane amortizacije (tokom knjiženja amortizacije).

## Središnji pregled – Amortizacije

Ovaj pregled prikazuje obračune amortizacije za osnovno sredstvo. Unos amortizacije može biti ručni ili automatski.

### Ručni unos

Kod ručnog unosa potrebno je navesti:
- referentnu godinu,
- redni broj (samo za kategorije koje nisu inkrementalne; kod ostalih kategorija polje je skriveno jer je amortizacija uvek povezana sa rednim brojem operacije),
- vrstu amortizacije.

ERP zatim automatski preuzima postavke iz kategorije osnovnog sredstva, uključujući konta, podkonta, stopu amortizacije i iznose.
Na kraju reda prikazuju se:
- datum amortizacije (podrazumevano poslednji dan poslovne godine),
- odbitni deo amortizacije,
- neodbitni deo amortizacije.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)

### Automatski unos

Kod automatskog obračuna dovoljno je definisati referentnu godinu u polju iznad tabele i koristiti dugme **Izvrši automatsku amortizaciju**.
Program će automatski kreirati obračun amortizacije za celo osnovno sredstvo prema pravilima definisanim u njegovoj kategoriji.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

Obračunata amortizacija prikazuje se u koloni **Već amortizovano** u gornjem pregledu, gde predstavlja privremeni iznos koji još nije konačno knjižen.
Tek kada se na redu označi opcija **Knjiženo**, iznos se prenosi u odgovarajući fond amortizacije za izabranu vrstu amortizacije.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

:::danger NAPOMENA
Ručno unete amortizacije sa oznakom **Knjiženo** **ne knjiže se automatski u računovodstvo**. Za to se koristi posebna procedura za obračun amortizacije.
Ručni unos se najčešće koristi samo prilikom početnog prenosa istorijskih podataka, kada je potrebno uneti ukupnu vrednost već obračunate amortizacije iz godine koja prethodi početku korišćenja novog ERP sistema, a ne detaljan pregled amortizacije po godinama.
:::

Prilikom čuvanja reda sa oznakom **Knjiženo**, Fluentis će ponuditi povezivanje sa postojećim računovodstvenim knjiženjem. Kod prenosa istorijskih podataka na ovo pitanje se uobičajeno odgovara **Ne**.
Oznaka **Fiskalno** omogućava poresko evidentiranje stavke amortizacije i podrazumevano se preuzima iz kategorije osnovnog sredstva.
U pojedinim slučajevima može se koristiti i ručno, na primer za evidentiranje ubrzane amortizacije u registru osnovnih sredstava ili poreske amortizacije koja se koristi isključivo prilikom obračuna poreza.
Poresko evidentiranje zasniva se na poljima **Odbitni iznos** i **Neodbitni iznos**, koja se automatski popunjavaju prema procentu poreske priznatosti definisanom na osnovnom sredstvu ili njegovoj kategoriji.
Poslednji odeljak prikazuje raspodelu amortizacije po centrima troškova za stavku amortizacije izabranu u srednjem pregledu.

### Učitavanje prenetog osnovnog sredstva

Za unos osnovnog sredstva koje već postoji u trenutku početka korišćenja sistema, zajedno sa postojećom akumuliranom amortizacijom, potrebno je postupiti na sledeći način:
1. Kreirati novo osnovno sredstvo i uneti njegove osnovne podatke (opis, kategoriju i ostalo) na kartici **Detalji**, pri čemu treba obratiti pažnju da **Datum početka korišćenja** bude datum iz prethodnog perioda.
2. Na kartici **Operacije na osnovnom sredstvu** uneti istorijsku nabavnu vrednost tako što će se uneti datum nabavke i popuniti polje **Izvorni trošak**.
3. Polje **Ukupna linearna amortizacija** u redu **NE** treba popunjavati ručno (jer bi bilo prepisano prilikom sledećeg obračuna amortizacije). Umesto toga, u tabeli **Amortizacije** potrebno je dodati novi red sa godinom koja prethodi godini početka korišćenja sistema, uneti ukupan iznos već obračunate amortizacije i označiti opciju **Knjiženo**.

Amortizacija se unosi u polje troška i evidentira se nezavisno od ostalih prethodno unetih vrednosti.

## Upravljanje otuđenjem osnovnog sredstva (slučajevi delimičnog otuđenja)

### Osnovno sredstvo koje je u potpunosti amortizovano

Ovaj primer važi kada se osnovnim sredstvom nije upravljalo preko komponenti ili povećanja vrednosti, već kao jedinstvenom celinom.
1. Automatsko računovodstveno knjiženje se ne koristi, tako da se osnovnim sredstvom upravlja direktno u kartici osnovnog sredstva, dok se knjiženje fonda amortizacije evidentira zasebno.
2. Za delimično otuđenje potrebno je uneti **negativan iznos** u kolonu amortizacije koji odgovara delu istorijskog troška prodatog ili rashodovanog osnovnog sredstva.
3. U kolonu **Delimično otuđenje** potrebno je **uvek** uneti prodajnu vrednost (ili **0,00** ako je sredstvo rashodovano).
4. Kolona **Preneti izvorni trošak** automatski će se ažurirati.

### Osnovno sredstvo koje nije u potpunosti amortizovano

Početno stanje:

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.png)

Za delimično otuđenje potrebno je uneti **negativan iznos** u kolonu vrednosti koji odgovara delu izdvojenog fonda amortizacije proporcionalnom istorijskom trošku prodatog ili rashodovanog dela osnovnog sredstva. Prilikom izračunavanja vrednosti u koloni **Izvorni trošak**, sistem uzima u obzir i kapitalni dobitak ili gubitak od prodaje, koji je potrebno izračunati na osnovu neto knjigovodstvene vrednosti dela koji se prodaje.

### Primer 1

Istorijski trošak: **1.000**
Akumulirana amortizacija: **125**
Prodaje se polovina sredstva po ceni od **200**.
Potrebno je umanjiti fond amortizacije za polovinu njegovog iznosa:
- amortizacija: **−62,50**
- prodajna vrednost (**Delimično otuđenje**): **200**

> **Napomena:** Obavezno popuniti kolonu **Delimično otuđenje**. Ako se popuni kolona **Ukupno otuđenje**, sistem će tretirati operaciju kao potpuno otuđenje i preuzeti ceo istorijski trošak.

Neto knjigovodstvena vrednost sredstva iznosi:
**1.000 − 125 = 875**

Pošto se prodaje polovina sredstva:
**875 / 2 = 437,50**

Kapitalni gubitak iznosi:
**437,50 − 200 = 237,50**

Polje **Preneti izvorni trošak** automatski će biti obračunato na **500**, što predstavlja polovinu istorijskog troška koja se uklanja iz registra osnovnih sredstava.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

### Primer 2

Istorijski trošak: **1.000**
Akumulirana amortizacija: **125**
Otuđuje se polovina sredstva po ceni od **0,00**.
Potrebno je umanjiti fond amortizacije za polovinu njegovog iznosa:
- amortizacija: **−62,50**
- prodajna vrednost (**Delimično otuđenje**): **0,00**

> **Napomena:** Obavezno popuniti kolonu **Delimično otuđenje**. Ako se popuni kolona **Ukupno otuđenje**, sistem će tretirati operaciju kao potpuno otuđenje i preuzeti ceo istorijski trošak.
Neto knjigovodstvena vrednost sredstva iznosi:
**1.000 − 125 = 875**

Pošto se otuđuje polovina sredstva:
**875 / 2 = 437,50**

Kapitalni gubitak iznosi:
**437,50 − 0 = 437,50**

Polje **Preneti izvorni trošak** automatski će biti obračunato na **500**, što predstavlja polovinu istorijskog troška koja se uklanja iz registra osnovnih sredstava.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

:::tip[Predlog]
Prodaja (otuđenje) osnovnog sredstva, naročito u jednostavnijim slučajevima potpunog otuđenja, može se automatizovanije obraditi putem knjiženja prodaje sa kontnim događajem koji ima omogućenu funkcionalnost za osnovna sredstva i sa vrstom operacije **Potpuno** (ili **Delimično**) otuđenje.

Prilikom knjiženja biće prikazan odgovarajući odeljak **[Osnovno sredstvo](/docs/finance-area/ledger-records/records/ledger-record)**.
:::