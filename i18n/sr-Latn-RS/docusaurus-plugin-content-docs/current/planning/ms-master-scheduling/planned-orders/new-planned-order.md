---
title: Planirani nalozi
sidebar_position: 4
---

:::important Čemu služi
Funkcionalnost **Planirani nalozi** u sistemu Fluentis predstavlja ključnu komponentu za upravljanje planiranjem proizvodnje i nabavke. Planirani nalozi mogu se automatski generisati kroz postupak opšteg planiranja ili MRP obradu (*Manufacturing Resource Planning*), a mogu ih kreirati i sami korisnici. Ovi nalozi služe za preventivno i organizovano upravljanje budućim potrebama za resursima i materijalima.

U platformi Fluentis planirani nalozi mogu biti različitih vrsta: proizvodni, nabavni i kooperantski. U tabeli se prikazuju različitim bojama, u zavisnosti od vrste naloga. Glavni cilj njihove primene jeste optimizacija proizvodnih i nabavnih procesa, osiguravajući da su potrebni resursi dostupni u trenutku kada su potrebni i da se operacije mogu odvijati bez prekida.
:::

Planirani nalozi najčešće se automatski generišu postupkom *Opšteg planiranja* ili *MRP obrade*, ali korisnik ima mogućnost i ručno kreirati planirani nalog, bilo da se radi o nabavnom, proizvodnom ili kooperantskom (podizvođač) nalogu.

Obrazac se otvara putem:

- putanje **Planiranje > MS Glavno vremensko raspoređivanje > Planirani nalozi > Novi planirani nalog**

ili putem

