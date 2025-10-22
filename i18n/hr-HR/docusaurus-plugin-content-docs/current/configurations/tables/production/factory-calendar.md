---
title: Tvornički kalendar
sidebar_position: 4
---

Putem ovog prozora moguće je generirati i/ili izmijenit *Tvornički kalendar* poduzeća, ključni element koji se uzima u obzir prilikom izvođenja procedura **Općeg planiranja**, **Planiranja s ograničenim kapacitetom** i **MRP-a**.

Prozor se prikazuje kao tablica u kojoj se nalaze onoliko ćelija koliko ima dana u mjesecu odabranom u gornjem desnom kutu.
U prvom polju prikazuju se **Mjesec** i **Godina** na koje se kalendar odnosi, a koji se mogu odabrati putem kombiniranog izbornika i polja za unos ili klikom na tipke **Prethodna godina / Sljedeća godina** i **Prethodni mjesec / Sljedeći mjesec**.

U svakoj ćeliji nalazi se flag koji, ako je aktiviran, označava da je taj dan *Praznik*.  
Ako je određeni dan označen kao *Praznik* sustav će pri generiranju [Kalendar proizvodnih kapaciteta](/docs/configurations/tables/production/productive-capacity-calendar) automatski generirati dostupnost *Proizvodnih resursa*isključivo za dane koji u *Tvorničkom kalendaru* nisu označeni kao praznici.  
Ova informacija također je važna pri definiranju *vrijeme isporuke od preferiranih dobavljača*, jer se ono također mora računati prema *Tvorničkom kalendaru*.  
*Primjer*:
Ako se subota i nedjelja smatraju praznicima, a kao vrijeme isporuke postavi se 10 dana, to zapravo podrazumijeva otprilike 2 kalendarska tjedna, jer se radni tjedan u tom slučaju sastoji od 5 dana.

Nakon što su svi podaci uneseni, dovoljno je kliknuti na tipku **Spremi**.

Flagovi koji označavaju praznike mogu se postaviti:  
- **ručno** izravno od strane korisnika 
ili, što je uobičajenije,   
- korištenjem tipke na traci izbornika pod nazivom **Generiranje tvorničkog kalendara**. Klikom na ovu tipku otvara se pop-up prozor pod nazivom Generiranje kalendara.  

U ovom prozoru korisnik može automatski generirati tvornički kalendar za određenu godinu, koju unosi u polje **Generiranje kalendara za godinu**.  
Nakon odabira dana u tjednu koji se smatraju praznicima i odluke treba li uzeti u obzir postavke iz tablice *Godišnji praznici*, korisnik klikne na **OK** kako bi automatski generirao kalendar za odabranu godinu.  

Nakon generiranja kalendara, potrebno je ponovno kliknuti na Spremi i zatvoriti prozor Tvorničkog kalendara. 

*Specifična tipka*:  
> **Generiranje tvorničkog kalendara**: otvara pop-up prozor za automatsko generiranje tvorničkog kalendara za cijelu godinu.  

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).