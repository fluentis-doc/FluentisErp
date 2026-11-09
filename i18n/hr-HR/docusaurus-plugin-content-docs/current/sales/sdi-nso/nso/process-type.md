---
title: Vrste procesa
sidebar_position: 3
---

## Jednostavno naručivanje

Proces jednostavnog naručivanja podrazumijeva da se svaka eventualna obavijest dobavljača o prihvaćanju, odbijanju ili izmjeni narudžbe može dostaviti kupcu isključivo tradicionalnim putem (telefon, telefaks, e-pošta itd.). Time se dobavljača implicitno obavještava da kupac nije u mogućnosti primati eventualne odgovore elektroničkim putem.

Kupac ipak može opozvati ili izmijeniti prethodno izdanu narudžbu izdavanjem nove narudžbe, koja mora sadržavati oznaku narudžbe koju namjerava opozvati ili izmijeniti.

Prema tome, narudžba može imati sljedeće oblike:

- Početna narudžba
- Povezana početna narudžba
- Narudžba za opoziv
- Zamjenska narudžba

Ako je u narudžbi naveden datum izvršenja isporuke, vremensko ograničenje za zamjenu ili opoziv narudžbe određuje se prema tom datumu, umanjenom za vrijeme potrebno za pripremu isporuke i njezino izvršenje na predviđenom mjestu.

Dobavljač je dužan smatrati valjanima samo opozive i zamjene narudžbi koje zaprimi prije početka izvršenja narudžbe koja se opoziva ili zamjenjuje (odnosno prije razduživanja narudžbe).

U narudžbi se može navesti datum do kojeg je dobavljač dužan odgovoriti.

## Potpuno naručivanje

Ovaj proces podrazumijeva upotrebu triju dokumenata:

- narudžbe koju izdaje kupac;
- odgovora koji, prema potrebi, izdaje dobavljač;
- narudžbe za potvrdu koju, prema potrebi, izdaje kupac.

Proces započinje slanjem narudžbe od strane kupca, a može završiti na jedan od sljedećih načina:

- dobavljač zaprimi narudžbu koju je poslao kupac;
- kupac zaprimi odgovor koji je poslao dobavljač;
- dobavljač zaprimi narudžbu za potvrdu koju je poslao kupac.

## Izdavanje narudžbe

Narudžba može imati četiri sljedeća oblika:

- Početna narudžba
- Povezana početna narudžba
- Narudžba za opoziv
- Zamjenska narudžba

Narudžba za opoziv mora sadržavati samo jedan prazan redak narudžbe jer predstavlja isključivo poništenje prethodno poslane narudžbe na koju se odnosi.

Dobavljač je dužan smatrati valjanima samo opozive i zamjene narudžbi koje zaprimi prije početka izvršenja narudžbe koja se opoziva ili zamjenjuje.

Ako je u narudžbi naveden datum izvršenja isporuke (`Delivery/RequestedDeliveryPeriod/StartDate = EndDate`), taj datum predstavlja vremensko ograničenje do kojeg je moguće zamijeniti ili opozvati narudžbu, umanjeno za vrijeme potrebno za pripremu isporuke i njezino izvršenje na predviđenom mjestu.

Zamjene i opozivi zamjenjuju odnosno poništavaju narudžbu na koju se odnose, kao i sve ostale prethodno poslane zamjene i opozive povezane s istom početnom narudžbom.

Zamjenska narudžba formalno pokreće novi proces naručivanja, koji može biti jednostavan ili potpun, ovisno o podacima navedenima u samoj zamjenskoj narudžbi.

U narudžbi se može navesti datum do kojeg je dobavljač dužan odgovoriti (`ValidityPeriod/enddate`).

## Odgovor na narudžbu

Nakon primitka narudžbe dobavljač može:

- završiti proces bez slanja odgovora;
- poslati odgovor (crveni tijek na slici), koji mora sadržavati oznaku prethodno poslane narudžbe na koju se odnosi te kojim kupcu priopćava da namjerava:
    - potvrditi primitak narudžbe (odgovor o primitku);
    - prihvatiti zaprimljenu narudžbu (odgovor o prihvaćanju);
    - odbiti zaprimljenu narudžbu (odgovor o odbijanju);
    - izmijeniti zaprimljenu narudžbu (odgovor s izmjenama).

Odgovor s izmjenama mora sadržavati sve retke narudžbe, i one koje se namjerava zadržati i one koje se namjerava izmijeniti, jer dopunjuje prethodno poslanu narudžbu na koju se odnosi.

Odgovor na opozvanu narudžbu nema učinka za kupca.

## Očitovanje na odgovor

Nakon primitka odgovora kupac može:

