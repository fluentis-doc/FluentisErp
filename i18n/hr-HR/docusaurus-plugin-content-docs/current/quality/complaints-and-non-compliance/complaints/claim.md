---
title: Reklamacija
sidebar_position: 2
---


Upravljanje reklamacijama se može pronaći na putanji **Kvaliteta > Reklamacije > Nova reklamacija** ili se to može učiniti putem **Pretraživanja reklamacija**.  
 

:::važno Čemu služi?
Reklamacije se koriste za evidentiranje nezadovoljstva uslugom ili proizvodom, što tvrtki omogućuje prepoznavanje i ispravljanje bilo kakvih problema. One su alat za poboljšanje kvalitete i održavanje dobrih odnosa s kupcima te bi trebale:      
- utvrditi uzroke neusklađenosti;
- utvrditi postoje li slične anomalije ili se mogu pojaviti;
- procijeniti potrebu za djelovanjem kako bi se uklonili uzroci koji su    uzrokovali pronađene anomalije.

Izvještavanje je standardno dostupno za:   
> **Reklamacija**: obrazac za *reklamaciju*;  
> **Reklamacija 8D**: obrazac *reklamacije* u 8D formatu;  
> **Ovlaštenje za povrat**: Obrazac za *reklamaciju* koji se koristi za ovlaštenje povrata proizvoda koje je vratio *Kupac*;   
> **Obavijest o odustajanju**: Obrazac za *reklamaciju* koji se koristi za obavještavanje *Kupca* o odustajanju od *Reklamacije*;   
> **Popis reklamacija po kupcu**: popis reklamacija odabranih iz *Pretraživanja reklamacija* grupiranih po *Kupcu*;   
> **Popis reklamacija prema vrsti**: Popis reklamacija odabranih iz *Pretraživanja reklamacija* grupiranih prema *Vrsti reklamacije*.   
:::


## Kontrolne tipke


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovaj gumb spremaju se svi promijenjeni podaci za prikazanu *Reklamaciju*.   


### ![](/img/neutral/common/execute.png) Valoriziranje reklamacije

To je tipka u pregledu kartice *Zaglavlje*.   
Moguće je kreirati *odobrenje* prema pošiljatelju *reklamacije*.   
Tipka je omogućena samo ako je *Reklamacija* spremljena, odobrena i ako postoji *Vrijednost za kredit*.   
Zahtjev za podatke/potvrda se pojavljuje za:  
> **Vrsta računa**: ovo je *Vrsta dokumenta* novog *odobrenja* (obavezni podatak); predlaže se *Vrsta računa* unesena u *Vrstu reklamacije* izvorne *Reklamacije*.   
> **Opis**: je opis koji će se koristiti za redak *Stavke troška* novog *odoborenja* (obavezni podatak); opis koji je parametriziran u [Parametri valorizacije reklamacije](/docs/quality/claims-and-non-compliance/claims/procedures/claim-valorisation), odjel *Reference reklamacije*.   
> **PDV**: je *Vrsta PDV-a* koja će se koristiti za redak *Trošak* novog *odoborenja*.  
> Predlaže se *Vrsta PDV-a* sa sljedećim prioritetima:  
> 1. ako postoji *Izjava namjere', uzima se u obzir *Vrsta PDV-a* prisutna u dokumentu;   
> 2. ako ne postoji *Izjava namjere', uzima se u obzir *Vrsta PDV-a* povezana s pošiljateljem *Reklamacije*;   
> 3. Ako ne postoji *Izjava namjere' i nije navedena *Vrsta PDV-a* povezana s pošiljateljem *Reklamacije*, uzima se u obzir *Vrsta PDV-a* povezana s *Vrstom reklamacije*.  
>
> Zatim se pritisne tipka **U redu** ili **Otkaži** kako bi se odlučilo želi li se nastaviti s postupkom izrade ili ne.
> Nakon što je obrada dovršena, prikazat će se novoizrađeno *Odobrenje*.  


### ![](/img/neutral/common/corrective.png) Stvaranje korektivne radnje

Tipka za prikaz u kartici:  
> *Upravljanje nedostacima* - Ako je *Predložak* *Vrsta reklamacije* *Klasični*;
> *Radnje suzbijanja*, *Trajne radnje* i *Faze* - Ako je *Predložak* *Vrsta pritužbe* *8D rješavanje problema*.   
>
Tipka je omogućena samo ako je *Reklamacija* spremljena, odobrena i ako je s popisa odabran valjani redak. 

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


### Stvaranje nove neusklađenosti

