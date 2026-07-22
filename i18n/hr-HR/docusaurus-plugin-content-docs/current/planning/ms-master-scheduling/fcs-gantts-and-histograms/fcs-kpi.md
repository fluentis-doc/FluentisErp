---
title: K.P.I. A.F.C.S.
sidebar_position: 3
---

Ovaj obrazac prikazuje vrijednosti glavnih **KPI pokazatelja (Key Performance Indicators)**.

Pomoću dviju glavnih tablica moguće je uspoređivati vrijednosti dviju različitih simulacija, što je posebno korisno kada se izvode simulacije s različitim parametrima raspoređivanja, ali s istim uvezenim podacima.

Nakon odabira simulacija, na karticama ispod prikazuju se pripadajući podaci.

## Narudžbe kupaca

**Maksimalno kašnjenje**: predstavlja najveće utvrđeno kašnjenje među raspoređenim redcima narudžbi kupaca. Pokazatelj ima skalu do 100 dana; ako vrijednost premaši 100 dana, stvarna vrijednost prikazuje se u dnu grafikona.

**Prosječno kašnjenje**: predstavlja prosječnu vrijednost kašnjenja redaka narudžbi kupaca koji kasne.

**Artikli zakazanih narudžbi kupaca**: predstavlja broj redaka narudžbi kupaca koji su raspoređeni.

**Artikli u kašnjenju narudžbi kupaca**: predstavlja broj redaka narudžbi kupaca koji kasne.

**Postotak kašnjenja**: predstavlja postotni omjer između redaka narudžbi kupaca s kašnjenjem i ukupnog broja raspoređenih redaka narudžbi kupaca.

## Troškovi tijeka materijala

Omogućuje usporedbu sljedećih troškova simulacija:

- **Trošak protoka skladišta**: skladištenje artikla u skladištu generira trošak. U stručnoj literaturi postoje različiti načini izračuna tog troška, koji se obično temelji na trošku vezivanja obrtnog kapitala (kamate za korištenje kapitala) te troškovima skladištenja robe (najam ili amortizacija skladišnog prostora, troškovi klimatizacije i rasvjete, troškovi skladišne opreme, sustava za manipulaciju robom, troškovi osoblja i slično).

  U izračunu se ti troškovi uzimaju u obzir kroz postotnu vrijednost koja se primjenjuje na standardni trošak artikla (vidi parametre raspoređivanja). Primjerice, ako je taj postotak 10 %, a jedinični trošak artikla 80, godišnji trošak za jednu jedinicu artikla iznosi 8. Ta se vrijednost dijeli s 365 kako bi se dobio dnevni trošak po jedinici, a zatim se množi sa završnim stanjem zalihe za svaki dan simulacije. Dobivene dnevne vrijednosti zbrajaju se za cijelo razdoblje simulacije.

  Vrijednost ovog KPI-ja predstavlja ukupni trošak držanja svih artikala na skladištu tijekom trajanja simulacije. Što se roba brže koristi i kraće zadržava na skladištu čekajući potrošnju, to je vrijednost ovog KPI-ja manja. Povećanjem protoka robe smanjuje se vrijednost ovog pokazatelja. S druge strane, ranije pokretanje proizvodnih operacija povećava njegovu vrijednost.

- **Trošak protoka W.I.P.-a (Work In Progress)**: ovaj KPI izračunava se na sličan način kao trošak skladišta, koristeći isti postotak kao osnovu za izračun.

  Nakon što se izračuna dnevni jedinični trošak skladištenja proizvodnog artikla, ta se vrijednost množi s planiranim trajanjem naloga (*planirani datum završetka – planirani datum početka*).

  Primjerice, pretpostavimo proizvodni nalog za 60 komada artikla s jediničnim troškom od 80, planiranim trajanjem od 9 dana i postotkom troška skladištenja od 10 %. Dnevni jedinični trošak iznosi:

  `(80 × 10 / 100) / 365 = 0,0219178`

  Taj se iznos množi s količinom od 60 komada, čime se dobiva dnevni trošak od 1,315. Taj se trošak zatim množi s planiranim trajanjem naloga od 9 dana, što daje ukupni W.I.P. trošak naloga od 11,84.

  Ovaj se izračun provodi za sve raspoređene proizvodne naloge, a njihov zbroj predstavlja vrijednost ovog KPI-ja.

  Što je trajanje proizvodnih naloga kraće, to je vrijednost ovog KPI-ja manja. Ako se poboljša protok robe u proizvodnji, odnosno ako se proizvodi u kraćem vremenu, vrijednost ovog KPI-ja se smanjuje.

