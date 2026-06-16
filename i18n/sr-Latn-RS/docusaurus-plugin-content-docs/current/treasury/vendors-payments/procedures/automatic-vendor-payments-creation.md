---
title: Automatsko kreiranje plaćanja dobavljačima
sidebar_position: 1
---

Ovaj obrazac nalazi se na putanji **Riznica > Plaćanja dobavljačima > Procedure > Automatsko kreiranje plaćanja dobavljačima**.

Ova procedura predstavlja alternativu ručnom kreiranju nove [liste za plaćanje](/docs/treasury/vendors-payments/create-vendor-payments) i njenom naknadnom knjiženju, omogućavajući da se obe operacije izvrše integrisano direktno iz ovog obrasca.

## Kako automatski kreirati plaćanja dobavljačima

1. Na kartici **Filter dospeća plaćanja** pronađite stavke koje treba platiti.

   Moguće je filtrirati i prema ABI/CAB kodovima banke povezane sa pojedinačnom stavkom, kao i prema šifri ili nazivu banke, proširivanjem sekcije **Banka**.

   Ako proširite sekciju **Tip dospele vrednosti**, stavke zaposlenih su podrazumevano isključene, jer se njihova obrada mora vršiti kroz modul za obračun trgovačkih predstavnika ukoliko želite koristiti proceduru za [izdavanje potvrda o obračunatom porezu po odbitku](/docs/finance-area/declarations/declarations/withholding-tax-certification).

   Filtriranje prema **analitičkom kontu banke za plaćanje** omogućava kreiranje liste plaćanja na osnovu kanala plaćanja definisanih u parametrima partnera i proceduri [Upravljanje plaćanjima](/docs/treasury/vendors-payments/procedures/payments-support-management).

2. Proverite ukupne iznose odabranih stavki prikazane u donjem delu ekrana.

3. Pređite na karticu **Podaci za plaćanje dobavljaču** i podesite parametre za izvršavanje procedure.

   Najpre je potrebno odabrati **banku za plaćanje**, koja će biti nosilac liste za plaćanje. Nakon unosa ovog podatka aktivira se dugme **Pokreni kreiranje plaćanja iz dospeća plaćanja**.

4. Podesite ostale parametre:

   - **Koristi banku za plaćanje iz dospele stavke ako nije definisana u registru** – procedura kreira onoliko lista plaćanja koliko postoji različitih banaka za plaćanje definisanih na stavkama, prema postavkama iz procedure *Upravljanje bankama za plaćanje* ili iz podataka dobavljača. Ako nijedna banka nije definisana, koristiće se banka unesena u zaglavlju.

   - **Koristi banku definisanu u registru dobavljača** – procedura koristi podrazumevanu banku definisanu na kartici banaka dobavljača. Ova opcija može biti unapred uključena kroz parametre modula.

   - **Način plaćanja** – definiše vrstu plaćanja koja će biti dodeljena listi. Polje je obavezno ukoliko odabrane stavke koriste različite načine plaćanja.

   - **Godina** i **datum izdavanja** automatski se popunjavaju na osnovu sistemskog datuma.

   - **Postavi korisnički datum valute** omogućava definisanje datuma valute primaoca unutar SEPA zapisa. Ako nije postavljen, koristi se tekući datum. Ukoliko opcija nije uključena, datum valute odgovara datumu dospeća.

   - **Početna napomena** predstavlja slobodno polje za unos dodatnih informacija.

   - **Završne napomene** koriste se prilikom knjiženja za unos opisa na bankarskoj stavci.

5. Ako želite da se plaćanja odmah knjiže, uključite opciju **Knjiženje dospelih stavki**.

   Ova opcija omogućava istovremeno zatvaranje otvorenih stavki i generisanje odgovarajućih knjiženja za kreirana plaćanja.

   Ako opcija nije aktivirana, knjiženje se može izvršiti naknadno korišćenjem posebne procedure za knjiženje.

6. Unesite podatke potrebne za knjiženje:

   - kontnu šemu,
   - datum knjiženja,
   - obračunski period.

   Konta za evidentiranje prihoda i rashoda automatski se predlažu na osnovu konta **vanrednih prihoda** definisanih u parametrima glavne knjige.

   Polja **Datum dokumenta** i **Broj dokumenta** su opciona i mogu se koristiti kao referenca zaglavlja knjiženja (na primer broj i datum liste plaćanja).

   Sa desne strane nalazi se podrazumevano uključena opcija **Zatvaranje otvorene stavke** (ne preporučuje se isključivanje), kao i kriterijum **Grupisanje po banci**, koji omogućava kreiranje jednog knjiženja po svakom bankovnom računu sa kojeg se vrši isplata.

   Dostupne su i sledeće opcije:
   - **Grupisanje po analitičkom kontu (dobavljaču)**,
   - **Bez grupisanja**, gde se svako plaćanje knjiži pojedinačno.

   Ako odabrana šema knjiženja podržava obračun datuma valute banke, a u registru banaka postoji definisan broj dana za obračun valute, polje će se automatski popuniti tokom knjiženja.

7. Kliknite na dugme **Pokreni kreiranje plaćanja iz dospeća plaćanja**.

**<a href="https://youtu.be/DkxoWgTkvUg&t=2m25s" target="_blank" rel="noopener noreferrer">Pogledaj video tutorijal</a>**

## Kartica Poništavanje (Prethodna kreiranja)

Omogućava pregled izvršenih knjiženja dvostrukim klikom na zapis, kao i delimično ili potpuno poništavanje prethodno kreiranih plaćanja.

Poništavanje je moguće samo ako obračunski period još uvek nije zaključen.

### Specifična dugmad

> **Pretraži prethodna kreiranja**: Prikazuje listu prethodno izvršenih kreiranja.

> **Obriši kreirano**: Briše kompletno izvršeno kreiranje zajedno sa svim povezanim plaćanjima.

> **Obriši plaćanje**: Poništava izabrano pojedinačno plaćanje.