---
title: Parametri neplaćenih stavki (neplaćeno)
sidebar_position: 2
---

Parametri modula **Neplaćene stavke** nalaze se na putanji **Parametri > Riznica (Trezor)**.

U parametrima neplaćenih stavki moguće je unapred definisati podrazumevane vrednosti koje će se predlagati u postupcima modula.

#### Vrsta knjiženja

- **Prelazni konto + troškovi protesta**: ovim podešavanjem ponovo se otvara otvorena stavka kupca na prelaznom kontu, u iznosu izvorne hartije od vrednosti, dok se troškovi knjiže na bankarski konto.
- **Kupac + troškovi protesta**: preporučuje se izbor opcije *Kupac + troškovi protesta* kako bi se otvorena stavka kupca ponovo otvorila u iznosu izvorne hartije od vrednosti, a troškovi knjižili na bankarski konto.

#### Upravljanje otvorenim stavkama

- **Ponovno otvaranje stavke povezane sa fakturom**: preporučuje se izbor ove opcije. Postupak će otvoriti novu stavku, ali će zadržati reference na broj i datum izvorne fakture. Ako se hartija od vrednosti odnosi na više dokumenata, uneće se prvi dokument sa spiska, dok će u napomenama otvorene stavke biti navedene reference svih dokumenata.
- **Otvaranje nove stavke**: alternativna opcija kojom se kreira nova otvorena stavka, pri čemu se broj i datum dokumenta određuju na osnovu broja i datuma hartije od vrednosti koja nije naplaćena.

#### Troškovi

Ovaj odeljak potrebno je konfigurisati ako želite unapred da definišete podrazumevane vrednosti za kreiranje fakture kupcu za troškove neplaćenih stavki.

- **Vrsta fakture**: omogućava izbor vrste fakture koja će se koristiti.
- **Vrsta plaćanja**: omogućava izbor vrste plaćanja koja će se koristiti.
- **Merna jedinica**: omogućava definisanje merne jedinice reda artikla.
- **Način plaćanja**: omogućava definisanje načina plaćanja za generisanje odgovarajućeg datuma dospeća.

#### Troškovi povraćaja

- **Knjiženje troška povraćaja**: FluentisERP će knjižiti trošak povraćaja koji je ponovo zaračunat kupcu.
- **Vrsta fakturisanja**: omogućava definisanje vrste fakturisanja prodaje, odnosno prihodovne protivstavke koja će biti povezana sa redom fakture.
- **Stopa PDV-a**: omogućava definisanje stope PDV-a.

#### Povraćaj troškova takse

- **Vrsta fakturisanja**: omogućava definisanje vrste fakturisanja prodaje, odnosno prihodovne protivstavke koja će biti povezana sa redom fakture.
- **Stopa PDV-a**: omogućava definisanje stope PDV-a.

#### Troškovi povraćaja

- **Vrsta fakturisanja**: omogućava definisanje vrste fakturisanja prodaje, odnosno prihodovne protivstavke koja će biti povezana sa redom fakture.
- **Stopa PDV-a**: omogućava definisanje stope PDV-a.

#### Parametri

- **Knjigovodstveni šablon**: šablon koji će se predlagati u postupcima knjiženja neplaćenih stavki.
- **Konto troškova protesta**: konto koji se koristi za evidentiranje troškova koje zaračunava banka.
- **Prelazni konto**: prelazni analitički konto koji se koristi za knjiženje ako je izabrana opcija *Prelazni konto + troškovi protesta*. Preporučuje se da se ovo polje popuni čak i ako se koristi isti konto kao za troškove, jer je obavezno za izvršavanje postupka knjiženja.
- **Prelazni konto banke**: prelazni konto banke koji se koristi kada se neplaćena stavka odnosi na hartije od vrednosti koje nisu predate na naplatu putem ovog postupka, na primer pri korišćenju modula DocFinance.

:::danger Pažnja
Ako se ovo polje popuni, podešeni konto koristiće se nezavisno od podešavanja prethodno opisanih oznaka u odeljku *Vrsta knjiženja*. Imaće prednost u odnosu na konto protivstavke koji bi se inače koristio:
- konta hartija od vrednosti ako je hartija od vrednosti *izdata*;
- konta SBF-a u zaglavlju popisa ako je hartija od vrednosti *predata na naplatu*;
- konta bankovnog tekućeg računa ako je hartija od vrednosti *odobrena*.

**Zato se preporučuje da se ovo polje ne popunjava ako nije neophodno.**
:::

- **Konto za zaračunavanje troškova kupcu**: prihodovni analitički konto koji se koristi u postupku knjiženja neplaćenih stavki po cesiji ako je izabrana opcija zaračunavanja troškova kupcu.
- **Vrsta kamate**: uz neplaćenu stavku moguće je povezati referentnu kamatnu stopu. Kod menica je moguće simulirati početni obračun kamata za period od predviđenog datuma dospeća menice do datuma evidentiranja neplaćene stavke.
- **Kreiranje jedne otvorene stavke**: ovom opcijom omogućava se otvaranje jedne otvorene stavke za neplaćenu Ri.Ba potvrdu koja je kreirana iz više različitih otvorenih stavki. Ova opcija se po pravilu ne koristi jer se time ponovo otvaraju izvorne otvorene stavke sa njihovim izvornim referencama.

:::danger Pažnja
Nemojte aktivirati ovu opciju ako se provizije agenata obračunavaju na osnovu izvršenog plaćanja ili ukupnog iznosa.
:::

- **Datum dospeća jednak datumu dospeća hartije od vrednosti**: aktiviranjem ovog parametra datum dospeća ponovo otvorene stavke nastale zbog neplaćene stavke postavlja se na datum dospeća hartije od vrednosti, umesto na datum evidentiranja neplaćene stavke.