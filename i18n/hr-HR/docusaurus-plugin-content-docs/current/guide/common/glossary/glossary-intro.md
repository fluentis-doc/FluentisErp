---
title: Rječnik
sidebar_position: 5
---

U ovom odjeljku bit će prikupljene definicije najčešće korištenih i ponavljajućih polja koja se nalaze u različitim obrascima sustava za upravljanje.

Za pretraživanje detaljnog objašnjenja nekog polja, dovoljno je odabrati članak koji odgovara početnom slovu polja koje želite istražiti.

### A

#### Artikl
Generičko polje koje će se nalaziti u mnogim obrascima, a u njemu će se prikazivati klasa, šifra i opis artikla (materijala) koji se želi kreirati, prikazati, premjestiti, kupiti, proizvesti ili prodati.

#### Artikl bez klase
To je vrsta stavke koja identificira nekodirane artikle; pod nekodiranim artiklima podrazumijevaju se svi artikli koji su opisni i mogu se knjižiti u analitičkom računovodstvu, ali se ne mogu premještati u skladištu.

#### Artikl sa klasom
To je vrsta stavke koja identificira kodirane artikle; pod kodiranim artiklima podrazumijevaju se svi artikli koji su kodirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu. 

#### Audit trail
Ovaj odjeljak možemo pronaći u različitim obrascima i služi za praćenje operacija; obično u ovom odjeljku možemo vidjeti korisnika koji je kreirao dokument i/ili izvršio posljednju izmjenu, zajedno s datumima unosa/izrade i izmjene.


### B

#### Broj linije 
Ovo polje će se automatski ispuniti prilikom unosa podataka u redak, na progresivan način;

### C

#### CIG
Identifikacijski kod nabave; kako bi se osigurala stvarna praćenost uplata od strane javnih uprava, elektronički računi izdani prema javnim upravama moraju sadržavati kod CIG i kod CUP; ovo je alfanumerički jedinstveni kod koji identificira određenu nabavu ili određeni lot i nalazi se na računima za prodaju i narudžbenicama za prodaju.

#### Cijena s PDV-om
U ovom polju prikazuje se cijena koja uključuje iznos PDV-a.

#### Cjenik dobavljača {#purchase-price-list}
U dokumentima nabave prikazuje se informacija unesena u *Šifarnik dobavljača > kartica Cjenici*, ali samo ako postoji zadani cjenik (tablica referencije 'Cjenici dobavljača').

#### Cjenik kupca {#sales-price-list}
U dokumentima prodaje prikazuje se informacija unesena u *Šifarnik kupca > kartica Cjenici*, ali samo ako postoji zadani cjenik (tablica referencije 'Cjenici prodaje').

#### Combo box
Također nazvan "padajući izbornik", ovo je polje koje zahtijeva odabir stavke s padajuće liste. Stavke koje se mogu odabrati mogu biti fiksne (korisnik ne može dodati nove stavke, obično zato što je pripadajuća tablica rezervirana za osnovne logike sustava) ili ih korisnik može dodavati i/ili mijenjati (korisnik može pristupiti tablici koja popunjava combo box, koja obično nosi isto ime; za praktičnost, umjesto traženja tablice, može također kliknuti desnim klikom i odabrati *Otvori obrazac*).

#### CUP
Jedinstveni projektni kod; kako bi se osigurala stvarna praćenost uplata od strane javnih uprava, elektronički računi izdani prema javnim upravama moraju sadržavati kod CUP i kod CIG; ovaj kod predstavlja alfanumerički niz od 15 znakova koji se generira putem sustava CUP; taj niz ostaje nepromijenjen jer identificira i prati javni projekt od trenutka njegovog nastanka. Nalazimo ga zajedno s kodom CIG na računima za prodaju i narudžbenicama za prodaju.


### D

#### Dani plaćanja za robu koja se kvari
Povezano je s člankom 62; za robu koja se kvari, račun treba biti izdan i plaćen unutar roka od 30/60 dana, ovisno o vrsti artikla. U ovom slučaju, kontrola se provodi i na artiklu i na vrsti plačanja kako bi se osiguralo da se ne mogu izdavati računi s datumom početka koji je duži od navedenog roka.

#### Datum dokumenta
Datum dokumenta (npr. ulazni račun); ovo polje je prisutno u dokumentima aktivnog i pasivnog ciklusa i u računovodstvenim evidencijama. Također se može pojaviti (s općenitijim značenjem) u dokumentima koji nisu fiskalni.

