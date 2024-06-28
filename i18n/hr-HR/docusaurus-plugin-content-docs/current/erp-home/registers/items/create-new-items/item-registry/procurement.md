---
title: Nabava
sidebar_position: 3
---

U ovoj Kartici definiraju se svi podaci potrebni za nabavu predmetnog članka.

Prozor se sastoji od dvije dijelove: 

1. U prvom dijelu postavljaju se podaci za opskrbu općenito za artikl, a ne za pojedini skladište:

**Minimalna zaliha i maksimalna zaliha**: predstavlja minimalne količine koje uvijek moraju biti prisutne u skladištu za taj artikl i maksimalne količine koje se mogu čuvati u skladištu;

**Dani zalihe**: dani potrebni za popunjavanje minimalnih zaliha koje su određene za taj artikl;

**Tjedni pokrivanja**: označava vremenski interval (izračunat u tjednima) tijekom kojeg zaloga pokriva potrebu za tim artiklom;

**Indeks pokrivenosti**: ovo je polje koje se može uređivati, a unosi se postotak koji se može ili ne mora uzeti u obzir od strane planera ili MRP-a za obnavljanje zaliha.

Ako se u parametrima MRP postavi flag *Uzmi u obzir indeks pokrivanja* u trenutku planiranja, postupak će uzeti u obzir postotak naveden u ovom polju kako bi obnovio dostupnost artikla za količinu koja će pokriti potrebu n broj tjedana koje ste odlučili navesti u polju **Tjedni pokrivanja**;

**Točka za ponovno naručivanje**: ovdje se označava kod kojeg se iznosa potrebno naručiti ponovo taj artikl;

**Dani za ponovno naručivanje**: dani potrebni za obnovu materijala na skladištu;

**Vremenski interval pregleda točke ponovnog naručivanja**: naznačava se svaki koliko vremena se treba pregledati i ažurirati bod ponovnog naručivanja;

**Zadnji datum izračuna točke ponovnog naručivanja**: naznačen je datum posljednjeg izračuna kada je provedena analiza i kada je postavljena točka naručivanja gore navede;

Nakon toga postoje dvije sekcije nazvane:

- **Pisači za etikete**: omogućuje odabir zadanih pisača za ispis etiketa lotova za različite  *Lot Status-e*; tako će biti moguće odabrati pisač za Lot Status-e *Jedinstveno*, *Suglasno*, *Nesuglasno*, e *Karantena*.

- **Vrsta etikete**: omogućuje određivanje zadanih izvještaja za ispis za lotove u različitim Statusima lotova; stoga će biti moguće odabrati različite izvještaje ovisno o statusu lota  *Jedinstveno*, *Suglasno*, *Nesuglasno*, e *Karantena*.

2. U drugom dijelu prozora, pak, navode se različiti skladišta u kojima se može pronaći artikl, a po potrebi je moguće odrediti neke od prethodno navedenih podataka (minimalna/maksimalna zaliha i dani za zalihu, točka ponovnog naručivanja i dani za ponovno naručivanje, ispis etikete za jedinstveni/suglasni/nesuglasni/karantinski status) za svako pojedinačno skladište. (npr. minimalna ili maksimalna zaliha koju možete imati za taj artikl u određenom skladištu, i tako dalje za ostale informacije).


