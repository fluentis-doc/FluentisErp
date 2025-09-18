---
title: Parametri proizvodnog naloga 
sidebar_position: 1
---

Obrazac se otvara preko putanje **Parametri > Proizvodnja > Parametri proizvodnog naloga**. Kroz ovaj prozor se postavljaju svi parametri koji se tiču ​​kretanja artikala kroz procedure vezane za proizvodni prostor, kao i neki parametri koji vam omogućuju da odlučite kako upravljati nekim dijelovima proizvodnog prostora.  

## 1. Općenito 

**Automatsko upravljanje lotovima i serijskim brojevima**: ako je aktivno, automatski predlaže lotove i/ili serijske brojeve materijala koji se koriste tijekom proizvodnje, izravno unutar odgovarajućih rešetki postavljenih u odnosu na rešetku materijala korištenih u proizvodnji izvješća o proizvodnji . U suprotnom, korisnik će morati ručno postaviti i serije i serijske brojeve korištenih artikala koji imaju ovu vrstu upravljanja; Podsjećamo vas da se upravljanje serijama ili SB postavlja unutar *Šifarnik artikla* na kartici [Lotovi i SB](/docs/erp-home/registers/items/create-new-item) odabirom željene vrste upravljanja.

**Upravljanje duplom mjernom jedinicom**: ako je aktivno, omogućuje korisniku upravljanje dvostrukom mjernom jedinicom unutar izvješća o proizvodnji, dakle i za proizvedene artikle i za korištene materijale;  

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da odluči da je serija utovarena u skladište otpada identična proizvedenoj seriji (u slučaju otpada gotovog proizvoda, dakle u slučaju prva od 2 zastavice) ili na šaržu koja je korištena (u slučaju materijalnog otpada, dakle u slučaju druge od 2 zastavice); 

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da osigura da postupak *Puštanja proizvodnog naloga* provjerava jesu li količine materijala za istovar automatski (dakle, samo u slučaju automatskog ili ručnog komisioniranja, ali s WIP upravljanjem ) su dovoljne u skladištu iz kojeg se moraju preuzeti; ako nisu, postupak dijeli proizvodni nalog na 2 različite narudžbe koje će imati isti broj/godinu, ali različitu seriju (prva će imati seriju 0, druga seriju 1; prva će biti ona za koju su prisutni materijali ima dovoljno na zalihama);

**Promijeni podnalog kod promjene datuma proizvodnog naloga**: ako je aktivan, omogućuje korisniku da osigura da se, kada se promijeni datum završetka narudžbe za proizvodnju, automatski promijeni i datum završetka narudžbe, pod uvjetom da je artikl obuhvaćen proizvodnjom nalog je isti objekt kao proizvodni nalog; stoga proizvodni nalog mora biti razine 0; 

**Ispis radnih listova za pokrenute narudžbe**: omogućuje da se flag *Pokrenuto* postavi kao aktivan prema zadanim postavkama u odgovarajućem obrascu za pokretanje ispisa [Radni list](/docs/production/pp-production-in-progress/reports/worksheet).

**Automatsko određivanje vremena u izvješćima**: ako je aktivno, automatski izračunava vrijeme stroja i vrijeme radnika na temelju vremena izvješća. U suprotnom, korisnik će morati ručno postaviti ta vremena na proizvodnoj liniji za izvješćivanje; 

**Automatski prijedlog alternativne J.M.**: ako je aktivna, automatski predlaže alternativnu mjernu jedinicu postavljenu za stavku u izvješću o proizvodnji. Obično, ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**, ova je zastavica radi praktičnosti također aktivirana i može se uređivati ​​samo ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**; 

**Isti lot za materijalni otpad**: ako je omogućeno, odbijeni materijali zadržavaju istu seriju kao i potrošeni materijali; 

**Automatsko snimanje izvješća**: ako je aktivna, ova zastavica označava da se automatski bilježi čim uđem u izvješće; 

