---
title: Prikaži konta
sidebar_position: 2
---

Ova forma omogućuje pregled računovodstvenih zapisa bilo kojeg konta ili podkonta, bez obzira na vrstu (aktiva, pasiva, troškovi, prihodi ili analitički konto). Pregled svih kretanja za sve računovodstvene godine uvijek je dostupan. Ovisno o zatvaranju razdoblja nakon obveznih poreznih izvještaja ili zbog operacija zatvaranja konta, zapisi se mogu i mijenjati.

## Testata:

U gornjem dijelu obavezno je unijeti šifru konta ili izravno podračun, ostala polja filtra su opcionalna.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)


## Prikaz podataka: 

Prema zadanim postavkama, popis je poredan po datumu knjiženja silazno (kriterij poretka može se promijeniti) i prikazuje kretanje prema postavljenim filtrima.

S ovim postavkama podaci se čitaju uzimajući u obzir sljedeće:

-  ako filtriramo prema 'od datuma knjiženja' 01/01/yyyy, u poljima (gore) **Saldo prethodnog stanja** prikazat će se ukupna dugovna i potražna strana za knjiženja prije 01/01/yyyy,

- U prikazu kretanja podaci će biti prikazani od najnovijih prema najstarijima (kronološki), 

- Polje **Progresivan** će u posljednjem retku prikazati iznos iz polja **Saldo prethodnog stanja** ažuriran vrijednošću iz istog retka, a zatim će se ažurirati redak po redak od dolje prema gore.

:::note[NAPOMENA]
Polje **Progresivan** je vidljivo samo ako je zadržan zadani redoslijed prikaza u formi; u suprotnom slučaju, polje nestaje i da bi se ponovno prikazalo, potrebno je zatvoriti i ponovno otvoriti formu te ponovno izvršiti pretragu.
:::


## Ukupni iznosi na dnu forme:

**Odaberi stanje**: zbroj dugovnih/potražnih iznosa,  koji su odabrani u tablici mišem; ako odaberete sve retke u tablici (pomoću ctrl+a), ovo polje će prikazati isti rezultat kao i polje *Trenutni saldo*. 

**Tekuće stanje**: zbroj dugovnih/potražnih iznosa za sve prikazane redove (uvijek sve, neovisno o selekciji napravljenoj mišem);  

**Ukupno**: zbroj dugovnih/potražnih iznosa prethodnog salda i trenutnog salda;  

**Saldo**: konačni saldo, bilo dugovni ili potražni (koji će uvijek odgovarati progresivnom saldu prikazanom u prvom retku).


:::tip[Kako čitati i interpretirati ukupne iznose]
**Dugovanje/Potraživanje prethodno** (prema filtriranom rasponu i posljednjem otvaranju računa) **+ Trenutni saldo = Ukupno** (obe kolone dugovanje/potraživanje uvijek su popunjene u ova 3 bloka).

**Prethodni saldo + Trenutni saldo** (kao razlika dugovanje - potraživanje) **= Saldo** (trenutni)

*Trenutni saldo* prikazan je u oba odjeljka kako bi se analitički prikazao izračun *Ukupnog* (jer se za njegov izračun na Trenutni saldo dodaju dvije odvojene sekcije *Dugovanje / Potraživanje prethodno*)

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::



U prikazu su vidljive dviprikazanih podračuna: podračun zaglavlja (koji se preuzima iz podračuna nositelja knjiženja iz kojeg je preuzet pokret) i podračun detalja, koji je zapravo podračun za koji se pretražuju pokreti. Na primjer, ako pregledavamo pokrete generičkog troškovnog računa, u podračunu zaglavlja prikazat će se šifre dobavljača koji su nam poslali račune knjižene na taj troškovni račun, dok će u podračunu detalja biti prikazani pojedinačni specifični podračuni troškova.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)

 
Također je moguće "proširiti" redak pomoću klika na + s lijeve strane kako bi se prikazalo cijelo računovodstveno knjiženje.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)


Dodatne operacije koje se mogu izvršiti u pregledu podataka:

- Dvostruki klik na pojedini prikazani redak: U ovom slučaju, ako korisnik ima odgovarajuća prava, otvorit će se obrazac za uređivanje pripadajućih zapisa kretanja;

- Pritiskom na tipku **Izmijeni** smješten u traci izbornika: ima isti učinak kao i dvostruki klik na opisani redak;

- Pritiskom na tipku  **Dokument porijekla**, kada je aktivan: Otvorit će se pregled (ako korisnik ima odgovarajuća prava) ulaznih ili izlaznih računa koji su kreirali odabrani računovodstveni zapis prilikom knjiženja;

PODRUČJE FILTRA: Područje filtra je namijenjeno za prikaz popisa mogućih uvjeta pomoću kojih je moguće izvršiti selekciju. Filtri su tipično uvijek u uvjetu 'AND', i moguće je specificirati više kriterija filtra istovremeno.

PRIKAZ REZULTATA: Prikaz rezultata predstavlja popis računovodstvenih zapisa koji odgovaraju gore specificiranim uvjetima filtra. Korisnik, nakon što specificira vrijednosti pomoću kojih želi pretražiti zapise, pritiskom na tipku [Traži] u meniju, dobit će u prikazu rezultata popis željenih zapsia.

:::important Pogledaj također
[**VIDEO TUTORIJALI O RAČUNOVODSTVENIM ZAPISIMA**](/docs/video/finance/intro)
:::





