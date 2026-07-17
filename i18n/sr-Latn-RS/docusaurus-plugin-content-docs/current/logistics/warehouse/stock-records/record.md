---
title: Novi zapis
sidebar_position: 3
---

:::important Čemu služi
Uvod u skladišna knjiženja u Fluentisu predstavlja ključni element za efikasno upravljanje logističkim procesima jer omogućava precizno evidentiranje kretanja robe unutar sistema. Knjiženja se mogu kreirati automatski kroz različite postupke, kao što su ulazi robe (na primer putem prijemnica i ulaznih računa) ili izlazi robe (putem otpremnica i izlaznih računa). Ovakav način rada ne samo da pojednostavljuje unos skladišnih kretanja, već obezbeđuje i usklađenost podataka između različitih operativnih dokumenata.

Svako skladišno knjiženje omogućava korisniku definisanje osnovnih podataka kao što su skladište, predložak i datum. Evidentiranje artikala vrši se kroz tabelu stavki u kojoj je moguće navesti količine i merne jedinice, uz opciono upravljanje lotovima i serijskim brojevima kada je to potrebno. Takođe su dostupne različite oznake koje određuju obaveznost pojedinih dokumenata i način obrade protustavki, čime se obezbeđuju sledljivost i usklađenost skladišnih procesa.

Dodatna prednost je mogućnost prilagođavanja knjiženja specifičnim potrebama preduzeća, na primer kroz upravljanje po lokacijama, projektima ili kupcima/dobavljačima. Ova fleksibilnost omogućava prilagođavanje sistema različitim logističkim organizacijama i poslovnim procesima.
:::

Forma se otvara:

- putem menija **Logistika > Skladište > Evidencije > Novi zapis**
- ili klikom na dugme **Novo** iz forme **Evidencije**.

## Automatsko kreiranje knjiženja

Skladišna knjiženja mogu se automatski kreirati kroz:

- postupke **ulaza robe** iz ulaznih otpremnica, ulaznih računa i prijema robe
- postupke **izlaza robe** iz izlaznih otpremnica, izlaznih računa, lista za preuzimanje, lista utroška materijala i otpremnica kooperacije
- postupke **evidentiranja proizvodnje** i **povrata iz kooperacije**

## Ručno kreiranje knjiženja

Korisnik može i ručno unositi skladišna knjiženja, pri čemu mora popuniti sva potrebna polja u zavisnosti od vrste artikla i skladišnog predloška koji se koristi.

Prozor novog skladišnog knjiženja sastoji se od dve kartice:

- **Evidencija**
- **Protustavka**

:::note Napomena
Kartica **Protustavka** aktivna je samo ukoliko skladišni predložak odabran na prvoj kartici ima definisanu povezanu protustavku u tabeli [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates).
:::

Unutar jednog skladišnog knjiženja moguće je evidentirati više skladišnih kretanja za različite artikle, uključujući artikle koji koriste različite načine upravljanja zalihama.

## Evidencija

Ova kartica sastoji se od zaglavlja i četiri različite tabele. Prva tabela koristi se za unos artikala koji se knjiže kroz skladišno knjiženje, dok se preostale tri tabele koriste u zavisnosti od podešavanja u *Šifarniku artikala* i odabranog *Skladišnog predloška* u zaglavlju dokumenta.

### Knjiženje – fiksni deo

**Skladište**: predstavlja šifru skladišta na kojem će se izvršiti knjiženje.

**Skladišni predložak**: obavezan podatak za unos skladišnih kretanja. Bira se putem odgovarajuće padajuće liste, u kojoj se prikazuju samo predlošci povezani sa odabranim skladištem.

**Datum knjiženja**: automatski se predlaže trenutni datum i označava dan na koji će biti evidentirana skladišna kretanja uneta u tabelu stavki. Vrednost je moguće promeniti, na primer na datum pre trenutnog datuma. Međutim, datum mora uvek biti unutar perioda definisanog poljima **Početak perioda** i **Kraj perioda** na prvoj kartici *Početnih parametara skladišta*.

**Broj knjiženja**: automatski se predlaže i predstavlja dnevni redni broj po skladištu. Numeracija se svakodnevno resetuje i ponovo počinje od broja 1. Korisnik može ručno izmeniti i datum i broj knjiženja.