**Poveži partiju s otpremnom listom**: ako je aktivna, ova zastavica označava da kada je otpremna lista stvorena korištenjem odgovarajućeg postupka, za materijale kojima se upravlja u serijama, sustav odabire materijale koji će se odkupiti za proizvodne naloge koje sam odabrao; ako nije aktiviran to znači da će korisnik morati ručno deklarirati koje su serije prikupljene; 

**Ažuriranje materijala korištenih u proizvodnom nalogu**: ako je aktivno, kada se količina navedena u proizvodnoj deklaraciji promijeni, prikazat će se poruka s pitanjem treba li ili ne ponovno izračunati količine korištenih materijala; ako nije aktivan, ponovni izračun materijala događa se automatski;

**Omogući kontrolu u MES-u**: **Abilita controllo presenze nel MES**: ako je aktivirano, omogućuje se kontrola prisutnosti unutar [Fluentis MES](/docs/production/mes/mes-intro), kontrola se temelji na tablici *Fluentis.HR_BadgeRecords*.       
U ovoj tablici obavezna polja za kontrolu su: *HRBR_Resource_HRR_Id*, *HRBR_RecordDateTime*, *HRBR_BadgeRecordType_HRBRTY_Id*, koje može imati vrijednosti U = Ulazak ili I = Izlazak.
Za svaki red moguće je zabilježiti samo vrijeme ulaska ili vrijeme izlaska, stoga će za svaki korisnik postojati 4 reda dnevno, na primjer:      
- 2024-01-02 08:30:00.000 - tipo U 
- 2024-01-02 12:30:00.000 - Tipo I 
- 2024-01-02 14:00:00.000 - Tipo U 
- 2024-01-02 18:00:00.000 - Tipo I      

Podaci se moraju uvesti u ovu tablicu polazeći od podataka zabilježenih putem korištenog uređaja za evidentiranje radnog vremena.      
Ti će se podaci potom usporediti s vrijednostima početka i završetka rada svakog operatera unesenog u karticu *Tim* koja se nalazi u [Fluentis MES](/docs/production/mes/mes-intro).

**Prikaži verziju komponente unutar troška materijala**: ako je aktivirano, omogućuje se prikaz polja verzije unutar kartice komponente u strukturi proizvoda.  

**Omogući automatsko spremanje na proizvodnim izvještajima**: ako je aktivirano, omogućuje se automatsko spremanje unutar izjava o proizvodnji.  

Konačno, postoje još četiri odjeljka: **Lista posla upravljana za, Period analize, Vrednovanje materijala po cijeni, Sekvenca faze prijedloga**. 

**Lista posla upravljana za**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir vrste grupiranja za ispis radnog lista (koji sadrži parametre koji pokazuju kako taj materijal mora biti proizveden). Međutim, to je prijedlog, koji se zatim može modificirati unutar ispisne maske samog radnog lista; 

**Period analize**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir razdoblja filtriranja proizvodnih naloga koji moraju biti prikazani u prozoru za ispis radnog lista (tjedno, dnevno ili svakih X dana); 

**Valorizacija materijala po cijeni**: Ovaj odjeljak omogućuje definiranje parametara koji će se koristiti za izračun troškova vezanih uz evidentirane izjave o proizvodnji. (Ovi parametri se ne uzimaju u obzir kod [Obračun troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization), budući da ona preuzima vrijednosti izravno iz zapisa izjava o proizvodnji.)  

> **Zadnji**: omogućuje vrednovanje materijala po *Zadnjoj* cijeni;      
> **Srednji**: omogućuje vrednovanje materijala po *Prosječnoj* cijeni;                
> **Standard**: omogućuje vrednovanje materijala po *Standardnoj* cijeni;          
> **Iz područja upravljanja**: omogućuje vrednovanje materijala na temelju troška povezanog s odabranim *Upravljačkim područjem* u odgovarajućem padajućem izborniku;       
> **Trošak lota**: aktiviranjem ove opcije, procedura će vrednovati trošak materijala prema odabranoj vrsti troška, uzimajući u obzir isključivo vrijednosti tog konkretnog lota;       
> **Trošak narudžbe proizvodnje**: aktiviranjem ove opcije, procedura će vrednovati trošak materijala prema odabranoj vrsti troška, uzimajući u obzir isključivo vrijednosti te konkretne proizvodne narudžbe.      

