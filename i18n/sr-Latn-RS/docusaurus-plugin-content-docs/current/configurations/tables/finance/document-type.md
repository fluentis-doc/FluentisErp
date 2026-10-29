---
title: Tipovi dokumenta
sidebar_position: 25
---

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.
:::

Ova tabela služi za upravljanje tipovima dokumenata povezanim sa računovodstvenim šablonima glavne knjige, a time i sa računovodstvenim knjiženjima, međuperiodnim knjiženjima ili upravljačkim knjiženjima koja koriste te šablone.

:::tip Napomena
Postupak **Fast Start** kreira tipove dokumenata i povezuje ih sa odgovarajućom geografskom lokalizacijom, kako bi spisak dokumenata bio prilagođen pojedinačnoj državi, na primer Italiji, Rumuniji itd.

Objekat sadrži i polje Država, koje se može prikazati u tabeli pomoću pregledača objekata. Radi kompatibilnosti sa starijim verzijama moguće je imati i tipove dokumenata **bez** povezane države, tako da budu vidljivi u svim preduzećima u bazi podataka, nezavisno od države.

Prilikom svakog novog unosa automatski se preuzima država aktivnog preduzeća.
:::

Dostupna su sledeća polja:

- *Tip šifre* – šifra tipa dokumenta.
- *Opis tipa* – opis tipa dokumenta.
- *Faktura*
- *Fiskalna faktura*
- *Obračun (primaoca plaćanja)*
- *Zatvaranje fakture*
- *Prenos između konta (preknjižavanje)*
- *Opšte*
- *Knjižno odobrenje* – za ovaj tip dokumenta **FluentisERP** proverava da li računovodstveno knjiženje sadrži negativne redove u odeljku PDV-a.
- *Knjižno zaduženje*
- *Napomena o promeni* – za pojednostavljene dokumente koji predstavljaju isključivo odobrenje PDV-a (**pojednostavljeni** TD08).
- *Zbirni (sažeti) dokument*
- *Automatsko fakturisanje*
- *Naplata (primljeno)*
- *Plaćanje*
- *Šifra za elektronski oblik dokumenta* – šifra koja se koristi za popunjavanje SDI datoteke (TD01, TD04 itd.).

:::tip Napomena
U donjoj tabeli moguće je povezati određeni brojač sa pojedinačnim tipom dokumenta. Taj brojač koristi se za interno, nezvanično numerisanje računovodstvenih knjiženja i nije direktno vidljiv u korisničkom interfejsu.
:::