#### Datum dolaska
U ovom polju navodi se datum dolaska kupljene robe; ovo polje nalazimo u dokumentima nabave kao što su računi i primke, ili otpremnice i računi za povrat.

#### Datum dospijeća
Datum dospijeća plačanja, izračunat na temelju uvjeta plačanja ili ručno postavljen. Ovo polje obično se nalazi u dokumentima aktivnog i pasivnog ciklusa (primke, otpremnice, računi itd.). Izračun datuma provjerava uvjete plačanja (unesene u zaglavlju) i posebno način plačanja (na primjer, 30 dana od datuma računa) te ih zbraja s vrijednošću polja **Datum stupanja na snagu** (koje je također prisutno u dokumentu - otvaranjem expandera 'Isporuka'). Pogledajte i  **Dospjelost**. 

#### Datum kad je roba spremna

#### Datum početka/datuma isteka valjanosti {#validity-date}
U ova dva polja nalazimo datum početka valjanosti cjenika (dakle, od kada će cijene iz tog cjenika biti na snazi u različitim dokumentima) i datum isteka valjanosti (odnosno, kada cijene iz tog cjenika prestaju biti važeće i bit će zamijenjene novim cijenama u novom cjeniku).

#### Datum utovara
U ovom polju navodi se datum kada se roba koja je primljena utovaruje u skladište; ovo polje nalazimo u dokumentima nabave kao što su računi i primke, ili otpremnice i računi za povrat.

#### Datum valute {#currency-date}
Datum na kojem se izračunava vrijednost tečaja kao omjer između valute društva i valute dobavljača/klijenta, prema postavkama tablice *Tečajevi valuta* koja se nalazi na putanji *Konfiguracija > Tablice > Administracija*.

#### Dospijeće
Datum dospijeća izračunat je na temelju uvjeta plačanja ili ručno postavljen. Ovo polje prisutno je unutar stavki. Pogledajte također Datum dospijeća.

#### Država {#country}
Države su kodirane u pripadajućoj tablici **Države** koja se nalazi na putanji  *Konfiguracija > Tablice > Opće postavke*. Ovaj podatak može se unijeti u *Šifarnik kontakata > kartica Opće* i označava državu podrijetla subjekta. Ako je ovaj podatak *prisutan* u Šifarniku, automatski će se *predložiti* u svim *dokumentima* vezanim uz taj subjekt.  

### E


#### EDI
Sustav EDI (Electronic Data Interchange) omogućuje razmjenu dokumenata između informatičkih sustava različitih tvrtki putem namjenskog kanala i u definiranom formatu, što ne zahtijeva ljudsku intervenciju osim u iznimnim slučajevima; omogućuje slanje dokumenata poput narudžbenica, računa, cjenika itd. putem ovog sustava, koji su se prije slali putem e-maila, faksa ili pošte.

#### Expander {#expander}
Predstavljeni su kao dvije male strelice i omogućuju prikazivanje (otvoreno ![](/img/it-it/guide/glossary/e/image01.png)) ili skrivanje  (zatvoreno ![](/img/it-it/guide/glossary/e/image02.png)) podataka koje sadrže.

### F

### G

#### Godina
Ovo polje je generičko polje koje će se nalaziti unutar mnogih obrazaca u kojima se prikazuje godina u kojoj je dokument kreiran ili u kojoj se obavlja određena operacija; u većini obrazaca ovo polje se automatski popunjava.

#### Gratis artikl
To je vrsta stavke koja identificira poklon artikle; pod poklon artiklom podrazumijeva se artikl koji se vodi kao kodirani i nekodirani artikl u fiskalne i skladišne svrhe, ali se kao poklon računa odvojeno u sažecima Otpremnice/Primke.

### I

#### Ispisano/a
Ova oznaka se aktivira kada se pokrene ispis dokumenta.

#### Iznos stavke
Polje koje nalazimo u dokumentima prodaje i nabave, u kojem se navodi 'jednostavan' iznos stavke (količina x cijena) koji ne uključuje PDV i eventualne popuste.

### J

#### Jedinična mjera {#unit-of-measurement}
Kroz ovaj odabir se bira jedinična mjera za upravljanje koja je povezana s artiklom.

