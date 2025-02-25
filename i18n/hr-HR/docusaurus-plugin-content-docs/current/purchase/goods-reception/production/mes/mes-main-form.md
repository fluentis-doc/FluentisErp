---
title: MES
sidebar_position: 4
---

:::important ČEMU SLUŽI
Glavni oblik Modula za izvršenje proizvodnje (MES) u Fluentisu osmišljen je za optimizaciju i pojednostavljenje procesa prijave proizvodnih aktivnosti. Ovo sučelje omogućuje operaterima da u realnom vremenu prate i upravljaju proizvodnim resursima, olakšavajući unos podataka vezanih za faze obrade i proizvedene količine.  

Operateri mogu lako upravljati unosom i izmjenom podataka zahvaljujući funkcionalnostima poput skenera barkoda i omogućavanja specifičnih kontrola kako bi se osigurala točnost evidencija. Osim toga, sustav podržava različite metode raspodjele vremena i količina, omogućujući detaljnu analizu proizvodnih performansi i osiguravajući učinkovito upravljanje korištenim resursima.

Ovaj integrirani pristup ne samo da poboljšava vidljivost operacija, već također doprinosi optimizaciji tijeka rada i ukupnoj produktivnosti poduzeća.  
:::

## *Specifični gumbi*:  

**Navigabilnost**
> *Prethodno*: omogućuje prelazak na prethodnu karticu;     
> *Sljedeći*: omogućuje prelazak na sljedeću karticu;     
> *Ažuriraj*: omogućuje osvježavanje svih podataka u obrascu, za korištenje u slučaju promjena na korištenom resursu;        
> *Poništi odabir*: omogućuje poništavanje odabira faza prisutnih u glavnoj mreži.     

**Potvrda izvještaja**
> *Započni*: omogućuje stvaranje početnog izvještaja o proizvodnji;    
> *Napreduj*: omogućuje stvaranje izvještaja o napretku proizvodnje;      
> *Obustavi*: omogućuje stvaranje izvještaja o obustavi proizvodnje;    
> *Nastavi*: omogućuje stvaranje izvještaja o nastavku proizvodnje;    
> *Zatvori*: omogućuje stvaranje završnog izvještaja o proizvodnji;    
> *Otkaži*: omogućuje brisanje svih unesenih podataka u Fluentis MES-u.                   

## Glavni obrazac 

Glavni obrazac se sastoji od sekcije sa sljedećim poljima i mrežom koja sadrži faze u radu:   

- **Šifra barkoda**      
Većina operacija koje se mogu izvesti u Fluentis MES-u može se olakšati i ubrzati zahvaljujući korištenju polja *Barcode kod*. Ako je pravilno konfigurirano, ovo polje inteligentno obrađuje podatke dobivene skeniranjem bar koda i automatski unosi vrijednosti u odgovarajuća polja.    
Bar kodovi se mogu konfigurirati unutar obrasca Barcode tokenizer, koji se nalazi u: Tablice > Opće postavke > Barkod tokenizator.                 
Dakle, ovo polje *Barcode kod* u MES-u može se koristiti od strane operatera za dodavanje pojedinačnih faza ili grupa faza, ili na primjer, faza cijelog proizvodnog naloga, kao i za učitavanje serija i/ili serijskih brojeva materijala za preuzimanje, sve jednostavnim skeniranjem raznih bar kodova.  

