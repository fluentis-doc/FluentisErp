---
title: Pravila postavljanja
sidebar_position: 2
---

Tablica se nalazi na putanji **Tablice > Proizvodnja > Tablice A.F.C.S. > Pravila postavljanja**.

Podaci iz ove tablice koriste se isključivo u postupku [A.F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling).

Ovaj obrazac omogućuje definiranje pravila za izračun vremena podešavanja (postavljanja) operacija koje se izvršavaju na stroju za koji su definirani [Atributi podešavanja](/docs/configurations/tables/production/fcs-tables/setup-property).

Jedno pravilo podešavanja može se definirati pomoću više zapisa u ovoj tablici. Svaki zapis omogućuje upravljanje s najviše 10 atributa podešavanja. Za svaki atribut definiran u zapisu postoji koeficijent množenja (zadana vrijednost je 1) koji se primjenjuje na vrijednost prijelaza stanja atributa.

Vrijednosti dobivene množenjem koeficijentima obrađuju se prema vrsti izračuna odabranoj u zapisu (maksimum, minimum, zbroj, prosjek), a zatim se dobiveni rezultat množi ukupnim koeficijentom (zadana vrijednost je 1).

Ako je pravilo definirano pomoću više zapisa, rezultati svakog pojedinog zapisa zbrajaju se kako bi se dobilo konačno vrijeme podešavanja.

Tablica omogućuje unos novih zapisa ili traženje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

**Traženje pravila podešavanja**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos pravila podešavanja**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra** i **Opis**.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).