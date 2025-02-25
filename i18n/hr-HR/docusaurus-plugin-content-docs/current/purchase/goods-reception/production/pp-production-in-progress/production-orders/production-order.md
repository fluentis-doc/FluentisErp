---
title: Proizvodni nalog

sidebar_position: 3
---

Uobičajeno, narudžbe proizvodnje automatski se generiraju iz procedure *Planiranog izdanja narudžbi*. Za ručno stvaranje narudžbe proizvodnje, potrebno je prvo stvoriti planiranu narudžbu proizvodnje, a zatim je izdati putem odgovarajuće procedure.

## Zaglavlje narudžbe proizvodnje

U zaglavlju su sažeti svi podaci vezani uz narudžbu proizvodnje, kao što su: broj narudžbe i referentni kupac, povezani projekt, datum početka/završetka, artikl, verzija osnovnog računa i ciklusa, količina za proizvodnju, itd.

*Posebni gumb*:  

> **Kompletiranje podataka narudžbe**: pokreće proceduru koja omogućuje unos i/ili ažuriranje svih podataka vezanih uz materijale, faze, opremu, uređaje, atribute i razne bilješke za artikl naveden u narudžbi proizvodnje, preuzimajući ih iz osnovnog računa i radnog ciklusa artikla;  
> **Ponovno izračunaj izvorni datum**: pokreće proceduru koja omogućuje ažuriranje datuma početka narudžbe proizvodnje, a po potrebi i faza rada iste, nakon promjene vremena rada i/ili količine za proizvodnju artikla koji je predmet narudžbe proizvodnje;  
> **Generiraj Sastavnicu materijala**: omogućuje generiranje osnovnog računa na temelju podataka unesenih u narudžbu proizvodnje ili ažuriranje postojećih podataka onima unesenim u narudžbu;  
> **Generiranje proizvodnog ciklusa**: omogućuje stvaranje radnog ciklusa artikla na temelju podataka unesenih u narudžbu ili ažuriranje postojećih podataka onima unesenim u narudžbu;   

*Specifična polja*: 

**Stanje**: označava stanje narudžbe proizvodnje. Pokrenuto je početno stanje narudžbe proizvodnje koja je upravo generirana iz procedure izdavanja planiranih narudžbi, dok je *Izvršno* stanje koje se dodjeljuje narudžbi kako bi se moglo nastaviti s izvješćivanjem o proizvodnji.  

## Materijali

Na ovoj kartici prikazani su materijali prve razine iz osnovnog računa vezanog za gotov proizvod koji se treba proizvesti, ali korisnik može izmijeniti podatke i/ili dodati dodatne materijale na popis komponenti narudžbe proizvodnje.   
Za uvoz podataka izravno iz osnovnog računa artikla, potrebno je kliknuti na gumb  **Kompletiranje podataka narudžbe** prisutan u ribbon traci. 

*Specifični gumbi*:

> **Umetni materijal**: omogućuje unos novog materijala u mrežu;  
> **Otkaži materijal**: omogućuje brisanje materijala unesenih u mrežu. 

*Specifična polja*:

**Prioritet**: ovdje se prikazuje prioritet komponente, ako je unesen u osnovni račun. On se može izmijeniti, kao i svi ostali podaci u ovoj mreži;  
**Podizvođač**: u ovom polju je zastavica prisutna u *MRP parametrima* artikla nazvana 'uzmi u obzir Podizvođača’, što znači da li se artikl treba uključiti kao materijal u narudžbama za usluge vanjske obrade;    
**Jedinica mjere**: u ovo polje se unosi eventualna alternativna jedinica mjere artikla;  
**Datum korištenja**: podudara se s planiranim datumom početka narudžbe proizvodnje (promjenom prvog automatski se mijenja i drugi);    
**Korištena količina**: predstavlja jediničnu količinu potrebnu za ovaj artikl (predviđenu osnovnim računom) koja se može izmijeniti;  
**Ukupna količina**: predstavlja količinu koja se dobije množenjem  *Količine upotrebe* s *Količinom za proizvodnju*;   
**Alternativna količina**: predstavlja ukupnu količinu, ali izraženu u alternativnoj jedinici mjere;  
**% otpada**: u ovom polju se unosi ili preuzima iz osnovnog računa eventualni postotak otpada za ovaj artikl;  
**Faza/Podfaza**: dvostrukim klikom se otvara pomoć za faze rada iz koje se može odabrati odgovarajuća faza i podfaza, te dodijeliti odabrani materijal određenoj fazi rada artikla;  
**Raspoloživa količina**: u ovom polju se prikazuje dostupna količina artikla na datum upotrebe;  
**Za prijavu na mobilnom**: ako je omogućeno, bit će prijavljeno na mobilnom uređaju.

