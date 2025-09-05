---
title: Nesukladnost
sidebar_position: 2
---


Upravljanje se može pronaći na putanji **Kvaliteta > Nesukladnost > Nova nesukladnost** ili se može izvršiti iz **Pretrage nesukladnosti**.   


:::važno Čemu služi
Nesukladnosti se koriste za identifikaciju i dokumentiranje odstupanja od utvrđenih standarda ili zahtjeva, bilo da se odnose na proizvodnju ili uslugu.
Ovaj proces pomaže osigurati da su proizvodi, usluge ili procesi ispravni i poboljšani kako bi se održala kvaliteta i sigurnost. Također, olakšava usvajanje korektivnih radnji/mjera kako bi se spriječili budući problemi.  
*Nesukladnosti* moraju:
- utvrditi uzroke nesukladnosti;
- utvrditi postoje li ili se mogu pojaviti slične nesukladnosti;
- procijeniti potrebu za djelovanjem kako bi se uklonili uzroci nesukladnosti.  

Sljedeća izvješća su standardno dostupna:
> **Nesukladnost**: Obrazac *Nesukladnosti*;
> **8D Nesukladnost**: obrazac za popunjavanje za 8D upravljanje *Nesukladnostima*.   
:::


## Kontrolne tipke


### ![](/img/neutral/common/save.png) Spremi nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti*.   


### ![](/img/neutral/common/new.png) Nova nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti* i otvara se novi obrazac stvaranjem novog.  


### ![](/img/neutral/common/execute.png) Valorizacija nesukladnosti

Tipke prilikom pregleda kartice *Zaglavlje*.   
Moguće je kreirati *odobrenje* za *Dobavljača* ili *Kupca* kojem je dodijeljena *Nesukladnost*.   
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena, ako je *Nesukladnost tipa *s kupcem* ili *s dobavljačem* i ako postoji *vrijednost za naplatu*.   
Zahtjev za podatke/potvrda se pojavljuje za:
> **Kupac** ili **Dobavljač**: je primatelj novog *odobrenja* (obavezni podatak), predlaže se *Kupac* ili *Dobavljač* izvorne *Nesukladnosti*.  
> **Vrsta računa**: ovo je *Vrsta dokumenta* novog *odobrenja* (obavezni podatak); predlaže se *Vrsta računa* unesena u *Vrstu nesukladnosti* izvorne *Nesukladnosti*.   
> **Opis**: ovo je opis koji će se koristiti za redak *Trošak* novog *odobrenja* (obavezni podatak); predlaže se opis koji je parametriziran u [Parametrima nesukladnosti](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), odjel *Reference o nesukladnosti*.   
> **PDV**: je *Vrsta PDV-a* koja će se koristiti za redak *Trošak* novog *odobrenja*.  
> Predlaže se *Vrsta PDV-a* sa sljedećim prioritetima:   
> 1. Ako postoji *Izjava o namjeri*, uzima se u obzir *Vrsta PDV-a* prisutna u dokumentu;
> 2. Ako *Izjava o namjeri* ne postoji, uzima se u obzir *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti*;
> 3. Ako *Izjava o namjeri* ne postoji i *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti* nije navedena, uzima se u obzir *Vrsta PDV-a* povezana s *Vrstom nesukladnosti*.  
>
> Zatim se pritisne tipka **U redu** ili **Otkaži** kako bi se odlučilo želi li se nastaviti s postupkom izrade ili ne.
> Nakon što je obrada dovršena, prikazuje se novoizrađeno *odobrenje*.


### ![](/img/neutral/common/corrective.png) Stvaranje korektivne radnje

Tipka prilikom pregleda kartice *Upravljanje nedostacima*.
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena i ako je odabran valjani redak *Nedostatak*.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


## Upravljanje podacima

## Podaci zaglavlja dokumenta

