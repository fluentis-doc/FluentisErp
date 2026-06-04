---
title: Novi Nalog za nabavom
sidebar_position: 1
---

Forma se otvara putem izbornika **Nabava > Nalog za nabavom > Kreiraj nalog za nabavom** ili iz filtra za pretraživanje nabavnih narudžbi, pomoću tipke *Novi radni nalog*.

## *Kako kreirati nalog za nabavom*

<details>
 
<summary>Kliknite za prikaz ključnih koraka</summary>
 
1. **Unesite obavezne podatke**: *Tip radnog naloga* i *Dobavljač*. *Godina*, *Broj* i *Datum unosa* bit će predloženi automatski.    
 
2. **Unesite ili uredite neobavezne podatke** u zaglavlju, poput *popusta*, *odredišta* i sl.   
 
3. **Unesite artikle**: putem dvostrukog klika na polje *Artikl* otvara se pomoćni prozor za artikle koji omogućuje pretraživanje i odabir postojećih artikala. Svi ostali podaci retka, kao što su *jedinica mjere*, *količina*, *cijena*, bit će automatski predloženi, ali se mogu mijenjati.  
Alternativno, moguće je odabrati kao *Tip retka* *Nešifrirani artikl* i ručno unijeti sljedeće podatke.
 
4. **Unesite eventualne popuste ili dodatne informacije** u kartici *Podaci*.
 
5. **Provjerite odjeljak Sažetaka** i unesite eventualne troškove ili završne popuste.    
 
6. Nakon provjere narudžbe, **unesite *Datum potvrde* i uključite opciju *Ispisano* u zaglavlju** kako bi dokument postao dostupan za postupke razduženja.  
 
</details>

## **1. Obavezni podaci**

Za kreiranje nove narudžbe korisnik mora unijeti sljedeće podatke:  

