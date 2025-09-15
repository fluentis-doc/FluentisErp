---
title: Certifikati s analize
sidebar_position: 2
---

Upravljanje se može pronaći na putanji **Kvaliteta > Kontrola artikla > Certifikati s analize > Novi certifikat s analize** ili se može izvršiti putem **Pretraživanja certifikata analize**.   


:::important Čemu služi
**Certifikat s analize** potvrđuje da određeni proizvod udovoljava karakteristikama navedenim u Tehničkim uputstvima ili u specifikacijama Kupca. Također potvrđuje da je proizvod testiran i udovoljava ograničenjima navedenima u Kontrolnim planovima.   
Potvrde mogu biti generičke ili prilagođene. Ako su prilagođene, potrebno je unijeti **Kupca**.  

Sljedeća izvješća dostupna su standardno:
> **Potvrda o analizi**: Oobrazac s popisom *Proizvoda* s detaljima o *izvršenim ispitivanjima*, *otkrivenim vrijednostima* i dobivenim *rezultatima*.
> **Izjava o sukladnosti**: obrazac kojim se potvrđuje i jamči sukladnost *Proizvoda*.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku spremaju se svi promijenjeni podaci u prikazanom *Certifikatu s analize*.   


### ![](/img/neutral/common/import.png) Uvozne kontrole

Pritiskom na ovaj gumb pretražuju se *Odobrene kontrole artikala* koje će se povezati s prikazanim *Certifikatom s analize*.
Pojavljuje se alat za upravljanje za pretraživanje i odabir *Kontrola artikala* za uvoz u *Certifikat s analize*.
Navedene su samo *Odobrene kontrole artikala* koje zadovoljavaju potreban filter podataka.
Pritiskom na gumb *Odaberi* dupliciraju se odabrane *Kontrole artikala* i prikazuju se u prikazanom *Certifikatu s analize*.  


### ![](/img/neutral/common/update.png) Ažuriraj

Pritiskom na ovu tipku ažuriraju se sve informacije u prikazanom *Certifikatu s analize*.   



## Upravljani podaci


### Podaci zaglavlja dokumenta
Upravljane informacije su:
> **Vrsta certifikata**: ovo je vrsta dokumenta (obavezni podatak).
> Prilikom unosa novog *Certifikata s analize*, prikazuje se *Vrsta certifikata* naznačena u proširenju *Certifikati s analize* na kartici *Općenito* u *Parametrima kontrole stavki*.
>
> **Godina/Broj/Datum**: To su *Godina*, *Broj* i *Datum* *Certifikata s analize* (obavezni podaci).
> Prilikom unosa novog *Certifikata s analize*:
> - *Datum* se postavlja na današnji datum;
> - *Godina* i *Broj* se postavljaju na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom potvrde*.  
>
> **Kupac**: naziv tvrtke *Kupca* kojem će dokument biti poslan.


### Zaglavlje 
Upravljane informacije su:
> **Voditelj**: ovo je *Zaposlenik* odgovoran za *Certifikate s analize*. 
> Prilikom ručnog unosa nove *Certifikata s analize*, prikazuje se *Voditelj* naznačen u proširenju *Certifikati s analize* na kartici *Općenito* u *Parametrima kontrole stavki*. 
>
> **Vanjski referent**: ovo je *Korporativna funkcija* odgovorna za *Korektivnu radnju*.
> **Napomena o kupcu**: slobodne bilješke.
> **Naša referenca**: slobodne bilješke o referencama na interne dokumente.
> **Vaša referenca**: slobodne bilješke o referencama na vanjske dokumente kupaca.
> **Opis**: slobodne bilješke.
>
> **Dovršen/Datum**: proširenje u koje se možete umetnuti:   
>
>> **Dovršen**: označava da je *Certifikat s analize* *Završen*.
>> Nakon završetka, automatski se prikazuje sljedeće: *Datum završetka* (datum završetka), predloženo na današnji datum i može se promijeniti, *Dovršio* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom* koji se prijavio.
>> **Obaviješten/Na datum**: označava da je *Certifikat s analize* *Obaviješten* kupcu na navedeni datum.
>> Nakon obavijesti, automatski se prikazuje sljedeće: *Datum završetka* (datum obavijesti), predloženo na današnji datum i može se promijeniti.
>
> **Audit Trail**: Proširenje samo za čitanje gdje su vidljive informacije o korisnicima koji rade dokumente.  


