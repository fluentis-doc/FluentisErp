---
title: Knjiženje popisa
sidebar_position: 2
---

Obrazac se nalazi u Riznica > Portfelj efekata > Knjiženja > Knjiženje popisa.

Iz ovog obrasca pristupa se knjiženju naloga za plaćanje: postupak će zatvoriti račun povezan s [**vrstom**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) mjenica unesenih u nalog te otvoriti prijelazni račun banke unesen u nalogu.

::tip[Napomena]
Generalno, ovu proceduru možete izvesti izravno **unutar popisa materijala** pomoću odgovarajuće tipke za **Knjiženje**..

Iz ovog obrasca moguće je izvršiti masovno knjiženje više popisa materijala.
:::

## Knjiženje popisa

1. Iskoristite gornji dio obrasca za filtriranje pretraživanja popisa za knjiženje. Knjiženje popisa može se izvršiti samo za popise koji su otisnuti.

2. Odaberite iz središnjeg dijela obrasca popise koje želite knjižiti.

3. Ispunite parametre za contabilizaciju, kao što su **knjigovodstveni predložak**, **datum registracije** i datum odobrenja.

:::note[Napomena]
Ovaj se odjeljak može unaprijed definirati unutar [**parametara**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) modula Portfelj mjenica.  
:::

Flag **knjigovodstvo na datum dospijeća**: razdijelit će registraciju popisa na različite datume dospijeća efekata s dodatkom dana banke postavljenih u kartonu banke za zadani uzrok.

Flag **datum isteka s datumom valute koji je jednak datumu dospijeća**: zabilježiti će različite učinke na razne datume isteka, ali s datumom valute banke ispravljenim prema danima banke postavljenim u kartonu banke.

4. Kliknite gumb na traci izbornika **Knjiži popise**


**Specifični gumbi**

**Traži**: Pretraži popis izvještaja za knjiženje.

**Knjiženje**: Izvršava knjiženje za odabrane stavke.


### Predhodni

S kartice prethodne moguće je poništiti izvršena knjiženja. 

Poništavanje će biti moguće samo ako je razdoblje još uvijek moguće mijenjati (knjiga dnevnika nije ispisana i računi nisu zatvoreni). 

Dvostruki klik na odjeljak s registracijama omogućit će prikaz pripadajuće računovodstvene registracije.


**Specifični gumbi**

**Traži**: Pretraži popis izvršenih knjiženja.

**Poništavanje knjiženja**: Izvršava obnovu odabranih knjiženja.

**Poništavanje registracija**: Izvršava obnovu odabrane računovodstvene registracije.

Prisutna je kartica sa detaljima za prikaz grešaka otkrivenih tijekom knjiženja.


