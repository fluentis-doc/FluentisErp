---
title: Tvornički kalendar
sidebar_position: 4
---

U ovom je prozoru moguće generirati i/ili izmijeniti *tvornički kalendar* poduzeća, koji je ključan element koji uzimaju u obzir postupci **Općeg planiranja**, **Raspoređivanja uz ograničene kapacitete** i **MRP-a**.

Prozor je prikazan u obliku tablice s onoliko polja koliko ima dana u mjesecu odabranom u gornjem desnom kutu.

U prvom polju nalaze se **Mjesec** i **Godina** na koje se kalendar odnosi. Mogu se odabrati putem padajućeg izbornika i susjednog polja za unos ili klikom na gumbe **Prethodna/sljedeća godina** i **Prethodni/sljedeći mjesec**.

U svakom polju nalazi se oznaka koja, ako je aktivirana, označava da je određeni dan *neradni dan*.

Označavanje određenog dana kao *neradnog dana* omogućuje aplikaciji da prilikom generiranja [Kalendara proizvodnih kapaciteta](/docs/configurations/tables/production/productive-capacity-calendar) automatski kreira raspoloživost *proizvodnog resursa* samo za dane koji u *Tvorničkom kalendaru* nisu označeni kao neradni.

Osim toga, podaci o neradnim danima važni su i pri definiranju *vremena nabave kod preferiranih dobavljača*, koje je stoga potrebno odrediti uzimajući u obzir *Tvornički kalendar*.

*Primjer*:

Ako su subota i nedjelja označene kao neradni dani, postavljanjem vremena nabave na 10 dana podrazumijeva se ukupno vrijeme od približno dva tjedna, s obzirom na to da se radni tjedan u ovom slučaju sastoji od samo pet kalendarskih dana.

Nakon postavljanja svih polja dovoljno je kliknuti gumb **Spremi**.

Oznake neradnih dana mogu se postaviti:
- **ručno**, od strane korisnika;
- ili, kao što je uobičajeno, pomoću gumba na vrpci **Generiranje tvorničkog kalendara**. Klikom na ovaj gumb otvara se skočni prozor **Generiranje kalendara**.

U ovom skočnom prozoru korisnik može odabrati automatsko generiranje tvorničkog kalendara za određenu godinu, koju može unijeti u odgovarajuće polje **Generiranje kalendara za godinu**.

Nakon odabira neradnih dana u tjednu i odluke o tome hoće li se uzeti u obzir postavke definirane u tablici *Godišnji blagdani*, kliknite gumb **U redu** kako bi se automatski generirao tvornički kalendar za odabranu godinu.

Nakon generiranja kalendara korisnik mora ponovno kliknuti gumb **Spremi** i zatvoriti prozor tvorničkog kalendara.

*Poseban gumb*:

> **Generiranje tvorničkog kalendara**: omogućuje otvaranje skočnog prozora za automatsko generiranje tvorničkog kalendara za cijelu godinu.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).