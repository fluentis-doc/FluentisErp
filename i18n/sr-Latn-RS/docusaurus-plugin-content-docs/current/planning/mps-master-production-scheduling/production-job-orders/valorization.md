---
title: Obračun troškova
sidebar_position: 6
---

:::important Čemu služi
**Obračun troškova** proizvodnih naloga predstavlja ključni element za efikasno upravljanje proizvodnim procesima.         
Ovaj sistem omogućava definisanje, praćenje i upoređivanje planiranih i stvarnih troškova povezanih sa nalogom, pružajući jasan i detaljan pregled korišćenih resursa.         
Kroz strukturisan interfejs moguće je postaviti početne parametre, upravljati dokumentima i unositi ili menjati dodatne troškove, kako na globalnom nivou tako i za pojedinačni nalog.          
Mogućnost analize troškova na sintetičkom i analitičkom nivou, uz evidentiranje korekcija i ušteda, čini **Obračun troškova** nezaobilaznim alatom za održavanje konkurentnosti i proizvodne efikasnosti.
:::

**Prethodna podešavanja**

Pre nastavka preporučuje se pregled dokumentacije vezane za *Obračun troškova proizvodnih naloga*:

> [MS parametri -> kartica Obračun troškova naloga](/docs/configurations/parameters/production/mps-parameters)  
> [Vrsta obračuna troškova naloga](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Vrste dokumenata](/docs/configurations/tables/production/documents-types)     
> [Parametri kooperacije -> Vrednovanje obrade materijala po trošku](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Posebna dugmad*:
 
> **Dodatni trošak**: omogućava unos dodatnih troškova koji se mogu automatski predlagati u svakom narednom obračunu troškova (ovi troškovi nisu vezani za pojedinačni nalog, već su globalni). Troškovi se dele na *Direktne troškove*, *Opšte troškove* i *Ostale troškove*. Oni će se automatski prikazivati u odgovarajućim sekcijama planiranih i stvarnih troškova na kartici *Ukupni troškovi*;     
> **Izvrši obračun troškova**: pokreće postupak obračuna troškova naloga;    
> **Unesi obračun troškova**: kreira novi obračun troškova; automatski se unose svi podrazumevani podaci definisani tokom početnih podešavanja, koje je po potrebi moguće promeniti za pojedinačni obračun;     
> **Obriši obračun troškova**: briše već kreirani obračun troškova;     
> **Proširi obračun troškova**: proširuje stablo dokumenata za odabrani obračun troškova. 

:::note Napomena
Kartica **Obračun troškova** dostupna je i kod monoproizvodnih i kod multiproizvodnih naloga; kod multiproizvodnih naloga obračun obuhvata sve artikle uključene u taj nalog.
:::

Ova kartica sastoji se od zaglavlja koje sadrži informacije o odabranom obračunu troškova i sledećih kartica: **Detalji troška**, **Ukupni troškovi** i **Analiza troškova**.          

U zaglavlju se nalazi tabela sa svim pokrenutim obračunima za odabrani nalog, dok se sa desne strane prikazuju opšte informacije o odabranom obračunu troškova.

Na Ribbon traci nalaze se dugmad za otvaranje [MRP parametara](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla, [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) i [Radnog ciklusa](/docs/erp-home/registers/production/routes/new-route).

Pritiskom na dugme **Unesi obračun troškova** automatski se kreira novi obračun i unose svi podrazumevani podaci definisani tokom početnih podešavanja, koje je moguće dodatno prilagoditi za pojedinačni red.           
Odabirom reda obračuna troškova moguće je proširiti stablo dokumenata pomoću dugmeta **Proširi obračun troškova** ili ga obrisati pomoću dugmeta **Obriši obračun troškova**.        
Pomoću dugmeta **Dodatni trošak** moguće je definisati dodatne troškove koji će se automatski predlagati u budućim obračunima troškova (ovi troškovi nisu vezani za pojedinačni nalog, već su globalni). Troškovi se dele na *Direktne troškove*, *Opšte troškove* i *Ostale troškove*. Oni će se automatski prikazivati u odgovarajućim sekcijama planiranih i stvarnih troškova na kartici **Ukupni troškovi**. Alternativno, uvek ih je moguće ručno uneti ili izmeniti unutar odgovarajuće sekcije kartice **Ukupni troškovi**.           

Nakon što su svi parametri definisani, za pokretanje ili ponovno pokretanje obračuna troškova dovoljno je odabrati željeni obračun i pritisnuti dugme **Izvrši obračun troškova**.

## Detalji troška

Na kartici **Detalji troška** prikazuju se detaljne informacije o troškovima vezanim za obračun troškova odabran u gornjem delu obrasca.

U tabeli sa leve strane moguće je pregledati stablo dokumenata koji čine obračun troškova sa sledećim informacijama:

**Tip dokumenta**: označava vrstu dokumenta;    
**Godina**: označava godinu dokumenta;     
**Broj**: označava broj dokumenta;     
**Lot**: označava broj lota dokumenta (ako postoji);     
**Tip**: označava šifru vrste dokumenta;    
**Klasa**: označava klasu artikla prisutnog u dokumentu;     
**Šifra artikla**: označava šifru artikla prisutnog u dokumentu;    
**Varijanta**: označava varijantu artikla prisutnog u dokumentu;      
**JM**: označava jedinicu mere artikla prisutnog u dokumentu;      
**Količina**: označava količinu artikla prisutnog u dokumentu;      
**Predviđeni ukupni trošak**: označava ukupni planirani (predviđeni) trošak artikla prisutnog u dokumentu;      
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak artikla prisutnog u dokumentu;      
**Opis artikla**: označava opis artikla prisutnog u dokumentu;      
**Opis varijante**: označava opis varijante artikla prisutnog u dokumentu.      

Nakon odabira dokumenta iz stabla, na desnoj strani obrasca prikazuju se sve detaljne informacije vezane za taj dokument, podeljene prema sledećim kategorijama:

#### *Interna obrada*

**Radni centar**: označava šifru radnog centra;    
**Mašina**: označava šifru mašine;     
**Grupa radne snage**: označava šifru grupe radnika;     
**Referenca dokumenta**: označava referencu dokumenta;    
**JM vremena**: označava jedinicu mere vremena;    
**Planirano vreme pripreme**: označava planirano vreme pripreme;     
**Stvarno vreme pripreme**: označava stvarno vreme pripreme;    
**Planirano vreme mašine**: označava planirano vreme rada mašine;    
**Stvarno vreme mašine**: označava stvarno vreme rada mašine;     
**Planirano vreme rada**: označava planirano vreme rada;    
**Stvarno vreme rada**: označava stvarno vreme rada;    
**Opis radnog centra**: označava opis radnog centra; 
**Opis mašine**: označava opis mašine;     
**Opis grupe rada**: označava opis grupe radnika;        
**Procenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak. 

:::note Napomena
Ako je stvarni radni centar različit od planiranog radnog centra, u ovoj tabeli prikazaće se dva reda: jedan za planirani radni centar sa pripadajućim troškovima i jedan za stvarni radni centar sa pripadajućim troškovima.
:::

#### *Spoljna obrada*

**Kooperant**: označava kooperanta;     
**Referenca dokumenta**: označava referencu dokumenta;    
**JM**: označava osnovnu jedinicu mere;    
**Procenjena količina**: označava planiranu količinu za proizvodnju;    
**Stvarna (efektivna) količina**: označava stvarno proizvedenu količinu;    
**Predviđena jedinična cena**: označava planiranu jediničnu cenu;    
**Stvarna (efektivna) jedinična cena**: označava stvarnu jediničnu cenu;    
**Procenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak.    

#### *Materijali*

**Klasa**: označava klasu artikla;     
**Šifra artikla**: označava šifru artikla;    
**Opis artikla**: označava opis artikla;      
**Referenca dokumenta**: označava referencu dokumenta;    
**JM**: označava osnovnu jedinicu mere;    
**Procenjena količina**: označava planiranu količinu za nabavu;    
**Stvarna (efektivna) količina**: označava stvarno nabavljenu količinu;    
**Predviđena jedinična cena**: označava planiranu jediničnu cenu;    
**Stvarna (efektivna) jedinična cena**: označava stvarnu jediničnu cenu;     
**Varijanta**: označava varijantu artikla;     
**Opis varijante**: označava opis varijante artikla;   
**Procenjeni ukupni trošak**: označava ukupni planirani trošak;    
**Stvarni (efektivni) ukupni trošak**: označava ukupni stvarni trošak.   

U donjem delu obrasca nalazi se proširiva sekcija (**expander**) pod nazivom **Detalji troška dokumenta**, u kojoj se prikazuju sledeće informacije:

**Procenjeni / stvarni jedinični trošak materijala**: označava planirani / stvarni jedinični trošak materijala za odabrani dokument;    
**Procenjeni / stvarni jedinični trošak rada**: označava planirani / stvarni jedinični trošak operacija (unutrašnjih i spoljnih) za odabrani dokument;  
**Ukupni procenjeni / stvarni jedinični trošak**: označava ukupni planirani / stvarni jedinični trošak (materijali i operacije) za odabrani dokument;    
**Procenjeni / stvarni ukupni trošak materijala**: označava planirani / stvarni ukupni trošak materijala za odabrani dokument;    
**Procenjeni / stvarni ukupni trošak rada**: označava planirani / stvarni ukupni trošak operacija (unutrašnjih i spoljnih) za odabrani dokument;  
**Ukupni procenjeni / stvarni trošak**: označava ukupni planirani / stvarni trošak (materijali i operacije) za odabrani dokument.

## Ukupni troškovi

Na ovoj kartici sažeto su prikazani planirani i stvarni troškovi vezani za odabrani troškovni obračun.     

Konkretno, za svaku sekciju (*planirani troškovi* i *stvarni troškovi*) prikazuju se sledeća polja:

**Industrijski trošak**: ukupni trošak materijala i operacija (unutrašnjih i spoljnih);     
**Ukupni direktni troškovi**: ukupni troškovi uneseni u sekciji **Direktni troškovi**;    
**Ukupni direktni trošak naloga**: zbir *Industrijskog troška* i *Ukupnih direktnih troškova*;     
**Marža**: omogućuje definisanje vrste marže (procentualna ili fiksna vrednost) i njenog iznosa;    
**Ukupni obračunati trošak**: zbir *Ukupnog direktnog troška naloga* i *Marže*;     
**Ukupni opšti troškovi**: ukupni troškovi uneseni u sekciji **Opšti troškovi**;      
**Ukupni ostali troškovi**: ukupni troškovi uneseni u sekciji **Ostali troškovi**;     
**Korekcija**: omogućuje unos vrednosti za korekciju *Ukupnog troška sa maržom*;      
**Zaokruživanje**: omogućuje odabir zaokruživanja na više ili niže te određivanje reda veličine zaokruživanja;     
**Ukupni trošak naloga**: zbir *Ukupnog troška sa maržom*, *Ukupnih opštih troškova*, *Ukupnih ostalih troškova*, *Korekcije* i *Zaokruživanja*. Vrednost *Ukupnog troška naloga* prikazuje se crvenom bojom u sekciji *Stvarni troškovi* kada je veća od vrednosti prikazane u sekciji *Planirani troškovi*.           

:::note Napomena
Polja koja se automatski prenose i usklađuju između sekcija *Planirani troškovi* i *Stvarni troškovi* su: *Marža* (vrsta i vrednost), *Korekcija* i *Zaokruživanje* (vrsta i vrednost). Ipak, u sekciji *Stvarni troškovi* moguće ih je ručno izmeniti kako bi se razlikovala od vrednosti unesenih u sekciji *Planirani troškovi*.
:::

Pomoću gumba **Dodatni troškovi** moguće je definisati *Direktne troškove*, *Opšte troškove* i *Ostale troškove* koji se mogu automatski predlagati, kako za planirane tako i za stvarne troškove.      

Za svaki od tih troškova moguće je definisati da li se radi o procentualnoj vrednosti ili fiksnom iznosu te uneti odgovarajuću vrednost.    

Za sve informacije potrebne za kreiranje ovih troškova pogledajte stranicu [Stavke troškova](/docs/configurations/tables/general-settings/cost-elements).

## Analiza troškova

Na ovoj kartici prikazuju se sve komponente troškova za planirane i stvarne troškove koristeći dve vrste analize:

> **Sintetički**: u ovoj vrsti analize prikazuje se *Industrijski trošak* kao zbir troškova materijala i troškova operacija, zatim *Direktni troškovi*, *Opšti troškovi* i *Ostali troškovi*, te ukupan iznos *Marži* i *Korekcija*;     

> **Analitički**: u ovoj vrsti analize na grafikonu se prikazuju pojedinačne stavke. *Industrijski trošak* razlaže se na *Trošak materijala*, *Trošak interne obrade* i *Trošak spoljne obrade*; takođe se zasebno prikazuju stavke *Marži* i *Korekcija*. Naravno, prikazuju se i *Direktni troškovi*, *Opšti troškovi* i *Ostali troškovi*.       

Ove dve vrste analize mogu se upoređivati pomoću:

- **distribucije troškova** prikazane kružnim grafikonom (*pie chart*);
- **upoređivanja troškova** prikazanog stubičastim grafikonom (*bar chart*).

## Način izračuna planiranih i stvarnih troškova

Dokumenti koji učestvuju u izračunu **planiranih troškova** su:
- Nalog
- Planirani nalog
- Zahtev za nabavku
- Narudžbenica dobavljaču
- Radni nalog proizvodnje
- Nalog kooperacije

Dokumenti koji učestvuju u izračunu **stvarnih troškova** su:
- Otpremnica materijala
- Povrat iz kooperacije
- Prijave proizvodnje

### Interna obrada

Kod izračuna planiranog troška operacije, najveći prioritet ima vrednost uneta u polje **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route). U tom slučaju ne uzimaju se u obzir vremena i troškovi povezani sa mašinom ili grupom radnika.                

Ako je **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) jednak nuli ili nije definisan, troškovi internih operacija preuzimaju se iz [Mašine](/docs/configurations/tables/production/machines) i [Grupe radnika](/docs/configurations/tables/production/labour-group) koji su predviđeni za korišćenje u radnom ciklusu za planirane troškove, odnosno iz onih koji su stvarno korišćeni u prijavama proizvodnje za stvarne troškove.         

