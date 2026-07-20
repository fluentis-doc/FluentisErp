---
title: Premeštanje artikala između dve utovarne jedinice
sidebar_position: 7
---

:::important Čemu služi
Funkcija **Premeštanje artikala između dve utovarne jedinice** u Fluentis WMS-u omogućava jednostavan prenos artikala iz jedne utovarne jedinice u drugu.

Očitavanjem barkodova operater može pregledati artikle sadržane u izvornoj utovarnoj jedinici te, nakon odabira odredišne utovarne jedinice, brzo premestiti željene količine artikala, čime se postupak manipulacije robom čini efikasnijim.
:::

Nakon očitavanja prve utovarne jedinice, ona se postavlja kao izvorna utovarna jedinica te se u tabeli ispod prikazuju svi artikli koje sadrži, zajedno sa podacima o: *šifri artikla*, *količini*, *lotu* i *opisu artikla*.

Drugim očitavanjem određuje se odredišna utovarna jedinica, dok će svako sledeće očitavanje utovarne jedinice zameniti prethodno odabranu odredišnu utovarnu jedinicu.

Sledeći korak je očitavanje artikla koji se premešta (koji se automatski označava u tabeli) te unos količine za premeštanje. Kao i u drugim procedurama, za artikle koji se vode po lotovima prikazuje se i polje za unos lota.

Nakon toga dovoljno je pritisnuti dugme **Premesti** kako bi se izvršilo skladišno knjiženje izlaza robe iz izvorne utovarne jedinice i skladišno knjiženje ulaza robe u odredišnu utovarnu jedinicu.

Dugme **Obriši sve** omogućava brisanje svih unesenih podataka iz forme.

:::note Pravila koja je potrebno poštovati za ispravno korišćenje forme
- Izvorna i odredišna utovarna jedinica moraju biti validne.
- Izvorna utovarna jedinica mora biti učitana.
- Očitani artikl mora postojati unutar izvorne utovarne jedinice (uključujući pripadajuće lotove).
- Odredišna utovarna jedinica može biti neučitana samo ako je prazna ili ako su količine svih artikala u njoj jednake nuli; ako sadrži artikle sa količinama većim od nule, mora biti učitana.
- Nije moguće premestiti količinu veću od količine raspoložive u izvornoj utovarnoj jedinici.
- Prilikom kreiranja skladišnog knjiženja proverava se raspoloživost artikla i lota.
- Izvorna i odredišna utovarna jedinica ne smeju biti uključene u **Listu preuzimanja UJ / Packing listu** niti u **Listu prenosa UJ**.
:::

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

Parametri su navedeni dva puta jer forma koristi predložak skladišnog knjiženja izlaza robe iz izvorne utovarne jedinice te predložak skladišnog knjiženja ulaza robe u odredišnu utovarnu jedinicu.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).