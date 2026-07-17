---
title: Novi zapis
sidebar_position: 3
---

:::important Čemu služi
Uvod u skladišna knjiženja u Fluentisu predstavlja ključan element za učinkovito upravljanje logističkim procesima jer omogućuje precizno evidentiranje kretanja robe unutar sustava. Knjiženja se mogu kreirati automatski kroz različite postupke, kao što su ulazi robe (primjerice putem primki i ulaznih računa) ili izlazi robe (putem otpremnica i izlaznih računa). Ovakav način rada ne samo da pojednostavljuje unos skladišnih kretanja, već osigurava i usklađenost podataka između različitih operativnih dokumenata.

Svako skladišno knjiženje omogućuje korisniku definiranje osnovnih podataka poput skladišta, predloška i datuma. Evidentiranje artikala vrši se kroz tablicu stavki u kojoj je moguće navesti količine i mjerne jedinice, uz opcionalno upravljanje lotovima i serijskim brojevima kada je to potrebno. Također su dostupne različite oznake koje određuju obveznost pojedinih dokumenata i način obrade protustavki, čime se osiguravaju sljedivost i usklađenost skladišnih procesa.

Dodatna prednost je mogućnost prilagodbe knjiženja specifičnim potrebama poduzeća, primjerice kroz upravljanje po lokacijama, projektima ili kupcima/dobavljačima. Ova fleksibilnost omogućuje prilagodbu sustava različitim logističkim organizacijama i poslovnim procesima.
:::

Obrazac se otvara:

- putem izbornika **Logistika > Skladište > Zapisi > Novi zapis**
- ili klikom na gumb **Novo** iz obrasca **Zapisi**.

## Automatsko kreiranje knjiženja

Skladišna knjiženja mogu se automatski kreirati kroz:

- postupke **ulaza robe** iz ulaznih otpremnica, ulaznih računa i zaprimanja robe
- postupke **izlaza robe** iz izlaznih otpremnica, izlaznih računa, lista za preuzimanje, lista utroška materijala i otpremnica kooperacije
- postupke **evidentiranja proizvodnje** i **povrata iz kooperacije**

## Ručno kreiranje knjiženja

Korisnik može i ručno unositi skladišna knjiženja, pri čemu mora popuniti sva potrebna polja ovisno o vrsti artikla i skladišnom predlošku koji se koristi.

Prozor novog skladišnog knjiženja sastoji se od dvije kartice:

- **Zapis**
- **Protustavka**

:::note Napomena
Kartica **Protustavka** aktivna je samo ako skladišni predložak odabran na prvoj kartici ima definiranu povezanu protustavku u tablici [Predlošci skladišta](/docs/configurations/tables/logistics/warehouse-templates).
:::

Unutar jednog skladišnog knjiženja moguće je evidentirati više skladišnih kretanja za različite artikle, uključujući artikle koji koriste različite načine upravljanja zalihama.

## Zapis

Ova kartica sastoji se od zaglavlja i četiri različite tablice. Prva tablica koristi se za unos artikala koji se knjiže kroz skladišno knjiženje, dok se preostale tri tablice koriste ovisno o postavkama u *Šifarniku artikala* i odabranom *Skladišnom predlošku* u zaglavlju dokumenta.

### Knjiženje – fiksni dio

**Skladište**: predstavlja šifru skladišta na kojem će se izvršiti knjiženje.

**Predložak skladišta**: obavezan podatak za unos skladišnih kretanja. Odabire se putem odgovarajućeg padajućeg izbornika, u kojem se prikazuju samo predlošci povezani s odabranim skladištem.

**Datum knjiženja**: automatski se predlaže trenutni datum i označava dan na koji će biti evidentirana skladišna kretanja unesena u tablicu stavki. Vrijednost je moguće promijeniti, primjerice na datum prije trenutnog datuma. Međutim, datum mora uvijek biti unutar razdoblja definiranog poljima **Početak razdoblja** i **Kraj razdoblja** na prvoj kartici *Početnih parametara skladišta*.

**Broj knjiženja**: automatski se predlaže te predstavlja dnevni redni broj po skladištu. Numeracija se svakodnevno resetira i ponovno započinje od broja 1. Korisnik može ručno izmijeniti i datum i broj knjiženja.