#### Bilješke
Upravljane informacije su:   
> **Unutarnja napomena**: bilješke u slobodnom obliku.
> **Za ispis**: označava jesu li *Unutarnje napomene* ispisive u izvješćima *Certifikata s analize* i *Izjava o sukladnosti*.
> **Bilješke kontrolnog plana**: bilješke u slobodnom obliku u vezi s referencama na korištene planove kontrole.
> **Za ispis**: označava jesu li *Bilješke kontrolnom planu* ispisive u izvješćima *Certifikata s analize* i *Izjava o sukladnosti*.
> **Ostale bilješke**: bilješke u slobodnom obliku.   


#### Drugi podaci
Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Certifikat s analize*.   


### Kontrole i otkrivene vrijednosti
Upravljane informacije su:   
> **Artikl**   
>> **Broj**: je broj retka dokumenta.
>> **Tip linije**: je vrsta retka dokumenta. U verziji 1 - Kodirana stavka*, upravlja se samo *Tip linije*.
>> **Klasa**: je klasa *artikla* retka dokumenta koji se provjerava.
>> **Šifra artikla**: je šifra *artikla* retka dokumenta koji se provjerava.
>> **Opis artikla**: je opis *artikla* retka dokumenta koji se provjerava.
>> **Jedinica utovara**: .
>> **Lot**: .
>> **Serijski broj**: .   
>> **Jedinica mjere**: je *Jedinica mjere* *Količine dokumenta* retka dokumenta koji se provjerava.
>> **Količina**: je *Količina dokumenta* retka dokumenta koji se provjerava. 
>> **Alternativna mjerna jedinica**: Ovo je *Alternativna mjerna jedinica* *Količine dokumenta* retka kontroliranog dokumenta.
>> **Alternativna količina**: Ovo je *Alternativna količina dokumenta* retka kontroliranog dokumenta.  
>
> **Kontrola artikla**
>> **Tip**: je šifra *Vrste kontrole artikla*.
>> **Opis tipa**: je opis *Vrste kontrole artikla*. Ova je informacija samo za čitanje.
>> **Broj**: je broj *Kontrole artikla*. Ova je informacija samo za čitanje.
>> **Datum**: je datum unosa *Kontrole artikla*. Ova je informacija samo za čitanje.  


