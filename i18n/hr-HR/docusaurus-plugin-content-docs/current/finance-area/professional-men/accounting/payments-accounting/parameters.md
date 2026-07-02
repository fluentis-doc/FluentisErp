---
title: Parametri
sidebar_position: 3
---

Na ovoj kartici definiraju se glavni računovodstveni parametri postupka:

- datum knjiženja i datum obračunskog razdoblja,
- računovodstveni predložak za plaćanje koji će se koristiti,
- podkonto banke koji će se teretiti,
- podkonto za evidentiranje obveze poreza po odbitku (nije obvezan; ako nije definiran, koristit će se podkonto određen u vrsti poreza po odbitku).

Oznaka Zatvaranje otvorenih stavaka, koja je prema zadanim postavkama uključena, ne smije se isključivati, jer je potrebna za pravilno zatvaranje otvorenih stavaka.

Predviđene su sljedeće mogućnosti grupiranja:

- **Pojedinačno zapisivanje** (zadana opcija, bez oznake Grupiraj konta): sustav će kreirati jedno računovodstveno knjiženje s jednom stavkom banke (radi lakšeg usklađivanja s bankovnim izvodom), dok će ostala podkonta biti iskazana zasebno za svaku naknadu, što omogućuje detaljniju kontrolu knjiženja na kontu poreza po odbitku. Ako je aktivirana i oznaka Grupiraj konta, grupirat će se i knjiženja ostalih podkonta s istim vrijednostima.
- **Nema grupiranja**: za svaku naknadu kreira se zasebno računovodstveno knjiženje.
- **Grupiraj po podkontu**: knjiženja će biti grupirana po primatelju naknade.

 

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)

 

Sljedeća sekcija, koja se aktivira oznakom Automatsko kreiranje plaćanja dobavljačima, omogućuje kreiranje naloga za plaćanje u modulu **[Plaćanja dobavljača](/docs/treasury/vendors-payments/create-vendor-payments)**, radi njegova ispisa i elektroničkog slanja naloga za bankovne transfere putem internetskog bankarstva.

Potrebno je definirati sljedeće podatke:
- vrstu plaćanja naloga,
- broj bankovnog računa (automatski se predlaže iz matičnih podataka povezanih s podkontom banke odabranim u gornjem dijelu obrasca),
- datum izdavanja naloga za plaćanje,
- po potrebi, datum valute za primatelja (ako je aktivirana odgovarajuća oznaka),
- završnu napomenu koja će se evidentirati u računovodstvu uz stavku banke.



![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)

 



| Funkcija | Značenje |
| --- | --- |
| Knjiženje plaćanja | Obavlja knjiženje odabranih plaćanja. |






