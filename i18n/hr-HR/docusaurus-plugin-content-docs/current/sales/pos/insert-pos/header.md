---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon odabira i unosa obveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [pomoći polja](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)

Unoseći **Račun** automatski se *nude* svi specifični podaci iz kartice **Zaglavlje**, prema podacima postavljenim ranije u[Šifarniku kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *sekcijama*:  

- **Valuta**: [Valuta](/docs/guide/glossary/glossary-intro#currency), [Tečaj](/docs/guide/glossary/glossary-intro#currency-exchange), [Valuta datuma](/docs/guide/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/glossary/glossary-intro#country), [Jezik](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/glossary/glossary-intro#shipment), [Luka](/docs/guide/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/glossary/glossary-intro#packing), [Cjenik](/docs/guide/glossary/glossary-intro#sales-price-list) i njegov [interval valjanosti](/docs/guide/glossary/glossary-intro#validity-date)

*Ostala polja*:

**Pos status**: u fazi kreiranja, POS nema niti jedan aktivni oznaku. Ova sekcija uključuje polja:  
> **Ispisano** aktivira se kada se izvrši ispis računa.   
> **Učitaj** označava da je POS otpremljen iz skladišta ručno ili putem automatskog otpremanja.    
> **Knjiženo**: automatski je označeno kada je POS knjižen.  
> **Opozvano**: aktivirana oznaka omogućuje poništenje POS-a.  

:::note BILJEŠKE
Kartice se mogu ukloniti pomoću postupka poništavanja operacije.
:::

**Naša referenca/vaša referenca**: u ovim poljima obično se navodi interna referenca i referenca klijenta za određeni POS.

**Početne bilješke**: Možete odabrati bilješke koje su prethodno unesene u tablicu s istim imenom koja se nalazi na putanji *Postavke  > Korisnički alati > Upravljanje šifriranim bilješkama*. Da biste to učinili, korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *Pomoć za šifrirane bilješke* i odabrao podatke, ili desnom tipkom miša može otvoriti prozor kako bi specificirao vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* koja se nalazi na putanji *Dipendenti* koja se nalazi na putanji *Početna stranica > Zaposlenici*. 

**Projekt**: koristeći [pomoćno polja](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo udruživanje funkcionira samo na razini zaglavlja artikla. 

## Plaćanja

**Uvjeti plaćanja** automatski se preuzimaju iz *Podaci kupca> kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

*Poseban gumb*

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja. 

## Popusti

Nude se samo unaprijed definirani popusti preuzeti iz *Šifarnik klijenta> kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.
  
Popusti koji su ponuđeni u zaglavlju dokumenta reproduciraju se u svakom novom retku artikla unesenom u dokument.

Ako nakon unosa redaka artikla dodate novi popust u zaglavlje, to se neće replicirati u već unesenim redcima artikla.

*Poseban gumb*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

## Predstavnici

Pokazuje kod predstanika i njegovu proviziju za svaki redak artikla. Ponuđeni su kod i postotak definirani u *Šifarnik klijenta > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj kartici, agent ipak mora biti unesen, ali s nultom provizijom, jer ako bi bila s provizijom 0, značilo bi da je agent povezan, ali ne prima proviziju.

Ovaj se odjeljak ponovno nudi za svaki redak artikla u odgovarajućoj kartici *Predstavnici*.

*Poseban gumb*

> **Izbriši trgovačke predstavnike**: omogućuje brisanje odabranih predstavnika.