- **Dobavljač**: može se unijeti putem [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  
- **Vrsta naloga**: prethodno definiran u tablici [Vrste nabavnih narudžbi](/docs/configurations/tables/purchase/purchase-job-order-types). Ovo polje određuje raspon numeracije dokumenta koji se unosi te automatski predlaže *Broj* na temelju datuma unosa i posljednjeg unesenog broja.  
- **Godina / Datum unosa**: prikazuje se trenutni datum, ali ga je moguće ručno promijeniti.    
- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji definiranoj u tablici [Numeracije](/docs/configurations/tables/fluentis-numerations). 
- **Interni broj**: neobavezni podatak; predlaže se isti kao prethodno polje, ali ga korisnik može promijeniti i unijeti drugačiji alfanumerički kod.  

Forma sadrži niz kartica.  

## **2. Zaglavlje**

Nakon što se u gornjem dijelu odaberu obvezni podaci, korisnik može nastaviti unos sljedećih informacija [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz pomoć [pomoći polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Unošenjem **Dobavljača** sustav automatski predlaže sve podatke specifične za karticu **Zaglavlje**, prema prethodno definiranim informacijama u [matičnim podacima dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u poljima koja se odnose na njegovu adresu te u sljedećim odjeljcima:  

- **Valuta**: odjeljak koji sadrži podatke o [valuti](/docs/configurations/tables/general-settings/currencies), [tečaju](/docs/guide/common/glossary/glossary-intro#currency-exchange), [datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Država**: odjeljak koji sadrži informacije o [*državi*](/docs/guide/common/glossary/glossary-intro#country), [jeziku](/docs/guide/common/glossary/glossary-intro#language), [zoni](/docs/guide/common/glossary/glossary-intro#zone).   
- **Pošiljka**: odjeljak koji sadrži podatke o [*dostavi*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) zadano i njegovo [razdoblje važenja](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Plaćanja**: odjeljak koji sadrži podatke o [*plaćanjima*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *popustima*, *odredištu* i *prijevozniku*.    

Sva ova polja mogu se izbrisati ili ručno izmijeniti od strane korisnika.

#### Neobavezna polja

> **Pošiljka**, *Paritet* i *Pakiranje* preuzimaju se iz matičnih podataka dobavljača, ako su tamo navedeni; u suprotnom ih je moguće unijeti ručno.    
> **Cjenik**: ako u matičnim podacima dobavljača postoji cjenik označen kao *Zadani* on će biti predložen u ovom polju zajedno s datumima svoje valjanosti.

> **Procijenjeni datum dostave**: označuje očekivani datum isporuke robe.  
> **Datum početka/završetka**: omogućuje unos početnog i završnog datuma za nalog.      

> **Bilješke dobavljača**: ovo se polje preuzima iz [šifarnika dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ali se može unijeti i ručno.     
> **Naša/Vaša referenca**: u ova polja se obično unosi interna referenca i referenca dobavljača za dokument. Ako postoji, preuzima se iz šifarnika dobavljača, inače se može unijeti ručno. Ovi će se podaci zatim prenijeti u narudžbenicu dobavljača kreiranu putem *Evidentiranja iz projekta*.     
> **Početna bilješka podnaloga**: mogu se odabrati bilješke koje su prethodno unesene u tablicu na putanji *Konfiguracija > Alati > Upravljanje kodificiranim bilješkama*. Za to korisnik treba dvaput kliknuti na polje *Početne bilješke* kako bi otvorio pomoć s kodificiranim bilješkama i odabrao željene podatke. 
> **Projekt:** pomoću pomoći za odabir može se povezati dokument s [projektom](/docs/project-management/projects/search-projects-intro). Ovo povezivanje funkcionira samo na razini zaglavlja artikla.    

> **Status izvršenja**: kada se projekt izvrši putem narudžbenice dobavljaču, njegov se *Status izvršenja* automatski mijenja iz *Neizvršen* i *Djelomično izvršen* ili *Izvršen*. Korisnik može ručno označiti izvršenje narudžbenice koja nije u potpunosti izvršena; u tom se slučaju sprema i **Datum izvršenja** u istoimeno polje.  
> **Datum potvrđivanja**: omogućuje unos datuma kada je projekt potvrđen.    
> **Ispisano**: ova se oznaka automatski aktivira prilikom pokretanja konačnog ispisa putem tipke u traci izbornika. Alternativno, može se uključiti i ručno kako bi bilo moguće izvršiti projekt.    
    
:::important Napomena  
Da bi se izvršenje naloga za nabavu moglo provesti unutar narudžbenice dobavljača, potrebno je da projekt ima unesen *Datum potvrde* te da je oznaka *Ispisano* aktivna.  
:::

### 2.1 Plaćanja

[Uvjeti plaćanja](/docs/configurations/tables/general-settings/payment-terms) automatski se preuzimaju iz *Šifarnika dobavljača > kartica Plaćanja* a korisnik ih može izmijeniti ili obrisati.    

Ako je uz [Vrstu plaćanja](/docs/configurations/tables/general-settings/payment-types) vezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno pri određivanju dospijeća dokumenta, ali ne i u ukupnom iznosu otpremnice.  

#### Posebna tipka  

> **Izbriši plaćanje**: koristi se za brisanje označenih stavki plaćanja.  


### 2.2 Popusti

Prikazuju se samo unaprijed definirani popusti preuzeti iz *Šifarnika dobavljača > kartica Popusti*. Korisnik ih može izmijeniti ili obrisati.  

Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabat**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Odredište

Ovdje se prikazuje informacija unesena u *Šifarniku dobavljača > kartica Isporuke*, ali samo ako postoje zadane vrijednosti. Padajući izbornik prikazuje sve primatelje, odredišta i prijevoznike definirane u šifarniku dobavljača.  

Adrese za isporuku (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontakte.

### 2.4 Prijevoznik

U ovom polju moguće je unijeti *Prijevoznika* koji će izvršiti isporuku narudžbe. Ako je to unesenu u *Šifarniku dobavljača > kartica Isporuke*, bit će moguće odabrati prijevoznika iz padajućeg izbornika druge kolone; alternativno, dovoljno je dvaput kliknuti na treću kolonu (*Prijevoznik*) kako bi se odabrao jedan od kontakata tvrtke.

Opcionalno se mogu dodati detalji o *Registracijskoj oznaka* prijevoznika i *Datumu/Vremenu prijevoza*.

### 2.5 Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## **3. Artikli**

Za unos novog artikla u mrežu, dovoljno je postaviti se na redak kako biste ispunili razne podatke ili koristiti tipku *Novi artikl* prisutan na traci izbornika.

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [pomoći na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.

### 3.1 Obvezni podaci

**Red**: ovo polje će se automatski i progresivno popunjavati prilikom unosa podataka u retku.

- **Tip linije** omogućuje odabir, putem padajućeg izbornika, artikala s različitim svojstvima:  
> - *Artikl s klasom*: artikli koji su kodirani u šifarniku; mogu se knjižiti u analitičkom računovodstvu i evidentirati u skladištu. <br />
> - *Artikl bez klase*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu skladišno evidentirati. <br />   
> - *Trošak (artikli)*: mogu biti kodirani ili nekodirani i prikazuju se odvojeno u sažecima dokumenata. Ako je troškovni artikl kodiran i porezno relevantan, bit će evidentiran u skladištu; ako nije kodiran ili nije porezno relevantan, neće biti zabilježen u skladištu. <br />
> - *Artikl – bilješke*: opisne bilješke koje se ispisuju na dokumentu i nemaju utjecaja na računovodstvo ni skladište

:::note Napomena
Ako se izravno započne s unosom koda artikla, njegova klasa, opis i tip retka (*Artikl sa klasom*) automatski se unose.
:::

**Klasa/Artikl/Opis artikla**: mogu se unijeti [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [pomoći u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

### 3.2 Neobvezni podaci

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača).  

- **Cijena**:  cijena se preuzima iz cjenika koji je zadan u šifarniku kontakta. Referentni cjenik za određeni artikl prikazan je na kartici Podaci. U istom dokumentu mogu se nalaziti artikli s cijenama preuzetima iz različitih cjenika, ako je u šifarniku subjekta pridruženo više cjenika u nizu (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Dvostrukim klikom u polje *Cjenici* (koje se nalazi pod stavkom *Projekti*) korisnik može odabrati cjenik drugačiji od zadanog, iz kojeg će se preuzeti cijena unesenog artikla. Ako cjenik nije dostupan, kao prijedlog koristi se *zadnji trošak* iz šifarnika artikla. 

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

- **Vrsta prometa nabave**: prikazuje se vrijednost unesena na kartici [Opći podaci](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako podatak nije unesen, ništa se ne prikazuje, a prilikom knjiženja računa uzet će se vrijednost iz polja *Zadani konto troška/prihoda* u šifarniku kontakta.

- **Prisilno izvršeno**: aktiviranjem flag-a, redak artikla bit će označen kao *Prisilno izvršeno* i više neće biti dostupan za daljnja ispunjenja.  


### 3.3 Ukupno 

- **Popusti**: prikazuju se svi popusti povezani s artiklom, svaki s vlastitom osnovicom i pravilom obračuna.        

*Posebna tipka*

> **Izbriši popust**: omogućuje brisanje odabranog popusta iz odgovarajuće tablice.

### 3.4 Podaci

U ovoj kartici prikazuju se ili unose dodatne informacije vezane uz artikl:  

- **Artikl**: prikazuje odabrani artikl iz gornje tablice.

- **Varijante**: u ovom polju moguće je odabrati varijantu artikla među onima prethodno kodificiranim u kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u kartici artikla. Ako su u cjeniku unesene različite cijene i/ili popusti za svaku varijantu, oni će se automatski ažurirati prilikom odabira druge varijante artikla.  

- **Napomena**: ovo su napomene vezane uz redak artikla; mogu se unijeti i putem kodificiranih *pomoćnih* nota. Napomene će biti prikazane u svim dokumentima koji se generiraju iz sustava. 

- **Skladište i predložak**: sustav automatski predlaže skladište i knjiženje koje će biti korišteno i u narudžbi dobavljaču generiranoj putem *Evidencija projekta*. 

- **Projekt**: predstavlja projekt kojem se dokument ili redak artikla može pridružiti. Ako je u zaglavlju dokumenta unesen projekt, on će se automatski primijeniti na sve retke; alternativno, projekt se može odabrati putem odgovarajuće *pomoći* za projekte.  

- **Cjenik**: prikazuje cjenik iz kojeg je preuzeta cijena artikla, uključujući datum početka/kraja valjanosti i posebne uvjete (npr. **Vrsta raspona** popusta) dodijeljene artiklu u cjeniku.  

- **Ručna cijena**: ovo polje se aktivira automatski kada je cijena artikla unesena ili promijenjena ručno.  

- **Procijenjeni datum dostave**: omogućuje unošenje datuma kada se očekuje isporuka artikla.   

- **Marka**: prikazuje marku artikla, preuzetu iz njegove kartice ili cjenika artikla.  

### 3.5 Sekcija vrijednosti

Sekcija u donjem desnom dijelu prikazuje sažetak troškova koji sudjeluju u formiranju konačne cijene svakog artikla odabranog u pregledu artikala. Polja koja se nalaze u ovoj sekciji su:  

-    **Cijena**: vrijednost polja Cijena;
-    **Količina**: vrijednost polja Količina ili Alternativna količina, ovisno o zastavici Cijena po jedinici alternativne mjere;  
-    **Iznos u retku**: Cijena artikla * Količina artikla;
-    **Ukupno rabat**: zbroj svih popusta na artikl, uključujući i konačne popuste;  
-    **Iznos**: Bruto iznos − Popusti; 
-    **PDV**: Osnovica × stopa PDV-a artikla;  
-    **Ukupno**: Osnovica + Porez.  

## **4. Sažeci**

U različitim dijelovima ove kartice prikazane su glavne informacije cijelog dokumenta te određene specifične tipke.

### 4.1 Konačni popusti

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir vrste popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodjeljujući prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskada/Iznos**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  

### 4.2 Troškovi

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 

### 4.3 Ukupni iznosi dokumenta

- **Završne napomene radnog naloga**: opisno polje koje korisnik može ispuniti, također uz pomoć *kodificiranih napomena*.
- **Bruto iznos artikala**: predstavlja zbroj vrijednosti svih artikala.
- **Avans**: predstavlja vrijednost eventualnog avansa primljenog za dokument.  
- **Poklonjeni iznos**: predstavlja iznos artikala tipa poklon unesenih u kartici *Artikli*.
- **Ukupno primijenjeni rabati**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, isključujući konačne popuste.    
- **Neto iznos artikala**: *Bruto iznos artikala* – *Ukupno primijenjenih popusta*.
- **Konačni popusti artikala**: predstavlja vrijednost konačnih popusta izraženu u postotku na bruto iznos artikala.  
- **Iznos umanjen za ukupni popust**: *Neto iznos artikala* - *Ukupno konačnih popusta*.    
- **Ukupno za stavke troškova**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao artikli tipa *Trošak*.
- **Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mrežu *Troškovi*.
- **Trošak ovjere**: predstavlja zbroj troškova takse unesenih u mrežu *Troškovi*.
- **Ukupno troškovi/popusti/doplate**: predstavlja ukupnu vrijednost troškova unesenih u mrežu *Troškovi*.
- **Osnovica**: *Neto iznos artikala* – *Konačni popusti* + *Ukupno troškovi* + *Ukupno troškovi/popusti/doplate*.
- **PDV**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a.
- **Ukupno**: *Osnovica* + *PDV*.