Tipka za prikaz u kartici:   
> *Upravljanje nedostacima* - Ako je *Predložak* *Vrsta reklamacije* *Klasični*;   
> *Predložak* - ako je *Vrsta reklamacije* *Predložak* *8D rješavanje problema*.   
Tipka je omogućena samo ako je *Reklamacije* spremljena, odobrena i ako je s popisa odabran valjani redak.
Zahtjev/potvrda podataka prikazuje se za: *. 
>
> ** sesija za implementaciju **
>
> Zatim se pritisne gumb **U redu** ili **Otkaži** kako bi se odlučilo želite li se nastaviti s postupkom stvaranja ili ne.
> Nakon što je obrada dovršena, prikazuje se novostvorena *Neusklađenost* kako bi se mogli dopuniti nedostajući podaci.


## Upravljanje podacima

## Podaci zaglavlja dokumenta

Informacije kojima se upravlja su:  
> **Vrsta neusklađenosti**: je *Vrsta* dokumenta (obavezni podatak).  
> Prilikom unosa nove *Nesukladnosti*, predlaže se *Vrsta reklamacije* naznačena u *Parametrima reklamacije i nesukladnosti*, odjel *Reklamacije*.
> Na temelju *Predloška* navedenog u *Vrsti reklamacije*, *reklamacijom* će se upravljati u načinu rada *Upravljanje nedostacima* ili *8D - Rješavanje problema*.  
>
> **Godina/Broj/Datum**: ovo su *Godina*, *Broj* i *Datum* *reklamacije* (obavezni podaci).
> Prilikom unošenja nove *Reklamacije*:  
> - *Datum* se predlaže kao današnji datum;
> - *Godina* i *Broj* se predlažu na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom reklamacije*.  
>
> **Kupac**, **Kontakt kupca** ili **Prodavač**: ovo su podaci pošiljatelja (barem jedan od ta tri je obavezan).  
> *Kontakt kupca* je neizravni kupac, šifriran u glavnim podacima *Kontakti*, čiju je robu ili usluge prodala treća strana.
> *Preprodavač* se nalazi u informacijama na kartici *Zaglavlje*.  
> 


## Zaglavlje