Za sve informacije o tome kako kodirati bar kodove za čitanje u polju **Codice barcode** konzultirajte stranicu posvećenu [Barkod tokenizator-u](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **Workstation**      
Postupak može prepoznati radnu stanicu na kojoj operater radi. Ako je radnoj stanici dodijeljen radni centar, automatski će učitati sve faze koje su bile u radu na tom radnom centru. Tada operater može odabrati hoće li nastaviti s izvještavanjem o tim fazama ili dodati nove. Sve dodatne informacije možete pronaći u odjeljku posvećenom [Workstation](/docs/production/mes/workstation).     

- **Resurs**      
Polje *Resursa* koristi se za unos bilo koje vrste proizvodnog resursa.   
Ako se unese resursa tipa *Radni centar*, automatski će se ažurirati i odgovarajuće polje*. *Radni centar*, što će rezultirati učitavanjem faza povezanih s novim centrom.
Ako se unese resursa tipa *Djelatni*, koristit će se kao korisnik izvještavanja. Unos resursa tipa *Djelatnik obavezan* je u slučaju aktiviranja oznake Obavezni operater u kartici *Općenito* [Proizvodnih resursa](/docs/production/mes/production-resources).        

- **Radni centar**
označava radni centar na kojem operater obavlja izvještavanje; mogu se prikazati samo Radni centri povezani s *Radnom stanicom*. Ako *Radna stanica* nije unesena ili joj nije dodijeljen *Radni centar*, bit će moguće prikazati sve *Proizvodne resurse* tipa *Radni centar*.   

- **Faze u radu**
faze se mogu dodati unutar mreže koristeći polje *Šifra barkoda* ili korištenjem posebnog gumba *Odaberi nove faze* u desnom izborniku. Mreža sadrži različite informacije o narudžbi, proizvodnom nalogu, projektu, varijanti, itd. Sve te informacije mogu se prikazati ili sakriti putem upravljanja u kartici *Layout* [Proizvodnih resursa](/docs/production/mes/production-resources).   
Za odabrani redak u mreži, na desnoj strani, moguće je vidjeti zadano sliku iz  [Šifarnik artikla](/docs/erp-home/registers/items/create-new-items/item-registry/images); također, dvostrukim klikom na sliku možete je prikazati u cijelom zaslonu.     
                
### Kartica Proizvodnja     

*Posebni gumbi*:

> *Obriši resursu*: omogućuje uklanjanje unosa u polju *Resursa*;    
> *Odaberi nove faze*: otvara pomoć za odabir novih faza koje će se dodati u glavnu mrežu;        
> *Obriši fazu*: omogućuje uklanjanje odabrane faze ili faza iz glavne mreže.     

Kartica **Proizvodnja** je posvećena unosu informacija o vremenima proizvodnje / postavljanja i količinama proizvedenih / odbačenih. Ovo je jedina kartica koja ne može biti skrivena i sastoji se od sljedećih polja:  
> **Stroj**: ovdje je pretpostavljena zadani *Stroj* koja je navedena u *Radnom centru* ako faza još nije započela, dok ako su već unesene izjave, nudi onu iz prethodne izjave. Također je moguće ručno je promijeniti, ali samo na jednu od alternativnih mašina navedenih u evidenciji glavne mašine;       
> **Radno vrijeme**: omogućuje ručni prikaz / izmjenu radnog vremena; ponašanje se može promijeniti putem zastavica *Ručni unos vremena* i *Predloženo vrijeme* prisutnih u  [Resursima proizvodnje](/docs/production/mes/production-resources). Vrijeme se automatski izračunava kao razlika između vremena trenutne i prethodne izjave;                   
> **Vrijeme postavljanja**: omogućuje ručni unos / izmjenu vremena postavljanja;           
> **Proizvedena količina**: omogućuje unos količine proizvedene s tom izjavom;           
> **Alternativna količina**: omogućuje unos alternativne količine proizvedene s tom izjavom;        
> **Skladište za odlaganje**: pokazuje skladište za učitavanje proizvoda proizvedenih s izjavom;       
> **Predložak odlaganja**: označava prdložak učitavanja proizvoda proizvedenih s izjavom;         
> **Lokacija plaćanja**: pokazuje lokaciju učitavanja proizvoda proizvedenih s izjavom;         
> **Skladište za odlaganje otpada**: pokazuje skladište za ispraznjenje odbačenih proizvoda proizvedenih s izjavom;       
> **Predložak odlaganja otpada**: označava predložak ispraznjenja odbačenih proizvoda proizvedenih s izjavom;       
> **Lokacija plaćanja otpada**: pokazuje lokaciju ispraznjenja odbačenih proizvoda proizvedenih s izjavom;         
> **Nedostatak**: označava odbačeni nedostatak proizvoda proizvedenih s izjavom; moguće je aktivirati posebnu kontrolu putem zastavice *Obavezni nedostatak ako je izjavljeno odbačeno* prisutne u [Resursima proizvodnje](/docs/production/mes/production-resources);           
> **Predložak zastoja**: označava predložak suspenzije koji se koristi u izjavi; u slučaju da operater stvori suspenziju bez navođenja uzroka suspenzije, koristi se zadani predložak naveden u polju *Predloženi uzrok suspenzije* u kartici [Resursa proizvodnje](/docs/production/mes/production-resources).       

Moguće je promijeniti funkcioniranje i layout obrasca putem upravljanja [Resursima proizvodnje](/docs/production/mes/production-resources).      

### Kartica Kontrole kvalitete

*Posebni gumbi*:

> *Odaberite stavke*: omogućuje odabir koje artikle uključiti u tablicu kontrole kvalitete između proizvedenih ili odbačenih;         
> *Uvezi sve*: omogućuje unos svih proizvedenih ili odbačenih artikala u tablicu kontrole kvalitete;       
> *Izbriši kontrolu*: omogućuje brisanje odabrane kontrole;           
> *Dupliciraj test*: omogućuje dupliciranje odabranog testa;       
> *Izbriši test*: omogućuje brisanje odabranog testa.   

Ova kartica omogućuje upravljanje Kontrolama kvalitete za proizvedene i/ili odbačene artikle.  

Redovi se mogu dodavati u tablicu *Kontrole kvalitete* pomoću dva specifična gumba.           
U ovoj tablici prikazani su sljedeći podaci:  
> *Klasa*: označava klasu artikla;          
> *Šifra artikla*: označava šifru artikla;            
> *Varijanta*: označava varijantu artikla;      
> *Detalj artikla za razmatranje*: označava maksimalni detalj artikla koji se razmatra za provođenje testova (Nijedan, Lot, S.B., Transportna jedinica). Ovo se odabire u tablici *Kontrole kvalitete* u upravljanju [Resursima proizvodnje](/docs/production/mes/production-resources);             
> *Ref. detalj*: označava vrijednost *Detalja artikla za razmatranje*, npr. broj serije;           
> *J.M.*: označava jedinicu mjere artikla;      
> *Količina*: označava količinu artikla;    
> *Otpad*: ako je aktivno, označava da je količina odbačena; ako nije aktivno, označava da je količina proizvedena, a ne odbačena;               
> *Opis artikla*: označava opis artikla;          
> *Opis varijante*: označava opis varijante.      

Ako je faza u proizvodnom nalogu podložna kontroli kvalitete i već je pridružen plan kontrole (koji se nasljeđuje iz faze standardnog radnog ciklusa, ali se naravno može ručno promijeniti i u planiranom i u proizvodnom nalogu), testovi povezani s naznačenim planom kontrole automatski će se prikazati u tablici *Testovi*.      

Tablica *Testovi* sastoji se od sljedećih polja:           
> *Redoslijed*: označava redoslijed testova za provođenje;             
> *Način testiranja*: označava šifru testa koji se mora provesti;           
> *Opis način testiranja*: označava opis testa koji se mora provesti;             
> *Alat za kategorije*: označava kategoriju korištenog instrumenta;           
> *Vrsta iznosa*: označava je li vrijednost Tekstualna, *Da/Ne* ili *Numerička*;       
> *Vrsta granice*: omogućuje označavanje *Vrste granice*; omogućuje se samo ako je *Vrsta vrijednosti* *Numerička*;       
> *Vrijednost jedinice mjere*: označava jedinicu mjere vrijednosti;             
> *Nominalna vrijednost*: označava numeričku vrijednost koju test treba imati;        
> *Minimalna granica* / *Maksimalna granica*: označavaju minimalnu i maksimalnu granicu pogreške koju ispitivanje može imati, u postotku ili apsolutnoj vrijednosti, ovisno o zastavici *%*; *Minimalna granica* se oduzima od *Nominalne vrijednosti*, dok se *Maksimalna granica* zbraja;         
> *L. min (toll-/+)* / *L. Max (toll-/+)*: označava tolerancije na minimalne i maksimalne granice koje se dodaju prethodnim tolerancijama; može, na primjer, uključivati nesigurnost u jedinici mjere; to je postotna vrijednost;                  
> *%*: označava jesu li vrijednosti izražene u postotcima ili su apsolutne;                 
> *Vrsta kontrolnog testa*: označava vrstu kontrolnog testa;          
> *Frekvencija*: označava učestalost testiranja;         
> *Alat za mjerenje*: označava korišteni instrument, ako postoje vrijednosti koje treba izmjeriti; sastoji se od Koda / Kategorije;        
> *Otkrivena vrijednost*: označava izmjerenu vrijednost (koristi se ako imam jednu vrijednost);       
> *Prosjek zabilježenih vrijednosti*: označava prosječnu vrijednost izmjerene vrijednosti (vrijednost se postavlja na temelju unesenih vrijednosti u tablici **Višestruko mjerenje**);      
> *Rezultat*: označava rezultat testa i automatski se određuje na temelju unesenih parametara;         
> *Količina neusklađenih*: označava količinu koja je utvrđena kao neusklađena;          
> *Skladište*: označava skladište u kojem se nalaze neusklađeni artikli; ova se vrijednost automatski prikazuje na temelju onoga što je naznačeno u *Vrsti kontrole artikla*;                      
> *Predložak skladištenja za neusklađene artikle*: označava uzrok koji će se koristiti za ispis neusklađenih artikala; ova se vrijednost automatski prikazuje na temelju onoga što je naznačeno u *Vrsti kontrole artikla*. Ova promjena događa se prilikom prijave proizvodne izjave;                      
> *Napomena*: omogućuje unos slobodne napomene.        

Tablica **Detekcija višestrukih vrijednosti** koristi se u slučaju kada se mjeri više vrijednosti i one će doprinijeti određivanju *Prosjek izmjerenih vrijednosti*.
Sastoji se od sljedećih stupaca:  
> *Redoslijed*: označava redoslijed izmjerenih vrijednosti;      
> *Pozicija*: opisno polje koje omogućuje da se navede na kojem se mjestu mjerenje obavilo;        
> *Alat za mjerenje*: označava instrument korišten za to mjerenje;                
> *Otkrivena vrijednost*: označava izmjerenu vrijednost;              
> *Napomena*:  omogućuje unos slobodne napomene.  

Moguće je promijeniti funkcioniranje i izgled obrasca putem upravljanja [Resursima proizvodnje](/docs/production/mes/production-resources). 

Više detalja o području upravljanja kvalitetom dostupno je u [Kvaliteti](/docs/quality/quality-intro).          

### Kartica Lotova i S/B 

*Posebni gumbi*:

> *Generirati*: omogućuje generiranje lotova i serijalnih brojeva;          
> *Izbriši*: omogućuje brisanje odabranog lota / serijalnog broja.       

Na ovoj kartici moguće je pregledati sve artikle koji su proizvedeni s prikazom pripadajućih količina proizvedenih i odbačenih; također, kroz odgovarajuće tablice moguće je unijeti / izmijeniti informacije o *Lotovima* i *Serijalnim Brojevima*.        

Moguće je promijeniti funkcioniranje i izgled obrasca putem upravljanja [Resursima proizvodnje](/docs/production/mes/production-resources).     

### Kartica Etiketa

*Posebni gumbi*:

> *Nova*: omogućuje stvaranje retka za unos nove etikete;          
> *Izbriši*: omogućuje brisanje odabranog retka etikete;         
> *Nova Transportne jedinica*: omogućuje ponovno generiranje koda odabrane Transportne jedinice;        
> *Ispis odabira*: omogućuje ispis samo odabranih etiketa;         
> *Ispis svega*: omogućuje ispis svih etiketa.            

Na kartici **Etiketa** automatski se stvaraju etikete za proizvedene artikle.   
Količina artikala za svaku etiketu određena je informacijama unesenima u osnovne podatke o artiklu kako slijedi:  
1. Kartica *Pakiranje*: uzima u obzir Transportnu jedinicu i količinu unesenu u retku s aktivnim oznakom "Obavezna jedinica utovara";       
2. Kartica *Težina/Dimenzije*: uzima u obzir Transportnu jedinicu i količinu unesenu u poljima *Vrsta jedinice utovara* i *Broj artikala po jedinici utovara*;    
3. Kartica *Težina/Dimenzije* > *Broj paketa*: uzima u obzir količinu unesenu u Poljima prisutnih *Artikala u paketu*; u ovom slučaju transportnu jedinicu neće biti ponuđen.

Također, operater može ručno unijeti ili putem polja *Barkod kod*, *Serijski broj* ako je potrebno.      
Polje **Stanje ispisa** može imati vrijednosti *Nije ispisano*, *Ispisano* ili *Ponovno ispisano* ovisno o broju puta koliko je etiketa bila ispisana.

Možete promijeniti rad i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).     

