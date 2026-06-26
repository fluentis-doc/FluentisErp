---
title: Kreiranje elektronskog računa
sidebar_position: 2
---

Na ovoj stranici opisani su:

- **Izdavanje elektronskih računa za B2B i javni sektor (PA)**
- **Upravljanje digitalnim potpisom**
- **Postupak kreiranja računa za korisnike koji ne koriste FBH servis**

Za kreiranje elektronskog računa između poslovnih subjekata (B2B) ili prema javnoj upravi (B2G), potrebno je najpre kreirati izlazni račun uobičajenim Fluentis procedurama, a zatim nastaviti sa generisanjem odgovarajuće XML datoteke kroz predviđeni tok rada.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

Generisanje XML datoteke odvija se kroz više statusa dokumenta.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

Novoizrađeni račun dobija status **Nije proveren**.

Sledeći status, **Provera dokumenta**, potvrđuje da je dokument kreiran i automatski proverava da li su prisutni svi obavezni podaci.

Nakon uspešne provere moguće je, preko statusa **Generiši**, kreirati XML datoteku računa.

Obratite pažnju na dva posebna statusa:

- **Poništi dokument** – dokument se neće poslati krajnjem kupcu, ali ostaje važeći za potrebe obračuna PDV-a.
- **Izuzmi dokument** – koristi se za dokumente koji po svojoj prirodi ne ulaze u proces elektronskog fakturisanja.

Nakon statusa **Generisano** moguće je dodeliti status **Za slanje**. Ovaj status automatski pokreće obradu datoteke u **Fluentis Business Hub-u (FBH)** i njeno slanje SDI sistemu.

Nakon što FBH preuzme dokument, status se automatski menja najpre u **U Fluentis Business Hub-u**, a zatim u **U SDI-ju**, kada server prosledi datoteku SDI sistemu.

Za praćenje promena statusa dovoljno je kliknuti na dugme za osvežavanje.

![](/img/neutral/common/search.png)

> **Napomena:** Nakon prelaska u status **Za slanje**, račun više nije moguće menjati niti vraćati u prethodno stanje. Potrebno je sačekati odgovor SDI sistema o ishodu obrade.

## Upravljanje digitalnim potpisom

Ako je potrebno digitalno potpisivanje XML datoteke, potrebno je aktivirati opciju **Digitalni potpis** na nivou korisnika ili u tabeli preduzeća.

U tom slučaju nakon faze generisanja pojavljuje se dodatni status.

Kada dokument dobije status **Generisano**, kopija XML datoteke automatski se kreira u spoljašnjoj fascikli definisanoj prilikom konfiguracije elektronskog fakturisanja. Datoteku je zatim potrebno potpisati odgovarajućim softverom za digitalni potpis.

Status **Potpiši dokument** služi za ponovno učitavanje digitalno potpisane datoteke u **.p7m** formatu.

## Postupak za korisnike koji ne koriste FBH servis

Korisnici koji koriste druga rešenja za slanje elektronskih računa prema SDI sistemu mogu jednostavno preuzeti XML datoteku i poslati je preko željenog kanala.

Klikom na dugme

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png)

moguće je preuzeti XML datoteku kada se dokument nalazi u statusu **Generisano**.

Ipak, preporučuje se da se dokument prethodno prebaci u status **Za slanje**, kako bi se sprečile eventualne naknadne izmene XML datoteke.