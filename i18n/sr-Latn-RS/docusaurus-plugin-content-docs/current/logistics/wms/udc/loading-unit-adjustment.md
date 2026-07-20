---
title: Podešavanje UJ
sidebar_position: 8
---

:::important Čemu služi
Funkcija **Podešavanje utovarne jedinice** u Fluentis WMS-u omogućava izmjene artikala sadržanih u utovarnoj jedinici, uključujući pozitivne i negativne korekcije količina.

Operateri mogu pregledati sve artikle sadržane u utovarnoj jedinici, mijenjati njihove količine te dodavati ili uklanjati artikle, čime se obezbjeđuje preciznije i efikasnije ažuriranje skladišnih zaliha.
:::

Ova procedura koristi se za korekciju artikala unutar utovarne jedinice, bilo povećanjem ili smanjenjem količina, kao i za dodavanje novih ili uklanjanje postojećih artikala.

Nakon očitavanja utovarne jedinice, u tabeli se prikazuju svi artikli koje ona sadrži, zajedno sa sledećim podacima:

> **Artikl**: prikazuje klasu i šifru artikla sadržanog u utovarnoj jedinici;  
> **Opis**: prikazuje naziv artikla sadržanog u utovarnoj jedinici;  
> **Količina**: prikazuje količinu artikla sadržanog u utovarnoj jedinici;  
> **Lot**: prikazuje lot artikla sadržanog u utovarnoj jedinici (samo za artikle kojima se upravlja po lotovima);  
> **Varijanta**: prikazuje varijantu artikla sadržanog u utovarnoj jedinici (samo za artikle koji koriste upravljanje varijantama).

Odabirom artikla moguće je pomoću dugmadi **+** i **-** ili direktnim unosom putem tastature povećati ili smanjiti količinu prikazanu u tabeli.

Nakon što su izvršene sve potrebne izmjene, pritiskom na dugme **Potvrda** potvrđuju se unesene promjene te se automatski kreiraju odgovarajuća pozitivna i negativna skladišna knjiženja korekcije za odabranu utovarnu jedinicu.

Dugme **Obriši sve** omogućava brisanje svih unesenih podataka iz forme.

Ako se doda novi artikl koji trenutno nije sadržan u utovarnoj jedinici, prikazaće se poruka kojom korisnik potvrđuje da li želi dodati taj artikl u utovarnu jedinicu. U tom slučaju važno je napomenuti da za artikle kojima se upravlja po lotovima mora biti unesen važeći lot.

Za uklanjanje postojećeg artikla dovoljno je postaviti njegovu količinu na nulu.

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

Parametri su navedeni dva puta zato što forma koristi predložak skladišnog knjiženja izlaza robe za negativne korekcije i predložak skladišnog knjiženja ulaza robe za pozitivne korekcije.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).