---
title: Utovar/Premještanje utovarne jedinice
sidebar_position: 2
---

:::important Čemu služi
Funkcija **Utovar/Premještanje UJ** u Fluentis WMS-u namijenjena je pojednostavljenju upravljanja utovarnim jedinicama. Omogućava operaterima utovar utovarne jedinice koja još nije evidentirana u sistemu ili premještanje već utovarene utovarne jedinice sa jedne skladišne lokacije na drugu, korišćenjem skeniranja barkoda. Zahvaljujući ovoj funkcionalnosti, sistem omogućava izvršavanje skladišnih operacija u realnom vremenu.
:::

Ova procedura koristi se za očitavanje utovarne jedinice kako bi se mogao izvršiti *utovar* ako utovarna jedinica još nije utovarena ili *premještanje* ako je već utovarena.

Na brz i jednostavan način operater može izvršiti navedene operacije očitavanjem barkoda utovarne jedinice. Ako utovarna jedinica još nije utovarena, procedura automatski predlaže skladišnu lokaciju definisanu u zaglavlju utovarne jedinice i aktivira dugme **Utovar**, kojim se u realnom vremenu kreira skladišno knjiženje.

Ako je utovarna jedinica već utovarena, procedura će zatražiti unos odredišne skladišne lokacije za premještanje te aktivirati dugme **Premjesti**, kojim se kreiraju odgovarajuća skladišna knjiženja izlaza robe sa protustavkom ulaza robe na novoj skladišnoj lokaciji.

Dugme **Obriši sve** omogućava brisanje svih unesenih podataka iz forme.

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Parametri su navedeni dva puta zato što forma koristi predložak skladišnog knjiženja ulaza robe za utovar utovarnih jedinica te predložak skladišnog knjiženja izlaza robe za već utovarene utovarne jedinice koje se premještaju. Predložak izlaza robe mora imati povezan predložak ulaza robe kao protustavku.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).