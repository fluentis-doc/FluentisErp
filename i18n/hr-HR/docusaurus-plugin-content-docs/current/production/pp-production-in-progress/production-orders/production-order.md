---
title: Proizvodni nalog
description: Sveobuhvatan vodič za kreiranje, upravljanje i konfiguraciju proizvodnih naloga u Fluentis ERP-u.
keywords:
  - proizvodni nalozi
  - Fluentis proizvodnja
  - radni ciklus
  - sastavnica
  - proizvodni materijali
  - faze obrade
sidebar_position: 3
schema: TechArticle
tags:
  - Proizvodnja
  - Nalozi
  - Planiranje
last_update:
  author: Fluentis Documentation Team
---

# Proizvodni nalozi

Proizvodni nalozi se u pravilu generiraju automatski putem postupka **Izdavanje planiranih naloga**.  
Za ručno kreiranje proizvodnog naloga potrebno je:
1. Kreirati planirani proizvodni nalog.
2. Pustiti ga u izvršenje putem odgovarajućeg postupka.

## Zaglavlje proizvodnog naloga

Zaglavlje sadrži sažetak svih općih informacija o nalogu, uključujući: broj, seriju i godinu, podatke o proizvodnom nalogu i pripadajućem kupcu, povezani projekt, datum početka i završetka, informacije o artiklu koji se proizvodi, verziju sastavnice i radnog ciklusa, količinu za proizvodnju te proizvedenu količinu.

