---
title: Knjiženje ulaznih računa
sidebar_position: 1
---

Postupak se otvara putem **Nabava > Ulazni računi > Procedure > Knjiženje ulaznih računa**.

### Knjiženje

Ovaj obrazac sadrži gornji dio s filtrom za pretraživanje radi pronalaženja popisa ulaznih računa u sustavu.

Na dnu obrasca nalaze se određeni parametri za upravljanje knjiženjem:

**Datum zapisa**: Datum koji će se dodijeliti knjiženju ako nije postavljena zastava *Datum unosa jednak je zadnjem datumu knjige PDV-a*;

**Datum kompetencija**: datum koji će se dodijeliti knjiženju;

**Datum unosa jednak zadnjem datumu knjige PDV-a**: aktivacijom ove zastavice sustav će za svaki račun odabrati posljednji datum knjiženja koji se koristi za odgovarajuću PDV evidenciju, i koristit će ovaj datum za knjiženje odabranih dokumenata. Ako opcija nije postavljena, omogućit će se polje *Datum zapisa* kako bi se datum knjiženja mogao ručno postaviti;

**Datum obračuna jednak datumu zapisa**: postavljanjem ove zastavice nametnut će se knjiženje s datumom obračuna jednakim datumu knjiženja. Ako je opcija onemogućena, aktivirat će se polje za datum obračuna kako bi se taj datum mogao ručno postaviti;

**Koristi tečaj iz tečajne tablice**: postavljanjem ove zastavice sustav će provjeriti tablicu tečajeva kako bi koristio tečaj koji je bio na snazi na datumu knjiženja/računa (ili posljednji uneseni ranije). Ako opcija nije postavljena, koristit će se tečaj već unesen u zaglavlju računa;

**Ažuriraj izmjene na dokumentu**: polje će biti aktivno samo ako je prethodna zastavica postavljena. Ovo polje označava ažuriranje tečaja unesenog u zaglavlju računa, zamjenjujući prethodni.

*Posebni gumb*: 

> **Knjiženje računa**: omogućuje knjiženje odabranih računa u mreži prema postavljenim parametrima.


### Gratis

Korisnik može odrediti koji će se pokloni (besplatni artikli) uključiti u računovodstveno knjiženje. Za to je potrebno postaviti odgovarajuću kontaciju za knjiženje poklona i konto za storno PDV-a.

**Knjiženje promotivnih poklona**: aktiviranjem ove opcije omogućuje se upravljanje knjiženjem poklona, čime se aktiviraju povezana polja.

Ako račun koji se knjiži sadrži poklon i:

1. parametar upravljanja nije postavljen, sustav će zatražiti potvrdu korisnika s upozorenjem o nespecificiranoj konfiguraciji. U ovom će se slučaju račun knjižiti normalno bez upravljanja linijom poklona, koju će korisnik morati ručno rukovati u računovodstvu.

2. postavljen je parametar upravljanja poklonima:

    2.1 nisu uneseni podkonti u povezanim poljima, sustav će dodati na kraj redovnog knjiženja potrebne linije za storno troškova koristeći isti podkonto postavljen za artikl.

    2.2. postavljena je zastavica **Zamjeni do konta stavke** omogućit će polje za postavljanje podkonta za storno poklona, koji će se koristiti umjesto podkonta unesenog za artikl u tim dodatnim redovima.

**Konto za storno PDV-a**: koristi se u slučaju kada artikl poklona nema opciju **Pravo naplate PDV-a**, što označava da je PDV primijenjen na artikl poklona u trošku (s zastavicom) ili nije (bez zastavice) u trošku dobavljača. Taj će se iznos zabilježiti i stornirati samo ako je unesen *Račun za storno PDV-a*, u protivnom će operacija morati biti ručno obrađena u računovodstvu. Također, u ovom polju postoji poruka za potvrdu/upozorenje korisnika o neispunjenoj postavci.

*Posebni gumb*: 

> **Spremi**: omogućuje spremanje postavljenih parametara za knjiženje poklona (i ostalih opcija).

Nakon odabira računa (iz kartice *Knjiženje*) i postavljanja parametara, računi se mogu knjižiti pomoću tipke *Knjiženje računa*.

### Prethodni

Ovaj obrazac sadrži popis provedenih knjiženja radi pregleda i, prema potrebi, poništavanja pomoću odgovarajućih tipki.

Poništenje će biti moguće samo ako je razdoblje još uvijek izmjenjivo (izvještaj o dnevniku knjiženja, neispisan PDV obrazac, neispisana periodična izvješća, računovodstveni izvještaji koji nisu zatvoreni u gotovini ili mjenicama). 

**Knjiženje računa**:  prikaz s detaljima provedenih operacija. Popunjava se nakon postupka pretraživanja i mogu se odabrati operacije na koje će se primijeniti funkcije iz trake s alatkama.

Podaci u donjim pregledima, **Ulazni računi** i **Knjiženje** odnose se na odabrani knjiženi zapis u gornjem pregledu (nakon filtriranja podataka). Osim toga, u tim posljednjim dvama pregledima može se pregledati račun i odgovarajuće knjiženje dvostrukim klikom na određeni redak.

*Posebni gumbi*:
> **Traži**: traži popis provedenih knjiženja.      
> **Ekranski pregled knjiženja**: omogućuje pregled isječka knjiženja.   
> **Povrati knjiženje**: omogućuje poništavanje odabranog knjiženog zapisa.   
> **Povrati zapis**: omogućuje poništavanje cijelog odabranog postupka s svim detaljima prikazanim u donjim pregledima.  