:::note Napomena 
Ako su **Trošak lota** i **Trošak narudžbe proizvodnje** istovremeno aktivirani, procedura će vrednovati trošak materijala prema odabranoj vrsti troška, uzimajući u obzir isključivo vrijednosti te konkretne proizvodne narudžbe i tog konkretnog lota — naravno, među prometima evidentiranim uz ulazne uzroke koji imaju aktivirane oznake ažuriranja zadnjeg ili prosječnog troška (ovisno o vrijednosti u polju **Vrsta troška**) i fiskalnog značaja; ako se ne pronađe nijedan promet s tim karakteristikama, sustav traži među prometima koji su unijeli taj lot. Ako ni tu nema rezultata, traži među svim prometima tog artikla. Ako nema nijednog ulaznog prometa za taj artikl, tada sustav uzima vrijednosti iz pripadajućih polja za zadnji, prosječni i standardni trošak u šifrarniku artikla.
:::

**Sekvenca faze prijedloga**: odjeljak vam omogućuje da odaberete, tijekom stvaranja radnog ciklusa, redni broj predložene faze, koji se može uzeti iz rednog broja standardne faze ili kao progresivni broj naloga za umetanje , označavajući i vrijednost koraka.

## 2. Skladišta 

Obrazac je posvećen umetanju skladišta i povezanih razloga koji reguliraju kretanje artikala kroz proizvodne postupke; isti ekran ponovno se prikazuje u *MRP parametrima* artikla u kartici [Skladišta](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), s razlikom da se skladišta postavljena u *Parametrima proizvodnje* smatraju općim podacima koji prema zadanim postavkama vrijede za artikle; ako su različita skladišta postavljena za određenu stavku u *MRP parametrima* stavke, sustav će dati <u>prioritet parametrima</u> koje nađe postavljenima u ovom zadnjem prozoru za utovar i istovar materijala povezanih s proizvodnjom ove stavke.  
Također, moguće je postaviti iste parametre i za specifičnu Proizvodnu lokaciju.  

Dakle, prioritet za **Zaduženje** bit će određen sljedećim redoslijedom:  

