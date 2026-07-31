---
title: Knjiženje ulaznih računa
sidebar_position: 1
---

Procedura se otvara putem **Nabavka > Ulazni računi > Procedure > Knjiženje ulaznih računa**.

### 1. Knjiženje

U gornjem delu obrasca nalaze se filteri za pretragu spiska ulaznih računa koji se nalaze u sistemu i čekaju knjiženje.

U donjem delu obrasca nalaze se parametri za upravljanje knjiženjem:

- **Datum knjiženja**: datum knjiženja koji će biti dodeljen knjiženju ako nije aktivirana oznaka *Datum knjiženja jednak poslednjem datumu PDV registra*;
- **Datum obračuna**: datum obračunskog perioda koji će biti dodeljen knjiženju;
- **Datum unosa jednak poslednjem datumu PDV knjige**: aktiviranjem ove oznake sistem će za svaki račun pronaći poslednji datum knjiženja korišćen za PDV registar povezan sa predloškom tipa računa i koristiće taj datum za knjiženje izabranih dokumenata. Ako oznaka nije aktivirana, omogućiće se polje **Datum knjiženja** za ručni unos datuma;
- **Datum obračuna jednak datumu zapisa**: ovom oznakom određuje se da datum obračunskog perioda bude jednak datumu knjiženja. Ako se oznaka isključi, omogućiće se polje za ručni unos datuma obračunskog perioda;
- **Koristi kurs iz kursne liste**: ovom oznakom određuje se da sistem proveri kursnu listu i koristi kurs važeći na datum knjiženja odnosno datum računa (ili poslednji prethodno uneti kurs). Ako oznaka nije aktivirana, koristiće se kurs koji je već upisan u zaglavlju računa;
- **Ažuriraj izmene na dokumentu**: polje je dostupno samo ako je prethodna oznaka aktivirana. Omogućava ažuriranje kursa u zaglavlju računa, pri čemu se postojeći kurs zamenjuje novim.

#### Specifično dugme

> **Knjiženje računa**: omogućava knjiženje računa izabranih u tabeli, prema zadatim parametrima.

### 2. Besplatne stavke

Korisnik može odrediti koje će se besplatne stavke knjižiti. U tu svrhu potrebno je definisati predložak za knjiženje besplatnih stavki i konto za storno PDV-a.

- **Knjiženje promotivnih poklona**: aktiviranjem ove oznake uključuje se knjiženje besplatnih stavki i omogućavaju se odgovarajuća polja.

Ako račun koji se knjiži sadrži besplatnu stavku:

1. **Parametar upravljanja nije podešen**: sistem će korisniku prikazati upozorenje da parametar nije definisan. U tom slučaju račun će biti proknjižen na uobičajen način, bez posebne obrade reda besplatne stavke, koju će zatim biti potrebno ručno evidentirati u računovodstvu.

2. **Parametar za upravljanje besplatnim (promotivnim/gratis) stavkama je podešen**:
   - **2.1** Ako u sledećim poljima nije definisan podkonto, sistem će na kraj uobičajenih knjiženja dodati potrebne redove za storno troškova koristeći isti podkonto koji je definisan za artikal.
   - **2.2** Ako je aktivirana oznaka **Zameni do konta stavke**, omogućiće se polje za unos podkonta za storno besplatnih stavki, koji će se u tim dodatnim redovima koristiti umesto podkonta artikla.

- **Konto za storno promotivnih poklona**: koristi se kada artikal koji je iskazan kao besplatna stavka na računu nema aktiviranu oznaku **Povrat PDV-a**. Taj iznos će biti proknjižen i storniran samo ako je definisan **Konto za storno PDV-a**. U suprotnom će knjiženje morati ručno da se izvrši u računovodstvu, a sistem će upozoriti korisnika da parametar nije podešen.

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