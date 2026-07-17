---
title: Utovar artikla
sidebar_position: 1
---

:::important Čemu služi
Funkcija **Utovar artikla** omogućuje precizno evidentiranje ulaza artikala u skladište. Ovim postupkom operateri mogu skenirati barkod artikla i skladišne lokacije, unijeti količinu za zaprimanje te, u slučaju artikala koji se vode po lotovima, navesti i odgovarajući lot. Nakon potvrde operacije automatski se kreira skladišno knjiženje, čime se osigurava učinkovito upravljanje zalihama i potpuna sljedivost.
:::

Ova se procedura koristi za kreiranje skladišnog knjiženja zaprimanja artikla na određenu skladišnu lokaciju.        
U polju **Barkod** operater treba očitati barkod artikla, a zatim barkod skladišne lokacije na koju želi zaprimiti artikl.           
Nakon toga potrebno je unijeti količinu za knjiženje, a nakon potvrde automatski će se kreirati odgovarajuće skladišno knjiženje.       
Ako se artikl vodi po lotovima, prikazat će se dodatno polje za unos lota koji se zaprimlja.        
Također je moguće ispisati etiketu artikla pomoću gumba **Ispis** ili prikazati pregled ispisa izravno na terminalu pomoću gumba **Pregled**.          
Gumb **Očisti sve** omogućuje brisanje svih unesenih podataka iz obrasca.

:::note Napomena
*Šifra artikla* i *Lot* moraju postojati u šifarnicima sustava Fluentis.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Napomena
Ako je u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika povezano samo jedno skladište, ono će biti automatski predloženo. Ako je povezano više skladišta, nijedno neće biti predloženo te će korisnik moći odabrati samo jedno od definiranih skladišta.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).