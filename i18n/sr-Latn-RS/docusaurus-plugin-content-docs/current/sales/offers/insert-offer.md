---
title: Nova ponuda kupcu
sidebar_position: 3
---

Forma **Nova ponuda** otvara se putem izbornika **Prodaja > Nova ponuda** ili putem tipke **Novo** koja se nalazi u formi [Pretraživanje ponuda](/docs/sales/offers/search-offers).

## **1. Obvezni podaci**     

- **Vrsta ponude za prodaju**: sadrži tip ponude, između onih unesenih u [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type).

- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji koju je korisnik odredio u tablici [Numeracija ponuda](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta koja sadrži numeraciju.     

- **Klijent**: unos kupca je moguć korištenjem [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručnim](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom znakova.  

- **CRM kontakt**: ako je ponuda namijenjena leadu koji još nije kupac, moguće je unijeti CRM kontakt umjesto kupca.    

- **Godina**: predlaže se tekuća godina.   

- **Datum**: predlaže se današnji datum.    

- **Verzija**: u ovom polju unosi se broj verzije ponude; ako je nova ponuda, predložena verzija bit će prva.     

#### Neobvezni podaci:

- **Kontaktna prilika**: ako kreirani [Tip ponude](/docs/configurations/tables/sales/sales-offer-type), a povezan tip prilike u tablici Vrste ponuda
, prilikom spremanja ponude automatski će se kreirati prilika za kupca/kontakt. Ta će prilika biti prikazana u ovom polju i korisnik je može uređivati. Ako se u ovo polje ručno unese već postojeća prilika, ona će se ažurirati.         

## **2. Zaglavlje**

Nakon što su uneseni podaci u gornjem dijelu, moguće je nastaviti s unosom podataka zaglavlja:       

- **Valuta**: predlaže se valuta kupca.  

- **Dostava**: predlaže se način [Dostave](/docs/configurations/tables/general-settings/shipments) prema podacima u kartici kupca.       

- **Prodajni cjenik**: predlaže se zadani cjenik iz kartice kupca, zajedno s pripadajućim tipom raspona predviđenim za kupca.  

- **Napomene kupca**: u ovoj sekciji moguće je unijeti Reference kupca, eventualne Početne/Završne napomene; polje *Napomene kupca* prikazuje napomene unesene u [Podatke kartice kupca](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Datum potvrde ponude**: označava datum kada je ponuda potvrđena i kada je moguće da bude pretvorena u narudžbu.  

- **Očekivani datum isporuke**: datum kada se očekuje da roba bude isporučena; ovaj podatak prenosi se u narudžbu kreiranu iz ponude.     

- **Datum zatvaranja**: označava datum kada je ponuda zatvorena.

- **Datum poništenja**: datum kada će ponuda biti smatrana nevažećom ako nije postala narudžba.

- **Valjanost ponude**: krajnji datum valjanosti ponude; ovo je informativno polje.

#### Specifične tipke   

> **Nova verzija**: generira novu verziju ponude, povećavajući polje *Verzija*. Sljedeće verzije ponude nasljeđuju priložene dokumente.     

> **Zamijeni očekivani datum isporuke u stavkama**: zamjenjuje u svim stavkama artikala očekivani datum isporuke unesen u zaglavlju.        

> **Konverzija**: Omogućuje pretvaranje ponude za prodaju u stvarnu narudžbu.
Da bi proces prošao ispravno, potrebno je konfigurirati željeni tip narudžbe u tablici [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type). Također, da bi ponuda mogla biti uspješno konvertirana, mora imati Datum potvrde u zaglavlju; u suprotnom, sustav će korisnika upozoriti putem pop-up poruke da je potrebno potvrditi ponudu prije nastavka.  
Kada su svi potrebni podaci uneseni, pokretanjem procedure pojavit će se pop-up prozor s sljedećim poljima:       
> - Ako su barem neke stavke ponude već pretvorene u narudžbu, sustav će korisnika pitati želi li stvoriti novu narudžbu koristeći sve stavke ponude ili samo stavke koje još nisu referencirane.             
> - **Stvori/Ažuriraj projekt**: označavanjem ovog polja sustavu se signalizira da osim kreiranja narudžbe treba i stvoriti ili ažurirati projekt. Ako projekt treba biti stvoren, potrebno je označiti opciju *Stvori novi prazan projekt*, *Stvori novi projekt iz ponude* ili **Stvori novi projekt iz ponude i predloška projekta**; u svim slučajevima potrebno je unijeti **[Tip projekta](/docs/configurations/tables/project-management/project-type)** u predviđeno polje. U posljednjem slučaju sustav će tražiti i odabir projekta **Predložak**. Ako projekt već postoji i treba ga ažurirati podacima iz ponude, potrebno je ispuniti polje **Projekt** s projektom koji se ažurira.     
> - **Prenesi materijale/Resurse iz stavki ponude kao stavke narudžbe**: označavanjem ovog polja u narudžbu se unose stavke artikala s resursima i materijalima iz ponude, ako je struktura hijerarhijska.             
Nakon potvrde pop-up prozora, sustav će generirati novu narudžbu kupca koristeći podatke iz ponude. Narudžbu je moguće pregledati i uređivati u odjeljku [Pretraživanje narudžbi kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Korisnik će također dobiti pop-up poruku o uspješnoj konverziji, uključujući broj konvertirane ponude i verziju, kao i broj narudžbe kupca generirane konverzijom.
Ako se u ponudi promijene podaci predloženi iz kartice kupca, oni se prenose u narudžbu nastalu konverzijom: Napomene kupca, Dostava, Plaćanja, Popusti, Agent, Odredišta, Prijevoznici.

- **Plaćanja**
- **Popusti**
- **Primatelji**
- **Prijevoznici**
- **Agenti**
- **Dodatni podaci**
- **Informacije o e-mailu**

## **3.a Stavke ponude**

U glavnoj mreži unose se artikli.   

Dostupne su sljedeće kartice:       
- **Popusti**: ova kartica prikazuje cjenik, ako je prisutan, iz kojeg se uzima cijena za odabrani artikl; prikazuje također popuste, bilo iz cjenika ili iz kartice kupca, i omogućuje unos novih popusta. Na kraju, tu je opcija *Ručna cijena*, koja označava da se zadrže ručno unesene cijene (ova opcija se prenosi prilikom konverzije ponude u narudžbu).
- **Agenti**: na ovoj kartici prikazani su agenti kupca s pripadajućim provizijama.     
- **Podaci o artiklu**: sadrži različite informacije o artiklu, poput eventualnih varijanti, skladišta, alternativne jedinice mjere.   
- **Dodatni podaci**
- **Priloženi dokumenti**        

#### Specifične tipke

- **Stvori novi prototip**: ova tipka stvara [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabranu stavku artikla; referenca na generiranu ponudu se prikazuje u kartici Podaci o artiklu, polje Ponuda. Prototip je moguće urediti u odgovarajućem modulu.  
- **Poveži prototip**: ovom tipkom moguće je povezati ponudu s već postojećim[Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) otvara se pomoćni prozor (help) u kojem se može odabrati prototip dostupan za taj artikl.  
- **Otvori prototip**: tipka je aktivna ako odabrana stavka artikla ima povezani prototip i omogućuje njegovo otvaranje.     
- **Uvezi iz projekta**: ova funkcija otvara help *Artikli projekta*, u kojem je moguće odabrati artikle iz projekta koje želimo unijeti u ponudu za prodaju. Pop-up se otvara izravno s filtriranjem prema kupcu kojem je ponuda namijenjena, kako bi se prikazali relevantni projekti.   

## **3.b Stavke hijerarhijske ponude**

U slučaju da je Ponuda *hijerarhijskog tipa*, tab Artikli bit će drugačiji.  

U glavnoj mreži unose se artikli koristeći gumbe na alatnoj traci, koji omogućuju stvaranje strukture stabla. Karakteristike artikala moraju biti specificirane u tabu *Aktivnosti*.  

Sada navodimo posebne tabove hijerarhijske ponude.

### 3.b.1 Aktivnosti 

U ovoj kartici potrebno je unijeti karakteristike artikala u mreži artikala. Polja koja su prisutna su:
- **Broj stavke/Nivo**: sadrži broj stavke i WBS te se postavlja automatski, iako ga je moguće slobodno mijenjati.   
- **Vrsta čvora**: označava je li redak **Root Node**(glavni čvor), **Activity Node** (čvor vezan uz aktivnosti) ili **Work Package Node** (završni čvor projekta, jedini koji može sadržavati šifrirane artikle).         
- **Tip linije**: označava tip artikla: Kodificirani, Nekodificirani, Troškovi ili Napomene (posljednje je zadano).            
- **Šifra artikla**: prikazuje Klasa, Šifra i Opis eventualno odabranog kodificiranog artikla.             
- **Šifra varijante**: prikazuje eventualnu [Varijantu](/docs/erp-home/registers/items/create-new-item) artikla.       
- **Opis artikla**: prikazuje opis artikla ako je tip Napomena ili Nekodificirani.     
- **Prototip**: prikazuje eventualni povezani [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) collegato.          
- **Količina/UM/Cijena**: sadrži količinu, jedinicu mjere i cijenu odabranog artikla.       
- **Alternativna količina**: sadrži eventualnu alternativnu količinu i alternativnu jedinicu mjere.    
- **UM Cijena**: ako je označeno ovim flagom, jedinična cijena množi se s alternativnom količinom kako bi se dobio iznos.    
- **Cjenik**: moguće je povezati cjenik iz kojeg se preuzima cijena artikla, uz **Tip skale** koji definira primijenjeni popust.     
- **Ručno unesena cijena**: ovaj flag označava da je cijena unesena ručno, pa se cijena iz cjenika ne uzima u obzir.        
- **Ažuriraj cijenu iz resursa**: ovaj flag, ako je postavljen, mijenja polje *Cijena* unoseći isti iznos iz kolone *Prihod* kartica *Resursi*; može se koristiti, na primjer, kada iznos retka u potpunosti ovisi o vremenu utrošenom od strane Resursa.  
- **Ažuriraj cijenu iz materijala**: ovaj flag, ako je postavljen, mijenja polje *Cijena* unoseći isti iznos iz kolone *Prihod* kartica *Materijali*; može se koristiti, na primjer, kada iznos retka u potpunosti ovisi o materijalima koji su korišteni.  
- **Ažuriraj cijenu iz prototipa**: ovaj flag, ako je postavljen, mijenja polje *Cijena* unoseći isti iznos iz kolone *Prodajna cijena* povezanog prototipa.    
- **Isključi resurse u narudžbi kupca**: ovaj flag osigurava da resursi odabrane stavke artikla ne budu navedeni u narudžbi kupca koja je stvorena konverzijom ponude.  
- **Isključi materijale u narudžbi kupca**: ovaj flag osigurava da materijali odabrane stavke artikla ne budu navedeni u narudžbi kupca koja je stvorena konverzijom ponude.  
- **Popusti**: u ovoj mreži navedeni su predviđeni popusti za kupca i moguće je dodati nove.  
- **Prihodi od materijala/Prihodi od resursa**: u ovim poljima navedene su kolone *Prihod* iz kartica Resursi i Materijali; na taj način je moguće izravno iz ovog taba razumjeti utjecaj iznosa na ukupnu cijenu.  
- **PDV**: označava PDV koji se treba primijeniti.
- **Promet prodaje**: označava [Promet prodaje](/docs/configurations/tables/sales/sales-turnover) artikla.                
- **Predviđeni datum isporuke / Razdoblje predviđene isporuke**: u ova se polja može unijeti planirani datum ili razdoblje isporuke odabranog artikla.  

### 3.b.2 Resursi

U ovoj kartici moguće je navesti Prihode ostvarene radom različitih resursa. Dostupna polja su:
- **Resurs**: zahtijeva unos prethodno šifriranog [Resursa](/docs/project-management/registers/employee/new-employee) koji je obavio aktivnost.      
- **Jedinica mjere**: sadržava jedinicu mjere koja se koristi za resurs; predlaže se ona zadana u šifrarniku resursa, no može se promijeniti.     
- **Količina / Jedinični trošak / Ukupni trošak**: Ukupni trošak automatski se izračunava množenjem unesene količine i jediničnog troška.       
- **Postotak / Vrijednost**: u ova polja moguće je unijeti eventualni ricarico koji se primjenjuje na Ukupni trošak, bilo u postotku ili u apsolutnom iznosu.       
- **Prihod**: u ovom stupcu automatski se izračunava Ukupni trošak uvećan za ricarico.          
- **Napomena**: polje za unos slobodnih bilješki.      
- **Ekvivalent puno radno vrijeme**: ovdje se unosi koliko dane/sati resursa odgovaraju prema standardnom radnom vremenu tvrtke (npr. ako resurs radi pola radnog vremena, 1 njegov radni dan odgovara 0,5 standardnih radnih dana).      

### 3.b.3 Materijali

U ovoj kartici moguće je navesti Prihode ostvarene upotrebom materijala.
U prvim stupcima tablice može se unijeti kodificirani ili nekodificirani artikl, odnosno napomena, njegova eventualna varijanta te PDV. Sljedeći stupci su:      
- **Količina / Jedinični trošak / Ukupni trošak**: Ukupni trošak automatski se izračunava množenjem unesene količine i jediničnog troška.       
- **Vrsta izvora troška**: omogućuje odabir izvora za popunjavanje stupca *Jedinični trošak*, među opcijama: zadnji trošak, prosječni trošak, standardni trošak, neto cjenik dobavljača, narudžba dobavljača ili ulazna faktura. Zadana vrijednost definira se u [Parametrima ponude](/docs/configurations/parameters/sales/offer-parameters).    
- **Postotak / Vrijednost**: omogućuje unos eventualnog ricarica koji se primjenjuje na Ukupni trošak, u postotku ili apsolutnom iznosu.      
- **Prihod**: ovaj stupac automatski prikazuje Ukupni trošak uvećan za ricarico.        
- **Opis dobavljača**: predlaže se preferirani dobavljač iz šifrarnika artikla, ali se može izmijeniti. Ako je u stupcu *Vrsta izvora troška* odabran cjenik dobavljača, koristi se cjenik koji je važeći za tog dobavljača.
Također, taj će dobavljač biti nositelj **Zahtjeva za ponudu** generiranog iz ovog materijala.  
- **Broj / Datum zahtjeva**: prikazuje eventualno kreiran **Zahtjev za ponudu** za materijal. Kada se nalazite na kartici *Materijali*, na traci izbornika pojavljuje se tipka *Kreiraj zahtjev za ponudu*, koja generira RDO za odabrani materijal.     
- **Napomena**: polje za slobodan unos bilješki.    

Ostale kartice jednake su onima u ne-hijerarhijskoj ponudi.    

#### Posebne tipke

> **Kreiraj novi prototip**: ova tipka stvara [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabrani redak artikla; referenca na generirani predračun prikazuje se u kartici Podaci artikla, polje Predračun. Prototip se zatim može uređivati u odgovarajućem modulu.       
> **Poveži prototip**: ovom tipkom moguće je povezati ponudu s već postojećim[Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) già esistente; viene aperto un help nel quale poter scegliere tra i prototipi disponibili per quell'articolo.       
> **Otvori prototip**: ova tipka je aktivna ako odabrani redak artikla već ima pridruženi Prototip te omogućuje njegovo otvaranje.        
> **Uvoz iz projekta**: ova funkcija otvara pomoćnik Artikl projekta, gdje je moguće odabrati artikle iz nekog projekta koje želimo uključiti u prodajnu ponudu. Prozor se automatski otvara s filtrom postavljenim na kupca kojem pripada ponuda, kako bi se prikazali samo njegovi projekti.      
> **Novi podređeni redak**: omogućuje dodavanje projekta/retka koji će biti podređen odabranom retku.          
> **Novi redak istog nivoa**: omogućuje dodavanje projekta/retka na istoj hijerarhijskoj razini kao i odabrani redak.       
> **Zamijeni WBS broj**: omogućuje da se u WBS broj retka uključi i broj projekta.        
> **Implodiraj**: omogućuje sakrivanje svih redaka stabla.         
> **Eksplodiraj**: omogućuje prikaz svih redaka stabla.  

## **4. Sažeci ponude**

U ovoj kartici mogu se unijeti podaci koji vrijede za cijeli dokument: 
 

### 4.1 Konačni popusti artikala 

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  


### 4.2 Konačni troškovi/popusti/doplate

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 