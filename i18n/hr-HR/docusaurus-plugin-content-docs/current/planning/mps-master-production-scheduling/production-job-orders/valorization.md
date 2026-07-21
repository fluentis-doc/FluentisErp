---
title: Obračun troškova
sidebar_position: 6
---

:::important Čemu služi
**Obračun troškova** proizvodnih naloga predstavlja ključan element za učinkovito upravljanje proizvodnim procesima.         
Ovaj sustav omogućuje definiranje, praćenje i usporedbu planiranih i stvarnih troškova povezanih s nalogom, pružajući jasan i detaljan pregled korištenih resursa.         
Kroz strukturirano sučelje moguće je postaviti početne parametre, upravljati dokumentima te unositi ili mijenjati dodatne troškove, kako na globalnoj razini tako i za pojedini nalog.          
Mogućnost analize troškova na sintetičkoj i analitičkoj razini, uz evidentiranje korekcija i ušteda, čini **Obračun troškova** nezaobilaznim alatom za održavanje konkurentnosti i proizvodne učinkovitosti.
:::

**Prethodne postavke**

Prije nastavka preporučuje se pregled dokumentacije vezane uz *Obračun troškova proizvodnih naloga*:

> [MS parametri -> kartica Obračun troškova naloga](/docs/configurations/parameters/production/mps-parameters)  
> [Vrsta troškovnog obračuna naloga](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Vrste dokumenata](/docs/configurations/tables/production/documents-types)     
> [Parametri kooperacije -> Vrednovanje obrade materijala po trošku](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Specifični gumbi*:
 
> **Dodatni trošak**: omogućuje unos dodatnih troškova koji se mogu automatski predlagati u svakom sljedećem troškovnom obračunu (ovi troškovi nisu vezani uz pojedini nalog, već su globalni). Troškovi se dijele na *Izravne troškove*, *Opće troškove* i *Ostale troškove*. Oni će se automatski prikazivati u odgovarajućim sekcijama planiranih i stvarnih troškova na kartici *Ukupni troškovi*;     
> **Izvršava obračun troškova**: pokreće postupak troškovnog obračuna naloga;    
> **Umetni obračun troškova**: kreira novi troškovni obračun; automatski se unose svi zadani podaci definirani tijekom početnih postavki, koje je po potrebi moguće promijeniti za pojedini obračun;     
> **Izbriši obračun troškova**: briše već kreirani troškovni obračun;     
> **Proširi obračun troškova**: proširuje stablo dokumenata za odabrani troškovni obračun. 

:::note Napomena
Kartica **Obračun troškova** dostupna je i kod monoproizvodnih i kod multiproizvodnih naloga; kod multiproizvodnih naloga obračun obuhvaća sve artikle uključene u taj nalog.
:::

Ova kartica sastoji se od zaglavlja koje sadrži informacije o odabranom troškovnom obračunu te od sljedećih kartica: **Detalji troška**, **Ukupni troškovi** i **Analiza troškova**.          

U zaglavlju se nalazi tablica sa svim pokrenutim obračunima za odabrani nalog, dok se s desne strane prikazuju opće informacije o odabranom troškovnom obračunu.             

Na Ribbon traci nalaze se gumbi za otvaranje [MRP parametara](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla, [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) i [Radnog ciklusa](/docs/erp-home/registers/production/routes/new-route).

Pritiskom na gumb **Umetni obračun troškova** automatski se kreira novi obračun te se unose svi zadani podaci definirani tijekom početnih postavki, koje je moguće dodatno prilagoditi za pojedini redak.           
Odabirom retka troškovnog obračuna moguće je proširiti stablo dokumenata pomoću gumba **Proširi obračun troškova** ili ga obrisati pomoću gumba **Izbriši obračun troškova**.        
Pomoću gumba **Dodatni trošak** moguće je definirati dodatne troškove koji će se automatski predlagati u budućim troškovnim obračunima (ovi troškovi nisu vezani uz pojedini nalog, već su globalni). Troškovi se dijele na *Direktne troškove*, *Opće troškove* i *Ostale troškove*. Oni će se automatski prikazivati u odgovarajućim sekcijama planiranih i stvarnih troškova na kartici **Ukupni troškovi**. Alternativno, uvijek ih je moguće ručno unijeti ili izmijeniti unutar odgovarajuće sekcije kartice **Ukupni troškovi**.           

Nakon što su svi parametri definirani, za pokretanje ili ponovno pokretanje troškovnog obračuna dovoljno je odabrati željeni obračun i pritisnuti gumb **Izvršava obračun troškova**.

## Detalji troška

Na kartici **Detalji troška** prikazuju se detaljne informacije o troškovima vezanim uz troškovni obračun odabran u gornjem dijelu obrasca.
U tablici s lijeve strane moguće je pregledati stablo dokumenata koji čine troškovni obračun sa sljedećim informacijama:

**Tip dokumenta**: označava vrstu dokumenta;    
**Godina**: označava godinu dokumenta;     
**Broj**: označava broj dokumenta;     
**Lot**: označava broj lota dokumenta (ako postoji);     
**Tip**: označava šifru vrste dokumenta;    
**Klasa**: označava klasu artikla prisutnog u dokumentu;     
**Šifra artikla**: označava šifru artikla prisutnog u dokumentu;    
**Varijanta**: označava varijantu artikla prisutnog u dokumentu;      
**MJ**: označava mjernu jedinicu artikla prisutnog u dokumentu;      
**Količina**: označava količinu artikla prisutnog u dokumentu;      
**Predviđeni ukupni trošak**: označava ukupni planirani (predviđeni) trošak artikla prisutnog u dokumentu;      
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak artikla prisutnog u dokumentu;      
**Opis artikla**: označava opis artikla prisutnog u dokumentu;      
**Opis varijante**: označava opis varijante artikla prisutnog u dokumentu.      

Nakon odabira dokumenta iz stabla, na desnoj strani obrasca prikazuju se sve detaljne informacije vezane uz taj dokument, podijeljene prema sljedećim kategorijama:

#### *Interna obrada*

**Centar rada**: označava šifru radnog centra;    
**Stroj**: označava šifru stroja;     
**Grupa radne snage**: označava šifru grupe radnika;     
**Referenca dokumenta**: označava referencu dokumenta;    
**MJ vremena**: označava mjernu jedinicu vremena;    
**Planirano vrijeme pripreme**: označava planirano vrijeme pripreme;     
**Stvarno vrijeme pripreme**: označava stvarno vrijeme pripreme;    
**Planirano vrijeme stroja**: označava planirano vrijeme rada stroja;    
**Stvarno vrijeme stroja**: označava stvarno vrijeme rada stroja;     
**Planirano vrijeme rada**: označava planirano vrijeme rada;    
**Stvarno vrijeme rada**: označava stvarno vrijeme rada;    
**Opis centra rada**: označava opis radnog centra; 
**Opis stroja**: označava opis stroja;     
**Opis grupe rada**: označava opis grupe radnika;        
**Procijenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak. 

:::note Napomena
Ako je stvarni radni centar različit od planiranog radnog centra, u ovoj će se tablici prikazati dva retka: jedan za planirani radni centar s pripadajućim troškovima i jedan za stvarni radni centar s pripadajućim troškovima.
:::

#### *Vanjsko djelovanje*

**Podizvođač**: označava kooperanta;     
**Referenca dokumenta**: označava referencu dokumenta;    
**MJ**: označava osnovnu mjernu jedinicu;    
**Procijenjena količina**: označava planiranu količinu za proizvodnju;    
**Stvarna (učinkovita) količina**: označava stvarno proizvedenu količinu;    
**Predviđena jedinična cijena**: označava planiranu jediničnu cijenu;    
**Stvarna (efektivna) jedinična cijena**: označava stvarnu jediničnu cijenu;    
**Procijenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak.    

#### *Materijali*

**Klasa**: označava klasu artikla;     
**Šifra artikla**: označava šifru artikla;    
**Opis artikla**: označava opis artikla;      
**Referenca dokumenta**: označava referencu dokumenta;    
**MJ**: označava osnovnu mjernu jedinicu;    
**Procijenjena količina**: označava planiranu količinu za nabavu;    
**Stvarna (učinkovita) količina**: označava stvarno nabavljenu količinu;    
**Predviđena jedinična cijena**: označava planiranu jediničnu cijenu;    
**Stvarna (efektivna) jedinična cijena**: označava stvarnu jediničnu cijenu;     
**Varijanta**: označava varijantu artikla;     
**Opis varijante**: označava opis varijante artikla;   
**Procijenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak.   

U donjem dijelu obrasca nalazi se proširiva sekcija (**expander**) pod nazivom **Detalji troška dokumenta**, u kojoj se prikazuju sljedeće informacije:

**Procijenjeni / stvarni jedinični trošak materijala**: označava planirani / stvarni jedinični trošak materijala za odabrani dokument;    
**Procijenjeni / stvarni jedinični trošak rada**: označava planirani / stvarni jedinični trošak operacija (unutarnjih i vanjskih) za odabrani dokument;  
**Ukupni Procijenjeni / stvarni jedinični trošak**: označava ukupni planirani / stvarni jedinični trošak (materijali i operacije) za odabrani dokument;    
**Procijenjeni / stvarni ukupni trošak materijala**: označava planirani / stvarni ukupni trošak materijala za odabrani dokument;    
**Procijenjeni / stvarni ukupni trošak rada**: označava planirani / stvarni ukupni trošak operacija (unutarnjih i vanjskih) za odabrani dokument;  
**Ukupni Procijenjeni / stvarni trošak**: označava ukupni planirani / stvarni trošak (materijali i operacije) za odabrani dokument.

## Ukupni troškovi

Na ovoj kartici sažeto su prikazani planirani i stvarni troškovi vezani uz odabrani troškovni obračun.     

Konkretno, za svaku sekciju (*planirani troškovi* i *stvarni troškovi*) prikazuju se sljedeća polja:

**Industrijski trošak**: ukupni trošak materijala i operacija (unutarnjih i vanjskih);     
**Ukupni izravni troškovi**: ukupni troškovi uneseni u sekciji **Izravni troškovi**;    
**Ukupni izravni trošak narudžbe**: zbroj *Industrijskog troška* i *Ukupnih izravnih troškova*;     
**Marža**: omogućuje definiranje vrste marže (postotna ili fiksna vrijednost) te njezinog iznosa;    
**Ukupni naplaćeni trošak**: zbroj *Ukupnog izravnog troška narudžbe* i *Marže*;     
**Ukupno generalni troškovi**: ukupni troškovi uneseni u sekciji **Opći troškovi**;      
**Ukupnio ostali troškovi**: ukupni troškovi uneseni u sekciji **Ostali troškovi**;     
**Korekcija**: omogućuje unos vrijednosti za korekciju *Ukupnog troška s maržom*;      
**Zaokruživanje**: omogućuje odabir zaokruživanja na više ili niže te određivanje reda veličine zaokruživanja;     
**Ukupni trošak narudžbe**: zbroj *Ukupnog troška s maržom*, *Ukupnih generalnih troškova*, *Ukupnih ostalih troškova*, *Korekcije* i *Zaokruživanja*. Vrijednost *Ukupnog troška naloga* prikazuje se crvenom bojom u sekciji *Stvarni troškovi* kada je veća od vrijednosti prikazane u sekciji *Planirani troškovi*.           

:::note Napomena
Polja koja se automatski prenose i usklađuju između sekcija *Planirani troškovi* i *Stvarni troškovi* su: *Marža* (vrsta i vrijednost), *Korekcija* i *Zaokruživanje* (vrsta i vrijednost). Ipak, u sekciji *Stvarni troškovi* moguće ih je ručno izmijeniti kako bi se razlikovali od vrijednosti unesenih u sekciji *Planirani troškovi*.
:::

Pomoću gumba **Dodatni troškovi** moguće je definirati *Direktne troškove*, *Opće troškove* i *Ostale troškove* koji se mogu automatski predlagati, kako za planirane tako i za stvarne troškove.      

Za svaki od tih troškova moguće je definirati radi li se o postotnoj vrijednosti ili fiksnom iznosu te unijeti odgovarajuću vrijednost.    

Za sve informacije potrebne za kreiranje ovih troškova pogledajte stranicu [Stavke troškova](/docs/configurations/tables/general-settings/cost-elements).

## Analiza troškova

Na ovoj kartici prikazuju se sve komponente troškova za planirane i stvarne troškove koristeći dvije vrste analize:

> **Sintetski**: u ovoj vrsti analize prikazuje se *Industrijski trošak* kao zbroj troškova materijala i troškova operacija, zatim *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi*, te ukupni iznos *Marži* i *Korekcija*;     

> **Analitički**: u ovoj vrsti analize na grafikonu se prikazuju pojedinačne stavke. *Industrijski trošak* razlaže se na *Trošak materijala*, *Trošak interne obrade* i *Trošak vanjskog djelovanja*; također se zasebno prikazuju stavke *Marže* i *Korekcije*. Naravno, prikazuju se i *Direktni troškovi*, *Opći troškovi* i *Ostali troškovi*.       

Ove dvije vrste analize mogu se uspoređivati pomoću:

- **distribucija troškova** prikazane tortnim grafikonom (*pie chart*);
- **usporedbe troškova** prikazane stupčastim grafikonom (*bar chart*).

## Način izračuna planiranih i stvarnih troškova

Dokumenti koji sudjeluju u izračunu **planiranih troškova** su:

- Nalog
- Planirani nalog
- Zahtjev za nabavu
- Narudžba dobavljaču
- Radni nalog proizvodnje
- Nalog kooperacije

Dokumenti koji sudjeluju u izračunu **stvarnih troškova** su:

- Otpremnica materijala
- Povrat iz kooperacije
- Prijave proizvodnje

### Interna obrada

Kod izračuna planiranog troška operacije, najveći prioritet ima vrijednost unesena u polje **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route). U tom slučaju ne uzimaju se u obzir vremena i troškovi povezani sa strojem ili grupom radnika.                

Ako je **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) jednak nuli ili nije definiran, troškovi unutarnjih operacija preuzimaju se iz [Stroja](/docs/configurations/tables/production/machines) i [Grupe radnika](/docs/configurations/tables/production/labour-group) koji su predviđeni za korištenje u radnom ciklusu za planirane troškove, odnosno iz onih koji su stvarno korišteni u prijavama proizvodnje za stvarne troškove.         