:::note Napomena
Nakon unosa prvog artikla u tablicu stavki, polja **Datum knjiženja** i **Broj knjiženja** postaju dostupna samo za pregled.
:::

Nakon unosa navedenih podataka korisnik može započeti unos skladišnih kretanja u tablicu artikala. Osim toga, moguće je popuniti i dodatne podatke zaglavlja:

**Interni dokument**: u ovom polju korisnik može dodatno specificirati razlog nastanka knjiženja.

Ako je knjiženje automatski kreirano iz *Prijave proizvodnje*, polje prikazuje broj prijave i proizvodnu fazu na koju se odnosi. U pripadajućem polju datuma korisnik može navesti datum dokumenta na temelju kojeg unosi knjiženje.
Ako je knjiženje automatski nastalo ulazom ili izlazom iz drugog dokumenta, datum se automatski postavlja na datum unosa izvornog dokumenta.
Ako je knjiženje nastalo iz *Prijave proizvodnje*, prikazuje se i stvarni datum početka proizvodnog naloga za koji je prijava evidentirana.

**Verzija**: putem ovog padajućeg izbornika korisnik može odabrati verziju različitu od zadane, iako sustav automatski predlaže osnovnu verziju.

**Konto**: ova tri polja sadrže podatke o kupcu ili dobavljaču:
- konto
- podkonto
- naziv partnera

Ako je knjiženje automatski kreirano ulazom ili izlazom iz dokumenta, podaci o partneru automatski se preuzimaju iz tog dokumenta.

**Vezani dokument**: omogućuje unos dokumenta koji je generirao skladišno knjiženje.

Ako je knjiženje automatski kreirano ulazom ili izlazom iz dokumenta, sustav automatski upisuje opis dokumenta koji uključuje vrstu dokumenta i njegov broj.
Ako je knjiženje nastalo iz *Prijave proizvodnje*, u ovom polju prikazuje se broj proizvodnog naloga za koji je prijava evidentirana.

**Projekt**: dvostrukim klikom otvara se *Pomoćnik za projekte* koji omogućuje povezivanje projekta s cijelim skladišnim knjiženjem koje se unosi. Odabrani projekt automatski se prenosi na sve stavke artikala unesene u tablicu.

**Bilješka**: u ovo polje moguće je unijeti slobodnu napomenu vezanu uz skladišno knjiženje.

Kao što je prethodno navedeno, korisnik sada može prijeći na unos kretanja u prvu tablicu, onu koja sadrži artikle za skladišno kretanje.

### Artikli

U ovoj prvoj tablici korisnik može, koristeći *Pomoćnik za artikle*, unijeti popis artikala koje želi evidentirati kroz skladišno kretanje.

**Broj kretanja**: u ovom stupcu prikazuje se redni broj kretanja. Numeracija uvijek započinje brojem 1 i predstavlja jednostavni redni broj koji se resetira pri otvaranju novog skladišnog knjiženja. Polje je samo za pregled te ne omogućuje ručno ponovno dodjeljivanje brojeva nakon brisanja pojedinih redaka.

**Klasa**: u ovom polju moguće je putem odgovarajućeg padajućeg izbornika odabrati klasu artikla.

**Šifra artikla**: u ovom stupcu moguće je ručno unijeti šifru artikla ili je odabrati putem *Pomoćnika za artikle*.

**Varijanta**: putem ovog padajućeg izbornika korisnik može odabrati jednu od varijanti artikla. Ako artikl nema definirane varijante, polje je onemogućeno.

**Mjerna jedinica**: u ovom stupcu prikazuje se, samo za pregled, šifra osnovne mjerne jedinice artikla.

**Alternativna mjerna jedinica**: u ovom stupcu korisnik može odabrati jednu od alternativnih mjernih jedinica artikla, ako su definirane. Na taj način količina se može unositi u alternativnoj mjernoj jedinici, dok se upravljana količina automatski izračunava prema faktoru pretvorbe definiranom u *Šifarniku artikala > kartica Alternativne mjerne jedinice*.

**Količina kretanja**: u ovom stupcu obavezno se unosi količina kretanja.
- Ako je polje *Alternativna mjerna jedinica* prazno, količina se izražava u osnovnoj mjernoj jedinici.
- Ako je odabrana alternativna mjerna jedinica, količina se izražava u toj mjernoj jedinici.

