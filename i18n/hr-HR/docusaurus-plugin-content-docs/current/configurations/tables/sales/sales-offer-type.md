---
title: Tipovi ponuda
sidebar_position: 23
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate izvršiti ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica se otvara putem izbornika **Tablice > Prodaja > Tipovi ponuda (kupaca)**.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za unos novih zapisa potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

**Šifra/Opis:** polja u koja se unose šifra i opis vrste dokumenta (unesena šifra mora biti jedinstvena).

**Struktura hijerarhije:** uključivanjem ove opcije artikli u ponudi slijedit će hijerarhijsku strukturu. Za više pojedinosti pogledajte odgovarajuću [dokumentaciju](/docs/sales/offers/insert-offer).

**Izmjena verzije:** ova opcija označava vrste ponuda za koje se upravlja verzijama.

**Cijena s PDV-om:** omogućuje sustavu dohvat prodajne cijene iz cjenika ili šifarnika artikala te njezin prikaz s uključenim PDV-om. Ako cjenik nije pronađen, primjerice zbog isteka njegove valjanosti ili nekompatibilnosti valute cjenika, sustav dohvaća troškove ili cijene iz šifarnika artikala i prikazuje ih s uključenim PDV-om. Troškovi i cijene u šifarniku izraženi su u EUR-ima pa ih sustav dodatno preračunava u valutu kupca.

**Numeracija:** u ovo polje potrebno je unijeti odgovarajuću šifru numeracije. Za više informacija o numeraciji dokumenata pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Tip narudžbe kupca:** u ovo polje unosi se [vrsta prodajne narudžbe](/docs/configurations/tables/sales/sales-order-types) koja će se kreirati prilikom pretvaranja ponude odgovarajućim postupkom.

**Prodajni cjenik:** ovaj cjenik opće namjene koristi se za dohvat cijena u slučaju kada na kartici Cjenici u šifarniku kupca ili kontakta nije unesena nijedna vrsta cjenika. Obično se koristi prilikom izrade ponuda za CRM kontakte koji još nisu postali kupci i za koje vrste cjenika nisu unesene na kartici Cjenici u šifarniku.

**Izvještaji i broj kopija:** ovim poljima definiraju se zadani ispis i broj kopija za ispis. Napominjemo da je za korištenje zadanog ispisa potrebno odabrati opciju *Višestruki ispisi* prilikom ispisa.

**Vrsta prototipa artikla:** ovo polje sadrži vrstu prototipa artikla koju je potrebno kreirati postupkom izrade prototipa unutar ponude.

**Vrsta mogućnosti:** ako je uz vrstu ponude povezana [vrsta prilike](/docs/configurations/tables/crm/opportunities/opportunity-type), prilikom spremanja ponude kreirat će se [nova prilika](/docs/crm/chance/new-chance) ako u zaglavlju ponude nije unesena već postojeća prilika. Ako je postojeća prilika unesena, ona će se ažurirati.

**Osnovna sredstva i vrsta operacije:** ova opcija omogućuje upravljanje osnovnim sredstvima za ovu vrstu dokumenta. U sljedećem polju navodi se vrsta operacije nad osnovnim sredstvima koja u slučaju prodaje može biti potpuno ili djelomično otuđenje ili uništenje.

**Vrsta popusta/Opis:** u ovom stupcu moguće je povezati vrstu popusta koja će se predložiti prilikom izravnog unosa popusta u stupac *Popusti artikla* u tablici artikala dokumenta. Za više pojedinosti pogledajte članak [Upravljanje pojednostavnjenim widgetom za popuste](/docs/sales/sales-flow/discount-widget).

**Upravljanje WEEE-om:** ova opcija omogućuje upravljanje [WEEE-om](/docs/sales/sales-flow/raee) za ovu vrstu dokumenta.