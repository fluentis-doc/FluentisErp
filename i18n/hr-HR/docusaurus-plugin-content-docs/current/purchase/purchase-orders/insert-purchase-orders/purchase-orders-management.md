---
title: Unos narudžbi dobavljača - fiksna sekcija
sidebar_position: 1
---

Ovaj obrazac otvara se putem:    
-  putanje **Nabava > Narudžba od dobavljača > Kreiraj narudžbu od dobavljača**  
ili putem  
-  gumba **Novo** koji se nalazi u formi [Pretraživanje narudžbe od dobavljača](/docs/purchase/purchase-orders/insert-purchase-orders/search-purchase-orders).
 
## **1. Dati obbligatori**

Da biste kreirali narudžbu, korisnik mora unijeti obavezna polja:

**Vrsta narudžbe**: predefinirana u *Konfiguracija > Tablice > Nabava > Vrste narudžbi od dobavljača*.  
Ovo polje određuje raspon numeriranja dokumenta koji se unosi i automatski predlaže broj narudžbe od dobavljača na temelju datuma unosa i posljednjeg unesenog broja. Osim toga, ako je u *Vrsti narudžbe* postavljena zastava [Autoizvršenje](/docs/configurations/tables/purchase/purchase-orders-type) datum potvrde narudžbe će biti predložen kao jednak datumu unosa narudžbe;  
**Godina**: automatski se unosi trenutna godina, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;    
**Broj**: automatski se predlaže prema vrsti, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;  
**Datum unosa**: automatski se predlaže trenutni datum, ali se može ručno mijenjati uvijek poštujući pravilo progresije između datuma i broja;  
**Dobavljač**: korištenjem [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili[izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

## **2. Zaglavlje**

Nakon odabira obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) pomoću  [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava određena polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

### 2.1 Dati fornitore

Unosom **Dobavljača** automatski se *predlažu* svi specifični podaci s kartice **Zaglavlje**, prema podacima postavljenim prethodno u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski okvir važenja](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.2 Drugi opcionalni podaci

**Status narudžbe**: kada se kreira, nema aktivnih zastava, ali se kasnije može promijeniti u:    
> **Printano**: kada se isprinta konačno;    
> **Autorizirano**: kada korisnik odobri, nema utjecaja na poslovne procese, ali se vrednuje u Mobilnoj Aplikaciji;    
> **Povijesno**: kada korisnik pohrani dokument;  
> **Opozvano**: kada korisnik želi otkazati dokument umjesto brisanja, automatski se postavlja status evidentirano na svim njegovim redovima.

:::NAPOMENE
Zastave se mogu ukloniti postupkom poništenja operacije.
:::

**Bilješke dobavljača**: ovo polje preuzima se iz kartice dobavljača, ali se može i ručno unijeti. Desnim klikom miša može se otvoriti forma za unos duljih bilješki; ako polje sadrži vrijednost, mijenja se boja pozadine polja.    
**Naša/Vaša referenca**: u ovim poljima obično se navodi unutarnja referenca i referenca dobavljača za dokument.  
Ako se narudžba dovršava postupkom *Isporuke iz narudžbenice*, prikazuje se informacija iz odgovarajućeg polja narudžbenice. Ovaj prijenos vrijedi samo za narudžbu dobavljača stvorenu preuzimanjem podataka iz jednog izvornog dokumenta.

**Početna bilješka**: Moguće je odabrati bilješke koje su prethodno unesene u odgovarajuću tablicu, dostupnu putem putanja *Konfiguracije > Alati > Upravljanje kodiranim bilješkama*. Da biste to učinili, korisnik može dvaput kliknuti na polje **Početna bilješka** kako bi otvorio *pomoć vezanu uz kodirane bilješke* i odabrao podatke. Alternativno, desnim klikom miša moguće je otvoriti prozor radi specificiranja vrlo dugog teksta bilješke. Ako polje sadrži vrijednost, boja pozadine polja mijenja se.

U slučaju stvaranja narudžbenice pomoću postupka *Dobiti iz naloga za posao*, informacije prisutne u nalogu ponovno će biti prikazane.

**Operater**: Omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici*, koja se nalazi na putanji *Početna stranica > Zaposlenici*. Podatak postaje **obavezan** ako je opcija postavljena u samim Postavkama dokumenta.

**Projekt:** korištenjem [pomoći uz polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom. Ovo udruživanje funkcionira samo na razini zaglavlja stavke. Projekt se automatski unosi ako narudžbenica nastaje kao rezultat dokumenta koji ga sadržava (npr. planirane narudžbe za kupnju).    
**Nalog proizvodnje**: mora biti postojeći broj radnog naloga za određenu godinu. Ako narudžbenica nastaje izdavanjem planiranih narudžbi za kupnju, radni nalog automatski dobiva broj.  
**Status izvršenja**: kada se narudžbenica izvrši putem DDT-a ili fakture, njezino stanje isporuke automatski se mijenja iz neizvršenog u djelomično izvršeno ili izvršeno. Korisnik može prisiliti izvršenje narudžbenice koja nije u potpunosti izvršena, a kada se to dogodi, datum izvršenja također se sprema.    
**Status dokumenta**: unosi ga korisnik i upravlja se u određenim vertikalizacijama (distribucijski lanci ili povezane tvrtke) kako bi se replicirali dokumenti između maloprodajnih mjesta i centralnog sustava te obrnuto.

**Prodajna mjesta**: upravlja se samo vertikalizacijom koja se odnosi na distribucijske lance. U slučaju narudžbenice dobivene prijenosom robe između maloprodajnih mjesta istog lanca, prikazuje se maloprodajno mjesto porijekla robe.

#### Posebni gumbi

> **Dobit iz naloga za posao**: poziva postupak za stvaranje narudžbenice iz radnog naloga. Aktivira se unosom dobavljača i vrste narudžbenice.   
> **Zamijeni datume predviđene isporuke u redovima**: nakon što su određeni datumi zahtjeva za isporukom i/ili predviđene isporuke u zaglavlju narudžbenice, moguće je masovno zamijeniti te datume u već unesenim redovima stavki.
 
### 2.3 Plaćanja

**Rješenja plaćanja** automatski su preuzeta iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je s **Vrstom plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u datumima dospijeća dokumenta, a ne u ukupnom iznosu DDT-a.

Ako dokument potječe iz narudžbenice, vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz šifarnika dobavljača ili se mogu vidjeti u formi dokumenata za obradu, a korisnik odabire željeni tip plaćanja.

#### Posebno dugme

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.


### 2.4 Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnik klijenta > kartica Popusti* i ne oni koji su dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta ponovno se prikazuju u svakom novom unosu stavke u dokument.

Ako se nakon unosa stavki u dokument unese novi popust u zaglavlju, to se ne replicira u već unesenim stavkama dokumenta.

#### Posebno dugme

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.6 Odredište

Ovdje se predstavljaju informacije unesene u *Šifarnik dobavljača > kartica Isporuke*, samo ako postoje zadane informacije. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike unesene u šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontaktima.


### 2.7 Dodatni podaci

Ovdje se predstavljaju informacije unesene u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadane informacije.

### 2.8 Izuzimanje radnog naloga za nabavu 

Postupak izuzimanje radnog naloga za nabavu  omogućava djelomično ili potpuno izvršavanje narudžbenice za kupovinu. Ponuđene su sve narudžbenice koje još nisu izvršene, koje nisu prisilno izvršene ili koje su djelomično izvršene.

U zaglavlju dokumenta, pritiskom na gumb **Izuzimanje radnog naloga** otvorit će se obrazac gdje je moguće filtrirati narudžbenice povezane s dobavljačem dokumenta.

Moguće je zatim dodati stavke unutar narudžbenice, izvršavajući je potpuno ili djelomično, bilo za cijelu narudžbenicu ili pojedinačnu stavku.

#### Posebni gumbi*

> **Pretraživanje**: omogućuje pretraživanje narudžbenica za kupovinu;   
> **Prijenos**: omogućuje prijenos odabranih stavki/narudžbenica;   
> **Proširi**: omogućuje proširivanje cijelog stabla narudžbenica u donjoj mreži kako bi se prikazale stavke koje sadrže;     
> **Sažmi**: omogućuje sažimanje cijelog stabla narudžbenica;  
> **Označi sve**: omogućuje odabir svih stavki iz popisa;  
> **Odznači sve**: omogućuje poništavanje odabira svih stavki iz popisa.   

*Postupak*:  

Za dobavljača i sve druge filtre unesene u odjeljku Filter (**1**), u mreži će se prikazati redak za svaku narudžbu koja je ispisana, potvrđena, a još nije izvršena, ili je djelomično izvršena.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbenici i kao rezultat toga primjenjuju se uvjeti kupnje prisutni u narudžbenici, čak i ako su se od tada promijenili.
::: 

![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image08.png)

Koristite gumbe (**2**) za proširenje ![](/img/neutral/common/minus.png) / stvaranje ![](/img/neutral/common/plus.png) željenih narudžbenica.

Koristite oznake (**3**) za odabir ![](/img/neutral/common/check.png) / poništavanje odabira ![](/img/it-it/purchase/purchase-orders/insert-purchase-orders/header-procedures/image12.png) pojedinačne stavke ili cijele narudžbenice.

## 3. Artikli

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Za pojedinosti o zajedničkom funkcioniranju obrazaca pogledajte sljedeći link [Značajke, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose **ručno**, uz **pomoć polja** za pomoć ili ih mogu predložiti povezane procedure.

## **3. Artikli**

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste popunili različite **Novo** u traci s vrpcom.


### 3.1 Obavezni podaci

**Broj linije**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova klasa, kod i vrsta retka - Kodirani artikl unose se automatski.
:::

> **Artikl sa klasom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu.    
> **Artikl Ne-kodiran**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.    
> **Trošak**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od interesa za poreze, bit će pomican u skladištu, ako nije kodiran ili nije od interesa za poreze, neće se pomicati u skladištu.    
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.    

**Klasa/Kod/Opis artikla**: mogu se unijeti **ručno** ili uz **pomoć polja** za pomoć koje će predložiti sve povezane informacije unesene u Šifarnik artikla.

Nakon unosa artikla, njegov će opis automatski biti preuzet iz evidencije. Ako artikl ima *Varijacije*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere.

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika. 

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz *posljednje nabavne cijene* unesene u šifarnik artikla, ako u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) nije postavljeno da se *Trošak postavlja na nulu u odsutnosti cjenika*.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.


#### Nije obavezno unijeti sljedeće podatke

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici 'Generalno' u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak. Međutim, prilikom evidentiranja računa, uzet će se u obzir vrijednost unesena u polju 'Trošak/Primitak prema zadanim postavkama' u šifarnik kontakta.

**Alternativna mjerna jedinica**: predložena je mjerna jedinica koja se nalazi u kartici Alternativne mjernih jedinica u šifarnik artikla s postavljenom opcijom 'Zadano'. Prijedlog će se pojaviti samo ako je u [Postavkama narudžbenica dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters) aktivirana opcija 'Upravljanje dvostrukim mjerama'.

**Alternativna mjerna jedinica**: ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjernih jedinica u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama i Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem upraviteljske količine (koja se odnosi na glavnu jedinicu mjere) s faktorom pretvorbe postavljenim u kartici Alternativne mjernih jedinica u šifarnik artikla.

**Zahtijevani datum dostave**: datum koji označava željeni datum isporuke za artikla;

**Skladište i Predložak**: predloženi su podaci o skladištu i uzroku koji će se automatski pojaviti prilikom utovara povezanih artikla u skladištu. Podaci se preuzimaju iz [Tipova narudžbenica](/docs/configurations/tables/purchase/purchase-orders-type).

**Težine**: prikazuju se Ukupne neto i Ukupne bruto težine redova artikla. Težine su dobivene množenjem težina iz šifarnika artikla s količinom reda.

**Godina/Broj/Opis narudžbenice za proizvodnju**: ako je narudžbenica dobavljača stvorena iz proizvodnog plana, prikazat će se referentna narudžbenica za proizvodnju (vidi *Automatsko stvaranje narudžbenice*).  

#### Specifični gumbi

> **Podijeli količinu u više datuma dostave**: koristi se za podjelu reda narudžbenice u više redova prema traženom datumu isporuke. Ovaj postupak otvorit će novi obrazac u kojem ćete morati unijeti novi datum isporuke i predviđenu količinu za taj datum.    
> **Pakiranje**: omogućuje definiranje pakiranja za artikl.  


### 3.3 Popusti/Cjenici  

**Vrijednosti kataloga**: nudi se katalog iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u katalogu;

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.         
**Cjenik koji će biti ažuriran**: ako je ova zastava aktivna, odgovarajući katalog kupnje automatski se ažurira informacijama o artiklu prilikom spremanja.

#### Poseban gumb*

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

### 3.4 Podaci o artiklu  

Unutar ovog kartice navode/se unose dodatne informacije o artiklu.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i pomoću odgovarajuće pomoći za projekte.

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i njegovu varijantu;

**Zahtjev za kupnju**: ako je narudžbenica stvorena iz zahtjeva, prikazat će se referentni zahtjev;

**Napomene**: napomene vezane uz redak artikla, mogu se unijeti i pomoću pomoći za bilješke. Bit će navedene u svim dokumentima generiranim iz ovog.

**Marka**: predstavlja marku artikla, preuzetu iz njegovog šifarnika ili iz kataloga artikla.
 
#### Varijante

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikla ili se mogu unijeti ručno.
Prilika je za upravljanje varijantama artikla na različit način od onoga što je ponuđeno na retku artikla.
Primjerice, na svakom retku artikla moguće je unijeti ukupnu količinu; zatim, u istoj kartici, mogu se odrediti različite količine za više varijanti odabranog artikla, čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom.
Ova operacija je moguća samo ako su sve varijante artikla jednake cijene kao i standardna konfiguracija artikla. 


#### Poseban gumb

> **Otkaži**: omogućuje brisanje odabranog retka varijante.

### 3.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje su raspodijeljene vrijednosti artikla.

Ovi podaci se mogu unositi ručno ili automatski (u slučaju da su troškovni/profitni centri prethodno uneseni u šifarnik subjekta, šifarnik artikla ili u plan konta).


### 3.6 Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost, putem odgovarajuće oznake, odabira koje dodatne podatke isprintati.


### 3.7 Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumenti u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaša referenca). Upute o tome kako priložiti dokument potražite u artiklu *Priloži dokumente*.


### 3.8 Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla* Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica**: Iznos bez popusta - Popusti;

**Porez**: Osnovica * stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim sekcijama ovog taba prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi.

### 4.1 Konačni rabati

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Uneseni popusti u ovoj sekciji izračunavaju se i prikazuju za svaki artikl u dokumentu, u kartici *Artikli > kartici Popusti/Cjenici*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definirane u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući ima li se popust računati na osnovicu ili kaskadno u odnosu na prethodno primijenjene popuste. 

**Prioritet**: predstavlja prioritet primjene popusta; redoslijed primjene je uzlazan. 

**Kaskada/Iznos**: za definiranje koristi li se osnovica za izračun popusta (cijena x količina) - (već izračunati popusti) ili (cijena x količina). 

**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.


### 4.2 Troškovi 

Prikazani su troškovi uneseni u šifarnik kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definirane u Vrstama troškova), dodjeljujući svakoj vrsti postotak troška za primjenu.   
**Postotak/Vrijednost**: polje koje označava hoće li se troškovi izračunavati postotkom ili unaprijed određenim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troška.


### 4.3 Sažetak PDV-a

Prikazuje se PDV rezime dokumenta za svaki PDV kod.

### 4.4 Druga polja

**Završne napomene**: Ovo je opisno polje koje korisnik može popuniti i uz pomoć *pomoći kodiranih napomena*.

### 4.6 Svi iznosi dokumenta 

**Iznos stavki bez popusta**: Predstavlja zbir vrijednosti svih artikla.  
**Zaduženje**: Predstavlja iznos eventualne uplate na račun dokumenta.    
**Poklonjeni iznos**: Predstavlja iznos poklon artikla unesenih u kartici *Artikli*.  
**Ukupni primjenjeni rabati**: Predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta.  
**Neto iznos artikala**: Bruto iznos artikla – Ukupni primijenjeni popusti.  
**Ukupno konačnih rabata**: Predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos artikla.  
**Neto iznos konačnih rabata**: *Neto iznos artikla - Ukupni konačni popusti*.  
**Neregistrirani troškovi**: Predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Tipa troškovi*.  
**Troškovi naplate**: Predstavlja zbroj unesenih troškova naplate u mreži *Troškovi*.  
**Trošak ovjere**: Predstavlja zbroj unesenih troškova marke u mreži Troškovi.  
**Trošak dokumentacije**: Predstavlja vrijednost troškova unesenih u mreži *Troškovi*.  
**Osnovica**: *Neto iznos artikla – Završni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*.  
**Porez**: Predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a.  
**Ukupno**: *Osnovica + PDV*.  