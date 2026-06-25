---
title: Upravljanje prototipovima
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

- **Artikl s klasom**         
U slučaju da želite stvoriti prototip za kodirani artikl, navodeći razred, šifru i opis artikala, šifru i opis varijante te mjeru;

- **Artikl bez klase**          
U slučaju da želite stvoriti prototip za nekodirani artikl, ručno navodeći opis artikla i, po potrebi, varijantu, ako se radi o izmišljenom artiklu, mjeru i vrstu nabave.        
Ovi će podaci zatim biti automatski korišteni za generiranje evidencije pripadajućeg artikla.    

Okviri koji se odnose na **Artikl s klasom** i **Artikl bez klase** nude se otvorenima u slučaju stvaranja novog prototipa, budući da još nije moguće znati hoće li se koristiti već kodirani artikl ili ne; dok se okvir za **Artikl s klasom** prikazuje otvoren, a okvir za **Artikl bez klase** zatvoren u slučaju da se otvori prototip temeljen na već kodiranom artiklu, i obrnuto ako se temelji na nekodiranom artiklu.               

Ispod su prisutne posebne kartice za:
- Proizvod     
- Komponente    
- Troškovi    

### Proizvod

Na ovom je kartici niz informacija, samo za čitanje, koje se odnose na artikl koji je unesen u zaglavlje.

**Napomena o artiklu**: prikazuju se bilješke unesene unutar kartice [Bilješke](/docs/erp-home/registers/items/create-new-item) u Šifarnik artikla.      

**Težine**: prikazuje mjernu jedinicu težine i pripadajuće vrijednosti bruto težine, neto težine i specifične težine.

**Skladište zalihe**: prikazuje sva skladišta s pripadajućim količinama trenutačne zalihe artikla.

**Troškovi**: prikazuje vrijednosti troškova: posljednji, srednji, standardni, standardni za sljedeću godinu i prodajna cijena.

**Prodajni cjenici**: prikazuju se svi cjenici za prodaju na kojima se pojavljuje ovaj artikl.

**Napomena***: omogućuje unos slobodne bilješke vezane uz prototip (jedino polje koje se može uređivati na ovoj kartici).

### Komponente 

Na kartici **Komponente** moguće je stvarati, mijenjati i pregledavati strukturu osnovne specifikacije prototipa.
Pomoću određenih gumba, prisutnih u traci za naredbe, moguće je dodati ili ukloniti pojedinačne komponente u strukturi. Alternativno, to se može učiniti i preko opcija dostupnih desnim klikom miša na komponenti u strukturi. Dodatna mogućnost je korištenje opcije povlačenja i ispuštanja za premještanje komponente unutar strukture. Također je moguće, putem gumba **Uvezi**, uvesti već postojeću osnovnu specifikaciju, pa se odabranoj komponenti dodaje uvezena osnovna specifikacija ispod.  
Na kartici **Opći** prikazuje se odabrani nadređeni artikl s pripadajućom klasom, šifrom i opisom. U sekciji Podaci nadređenog artikla moguće je definirati varijantu, verziju, količinu nadređenog artikla, mjernu jedinicu te označiti radi li se o fiktivnom artiklu.
Na kraju je moguće odabrati vrijednost polja Izvoz BOM-a (tipka Izvezi) između opcija Zadrži sastavnicu i Nova sastavnica, kako za nadređeni artikl tako i za pojedine komponente.
Ove se postavke primjenjuju prilikom izvoza novokreirane sastavnice u prototip te određuju način obrade postojećih podataka:
Zadrži sastavnicu – zadržava postojeću komponentu u sastavnici;
Nova sastavnica – zamjenjuje postojeću komponentu novom.   

Moguće je upravljati kodiranim i nekodiranim komponentama unutar odgovarajućeg okvira:

- **Komponenta s klasom**        
Ako se u prototip želi umetnuti već definirani artikl, potrebno je navesti klasu, šifru i opis artikla, kao i šifru i opis varijante te mjernu jedinicu.

- **Komponenta bez klase**         
Ako želite dodati nekodirani artikl u prototip, ručno navodeći opis artikla i, po potrebi, varijantu (ako je riječ o umjetnom artiklu), jedinicu mjere i vrstu opskrbe. 
Ovi podaci zatim služe za automatsko generiranje osnovnih podataka o odgovarajućem artiklu.

