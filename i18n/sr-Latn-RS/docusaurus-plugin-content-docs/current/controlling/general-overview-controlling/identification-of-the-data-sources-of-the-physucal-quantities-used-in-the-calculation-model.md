---
title: Identifikacija izvora podataka za fizičke veličine korišćene u modelu obračuna
sidebar_position: 2.4
---

:::tip NAPOMENA
Ovaj odeljak je usko povezan sa korišćenjem naprednih funkcionalnosti kontrolinga.
:::

Nakon što se identifikuje potreba za upravljanjem nosiocima raspodele zasnovanim na fizičkim količinama, sledeći korak je određivanje izvora iz kojih će se preuzimati podaci o tim fizičkim veličinama.

Ukoliko se radi o mašinskim satima, radnim satima zaposlenih, tonama ili drugim jedinicama mere, potrebno je definisati gde se ti podaci nalaze, kao i koje će se [*jedinice mere*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) koristiti.

Uobičajeno je da se takvi podaci nalaze u proizvodnom okruženju. Kada je reč o mašinskim ili radnim satima, izvor podataka su najčešće proizvodne prijave, koje omogućavaju mesečno evidentiranje stvarno utrošenih sati rada ljudi i mašina po centrima.

Međutim, podaci mogu biti dostupni i u spoljnim sistemima, iz kojih se mogu izvesti u Excel format i zatim jednostavno uvesti u ***FluentisERP*** pomoću odgovarajuće procedure za uvoz.

Podaci se takođe mogu dobijati:

- kroz evidenciju radnih sati administrativnog osoblja putem prijave vremena na projektima,
- ručnim unosom na početku godine,
- ili kombinacijom ovih metoda, uz naknadnu *proporcionalnu raspodelu* prema periodizaciji definisanoj za fizička kretanja.

:::tip NAPOMENA
Obrada [*nosilaca troškova*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) zasnovanih na količinama, kao i svih drugih nosilaca ovog tipa, podrazumevano uključuje blokadu obračuna ukoliko u nekom od obrađivanih perioda nije dostupna potrebna količina za raspodelu izvornog podatka.

Ova postavka je korisna jer sprečava da se previdi unos potrebnih količina, naročito kada se podaci unose ručno, a ne preuzimaju automatski iz proizvodnje.

Ipak, moguće je deaktivirati ovu blokadu kako bi sistem koristio prosečnu vrednost raspoloživih podataka (videti opciju *upravljanje greškama* kod nosilaca troškova). Ovo je naročito korisno u situacijama kada u određenom periodu zaista nema količina, na primer tokom kolektivnih godišnjih odmora ili zastoja u proizvodnji.
:::