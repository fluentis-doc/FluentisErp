---
title: Tipovi ponuda
sidebar_position: 1
---

Tablica se koristi za definiranje svojstava prodajne ponude.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

Za unos novih zapisa potrebno je kliknuti na prvi prazan redak u tablici ili pritisnuti gumb **Novo**.

**Šifra/Opis:** polja u koja se unose šifra i opis vrste dokumenta (unesena šifra mora biti jedinstvena).

**Upravljanje verzijama:** ova oznaka određuje vrste ponuda za koje se upravlja verzijama.

**Cijena s PDV-om:** omogućuje sustavu dohvat prodajne cijene iz cjenika ili šifarnika artikala te njezin prikaz s uključenim PDV-om. Ako cjenik nije pronađen, primjerice zato što je istekao ili je izražen u nekompatibilnoj valuti, sustav dohvaća troškove ili cijene iz šifarnika artikala i prikazuje ih s uključenim PDV-om. Troškovi i cijene u šifarniku izraženi su u EUR-ima, pa će ih sustav također preračunati u valutu kupca.

**Numeriranje:** u ovo polje unosi se odgovarajuća šifra numeriranja. Za više informacija o numeriranju dokumenata pogledajte članak [Fluentis numeracija](/docs/configurations/tables/fluentis-numerations).

**Vrsta narudžbe kupca:** u ovom se polju navodi vrsta prodajne narudžbe koja će se izraditi prilikom pretvaranja ponude odgovarajućim postupkom.

**Prodajni cjenik:** ova opća vrsta cjenika koristi se za dohvat cijena ako na kartici Cjenici u šifarniku kupca ili kontakta nije definirana nijedna vrsta cjenika. Obično se koristi pri izradi ponuda za CRM kontakte koji još nisu postali kupci i za koje na kartici Cjenici u šifarniku nisu definirane vrste cjenika.

**Ispis i broj primjeraka:** ovim se poljima definiraju zadani ispis i broj primjeraka za ispis. Napominjemo da je za ispis zadanog obrasca potrebno odabrati opciju *Višestruki ispisi* prilikom ispisa.

**Vrsta prototipa artikla:** ovo polje sadrži vrstu prototipa artikla koji će se izraditi postupkom izrade prototipa unutar ponude.

**Vrsta prodajne prilike:** ako se uz vrstu ponude poveže vrsta prodajne prilike, prilikom spremanja ponude stvara se nova prodajna prilika ako u zaglavlju ponude nije navedena postojeća. Ako je postojeća prodajna prilika navedena, ona će se ažurirati.

**Upravljanje osnovnim sredstvima i vrsta operacije:** ova oznaka omogućuje upravljanje osnovnim sredstvima za navedenu vrstu dokumenta. U sljedećem se polju navodi vrsta operacije nad osnovnim sredstvima koja u slučaju prodaje može biti potpuno ili djelomično otuđenje ili uništenje.

**Vrsta popusta/Opis:** u ovom se stupcu može povezati vrsta popusta koja će se predložiti kada se popusti unose izravno u stupac *Popusti artikla* u tablici artikala dokumenta. Za više pojedinosti pogledajte članak [Upravljanje pojednostavljenim widgetom za popuste](/docs/sales/sales-flow/discount-widget).