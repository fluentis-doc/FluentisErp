---
title: Utovar/premještanje više utovarnih jedinica
sidebar_position: 3
---

:::important Čemu služi
Funkcija **Utovar/premještanje više utovarnih jedinica** u Fluentis WMS-u namijenjena je pojednostavljenju upravljanja utovarnim jedinicama. Omogućava operaterima utovar utovarnih jedinica koje još nisu evidentirane u sistemu ili premještanje već utovarenih utovarnih jedinica sa jedne skladišne lokacije na drugu, korišćenjem skeniranja barkoda. Zahvaljujući ovoj funkcionalnosti, sistem omogućava izvršavanje skladišnih operacija u realnom vremenu.
:::

Ova procedura koristi se za očitavanje jedne ili više utovarnih jedinica kako bi se mogao izvršiti *masovni utovar* ako utovarne jedinice još nisu utovarene ili *masovno premještanje* ako su već utovarene.

Operater može izvršiti ove operacije očitavanjem barkoda jedne ili više utovarnih jedinica. Ako utovarne jedinice još nisu utovarene, automatski se dodaju u tabelu ispod polja za unos barkoda.

Procedura automatski predlaže skladišnu lokaciju definisanu u zaglavlju svake utovarne jedinice te aktivira dugme **Utovar**, kojim se u realnom vremenu kreiraju odgovarajuća skladišna knjiženja.

Ako su utovarne jedinice već utovarene, procedura će zatražiti unos odredišne skladišne lokacije za premještanje te aktivirati dugme **Premjesti**, kojim se kreiraju odgovarajuća skladišna knjiženja izlaza robe sa protustavkom ulaza robe na novoj skladišnoj lokaciji.

Dugme **Obriši sve** omogućava brisanje svih unesenih podataka iz forme.

**Parametri ulaza/izlaza robe** koje je potrebno definisati u tabeli [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Parametri su navedeni dva puta zato što forma koristi predložak skladišnog knjiženja ulaza robe za utovar utovarnih jedinica te predložak skladišnog knjiženja izlaza robe za već utovarene utovarne jedinice koje se premještaju. Predložak izlaza robe mora imati povezan predložak ulaza robe kao protustavku.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).