Nakon što korisnik unese i potvrdi valjanu šifru artikla, sustav automatski predlaže količinu **1**, koju je moguće izmijeniti.
Količina se uvijek unosi kao apsolutna vrijednost, jer informaciju radi li se o ulazu ili izlazu određuje vrsta odabranog skladišnog predloška.

**Operativna količina**: u ovom stupcu prikazuje se količina izražena u osnovnoj mjernoj jedinici artikla.

Ako je polje *Alternativna mjerna jedinica* prazno, vrijednost je jednaka količini kretanja.
Ako je odabrana alternativna mjerna jedinica, polje se može urediti te korisnik može ručno unijeti upravljanu količinu. Sustav zatim automatski izračunava količinu kretanja dijeljenjem ili množenjem (ovisno o postavkama u *Inicijalnim parametrima skladišta*) s faktorom pretvorbe definiranim u *Šifarniku artikala > kartica Alternativne mjerne jedinice*.

**Iznos promjene**: u ovom stupcu automatski se prikazuje vrijednost:

- posljednjeg troška
- prosječnog troška
- standardnog troška
- prodajne cijene

ovisno o postavkama odabranog skladišnog predloška.

Ako je u skladišnom predlošku kao predloženi trošak odabrana opcija **Nijedan**, sustav predlaže vrijednost **0**.
Ako je polje *Alternativna mjerna jedinica* prazno, iznos kretanja uvijek je jednak upravljanom iznosu. U suprotnom, u ovom stupcu potrebno je unijeti jedinični iznos artikla izražen u odabranoj alternativnoj mjernoj jedinici.
Ako je u *Inicijalnim parametrima skladišta* za tekuću godinu aktivirana oznaka **Prikaži opis stanja zaliha u knjiženjima**, sustav će tijekom unosa ili izmjene količine prikazati trenutno stanje zalihe artikla u skladištu za koje se knjiženje kreira.

Ako raspoloživa količina nije dovoljna, a u *Inicijalnim parametrima skladišta* za tekuću godinu nije aktivirana oznaka **Dopusti negativnu zalihu**, redak kretanja neće biti moguće spremiti.

**Operativni iznos**: u ovom stupcu automatski se prikazuje vrijednost *posljednjeg troška, prosječnog troška, standardnog troška ili prodajne cijene*, ovisno o postavkama skladišnog predloška korištenog u knjiženju.

Ako je u skladišnom predlošku kao predloženi trošak postavljena opcija **Nijedan**, sustav predlaže vrijednost troška jednaku nuli.

Ako je stupac *Alternativna mjerna jedinica* prazan, upravljani iznos uvijek je jednak iznosu kretanja. U suprotnom, u ovom stupcu (koji je uvijek samo za pregled) izračunava se jedinična vrijednost kretanja izražena u osnovnoj mjernoj jedinici prema sljedećoj formuli:

*Iznos kretanja × Količina kretanja / Upravljana količina*

**Projekt**: u ovom stupcu korisnik može, putem odgovarajućeg *Pomoćnika za projekte* koji se otvara dvostrukim klikom na žuto polje, odabrati projekt koji će biti povezan sa stavkom kretanja.

**Ukupni iznos**: u ovom stupcu prikazuje se ukupna vrijednost stavke kretanja. Polje nije moguće uređivati, a vrijednost se izračunava množenjem upravljane količine s upravljanim iznosom.

**Opis stavke**: u ovom stupcu prikazuje se opis artikla. Vrijednost se automatski popunjava nakon što sustav prepozna uneseni artikl.

**Opis varijante**: u ovom stupcu prikazuje se opis varijante artikla. Vrijednost se automatski popunjava nakon što sustav prepozna odabranu varijantu artikla.

**Napomena**: u ovo polje moguće je unijeti slobodnu napomenu vezanu uz pojedinu stavku skladišnog knjiženja.

**Lokacija**: u ovom polju određuje se lokacija s koje će artikl biti izdan ili na koju će biti zaprimljen, ovisno o vrsti skladišnog predloška (ulaz ili izlaz).

**Neto težina**: prikazuje ukupnu neto težinu stavke artikla. Vrijednost se izračunava kao neto težina definirana u šifarniku artikla pomnožena s količinom stavke.

