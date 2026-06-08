---
title: Automatsko generisanje obračuna provizija
sidebar_position: 1
---

Ova forma se otvara putem putanje *Prodaja > Trgovački predstavnici > Procedure > Automatsko generisanje obračuna provizija*.

Procedura automatskog kreiranja obračuna provizija vrši konačan obračun provizija predstavnika prema definisanim parametrima.

## Obračun provizija

Nakon izvršene pretrage, u delu **Lista trgovačkih predstavnika** biće prikazani svi predstavnici definisani u sistemu. U ovom delu potrebno je izabrati predstavnike za koje će se izvršiti obračun.

Napominje se da je vidljiv i tip obračuna provizije predstavnika kako bi filteri sa desne strane mogli biti pravilno podešeni u skladu sa njegovim postavkama.

Sa desne strane prikazani su sledeći filteri:

- filter za valutu dokumenta, kako bi se obračun predstavnika kreirao odvojeno po valutama;
- tri sekcije filtera prema referentnom dokumentu (narudžbine/otpremnice/fakture), za predstavnike sa provizijama po potvrđenoj narudžbini, izvršenoj isporuci ili izdatoj fakturi;
- sekcija filtera za rate, za predstavnike sa provizijama po dospeću ili po izvršenoj uplati.

Na osnovu postavljenih datuma određuje se datum dospeća ili, u drugom slučaju, udeo u odnosu na evidentirane uplate u računovodstvu sa datumom pre definisanog datuma.

Kod efekata, provizija se neće smatrati dospelom pre datuma dospeća efekta (odnosno datuma dospeća uvećanog za broj dana rizika kupca definisanih u parametrima istoimenog modula).

Polje *Konverzija provizija korišćenjem kursa na datum dokumenta* omogućava obračun provizija prema kursu važećem na datum dokumenta. U suprotnom koristi se kurs definisan na datum obračuna predstavnika u poljima pri dnu forme.

:::note DETALJNIJE

- Ako polje nije označeno, Fluentis sabira ostvarene provizije po valuti dokumenta, a zatim ukupne iznose konvertuje u valutu predstavnika prema kursu na datum obračuna. U složenijim slučajevima (na primer fakture u GBP i predstavnik u USD), sistem prvo traži direktan kurs GBP/USD ili USD/GBP. Ako ga ne pronađe, koristiće kurseve prema evru sa svim raspoloživim decimalama.

- Ako je polje označeno, Fluentis za svaki dokument koristi kurs sačuvan u samom dokumentu kako bi izračunao proviziju u valuti kompanije (zaokruženu prema broju decimala valute kompanije za svaki dokument), a zatim ukupan iznos konvertuje u valutu predstavnika.

Na primer, ako postoje samo dva dokumenta sa istim kursom i datumom, mogu se pojaviti minimalne razlike od nekoliko centi zbog međukoraka zaokruživanja na valutu kompanije. Ova situacija je uglavnom teorijska i služi za bolje razumevanje logike obračuna.
:::

U donjem delu, *Podaci za kreiranje obračuna provizija*, potrebno je navesti:

- datum obračuna;
- opis obračuna;
- mesec/godinu koji predstavljaju referentni period za obračun Enasarco doprinosa.

:::tip Provizije po naplaćenom i privremena knjiženja

Za obračun dospelih provizija uzimaju se u obzir ISKLJUČIVO knjiženja u statusu **konačno**.

Privremena knjiženja uplata (uključujući avanse) neće biti uzeta u obzir.
:::

:::tip Provizije po naplaćenom i bankarske menice (Ri.Ba.)

Dospelost provizije uvek uzima u obzir datum dospeća efekta, čak i kada je otvorena stavka klijenta zatvorena knjiženjem izdavanja Ri.Ba. i menica predata banci na naplatu ili kredit.
:::

:::danger PAŽNJA

Potrebno je obratiti posebnu pažnju na podešavanja u **PARAMETRIMA RIZIKA KUPCA**, naročito kada se koriste bankarske potvrde (Ri.Ba.).

Polja:

- **Broj dana nakon dospeća za potvrde predate na naplatu uz klauzulu „uz dobru naplatu”**
- **Broj dana nakon dospeća za potvrde predate po naplati**

imaju važnu ulogu jer se njihova vrednost dodaje datumu dospeća prilikom obračuna dospelih provizija.

Prilikom inicijalizacije novog okruženja preporučuje se da se forma *Parametri rizika kupca* sačuva najmanje jednom kako bi se kreirale podrazumevane vrednosti sistema.

U suprotnom, datum dospeća neće biti pravilno učitan, a obračun provizije će se uvek zasnivati na zatvaranju potvrde putem Ri.Ba.
:::

### Dugmad

> **Traži**: pokreće pretragu predstavnika definisanih u aktivnoj kompaniji.  
> **Obračun iznosa za isplatu**: obračunava provizije za izabrane predstavnike prema zadatim filterima.

## Vraćanje na prethodno stanje

Kartica *Vraćanje na prethodno stanje* omogućava pronalaženje obračunatih provizija prema zadatim filterima.

Pomoću odgovarajuće funkcije moguće je poništiti kreiranje obračuna provizija.

:::important
Nije moguće vratiti provizije koje su već obrađene kroz modul naknada.
:::

### Dugmad

> **Traži**: pokreće pretragu automatski obračunatih provizija.  
> **Vrati na prethodno stanje**: poništava kreiranje izabranih provizija.