- Skladište i predložak ako su navedeni u zaglavlju proizvodne narudžbe 
- [Parametri proizvodnog mjesta](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanoj s proizvodnom narudžbom  
- [MRP parametri artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Proizvodno mjesto povezano sa strojem koji je naveden u izjavi o proizvodnji; ako stroj nije naveden u izjavi, parametri se preuzimaju iz proizvodnog mjesta povezanog sa strojem koji je naveden u fazi proizvodne narudžbe  
- [Parametri proizvodnih narudžbi](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

Prioritet za **Istovar** bit će određen sljedećim redoslijedom:  

- [Parametri proizvodnog mjesta](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanoj s proizvodnom narudžbom  
- [MRP parametri artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- Proizvodno mjesto povezano sa strojem koji je naveden u izjavi o proizvodnji; ako stroj nije naveden u izjavi, parametri se preuzimaju iz proizvodnog mjesta povezanog sa strojem navedenim u fazi proizvodne narudžbe  
- [Parametri proizvodnih narudžbi](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)
  
Stoga u ovoj kartici možete postaviti skladišta koja se odnose na *Sirovine*,*Poluproizvode*, *Gotove proizvode* i bilo koji *Otpad* s pripadajućim razlozima za utovar i istovar.

Za postavljanje jednog od ovih skladišta bit će dovoljno odabrati putem pripadajućih padajućih izbornika skladište i predloške, koji su unaprijed definirani u odgovarajućim tablicama [Skladišta](/docs/configurations/tables/logistics/warehouses) i [Predlošci](/docs/configurations/tables/logistics/warehouse-templates) koje želite postaviti.  

Pored ovih glavnih skladišta, postoje i W.I.P. skladišta (upravljanje se ne koristi često), koja se aktiviraju odabirom stavke W.I.P. te daljnjim odabirom unutar kombiniranog okvira skladišta i predloška, kao što je to učinjeno za ostala skladišta.

Pod *W.I.P.* (Work in Progress) skladištima podrazumijevaju se prijelazna skladišta u koja roba ulazi u trenutku kada se proizvodna narudžba za gotov proizvod ili poluproizvod pusti u rad. Kada se ova skladišta postave, vrsta izdavanja materijala mora biti postavljena na *Ručno*, u suprotnom, ako je izdavanje postavljeno na *Automatski* način, materijal bi se automatski skinuo sa skladišta već u trenutku puštanja proizvodne narudžbe. U slučaju W.I.P. skladišta, materijal se u trenutku puštanja narudžbe prebacuje u ta skladišta (putem [Liste za izdavanje materijala](/docs/production/pp-production-in-progress/picking-materials-list)) i zatim se skida (iz skladišta) tijekom izrade izjave o proizvodnji za završnu fazu obrade (koja je proizvodna i omogućuje promet) artikla iz te narudžbe, ili tijekom faze obrade s kojom je taj materijal povezan.

U suprotnom, ako je vrsta izdavanja materijala postavljena na *Sa Listom*, tada se premještanje materijala u W.I.P. skladište odvija na isti način kao kod ručnog izdavanja, dok se skidanje sa W.I.P. skladišta vrši putem procedure [Liste za izdavanje materijala](/docs/production/pp-production-in-progress/picking-materials-list).     

### Funkcioniranje skladišta i predložaka

Što se tiče **knjiženja** izlaza materijala: 

- Ako se smatra **posljednjom proizvodnom i pokretnom fazom** ciklusa, koriste se skladišta i uzroci iz odjeljka **Gotovi proizvodi**, ako je narudžba proizvodnje **razine 1** (dakle, povezana s gotovim proizvodom), dok se koriste oni iz odjeljka **Poluproizvodi**, ako narudžba proizvodnje **nije razine 1** (dakle, radi se o poluproizvodu). Ako odjeljak **Poluproizvodi** nije popunjen, koriste se oni iz odjeljka **Gotovi proizvodi**.    
- U slučaju da **nije posljednja proizvodna i pokretna faza** ciklusa i **upravljanje WIP-om** **nije aktivirano**, koriste se skladišta i uzroci iz odjeljka **WIP Poluproizvodi**. Međutim, ako je **aktivirano** **upravljanje WIP-om**, koriste se oni iz **odjeljka WIP**, a oni iz odjeljka **WIP Poluproizvodi** više se ne uzimaju u obzir.

Za **otpremu** materijala umjesto:

- Ako **upravljanje WIP-om nije aktivirano**, koriste se skladišta i predlošci iz odjeljka **Sirovi materijal** ako artikl u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) ima **vrstu nabave: Kupnja**, ako artikl ima **vrstu nabave: Proizvodnja ili Podizvođač**, za knjiženje izlaza koriste se skladišta i predlošci iz odjeljka **Nezavršeni proizvodi**.       
- S druge strane, ako je **upravljanje WIP-om aktivirano**, koriste se skladišta i predlošci iz **odjeljka WIP** (ako nisu definirani, tada se koriste oni iz odjeljka Sirovi materijal). Dakle, ako artikl ima **vrstu nabave: Kupnja**, koristi se predložak **Potrošnja materijala**. Ako artikl ima **vrstu nabave: Proizvodnja ili Podizvođač**, koristi se predložak **Nezavršeni proizvodi**.

:::note Nota
Kada se aktivira flag  *W.I.P.* u *Parametrima proizvodnih naloga*,prilikom kreiranja naloga za kooperaciju (bilo putem *Izdavanje planiranih naloga* o izravno iz narudžbe proizvodnje), vode se u obzir za materijale koji se šalju trećoj strani skladište i uzrok prisutni u [Parametri za podizvođača](/docs/configurations/parameters/production/subcontractor-parameters) u odjeljku *Isporuke materijala podizvođačima W.I.P.*; dakle, u tom slučaju materijali koji se šalju podizvođačima bit će preuzeti izravno iz *W.I.P.* skladišta.      
:::    

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju obrazaca, molimo se obratite na sljedeću poveznicu [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

