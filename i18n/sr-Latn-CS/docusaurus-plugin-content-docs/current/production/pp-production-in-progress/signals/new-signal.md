---
title: Novi signal
sidebar_position: 2
---

Normalno se *Deklaracije signala* automatski generiraju putem Fluentis [MES-a](/docs/production/mes/mes-intro), ali korisnik također ima mogućnost da ih ručno generira koristeći ovaj obrazac.  

Prilikom otvaranja obrasca potrebno je unijeti proizvodni nalog i odgovarajuću fazu/podfazu koju želite prijaviti, čime se automatski učitavaju odgovarajući podaci u gornji dio obrasca.  

U središnju mrežu potrebno je unijeti retke izjave o proizvodnji.   
Prvi podatak koji treba unijeti je *Status deklaracije* koje može imati sljedeće vrijednosti:  

- *Otvaranje*: omogućuje stvaranje prijave početka proizvodnje;     
- *Obustava*: omogućuje stvaranje prijave obustave proizvodnje;      
- *Nastavljanje*: omogućuje stvaranje prijave nastavka proizvodnje; treba se unijeti samo nakon *Obustave*;          
- *Napredovanje*: omogućuje stvaranje prijave napredovanja proizvodnje;     
- *Zatvaranje*: omogućuje stvaranje prijave završetka proizvodnje;      

Svaka izjava o proizvodnji mora imati kao prvi redak izjavu o otvaranju koja određuje trenutak kada počinje obrada.              
Ova izjava može biti praćena napredovanjem ili direktno fazom zatvaranja, ovisno o slučaju. Ključna razlika je u tome što zatvaranje ne dopušta unos dodatnih redaka izjave, dok napredovanje to omogućuje.         
Također, moguće je unijeti izjave o obustavi koje su praćene izjavom o nastavku, u slučaju da je potrebno zaustaviti proizvodnju iz nekog razloga.  

*Posebni gumb*:  

> **Nova deklaracija**: omogućuje unos novog retka izjave;          
> **Novi Prekid / Nastavak**: omogućuje istovremeno unos retka obustave i retka nastavka s pop-up prozorom za unos datuma i vremena za svaku; gumb se aktivira samo ako je posljednje stanje izjave *Otvaranje* ili *Napredovanje*;                   
> **Preračunaj vrijeme stroja**: omogućuje preračunavanje vremena stroja za sve retke izjave;          
> **Preračunaj vrijeme rada**: omogućuje preračunavanje vremena rada za sve retke izjave;           
> **Unesi signal**: omogućuje unos novog retka izjave nakon već unesenih;           
> **Izbriši signal**: mogućuje brisanje odabranog retka izjave;               
> **Upravljanje Transportnom jedinicom**: omogućuje otvaranje *Upravljanja jedinicom iz tereta* filtriranom jedinicom iz tereta koja je povezana s odabranim retkom izjave;          
> **Stvori Transportnu jedinicu**: omogućuje kreiranje jedinice iz tereta povezane s odabranim retkom izjave. Za kreiranje je potrebno prvo ručno unijeti *Tip jedinice iz tereta* i *Zaposlenika*;  
> **Registracija izjave**: omogućuje kreiranje registracije kretanja skladišta povezanog s odabranim retkom izjave;             
> **Povratak izjave**: omogućuje poništavanje registracije kretanja skladišta povezanog s odabranim retkom izjave.                                     

*Specifična polja*: 

