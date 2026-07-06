---
title: Rečnik - pojmovnik
sidebar_position: 5
---

U ovom odeljku biće prikupljene definicije najčešće korišćenih i ponavljajućih polja koja se nalaze u različitim obrascima sistema za upravljanje.

Za pretraživanje detaljnog objašnjenja nekog polja, dovoljno je izabrati članak koji odgovara početnom slovu polja koje želite da istražite.

### A

#### Artikal
Generičko polje koje će se nalaziti u mnogim obrascima, a u njemu će se prikazivati klasa, šifra i opis artikla (materijala) koji se želi kreirati, prikazati, premestiti, kupiti, proizvesti ili prodati.

#### Artikal bez klase
To je vrsta stavke koja identifikuje nekodirane artikle; pod nekodiranim artiklima podrazumevaju se svi artikli koji su opisni i mogu se knjižiti u analitičkom računovodstvu, ali se ne mogu premeštati u skladištu.

#### Artikal sa klasom
To je vrsta stavke koja identifikuje kodirane artikle; pod kodiranim artiklima podrazumevaju se svi artikli koji su kodirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu i registrovati u skladištu.

#### Audit trail
Ovaj odeljak možemo pronaći u različitim obrascima i služi za praćenje operacija; obično u ovom odeljku možemo videti korisnika koji je kreirao dokument i/ili izvršio poslednju izmenu, zajedno sa datumima unosa/izrade i izmene.


### B

#### Broj linije
Ovo polje će se automatski popuniti prilikom unosa podataka u red, na progresivan način;

### C

#### CIG
Identifikacioni kod nabavke; kako bi se osiguralo stvarno praćenje uplata od strane javnih uprava, elektronski računi izdati prema javnim upravama moraju sadržati kod CIG i kod CUP; ovo je alfanumerički jedinstveni kod koji identifikuje određenu nabavku ili određeni lot i nalazi se na računima za prodaju i narudžbenicama za prodaju.

#### Cena sa PDV-om
U ovom polju prikazuje se cena koja uključuje iznos PDV-a.

#### Cenovnik dobavljača {#purchase-price-list}
U dokumentima nabavke prikazuje se informacija uneta u *Šifarnik dobavljača > kartica Cenovnici*, ali samo ako postoji podrazumevani cenovnik (referentna tabela „Cenovnici dobavljača”).

#### Cenovnik kupca {#sales-price-list}
U dokumentima prodaje prikazuje se informacija uneta u *Šifarnik kupca > kartica Cenovnici*, ali samo ako postoji podrazumevani cenovnik (referentna tabela „Cenovnici prodaje”).

#### Combo box
Takođe nazvan „padajući meni”, ovo je polje koje zahteva izbor stavke sa padajuće liste. Stavke koje se mogu izabrati mogu biti fiksne (korisnik ne može dodati nove stavke, obično zato što je pripadajuća tabela rezervisana za osnovne logike sistema) ili ih korisnik može dodavati i/ili menjati (korisnik može pristupiti tabeli koja popunjava combo box, koja obično nosi isto ime; radi praktičnosti, umesto traženja tabele, može takođe kliknuti desnim tasterom miša i izabrati *Otvori obrazac*).

#### CUP
Jedinstveni projektni kod; kako bi se osiguralo stvarno praćenje uplata od strane javnih uprava, elektronski računi izdati prema javnim upravama moraju sadržati kod CUP i kod CIG; ovaj kod predstavlja alfanumerički niz od 15 znakova koji se generiše putem sistema CUP; taj niz ostaje nepromenjen jer identifikuje i prati javni projekat od trenutka njegovog nastanka. Nalazimo ga zajedno sa kodom CIG na računima za prodaju i narudžbenicama za prodaju.

### D

#### Dani plaćanja (za kvarljivu robu)
Povezano je sa članom 62; za kvarljivu robu račun treba da bude izdat i plaćen u roku od 30/60 dana, u zavisnosti od vrste artikla. U ovom slučaju, kontrola se vrši i na artiklu i na vrsti plaćanja kako bi se osiguralo da se ne mogu izdavati računi sa datumom početka koji je duži od navedenog roka.