### Kartica Materijali

Na kartici **Materijali** automatski se prikazuju materijali koji su potrošeni na osnovu količine glavnog artikla koji se treba proizvesti i njegove osnovne strukture; samo ako je aktivna opcija **Obavezna je ručna deklaracija materijala** u *Općim podacima* upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources), materijal će biti ponuđen s označenom žutom bojom i količinom nula, te će operater biti prisiljen da ga ručno unese.     
Također, moguće je navesti količine odbačenog svakog pojedinog materijala uz informacije o skladištu i predlošku odbačaja; putem odgovarajućih tablica mogu se unijeti / promijeniti informacije o *Lotove* i *Serijskim brojevima* za odabrani pojedinačni materijal.             

Moguće je mijenjati rad i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).     

### Kartica Tim 

*Posebni gumbi*:

> *Pridružite se timu*: omogućuje unos jednog ili više operatera u radnu ekipu;          
> *Izađite iz tima*: omogućuje izlazak jednog ili više operatera iz radne ekipe;        
> *Zamijeni operatera*: omogućuje zamjenu aktivnog operatera s drugim, zadržavajući datume/sate ulaska i izlaska iz ekipe;          
> *Ukloni iz tima*: omogućuje uklanjanje retka vezanog za odabranog operatera.         

Kartica **Tim** se sastoji od dva dijela:  
> Popis aktivnih operatera: omogućuje unos i pregled aktivnih operatera u proizvodnoj deklaraciji; prvi uneseni operater dobiva oznaku *Vođe tima* (koju je moguće ručno promijeniti);              
> Popis neaktivnih operatera: omogućuje pregled neaktivnih operatera (koji su radili na ovoj ili ovim fazama u prethodnim deklaracijama).  

