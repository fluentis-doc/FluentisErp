---
title: Upravljanje strukturama 
sidebar_position: 2
---

Kao što je već spomenuto, iz obrasca [Sklopovi](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), odabirom osnovne razrade koju želite vidjeti i dvostrukim klikom ulazite u uređivanje osnovne razrade i vidite njezinu grafičku prikaz u obliku stabla.

Osnovna razrada je višerazinska struktura, stablo u kojem postoji veza tipa roditelj-dijete. [Dijete](/docs/guide/glossary/glossary-intro#a) može također biti roditelj i tako dalje, za neodređeni broj razina, sve do posljednje razine gdje se nalaze materijali.

Ekran je podijeljen u dva dijela: s lijeve strane je prikazano stablo osnovne razrade, dok se s desne strane prikazuju detalji o različitim komponentama stabla.


## Struktura osnovne razrade

Da biste vidjeli cijelo stablo, jednostavno kliknite mišem na **+** pored koda artikla ili pritisnite gumb **Razvij**. Na taj način će se otvoriti svi različiti slojevi osnovne razrade, a svaki sloj bit će predstavljen ikonama koje identificiraju kategoriju svakog artikla ili točnije vrstu nabave tog artikla:

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png): predstavlja artikle proizvodnje;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png): predstavlja artikle kupovine;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png): predstavlja artikle konta rada;

Nakon što ste proširili padajući izbornik, imat ćete mogućnost koristiti sljedeće **Posebne gumbe** za odabrani članak:

> **Unesi komponentu**: omogućuje unos novog podnivoa razrade;  
> **Izbriši komponente**: omogućuje brisanje odabrane komponente;    
> **Razvijaj**: omogućuje potpuno razvijanje stabla osnovne razrade;     
> **Kopiranje komponente**: omogućuje kopiranje odabrane komponente;     
> **Izreži komponentu**: omogućuje izrezivanje odabrane komponente;     
> **Zalijepi komponentu**: omogućuje lijepljenje odabrane komponente;     
> **Parametri MRP**: omogućuje otvaranje [MRP Parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) odabrane komponente;     
> **Radni Ciklus**: omogućuje otvaranje [Radnog Ciklusa](/docs/erp-home/registers/production/routes/new-route) del componente selezionato;       
> **Ažuriraj strukturu**: omogućuje ažuriranje svih informacija o osnovnoj razradi (na primjer, ako je promijenjen opis članka osnovne razrade, upotrebom ove funkcije aplikacija prikazuje ažurirani opis tog članka).


## Informacije o roditelju/dijelu osnovne razrade

Držeći odabranom jednu od komponenata razrade, prikazuju se informacije u desnom dijelu prozora o razini iznad odabrane komponente (na gornjem desnom dijelu prozora) i same komponente (na donjem desnom dijelu prozora).

**Sklop**: prikazuju se verzija osnovne razrade, razred, kod, opis i varijanta razine iznad, količina razine iznad na koju se odnosi količina komponente i njezina mjerna jedinica; u vezi s količinom moguće je odrediti je li riječ o fiksnoj ili varijabilnoj količini, odnosno, hoće li se s tom razradom uvijek proizvoditi određena količina ili može biti različita iz proizvodnje u proizvodnju; zatim se može odrediti je li ovaj sklop **Fikcionalni sklop** odnosno sklop koji se u obradi rasporeda ili MRP-a ne razmatra; zatim postoji polje **Bilješke** u kojem je moguće unijeti eventualne napomene o roditelju, a tu su i polja koja se odnose na datume važenja sklopa, datum unosa sklopa i datum posljednje izmjene sklopa.

:::note NAPOMENA
**Datum valjanosti**: datum važenja sklopa omogućava provjeru sastava osnovne razrade na uneseni datum; ovo omogućava održavanje povijesti svih promjena izvršenih na toj razradi. Na primjer, brisanjem datuma važenja prikazuju se svi komponenti korišteni za tu razradu od trenutka njezinog stvaranja, ističući crveno komponente koje više nisu važeće danas. 
:::

**Komponenta**: prikazuju se razred, šifra, opis i varijanta odabrane komponente u stablu, te jedinica mjere komponente; prioritet, odnosno redoslijed prema kojem se komponenta treba prikazati u stablu osnovne razrade, informacija o tome je li komponenta fikcionalna ili ne. Postoji i oznaka *Fikcionalno*, koja omogućava odluku hoće li odabrana komponenta biti smatrana fikcionalnom samo u okviru te osnovne razrade. U slučaju *fikcionalnog članka* ili *fikcionalnog nivoa*, postupak *Opće Rasporeda * i *MRP-a* tijekom eksplozije potreba “preskočit će” komponentu označenu kao fikcionalnu ili kao fikcionalni nivo, čitajući potrebe njezinih eventualnih komponenti.

