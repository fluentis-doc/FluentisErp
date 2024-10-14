---
title: Planirani nalozi
sidebar_position: 3
---

Obično se planirane narudžbe automatski generiraju iz postupka *Općeg raspoređivanja* ili iz *MRP-a*, ali korisnik ima mogućnost ručnog generiranja planirane narudžbe, bilo da se radi o narudžbi za kupnju, proizvodnju ili radni nalog.  

Obrazac se otvara putem:   
 -  putem **Planiranje > MS Master scheduling > Planirani nalozi > Novi Planirani nalozi** 

ili putem   

 - gumba **Umetni nalog** koji se nalazi u obrascu [Pretraga planiranih narudžbi](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Zaglavlje planirane narudžbe  

*Posebni gumbi*:  

> **Kompletiranje podataka narudžbe**: poziva postupak koji omogućuje unos i/ili ažuriranje svih podataka vezanih za materijale, faze, opremu, alate, atribute i različite bilješke za artikl u planiranoj narudžbi, uzimajući ih iz popisa materijala i radnog ciklusa artikla.   
> **Ponovno izračunaj izvorni datum**: poziva postupak koji omogućuje ažuriranje datuma početka planirane narudžbe i eventualno faza njenog rada nakon izmjene radnih vremena i/ili količine za proizvodnju navedenog članka u planiranom nalogu;    
> **[Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: otvara prozor s parametrima MRP za artikl;    
> **Generiraj sastavnicu materijala**: omogućuje generiranje popisa materijala na temelju podataka unesenih u proizvodni nalog ili ažuriranje postojećih podataka s onima unesenima u nalog;    
> **Generiraj proizvodni ciklus**: omogućuje stvaranje proizvodnog ciklusa za artikl na temelju podataka unesenih u nalog, ili ažuriranje postojećih podataka s onima unesenima u nalog;    
> **[Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: omogućuje otvaranje zaslona s popisom materijala za artikl;  
> **[Proizvodni ciklusi](/docs/erp-home/registers/production/routes/new-route)**: omogućuje prikaz proizvodnog ciklusa i povezanih proizvodnih faza za artikl.  

*Specifična polja*: 

**Vrsta planirane narudžbe**: prikazuje se pretpostavljeni tip kao zadani tip;    
**Obvezni nalog**: ako je aktivno, ova zastava označava da planirana narudžba ima prioritet i korisnik ne može pomaknuti narudžbu postavljanjem datuma kasnije od predviđenog završetka prema općem raspoređivanju;    
**Prioritet naloga**: omogućuje postavljanje prioriteta za ovu narudžbu;  
**Generato da domanda**: ovaj se polje prikazuje kao *Ručno* (ako je planirana narudžba stvorena ručno), *Ovisno* (ako je planirana narudžba stvorena raspoređivanjem i ovisi o drugim planiranim narudžbama više razine) ili *Neovisno* (ako je planirana narudžba stvorena raspoređivanjem i ne ovisi o drugim planiranim narudžbama više razine, već je već narudžba razine 1);       
**Nalog proizvodnje**: u ova 3 polja postavljaju se godina, broj i opis proizvodnog naloga iz kojeg je generirana planirana narudžba. Naravno, ako je narudžba generirana ručno, neće ju biti moguće povezati s već postojećim proizvodnim nalogom i ta će polja ostati prazna;       
**Tip radnog naloga**: u ovom polju prikazuje se tip proizvodnog zadatka iz kojeg je generirana planirana narudžba. Naravno, ako je generirana ručno, neće biti moguće povezati je s postojećim proizvodnim zadatkom, pa će ovo polje ostati prazno;       
**Projekt**: dvoklikom se otvara pomoćni alat koji omogućuje povezivanje projekta s planiranom narudžbom koja se unosi;       
**Klijent**: označava klijenta narudžbe;      
**Dobavljač / podizvođač**: ova polja su aktivna ako je planirana narudžba kupovna ili radni nalog;      
**Artikl**: označava klasu, kod i opis artikla narudžbe;         
**Varijanta**: u ovom okviru može se specificirati varijanta artikla;    
**Količina za proizvesti**: označava količinu koja se treba proizvesti;         
**JM za upravljanje**: označava upravljačku jedinicu mjere za artikl;    
**Količina za koristiti**: u ovom se polju postavlja količina za proizvodnju u slučaju alternativne jedinice mjere;        
**Koristiti jedinicu mjere**: označava alternativnu jedinicu mjere za artikl;  
**Datum početka i završetka**: postavljaju se predviđeni datumi početka i završetka odgovarajućeg rada. Ako korisnik izvrši promjenu jednog od ovih datuma nakon što je završio unos podataka o radnom ciklusu, drugi se automatski izračunava prema tome;    
**Audit**: ovaj odjeljak automatski bilježi datum stvaranja narudžbe i datum posljednje izmjene, prikazujući za oba korisnika koji je izvršio operaciju;  
**Napomene**: to je slobodno polje u koje se mogu unijeti napomene.    

Nakon što su obavezna polja spremljena, pritisnite gumb **Kompletiranje podataka narudžbe** kako biste ažurirali sve kartice (Materijali, Faze, itd.) koje preuzimaju podatke iz popisa materijala i radnog ciklusa predmeta planirane narudžbe (samo za proizvodnju).  


## Materijali   

Ovaj se obrazac sastoji  od mreže, unutar koje korisnik može ručno unijeti materijale koje želi koristiti za proizvodnju predmetnog planiranog naloga (samo ako se radi o proizvodnji). Nakon ručnog unosa, potrebno je kliknuti na gumb **Kompletiranje podataka narudžbe** koji se nalazi u ribbon traci kako bi se uvezli podaci iz osnovne strukture.  

Mreža već može biti popunjena ako planirani nalog dolazi iz *Općeg rasporeda* ili iz *MRP obrade*, ali korisnik može mijenjati podatke i/ili dodavati dodatne materijale na popis komponenti planiranog naloga.   

:::note NAPOMENA 
Ako je planirana narudžba za kupnju, kartica *Materijali* nije aktivna.
:::

*Posebni gumbi*:
> **Umetni materijal**: omogućuje dodavanje novog materijala u mrežu;  
> **Otkaži materijal**: omogućuje brisanje materijala koji su uneseni u mrežu.

*Posebni gumbi*:

**Prioritet**: ovdje je prikazan prioritet komponente, ako je naveden, unesen u popisu materijala. Može se izmijeniti, kao i svi ostali podaci u ovoj mreži;  
**Podizvođač**: ovaj se flag preuzima iz *MRP parametara* artikla i naziva se *Uključi u Podizvođač*, što označava treba li se artikl uključiti kao materijal u radne naloge;          
**Koristi jedinicu mjere**: ovdje se unosi eventualna alternativna jedinica mjere za artikl;  
**Datum korištenja**: podudara se s predviđenim datumom početka planirane narudžbe (ako se prvi promijeni, automatski se mijenja i ovaj);    
**Korištena količina**: predstavlja jediničnu količinu potrebnu za ovaj artikl (predviđeno u popisu materijala), ali može se mijenjati;  
**Ukupna količina**: predstavlja količinu koja se dobiva množenjem *Količine uporabe* s *Količinom za proizvodnju*;  
**% otpada**: ovdje se unosi ili preuzima iz popisa materijala eventualni postotak otpada za ovaj artikl;    
**Faza/Podfaza**: moguće je ručno unijeti odgovarajuću fazu i podfazu te dodijeliti odabrani materijal određenoj radnoj fazi artikla; ove se automatski nude iz radnog ciklusa;              
**Dostupna količina**: u ovom polju prikazuje se raspoloživa količina artikla na datum uporabe. 

## Faze   

Ovaj je obrazac sastavljena od mreže u koju korisnik može ručno unijeti faze koje želi koristiti za proizvodnju predmeta planirane narudžbe (samo ako je u pitanju proizvodnja). Nakon ručnog unosa, za uvoz podataka iz radnog ciklusa artikla potrebno je kliknuti na gumb **Kompletiranje podataka narudžbe** u traci izbornika s karticama.

Mreža je već popunjena ako je planirana narudžba generirana iz *Opće planirane* ili *MRP obrade*. 

*Posebni gumbi*:
> **Umetni fazu**: omogućuje dodavanje nove faze u mrežu;  
> **Cancella fase**: omogućuje brisanje unesenih faza iz mreže.  

*Specifična polja*:

**Šifra faze/Faza/Podfaza**: dvoklikom se otvara pomoć za faze rada, iz kojeg se može odabrati odgovarajuća faza i podfaza;    
**Kontrola kvalitete**: questo flag indica se il materiale debba essere sottoposto a controllo qualità prima del suo utilizzo;  
**Proizvodna faza**: ako je zastava označena, označava da je u pitanju proizvodna faza i da će se prijaviti;   
**Pokretno**:  ako je zastava označena, označava da je u pitanju prijenosna faza i generirat će se skladišni pokret nakon registracije proizvodne izjave;           
**Radni centar**: iz ovog izbornika odabire se radni centar. Automatski se predlaže prema prethodno odabranoj fazi i unesenoj u mrežu;    
**Datum početka/završetka planirani**: o su datumi početka i završetka odgovarajuće faze; mijenjanjem planiranih datuma početka i završetka automatski se mijenjaju i ovi datumi. Oni se izračunavaju na temelju vremena unesenog u radnim fazama, posebno na osnovi maksimalnog vremena stroja i ukupnog vremena rada za odabranu fazu;    
**Vrijeme stroja**: to je vrijeme koje stroj troši za provedbu faze, odnosi se na količinu komada po fazi;    
**Broj stroja**: to je broj strojeva uključenih u ovu fazu;    
**Količina komada po fazi**: to je broj komada po fazi;  
**Radnikovo vrijeme**: to je vrijeme koje radnik troši za provedbu ove faze, odnosi se na količinu komada po fazi;    
**Broj radnika**: : to je broj radnika uključenih u ovu fazu;  
**Podizvođač/opis podizvođača**: dvoklikom na polje otvara se pomoć za odabir podračuna i podračuna odgovarajućeg podizvođača. Ovo polje je aktivno samo ako je faza označena kao *Vanjska* faza. Napomena da se *podizvođač* također preuzima iz radne faze unesene u radnom ciklusu predmeta.    
**Opis radnog centra**: označava opis radnog centra.         

### Faze - Svojstva   

Ovo područje sadrži svojstva odabrane faze. 

**Opis faze/podfaze**: ovdje se prikazuje opis odabrane faze;  
**Vrsta**: u ovoj padajućoj listi moguće je postaviti vrstu obrade (unutarnja ili vanjska);  
**Preklapanje**: ovdje se postavlja vrsta eventualnog preklapanja između faza. Moguće opcije su *Potpuno* (u ovom slučaju odabrana faza potpuno se preklapa s navedenom sljedećom fazom), *Po komadima* (u ovom slučaju treba navesti nakon koliko proizvedenih komada iz ove faze počinje sljedeća faza), *Po vremenu* (u ovom slučaju treba navesti nakon koliko minuta od početka odabrane faze počinje sljedeća faza);    
**Jedinica mjere vremena**: ou ovoj padajućoj listi nalazi se *Jedinica mjere vremena faze*; možete odlučiti kako upravljati vremenima faze u sekundama, minutama, satima i danima. Obično se vremena internih faza upravljaju minutama, a eksternih faza danima, ali naravno, to ovisi o vrsti tvrtke za koju se posao postavlja;       
**Stroj**: ovdje možete odabrati kod (i opis) odgovarajućeg stroja. Automatski se predlaže prema centru rada koji je prethodno unesen u mrežu;    
**Grupa radne snage**: u ovoj padajućoj listi može se odabrati kod (i opis) odgovarajuće radne skupine. Automatski se predlaže prema centru rada koji je prethodno unesen u mrežu;    
**Preklapanje s fazom/podfazom**: ovdje se navodi kod faze i podfaze koje imaju preklapanje s odabranom fazom. Obično se navodi sljedeća faza, ali i ovdje je riječ samo o običaju;   
**Vrijednost**: ovdje se navodi vrijednost eventualnog preklapanja, koristeći gore navedene kriterije;    
**Korištenje**: ako je zastava aktivirana, znači da želite da vrijeme čekanja/čekanja poveća vrijeme angažmana radnog centra na toj fazi;    
**Čekaj/Vrijeme reda**: navodi eventualno predviđeno vrijeme čekanja/čekanja za ovaj stroj.  

### Faze - Dodatni podaci   

Ovo područje sadrži dodatne podatke o odabranoj fazi.  

## Opremanje

Na ovoj je kartici moguće definirati vrijeme povezano s postavljanjem opreme za odabranu fazu u prethodnoj kartici.

*Specifična polja*:

**Faza/Podfaza**: ovdje se prikazuju informacije o fazi koja je odabrana u prethodnoj kartici *Faze*;  
**Vrsta**: označava vrstu faze (interna ili vanjska);  
**Vrsta preklapanja**: označava eventualnu vrstu preklapanja;  
**J.M. vremena**: označava jedinicu mjere vremena za fazu;  
**Radni centar**: ovdje se unosi kod (i opis) radnog mjesta postavljenog za opremanje;  
**Stroj**: ovdje se unosi kod (i opis) stroja za opremanje;  
**Grupa radne snage**: ovdje se unosi kod (i opis) grupe radne snage za opremanje;    
**Vrijednost**: označava vrijednost eventualnog preklapanja;    
**Centar rada**: ovdje se prikazuju kod i opis odgovarajućeg radnog mjesta odabrane faze;    
**Datum početka**: prikazuje datum početka odabrane faze u kartici *Faze*;  
**Datum završetka**: prikazuje datum završetka odabrane faze u kartici *Faze*;  
**Vrijeme postrojenja**: unosi se vrijeme opremanja. To je fiksno vrijeme koje se ne mijenja s promjenama u količinama za proizvodnju u odabranoj fazi;    
**Vrijeme ponovnog opremanja**: unosi se vrijeme ponovnog opremanja, koje se zbraja s vremenom opremanja;    
**Br. strojeva**: označava broj korištenih strojeva za opremanje;   
**Br. radnika**: označava broj radnika koji sudjeluju u opremanju.  

## Oprema

Na ovom obrascu, koji se uglavnom sastoji od mrežice, moguće je definirati koje i koliko opreme će biti korištene u proizvodnji odabrane faze iz kartice *Faze*. 

*Specifični polja*:

**Redoslijed**: ovdje je moguće navesti redoslijed kojim će se koristiti oprema;        
**Oprema**: ovom kombiniranom okviru možete odabrati kod opreme, preuzet iz odgovarajuće tablice [Oprema](/docs/configurations/tables/production/equipments);  
**Klasa/Šifra stavke**: u ovim poljima možete navesti klasu i kod artikla (pomoć automatski filtrira samo one artikle koji su označeni kao *Oprema* u polju *Priroda artikla* u šifarniku skladišta);    
**Varijanta**: predstavlja varijantu artikla;   
**Količina**: predstavlja količinu artikla.  

## Kontrola kvalitete 

Na ovoj kartici, koji se uglavnom sastoji od mreže (tablice), možete pregledati detalje planiranih testova kontrole za fazu/podfazu.  

## Bilješka faze

Na ovoj kartici prikazana je bilješka vezana uz odabranu fazu obrade na kartici *Faze*. Korisnik je može uređivati u kontekstu trenutnog planiranog naloga.  

## Operativne upute

Na ovoj kartici prikazuju se bilješke/dokumenti vezani uz odabranu fazu obrade na kartici *Faze*. Korisnik ih može uređivati u kontekstu trenutnog planiranog naloga. Ti dokumenti su vidljivi unutar MES-a na kartici *Dokumenti* i *Operativne upute*.  

## Dodatni podaci 

Za detaljan opis dodatnih podataka molimo pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).

Za informacije o uobičajenom funkcioniranju formi molimo pogledajte link [Funkcionalnosti, gumbi i zajednička polja.](/docs/guide/common).  