#### Jezik {#language}
Jezici su kodirani u pripadajućoj tablici **Jezici** koja se nalazi na putanji  *Konfiguracija > Tablice > Opće postavke*.
Ovaj podatak može se unijeti u *Šifarnik kontakata > kartica Opće* i odgovara jeziku na kojem se izdaju dokumenti.    
Ako je ovaj podatak *prisutan* u Šifarniku, automatski će se *predložiti* u svim *dokumentima* vezanim uz taj subjekt.  

### K

#### Klasa artikla {#item-class}
Ovo polje uključuje obavezne informacije o artiklu; pod klasom se podrazumijeva klasa kojoj artikal pripada unutar baze podataka (primjeri klasa: Sirovina, Poluproizvod, Gotov proizvod, itd.); klase u koje se odlučite grupirati artikle i između kojih možete birati prilikom kreiranja/dupliciranja artikla prethodno su kodirane unutar pripadajuće tablice **Klase** koja se nalazi na putanji **Tablice > Logistika**. U svim dokumentima artikal će se prikazivati sa svojom klasom i opisom. 

#### Knjiženo
Zastavica koja se nalazi u zaglavlju izlaznog i izlaznoog računa i koja, ako je aktivna, označava da je taj račun obračunat putem postupka [Obračuna izlaznog računa](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) i 'Obračuna ulaznog računa'. Za objašnjenje ovog postupka upućujemo na odgovarajuće članke;

