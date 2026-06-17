---
title: Knjigovodstvene evidencije i funkcionalnosti u opštem računovodstvu
sidebar_position: 10
---

U svakoj knjigovodstvenoj evidenciji sa šablonima knjiženja kod kojih je aktivirana opcija upravljanja *centrima troškova*, biće vidljiva kartica **Analitika**, namenjena valorizaciji analitičkog računovodstva po centrima troškova.

:::tip NAPOMENA
Opcija za upravljanje *projektima* u šablonima knjiženja ponaša se različito u zavisnosti od toga da li je u preduzeću aktiviran *Controlling*:

- Ako **nije aktiviran**, opcija omogućava prikaz posebne kartice za upravljanje direktnim troškovima i prihodima projekta, odvojene od analitičkog računovodstva.
- Ako **jeste aktiviran**, opcija čini polje **Projekti** vidljivim unutar kartice za upravljanje centrima troškova u analitičkom računovodstvu. Polje će biti moguće uređivati samo za dimenzije povezane sa dimenzijom projekata.
:::

Unutar kartice Analitika dostupni su potpuni pregled i uređivanje svih redova koje ***Fluentis ERP*** automatski valorizuje prilikom unosa evidencije ili koji su preneti iz izvornog dokumenta knjiženja. Moguće je menjati iznose, dodavati nove redove ili brisati postojeće, u skladu sa pravilima konfiguracije dimenzije pojedinačnog centra, kontnog plana i uzroka knjiženja.

Po završetku knjiženja podaci će biti dostupni u odgovarajućim procedurama i izveštajima opšteg računovodstva.

## POSTUPCI OPŠTEG RAČUNOVODSTVA

- ***Pregled knjiženja po centru troška***: pretražuje analitičke zapise unutar knjigovodstvenih evidencija uz mogućnost uređivanja same evidencije.
- ***Pregled stanja konta po centru troška***: omogućava pregled ukupnih iznosa po centrima, kao i po centru i kontu, uz sumiranje kroz strukturu kontnog plana.

## IZVEŠTAJI OPŠTEG RAČUNOVODSTVA

U okviru grupe *Izveštaji analitike* dostupni su sledeći izveštaji:

- ***Analiza centara troškova***: omogućava grupisanje analitičkih podataka prema unapred definisanim svojstvima korišćenjem tabele za grupisanje.
- ***Analiza profitnih centara***: funkcionalno je slična prethodnom izveštaju, ali prikazuje podatke vezane za *profitne centre*.
- ***Analiza knjiženja za centre troškova***: prikazuje detalje kretanja pojedinačnih podkonta i centre u kojima su evidentirani.
- ***Kontrola neuravnoteženosti centara troškova / profitnih centara / projekata***: u preduzećima sa aktiviranim Controlling modulom omogućava proveru usklađenosti podataka analitičkog računovodstva filtriranjem po određenoj [*dimenziji*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension). Ako Controlling nije aktiviran, dostupne su opcije za proveru neuravnoteženosti centara troškova, centara prihoda ili projektne sekcije knjigovodstvenih evidencija.