---
title: Kontrola artikala
sidebar_position: 3
---

Upravljanje je moguće izvršiti iz **Pretraživanja kontrole artikala**.      


:::important Čemu služi
Kontrole artikala omogućuju bilježenje izvršenih mjerenja, utvrđenih vrijednosti i posljedično navođenje sukladnosti ili nesukladnosti kontroliranog materijala, poluproizvoda ili proizvoda.   
Dokumenti iz kojih je moguće provoditi kontrole nad artiklima: Prijem robe, Primke i Ulazni računi, Izjave o proizvodnji, Faze izrada narudžbe, Povrat od podizvođača i Kretanja zaliha.   
Kontrole mogu biti specifične za: Lot artikla, Serijski broj ili Jedinicu utovara.   
Putem M.E.S. rješenja, integriranog u Fluentis, moguće je unositi navedene tražene informacije na izravan i pojednostavljen način.   

Standardno su dostupna izvješća o:   
> **Popisu kontrola artikla po artiklu**: popis *Kontrola artikla* grupiranih po: *Artiklu*.   
> **Popisu kontrola artikla po kupcu/dobavljaču**: popis *Kontrola artikla* grupiranih po: *Kupcu/Dobavljaču*.   
> **Popisu kontrola artikla po vrsti dokumenta**: popis *Kontrola artikla* grupiranih po: *Vrsti dokumenta*.   
> **Naljepnici artikla C i NC**: naljepnica koja prikazuje reference *Artikla* i detalje kontroliranog *Lota* ili *Serijskog broja*.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku pohranjuju se sve izmijenjene informacije *Kontrola artikla* koje su prikazane.   

### ![](/img/neutral/common/tick.png) Pretraživanje kontrole artikala

Pritiskom na ovu tipku pretražuje se *Kontrolni plan* za povezivanje s odabranim *Kontrolama artikla*. Ako za ispitivani *Kontrolni artikal*:   
- postoje *Testovi* s već utvrđenim vrijednostima za te *Kontrole*, neće se provesti nikakvo pretraživanje;   
- svi *Testovi* još nisu utvrđeni, *Testovi* će biti zamijenjeni onima povezanim s *Kontrolnim planom* pronađenim u pretraživanju.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />   


### ![](/img/neutral/common/update.png) Ažuriraj

Pritiskom na ovu tipku vrši se ažuriranje svih informacija prisutnih u prikazanim *Kontrolama artikla*.   


### ![](/img/neutral/common/delete.png) Otkaži

Pritiskom na ovaj gumb brišu se svi odabrani retci s glavnog popisa *Kontrole artikala*.     


### Zapis o skladištu

Tipka je omogućena samo ako je s popisa *Testovi* odabran barem jedan *Test*, koji još nije *proknjižen*, s otkrivenim vrijednostima i barem deklariranom *Potvrđenom količinom* ili *Nesukladnom količinom*.   
Pritiskom na ovaj gumb stvaraju se skladišni zapisi, na današnji datum, za *Stavka* povezana s *Kontrolom* za deklariranu *Potvrđenu količinu* i/ili *Nesukladnu količinu*, za navedeno *Skladište* i *Predloške*.   


### Povrati zapis

Tipka je omogućena samo ako je s popisa *Test* odabran barem jedan *Test* koji je već *proknjižen*.   
Pritiskom na ovu tipku vraćaju se zapisi skladišta povezani s retkom *Test*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj test

Tipka je omogućena samo ako je s popisa *Testovi* odabran samo jedan redak *Test*.
Sve informacije iz izvornog *Testa* dupliciraju se u novom *Testu* dodanom u *Redoslijedu* postojećim *Testovima*.   


## Upravljani podaci


### Podaci zaglavlja
Podaci zaglavlja podijeljeni su u dva različita područja:   
- s lijeve strane, popis *Kontrola artikala* koje zahtijeva *Pretraživanje kontrola artikala*;   
- s desne strane, reference izvornog dokumenta za kontrole.   

