---
title: Pridruživanje tipa prodajnog cjenika
sidebar_position: 1
---

Ova procedura prikazuje povezanosti prodajnih cjenika s komercijalnim kategorijama.
U prvoj tablici prikazane su postojeće veze između grupa cjenika i komercijalnih kategorija. Ta povezanost određuje da skup vrsta cjenika(/docs/configurations/tables/sales/sales-price-lists) definiran u vezi vrijedi za odabranu komercijalnu kategoriju.
U drugoj tablici moguće je definirati popuste koji vrijede za vezu odabranu u prvoj tablici.
Dvostrukim klikom na redak u prvoj tablici otvara se obrazac za uređivanje veze.

U gornjem dijelu obrasca nalazi se polje **Vrsta pridruživanja**, koje se sastoji od:
- šifre
- opisa
- datuma početka važenja koji će se predlagati u cjenicima

Dostupni su i gumbi za definiranje prioriteta i popusta na stavkama cjenika.
U tablici ispod definiraju se vrste cjenika koje pripadaju ovoj vezi.
Vrste cjenika moguće je:

- unositi ručno
- automatski predložiti pomoću gumba **Predloži generalne cjenike**

Oznaka **Zadano** određuje koja je od navedenih vrsta cjenika zadana.

Oznaka **Vlastito** omogućuje korištenje personaliziranog cjenika definiranog na kartici kupca kada kupac ima dodijeljenu ovu vezu.

Nakon definiranja, skup vrsta cjenika uključenih u vezu postaje važeći za odabranu komercijalnu kategoriju.

Ako je potrebno masovno povezati ove vrste cjenika s karticama kupaca, koristi se procedura **Pridruživanje cjenika kupaca prema komercijalnoj kategoriji**(/docs/sales/sales-price-list/procedures/category-association).
