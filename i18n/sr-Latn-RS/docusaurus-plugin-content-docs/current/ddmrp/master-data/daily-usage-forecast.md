---
title: Predviđanja potrošnje
sidebar_position: 7
---

Ova tabela sadrži predviđanja potrošnje za *bafer* artikle.

Za svaki bafer artikl i za svaku logističku jedinicu predviđa se iznos potrošnje sa dnevnim detaljima.

Podaci sadržani u ovoj tabeli koriste se u postupku [**ažuriranja prosečne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update) u slučaju korišćenja tehnike obračuna koja uzima u obzir predviđanja buduće potrošnje, a mogu se unositi ručno ili mogu dolaziti iz postupka obračuna koji određuje predviđanja prodaje gotovih proizvoda.

U slučaju ručnog unosa nije potrebno unositi vrednost za svaki dan, dovoljno je uneti jednu vrednost za svaki vremenski period čije je trajanje jednako parametru **Budući dani** u DDMRP parametrima artikla.

Ako je, na primer, vrednost **Budući dani** postavljena na 10 dana, dovoljno je uneti jedan iznos na svakih 10 dana koji predstavlja ukupnu potrošnju u tom periodu, jer će postupak ažuriranja prosečne dnevne potrošnje, u situaciji koja uključuje budućnost, sabrati predviđanja za taj period i podeliti ih sa brojem **Budući dani**.