- dugmeta **Unesi nalog** koje se nalazi u obrascu [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Zaglavlje

Obrazac se sastoji od dela koji sadrži podatke zaglavlja i niza kartica u nastavku.

Sistem automatski popunjava *broj*, *godinu* i *datum*, kao i informaciju da li se radi o *nabavnom, proizvodnom ili kooperantskom (podizvođač) nalogu* i *vrsti planiranog naloga*. Vrsta naloga i numeracija preuzimaju se iz tabele [Vrste dokumenata](/docs/configurations/tables/production/documents-types/) u oblasti proizvodnje. Istovremeno se predlažu i podrazumevani *radni ciklus* i *verzija* koja će se koristiti.

Obavezni podaci za unos su: *artikl* sa eventualnom varijantom, *datum početka* i *datum završetka*, nakon čega je potrebno uneti *količinu* za proizvodnju ili nabavku.

### Posebna dugmad

> **Kompletiranje podataka naloga**: pokreće postupak kojim se za artikl unet u planirani nalog dodaju i/ili ažuriraju svi podaci vezani za materijale, faze, pripremu, alate, atribute i napomene. Podaci se preuzimaju iz sastavnice i radnog ciklusa artikla i moraju biti važeći na datum izvršavanja dopune podataka.
> **Ponovo izračunaj izvorni datum**: pokreće postupak ažuriranja datuma početka planiranog naloga i, po potrebi, datuma njegovih proizvodnih faza nakon promene vremena obrade i/ili količine artikla obuhvaćenog planiranim nalogom.
> **[MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: otvara prozor sa MRP parametrima artikla.
> **Generiši sastavnicu**: omogućava generisanje sastavnice na osnovu podataka unetih u nalog ili ažuriranje postojeće sastavnice podacima iz naloga.
> **Generisanje radnog ciklusa**: omogućava kreiranje radnog ciklusa artikla na osnovu podataka unetih u nalog ili ažuriranje postojećeg radnog ciklusa tim podacima.
> **[Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: otvara pregled sastavnice artikla.
> **[Radni (proizvodni) ciklusi](/docs/erp-home/registers/production/routes/new-route)**: omogućava pregled radnog ciklusa i pripadajućih proizvodnih faza artikla.

### Posebna polja

**Tip naloga**: predlaže se podrazumevana vrsta planiranog naloga;
**Obavezni nalog**: ako je oznaka aktivna, planirani nalog dobija prioritetni status i korisniku nije dozvoljeno da pomeri nalog na datum kasniji od planiranog datuma završetka određenog opštim planiranjem;
**Prioritet naloga**: omogućava definisanje prioriteta koji se dodeljuje ovom nalogu;
**Generisan iz potrebe**: u ovom polju prikazuje se:
- *Ručno* (ako je planirani nalog kreiran ručno),
- *Zavisan* (ako je planirani nalog generisan planiranjem i zavisi od drugih planiranih naloga viših nivoa),
- *Nezavisan* (ako je planirani nalog generisan planiranjem, ali ne zavisi od drugih planiranih naloga viših nivoa jer je već nalog nivoa 1);
**Radni nalog proizvodnje**: u ova tri polja prikazuju se godina, broj i opis proizvodnog naloga iz kojeg je planirani nalog generisan. Ako je planirani nalog kreiran ručno, nije ga moguće povezati sa postojećim proizvodnim nalogom i ova polja će ostati prazna;
**Tip radnog naloga**: prikazuje vrstu proizvodnog naloga iz kojeg je planirani nalog generisan. Ako je planirani nalog kreiran ručno, ovo polje će ostati prazno;
**Projekat**: dvostrukim klikom otvara se pomoćni prozor za povezivanje projekta sa planiranim nalogom;
**Kupac**: prikazuje kupca povezanog sa nalogom;
**Dobavljač/podizvođač**: ova polja su aktivna samo za planirane naloge nabavke i kooperacije;
**Artikal**: prikazuje klasu, šifru i opis artikla naloga;
**Varijanta**: u ovoj padajućoj listi bira se varijanta artikla;
**Količina za proizvodnju**: određuje količinu koju je potrebno proizvesti;
**Osnovna jedinica mere**: prikazuje osnovnu jedinicu mere artikla;
**Količina za korišćenje**: prikazuje količinu u eventualnoj alternativnoj jedinici mere;
**Jedinica mere korišćenja**: prikazuje alternativnu jedinicu mere artikla;
**Datum početka i završetka**: određuju planirane datume početka i završetka proizvodnje. Ako korisnik nakon dopune podataka radnog ciklusa promeni jedan od ta dva datuma, drugi će se automatski preračunati;
**Audit trail**: sekcija koja automatski prikazuje datum kreiranja naloga i datum poslednje izmene zajedno sa korisnikom koji je izvršio radnju;
**Napomene**: slobodno polje za unos napomena.

Nakon čuvanja obaveznih podataka potrebno je kliknuti na dugme **Kompletiranje podataka naloga** kako bi se ažurirale sve kartice (*Materijali*, *Faze* i dr.) koje preuzimaju podatke iz sastavnice i radnog ciklusa artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge).

## Materijali

Ova kartica sadrži tabelu u koju korisnik može ručno unositi materijale koji će se koristiti za proizvodnju artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge). Nakon ručnog unosa, za uvoz podataka iz sastavnice potrebno je kliknuti na dugme **Kompletiranje podataka naloga** u *Ribbon Baru*.
Tabela je već popunjena ako je planirani nalog generisan kroz *Opšte planiranje* ili *MRP obradu*, ali korisnik može menjati postojeće podatke i/ili dodavati dodatne materijale na listu komponenti planiranog naloga.

:::note Napomena
Ako je planirani nalog nabavke, kartica **Materijali** nije aktivna.
:::

### Posebna dugmad

> **Unesi materijal**: omogućava unos novog materijala u tabelu;
> **Otkaži materijal**: omogućava brisanje materijala unetih u tabelu.

### Posebna polja

**Prioritet**: prikazuje prioritet komponente, ako je definisan u sastavnici. Može se menjati kao i svi ostali podaci u ovoj tabeli;
**Podizvođač**: preuzima oznaku iz *MRP parametara* artikla pod nazivom *Uključi u kooperaciju (podizvođač)* i označava da li artikal treba biti uključen kao materijal u kooperantske naloge;

**Jedinica mere korišćenja**: ovde se unosi eventualna alternativna jedinica mere artikla;
**Datum korišćenja**: odgovara planiranom datumu početka planiranog naloga (promenom jednog podatka automatski se menja i drugi);
**Količina korišćenja**: predstavlja jediničnu količinu potrebnu za ovaj artikal (prema sastavnici), ali ju je moguće ručno izmeniti;
**Ukupna količina**: predstavlja količinu dobijenu množenjem *Količine korišćenja* sa *Količinom za proizvodnju*;
**% otpada**: u ovo polje unosi se ili se iz sastavnice preuzima eventualni procenat škarta za artikal;
**Faza/Podfaza**: moguće je ručno uneti fazu i podfazu i tako dodeliti odabrani materijal određenoj proizvodnoj fazi artikla. Podaci se automatski predlažu iz radnog ciklusa;
**Raspoloživa količina**: prikazuje raspoloživu količinu artikla na datum korišćenja.

## Faze

Ova kartica sadrži tabelu u koju korisnik može ručno unositi faze koje će se koristiti za proizvodnju artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge). Nakon ručnog unosa, za uvoz podataka iz radnog ciklusa artikla potrebno je kliknuti na dugme **Kompletiranje podataka naloga** u *Ribbon Baru*.