Unutar okvira koji se odnosi na **Podaci o komponenti** moguće je navesti:          
> **Količina**: označava količinu komponente koja se koristi za proizvodnju odgovarajuće *Količine nadređenog*;           
> **Alternativna mjerna jedinica**: označava alternativnu jedinicu mjere komponente;              
> **VrsTipta troška materijala**: prema zadanim postavkama nudi se *Vrsta troška materijala* koja se nalazi u [Parametrima prototipa](/docs/configurations/parameters/logistics/item-prototypes-parameters/), ali se naravno može ručno mijenjati za svaku komponentu. Ako je naveden dobavljač, postupak za određivanje troška komponente prvo provjerava postoji li popis za tog dobavljača i unosi pronađenu vrijednost neovisno o unesenoj *Vrsti troška materijala*. Dakle, pri izračunu troška komponente vrijednost popisa za unesenog dobavljača uvijek ima prednost.  
> **Dobavljač**: označava dobavljača komponente. Automatski se prikazuje onaj koji je naveden kao zadani u preferiranim dobavljačima artikla, ali se može ručno mijenjati; ako je komponenta nekodirani artikl, uneseni dobavljač će se koristiti kao zadani dobavljač u preferiranim dobavljačima tijekom stvaranja artikla.        
> **Trošak materijala**: označava trošak materijala komponente prema unesenoj **Vrsti troška materijala**;           
> **Trošak rada**: označava trošak rada komponente, koji se sastoji od zbroja troškova rada i strojeva;         
> **Trošak komponente**: označava ukupni trošak komponente, koji se sastoji od zbroja troškova materijala i rada;               
> **Bilješka**: omogućuju unos slobodne bilješke vezane uz komponentu.    

Ako je odabrani element u strukturi poluproizvod, na kartici **Komponente** moguće je vidjeti komponente prvog stupnja od kojih se sastoji.

Na karticama **Dodatni podaci - uzorak** i **Dodatni podaci - komponenta** moguće je unijeti dodatne podatke koji se odnose na nadređeni artikl odnosno komponentu; za detaljan opis dodatnih podataka upućujemo na članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).     

Na dnu obrasca, unutar kartice **Ciklus** moguće je unijeti proizvodne faze koje se odnose na pojedine elemente u strukturi s pripadajućim vremenima i troškovima postavljanja i rada; također je moguće ručno unijeti trošak u polje **Ručni cijena faza** koji ima viši prioritet pri izračunu troškova, zamjenjujući trošak izračunan prema vremenima faza i centrima troškova.    
Kartica **Ciklus** omogućena je za artikle s **Vrstom opskrbe**, *Proizvodnja* ili *Radni nalog* u [MRP Parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).       
Osim toga, na kartici **Faze razduženja** navedena je faza u kojoj se odgovarajući element mora izvaditi iz skladišta.

*Izvoz ciklusa u fazi razvoja.*

*Posebni gumbi*:

> **Parametri prototipa artikla**: omogućuje otvaranje parametara prototipiranja, konkretno konzultiranje parametara prototipiranja;    
> **Preračun troškova**: omogućuje ponovno izračunavanje troškova tog prototipa na temelju troškova koji ga čine;    
> **Šifarnik artikala**: omogućuje otvaranje šifarnika artikala povezan s odabranim elementom;    
> **MRP Parametri**: omogućuje otvaranje parametara MRP-a povezanih s odabranim elementom;    
> **Kodiranje artikala**:  omogućuje kodiranje nekodiranih artikala;          
> **Osnovna specifikacija**: omogućuje otvaranje odgovarajuće osnovne specifikacije povezane s odabranim elementom;    
> **Ciklus rada**: omogućuje otvaranje ciklusa rada povezanog s odabranim elementom;   
> **Usporedite**: omogućuje usporedbu komponenata prikazanih na kartici *Komponente* s onima prisutnima u osnovnoj specifikaciji koja se nalazi u evidenciji, isticanjem komponenata koje su prisutne u oba;        
> **Uvezi**: odabirom komponente iz stabla imamo mogućnost povezivanja s tom komponentom već prethodno definiranom osnovnom specifikacijom i zatim je možemo mijenjati;      
> **Izvezi**: sprema ili prepliše stvorenu osnovnu specifikaciju u prototipima, radi zajedno s opcijom *Izvoz BOM* u kartici *Općenito* odjeljak *Komponenta*;    
> **Unesi komponentu**: omogućuje dodavanje komponente odabranom elementu;    
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
**Trošak materijala**: ukupni materijalni trošak izračunat iz strukture sastavnice;      
**Trošak radne snage**: ukupni trošak radne snage izračunat iz strukture sastavnice;      
**Trošak stroja**: ukupni trošak stroja izračunat iz strukture sastavnice;      
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
**Proizvodni lot**: omogućuje unos vrijednosti proizvodne serije, što utječe na povećanje ili smanjenje troškova radne snage i stroja, te utječe na jediničnu cijenu opremanja;      
**Ukupno proizvodni lot**: ukupno *Prodajna cijena* izračunata za navedenu *Proizvodnu seriju*;     
**Odstupanje od cjenika**: pokazuje odstupanje u odnosu na cjenik prodaje;            
**Vrsta cjenika prodaje**: označava vrstu cjenika;                
**Do datuma valjanosti**: označava datum valjanosti cjenika;    