Moguće je mijenjati funkcionalnost i izgled forme putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  

### Kartica Analiza 

Kartica **Analiza** namijenjena je pregledu i konzultaciji podataka o performansama proizvodnje. Sastoji se od tri dijela:  
- OEE dijagrami 
- Stupčasti dijagrami: **Analiza količina** i **Analiza vremena**
- Tablice: **Vrijednosti količina** i **Vrijednosti vremena** 

**OEE**, **Overall Equipment Effectiveness** (Ukupna učinkovitost opreme), je ključni pokazatelj performansi (KPI) koji mjeri proizvodne kapacitete tvrtke.  

Vrijednost **OEE** sastoji se od sljedećih triju faktora:  
- **Operativna dostupnost (Availability)**: postotak radnog vremena (B) u odnosu na raspoloživo vrijeme (A). Koristi se omjer između planiranog radnog vremena postrojenja (A) i stvarnog vremena tijekom kojeg je postrojenje proizvodilo (B).  
- **Kvaliteta proizvoda (Performance) - Učinkovitost**: efikasnost je postotak stvarno obrađenih artikala (D) u odnosu na teoretski moguće obrađene artikle (C). U planiranju se računaju artikli koji bi se mogli obraditi pri optimalnom kapacitetu (C), a smanjenje ovih performansi može ukazivati na pad u proizvodnji (D).  
- **Kvaliteta proizvoda (Quality)**: to je postotak ispravnih artikala (F) u odnosu na ukupno proizvedene artikle (E). Ovo jasno pokazuje pad u proizvodnji zbog odbačenih proizvoda ili potrebe za radnim zahvatima koji utječu na opću učinkovitost.  
- **Ukupna učinkovitost resursa (OEE)**: ovaj se izračun dobiva iz prethodno navedenih analiza i definira se kao:   

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

