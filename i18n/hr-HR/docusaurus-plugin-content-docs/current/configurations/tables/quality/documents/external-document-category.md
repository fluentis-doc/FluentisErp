---
title: Kategorije dokumenata vanjskog podrijetla
sidebar_position: 1
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Dokumenti > Kategorije dokumenata vanjskog podrijetla**.

:::important Čemu služi
Podaci u ovoj tablici koriste se za kategorizaciju različitih vrsta Dokumenata vanjskog podrijetla.
Podaci uneseni u ovu tablicu prenose se prilikom izrade Dokumenata vanjskog podrijetla. 
Primjer korištenja nalazi se u modulu **Dokumenti vanjskog podrijetla**.
:::

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih kako bi se mogli pregledati, izmijeniti ili izbrisati.

**Pretraživanje Kategorija dokumenata vanjskog podrijetla**

Forma se sastoji od područja za filtriranje i područja rezultata. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na tipku **Traži** kako bi se prikazali rezultati unutar tablice rezultata.  

**Unos Kategorija dokumenata vanjskog podrijetla**

Za unos novih *Kategorija dokumenata vanjskog podrijetla* potrebno je kliknuti u tablicu na prvi prazan redak ili pritisnuti tipku **Novo**.   
Za novi zapis potrebno je unijeti najmanje obavezna polja koja zahtijeva program: **Šifra** i **Opis**.

**Dupliciranje Kategorije dokumenata vanjskog podrijetla**

Za dupliciranje postojeće *Kategorije dokumenta* u novu *Kategoriju dokumenta* potrebno je u mreži označiti *Kategoriju dokumenta* koju želite duplicirati i pritisnuti tipku **Dupliciraj**.   
Prikazat će se zahtjev za unos **Koda** i **Opisa** nove *Kategorije dokumenta* (oba podatka su obavezna).    
Zatim pritisnite tipku **OK** za potvrdu ili **Otkaži** ako želite prekinuti postupak dupliciranja.

## Kategorije dokumenata vanjskog podrijetla  

Ovo je popis u koji se unose osnovne informacije o *Kategoriji dokumenta*.   
Popis sadrži sljedeće informacije:     
> **Kategorija**: kod *Kategorije dokumenta*.   
> **Opis kategorije**: opis *Kategorije dokumenta*.   
> **Arhiva**: označava skladište u kojem se nalazi određena kategorija.   
> **Lokacija**: fizička lokacija gdje se uobičajeno nalazi *Kategorija*; moguće je odabrati samo *Lokacije* koje pripadaju odabranoj *Arhivi*.  
> **Opis lokacije**: ako lokacija nije kodificirana, može se ručno unijeti u ovo slobodno polje.  
> **Razdoblje zadržavanja**: razdoblje čuvanja koje se unosi ručno.    
> **Odgovorna funkcija**: *Poslovna funkcija* odgovorna za tu *Kategoriju*.   
> **Napomene**: slobodne bilješke.  

### Distribucijska lista

U ovom popisu moguće je povezati: *Poslovne funkcije*, *Zaposlenike*, *Kupce/Dobavljače* i *Kontakte* koji uobičajeno primaju kopiju *Kategorije dokumenta* te odrediti standardne načine dostave.  
Popis sadrži sljedeće informacije:  
> **Poslovna funkcija**   
>> **Šifra**: kod *Poslovne funkcije* primatelja.    
>> **Opis**: opis *Poslovne funkcije* primatelja  
>
> **Zaposlenik**   
>> **šifra**: kod *Zaposlenika* primatelja.   
>> **Prezime**: prezime *Zaposlenika* primatelja.   
>> **Ime**: ime *Zaposlenika* primatelja.   
>
> **Kupac/Dobavljač**   
>> **Opis**: naziv tvrtke *Klijenta* ili *Dobavljača* primatelja.   
>
> **Kontakt**   
>> **šifra**: kod *Kontakta* primatelja.   
>> **Opis**: opis *Kontakta* primatelja.   
>
> **Drugi primatelj**   
>> **Opis**: slobodan opis primatelja koji nije kodificiran.    
>
> **Podaci za dostavu**   
>> **Na papiru**: označava da, u trenutku distribucije (unutarnji postupak u okviru modula *Dokumenti vanjskog podrijetla*) subjekt želi primiti *tiskanu kopiju* dokumenta ili kopiju u privitku putem *E-maila*.   
>> **Vrsta obavijesti**: označava uobičajenu metodu isporuke za *Kategoriju dokumenta*.   
>> **E-mail**: označava adresu e-pošte primatelja, ako nije definirana u matičnim podacima primatelja.    
>> **Broj kopija**: označava broj tiskanih kopija koje primatelj želi primiti.    
>> **Napomene**: slobodne napomene   

*Specifične tipke*:      
**Novi primatelj**: umeće novi redak u popis.     
**Izbriši primaoca**: briše odabrani redak iz popisa.     

### Dopušten pristup funkcijama  
U ovaj se popis mogu unijeti *poslovne funkcije* kojima će se dodijeliti prava pristupa.    
Ako se u ovoj tablici ne unese nijedan redak, pristup je omogućen svima.     
Popis se sastoji od sljedećih informacija:    
> **Funkcija**: kod *poslovne funkcije*.     
> **Opis funkcije**: opis *poslovne funkcije*.   
> **Napomene**: slobodne bilješke.  

*Specifične tipke*:      
**Nova funkcija pristupa (prijave)**: umeće novi redak u popis.     
**Izbriši funkciju pristupa (prijave)**: briše odabrani redak iz popisa.   

### Dodatni podaci  
Moguće je unijeti [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *dokument vanjskog podrijetla*.     
Ti *Extra data* mogu se naslijediti u *vanjski dokument* određene kategorije.     

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).