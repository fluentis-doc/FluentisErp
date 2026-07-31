---
title: Knjiženje ulaznih računa
sidebar_position: 1
---

Procedura se otvara putem **Nabava > Ulazni računi > Procedure > Knjiženje ulaznih računa**.

### 1. Knjiženje

U gornjem dijelu obrasca nalaze se filtri za pretraživanje popisa ulaznih računa koji se nalaze u sustavu i čekaju knjiženje.

U donjem dijelu obrasca nalaze se parametri za upravljanje knjiženjem:

- **Datum knjiženja**: datum knjiženja koji će biti dodijeljen knjiženju ako nije aktivirana oznaka *Datum knjiženja jednak posljednjem datumu PDV registra*;
- **Datum obračuna**: datum obračunskog razdoblja koji će biti dodijeljen knjiženju;
- **Datum unosa jednak zadnjem datumu knjige PDV-a**: aktiviranjem ove oznake sustav će za svaki račun pronaći posljednji datum knjiženja korišten za PDV registar povezan s predloškom vrste računa te će taj datum koristiti za knjiženje odabranih dokumenata. Ako oznaka nije aktivirana, omogućit će se polje **Datum knjiženja** za ručni unos datuma;
- **Datum obračuna jednak datumu zapisa**: ovom se oznakom određuje da datum obračunskog razdoblja bude jednak datumu knjiženja. Ako se oznaka isključi, omogućit će se polje za ručni unos datuma obračunskog razdoblja;
- **Koristi tečaj iz tečajne tablice**: ovom se oznakom određuje da sustav provjeri tečajnu listu i koristi tečaj važeći na datum knjiženja odnosno datum računa (ili posljednji prethodno uneseni tečaj). Ako oznaka nije aktivirana, koristit će se tečaj koji je već upisan u zaglavlju računa;
- **Ažuriraj izmjene na dokumentu**: polje je dostupno samo ako je prethodna oznaka aktivirana. Omogućuje ažuriranje tečaja u zaglavlju računa, pri čemu se postojeći tečaj zamjenjuje novim.

#### Poseban gumb

> **Knjiženje računa**: omogućuje knjiženje računa odabranih u tablici, prema zadanim parametrima.

### 2. Gratis

Korisnik može odrediti koje će se besplatne stavke knjižiti. U tu je svrhu potrebno definirati predložak za knjiženje besplatnih stavki i konto za storniranje PDV-a.

- **Knjiženje promotivnih poklona**: aktiviranjem ove oznake uključuje se knjiženje besplatnih stavki te se omogućuju pripadajuća polja.

Ako račun koji se knjiži sadrži besplatnu stavku:

1. **Parametar upravljanja nije postavljen**: sustav će korisniku prikazati upozorenje da parametar nije definiran. U tom će se slučaju račun knjižiti na uobičajen način, bez posebne obrade retka besplatne stavke, koju će zatim biti potrebno ručno evidentirati u računovodstvu.

2. **Parametar za upravljanje besplatnim (promotivnim/gratis) stavkama je postavljen**:
   - **2.1** Ako u sljedećim poljima nije definiran podkonto, sustav će na kraj uobičajenih knjiženja dodati potrebne retke za storniranje troškova koristeći isti podkonto koji je definiran za artikl.
   - **2.2** Ako je aktivirana oznaka **Zamijeni do konta stavke**, omogućit će se polje za unos podkonta za storniranje besplatnih stavki, koji će se u tim dodatnim recima koristiti umjesto podkonta artikla.

- **Konto za storno promotivnih poklona**: koristi se kada artikl koji je iskazan kao besplatna stavka na računu nema aktiviranu oznaku **Povrat PDV-a**. Taj će se iznos knjižiti i stornirati samo ako je definiran **Konto za storniranje PDV-a**. U suprotnom će se knjiženje morati ručno obaviti u računovodstvu, a sustav će korisnika upozoriti da parametar nije postavljen.

#### Poseban gumb

> **Spremi**: omogućuje spremanje zadanih parametara za knjiženje besplatnih stavki.

Nakon odabira računa (na kartici **Knjiženje**) i postavljanja parametara, računi se mogu knjižiti pomoću gumba **Knjiženje računa**.

### 3. Prethodni

Obrazac prikazuje popis izvršenih postupaka knjiženja kako bi ih bilo moguće pregledati i, prema potrebi, poništiti pomoću odgovarajućih gumba.

Poništavanje je moguće samo ako je obračunsko razdoblje još uvijek otvoreno za izmjene (dnevnik nije ispisan, PDV registar nije ispisan, periodični obračun PDV-a nije ispisan, zatvaranje konta nije izvršeno te računovodstvena dospijeća plaćanja nisu zatvorena naplatom ili naplatnim instrumentom).

- **Knjiženje**: tablica s detaljima izvršenih knjiženja. Popunjava se nakon pretraživanja, a moguće je odabrati knjiženja na kojima će se primijeniti funkcije dostupne na alatnoj traci.

Podaci u donjim tablicama **Dokumenti** i **Zapis glavne knjige** odnose se na operaciju odabranu u gornjoj tablici. Dvostrukim klikom u odjeljku računa odnosno knjiženja moguće je otvoriti pripadajući račun ili računovodstveno knjiženje.

#### Posebni gumbi

> **Traži**: pretražuje popis izvršenih knjiženja.  
> **Ekranski pregled knjiženja**: prikazuje pretpregled ispisa knjiženja.  
> **Povrati knjiženje**: briše odabrano knjiženje.  
> **Povrati zapis**: briše cijelu odabranu operaciju zajedno sa svim njezinim detaljima prikazanima u dvjema donjim tablicama.

### 4. Poruke o pogreškama

Pogledajte stranicu o [**knjiženju izlaznih računa**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting).