---
title: Tipovi dokumenta
sidebar_position: 25
---

:::tip[Fast Start]
Na ovu se tablicu odnosi postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Ova tablica služi za upravljanje vrstama dokumenata povezanima s računovodstvenim predlošcima glavne knjige, a time i s računovodstvenim knjiženjima, međurazdobnim knjiženjima ili upravljačkim knjiženjima koja koriste te predloške.

:::tip Napomena
Postupak **Fast Start** stvara vrste dokumenata i povezuje ih s odgovarajućom geografskom lokalizacijom, kako bi popis dokumenata bio prilagođen pojedinoj državi, primjerice Italiji, Rumunjskoj itd.

Objekt sadrži i polje Država, koje se može prikazati u tablici putem preglednika objekata. Radi kompatibilnosti sa starijim verzijama moguće je imati i vrste dokumenata **bez** povezane države, tako da budu vidljive u svim tvrtkama u bazi podataka, neovisno o državi.

Pri svakom novom unosu automatski se preuzima država aktivne tvrtke.
:::

Dostupna su sljedeća polja:

- *Tip šifre* – šifra vrste dokumenta.
- *Opis tipa* – opis vrste dokumenta.
- *Račun*
- *Fiskalni račun*
- *Obračun (primatelja plaćanja)*
- *Zatvaranje računa*
- *Prijenos između konta (preknjiženje)*
- *Općenito*
- *Knjižno odobrenje* – za ovu vrstu dokumenta **FluentisERP** provjerava sadrži li računovodstveno knjiženje negativne retke u odjeljku PDV-a.
- *Knjižno terećenje*
- *Bilješka varijacije* – za pojednostavljene dokumente koji predstavljaju isključivo odobrenje PDV-a (**pojednostavljeni** TD08).
- *Zbirni (sažetak) dokument*
- *Automatsko fakturiranje*
- *Naplata (primljeno)*
- *Plaćanje*
- *Kod za elektronski oblik dokumenta* – šifra koja se koristi za popunjavanje SDI datoteke (TD01, TD04 itd.).

:::tip Napomena
U donjoj tablici moguće je povezati određeni brojač s pojedinom vrstom dokumenta. Taj se brojač koristi za interno, neslužbeno numeriranje računovodstvenih knjiženja i nije izravno vidljiv u korisničkom sučelju.
:::