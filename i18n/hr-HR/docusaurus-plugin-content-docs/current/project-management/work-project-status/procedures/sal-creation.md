---
title: Novi WPS po projektu
sidebar_position: 1
---

Ovaj postupak omogućuje kreiranje **Stanja napretka radova (SAL)** na temelju projekta. U području za filtriranje moguće je postaviti različite filtre kako bi se preciznije pretražili projekti.

Nakon postavljanja filtara dovoljno je kliknuti **Traži** na alatnoj traci kako bi se rezultati prikazali u donjoj tablici. Za pokretanje postupka odaberite redak u tablici i kliknite gumb **Novi WPS po projektu** na alatnoj traci. Otvorit će se prozor u kojem je potrebno unijeti:

**Tip**: određuje vrstu stanja napretka radova koje će se kreirati.

**Od datuma**: određuje datum od kojeg će se prikupljati podaci za stanje napretka radova.

**Do datuma**: određuje datum do kojeg će se prikupljati podaci za stanje napretka radova.

**Datum potvrđivanja**: određuje datum potvrde stanja napretka radova.

**Usporedivo**: određuje hoće li dokument u budućnosti biti moguće uspoređivati.

Nakon potvrde sustav će upitati želite li otvoriti novokreirani [Stanje napretka radova](/docs/project-management/work-project-status/new-work-project-status/).

:::note[Kriteriji za određivanje troškova resursa pri izračunu projektnog SAL-a]

Odgovarajući trošak određuje se prema sljedećoj logici:

1. Nalazi li se datum početka aktivnosti u jednom od dana označenih u **Kalendaru neradnih dana**?

> Ako da, primjenjuje se vrijednost definirana za **Vrstu troška: Blagdan**.

2. Ako datum početka nije obuhvaćen kalendarom neradnih dana, provjerava se tablica **Predviđeni radni dani** za resurs.

3. Ako datum početka ne pripada ni neradnim ni radnim danima resursa, koristi se trošak označen kao **Zadani trošak za neradni dan**, ako postoji. Ako takav trošak nije definiran, koristi se trošak **Prekovremeni rad**.

4. Ako datum početka pripada redovnom radnom danu, provjerava se broj sati predviđenih u smjeni.

> Primjerice, prvih **8 sati** predviđenih smjenom provjerava se pripadaju li glavnoj smjeni.

>> Ako je glavna smjena označena kao **noćna**, primjenjuje se **trošak noćnog rada**. U suprotnom se primjenjuje **trošak definiran na zaglavlju resursa**.

>>> Ako postoji više od predviđenih 8 sati rada, višak sati obračunava se prema sljedećim pravilima:

>>> - ako je smjena noćna, koristi se **prekovremeni noćni rad**
>>> - u protivnom se koristi **prekovremeni dnevni rad**

5. Ako datum početka ne pripada glavnoj smjeni, provjerava se pripada li alternativnoj smjeni. Tada se, primjerice, uzima prvih **8 sati** predviđenih alternativnom smjenom.

> - ako alternativna smjena ima definirani vlastiti trošak, koristi se taj trošak
> - ako je alternativna smjena označena kao **noćna**, koristi se **trošak noćnog rada**; u suprotnom se koristi **trošak definiran na zaglavlju resursa**

> Ako postoji više od predviđenih 8 sati rada, višak sati obračunava se prema sljedećim pravilima:

> - ako je alternativna smjena noćna, koristi se **prekovremeni noćni rad**
> - u protivnom se koristi **prekovremeni dnevni rad**

:::

:::note[Napomena]

Ako sati usluge ulaze u dnevni fond radnih sati resursa, ali prelaze definiranu vremensku zonu, i dalje će se obračunavati kao **redovni rad**, a ne kao **prekovremeni rad**.

:::