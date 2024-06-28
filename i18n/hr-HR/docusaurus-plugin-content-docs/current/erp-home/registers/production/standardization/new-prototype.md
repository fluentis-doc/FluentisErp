---
title: Upravljanje prototipima
sidebar_position: 2
---

Područje prototipova predstavlja odgovor na model ETO (Engineering To Order), koji je tipičan za tvrtke u sektoru proizvodnje ili instalacija koje rade po narudžbi, izrađujući “po mjeri” proizvod za određenog kupca, koji je potencijalno uvijek različit.

*Integracija s osnovnom specifikacijom / ciklusima*

Nakon što su definirani svi potrebni dijelovi, na bilo kojoj razini materijala unutar prototipa, moguće je dobiti stvaranje pripadajuće osnovne specifikacije i analizirati eventualne naknadne razlike u odnosu na nju. Pomoću ove funkcionalnosti moguće je izbjeći potrebu ponovne izgradnje strukture proizvoda u modulu osnovnih specifikacija, nakon što ponuda bude potvrđena od strane klijenta. Isti postupak operativan je i u kontekstu radnih ciklusa, gdje, nakon prethodnog definiranja faza rada, s potvrdom zadatka moguće je dobiti i radni ciklus identičan onome što je definirano unutar strukture prototipa.

Obrazac se sastoji od područja s informacijama o zaglavlju, gdje je moguće unijeti:

**Vrsta prototipa**: označava vrstu prototipa koji se koristi;     
**Godina / broj / datum**: označavaju godinu, broj i datum stvaranja prototipa, a ovi se podaci automatski unose;          
**Godina / broj / datum**: označavaju godinu, broj i datum stvaranja prototipa, a ovi se podaci automatski unose;   
**Projekt**: označava vezu prototipa s eventualnim projektom;     
**Opis prototipa**: slobodno polje za bilješke.

:::note NAPOMENA 
Moguće je stvoriti prototip za artikl koji nije kodiran u šifarniku i isto tako unijeti kao komponentu artikl koji nije kodiran.
:::

Na desnoj strani zaglavlja nalazi se mogućnost navođenja informacija o nadređenom artiklu prototipa:

- **Kodirani artikl**         
U slučaju da želite stvoriti prototip za kodirani artikl, navodeći razred, šifru i opis artikala, šifru i opis varijante te mjeru;

- **Nekodirani artikl**          
U slučaju da želite stvoriti prototip za nekodirani artikl, ručno navodeći opis artikla i, po potrebi, varijantu, ako se radi o izmišljenom artiklu, mjeru i vrstu nabave.        
Ovi će podaci zatim biti automatski korišteni za generiranje evidencije pripadajućeg artikla.    

Okviri koji se odnose na **Kodirani artikl** i **Nekodirani artikl** nude se otvorenima u slučaju stvaranja novog prototipa, budući da još nije moguće znati hoće li se koristiti već kodirani artikl ili ne; dok se okvir za **Kodirani artikl** prikazuje otvoren, a okvir za **Nekodirani artikl** zatvoren u slučaju da se otvori prototip temeljen na već kodiranom artiklu, i obrnuto ako se temelji na nekodiranom artiklu.               

Ispod su prisutne posebne kartice za:
- Proizvod     
- Komponente    
- Troškovi    

### Proizvod

Na ovom je kartici niz informacija, samo za čitanje, koje se odnose na artikl koji je unesen u zaglavlje.

**Napomena o artiklu**: prikazuju se bilješke unesene unutar kartice [Bilješke](/docs/erp-home/registers/items/create-new-items/item-registry/notes) u Šifarnik artikla.      

**Težine**: prikazuje mjernu jedinicu težine i pripadajuće vrijednosti bruto težine, neto težine i specifične težine.

**Zalihe u skladištima**: prikazuje sva skladišta s pripadajućim količinama trenutačne zalihe artikla.