Informacije kojima se upravlja su: 
> **Vrsta obavijesti**: ovo je način na koji je *Reklamacija* primljena ili obaviještena.  
>
> **Vrijeme obavijesti**: je vrijeme (sati i minute) primitka *Reklamacije*.   
>
> **Odgovorna osoba**: je li *zaposlenik* odgovoran za *neusklađenost*. 
> Prilikom unosa nove *Neusklađenosti*, predlaže se *Odgovorna osoba* navedena u *Parametrima pritužbi i neusklađenosti*, odjel *Neusklađenost*.   
>
> **Odgovorna funkcija**: je li *Funkcija tvrtke* odgovorna za *Neusklađenost*.   
> Prilikom unosa nove *Nesukladnosti*, predlaže se *Odgovorna funkcija* naznačena u *Parametrima pritužbi i nesukladnosti*, odjel *Nesukladnost*.   
>
> **Referenca dokumenta**: proširenje u koji se mogu umetnuti reference na dokumente od interesa za upravljanje *Reklamacijom**:   
>> **Račun**: je referenca na *Prodajni račun* (*Vrsta*, *Godina* i *Broj*) kojim se pretpostavljalo da je sporna roba ili usluga fakturirana.  
>> **Primka/otpremnica**: je referenca na *Prodajni dokument* (*Vrsta*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodana.   
>> **Potvrda o prijemu robe**: je referenca na *Potvrdu o primitku robe* (*Vrsta*, *Godina* i *Broj*), s kojom pošiljatelj vraća spornu robu.   
>> **Projekt**: ovo je referenca na *Projekt* sporne robe ili usluge.
>> **Naša referenca**: slobodne bilješke o drugim referencama na interne dokumente.
>> **Vaša referenca**: S+slobodne bilješke o drugim referencama na dokumente od pošiljatelja *Reklamacije*.  
>
> **Odobreno/Datum**: proširenje u koje se mogu unijeti podaci o odobrenju za *Reklamaciju*:   
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Reklamaciju*.  
>> **Odobreno**: Označava da je *Reklamacija* *Odobrena*.   
>> Nakon odobrenja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo na današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*.  
>> **Datum**: Ovo je datum kada je *Reklamacija* *Odobrena*.   
>> Prilikom unosa datuma, automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je oznaka *Odobreno*.  
>> **Ime**: Ovo je *A.R.M. korisnik* koji je odobrio *Reklamaciju*. Ove su informacije samo za čitanje.
>> **Osoba**: Ovo je *Zaposlenik* koji je odobrio *Reklamaciju*. Ove su informacije samo za čitanje.  
>> **Funkcija**: je *Funkcija tvrtke* koja je odobrila *Reklamaciju*.   
>> Omogućeno samo ako je *Reklamacija* *Odobrena*.   
>  
> **Prodavač**: podaci koji su već prethodno opisani među pošiljateljima *Reklamacije*. 
>
> **Referenca klijenta**: slobodne bilješke o temi.   
>
> **Vanjski kontakt**: slobodne napomene o kontakt osobi pošiljatelja *Reklamacije*. 
>
> **Audit**: proširenje samo za čitanje gdje su vidljive sljedeće informacije:   
>> **Datum kreiranja/Ime**: Ovo je datum i *A.R.M. korisnik* koji je unio *Reklamaciju*.
>> **Datum zadnje promjene/Ime**: Ovo je datum i *A.R.M. korisnik* koji je napravio posljednju izmjenu *Reklamacije*.  
>
> **Datum zatvaranja/objavljivanja**: proširenje u koje se mogu unijeti podaci o zatvaranju *Reklamacije*:   
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Reklamaciju*.
>> **Zatvoreno**: označava da je *Reklamacija* *Zatvorena*.  
>> Prilikom zatvaranja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo od današnjeg datuma i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*.  
>> **Datum**: Ovo je datum kada je *Reklamacija* *Zatvorena*.   
>> Prilikom unosa datuma, automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je zastavica *Zatvoreno*.   
>> **Ime**: je *A.R.M. korisnik* koji je zatvorio *Reklamaciju*. Ova informacija je samo za čitanje.
>> **Osoba**: je *Zaposlenik* koji je zatvorio *Reklamaciju*. Ova informacija je samo za čitanje.
>> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Reklamaciju*. 
>> Omogućeno samo ako je *Reklamacija* *Zatvorena*.
> **Obavijest o zatvaranju/Datum zatvaranja**: Ovo su ručne naznake je li pošiljatelj obaviješten o zatvaranju *Reklamacije* i kojeg datuma. 


### Obavijesti

Kartica sadrži sljedeće podatke:   
> **Razlog pritužbe**: opisne napomene o razlogu unošenja *Reklamacije* (obavezno polje).
>
> **Mjesto proizvodnje**: referenca na *mjesto proizvodnje* gdje je *Reklamacija* pronađena ili se sumnja da je izvor.  
>
> **Razlog pritužbe i pronađeni nedostatak su prihvaćeni**: označava da je *Reklamacija* prihvaćena.
>
> **Razlog povlačenja**: napomene o razlogu neprihvatljivosti *Reklamacije*; informacije su omogućene samo ako *Reklamacija* nije prihvaćena.  
>
>> **Obavijest/Datum**: ovo su upute za obavještavanje pošiljatelja *Reklamacije* o tome je li ista prihvaćena ili ne i na koji datum.   


### Bilješke

Kartica sadrži opće i specifične za područje bilješke za dokument. Uključene informacije su:  
> **Komercijalne bilješke**: bilješke o temi rezervirane za prodajno osoblje.
> **Tehničke bilješke**: bilješke o temi rezervirane za tehničko osoblje.
> **Administrativne bilješke**: bilješke o temi rezervirane za administrativno osoblje. 


### Drugi podaci

Moguće je unijeti općenite [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za *Reklamaciju*.   


### Ostali troškovi

U kartici je moguće unijeti i druge troškove uz one koji proizlaze iz Troškova spornih stavki i Troškova upravljanja dokumentima.
> **Izravni troškovi**  
> Popis troškova koji se izravno mogu pripisati cijeni spornih artikala, pruženoj usluzi i cijeni rada nastalog u rješavanju *Reklamacije*. Ovaj popis sadrži informacije o:   
>> **Stavka troška** i **Opis stavke troška**: mogu se odabrati samo *Stavke troška* od *Vrsta troška = Izravni trošak*.   
>> **Vrsta troška**: informacije samo za čitanje koje prikazuju *Vrstu troška* povezanu s odabranom *Stavkom troška*.   
>> **Primjena na ...**: informacije samo za čitanje koje izvještavaju na koju se komponentu troškova primjenjuje *Vrijednost* (ako je izražena kao postotak); u slučaju upravljanja *Reklamacijama* ne pravi se razlika između: *Troškova materijala*, *Troškova stroja*, *Troškova rada*, *Troškova obrade* i *Industrijskih troškova*, sve se stavke primjenjuju na *Ukupni iznos reklamacija*.      
>> **Postotak / Vrijednost**: informacije samo za čitanje koje određuju metodu izračuna koja će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati komponenti troška navedenoj u *Primjena na ...*.
>> **Napomena**: Napomene u slobodnom obliku.  
>>   
> **Generalni troškovi**  
> Popis generalnih troškova koji se ne mogu izravno pripisati *Pritužbi* i koji podržavaju cijeli poslovni proces. Ovaj popis sadrži informacije o:
>> **Stavka troška** i **Opis stavke troška**: mogu se odabrati samo *Stavke troška* s *Vrsta troška = Opći trošak*.
>> **Vrsta troška**: informacije samo za čitanje koje prikazuju *Vrstu troška* povezanu s odabranom *Stavkom troška*.
>> **Postotak / Vrijednost**: informacije samo za čitanje koje prikazuju metode izračuna koje će se primijeniti na *Vrijednost* (*Postotak* ili *Fiksna vrijednost*).
>> **Vrijednost**: ovo je *Postotak* koji će se primijeniti ili *Vrijednost* koja će se dodati *Ukupnom iznosu pritužbe*.
>> **Napomena**: Napomene u slobodnom obliku.
>>   
> **Ostali troškovi**   
> Popis ostalih troškova. Ovaj popis sadrži informacije o:
>> **Troškovnoj stavci** i **Opisu troškovne stavke**: mogu se odabrati samo *Troškovne stavke* s *Vrsta troška = Ostali trošak*.
>> **Vrsta troška**: informacije samo za čitanje koje prikazuju *Vrstu troška* povezanu s odabranom *Troškovnom stavkom*.
>> **Mjerna jedinica**: ovo je *Mjerna jedinica* koja se koristi za izražavanje informacija o *Količini*.
>> **Količina**: ovo je *Količina* *Troškovne stavke*.
>> **Jedinična cijena**: ovo je *Jedinična cijena* *Troškovne stavke*.
>> **Ukupna cijena**: informacije samo za čitanje koje prikazuju umnožak *Količine* i *Jedinične cijene*.
>> **Napomena**: Napomene u slobodnom obliku.  


### Vrijednosti

U karticu se mogu unijeti podaci koji se odnose na potražne (odobrenja) i dugovne (zaduženja) dokumente za *Reklamaciju*, nastale troškove i one koji će se knjižiti pošiljatelju *Reklamacije*. Uključene informacije su:
> **Valuta**, **Tečaj** i **Datum valute**: Ovo je *Valuta* pošiljatelja *Reklamacije*, koja navodi sve vrijednosti dokumenata, odgovarajući tečaj prema *Valuti* *Tvrtke* i *Datum valute*.
> **Referentni dokument zaduženja**: ovo je referenca na *Zaduženje* primljeno od *Kupca*.
> **Napomen na dokumentu odobrenja**: napomene u slobodnom obliku o predmetu.  
>   
> **Ukupni iznos reklamacija**: podaci samo za čitanje ako je u *Parametrima reklamacija i neusklađenosti*, za datum godine dokumenta, odjel *Reklamacije*, zatražen *Automatski ponovni izračun ukupnih iznosa*; predlaže se zbroj komponente troškova obrade prerađenih *Neispravnih stavki*. 
>   
> **Ukupni direktni troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Izravni troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni generalni troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.
>
> **Ukupni ostali troškovi**: informacije samo za čitanje, to je zbroj *vrijednosti* primijenjenih s popisa *Ostali troškovi* na kartici *Ostali troškovi*.   
>   
> **Trošak upravljanja**: je *Trošak upravljanja* preuzet iz *Troška upravljanja* prisutnog u *Parametrima pritužbi i neusklađenosti*, za datum godine dokumenta, odjel *Reklamacije*; vrijednost se može promijeniti.  
>   
> **Vrijednost koja se naplaćuje**: je *Vrijednost koja će biti uplaćena* pošiljatelju *Reklamacije*; ako je *Automatski ponovni izračun ukupnih iznosa* zatražen u *Parametrima Reklamacija i Nesukladnosti* za datum godine dokumenta, odjel *Nesukladnosti*, vrijednost se predlaže kao jednaka zbroju *Prihvaćene vrijednosti* *Neispravnih stavki* i naknadno se može izmijeniti.    
>
> **Valorizirano** i **Referenca dokumenta odobrenja**: informacije samo za čitanje koje pokazuju je li *Reklamacija* procijenjena i je li generirana referenca na *Odobrenje*   
   
   
Naknadni načini upravljanja razlikuju se ovisno o *Modelu* navedenom u *Vrsti reklamacije*: *Upravljanje nedostacima* ili *8D - Rješavanje problema*:
> ### [Upravljanje nedostacima](/docs/quality/claims-and-non-compliance/claims/claim-dm)   
>   
> ### [8D Rješavanje problema](/docs/quality/claims-and-non-compliance/claims/claim-8d)


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke značajke, gumbi i polja](/docs/guide/common).   