Popis *Kontrole artikala*, koji je samo za čitanje osim ako nije drugačije navedeno, sastoji se od sljedećih informacija:   
> **Klasa**: ovo je klasa *artikla* retka dokumenta koji se provjerava.   
> **Šifra artikla**: ovo je šifra *artikla* retka dokumenta koji se provjerava.   
> **Detalj**: ovo je vrsta detalja koji se provjerava za *artikl* i može imati sljedeće vrijednosti: *bez grupiranja*, *Lot*, *S.N.* ili *Utovarna jedinica*.   
> **Referenca detalja artikla**: ovo je potreban detalj artikla: *bez grupiranja*, *Šifra serije*, *Šifra serijskog broja* ili *Šifra utovarne jedinice*.   
> **Tip kontrole**: ovo je šifra za *Vrstu kontrole artikla*.   
> **Broj**: ovo je broj *kontrole artikla*.   
> **Datum unosa**: ovo je datum na koji je unesen *pregled artikla*.   
> **Upotrijebljen plan kontrole**: ovo je referenca povezanog *plana kontrole*.   
> Podaci se mogu promijeniti ako pretraga pronađe više *Planova kontrole* koji se mogu povezati.   
> **Opis kontrolnog plana**: ovo je opis *Plana kontrole*.   
> **Datum rezultata**: ovo je datum kada je analiza provedena. Ovaj se podatak može promijeniti.   
> **Rezultat**: ovo je ukupni rezultat testa. Ručno ga dodjeljuje operater. Ovaj se podatak može promijeniti.   
> **Odobreni datum**: ovo je datum kada je dodijeljen ukupni *Rezultat* *Testova*. Ovaj se podatak može promijeniti.   
> **Odobreno**: ovo označava *Odobrenje* provedenih testova.   
> Nakon odobrenja, *Odobreni datum* se automatski postavlja na današnji datum i može se mijenjati; svi podaci o *testovima* više se ne mogu mijenjati.   
> **Odobreni datum**: ovo je datum na koji je provedeno ukupno *odobrenje* *testova*.   
> Kada se unese datum, automatski se postavlja oznaka *Odobreno*.   
> **Količina u jedinici mjere**: ovo je *Jedinica mjere* *Količine dokumenta* retka dokumenta koji se provjerava.   
> **Količina dokumenta**: ovo je *Količina dokumenta* retka dokumenta koji se provjerava.   
> **Opis stavke**: ovo je opis *artikla* retka dokumenta koji se provjerava.   
> **Opis kontrola tipa**: ovo je opis *Vrste pregleda artikla*.   
> **Napomene**: Napomene u slobodnom obliku. Ovi se podaci mogu mijenjati.   

Područje koje sadrži reference na izvorni dokument varira ovisno o *Vrsti dokumenta*.
Reference za svaku *Vrstu dokumenta* su:
> **Primka**: *Dobavljač*, *Vrsta prmke*, *Broj primke*, *Datum primke* i *Redak*.   
> **Otpremnica**: *Dobavljač*, *Vrsta otpremnice*, *Broj dokumenta*, *Interni broj*, *Datum* i *Redak*.   
> **Fakture**: *Dobavljač*, *Vrsta fakture*, *Broj dokumenta*, *Interni broj*, *Datum* i *Redak*.   
> **Deklaracije o proizvodnji**: *Kupac*, *Vrsta narudžbe*, *Godina/Narudžba/Serija*, *Faza/Podfaza*, *Broj* i *Datum izvještavanja*.   
> **Faze proizvodnog naloga**: *Kupac*, *Vrsta naloga*, *Godina/Nalog/Serija*, *Faza/Podfaza* i *Radni centar*.   
> **Povrati podizvođača**: *Dobavljač*, *Vrsta povrata*, *Broj dokumenta*, *Datum* i *Redak*.   
> **Kretanje tereta**: *Kupac/Dobavljač*, *Skladište*, *Razlog*, *Broj*, *Datum* i *Broj kretanja*.   