Informacije kojima se upravlja su:   
> **Vrsta nesukladnost**: ovo je *Vrsta* dokumenta (obavezni podatak).
> Prilikom unosa nove *Nesukladnosti* predlaže se *Vrsta nesukladnosti* navedena u *Parametrima nesukladnosti*, odjeljak *nesukladnosti*.
>
> **Godina/Broj/Datum**: ovo su *Godina*, *Broj* i *Datum* *Nesukladnosti* (obavezni podaci).   
> Prilikom unosa nove *Nesukladnosti*:  
> - *Datum* se predlaže kao današnji datum;
> - *Godina* i *Broj* se predlažu na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom nesukladnosti*.  
>
> **Kupac** ili **Dobavljač**: Ovo je referenca na *Kupca* ili *Dobavljača* kojem je *Nesukladnost* upućena (obavezno ako je *Vrsta nesukladnosti* *Dobavljaču* ili *Kupcu*).
> *Kupac* ili *Dobavljač* omogućen je na temelju naznačene *Vrste nesukladnosti*.   
>
> **Funkcija/Područje/Odjel**: Ovo je referenca za *Funkciju/Područje/Odjel* (obavezno ako je *Vrsta nesukladnosti* *Interna*).
> Omogućuje se na temelju naznačene *Vrste nesukladnosti*. 


## Zaglavlje

Upravljane informacije su:
> **Odgovorna osoba**: ovo je *Zaposlenik* odgovoran za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti* prikazuje se *Odgovorna osoba* navedena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*. 
>
> **Odgovorna funkcija**: Ovo je *Funkcija tvrtke* odgovorna za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti*, predlaže se *Odgovorna funkcija* naznačena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*.  
>
> **Vanjski referent**: slobodne napomene o kontakt osobi *Kupca*, *Dobavljača* ili *Funkcije/Područja/Odjela* primatelja *Nesukladnosti*.   
>
> **Proizvodno mjesto**: je referenca *Proizvodnog mjesta* gdje je pronađena *Nesukladnost*.   
>
> **Razlog**: slobodne napomene o razlogu unosa *Nesukladnosti* (obavezni podatak).   
>
> **Prijedlog rješenja**: napomene u slobodnom obliku o temi.
> Obično se koristi za označavanje predloženog rješenja primatelju *Nesukladnost*.  
>
> **Obaviješteno/Na datum**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.   
>
> **Odgovor dobavljača/interni odgovor**: Slobodne bilješke o temi.
> Obično se koristi za bilježenje bilo kakvog odgovora primatelja *Nesukladnosti* na obavijest. 
>
> **Audit**: proširenje samo za čitanje gdje su vidljive sljedeće informacije:
>> **Datum kreiranja/Ime**: ovo je datum i *A.R.M. korisnik* koji je unio *Nesukladnost*.
>> **Datum zadnje izmjene/Ime**: ovo je datum i *A.R.M. korisnik* koji je napravio posljednju izmjenu *Nesukladnosti*.   
>
> **Odobreno/Datum**: proširenje u koje se mogu unijeti podaci o odobrenju za *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Nesukladnost*.
>> **Odobreno**: Označava da je *Nesukladnost* *Odobrena*.   
>> Nakon odobrenja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo na današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*
>> **Datum**: ovo je datum na koji je *Nesukladnost* *Odobrena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je zastavica *Odobreno*.   
>> **Ime**: Ovo je *A.R.M. korisnik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Osoba**: Ovo je *Zaposlenik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Funkcija**: Ovo je *Funkcija tvrtke* koja je odobrila *Nesukladnost*. 
>> Omogućeno samo ako je *Nesukladnost* *Odobrena*.   
>
> **Datum zatvaranja/na dan**: proširenje u koje se mogu unijeti podaci o zatvaranju *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Nesukladnost*.  
>> **Zatvoreno**: označava da je *Nesukladnost* *Zatvorena*.  
>> Nakon zatvaranja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo od današnjeg datuma i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*  
>> **Datum**: datum na koji je *Nesukladnost* *Zatvorena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je oznaka *Zatvoreno*.  
>> **Ime**: je *A.R.M. korisnik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Osoba**: je *Zaposlenik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Nesukladnost*.   
>> Omogućeno samo ako je *Nesukladnost* *Zatvorena*.
>> **Obavijest o zatvaranju/Datum zatvaranja**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.  


### Referenca dokumenta

Kartica sadrži informacije o dokumentima koji su doveli do upravljanja *Nesukladnosću*. Uključene informacije su:
> **Račun**, **Primka/Otpremnica**, **Prijem robe**, **Povrat od podizvođača**, **Reklamacija**, **Godina/Narudžba/Serija** i **Broj faze/podfaze/deklaracije**:
> Sve su to reference samo za čitanje na izvorni dokument koji je stvorio *Nesukladnost*.
> U standardu, ovo je jedini dokument koji može stvoriti *Nesukladnost* i automatski postavlja referencu i *Reklamaciju*.


