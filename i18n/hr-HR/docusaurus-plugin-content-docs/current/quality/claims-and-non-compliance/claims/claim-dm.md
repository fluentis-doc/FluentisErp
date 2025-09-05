---
title: Reklamacije - Upravljanje nedostacima
sidebar_position: 4
---


## Upravljanje nedostacima

Ovo je popis nedostataka koje je pronašao pošiljatelj dokumenta i sastoji se od sljedećih informacija:  
> **Slijed**: ovo je *Slijed* za prikaz nedostataka; predlaže se progresivni slijed s mogućnošću promjene.   
>  
> **Pronađen nedostatak**
>> **Šifra**: ovo je šifra *Pronađenog nedostatka*; moguće je unijeti samo *Nedostatke* koji su aktivni i predviđeni vrstom *Reklamacije* dokumenta.   
>> **Opis**: informacije samo za čitanje koje opisuju *Pronađeni nedostatak*.
>> **Napomene**: slobodno napisani komentari o *Pronađenom nedostatku*.  
>  
> **Pretpostavljeni uzrok**
>> **Šifra**: ovo je šifra *Pretpostavljenog uzroka* koji je generirao nedostatak; moguće je unijeti samo *Uzroke*, pretpostavljene, aktivne i predviđene vrstom *Reklamacije* dokumenta; *Pretpostavljeni uzrok*, nakon analize *Neispravnih predmeta*, može se potvrditi ili ne u *Stvarnom uzroku*.  
>> **Opis**: informacije samo za čitanje koje opisuju *Pretpostavljeni uzrok*.
> **Napomene**: napomene u slobodnom obliku o *Pretpostavljenom uzroku*.  
>  
> **Faza detekcije**
>> **Šifra**: je šifra *Faze detekcije* procesa u kojem je pronađen kvar; moguće je unijeti samo aktivne *Faze detekcije*.
>> **Opis**: informacije samo za čitanje koje opisuju *Fazu otkrivanja*.
>> **Napomene**: napomene u slobodnom obliku o *Fazi otkrivanja*.  
>  
> **Količina**
> Sažetak informacija koristi se isključivo ako se ne žele detaljno navesti *Količine* u odjeljku *Reklamiranim predmetima*. Ove *Količine* se ne uzimaju u obzir ni u kakvim izračunima**.   
>> **Prodano**: ovo je količina *artikala* prodanih pošiljatelju *reklamacije*.   
>> **Osporeno**: količina *artikala* koje je pošiljatelj *reklamacije* osporio.  
>> **Povrat**: predstavlja količinu *artikala* koje je vratio pošiljatelj *reklamacije*.  
>   
> **Referenca na korektivne radnje**  
>> **Vrsta**, **Godina** i **Broj**: ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom '*Nedostatak*' i generiranu pomoću gumba **Stvori korektivnu radnju**. 
>   
> **Pod jamstvom**: ručna naznaka je li *Pronađeni nedostatak* pokriven jamstvom. Ova se informacija ne uzima u obzir u izračunima.  
> **Zatvoreno**: označava da je upravljanje *Kvarom* završeno; operater ovo mora ručno naznačiti.   
> Prilikom zatvaranja, automatski se predlažu sljedeći podaci: *Datum zatvaranja*, predložen kao današnji datum s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezani i *Zaposlenik* povezan s *A.R.M. korisnikom* (*Datum zatvaranja*, *Ime* i *Osoba* su informacije prisutne na kartici *Zadani podaci*).  
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Zahtjev*.  
> **Napomena**: slobodne bilješke.   


### Podaci o nedostacima

Ovo su dodatne informacije za odabrani redak *Nedostatak*. Upravljane informacije su:   
> **Stupanj ozbiljnosti** je *Stupanj ozbiljnosti* pripisan kvaru; mogu se unijeti samo aktivni *Stupnji ozbiljnosti*.   
> **Stvarni uzrok**: ovo je stvarni uzrok koji je generirao nedostatak; moguće je unijeti samo *Uzroke*, učinkovite, aktivne i predviđene vrstom *Reklamacije* dokumenta.  
> **Bilješke o stvarnom uzroku**: slobodne bilješke o *stvarnom uzroku*.   
> **Predloženo rješenje**: ovo je predloženo tehničko/komercijalno/administrativno rješenje koje treba usvojiti; mogu se unijeti samo aktivna *Rješenja*.   
> **Bilješke o predloženom rješenju**: bilješke o *Predloženom rješenju*.   
> **Donesena odluka**: Ovo je tehnička/komercijalna/administrativna odluka donesena za rješavanje nedostatka; mogu se unijeti samo aktivne *Odluke*.   
> **Bilješke o donesenoj odluci**: bilješke o *Donesenoj odluci*.   
> **Komercijalna odluka**: Ovo je komercijalna/administrativna odluka donesena za rješavanje nedostatka; mogu se unijeti samo aktivne *Odluke*.   
> **Bilješke o komercijalnom rješenju**: bilješke o *Komercijalnom rješenju*.   
> **Datum zatvaranja**: ovo je datum na koji je dovršeno upravljanje određenim *Nedostatkom*.   
> Prilikom unosa datuma, automatski se postavlja oznaka *Zatvoreno* u odabranom retku *Nedostatak*.  
> **Ime**: Ovo je *A.R.M. korisnik* koji je zatvorio *Nedostatak*. Ove informacije su samo za čitanje.   
> **Osoba**: Ovo je *Zaposlenik* koji je zatvorio *Nedostatak*. Ove informacije su samo za čitanje.   
> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Nedostatak*.   