- **Ukupni trošak tijeka**: predstavlja zbroj prethodna dva pokazatelja.

  Proizvodni plan smatra se poboljšanim samo ako se smanji vrijednost ovog KPI-ja, a ne samo jednog od njegovih sastavnih elemenata.

  Utjecaj različitih parametara raspoređivanja i ručnih intervencija planera može se procijeniti upravo kroz kretanje vrijednosti ovog KPI-ja.

## Radni centri

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: postotak opterećenja predstavlja udio raspoloživog vremena tijekom kojeg se odvijala obrada.

- **% Pripreme**: postotak pripreme predstavlja udio raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja omjer između sati neproduktivnog čekanja i raspoloživih sati.

  Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (strojeve, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak jer nema dovoljno materijala ili raspoloživih radnika.

  Materijali mogu biti nedostatni iz dva razloga:

  1. Ako je za neki od potrebnih materijala dopušteno djelomično izdavanje te u trenutku pokretanja proizvodnje nije bila dostupna potrebna količina. Nakon što se potroši raspoloživa količina, obrada se prekida i čeka se nova dostupnost materijala.

  2. Ako se zadatak odnosi na radnu fazu za koju je definirano preklapanje s prethodnom fazom, a prethodna faza ne može proizvoditi potrebnim tempom. U tom slučaju zadatak obrađuje samo ono što je pristiglo iz prethodne faze te nakon toga ostaje bez materijala za obradu i čeka novi dotok.

  Drugi mogući uzrok neaktivnosti je nedostatak raspoloživih radnika. Zadatak se pokreće kada su dostupni radnici odgovarajuće kvalifikacije, ali nakon njihovog oslobađanja (završetak pripreme ili završetak radne smjene) može se dogoditi da nisu dostupni drugi radnici pa zadatak mora čekati njihovu dostupnost.

- **Prosječni buffer**: ova se vrijednost izračunava na temelju aktivnosti koje čekaju obradu u redu ispred radnog centra.

  Predstavlja dnevni prosjek ukupnog broja sati rada koji tijekom trajanja simulacije čekaju obradu na određenom radnom centru.

  Primjerice, ako se na radnom centru tijekom jednog dana obradi ukupno 18 sati faza, a nijedna od njih nije morala čekati početak obrade, buffer za taj dan iznosi 0.

  Visoke vrijednosti ovog KPI-ja ukazuju na to da je radni centar usko grlo procesa.

  Primjerice, dva radna centra mogu imati jednako visoko opterećenje od 95 %, ali ako jedan ima buffer od 2 sata, a drugi od 16 sati, jasno je da je drugi centar u većim poteškoćama te je potrebno povećati njegov kapacitet ili dio proizvodnje preusmjeriti na vanjske izvršitelje.

## Strojevi

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: postotak opterećenja predstavlja udio raspoloživog vremena tijekom kojeg se odvijala obrada.

- **% Pripreme**: postotak pripreme predstavlja udio raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja omjer između sati neproduktivnog čekanja i raspoloživih sati.

  Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (strojeve, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak zbog nedostatka materijala ili radnika.

  Razlozi nedostatka materijala i radnika jednaki su onima opisanim u odjeljku **Radni centri**.

  ## Kompetencije radnika

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: postotak opterećenja predstavlja udio raspoloživog vremena tijekom kojeg se odvijala obrada.

- **% Pripreme**: postotak pripreme predstavlja udio raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja omjer između sati neproduktivnog čekanja i raspoloživih sati.

  Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (strojeve, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak jer nema dovoljno materijala ili raspoloživih radnika.

  Materijali mogu biti nedostatni iz dva razloga:

  1. Ako je za neki od potrebnih materijala dopušteno djelomično izdavanje te u trenutku pokretanja proizvodnje nije bila dostupna potrebna količina. Nakon što se potroši raspoloživa količina, obrada se prekida i čeka se nova dostupnost materijala.

  2. Ako se zadatak odnosi na radnu fazu za koju je definirano preklapanje s prethodnom fazom, a prethodna faza ne može proizvoditi potrebnim tempom. U tom slučaju zadatak obrađuje samo ono što je pristiglo iz prethodne faze te nakon toga ostaje bez materijala za obradu i čeka novi dotok.

  Drugi mogući uzrok neaktivnosti je nedostatak raspoloživih radnika. Zadatak se pokreće kada su dostupni radnici odgovarajuće kvalifikacije, ali nakon njihovog oslobađanja (završetak pripreme ili završetak radne smjene) može se dogoditi da nisu dostupni drugi radnici pa zadatak mora čekati njihovu dostupnost.

## Vrste resursa

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: postotak opterećenja predstavlja udio raspoloživog vremena tijekom kojeg se odvijala obrada.

- **% Pripreme**: postotak pripreme predstavlja udio raspoloživog vremena utrošenog na aktivnosti pripreme.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).