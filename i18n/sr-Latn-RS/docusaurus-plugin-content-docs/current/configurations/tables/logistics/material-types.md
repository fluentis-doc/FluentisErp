---
title: Tipovi materijala
sidebar_position: 6
---

Tabela se nalazi na putanji **Tabele > Logistika > Tipovi materijala**.

U ovoj tabeli moguće je upravljati šifriranjem različitih *tipova materijala* ambalaže koji se koriste u okviru [CONAI upravljanja](/docs/sales/sales-flow/conai).

Omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmene ili brisanja.

**Pretraživanje tipova materijala**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos tipova materijala**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

U gornjoj tabeli šifriraju se *tipovi materijala*. Obavezna polja koja sistem zahteva su: **Šifra** i **Opis**.

#### Specifična polja

> **CONAI šifra materijala**: alfanumerička šifra koja označava tip materijala od kojeg je ambalaža sastavljena (npr. čelik, aluminijum, papir, drvo, plastika itd.);

> **Klasa artikla**: označava [Klasu](/docs/configurations/tables/logistics/item-class) kojoj pripada artikal;

> **Artikal za reciklažnu naknadu**: označava fiktivnu šifru artikla koja se koristi za unos reda *CONAI trošak* na otpremnici/fakturi (ako šifra artikla nije navedena, materijal neće biti validan za CONAI konfiguraciju u artiklima prodaje/nabavke);

> **Opis artikla**: opis *artikla za reciklažnu naknadu*;

> **Napomene**: slobodne napomene.

U donjoj tabeli moguće je definisati *troškove reciklaže* povezane sa pojedinačnim materijalima unetim u gornjoj tabeli, odnosno tarife koje se primenjuju u okviru različitih *raspona datuma*, zajedno sa **Mernom jedinicom** koja se mora koristiti. Ta merna jedinica mora biti usklađena sa mernom jedinicom definisanom u prodajnim artiklima i fiktivnim CONAI artiklima.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na funkcionisanje *CONAI upravljanja* u Fluentisu, pogledajte sledeću poveznicu [CONAI upravljanje](/docs/sales/sales-flow/conai).