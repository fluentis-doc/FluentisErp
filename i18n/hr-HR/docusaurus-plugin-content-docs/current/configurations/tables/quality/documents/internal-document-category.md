---
title: Kategorije dokumenata internog podrijetla  
sidebar_position: 2
---

Tablica se nalazi na putu **Tablice > Kvaliteta > Dokumenti > Kategorije dokumenata internog podrijetla**.

:::important Čemu služi  
Podaci u ovoj tablici koriste se za katalogiziranje različitih vrsta dokumenata internog podrijetla.
Podaci uneseni u ove mreže prenijet će se prilikom izrade dokumenata internog podrijetla.
Primjer upotrebe nalazi se u modulu **Dokumenti internog podrijetla**.
:::

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.  

**Pretraga kategorija dokumenata internog podrijetla**

Forma se sastoji od područja za filtriranje i područja s rezultatima. Nakon što se postave svi željeni filtri, dovoljno je kliknuti tipku **Traži** kako bi se rezultati prikazali u mreži s rezultatima.  

**Unos kategorija dokumenata internog podrijetla**  

Za unos novih *kategorija dokumenata internog podrijetla* potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novi**.   
Za novi zapis potrebno je unijeti barem obavezna polja koja program traži: **Šifra** i **Opis**.

**Dupliciranje kategorija dokumenata internog podrijetla**

Za dupliciranje postojeće *kategorije dokumenta* u novu *kategoriju dokumenta* potrebno je kliknuti na *kategoriju dokumenta* koju želite duplicirati i pritisnuti tipku **Dupliciraj**.   
Zatim će se prikazati zahtjev za unos **šifre** i **opisa** nove *kategorije dokumenta* (oba podatka su obavezna).   
Nakon toga pritisnite tipku **OK** ili **Odustani** ovisno o tome želite li nastaviti s dupliciranjem ili ne.  

## Kategorije dokumenata internog podrijetla

Ovo je popis u koji se unose osnovne informacije o *kategoriji dokumenta*.   
Popis se sastoji od sljedećih informacija:    
> **Kategorija**: šifra *kategorije dokumenta*.   
> **Opis kategorije**: opis *kategorije dokumenta*.   
> **Sekvenca**: redoslijed prikaza u popisu *kategorija dokumenata*.   
> **Obavezni dokument**: označava je li obavezno priložiti dokument.     
> **Automatsko kodiranje**:označava želi li se omogućiti automatsko kodiranje dokumenta; kod će se sastojati od *šifre kategorije* i progresivnog broja s određenim brojem znamenki, počevši od broja navedenog u *Početni progresivni broj*.   
> **Broj progresivnih znamenki**: omogućeno ako je uključeno *automatsko kodiranje*, određuje broj znamenki koje čine kod dokumenta.  
> **Početni progresivni broj**: omogućeno ako je uključeno *automatsko kodiranje* predstavlja početni broj koji će se predložiti pri unosu prvog dokumenta.
> **Funkcija provjere/odobrenja**: *poslovna funkcija* odgovorna za provjeru/odobrenje dokumenta.  
> **Funkcija izrade/izdavanja**: *poslovna funkcija* odgovorna za izradu/izdavanje dokumenta.  
> **Vrsta dokumenta**: šifra *vrste dokumenta* predložene za kodiranje priloženog dokumenta u *dokumentnom sustavu*.   
> **Opis vrste dokumenta**: opis *vrste dokumenta* predložene za kodiranje priloženog dokumenta u *dokumentnom sustavu*.   
> **Arhiva**: polje u kojem se dodjeljuje skladište povezano s određenom kategorijom.   
> **Lokacija**: označava fizičku lokaciju povezanu s *kategorijom*; moguće je odabrati samo *lokacije* koje pripadaju odabranom *arhivu*.   
> **Opis lokacije**: ako lokacija nije kodirana, može se ručno unijeti u ovo slobodno polje.   
> **Razdoblje čuvanja**: razdoblje čuvanja koje se unosi ručno.  
> **Odgovorna funkcija**: *poslovna funkcija* odgovorna za *kategoriju*.   
> **Napomene**: slobodne bilješke.  

### Lista distribucije  

U ovom popisu moguće je povezati: *poslovne funkcije*, *zaposlenike*, *klijente/dobavljače* i *kontakte* che abitualmente ricevono copia della *Categoria Documento* selezionata ed indicare le metodologie abituali di ricezione del documento.   
L'elenco si compone delle seguenti informazioni:   
> **Grupa**   
>> **Šifra**: šifra *ARM uloge* primatelja.   
>> **Opis**: opis *ARM uloge* primatelja.   
>
> **Korisnik**   
>> **Šifra**: šifra *ARM korisnika* primatelja.   
>> **Opis**: opis *ARM korisnika* primatelja. 
>
> **Poslovna funkcija**
>> **Šifra**: šifra *poslovne funkcije* primatelja.   
>> **Opis**: opis *poslovne funkcije* primatelja. 
>
> **Zaposlenik**
>> **Šifra**: šifra *zaposlenika* primatelja.   
>> **Prezime**: prezime *zaposlenika* primatelja. 
>> **Ime**: ime *zaposlenika* primatelja.  
>
> **Klijent/Dobavljač**
>> **Opis**: naziv *klijenta/dobavljača* primatelja.   
>
> **Kontakt**
>> **Šifra**: šifra *kontakta* primatelja.  
>> **Opis**: opis *kontakta* primatelja.  
>
> **Drugi primatelj**
>> **Opis**: slobodan opis nekodiranog primatelja.   
>
> **Podaci za dostavu**
>> **Tiskano**: označava želi li primatelj prilikom distribucije (interni postupak u upravljanju *dokumentima internog podrijetla*) primiti tiskanu kopiju dokumenta ili ga zaprimiti kao privitak putem *e-pošte*.   
>> **Način dostave**: uobičajena metoda dostave *kategorije dokumenta*.   
>> **Email**: adresa e-pošte ako nije kodirana u evidenciji primatelja.   
>> **Broj kopija**: broj tiskanih kopija koje primatelj želi primiti.     
>> **Napomene**: slobodne bilješke.    

*Specifične tipke*:      
**Novi primatelj**: umeće novi redak u popis.  
**Izbriši primatelja**: briše odabrani redak iz popisa.   

### Dozvoljen pristup funkcijama
U ovaj se popis mogu unijeti *poslovne funkcije* kojima će se dodijeliti prava pristupa.     
Ako se u ovoj tablici ne unese nijedan redak, pristup je omogućen svima.     
Popis se sastoji od sljedećih informacija:     
> **Funkcija**: šifra *poslovne funkcije*.   
> **Opis funkcije**: opis *poslovne funkcije*.     
> **Napomene**: slobodne bilješke.  

*Specifične tipke*:      
**Nova funkcija pristupa**: umeće novi redak u popis.    
**Izbriši funkciju pristupa**: briše odabrani redak iz popisa.    

### Dodatni podaci
Moguće je unijeti [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *dokument internog podrijetla*.   
Ti *Extra data* mogu se naslijediti u *interna dokumenta* određene kategorije.    

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).