### Bilješke

Kartica sadrži opće i specifične bilješke o dokumentu. Sadržane informacije su:
> **Komercijalne bilješke**: slobodne bilješke o temi rezervirane za prodajno osoblje.
> **Tehničke bilješke**: slobodne bilješke obliku o temi rezervirane za tehničko osoblje.
> **Administrativne bilješke**: slobodne bilješke obliku o temi rezervirane za administrativno osoblje.


### Dodatni podaci

Moguće je umetnuti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) općenito za *Nesukladnost*.   


### Ostali troškovi

U ovoj kartici je moguće unijeti i druge troškove uz one koji proizlaze iz troška spornih stavki i troška upravljanja dokumentima.
> **Direktni troškovi**
> Popis troškova koji se izravno mogu pripisati cijeni spornih artikala, pruženoj usluzi i cijeni rada nastalog u upravljanju *Nesukladnošću*. Ovaj popis sadrži informacije o:  
>> **Element troška** i **Opis elementa troška**: moguće je odabrati samo *Element troška* s *Vrst troškova = Izravni trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje izvještavaju o *Vrsti troškova* povezanim s odabranim *Elementom troška*.
>> **Primjeni na ...**: informacije samo za čitanje koje izvještavaju na koju se komponentu troška primjenjuje *Vrijednost* (ako je izražena kao postotak); moguće dodjele su:   
>>> *Trošak materijala*: zbroj troškova stavke *Neispravnih predmeta* i *Upotrijebljenih materijala*;
>>> *Trošak stroja*, *Trošak rada* i *Trošak obrade*: zbroj troškova obrade *Neispravnih predmeta*;
>>> *Industrijski trošak*: zbroj *Ukupnog obrađenog materijala* i *Ukupnog neobrađenog materijala*.  
>>>   
>> **Postotak / Vrijednost**: informacije samo za čitanje koje određuju metodu izračuna koja će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati komponenti troška navedenoj u *Primjeni na ...*.
>> **Napomena**: Napomene u slobodnom obliku.  
>>   
> **Opći troškovi**
> Popis općih troškova koji se ne mogu izravno pripisati *Nesukladnosti* i koji podržavaju cijeli poslovni proces. Ovaj popis sadrži informacije o:   
>> **Element troška** i **Opis elementa troška**: mogu se odabrati samo *Elementi troška* s *Vrsta troškova = Opći trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje prikazuju *Vrstu troškova* povezanu s odabranim *Elementom troška*.
>> **Postotak / Vrijednost**: informacije samo za čitanje koje prikazuju metode izračuna koje će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: Ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati zbroju *Ukupno obrađenog materijala* i *Ukupno neobrađenog materijala*.
>> **Napomena**: Napomene u slobodnom obliku.
>>   
> **Ostali troškovi**
> Popis ostalih troškova. Ovaj popis sadrži informacije o:
>> **Elementu troška** i **Opis elementa troška**: Mogu se odabrati samo *Elementi troška* s *Vrsta troškova = Ostali trošak*.
>> **Vrsta troškova**: informacije samo za čitanje koje prikazuju *Vrstu troškova* povezanu s odabranom *Elementom troška*.
>> **Mjerna jedinica**: ovo je *Mjerna jedinica* koja se koristi za izražavanje informacija o *Količini*.
>> **Količina**: ovo je *Količina* *Elementa troška*.
>> **Jedinična cijena**: Ovo je *Jedinična cijena* *Elementa troška*.
>> **Ukupna cijena**: Informacije samo za čitanje koje prikazuju umnožak *Količine* i *Jedinične cijene*.
>> **Napomena**: Napomene u slobodnom obliku.  


### Vrijednosti

