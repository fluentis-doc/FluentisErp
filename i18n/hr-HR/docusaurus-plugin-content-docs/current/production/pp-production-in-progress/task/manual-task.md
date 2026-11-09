---
title: Ručno generiranje zadataka
sidebar_position: 1
---

Funkcionalnost **Ručno kreiranje zadataka** omogućuje ručno kreiranje i upravljanje **zadacima** za proizvodnju grupiranjem radnih faza (koje još nisu prijavljene) iz naloga za proizvodnju u statusu *Pokrenut* i/ili *U izvršavanju*, počevši od materijala koji se planira koristiti.

Cilj je omogućiti operateru da:
- brzo pronađe faze koje troše određeni materijal;
- provjeri izvedivost faza na temelju raspoloživosti materijala;
- kreira nove zadatke ili objedini faze u već postojeće zadatke;
- po potrebi ukloni faze iz zadatka.

:::note Napomena
Raspoloživost materijala procjenjuje se uzimajući u obzir logiku stanja zaliha i postupnu raspoloživost prema postavljenom redoslijedu.
:::

*Posebni gumbi*:

> **Sakrij / Prikaži filtar podataka**: omogućuje skrivanje ili prikaz filtra koji se nalazi na početku forme.

> **Sakrij / Prikaži detalje zadatka**: omogućuje skrivanje ili prikaz tablica **Zadaci** i **Radne faze predviđene za odabrani zadatak**.

Zaslon se sastoji od četiri glavna popisa.

Popis 1 – **Materijali**

U prvom se popisu prikazuju predviđeni potrošni materijali, uz sljedeće podatke:

- Pripadajuće skladište;
- Raspoloživa zaliha;
- Neraspoloživa zaliha.

Ovaj je popis polazišna točka: odabirom materijala ažuriraju se popisi ispod njega.

Popis 2 – **Radne faze predviđene za odabrani materijal**

U drugom se popisu prikazuju radne faze za koje je predviđena potrošnja odabranog materijala (popis 1).

Za svaku fazu dostupni su detalji o *izvedivosti faze*, koja se određuje na temelju postupne raspoloživosti materijala izračunate prema postavljenom redoslijedu (predviđeni datum početka, ručni redoslijed koji operater može mijenjati itd.). Dakle, izvedivost pokazuje je li, prema redoslijedu faza, stanje zaliha odnosno raspoloživost materijala dovoljna za pokrivanje predviđenih potreba.

*Posebni gumbi*:

> **Ponovno izračunaj redoslijed**: omogućuje ponovno izračunavanje redoslijeda faza prikazanih u tablici.

> **Poništi redoslijed**: omogućuje poništavanje redoslijeda faza prikazanih u tablici.

> **Kreiraj zadatak**: omogućuje kreiranje novog zadatka na temelju odabrane faze. Nakon pritiska na gumb prikazuje se skočni prozor u kojem je moguće izmijeniti sljedeće podatke: *Vrsta zadatka*, *Radni centar*, *Stroj*, *Datum početka*, *Vrijeme podešavanja*, *Vrijeme čekanja* (uz mogućnost da se to vrijeme čekanja računa kao vrijeme zauzeća radnog centra) i *Napomene*.

Popis 3 – **Zadaci**

U trećem se popisu prikazuju već postojeći zadaci povezani s odabranim materijalom (popis 1).

Ovaj popis omogućuje:
- odabir postojećeg zadatka radi provjere njegova sadržaja;
- odabir zadatka u koji će se uključiti nove faze putem gumba **Dodaj faze u zadatak**.

*Posebni gumbi*:

> **Dodaj faze u zadatak**: omogućuje dodavanje nove faze u odabrani zadatak.

Popis 4 – **Radne faze predviđene za odabrani zadatak**

U četvrtom se popisu prikazuju radne faze koje su već uključene u zadatak odabran u popisu 3. Moguće ih je ukloniti pomoću odgovarajućeg gumba **Ukloni faze iz zadatka**.

*Posebni gumbi*:

> **Ukloni faze iz zadatka**: omogućuje uklanjanje faze iz odabranog zadatka.

Za detalje o zajedničkom načinu rada formi pogledajte poveznicu [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).