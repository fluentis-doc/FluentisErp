---
title: Stvaranje otpremnice – gornji dio
sidebar_position: 1
---

Obrazac za **Stvaranje otpremnice** otvara se putem navigacije **Prodaja > Otpremnice > Stvori otpremnicu**ili putem gumba ![](/img/neutral/common/new.png) koji se nalazi u obrascu [Pretraži otpremnice](/docs/sales/sales-delivery-notes/search-sales-dn).

U obrascu za unos automatski se nude trenutni **Datum** i **Godina**, ali ih korisnik može promijeniti.

Za nastavak stvaranja otpremnice, korisnik mora unijeti  **obavezna** polja:

- **Tip otpremnice** predefiniran u *Konfiguracija > Tablice > Prodaja > [Tipovi otpremnice](/docs/configurations/tables/sales/delivery-notes-type)*

- **Broj** svakom dokumentu dodijeljen je broj prema numeraciji specificiranoj od strane korisnika u tablici [Numeracija otpremnica](/docs/configurations/tables/fluentis-numerations) i za tip dokumenta koji sadrži numeraciju. Također se pogledajte članak  [Parametri otpremnice](/docs/configurations/parameters/sales/dn-parameters) za specifične parametre za dobivanje brojeva.

- **Klijent**, korištenjem [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka ili korištenjem automatskog postupka, ako se odlučite kreirati dokumente putem [Izvršenja otpremnice iz narudžbenice klijenta](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn-procedures/execution-from-order).

Obrazac sadrži niz kartica.

---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka:

- [ručni unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)
- automatski unos: Na temelju odabrane procedure, aplikacija može **automatski** popuniti određena polja.

:::note NAPOMENA
Ako se dokument stvara *automatski*, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Klijenta** automatski se *nude* svi specifični podaci u **Zaglavlju**, prema prethodno postavljenim podacima u [Šifarnik klijenta](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima za adresu i u sljedećim *sekcijama*: 

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/common/glossary/glossary-intro#validity-date)
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati: [Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

*Ostala opcionalna polja*:

**Stanje računa**: prilikom stvaranja, račun nema aktivnih oznaka.
Ova sekcija uključuje sljedeća polja:  
> **Ispisano** aktivira se kada se račun ispisa, označava da je račun isprintan.    
> **Knjiženo**: automatski se označava kada se račun knjiži.  
> **Otkazano**: aktivna oznaka omogućuje storno računa.   
> **Otpremljeno**: označava da je račun otpremljen iz skladišta, ručno ili *automatski* putem postupka *automatskog otpreme*.  


:::note NAPOMENA
Oznake se mogu ukloniti postupkom **Povrati** operacije
:::

**Bilješke kupaca**: nudi se informacija unesena u karticu klijenta, dok u slučaju automatskog stvaranja iz narudžbenice/otpremnice bit će preuzeti isti podaci iz odgovarajućeg polja izvornog dokumenta.

Moguće je i ručno unijeti podatke. Desnim klikom miša moguće je otvoriti formu kako bi se specificirao dugi tekst bilješke; ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Naša referenca/vaša referenca**: u ovim se poljima obično navodi interna referenca i referenca klijenta za određeni račun.  
U slučaju kada se račun generira putem:  
> *Stvaranje iz narudžbenice kupca*, ova polja bit će popunjena informacijama koje su navedene u narudžbenici kupca. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne narudžbenice;  
> *Izvršenje otpremnice*, ova polja bit će popunjena informacijama koje su navedene u otpremnici. Ovaj prijenos vrijedi samo za račun stvoren uzimanjem podataka iz jedne otpremnice.

**Početna bilješka**: mogu se odabrati napomene koje su prethodno unesene u tablicu istog imena koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje šifriranim napomenama* Korisnik mora dvaput kliknuti na polje **Početna bilješka** kako bi otvorio pomoć *šifriranim napomenama* i odabrao podatke ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

U slučaju *Izvršenja putem narudžbenice*, informacije koje su bile navedene u narudžbenici kupca bit će automatski ponovno prikazane u polju **Početna bilješka**.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su uneseni unaprijed u tablicu *Zaposlenici* koja se nalazi u putanji *Početna stranica > Zaposlenici*. Podatak postaje **obvezan** ako je opcija postavljena u parametrima samog dokumenta.

**Projekt**: koristeći [pomoć u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo povezivanje funkcionira samo na razini zaglavlja artikla.

**Status dokumenta**: ovaj podatak odnosi se na tablicu *Stanja dokumenta* i mora ga unijeti korisnik. Može se koristiti za postupke replikacije poslovanja, instalirane za upravljanje poslovnicom s prodajnim mjestima.

**EDI**: predstavlja datum prijenosa dokumenta iz EDI postupaka.

**Primjeni iz**: je datum početka za izračun datuma dospijeća plaćanja.

*Posebni gumbi*

> **Obrada iz narudžbenice kupca**: pokreće postupak za stvaranje računa iz narudžbenice kupca. Aktivira se kada su uneseni klijent i tip računa.  
> **Obrada iz otpremnice**: pokreće postupak za stvaranje računa iz otpremnice. Aktivira se kada su uneseni klijent i tip računa.  
> **Automatsk preuzimanje**: ovaj postupak omogućuje istovar zaliha dokumenta ako je označeno kao Ispisano.  
> **Pomoć za primatelja/odredište**: omogućuje pregled i unos primatelja/odredišta iz evidencije klijenata.  
> **Umetni agenta u linijama**: dodjeljuje Predstavnika unesenog u zaglavlje u retke stavki, u kartici Predstavnici.  
> **Umetni CIG/CUP u linijama**: Dodjeljuje unesene kodove u zaglavlje u retke stavki, u odgovarajući padajući izbornik.  
> **Otkaži plaćanja**: Briše plaćanja iz zaglavlja.  
> **Registar Sdi dokumenata**: Otvora SDI dokument koji se odnosi na račun, nakon Kontrolirano.


### Plaćanja

**Uvijeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice.

Ako dokument potječe iz:

- Narudžba kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbenica), iz klijentovih podataka ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, a korisnik odabire željeni način plaćanja.  

- Plaćanja mogu biti preuzeta iz klijentove kartice ili iz pojedinačnih plaćanja prisutnih u svakoj otpremnici. U ovom slučaju, u računu će se prikazati vrsta plaćanja s istim iznosom i PDV-om kao i u otpremnici, te će se dodati nova linija za bilo kakve stavke koje nisu proizašle iz otpremnice.

## Popusti

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.
  
Popusti ponuđeni u zaglavlju dokumenta pojavit će se u svakom novom retku stavke u dokumentu.

Nakon što se unesu nove stavke, u zaglavlje se unese novi popust, on neće biti primijenjen na već unesene stavke.

*Posebni gumb*  
> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

## Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj anagrafici, Predstavnik ipak mora biti unesen, ali s provizijom NULL, jer da je s provizijom 0, to bi značilo da je Predstavnik povezan s Predstavnikom, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

## Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

h1 ---
title: Stvaranje otpremnice iz packing list
sidebar_position: 3
---

Omogućuje preuzimanje stavki iz popisa pakiranja. Nakon ovog postupka, popis pakiranja će imati status *Ispražnjen*. 

*Posebni gumbi:*

> **Traži slaganje**: gumb za pretraživanje popisa pakiranja.  
> **Označi sve**: gumb za odabir svih stavki iz popisa pakiranja.  
> **Prebaci artikle**: gumb za prijenos odabranih stavki iz popisa pakiranja.

h2 ---
title: Stvaranje otprmenice iz odabira
sidebar_position: 2
---

Proces omogućuje preuzimanje stavki iz odabira (Skladište/Odabir) u otpremnicu. Nakon ovog postupka, odabir će imati status **Isporučeno**.


*Posebni gumbi*:

> **Traži slaganje**: gumb za pretraživanje odabira.   
> **Označi sve**: gumb za odabir svih stavki iz odabira.  
> **Prebaci artikle**: gumb za prijenos odabranih stavki iz odabira.  

h3---
title: Izuzimanje iz narudžbe
sidebar_position: 1
---

Na zaglavlju otpremnice, pritiskom na gumb **Izuzimanje iz narudžbe** otvorit će se obrazac gdje je moguće filtrirati narudžbe koje se odnose na klijenta dokumenta.

Kroz ovaj postupak moguće je stvoriti prodajnu otpremnicu izvršavanjem odgovarajuće narudžbe kupca. Moguće je unijeti stavke u otpremnicu, potpuno ili djelomično izvršavajući cijelu narudžbu ili jednu stavku.

Da bi se koristio ovaj postupak, postoje početni uvjeti koji se moraju poštivati:

 -  klijent narudžbi mora biti isti kao i u otpremnici;
 -  narudžba koju želite izvršiti mora imati postavljen znak *Isprintano* i *Datum potvrde narudžbe*;
 -  vrste dokumenata moraju biti kompatibilne: u tablici *Vrste narudžbi* vrsta narudžbe koju želite izvršiti mora imati postavljenu odgovarajuću vrstu otpremnice, dok u tablici *Vrste otpremnica* mora biti prisutan znak za *Narudžbu* (koji označava da otpremnica potječe iz narudžbe).

:::note NAPOMENA  
Trenutno se narudžbe koje sadrže grupirane stavke ne mogu izvršiti ovim postupkom; stoga ih neće biti moguće pronaći u obrascu za izvršavanje narudžbi.
:::

Zatim će biti potrebno postaviti željenu *Vrstu otpremnice* (koja mora odgovarati onoj postavljenoj u tablici *Vrste narudžbi*) i *Klijenta* u zaglavlju nove otpremnice. Nakon unosa ovih podataka, trebat će kliknuti na gumb *Izvršavanje narudžbi* kako bi se otvorio obrazac za izvršavanje.

*Postupak*:

Filteri za klijenta i valutu bit će automatski postavljeni prema odabranom klijentu u otpremnici.

Nakon postavljanja svih željenih *Filtara* klikom na gumb *Traži* bit će prikazan redak za svaku isprintanu, potvrđenu i neizvršenu ili djelomično izvršenu narudžbu u rešetki.

:::note NAPOMENA
Postupak uzima sve podatke iz narudžbe i kao rezultat toga primjenjivat će se uvjeti kupnje iz narudžbe, čak i ako su se ti uvjeti promijenili.  
:::

U prikazu rezultata, korisnik ima mogućnost:  

 1. odabrati *cijelu narudžbu*. Za to će biti dovoljno označiti znak na početku reda narudžbe.  
 2. odabrati samo *neke* od ponuđenih *stavki*. Za to će biti dovoljno označiti znak na početku retka stavke.  
 3. odabrati samo *neke stavke* za *određenu količinu*. U tom slučaju, količinu koja se treba izvršiti trebat će promijeniti.

Kako bi se postupak dovršio, bit će potrebno kliknuti na gumb *Prijenos*, koji će preuzeti sve podatke iz narudžbe i prenijeti ih u otpremnicu.

*Posebni gumbi*:

> **Traži** omogućuje pretraživanje dobavljačkih narudžbi.   
> **Prijenos** omogućuje prenošenje podataka odabrane narudžbe u novu otpremnicu.    
> **Prisilno izvršenje narudžbe** omogućuje prisilno izvršavanje narudžbe. 
> **Izvršenje iz narudžbi** omogućuje izvršavanje narudžbe.   
> **Proširi** omogućuje proširenje cijelog stabla narudžbi u donjoj rešetki kako bi se prikazale sadržane stavke.  
> **Sažmi** omogućuje smanjenje prikaza redaka stavki i prikaz samo redaka narudžbe.  
> **Odaberi sve** omogućuje odabir svih stavki s popisa.  
> **Odznači sve** omogućuje poništenje odabira svih stavki s popisa.  

---
title: Artikli
sidebar_position: 3
---

## Artikli

U ovoj se kartici unose svi artikli s pripadajućim podacima.

Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom radu obrazaca, obratite se na sljedeći link [ Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se mogu unositi [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

## Artikli

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste ispunili različite podatke ili koristiti gumb **Novo** koji se nalazi na gornjem izborniku.

### Obvezni podaci

**Broj linije**: ovo će se polje automatski popuniti progresivno prilikom unosa podataka u red.

**Tip linije** pruža mogućnost odabira artikala s različitim karakteristikama. 

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  

**Klasa/Kod/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će ponuditi sve relativne podatke unesene u šifarnik artikla.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijante*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: ponuđena je glavna M.J. artikla, ali korisnik može odabrati drugu mjernu jedinicu.

**Varijante**: ako odabrani artikl ima varijante, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od standardne postavljene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne U.M. i po zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za isporuku (npr. iz narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prvenstveno koristi PDV unesen u polje PDV u *Šifarnik kontakata*. Ako to nije dostupno, koristi se vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa druge vrijednosti. Ovo polje je obavezno.

### Neobvezni podaci

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Šifarnik klijenta > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem količine za upravljanje (vezane uz glavnu JM) s faktorom konverzije postavljenim u Šifarnik artikala > kartica Alternativne jedinice mjere.

**Skladište i predložak**: predlažu se skladište i referentni razlog koji će se automatski pojaviti prilikom pražnjenja povezanih članaka iz skladišta. Podaci se preuzimaju iz Tipova otpremnica ili se unose ručno.

**Težine**: prikazane su neto i bruto težine svih stavki. Težine artikala iz ankete pomnožene su s količinom stavke.

*Posebni gumbi*
> **Upravljanje pakiranjem**: otvara upravljanje pakiranjem koje će se koristiti u dokumentu kupnje.
Gumb postaje aktivan ako je dokument spremljen, ali nije učitan.
Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete: unesite količinu, odaberite redak i izvršite prijenos odabranog pakiranja na retke artikla klikom na gumb **Izvrši**. U ovom obrascu prikazani su artikli koji su uneseni kao pakiranje i koji su prisutni u tablici **Pakiranja**.

> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen novi cjenik).
Klikom na padajući izbornik pored gumba , moći ćete stvoriti novi cjenik ako ga još nema.

## Popusti/Cjenici

**Popusti**: ponuđeni su svi popusti povezani s artiklom, svaki s vlastitim izračunom i dodjelom. Popusti se mogu preuzeti: iz podataka o kupcu, iz rješenja plaćanja dodijeljenih dokumentu, iz cjenika iz asocijacije cjenika-kupac. Svi predloženi podaci mogu se mijenjati.

**Vrijednosti cjenika**: ponuđen je cjenik iz kojeg je artikl preuzet, s datumom početka/završetka važenja i s posebnim uvjetima prodaje (npr. razrede popusta) dodijeljenim artiklu u cjeniku.

*Posebni gumb*

> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem izborniku.

## Podaci

Na ovoj kartici se unose dodatne informacije o artiklu.

**Artikl**: prikazuje opis artikla i, po potrebi, varijantu artikla;

**Projekt**: projekt povezan s dokumentom ili dodijeljen korištenjem pomoći;

**Referenca naloga**: odnosi se na narudžbu iz koje je stvoren dokument otpremnice;

**Marka**: predstavlja marku artikla, preuzetu iz njegove evidencije ili listina artikala;

**Bilješke**: omogućuju unos bilješki za svaki artikl.

**Pravo naplate PDV-a**: ako je postavljeno, PDV za poklon se uzima u obzir za ukupni dokument.

## Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan s odgovarajućim postotkom za odabrani artikl; podatak odgovara onome što je navedeno u Zaglavlju > kartica Predstavnici. Postotak se može promijeniti.

*Posebni gumb*
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog Predstavnikas odabranim artiklom.


### Varijante

Prikazuju se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikala ili se mogu unijeti ručno. Omogućuju upravljanje varijantama artikla na drugačiji način od onoga što je predloženo na retku artikla.   
Na primjer, u svakom retku artikla možete unijeti ukupnu količinu; nakon toga, u istoj kartici, možete definirati različite količine za više varijanti odabranog artikla, uključujući i varijacije u veličini/boji.  
Ova operacija je moguća samo ako sve varijante artikla imaju istu cijenu kao i cijena artikla u standardnoj konfiguraciji.

*Posebni gumb*
> **Obriši**: omogućuje brisanje odabrane varijante.


## Lotovi i serijski brojevi

U dvije tablice mogu se unijeti serije i serijski brojevi koji se moraju skinuti iz skladišta i koji su povezani s artiklom u *Šifarnik artikla > kartica [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili se mogu unijeti ručno.

Ova operacija ovisi o prisutnosti serija i serijskih brojeva u skladištu.

Ako artikl ne zahtijeva upravljanje lokotima/serijskim brojevima, ovaj će se tab onemogućiti.

*Posebni gumbi*
> **Izbriši lot**: omogućuje brisanje odabranog lota.  
> **Izbriši serijski broj**: omogućuje brisanje odabranog serijskog broja.

## Analitika

Može sadržavati informacije o troškovima/profitu na koje su raspoređene vrijednosti artikala.   
Ovi podaci mogu se unijeti ručno ili automatski (ako su centri troškova/profita prethodno uneseni u Šifarnik kontakata, Šifarnik artikala ili plan konta).

## Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost odabira koje dodatne podatke želite ispisati putem odgovarajuće oznake.


## Dokumenti u privitku

Prikazuje pojedinosti o eventualnom **Priloženom dokumentu** (ime, vrsta dokumenta, eventualne bilješke, referenca na narudžbu/prodaju). Za upute o tome kako priložiti dokument, pogledajte članak **Priloži dokumente**.

## Vrijednost odjeljka

Donji desni dio prikazuje sažetak troškova koji sudjeluju u formiranju konačne cijene odabranog artikla u tablici artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla * Količina artikla;

**Ukupno rabati**: zbroj popusta za artikl, uključujući i konačne popuste;

**Porezna osnovica**: Bruto iznos - Popusti;

**Porez**: Poreska osnovica * stopa PDV-a za artikl;

**Ukupno**: Poreska osnovica + Porez.

---
title: Sažeci
sidebar_position: 5
---

U Sažecima su prikazane osnovne informacije cijelog dokumenta.

## Konačni rabati

Mogu se unijeti samo popusti izraženi u postocima, primijenjeni na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, na *kartici Artikli > kartici Popusti/Cjenici*.

**Tip/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definiranih u **Vrstama popusta**), dodjeljujući prioritet vrsti i određujući da li se popust primjenjuje na osnovicu ili se kumulativno primjenjuje na prethodno primijenjene popuste.  
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed primjene je uzlazan.  
**Kaskada/Iznos**: za određivanje korištenja osnovice u izračunu popusta (cijena x količina) - (već izračunati popusti) ili (cijena x količina).  
**Vrijednost**: numerička vrijednost konačnog popusta koji se primjenjuje.  

## Troškovi

Ponuđeni su troškovi uneseni u registar kontakata, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Tip/Opis**: omogućuje odabir vrsta troškova (unaprijed definiranih u *Vrstama troškova*), dodjeljujući postotak troškova vrsti.  
**Postotak/Vrijednost**: polje koje određuje da li se troškovi izračunavaju postotkom ili predefiniranom novčanom vrijednošću.  
**Postotak**: numerička vrijednost postotka troška.


## Sažeci PDV-a

Prikazuje se sažetak PDV dokumenta, za svaki PDV kod.

## Pregled dospjeća plaćanja

Prikazuje se sažetak rokova dospijeća dokumenta, za svaki tip i način plaćanja.

**Broj**: progresivna vrijednost reda.  

**Plaćanje**: predstavlja alfanumerički kod tipa plaćanja preuzet iz *Zaglavlja dokumenta > kartice Plaćanja*.

**Iznos**: Izračunati iznos dospijeća. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća opcija Ručno uređivanje. (Automatski se provjerava i upozorava na kvadraturu između iznosa dospijeća i ukupnog iznosa računa).

**Datum dospijeća**: Datum izračunatog dospijeća. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća opcija Ručna izmjena.

**Troškovi naplate**: Polje u kojem se upisuju troškovi inkasa.

**PDV**: Primjenjuje se na troškove inkasa (također se može ručno postaviti)

**Predložak plaćanja**: Možete direktno unijeti u račun računovodstveni uzrok koji stvara automatski zapis o naplati/plaćanju. NB obratite pažnju na predložak uzroka, jer će koristiti račune koji su prisutni i bez podračuna, zbog čega postoji i sljedeće polje.

**Račun podračuna kupca/dobavljača**: Račun koji se koristi za inkaso/plaćanje (kao što su gotovina ili banka) dospijeća, zamjenjujući račun prisutan u računovodstvenom uzroku plaćanja (ili inkasa)
Primka broj: Eventualni broj primitka za primljene novce
Jed.: Aktivira knjiženje zatvaranja dospijeća u automatskom zapisu

**Vrsta popusta**: Vrsta financijskog popusta

**Vrijednost popusta**: Vrijednost financijskog popusta na naplatu

**Detalj izjava**: Referenca na izjavu o namjeri. PDV primijenjen na troškove inkasa može uvijek biti PDV prema omjeru, pa je stoga potrebno omogućiti unos povezane izjave o namjeri (kao što je slučaj s redovima artikala i troškovima)

**ULAZNI RAČUNI**:

**Znak**: samo dospijeća koja imaju ovu oznaku bit će zatvorena plaćanjem s postavljenim uzrokom i računom

**Modeli referentnih plaćanja**: Model kreiranja koda plaćanja. U nekim stranim lokalizacijama, svako dospijeće u računu ima kod dodijeljen od strane fakturanta: ovaj kod je strukturiran prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), tako da se kod može konstruirati prema određenim modelima.

**Kodovi modela plaćanja**: Ovo je kod (strukturiran kao prethodni model) koji se unosi u stavku, a zatim u plaćanja koja se šalju banci, kako bi ona obavijestila primatelja o tome koje dospijeće je plaćeno (i tako automatiziralo uvoz bankovnih transakcija s zatvaranjem stavke). Iz ovdje se popunjava stavka i datoteka Sepa.

**Datum roka plaćanja unaprijed**: Ovo je polje koje je predviđeno u formatu računa Sdi, krajnji rok za primjenu financijskog popusta.


## Druga polja

**Volumen**: prikazuje se kumulativni volumen, rezultat zbroja volumena artikala (vrijednost se preuzima iz kartice Artikli > kartice Težine/Dimenzije), kada jedinica mjere volumena artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Neto težina**: prikazuje se kumulativna neto težina, rezultat zbroja težina artikala (vrijednost se preuzima iz *kartice Artikli > kartice Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Bruto težina**: Prikazuje se kumulativna bruto težina, rezultat zbroja težina artikala (vrijednost se preuzima iz *kartice Artikli > kartice Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenoj u parametre računa. U obzir se uzimaju samo artikli koji imaju ovu polje popunjeno;

**Broj paketa**: prikazuje se broj paketa na temelju podataka unesenih u *kartici Artikli > kartici Težine/Dimenzije*, u poljima prisutni  *Artikli u paketu* ili *Paketi za artikl*. U obzir se uzimaju samo artikli koji imaju ovo polje popunjeno.

**Završne napomene**: ovo je slobodno polje koje korisnik može ispuniti uz *pomoćno polje za šifriranje*.

## Prijevoz

Automatski se predlaže *Prijevoz napravio* u kartici kupca.

## Ukupni dokumenti

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala;

**Zaduženje**: predstavlja iznos eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos darovanih artikala unesenih u kartici *Artikli*;

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta.

**Neto iznos artikala**: *Iznos stavki bez popusta – Ukupni primjenjeni rabati*;

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos artikala;

**Neto iznos konačnih rabata**: *Neto iznos artikala - Ukupno konačnih rabata*;

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Tipa troškova*;

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Troškova*;

**Trošak ovjere**: predstavlja zbroj troškova marke unesenih u mreži *Troškova*;

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u mrežu *Troškovi*;

**Osnovica**: *Neto iznos artikala – Konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u riepilogima PDV-a;

**Ukupno**: *Osnovica + Porez*.