#### Datum dokumenta
Datum dokumenta (npr. ulazni račun); ovo polje je prisutno u dokumentima aktivnog i pasivnog ciklusa i u računovodstvenim evidencijama. Takođe se može pojaviti (sa opštijim značenjem) u dokumentima koji nisu fiskalni.

#### Datum dolaska
U ovom polju navodi se datum dolaska kupljene robe; ovo polje nalazimo u dokumentima nabavke kao što su računi i prijemnice, ili otpremnice i računi za povrat.

#### Datum dospeća
Datum dospeća plaćanja, izračunat na osnovu uslova plaćanja ili ručno postavljen. Ovo polje obično se nalazi u dokumentima aktivnog i pasivnog ciklusa (prijemnice, otpremnice, računi itd.). Izračun datuma proverava uslove plaćanja (unete u zaglavlju) i posebno način plaćanja (na primer, 30 dana od datuma računa) i sabira ih sa vrednošću polja **Datum stupanja na snagu** (koje je takođe prisutno u dokumentu - otvaranjem proširenja *Isporuka*). Pogledajte i **Dospeće**.

#### Datum kada je roba spremna

#### Datum početka/datum isteka važenja {#validity-date}
U ova dva polja nalazimo datum početka važenja cenovnika (dakle, od kada će cene iz tog cenovnika biti na snazi u različitim dokumentima) i datum isteka važenja (odnosno, kada cene iz tog cenovnika prestaju da važe i biće zamenjene novim cenama u novom cenovniku).

#### Datum utovara
U ovom polju navodi se datum kada se roba koja je primljena utovaruje u skladište; ovo polje nalazimo u dokumentima nabavke kao što su računi i prijemnice, ili otpremnice i računi za povrat.

#### Datum valute {#currency-date}
Datum na koji se izračunava vrednost kursa kao odnos između valute društva i valute dobavljača/klijenta, prema podešavanjima tabele *Kursevi valuta* koja se nalazi na putanji *Konfiguracija > Tabele > Administracija*.

#### Dospeće
Datum dospeća izračunat je na osnovu uslova plaćanja ili ručno postavljen. Ovo polje prisutno je unutar stavki. Pogledajte takođe Datum dospeća.

#### Država {#country}
Države su kodirane u pripadajućoj tabeli **Države** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*. Ovaj podatak može se uneti u *Šifarnik kontakata > kartica Opšte* i označava državu porekla subjekta. Ako je ovaj podatak *prisutan* u Šifarniku, automatski će se *predložiti* u svim *dokumentima* vezanim za taj subjekt.

### E

#### EDI
Sistem EDI (Electronic Data Interchange) omogućava razmenu dokumenata između informacionih sistema različitih kompanija putem namenskog kanala i u definisanom formatu, što ne zahteva ljudsku intervenciju osim u izuzetnim slučajevima; omogućava slanje dokumenata poput narudžbenica, računa, cenovnika itd. putem ovog sistema, koji su se ranije slali putem e-pošte, faksa ili pošte.

#### Expander {#expander}
Predstavljeni su kao dve male strelice i omogućavaju prikazivanje (otvoreno ![](/img/it-it/guide/glossary/e/image01.png)) ili skrivanje (zatvoreno ![](/img/it-it/guide/glossary/e/image02.png)) podataka koje sadrže.

### F

### G

#### Godina
Ovo polje je generičko polje koje će se nalaziti unutar mnogih obrazaca u kojima se prikazuje godina u kojoj je dokument kreiran ili u kojoj se obavlja određena operacija; u većini obrazaca ovo polje se automatski popunjava.

#### Gratis artikal
To je vrsta stavke koja identifikuje poklon artikle; pod poklon artiklom podrazumeva se artikal koji se vodi kao kodirani i nekodirani artikal u fiskalne i skladišne svrhe, ali se kao poklon obračunava odvojeno u sažecima Otpremnice/Prijemnice.

