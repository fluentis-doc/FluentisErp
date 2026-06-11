---
title: Pretraga narudžbi
sidebar_position: 1
---

Obrazac se otvara putem **Prodaja > Narudžbe kupaca > Narudžbe kupaca**.

Omogućava pretragu svih dokumenata radi pregleda, izmene, brisanja ili unosa novog dokumenta; prozor se sastoji od područja za filtriranje i prikaza rezultata.

Nakon postavljanja svih željenih filtera, dovoljno je kliknuti na dugme **Traži** u *gornjem meniju* kako biste videli rezultate unutar prikaza rezultata.

Za otvaranje detalja dokumenta, dovoljno je odabrati ga i dvaput kliknuti mišem ili kliknuti na dugme **Izmeni** (omogućava ulazak u detalje i izmenu) ili na dugme **Prikaži** (omogućava ulazak u detalje, ali bez mogućnosti izmene).

*Vidi takođe*:  
[Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)              
Dodavanje novih polja u obrasce pretrage

Iz ove forme takođe možete kreirati novu narudžbu pritiskom na dugme **Novo**.

#### Posebna dugmad

> **Dupliraj narudžbe**: dugme za dupliranje narudžbe. Omogućava kreiranje kopije dokumenta, zadržavajući sve uslove izvornog dokumenta, ali sa trenutnim podacima. Koristi se za čest unos narudžbi istom klijentu. Klikom na dugme pojaviće se iskačući prozor u kojem je potrebno definisati vrstu narudžbe koju želite generisati i potvrditi operaciju pritiskom na dugme **OK**.    
> **Svojstva**: dugme koje omogućava otvaranje obrasca **Status izvršenja** unutar kojeg se može videti stanje izvršenja različitih redova artikala. Za svaki red videće se **Naručena količina**, **Potvrđena količina** (proizvedena) i eventualna **Preostala količina**. Ako je red već izvršen, njegovim odabirom i postavljanjem parametara u sekciji Područja moguće je videti povezani dokument izvršenja (Otpremnica ili račun).

#### Specifične procedure

> [Izvršenje otpremnice/prijemnice](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn): procedura omogućava kreiranje otpremnice direktno iz jedne ili više narudžbi kupaca; da bi se koristila ova procedura, potrebno je podesiti parametre unutar tabele [Vrste narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Otpremnica se može kreirati automatski samo ako je narudžba odštampana i potvrđena. Kada se pritisne dugme za izvršenje, sistem će kreirati otpremnicu (koju možete pregledati i izmeniti u prozoru [Pretraga otpremnica prodaje](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn)) i narudžba će automatski promeniti svoj status u Izvršeno, Delimično izvršeno ili Prisilno izvršeno.  
> [Izvršenje računa](/docs/sales/sales-invoices/invoicing/sales-invoice): procedura omogućava kreiranje računa direktno iz jedne ili više narudžbi kupaca; da bi se koristila ova procedura, potrebno je podesiti parametre unutar tabele [Vrste narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Račun se može kreirati automatski samo ako je narudžba odštampana i potvrđena. Kada se pritisne dugme za izvršenje, sistem će kreirati račun (koji se može pregledati i izmeniti u prozoru [Pretraga izlaznih računa](/docs/sales/sales-invoices/invoicing/search-sales-invoices)) i narudžba će automatski promeniti svoj status u Izvršeno, Delimično izvršeno ili Prisilno izvršeno.   
> [Kreiraj narudžbe](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): procedura omogućava kreiranje narudžbe dobavljaču iz jedne ili više narudžbi kupaca podešavanjem odgovarajućih parametara u tabeli [Vrste narudžbi kupaca](/docs/configurations/tables/sales/sales-order-types). Nakon pokretanja procedure, kreirana narudžba dobavljaču može se pregledati i izmeniti na ekranu [Pretraga narudžbi dobavljaču](/docs/purchase/purchase-orders/insert-purchase-orders/search-purchase-orders).

#### Dodatne funkcije

- **Alati > Preračunaj provizije agenata**: omogućava ponovni obračun provizija agenata povezanih sa odabranim dokumentom. Ova funkcija preporučuje se kada su nakon kreiranja dokumenta izmenjene cene ili procenti provizija.

- **Alati > Ažuriraj cene**: otvara obrazac parametara za ažuriranje cena. Moguće je odabrati da li će se cene preuzimati iz cenovnika važećih na datum dokumenta ili iz cenovnika važećih na planirani datum isporuke artikla. Dodatni parametri omogućavaju određivanje da li će se ažurirati samo neizvršene stavke ili i delimično izvršene stavke, kao i da li treba ponovo izračunati cene samo za redove bez oznake **Ručna cena**. Prilikom ponovnog obračuna sistem uzima u obzir sve popuste i odabranu rabatnu lestvicu za pojedini red. Ako dokument koji prima podatke iz procedure ima definisan cenovnik u zaglavlju, taj cenovnik će uvek imati prioritet.

:::tip Zapamti
Prilikom kreiranja otpremnica (DDT) ili računa pomoću funkcija **Izvršenje otpremnice** i **Izvršenje računa**, podaci i napomene uneti u zaglavlje dokumenta (npr. **Naša/Vaša referenca**, **Početne napomene** i slično) preuzimaju se iz prve izvršene narudžbe.
:::