U karticu se mogu unijeti podaci koji se odnose na dugovne i potražne dokumente za *Nesukladnost*, nastale troškove, one koji će se naplatiti i troškove koje je *Dobavljač/Kupac* priznao. Prisutni podaci su: 
> **Valuta**, **Tečaj** i **Datum valute**: Ovo je *Valuta* *Dobavljača* ili *Kupca* u kojoj su navedene sve vrijednosti dokumenta, odgovarajući tečaj prema *Valuti* *Tvrtke* i *Datum valute*.
> **Valorizirano** i **Referenca dokumenta zaduženja**: Informacije samo za čitanje koje pokazuju je li *Nesukladnost* procijenjena i referenca na generirano *odobrenje*.  
> **Referenca dokumenta odobrenja**: ovo je referenca na *odobrenje* primljeno od *dobavljača* ili *kupca*.
> **Napomene na dokumentu o odobrenju**: Slobodne bilješke o temi.   
>   
> **Ukupno neobrađeni materijal**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ukupni ponovni izračun*; predlaže se zbroj komponente troška stavke neprerađenih *Neispravnih stavki* i *korištenih materijala*.
>   
> **Ukupno obrađeni materijal**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ponovni izračun ukupnih iznosa*; predlaže se zbroj komponente troškova obrade prerađenih *Neispravnih stavki*. 
>   
> **Ukupni izravni troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Direktni troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni opći troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni ostali troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.   
>   
> **Troškovi upravljanja**: je *Trošak upravljanja* preuzet iz *Troška upravljanja* prisutnog u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*; vrijednost se može promijeniti. 
>   
> **Ukupno nesukladnosti**: informacija samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, zatražen *Automatski ponovni izračun ukupnih iznosa*; u tom slučaju, ukupan iznos se preračunava kao zbroj: *Ukupnog neobrađenog materijala*, *Ukupnog obrađenog materijala*, *Ukupnih izravnih troškova*, *Ukupnih općih troškova*, *Ukupnih ostalih troškova* i *Troškova upravljanja*; ako nije zatražen *Automatski ponovni izračun ukupnih iznosa*, vrijednost se mora unijeti ručno.  
>   
> **Vrijednost koja se naplaćuje**: je *Vrijednost za naplatu* *Kupcu* ili *Dobavljaču*; ako je *Automatski ukupni ponovni izračun* zatražen u *Parametrima reklamacija i neusklađenosti* za godinu datuma dokumenta, odjel *Nesukladnosti*, vrijednost se predlaže kao jednaka *Ukupnom iznosu nesukladnosti* i naknadno se može izmijeniti.    
>   
> **Prepoznata vrijednost**: ovo je vrijednost koju prepoznaje *Kupac* ili *Dobavljač*; vrijednost se može unijeti ručno. 


## Upravljanje nedostacima

Ovdje je popis pronađenih nedostataka koji će biti prijavljeni primatelju dokumenta i sastoji se od sljedećih informacija:
> **Redoslijed**: ovo je *Redoslijed* u kojem su prikazani nedostaci; prikazuje se progresivni slijed s mogućnošću promjene. 
>  
> **Ustanovljeni kvarovi**
>> **Šifra**: ovo je šifra za *Pronađeni nedostatak*; mogu se unijeti samo aktivni *Nedostaci* obuhvaćeni vrstom *Nesukladnosti* dokumenta.
>> **Opis**: ove informacije samo za čitanje opisuju *Pronađeni nedostatak*.
>> **Napomene**: slobodno definirane napomene o *Pronađenom nedostatku*. 
>  
> **Navodni uzrok**
>> **Šifra**: ovo je šifra *Pretpostavljenog uzroka* koji je generirao nedostatak; za vrstu *Nesukladnosti* dokumenta mogu se unijeti samo pretpostavljeni, aktivni i očekivani *Uzroci*; nakon analize *Neispravnih stavki*, *Pretpostavljeni uzrok* može, ali i ne mora biti potvrđen kao *Stvarni uzrok*.
>> **Opis**: ove informacije samo za čitanje opisuju *Pretpostavljeni uzrok*.
>> **Napomene**: slobodne bilješke o *Pretpostavljenom uzroku*.   
>  
> **Faza otkrivanja**
>> **Šifra**: ovo je Šifra *Faze otkrivanja* procesa u kojem je otkriven nedostatak; mogu se unijeti samo aktivne *Faze otkrivanja*.
>> **Opis**: ove informacije samo za čitanje opisuju *Fazu otkrivanja*.
>> **Napomene**: slobodne bilješke o *Fazi otkrivanja*.  
>  
> **Ozbiljnost**
>> **Šifra**: ovo je šifra za *Stupanj ozbiljnosti* dodijeljen nedostatku; mogu se unijeti samo aktivni *Stupnjevi ozbiljnosti*.
>> **Opis**: ove informacije samo za čitanje opisuju *Stupanj ozbiljnosti*.
>  
> **Zatvaranje nedostatka**
> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti upravljanje određenim *Nedostatkom*.
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Nesukladnost*.  
>> **Zatvoren**: označava da je upravljanje određenim *Nedostatkom* dovršeno; operater ga mora ručno unijeti.
>> Nakon zatvaranja, automatski se prikazuje sljedeće: *Datum zatvaranja*, predložen kao današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao povezani *A.R.M. korisnik* i *Zaposlenik* povezan s *A.R.M. korisnikom* (*Ime* i *Osoba* su informacije prisutne u proširenju *Podaci o zatvaranju nedostatka* na kartici *Podaci o nedostatku*).   
>> **Datum zatvaranja**: ovo je datum na koji je određeni *Nedostatak* dovršen.
>> Kada se unese datum, oznaka *Zatvoren* se automatski postavlja.  
>  
> **Referenca korektivne radnje**
>> **Vrsta**, **Godina** i **Broj**: Ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom *Nedostatka* i generiranu pomoću gumba **Stvori korektivnu radnju**. 
>   
> **Napomena**: slobodne bilješke na određenom retku *Nedostatka*.   


