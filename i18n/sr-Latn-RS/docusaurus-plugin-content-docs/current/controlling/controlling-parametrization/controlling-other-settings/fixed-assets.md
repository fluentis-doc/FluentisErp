---
title: Šifrarnici osnovnih sredstava 
sidebar_position: 7
---

Prvi korak je definirati hoće li se primjenjivati isključivo računovodstvene logike ili će se kontroling odvojiti od njih i koristiti drugačije kriterije. 

U prvom slučaju potrebno je otvoriti ***Parametre modula osnovnih sredstava*** i aktivirati flag *Omogućavanje računovodstvenog centra*. S ovom opcijom u kategorijama osnovnih sredstava bit će dostupna tablica s unaprijed definiranim *Centrima troškova* dok će u zaglavlju biti vidljiva tablica za dodjelu *Centara troškova* pojedinačnoj imovini. U obje tablice moguće je definirati popis centara koji će se koristiti uz pripadajući postotak dodjele. Prilikom kreiranja računovodstvenih izvještaja putem ***privremenih zatvaranja***, unutar procedure *Povrat amortizacije osnovnog sredstva*, odabire se zatvaranje i ***FluentisERP*** izračunava amortizaciju na temelju broja dana u razdoblju zatvaranja, koristeći postotke kategorije kako bi ih rasporedio po centrima prema sljedećem prioritetu: prvo su to centri definirani u zaglavlju osnovnog sredstva, zatim centri definirani na razini kategorije osnovnog sredstva pa centri definirani na kontu troška u kontnom planu.

Ako poduzeće ima aktiviran *Kontroling* i želi se odvojiti od računovodstvenih logika, neće se postaviti flag *Omogućavanje računovodstvenog centra*Time će centri nestati iz kategorija i zaglavlja osnovnih sredstava, a postat će obavezna kartica ***Postavke za kontroling*** kako bi se omogućilo spremanje osnovnog sredstva. 

Ako se otvori kartica amortizacije za kontroling u matičnim podacima osnovnog sredstva, bit će dostupna sljedeća polja:  

- ***KATEGORIJA DUGOTRAJNE IMOVINE ZA KONTROLING***, obavezno polje koje postavlja zadane vrijednosti za ostala polja

- ***OTKUPNA VRIJEDNOST*** ako je predviđena u osnovi izračuna

- ***UKUPNA KOLIČINA*** koju osnovno sredstvo može obraditi tijekom svog vijeka trajanja

- ***FIZIČKA MJERNA JEDINICA***

:::tip NAPOMENA
Izračun temeljen na količini uzima osnovu amortizacije i dijeli je s ukupnom količinom kako bi se dobila jedinična amortizacija. Zatim se, na temelju proizvedenih količina u pojedinom razdoblju (podaci koji se obično preuzimaju iz ***proizvodnih podataka***) dobiva vrijednost amortizacije za razdoblje.
:::

- ***BAZA ZA IZRAČUN*** preuzeta iz pripadajuće kategorije, ali se može mijenjati na razini pojedinačnog osnovnog sredstva

- ***TIP IZRAČUNA*** preuzet iz pripadajuće kategorije, ali se može mijenjati na razini pojedinačnog osnovnog sredstva

- ***POSTOTAK ZA KONTROLING*** primjenjuje se kada je vrsta izračuna vezana uz postotne logike; predložena je iz kategorije, ali se može mijenjati 

- flag ***ZA AKTUALIZACIJU POSTOTKA***

- flag ***ZA PONOVNO GENERIRANJE VRIJEDNOSTI IZ KONTROLINGA***

Posljednja dva flaga preuzimaju se iz pripadajuće kategorije, ali njihova svrha je definiranje zadanih vrijednosti za pojedino osnovno sredstvo, jer se ona može razlikovati od postavki kategorije. 

U donjoj tablici definiraju se ***CENTRI TROŠKOVA*** kojima će se dodijeliti amortizacija osnovnog sredstva, a postoji i mogućnost dodjele ***PROJEKTA*** na koji će se amortizacija izravno knjižiti. 

Polja ***PERIODA*** i ***GODINA*** bit će omogućena samo ako je amortizacija postavljena kao ukupna za godinu, što omogućuje određivanje godine ili specifičnog razdoblja u kojem će se trošak potpuno knjižiti.

:::tip NAPOMENA
Unutar modula osnovnog sredstva dostupna je funkcija *Provjera podataka za kontroling*. Ova funkcija, slična standardnoj pretrazi osnovnih sredstava, omogućuje pronalaženje sredstva koje nema ispravno povezane centre troškova u kartici Amortizacija za *kontroling*. Ako se otvori prvi unos na popisu, moguće je vidjeti da ima postotak 0, što znači da neće imati nikakvu amortizaciju. Pogreška može biti i u tome što nije dodan nijedan centar troškova ili da je faktor množenja 0. 
:::
