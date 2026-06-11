---
title: Pridruživanje tipa prodajnog cenovnika
sidebar_position: 1
---

Ova procedura prikazuje povezanosti prodajnih cenovnika sa komercijalnim kategorijama.
U prvoj tabeli prikazane su postojeće veze između grupa cenovnika i komercijalnih kategorija. Ta povezanost određuje da skup vrsta cenovnika(/docs/configurations/tables/sales/sales-price-lists) definisan u vezi važi za odabranu komercijalnu kategoriju.
U drugoj tabeli moguće je definisati popuste koji važe za vezu odabranu u prvoj tabeli.
Dvostrukim klikom na red u prvoj tabeli otvara se obrazac za uređivanje veze.

U gornjem delu obrasca nalazi se polje **Vrsta pridruživanja**, koje se sastoji od:
- šifre
- opisa
- datuma početka važenja koji će se predlagati u cenovnicima

Dostupna su i dugmad za definisanje prioriteta i popusta na stavkama cenovnika.
U tabeli ispod definišu se vrste cenovnika koje pripadaju ovoj vezi.
Vrste cenovnika moguće je:

- unositi ručno
- automatski predložiti pomoću dugmeta **Predloži opšte cenovnike**

Oznaka **Podrazumevano** određuje koja je od navedenih vrsta cenovnika podrazumevana.

Oznaka **Vlastito** omogućava korišćenje personalizovanog cenovnika definisanog na kartici kupca kada kupac ima dodeljenu ovu vezu.

Nakon definisanja, skup vrsta cenovnika uključenih u vezu postaje važeći za odabranu komercijalnu kategoriju.

Ako je potrebno masovno povezati ove vrste cenovnika sa karticama kupaca, koristi se procedura **Pridruživanje cenovnika kupaca prema komercijalnoj kategoriji**(/docs/sales/sales-price-list/procedures/category-association).