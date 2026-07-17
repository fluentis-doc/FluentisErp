---
title: Utovar artikla
sidebar_position: 1
---

:::important Čemu služi
Funkcija **Utovar artikla** omogućava precizno evidentiranje prijema artikala u skladište. Ovim postupkom operateri mogu skenirati barkod artikla i skladišne lokacije, uneti količinu za prijem te, u slučaju artikala koji se vode po lotovima, navesti i odgovarajući lot. Nakon potvrde operacije automatski se kreira skladišno knjiženje, čime se obezbeđuje efikasno upravljanje zalihama i potpuna sledljivost.
:::

Ova procedura koristi se za kreiranje skladišnog knjiženja prijema artikla na određenu skladišnu lokaciju.

U polju **Barkod** operater treba da očita barkod artikla, a zatim barkod skladišne lokacije na koju želi da zaprimi artikl.

Nakon toga potrebno je uneti količinu za knjiženje, a nakon potvrde automatski će se kreirati odgovarajuće skladišno knjiženje.

Ako se artikl vodi po lotovima, prikazaće se dodatno polje za unos lota koji se zaprima.

Takođe je moguće odštampati etiketu artikla pomoću dugmeta **Štampa** ili prikazati pregled štampe direktno na terminalu pomoću dugmeta **Pregled**.

Dugme **Obriši sve** omogućava brisanje svih unetih podataka iz obrasca.

:::note Napomena
*Šifra artikla* i *Lot* moraju postojati u šifarnicima sistema Fluentis.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći da odabere samo jedno od definisanih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).