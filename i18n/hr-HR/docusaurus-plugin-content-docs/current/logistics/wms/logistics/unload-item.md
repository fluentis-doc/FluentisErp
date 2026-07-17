---
title: Istovar artikla
sidebar_position: 2
---

:::important Čemu služi
Funkcija **Istovar artikla** namijenjena je preuzimanju artikala iz skladišta. Pomoću barkoda operater može odabrati artikl i skladišnu lokaciju s koje se obavlja preuzimanje, unijeti količinu za izdavanje te, prema potrebi, navesti i odgovarajući lot. Ova procedura generira skladišno knjiženje izlaza robe, ažurira stanje zaliha i osigurava ispravno evidentiranje kretanja robe.
:::

Ova se procedura koristi za kreiranje skladišnog knjiženja izdavanja artikla s određene skladišne lokacije.        

U polju **Barkod** operater treba očitati barkod artikla, a zatim barkod skladišne lokacije s koje želi izdati artikl.        

Nakon toga potrebno je unijeti količinu za knjiženje, a nakon potvrde automatski će se kreirati odgovarajuće skladišno knjiženje.        

Ako se artikl vodi po lotovima, prikazat će se dodatno polje za unos lota koji se izdaje.         

Također je moguće ispisati etiketu artikla pomoću gumba **Ispis** ili prikazati pregled ispisa izravno na terminalu pomoću gumba **Pregled**.        

Gumb **Očisti sve** omogućuje brisanje svih unesenih podataka iz obrasca.

:::note Napomena
*Šifra artikla* i *Lot* moraju postojati u šifarnicima sustava Fluentis.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći odabrati samo jedno od definiranih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).