Sa [Mašinom](/docs/configurations/tables/production/machines) i [Grupom radnika](/docs/configurations/tables/production/labour-group) povezuje se [Mesto troška](/docs/configurations/tables/production/cost-center), definisano u pripadajućim tabelama, pri čemu je za to [Mesto troška](/docs/configurations/tables/production/cost-center) određena odgovarajuća tarifa.         

Trošak definisan na [Mestu troška](/docs/configurations/tables/production/cost-center) množi se sa vremenom definisanim u radnom ciklusu za planirane troškove, dok se za stvarne troškove množi sa stvarno utrošenim vremenom evidentiranim u prijavama proizvodnje.

Osim toga, važno je:

- uneti broj mašina i broj operatera u radni ciklus, a kasnije i u prijave proizvodnje;
- generisati [Tvornički kalendar](/docs/configurations/tables/production/factory-calendar) i [Kalendare proizvodnih kapaciteta](/docs/configurations/tables/production/productive-capacity-calendar);
- definisati vreme početka i završetka rada (uključujući pauze) u [Radnim centrima](/docs/erp-home/registers/production/routes/work-center).

### Spoljna obrada

Kod izračuna planiranog troška operacije, najveći prioritet ima vrednost uneta u polje **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route). U tom slučaju ne uzimaju se u obzir troškovi definisani u cenovnicima kooperacije.       

