---
title: Predviđanja potrošnje 
sidebar_position: 7
---
Ova tablica sadrži predviđanja potrošnje za buffer artikle.  

Za svaki buffer artikl i za svaku logističku jedinicu predviđa potrošni iznos s dnevnim detaljima.  

Podaci sadržani u ovoj tablici koriste se u postupku [**ažuriranja prosječne dnevne potrošnje (ADU)**](/docs/ddmrp/procedures/adu-update) u slučaju korištenja tehnike izračuna koja uzima u obzir predviđanja buduće potrošnje, a mogu se unijeti ručno ili mogu dolaziti iz postupka izračuna koji određuje predviđanja prodaje gotovih proizvoda. 

U slučaju ručnog unosa nije potrebno unositi vrijednost za svaki dan, dovoljno je unijeti jedan za svaki vremenski period čija je dužina jednaka parametru **Budući dani** u DDMRP parametrima artikla. 

Ako je, na primjer, **Budući dani** u 10 dana, dovoljno je unijeti jedan iznos svakih 10 dana koji predstavlja ukupnu potrošnju u tom razdoblju, jer će postupak ažuriranja prosječne dnevne potrošnje, u situaciji koja uključuje budućnost, zbrojiti predviđanja za to razdoblje i podijeliti s **Budućim danima**.