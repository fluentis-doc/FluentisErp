---
title: Ručno generisanje zadataka
sidebar_position: 1
---

Funkcionalnost **Ručno kreiranje zadataka** omogućava ručno kreiranje i upravljanje **zadacima** za proizvodnju grupisanjem radnih faza (koje još nisu prijavljene) iz naloga za proizvodnju u statusu *Pokrenut* i/ili *U izvršavanju*, počevši od materijala koji se planira koristiti.

Cilj je da se operateru omogući da:
- brzo pronađe faze koje troše određeni materijal;
- proveri izvodljivost faza na osnovu raspoloživosti materijala;
- kreira nove zadatke ili objedini faze u već postojeće zadatke;
- po potrebi ukloni faze iz zadatka.

:::note Napomena
Raspoloživost materijala procenjuje se uzimajući u obzir logiku stanja zaliha i postepenu raspoloživost prema podešenom redosledu.
:::

*Posebna dugmad*:

> **Sakrij / Prikaži filter podataka**: omogućava skrivanje ili prikaz filtera koji se nalazi na početku obrasca.

> **Sakrij / Prikaži detalje zadatka**: omogućava skrivanje ili prikaz tabela **Zadaci** i **Radne faze predviđene za odabrani zadatak**.

Ekran se sastoji od četiri glavne liste.

Lista 1 – **Materijali**

U prvoj listi prikazuju se predviđeni potrošni materijali, uz sledeće podatke:

- Pripadajuće skladište;
- Raspoloživa zaliha;
- Neraspoloživa zaliha.

Ova lista predstavlja polaznu tačku: izborom materijala ažuriraju se liste ispod nje.

Lista 2 – **Radne faze predviđene za odabrani materijal**

U drugoj listi prikazuju se radne faze za koje je predviđena potrošnja odabranog materijala (lista 1).

Za svaku fazu dostupni su detalji o *izvodljivosti faze*, koja se određuje na osnovu postepene raspoloživosti materijala izračunate prema podešenom redosledu (predviđeni datum početka, ručni redosled koji operater može da menja itd.). Dakle, izvodljivost pokazuje da li je, prema redosledu faza, stanje zaliha, odnosno raspoloživost materijala, dovoljno za pokrivanje predviđenih potreba.

*Posebna dugmad*:

> **Ponovo izračunaj redosled**: omogućava ponovno izračunavanje redosleda faza prikazanih u tabeli.

> **Poništi redosled**: omogućava poništavanje redosleda faza prikazanih u tabeli.

> **Kreiraj zadatak**: omogućava kreiranje novog zadatka na osnovu odabrane faze. Nakon pritiska na dugme prikazuje se iskačući prozor u kojem je moguće izmeniti sledeće podatke: *Tip zadatka*, *Radni centar*, *Mašina*, *Datum početka*, *Vreme podešavanja*, *Vreme čekanja* (uz mogućnost da se to vreme čekanja računa kao vreme zauzeća radnog centra) i *Napomene*.

Lista 3 – **Zadaci**

U trećoj listi prikazuju se već postojeći zadaci povezani sa odabranim materijalom (lista 1).

Ova lista omogućava:
- izbor postojećeg zadatka radi provere njegovog sadržaja;
- izbor zadatka u koji će se uključiti nove faze putem dugmeta **Dodaj faze u zadatak**.

*Posebna dugmad*:

> **Dodaj faze u zadatak**: omogućava dodavanje nove faze u odabrani zadatak.

Lista 4 – **Radne faze predviđene za odabrani zadatak**

U četvrtoj listi prikazuju se radne faze koje su već uključene u zadatak odabran u listi 3. Moguće ih je ukloniti pomoću odgovarajućeg dugmeta **Ukloni faze iz zadatka**.

*Posebna dugmad*:

> **Ukloni faze iz zadatka**: omogućava uklanjanje faze iz odabranog zadatka.

Za detalje o zajedničkom načinu rada obrazaca pogledajte poveznicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).