**Registrirano**: označava da je redak izjave registriran i da je kreirano odgovarajuće kretanje skladišta;          
**Datum**: označava datum početka vezan za redak izjave;          
**Vrijeme**: označava vrijeme početka vezano za redak izjave;           
**Broj**: progresivni broj koji se dodjeljuje pojedinim redovima izjave (uvijek počinje od 1);          
**Stanje signala**: omogućuje definiranje stanja vezanog za redak izjave. Može imati sljedeće vrijednosti: *Otvaranje*, *Obustava*, *Nastavak*, *Napredovanje* ili *Zatvaranje*;          
**Predložak zastoja**: omogućuje navođenje predložka obustave koji će se koristiti za odgovarajući redak izjave. Omogućuje se samo ako je *Stanje izjave* *Obustava*;       
**Lot**: omogućuje ručni unos broja serije vezane za proizvedenu količinu;      
**Proizvedena količina**: označava proizvedenu količinu vezanu za redak izjave;           
**Alternativna mjerna jedinica**: označava alternativnu jedinicu mjere koja se koristi;       
**Alternativna količina**: označava količinu proizvedenu u alternativnoj jedinici mjere koja se koristi;         
**Skladište za odlaganje**: označava skladište za prijem proizvedene količine;           
**Predložak odlaganja**: označava predložak prijema korišten za proizvedenu količinu;          
**Lokacija prijema**: označava lokaciju prijema proizvedene količine;           
**Otpisana količina**: označava odbijenu količinu vezanu za redak izjave;          
**Skladište za otpad**: označava lokaciju prijema odbijene količine;           
**Predložak otpada**: označava predložak prijema korišten za odbijenu količinu;         
**Lokacija otpada**: označava lokaciju prijema odbijene količine;         
**Strojevi**: označava broj strojeva korištenih za redak izjave;               
**Broj stroja**: označava broj strojeva korištenih za redak izjave;          
**Grupe radne snage**: označava kod grupe radne snage korišten za redak izjave;           
**Broj radnika**: označava broj radnika korištenih za redak izjave;          
**Proizvodno mjesto**: označava kod proizvodne lokacije vezane za redak izjave;       
**Minuti stroja**: označava vrijeme rada stroja u minutama vezano za redak izjave; računa se kao razlika između *datuma/vremena* trenutne izjave i one prethodne;             
**Minuti radne snage**: označava vrijeme radne snage u minutama vezano za redak izjave; računa se kao razlika između *datuma/vremena* trenutne izjave i one prethodne;                
**Minuti za podešavanje**: označava vrijeme podešavanja u minutama vezano za redak izjave; unosi se ručno;           
**Zaposlenik**: označava kod korisnika koji podnosi izjavu;             
**Prezime**: označava prezime korisnika koji podnosi izjavu;            
**Ime**: označava ime korisnika koji podnosi izjavu;           
**Učitavanje jedinice**: označava broj jedinice tereta, koji se sastoji od godine, broja proizvodnog naloga i progresivnog broja;                
**Vrsta jedinice za ućitavanje**: označava tip jedinice tereta;     
**Broj utovarne jedinice**: označava broj jedinice tereta;         
**Numero unità di carico**: indica il numero dell'unità di carico;    
**Jedinica tereta za otpremu**: **Work in progress**       
**Visina**: označava visinu jedinice tereta;    
**Širina**: označava širinu jedinice tereta;    
**Dubina**: označava dubinu jedinice tereta;      
**Opis predloška obustave**: označava opis *Predloška obustave* korištenog u retku izjave;                       
**Opis skladišta za prijem**: označava opis skladišta za prijem proizvedene količine;         
**Opis predloška prijema**: označava opis prijema proizvedene količine;      
**Opis skladišta otpada**: označava opis skladišta prijenosa odbačene količine;      
**Opis predloška otpada**: označava prijenos odbačene količine;        
**Opis stroja**: označava opis stroja korištenog;              
**Opis grupe radne snage**: označava opis grupe radne snage korištene;              
**Opis proizvodne lokacije**: označava opis korištene proizvodne lokacije.

Donji dio obrasca sastoji se od niza kartica vezanih za odabrani redak izjave.  

## Materijali

Na ovoj kartici automatski se prikazuju materijali korišteni u fazi za izradu proizvoda, no korisnik može mijenjati podatke i/ili dodavati dodatne materijale prema potrebi.      
Da bi se materijali automatski prikazivali, faza mora biti posljednja u ciklusu koja je tipa *Proizvodna* i *Premjestiva*; ako nije posljednja, mora biti tipa *Proizvodna* i *Premjestiva* te joj moraju biti izravno dodijeljeni materijali.

