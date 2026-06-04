---
title: Tipovi dokumenta
sidebar_position: 25
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se planira ručna konfiguracija, potrebno je slijediti kontrolni popis na poveznici.
:::

Ova tablica upravlja vrstama dokumenata povezanim s uzrocima glavne knjige, a time i s računovodstvenim ili polugodišnjim knjiženjima koja pozivaju te uzroke.

:::tip Napomena
**Fast Start** stvara vrste dokumenata povezujući ih s odgovarajućom geografskom lokacijom, tako da postoji popis dokumenata za Italiju, Rumunjsku itd.
Objekt, naime, sadrži polje za državu, koje se može prikazati u mreži kroz Object Navigator. Za unatrag kompatibilnost moguće je imati i vrste dokumenata *bez* veze s državom, tako da budu vidljive u svim tvrtkama baze podataka.
Svaki novi unos, u svakom slučaju, preuzet će državu aktivne tvrtke.
:::

Dostupna polja:
- *Šifra vrste* šifra vrste dokumenta
- *Opis vrste*, opis
- *Račun*
- *Fiskalni račun*
- *Račun za usluge*
- *Polog / isplata*
- *Prijenos konta*
- *Općenito*
- *Kreditna nota*: za ovu vrstu dokumenta, ***FluentisERP*** provjerava da računovodstveno knjiženje sadrži negativne stavke u sekciji PDV-a
- *Debitna nota*
- *Izmjena računa*: za ***pojednostavljene*** kreditne napomene samo za PDV (TD08)
- *Sažetak*
- *Samoobračun*
- *Primljeno*
- *Plaćanje*
- *Šifra za e-račune*: šifra koja se koristi za popunjavanje SDI datoteke (TD01, TD04 itd.)

:::tip Napomena
U donjoj mreži moguće je povezati specifičan numerator za vrstu dokumenta; koristi se za interni, neslužbeni numerator knjiženja i nije izravno vidljiv u sučelju.
:::