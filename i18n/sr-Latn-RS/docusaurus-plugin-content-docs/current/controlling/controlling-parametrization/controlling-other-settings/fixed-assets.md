---
title: Šifarnici osnovnih sredstava
sidebar_position: 7
---

Prvi korak je definisati da li će se primjenjivati isključivo računovodstvene logike ili će se controlling odvojiti od njih i koristiti drugačije kriterijume.

U prvom slučaju potrebno je otvoriti ***Parametre modula osnovnih sredstava*** i aktivirati opciju *Omogući računovodstveni centar*.

Sa ovom opcijom u kategorijama osnovnih sredstava biće dostupna tabela sa unaprijed definisanim *Centrima troškova*, dok će u zaglavlju biti vidljiva tabela za dodjelu *Centara troškova* pojedinačnom sredstvu.

U obje tabele moguće je definisati listu centara koji će se koristiti zajedno sa pripadajućim procentom raspodjele.

Prilikom kreiranja računovodstvenih izvještaja putem ***privremenih zatvaranja***, unutar procedure *Povrat amortizacije osnovnog sredstva*, bira se zatvaranje, a ***Fluentis ERP*** obračunava amortizaciju na osnovu broja dana u periodu zatvaranja, koristeći procente kategorije kako bi ih rasporedio po centrima prema sljedećem prioritetu: prvo se koriste centri definisani u zaglavlju osnovnog sredstva, zatim centri definisani na nivou kategorije osnovnog sredstva, pa centri definisani na troškovnom kontu u kontnom planu.

Ako preduzeće ima aktiviran *Controlling* i želi se odvojiti od računovodstvenih logika, opcija *Omogući računovodstveni centar* neće biti aktivirana. Tada će centri nestati iz kategorija i zaglavlja osnovnih sredstava, a kartica ***Postavke za controlling*** postaće obavezna kako bi bilo moguće sačuvati osnovno sredstvo.

Ako se otvori kartica amortizacije za controlling u matičnim podacima osnovnog sredstva, biće dostupna sljedeća polja:

- ***KATEGORIJA OSNOVNOG SREDSTVA ZA CONTROLLING***, obavezno polje koje postavlja podrazumijevane vrijednosti za ostala polja.
- ***OTKUPNA VRIJEDNOST***, ukoliko je predviđena u osnovici obračuna.
- ***UKUPNA KOLIČINA*** koju osnovno sredstvo može obraditi tokom svog vijeka trajanja.
- ***FIZIČKA MJERNA JEDINICA***.

:::tip NAPOMENA
Obračun zasnovan na količini uzima osnovicu amortizacije i dijeli je ukupnom količinom kako bi se dobila jedinična amortizacija. Zatim se, na osnovu proizvedenih količina u određenom periodu (podaci koji se najčešće preuzimaju iz ***proizvodnih podataka***), dobija vrijednost amortizacije za taj period.
:::

- ***OSNOVICA ZA OBRAČUN*** preuzeta iz odgovarajuće kategorije, ali se može mijenjati na nivou pojedinačnog osnovnog sredstva.
- ***TIP OBRAČUNA*** preuzet iz odgovarajuće kategorije, ali se može mijenjati na nivou pojedinačnog osnovnog sredstva.
- ***PROCENAT ZA CONTROLLING*** primjenjuje se kada je tip obračuna zasnovan na procentualnim logikama; predlaže se iz kategorije, ali ga je moguće izmijeniti.
- opcija ***ZA AŽURIRANJE PROCENTA***.
- opcija ***ZA PONOVNO GENERISANJE VRIJEDNOSTI IZ CONTROLLINGA***.

Posljednje dvije opcije preuzimaju se iz odgovarajuće kategorije, ali služe za definisanje podrazumijevanih vrijednosti pojedinačnog osnovnog sredstva, jer se ono može razlikovati od postavki kategorije.

U donjoj tabeli definišu se ***CENTRI TROŠKOVA*** kojima će biti dodijeljena amortizacija osnovnog sredstva, a postoji i mogućnost dodjele ***PROJEKTA*** na koji će se amortizacija direktno knjižiti.

Polja ***PERIOD*** i ***GODINA*** biće dostupna samo ako je amortizacija postavljena kao ukupna za godinu, što omogućava određivanje godine ili konkretnog perioda u kojem će trošak biti u potpunosti knjižen.

:::tip NAPOMENA
Unutar modula osnovnih sredstava dostupna je funkcija *Provjera podataka za controlling*. Ova funkcija, slična standardnoj pretrazi osnovnih sredstava, omogućava pronalaženje sredstava koja nemaju ispravno povezane centre troškova na kartici amortizacije za *controlling*. Otvaranjem prvog zapisa na listi moguće je vidjeti da ima procenat 0, što znači da neće imati obračunatu amortizaciju. Greška može biti i u tome što nije dodijeljen nijedan centar troškova ili što je faktor množenja postavljen na 0.
:::