## Faze

Na ovoj kartici prikazane su faze radnog ciklusa vezane za gotov proizvod koji se treba proizvesti, ali korisnik može izmijeniti podatke i/ili dodati dodatne faze u narudžbu proizvodnje. 
Za uvoz podataka izravno iz radnog ciklusa artikla, potrebno je kliknuti na gumb **Kompletiranje podataka narudžbe** prisutan u traci izbornika.
U narudžbi proizvodnje moguće je promijeniti fazu iz interne u eksternu, čime se omogućuje unos vanjskog suradnika, a pri spremanju narudžbe procedura će automatski stvoriti narudžbu za vanjsku obradu. Nadalje, u slučaju da se eksterna faza konvertira u internu, procedura će automatski izbrisati povezanu narudžbu za vanjsku obradu.

*Posebni gumbi*:
> **Umetni fazu**: omogućuje unos nove faze u mrežu;  
> **Izbriši fazu**: omogućuje brisanje faza unesenih u mrežu.

*Specifična polja*:

**Kod faze/Faza/Podfaza**: dvostrukim klikom otvara se pomoć za faze rada iz koje se može odabrati odgovarajuća faza i podfaza;  
**Kontrola kvalitete**: ova oznaka označava treba li materijal biti podvrgnut kontroli kvalitete prije upotrebe;  
**Faza proizvodnje**: ako je ova oznaka označena, označava da je u pitanju proizvodna faza koja će biti prijavljena;  
**Radni centar**: iz ovog izbornika se postavlja radno mjesto. Automatski se predlaže iz faze koja je prethodno odabrana i unesena u mrežu;  
**Planirani početak/završetak**: ovo su planirani datum početka i završetka odgovarajuće faze; promjenom planiranih datuma početka i završetka automatski se mijenjaju i ovi datumi. Oni se izračunavaju na temelju vremena unesenog u radne faze, i to preciznije, na temelju većeg vremena rada radne snage i ukupnog vremena rada za odabranu fazu;  
**Vrijeme stroja**: to je vrijeme koje stroj troši na stvaranje faze, s obzirom na količinu dijelova po fazi;  
**Broj strojeva**: to pokazuje broj strojeva uključenih u ovu fazu;  
**Broj dijelova po fazi**: to pokazuje broj dijelova po fazi;  
**Radnikovo vrijeme**: to je vrijeme koje radnik troši na stvaranje ove faze, s obzirom na količinu dijelova po fazi;  
**Broj radnika**: to je broj radnika uključenih u ovu fazu;  
**Izvođač prihoda/Naziv podizvođača**: dvostrukim klikom na ovaj okvir otvara se pomoć za odabir računa i podračuna odgovarajućeg podizvođača. Ovaj *okvir* je aktivan samo ako je faza označena kao *Vanjska*. Napomena: *Podizvođač* također se preuzima iz radne faze unesene u radnom ciklusu artikla;  
**Narudžba Podizvođač stvorena**: ako je označeno, označava da je povezana narudžba za usluge vanjske obrade već stvorena;  
**Redoslijed**: to označava redoslijed u kojem će se faza realizirati, a može se izravno mijenjati u narudžbi proizvodnje.     
**Trošak rada**: počinje se vrednovati od kada počnem s izvješćivanjem o proizvodnji;      
**Trošak stroja**: počinje se vrednovati od kada počnem s izvješćivanjem o proizvodnji;     
**Trošak postavljanja**: počinje se vrednovati od kada počnem s izvješćivanjem o proizvodnji.   

### Faze - Svojstva 

Ovo sadrži svojstva povezana s odabranom fazom. 

**Opis faze/podfaze**: u ovom polju se prikazuje opis odabrane faze;    
**Tip**: u ovom padajućem izborniku možete postaviti tip obrade (unutarnja ili vanjska);  
**Preklapanje**: putem ovog padajućeg izbornika možete postaviti vrstu eventualnog preklapanja između faza. Moguće su tri vrste preklapanja: *Potpuno* preklapanje (u ovom slučaju, odabrana faza potpuno se preklapa s narednom navedenom fazom), *Po komadima* (u ovom slučaju, potrebno je navesti nakon koliko proizvedenih dijelova iz ove faze počinje sljedeća faza), *Po vremenu* (u ovom slučaju, potrebno je navesti nakon koliko minuta od početka ove faze počinje sljedeća faza);    
**J.M. vremena**: u ovom padajućem izborniku prikazuje se Jedinica Mjere Vremena faze; možete odabrati da upravljate vremenima faze u sekundama, minutama, satima i danima. Obično se vremena unutarnjih faza upravljaju u minutama, dok se vremena vanjskih faza obično upravljaju danima, no naravno, to ovisi o vrsti tvrtke za koju se radi posao;    
**Stroj**: u ovom padajućem izborniku može se odabrati kod (i opis) odgovarajućeg stroja. Automatski se predlaže iz centra rada koji je prethodno unesen u mrežu;    
**Grupa radne snage**: u ovom padajućem izborniku može se odabrati kod (i opis) odgovarajuće radne grupe. Automatski se predlaže iz centra rada koji je prethodno unesen u mrežu;   
**Preklapanje odnosi se na fazu/podfazu**: ovdje se prikazuje kod faze i podfaze koje imaju preklapanje s odabranom fazom. Obično se navodi sljedeća faza, ali i ovdje se radi o konvenciji;   
**Vrijednost**: ovdje se navodi vrijednost eventualnog preklapanja, koristeći gore navedene kriterije;    
**Upotreba**: ako je zastavica uključena, znači da želite da vrijeme čekanja/predugo trajanje poveća vrijeme rada Centra za rad na toj fazi;   
**Čekaj/Vrijeme reda**: označava eventualno vrijeme čekanja/predugo trajanje koje se očekuje za taj stroj.  