**Ukupna učinkovitost** resursa može se izračunati s ili bez uključenog vremena za pripremu opreme.  

U odjeljku sa stupčastim dijagramima nalaze se dijagrami za **Analizu količina** i **Analizu vremena** gdje možete vidjeti podatke o planiranim i stvarnim količinama i vremenima do tog trenutka.        

U tablicama u posljednjem dijelu možete također pregledati planirane i stvarne količine i vremena do tog trenutka, ali u obliku tabularnih podataka.  

Podaci prikazani u svim sekcijama kartice **Analize** odnose se na odabrane faze. Ako nisu odabrane nikakve faze, prikazani podaci će predstavljati ukupnost svih faza navedenih u mreži *Faze u radu*.  

Moguće je prilagoditi funkcionalnost i izgled obrasca putem Upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  

### Kartica Dokumenti i Operativne upute 

Ovaj kartica sastoji se od sekcija **Dokumenti** i **Operativne upute**.

Sekcija **Dokumenti** dalje se dijeli na:
> **Dokumenti priloženi odabranoj fazi**: omogućuje pregled svih dokumenata povezanih s  *Šifarnikom proizvoda*, *Narudžbom Kupca*, *Proizvodnom narudžbom* i *Narudžbom za proizvodnju*, sukladno uputama u *Upravljanju Dokumentacijom* dostupnim u [Resursima za proizvodnju](/docs/production/mes/production-resources);       
> **Dokumenti povezani s prijavom odabrane faze**: omogućuje pregled ili pričvršćivanje novih dokumenata izravno na izjavu, uključujući metodu povlačenja i ispuštanja;         
> **Operativne upute**: omogućuje pregled svih dokumenata povezanih s fazom proizvodnog ciklusa.           

