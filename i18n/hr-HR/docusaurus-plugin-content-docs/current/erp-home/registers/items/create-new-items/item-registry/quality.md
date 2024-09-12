---
title: Kvaliteta
sidebar_position: 19
---

Na ovoj Kartici će se definirati niz informacija koje su korisne za procese kontrole kvalitete (ako ih ima) za taj proizvod..

### Lokacije 

In questa sezione si andrà a definire il luogo all'interno del magazzino in cui l'articolo dovrà essere ubicato; in particolare si potranno definire:

**Vrsta lokacije**: odnosno gdje želimo smjestiti artikl;

**Lokacija mono-artikal**: ako je aktivno, ovaj flag označava da se na toj lokaciji može smjestiti samo određena vrsta artikla; ne mogu postojati dva različita artikla na istoj lokaciji istovremeno;

**Lokacija mono-lot**: ako je ovaj flag aktivan, to znači da se na toj lokaciji može smjestiti ne samo jedna vrsta artikla, već se na toj lokaciji može smjestiti samo jedan lot tog artikla i ne više lotova istog artikla istovremeno;

### Skladišna kretanja

U ovoj sekciji definiraju se informacije koje su korisne za evidenciju skladišta za ovaj artikl, kao što su:

**Ručno opterećenje dopušteno**: ako je aktivno, ovaj flag označava da se ovaj artikl može ručno utovariti u skladište;

**Pomicanje blokova**: koristi se u prilagodbama kako bi se spriječilo spremanje ručnog pravila ako pripadajuća vrijednost (iz standarda ili stvarne vrijednosti artikla ili serije) premašuje specificiranu **Maksimalnu Vrijednost** za utovar/istovar. Ne koristi se u standardu;

**Maksimalna Vrijednost utovara/Maksimalna Vrijednost istovara**: koriste se u prilagodbama (uz flag Pomicanje blokova) kao referentne vrijednosti za sprječavanje spremanja ručnog pravila ako pripadajuća vrijednost (iz standarda ili stvarne vrijednosti artikla ili serije) premašuje navedenu vrijednost. Ne koriste se u standardu;

**Trošak za korištenje**: u ovom pododjeljku označava se kako se planira vrednovati artikl, da li se uzima u obzir stvarni trošak ili standardni trošak;

### Nabava

U ovom sekciji naznačuje se treba li se prilikom primanja materijala za kupnju provesti ulazne provjere materijala ili nisu potrebne, navođenjem:

**Kontrole u prihvaćanju**: putem kombiniranog okvira odabire se vrsta kontrole koja se mora obaviti (unutarnja/nespecificirana/specificirana/službena), a pomoću polja uz to, putem pomoći, odabire se vrsta plana kontrole između kodificiranih planova kontrole dostupnih u odgovarajućem obrascu koji se pristupa putem putanje **Kvaliteta > Kontrolni planovi**.

**Kontrole pri prihvaćanju nisu obavezne**: ako je ovaj flag aktiviran, označava da nisu potrebne kontrole pri prihvaćanju; 

### Proizvodnja

U ovoj sekciji se specificiraju informacije koje se odnose na proizvodnju materijala, uvijek povezane s kontrolom kvalitete, poput:

**% tolerancije na proizvedenu količinu**: ovdje će se navesti postotak tolerancije na količinu proizvedenu više i/ili manje,

**Tehnička kartica**: u ovim poljima odabire se, gdje je dostupno, tehnički list i vrsta tehničkog lista vezani za ovaj artikl;

**Tehnički podaci potrebni**: u slučaju da materijal ne zahtijeva tehnički list, ovaj će se flag aktivirati;

### Kvaliteta

U ovom sekciji navodi se vremenski period analize potreban za provođenje preliminarnih kontrola nad artiklom.

**Analiza pripremnog vremena**: ako je aktivna ovaj flag, to znači da je za taj materijal potrebna kontrola kvalitete koja zahtijeva određeni vremenski period (u danima), što je naznačeno u susjednom polju; ovo služi za određivanje koliko dana nakon primitka materijala može biti korišten u proizvodnji ili, u slučaju gotovog proizvoda, koliko dana nakon proizvodnje materijala može biti poslan;

### Postprodaja

U ovoj završnoj sekciji navest ćemo eventualnu jamstvo koje se pruža za materijal i odgovarajuće dane jamstva, aktivirajući opciju **S Jamstvom** i unoseći broj dana jamstva u odgovarajuće polje; u slučaju da materijal nema jamstvo, opcija će biti isključena.