### Faze - Dodatni podaci 

Ovaj tablica sadrži dodatne podatke vezane uz odabranu fazu.   

## Opremanje

U ovoj kartici mogu se definirati vremena vezana uz postavljanje opreme za odabranu fazu u prethodnoj kartici.  

*Specifična polja*:

**Faza/Podfaza**: u ovim poljima prikazuju se informacije o fazi koja je odabrana u kartici  *Faze*;  
**Tip**: označava vrstu faze (unutarnja ili vanjska);  
**Tip preklapanja**: označava eventualni tip preklapanja;      
**J.M. vremena**: označava jedinicu vremenskog mjerenja faze;    
**Radni centar**: u ovim poljima unosi se kod (i pripadajući opis) Radnog centra postavljenog za opremu;    
**Stroj**: u ovim poljima unosi se kod (i pripadajući opis) stroja za opremu;   
**Grupa radne snage**:  u ovim poljima unosi se kod (i pripadajući opis) grupe radne snage za opremu;    
**Vrijednost**: označava vrijednost eventualnog preklapanja;    
**Radni centar**: u ovim poljima prikazuje se kod i opis odgovarajućeg Radnog centra odabrane *Faze*;  
**Data inizio**: viene visualizzata la data d'inizio della fase selezionata nel tab *Fasi*;  
**Datum početka**: prikazuje datum početka odabrane faze u kartici *Faze*;  
**Datum završetka**: unosi se vrijeme postavljanja. To je fiksno vrijeme koje se ne mijenja ovisno o količini proizvoda u odabranoj fazi;    
**Vrijeme ponovnog opremanja**: unosi se vrijeme ponovnog postavljanja, koje se dodaje na vrijeme postavljanja;   
**Broj strojeva**: označava broj korištenih strojeva za postavljanje;    
**Num. operai**: označava broj radnika koji sudjeluju u postavljanju. 

## Oprema

Na ovoj kartici, koji se sastoji uglavnom od mrežice, moguće je definirati koje i koliko opreme će se koristiti u proizvodnji odabrane faze u kartici *Faze*. 

*Specifična polja*:

**Redoslijed**: u ovom polju možete navesti redoslijed kojim se oprema treba koristiti;    

**Oprema**: pomoću ovog padajućeg izbornika moguće je pozvati kod opreme, preuzet iz odgovarajuće tablice [Opreme](/docs/configurations/tables/production/equipments);  
**Klasa/Kod artikla**: u ovim poljima moguće je navesti klasu i kod artikla (pomoć filtra automatski filtrira samo artikle koji su označeni kao *Oprema* u polju *Vrsta artikla* u Šifarniku o skladištu);  
**Varijanta**: predstavlja varijantu artikla;  
**Količina**: predstavlja količinu artikla.

## Kontrola kvalitete 

Na ovoj kartici, koji se uglavnom sastoji od mrežice, moguće je prikazati detalje planiranih testova kontrola kvalitete za fazu/podfazu.  

## Bilješka faze

Na ovoj kartici prikazana je napomena povezana s odabranom fazom rada u kartici *Faze*. Može se mijenjati korisnikom u kontekstu trenutnog naloga za proizvodnju.

## Operativne upute 

Na ovoj kartici moguće je priložiti i pregledati *Operativne upute* povezane s odabranom fazom rada u kartici *Faze*.

## Zaposlenici

Na ovoj kartici moguće je unijeti operatere koji će obavljati pojedinačne faze proizvodnog ciklusa.    

## Dodatni podaci 

Za detaljan opis dodatnih podataka, molimo pogledajte članak o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).

Za detalje o zajedničkom funkcioniranju formi, pogledajte link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).