#### Otkrivene vrijednosti
Sadrži popis *testova* za *stavku*.
Informacije se nasljeđuju iz *testova iz *kontrole artikala* i mogu se mijenjati istom logikom koja se koristi u upravljanju [*kontrole artikala*](/docs/quality/item-control/items-control/item-control-management).
Popis se sastoji od sljedećih informacija:   
> **Redoslijed**: ovo je slijed izvršavanja *Testa*.
> **Vrsta testa**: ovo je šifra *Testa*.
> **Opis tipa testa**: ovo je opis *Testa*. Ove su informacije samo za čitanje.
> **Jedinica mjere za zabilježene vrijednosti**: ovo je *Mjerna jedinica* koja se koristi za izražavanje *Nominalne vrijednosti*, *Minimalne i maksimalne granice* ako su izražene kao vrijednost, a ne kao postotak, te *Otkrivenih vrijednosti*.  
> **Vrsta vrijednosti**: ovo je *Vrsta vrijednosti* koja se koristi za izražavanje *Nominalne vrijednosti*; mogući *Vrsti vrijednosti* su: *Brojčano*, *Da/Ne* ili *Tekst*.
> **Vrsta limita**: Omogućeno ako je *Vrsta vrijednosti* *Brojčano*; ovo je *Vrsta ograničenja* koja će kontrolirati omogućavanje vrijednosti *Ograničenja* i *Tolerancija*.
> **Nominalna vrijednost**: ovo je očekivana teorijska vrijednost *Testa*.
> **Minimalno ograničenje**: ovo je minimalna dopuštena granica u usporedbi s *Nominalnom vrijednošću*.
> **Min.L.(toll-)**: ovo je negativna granica tolerancije na minimalnoj granici.
> **Min.L.(toll+)**: ovo je pozitivna granica tolerancije na minimalnoj granici.
> **Maksimalno ograničenje**: ovo je maksimalna dopuštena granica u usporedbi s *Nominalnom vrijednošću*.
> **L.max.(toll-)**: negativna je granica tolerancije na maksimalnoj granici.
> **L.max.(toll+)**: pozitivna je granica tolerancije na maksimalnoj granici.  
> **%**: označava jesu li *Minimalno ograničenje* i *Maksimalno ograničenje* izraženi kao postotak.
> **Zabilježena vrijednost**: je specifična vrijednost otkrivena za *Test* koja će odrediti njegov *Ishod*.
> Prilikom unosa *Zabilježene vrijednosti*:
> - *Detektirao* prikazuje *Zaposlenika* povezanog s *A.R.M. korisnikom* koji se prijavio;
> - *Detektiran od korisnika* prikazuje *A.R.M. korisnika* koji se prijavio;
> - *Rezultat* prikazuje rezultat *Testa* i može se kasnije izmijeniti.
> - *Datum rezultata testa* prikazuje današnji datum i može se kasnije izmijeniti.
>
> **Prosjek zabilježenih vrijednosti**: ovo je prosjek vrijednosti detektiranih u *Višestrukom detektiranju vrijednosti* *Testa*.  
> **Detektirao**: ovo je *Zaposlenik* koji je unio *Otkrivenu vrijednost*.   
> Prilikom unosa *Zabilježene vrijednosti*, ova se informacija prikazuje kao *Zaposlenik* povezan s *A.R.M. korisnikom* koji se prijavio.
> **Detektiran od korisnika**: ovo je *A.R.M. korisnik* koji je unio *Otkrivenu vrijednost*.
> Prilikom unosa *Zabilježene vrijednosti*, ova se informacija prikazuje kao *A.R.M. korisnik* koji se prijavio.
> **Rezultat**: ovo je rezultat prolaza ili pada *Testa*.
> Prilikom unosa *Rezultata* u *Datum rezultata testa*, prikazuje se današnji datum i može se kasnije promijeniti.
> Prilikom unosa *Izmjerene vrijednosti* ili *Prosjeka zabilježenih vrijednosti*, ove se informacije predlažu na temelju unesenih *Vrsta vrijednosti*, *Vrsta ograničenja*, *Nominalne vrijednosti*, *Ograničenja* i *Tolerancije*.   
> **Moguće je ispisati**: označava da se *Test* može ispisati.
> **Odobreno**: označava da su vrijednosti i *Rezultat* dodijeljeni *Testu* *Odobreni*.
> Nakon odobrenja, *Datum odobrenja rezultata* automatski se postavlja na današnji datum i može se promijeniti; svi podaci o *Testu* više se ne mogu mijenjati. 


***Višestruko otkrivene vrijednosti***   

Sadrži popis mjerenja izvršenih za jedan *Test*.   
Oni su također naslijeđeni od *Testova iz *Kontrola artikala* i mogu se mijenjati istom logikom koja se koristi u upravljanju [*Kontrole artikala*](/docs/quality/item-control/items-control/item-control-management).
Popis se sastoji od sljedećih informacija:
> **Redoslijed**: ovo je slijed kojim se provodi detekcija.
> **Pozicija**: napomene slobodnog oblika koje se odnose na lokaciju detekcije.
> **Otkrivena vrijednost**: Ovo je vrijednost koju je detektirao operater.
> Ako je *Otkrivena vrijednost* *Brojčanog* tipa, prosjek *Otkrivenih vrijednosti*, unesenih u ovaj popis za odabrani *Test*, bit će umetnut u stupac *Prosječne otkrivene vrijednosti* odabranog *Testa* koji će odrediti njegov *Ishod*.
> Prilikom unosa *Otkrivene vrijednosti*:
> - u *Detektirao* prikazuje se *Zaposlenik* povezan s prijavljenim *A.R.M. korisnikom*;
> - u *Detektiran od korisnika* prikazuje se prijavljeni *A.R.M. korisnik*;
> - u *Detektiran* prikazuje se današnji datum. 
>
> **Korišteni mjerni instrument**: ovo je referenca na *mjerni instrument* koji operater koristi za dobivanje *Otkrivene vrijednosti*.
> **Detektirao**: ovo je *Zaposlenik* koji je unio *Otkrivenu vrijednost*.
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na *Zaposlenika* povezanog s prijavljenim *A.R.M. korisnikom*.
> **Detektiran od korisnika**: ovo je *A.R.M. korisnik* koji je unio *Otkrivenu vrijednost*.
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na *A.R.M. korisnika* koji se prijavio.
> **Detektiran**: ovo je datum kada je operater unio *Otkrivenu vrijednost*.
> Kada se unese *Otkrivena vrijednost*, ova se informacija postavlja na današnji datum.
> **Napomene**: napomene u slobodnom obliku.
> **Opis mjernog alata**: je opis korištenog *mjernog instrumenta*. 


