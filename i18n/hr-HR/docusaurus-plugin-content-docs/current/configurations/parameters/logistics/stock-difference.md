---
title: Parametri inventurnih razlika
sidebar_position: 3
---

:::important Čemu služi
Uvod u parametre inventurnih razlika u sustavu Fluentis ključan je za učinkovito usklađivanje fizičkih i knjigovodstvenih zaliha unutar skladišta. Ova funkcionalnost omogućuje operaterima sustavno upravljanje utvrđenim odstupanjima i njihovo evidentiranje, osiguravajući da se svako skladišno kretanje točno prati i knjiži.

Parametri inventurnih razlika nalaze se u odjeljku za konfiguraciju i omogućuju određivanje skladišnih predložaka koji će se koristiti tijekom izračuna razlika. Svako skladište može imati vlastitu konfiguraciju, pri čemu je potrebno postaviti predložak ulaza za pozitivne inventurne korekcije i predložak izlaza za negativne inventurne korekcije. Osim toga, sustav automatski generira kompenzacijska knjiženja, čime se pojednostavljuje upravljanje eventualnim promjenama stanja zaliha.

U postupku obračuna inventurnih razlika Fluentis nudi mogućnost izračuna razlika na određeni datum, što omogućuje retroaktivno upravljanje i precizno evidentiranje stanja zaliha.
:::

Obrazac omogućuje postavljanje predložaka za svako skladište koji će se automatski koristiti pri izradi skladišnih knjiženja putem postupka *Inventurne razlike*. Omogućuje izračun razlike između knjigovodstvene količine i fizičke količine, odnosno količine utvrđene fizičkim inventurom, te automatsko generiranje kompenzacijskih knjiženja za usklađivanje knjigovodstvene i fizičke količine.

U ovoj kartici mogu se postaviti isključivo oni skladišni predlošci koji imaju aktiviranu zastavicu *Upravljanje fizičkim inventurom* u odjeljku [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates). Za svako skladište potrebno je postaviti predložak ulaza za inventurnu korekciju i predložak izlaza za inventurnu korekciju.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).