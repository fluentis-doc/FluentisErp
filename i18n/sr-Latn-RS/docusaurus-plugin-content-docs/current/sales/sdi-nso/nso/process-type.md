---
title: Tipovi procesa
sidebar_position: 3
---

## Jednostavno naručivanje

Proces jednostavnog naručivanja podrazumeva da se svako eventualno obaveštenje dobavljača o prihvatanju, odbijanju ili izmeni narudžbine može dostaviti kupcu isključivo tradicionalnim putem (telefon, telefaks, e-pošta itd.). Time se dobavljač implicitno obaveštava da kupac nije u mogućnosti da prima eventualne odgovore elektronskim putem.

Kupac ipak može da opozove ili izmeni prethodno izdatu narudžbinu izdavanjem nove narudžbine, koja mora da sadrži oznaku narudžbine koju namerava da opozove ili izmeni.

Prema tome, narudžbina može imati sledeće oblike:

- Početna narudžbina
- Povezana početna narudžbina
- Narudžbina za opoziv
- Zamenska narudžbina

Ako je u narudžbini naveden datum izvršenja isporuke, vremensko ograničenje za zamenu ili opoziv narudžbine određuje se prema tom datumu, umanjenom za vreme potrebno za pripremu isporuke i njeno izvršenje na predviđenom mestu.

Dobavljač je dužan da smatra važećim samo opozive i zamene narudžbina koje primi pre početka izvršenja narudžbine koja se opoziva ili zamenjuje (odnosno pre razduženja narudžbine).

U narudžbini se može navesti datum do kojeg je dobavljač dužan da odgovori.

## Potpuno naručivanje

Ovaj proces podrazumeva upotrebu tri dokumenta:

- narudžbine koju izdaje kupac;
- odgovora koji, prema potrebi, izdaje dobavljač;
- narudžbine za potvrdu koju, prema potrebi, izdaje kupac.

Proces započinje slanjem narudžbine od strane kupca, a može se završiti na jedan od sledećih načina:

- dobavljač primi narudžbinu koju je poslao kupac;
- kupac primi odgovor koji je poslao dobavljač;
- dobavljač primi narudžbinu za potvrdu koju je poslao kupac.

## Izdavanje narudžbine

Narudžbina može imati četiri sledeća oblika:

- Početna narudžbina
- Povezana početna narudžbina
- Narudžbina za opoziv
- Zamenska narudžbina

Narudžbina za opoziv mora da sadrži samo jedan prazan red narudžbine jer predstavlja isključivo poništenje prethodno poslate narudžbine na koju se odnosi.

Dobavljač je dužan da smatra važećim samo opozive i zamene narudžbina koje primi pre početka izvršenja narudžbine koja se opoziva ili zamenjuje.

Ako je u narudžbini naveden datum izvršenja isporuke (`Delivery/RequestedDeliveryPeriod/StartDate = EndDate`), taj datum predstavlja vremensko ograničenje do kojeg je moguće zameniti ili opozvati narudžbinu, umanjeno za vreme potrebno za pripremu isporuke i njeno izvršenje na predviđenom mestu.

Zamene i opozivi zamenjuju, odnosno poništavaju narudžbinu na koju se odnose, kao i sve ostale prethodno poslate zamene i opozive povezane sa istom početnom narudžbinom.

Zamenska narudžbina formalno pokreće novi proces naručivanja, koji može biti jednostavan ili potpun, u zavisnosti od podataka navedenih u samoj zamenskoj narudžbini.

U narudžbini se može navesti datum do kojeg je dobavljač dužan da odgovori (`ValidityPeriod/enddate`).

## Odgovor na narudžbinu

Nakon prijema narudžbine dobavljač može:

- da završi proces bez slanja odgovora;
- da pošalje odgovor (crveni tok na slici), koji mora da sadrži oznaku prethodno poslate narudžbine na koju se odnosi i kojim kupcu saopštava da namerava da:
  - potvrdi prijem narudžbine (odgovor o prijemu);
  - prihvati primljenu narudžbinu (odgovor o prihvatanju);
  - odbije primljenu narudžbinu (odgovor o odbijanju);
  - izmeni primljenu narudžbinu (odgovor sa izmenama).

Odgovor sa izmenama mora da sadrži sve redove narudžbine, kako one koje namerava da zadrži, tako i one koje namerava da izmeni, jer dopunjuje prethodno poslatu narudžbinu na koju se odnosi.

Odgovor na opozvanu narudžbinu nema dejstvo za kupca.

## Izjašnjavanje o odgovoru

Nakon prijema odgovora kupac može:

- da završi proces bez slanja narudžbine za potvrdu (plavi tok na slici);
- da pošalje narudžbinu za potvrdu (crveni tok na slici), koja mora da sadrži oznaku odgovora na koji se odnosi i kojom dobavljaču saopštava da namerava da:
  - prihvati primljeni odgovor (narudžbina za potvrdu – prihvatanje);
  - odbije primljeni odgovor (narudžbina za potvrdu – odbijanje);
  - zameni izmene narudžbine sadržane u primljenom odgovoru (zamenska narudžbina za potvrdu).

Ako kupac saopšti da namerava da zameni izmene narudžbine sadržane u odgovoru dobavljača, narudžbina za potvrdu poništava sve prethodne dokumente u trenutnom procesu i pokreće novi proces naručivanja.

Dobavljač je dužan da smatra važećim samo narudžbine za potvrdu koje primi pre početka izvršenja narudžbine.

Ako kupac pošalje zamensku narudžbinu za potvrdu na odgovor dobavljača, narudžbina za potvrdu poništava sve prethodne dokumente (narudžbinu i odgovor) u trenutnom procesu i pokreće novi proces potpunog naručivanja.

Ako narudžbina za potvrdu nije poslata, smatra se da je odgovor potvrđen.

Važeće su samo narudžbine za potvrdu primljene pre razduženja narudžbine.

## Unapred dogovoreno naručivanje

Prethodno ovlašćenje dobavljaču za izdavanje narudžbine, umesto kupcu, može proizlaziti iz ugovora ili drugog dokumenta (na primer, narudžbine poslate telefaksom ili e-poštom zbog nedostupnosti informacionog sistema za izdavanje elektronskih narudžbina ili narudžbine potvrđene putem platforme za elektronsku komunikaciju). Tim dokumentom kupac dobavljaču daje takvo ovlašćenje, unapred određujući oblast primene i ograničenja u okviru kojih se ono može koristiti.

Ovaj proces podrazumeva upotrebu dva dokumenta:

- unapred dogovorene narudžbine koju izdaje dobavljač;
- narudžbine za potvrdu koju, prema potrebi, izdaje kupac.

Proces započinje slanjem unapred dogovorene narudžbine od strane dobavljača, koji je izdaje na osnovu prethodnog ovlašćenja kupca, a može se završiti na jedan od sledećih načina:

- kupac primi unapred dogovorenu narudžbinu koju je poslao dobavljač;
- dobavljač primi narudžbinu za potvrdu koju je poslao kupac.

Svako eventualno obaveštenje kupca o potvrdi, odbijanju ili zameni unapred dogovorene narudžbine po pravilu se mora dostaviti dobavljaču putem sistema NSO.

Dobavljač ipak može da opozove ili izmeni prethodno izdatu unapred dogovorenu narudžbinu izdavanjem nove unapred dogovorene narudžbine, koja mora da sadrži oznaku narudžbine koju namerava da opozove ili izmeni.

Prema tome, unapred dogovorena narudžbina može imati sledeće oblike:

- Početna narudžbina
- Povezana početna narudžbina
- Narudžbina za opoziv, koja mora da sadrži oznaku prethodno poslate narudžbine koju namerava da opozove. Mora da sadrži samo jedan red narudžbine jer predstavlja isključivo poništenje prethodno poslate narudžbine na koju se odnosi.
- Zamenska narudžbina, koja mora da sadrži oznaku prethodno poslate narudžbine koju namerava da izmeni. Predstavlja novu narudžbinu koja poništava sve prethodne dokumente (narudžbine i narudžbine za potvrdu) u trenutnom procesu i pokreće novi proces unapred dogovorenog naručivanja. Zato mora da sadrži sve redove narudžbine, kao i početna narudžbina.

Nakon prijema unapred dogovorene narudžbine kupac može:

- da završi proces bez slanja narudžbine za potvrdu;
- da pošalje narudžbinu za potvrdu, koja mora da sadrži oznaku unapred dogovorene narudžbine na koju se odnosi i kojom dobavljaču saopštava da namerava da:
  - potvrdi primljenu unapred dogovorenu narudžbinu (narudžbina za potvrdu – prihvatanje);
  - odbije primljenu unapred dogovorenu narudžbinu (narudžbina za potvrdu – odbijanje);
  - zameni primljenu unapred dogovorenu narudžbinu (zamenska narudžbina za potvrdu).

Ako kupac saopšti da namerava da zameni unapred dogovorenu narudžbinu dobavljača, narudžbina za potvrdu poništava sve prethodne dokumente u trenutnom procesu i pokreće novi proces koji, u zavisnosti od podataka navedenih u narudžbini za potvrdu, može biti jednostavno ili potpuno naručivanje.

Važeće su samo narudžbine za potvrdu primljene pre nego što je unapred dogovorena narudžbina razdužena dokumentima o isporuci.