Moguće je prilagoditi funkcioniranje i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  

### Kartica napomene  

Ova kartica sastoji se od dvije sekcije:             
> **Popis bilješki (odaberite fazu)**: omogućuje pregled i prikaz bilješki koje se odnose na odabranu fazu; bilješke koje se prikazuju u ovoj tablici direktno su preuzete iz faza radnog ciklusa, konkretno iz kartice *Napomene*;                  
> **Popis napomena o prijavi**: omogućuje unos i pregled bilješki koje se odnose na trenutnu izjavu.     

Moguće je prilagoditi funkcioniranje i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  

### Kartica Prethodne obavijesti

Ova kartica omogućava pregled svih prethodnih obavijesti koje se odnose na odabranu fazu. 

Moguće je prilagoditi funkcioniranje i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  

### Kartica Dodatni podaci  

Ova kartica sastoji se od dvije rešetke:  
> *Popis dodatnih podataka (odaberite fazu)*: omogućuje upravljanje dodatnim podacima koji se odnose na odabranu fazu;         
> *Popis dodatnih podataka o prijavi*: omogućuje upravljanje dodatnim podacima koji se odnose na trenutnu izjavu.     

Moguće je prilagoditi funkcioniranje i izgled obrasca putem upravljanja [Proizvodnim resursima](/docs/production/mes/production-resources).  