:::note Napomena
Nakon unosa prvog artikla u tabelu stavki, polja **Datum knjiženja** i **Broj knjiženja** postaju dostupna samo za pregled.
:::

Nakon unosa navedenih podataka korisnik može započeti unos skladišnih kretanja u tabelu artikala. Pored toga, moguće je popuniti i dodatne podatke zaglavlja:

**Interni dokument**: u ovom polju korisnik može dodatno definisati razlog nastanka knjiženja.

Ako je knjiženje automatski kreirano iz *Prijave proizvodnje*, polje prikazuje broj prijave i proizvodnu fazu na koju se odnosi. U pripadajućem polju za datum korisnik može navesti datum dokumenta na osnovu kojeg unosi knjiženje.
Ako je knjiženje automatski nastalo ulazom ili izlazom iz drugog dokumenta, datum se automatski postavlja na datum unosa izvornog dokumenta.
Ako je knjiženje nastalo iz *Prijave proizvodnje*, prikazuje se i stvarni datum početka proizvodnog naloga za koji je prijava evidentirana.

**Verzija**: putem ove padajuće liste korisnik može odabrati verziju različitu od podrazumevane, iako sistem automatski predlaže osnovnu verziju.

**Konto**: ova tri polja sadrže podatke o kupcu ili dobavljaču:

- konto
- podkonto
- naziv partnera

Ako je knjiženje automatski kreirano ulazom ili izlazom iz dokumenta, podaci o partneru automatski se preuzimaju iz tog dokumenta.

**Povezani dokument**: omogućava unos dokumenta koji je generisao skladišno knjiženje.

Ako je knjiženje automatski kreirano ulazom ili izlazom iz dokumenta, sistem automatski upisuje opis dokumenta koji uključuje vrstu dokumenta i njegov broj.

Ako je knjiženje nastalo iz *Prijave proizvodnje*, u ovom polju prikazuje se broj proizvodnog naloga za koji je prijava evidentirana.

**Projekat**: dvostrukim klikom otvara se *Pomoćnik za projekte* koji omogućava povezivanje projekta sa celim skladišnim knjiženjem koje se unosi. Odabrani projekat automatski se prenosi na sve stavke artikala unete u tabelu.

**Napomena**: u ovo polje moguće je uneti slobodnu napomenu vezanu za skladišno knjiženje.

Kao što je prethodno navedeno, korisnik sada može preći na unos kretanja u prvu tabelu, onu koja sadrži artikle za skladišno kretanje.

### Artikli

U ovoj prvoj tabeli korisnik može, koristeći *Pomoćnik za artikle*, uneti listu artikala koje želi evidentirati kroz skladišno kretanje.

**Broj kretanja**: u ovoj koloni prikazuje se redni broj kretanja. Numeracija uvek počinje brojem 1 i predstavlja jednostavan redni broj koji se resetuje prilikom otvaranja novog skladišnog knjiženja. Polje je samo za pregled i ne omogućava ručno ponovno dodeljivanje brojeva nakon brisanja pojedinačnih redova.

**Klasa**: u ovom polju moguće je putem odgovarajuće padajuće liste odabrati klasu artikla.

**Šifra artikla**: u ovoj koloni moguće je ručno uneti šifru artikla ili je odabrati putem *Pomoćnika za artikle*.

**Varijanta**: putem ove padajuće liste korisnik može odabrati jednu od varijanti artikla. Ako artikal nema definisane varijante, polje je onemogućeno.

**Merna jedinica**: u ovoj koloni prikazuje se, samo za pregled, šifra osnovne merne jedinice artikla.

**Alternativna merna jedinica**: u ovoj koloni korisnik može odabrati jednu od alternativnih mernih jedinica artikla, ukoliko su definisane. Na taj način količina se može unositi u alternativnoj mernoj jedinici, dok se upravljana količina automatski obračunava prema faktoru konverzije definisanom u *Šifarniku artikala > kartica Alternativne merne jedinice*.

**Količina kretanja**: u ovoj koloni obavezno se unosi količina kretanja.
- Ako je polje *Alternativna merna jedinica* prazno, količina se izražava u osnovnoj mernoj jedinici.
- Ako je odabrana alternativna merna jedinica, količina se izražava u toj mernoj jedinici.

