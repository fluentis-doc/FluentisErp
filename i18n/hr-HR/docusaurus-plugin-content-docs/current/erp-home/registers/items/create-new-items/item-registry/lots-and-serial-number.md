---
title: Lotovi i serijski broj
sidebar_position: 17
---

Artikl se može upravljati u Lotovima ili prema Serijskim Brojevima, a od svakog koda artikla mogu se stvoriti podgrupe koje se također mogu upravljati u lotovima ili prema serijskim brojevima.

Lotovi su skupine homogenih količina artikala koje ulaze u tvrtku (kupovni lotovi) ili se proizvode u samoj tvrtki (proizvodni lotovi).

Svaki lot mora imati jedinstvenu oznaku iz koje se dobivaju određene informacije koje karakteriziraju sam lot. Ovu oznaku tvrtka može definirati u prozoru **Vrsta šifre lota** ili, u slučaju kupovnih lotova, može odlučiti zadržati istu oznaku lota kao i dobavljač.

Svaki lot mora biti moguće pratiti, a u slučaju više skladišta, pomoću oznake lota trebalo bi biti moguće pratiti podatke o zalihama za svako pojedino skladište.

Unutar ove kartice, definirat će se parametri ovisno o vrsti upravljanja koju ćete odabrati za određeni proizvod i koja će se primjenjivati putem odgovarajućih flaga koje se nalaze na početku ove kartice  **Upravljano serijama** - **Upravljano serijskim brojevima**.

### Upravlajnje lotovima 

**Vrsta preuzimanja lota**: ako picking, prema datumu isteka ili ručno;

**Vrsta šifre lota**: u ovom slučaju odabire se vrsta koda lota (i povezane karakteristike postavljene za njegovo kreiranje) koju ste definirali u prozoru *Vrsta koda lota*, a koja proizlazi iz konkatenacije više polja.  

**Početni status lota**: obično je svaki pojedinačni lot karakteriziran određenim stanjem koje određuje njegovu valjanost. Za određene vrste materijala, kao što su prehrambeni i farmaceutski proizvodi, stanje je obavezno (npr. u farmaceutskom sektoru, lot koji zahtijeva analizu prije upotrebe bit će u početnom stanju 'karantene' dok se analize ne dovrše); za ove vrste proizvoda stanje će biti popraćeno datumom isteka kako bi se spriječila prodaja i uporaba isteklih proizvoda. Na temelju stanja lota, može se odabrati da se upravlja putem Rfid-a ili jedinstvenog Rfid-a;

**Upravljano RFid-om**: ako je aktivirano, artikl će se upravljati putem tehnologije RFID-a (radiofrekvencija) pomoću aplikacije;   

**Fluentis Mobile**: ova tehnologija se temelji na pohrani podataka pomoću posebnih oznaka koje služe za identifikaciju informacija o artiklima. Pomoću mobilnog uređaja, ove oznake se mogu daljinski upitati putem radiofrekvencijske tehnologije;   

**Jedinstveni RFID**: ako aktiviran, RFID kod povezan s artiklom je jedinstven za taj artikl;   

**Tipovi roka trajanja lota**: odaberite vrstu roka trajanja koju želite dodijeliti lotu (datum isteka, zadnji dan mjeseca isteka, prvi dan mjeseca isteka);   

**Ažuriranje datuma isteka lota**: ako je aktivirano, omogućuje ručno mijenjanje datuma isteka lota;

**Unaprijed blokirajte lot izraženo u danima**: dva polja, **Upozorenje na blokadu** i **Blokada** omogućuju izražavanje u danima, kada upozoriti da će taj lot biti blokiran i odrediti dan blokade lota;

**Loto jednog dobavljača**: ako je aktivirano, označava da će taj lot sadržavati samo artikle od istog dobavljača.; 

Može se alternativno odabrati upravljanje artiklom putem **Serijskog broja**. U ovom slučaju, za svaki komad se stvara jedinstveni serijski broj koji jednoznačno identificira taj komad unutar strukture kako bi se pratila njegova putanja. Ovaj tip upravljanja posebno je pogodan za artikle koji se smatraju *kritičnima* ili *visokovrijednima*, za koje je potrebno pratiti svaki pojedini komad, a ne cjelokupnu količinu.

### Upravljanje serijskim brojem

**Tip koda serijskog broja**: odabrati prema predefiniranom tipu u tablici **Tip šifre serijskog broja**;  

**Dani važenja serijskog broja**: označava koliko dana će ovaj kod biti važeći;  

**Generacija serijskog broja**: za postavljanje načina stvaranja serijskog broja, bilo ručno ili automatski;  

**Upravljanje bojom i količinom**: polje koje je usko povezano s modnom industrijom.  