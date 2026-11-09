---
title: Podešavanja tabela za upravljanje
sidebar_position: 4
---

Za upravljanje elektronskim fakturisanjem potrebno je proveriti i dopuniti određene tabele za upravljanje kako bi se XML datoteke izrađivale sa ispravnim šifriranjem, u skladu sa tehničkim specifikacijama koje je izdala Poreska uprava.

Predviđena podešavanja zahtevaju povezivanje vrednosti koje se uobičajeno koriste u sistemu sa vrednostima propisanim za šifriranje datoteke.

Na primer, tipove dokumenata predviđene za tok elektronskog fakturisanja potrebno je evidentirati u Fluentisu tako da se svakom tipu dokumenta dodeli odgovarajuća vrednost navedena u tehničkim specifikacijama Poreske uprave.

## Tabela Tipovi dokumenata

Za fakturu je u ovoj Fluentisovoj tabeli, u koloni **Kod PA**, potrebno navesti tip dokumenta u alfanumeričkom obliku, dužine 4 znaka. Dozvoljene su sledeće vrednosti:

- TD01 Faktura
- TD02 Avans na fakturu
- TD03 Avans na obračun naknade
- TD04 Knjižno odobrenje
- TD05 Knjižno zaduženje
- TD06 Obračun naknade
- TD20 Samoizdata faktura

Vrednosti za koje je potrebno sprovesti povezivanje ili proveriti da li su ispravno unete:

| Tabela | Obavezne vrednosti |
| :-- | :-- |
| Preduzeće (Tabele > Opšta podešavanja > Preduzeća) | Opis, PDV identifikacioni broj, PIB (obavezan ako nije unet PDV identifikacioni broj), oznaka države, poreski režim, telefon/faks, poresko sedište i poštanski broj, grad, pokrajina, članovi/upravnik u likvidaciji, kancelarija REA, registarski broj REA, osnovni kapital (uključujući decimalna mesta odvojena znakom „.”). |
| Stope PDV-a (Tabele > Administracija > Stope/Načini PDV-a) | **Kod PA:** kod koji jednoznačno identifikuje stopu PDV-a u XML datotekama. Poseban kod za svaku stopu moguće je pronaći u tehničkim specifikacijama Poreske uprave za elektronsko fakturisanje. |
| Tabela Tipovi dokumenata (Tabele > Administracija > Tipovi dokumenata) | **Kod PA:** kod koji jednoznačno identifikuje tip dokumenta na koji se XML datoteka odnosi (faktura, knjižno odobrenje itd.). Poseban kod za svaki tip moguće je pronaći u tehničkim specifikacijama Poreske uprave za elektronsko fakturisanje. |
| Tabela Tipovi plaćanja (Tabele > Opšta podešavanja > Tipovi plaćanja) | **Kod PA:** kod koji jednoznačno identifikuje tip plaćanja u XML datoteci. Poseban kod za svaki tip moguće je pronaći u tehničkim specifikacijama Poreske uprave za elektronsko fakturisanje. |
| Tipovi prodajnih faktura (Tabele > Prodaja > Tipovi faktura) | **Isključeno iz elektronskog fakturisanja:** ova opcija se označava ISKLJUČIVO za dokumente koje je potrebno isključiti iz toka elektronskog fakturisanja. Nakon podešavanja ove opcije dokumenti neće moći da se obrađuju u okviru toka elektronskog fakturisanja. |
| Tipovi poreza po odbitku (Tabele > Administracija > Tipovi poreza po odbitku) | **Tipovi poreza po odbitku za elektronsko fakturisanje:** kod koji jednoznačno identifikuje tip poreza po odbitku u XML datoteci. Poseban kod za svaki tip moguće je pronaći u tehničkim specifikacijama Poreske uprave za elektronsko fakturisanje. |
| Tabela Valute (Tabele > Opšta podešavanja > Valute) | **CodIso:** za valutu evro potrebno je uneti ISO kod EUR. |
| Tabela Tipovi dokumenata (Tabele > Opšta podešavanja > Tipovi dokumenata) | **Tip dokumenta FattPubb:** identifikuje tip dokumenta povezan sa elektronskim fakturisanjem. Potrebno ga je uneti sa sledećim vrednostima: **ŠIFRA:** `FattPubb` i **OPIS:** `Fatturazione Elettronica`, dok ostale predložene vrednosti treba ostaviti nepromenjenim. |

## Šifarnik artikala

Za ispravno upravljanje slučajevima artikala za koje je na fakturi potrebno navesti posebne regulatorne ili ministarske kodove, kao što je kod AIC (ministarski kod proizvoda) za određene lekove ili kod DM0-DM1, potrebno je u tabeli **Tipovi barkodova** evidentirati poseban tip barkoda sa uključenom oznakom **Izvoz za javnu upravu**.

Taj barkod potrebno je navesti u šifarniku artikla, na panelu **Barkodovi**, u polju **Tip barkoda**.

## Podela plaćanja (Split payment)

Za ispravno upravljanje slučajevima podele plaćanja (Split payment) na dokumentima namenjenim javnoj upravi, tehničke specifikacije za popunjavanje XML datoteke zahtevaju određivanje posebnog tipa dospelosti PDV-a, u alfanumeričkom obliku dužine jednog znaka.

Dozvoljene su sledeće vrednosti:

- **I** – PDV sa neposrednom dospelošću
- **D** – PDV sa odloženom dospelošću
- **S** – Podela plaćanja

Zato je u Fluentisu potrebno na računovodstvenim šablonima povezanim sa tipom prodajnog dokumenta namenjenog javnoj upravi podesiti tip kretanja **29 – Izlazni PDV sa podelom plaćanja (Split Payment)**.