Nakon što korisnik unese i potvrdi ispravnu šifru artikla, sistem automatski predlaže količinu **1**, koju je moguće izmeniti.
Količina se uvek unosi kao apsolutna vrednost, jer informaciju da li se radi o ulazu ili izlazu određuje vrsta odabranog skladišnog predloška.

**Operativna količina**: u ovoj koloni prikazuje se količina izražena u osnovnoj mernoj jedinici artikla.

Ako je polje *Alternativna merna jedinica* prazno, vrednost je jednaka količini kretanja.
Ako je odabrana alternativna merna jedinica, polje se može uređivati i korisnik može ručno uneti upravljanu količinu. Sistem zatim automatski obračunava količinu kretanja deljenjem ili množenjem (u zavisnosti od podešavanja u *Početnim parametrima skladišta*) sa faktorom konverzije definisanim u *Šifarniku artikala > kartica Alternativne merne jedinice*.

**Iznos kretanja**: u ovoj koloni automatski se prikazuje vrednost:

- poslednjeg troška
- prosečnog troška
- standardnog troška
- prodajne cene

u zavisnosti od podešavanja odabranog skladišnog predloška.

Ako je u skladišnom predlošku kao predloženi trošak odabrana opcija **Nijedan**, sistem predlaže vrednost **0**.

Ako je polje *Alternativna merna jedinica* prazno, iznos kretanja je uvek jednak upravljanom iznosu. U suprotnom, u ovoj koloni potrebno je uneti jedinični iznos artikla izražen u odabranoj alternativnoj mernoj jedinici.
Ako je u *Početnim parametrima skladišta* za tekuću godinu aktivirana oznaka **Prikaži opis stanja zaliha u knjiženjima**, sistem će tokom unosa ili izmene količine prikazati trenutno stanje zalihe artikla u skladištu za koje se knjiženje kreira.
Ako raspoloživa količina nije dovoljna, a u *Početnim parametrima skladišta* za tekuću godinu nije aktivirana oznaka **Dozvoli negativnu zalihu**, red kretanja neće biti moguće sačuvati.

**Operativni iznos**: u ovoj koloni automatski se prikazuje vrednost *poslednjeg troška, prosečnog troška, standardnog troška ili prodajne cene*, u zavisnosti od podešavanja skladišnog predloška korišćenog u knjiženju.

Ako je u skladišnom predlošku kao predloženi trošak postavljena opcija **Nijedan**, sistem predlaže vrednost troška jednaku nuli.

Ako je kolona *Alternativna merna jedinica* prazna, upravljani iznos je uvek jednak iznosu kretanja. U suprotnom, u ovoj koloni (koja je uvek samo za pregled) izračunava se jedinična vrednost kretanja izražena u osnovnoj mernoj jedinici prema sledećoj formuli:

*Iznos kretanja × Količina kretanja / Operativna količina*

**Projekat**: u ovoj koloni korisnik može, putem odgovarajućeg *Pomoćnika za projekte* koji se otvara dvostrukim klikom na žuto polje, odabrati projekat koji će biti povezan sa stavkom kretanja.

**Ukupan iznos**: u ovoj koloni prikazuje se ukupna vrednost stavke kretanja. Polje nije moguće uređivati, a vrednost se izračunava množenjem operativne količine sa operativnim iznosom.

**Opis stavke**: u ovoj koloni prikazuje se opis artikla. Vrednost se automatski popunjava nakon što sistem prepozna uneti artikl.

**Opis varijante**: u ovoj koloni prikazuje se opis varijante artikla. Vrednost se automatski popunjava nakon što sistem prepozna odabranu varijantu artikla.

**Napomena**: u ovo polje moguće je uneti slobodnu napomenu vezanu za pojedinačnu stavku skladišnog knjiženja.

**Lokacija**: u ovom polju određuje se lokacija sa koje će artikl biti izdat ili na koju će biti zaprimljen, u zavisnosti od vrste skladišnog predloška (ulaz ili izlaz).

**Neto težina**: prikazuje ukupnu neto težinu stavke artikla. Vrednost se izračunava kao neto težina definisana u šifarniku artikla pomnožena sa količinom stavke.