### Podaci o nedostacima

Ovo su dodatne informacije za odabrani redak *Nedostatka*. Upravljane informacije su:
> **Stvarni uzrok**: ovo je stvarni uzrok koji je generirao nedostatak; za vrstu *Nesukladnosti* dokumenta mogu se unijeti samo stvarni, aktivni i očekivani *Uzroci*.  
> **Napomene o stvarnom uzroku**: napomene u slobodnom obliku o *Stvarnom uzroku*.
> **Predloženo rješenje**: ovo je predloženo tehničko/komercijalno/administrativno rješenje koje treba usvojiti; mogu se unijeti samo aktivna *Rješenja*.
> **Napomene o predloženom rješenju**: napomene u slobodnom obliku o *Predloženom rješenju*.
> **Donesena odluka**: ovo je tehnička/komercijalna/administrativna odluka donesena za rješavanje nedostatka; mogu se unijeti samo aktivne *Odluke*.   
> **Bilješke o odluci**: Slobodne bilješke o *Donesenoj odluci*.
> **Odgovor dobavljača/internog odgovora**: slobodne bilješke o temi. Obično se koriste za bilježenje bilo kakvog odgovora primatelja *Nesukladnosti* u vezi s *Nedostatkom*.  
> **Podaci o zatvaranju nedostatka**: proširenje u koje se mogu unijeti podaci o zatvaranju *Nedostatka*:
> **Ime**: ovo je *A.R.M. korisnik* koji je zatvorio *Nedostatak*. Ove su informacije samo za čitanje.
> **Osoba**: ovo je *Zaposlenik* koji je zatvorio *Nedostatak*. Ove su informacije samo za čitanje.
> **Funkcija**: ovo je *Funkcija tvrtke* koja je zatvorila *Nedostatak*.   


### Predmeti reklamacije   