**Troškovi**: prikazuje vrijednosti troškova: posljednji, srednji, standardni, standardni za sljedeću godinu i prodajna cijena.

**Cjenici za prodaju**: prikazuju se svi cjenici za prodaju na kojima se pojavljuje ovaj artikl.

**Datum nastanka prototipa**: omogućuje unos slobodne bilješke vezane uz prototip (jedino polje koje se može uređivati na ovoj kartici).

### Komponente 

Na kartici **Komponente** moguće je stvarati, mijenjati i pregledavati strukturu osnovne specifikacije prototipa.
Pomoću određenih gumba, prisutnih u traci za naredbe, moguće je dodati ili ukloniti pojedinačne komponente u strukturi. Alternativno, to se može učiniti i preko opcija dostupnih desnim klikom miša na komponenti u strukturi. Dodatna mogućnost je korištenje opcije povlačenja i ispuštanja za premještanje komponente unutar strukture. Također je moguće, putem gumba **Uvezi**, uvesti već postojeću osnovnu specifikaciju, pa se odabranoj komponenti dodaje uvezena osnovna specifikacija ispod.  
Na kartici **Općenito** prikazuje se odabrani nadređeni artikl s razredom, šifrom i opisom; u *Podacima o nadređenom artiklu* moguće je navesti varijantu, verziju, količinu nadređenog, jedinicu mjere i odabrati je li umjetnički artikl.    
Na kraju, moguće je odabrati vrijednost *Izvoz BOM-a* između *Održi osnovnu specifikaciju* i *Nova osnovna specifikacija* kako na nadređenom artiklu, tako i na pojedinačnim komponentama; ovi se uzimaju u obzir prilikom izvoza upravo stvorene osnovne specifikacije u prototipu i, respektivno, omogućuju održavanje postojeće komponente (odabirom opcije *Održi osnovnu specifikaciju*) ili zamjenu postojeće novom (odabirom opcije *Nova osnovna specifikacija*).      

Moguće je upravljati kodiranim i nekodiranim komponentama unutar odgovarajućeg okvira:

- **Kodirani artikl**        
Nel caso in cui si voglia inserire nel prototipo un articolo codificato, indicando classe, codice e descrizione articoli, codice e descriizone variante e unità di misura;

- **Nekodirani artikl**         
Ako želite dodati nekodirani artikl u prototip, ručno navodeći opis artikla i, po potrebi, varijantu (ako je riječ o umjetnom artiklu), jedinicu mjere i vrstu opskrbe. 
Ovi podaci zatim služe za automatsko generiranje osnovnih podataka o odgovarajućem artiklu.

Unutar okvira koji se odnosi na **Podaci o komponenti** moguće je navesti:          
> **Količina**: označava količinu komponente koja se koristi za proizvodnju odgovarajuće *Količine nadređenog*;           
> **Alternativna jedinica mjere**: označava alternativnu jedinicu mjere komponente;              
> **Vrsta troška materijala**: prema zadanim postavkama nudi se *Vrsta troška materijala* koja se nalazi u [Parametrima prototipiranja](/docs/configurations/parameters/logistics/item-prototypes-parameters/), ali se naravno može ručno mijenjati za svaku komponentu. Ako je naveden dobavljač, postupak za određivanje troška komponente prvo provjerava postoji li popis za tog dobavljača i unosi pronađenu vrijednost neovisno o unesenoj *Vrsti troška materijala*. Dakle, pri izračunu troška komponente vrijednost popisa za unesenog dobavljača uvijek ima prednost.  
> **Dobavljač**: označava dobavljača komponente. Automatski se prikazuje onaj koji je naveden kao zadani u preferiranim dobavljačima artikla, ali se može ručno mijenjati; ako je komponenta nekodirani artikl, uneseni dobavljač će se koristiti kao zadani dobavljač u preferiranim dobavljačima tijekom stvaranja artikla.        
> **Trošak materijala**: označava trošak materijala komponente prema unesenoj **Vrsti troška materijala**;           
> **Trošak rada**: označava trošak rada komponente, koji se sastoji od zbroja troškova rada i strojeva;         
> **Trošak komponente**: označava ukupni trošak komponente, koji se sastoji od zbroja troškova materijala i rada;               
> **Bilješke**: omogućuju unos slobodne bilješke vezane uz komponentu.    