*Specifična polja*: 

**Jedinica tereta materijala**: omogućuje navođenje jedinice tereta iz koje se preuzima materijal;             
**Klasa**: označava klasu artikla;         
**Šifra artikla**: označava šifru artikla;         
**Varijanta**: označava šifru varijante artikla;         
**Jedinica mjere**: označava glavnu jedinicu mjere materijala;        
**Potrošena količina**: označava korištenu količinu materijala;         
**Alternativna jedinica mjere**: označava alternativnu jedinicu mjere materijala;        
**Alternativna količina**: označava korištenu količinu materijala u alternativnoj jedinici mjere;        
**Skladište potrošnje**: označava šifru skladišta potrošnje materijala;         
**Predložak potrošnje**: označava šifru predloška potrošnje materijala;         
**Odbačena količina**: označava količinu odbačenog materijala;     
**Skladište otpada**: označava šifru skladišta otpada materijala;     
**Predložak otpada**: označava šifru razloga otpada materijala;     
**Opis artikla**: označava opis artikla;        
**Opis varijante**: označava opis varijante artikla;        
**Opis skladišta potrošnje**: označava opis skladišta potrošnje materijala;        
**Opis predloška potrošnje**: označava opis predloška potrošnje materijala;        
**Opis skladišta otpada**: opis skladišta otpada;        
**Opis predloška otpada**: označava opis predloška otpada materijala;        
**Prioritet**: označava prioritet prikaza materijala.         

Također, u donjem dijelu moguće je unijeti serije i serijske brojeve u odgovarajuće mreže.

Mreža *Serija* sastoji se od sljedećih stupaca:

**Serija**: označava broj serije odabranog materijala;        
**Šifra serije dobavljača**: označava broj serije dobavljača odabranog materijala;         
**Količina**: označava lokaciju serije odabranog materijala;         
**Lokacija**: indica l'ubicazione di quel lotto del materiale selezionato;     
**Datum početka**: označava datum početka serije odabranog materijala;         
**Datum isteka**: označava datum isteka serije odabranog materijala;         
**Konto/Podkonto/Opis konta**: označavaju redom konto, podkonto i opis kupca/dobavljača odabranog materijala.  

Tablica *Serijski broja* sastoji se od sljedećih stupaca:

**Barkod**: barkod prikazuje broj serijskog broja i druge relevantne informacije. Za sve informacije o tome kako kodirati barkodove za očitavanje u ovom polju, pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer);          
**Tip serijskog broja**: označava tip serijskog broja odabranog materijala;    
**Serijski broj**: označava serijski broj odabranog materijala;    
**Datum početka**: označava datum početka serijskog broja odabranog materijala;    
**Poništeno**: označava da je serijski broj poništen;      
**Lot**: označava šifru serije serijskog broja odabranog materijala.             

## Zaposlenici

Ovaj kartica omogućuje upravljanje članovima tima koji obavljaju rad koji je povezan s odabranim redom izjave, navodeći za svakog datume početka i završetka rada.

*Specifična polja*: 

**Šifra**: označava šifru operatera koji radi na izjavi;             
**Prezime**: označava prezime operatera koji radi na izjavi;     
**Ime**: označava ime operatera koji radi na izjavi;        
**Voditelj tima**: označava da je operater i vođa tima;        
**Aktivnost**: označava aktivnost koju operater obavlja;        
**Opis**: označava opis aktivnosti koju operater obavlja;      
**Opremanje**: označava da će vrijeme koje operater radi biti obračunato kao vrijeme pripreme opreme u kasnijim analizama;       
**Datum početka**: označava datum početka rada operatera;         
**Vrijeme početka**: označava vrijeme početka rada operatera;         
**Datum završetka**: označava datum završetka rada operatera;         
**Vrijeme završetka**: označava vrijeme završetka rada operatera;         
**Datum kreiranja**: označava datum kreiranja zapisa;         
**Datum posljednje izmjene**: označava datum posljednje izmjene zapisa;         
**Operator**: označava korisnika koji je kreirao zapis.

