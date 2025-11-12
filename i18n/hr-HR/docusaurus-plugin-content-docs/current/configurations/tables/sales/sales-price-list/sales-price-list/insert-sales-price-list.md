---
title: Novi prodajni cjenik
sidebar_position: 2
---

Za kreiranje novog prodajnog cjenika potrebno je kliknuti *Novi* u prozoru za pretraživanje cjenika.  
Forma se sastoji od tri dijela: Gornji dio, Artikli i Detalji.  

## **1. Obavezni podaci**

Obavezna polja u zaglavlju za unos novog cjenika su:    
- **Cjenik**: cjenik može biti *Generički* (potencijalno vrijedi za sve klijente) ili *Personaliziran* (vrijedi za određenog klijenta); potrebno je odabrati odgovarajuću opciju za određivanje cjenika koji se kreira.       
- **Tip cjenika**: aktivno samo ako je cjenik generički; sadrži [Tip cjenika](/docs/configurations/tables/sales/sales-price-lists).      
- **Klijent**: aktivno samo ako je cjenik personaliziran; sadrži klijenta za kojeg se kreira cjenik. U ovom slučaju se aktivira i polje Kontakt, kojim se može odabrati osoba iz kartice klijenta; ovo polje ne utječe na dokumente, ali pomaže kod ograničenja prikaza, dopuštajući pristup samo osobnim dokumentima.    

