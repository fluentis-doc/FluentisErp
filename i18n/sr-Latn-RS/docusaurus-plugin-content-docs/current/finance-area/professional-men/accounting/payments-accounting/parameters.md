---
title: Parametri
sidebar_position: 3
---

Na ovoj kartici definišu se glavni računovodstveni parametri postupka:

- datum knjiženja i datum obračunskog perioda,
- obrazac knjiženja za plaćanje koji će se koristiti,
- podkonto banke koji će biti zadužen,
- podkonto za evidentiranje obaveze poreza po odbitku (nije obavezan; ukoliko nije definisan, koristiće se podkonto određen u vrsti poreza po odbitku).

Opcija **Zatvaranje otvorenih stavki**, koja je podrazumevano uključena, ne treba da se isključuje jer je neophodna za pravilno zatvaranje otvorenih stavki.

Predviđene su sledeće mogućnosti grupisanja:

- **Pojedinačno zapisivanje** (podrazumevana opcija, bez uključene opcije **Grupiši konta**): sistem će kreirati jedno računovodstveno knjiženje sa jednom stavkom banke (radi lakšeg usklađivanja sa bankovnim izvodom), dok će ostali podkonti biti prikazani zasebno za svaku naknadu, što omogućava detaljniju kontrolu knjiženja na kontu poreza po odbitku. Ako je uključena i opcija **Grupiši konta**, grupisaće se i knjiženja ostalih podkonta sa istim vrednostima.
- **Nema grupisanja**: za svaku naknadu kreira se zasebno računovodstveno knjiženje.
- **Grupiši po podkontu**: knjiženja će biti grupisana po primaocu naknade.

&nbsp;

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)

&nbsp;

Sledeća sekcija, koja se aktivira opcijom **Automatsko kreiranje plaćanja dobavljačima**, omogućava kreiranje naloga za plaćanje u modulu **[Plaćanja dobavljačima](/docs/treasury/vendors-payments/create-vendor-payments)**, radi njegovog štampanja i elektronskog slanja naloga za bankarske transfere putem elektronskog bankarstva.

Potrebno je definisati sledeće podatke:

- vrstu plaćanja naloga,
- broj bankovnog računa (automatski se predlaže iz matičnih podataka povezanih sa podkontom banke izabranim u gornjem delu forme),
- datum izdavanja naloga za plaćanje,
- po potrebi datum valute za primaoca (ukoliko je aktivirana odgovarajuća opcija),
- završnu napomenu koja će biti evidentirana u računovodstvu uz stavku banke.

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)

&nbsp;

| Funkcija | Značenje |
| --- | --- |
| Knjiženje plaćanja | Izvršava knjiženje izabranih plaćanja. |