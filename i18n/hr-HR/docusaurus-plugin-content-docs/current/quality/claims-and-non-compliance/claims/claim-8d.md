---
title: Reklamacije - 8D rješavanje problema
sidebar_position: 3
---


## Predmeti reklamacije

Ovo je popis *Predmeta reklamacije* i sastoji se od sljedećih informacija:
> **Predmet**   
>> **Barkod**: može se koristiti za dodavanje ili zamjenu artikla, serije, serijskog broja i jedinice utovara.   
>> Za sve informacije o kodiranju barkodova pogledati stranicu [Barkod numeracija](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Klasa**: ovo je *Klasa artikla* za koju se traži reklamacija.   
>> **Šifra artikla**: ovo je šifra *artikla* reklamacije.   
>> **Opis predmeta**: Ovo je opis *predmeta* reklamacije.   
>> **Varijanta**: ovo je šifra varijante *artikla*.   
>> **Lot**: je interna šifra *lota* traženog *artikla*.   
>> **Serijski broj**: Ovo je *serijski broj* *artikla*.   
>> **Utovarna jedinica**: Ovo je originalna *utovarna jedinica* koja je sadržavala *artikl*.   
>> Umetanjem *jedinice za utovar* automatski se stavljaju svi retci s detaljima *artikla* koji se u njoj nalaze.  
>> Ako je u *Parametrima neusklađenosti*, za godinu datuma dokumenta, u sekciji *Reklamacije*, označeno *razvrstavanje podataka utovarne jedinice*, retci s jednakim *artiklima* bit će prikazani u jednom retku s dodanim količinama.   
>  
> **Kvaliteta**   
>> **Mjerna jedinica**: *Mjerna jedinica* traženog *artikla*.
>> **Prodano**: ovo je količina *artikla* prodanog pošiljatelju *Reklamacije*; ovu vrijednost potrebno je unijeti ručno.  
>> **Osporeno**: ovo je količina *artikla* koju je pošiljatelj *Reklamacije* osporio; vrijednost se mora unijeti ručno.   
>> **Povrat**: ovo je količina *artikla* koju je vratio pošiljatelj *Reklamacije*; vrijednost se mora unijeti ručno.   
>> **Prerađeno**: ovo je količina *artkla* koju je preradio podnositelj *Reklamacije*; ovu vrijednost potrebno je unijeti ručno.   
>> **Prihvaćeno**: ovo je prihvaćena količina *artikla*; ovu vrijednost potrebno je unijeti ručno.
>
> **Vrijednost**   
>> **Reklamirano**: ovo je vrijednost koju je zatražio pošiljatelj *Reklamacije*; ovu vrijednost potrebno je unijeti ručno.
>> **Prihvaćeno**: ovo je prihvaćena vrijednost; vrijednost se mora unijeti ručno.
>
> **Povrat”**   
>> **Ovlaštenje za povrat**: označava da se odobrava povrat vraćenog *Artikla* za *Prihvaćenu količinu*.   
>> **Očekivani datum povrata**: ovo je očekivani datum povrata vraćenog *Artikla*.   
>> **Lot**: je *povratni lot* vraćenog *Artikla*.   
>> **Serijski broj**: Ovo je *serijski broj* vraćenog *artikla*.   
>> **Jedinica utovara**: je *Jedinica utovara* vraćenog *artikla*.   


### Podaci o predmetu

Ovo su dodatne informacije za odabrani redak *reklamacije*. Informacije su:   
> **Projekt**: To je referenca na *Projekt* određenog *nedostatka*.   
> **Napomene o artiklu**: slobodne napomene o *artiklu* određenog *nedostatka*.  
> **Napomene o lotu**: slobodne napomene o *lotu* određenog *nedostatka*.   
> **Napomene o jedinici utovara**: slobodne napomene o *Jedinici utovara* za određeni *nedostatak*.   
> **Napomena**: napomena za određeni *nedostatak*. 
> **DDT kupca**: je referenca na *prodajni dokument* (*Vrsta*, *Godina* i *Broj*), za koji se pretpostavlja da je *artikl* prodan.   
> **Prodajni račun**: je referenca na *Prodajni račun* (*Vrsta*, *Godina* i *Broj*) za koji se pretpostavlja da je *artikl* fakturiran. 
> **Potvrda o primitku robe**: je referenca na *Potvrdu o primitku robe* (*Vrsta*, *Godina* i *Broj*), s kojom pošiljatelj vraća *artikl*.   
> **DDT nabave**: je referenca na *Potvrdu o kupnji* (*Vrsta*, *Godina* i *Broj*), s kojom pošiljatelj vraća *artikl*.   

### Dodatni podaci

Moguće je umetnuti neke [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabrani *predmet reklamacije*.   


### Povezani dokumenti

Ovdje se mogu umetnuti i pregledati svi dokumenti priloženi odabranom *predmetu reklamacije*.   


## Upravljanje 8D


### Tim

Ovo je skupina resursa koji će sudjelovati u upravljanju *Reklamacijom* i sastoji se od sljedećih informacija:   
> **Funkcija tvrtke**   
>> **Šifra**: to je šifra *Funkcije tvrtke* koja će biti uključena.   
>> **Opis**: je opis *Funkcije tvrtke* koja će biti uključena.   
>   
> **Zaposlenik**
>> **Šifra**: je šifra *zaposlenika* koji će biti uključen.   
>> **Prezime**: je prezime *zaposlenika* koji će biti uključen.   
>> **Ime**: ime *zaposlenika* koji će biti uključen.   
>   
> **Voditelj**: označava da je osoba koja će biti uključena/uključene *Voditelj tima*.   
> **Opis predmeta**: slobodna napomena u slučaju da predmet koja će biti uključena/uključene nije *Funkcija tvrtke* ili *Zaposlenik*.   
> **Napomena**: slobodne bilješke.   


### Mjere suzbijanja

To su neposredne mjere koje će se poduzeti dok se ne provedu trajne korektivne mjere.   
To će osigurati da se prijavljeni problem ne ponovi i sastoje se od sljedećih informacija:  
> **Podaci o akciji**   
>> **Slijed**: to je *Slijed* prikazivanja *Mjera suzbijanja*; predlaže se progresivni slijed s mogućnošću mijenjanja.   
>> **Mjera suzbijanja**: slobodna bilješka o *Mjeri suzbijanja* koja će se provesti.   
>> **Rok dospijeća**: ovo je datum do kojeg se moraju dovršiti aktivnosti povezane s *Mjerom suzbijanja*.  
>> **Provedeno**: Označava da je *Mjeri suzbijanja* dovršena.   
>> **Datum provedbe**: Ovo je datum na koji je *Mjera suzbijanja* dovršena.   
>
> **Funkcija tvrtke**   
>> **Šifra**: to je šifra *Funkcije tvrtke* koja će biti uključena.   
>> **Opis**: je opis *Funkcije tvrtke* koja će biti uključena.      
>   
> **Zaposlenik**
>> **Šifra**: je šifra *zaposlenika* koji će biti uključen.   
>> **Prezime**: je prezime *zaposlenika* koji će biti uključen.   
>> **Ime**: ime *zaposlenika* koji će biti uključen.    
>   
> **Referenca korektivnih mjera**   
>> **Vrsta**, **Godina** i **Broj**: ovo su reference samo za pregled *Korektivne mjere* povezanu s retkom *Mjere suzbijanja* i generiranu putem gumba **Stvori korektivnu mjeru**.   
>   
> **Opis predmeta**: napomena u slučaju da osoba odgovorna za radnju nije *Funkcija tvrtke* ili *Zaposlenik*.  
> **Napomena**: slobodne bilješke. 


### Uzrok

Ovo su potencijalni *uzroci* koji bi mogli objasniti zašto se problem pojavio dodjeljivanjem postotka vjerojatnosti.   
> **Slijed**: je *Slijed* prikazivanja *Uzroka*; predlaže se progresivni slijed s mogućnošću promjene.   
> **Uzrok** i **Opis uzroka**: Ovo je uzrok koji je vjerojatno generirao problem; mogu se unijeti samo aktivni *Uzroci* koji su obuhvaćeni *Reklamacijama*.  
> **Dodatni opis**: slobodne bilješke o *Uzroku*.
> **Vrsta uzroka**: ovo je vrsta uzroka; postoje dvije vrste: vrsta koja je omogućila generiranje *Događaja* i vrsta koja je omogućila *Bijeg* bez otkrivanja *Događaja*.  
> **Težina (%)**: Ovo je težina (izražena kao postotak) svakog pojedinog *Uzroka*. Zbroj svih težina mora biti 100%.  
> **Podaci o problemu**: slobodna bilješka o temi/predmetu.  
> **Napomena**: slobodne bilješke.  


### Trajne radnje

To su trajne radnje (mjere) koje će se poduzeti, imajući na umu da, osim što će riješiti problem, neće uzrokovati neželjene nuspojave.
Popis se sastoji od sljedećih informacija:   
> **Podaci o radnji** 
>> **Slijed**: je *Slijed* prikaza *trajnih radnji*; predlaže se progresivni slijed s mogućnošću mijenjanja.   
>> **Trajna radnja**: slobodna napomena o *trajnoj radnji* koja će se izvršiti.  
>> **Uzrok izvora** i **Opis uzroka izvora**: ovo je uzrok, među onima prethodno navedenima na kartici **Uzroci**, na temelju kojeg će se izvršiti *Radnja*.   
>> **Rok dospijeća**: ovo je datum do kojeg se moraju dovršiti aktivnosti povezane s *trajnom radnjom*.   
>> **Provedeno**: označava da je *Trajna radnja* dovršena i da je *Datum provedbe* automatski postavljen na današnji datum, s mogućnošću promjene.   
>> **Datum provedbe**: ovo je datum kada je *Trajna radnja* dovršena. Zastavica *Prevedeno* postavlja se kada se unese datum.   
>
> **Funkcija tvrtke**   
>> **Šifra**: to je šifra *Funkcije tvrtke* koja će biti uključena.   
>> **Opis**: je opis *Funkcije tvrtke* koja će biti uključena.      
>   
> **Zaposlenik**
>> **Šifra**: je šifra *zaposlenika* koji će biti uključen.   
>> **Prezime**: je prezime *zaposlenika* koji će biti uključen.   
>> **Ime**: ime *zaposlenika* koji će biti uključen.    
>   
> **Referenca na korektivne radnje**   
>> **Vrsta**, **Godina** i **Broj**: ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom *Trajna radnja* i generiranu pomoću gumba **Stvori korektivnu radnju**.   
>   
> **Opis predmeta**: napomene ako osoba odgovorna za radnju nije *Funkcija tvrtke* ili *Zaposlenik*.
> **Napomene**: slobodne napomene.   


### Validiranje radnji

Unaprijed popunjen popis svih prethodno unesenih i dovršenih *Trajnih Radnji*. Ovaj se popis koristi za provjeru jesu li *Radnje* dovršene do planiranih rokova te za procjenu njihove provedbe i učinkovitosti. Stoga, nije moguće dodavati nove *Radnje* ili brisati postojeće s ovog popisa. Popis sadrži sljedeće informacije:  
> **Podaci o provedenoj radnji**  
>> **Slijed**: Ovo je *Slijed* u kojem je prikazana *Trajna radnja*; prikazan je progresivni broj *Trajne radnje*. Ove su informacije samo za čitanje.   
>> **Trajna radnja**: izvršena *Trajna radnja*. Ove su informacije samo za čitanje.
>> **Uzrok izvora** i **Opis uzroka izvora**: ovo je *Uzrok izvora* izvršene *Trajne radnje*. Ove su informacije samo za čitanje.   
>
> **Podaci o validaciji za poduzete radnje**  
>> **Potvrđeno**: Ovo je datum na koji je *Trajna radnja* potvrđena.   
Prilikom unosa bilo kojeg drugog podatka, on se automatski prikazuje kao trenutni datum, s mogućnošću promjene.   
>> **Testovi provedeni radi provjere učinkovitosti djelovanja**: slobodna bilješka.  
>
> **Potvrda od strane funkcije tvrtke**   
>> **Šifra**: ovo je šifra *Funkcije tvrtke* odgovorne za validaciju.
>> **Opis**: ovo je opis *Funkcije tvrtke* odgovorne za validaciju. 
>   
> **Potvrda od strane zaposlenika**   
>> **Šifra**: je šifra *zaposlenika* koji je uključen.   
>> **Prezime**: je prezime *zaposlenika* koji je uključen.   
>> **Ime**: ime *zaposlenika* koji je uključen.   
>   
> **Opis predmeta**: slobodna napomena u slučaju da osoba odgovorna za *Radnju* nije *Funkcija u poduzeću* ili *Zaposlenik*.  


### Faze

Ovo su druge radnje/aktivnosti u kojima treba provesti daljnje radnje. Popis uključuje sljedeće informacije: 
> **Identificirani i/ili provedeni koraci**   
>> **Slijed**: je *Slijed* prikazivanja *Faze*.   
>> **Aktivnost koju treba poduzeti**: slobodna bilješka o *Aktivnosti* koju treba poduzeti za dovršetak faze.  
>> **Očekivani datum provedbe**: ovo je očekivani datum završetka *Aktivnosti*.   
>> **Provedena aktivnost**: bilješka o *Aktivnosti* provedenoj za dovršetak faze.   
>> **Datum provedbe**: ovo je stvarni datum završetka *Aktivnosti*.   
>
> **Potvrda od strane funkcije tvrtke**  
>> **Šifra**: ovo je šifra *Funkcije tvrtke* odgovorne za validaciju.
>> **Opis**: ovo je opis *Funkcije tvrtke* odgovorne za validaciju. 
>   
> **Potvrda od strane zaposlenika**   
>> **Šifra**: je šifra *zaposlenika* koji je uključen.   
>> **Prezime**: je prezime *zaposlenika* koji je uključen.   
>> **Ime**: ime *zaposlenika* koji je uključen.     
>   
> **Referenca na korektivne radnje**   
>> **Vrsta**, **Godina** i **Broj**: ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom *Aktivnosti* i generiranu pomoću gumba **Stvori korektivnu radnju**.    
>   
> **Opis predmeta**: napomene u slobodnom obliku ako osoba odgovorna za *Aktivnost* nije *Funkcija tvrtke* ili *Zaposlenik*.
> **Napomene**: Napomene u slobodnom obliku.  


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Zajedničke značajke, gumbi i polja](/docs/guide/common).   