### Testovi
Sadrži popis *Testova* za *Artikl*.
Popis sadrži sljedeće informacije:   
> **Redslijed**: ovo je slijed kojim se provodi *Test*.   
> **Registrirano**: ovo označava da su za *Test* danas napravljeni skladišni zapisi za *Artikl* povezan s *Kontrolom*, za deklariranu *Potvrđenu količinu* i/ili *Nesukladnu količinu*, za navedeno *Skladište* i *Predloške*. Ove su informacije samo za čitanje.   
> **Način testirannja**: ovo je šifra za *Test*.   
> **Opis tipka testa**: ovo je opis *Testa*. Ove su informacije samo za čitanje.   
> **Destruktivno ispitivanje**: ovo označava je li test destruktivni. Ove su informacije samo za čitanje.   
> **Interni test**: ovo označava provodi li se *Test* interno ili u vanjskom laboratoriju.   
> **Vanjski laboratorij**: ovo je naziv tvrtke *Dobavljača* koji će provesti test. Podaci su samo za čitanje ako je naznačeno *Interno testiranje*.   
> **Datum slanja**: ovo je datum kada je materijal potreban za izvođenje *Testa* u *Vanjskom laboratoriju* poslan. Podaci su samo za čitanje ako je naznačeno *Interno testiranje*.   
> **Jedinica mjere za količinu**: ovo je *Mjerna jedinica* za *Količinu dokumenta* provjerenog retka dokumenta. Ova je informacija samo za čitanje.   
> **Količina dokumenta**: ovo je *Količina dokumenta* provjerenog retka dokumenta. Ova je informacija samo za čitanje.   
> **Kategorija mjernog instrumenta**: ovo je *Kategorija mjernog instrumenta* koja se koristi za otkrivanje *vrijednosti* izraženih u *Testu*.   
> **Jedinica mjere za zabilježene vrijednosti**: ovo je *Mjerna jedinica* koja se koristi za izražavanje *Nominalne vrijednosti*, *Minimalnih i Maksimalnih granica* ako su izražene kao vrijednost, a ne kao postotak, te *Otkrivenih vrijednosti*.   
> **Tip vrijednosti**: ovo je *Vrsta vrijednosti* koja se koristi za izražavanje *Nominalne vrijednosti*; mogući *Vrsti vrijednosti* su: *Brojčano*, *Da/Ne* ili *Tekst*.   
> **Vrste limita**: omogućeno ako je *Vrsta vrijednosti* *Brojčano*; ovo je *Vrsta ograničenja* koja će kontrolirati omogućavanje vrijednosti *Ograničenja* i *Tolerancija*.   
> **Nominalna vrijednost**: ovo je očekivana teorijska vrijednost *Testa*.   
> **Minimalno ograničenje**: ovo je minimalna dopuštena granica u usporedbi s *Nominalnom vrijednošću*.   
> **L.min.(toll-)**: ovo je negativna granica tolerancije na minimalnoj granici.   
> **L.min.(toll+)**: ovo je pozitivna granica tolerancije na minimalnoj granici.   
> **Maksimalno ograničenje**: ovo je maksimalna dopuštena granica u usporedbi s *Nominalnom vrijednošću*.   
> **L.max.(toll-)**: je negativna granica tolerancije na maksimalnoj granici.   
> **L.max.(toll+)**: je pozitivna granica tolerancije na maksimalnoj granici.   
> **%**: označava jesu li *Minimalna granica* i *Maksimalna granica* izražene kao postotak.   
> **Vrsta kontrole testa**: je *Vrsta kontrole* koja se provodi na *Testu*.   
> **Učestalost**: slobodne napomene koje se odnose na frekvenciju uzorkovanja.   
> **Broj detekcija**: je broj preporučenih očitanja minimalnih vrijednosti. ti*.   
>
> **Datum početka**: ovo je datum početka *Testa*.   
> **Datum završetka**: ovo je datum završetka *Testa*.   
> **Zabilježena vrijednost**: ovo je stvarna vrijednost izmjerena za *Test* koja će odrediti njegov *Rezultat*.   
> Prilikom unosa *Izmjerene vrijednosti*:   
> - *Detektirao* prikazuje *Zaposlenika* povezanog s *A.R.M. korisnikom* koji se prijavio;   
> - *Detektiran od korisnika* prikazuje *A.R.M. korisnika* koji se prijavio;   
> - *Rezultat* prikazuje rezultat *Testa* i može se kasnije izmijeniti.   
> - *Datum ishoda testa* prikazuje današnji datum i može se kasnije izmijeniti.   
>
> **Prosjek zabilježenih vrijednosti**: ovo je prosjek vrijednosti detektiranih u *Višestrukom detektiranju vrijednosti* *Testa*.   
> **Mjerni instrument**: ovo je *Mjerni instrument* koji se koristi za detekciju specifične vrijednosti *Testa*.   
> **Detektirao**: ovo je *Zaposlenik* koji je unio *Otkrivenu vrijednost*.   
> Kada se unese *Otkrivena vrijednost*, ova se informacija prikazuje kao jednaka *Zaposleniku* povezanom s *A.R.M. korisnikom* koji se prijavio.   
> **Detektiran od korisnika**: ovo je *A.R.M. korisnik* koji je unio *Otkrivenu vrijednost*.   
> Kada se unese *Otkrivena vrijednost*, ova se informacija prikazuje kao jednaka *A.R.M. korisniku* koji se prijavio.   
> **Ručno dobivena vrijednost**: ovo označava je li *Otkrivena vrijednost* unesena ručno. Ova se informacija može samo čitati.   
> **Rezultat**: ovo je prolazni ili neuspješni rezultat *Testa*.   
> Prilikom unosa *Rezultata* u *Datum rezultata testa*, prikazuje se današnji datum i može se kasnije izmijeniti.   
> Prilikom unosa *Izmjerene vrijednosti* ili *Prosjeka izmjerene vrijednosti*, ove se informacije prikazuju na temelju unesenih *Vrste vrijednosti*, *Vrste ograničenja*, *Nominalne vrijednosti*, *Ograničenja* i *Tolerancija*.   
> **Datum rezultata testa**: ovo je datum kada je *Rezultat* dodijeljen.   
> Prilikom unosa *Rezultata*, ove se informacije prikazuju kao današnji datum i mogu se kasnije izmijeniti.   
> **Opis rezultata**: slobodne bilješke o temi.   
> **Ručni atribut ishoda**: označava je li *Rezultat* unesen ručno. Ove su informacije samo za čitanje.  
>
> **Potvrđena količina**: .   
> **Nekonformna količina**: .   
> **Skladište**: ovo je *skladište* iz kojeg se preuzimaju pregledani *artikli*.   
> **Predložak istovara za sukladne artikle**: ovo je *Predložak istovara* koji se koristi za premještanje pregledanih *artikala* za koje se utvrdi da su *sukladni*.   
> **Predložak istovara za nesukladne artikle**: ovo je *Predložak istovara* koji se koristi za premještanje pregledanih *artikala* za koje se utvrdi da su *nesukladni*.   
> **Lokacija**: ovo je *lokacija* s koje se preuzimaju pregledani *artikli*.   
>
> **Moguće je ispisati**: označava da se *Test* može ispisati.   
> **Odobreno**: označava da su vrijednosti i *Rezultat* dodijeljen *Testu* *Odobreni*.   
> Nakon odobrenja, *Datum odobrenja rezultata* automatski se postavlja na današnji datum i može se mijenjati; sve informacije o *Testu* više se ne mogu mijenjati.   
> **Datum odobrenja rezultata**: ovo je datum kada je *Test* *Odobren*.   
> Kada se unese datum, automatski se postavlja oznaka *Odobreno*.   
> **Operater**: ovo je *A.R.M. korisnik* koji je *Odobrio* *Test*. Ove informacije su samo za čitanje.   
> **Opis na odobrenju**: bilješke u slobodnom obliku o temi.   
> **Napomene**: bilješke u slobodnom obliku.  
>
> **Opis kategorije mjernog instrumenta**: ovo je opis *kategorije mjernog instrumenta* koja će se koristiti. Ove su informacije samo za čitanje.   
> **Opis mjernog instrumenta**: ovo je opis korištenog *mjernog instrumenta*. Ove su informacije samo za čitanje.   
> **Opis skladišta**: ovo je opis *skladišta* iz kojeg se preuzimaju pregledani *artikli*. Ove su informacije samo za čitanje.   
> **Opis predloška za istovar sukladnih artikala**: ovo je opis *predloška istovara* koji se koristi za premještanje pregledanih *artikala* za koje je utvrđeno da su *sukladni*. Ove su informacije samo za čitanje.   
> **Opis predloška razduženja nesukladnih artikala**: ovo je opis *predloška istovara* koji se koristi za premještanje pregledanih *artikala* za koje je utvrđeno da su *nesukladni*. Ove su informacije samo za čitanje.   

