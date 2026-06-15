---
title: Knjiženje nenaplaćenih dospjelih računa
sidebar_position: 4
---

Obrazac se nalazi na putanji **Riznica > Vrijednosni papiri > Knjiženja > Knjiženje nenaplaćenih dospjelih računa**.
Ova funkcija služi za knjiženje nenaplaćenih vrijednosnih papira. Postupak ponovno otvara otvorene stavke kupaca povezane s nenaplaćenim vrijednosnim papirima te po potrebi generira račun za terećenje troškova.

### Posebne funkcije

- **Pretraži**: prikazuje popis nenaplaćenih vrijednosnih papira spremnih za knjiženje.
- **Knjiži**: izvršava knjiženje za označene zapise.

## Kako knjižiti nenaplaćeni vrijednosni papir

1. U gornjem dijelu obrasca postavite filtre za pronalaženje nenaplaćenih vrijednosnih papira.
   > Prije knjiženja potrebno je prethodno evidentirati nenaplaćene vrijednosne papire.
2. U središnjoj tablici označite vrijednosne papire koje želite knjižiti.
3. Unesite parametre knjiženja:
   - **Konto-knjiženje**
   - **Datum knjiženja**

:::note Napomena
Ove se vrijednosti mogu unaprijed definirati u parametrima modula [**Nenaplaćeni vrijednosni papiri**](/docs/configurations/parameters/treasury/unpaids-parameters).

Posebno:
- konto-knjiženje predlaže se prema postavkama modula,
- datum knjiženja predlaže se kao tekući datum,
- podkonta za **Troškove protesta** i **Prijelazni konto** preuzimaju se iz parametara modula, ali ih je moguće promijeniti ili unijeti ručno za pojedinu obradu.

Opcija **Zbirno knjiženje** omogućuje knjiženje svih nenaplaćenih vrijednosnih papira iste banke u jednom knjižnom nalogu. Ova se mogućnost rijetko koristi, osobito kada konto-knjiženje zahtijeva obvezan unos broja i datuma računa.
Opcija **Terećenje troškova kupcu** omogućuje ponovno fakturiranje troškova kupcu. Aktiviranjem ove opcije prikazuje se dodatna sekcija za generiranje izlaznog računa umjesto izravnog knjiženja troškova u glavnu knjigu. Za kreiranje računa potrebno je popuniti sva obavezna polja.

Također je potrebno definirati:
- **Vrstu plaćanja**
- **Datum dospijeća** za ponovno otvorenu stavku

ili aktivirati opciju:
- **Datum dospijeća jednak datumu dospijeća vrijednosnog papira**

I ovi se podaci mogu automatski predložiti iz parametara modula.
:::

4. Kliknite **Knjiženje** na alatnoj traci.

## Kartica Prethodna knjiženja

Na kartici **Prethodna knjiženja** moguće je poništiti prethodno izvršena knjiženja.
Poništenje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno za izmjene (glavna knjiga nije zaključena i nisu izvršena završna zatvaranja konta).
Dvostrukim klikom na zapis moguće je otvoriti povezani knjižni nalog.
Dostupan je i pregled pogrešaka nastalih tijekom knjiženja.

### Posebne funkcije
- **Pretraži**: prikazuje popis izvršenih knjiženja.
- **Poništi knjiženje**: poništava odabrana knjiženja.
- **Poništi nenaplaćeni vrijednosni papir**: poništava odabrani knjižni nalog povezan s pojedinačnim nenaplaćenim vrijednosnim papirom.

Dostupna je i posebna kartica za pregled svih pogrešaka evidentiranih tijekom postupka knjiženja.