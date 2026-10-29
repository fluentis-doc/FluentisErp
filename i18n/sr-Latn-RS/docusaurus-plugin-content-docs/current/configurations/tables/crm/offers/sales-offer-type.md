---
title: Tipovi ponuda
sidebar_position: 1
---

Tabela se koristi za definisanje svojstava prodajne ponude.

Obrazac se sastoji od oblasti za filtriranje i oblasti sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Šifra/Opis:** polja u koja se unose šifra i opis tipa dokumenta (uneta šifra mora biti jedinstvena).

**Upravljanje verzijama:** ova oznaka određuje tipove ponuda za koje se upravlja verzijama.

**Cena sa PDV-om:** omogućava sistemu da preuzme prodajnu cenu iz cenovnika ili šifarnika artikala i prikaže je sa uključenim PDV-om. Ako cenovnik nije pronađen, na primer zato što mu je istekao rok važenja ili je izražen u nekompatibilnoj valuti, sistem preuzima troškove ili cene iz šifarnika artikala i prikazuje ih sa uključenim PDV-om. Troškovi i cene u šifarniku izraženi su u evrima, pa će ih sistem takođe preračunati u valutu kupca.

**Numerisanje:** u ovo polje unosi se odgovarajuća šifra numerisanja. Za više informacija o numerisanju dokumenata pogledajte članak [Fluentis numerisanje](/docs/configurations/tables/fluentis-numerations).

**Tip narudžbine kupca:** u ovom polju navodi se tip prodajne narudžbine koja će biti kreirana prilikom konvertovanja ponude odgovarajućim postupkom.

**Prodajni cenovnik:** ovaj opšti tip cenovnika koristi se za preuzimanje cena ako na kartici Cenovnici u šifarniku kupca ili kontakta nije definisan nijedan tip cenovnika. Obično se koristi pri izradi ponuda za CRM kontakte koji još nisu postali kupci i za koje na kartici Cenovnici u šifarniku nisu definisani tipovi cenovnika.

**Štampa i broj primeraka:** ovim poljima definišu se podrazumevani obrazac za štampu i broj primeraka. Napominjemo da je za štampanje podrazumevanog obrasca potrebno izabrati opciju *Višestruke štampe* prilikom štampanja.

**Tip prototipa artikla:** ovo polje sadrži tip prototipa artikla koji će biti kreiran postupkom izrade prototipa unutar ponude.

**Tip prodajne prilike:** ako se uz tip ponude poveže tip prodajne prilike, prilikom čuvanja ponude kreira se nova prodajna prilika ako u zaglavlju ponude nije navedena postojeća. Ako je navedena postojeća prodajna prilika, ona će biti ažurirana.

**Upravljanje osnovnim sredstvima i tip operacije:** ova oznaka omogućava upravljanje osnovnim sredstvima za navedeni tip dokumenta. U sledećem polju navodi se tip operacije nad osnovnim sredstvima, koji u slučaju prodaje može biti potpuno ili delimično otuđenje ili uništenje.

**Tip popusta/Opis:** u ovoj koloni može se povezati tip popusta koji će biti predložen kada se popusti unose direktno u kolonu *Popusti artikla* u tabeli artikala dokumenta. Za više pojedinosti pogledajte članak [Upravljanje pojednostavljenim vidžetom za popuste](/docs/sales/sales-flow/discount-widget).