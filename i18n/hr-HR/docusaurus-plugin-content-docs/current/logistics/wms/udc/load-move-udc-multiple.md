---
title: Učitaj/premještanje više utovarnih jedinica
sidebar_position: 3
---

:::important Čemu služi
Funkcija **Učitaj/premještanje više utovarnih jedinica** u Fluentis WMS-u namijenjena je pojednostavljenju upravljanja utovarnim jedinicama. Omogućuje operaterima učitavanje utovarne jedinice koja još nije evidentirana u sustavu ili premještanje već učitane utovarne jedinice s jedne skladišne lokacije na drugu, koristeći skeniranje barkoda. Zahvaljujući ovoj funkcionalnosti, sustav omogućuje izvođenje skladišnih operacija u stvarnom vremenu.
:::

Ova se procedura koristi za očitavanje jedne ili više utovarnih jedinica kako bi se moglo izvršiti *masovno učitavanje* ako utovarne jedinice još nisu učitane ili *masovno premještanje* ako su već učitane.

Operater može izvršiti ove operacije očitavanjem barkoda jedne ili više utovarnih jedinica. Ako utovarne jedinice još nisu učitane, automatski se dodaju u tablicu ispod polja za unos barkoda.

Procedura automatski predlaže skladišnu lokaciju definiranu u zaglavlju pojedine utovarne jedinice te aktivira gumb **Utovar**, kojim se u stvarnom vremenu kreiraju odgovarajuća skladišna knjiženja.

Ako su utovarne jedinice već učitane, procedura će zatražiti unos odredišne skladišne lokacije za premještanje te aktivirati gumb **Premjesti**, kojim se kreiraju odgovarajuća skladišna knjiženja izlaza robe s protustavkom ulaza robe na novoj skladišnoj lokaciji.

Gumb **Obriši sve** omogućuje brisanje svih unesenih podataka iz forme.

**Parametri ulaza/izlaza robe** koje je potrebno definirati u tablici [Parametri skladišta ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Forma |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

Parametri su navedeni dva puta jer forma koristi predložak skladišnog knjiženja ulaza robe za učitavanje utovarnih jedinica te predložak skladišnog knjiženja izlaza robe za već učitane utovarne jedinice koje se premještaju. Predložak izlaza robe mora imati povezan predložak ulaza robe kao protustavku.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).