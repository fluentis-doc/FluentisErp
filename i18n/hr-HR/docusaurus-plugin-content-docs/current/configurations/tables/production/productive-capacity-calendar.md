---
title: Kalendar kapaciteta proizvodnje
sidebar_position: 3
---

Prozor se prikazuje kao tablica u kojoj se nalaze onoliko polja koliko ima dana u mjesecu odabranom u gornjem desnom kutu.
U prvom se polju nalaze **Mjesec** i **Godina** na koje se kalendar odnosi, a mogu se odabrati putem padajućeg izbornika i polja za unos pored njega ili pomoću tipki **Prethodna/Sljedeća godina** i **Prethodni/Sljedeći mjesec**.

U nastavku se nalaze niz padajućih izbornika pomoću kojih se odabire Radni centar za koji se želi kreirati kalendar, **Stroj** te **Grupa radne snage**.

U svakoj ćeliji nalazi se flag koji, ako je aktiviran, označava da je taj dan *Praznik*.  
Ako je određeni dan označen kao *Praznik* korisnik može osigurati da prilikom generiranja *Kalendara kapaciteta proizvodnje* aplikacija automatski generira dostupnost *proizvodnih resursa* samo za dane koji u [Kalendaru tvornice](/docs/configurations/tables/production/factory-calendar) nisu označeni kao praznični.  

Osim flaga, unutar svake ćelije moguće je vidjeti i/ili izmijeniti i broj *sati proizvodnog kapaciteta* tog radnog centra (dakle, koliko sati dnevno može raditi).  

Moguće je postaviti da radni centar radi svaki dan osim praznika, a u slučaju **Iznimki** dovoljno je pozicionirati se na određeni dan, dodati ili ukloniti flag te povećati ili smanjiti broj radnih sati.

Kalendar kapaciteta proizvodnje ima prednost nad kalendarom tvornice.

Nakon što se svi potrebni podaci postave, dovoljno je kliknuti tipku **Spremi**.

Klikom na tipku **Automatsko generiranje** otvara se novi obrazac u kojem se može navesti godina za koju će se kalendar generirati te broj sati dnevnog kapaciteta koji će se uzeti u obzir samo za one radne centre koji nemaju definirano vlastito radno vrijeme (početak i kraj).

Ovim postupkom moguće je generirati kalendare za sve radne centre istovremeno ili, uklanjanjem flaga **Generiranje kalendara** za sve radne centre i pritiskom na tipku **Traži**, ručno odabrati radne centre za koje se želi kreirati kalendar.

Tijekom kreiranja moguće je odlučiti hoće li se uzeti u obzir postotak iskorištenosti definiran unutar radnog centra.

*Specifična tipka*:  
> **Automatsko generiranje:**: omogućuje otvaranje prozora u kojem se postavljaju parametri za generiranje zajedničkog kalendara za više radnih centara s istim parametrima za sve mjesece u godini.
Nakon što se unesu parametri zajedničkog kalendara, pomoću ove tipke može se pokrenuti njegovo stvarno kreiranje.  

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).