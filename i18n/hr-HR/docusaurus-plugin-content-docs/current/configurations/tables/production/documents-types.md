---
title: Tipovi dokumenata
sidebar_position: 13
---

:::important Čemu služi
Tablica Vrste dokumenata omogućuje kreiranje i međusobno povezivanje svih dokumenata kojima se upravlja u područjima [Planiranje](/docs/planning/planning-intro/) i [Proizvodnja](/docs/production/production-intro/).
:::

Tablica omogućuje unos novih zapisa ili traženje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

**Traženje vrsta dokumenata**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos vrsta dokumenata**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: alfanumeričku **Šifru** vrste dokumenta, njezin **Opis**, odgovarajuću **Standardnu šifru** i **Vrstu numeriranja**. Standardna šifra određuje vrstu upravo kreiranog dokumenta, koji može biti: nalog za proizvodnju, narudžba kupca, narudžba podizvođaču ili nalog za proizvodnju, odnosno planirani nalog za nabavu, podizvođača ili proizvodnju.

Za istu standardnu šifru moguće je imati više dokumenata. Stoga je aktiviranjem oznake **Zadano (def.)** moguće odrediti koji će dokument sustav koristiti kao zadani.

Nakon završetka unosa potrebno je za svaki kreirani dokument unijeti odgovarajuće vrste dokumenata koje on generira.

Primjerice, u slučaju dokumenta vrste nalog za proizvodnju, korisnik mora unijeti dokumente koji se njime generiraju, a to su: *planirani nalozi za nabavu, planirani nalozi za proizvodnju i planirani nalozi za podizvođača*.

Planirani nalozi za nabavu generirat će određenu vrstu *zahtjeva za nabavu*, dok će planirani nalozi za podizvođača kreirati određenu vrstu *narudžbe podizvođaču*. Naposljetku, planirani nalozi za proizvodnju imat će određenu vrstu *naloga za proizvodnju*, kao i vrstu *podizvođača* povezanu s vanjskim fazama sadržanima u tehnološkom postupku.

Aktiviranjem oznake **Održavanje** moguće je odrediti da će se dokument koristiti za radove održavanja. Ako oznaka nije aktivirana, dokument će se koristiti za proizvodnju.

Za **Vrste dokumenata** sa standardnom šifrom *CP* (Nalozi za proizvodnju) moguće je unijeti **Vrstu troška radno naloga**, koja će se zatim predlagati kao zadana pri svakom pokretanju obračuna troškova naloga.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).