### I

#### Ispisano/a
Ova oznaka se aktivira kada se pokrene štampanje dokumenta.

#### Iznos stavke
Polje koje nalazimo u dokumentima prodaje i nabavke, u kojem se navodi „jednostavan” iznos stavke (količina x cena) koji ne uključuje PDV i eventualne popuste.

### J

#### Jedinica mere {#unit-of-measurement}
Ovim izborom bira se jedinica mere za upravljanje koja je povezana sa artiklom.

#### Jezik {#language}
Jezici su kodirani u pripadajućoj tabeli **Jezici** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*.
Ovaj podatak može se uneti u *Šifarnik kontakata > kartica Opšte* i odgovara jeziku na kojem se izdaju dokumenti.    
Ako je ovaj podatak *prisutan* u Šifarniku, automatski će se *predložiti* u svim *dokumentima* vezanim za taj subjekt.

### K

#### Klasa artikla {#item-class}
Ovo polje uključuje obavezne informacije o artiklu; pod klasom se podrazumeva klasa kojoj artikal pripada unutar baze podataka (primeri klasa: Sirovina, Poluproizvod, Gotov proizvod itd.); klase u koje odlučite da grupišete artikle i između kojih možete birati prilikom kreiranja/dupliciranja artikla prethodno su kodirane unutar pripadajuće tabele **Klase** koja se nalazi na putanji **Tabele > Logistika**. U svim dokumentima artikal će se prikazivati sa svojom klasom i opisom.

#### Knjiženo
Oznaka koja se nalazi u zaglavlju izlaznog i ulaznog računa i koja, ako je aktivna, označava da je taj račun proknjižen putem postupka [Knjiženja izlaznog računa](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) i „Knjiženja ulaznog računa”. Za objašnjenje ovog postupka upućujemo na odgovarajuće članke.