:::important[Važno]
Da bi cjenik bio valjan za klijenta, potrebno ga je unijeti u karticu klijenta. Pogledajte [dokumentaciju](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicata. 
:::

- **Valuta**: valuta za cjenik; po defaultu je valuta tvrtke.         
- **Datum početka valjanosti**: datum od kojeg je cjenik važeći; predlaže se današnji datum.     

#### Neobavezna polja     
- **Cijena s PDV-om**:  ako je aktivno, ovaj indikator označava da će se cjenik kreirati s cijenom uključujući PDV. U artiklima neće biti vidljiva kolona "Cijena", nego samo kolona "Cijena s PDV-om", koja prikazuje izravno zbroj cijene i PDV-a. Ovaj indikator se predlaže ako je prisutan u tablici [Tip cjenika](/docs/configurations/tables/sales/sales-price-lists) , ali se može promijeniti. Za fleksibilnije upravljanje, u [Parametri prodajnih cjenika](/docs/configurations/parameters/sales/price-list-parameters), moguće je prisiliti prikaz i cijene i cijene s PDV-om putem indikatora "prikaži cijenu i cijenu s PDV-om", neovisno o postavkama tipa cjenika.    
- **Datum završetka valjanosti**: ako cjenik ne smije biti valjan nakon određenog datuma, taj datum treba unijeti u ovo polje.     
- **Minimalni cjenik**: ovaj informativni indikator označava da je cjenik na minimalnim cijenama za probnu prodaju.        
-  **Konfiguracija pretraživanja**: može prikazivati dodatne podatke na razini cjenika ili upravljati informacijama (npr. tip plaćanja) za različite operacije.    
Dostupan je i **Filter artikala** za brzu pretragu u velikim cjenicima.

## **2. Artikli**

Ovdje se unose artikli i eventualni popusti vezani uz cjenik.  
Kolone u mreži su:   
- **Klasa/Artikl/Opis**: kod artikla koji se dodaje u cjenik; novi artikl se unosi na praznu liniju ili putem tipke *Novi artikl* u ribbon bar-u.  
- **Kod/Opis varijante**: za povezivanje varijanti artikla i njihovih prodajnih cijena.  
- **Jedinica mjere**: osnovna ili alternativna jedinica mjere; pri kreiranju dokumenata predlaže se odgovarajući cjenik za tu jedinicu.  
- **Marka**: ako je specificirano.  
- **Količina**: referentna količina za cijenu; ako nije 1, cijena se dijeli s količinom.  
- **Cijena**: u valuti cjenika, vidljivo ako cjenik nije s PDV-om.  
- **PDV**: preuzeto iz kartice klijenta; ako nije postavljeno, potrebno ga je unijeti.  
- **Cijena s PDV-om**: sustav izračunava kao zbroj cijene i PDV-a.  
- **Cjenovna kategorija**: koristi se za selekciju cjenika prema kategorijama artikala i raznim parametrima (npr. veličina odjeće).


### 2.1 Detalji

U ovom odjeljku, za svaki artikl u cjeniku, moguće je unijeti različite tipove popusta.  
U **Tip skale** moguće je unijeti zadani tip popusta koji će se primijeniti na cjenik. Tip skale unesen ovdje ima prednost nad onim eventualno unesenim u kartici artikla.  
U karticama ispod moguće je unijeti različite popuste za cjenik; moguće je da isti artikl ima više povezanih popusta, ali će se skala koristiti izravno u dokumentu.   

U nastavku su objašnjeni tipovi popusta koji se mogu unijeti.   

#### 2.1.1 Popusti

Ovi popusti su fiksni i prikazuju se u dokumentima bez obzira na količinu ili druge varijable navedene u narudžbi; tipičan primjer su komercijalni popusti.  
Polja u ovoj tablici su:
- **Prioritet**: iz [Tipovi popusta](/docs/configurations/tables/general-settings/discount-types), određuje redoslijed primjene.          
- **Tip popusta/Opis**: odabir tipa popusta.         
- **Vrijednost**: postotak popusta.          
- **Kaskadno/Osnovica**: ovaj se podatak također preuzima iz postavki unesenih u tablici [Tipovi popusta](/docs/configurations/tables/general-settings/discount-types);  ako je popust *kaskadni*, izračunava se na osnovicu umanjenu za već primijenjene popuste, dok se kod opcije *osnovica* popust računa na punu osnovicu.       

#### 2.1.2 Popusti po količini  

Ova vrsta popusta omogućuje primjenu različitih postotaka popusta ovisno o prodanoj količini. Stupci koji su prisutni u tablici su:  
- **Vrsta**: u ovom se polju odabire vrsta popusta među onima koji su definirani.  
- **Količina**: postavlja se količina pri kojoj će se popust aktivirati.  
- **Postotak**: unosi se postotak popusta koji će se primijeniti nakon dostizanja navedene količine.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

U prikazanom primjeru, ako se prodaju 2 jedinice, ostvaruje se popust od 7%, za 3 jedinice popust od 10% i tako dalje.

#### 2.1.3 Popusti prema vrijednosti

Kod ove vrste popusta, popust se aktivira kada se dostigne određeni iznos po retku dokumenta. Stupci koji su prisutni u tablici su:  
- **Vrsta**: u ovom se polju odabire vrsta popusta među onima koji su definirani.  
- **Vrijednost**: postavlja se iznos čijim se premašivanjem popust aktivira.  
- **Postotak**: unosi se postotak popusta koji se primjenjuje nakon što se dostigne navedeni iznos.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

U prikazanom primjeru, ako je vrijednost po retku manja od 100 eura, popusta nema.  
Za vrijednost između 100 i 200 eura primjenjuje se popust od 2%.  
Ako je vrijednost između 200 i 300 eura, popust je 4%, a ako iznos premašuje 300 eura, primjenjuje se popust od 6%.

#### 2.1.4 Cijena prema količini

U ovom slučaju, nakon što se postigne određena količina, jedinična se cijena mijenja. Stupci koji su prisutni u tablici su:  
- **Količina**: postavlja se vrijednost nakon čijeg se premašivanja aktivira "prilagođena" cijena.  
- **Jedinična cijena**: unosi se jedinična cijena za naručenu količinu.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

U prikazanom primjeru, ako je količina po retku manja od 100 eura, cijena će biti ona iz cjenika.  
Za količinu između 100 i 120, jedinična cijena bit će 10.  
Za količinu između 120 i 140, jedinična cijena bit će 9, i tako dalje.

#### 2.1.5 Napomene

Na informativnoj razini moguće je unijeti napomene povezane s određenom vrstom popusta.

#### 2.1.6 Odredišta

Pomoću ovog parametra moguće je odrediti treba li jedinična cijena biti različita za određeno odredište kupca.  
Također je moguće upravljati ovom posebnom vrstom promocije za točno određeni vremenski period.  
Stupci koji su prisutni u tablici su:   
- **Odredište**: mora biti adresa iz evidencije kontakata povezana s kupcem koji je obveznik fakturiranja.  
- **Datum OD/DO**: unosi se raspon datuma tijekom kojih se nudi cijena različita od one u standardnom cjeniku, ali samo za navedeno odredište.  
- **Cijena**: unosi se cijena za navedeno odredište.

## **3. Dodatni podaci**

Donosi se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću unosa novih dodatnih podataka koji su korisni samo za predmetni dokument, uz mogućnost putem odgovarajuće oznake odabrati koje dodatne podatke ispisati.

## **4. Dokumenti u privitku**

Prikazuje se detalj eventualnog **Priloženog dokumenta** (naziv, tip dokumenta, eventualne napomene, naš/vaša referenca). Za upute o tome kako priložiti dokument, upućujemo na članak [Priloži dokumente](/docs/guide/common/operations-with-data/attach-documents).
