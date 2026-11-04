---
title: Tipovi ponuda
sidebar_position: 23
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da izvršite ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela se otvara putem menija **Tablice > Prodaja > Tipovi ponuda (kupaca)**.

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Šifra/Opis:** polja u koja se unose šifra i opis tipa dokumenta (uneta šifra mora biti jedinstvena).

**Hijerarhijska struktura:** uključivanjem ove opcije artikli u ponudi pratiće hijerarhijsku strukturu. Za više detalja pogledajte odgovarajuću [dokumentaciju](/docs/sales/offers/insert-offer).

**Izmena verzije:** ova opcija označava tipove ponuda za koje se upravlja verzijama.

**Cena sa PDV-om:** omogućava sistemu da preuzme prodajnu cenu iz cenovnika ili šifarnika artikala i prikaže je sa uključenim PDV-om. Ako cenovnik nije pronađen, na primer zbog isteka njegovog važenja ili nekompatibilnosti valute cenovnika, sistem preuzima troškove ili cene iz šifarnika artikala i prikazuje ih sa uključenim PDV-om. Troškovi i cene u šifarniku izraženi su u EUR-ima, pa ih sistem dodatno preračunava u valutu kupca.

**Numeracija:** u ovo polje potrebno je uneti odgovarajuću šifru numeracije. Za više informacija o numeraciji dokumenata pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Tip narudžbine kupca:** u ovo polje unosi se [tip prodajne narudžbine](/docs/configurations/tables/sales/sales-order-types) koji će biti kreiran prilikom pretvaranja ponude odgovarajućim postupkom.

**Prodajni cenovnik:** ovaj cenovnik opšte namene koristi se za preuzimanje cena u slučaju kada na kartici Cenovnici u šifarniku kupca ili kontakta nije unet nijedan tip cenovnika. Obično se koristi prilikom izrade ponuda za CRM kontakte koji još nisu postali kupci i za koje tipovi cenovnika nisu uneti na kartici Cenovnici u šifarniku.

**Izveštaji i broj kopija:** ovim poljima definišu se podrazumevani ispis i broj kopija za štampanje. Napominjemo da je za korišćenje podrazumevanog ispisa potrebno odabrati opciju *Višestruki ispisi* prilikom štampanja.

**Tip prototipa artikla:** ovo polje sadrži tip prototipa artikla koji je potrebno kreirati postupkom izrade prototipa unutar ponude.

**Tip prilike:** ako je uz tip ponude povezan [tip prilike](/docs/configurations/tables/crm/opportunities/opportunity-type), prilikom čuvanja ponude kreiraće se [nova prilika](/docs/crm/chance/new-chance) ako u zaglavlju ponude nije uneta već postojeća prilika. Ako je postojeća prilika uneta, ona će biti ažurirana.

**Osnovna sredstva i tip operacije:** ova opcija omogućava upravljanje osnovnim sredstvima za ovaj tip dokumenta. U sledećem polju navodi se tip operacije nad osnovnim sredstvima koja u slučaju prodaje može biti potpuno ili delimično otuđenje ili uništenje.

**Tip popusta/Opis:** u ovoj koloni moguće je povezati tip popusta koji će biti predložen prilikom direktnog unosa popusta u kolonu *Popusti artikla* u tabeli artikala dokumenta. Za više detalja pogledajte članak [Upravljanje pojednostavljenim vidžetom za popuste](/docs/sales/sales-flow/discount-widget).

**Upravljanje WEEE-om:** ova opcija omogućava upravljanje [WEEE-om](/docs/sales/sales-flow/raee) za ovaj tip dokumenta.