:::important
Skladište i predložak knjiženja navedeni u zaglavlju imaju **najviši prioritet** u odnosu na sve ostale postavke.  
Vidi: [Parametri proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
:::

#### Specifični gumbi

- **Kompletiranje podataka narudžbe**: omogućuje unos ili ažuriranje podataka za artikl naveden na proizvodnom nalogu, uključujući materijale, faze, pripreme, alate, atribute i različite napomene, preuzimajući ih iz sastavnice i radnog ciklusa artikla koji su **važeći na datum dopune podataka**.
- **Ponovo izračunaj izvorni datum**: ažurira datum početka naloga i pripadajućih faza nakon promjene vremena obrade i/ili količine za proizvodnju artikla obuhvaćenog proizvodnim nalogom.
- **Generiraj sastavnicu**: generira sastavnicu na temelju podataka unesenih u proizvodni nalog ili ažurira postojeće podatke podacima iz naloga.
- **Generiranje radnog ciklusa**: kreira radni ciklus artikla na temelju podataka unesenih u nalog ili ažurira postojeće podatke podacima iz naloga.
- **Grupiraj vanjske faze**: vezano uz karticu *Faze*, gumb je dostupan samo ako su odabrane dvije ili više uzastopnih vanjskih faza. Postupak zahtijeva odabir nove standardne faze koja će zamijeniti odabrane vanjske faze te kooperanta koji će izvršiti obradu. Predložit će se kooperant naveden na odabranoj standardnoj fazi; ako nije naveden, predložit će se kooperant iz prve odabrane vanjske faze, a ako ni tada nije definiran, korisnik će ga morati ručno unijeti. Vanjske faze mogu se grupirati samo ako još nisu kreirani dokumenti za isporuku materijala i/ili povrat od podizvođača. Eventualni nalog za podizvođača koji je prethodno kreiran za jednu ili više odabranih vanjskih faza bit će obrisan.
- **Poništi grupiranje**: vezano uz karticu *Faze*, gumb je dostupan samo ako je odabrana prethodno grupirana vanjska faza. Grupirane vanjske faze mogu se vratiti samo ako za grupiranu vanjsku fazu još nisu kreirani dokumenti za isporuku materijala i/ili povrat od podizvođača.
- **Kreiraj nalog za podizvođače**: vezano uz karticu *Faze*, gumb je dostupan samo ako je odabrana vanjska faza za koju još nije kreiran nalog za podizvođača. Za odabranu vanjsku fazu generira se nalog za podizvođača.

#### Specifična polja

- **Status**: označava status proizvodnog naloga. *Pokrenuto* je početni status proizvodnog naloga generiranog postupkom izdavanja planiranih naloga, dok je *Izvršni* status koji nalog mora imati kako bi bilo moguće evidentirati proizvodne prijave.
- **Obvezujući**: aktiviranjem ove oznake proizvodni nalog postaje obvezujući, pa ga [Planiranje s ograničenim kapacitetom](/docs/planning/ms-master-scheduling/finite-capacityscheduling) neće vremenski premještati, već će ga zadržati na definiranim datumima. Ovaj se status također uzima u obzir u postupku [M.R.P.](/docs/planning/ms-master-scheduling/mrp) kada je aktivna oznaka *Razlikuj potvrđenu proizvodnu potražnju*.
- **Skladište**: označava skladište u koje će biti zaprimljen proizvedeni artikl; polje nije moguće uređivati jer preuzima vrijednost skladišta navedenog na posljednjoj proizvodnoj i skladišno aktivnoj fazi obrade.
- **Predložak knjiženja**: označava skladišni predložak knjiženja koji će se koristiti za zaprimanje proizvedenog artikla; polje nije moguće uređivati jer preuzima vrijednost predloška zaprimanja navedenog na posljednjoj proizvodnoj i skladišno aktivnoj fazi obrade.

## Materijali

Na ovoj kartici prikazani su materijali prve razine sastavnice proizvoda za gotov proizvod koji se proizvodi, no korisnik može mijenjati postojeće podatke i/ili dodavati nove materijale na popis komponenti proizvodnog naloga.
Za njihov uvoz iz sastavnice koristi se gumb **Kompletiranje podataka narudžbe**.

#### Specifični gumbi

- **Unesi materijale**: omogućuje dodavanje novog materijala u tablicu.
- **Izbriši materijale**: omogućuje brisanje materijala iz tablice.

#### Specifična polja

**Klasa**: označava klasu artikla;  
**Šifra artikla**: označava šifru artikla;  
**Varijanta**: u ovo polje unosi se eventualna varijanta artikla;  
**JM**: u ovom polju prikazuje se osnovna jedinica mjere artikla;  
**Mjerna jedinica**: u ovo polje unosi se eventualna alternativna mjerna jedinica artikla;  
**Datum korištenja**: odgovara planiranom datumu početka faze proizvodnog naloga kojoj je materijal pridružen; ako nije pridružen nijednoj fazi, odgovara početku prve faze radnog ciklusa;  
**Količina korištenja**: predstavlja jediničnu količinu potrebnu za ovaj artikl (prema [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)), koju je ipak moguće izmijeniti;  
**Ukupna količina**: predstavlja količinu dobivenu množenjem *Količine korištenja* s *Količinom za proizvodnju*;  
**Alternativna količina**: predstavlja ukupnu količinu izraženu u alternativnoj mjernoj jedinici;  
**Količina uzeta sa zaliha**: predstavlja količinu preuzetu putem [Liste za izdavanje materijala](/docs/production/pp-production-in-progress/picking-materials-list);  
**Fiksna / Varijabilna**: označava je li količina materijala fiksna ili varijabilna; podatak se nasljeđuje iz [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);  
**Postotak otpada**: u ovo polje unosi se ili preuzima iz [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) eventualni postotak škarta za ovaj artikl;  
**Faza / Podfaza**: dvostrukim klikom otvara se pomoćni pregled faza obrade iz kojeg je moguće odabrati odgovarajuću fazu i podfazu te tako dodijeliti odabrani materijal određenoj fazi obrade artikla;  
**Skladište**: označava skladište iz kojeg će se artikl izdavati;  
**Predložak knjiženja**: označava skladišni predložak knjiženja kojim će se artikl izdavati;  
**Prioritet**: prikazuje prioritet komponente, ako je definiran u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Ovaj podatak sudjeluje u određivanju jedinstvenosti materijala, pa se isti materijal može unijeti više puta s različitim prioritetima. Također ga je moguće ručno mijenjati, kao i sve ostale podatke u ovoj tablici;  
**Raspoloživa količina**: u ovom polju prikazuje se raspoloživa količina artikla izračunata postupkom **Preračunaj izvedivost**, dostupnim u [Redoslijedu faza](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);  
**Za deklaraciju na mobilne uređaje**: ako je aktivirano, materijal će se automatski predlagati u formi za proizvodne prijave unutar WMS-a.

## Faze

Ova kartica prikazuje faze radnog ciklusa vezane uz gotov proizvod koji se proizvodi. Faze je moguće mijenjati te dopunjavati dodatnim fazama.
Moguće je pretvoriti internu fazu u vanjsku (uz kreiranje naloga za podizvođača) ili obrnuto (uz automatsko brisanje naloga za podizvođača).
Za uvoz faza iz radnog ciklusa koristi se gumb **Kompletiranje podataka narudžbe**.
Unutar proizvodnog naloga moguće je promijeniti fazu iz interne u vanjsku, nakon čega je moguće definirati i kooperanta, a prilikom spremanja naloga sustav će automatski kreirati nalog za podizvođača. Također, ako se vanjska faza pretvori u internu, sustav će automatski obrisati povezani nalog za podizvođača.

#### Specifična polja

**Šifra faze / Faza / Podfaza**: dvostrukim klikom otvara se odgovarajući pregled faza obrade iz kojeg je moguće odabrati željenu fazu i podfazu;
**Kontrola kvalitete**: ako je aktivirano, ova oznaka označava da faza podliježe kontroli kvalitete te je na odgovarajućoj kartici moguće odabrati *Kontrolni plan* koji će se koristiti za provjeru artikla nakon evidentiranja proizvodne prijave;
**Faza proizvodnja**: ako je aktivirano, označava da je faza proizvodna te je moguće unositi proizvodne prijave (odnosno evidentirati proizvodnju za tu fazu); ako nije aktivirano, fazu nije moguće prijavljivati;
**Faza s dopuštenim kretanjem**: ako je aktivirano, prilikom evidentiranja proizvodne faze automatski se kreiraju i skladišne transakcije. To znači da će se kroz proizvodnu prijavu izvršiti zaprimanje gotovog proizvoda na skladište te izdavanje sirovina korištenih u toj fazi proizvodnje;
**Centri rada**: označava radni centar, odnosno stroj na kojem će se izvršavati određena faza;
**Fiksno vrijeme**: ako je aktivirano, označava da je vrijeme trajanja faze fiksno te ne ovisi o količini; podatak se nasljeđuje iz definicije radnog centra;
**Faza količina**: označava ukupnu količinu komada koja se treba proizvesti u toj fazi;
**Procijenjeni datum početka / završetka**: predstavljaju planirane datume početka i završetka pojedine faze. Promjenom planiranih datuma početka i završetka obrade automatski se ažuriraju i ova polja. Datumi se izračunavaju na temelju vremena definiranih u fazama obrade, odnosno prema većoj vrijednosti između ukupnog vremena radnika i ukupnog vremena stroja za odabranu fazu;
**Ukupno vrijeme stroja**: označava ukupno vrijeme rada stroja, dobiveno umnoškom *vremena stroja* i *broja strojeva*;
**Vrijeme stroja**: označava vrijeme obrade na tom stroju za tu fazu;
**Broj strojeva**: označava broj strojeva koji se koriste u toj fazi;
**Ukupno vrijeme radnika**: označava ukupno vrijeme rada radnika, dobiveno umnoškom *vremena radnika* i *broja radnika*;
**Vrijeme radnika**: označava vrijeme rada radne snage za tu fazu;
**Broj radnika**: označava broj radnika angažiranih u toj fazi;
**Preklapanje faze / podfaze**: u slučaju preklapanja u ova se polja unosi faza koju je potrebno preklopiti s odabranom fazom;
**Lokacija**: omogućuje povezivanje skladišne lokacije s fazom. To znači da će svi artikli korišteni u toj fazi biti smješteni na toj lokaciji;
**Konto podizvođača**: dvostrukim klikom na polje otvara se pomoćni pregled za odabir konta i podkonta odgovarajućeg podizvođača. Polje je aktivno samo ako je faza definirana kao *Vanjska*. Kooperant se također preuzima iz faze obrade definirane u radnom ciklusu artikla;
**Kreiran nalog podizvođača**: označava da je za fazu kreiran nalog za podizvođača. Primjenjuje se samo na vanjske faze;
**Opis centra rada**: označava opis radnog centra povezanog s fazom;
**Def. korak**: označava da je [Radni list](/docs/production/pp-production-in-progress/reports/worksheet) ispisan kao konačna verzija;
**Datum ispisa evidencije rada**: označava datum konačnog ispisa [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet);
**Redni broj radnog lista**: označava redni broj [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet) ispisanog kao konačna verzija.

### Faze - Svojstva

Na ovoj kartici prikazuju se sljedeći podaci vezani uz fazu odabranu u tablici:

**Opis faze**: prikazuje opis odabrane faze i podfaze;
**Tip**: u ovom padajućem izborniku moguće je odabrati vrstu obrade (*interna* ili *vanjska*);
**Preklapanje**: putem ovog padajućeg izbornika definira se vrsta eventualnog preklapanja između faza. Moguće su sljedeće vrste preklapanja:
- *Ukupno* – promatrana faza u potpunosti se preklapa s navedenom fazom;
- *U količini* – potrebno je navesti nakon koliko proizvedenih komada u ovoj fazi može započeti sljedeća faza;
- *U vremenu* – potrebno je navesti nakon koliko minuta od početka navedene faze može započeti sljedeća faza;

**JM vremena**: u ovom polju prikazuje se mjerna jedinica vremena za fazu. Vrijeme se može voditi u sekundama, minutama, satima ili danima. U pravilu se za interne faze koriste minute, a za vanjske dani, no to ovisi o specifičnostima pojedinog poduzeća;
**Stroj**: u ovom polju moguće je odabrati šifru (i opis) pripadajućeg stroja. Vrijednost se automatski predlaže na temelju prethodno odabranog radnog centra u tablici;
**Proizvodno mjesto**: označava proizvodni pogon u kojem će se artikl proizvoditi; podatak se nasljeđuje iz proizvodnog naloga;
**Grupa radne snage**: u ovom polju moguće je odabrati šifru (i opis) odgovarajuće grupe radne snage. Vrijednost se automatski predlaže na temelju prethodno odabranog radnog centra u tablici;
**Količina komada za fazu**: označava broj komada proizvedenih pri jednom izvršenju te faze;
**Vrijednost**: ovdje se unosi vrijednost eventualnog preklapanja prema prethodno definiranim pravilima;
**Korištenje**: ako je oznaka aktivna, vrijeme čekanja/reda povećava vrijeme zauzeća radnog centra za tu fazu;
**Vrijeme čekanja ili reda**: označava vrijeme koje je potrebno pričekati nakon završetka izvršenja faze prije njezina ponovnog izvođenja. Ako je aktivirana oznaka **Korištenje**, ovo vrijeme čekanja također će se računati kao dodatno zauzeće radnog centra za tu fazu.

### Faze - Dodatni podaci

Sadrži eventualne dodatne podatke povezane s odabranom fazom.

### Faze - Priloženi dokumenti

Omogućuje povezivanje dokumenata s odabranom fazom, koji će zatim biti vidljivi i u [MES-u](/docs/production/mes/mes-intro).

## Priprema

Omogućuje definiranje vremena pripreme za fazu odabranu na prethodnoj kartici.
Važno je napomenuti da se podaci za radni centar, stroj i radnu snagu unose samo ako se razlikuju od onih definiranih za samu fazu. Ako ta polja ostanu prazna, automatski će se koristiti vrijednosti definirane na glavnoj fazi.

#### Specifična polja

**Faza / Podfaza / Opis**: u ovim poljima prikazuju se informacije o fazi odabranoj na kartici *Faze*;
**Tip**: označava vrstu faze (*interna* ili *vanjska*);
**Tip preklapanja**: označava eventualnu vrstu preklapanja;
**JM vremena**: označava mjernu jedinicu vremena za fazu;
**Centar rada**: u ovim poljima unosi se šifra (i pripadajući opis) radnog centra definiranog za pripremu; (koristi se samo ako je radni centar za pripremu različit od radnog centra korištenog u odabranoj fazi);
**Stroj**: u ovim poljima unosi se šifra (i pripadajući opis) stroja za pripremu; (koristi se samo ako je stroj korišten za pripremu različit od stroja korištenog u odabranoj fazi);
**Grupa radne snage**: u ovim poljima unosi se šifra (i pripadajući opis) grupe radne snage za pripremu; (koristi se samo ako je grupa radne snage korištena za pripremu različita od grupe radne snage korištene u odabranoj fazi);
**Vrijednost**: označava vrijednost eventualnog preklapanja;
**Centar rada**: u ovim poljima prikazuju se šifra i opis radnog centra povezanog s odabranom fazom;
**Datum početka**: prikazuje datum početka faze odabrane na kartici *Faze*;
**Datum završetka**: prikazuje datum završetka faze odabrane na kartici *Faze*;
**Vrijeme pripreme**: unosi se vrijeme pripreme. Radi se o fiksnom vremenu koje se ne mijenja ovisno o količini za proizvodnju u odabranoj fazi;
**Vrijeme ponovne pripreme**: unosi se vrijeme ponovne pripreme. Koristi se kada je potrebno ponovno pripremiti radni centar između dva izvršenja iste faze te se pribraja vremenu pripreme;
**Broj strojeva**: označava broj strojeva korištenih za pripremu;
**Broj radnika**: označava broj radnika uključenih u pripremu.

## Oprema

Na ovoj kartici, koja se uglavnom sastoji od tablice podataka, moguće je definirati koja će se oprema i u kojoj količini koristiti tijekom proizvodnje faze odabrane na kartici *Faze*.

#### Specifična polja

**Redoslijed**: u ovom polju moguće je definirati redoslijed korištenja opreme;
**Oprema**: putem ovog padajućeg izbornika moguće je odabrati šifru opreme preuzetu iz šifarnika [Oprema](/docs/configurations/tables/production/equipments);
**Vremenski raspoređeno**: ako je oznaka aktivna, oprema će biti zauzeta tijekom proizvodnje. U tom slučaju procedura [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling) neće uzimati u obzir artikl odabran putem polja za opremu, već artikl naveden u poljima klase i šifre, koji mora imati *Prirodu artikla* postavljenu na *Oprema* ili *Alat*;
**Za ponovno naručivanje**: ako je oznaka aktivna, procedura [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling) kreirat će planirani nalog za nabavu te opreme ako ona nije dostupna. Ako oznaka nije aktivna, znači da se oprema ne naručuje ponovno, već se može koristiti više puta prema svojoj raspoloživosti (primjerice kalup);
**Klasa / Šifra artikla**: u ovim poljima moguće je definirati klasu i šifru artikla (pomoćni odabir automatski filtrira samo artikle koji u šifarniku artikala imaju *Prirodu artikla* postavljenu na *Oprema*);
**Varijanta**: označava varijantu artikla;
**Lot**: označava seriju artikla;
**Serijski broj**: označava serijski broj artikla;
**Količina**: označava količinu artikla.

## Kontrola kvalitete

Na ovoj kartici, koja se uglavnom sastoji od tablice podataka, moguće je pregledavati detalje planiranih ispitivanja [kontrole kvalitete](/docs/quality/quality-intro) za pojedinu fazu / podfazu.

## Bilješka faze

Na ovoj kartici prikazuje se napomena povezana s fazom rada odabranom na kartici *Faze*. Korisnik ju može mijenjati izravno unutar predmetnog proizvodnog naloga.

## Operativne upute

Na ovoj kartici moguće je priložiti i pregledavati *Operativne upute* povezane s fazom rada odabranom na kartici *Faze*. One će biti dostupne i u [Fluentis MES-u](/docs/production/mes/mes-intro).

## Zaposlenici

Na ovoj kartici moguće je definirati operatere koji će izvršavati pojedine faze proizvodnog ciklusa. (*Koristi se samo u prilagodbama sustava*).

## Dodatni podaci

Za detaljan opis funkcionalnosti *extra data* pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Sažetak i dodatne informacije

Upravljanje proizvodnim nalozima u Fluentisu uključuje:
- Automatsko ili ručno kreiranje putem postupka izdavanja.
- Potpunu konfiguraciju zaglavlja, materijala, faza i priprema.
- Napredno upravljanje tehnološkim postupkom, sastavnicom i operativnim izmjenama.
- Povezanost s MRP-om, raspoređivanjem, kvalitetom i MES-om.
- Pomoćne alate poput popunjavanja podataka, preklapanja faza i kontrole resursa.

Dodatne informacije:
- [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)
- [Tehnološki postupak](/docs/erp-home/registers/production/routes/new-route)
- [FCS raspoređivanje](/docs/planning/ms-master-scheduling/fcs-scheduling)
- [MES](/docs/production/mes/mes-intro)
- [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)