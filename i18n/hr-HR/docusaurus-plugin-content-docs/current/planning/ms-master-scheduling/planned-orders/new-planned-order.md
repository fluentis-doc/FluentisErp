---
title: Planirane narudžbe (nalog)
sidebar_position: 4
---

:::important Čemu služi
Funkcionalnost **Planirane narudžbe** u sustavu Fluentis ključna je komponenta za upravljanje planiranjem proizvodnje i nabave. Planirani nalozi/narudžbe mogu se automatski generirati kroz postupak općeg planiranja ili MRP obradu (*Manufacturing Resource Planning*), a mogu ih kreirati i sami korisnici. Ovi nalozi služe za preventivno i organizirano upravljanje budućim potrebama za resursima i materijalima.

U platformi Fluentis planirani nalozi mogu biti različitih vrsta: proizvodni, nabavni i kooperantski. U tablici se prikazuju različitim bojama, ovisno o vrsti naloga. Glavni cilj njihove primjene jest optimizacija proizvodnih i nabavnih procesa, osiguravajući da su potrebni resursi dostupni u trenutku kada su potrebni te da se operacije mogu odvijati bez prekida.
:::

Planirani nalozi najčešće se automatski generiraju postupkom *Općeg planiranja* ili *MRP obrade*, no korisnik ima mogućnost i ručno kreirati planirani nalog, bilo da se radi o nabavnom, proizvodnom ili kooperantskom (podizvođač) nalogu.

Obrazac se otvara putem:

- putanje **Planiranje > MS Glavno vremensko raspoređivanje > Planirane narudžbe > Nova planirana narudžba**

ili putem