Ako je odabrani element u strukturi poluproizvod, na kartici **Komponente** moguće je vidjeti komponente prvog stupnja od kojih se sastoji.

Na karticama **Dodatni podaci - model** i **Dodatni podaci - komponenta** moguće je unijeti dodatne podatke koji se odnose na nadređeni artikl odnosno komponentu; za detaljan opis dodatnih podataka upućujemo na članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata-simple).     

Na dnu obrasca, unutar kartice **Ciklus** moguće je unijeti radne faze koje se odnose na pojedine elemente u strukturi s pripadajućim vremenima i troškovima postavljanja i rada; također je moguće ručno unijeti trošak u polje **Ručni trošak faze** koji ima viši prioritet pri izračunu troškova, zamjenjujući trošak izračunan prema vremenima faza i centrima troškova.    
Kartica **Ciklus** omogućena je za artikle s **Vrstom opskrbe**, *Proizvodnja* ili *Radni nalog* u [Parametrima MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).       
Osim toga, na kartici **Faze pražnjenja** navedena je faza u kojoj se odgovarajući element mora izvaditi iz skladišta.

*Izvoz ciklusa u fazi razvoja.*

*Posebni gumbi*:

> **Parametri prototipiranja**: omogućuje otvaranje parametara prototipiranja, konkretno konzultiranje parametara prototipiranja;    
> **Ponovno izračunavanje troškova**: omogućuje ponovno izračunavanje troškova tog prototipa na temelju troškova koji ga čine;    
> **Šifarnik artikala**: omogućuje otvaranje šifarnika artikala povezan s odabranim elementom;    
> **Parametri MRP-a**: omogućuje otvaranje parametara MRP-a povezanih s odabranim elementom;    
> **Kodiranje artikala**:  omogućuje kodiranje nekodiranih artikala;          
> **Osnovna specifikacija**: omogućuje otvaranje odgovarajuće osnovne specifikacije povezane s odabranim elementom;    
> **Ciklus rada**: omogućuje otvaranje ciklusa rada povezanog s odabranim elementom;   
> **Analiziraj**: omogućuje usporedbu komponenata prikazanih na kartici *Komponente* s onima prisutnima u osnovnoj specifikaciji koja se nalazi u evidenciji, isticanjem komponenata koje su prisutne u oba;        
> **Uvezi**: odabirom komponente iz stabla imamo mogućnost povezivanja s tom komponentom već prethodno definiranom osnovnom specifikacijom i zatim je možemo mijenjati;      
> **Izvezi**: sprema ili prepliše stvorenu osnovnu specifikaciju u prototipima, radi zajedno s opcijom *Izvoz BOM* u kartici *Općenito* odjeljak *Komponenta*;    
> **Dodaj komponentu**: omogućuje dodavanje komponente odabranom elementu;    
> **Izbriši komponentu**: omogućuje brisanje komponente odabranog elementa;    
> **Proširi sve**: omogućuje otvaranje cijelog stabla osnovne specifikacije;    
> **Kopiraj**: omogućuje kopiranje elementa u strukturi osnovne specifikacije;     
> **Izreži**: omogućuje izrezivanje elementa iz strukture osnovne specifikacije;     
> **Zalijepi**: omogućuje lijepljenje elementa osnovne specifikacije koji je upravo kopiran ili izrezan;        

### Troškovi

