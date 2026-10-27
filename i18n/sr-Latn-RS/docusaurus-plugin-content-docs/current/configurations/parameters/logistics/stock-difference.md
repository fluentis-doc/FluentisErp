---
title: Parametri inventurnih razlika
sidebar_position: 3
---

:::important[Čemu služi]
Uvod u parametre inventurnih razlika u sistemu Fluentis ključan je za efikasno usklađivanje fizičkih i knjigovodstvenih zaliha u skladištu. Ova funkcionalnost omogućava operaterima sistematsko upravljanje utvrđenim odstupanjima i njihovo evidentiranje, čime se obezbeđuje precizno praćenje i knjiženje svakog skladišnog kretanja.

Parametri inventurnih razlika nalaze se u odeljku za konfiguraciju i omogućavaju definisanje skladišnih šablona koji će se koristiti tokom obračuna razlika. Svako skladište može imati sopstvenu konfiguraciju, pri čemu je potrebno podesiti šablon ulaza za pozitivne inventurne korekcije i šablon izlaza za negativne inventurne korekcije. Osim toga, sistem automatski generiše kompenzaciona knjiženja, čime se pojednostavljuje upravljanje eventualnim promenama stanja zaliha.

Prilikom obračuna inventurnih razlika, Fluentis omogućava izračunavanje razlika na određeni datum, što omogućava retroaktivno upravljanje i precizno evidentiranje stanja zaliha.
:::

Obrazac omogućava podešavanje šablona za svako skladište koji će se automatski koristiti prilikom kreiranja skladišnih knjiženja putem postupka *Inventurne razlike*. Omogućava obračun razlike između knjigovodstvene količine i fizičke količine, odnosno količine utvrđene fizičkim inventarom, kao i automatsko generisanje kompenzacionih knjiženja radi usklađivanja knjigovodstvene i fizičke količine.

Na ovoj kartici mogu se podesiti isključivo oni skladišni šabloni kod kojih je aktivirana zastavica *Upravljanje fizičkim inventarom* u odeljku [Skladišni šabloni](/docs/configurations/tables/logistics/warehouse-templates). Za svako skladište potrebno je podesiti šablon ulaza za inventurnu korekciju i šablon izlaza za inventurnu korekciju.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).