To je popis *Reklamiranih artikala* koji se mogu povezati s odabranim *Pronađenim nedostatkom* i sastoji se od sljedećih informacija:   
> **Predmeti/artikli**   
>> **Barkod**: može se koristiti za dodavanje ili zamjenu artikla, serije, serijskog broja i jedinice utovara.
>> Za potpune informacije o kodiranju barkodova pogledati stranicu [Barkod numeracija](/docs/configurations/tables/general-settings/barcode-tokenizer).
>> **Klasa**: ovo je *Klasa artikla*.
>> **Šifra artikla**: ovo je šifra *Artikla*.
>> **Opis artikla**: ovo je opis *Artikla*.
>> **Varijanta**: ovo je šifra varijante *Artikla*.
>> **Lot**: ovo je interna šifra *lota* *Artikla*.
>> **Utovarna jedinica**: ovo je originalna *Utovarna jedinica* koja je sadržavala *Artikl*.  
>> Unos *Utovarne jedinice* automatski ubacuje sve retke s detaljima *Artikla* koji se nalaze u njoj.
>> Ako je *UDC grupiranje podataka* označeno u *Parametrima reklamacija i neusklađenosti* u odjelu *Nesukladnosti*, retci s identičnim *Artiklima* bit će prikazani u jednom retku s dodanim količinama.  
>> **Serijski broj**: Ovo je *Serijski broj* zatraženog *predmeta/artikla*.   
>> **Povratna jedinica tereta**: je *jedinica tereta* koja sadrži predmet* za koji se traži povrat.   
>  
> **Količina**
>> **Mjerna jedinica**: ova informacija, samo za čitanje, predstavlja *Mjernu jedinicu* traženog *artikla*.
>> **Primljeno**: ovo je količina primljenog *artikla*; vrijednost se mora unijeti ručno.
>> **Osporeno**: ovo je količina *artikla* koji se želi osporiti; vrijednost se mora unijeti ručno.
>> **Nije obrađeno**: ovo je količina osporenog i neobrađenog *artikla*; vrijednost se mora unijeti ručno.
>> **Obrađeno**: ovo je količina osporenog i obrađenog *artikla*; vrijednost se mora unijeti ručno.
>> **Vraćeno**: ovo je količina vraćenog *artikla*; vrijednost se mora unijeti ručno. 
>  
> **Alternativna količina**
>> Stupci u ovoj grupi prikazuju se samo ako je u *Parametrima reklamacija i nesukladnosti*, za godinu datuma dokumenta, odjel *Nesukladnosti*, označeno *Alternativni prijedlog U.M.*.
>> **Jedinica mjere**: ovo je *Alternativna jedinica mjere* reklamiranog *Artikla*.
>> **Cijena jedinica mjere**: ovo označava odnosi li se *Jedinična cijena materijala* na *Alternativnu jedinicu mjere*.
>> **Primljeno**: ovo je količina *artikla* primljena u *Alternativnoj jedinici mjere*; vrijednost se mora unijeti ručno.
>> **Osporeno**: ovo je količina *artikla* koja se želi osporiti u *Alternativnoj jedinici mjere*; vrijednost se mora unijeti ručno.
>> **Nije obrađeno**: ovo je količina *artikla* koja je osporena i nije obrađena u *Alternativnoj jedinici mjere*; vrijednost se mora unijeti ručno.
>> **Obrađeno**: ovo je količina *artikla* koja je osporena i prerađena u *Alternativnoj jedinici mjere*; vrijednost se mora unijeti ručno.
>> **Vraćeno**: je količina vraćenog *artikla* izražena u *Alternativnoj mjernoj jedinici*; vrijednost se mora unijeti ručno.  
>
> **Jedinična cijena**
>> **Materijal**: ovo je *Jedinična cijena* *artikla*; vrijednost se mora unijeti ručno.
>> **Proces**: ovo je *Jedinična cijena* *Procesa*; postavljena je na stopu povezanu s *Troškovnim centrima* povezanim sa *Strojem* i *Radnom grupom* *Radnog centra*; vrijednost se može promijeniti.
>  
> **Sati**
>> **Radno vrijeme**: ovo su sati i minute rada na popravku neusklađenog *artikla*; ovu vrijednost potrebno je unijeti ručno.

#### Podaci o predmetu

Ovo su dodatne informacije za odabrani redak *Reklamiranog artikla*. Upravljane informacije su:
> **Projekt**: ovo je referenca na *Projekt* određenoga *Nedostatka*.
> **Napomene o artiklu**: napomene u slobodnom obliku o *artiklu* određenog *Nedostatka*.
> **Napomene o lotu**: napomene u slobodnom obliku o *lotu* određenog *Nedostatka*.
> **Napomene o utovarnoj jedinici**: napomene u slobodnom obliku za *Utovarnu jedinicu* određenog *Nedostatka*.
> **Napomene**: napomene u slobodnom obliku u retku određenog *Nedostatka*.  
> **Radni centar**: ovo je *Radni centar* koji se koristi za popravke neusklađenog *Predmeta*.
> Odabirom *Radnog centra*, u *Jediničnoj cijeni* predložit će se stopa koja će se primijeniti na vrijeme utrošeno na posao.
> Predložena stopa je zbroj stopa *Troškovnih centara* povezanih sa *Strojem* i *Radnom grupom* *Radnog centra*.  
> **Ukupni neobrađeni materijal**: informacija samo za čitanje, predlaže se vrijednost proizvoda između *Neobrađene količine" i *Jedinične cijene materijala* odabranog *Neispravnog pedmeta*.   
> **Ukupno obrađeni materijal**: informacije samo za čitanje. Ova vrijednost je umnožak *Obrađene količine" i *Jedinične cijene* plus umnožak *Radnih sati* i zbroja stopa povezanih s *Troškovnim centrima* povezanim sa *Strojem* i *Radnom grupom* *Radnog centra*.
> **Ukupni nedostaci**: informacije samo za čitanje. Ova vrijednost je zbroj *Ukupnog neobrađenog materijala* i *Ukupnog obrađenog materijala*. 