### Predmeti reklamacije

To je popis *Reklamiranih artikala/predmeta* koji se mogu povezati s odabranim *Pronađenim nedostatkom* i sastoji se od sljedećih informacija:  
> **Predmet**   
>> **Bar kod**: može se koristiti za dodavanje ili zamjenu artikla, serije, serijskog broja i jedinice utovara.   
>> Za sve informacije o kodiranju barkodova pogledati stranicu [Barkod numeracija](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Klasa**: ovo je *Klasa artikla* za koju se traži reklamacija.   
>> **Šifra artikla**: ovo je šifra *artikla* za koji se traži reklamacija.  
>> **Opis artikla**: ovo je opis *artikla* za koji se traži reklamacija.   
>> **Varijanta**: ovo je šifra varijante *artikla* za koji se traži reklamacija.   
>> **Lot**: je interna šifra *Lota* zatraženog *Artikla*. 
>> **Utovarna jedinica**: Ovo je originalna *Utovarna jedinica* koja je sadržavala zatraženi *artikl*.   
>> Umetanjem *utovarne jedinice* automatski se umeću svi retci s detaljima *artikla* koji se u njoj nalaze.   
>> Ako je u *Parametrima pritužbi i neusklađenosti*, za datum dokumenta po godini, u odjelu *Rewklamacije*, zatraženo *UDC grupiranje podataka*, retci s jednakim *Artiklima* bit će prikazani u jednom retku s dodanim količinama.   
>> **Serijski broj**: Ovo je *serijski broj* *artikla* za koji se traži reklamacija.   
>  
> **Količina**   
>> **Mjerna jedinica**: to je *Mjerna jedinica* zatraženog *artikla*, informacije samo za čitanje.  
>> **Prodano**: ovo je količina *Artikla* prodanog pošiljatelju *Reklamacije*; ovu vrijednost potrebno je unijeti ručno. 
>> **Osporeno**: ovo je količina *Artikla* koju je pošiljatelj *Reklamacije* osporio; vrijednost se mora unijeti ručno.  
>> **Povrat**: ovo je količina *Artikla* koju je vratio pošiljatelj *Reklamacije*; vrijednost se mora unijeti ručno.   
>> **Prerađeno**: ovo je količina *Artikla* koju je preradio podnositelj *Reklamacije*; ovu vrijednost potrebno je unijeti ručno.  
>> **Prihvaćeno**: ovo je količina prihvaćenog *Artikla*; ovu vrijednost potrebno je unijeti ručno.  
>
> **Vrijednost**
>> **Reklamirano**: ovo je vrijednost koju je zatražio pošiljatelj *Reklamacije*; ovu vrijednost treba unijeti ručno.
>> **Prihvaćeno**: ovo je prihvaćena vrijednost; ovu vrijednost treba unijeti ručno.
>
> **Podaci o povratu**   
>> **Ovlaštenje za povrat**: označava da se odobrava povrat vraćenog *Artikla* za *Prihvaćenu količinu*.
>> **Očekivani datum povrata**: ovo je očekivani datum povrata vraćenog *Artikla*.   
>> **Lot**: je povratni *lot* vraćenog *Artikla*.   
>> **Serijski broj**: ovo je *serijski broj* vraćenog *Artikla*.   
>> **Utovarna jedinica**: je *Utovarna jedinica* vraćenog *Artikla*.   


#### Podaci o predmetu

Ovo su dodatne informacije za odabrani redak *Reklamiranog artikla/predmeta*. Upravljane informacije su:   
> **Projekt**: ovo je referenca na *projekt* određenog *nedostatka*.   
> **Napomene o artiklu**: napomene o *artiklu* određenog *nedostatka*.   
> **Napomene o lotu**: napomene o *lotu* određenog *nedostatka*.
> **Napomene o utovarnoj jedinici**: napomene za *Utovarna jedinica* određenog *nedostatka*.
> **Napomene**: napomene u slobodnom obliku na retku određenog *nedostatka*.  

> **Otpremnica kupcu**: je referenca na *prodajni dokument* (*Vrsta*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodana. 
> **Prodajni račun**: je referenca na *Prodajni račun* (*Vrsta*, *Godina* i *Broj*) za koji se pretpostavlja da je sporna roba ili usluga fakturirana.   
> **Potvrda o primitku robe**: je referenca na *Potvrdu o primitku robe* (*Vrsta*, *Godina* i *Broj*), s kojom pošiljatelj vraća spornu robu.   
> **Dokument nabave**: je referenca na *prodajni dokument* (*Vrsta*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodana.   


#### Dodatni podaci

Mogu se unijeti [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabrani *Reklamirani artikl/predmet*.  


### Povezani dokumenti

U ovom pregledu mogu se umetnuti i pregledati svi dokumenti priloženi odabranom *Reklamiranom artiklu*.   


### Korišteni materijali

Na ovom popisu možete navesti materijale korištene za otklanjanje odabranog *Nedostatka*.
Popis uključuje sljedeće informacije:   
>   
> **Artikl**   
>> **Klasa**: to je *klasa artikla*.   
>> **Šifra**: to je šifra *artikla*.   
>> **Opis**: opis *artikla*.   
>> **Varijanta**: varijanta *artikla*.   
>> **Lot**: to je interni lot artikla.   
>> **Serijski broj**: korišteni serijski broj.   
>   
> **Količina**   
>> **Mjerna jedinica**: *Mjerna jedinica* *artikla*, samo za čitanje  
>> **Potrošena količina**: ovo je količina *artikla* korištena za otklanjanje odabranog *nedostatka*.
>   
> **Vrijednost**
>> **Jedinična cijena**: ovo je jedinična cijena *artikla*; vrijednost se mora unijeti ručno.
>> **Ukupna cijena**: ovo je omjer između *Potrošene količine* i *Jedinične cijene*; cijena se može mijenjati.  
>
> **Napomena**: slobodne bilješke.   


### Uključeni subjekti

Kartica sadrži informacije o *Funkcijama tvrtke* i/ili *Zaposlenicima* koji će biti uključeni u upravljanje odabranim *Nedostatkom*.
Popis se sastoji od sljedećih informacija:  
> **Slijed**: je *Slijed* prikaza "Uključenih subjekata*; predlaže se progresivni broj s mogućnošću promjene.  
>
> **Funkcija tvrtke**
>> **šifra**: ovo je šifra uključene *Funkcije tvrtke*.
>> **Opis**: ovo je opis uključene *Funkcije tvrtke*.   
>   
> **Zaposlenik**
>> **Šifra**: ovo je šifra uključenog *zaposlenika*.
>> **Opis**: ovo je prezime i ime uključenog *zaposlenika*. 
>   
> **Upravljanje angažmanom**   
>> **Opis predmeta**: napomena u slučaju da tema/predmet nije *Funkcija tvrtke* ili *Zaposlenik*.
>> **Razlog sudjelovanja**: slobodne bilješke o temi/predmetu.  
>> **Datum isteka**: ovo je datum do kojeg uključena osoba mora dovršiti aktivnosti povezane s razlogom svog sudjelovanja.  
>> **Odgovor**: slobodne bilješke o temi/predmetu.   
>> **Zatvoreno**: označava da je angažman ispitanika završen.   
>> Samo *Funkcija ili osoba odgovorna* za *Reklamaciju* ili *Funkcija tvrtke* ili uključeni *Zaposlenik* može zaključiti angažman.  
>> Prilikom zatvaranja, *Datum zatvaranja* se automatski predlaže, predlaže se kao današnji datum i može se promijeniti.   
>> **Datum zatvaranja**: ovo je datum kada je sudjelovanje ispitanika završeno.  
>> Samo *Funkcija ili odgovorna osoba* za *Reklamaciju* ili *Funkcija tvrtke* ili uključeni *Zaposlenik* može umetnuti ili promijeniti ovaj datum.
>> Kada unesete datum, automatski se postavlja oznaka *Zatvoreno*.   
>
> **Napomena**: slobodne bilješke.     


### Dodatni podaci

Moguće je umetnuti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabrano *Nedostatak*.   


### Povezani dokumenti

U ovom popisu mogu se umetnuti i pregledati svi dokumenti priloženi odabranom *Nedostatku*.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).   