---
title: Premještanje artikala između dvije utovarne jedinice
sidebar_position: 7
---

:::important Čemu služi
Funkcija **Premještanje artikala između dvije utovarne jedinice** u Fluentis WMS-u omogućuje jednostavan prijenos artikala iz jedne utovarne jedinice u drugu.

Očitavanjem barkodova operater može pregledati artikle sadržane u izvornoj utovarnoj jedinici te, nakon odabira odredišne utovarne jedinice, brzo premjestiti željene količine artikala, čime se postupak manipulacije robom čini učinkovitijim.
:::

Nakon očitavanja prve utovarne jedinice, ona se postavlja kao izvorna utovarna jedinica te se u tablici ispod prikazuju svi artikli koje sadrži, zajedno s podacima o: *šifri artikla*, *količini*, *lotu* i *opisu artikla*.

Drugim očitanjem određuje se odredišna utovarna jedinica, dok će svako sljedeće očitanje utovarne jedinice zamijeniti prethodno odabranu odredišnu utovarnu jedinicu.

Sljedeći korak je očitavanje artikla koji se premješta (koji se automatski označava u tablici) te unos količine za premještanje. Kao i u drugim procedurama, za artikle koji se vode po lotovima prikazuje se i polje za unos lota.

Nakon toga dovoljno je pritisnuti gumb **Premjesti** kako bi se izvršilo skladišno knjiženje izlaza robe iz izvorne utovarne jedinice i skladišno knjiženje ulaza robe u odredišnu utovarnu jedinicu.

Gumb **Obriši sve** omogućuje brisanje svih unesenih podataka iz forme.

:::note Pravila koja je potrebno poštovati za ispravno korištenje forme
- Izvorna i odredišna utovarna jedinica moraju biti valjane.
- Izvorna utovarna jedinica mora biti učitana.
- Očitani artikl mora postojati unutar izvorne utovarne jedinice (uključujući pripadajuće lotove).
- Odredišna utovarna jedinica može biti neučitana samo ako je prazna ili ako su količine svih artikala u njoj jednake nuli; ako sadrži artikle s količinama većim od nule, mora biti učitana.
- Nije moguće premjestiti količinu veću od količine raspoložive u izvornoj utovarnoj jedinici.
- Prilikom kreiranja skladišnog knjiženja provjerava se raspoloživost artikla i lota.
- Izvorna i odredišna utovarna jedinica ne smiju biti uključene u **Listu preuzimanja UJ / Packing list** niti u **Listu prijenosa UJ**.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

Parametri su navedeni dva puta jer forma koristi predložak skladišnog knjiženja izlaza robe iz izvorne utovarne jedinice te predložak skladišnog knjiženja ulaza robe u odredišnu utovarnu jedinicu.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).