Tabela je već popunjena ako je planirani nalog nastao kroz *Opšte planiranje* ili *MRP obradu*.

### Posebna dugmad

> **Unesi fazu**: omogućava unos nove faze u tabelu;
> **Obriši fazu**: omogućava brisanje faza unetih u tabelu.

### Posebna polja

**Šifra faze/Faza/Podfaza**: dvostrukim klikom otvara se pomoćni prozor proizvodnih faza iz kojeg se može odabrati odgovarajuća faza i podfaza;
**Kontrola kvaliteta**: ova oznaka određuje da li materijal treba biti podvrgnut kontroli kvaliteta pre korišćenja;
**Proizvodna faza**: ako je oznaka aktivna, označava da je reč o proizvodnoj fazi koja mora biti evidentirana kroz proizvodne prijave;
**Dozvoljeno kretanje**: ako je oznaka aktivna, označava da je reč o fazi koja generiše skladišno knjiženje nakon evidentiranja proizvodne prijave;
**Radni centar**: u ovom polju bira se radni centar. Predlaže se automatski na osnovu prethodno odabrane i unete faze;
**Planirani datum početka/završetka**: predstavljaju planirane datume početka i završetka faze. Promenom planiranih datuma proizvodnje automatski se ažuriraju i datumi faze. Izračunavaju se na osnovu vremena definisanih u proizvodnim fazama, odnosno prema većoj vrednosti između ukupnog radnog vremena radnika i ukupnog vremena rada mašine za odabranu fazu;
**Vreme mašine**: vreme koje mašina utroši za izvršenje faze, vezano za definisanu količinu komada po fazi;
**Broj mašina**: označava broj mašina uključenih u ovu fazu;
**Količina komada po fazi**: označava broj komada po fazi;
**Vreme rada**: vreme koje radnik utroši za izvršenje ove faze, vezano za definisanu količinu komada po fazi;
**Broj radnika**: označava broj radnika uključenih u ovu fazu;
**Konto podizvođača/Opis podizvođača**: dvostrukim klikom otvara se pomoćni prozor za odabir konta i podkonta kooperanta (podizvođača). Ovo polje je aktivno samo ako je faza definisana kao *Spoljna*. Kooperant se takođe automatski preuzima iz faze definisane u radnom ciklusu artikla;
**Opis radnog centra**: prikazuje opis radnog centra.

### Faze - Svojstva

Sadrži svojstva vezana za trenutno odabranu fazu.
**Opis faze/podfaze**: u ovom polju prikazuje se opis odabrane faze;
**Tip**: u ovom padajućem meniju moguće je odrediti vrstu obrade (*unutrašnja* ili *spoljna*);
**Preklapanje**: putem ovog menija definiše se vrsta eventualnog preklapanja između faza. Moguće su sledeće opcije:
- *Ukupno* (odabrana faza se u celosti preklapa sa sledećom fazom),
- *Po količini* (potrebno je navesti nakon koliko proizvedenih komada ove faze može započeti sledeća faza),
- *Po vremenu* (potrebno je navesti nakon koliko minuta od početka ove faze može započeti sledeća faza);
**Jedinica mere vremena**: prikazuje jedinicu mere vremena faze. Vremena se mogu voditi u sekundama, minutama, satima ili danima. U pravilu se za unutrašnje faze koriste minuti, a za spoljne dani, ali to zavisi od organizacije poslovanja;
**Mašine**: u ovom polju može se odabrati šifra i opis mašine. Mašina se automatski predlaže na osnovu radnog centra odabranog u tabeli faza;
**Grupa radne snage**: u ovom polju može se odabrati šifra i opis odgovarajuće grupe radne snage. Vrednost se automatski predlaže iz prethodno odabranog radnog centra;
**Preklapanja prijavljena fazi/podfazi**: prikazuje šifru faze i podfaze sa kojom odabrana faza ima definisano preklapanje. Najčešće se navodi sledeća faza, ali to nije obavezno pravilo;
**Vrednost**: određuje vrednost preklapanja prema prethodno definisanoj vrsti preklapanja;
**Korišćenje**: ako je oznaka aktivna, vreme čekanja/reda povećava ukupno vreme zauzeća radnog centra za tu fazu;
**Vreme čekanja ili reda**: određuje planirano vreme čekanja ili zastoja za ovu fazu.