#### Korisnik
Pogledajte [Operater](#user).

### L

#### Lotovi
U ovom polju navodi se šifra lota artikla, ako se artiklom upravlja putem Upravljača lotovima koji je postavljen u šifarniku artikala na kartici *Lotovi i S/B*.

### M

### N

#### Naknada PDV-a
Ako je postavljena, PDV na poklon artiklu uključuje se u ukupan iznos dokumenta.

#### Napomene o artiklu
To je vrsta stavke koja predstavlja jednostavnu napomenu i ne utiče na računovodstvo i skladište; u ovom polju mogu se uneti napomene vezane za artikle koje se žele prikazati u dokumentima prodaje/nabavke.

#### Naša/vaša referenca

#### Nomenklatura
U ovom polju se pomoću pretrage bira nomenklatura (tj. carinska šifra artikla) koja je korisna za Intrastat prijavu za deklarisanje robe pri uvozu ili izvozu, kao i za statistiku trgovine artiklima unutar EU.

### O

#### Obrazac
Operativni prozor programa;

#### Od broja... do broja
Ova polja, koja su zajednička mnogim oblastima filtriranja različitih obrazaca, koriste se za filtriranje dokumenata prema njihovom identifikacionom broju; ovim poljima se određuje od kojeg do kojeg broja dokumenta želimo da pregledamo rezultate.

#### Od datuma unosa... do datuma unosa
Ova polja, koja su zajednička mnogim oblastima filtriranja različitih obrazaca, koriste se za filtriranje dokumenata prema periodu unosa u sistem; ovim poljima se određuje period pretrage.

#### Odredište {#destination}
U narudžbenicama kupaca/dobavljača, otpremnicama i prijemnicama i izlaznim i ulaznim računima, ovo polje automatski se popunjava podrazumevanim odredištem koje je prethodno uneto u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka*.  
Ako odredište nije isto kao podrazumevano, moguće je promeniti informacije direktno u polju **Odredište** u dokumentima.  
Odredište robe može se *poklapati* sa Primaocem, ali može biti i različito ako primalac, na primer, ima više lokacija ili skladišta.

#### Operater {#user}
**Operater**: omogućava unos korisnika koji kreira dokument. Zaposleni su prethodno uneti u tabelu *Zaposleni* koja se nalazi na putanji *Početna > Zaposleni*. Podatak postaje **obavezan** ako je opcija postavljena u Parametrima dokumenta.

#### Osnovica

#### Otkazan/o
Aktivna oznaka omogućava poništavanje dokumenta.

#### Otprema {#shipment}
Vrste otpreme kodiraju se u odgovarajućoj tabeli **Otpreme** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*. Dodatno, ovaj podatak može biti unet u *Šifarnik kontakata > kartica Računovodstveni podaci > kartica Isporuka* kako bi se označila podrazumevana otprema za artikle povezane sa određenim subjektom.    
Ako je taj podatak *prisutan* u [Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), biće automatski *predložen* u svim *dokumentima* povezanim sa tim subjektom.

### P

#### Pakovanje {#packing}
Vrste pakovanja kodirane su u pripadajućoj tabeli **Pakovanja** koja se nalazi na putanji *Konfiguracija > Tabele > Logistika*. Dodatno, ovaj podatak može se uneti u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka* kako bi se označilo podrazumevano pakovanje za artikle povezane sa određenim subjektom.    
Ako je ovaj podatak *prisutan* u [Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), automatski će se *predložiti* u svim *dokumentima* povezanim sa tim subjektom.

#### Paritet {#carriage}
Vrste troškova dostave kodirane su u pripadajućoj tabeli **Pariteti** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*. Ovaj podatak može se takođe uneti u *Šifarnik kontakata > kartica Računovodstvo > kartica Dostava* kako bi označio podrazumevane troškove dostave za artikle povezane sa subjektom.     
Ako je ovaj podatak *prisutan* u [Šifarniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), automatski će se *predložiti* u svim *dokumentima* povezanim sa tim subjektom.

#### PDV
To je obavezan podatak i nalazi se u svim dokumentima prodaje/nabavke.

#### Plaćanje
U ovom polju navodi se rok plaćanja povezan sa subjektom u šifarniku kupaca/dobavljača/agenta na kartici *Računovodstvo* u sekciji Administracija.

#### Početna napomena {#initial-note}
Omogućava izbor napomena koje su prethodno unete u pripadajuću tabelu koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje šifriranim napomenama*. Da bi to uradio, korisnik treba dvaput da klikne na polje **Početna napomena** kako bi otvorio *Pomoć za šifrirane napomene* i izabrao podatke, ili desnim klikom miša može otvoriti prozor za unos veoma dugog teksta napomene. Ako polje sadrži vrednost, menja se boja pozadine polja.

#### Predložak skladišta
Ovo polje odnosi se na unapred definisane vrednosti u odgovarajućoj tabeli koja se nalazi na putanji *Početna > Tabele > Logistika*; u ovom polju nalaziće se predložak skladišta povezan sa skladišnom operacijom koju nameravate da izvršite. U dokumentima će se ovo polje, zajedno sa poljem **Opis predloška skladišta**, automatski popuniti ako su prisutni u Parametrima MRP-a u evidenciji artikla, na kartici **Skladišta**.

#### Preuzeto
Ova oznaka je prisutna u dokumentima prodaje/nabavke kao što su računi i otpremnice i predstavlja jedan od tipova statusa dokumenta. Ako je aktivna, to znači da je materijal naveden u dokumentu preuzet u skladište.

#### Priloženi dokumenti
U ovom odeljku, koji je prisutan u različitim obrascima, prikazuju se dokumenti koji su priloženi i koji se odnose na obrazac u kojem se nalazite.

#### Primalac {#recipient}
U narudžbenicama kupaca/dobavljača, otpremnicama i prijemnicama i izlaznim i ulaznim računima, ovo polje se automatski popunjava podrazumevanim primaocem koji je prethodno unet u *Šifarnik kontakata > kartica Računovodstvo > kartica Isporuka*.  
Ako primalac nije isti kao podrazumevani, moguće je promeniti informacije direktno u polju **Primalac** u dokumentima.

#### Primeni od (datum)
Polje prisutno u dokumentima aktivnog i pasivnog ciklusa (npr. računi). Prilikom kreiranja dokumenta, automatski se postavlja na datum dokumenta, ali se kasnije može ručno promeniti. Na osnovu ovog polja izračunava se rok (ili rokovi) plaćanja prema uslovima plaćanja (vrsta i način) postavljenim za dokument.

#### Proizvodni nalog
Ovo polje odnosi se na proizvodne naloge; nalazimo ga u proizvodnom području i u dokumentima povezanim sa proizvodnjom, kao i na računu nabavke.

#### Promet nabavke
U ovom polju predlaže se podatak unet na kartici *Opšti podaci* šifarnika artikala. Tako se predlaže vrsta ulaznog računa koja se povezuje sa računovodstvenim kontima ulaznog računa. Ako ovaj podatak nije prisutan, neće biti predložen nijedan podatak, ali će se prilikom knjiženja računa uzeti u obzir vrednost uneta u polju *Konto podrazumevanog troška/prihoda* šifarnika dobavljača;

#### Promet prodaje
U ovom polju predlaže se podatak unet na kartici *Opšti podaci* šifarnika artikala. Tako se predlaže vrsta izlaznog računa koja se povezuje sa računovodstvenim kontima izlaznog računa. Ako ovaj podatak nije prisutan, neće biti predložen nijedan podatak, ali će se prilikom knjiženja računa uzeti u obzir vrednost uneta u polju *Konto podrazumevanog troška/prihoda* šifarnika kupaca;

### Q

### R

#### Radni nalog
Ovo polje odnosi se na prodajnu narudžbenicu; nalazimo ga u dokumentima prodaje i nabavke i omogućava povezivanje dokumenta sa postojećom prodajnom narudžbenicom.

### S

#### Sažetak PDV-a
Tabela u kojoj se prikazuje sažetak PDV-a dokumenta za svaku PDV šifru.

#### Serijski broj (S/B)
Polje u kojem se navodi serijski broj specifičan za taj artikal, u slučaju da je u šifarniku artikla u odeljku *Lotovi i S/B* izabrana opcija upravljanja artiklom putem serijskih brojeva.

#### Skladište
U ovom polju, prisutnom u različitim obrascima, navodi se šifra skladišta koje ste izabrali za taj određeni artikal, zajedno sa predloškom skladišta, u zavisnosti od vrste operacije koja će se izvršiti;

#### Status dokumenta
Podatak se odnosi na tabelu statusa dokumenta i prisutan je u dokumentima prodaje i nabavke. Status dokumenta definisan je nizom oznaka koje unutar dokumenta postavlja korisnik ili koje se postavljaju automatski kada se pokrenu određeni postupci (npr. knjiženje, isporuka iz narudžbenice itd.); vrste statusa mogu se razlikovati u zavisnosti od dokumenta u kojem se nalazite (neki primeri su: odštampan, odobren, arhiviran, knjižen, potvrđen itd.). Ovo polje može se koristiti u postupcima replikacije poslovnog softvera instaliranog za upravljanje poslovnicom sa prodajnim mestima.

#### Status isporuke
Ovo polje, prisutno u narudžbenicama nabavke/prodaje i kod poslova po narudžbini, prikazuje status isporuke dokumenta. Narudžbenica će se smatrati izvršenom kada se kreiraju otpremnice ili računi, a njen status isporuke automatski će se promeniti iz neizvršenog u delimično izvršen (ako nisu izvršene sve stavke narudžbenice) ili izvršen. Korisnik takođe ima mogućnost da prinudno označi narudžbenicu kao izvršenu, ručno menjajući status narudžbenice u *Prinudno izvršen*.

### Š

#### Šifra artikla {#item-code}
Ovo polje predstavlja specifični alfanumerički kod kojim se kodira artikal prema njegovim specifičnim karakteristikama; kod zajedno sa klasom čini *naziv* artikla koji mora biti jedinstven;  

### T

#### Kurs {#currency-exchange}
Ako je valuta kompanije ista kao valuta dokumenta, prikazana vrednost biće 1; u suprotnom, vrednost će biti preuzeta iz tabele *Kursevi valuta* ili iz tabele *Fiksni kursevi za EURO* koje se nalaze na putanji *Konfiguracija > Tabele > Administracija*.

#### Tracking number
Ovo polje može se pronaći na izlaznim računima, na kartici transporta, i služi za unos broja za praćenje (tracking number) povezanog sa pošiljkom kako bi se olakšalo praćenje robe tokom transporta.

#### Trošak
To je vrsta stavke koja identifikuje kodirane ili nekodirane artikle koji se ipak zasebno prikazuju u sažecima dokumenata; ako je artikal troška kodiran i ima fiskalni značaj, biće premešten u skladište, dok se, ako nije kodiran ili nema fiskalni značaj, neće premeštati u skladište.

### U

#### Učitano/a
Ova oznaka, ako je aktivna, označava da su stavke prijemnice i/ili računa učitane u skladište putem procedura [Učitavanje prijemnice u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) i [Učitavanje ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). Za postupke učitavanja dokumenata pogledajte odgovarajuće članke.  

### V

#### Valuta {#currency}
Valute se kodiraju u pripadajućoj tabeli **Valute** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*. U dokumentima se prema podrazumevanim podešavanjima prikazuje informacija uneta u *Šifarnik kontakata > kartica Računovodstvo > kartica Administracija* kako bi se označila podrazumevana valuta za artikle povezane sa određenim subjektom.  

#### V.I.E.S.
VIES (VAT Information Exchange System) je sistem za razmenu informacija među zemljama EU radi pravilnog oporezivanja. Konkretno, reč je o informatizovanom sistemu koji omogućava kompanijama brzu proveru PDV broja svojih kupaca. Naravno, moguće je proveriti samo PDV brojeve kupaca koji su se prijavili u ovaj sistem (moguće je da mali preduzetnici i trgovci koji nemaju trgovinsku razmenu unutar EU nisu registrovali svoju kompaniju u ovom sistemu). Iz šifarnika kontakata, unosom PDV broja i klikom na dugme **Predloži podatke**, sistem će proveriti validnost i tačnost PDV broja dotičnog subjekta. Moguće je da pretrage koje ne daju rezultate ponekad zavise od privremenih nepravilnosti kod subjekata ili samog sistema za proveru.

#### Vrsta artikla {#item-nature}
Koristi se u nekim postupcima. U kombinovanom meniju nalazi se spisak različitih vrsta koje možemo dodeliti artiklu:

- *Oprema/alati/mašine* > grupa artikala za proizvodni deo;   
- *Porodica artikala* > definiše artikal za prodajne prognoze;   
- *Pakovanje* > koristi se za upravljanje vraćenim pakovanjima, za računovodstvo (za praćenje koliko pakovanja imamo u skladištu i koliko smo ih dali kupcu ili dobavljaču, kao i koliko još moraju da nam vrate);  
- *Usluge* > za upravljanje *postprodajnim* intervencijama;  
- *Pozajmice/upit/komponente sistema* > služe za upravljanje održavanjem.  

#### Status dokumenta
Podatak se odnosi na tabelu statusa dokumenta i prisutan je u dokumentima prodaje i nabavke. Status dokumenta definisan je nizom oznaka koje unutar dokumenta postavlja korisnik ili koje se postavljaju automatski kada se pokrenu određeni postupci (npr. knjiženje, isporuka iz narudžbenice itd.); vrste statusa mogu se razlikovati u zavisnosti od dokumenta u kojem se nalazite (neki primeri su: odštampan, odobren, arhiviran, knjižen, potvrđen itd.). Ovo polje može se koristiti u postupcima replikacije poslovnog softvera instaliranog za upravljanje poslovnicom sa prodajnim mestima.

#### Status isporuke
Ovo polje, prisutno u narudžbenicama nabavke/prodaje i kod poslova po narudžbini, prikazuje status isporuke dokumenta. Narudžbenica će se smatrati izvršenom kada se kreiraju otpremnice ili računi, a njen status isporuke automatski će se promeniti iz neizvršenog u delimično izvršen (ako nisu izvršene sve stavke narudžbenice) ili izvršen. Korisnik takođe ima mogućnost da prinudno označi narudžbenicu kao izvršenu, ručno menjajući status narudžbenice u *Prinudno izvršen*.

### Š

#### Šifra artikla {#item-code}
Ovo polje predstavlja specifični alfanumerički kod kojim se kodira artikal prema njegovim specifičnim karakteristikama; kod zajedno sa klasom čini *naziv* artikla koji mora biti jedinstven;  

### T

#### Kurs {#currency-exchange}
Ako je valuta kompanije ista kao valuta dokumenta, prikazana vrednost biće 1; u suprotnom, vrednost će biti preuzeta iz tabele *Kursevi valuta* ili iz tabele *Fiksni kursevi za EURO* koje se nalaze na putanji *Konfiguracija > Tabele > Administracija*.

#### Tracking number
Ovo polje može se pronaći na izlaznim računima, na kartici transporta, i služi za unos broja za praćenje (tracking number) povezanog sa pošiljkom kako bi se olakšalo praćenje robe tokom transporta.

#### Trošak
To je vrsta stavke koja identifikuje kodirane ili nekodirane artikle koji se ipak zasebno prikazuju u sažecima dokumenata; ako je artikal troška kodiran i ima fiskalni značaj, biće premešten u skladište, dok se, ako nije kodiran ili nema fiskalni značaj, neće premeštati u skladište.

### U

#### Učitano/a
Ova oznaka, ako je aktivna, označava da su stavke prijemnice i/ili računa učitane u skladište putem procedura [Učitavanje prijemnice u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) i [Učitavanje ulaznih računa u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). Za postupke učitavanja dokumenata pogledajte odgovarajuće članke.  

### V

#### Valuta {#currency}
Valute se kodiraju u pripadajućoj tabeli **Valute** koja se nalazi na putanji *Konfiguracija > Tabele > Opšta podešavanja*. U dokumentima se prema podrazumevanim podešavanjima prikazuje informacija uneta u *Šifarnik kontakata > kartica Računovodstvo > kartica Administracija* kako bi se označila podrazumevana valuta za artikle povezane sa određenim subjektom.  

#### V.I.E.S.
VIES (VAT Information Exchange System) je sistem za razmenu informacija među zemljama EU radi pravilnog oporezivanja. Konkretno, reč je o informatizovanom sistemu koji omogućava kompanijama brzu proveru PDV broja svojih kupaca. Naravno, moguće je proveriti samo PDV brojeve kupaca koji su se prijavili u ovaj sistem (moguće je da mali preduzetnici i trgovci koji nemaju trgovinsku razmenu unutar EU nisu registrovali svoju kompaniju u ovom sistemu). Iz šifarnika kontakata, unosom PDV broja i klikom na dugme **Predloži podatke**, sistem će proveriti validnost i tačnost PDV broja dotičnog subjekta. Moguće je da pretrage koje ne daju rezultate ponekad zavise od privremenih nepravilnosti kod subjekata ili samog sistema za proveru.

#### Vrsta artikla {#item-nature}
Koristi se u nekim postupcima. U kombinovanom meniju nalazi se spisak različitih vrsta koje možemo dodeliti artiklu:

- *Oprema/alati/mašine* > grupa artikala za proizvodni deo;   
- *Porodica artikala* > definiše artikal za prodajne prognoze;   
- *Pakovanje* > koristi se za upravljanje vraćenim pakovanjima, za računovodstvo (za praćenje koliko pakovanja imamo u skladištu i koliko smo ih dali kupcu ili dobavljaču, kao i koliko još moraju da nam vrate);  
- *Usluge* > za upravljanje *postprodajnim* intervencijama;  
- *Pozajmice/upit/komponente sistema* > služe za upravljanje održavanjem.  