Podaci o: *Vrsti ispitivanja*, *Internom ispitivanju*, *Vanjskom laboratoriju*, *Kategoriji mjernog instrumenta*, *Mjernoj jedinici detektiranih vrijednosti*, *Vrsti vrijednosti*, *Vrsti ograničenja*, *Nominalnoj vrijednosti*, *Ograničenjima ...*, *Tolerancijama ...*, *%*, *Vrsti kontrole ispitivanja*, *Učestalosti* i *Broj detekcija* samo su za čitanje ako *Ispitivanje* dolazi iz *Plana kontrole*, inače se mogu izmijeniti kako bi se omogućilo ručno dodavanje daljnjih *Ispitivanja* koja nisu predviđena u *Planu kontrole*.


#### Detekcija više vrijednosti
Sadrži popis mjerenja provedenih za jedan *Test*.   
Popis sadrži sljedeće informacije:   
> **Redolijed**: ovo je slijed kojim se provodi detekcija.   
> **Pozicija**: slobodne bilješke koje se odnose na lokaciju detekcije.   
> **Otkrivena vrijednost**: ovo je vrijednost koju je detektirao operater.   
> Ako je *Otkrivena vrijednost* *Brojčana*, prosjek *Otkrivenih vrijednosti* unesenih u ovaj popis za odabrani *Test* bit će umetnut u stupac *Prosječne otkrivene vrijednosti* odabranog *Testa*, što će odrediti njegov *Ishod*.   
> Prilikom unosa *Otkrivene vrijednosti*:   
> - *Detektirao* prikazuje *Zaposlenika* povezanog s *A.R.M. korisnikom* koji se prijavio;   
> - *Detektiran od korisnika* prikazuje *A.R.M. korisnika* koji se prijavio;   
> - *Datum ishoda testa* prikazuje današnji datum.   
>
> **Korišteni mjerni instrument**: ovo je referenca na *mjerni instrument* koji operater koristi za dobivanje *Otkrivene vrijednosti*.   
> **Detektirao**: ovo je *Zaposlenik* koji je unio *Otkrivenu vrijednost*.   
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na *Zaposlenika* povezanog s prijavljenim *A.R.M. korisnikom*.   
> **Detektiran od korisnika**: ovo je *A.R.M. korisnik* koji je unio *Otkrivenu vrijednost*.   
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na *A.R.M. korisnika* koji se prijavio.   
> **Datum ishoda testa**: ovo je datum kada je operater unio *Otkrivenu vrijednost*.   
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na današnji datum.   
> **Napomene**: napomene u slobodnom obliku.   
> **Opis mjernog instrumenta**: je opis korištenog *mjernog instrumenta*.   


#### Atributi testa
Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki pojedini *Test*.   


#### Testna konfiguracija
Sadrži [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) koje operateri moraju pripremiti za sve alate potrebne za početak određenog testa. To se može smatrati potrebnim konfiguracijama, operativnim informacijama koje su pripremne za izvršenje testa.  
Nasljeđuju se od *Planiranih konfiguracija ispitivanja* prisutnih u *Planiranim ispitivanjima* *Kontrolnih planova* ili od *Parametara konfiguracije ispitivanja i mjernih instrumenata* prisutnih u *Vrstama ispitivanja*.   


#### Dokumenti u privitku
Na ovom popisu mogu se umetnuti i pregledati svi prilozi.   


### Atributi kontrole
Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaku *Kontrolu*.   
Nasljeđuju se od *Dodatnih podataka* povezanih s *Vrstom kontrole artikla*.   


### Svojstva stakve
Moguće je unijeti neke [Dodatne podatke]/docs/configurations/utility/extra-data/extradata/new-extradata) za kontrolirani *artikl*.   
Nasljeđuju se od *Dodatnih podataka* povezanih s *artiklom*.   


### Povezani dokumenti
Na ovom popisu mogu se umetnuti i pregledati svi prilozi.   