**Bruto težina**: prikazuje ukupnu bruto težinu stavke artikla. Vrijednost se izračunava kao bruto težina definirana u šifarniku artikla pomnožena s količinom stavke.

Prilikom spremanja stavke kretanja sustav može uspješno spremiti redak i omogućiti unos sljedeće stavke ili može zatražiti dovršetak unosa kroz evidentiranje lotova i/ili serijskih brojeva u odgovarajućim tablicama koje se nalaze ispod.

### Lotovi i serijski brojevi

**Lotovi**

Ova tablica aktivna je samo ako skladišni predložak ima uključenu oznaku **Upravljanje lotovima** te ako je artikl definiran kao artikl kojim se upravlja po lotovima. U tom slučaju korisnik mora obvezno unijeti podatke o lotu ili lotovima koji se evidentiraju.

Kao što je poznato, skladišno knjiženje može biti ulazno ili izlazno. Ovisno o tome radi li se o ulazu ili izlazu, tablica lotova koristi se na različit način i ima različite postavke.

> **1. slučaj: Ulazno knjiženje**

Nakon što korisnik spremi stavku kretanja, sustav ostavlja redak u načinu uređivanja te od korisnika traži da prijeđe na tablicu **Lotovi** i unese podatke o lotovima koji se zaprimaju u skladište.

Stupci dostupni u tablici su sljedeći:

**Vrsta šifre lota**: u ovom stupcu prikazuje se vrsta šifre lota definirana u šifarniku artikla.

**Tipovi lota**: u ovom stupcu korisnik može opcionalno odabrati vrstu lota putem odgovarajućeg padajućeg izbornika koji koristi podatke iz istoimene tablice. Ovaj podatak nije obvezan.

**Broj lota**: u ovom stupcu unosi se šifra lota koji se zaprima, generirana prema pravilima definiranim u *Početnim parametrima skladišta* povezanima s odabranom *Vrsta šifre lota*. Polje je označeno žutom bojom jer korisnik može odlučiti izvršiti novi ulaz na već postojeći lot u bazi podataka. U tom slučaju dvostrukim klikom na žuto polje otvara se odgovarajući *Pomoćnik za lotove* putem kojeg je moguće odabrati lot filtriran među svim lotovima koji se do tada vode u bazi podataka i u poduzeću u kojem korisnik radi.

**Šifra lota dobavljača**: u ovom stupcu ručno se unosi šifra lota dobavljača, odnosno naziv lota koji koristi dobavljač. Ovo polje nije moguće automatski generirati tijekom ulaznih operacija i nije obvezno. Ako se broj lota odabere putem *Pomoćnika za lotove*, ovo će se polje automatski popuniti šifrom lota dobavljača povezanom s odabranim lotom.

**Datum početka**: u ovom polju prikazuje se datum jednak datumu skladišnog knjiženja, koji korisnik može izmijeniti. Ako se broj lota odabere putem *Pomoćnika za lotove*, stupac se automatski popunjava datumom početka odabranog lota.

**Datum dospijeća**: u ovom polju prikazuje se datum isteka lota koji korisnik može izmijeniti. Datum se izračunava tako da se na datum početka dodaje broj dana valjanosti definiran na kartici *Lotovi/SB* u šifarniku artikla. Ako se broj lota odabere putem *Pomoćnika za lotove*, stupac se automatski popunjava datumom isteka odabranog lota.

**Količina**: u ovom polju prikazuje se količina koja se dodjeljuje unesenom lotu. Ako se lot kreira pritiskom na gumb **Auto**, količina se automatski popunjava količinom iz retka kretanja. Korisnik ju može izmijeniti, primjerice smanjiti količinu, a zatim ponovno pritisnuti gumb **Auto** na sljedećem retku. Na taj način kreira se novi lot s istim karakteristikama, ali s različitom šifrom lota.

**Zatvoren**: ako je oznaka aktivna, označava da je lot u potpunosti izdan iz skladišta. Kod ulaza lota ova oznaka je uvijek neaktivna.

**Prodajni lot**: ako je oznaka aktivna, lot je dostupan za preuzimanje u prodajnim dokumentima, proizvodnji ili skladišnim knjiženjima. Ova opcija omogućuje jednostavno određivanje može li se lot koristiti, kao alternativa složenijem upravljanju statusima lotova. Kod automatskog kreiranja lota oznaka je prema zadanim postavkama aktivna, ali je korisnik može odmah deaktivirati te time učiniti lot nedostupnim za korištenje.

