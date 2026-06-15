---
title: Knjiženje nenaplaćenih dospelih potraživanja
sidebar_position: 4
---

Obrazac se nalazi na putanji **Blagajna > Vrednosni papiri > Knjiženja > Knjiženje nenaplaćenih dospelih potraživanja**.

Ova funkcija služi za knjiženje nenaplaćenih vrednosnih papira. Postupak ponovo otvara otvorene stavke kupaca povezane sa nenaplaćenim vrednosnim papirima i po potrebi generiše račun za zaduženje troškova.

### Posebne funkcije

- **Pretraži**: prikazuje listu nenaplaćenih vrednosnih papira spremnih za knjiženje.
- **Knjiži**: izvršava knjiženje za označene zapise.

## Kako knjižiti nenaplaćeni vrednosni papir

1. U gornjem delu obrasca postavite filtere za pronalaženje nenaplaćenih vrednosnih papira.

   > Pre knjiženja potrebno je prethodno evidentirati nenaplaćene vrednosne papire.

2. U centralnoj tabeli označite vrednosne papire koje želite da knjižite.

3. Unesite parametre knjiženja:
   - **Kontni nalog**
   - **Datum knjiženja**

:::note Napomena
Ove vrednosti mogu biti unapred definisane u parametrima modula [**Nenaplaćeni vrednosni papiri**](/docs/configurations/parameters/treasury/unpaids-parameters).

Posebno:

- kontni nalog se predlaže prema podešavanjima modula,
- datum knjiženja se predlaže kao tekući datum,
- podkonta za **Troškove protesta** i **Prelazni konto** preuzimaju se iz parametara modula, ali ih je moguće izmeniti ili uneti ručno za pojedinačnu obradu.

Opcija **Zbirno knjiženje** omogućava knjiženje svih nenaplaćenih vrednosnih papira iste banke u jednom knjižnom nalogu. Ova mogućnost se retko koristi, naročito kada kontni nalog zahteva obavezan unos broja i datuma računa.

Opcija **Zaduženje troškova kupcu** omogućava ponovno fakturisanje troškova kupcu. Aktiviranjem ove opcije prikazuje se dodatna sekcija za generisanje izlaznog računa umesto direktnog knjiženja troškova u glavnu knjigu. Za kreiranje računa potrebno je popuniti sva obavezna polja.

Takođe je potrebno definisati:

- **Vrstu plaćanja**
- **Datum dospeća** za ponovo otvorenu stavku

ili aktivirati opciju:

- **Datum dospeća jednak datumu dospeća vrednosnog papira**

I ovi podaci mogu biti automatski predloženi iz parametara modula.
:::

4. Kliknite na **Knjiženje** na alatnoj traci.

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.

Poništavanje je moguće samo ako je obračunski period još uvek otvoren za izmene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).

Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.

Dostupan je i pregled grešaka nastalih tokom knjiženja.

### Posebne funkcije

- **Pretraži**: prikazuje listu izvršenih knjiženja.
- **Poništi knjiženje**: poništava odabrana knjiženja.
- **Poništi nenaplaćeni vrednosni papir**: poništava odabrani knjižni nalog povezan sa pojedinačnim nenaplaćenim vrednosnim papirom.

Dostupna je i posebna kartica za pregled svih grešaka evidentiranih tokom postupka knjiženja.