---
title: Pravila podešavanja
sidebar_position: 2
---

Tabela se nalazi na putanji **Tabele > Proizvodnja > Tabele A.F.C.S. > Pravila podešavanja**.

Podaci iz ove tabele koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Ovaj obrazac omogućava definisanje pravila za izračunavanje vremena podešavanja operacija koje se izvršavaju na mašini za koju su definisani [Atributi podešavanja](/docs/configurations/tables/production/fcs-tables/setup-property).

Jedno pravilo podešavanja može se definisati pomoću više zapisa u ovoj tabeli. Svaki zapis omogućava upravljanje sa najviše 10 atributa podešavanja. Za svaki atribut definisan u zapisu postoji koeficijent množenja (podrazumevana vrednost je 1) koji se primenjuje na vrednost prelaza stanja atributa.

Vrednosti dobijene množenjem koeficijentima obrađuju se prema tipu izračunavanja odabranom u zapisu (maksimum, minimum, zbir, prosek), a zatim se dobijeni rezultat množi ukupnim koeficijentom (podrazumevana vrednost je 1).

Ako je pravilo definisano pomoću više zapisa, rezultati svakog pojedinačnog zapisa sabiraju se kako bi se dobilo konačno vreme podešavanja.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmene ili brisanja.

**Pretraživanje pravila podešavanja**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos pravila podešavanja**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja zahteva program: **Šifra** i **Opis**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).