Sa [Strojem](/docs/configurations/tables/production/machines) i [Grupom radnika](/docs/configurations/tables/production/labour-group) povezuje se [Mjesto troška](/docs/configurations/tables/production/cost-center), definirano u pripadajućim tablicama, pri čemu je za to [Mjesto troška](/docs/configurations/tables/production/cost-center) određena odgovarajuća tarifa.         

Trošak definiran na [Mjestu troška](/docs/configurations/tables/production/cost-center) množi se s vremenom definiranim u radnom ciklusu za planirane troškove, dok se za stvarne troškove množi sa stvarno utrošenim vremenom evidentiranim u prijavama proizvodnje.

Osim toga, važno je:

- unijeti broj strojeva i broj operatera u radni ciklus te kasnije i u prijave proizvodnje;
- generirati [Tvornički kalendar](/docs/configurations/tables/production/factory-calendar) i [Kalendare proizvodnih kapaciteta](/docs/configurations/tables/production/productive-capacity-calendar);
- definirati vrijeme početka i završetka rada (uključujući stanke) u [Radnim centrima](/docs/erp-home/registers/production/routes/work-center).

### Vanjsko djelovanje

Kod izračuna planiranog troška operacije, najveći prioritet ima vrijednost unesena u polje **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route). U tom slučaju ne uzimaju se u obzir troškovi definirani u cjenicima kooperacije.       