**Bruto težina**: prikazuje ukupnu bruto težinu stavke artikla. Vrednost se izračunava kao bruto težina definisana u šifarniku artikla pomnožena sa količinom stavke.

Prilikom čuvanja stavke kretanja sistem može uspešno sačuvati red i omogućiti unos sledeće stavke ili može zahtevati dovršetak unosa kroz evidentiranje lotova i/ili serijskih brojeva u odgovarajućim tabelama koje se nalaze ispod.

### Lotovi i serijski brojevi

**Lotovi**

Ova tabela je aktivna samo ako skladišni predložak ima uključenu oznaku **Upravljanje lotovima** i ako je artikl definisan kao artikl kojim se upravlja po lotovima. U tom slučaju korisnik mora obavezno uneti podatke o lotu ili lotovima koji se evidentiraju.
Kao što je poznato, skladišno knjiženje može biti ulazno ili izlazno. U zavisnosti od toga da li se radi o ulazu ili izlazu, tabela lotova koristi se na različit način i ima različita podešavanja.

> **1. slučaj: Ulazno knjiženje**

Nakon što korisnik sačuva stavku kretanja, sistem ostavlja red u režimu uređivanja te od korisnika zahteva da pređe na tabelu **Lotovi** i unese podatke o lotovima koji se zaprimaju u skladište.

Kolone dostupne u tabeli su sledeće:

**Vrsta šifre lota**: u ovoj koloni prikazuje se vrsta šifre lota definisana u šifarniku artikla.

**Tipovi lota**: u ovoj koloni korisnik može opciono odabrati vrstu lota putem odgovarajuće padajuće liste koja koristi podatke iz istoimene tabele. Ovaj podatak nije obavezan.

**Broj lota**: u ovoj koloni unosi se šifra lota koji se zaprima, generisana prema pravilima definisanim u *Početnim parametrima skladišta* povezanim sa odabranom *Vrstom šifre lota*. Polje je označeno žutom bojom jer korisnik može odlučiti da izvrši novi ulaz na već postojeći lot u bazi podataka. U tom slučaju dvostrukim klikom na žuto polje otvara se odgovarajući *Pomoćnik za lotove* putem kojeg je moguće odabrati lot filtriran među svim lotovima koji se do tada vode u bazi podataka i u preduzeću u kojem korisnik radi.

**Šifra lota dobavljača**: u ovoj koloni ručno se unosi šifra lota dobavljača, odnosno naziv lota koji koristi dobavljač. Ovo polje nije moguće automatski generisati tokom ulaznih operacija i nije obavezno. Ako se broj lota odabere putem *Pomoćnika za lotove*, ovo polje će se automatski popuniti šifrom lota dobavljača povezanom sa odabranim lotom.

**Datum početka**: u ovom polju prikazuje se datum jednak datumu skladišnog knjiženja, koji korisnik može izmeniti. Ako se broj lota odabere putem *Pomoćnika za lotove*, kolona se automatski popunjava datumom početka odabranog lota.

**Datum isteka**: u ovom polju prikazuje se datum isteka lota koji korisnik može izmeniti. Datum se izračunava tako što se na datum početka dodaje broj dana važenja definisan na kartici *Lotovi/SB* u šifarniku artikla. Ako se broj lota odabere putem *Pomoćnika za lotove*, kolona se automatski popunjava datumom isteka odabranog lota.

**Količina**: u ovom polju prikazuje se količina koja se dodeljuje unetom lotu. Ako se lot kreira pritiskom na dugme **Auto**, količina se automatski popunjava količinom iz reda kretanja. Korisnik je može izmeniti, na primer smanjiti količinu, a zatim ponovo pritisnuti dugme **Auto** u sledećem redu. Na taj način kreira se novi lot sa istim karakteristikama, ali sa različitom šifrom lota.

**Zatvoren**: ako je oznaka aktivna, označava da je lot u potpunosti izdat iz skladišta. Kod ulaza lota ova oznaka je uvek neaktivna.

