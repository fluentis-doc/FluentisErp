---
title: Parametri proizvodnog naloga 
sidebar_position: 1
---

Obrazac se otvara preko putanje **Parametri > Proizvodnja > Parametri proizvodnog naloga**. Kroz ovaj prozor se postavljaju svi parametri koji se tiču ​​kretanja artikala kroz procedure vezane za proizvodni prostor, kao i neki parametri koji vam omogućuju da odlučite kako upravljati nekim dijelovima proizvodnog prostora.  

### Općenito 

**Automatsko upravljanje lotovima i serijskim brojevima**: ako je aktivno, automatski predlaže lotove i/ili serijske brojeve materijala koji se koriste tijekom proizvodnje, izravno unutar odgovarajućih rešetki postavljenih u odnosu na rešetku materijala korištenih u proizvodnji izvješća o proizvodnji . U suprotnom, korisnik će morati ručno postaviti i serije i serijske brojeve korištenih artikala koji imaju ovu vrstu upravljanja; Podsjećamo vas da se upravljanje serijama ili SB postavlja unutar *Šifarnik artikla* na kartici [Lotovi i SB](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) odabirom željene vrste upravljanja.

**Upravljanje duplom mjernom jedinicom**: ako je aktivno, omogućuje korisniku upravljanje dvostrukom mjernom jedinicom unutar izvješća o proizvodnji, dakle i za proizvedene artikle i za korištene materijale;  

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da odluči da je serija utovarena u skladište otpada identična proizvedenoj seriji (u slučaju otpada gotovog proizvoda, dakle u slučaju prva od 2 zastavice) ili na šaržu koja je korištena (u slučaju materijalnog otpada, dakle u slučaju druge od 2 zastavice); 

**Podijeli nalog ako lot materijala nije dostatan**: ako je aktivna, omogućuje korisniku da osigura da postupak *Puštanja proizvodnog naloga* provjerava jesu li količine materijala za istovar automatski (dakle, samo u slučaju automatskog ili ručnog komisioniranja, ali s WIP upravljanjem ) su dovoljne u skladištu iz kojeg se moraju preuzeti; ako nisu, postupak dijeli proizvodni nalog na 2 različite narudžbe koje će imati isti broj/godinu, ali različitu seriju (prva će imati seriju 0, druga seriju 1; prva će biti ona za koju su prisutni materijali ima dovoljno na zalihama);

**Promijeni podnalog kod promjene datuma proizvodnog naloga**: ako je aktivan, omogućuje korisniku da osigura da se, kada se promijeni datum završetka narudžbe za proizvodnju, automatski promijeni i datum završetka narudžbe, pod uvjetom da je artikl obuhvaćen proizvodnjom nalog je isti objekt kao proizvodni nalog; stoga proizvodni nalog mora biti razine 0; 

**Izračunaj troškove proizvodnje za idući korak**: ako je aktivan, omogućuje korisniku da osigura da se, kako se bilježi napredak proizvodnje, trošak registracije zaliha s vremena na vrijeme povećava za stvarni trošak izračunat na temelju stvarnog vremena prijavljenog u izvješćima pomnoženog s trošak po satu stroja i/ili grupe rada, dakle prema trošku po satu korištenog radnog centra; 

**Ispis radnih listova za pokrenute narudžbe**: to je zadana postavka koja je postavljena na relevantnom obrascu za pokretanje ispisa i kada se narudžbe pokrenu, narudžbe se automatski ispisuju; 

**Automatsko određivanje vremena u izvješćima**: ako je aktivno, automatski izračunava vrijeme stroja i vrijeme radnika na temelju vremena izvješća. U suprotnom, korisnik će morati ručno postaviti ta vremena na proizvodnoj liniji za izvješćivanje; 

**Automatski prijedlog alternativne J.M.**: ako je aktivna, automatski predlaže alternativnu mjernu jedinicu postavljenu za stavku u izvješću o proizvodnji. Obično, ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**, ova je zastavica radi praktičnosti također aktivirana i može se uređivati ​​samo ako je aktivirana zastavica **Upravljanje duplom mjernim jedinicama**; 

**Isti lot za materijalni otpad**: ako je omogućeno, odbijeni materijali zadržavaju istu seriju kao i potrošeni materijali; 

**Automatsko snimanje izvješća**: ako je aktivna, ova zastavica označava da se automatski bilježi čim uđem u izvješće; 

**Poveži partiju s otpremnom listom**: ako je aktivna, ova zastavica označava da kada je otpremna lista stvorena korištenjem odgovarajućeg postupka, za materijale kojima se upravlja u serijama, sustav odabire materijale koji će se odkupiti za proizvodne naloge koje sam odabrao; ako nije aktiviran to znači da će korisnik morati ručno deklarirati koje su serije prikupljene; 

**Ažuriranje materijala korištenih u proizvodnom nalogu**: ako je aktivno, kada se količina navedena u proizvodnoj deklaraciji promijeni, prikazat će se poruka s pitanjem treba li ili ne ponovno izračunati količine korištenih materijala; ako nije aktivan, ponovni izračun materijala događa se automatski;

**Omogući kontrolu u MES-u**: ako je aktivan, omogućuje kontrolu prisutnosti unutar Fluentis MES-a; 

**Prikaži verziju po komponenti u sastavnici**: ako je aktivno, omogućuje polje verzije na kartici komponente u sastavnici. 