Ako je **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) jednak nuli ili nije definiran, planirani trošak temelji se na cjeniku kooperacije (dok još nije kreiran nalog kooperacije). Nakon kreiranja naloga kooperacije, planirani trošak temelji se na cijeni navedenoj na stavci artikla.      

Što se tiče stvarnog troška, on se preuzima iz vrijednosti navedene na dokumentu povrata iz kooperacije.

### Materijali

Trošak materijala temelji se na **Vrsti troška** odabranoj u obračunu troškova, odnosno na posljednjem, prosječnom ili standardnom trošku.          

Također, temelji se i na oznakama **Trošak lota** i **Trošak naloga**. Ako su obje aktivne, postupak će vrednovati trošak materijala prema odabranoj vrsti troška uzimajući u obzir vrijednosti samo za taj konkretni nalog i tu konkretnu seriju, i to isključivo među skladišnim prometima evidentiranima predlošcima knjiženja ulaza koji imaju aktivne oznake *Ažuriraj posljednji ili prosječni trošak* (ovisno o vrijednosti polja **Vrsta troška**) te *Porezni interes*. Ako ne pronađe promet s tim karakteristikama, pretražit će sve promete koji su evidentirali ulaz za tu seriju. Ako ni tada ne pronađe odgovarajući promet, pretražit će sve promete za taj artikl. Ako za artikl ne postoji nijedan ulazni promet, koristit će vrijednosti iz polja posljednjeg, prosječnog ili standardnog troška u šifarniku artikla.         

Kod planiranog troška vrijednosti se preuzimaju iz [Zahtjeva za nabavu](/docs/purchase/purchase-requests/general-overview) i [Narudžbe dobavljaču](/docs/purchase/purchase-orders/general-overview) te množe s planiranim utrošcima definiranim u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); dok se kod stvarnih troškova vrijednosti preuzimaju iz [Primki](/docs/purchase/purchase-delivery-note/general-overview) za materijal i množe s količinama utrošenima u [Prijavama proizvodnje](/docs/production/pp-production-in-progress/signals/sisgnals).

Za detalje o zajedničkom radu obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).
