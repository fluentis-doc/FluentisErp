---
title: K.P.I. A.F.C.S.
sidebar_position: 3
---

Ovaj obrazac prikazuje vrednosti glavnih **KPI pokazatelja (Key Performance Indicators)**.

Pomoću dve glavne tabele moguće je upoređivati vrednosti dve različite simulacije, što je posebno korisno kada se izvode simulacije sa različitim parametrima raspoređivanja, ali sa istim uvezenim podacima.

Nakon izbora simulacija, na karticama ispod prikazuju se pripadajući podaci.

## Narudžbine kupaca

**Maksimalno kašnjenje**: predstavlja najveće utvrđeno kašnjenje među raspoređenim redovima narudžbina kupaca. Pokazatelj ima skalu do 100 dana; ako vrednost premaši 100 dana, stvarna vrednost prikazuje se na dnu grafikona.

**Prosečno kašnjenje**: predstavlja prosečnu vrednost kašnjenja redova narudžbina kupaca koji kasne.

**Artikli zakazanih narudžbina kupaca**: predstavlja broj redova narudžbina kupaca koji su raspoređeni.

**Artikli u kašnjenju narudžbina kupaca**: predstavlja broj redova narudžbina kupaca koji kasne.

**Procenat kašnjenja**: predstavlja procentualni odnos između redova narudžbina kupaca sa kašnjenjem i ukupnog broja raspoređenih redova narudžbina kupaca.

## Troškovi toka materijala

Omogućava upoređivanje sledećih troškova simulacija:

- **Trošak toka skladišta**: skladištenje artikla u skladištu generiše trošak. U stručnoj literaturi postoje različiti načini obračuna ovog troška, koji se obično zasniva na trošku vezivanja obrtnog kapitala (kamata za korišćenje kapitala) i troškovima skladištenja robe (zakup ili amortizacija skladišnog prostora, troškovi klimatizacije i osvetljenja, troškovi skladišne opreme, sistema za manipulaciju robom, troškovi osoblja i slično).

  U obračunu se ovi troškovi uzimaju u obzir kroz procentualnu vrednost koja se primenjuje na standardni trošak artikla (videti parametre raspoređivanja). Na primer, ako je taj procenat 10%, a jedinični trošak artikla 80, godišnji trošak za jednu jedinicu artikla iznosi 8. Ta vrednost se deli sa 365 kako bi se dobio dnevni trošak po jedinici, a zatim se množi sa završnim stanjem zalihe za svaki dan simulacije. Dobijene dnevne vrednosti sabiraju se za ceo period simulacije.

  Vrednost ovog KPI-ja predstavlja ukupan trošak držanja svih artikala na skladištu tokom trajanja simulacije. Što se roba brže koristi i kraće zadržava na skladištu čekajući potrošnju, to je vrednost ovog KPI-ja manja. Povećanjem protoka robe smanjuje se vrednost ovog pokazatelja. S druge strane, ranije pokretanje proizvodnih operacija povećava njegovu vrednost.

- **Trošak toka W.I.P.-a (Work In Progress)**: ovaj KPI izračunava se na sličan način kao trošak skladišta, koristeći isti procenat kao osnovu za obračun.

  Nakon što se izračuna dnevni jedinični trošak skladištenja proizvodnog artikla, ta vrednost se množi sa planiranim trajanjem naloga (*planirani datum završetka – planirani datum početka*).

  Na primer, pretpostavimo proizvodni nalog za 60 komada artikla sa jediničnim troškom od 80, planiranim trajanjem od 9 dana i procentom troška skladištenja od 10%. Dnevni jedinični trošak iznosi:

  `(80 × 10 / 100) / 365 = 0,0219178`

  Taj iznos se množi sa količinom od 60 komada, čime se dobija dnevni trošak od 1,315. Taj trošak se zatim množi sa planiranim trajanjem naloga od 9 dana, što daje ukupan W.I.P. trošak naloga od 11,84.

  Ovaj obračun se sprovodi za sve raspoređene proizvodne naloge, a njihov zbir predstavlja vrednost ovog KPI-ja.

  Što je trajanje proizvodnih naloga kraće, to je vrednost ovog KPI-ja manja. Ako se poboljša tok robe u proizvodnji, odnosno ako se proizvodi u kraćem vremenu, vrednost ovog KPI-ja se smanjuje.

- **Ukupan trošak toka**: predstavlja zbir prethodna dva pokazatelja.

  Proizvodni plan smatra se poboljšanim samo ako se smanji vrednost ovog KPI-ja, a ne samo jednog od njegovih sastavnih elemenata.

  Uticaj različitih parametara raspoređivanja i ručnih intervencija planera može se proceniti upravo kroz kretanje vrednosti ovog KPI-ja.

