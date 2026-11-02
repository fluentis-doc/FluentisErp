---
title: Fabrički kalendar
sidebar_position: 4
---

U ovom prozoru moguće je generisati i/ili izmeniti *fabrički kalendar* preduzeća, koji je ključni element koji uzimaju u obzir postupci **Opšteg planiranja**, **Raspoređivanja uz ograničene kapacitete** i **MRP-a**.

Prozor je prikazan u obliku tabele sa onoliko polja koliko ima dana u mesecu odabranom u gornjem desnom uglu.

U prvom polju nalaze se **Mesec** i **Godina** na koje se kalendar odnosi. Mogu se odabrati putem padajućeg menija i susednog polja za unos ili klikom na dugmad **Prethodna/sledeća godina** i **Prethodni/sledeći mesec**.

U svakom polju nalazi se oznaka koja, ako je aktivirana, označava da je određeni dan *neradni dan*.

Označavanje određenog dana kao *neradnog dana* omogućava aplikaciji da prilikom generisanja [Kalendara proizvodnih kapaciteta](/docs/configurations/tables/production/productive-capacity-calendar) automatski kreira raspoloživost *proizvodnog resursa* samo za dane koji u *Fabričkom kalendaru* nisu označeni kao neradni.

Osim toga, podaci o neradnim danima važni su i pri definisanju *vremena nabavke kod preferiranih dobavljača*, koje je stoga potrebno odrediti uzimajući u obzir *Fabrički kalendar*.

*Primer*:

Ako su subota i nedelja označene kao neradni dani, postavljanjem vremena nabavke na 10 dana podrazumeva se ukupno vreme od približno dve nedelje, s obzirom na to da se radna nedelja u ovom slučaju sastoji od samo pet kalendarskih dana.

Nakon postavljanja svih polja dovoljno je kliknuti na dugme **Sačuvaj**.

Oznake neradnih dana mogu se postaviti:
- **ručno**, od strane korisnika;
- ili, kao što je uobičajeno, pomoću dugmeta na traci **Generisanje fabričkog kalendara**. Klikom na ovo dugme otvara se iskačući prozor **Generisanje kalendara**.

U ovom iskačućem prozoru korisnik može odabrati automatsko generisanje fabričkog kalendara za određenu godinu, koju može uneti u odgovarajuće polje **Generisanje kalendara za godinu**.

Nakon odabira neradnih dana u nedelji i odluke o tome da li će se uzeti u obzir podešavanja definisana u tabeli *Godišnji praznici*, kliknite na dugme **U redu** kako bi se automatski generisao fabrički kalendar za odabranu godinu.

Nakon generisanja kalendara korisnik mora ponovo kliknuti na dugme **Sačuvaj** i zatvoriti prozor fabričkog kalendara.

*Posebno dugme*:

> **Generisanje fabričkog kalendara**: omogućava otvaranje iskačućeg prozora za automatsko generisanje fabričkog kalendara za celu godinu.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).