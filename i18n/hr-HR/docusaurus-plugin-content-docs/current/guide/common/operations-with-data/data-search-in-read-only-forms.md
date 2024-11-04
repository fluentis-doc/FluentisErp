---
title: Pretraživanje podataka u obrazcima samo za čitanje
sidebar_position: 2
---

Pretraživanje u obrazcima samo za čitanje omogućuje pronalaženje prethodno unesenih zapisa kako bi ih se moglo *pregledati*, *izmijeniti* , *izbrisati*, itd. ako korisnik ima **potrebna prava** za te operacije. 

Neki obrazci ovog tipa sadrže gumb za unos ![](/img/neutral/common/new.png) koji, nakon što se pritisne, otvara formu za unos novih zapisa.  

U obrazcima za pretraživanje moguće je prikazati: jedan zapis (filter prema broju dokumenta), više zapisa (filter prema datumu), zapise unesene u određenoj godini (filter prema godini), zapise unesene za određeni subjekt (filter prema računu/podračunu), itd.  


**Pretraživanje u obrascima samo za čitanje** dijeli se na tri dijela:  

### 1. Traka za napredno pretraživanje  

Ova višenamjenska traka omogućuje pretraživanje po ključnim riječima unutar raznih polja prisutnih u dokumentima predmetnog obrasca.  

Kriterij pretraživanja, u slučaju unosa više od jedne ključne riječi, može biti:  

- OR ako su riječi odvojene s DVA razmaka (tražit će bilo koju od unesene dvije ili više riječi u odgovarajućim poljima)  
- AND ako su riječi odvojene JEDNIM razmakom (tražit će obje riječi zajedno kao ključnu riječ u odgovarajućim poljima)  
 
:::note NAPOMENA

Da biste saznali na kojim poljima dokumenta se vrši pretraga, možete pristupiti *Object navigator* (s desne strane) i klikom desnom tipkom miša odabrati opciju *Detalji*. 

U prozoru koji se otvori ponovno odaberite objekt i klikom desnom tipkom miša odaberite *Izmijeni standardni objekt*. Zatim odaberite karticu *Modeli pretraživanja* u mreži dolje lijevo.  

:::

### 2. Područje filtra

Filtri su obično u uvjetu 'AND', što znači da je moguće unijeti više filtara istovremeno.   

Kliknite na strelice ![](/img/neutral/common/arrow.png) za otvaranje  [expandera](/docs/guide/common/glossary/glossary-intro#expander) i filtriranje prema podacima sadržanim u njima.   

Nakon unosa željenih filtara, pritisnite gumb **Traži** da biste dobili popis podataka.  


:::note NAPOMENA
Područje filtra može biti prikazano već otvoreno prilikom otvaranja obrasca ako je "zaključano" pritiskom na gumb s ikonom spajalice (*Pin*)
:::

![](/img/neutral/common/pin.png)

### 3. Mreža rezultata

Predstavlja popis podataka koji odgovaraju filtrima unesene u područje filtra.

U mreži rezultata možete odabrati jedan ili više redaka.  

*Karakteristike mreže* 

Prvi redak mreže je filtar (ikona na zaglavlju retka ima sliku lijevka ![](/img/neutral/common/filter.png)): kada otvorite obrazac, dovoljno je izvršiti pretraživanje da biste vidjeli zapise prisutne u njemu i aktivirali unos (ako je predviđen) ili upravljanje mrežom.

Filtar u tekstualnim poljima ne razlikuje velika i mala slova. Kada počnete filtrirati zapise preko zaglavlja stupaca, na dnu obrasca pojavit će se ploča koja pokazuje kako će se filtar primijeniti: na ekstremnom desnom dijelu ove sekcije pojavit će se i gumb za zatvaranje/poništavanje filtra, kao i korisni gumb ![](/img/neutral/common/pencil.png) za uređivanje filtra, gdje možete dodati složenije filtre na vođeni način.  

*Detalji*: [Filtriranje i razvrstavanje zapisa u mrežama](/docs/guide/common/operations-with-data/filter-sort-and-other-operations-with-records-in-grids).