- tipke **Umetni nalog** koja se nalazi u obrascu [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Zaglavlje

Obrazac se sastoji od dijela koji sadrži podatke zaglavlja te niza kartica u nastavku.

Sustav automatski popunjava *broj*, *godinu* i *datum*, kao i informaciju radi li se o *nabavnom, proizvodnom ili kooperantskom (podizvođač) nalogu* te *vrsti planiranog naloga*. Vrsta naloga i numeracija preuzimaju se iz tablice [Vrste dokumenata](/docs/configurations/tables/production/documents-types/) u području proizvodnje. Istovremeno se predlažu i zadani *radni ciklus* te *verzija* koja će se koristiti.

Obavezni podaci za unos su: *artikl* s eventualnom varijantom te *datum početka* i *datum završetka*, nakon čega je potrebno unijeti *količinu* za proizvodnju ili nabavu.

### Posebne tipke

> **Kompletiranje podataka narudžbe**: pokreće postupak kojim se za artikl unesen u planirani nalog dodaju i/ili ažuriraju svi podaci vezani uz materijale, faze, pripremu, alate, atribute i napomene. Podaci se preuzimaju iz sastavnice i radnog ciklusa artikla te moraju biti važeći na datum izvršavanja dopune podataka.
> **Ponovno izračunaj izvorni datum**: pokreće postupak ažuriranja datuma početka planiranog naloga te, prema potrebi, i datuma njegovih proizvodnih faza nakon promjene vremena obrade i/ili količine artikla obuhvaćenog planiranim nalogom.
> **[MRP parametri](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: otvara prozor s MRP parametrima artikla.
> **Generiraj sastavnicu**: omogućuje generiranje sastavnice na temelju podataka unesenih u nalog ili ažuriranje postojeće sastavnice podacima iz naloga.
> **Generiranje radnog ciklusa**: omogućuje kreiranje radnog ciklusa artikla na temelju podataka unesenih u nalog ili ažuriranje postojećeg radnog ciklusa tim podacima.
> **[Sastavnica](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: otvara pregled sastavnice artikla.
> **[Radni (proizvodni) ciklusi](/docs/erp-home/registers/production/routes/new-route)**: omogućuje pregled radnog ciklusa i pripadajućih proizvodnih faza artikla.

### Posebna polja

**Tip narudžbe**: predlaže se zadana vrsta planiranog naloga;
**Obvezni nalog**: ako je oznaka aktivna, planirani nalog dobiva prioritetni status te korisniku nije dopušteno pomaknuti nalog na datum kasniji od planiranog datuma završetka određenog općim planiranjem;
**Prioritet naloga**: omogućuje definiranje prioriteta koji se dodjeljuje ovom nalogu;
**Generiran iz potražnje**: u ovom polju prikazuje se:
- *Ručno* (ako je planirani nalog kreiran ručno),
- *Ovisan* (ako je planirani nalog generiran planiranjem i ovisi o drugim planiranim nalozima viših razina),
- *Neovisan* (ako je planirani nalog generiran planiranjem, ali ne ovisi o drugim planiranim nalozima viših razina jer je već nalog razine 1);
**Radni nalog proizvodnje**: u ova tri polja prikazuju se godina, broj i opis proizvodnog naloga iz kojeg je planirani nalog generiran. Ako je planirani nalog kreiran ručno, nije ga moguće povezati s postojećim proizvodnim nalogom te će ova polja ostati prazna;
**Tip radnog naloga**: prikazuje vrstu proizvodnog naloga iz kojeg je planirani nalog generiran. Ako je planirani nalog kreiran ručno, ovo će polje ostati prazno;
**Projekt**: dvostrukim klikom otvara se pomoćni prozor za povezivanje projekta s planiranim nalogom;
**Kupac**: prikazuje kupca povezanog s nalogom;
**Dobavljač/podizvođač**: ova su polja aktivna samo za planirane nabavne i kooperantske naloge;
**Artikl**: prikazuje klasu, šifru i opis artikla naloga;
**Varijanta**: u ovom padajućem izborniku odabire se varijanta artikla;
**Količina za proizvodnju**: određuje količinu koju je potrebno proizvesti;
**Osnovna mjerna jedinica**: prikazuje osnovnu mjernu jedinicu artikla;
**Količina za korištenje**: prikazuje količinu u eventualnoj alternativnoj mjernoj jedinici;
**Mjerna jedinica korištenja**: prikazuje alternativnu mjernu jedinicu artikla;
**Datum početka i završetka**: određuju planirane datume početka i završetka proizvodnje. Ako korisnik nakon dopune podataka radnog ciklusa promijeni jedan od ta dva datuma, drugi će se automatski preračunati;
**Audit trail**: sekcija koja automatski prikazuje datum kreiranja naloga i datum posljednje izmjene zajedno s korisnikom koji je izvršio radnju;
**Napomene**: slobodno polje za unos napomena.

Nakon spremanja obaveznih podataka potrebno je kliknuti na tipku **Kompletiranje podataka narudžbe** kako bi se ažurirale sve kartice (*Materijali*, *Faze* i dr.) koje preuzimaju podatke iz sastavnice i radnog ciklusa artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge).

## Materijali

Ova kartica sadrži tablicu u koju korisnik može ručno unositi materijale koji će se koristiti za proizvodnju artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge). Nakon ručnog unosa, za uvoz podataka iz sastavnice potrebno je kliknuti na tipku **Kompletiranje podataka narudžbe** u *Ribbon Baru*.

Tablica je već popunjena ako je planirani nalog generiran kroz *Opće planiranje* ili *MRP obradu*, no korisnik može mijenjati postojeće podatke i/ili dodavati dodatne materijale na popis komponenti planiranog naloga.

:::note Napomena
Ako je planirani nalog nabavni, kartica **Materijali** nije aktivna.
:::

### Posebne tipke

> **Unesi materijal**: omogućuje unos novog materijala u tablicu;
> **Otkaži materijal**: omogućuje brisanje materijala unesenih u tablicu.

### Posebna polja

**Prioritet**: prikazuje prioritet komponente, ako je definiran u sastavnici. Može se mijenjati kao i svi ostali podaci u ovoj tablici;
**Podizvođač**: preuzima oznaku iz *MRP parametara* artikla pod nazivom *Uključi u kooperaciju (podizvođač)* te označava treba li artikl biti uključen kao materijal u kooperantske naloge;
**Mjerna jedinica korištenja**: ovdje se unosi eventualna alternativna mjerna jedinica artikla;
**Datum korištenja**: odgovara planiranom datumu početka planiranog naloga (promjenom jednog podatka automatski se mijenja i drugi);
**Količina korištenja**: predstavlja jediničnu količinu potrebnu za ovaj artikl (prema sastavnici), ali ju je moguće ručno izmijeniti;
**Ukupna količina**: predstavlja količinu dobivenu množenjem *Količine korištenja* s *Količinom za proizvodnju*;
**% otpada**: u ovo polje unosi se ili se iz sastavnice preuzima eventualni postotak škarta za artikl;
**Faza/Podfaza**: moguće je ručno unijeti fazu i podfazu te tako dodijeliti odabrani materijal određenoj proizvodnoj fazi artikla. Podaci se automatski predlažu iz radnog ciklusa;
**Raspoloživa količina**: prikazuje raspoloživu količinu artikla na datum korištenja.

## Faze

Ova kartica sadrži tablicu u koju korisnik može ručno unositi faze koje će se koristiti za proizvodnju artikla obuhvaćenog planiranim nalogom (samo za proizvodne naloge). Nakon ručnog unosa, za uvoz podataka iz radnog ciklusa artikla potrebno je kliknuti na tipku **Kompletiranje podataka narudžbe** u *Ribbon Baru*.
Tablica je već popunjena ako je planirani nalog nastao kroz *Opće planiranje* ili *MRP obradu*.

### Posebne tipke

> **Umetni fazu**: omogućuje unos nove faze u tablicu;
> **Izbriši fazu**: omogućuje brisanje faza unesenih u tablicu.

### Posebna polja

**Šifra faze/Faza/Podfaza**: dvostrukim klikom otvara se pomoćni prozor faza proizvodnje iz kojeg se može odabrati odgovarajuća faza i podfaza;
**Kontrola kvalitete**: ova oznaka određuje treba li materijal biti podvrgnut kontroli kvalitete prije korištenja;
**Proizvodna faza**: ako je oznaka aktivna, označava da je riječ o proizvodnoj fazi koja mora biti evidentirana kroz proizvodne prijave;
**Dopušteno kretanje**: ako je oznaka aktivna, označava da je riječ o fazi koja generira skladišno knjiženje nakon evidentiranja proizvodne prijave;
**Radni centar**: u ovom se polju odabire radni centar. Predlaže se automatski na temelju prethodno odabrane i unesene faze;
**Procijenjeni datum početka/završetka**: predstavljaju planirane datume početka i završetka faze. Promjenom planiranih datuma proizvodnje automatski se ažuriraju i datumi faze. Izračunavaju se na temelju vremena definiranih u proizvodnim fazama, odnosno prema većoj vrijednosti između ukupnog radničkog vremena i ukupnog strojnog vremena za odabranu fazu;
**Vrijeme stroja**: vrijeme koje stroj utroši za izvršenje faze, vezano uz definiranu količinu komada po fazi;
**Broj stroja**: označava broj strojeva uključenih u ovu fazu;
**Količina komada po fazi**: označava broj komada po fazi;
**Radnikovo vrijeme**: vrijeme koje radnik utroši za izvršenje ove faze, vezano uz definiranu količinu komada po fazi;
**Broj radnika**: označava broj radnika uključenih u ovu fazu;
**Konto podizvođača/Opis podizvođača**: dvostrukim klikom otvara se pomoćni prozor za odabir konta i podkonta kooperanta (podizvođača). Ovo je polje aktivno samo ako je faza definirana kao *Vanjska*. Kooperant se također automatski preuzima iz faze definirane u radnom ciklusu artikla;
**Opis centra rada**: prikazuje opis radnog centra.

### Faze - Svojstva

Sadrži svojstva vezana uz trenutno odabranu fazu.

**Opis faze/podfaze**: u ovom polju prikazuje se opis odabrane faze;
**Tip**: u ovom padajućem izborniku moguće je odrediti vrstu obrade (*unutarnja* ili *vanjska*);
**Preklapanje**: putem ovog izbornika definira se vrsta eventualnog preklapanja između faza. Moguće su sljedeće opcije:
- *Ukupno* (odabrana faza u cijelosti se preklapa sa sljedećom fazom),
- *U količni* (potrebno je navesti nakon koliko proizvedenih komada ove faze može započeti sljedeća faza),
- *U vremenu* (potrebno je navesti nakon koliko minuta od početka ove faze može započeti sljedeća faza);
**Mjerna jedinica vremena**: prikazuje mjernu jedinicu vremena faze. Vremena se mogu voditi u sekundama, minutama, satima ili danima. U pravilu se za unutarnje faze koriste minute, a za vanjske dani, no to ovisi o organizaciji poslovanja;
**Strojevi**: u ovom polju može se odabrati šifra i opis stroja. Stroj se automatski predlaže na temelju radnog centra odabranog u tablici faza;
**Grupa radne snage**: u ovom polju može se odabrati šifra i opis odgovarajuće grupe radne snage. Vrijednost se automatski predlaže iz prethodno odabranog radnog centra;
**Preklapanja prijavljena fazi/podfazi**: prikazuje šifru faze i podfaze s kojom odabrana faza ima definirano preklapanje. Najčešće se navodi sljedeća faza, ali to nije obavezno pravilo;
**Vrijednost**: određuje vrijednost preklapanja prema prethodno definiranoj vrsti preklapanja;
**Korištenje**: ako je oznaka aktivna, vrijeme čekanja/reda povećava ukupno vrijeme zauzeća radnog centra za tu fazu;
**Vrijeme čekanja ili reda**: određuje predviđeno vrijeme čekanja ili zastoja za ovu fazu.

### Faze - Dodatni podaci

Sadrži eventualne dodatne podatke povezane s odabranom fazom.

## Priprema

Na ovoj kartici moguće je definirati vremena pripreme za fazu odabranu na kartici **Faze**.

### Posebna polja

**Faza/Podfaza**: prikazuju podatke o fazi odabranoj na kartici *Faze*;
**Tip**: označava vrstu faze (*unutarnja* ili *vanjska*);
**Tip preklapanja**: prikazuje eventualno definiranu vrstu preklapanja;
**Mjerna jedinica vremena**: prikazuje vremensku mjernu jedinicu faze;
**Centar rada**: prikazuje šifru i opis radnog centra definiranog za pripremu;
**Stroj**: prikazuje šifru i opis stroja koji se koristi za pripremu;
**Grupa radne snage**: prikazuje šifru i opis grupe radne snage koja se koristi za pripremu;
**Vrijednost**: prikazuje vrijednost eventualnog preklapanja;
**Centar rada**: prikazuje šifru i opis radnog centra povezanog s odabranom fazom;
**Datum početka**: prikazuje datum početka faze odabrane na kartici *Faze*;
**Datum završetka**: prikazuje datum završetka faze odabrane na kartici *Faze*;
**Vrijeme pripreme**: određuje vrijeme pripreme. Radi se o fiksnom vremenu koje se ne mijenja ovisno o količini za proizvodnju u odabranoj fazi;
**Vrijeme ponovne pripreme**: određuje vrijeme dodatne pripreme koje se pribraja vremenu pripreme;
**Broj stroja**: određuje broj strojeva uključenih u pripremu;
**Broj radnika**: određuje broj radnika uključenih u pripremu.

## Oprema

Na ovoj kartici, koja se prvenstveno sastoji od tablice, moguće je definirati koje će se alate i u kojoj količini koristiti tijekom izvođenja faze odabrane na kartici *Faze*.

### Posebna polja

**Redoslijed**: određuje redoslijed kojim će se alati koristiti;
**Oprema**: putem ovog padajućeg izbornika moguće je odabrati šifru alata iz tablice [Alati](/docs/configurations/tables/production/equipments);
**Vremenski raspoređeno**: ako je oznaka aktivna, alat će biti rezerviran tijekom proizvodnje. U tom slučaju [F.C.S. planiranje](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) neće uzimati u obzir artikl odabran u polju alata, već artikl definiran u poljima klase i šifre, koji mora imati *Prirodu artikla* postavljenu na *Alat* ili *Pribor*;
**Za ponovno naručivanje**: ako je oznaka aktivna, postupak [F.C.S. planiranja](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) generirat će planirani nalog za nabavu tog alata ako nije dostupan. Ako oznaka nije aktivna, alat se neće ponovno naručivati, već će se koristiti više puta prema svojoj raspoloživosti (primjerice kalup);
**Klasa / Šifra artikla**: u ovim poljima moguće je definirati klasu i šifru artikla. Pomoćni prozor automatski filtrira samo artikle čija je *Priroda artikla* u skladišnoj evidenciji definirana kao *Alat*;
**Varijanta**: označava varijantu artikla;
**Serija**: označava seriju artikla;
**Serijski broj**: označava serijski broj artikla;
**Količina**: označava količinu artikla.

## Kontrola kvalitete

Na ovoj kartici, koja se prvenstveno sastoji od tablice, moguće je pregledavati detalje planiranih kontrolnih ispitivanja za odabranu fazu/podfazu.

## Bilješka faze

Na ovoj kartici prikazuje se napomena povezana s proizvodnom fazom odabranom na kartici *Faze*. Korisnik ju može uređivati izravno unutar planiranog naloga.

## Operativne upute

Na ovoj kartici prikazuju se napomene i dokumenti povezani s proizvodnom fazom odabranom na kartici *Faze*. Korisnik ih može uređivati izravno unutar planiranog naloga. Ovi su dokumenti dostupni i unutar MES sustava na kartici *Dokumenti i radne upute*.

## Dodatni podaci

Za detaljan opis dodatnih podataka pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).
Za detalje o zajedničkim funkcionalnostima obrazaca pogledajte stranicu [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).