**Bilješka**: u ovo polje korisnik može unijeti napomenu vezanu uz lot koji zaprima. Ako se broj lota odabere putem *Pomoćnika za lotove*, stupac se automatski popunjava napomenom povezanom s odabranim lotom.

Nakon što su svi lotovi uneseni u tablicu **Lotovi**, pri čemu zbroj količina lotova mora odgovarati količini na retku kretanja, korisnik može spremiti redak bez daljnjih poruka o pogrešci.

> **2. slučaj: Izlazno knjiženje**

Kada korisnik pokuša spremiti redak kretanja, sustav ostavlja redak u načinu uređivanja te traži od korisnika da prijeđe u tablicu **Lotovi** i navede lotove koji se izdaju iz skladišta.

Stupci dostupni u tablici su sljedeći:

**Broj lota**: u ovom stupcu korisnik dvostrukim klikom na žuto polje može otvoriti *Pomoćnik za lotove* i odabrati lot koji želi izdati, filtriran među lotovima dostupnima u skladištu na kojem se provodi knjiženje.

**Šifra lota dobavljača**: ovaj se stupac automatski popunjava šifrom lota dobavljača povezanom s odabranim lotom.

**Datum početka**: prikazuje datum početka odabranog lota.

**Datum dospijeća**: prikazuje datum isteka odabranog lota.

**Količina**: u ovom polju prikazuje se količina koja će biti izdana s odabranog lota. Korisnik ju može izmijeniti, primjerice smanjiti količinu, te zatim putem *Pomoćnika za lotove* na sljedećem retku odabrati dodatni lot.

**Lokacija**: u ovom polju prikazuje se lokacija na kojoj je smješten odabrani lot.

Nakon što su svi lotovi uneseni u tablicu **Lotovi**, pri čemu zbroj količina izdanih lotova mora odgovarati količini na retku kretanja, korisnik može spremiti redak bez daljnjih poruka o pogrešci.

**Serijski brojevi**

Ova tablica aktivna je samo ako korišteni skladišni predložak ima uključenu oznaku **Upravljanje lotovima** te ako je artikl definiran kao artikl kojim se upravlja putem serijskih brojeva. U tom slučaju korisnik mora obvezno unijeti podatke o serijskim brojevima koji se evidentiraju.

Kao što je poznato, skladišno knjiženje može biti ulazno ili izlazno. Ovisno o tome radi li se o ulazu ili izlazu, tablica **Serijski brojevi** koristi se na različit način i ima različite postavke.

> **1. slučaj: Ulazno knjiženje**

Kada korisnik pokuša spremiti redak kretanja, sustav ostavlja redak u načinu uređivanja te traži od korisnika da prijeđe u tablicu **Serijski brojevi** i unese podatke o serijskim brojevima koji se zaprimaju.

Stupci dostupni u tablici su sljedeći:

**Tip serijskog broja**: u ovom stupcu automatski se prikazuje vrsta serijskog broja definirana u šifarniku artikla. Vrijednost je moguće izmijeniti.

**Serijski broj**: u ovom stupcu unosi se serijski broj koji se zaprima, generiran prema pravilima definiranim u *Početnim parametrima skladišta* za odabranu vrstu serijskog broja. Vrijednost je moguće ručno izmijeniti.

**Serijski broj kupca**: označava serijski broj koji koristi kupac.

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač.

**Datum početka**: označava datum početka valjanosti serijskog broja.

**Datum dospijeća**: označava datum isteka valjanosti serijskog broja.

**Datum zadnje izmjene**: označava datum posljednje izmjene serijskog broja.

**Opozvano**: označava da se serijski broj nalazi u statusu poništen.

**Prisilno zatvoreno**: označava da je serijski broj prisilno zatvoren.

**Lot**: označava broj lota povezan sa serijskim brojem.

Nakon što su svi serijski brojevi uneseni u tablicu **Serijski brojevi**, pri čemu broj unesenih serijskih brojeva mora odgovarati količini na retku kretanja, korisnik može spremiti redak bez daljnjih poruka o pogrešci.

