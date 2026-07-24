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

Proizvodni nalozi se po pravilu generišu automatski putem postupka **Izdavanje planiranih naloga**.  
Za ručno kreiranje proizvodnog naloga potrebno je:

1. Kreirati planirani proizvodni nalog.
2. Pustiti ga u izvršenje putem odgovarajućeg postupka.

## Zaglavlje proizvodnog naloga

Zaglavlje sadrži sažetak svih opštih informacija o nalogu, uključujući: broj, seriju i godinu, podatke o proizvodnom nalogu i pripadajućem kupcu, povezani projekat, datum početka i završetka, informacije o artiklu koji se proizvodi, verziju sastavnice i radnog ciklusa, količinu za proizvodnju i proizvedenu količinu.

:::important
Skladište i predložak knjiženja navedeni u zaglavlju imaju **najviši prioritet** u odnosu na sva ostala podešavanja.  
Videti: [Parametri proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
:::

#### Specifična dugmad

- **Kompletiranje podataka naloga**: omogućava unos ili ažuriranje podataka za artikl naveden na proizvodnom nalogu, uključujući materijale, faze, pripreme, alate, atribute i različite napomene, preuzimajući ih iz sastavnice i radnog ciklusa artikla koji su **važeći na datum dopune podataka**.
- **Ponovo izračunaj izvorni datum**: ažurira datum početka naloga i pripadajućih faza nakon promene vremena obrade i/ili količine za proizvodnju artikla obuhvaćenog proizvodnim nalogom.
- **Generiši sastavnicu**: generiše sastavnicu na osnovu podataka unetih u proizvodni nalog ili ažurira postojeće podatke podacima iz naloga.
- **Generisanje radnog ciklusa**: kreira radni ciklus artikla na osnovu podataka unetih u nalog ili ažurira postojeće podatke podacima iz naloga.
- **Grupiši spoljne faze**: vezano za karticu *Faze*, dugme je dostupno samo ako su odabrane dve ili više uzastopnih spoljnih faza. Postupak zahteva odabir nove standardne faze koja će zameniti odabrane spoljne faze i kooperanta koji će izvršiti obradu. Predložiće se kooperant naveden na odabranoj standardnoj fazi; ako nije naveden, predložiće se kooperant iz prve odabrane spoljne faze, a ako ni tada nije definisan, korisnik će ga morati ručno uneti. Spoljne faze mogu se grupisati samo ako još nisu kreirani dokumenti za isporuku materijala i/ili povrat od podizvođača. Eventualni nalog za podizvođača koji je prethodno kreiran za jednu ili više odabranih spoljnih faza biće obrisan.
- **Poništi grupisanje**: vezano za karticu *Faze*, dugme je dostupno samo ako je odabrana prethodno grupisana spoljna faza. Grupisane spoljne faze mogu se vratiti samo ako za grupisanu spoljnu fazu još nisu kreirani dokumenti za isporuku materijala i/ili povrat od podizvođača.
- **Kreiraj nalog za podizvođače**: vezano za karticu *Faze*, dugme je dostupno samo ako je odabrana spoljna faza za koju još nije kreiran nalog za podizvođača. Za odabranu spoljnu fazu generiše se nalog za podizvođača.

#### Specifična polja

- **Status**: označava status proizvodnog naloga. *Pokrenut* je početni status proizvodnog naloga generisanog postupkom izdavanja planiranih naloga, dok je *Izvršni* status koji nalog mora imati kako bi bilo moguće evidentirati proizvodne prijave.
- **Obavezujući**: aktiviranjem ove oznake proizvodni nalog postaje obavezujući, pa ga [Planiranje sa ograničenim kapacitetom](/docs/planning/ms-master-scheduling/finite-capacityscheduling) neće vremenski pomerati, već će ga zadržati na definisanim datumima. Ovaj status se takođe uzima u obzir u postupku [M.R.P.](/docs/planning/ms-master-scheduling/mrp) kada je aktivna oznaka *Razlikuj potvrđenu proizvodnu potražnju*.
- **Skladište**: označava skladište u koje će biti zaprimljen proizvedeni artikl; polje nije moguće uređivati jer preuzima vrednost skladišta navedenog na poslednjoj proizvodnoj i skladišno aktivnoj fazi obrade.
- **Predložak knjiženja**: označava skladišni predložak knjiženja koji će se koristiti za prijem proizvedenog artikla; polje nije moguće uređivati jer preuzima vrednost predloška prijema navedenog na poslednjoj proizvodnoj i skladišno aktivnoj fazi obrade.

## Materijali

Na ovoj kartici prikazani su materijali prvog nivoa sastavnice proizvoda za gotov proizvod koji se proizvodi, ali korisnik može menjati postojeće podatke i/ili dodavati nove materijale na listu komponenti proizvodnog naloga.
Za njihov uvoz iz sastavnice koristi se dugme **Kompletiranje podataka naloga**.

#### Specifična dugmad

- **Unesi materijale**: omogućava dodavanje novog materijala u tabelu.
- **Izbriši materijale**: omogućava brisanje materijala iz tabele.

#### Specifična polja

**Klasa**: označava klasu artikla;  
**Šifra artikla**: označava šifru artikla;  
**Varijanta**: u ovo polje unosi se eventualna varijanta artikla;  
**JM**: u ovom polju prikazuje se osnovna jedinica mere artikla;  
**Mjerna jedinica**: u ovo polje unosi se eventualna alternativna merna jedinica artikla;  
**Datum korišćenja**: odgovara planiranom datumu početka faze proizvodnog naloga kojoj je materijal pridružen; ako nije pridružen nijednoj fazi, odgovara početku prve faze radnog ciklusa;  
**Količina korišćenja**: predstavlja jediničnu količinu potrebnu za ovaj artikl (prema [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)), koju je ipak moguće izmeniti;  
**Ukupna količina**: predstavlja količinu dobijenu množenjem *Količine korišćenja* sa *Količinom za proizvodnju*;  
**Alternativna količina**: predstavlja ukupnu količinu izraženu u alternativnoj mernoj jedinici;  
**Količina uzeta sa zaliha**: predstavlja količinu preuzetu putem [Liste za izdavanje materijala](/docs/production/pp-production-in-progress/picking-materials-list);  
**Fiksna / Varijabilna**: označava da li je količina materijala fiksna ili varijabilna; podatak se nasleđuje iz [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);  
**Procenat otpada**: u ovo polje unosi se ili preuzima iz [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) eventualni procenat škarta za ovaj artikl;  
**Faza / Podfaza**: dvostrukim klikom otvara se pomoćni pregled faza obrade iz kojeg je moguće odabrati odgovarajuću fazu i podfazu i tako dodeliti odabrani materijal određenoj fazi obrade artikla;  
**Skladište**: označava skladište iz kojeg će se artikl izdavati;  
**Predložak knjiženja**: označava skladišni predložak knjiženja kojim će se artikl izdavati;  
**Prioritet**: prikazuje prioritet komponente, ako je definisan u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Ovaj podatak učestvuje u određivanju jedinstvenosti materijala, pa se isti materijal može uneti više puta sa različitim prioritetima. Takođe ga je moguće ručno menjati, kao i sve ostale podatke u ovoj tabeli;  
**Raspoloživa količina**: u ovom polju prikazuje se raspoloživa količina artikla izračunata postupkom **Preračunaj izvodljivost**, dostupnim u [Redosledu faza](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);  
**Za deklaraciju na mobilne uređaje**: ako je aktivirano, materijal će se automatski predlagati u formi za proizvodne prijave unutar WMS-a.

## Faze

Ova kartica prikazuje faze radnog ciklusa vezane za gotov proizvod koji se proizvodi. Faze je moguće menjati i dopunjavati dodatnim fazama.
Moguće je pretvoriti internu fazu u eksternu (uz kreiranje naloga za podizvođača) ili obrnuto (uz automatsko brisanje naloga za podizvođača).
Za uvoz faza iz radnog ciklusa koristi se dugme **Kompletiranje podataka naloga**.
Unutar proizvodnog naloga moguće je promeniti fazu iz interne u eksternu, nakon čega je moguće definisati i kooperanta, a prilikom čuvanja naloga sistem će automatski kreirati nalog za podizvođača. Takođe, ako se eksterna faza pretvori u internu, sistem će automatski obrisati povezani nalog za podizvođača.

#### Specifična polja

**Šifra faze / Faza / Podfaza**: dvostrukim klikom otvara se odgovarajući pregled faza obrade iz kojeg je moguće odabrati željenu fazu i podfazu;  
**Kontrola kvaliteta**: ako je aktivirano, ova oznaka označava da faza podleže kontroli kvaliteta te je na odgovarajućoj kartici moguće odabrati *Kontrolni plan* koji će se koristiti za proveru artikla nakon evidentiranja proizvodne prijave;  
**Faza proizvodnje**: ako je aktivirano, označava da je faza proizvodna te je moguće unositi proizvodne prijave (odnosno evidentirati proizvodnju za tu fazu); ako nije aktivirano, fazu nije moguće prijavljivati;  
**Faza sa dozvoljenim kretanjem**: ako je aktivirano, prilikom evidentiranja proizvodne faze automatski se kreiraju i skladišne transakcije. To znači da će se kroz proizvodnu prijavu izvršiti prijem gotovog proizvoda na skladište i izdavanje sirovina korišćenih u toj fazi proizvodnje;  
**Centri rada**: označava radni centar, odnosno mašinu na kojoj će se izvršavati određena faza;  
**Fiksno vreme**: ako je aktivirano, označava da je vreme trajanja faze fiksno i ne zavisi od količine; podatak se nasleđuje iz definicije radnog centra;  
**Količina faze**: označava ukupnu količinu komada koja treba da se proizvede u toj fazi;  
**Procenjeni datum početka / završetka**: predstavljaju planirane datume početka i završetka pojedine faze. Promenom planiranih datuma početka i završetka obrade automatski se ažuriraju i ova polja. Datumi se izračunavaju na osnovu vremena definisanih u fazama obrade, odnosno prema većoj vrednosti između ukupnog vremena radnika i ukupnog vremena mašine za odabranu fazu;  
**Ukupno vreme mašine**: označava ukupno vreme rada mašine, dobijeno množenjem *vremena mašine* i *broja mašina*;  
**Vreme mašine**: označava vreme obrade na toj mašini za tu fazu;  
**Broj mašina**: označava broj mašina koje se koriste u toj fazi;  
**Ukupno vreme radnika**: označava ukupno vreme rada radnika, dobijeno množenjem *vremena radnika* i *broja radnika*;  
**Vreme radnika**: označava vreme rada radne snage za tu fazu;  
**Broj radnika**: označava broj radnika angažovanih u toj fazi;  
**Preklapanje faze / podfaze**: u slučaju preklapanja u ova polja unosi se faza koju je potrebno preklopiti sa odabranom fazom;  
**Lokacija**: omogućava povezivanje skladišne lokacije sa fazom. To znači da će svi artikli korišćeni u toj fazi biti smešteni na toj lokaciji;  
**Konto podizvođača**: dvostrukim klikom na polje otvara se pomoćni pregled za odabir konta i podkonta odgovarajućeg podizvođača. Polje je aktivno samo ako je faza definisana kao *Eksterna*. Kooperant se takođe preuzima iz faze obrade definisane u radnom ciklusu artikla;  
**Kreiran nalog podizvođača**: označava da je za fazu kreiran nalog za podizvođača. Primenjuje se samo na eksterne faze;  
**Opis centra rada**: označava opis radnog centra povezanog sa fazom;  
**Def. korak**: označava da je [Radni list](/docs/production/pp-production-in-progress/reports/worksheet) odštampan kao konačna verzija;  
**Datum štampanja evidencije rada**: označava datum konačnog štampanja [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet);  
**Redni broj radnog lista**: označava redni broj [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet) odštampanog kao konačna verzija.

### Faze - Svojstva

Na ovoj kartici prikazuju se sledeći podaci vezani za fazu odabranu u tabeli:

**Opis faze**: prikazuje opis odabrane faze i podfaze;  
**Tip**: u ovom padajućem meniju moguće je odabrati vrstu obrade (*interna* ili *eksterna*);  
**Preklapanje**: putem ovog padajućeg menija definiše se vrsta eventualnog preklapanja između faza. Moguće su sledeće vrste preklapanja:
- *Ukupno* – posmatrana faza u potpunosti se preklapa sa navedenom fazom;
- *Po količini* – potrebno je navesti nakon koliko proizvedenih komada u ovoj fazi može započeti sledeća faza;
- *Po vremenu* – potrebno je navesti nakon koliko minuta od početka navedene faze može započeti sledeća faza;

**JM vremena**: u ovom polju prikazuje se merna jedinica vremena za fazu. Vreme se može voditi u sekundama, minutima, satima ili danima. Po pravilu se za interne faze koriste minuti, a za eksterne dani, ali to zavisi od specifičnosti pojedinog preduzeća;  
**Mašina**: u ovom polju moguće je odabrati šifru (i opis) pripadajuće mašine. Vrednost se automatski predlaže na osnovu prethodno odabranog radnog centra u tabeli;  
**Proizvodno mesto**: označava proizvodni pogon u kojem će se artikl proizvoditi; podatak se nasleđuje iz proizvodnog naloga;  
**Grupa radne snage**: u ovom polju moguće je odabrati šifru (i opis) odgovarajuće grupe radne snage. Vrednost se automatski predlaže na osnovu prethodno odabranog radnog centra u tabeli;  
**Količina komada za fazu**: označava broj komada proizvedenih pri jednom izvršenju te faze;  
**Vrednost**: ovde se unosi vrednost eventualnog preklapanja prema prethodno definisanim pravilima;  
**Korišćenje**: ako je oznaka aktivna, vreme čekanja/reda povećava vreme zauzeća radnog centra za tu fazu;  
**Vreme čekanja ili reda**: označava vreme koje je potrebno sačekati nakon završetka izvršenja faze pre njenog ponovnog izvođenja. Ako je aktivirana oznaka **Korišćenje**, ovo vreme čekanja takođe će se računati kao dodatno zauzeće radnog centra za tu fazu.

### Faze - Dodatni podaci

Sadrži eventualne dodatne podatke povezane sa odabranom fazom.

### Faze - Priloženi dokumenti

Omogućava povezivanje dokumenata sa odabranom fazom, koji će zatim biti vidljivi i u [MES-u](/docs/production/mes/mes-intro).

## Priprema

Omogućava definisanje vremena pripreme za fazu odabranu na prethodnoj kartici.
Važno je napomenuti da se podaci za radni centar, mašinu i radnu snagu unose samo ako se razlikuju od onih definisanih za samu fazu. Ako ta polja ostanu prazna, automatski će se koristiti vrednosti definisane na glavnoj fazi.

#### Specifična polja

**Faza / Podfaza / Opis**: u ovim poljima prikazuju se informacije o fazi odabranoj na kartici *Faze*;  
**Tip**: označava vrstu faze (*interna* ili *eksterna*);  
**Tip preklapanja**: označava eventualnu vrstu preklapanja;  
**JM vremena**: označava mernu jedinicu vremena za fazu;  
**Radni centar**: u ovim poljima unosi se šifra (i pripadajući opis) radnog centra definisanog za pripremu; (koristi se samo ako je radni centar za pripremu različit od radnog centra korišćenog u odabranoj fazi);  
**Mašina**: u ovim poljima unosi se šifra (i pripadajući opis) mašine za pripremu; (koristi se samo ako je mašina korišćena za pripremu različita od mašine korišćene u odabranoj fazi);  
**Grupa radne snage**: u ovim poljima unosi se šifra (i pripadajući opis) grupe radne snage za pripremu; (koristi se samo ako je grupa radne snage korišćena za pripremu različita od grupe radne snage korišćene u odabranoj fazi);  
**Vrednost**: označava vrednost eventualnog preklapanja;  
**Radni centar**: u ovim poljima prikazuju se šifra i opis radnog centra povezanog sa odabranom fazom;  
**Datum početka**: prikazuje datum početka faze odabrane na kartici *Faze*;  
**Datum završetka**: prikazuje datum završetka faze odabrane na kartici *Faze*;  
**Vreme pripreme**: unosi se vreme pripreme. Radi se o fiksnom vremenu koje se ne menja u zavisnosti od količine za proizvodnju u odabranoj fazi;  
**Vreme ponovne pripreme**: unosi se vreme ponovne pripreme. Koristi se kada je potrebno ponovo pripremiti radni centar između dva izvršenja iste faze i pribraja se vremenu pripreme;  
**Broj mašina**: označava broj mašina korišćenih za pripremu;  
**Broj radnika**: označava broj radnika uključenih u pripremu.

## Oprema

Na ovoj kartici, koja se uglavnom sastoji od tabele podataka, moguće je definisati koja će se oprema i u kojoj količini koristiti tokom proizvodnje faze odabrane na kartici *Faze*.

#### Specifična polja

**Redosled**: u ovom polju moguće je definisati redosled korišćenja opreme;  
**Oprema**: putem ovog padajućeg menija moguće je odabrati šifru opreme preuzetu iz šifarnika [Oprema](/docs/configurations/tables/production/equipments);  
**Vremenski raspoređeno**: ako je oznaka aktivna, oprema će biti zauzeta tokom proizvodnje. U tom slučaju procedura [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling) neće uzimati u obzir artikl odabran putem polja za opremu, već artikl naveden u poljima klase i šifre, koji mora imati *Prirodu artikla* postavljenu na *Oprema* ili *Alat*;  
**Za ponovno naručivanje**: ako je oznaka aktivna, procedura [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling) kreiraće planirani nalog za nabavku te opreme ako ona nije dostupna. Ako oznaka nije aktivna, znači da se oprema ne naručuje ponovo, već se može koristiti više puta prema svojoj raspoloživosti (na primer kalup);  
**Klasa / Šifra artikla**: u ovim poljima moguće je definisati klasu i šifru artikla (pomoćni izbor automatski filtrira samo artikle koji u šifarniku artikala imaju *Prirodu artikla* postavljenu na *Oprema*);  
**Varijanta**: označava varijantu artikla;  
**Lot**: označava lot artikla;  
**Serijski broj**: označava serijski broj artikla;  
**Količina**: označava količinu artikla.

## Kontrola kvaliteta

Na ovoj kartici, koja se uglavnom sastoji od tabele podataka, moguće je pregledavati detalje planiranih ispitivanja [kontrole kvaliteta](/docs/quality/quality-intro) za pojedinu fazu / podfazu.

## Napomena faze

Na ovoj kartici prikazuje se napomena povezana sa fazom rada odabranom na kartici *Faze*. Korisnik je može menjati direktno unutar predmetnog proizvodnog naloga.

## Operativna uputstva

Na ovoj kartici moguće je priložiti i pregledavati *Operativna uputstva* povezana sa fazom rada odabranom na kartici *Faze*. Ona će biti dostupna i u [Fluentis MES-u](/docs/production/mes/mes-intro).

## Zaposleni

Na ovoj kartici moguće je definisati operatere koji će izvršavati pojedine faze proizvodnog ciklusa. (*Koristi se samo u prilagođavanjima sistema*).

## Dodatni podaci

Za detaljan opis funkcionalnosti *extra data* pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Sažetak i dodatne informacije

Upravljanje proizvodnim nalozima u Fluentisu uključuje:
- Automatsko ili ručno kreiranje putem postupka izdavanja.
- Potpunu konfiguraciju zaglavlja, materijala, faza i priprema.
- Napredno upravljanje tehnološkim postupkom, sastavnicom i operativnim izmenama.
- Povezanost sa MRP-om, raspoređivanjem, kvalitetom i MES-om.
- Pomoćne alate poput popunjavanja podataka, preklapanja faza i kontrole resursa.

Dodatne informacije:
- [Sastavnica](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)
- [Tehnološki postupak](/docs/erp-home/registers/production/routes/new-route)
- [FCS raspoređivanje](/docs/planning/ms-master-scheduling/fcs-scheduling)
- [MES](/docs/production/mes/mes-intro)
- [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)