Povezani s komponentom su i svi prisutni kartice:

### Opći podaci 

**Količina**: predstavlja količinu predviđenu za proizvodnju referentne količine njenog višeg nivoa;  
**Jedinica mjere uporabe**: može se razlikovati od upravljačke jedinice mjere same komponente **Fiksno** označava da će se uvijek koristiti ista količina komponente za proizvodnju višeg nivoa; **Varijabilno** označava da će se količina komponente za proizvodnju potomstva mijenjati iz puta u put (na primjer, mijenjat će se s količinom roditelja);  
**Postotak odstupanja na količinu negativno i pozitivno** označava postotak za koji se može koristiti komponenta više ili manje u odnosu na navedenu količinu kako bi se ostalo unutar postavljene tolerancije; 
**Početak važenja** i **Kraj važenja**: omogućuju odlučivanje o tome hoće li komponenta biti valjana od određenog datuma ili do određenog datuma;
**Prioritet**: označava redoslijed prema kojem se komponenta treba prikazati u stablu osnovne razrade;  
**Pokretno**: omogućuje odlučivanje hoće li se komponenta kretati ili ne treba biti pomicana na skladište. Ova oznaka će utjecati na sve skladišne pokrete, jer će u kreaciji pokreta biti uzeti u obzir samo članci s aktivnom oznakom, dok drugi neće biti pomicani;  
**Kritično**: ako je oznaka aktivna, služi za označavanje kritičnosti te komponente (za sada se koristi samo za [Raspoređivanje prema kapacitetu](/docs/planning/ms-master-scheduling/finite-capacityscheduling));          
**Unaprijed postavljeni postotak otpada za komponentu**, koja omogućava da se eksplozija potreba poveća za taj postotak količine same komponente;  
**Fiktivna razina**: ako je oznaka aktivna, čini da postupak *Opće Rasporeda* i *MRP* preskoči tu komponentu tijekom eksplozije potreba;  
**Referentna shema**: omogućuje unos slobodne bilješke o komponenti (na primjer, referentna shema tehničkog crteža);           
**Bilješke**: omogućuju unos slobodne bilješke o komponenti.

### Alternative

Na ovoj Kartici moguće je postaviti alternative za komponentu osnovne razrade u prioritetnom redoslijedu, u slučaju da komponenta nije dostupna u trenutku proizvodnje te razrade.

Postoji mogućnost, u slučaju više alternativa, da se odredi prioritet njihove upotrebe tijekom proizvodnje *Raspored* i *MRP* uzimat će u obzir alternative ovisno o aktivaciji određenih zastava u povezanim parametrima (za *MRP Parametre* zastava koja se treba postaviti bit će *Razmotri i alternative materijala* i postavlja se u prozoru [MRP Parametara](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), za *Raspored*, ista zastava koja se treba aktivirati bit će *Razmotri i alternative materijala* i postavlja se u zaslonu [Rasporeda](/docs/planning/ms-master-scheduling/general-schedule#parametri-di-schedulazione-generale), kartica *Parametri*).


### Faze razduženja

Na ovoj kartici moguće je postaviti fazu tijekom koje se komponenta mora isprazniti.

Postoje tri vrste pražnjenja materijala: **Automatsko**, **S popisom** i **Ručno** a postavljaju se u [MRP Parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters).

U slučaju odabira ručnog pražnjenja, **Fluentis** automatski uzima u obzir da će se pražnjenje materijala (koji nije dodijeljen fazi) automatski obaviti, ako postoji više faza za taj proizvod, u skladu s posljednjom fazom koja ima aktivirane zastave *Pomično* i *Proizvodno*. 

### Ciklus

Na ovoj kartici prikazan je popis [faza](/docs/configurations/tables/production/standard-phases) koje čine [ciklus obrade](/docs/erp-home/registers/production/routes/new-route) odabranog članka.

### Komponente

Na ovoj kartici prikazuju se eventualne komponente odabranog članka. Moguće je dodavati nove komponente i mijenjati postojeće s ove kartice, kao i putem gumba u traci s karticama (Umetni/Kopiraj/Zalijepi/Izreži i Izbriši komponente).

### Bilješke

Na ovoj Kartici mogu se unijeti eventualne bilješke i učitati datoteke ili slike koje treba uzeti u obzir tijekom proizvodnje.

### Dodatni podaci – Osnovna razrada

Na ovoj Kartici moguće je pregledati i eventualno mijenjati dodatne podatke koji se odnose na osnovnu razradu odabrane komponente. Ova kartica je aktivna samo ako komponenta ima osnovnu razradu.

### Dodatni podaci  - Komponenti 

Na ovoj kartici moguće je pregledati i eventualno mijenjati dodatne podatke koji se odnose na odabranu komponentu. 

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, molimo pogledajte sljedeći link [Značajke, gumbe i zajednička polja](/docs/guide/common).