**Prodajni lot**: ako je oznaka aktivna, lot je dostupan za preuzimanje u prodajnim dokumentima, proizvodnji ili skladišnim knjiženjima. Ova opcija omogućava jednostavno određivanje da li se lot može koristiti, kao alternativa složenijem upravljanju statusima lotova. Kod automatskog kreiranja lota oznaka je podrazumevano aktivna, ali je korisnik može odmah deaktivirati i time učiniti lot nedostupnim za korišćenje.

**Napomena**: u ovo polje korisnik može uneti napomenu vezanu za lot koji zaprima. Ako se broj lota odabere putem *Pomoćnika za lotove*, kolona se automatski popunjava napomenom povezanom sa odabranim lotom.
Nakon što su svi lotovi uneti u tabelu **Lotovi**, pri čemu zbir količina lotova mora odgovarati količini na redu kretanja, korisnik može sačuvati red bez daljih poruka o grešci.

> **2. slučaj: Izlazno knjiženje**

Kada korisnik pokuša sačuvati red kretanja, sistem ostavlja red u režimu uređivanja te zahteva od korisnika da pređe u tabelu **Lotovi** i navede lotove koji se izdaju iz skladišta.

Kolone dostupne u tabeli su sledeće:

**Broj lota**: u ovoj koloni korisnik dvostrukim klikom na žuto polje može otvoriti *Pomoćnik za lotove* i odabrati lot koji želi izdati, filtriran među lotovima dostupnim u skladištu na kojem se vrši knjiženje.

**Šifra lota dobavljača**: ova kolona se automatski popunjava šifrom lota dobavljača povezanom sa odabranim lotom.

**Datum početka**: prikazuje datum početka odabranog lota.

**Datum isteka**: prikazuje datum isteka odabranog lota.

**Količina**: u ovom polju prikazuje se količina koja će biti izdata sa odabranog lota. Korisnik je može izmeniti, na primer smanjiti količinu, a zatim putem *Pomoćnika za lotove* u sledećem redu odabrati dodatni lot.

**Lokacija**: u ovom polju prikazuje se lokacija na kojoj je smešten odabrani lot.

Nakon što su svi lotovi uneti u tabelu **Lotovi**, pri čemu zbir količina izdatih lotova mora odgovarati količini na redu kretanja, korisnik može sačuvati red bez daljih poruka o grešci.

**Serijski brojevi**

Ova tabela je aktivna samo ako korišćeni skladišni predložak ima uključenu oznaku **Upravljanje serijskim brojevima** i ako je artikl definisan kao artikl kojim se upravlja putem serijskih brojeva. U tom slučaju korisnik mora obavezno uneti podatke o serijskim brojevima koji se evidentiraju.
Kao što je poznato, skladišno knjiženje može biti ulazno ili izlazno. U zavisnosti od toga da li se radi o ulazu ili izlazu, tabela **Serijski brojevi** koristi se na različit način i ima različita podešavanja.

> **1. slučaj: Ulazno knjiženje**

Kada korisnik pokuša sačuvati red kretanja, sistem ostavlja red u režimu uređivanja te zahteva od korisnika da pređe u tabelu **Serijski brojevi** i unese podatke o serijskim brojevima koji se zaprimaju.

Kolone dostupne u tabeli su sledeće:

**Tip serijskog broja**: u ovoj koloni automatski se prikazuje vrsta serijskog broja definisana u šifarniku artikla. Vrednost je moguće izmeniti.

**Serijski broj**: u ovoj koloni unosi se serijski broj koji se zaprima, generisan prema pravilima definisanim u *Početnim parametrima skladišta* za odabranu vrstu serijskog broja. Vrednost je moguće ručno izmeniti.

**Serijski broj kupca**: označava serijski broj koji koristi kupac.

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač.

**Datum početka**: označava datum početka važenja serijskog broja.

**Datum isteka**: označava datum isteka važenja serijskog broja.

**Datum poslednje izmene**: označava datum poslednje izmene serijskog broja.

**Opozvan**: označava da se serijski broj nalazi u statusu opozvan.

**Prisilno zatvoren**: označava da je serijski broj prisilno zatvoren.

**Lot**: označava broj lota povezan sa serijskim brojem.

Nakon što su svi serijski brojevi uneti u tabelu **Serijski brojevi**, pri čemu broj unetih serijskih brojeva mora odgovarati količini na redu kretanja, korisnik može sačuvati red bez daljih poruka o grešci.