## Radni centri

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: procenat opterećenja predstavlja udeo raspoloživog vremena tokom kojeg se odvijala obrada.

- **% Pripreme**: procenat pripreme predstavlja udeo raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja odnos između sati neproduktivnog čekanja i raspoloživih sati.

  Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (mašine, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak jer nema dovoljno materijala ili raspoloživih radnika.

  Materijali mogu biti nedovoljni iz dva razloga:

  1. Ako je za neki od potrebnih materijala dozvoljeno delimično izdavanje te u trenutku pokretanja proizvodnje nije bila dostupna potrebna količina. Nakon što se potroši raspoloživa količina, obrada se prekida i čeka se nova dostupnost materijala.

  2. Ako se zadatak odnosi na radnu fazu za koju je definisano preklapanje sa prethodnom fazom, a prethodna faza ne može proizvoditi potrebnim tempom. U tom slučaju zadatak obrađuje samo ono što je pristiglo iz prethodne faze, nakon čega ostaje bez materijala za obradu i čeka novi dotok.

  Drugi mogući uzrok neaktivnosti je nedostatak raspoloživih radnika. Zadatak se pokreće kada su dostupni radnici odgovarajuće kvalifikacije, ali nakon njihovog oslobađanja (završetak pripreme ili završetak radne smene) može se dogoditi da nisu dostupni drugi radnici pa zadatak mora čekati njihovu dostupnost.

- **Prosečan buffer**: ova vrednost se izračunava na osnovu aktivnosti koje čekaju obradu u redu ispred radnog centra.

  Predstavlja dnevni prosek ukupnog broja sati rada koji tokom trajanja simulacije čekaju obradu na određenom radnom centru.

  Na primer, ako se na radnom centru tokom jednog dana obradi ukupno 18 sati faza, a nijedna od njih nije morala da čeka početak obrade, buffer za taj dan iznosi 0.

  Visoke vrednosti ovog KPI-ja ukazuju na to da je radni centar usko grlo procesa.

  Na primer, dva radna centra mogu imati jednako visoko opterećenje od 95%, ali ako jedan ima buffer od 2 sata, a drugi od 16 sati, jasno je da je drugi centar u većim poteškoćama te je potrebno povećati njegov kapacitet ili deo proizvodnje preusmeriti na spoljne izvršioce.

## Mašine

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: procenat opterećenja predstavlja udeo raspoloživog vremena tokom kojeg se odvijala obrada.

- **% Pripreme**: procenat pripreme predstavlja udeo raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja odnos između sati neproduktivnog čekanja i raspoloživih sati.

  Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (mašine, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak zbog nedostatka materijala ili radnika.

  Razlozi nedostatka materijala i radnika jednaki su onima opisanim u odeljku **Radni centri**.

## Kompetencije radnika

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: procenat opterećenja predstavlja udeo raspoloživog vremena tokom kojeg se odvijala obrada.

- **% Pripreme**: procenat pripreme predstavlja udeo raspoloživog vremena utrošenog na aktivnosti pripreme.

- **% Neaktivnih sati**: ovaj KPI predstavlja odnos između sati neproduktivnog čekanja i raspoloživih sati.

Neproduktivni sati čekanja nastaju kada zadatak zauzima resurse (mašine, radnike ili druge proizvodne resurse), ali ne može ostvariti napredak jer nema dovoljno materijala ili raspoloživih radnika.

Materijali mogu biti nedovoljni iz dva razloga:

1. Ako je za neki od potrebnih materijala dozvoljeno delimično izdavanje te u trenutku pokretanja proizvodnje nije bila dostupna potrebna količina. Nakon što se potroši raspoloživa količina, obrada se prekida i čeka se nova dostupnost materijala.

2. Ako se zadatak odnosi na radnu fazu za koju je definisano preklapanje sa prethodnom fazom, a prethodna faza ne može proizvoditi potrebnim tempom. U tom slučaju zadatak obrađuje samo ono što je pristiglo iz prethodne faze te nakon toga ostaje bez materijala za obradu i čeka novi dotok.

Drugi mogući uzrok neaktivnosti je nedostatak raspoloživih radnika. Zadatak se pokreće kada su dostupni radnici odgovarajuće kvalifikacije, ali nakon njihovog oslobađanja (završetak pripreme ili završetak radne smene) može se dogoditi da nisu dostupni drugi radnici pa zadatak mora čekati njihovu dostupnost.

## Vrste resursa

Na ovoj kartici moguće je odabrati vrstu pokazatelja koji se želi prikazati:

- **% Opterećenja**: procenat opterećenja predstavlja udeo raspoloživog vremena tokom kojeg se odvijala obrada.

- **% Pripreme**: procenat pripreme predstavlja udeo raspoloživog vremena utrošenog na aktivnosti pripreme.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).