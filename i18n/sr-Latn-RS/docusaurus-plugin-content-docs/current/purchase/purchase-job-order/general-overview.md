---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u meniju **Nabavka > Nalog za nabavku**. Korišćenjem naloga za nabavku preduzeća mogu zaključivati ugovore sa dobavljačima za nabavku određenih količina proizvoda u okviru unapred dogovorenog vremenskog perioda. Takvi ugovori ne samo da omogućavaju povoljnije ekonomske uslove, već obezbeđuju i raspoloživost potrebne robe, u zamenu za obavezu kupca da poštuje ugovorene količine u definisanim rokovima.

## **Prethodna konfiguracija modula**

Pre korišćenja modula potrebno je popuniti sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): unos numeracija koje će se koristiti prilikom kreiranja naloga za nabavku.
- [**Tip naloga (narudžbine)**](/docs/configurations/tables/purchase/purchase-job-order-types)
- [**Parametri naloga za nabavku**](/docs/configurations/parameters/purchase/purchase-job-orders-parameters)

## **Povezanost sa ostalim modulima**

Nakon što su ugovori sa dobavljačima dogovoreni i kreiran nalog za nabavku, dokument se može razdužiti u okviru **Narudžbina dobavljaču** putem dugmeta *Razduženje iz projekta*.

Korišćenjem odgovarajućih [parametara](/docs/configurations/parameters/purchase/purchase-job-orders-parameters/) moguće je učiniti razduženje iz naloga obaveznim prilikom kreiranja nove narudžbine i blokirati količinu naloga, kako bi se sprečilo razduženje većih količina od onih predviđenih ugovorom.