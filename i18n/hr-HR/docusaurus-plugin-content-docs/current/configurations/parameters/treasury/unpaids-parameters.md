---
title: Parametri neplaćenih stavki (neplaćeno)
sidebar_position: 2
---

Parametri modula **Neplaćene stavke** nalaze se na putanji **Parametri > Riznica**.

U parametrima neplaćenih stavki moguće je unaprijed definirati zadane vrijednosti koje će se predlagati u postupcima modula.

#### Vrsta knjiženja

- **Prijelazni konto + troškovi protesta**: ovom se postavkom ponovno otvara otvorena stavka kupca na prijelaznom kontu, u iznosu izvornog vrijednosnog papira, dok se troškovi terete na bankovni konto.
- **Kupac + troškovi protesta**: preporučuje se odabrati opciju *Kupac + troškovi protesta* kako bi se otvorena stavka kupca ponovno otvorila u iznosu izvornog vrijednosnog papira, a troškovi teretili na bankovni konto.

#### Upravljanje otvorenim stavkama

- **Ponovno otvaranje stavke povezane s računom**: preporučuje se odabrati ovu opciju. Postupak će otvoriti novu stavku, ali sa zadržanim referencama na broj i datum izvornog računa. Ako se vrijednosni papir odnosi na više dokumenata, unijet će se prvi dokument s popisa, dok će se u napomenama otvorene stavke navesti reference svih dokumenata.
- **Otvaranje nove stavke**: alternativna opcija kojom se kreira nova otvorena stavka, pri čemu se broj i datum dokumenta određuju na temelju broja i datuma vrijednosnog papira koji nije naplaćen.

#### Troškovi

Ovaj odjeljak potrebno je konfigurirati ako se želi unaprijed definirati zadane vrijednosti za kreiranje računa kupcu za troškove neplaćenih stavki.

- **Vrsta računa**: omogućuje odabir vrste računa koja će se koristiti.
- **Vrsta plaćanja**: omogućuje odabir vrste plaćanja koja će se koristiti.
- **Mjerna jedinica**: omogućuje definiranje mjerne jedinice retka artikla.
- **Način plaćanja**: omogućuje definiranje načina plaćanja za generiranje pripadajućeg datuma dospijeća.

#### Troškovi povrata

- **Knjiženje troška povrata**: FluentisERP knjižit će trošak povrata koji je ponovno zaračunat kupcu.
- **Vrsta fakturiranja**: omogućuje definiranje vrste fakturiranja prodaje, odnosno prihodovne protustavke koja će se povezati s retkom računa.
- **Stopa PDV-a**: omogućuje definiranje stope PDV-a.

#### Povrat troškova biljega

- **Vrsta fakturiranja**: omogućuje definiranje vrste fakturiranja prodaje, odnosno prihodovne protustavke koja će se povezati s retkom računa.
- **Stopa PDV-a**: omogućuje definiranje stope PDV-a.

#### Troškovi povrata

- **Vrsta fakturiranja**: omogućuje definiranje vrste fakturiranja prodaje, odnosno prihodovne protustavke koja će se povezati s retkom računa.
- **Stopa PDV-a**: omogućuje definiranje stope PDV-a.

#### Parametri

- **Knjigovodstveni predložak**: predložak koji će se predlagati u postupcima knjiženja neplaćenih stavki.
- **Konto troškova protesta**: konto koji se koristi za evidentiranje troškova koje zaračunava banka.
- **Prijelazni konto**: prijelazni analitički konto koji se koristi za knjiženje ako je odabrana opcija *Prijelazni konto + troškovi protesta*. Preporučuje se popuniti ovo polje čak i ako se koristi isti konto kao za troškove, jer je obvezno za izvršavanje postupka knjiženja.
- **Prijelazni konto banke**: prijelazni konto banke koji se koristi kada se neplaćena stavka odnosi na vrijednosne papire koji nisu predani na naplatu putem ovog postupka, primjerice pri korištenju modula DocFinance.

:::danger Pozor
Ako se ovo polje popuni, postavljeni konto koristit će se neovisno o postavkama prethodno opisanih oznaka u odjeljku *Vrsta knjiženja*. Imat će prednost pred kontom protustavke koji bi se inače koristio:
- kontom vrijednosnih papira ako je vrijednosni papir *izdan*;
- kontom SBF-a u zaglavlju popisa ako je vrijednosni papir *predan na naplatu*;
- kontom bankovnog tekućeg računa ako je vrijednosni papir *odobren*.

**Stoga se preporučuje da se ovo polje ne popunjava ako nije nužno.**
:::

- **Konto za zaračunavanje troškova kupcu**: prihodovni analitički konto koji se koristi u postupku knjiženja neplaćenih stavki po cesiji ako je odabrana opcija zaračunavanja troškova kupcu.
- **Vrsta kamate**: uz neplaćenu stavku moguće je povezati referentnu kamatnu stopu. Kod mjenica je moguće simulirati početni izračun kamata za razdoblje od predviđenog datuma dospijeća mjenice do datuma evidentiranja neplaćene stavke.
- **Kreiranje jedne otvorene stavke**: ovom se opcijom omogućuje otvaranje jedne otvorene stavke za neplaćenu Ri.Ba potvrdu koja je kreirana iz više različitih otvorenih stavki. Ova se opcija u pravilu ne koristi jer se time ponovno otvaraju izvorne otvorene stavke s njihovim izvornim referencama.

:::danger Pozor
Nemojte aktivirati ovu opciju ako se provizije agenata obračunavaju na temelju izvršenog plaćanja ili ukupnog iznosa.
:::

- **Datum dospijeća jednak datumu dospijeća vrijednosnog papira**: aktiviranjem ovog parametra datum dospijeća ponovno otvorene stavke nastale zbog neplaćene stavke postavlja se na datum dospijeća vrijednosnog papira, umjesto na datum evidentiranja neplaćene stavke.