Ako je **Jedinični trošak** u [Radnom ciklusu](/docs/erp-home/registers/production/routes/new-route) jednak nuli ili nije definisan, planirani trošak zasniva se na cenovniku kooperacije (dok još nije kreiran nalog kooperacije). Nakon kreiranja naloga kooperacije, planirani trošak zasniva se na ceni navedenoj na stavci artikla.      

Što se tiče stvarnog troška, on se preuzima iz vrednosti navedene na dokumentu povrata iz kooperacije.

### Materijali

Trošak materijala zasniva se na **Vrsti troška** odabranoj u obračunu troškova, odnosno na poslednjem, prosečnom ili standardnom trošku.          

Takođe, zasniva se i na oznakama **Trošak lota** i **Trošak naloga**. Ako su obe aktivne, postupak će vrednovati trošak materijala prema odabranoj vrsti troška uzimajući u obzir vrednosti samo za taj konkretni nalog i tu konkretnu seriju, i to isključivo među skladišnim prometima evidentiranim predlošcima knjiženja ulaza koji imaju aktivne oznake *Ažuriraj poslednji ili prosečni trošak* (u zavisnosti od vrednosti polja **Vrsta troška**) i *Poreski interes*. Ako ne pronađe promet sa tim karakteristikama, pretražiće sve promete koji su evidentirali ulaz za tu seriju. Ako ni tada ne pronađe odgovarajući promet, pretražiće sve promete za taj artikl. Ako za artikl ne postoji nijedan ulazni promet, koristiće vrednosti iz polja poslednjeg, prosečnog ili standardnog troška u šifarniku artikla.         

Kod planiranog troška vrednosti se preuzimaju iz [Zahteva za nabavku](/docs/purchase/purchase-requests/general-overview) i [Narudžbenice dobavljaču](/docs/purchase/purchase-orders/general-overview) te se množe sa planiranim utrošcima definisanim u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); dok se kod stvarnih troškova vrednosti preuzimaju iz [Primki](/docs/purchase/purchase-delivery-note/general-overview) za materijal i množe sa količinama utrošenim u [Prijavama proizvodnje](/docs/production/pp-production-in-progress/signals/sisgnals).

Za detalje o zajedničkom radu obrazaca pogledajte stranicu [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).