> **2. slučaj: Izlazno knjiženje**

Kada korisnik pokuša sačuvati red kretanja, sistem ostavlja red u režimu uređivanja te zahteva od korisnika da pređe u tabelu **Serijski brojevi** i unese podatke o serijskim brojevima koji se izdaju iz skladišta.

Kolone dostupne u tabeli su sledeće:

**Serijski broj**: u ovoj koloni korisnik dvostrukim klikom na žuto polje odabira serijske brojeve za izdavanje putem odgovarajućeg *Pomoćnika za serijske brojeve*.

**Datum unosa**: označava datum unosa serijskog broja.

**Serijski broj kupca**: označava serijski broj koji koristi kupac.

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač.

**Datum poslednje izmene**: označava datum poslednje izmene serijskog broja.

**Datum početka**: označava datum početka važenja serijskog broja.

**Opozvan**: označava da se serijski broj nalazi u statusu opozvan.

**Lot**: označava broj lota povezan sa serijskim brojem.

Nakon što su svi serijski brojevi uneti u tabelu **Serijski brojevi**, pri čemu broj unetih serijskih brojeva mora odgovarati količini na redu kretanja, korisnik može sačuvati red bez daljih poruka o grešci.

### Mesta troška

U ovoj tabeli korisnik može povezati jedno ili više mesta troška sa redom kretanja te raspodeliti količinu kretanja na različita mesta troška.

Tabela sadrži kolonu sa žuto označenim poljem. Dvostrukim klikom na njega korisnik može otvoriti **Pomoćnika za mesta troška**, putem kojeg odabira mesto troška za red tabele. Nakon toga potrebno je uneti količinu koja se odnosi na odabrano mesto troška.

Ako je zbir količina unetih u redove tabele mesta troška različit od operativne količine na redu kretanja, sistem prikazuje upozorenje i ne dozvoljava čuvanje kretanja.

### Dodatni podaci

Za više informacija pogledati dokumentaciju o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Protustavka

Ova kartica je potpuno jednaka kartici **Zapis**, ali je aktivna samo ako skladišni predložak postavljen na kartici **Zapis** ima definisano *protuskladište* (odredišno skladište) i skladišni predložak *protustavke*.

Predlošci protustavke koriste se kada je potrebno upravljati dvostrukim skladišnim kretanjem kroz jedno knjiženje. U tabeli skladišnih predložaka moguće je definisati ulazni predložak kao protustavku izlaznom predlošku i obrnuto.

Na kartici **Protustavka** prikazuju se svi podaci uneti na kartici **Zapis**, pri čemu korisnik može menjati samo određene podatke zaglavlja:

- **Interni dokument**
- **Referentni dokument**
- **Projekat**

Podaci na redu kretanja moraju biti identični na obe kartice. Isto važi i za tabele **Lotovi**, **Serijski brojevi**, **Varijante** i **Mesta troška** povezane sa pojedinačnim kretanjem.

Jedino je polje **Lokacija** moguće uređivati na kartici **Protustavka**.

Postoji jedan **poseban slučaj** u kojem se na kartici **Zapis** unosi jedan artikl, a na kartici **Protustavka** drugi artikli. To se događa samo kada skladišni predložak protustavke povezan sa glavnim predloškom ima aktiviranu oznaku **Sastavnica**.

Ova oznaka omogućava korisniku da na kartici **Zapis** zaprimi artikl (koristeći ulazni skladišni predložak), dok se na kartici **Protustavka** automatski prikažu stavke njegove sastavnice, koje se zatim izdaju putem izlaznog skladišnog predloška.

Naravno, moguće je upravljati i obrnutim scenarijem.

Još jedan **specifičan slučaj** koji zahteva korišćenje skladišnih predložaka sa definisanom protustavkom odnosi se na **automatsko izdavanje otpremnice za doradu**. U tom slučaju sistem automatski izdaje materijal koji se šalje kooperantu iz skladišta sirovina (ili poluproizvoda, u zavisnosti od slučaja) te istovremeno zaprima isti materijal u skladište kooperanta, gde će ga on koristiti za proizvodnju proizvoda definisanih nalogom za doradu.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca pogledati sledeći dokument:

[Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)


