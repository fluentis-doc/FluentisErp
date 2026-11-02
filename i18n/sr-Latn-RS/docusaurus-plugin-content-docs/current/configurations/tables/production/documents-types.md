---
title: Tipovi dokumenata
sidebar_position: 13
---

:::important Čemu služi
Tabela Tipovi dokumenata omogućava kreiranje i međusobno povezivanje svih dokumenata kojima se upravlja u oblastima [Planiranje](/docs/planning/planning-intro/) i [Proizvodnja](/docs/production/production-intro/).
:::

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmene ili brisanja.

**Pretraživanje tipova dokumenata**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

**Unos tipova dokumenata**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja zahteva program: alfanumeričku **Šifru** tipa dokumenta, njegov **Opis**, odgovarajuću **Standardnu šifru** i **Tip numerisanja**. Standardna šifra određuje tip upravo kreiranog dokumenta, koji može biti: nalog za proizvodnju, narudžbina kupca, narudžbina podizvođaču ili nalog za proizvodnju, odnosno planirani nalog za nabavku, podizvođača ili proizvodnju.

Za istu standardnu šifru moguće je imati više dokumenata. Stoga je aktiviranjem oznake **Podrazumevano (def.)** moguće odrediti koji će dokument sistem koristiti kao podrazumevani.

Nakon završetka unosa potrebno je za svaki kreirani dokument uneti odgovarajuće tipove dokumenata koje on generiše.

Na primer, u slučaju dokumenta tipa nalog za proizvodnju, korisnik mora uneti dokumente koji se njime generišu, a to su: *planirani nalozi za nabavku, planirani nalozi za proizvodnju i planirani nalozi za podizvođača*.

Planirani nalozi za nabavku generisaće određeni tip *zahteva za nabavku*, dok će planirani nalozi za podizvođača kreirati određeni tip *narudžbine podizvođaču*. Na kraju, planirani nalozi za proizvodnju imaće određeni tip *naloga za proizvodnju*, kao i tip *podizvođača* povezan sa spoljnim fazama sadržanim u tehnološkom postupku.

Aktiviranjem oznake **Održavanje** moguće je odrediti da će se dokument koristiti za radove održavanja. Ako oznaka nije aktivirana, dokument će se koristiti za proizvodnju.

Za **Tipove dokumenata** sa standardnom šifrom *CP* (Nalozi za proizvodnju) moguće je uneti **Tip troška radnog naloga**, koji će se zatim predlagati kao podrazumevani pri svakom pokretanju obračuna troškova naloga.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).