---
title: Istovar artikla
sidebar_position: 2
---

:::important Čemu služi
Funkcija **Istovar artikla** namenjena je izdavanju artikala iz skladišta. Pomoću barkoda operater može odabrati artikl i skladišnu lokaciju sa koje se vrši izdavanje, uneti količinu za izdavanje te, po potrebi, navesti i odgovarajući lot. Ova procedura generiše skladišno knjiženje izlaza robe, ažurira stanje zaliha i obezbeđuje ispravno evidentiranje kretanja robe.
:::

Ova procedura koristi se za kreiranje skladišnog knjiženja izdavanja artikla sa određene skladišne lokacije.

U polju **Barkod** operater treba da očita barkod artikla, a zatim barkod skladišne lokacije sa koje želi da izda artikl.

Nakon toga potrebno je uneti količinu za knjiženje, a nakon potvrde automatski će se kreirati odgovarajuće skladišno knjiženje.

Ako se artikl vodi po lotovima, prikazaće se dodatno polje za unos lota koji se izdaje.

Takođe je moguće odštampati etiketu artikla pomoću dugmeta **Štampa** ili prikazati pregled štampe direktno na terminalu pomoću dugmeta **Pregled**.

Dugme **Obriši sve** omogućava brisanje svih unetih podataka iz obrasca.

:::note Napomena
*Šifra artikla* i *Lot* moraju postojati u šifarnicima sistema Fluentis.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći da odabere samo jedno od definisanih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).