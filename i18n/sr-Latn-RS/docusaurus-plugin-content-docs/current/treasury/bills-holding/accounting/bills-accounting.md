---
title: Knjiženje vrednosnih papira
sidebar_position: 1
---

Obrazac se nalazi na putanji **Blagajna > Vrednosni papiri > Knjiženja > Knjiženje vrednosnih papira**.

Ova funkcija služi za knjiženje vrednosnih papira. U zavisnosti od podešavanja izabranog kontnog naloga, postupak zatvara otvorene stavke kupaca povezane sa odabranim vrednosnim papirima.

:::tip Napomena
U većini slučajeva ovu proceduru moguće je izvršiti direktno tokom **automatskog preuzimanja vrednosnih papira iz otvorenih stavki**, aktiviranjem odgovarajuće opcije za istovremeno knjiženje.

Posebno otvaranje ovog obrasca najčešće je potrebno kada je potrebno **poništiti prethodno knjiženje vrednosnih papira**.
:::

## Kako knjižiti vrednosni papir

1. U gornjem delu obrasca postavite filtere za pronalaženje vrednosnih papira za knjiženje.

2. U centralnoj tabeli označite vrednosne papire koje želite da knjižite.

3. Unesite parametre knjiženja:
   - **Kontni nalog**
   - **Datum knjiženja**
   - **Datum obračunskog perioda**

:::note Napomena
Ove vrednosti mogu biti unapred definisane u parametrima modula **Portfelj vrednosnih papira**.

- Opcija **Grupisanje po vrsti vrednosnog papira** omogućava generisanje jednog knjižnog naloga koji sadrži onoliko redova koliko je vrednosnih papira odabrano za knjiženje, uz protivknjiženje na kontu definisanom za odgovarajuću vrstu vrednosnog papira.

- Opcija **Privremeno knjiženje** generiše knjižne naloge sa statusom privremenih knjiženja.

- Ako kontni nalog podržava otvaranje stavki, a vrednosni papir je kreiran ručno bez povezane otvorene stavke (ili je njegov iznos veći od povezanih stavki), sistem će automatski otvoriti novu stavku kupca za naknadno usklađivanje.

- Nije moguće knjižiti vrednosne papire nastale iz računa koji još nisu proknjiženi u glavnu knjigu.
:::

4. Kliknite na funkciju **Knjiženje vrednosnih papira** na alatnoj traci.

### Posebne funkcije

- **Pretraži**: prikazuje listu vrednosnih papira spremnih za knjiženje.

- **Knjiženje vrednosnih papira**: izvršava knjiženje označenih zapisa.

:::important Generisani knjižni nalog
Knjižna šema koja se koristi tokom ove operacije je fiksna i ne zavisi od izabranog kontnog naloga.

Tokom knjiženja zatvara se potraživanje prema kupcu (osim ako parametri modula definišu drugačije ponašanje), dok se na drugoj strani koristi konto portfelja vrednosnih papira definisan za pojedinu vrstu vrednosnog papira u tabeli **Vrste vrednosnih papira**.
:::

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.

Poništavanje je moguće samo ako je obračunski period još uvek otvoren za izmene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).

Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

Dostupna je i kartica za pregled eventualnih grešaka nastalih tokom knjiženja.

:::tip Napomena
Poništavanje knjiženja vrednosnog papira obavezno se mora izvršiti iz ovog obrasca.

Prilikom kreiranja vrednosnog papira moguće je odmah pokrenuti i njegovo knjiženje, ali nije moguće direktno poništiti knjiženje iz obrasca za unos vrednosnog papira.

Zbog toga je potrebno najpre poništiti knjiženje ovde, a tek nakon toga eventualno poništiti samo kreiranje vrednosnog papira. Time se sistem vraća u početno stanje, u kojem je otvorena stavka kupca ponovo aktivna, a saldo kupca nije zatvoren.
:::

### Posebne funkcije

- **Pretraži**: prikazuje listu izvršenih knjiženja.

- **Poništi knjiženje**: poništava odabrana knjiženja za sve dokumente uključene u njih.

- **Poništi vrednosni papir**: poništava knjiženje povezano sa pojedinačnim vrednosnim papirom.

> Ova opcija dostupna je samo ako tokom knjiženja nije bila uključena funkcija grupisanja po vrsti vrednosnog papira, jer grupisanje generiše jedinstveni knjižni nalog za više vrednosnih papira iste vrste.