**Tip detaljnog grafikona analize**   

Omogućava prikaz sintetičkog ili analitičkog dijagrama torte koji prikazuje sastav troškova prototipa.

*Posebni gumbi*:

> **Ažuriraj prodajni cjenik**: omogućava ažuriranje cijene artikla na odgovarajućem cjeniku prodaje;         
> **Ažuriranje ponuda**: promjenom vrijednosti *Prodajne cijene* prototipa povezanog s ponudom, pomoću ovog gumba možete ažurirati cijenu navedenu u ponudi;     
> **Osvježi kupce**: omogućava stvaranje nove valorizacijske stavke za prototip povezan s odabranim klijentom.        

**Način izračuna troškova**

Za svaku komponentu prikazani su jedinični troškovi, dok se u strukturi sastavnice prototipa prikazuju jedinični i ukupni troškovi materijala i operacija, izračunati prema količini nadređenog artikla za svaku komponentu.

Za nabavne artikle ne izračunavaju se troškovi operacija, dok se troškovi materijala preuzimaju prema postavkama prototipa (skladišni troškovi, cijene iz cjenika ili najpovoljnija cijena iz cjenika). Trošak se traži u cjeniku prema datumu valjanosti prototipa, a ako datum valjanosti nije definiran, koristi se tekući datum.
Prilikom pretraživanja cjenika koristi se mjerna jedinica uporabe, uključujući slučajeve kada je definirana kao alternativna mjerna jedinica artikla. Ako se pronađe cijena izražena u drugoj mjernoj jedinici, primjenjuje se faktor pretvorbe alternativne mjerne jedinice kako bi se izračunao trošak materijala.
Trošak materijala komponente moguće je unijeti i ručno. Nakon toga sustav ponovno izračunava trošak materijala prototipa na temelju nove vrijednosti. Međutim, pokretanjem funkcije Ponovni izračun troškova na alatnoj vrpci, trošak će se ponovno izračunati prema pravilima definiranim u parametrima.
Za artikle kooperacije troškovi materijala preuzimaju se od njihovih komponenti, dok se troškovi operacija preuzimaju iz faza proizvodnje, a ako one nisu definirane, iz cjenika kooperacije.
Za proizvodne artikle troškovi materijala također se preuzimaju od komponenti, dok se troškovi operacija preuzimaju iz faza proizvodnje.

Prilikom izračuna troškova operacija primjenjuje se sljedeći redoslijed prioriteta:
- ako je u fazi definiran ručni trošak, koristi se ta vrijednost;
- ako nije, provjerava se postoji li ručno definiran satni trošak na kartici Troškovi;
- ako ni on nije definiran, trošak se preuzima iz centra troška grupe radnika odnosno strojeva.

Kod troškova pripreme (setupa), ako je uneseno samo vrijeme pripreme, ono se smatra ukupnim vremenom koje uključuje rad strojeva i radnika te se cijeli trošak obračunava kao trošak rada koristeći prethodno opisani redoslijed prioriteta.
Ako se želi zasebno obračunati trošak pripreme stroja i trošak pripreme radnika, potrebno je definirati:
- grupu radnika radi preuzimanja troška iz njezina centra troška;
- stroj za pripremu radi preuzimanja troška iz njegova centra troška.

Ako ti podaci nisu definirani, vremena pripreme radnika i stroja neće se uzeti u obzir pri izračunu troškova, čak i ako su unesena.
Trošak svake komponente u sastavnici prototipa uključuje vlastite troškove materijala i operacija, kao i troškove svih njezinih podkomponenti. Isto vrijedi i za ukupni trošak prototipa.
Vrijednost proizvodne serije definirana na kartici Troškovi koristi se isključivo za izračun jediničnog troška pripreme, koji se pribraja industrijskom trošku prototipa. Promjenom veličine proizvodne serije povećavaju se ili smanjuju troškovi rada i strojeva prikazani na kartici Troškovi.
Funkcija Ponovni izračun troškova ponovno izračunava sve troškove, pri čemu za nabavne artikle koristi podatke definirane u parametrima (skladišni troškovi, cijene iz cjenika ili najpovoljnija cijena iz cjenika), a za operacije podatke definirane u fazama proizvodnje.