Na kartici **Troškovi** prikazane su cijene prototipa općenito (za internu upotrebu), za određenog klijenta, ili čak za određenog klijenta povezanog s ponudom. Stoga je moguće imati više valorizacija istog prototipa. Individualne valorizacije imaju zajedničke podatke samo u kartici *Komponente*, dok se mogu razlikovati po uvjetima koji utječu na vrijednost od industrijskog troška nadalje.          
Prototip se može povezati s ponudom klijenta izravno iz samog dokumenta, tako da možete stvoriti novi prototip ili ga povezati s već postojećim pomoću odgovarajućih gumba *Stvori novi prototip* i *Poveži prototip*.

Također je moguće unijeti eventualne *Direktne troškove*, *Opće troškove* i/ili *Druge troškove* koji će se uzeti u obzir prilikom ukupnog izračuna. Svi troškovi u sljedećim kategorijama: **Direktni troškovi**, **Opći troškovi** i **Ostali troškovi** upravljaju se unutar tablice [Stavke troška](/docs/configurations/tables/general-settings/cost-elements/) gdje putem polja *Tip troška* možete odrediti u kojoj kategoriji će biti sadržano.

Konkretno, uzeti u obzir sljedeći polja:

**Trošak sata ručnog rada**: omogućava ručni unos satnog troška, koji će utjecati samo na komponente koje imaju povezane faze;      
**Trošak materijala**: ukupni materijalni trošak izračunat iz strukture distinte;      
**Trošak radne snage**: ukupni trošak radne snage izračunat iz strukture distinte;      
**Trošak stroja**: ukupni trošak stroja izračunat iz strukture distinte;      
**Ručni trošak**: nije upravljano;  

**Industrijski trošak**: ukupni *Trošak materijala*, *Troška Radne snage* i *Troška stroja*;     
**Ukupni direkti troškovi**: ukupni uneseni troškovi u odjeljku *Direktni troškovi*;    
**Industrijski trošak + direkti troškovi**: ukupni *Industrijski trošak* i *Direktni troškovi*;    
**Nadoplata**: omogućuje unos postotka ili iznosa nadoplate; ova vrijednost povećava *Industrijski trošak* ili *Ukupne opće troškove*, ovisno o tome je li u [Parametrima prototipiranja](/docs/configurations/parameters/logistics/item-prototypes-parameters/) u odjeljku *Izračun prodajne cijene s nadoplatom*: odabrano *Direktni troškovi* ili *Ukupni troškovi*;      
**Ukupni nadopunjeni trošak**: ukupni *Industrijski trošak + Direktni troškovi* i nadoplata;      
**Ukupni opći troškovi**: ukupni uneseni troškovi u odjeljku *Opći troškovi*;    
**Ukupni ostali troškovi**: tukupni uneseni troškovi u odjeljku *Ostali troškovi*;    
**Korekcija**: omogućuje unos vrijednosti za korekciju nove prodajne cijene;      
**Zaokruživanje**: omogućuje odabir zaokruživanja prema gore ili prema dolje i redoslijeda veličine;   
**Prodajna cijena**: ukupno od *Industrijskog troška + Direktni troškovi*, *Opći troškovi*, *Ukupni ostali troškovi*, *Korekcija* i *Zaokruživanje*; ako je u [Parametrima prototipiranja](/docs/configurations/parameters/logistics/item-prototypes-parameters/) omogućena opcija *Nova prodajna cijena* ovo polje automatski se izračunava i ne može se ručno mijenjati, dok je ako opcija onemogućena, polje je ručno uredno;           
**Proizvodna serija**: omogućuje unos vrijednosti proizvodne serije, što utječe na povećanje ili smanjenje troškova radne snage i stroja, te utječe na jediničnu cijenu opremanja;      
**Ukupno proizvodnog serija**: ukupno *Prodajna cijena* izračunata za navedenu *Proizvodnu seriju*;     
**Odstupanje od cjenika**: pokazuje odstupanje u odnosu na cjenik prodaje;            
**Tip cjenika prodaje**: označava vrstu cjenika;                
**Do datuma valjanosti**: označava datum valjanosti cjenika;    

