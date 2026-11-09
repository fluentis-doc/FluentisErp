---
title: Postavke tablica za upravljanje
sidebar_position: 4
---

Za upravljanje elektroničkim fakturiranjem potrebno je provjeriti i dopuniti određene tablice za upravljanje kako bi se XML datoteke izrađivale s ispravnim kodiranjem, u skladu s tehničkim specifikacijama koje je izdala Porezna uprava.

Predviđene postavke zahtijevaju povezivanje vrijednosti koje se uobičajeno koriste u sustavu s vrijednostima propisanima za kodiranje datoteke.

Primjerice, vrste dokumenata predviđene za tijek elektroničkog fakturiranja potrebno je evidentirati u Fluentisu tako da se svakoj vrsti dokumenta pridruži odgovarajuća vrijednost navedena u tehničkim specifikacijama Porezne uprave.

## Tablica Vrste dokumenata

Za račun je u ovoj Fluentisovoj tablici, u stupcu **Kod PA**, potrebno navesti vrstu dokumenta u alfanumeričkom obliku, duljine 4 znaka. Dopuštene su sljedeće vrijednosti:

- TD01 Račun
- TD02 Predujam na račun
- TD03 Predujam na obračun naknade
- TD04 Knjižno odobrenje
- TD05 Knjižno terećenje
- TD06 Obračun naknade
- TD20 Samoizdani račun

Vrijednosti za koje je potrebno provesti povezivanje ili provjeriti jesu li ispravno unesene:

| Tablica | Obvezne vrijednosti |
| :-- | :-- |
| Poduzeće (Tablice > Opće postavke > Poduzeća) | Opis, PDV identifikacijski broj, OIB (obvezan ako nije unesen PDV identifikacijski broj), oznaka države, porezni režim, telefon/faks, porezno sjedište i poštanski broj, grad, županija, članovi/upravitelj u likvidaciji, ured REA, registarski broj REA, temeljni kapital (uključujući decimalna mjesta odvojena znakom „.”). |
| Stope PDV-a (Tablice > Administracija > Stope/Načini PDV-a) | **Kod PA:** kod koji jednoznačno identificira stopu PDV-a u XML datotekama. Poseban kod za svaku stopu moguće je pronaći u tehničkim specifikacijama Porezne uprave za elektroničko fakturiranje. |
| Tablica Vrste dokumenata (Tablice > Administracija > Vrste dokumenata) | **Kod PA:** kod koji jednoznačno identificira vrstu dokumenta na koju se XML datoteka odnosi (račun, knjižno odobrenje itd.). Poseban kod za svaku vrstu moguće je pronaći u tehničkim specifikacijama Porezne uprave za elektroničko fakturiranje. |
| Tablica Vrste plaćanja (Tablice > Opće postavke > Vrste plaćanja) | **Kod PA:** kod koji jednoznačno identificira vrstu plaćanja u XML datoteci. Poseban kod za svaku vrstu moguće je pronaći u tehničkim specifikacijama Porezne uprave za elektroničko fakturiranje. |
| Vrste prodajnih računa (Tablice > Prodaja > Vrste računa) | **Isključeno iz elektroničkog fakturiranja:** ova se opcija označava ISKLJUČIVO za dokumente koje je potrebno isključiti iz tijeka elektroničkog fakturiranja. Nakon postavljanja ove opcije dokumenti se neće moći obrađivati u sklopu tijeka elektroničkog fakturiranja. |
| Vrste poreza po odbitku (Tablice > Administracija > Vrste poreza po odbitku) | **Vrste poreza po odbitku za elektroničko fakturiranje:** kod koji jednoznačno identificira vrstu poreza po odbitku u XML datoteci. Poseban kod za svaku vrstu moguće je pronaći u tehničkim specifikacijama Porezne uprave za elektroničko fakturiranje. |
| Tablica Valute (Tablice > Opće postavke > Valute) | **CodIso:** za valutu euro potrebno je unijeti ISO kod EUR. |
| Tablica Vrste dokumenata (Tablice > Opće postavke > Vrste dokumenata) | **Vrsta dokumenta FattPubb:** identificira vrstu dokumenta povezanu s elektroničkim fakturiranjem. Potrebno ju je unijeti sa sljedećim vrijednostima: **ŠIFRA:** `FattPubb` i **OPIS:** `Fatturazione Elettronica`, dok ostale predložene vrijednosti treba ostaviti nepromijenjenima. |

## Šifarnik artikala

Za ispravno upravljanje slučajevima artikala za koje je na računu potrebno navesti posebne regulatorne ili ministarske kodove, kao što je kod AIC (ministarski kod proizvoda) za određene lijekove ili kod DM0-DM1, potrebno je u tablici **Vrste barkodova** evidentirati posebnu vrstu barkoda s uključenom oznakom **Izvoz za javnu upravu**.

Taj je barkod potrebno navesti u šifarniku artikla, u panelu **Barkodovi**, u polju **Vrsta barkoda**.

## Podjela plaćanja (Split payment)

Za ispravno upravljanje slučajevima podjele plaćanja (Split payment) na dokumentima namijenjenima javnoj upravi, tehničke specifikacije za popunjavanje XML datoteke zahtijevaju određivanje posebne vrste dospijeća PDV-a, u alfanumeričkom obliku duljine jednog znaka.

Dopuštene su sljedeće vrijednosti:

- **I** – PDV s neposrednim dospijećem
- **D** – PDV s odgođenim dospijećem
- **S** – Podjela plaćanja

Stoga je u Fluentisu potrebno na računovodstvenim predlošcima povezanima s vrstom prodajnog dokumenta namijenjenog javnoj upravi postaviti vrstu kretanja **29 – Izlazni PDV s podjelom plaćanja (Split Payment)**.