#### Korisnik
pogledajte [ Operater](#user)

### L

#### Lotovi 
U ovom polju navodi se kod lota artikla, ako se artikal upravlja putem Upravljača lotovima koji je postavljen u šifarniku artikala na kartici ' Lotovi i S/B'.

### M


### N

#### Naknada PDV-a
Ako je postavljena, PDV na artiklu poklona uključuje se u ukupni iznos dokumenta.

#### Napomene o artiklu 
To je vrsta stavke koja je jednostavna bilješka, ne utječe na računovodstvo i skladište; u ovom polju mogu se upisati bilješke vezane uz artikle koje se žele prikazati u dokumentima prodaje/ kupnje.

#### Naša/vaša referenca

#### Nomenklatura
U ovom polju odabire se putem pomoći nomenklatura (tj. carinski kod artikla) koja je korisna za Intrastat prijavu za deklaraciju robe pri uvozu ili izvozu, kao i za statistiku trgovine artiklima unutar EU.

### O

#### Obrazac
Operativni prozor programa;

#### Od broja... do broja
Ova polja, koja su zajednička mnogim područjima filtriranja različitih obrazaca, koriste se za filtriranje dokumenata prema njihovom identifikacijskom broju; s ovim poljima se određuje od kojeg do kojeg broja dokumenta želimo pregledati rezultate.

#### Od datuma unosa... do datuma unosa
Ova polja, koja su zajednička mnogim područjima filtriranja različitih obrazaca, koriste se za filtriranje dokumenata prema razdoblju unosa u sustav; s ovim poljima se određuje razdoblje pretraživanja.

#### Odredište {#destination}
U narudžbenicama kupaca/dobavljača, otpremnicama i primkama i izlaznim i ulaznim računima, ovo polje automatski se popunjava sa zadanim odredištem koje je prethodno uneseno u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka*.  
Ako odredište nije isto kao zadano, moguće je promijeniti informacije izravno u polju **Odredište** u dokumentima.  
Odredište robe može se *poklapati* s Primateljem, ali može biti i različito ako primatelj, na primjer, ima više lokacija ili skladišta.

#### Operater {#user}
**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* koja se nalazi na putanji *Početna > Zaposlenici*. Podatak postaje **obavezan** ako je opcija postavljena u Parametrima dokumenta.

#### Osnovica

#### Otkazana/o
Aktivna oznaka omogućuje poništavanje dokumenta.

#### Otprema {#shipment}
Vrste otpreme kodiraju se u odgovarajućoj tablici **Otpreme** koja se nalazi na putanji *Konfiguracija > Tablice > Opće postavke*. Dodatno, ovaj podatak može biti unesen u *Šifrarnik kontakata > kartica Računovodstveni podaci > kartica Isporuka* kako bi se označila zadana otprema za artikle povezane s određenim subjektom.    
Ako je taj podatak *prisutan* u [Šifrarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), bit će automatski *predložen* u svim *dokumentima* povezanim s tim subjektom.

### P

#### Pakiranje {#packing}
Vrste pakiranja kodirane su u pripadajućoj tablici **Pakiranja** koja se nalazi na putanji *Konfiguracija > Tablice > Logistika*. Dodatno, ovaj podatak može se unijeti u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka* kako bi se označilo pakiranje po defaultu za artikle vezane uz određeni subjekt.    
Ako je ovaj podatak *prisutan* u [Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), *predložit* će se automatski u svim *dokumentima* vezanim uz taj subjekt.  

#### Paritet {#carriage}
Vrste troškova dostave kodirane su u pripadajućoj tablici **Pariteti** koja se nalazi na putanji *Konfiguracija > Tablice > Opće postavke*.  Ovaj podatak može se također unijeti u *Šifarnik kontakata > kartica Računovodstvo > kartica Dostava* kako bi označio zadane troškove dostave za artikle povezane sa subjektom.     
Ako je ovaj podatak *prisutan* u [Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), automatski će se  *predložiti* u svim *dokumentima* vezanim uz taj subjekt.  

#### PDV
To je obavezan podatak i nalazi se u svim dokumentima prodaje/nabave.

#### Plaćanje
U ovom polju navodi se rok plačanja povezan s subjektom u šifarniku kupaca/dobavljača/agenta na kartici 'Računovodstvo' u sekciji Administracija.

#### Početna bilješka {#initial-note}
Omogućuje odabir bilješki koje su prethodno unesene u pripadajuću tablicu koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje šifriranim bilješkama*. Da bi to učinio, korisnik treba dvaput kliknuti na polje **Početna bilješka** kako bi otvorio *Pomoć za šifrirane bilješke* i odabrati podatke, ili desnim klikom miša može otvoriti prozor za specificiranje vrlo dugog teksta napomene. Ako polje sadrži vrijednost, mijenja se boja pozadine polja.

#### Predložak skladišta
Ovo polje odnosi se na unaprijed definirane vrijednosti u odgovarajućoj tablici koja se nalazi na putanji *Početna > Tablice > Logistika*; u ovom polju nalazit će se predložak skladišta vezan uz operaciju skladišta koju namjeravate izvršiti. U dokumentima će se ovo polje, zajedno s poljem **Opis predloška skladišta** automatski popuniti ako su prisutni u Parametrima MRP-a u evidenciji artikla, na kartici **Skladišta**.

#### Preuzeto
Ova oznaka je prisutna u dokumentima prodaje/nabave kao što su računi i otpremnice te predstavlja jedan od tipova statusa dokumenta. Ako je aktivna, to znači da je materijal naveden u dokumentu preuzet u skladište.

#### Priloženi dokumenti
U ovom odjeljku, koji je prisutan u različitim obrascima, prikazuju se dokumenti koji su priloženi i koji se odnose na obrazac u kojem se nalazite.
 
#### Primatelj {#recipient}
U narudžbenicama kupaca/dobavljača, otpremnicama i primkama te izlaznim i ulaznim računima, ovo polje se automatski popunjava s zadanim primateljem koji je prethodno unesen u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka*.  
Ako primatelj nije isti kao zadani, moguće je promijeniti informacije izravno u polju **Primatelj** u dokumentima.  

#### Primjeni iz (datum)
Polje prisutno u dokumentima aktivnog i pasivnog ciklusa (npr. računi). Prilikom kreiranja dokumenta, automatski se postavlja na datum dokumenta, ali se može kasnije ručno promijeniti. Na temelju ovog polja izračunava se rok (ili rokovi) plačanja prema uvjetima plačanja (vrsta i način) postavljenim za dokument.

#### Proizvodni nalog 
Ovo polje odnosi se na proizvodne narudžbe; nalazimo ga u proizvodnom području i u dokumentima vezanim uz proizvodnju, kao i na računu za nabavu.

#### Promet nabave
U ovom polju predložen je podatak unesen u kartici 'Opći podaci' šifarnika artikala. Tako se predlaže vrsta ulaznog računa koja se povezuje s računovodstvenim kontima ulaznog računa. Ako ovo nije prisutno, neće se predložiti nikakvi podaci, ali će se prilikom knjiženja računa uzeti u obzir vrijednost unesena u polju 'Trošak/Prihod protustupnika' šifarnika dobavljača;

#### Promet prodaje
U ovom polju predložen je podatak unesen u kartici 'Opći podaci' šifarnika artikala. Tako se predlaže vrsta računa za prodaju koja se povezuje s računovodstvenim kontima izlaznog računa. Ako ovo nije prisutno, neće se predložiti nikakvi podaci, ali će se prilikom knjiženja računa uzeti u obzir vrijednost unesena u polju 'Trošak/Prihod protustupnika' šifarnika kupaca;

### Q

### R

#### Radni nalog
Ovo polje odnosi se na prodajnu narudžbu; nalazimo ga u dokumentima prodaje i nabave i omogućuje povezivanje dokumenta s postojećom prodajnom narudžbom.

### S

#### Sažetak PDV-a
Mreža u kojoj se prikazuje sažetak PDV-a dokumenta za svaki PDV kod.

#### Serijski broj (S/B)
Polje u kojem se navodi serijski broj specifičan za taj artikl, u slučaju da je u šifrarniku artikla u odjeljku Lotovi i S/B odabrana opcija upravljanja artiklom putem serijskih brojeva.

#### Skladište
U ovom polju, prisutnom u različitim obrascima, navest će se šifra skladišta koji ste odabrali za taj specifični artikal, zajedno s predloškom skladišta, ovisno o vrsti operacije koja će se izvršiti;

#### Status dokumenta
Podatak se odnosi na tablicu statusa dokumenta i prisutan je u dokumentima prodaje i nabave. Status dokumenta definiran je nizom oznaka koje se postavljaju unutar dokumenta od strane korisnika ili automatski kada se pokreću određeni postupci (npr. knjiženje, isporuka iz narudžbe itd.); vrste statusa mogu se razlikovati ovisno o dokumentu u kojem se nalazite (neki primjeri su: ispisan, odobren, arhiviran, knjižen, potvrđen itd.). Ovo polje može se koristiti u postupcima replikacije poslovnog softvera instaliranog za upravljanje poslovnicom s prodajnim mjestima.

#### Status isporuke
Ovo polje, prisutno u narudžbama za nabavu/prodaju i kod radova po narudžbi, prikazuje status isporuke dokumenta. Narudžba će se smatrati ispunjenom kada se izrade dokumenti otpremnice ili računi, a njezin status isporuke automatski će se promijeniti iz neizvršenog u djelomično izvršen (ako nisu izuzete sve stavke narudžbe) ili izvršen. Korisnik također ima mogućnost prisilno označiti narudžbu kao izvršenu, mijenjajući ručno status narudžbe u 'Prisilno izvršen'.

### Š

#### Šifra artikla {#item-code}
Ovo polje predstavlja specifični alfanumerički kod koji kodira artikal prema njegovim specifičnim karakteristikama; kod zajedno s klasom čini *naziv* artikla koji mora biti jedinstven;  

### T

#### Tečaj {#currency-exchange}
Ako je valuta tvrtke ista kao valuta dokumenta, prikazana vrijednost bit će 1; u suprotnom, vrijednost će se preuzeti iz tablice *Tečajevi valuta* ili iz tablice *Fiksni tečajevi za EURO* koje se nalaze u putanji  *Konfiguracija > Tablice > Administracija*.

#### Tracking number
Ovo polje se može pronaći na izlaznim računima, u kartici prijevoz, i služi za unos broja za praćenje (tracking number) vezanog uz pošiljku kako bi se olakšalo praćenje robe tijekom transporta.

#### Trošak
To je vrsta stavke koja identificira kodirane ili nekodirane artikle koji se ipak zasebno prikazuju u sažecima dokumenata; ako je artikl trošak kodiran i ima fiskalni značaj, bit će premješten u skladište, dok ako nije kodiran ili nema fiskalni značaj, neće se premještati u skladište.

### U

#### Učitano/a
Ova oznaka, ako je aktivna, označava da su stavke primke i/ili računa učitane u skladište putem procedura [Učitavanje primke u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) i [Učitavanje ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). Za postupke učitavanja dokumenata pogledajte odgovarajuće članke.  


### V

#### Valuta {#currency}
Valute se kodiraju u pripadajućoj tablici **Valute** koja se nalazi na putanji  *Konfiguracija > Tablice > Opće postavke*.  U dokumentima se prema zadanim postavkama prikazuje informacija unesena u *Šifarnik kontakata > kartica Računovodstvo > kartica Administracija* kako bi se označila valuta po defaultu za artikle vezane uz određeni subjekt.  


#### V.I.E.S.
VIES (VAT Information Exchange System) je sustav za razmjenu informacija među zemljama EU za pravilno oporezivanje. Konkretno, riječ je o informatiziranom sustavu koji omogućuje tvrtkama brzu provjeru PDV broja svojih kupaca. Naravno, moguće je provjeriti samo PDV brojeve kupaca koji su se prijavili u ovaj sustav (moguće je da mali obrtnici i trgovci koji nemaju unutar EU trgovinsku razmjenu nisu registrirali svoju tvrtku u ovom sustavu). Iz šifarnika kontakata, unosom PDV broja i klikom na gumb Predloži podatke, sustav će provjeriti valjanost i točnost PDV broja dotičnog subjekta. Moguće je da pretrage koje ne daju rezultate ponekad ovise o privremenim neispravnostima subjekata ili samog sustava za rpovjeru.

#### Vrsta artikla {#item-nature}
Koristi se u nekim postupcima. U kombiniranom izborniku nalazimo popis različitih vrsta koje možemo dodijeliti artiklu:
 - *Opremu/alate/strojeve* > grupa artikala za proizvodni dio;   
 - *Obitelj artikala* > definira artikal za prodajne prognoze;   
 - *Pakiranje* > koristi se za upravljanje vraćenim pakiranjima, za računovodstvo (za praćenje koliko pakiranja imamo u skladištu i koliko smo ih dali kupcu ili dobavljaču, te koliko nam još moraju vratiti);  
 - *Usluge* > za upravljanje postprodajnim intervencijama;  
 - *Posudbe/upit/komponente sustava* > služe za upravljanje održavanjem.  

#### Vrsta stavke
Vrsta stavke identificira tip artikla. Mogu biti različitih vrsta:  

1-*Kodirani artikl*: artikli koji su kodirani u evidenciji, koji ulaze/izlaze iz skladišta i mogu biti obračunati u analitičkoj računovodstvenoj evidenciji;    
2-*Nekodirani artikl*: opisni artikli koji mogu biti obračunati u analitičkoj računovodstvenoj evidenciji, ali NE utječu na skladište;    
4-*Bilješke artikla*: opisne bilješke koje se prikazuju na ispisu dokumenta; ne utječu na računovodstvo i skladište;    
5-*Gratis artikl*: poklon artikl se vodi kao kodirani ili nekodirani artikl u smislu poreza i skladišta, ali se kao poklon obračunava posebno u pregledima dokumenta.  

### Z

#### Zadani korisnik
Nalazi se u obrascu za prijavu u aplikaciju.

#### Zaglavlje
Ovim pojmom se podrazumijeva alternativno:
 1. U obrascima za pretragu: Gornji dio obrasca (odmah ispod **trake izbornika** ) gdje se nalazi područje za filtriranje pretrage (također grafički posebno označeno) s pripadajućim poljima koja se mogu koristiti za preciziranje pretrage. Što se više informacija unese, to će pretraga biti preciznija jer polja međusobno djeluju.  
 2. U obrascima za unos (primjerice dokumenata ili računovodstvenih evidencija): Gornji dio dokumenta (u gornjem dijelu obrasca, odmah ispod **trake izbornika**) koji sadrži opće i zajedničke podatke dokumenta (ili evidencije) kao što su broj, datum, račun kupca ili dobavljača na kojeg je dokument naslovljen itd. Ovo područje je jasno definirano (također i grafički) u odnosu na središnji dio dokumenta (i obrasca) koji sadrži detaljne podatke, kao što su uneseni artikli u dokumentu ili detaljne linije evidencije itd. Za neke vrste dokumenata, zaglavlje može zauzimati cijeli prostor obrasca i tako se, u odnosu na detalje, identificira posebnom **Karticom** 

#### Zona {#zone}
Zone se kodiraju u pripadajućoj tablici **Zone** koja se nalazi na putanji  *Konfiguracija > Tablice > Opće postavke*. Dodatno, ovaj podatak može se unijeti u *Šifarnik kontakata > kartica Računovodstveni podaci > kartica Isporuka* kako bi označio zonu podrijetla subjekta.     
Ako je ovaj *podatak* prisutan u Šifarnik, bit će *predložen* kao zadani u svim  *dokumentima* koji se odnose na tog subjekta.  

#### Zone isporuke {#delivery-zone}
Zone isporuke kodiraju se u pripadajućoj tablici **Zone isporuke** Zone isporuke  *Konfiguracija > Tablice > Opće postavke*. Ovaj podatak također se može unijeti u  *Šifarnik kontakata > kartica Računovodstveni podaci > kartica Isporuka* kako bi označio zonu isporuke robe.    
Ako je ovaj podatak *prisutan* u Šifarnik, bit će *predložen* kao zadani u svim  *dokumentima* koji se odnose na tog subjekta.  