- završiti proces bez slanja narudžbe za potvrdu (plavi tijek na slici);
- poslati narudžbu za potvrdu (crveni tijek na slici), koja mora sadržavati oznaku odgovora na koji se odnosi te kojom dobavljaču priopćava da namjerava:
    - prihvatiti zaprimljeni odgovor (narudžba za potvrdu prihvaćanjem);
    - odbiti zaprimljeni odgovor (narudžba za potvrdu odbijanjem);
    - zamijeniti izmjene narudžbe sadržane u zaprimljenom odgovoru (zamjenska narudžba za potvrdu).

Ako kupac priopći da namjerava zamijeniti izmjene narudžbe sadržane u odgovoru dobavljača, narudžba za potvrdu poništava sve prethodne dokumente u trenutačnom procesu i pokreće novi proces naručivanja.

Dobavljač je dužan smatrati valjanima samo narudžbe za potvrdu koje zaprimi prije početka izvršenja narudžbe.

Ako kupac pošalje zamjensku narudžbu za potvrdu na odgovor dobavljača, narudžba za potvrdu poništava sve prethodne dokumente (narudžbu i odgovor) u trenutačnom procesu te pokreće novi proces potpunog naručivanja.

Ako narudžba za potvrdu nije poslana, smatra se da je odgovor potvrđen.

Valjane su samo narudžbe za potvrdu zaprimljene prije razduživanja narudžbe.

## Unaprijed dogovoreno naručivanje

Prethodno ovlaštenje dobavljaču za izdavanje narudžbe, umjesto kupcu, može proizlaziti iz ugovora ili drugog dokumenta (primjerice, narudžbe poslane telefaksom ili e-poštom zbog nedostupnosti informacijskog sustava za izdavanje elektroničkih narudžbi ili narudžbe potvrđene putem platforme za elektroničku komunikaciju). Tim dokumentom kupac dobavljaču daje takvo ovlaštenje, unaprijed određujući područje primjene i ograničenja unutar kojih se ono može koristiti.

Ovaj proces podrazumijeva upotrebu dvaju dokumenata:

- unaprijed dogovorene narudžbe koju izdaje dobavljač;
- narudžbe za potvrdu koju, prema potrebi, izdaje kupac.

Proces započinje slanjem unaprijed dogovorene narudžbe od strane dobavljača, koji je izdaje na temelju prethodnog ovlaštenja kupca, a može završiti na jedan od sljedećih načina:

- kupac zaprimi unaprijed dogovorenu narudžbu koju je poslao dobavljač;
- dobavljač zaprimi narudžbu za potvrdu koju je poslao kupac.

Svaka eventualna obavijest kupca o potvrdi, odbijanju ili zamjeni unaprijed dogovorene narudžbe u pravilu se mora dostaviti dobavljaču putem sustava NSO.

Dobavljač ipak može opozvati ili izmijeniti prethodno izdanu unaprijed dogovorenu narudžbu izdavanjem nove unaprijed dogovorene narudžbe, koja mora sadržavati oznaku narudžbe koju namjerava opozvati ili izmijeniti.

Prema tome, unaprijed dogovorena narudžba može imati sljedeće oblike:

- Početna narudžba
- Povezana početna narudžba
- Narudžba za opoziv, koja mora sadržavati oznaku prethodno poslane narudžbe koju se namjerava opozvati. Mora sadržavati samo jedan redak narudžbe jer predstavlja isključivo poništenje prethodno poslane narudžbe na koju se odnosi.
- Zamjenska narudžba, koja mora sadržavati oznaku prethodno poslane narudžbe koju se namjerava izmijeniti. Predstavlja novu narudžbu koja poništava sve prethodne dokumente (narudžbe i narudžbe za potvrdu) u trenutačnom procesu te pokreće novi proces unaprijed dogovorenog naručivanja. Stoga mora sadržavati sve retke narudžbe, kao i početna narudžba.

Nakon primitka unaprijed dogovorene narudžbe kupac može:

- završiti proces bez slanja narudžbe za potvrdu;
- poslati narudžbu za potvrdu, koja mora sadržavati oznaku unaprijed dogovorene narudžbe na koju se odnosi te kojom dobavljaču priopćava da namjerava:
    - potvrditi zaprimljenu unaprijed dogovorenu narudžbu (narudžba za potvrdu prihvaćanjem);
    - odbiti zaprimljenu unaprijed dogovorenu narudžbu (narudžba za potvrdu odbijanjem);
    - zamijeniti zaprimljenu unaprijed dogovorenu narudžbu (zamjenska narudžba za potvrdu).

Ako kupac priopći da namjerava zamijeniti unaprijed dogovorenu narudžbu dobavljača, narudžba za potvrdu poništava sve prethodne dokumente u trenutačnom procesu i pokreće novi proces koji, ovisno o podacima navedenima u narudžbi za potvrdu, može biti jednostavno ili potpuno naručivanje.

Valjane su samo narudžbe za potvrdu zaprimljene prije nego što je unaprijed dogovorena narudžba razdužena dokumentima o isporuci.