#### Dodatni podaci 

Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabranu *predmet nedostatka*.   


#### Povezani dokumenti   

U ovom popisu možete umetnuti i pregledati sve dokumente priložene odabranom *Predmetu nedostatka*.   


### Korišteni materijali  

Na ovom popisu mogu se navesti materijali korištene za otklanjanje odabranog *Nedostatka*.
Popis uključuje sljedeće informacije:   
>   
> **Artikl**
>> **Klasa**: ovo je *Klasa artikla*.
>> **Šifra**: ovo je šifra *Artikla*.
>> **Opis**: ovo je opis *Artikla*.
>> **Varijanta**: ovo je šifra varijante *Artikla*.
>> **Lot**: ovo je korištena interna šifra lota.
>> **Serijski broj**: ovo je korišteni serijski broj. 
>   
> **Količina**
>> **Mjerna jedinica**: ova informacija je samo za čitanje za *Mjernu jedinicu* *Artikla*.
>> **Potrošena količina**: ovo je količina *Artikla* korištena za otklanjanje odabranog *Nedostatka*.
>   
> **Vrijednost**
>> **Jedinična cijena**: ovo je jedinična cijena *Artikla*; vrijednost se mora unijeti ručno.
>> **Ukupna cijena**: ovo je omjer između *Potrošene količine* i *Jedinične cijene*; cijena se može mijenjati.   
>
> **Napomena**: slobodne bilješke.  


### Uključeni subjekti   

Kartica sadrži informacije o *Funkcijama tvrtke* i/ili *Zaposlenicima* koji će biti uključeni u upravljanje odabranim *Nedostatkom*.
Popis se sastoji od sljedećih informacija:  
> **Slijed**: je *Slijed* prikaza "Uključenih subjekata*; predlaže se progresivni broj s mogućnošću promjene.  
>
> **Funkcija tvrtke**
>> **Šifra**: ovo je šifra uključene *Funkcije tvrtke*.
>> **Opis**: ovo je opis uključene *Funkcije tvrtke*. 
>   
> **Zaposlenik**
>> **Šifra**: ovo je šifra uključenog *zaposlenika*.
>> **Opis**: ovo je prezime i ime uključenog *zaposlenika*.  
>   
> **Upravljanje angažmanom**  
>> **Opis predmeta**: bilješke u slobodnom obliku ako uključena osoba nije *Funkcija tvrtke* ili *Zaposlenik*.
>> **Razlog sudjelovanja**: bilješke u slobodnom obliku o temi.
>> **Rok dospijeća**: ovo je datum do kojeg uključena osoba mora dovršiti zadatke povezane s razlogom svog sudjelovanja.
>> **Odgovor**: bilješke u slobodnom obliku o temi.  
>> **Zatvoreno**: označava da je angažman ispitanika završen.   
>> Samo *Funkcija ili odgovorna osoba* za *Nesuklanost* ili *Funkcija tvrtke* ili uključeni *Zaposlenik* može zatvoriti incident/angažman.
>> Nakon zatvaranja, automatski se predlaže *Datum zatvaranja*, koji je postavljen na današnji datum i može se promijeniti.  
>> **Datum zatvaranja**: ovo je datum kada je uključenost subjekta završena.
>> Samo *Funkcija ili odgovorna osoba* za *Nesuklanost* ili *Funkcija tvrtke* ili uključeni *Zaposlenik* može unijeti ili promijeniti ovaj datum.
>> Kada se unese datum, automatski se postavlja oznaka *Zatvoreno*.
>
> **Napomena**: slobodne bilješke. 


### Dodatni podaci   

Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabrani *Nedostatak*.   


### Povezani dokumenti    

U ovom popisu možete umetnuti i pregledati sve dokumente priložene odabranom *Predmetu nedostatka*.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).   