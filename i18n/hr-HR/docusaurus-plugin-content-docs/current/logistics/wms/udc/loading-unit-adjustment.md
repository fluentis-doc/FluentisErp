---
title: Podešavanje UDC
sidebar_position: 8
---

:::important Čemu služi
Funkcija **Podešavanje utovarne jedinice** u Fluentis WMS-u omogućuje izmjene artikala sadržanih u utovarnoj jedinici, uključujući pozitivne i negativne korekcije količina.

Operateri mogu pregledavati sve artikle sadržane u utovarnoj jedinici, mijenjati njihove količine te dodavati ili uklanjati artikle, čime se osigurava preciznije i učinkovitije ažuriranje skladišnih zaliha.
:::

Ova procedura koristi se za korekciju artikala unutar utovarne jedinice, bilo povećanjem ili smanjenjem količina, kao i za dodavanje novih ili uklanjanje postojećih artikala.

Nakon očitavanja utovarne jedinice, u tablici se prikazuju svi artikli koje ona sadrži, zajedno sa sljedećim podacima:

> **Artikl**: prikazuje klasu i šifru artikla sadržanog u utovarnoj jedinici;       
> **Opis**: prikazuje naziv artikla sadržanog u utovarnoj jedinici;       
> **Količina**: prikazuje količinu artikla sadržanog u utovarnoj jedinici;   
> **Lot**: prikazuje lot artikla sadržanog u utovarnoj jedinici (samo za artikle koji se vode po lotovima);           
> **Varijanta**: prikazuje varijantu artikla sadržanog u utovarnoj jedinici (samo za artikle koji koriste upravljanje varijantama).

Odabirom artikla moguće je pomoću gumba **+** i **-** ili izravnim unosom putem tipkovnice povećati ili smanjiti količinu prikazanu u tablici.

Nakon što su izvršene sve potrebne izmjene, pritiskom na gumb **Potvrda** potvrđuju se unesene promjene te se automatski kreiraju odgovarajuća pozitivna i negativna skladišna knjiženja korekcije za odabranu utovarnu jedinicu.

Gumb **Obriši sve** omogućuje brisanje svih unesenih podataka iz forme.

Ako se doda novi artikl koji trenutno nije sadržan u utovarnoj jedinici, prikazat će se poruka kojom korisnik potvrđuje želi li dodati taj artikl u utovarnu jedinicu. U tom slučaju važno je napomenuti da za artikle koji se vode po lotovima mora biti unesen valjani lot.

Za uklanjanje postojećeg artikla dovoljno je postaviti njegovu količinu na nulu.

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

Parametri su navedeni dva puta jer forma koristi predložak skladišnog knjiženja izlaza robe za negativne korekcije i predložak skladišnog knjiženja ulaza robe za pozitivne korekcije.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).