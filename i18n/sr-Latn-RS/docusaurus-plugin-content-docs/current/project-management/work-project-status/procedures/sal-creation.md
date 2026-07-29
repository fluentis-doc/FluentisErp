---
title: Novi WPS po projektu
sidebar_position: 1
---

Ovaj postupak omogućava kreiranje **Stanja napretka radova (SAL)** na osnovu projekta. U oblasti za filtriranje moguće je postaviti različite filtere kako bi se preciznije pretražili projekti.

Nakon podešavanja filtera dovoljno je kliknuti **Traži** na alatnoj traci kako bi se rezultati prikazali u donjoj tabeli. Za pokretanje postupka izaberite red u tabeli i kliknite na dugme **Novi WPS po projektu** na alatnoj traci. Otvoriće se prozor u kojem je potrebno uneti:

**Tip**: određuje vrstu stanja napretka radova koje će biti kreirano.

**Od datuma**: određuje datum od kojeg će se prikupljati podaci za stanje napretka radova.

**Do datuma**: određuje datum do kojeg će se prikupljati podaci za stanje napretka radova.

**Datum potvrđivanja**: određuje datum potvrde stanja napretka radova.

**Uporedivo**: određuje da li će dokument ubuduće biti moguće upoređivati.

Nakon potvrde sistem će pitati da li želite da otvorite novokreirano [Stanje napretka radova](/docs/project-management/work-project-status/new-work-project-status/).

:::note[Kriterijumi za određivanje troškova resursa pri obračunu projektnog SAL-a]

Odgovarajući trošak određuje se prema sledećoj logici:

1. Da li se datum početka aktivnosti nalazi u jednom od dana označenih u **Kalendaru neradnih dana**?

> Ako da, primenjuje se vrednost definisana za **Vrstu troška: Praznik**.

2. Ako datum početka nije obuhvaćen kalendarom neradnih dana, proverava se tabela **Predviđeni radni dani** za resurs.

3. Ako datum početka ne pripada ni neradnim ni radnim danima resursa, koristi se trošak označen kao **Podrazumevani trošak za neradni dan**, ako postoji. Ako takav trošak nije definisan, koristi se trošak **Prekovremeni rad**.

4. Ako datum početka pripada redovnom radnom danu, proverava se broj sati predviđenih u smeni.

> Na primer, za prvih **8 sati** predviđenih smenom proverava se da li pripadaju glavnoj smeni.

>> Ako je glavna smena označena kao **noćna**, primenjuje se **trošak noćnog rada**. U suprotnom se primenjuje **trošak definisan u zaglavlju resursa**.

>>> Ako postoji više od predviđenih 8 sati rada, višak sati obračunava se prema sledećim pravilima:

>>> - ako je smena noćna, koristi se **prekovremeni noćni rad**
>>> - u suprotnom se koristi **prekovremeni dnevni rad**
:::

5. Ako datum početka ne pripada glavnoj smeni, proverava se da li pripada alternativnoj smeni. Tada se, na primer, uzima prvih **8 sati** predviđenih alternativnom smenom.

> - ako alternativna smena ima definisan sopstveni trošak, koristi se taj trošak
> - ako je alternativna smena označena kao **noćna**, koristi se **trošak noćnog rada**; u suprotnom se koristi **trošak definisan u zaglavlju resursa**
> Ako postoji više od predviđenih 8 sati rada, višak sati obračunava se prema sledećim pravilima:
> - ako je alternativna smena noćna, koristi se **prekovremeni noćni rad**
> - u suprotnom se koristi **prekovremeni dnevni rad**

:::

:::note[Napomena]

Ako sati usluge ulaze u dnevni fond radnih sati resursa, ali prelaze definisanu vremensku zonu, i dalje će se obračunavati kao **redovni rad**, a ne kao **prekovremeni rad**.

:::