**Vrsta grafičkog detalja analize**   

Omogućava prikaz sintetičkog ili analitičkog dijagrama torte koji prikazuje sastav troškova prototipa.

*Posebni gumbi*:

> **Ažuriranje cjenika prodaje**: omogućava ažuriranje cijene artikla na odgovarajućem cjeniku prodaje;         
> **Ažuriranje ponuda**: promjenom vrijednosti *Prodajne cijene* prototipa povezanog s ponudom, pomoću ovog gumba možete ažurirati cijenu navedenu u ponudi;     
> **Ažuriraj klijenta**: omogućava stvaranje nove valorizacijske stavke za prototip povezan s odabranim klijentom.        

**Način izračuna troškova**

Troškovi navedeni za svaki komponentu su jedinični troškovi, u strukturi distinte prototipa navedeni su jedinični i ukupni troškovi materijala i radnih procesa koji se odnose na količinu nadređenog elementa svake komponente.

- Za kupljene artikle nisu izračunati troškovi rada, a troškovi materijala preuzimaju se prema parametrima prototipa (skladišni troškovi, troškovi cjenika i najbolja cijena cjenika). Trošak se traži u cjeniku prema datumu valjanosti prototipa, ako datum valjanosti prototipa nije unesen, troškovi se traže prema datumu dana. 
Za pretragu troškova u cjenicima koristi se JM korištenje i JM alternativno članka, a ako se pronađe cijena s UM različitom od JM Korištenja, primjenjuje se faktor pretvorbe JM alternativnog članka kako bi se izračunao trošak materijala. 
Trošak materijala komponente može se unijeti ručno, a cijeli trošak materijala prototipa ponovno se izračunava prema novom trošku, ali pokretanjem ponovnog izračuna troškova iz Ribbona, trošak se traži prema pravilima parametara.

- Za artikle na računi rad, troškovi materijala preuzimaju se iz komponenti, dok se troškovi radnih procesa preuzimaju iz faza ako postoje, inače se preuzimaju iz cjenika računa rad.   

- Za artikle proizvodnje, troškovi materijala preuzimaju se iz komponenti, dok se troškovi rada preuzimaju iz faza. Izračun troškova rada uzima u obzir da je prioritetan ručni trošak izražen u fazi, ako ga nema, provjerava se ima li ručni satni trošak naveden u kartici troškova, ako nije prisutan, traži se trošak u centru troška radne skupine i strojeva. 
Za postavljanje, ako je uneseno vrijeme postavljanja, smatra se sveobuhvatnim za radnu snagu i strojeve, a sve se računa kao radna snaga koristeći trošak prema opisanim prioritetima, inače, ako se želi podijeliti trošak postavljanja stroja od troška postavljanja radne snage, moraju se unijeti radna grupa za pretragu troška njenog centra i postavljanje strojeva, odnosno stroj, za pretragu troška njegovog centra, u nedostatku tih podataka, čak i ako su uneseni vremena postavljanja čovjeka i stroja, ne uzimaju se u obzir za izračun troškova. 
Svaki sastavni dio distinte prototipa uključuje u svoj trošak materijala i radnih procesa i trošak svojih komponenti, isto vrijedi i za sam prototip. 
Navedena proizvodna serija u kartici troškova odnosi se samo na izračun jedinične cijene postavljanja koja se dodaje na industrijski trošak prototipa, mijenjajući proizvodnu seriju povećavaju ili smanjuju troškovi radne snage i strojeva u kartici troškova. Procedura ponovnog izračuna troškova ponovno izračunava sve troškove uzimanjem podataka iz parametara za kupnju (skladišni troškovi, troškovi cjenika i najbolja cijena cjenika) i iz faza za radne procese.