## Alternativni artikli 

Ova kartica omogućuje dodavanje i upravljanje svim onim artiklima (izvedenima) koji se proizvode kao posljedica proizvodnje glavnog artikla.
Možete ih dodati u odgovarajuću mrežu s mogućnošću upravljanja povezanim serijama i serijskim brojevima. Naravno, serije i serijski brojevi odnose se na odabrani redak alternativnog artikla.

Mreža *Lotovi* sastoji se od sljedećih stupaca::

**Lot**: označava broj serije artikla;    
**Vrsta šifre lota**: označava vrstu koda serije artikla;           
**Vrsta Lota**: označava vrstu serije artikla;         
**Šifra serije dobavljača**: označava broj serije dobavljača artikla;         
**Napomena**: omogućuje unos napomene vezane uz seriju;                  
**Količina**: označava količinu artikla za tu seriju;           
**Lokacija**: označava lokaciju te serije artikla;       
**Datum početka**: označava datum početka te serije artikla;           
**Datum isteka**: označava datum isteka te serije artikla;           
**Konto/Podkonto/Opis konta**: označavaju redom račun, podračun i opis klijenta/dobavljača artikla.     

Mreža *Serijskih Brojeva*  sastoji se od sljedećih stupaca:  
    
**Šifra serijskog broja**: označava serijski broj artikla;        
**Vrsta serijskog broja**: označava vrstu serijskog broja artikla;  
**Serijski broj kupca**: označava serijski broj klijenta za taj artikl;        
**Serijski broj dobavljača**: označava serijski broj dobavljača za taj artikl;        
**Datum početka**: označava datum početka serijskog broja artikla;      
**Poništeno**: označava da je serijski broj poništen;        
**Lot**: označava broj serije serijskog broja artikla.              

## Suspenzija

Ova kartica omogućuje specificiranje više predloška za suspenziju s pripadajućim minutama i aktivira se samo kada je redak označen sa statusom *Suspenzija*.   

## Otpad

Ova kartica omogućuje specificiranje više skladišta i predloška odbacivanja s pripadajućim količinama i aktivira se samo ako je navedena količina odbačena.

## Dodatni podaci

Omogućuje upravljanje i pregled Dodatnih podataka povezanih s izvješćem. 

Za detaljan opis dodatnih podataka, molimo pogledajte članak o *Dodatnim podacima*.

## Lotovi/Serijski broj

Ova kartica omogućuje upravljanje serijama i serijskim brojevima glavnih artikala proizvedenih putem odgovarajućih mreža.

Mreža *Lotovi* sastoji se od sljedećih stupaca:

**Lot**: označava broj serije artikla;    
**Vrsta šifre lota**: označava vrstu koda serije artikla;         
**Vrsta serije**: označava vrstu serije artikla;         
**Šifra serije dobavljača**: označava broj serije dobavljača artikla;          
**Napomena**: omogućuje unos napomene vezane uz seriju;                   
**Količina**: označava količinu artikla za tu seriju;           
**Lokacija**: označava lokaciju te serije artikla;       
**Datum početka**: označava datum početka te serije artikla;           
**Datum isteka**: označava datum isteka te serije artikla;         
**Konto/Podkonto/Opis konta**: označavaju redom račun, podračun i opis klijenta/dobavljača artikla.     

Mreža *Serijskih brojeva* sastoji se od sljedećih stupaca:  
    
**Kod Serijskog broja**: označava serijski broj artikla;       
**Tip Serijskog broja**: označava tip serijskog broja artikla;    
**Serijski broj klijenta**: označava serijski broj klijenta za taj artikl;        
**Serijski broj dobavljača**:  označava serijski broj dobavljača za taj artikl;      
**Datum početka**: označava datum početka serijskog broja artikla;    
**Poništeno**: označava da je serijski broj u statusu poništenog;      
**Lot**: označava kod lota serijskog broja artikla.               

Za detalje o zajedničkom funkcioniranju formi, pogledajte link [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).