### Faze - Dodatni podaci

Sadrži eventualne dodatne podatke povezane sa odabranom fazom.

## Priprema

Na ovoj kartici moguće je definisati vremena pripreme za fazu odabranu na kartici **Faze**.

### Posebna polja

**Faza/Podfaza**: prikazuju podatke o fazi odabranoj na kartici *Faze*;
**Tip**: označava vrstu faze (*unutrašnja* ili *spoljna*);
**Tip preklapanja**: prikazuje eventualno definisanu vrstu preklapanja;
**Jedinica mere vremena**: prikazuje vremensku jedinicu mere faze;
**Centar rada**: prikazuje šifru i opis radnog centra definisanog za pripremu;
**Mašina**: prikazuje šifru i opis mašine koja se koristi za pripremu;
**Grupa radne snage**: prikazuje šifru i opis grupe radne snage koja se koristi za pripremu;
**Vrednost**: prikazuje vrednost eventualnog preklapanja;
**Centar rada**: prikazuje šifru i opis radnog centra povezanog sa odabranom fazom;
**Datum početka**: prikazuje datum početka faze odabrane na kartici *Faze*;
**Datum završetka**: prikazuje datum završetka faze odabrane na kartici *Faze*;
**Vreme pripreme**: određuje vreme pripreme. Radi se o fiksnom vremenu koje se ne menja u zavisnosti od količine za proizvodnju u odabranoj fazi;
**Vreme ponovne pripreme**: određuje dodatno vreme pripreme koje se pribraja vremenu pripreme;
**Broj mašina**: određuje broj mašina uključenih u pripremu;
**Broj radnika**: određuje broj radnika uključenih u pripremu.

## Oprema

Na ovoj kartici, koja se prvenstveno sastoji od tabele, moguće je definisati koji će se alati i u kojoj količini koristiti tokom izvođenja faze odabrane na kartici *Faze*.

### Posebna polja

**Redosled**: određuje redosled kojim će se alati koristiti;
**Oprema**: putem ovog padajućeg menija moguće je odabrati šifru alata iz tabele [Alati](/docs/configurations/tables/production/equipments);
**Vremenski raspoređeno**: ako je oznaka aktivna, alat će biti rezervisan tokom proizvodnje. U tom slučaju [F.C.S. planiranje](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) neće uzimati u obzir artikl odabran u polju alata, već artikl definisan u poljima klase i šifre, koji mora imati *Prirodu artikla* postavljenu na *Alat* ili *Pribor*;
**Za ponovno naručivanje**: ako je oznaka aktivna, postupak [F.C.S. planiranja](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) generisaće planirani nalog za nabavku tog alata ako nije dostupan. Ako oznaka nije aktivna, alat se neće ponovo naručivati, već će se koristiti više puta prema svojoj raspoloživosti (na primer kalup);
**Klasa / Šifra artikla**: u ovim poljima moguće je definisati klasu i šifru artikla. Pomoćni prozor automatski filtrira samo artikle čija je *Priroda artikla* u skladišnoj evidenciji definisana kao *Alat*;
**Varijanta**: označava varijantu artikla;
**Serija**: označava seriju artikla;
**Serijski broj**: označava serijski broj artikla;
**Količina**: označava količinu artikla.

## Kontrola kvaliteta

Na ovoj kartici, koja se prvenstveno sastoji od tabele, moguće je pregledati detalje planiranih kontrolnih ispitivanja za odabranu fazu/podfazu.

## Napomena faze

Na ovoj kartici prikazuje se napomena povezana sa proizvodnom fazom odabranom na kartici *Faze*. Korisnik je može uređivati direktno unutar planiranog naloga.

## Operativna uputstva

Na ovoj kartici prikazuju se napomene i dokumenti povezani sa proizvodnom fazom odabranom na kartici *Faze*. Korisnik ih može uređivati direktno unutar planiranog naloga. Ovi dokumenti dostupni su i unutar MES sistema na kartici *Dokumenti i radna uputstva*.

## Dodatni podaci

Za detaljan opis dodatnih podataka pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).
Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).