***Otkriveni detalji vrijednosti***   

Sadrži ostale informacije povezane s odabranim *Testom*.  
Informacije se nasljeđuju iz uvezenih testova *Kontrola artikala* i mogu se mijenjati istom logikom koja se koristi u upravljanju[*Kontrole artikala*](/docs/quality/item-control/items-control/item-control-management).   
Upravljane informacije su:
> **Interni test**: označava je li *Test* proveden interno ili u vanjskom laboratoriju.
> **Datum slanja**: datum je slanja materijala potrebnog za provođenje *Testa* u *Vanjski laboratorij*. Informacije su samo za čitanje ako je naznačen *Interni test*.   
> **Vanjski laboratorij**: ovo je naziv tvrtke *Dobavljača* koji će provesti ispitivanje. Ove su informacije samo za čitanje ako je naznačeno *Interno ispitivanje*.
> **Vrsta testa**: ovo je šifra i opis *Ispitivanja*.
> **Kategorija učestalosti**: napomene u slobodnom obliku u vezi s učestalošću uzorkovanja.
> **Broj opažanja**: ovo je minimalni preporučeni broj mjerenja koja treba provesti.
> **Korišteni mjerni instrument**: ovo je *Mjerni instrument* koji se koristi za određivanje specifične vrijednosti *Ispitivanja*.
> **Datum početka/završetka**: ovo su datumi početka i završetka *Ispitivanja*.
> **Datum rezultata testa**: ovo je datum kada je *Rezultat* dodijeljen.   
> Prilikom unosa *Rezultata*, ove se informacije prikazuju kao današnji datum i mogu se kasnije izmijeniti.
> **Opis rezultata**: bilješke o temi u slobodnom obliku.
> **Datum odobrenja**: ovo je datum na koji je *Test* *Odobren*.
> Prilikom unosa datuma, oznaka *Odobreno* se automatski postavlja.
> **Opis odobrenja**: bilješke o temi u slobodnom obliku.
> **Ispitne bilješke**: bilješke o temi u slobodnom obliku.
> **Ostale bilješke**: bilješke u slobodnom obliku.


***Ostali podaci iz provedenih ispitivanja***   

Moguće je pogledati neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata)za svaki redak *Otkrivene vrijednosti* retka *Artikl/Kontrole artikala*.   
Nasljeđuju se od *Testnih atributa* povezanih s *Testovima* *Kontrola artikala*.   


***Svojstva artikla***   

Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata)za svaki redak *Otkrivene vrijednosti* retka *Artikl/Kontrole artikala*.   


***Dokumenti u privitku***   

U ovom popisu mogu se umetnuti i pregledati svi prilozi povezani s retkom *Otkrivene vrijednosti* retka *Artikl/Kontrole artikala*.   


#### Detaljni podaci kontrole
Upravljane informacije su:
> **Referenca plana kontrole**: ovo je referenca na *Kontrolni plan* korišten za testove i zabilježene vrijednosti. Ove su informacije samo za čitanje.
> **Opis kontrole**: ovo je opis povezane *Kontrole artikla*. Ove su informacije samo za čitanje.
> **Napomena o kontroli**: bilješke u slobodnom obliku o temi.
> **Bilješke artkl-kupac**: bilješke u slobodnom obliku o temi.
> **Referenca tehničkog lista**: ovo je referenca na *Tehničko uputstvo* povezano s korištenim *Kontrolnim planom*. Ove su informacije samo za čitanje.
> **Vrsta izvornog dokument**: ovo je referenca na *Vrstu izvornog dokumenta* na kojem su provedene *Kontrole artikala*. Ove su informacije samo za čitanje.
> **Referenca dokumenta podrijetla**: ovo je referenca na *Izvorni dokument* na kojem su provedene *Kontrole artikala*. Ove su informacije samo za čitanje.  
> **Napomena**: besplatne bilješke.   


#### Ostali podaci provjere
Moguće je pogledati neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki redak *Artikla/Kontrole artikla*.
Nasljeđuju se od *Svojstva kontrola* povezanih s *Kontrolama artikala*.   


#### Svojstva stavke/artikla
Moguće je unijeti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki redak *Artikla/Kontrole artikla*.   


#### Dokumenti u privitku
U ovom popisu mogu se umetnuti i pregledati svi prilozi povezani s retkom *Artikla/Kontrole artikla*.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).   