Konačno, postoje još četiri odjeljka: **Lista posla upravljana za, Period analize, Vrednovanje materijala po cijeni, Sekvenca faze prijedloga**. 

**Lista posla upravljana za**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir vrste grupiranja za ispis radnog lista (koji sadrži parametre koji pokazuju kako taj materijal mora biti proizveden). Međutim, to je prijedlog, koji se zatim može modificirati unutar ispisne maske samog radnog lista; 

**Period analize**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir razdoblja filtriranja proizvodnih naloga koji moraju biti prikazani u prozoru za ispis radnog lista (tjedno, dnevno ili svakih X dana); 

**Vrednovanje materijala po cijeni**: odjeljak omogućuje, aktiviranjem jednog od radio gumba, odabir vrste troška za valorizaciju materijala (zadnji/prosječni trošak na dan plaćanja ili mog izvještaja o proizvodnji ili standardni trošak) . Nadalje, moguće je, odabirom oznaka *Lotovi i/ili Proizvodnog naloga*, predložiti kao trošak materijala konačni/prosječni/standardni trošak za odgovarajuću seriju i/ili proizvodni nalog na temelju aktiviranih oznaka.

**Sekvenca faze prijedloga**: odjeljak vam omogućuje da odaberete, tijekom stvaranja radnog ciklusa, redni broj predložene faze, koji se može uzeti iz rednog broja standardne faze ili kao progresivni broj naloga za umetanje , označavajući i vrijednost koraka.

### Skladišta 

Obrazac je posvećen umetanju skladišta i povezanih razloga koji reguliraju kretanje artikala kroz proizvodne postupke; isti ekran ponovno se prikazuje u *MRP parametrima* artikla u kartici [Skladišta](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), s razlikom da se skladišta postavljena u *Parametrima proizvodnje* smatraju općim podacima koji prema zadanim postavkama vrijede za artikle; ako su različita skladišta postavljena za određenu stavku u *MRP parametrima* stavke, sustav će dati <u>prioritet parametrima</u> koje nađe postavljenima u ovom zadnjem prozoru za utovar i istovar materijala povezanih s proizvodnjom ove stavke.  

Stoga u ovoj kartici možete postaviti skladišta koja se odnose na *Sirovine*,*Poluproizvode*, *Gotove proizvode* i bilo koji *Otpad* s pripadajućim razlozima za utovar i istovar.

Da biste mogli postaviti jedno od ovih skladišta, jednostavno odaberite skladište i razloge (unaprijed kodirane u odgovarajućim tablicama *Skladišta* i *Razlozi*) koje želite postaviti pomoću relevantnih kombiniranih okvira. 

Pored ovih glavnih skladišta postoje i skladišta W.I.P. (upravljanje nije široko korišteno) koje se aktiviraju odabirom stavke W.I.P. i nastavak odabira unutar kombiniranog okvira skladišta i razloga kao što je učinjeno za druga skladišta. 

Za skladišta *W.I.P.* (Work in Progress) označava prijelazna skladišta, u kojima roba prolazi kada se pusti proizvodni nalog za gotov proizvod ili poluproizvod. Kada su ta skladišta postavljena, tip preuzimanja materijala mora biti *Ručni*, inače, ako je tip *Automatskog* preuzimanja, istovar materijala bi se dogodio automatski kada se oslobodi proizvodni nalog. U slučaju skladišta W.I.P nakon otpuštanja, materijal se zatim premješta u ta skladišta i istovaruje tijekom izvješćivanja o proizvodnji posljednje faze obrade stavke proizvodnog naloga ili tijekom faze obrade kojoj je materijal pridružen.  

U suprotnom, ako je tip komisioniranja materijala *Sa popisom*, tada prilikom premještanja materijala u skladište W.I.P istovar iz W.I.P.-a odvija se na isti način kao kod ručnog tipa uzorkovanja. odvija se putem procedure Picking List.    

Konkretno, skladišta i razlozi upisani u odjeljku *W.I.P* koriste se u pokretima utovara i istovara signala svih faza radnog ciklusa osim posljednje faze.    
U slučaju posljednje faze koriste se skladišta i razlozi iz odjeljka *Gotovi proizvodi* ako je proizvodni nalog razine 1 (dakle, odnosi se na gotov proizvod), odnosno oni iz odjeljka *Poluproizvodi* ako proizvodni nalog nije stupanj 1 (dakle radi se o poluproizvodu) i zastavicom *W.I.P.* Onesposobljeno je; inače ako je zastava *W.I.P* aktivan i proizvodni nalog nije razine 1, koriste se oni iz odjeljka *Poluproizvodi W.I.P*. 

:::note BILJEŠKA 
Kada je zastavica *W.I.P* u *Parametrima proizvodnog naloga*, automatski prilikom kreiranja podugovaračkih naloga (iz *Objave planiranih naloga* ili izravno iz proizvodnog naloga), materijali koji se šalju podizvođaču uzimaju se u obzir prema skladištu i uzroku navedenim u [Parametrima za vanjsku obradu](/docs/configurations/parameters/production/subcontractor-parameters) u dijelu *Isporuka materijala podizvođačima W.I.P.*; dakle, u ovom slučaju materijali koji se šalju podizvođačima bit će preuzeti izravno iz skladišta *W.I.P.*    
:::    

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbi i polja](/docs/guide/common).