> **2. slučaj: Izlazno knjiženje**

Kada korisnik pokuša spremiti redak kretanja, sustav ostavlja redak u načinu uređivanja te traži od korisnika da prijeđe u tablicu **Serijski brojevi** i unese podatke o serijskim brojevima koji se izdaju iz skladišta.

Stupci dostupni u tablici su sljedeći:

**Serijski broj**: u ovom stupcu korisnik dvostrukim klikom na žuto polje odabire serijske brojeve za izdavanje putem odgovarajućeg *Pomoćnika za serijske brojeve*.

**Datum unosa**: označava datum unosa serijskog broja.

**Serijski broj kupca**: označava serijski broj koji koristi kupac.

**Serijski broj dobavljača**: označava serijski broj koji koristi dobavljač.

**Datum zadnje izmjene**: označava datum posljednje izmjene serijskog broja.

**Datum početka**: označava datum početka valjanosti serijskog broja.

**Opozvano**: označava da se serijski broj nalazi u statusu poništen.

**Lot**: označava broj lota povezan sa serijskim brojem.

Nakon što su svi serijski brojevi uneseni u tablicu **Serijski brojevi**, pri čemu broj unesenih serijskih brojeva mora odgovarati količini na retku kretanja, korisnik može spremiti redak bez daljnjih poruka o pogrešci.

### Centri troška

U ovoj tablici korisnik može povezati jedan ili više mjesta troška s retkom kretanja te raspodijeliti količinu kretanja na različita mjesta troška.

Tablica sadrži stupac sa žuto označenim poljem. Dvostrukim klikom na njega korisnik može otvoriti **Pomoćnika za mjesta troška**, putem kojeg odabire mjesto troška za redak tablice. Nakon toga potrebno je unijeti količinu koja se odnosi na odabrano mjesto troška.

Ako je zbroj količina unesenih u redove tablice mjesta troška različit od upravljane količine na retku kretanja, sustav prikazuje upozorenje i ne dopušta spremanje kretanja.

### Dodatni podaci

Za više informacija pogledati dokumentaciju o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Protustavka

Ova kartica potpuno je jednaka kartici **Zapis**, ali je aktivna samo ako skladišni predložak postavljen na kartici **Zapis** ima definirano *protuskladište* (odredišno skladište) i skladišni predložak *protustavke*.

Predlošci protustavke koriste se kada je potrebno upravljati dvostrukim skladišnim kretanjem kroz jedno knjiženje. U tablici skladišnih predložaka moguće je definirati ulazni predložak kao protustavku izlaznom predlošku i obrnuto.

Na kartici **Protustavka** prikazuju se svi podaci uneseni na kartici **Zapis**, pri čemu korisnik može mijenjati samo određene podatke zaglavlja:

- **Interni dokument**
- **Referentni dokument**
- **PProjekt**

Podaci na retku kretanja moraju biti identični na obje kartice. Isto vrijedi i za tablice **Lotovi**, **Serijski brojevi**, **Varijante** i **Centri troška** povezane s pojedinim kretanjem.

Jedino je polje **Lokacija** moguće uređivati na kartici **Protustavka**.

Postoji jedan **poseban slučaj** u kojem se na kartici **Zapis** unosi jedan artikl, a na kartici **Protustavka** drugi artikli. To se događa samo kada skladišni predložak protustavke povezan s glavnim predloškom ima aktiviranu oznaku **Sastavnica**.

Ova oznaka omogućuje korisniku da na kartici **Zapis** zaprimi artikl (koristeći ulazni skladišni predložak), dok se na kartici **Protustavka** automatski prikažu stavke njegove sastavnice, koje se zatim izdaju putem izlaznog skladišnog predloška.

Naravno, moguće je upravljati i obrnutim scenarijem.

Još jedan **specifičan slučaj** koji zahtijeva korištenje skladišnih predložaka s definiranom protustavkom odnosi se na **automatsko izdavanje otpremnice za doradu**. U tom slučaju sustav automatski izdaje materijal koji se šalje kooperantu iz skladišta sirovina (ili poluproizvoda, ovisno o slučaju) te istovremeno zaprima isti materijal u skladište kooperanta, gdje će ga on koristiti za proizvodnju proizvoda definiranih nalogom za doradu.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca pogledati sljedeći dokument:

[Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)
