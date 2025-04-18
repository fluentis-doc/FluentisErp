---
title: Unos narudžbe kupca
sidebar_position: 2
---

Obrazac za **Unos narudžbe kupca** otvara se putem **Prodaja > Narudžbe kupaca > Nova narudžba** ili putem tipke ![](/img/neutral/common/new.png) koji se nalazi u obrascu [Traži narudžbu prodaje](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

U obrascu za unos automatski se nude trenutni **Datum** i **Godina**, ali ih korisnik može promijeniti. 

## **1. Dati obbligatori**

Da bi nastavili s kreiranjem narudžbe kupca, korisnik mora unijeti  **obavezna** polja:

- **Vrsta narudžbe** predefinirana u Konfiguracija > Tablice > Prodaja > [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types).

- **Broj** svakom dokumentu dodjeljuje se broj prema numeraciji koju je postavio korisnik u tablici [Numeriranje narudžbi kupaca](/docs/configurations/tables/fluentis-numerations) i vrsti dokumenta koja sadrži tu numeraciju. Također se možete pozvati na članak o [Parametri narudžbi kupaca](/docs/configurations/parameters/sales/sales-orders-parameters) (za posebne parametre povlačenja brojeva).

- **Klijent**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili[izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unošenjem podataka.

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon odabira obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [pomoći u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note NAPOMENA
Ako se dokument *stvara automatski*, ovi podaci preuzimaju se iz  *izvornog dokumenta* iz kojeg je generiran.
:::

### 2.1 Dati cliente

Unoseći **Klijenta**, automatski se *nude* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno postavljenim [Šifarnik kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u poljima koja odgovaraju njegovoj adresi i u  *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/common/glossary/glossary-intro#validity-date)
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati:[Odredište](/docs/guide/common/glossary/glossary-intro#destination), [Primatelj](/docs/guide/common/glossary/glossary-intro#recipient).

#### Ostala opcionalna polja

**Državna narudžbe**: Prilikom stvaranja otpremnice, nema aktivne oznake. Odjeljak uključuje polja:  
> **Ispisano**: se aktivira kada se pokrene ispis otpremnice i označava da je otpremnica isprintana.   
> **Preuzeto**: označava da je otpremnica preuzeta iz skladišta ručno ili putem postupka automatskog praćenja.   
> **Valorizirano**: automatski se odabire kada se otpremnica  [valorizira](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes) i postaje račun prodaje.   
> **Opozvano**: aktivna oznaka omogućuje poništavanje otpremnice.

:::note NAPOMENE
Oznake se mogu ukloniti postupkom ponovnog postavljanja operacije.
:::

**Bilješka kupca**: ovo polje preuzima se iz klijentovih osnovnih podataka, dok će u slučaju stvaranja iz narudžbe biti preuzeti isti podaci sadržani u polju bilješke narudžbe kupca. Može se unijeti i ručno. Desnim klikom miša možete otvoriti obrazac kako biste specificirali vrlo dug tekst bilješke; ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

**Naša referenca/Vaša referenca**: U ovim poljima obično se navodi interna referenca i referenca klijenta za dokument. Ako je narudžba generirana putem postupka automatskog stvaranja, ova će polja biti popunjena informacijama prisutnima u izvornom dokumentu. Ovaj prijenos vrijedi samo u slučaju narudžbe kupca stvorene preuzimanjem podataka iz jednog dokumenta.

**Početna bilješka**: mogu se odabrati napomene koje su prethodno unesene u tablicu istog imena koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje šifriranim bilješkama* Korisnik mora dvaput kliknuti na polje **Početna bilješka** kako bi otvorio pomoć *kodiranim napomenama* i odabrao podatke ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su uneseni unaprijed u tablicu *Zaposlenici* koja se nalazi u putanji *Početna stranica > Zaposlenici*. Podatak postaje **obvezan** ako je opcija postavljena u parametrima samog dokumenta.

**Projekt**: koristeći [pomoć u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo povezivanje funkcionira samo na razini zaglavlja artikla.

**Status izvršenja**: kada je narudžba izvršena putem otpremnice ili računa, njeno stanje izvršenja automatski se mijenja iz neizvršenog u djelomično izvršeno ili izvršeno. Korisnik može prisiliti izvršenje nepotpuno izvršene narudžbe, a kada se to dogodi, datum izvršenja također će biti spremljen.

**Broj praćenja**: u ovom polju navodi se broj za praćenje pošiljke;

**EDI**: označava datum prijenosa dokumenta iz EDI postupaka.

**Primjeni iz**: je datum početka za izračun datuma dospijeća plaćanja.

#### Posebni gumbi

> **Dobit iz naloga za posao**: poziva postupak za stvaranje narudžbe iz projekta. Aktivira se unosom dobavljača i vrste narudžbe dobavljača.   
> **Zamijeni procijenjeni datum dostave u linijama**: nakon što su određeni datumi tražene isporuke i/ili predviđene isporuke u zaglavlju narudžbe, moguće je masovno zamijeniti te datume u već unesenim redovima članaka.

### 2.3 Plaćanja

**Uvijeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice.

Ako dokument potječe iz narudžbe, vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz registra klijenta ili se mogu prikazati u obliku obrasca za obradu dokumenata, a korisnik odabire željeni način plaćanja.

#### Posebni gumb

> **Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

### 2.4 Popusti 

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Ponuđeni popusti u zaglavlju dokumenta prenose se u svaki novi redak artikla koji se unese u dokument.

Ako nakon unosa redaka artikla unesete novi popust u zaglavlju, to se neće replicirati u već unesenim redovima članaka.

#### Posebni gumb*
> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

### 2.5 Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj anagrafici, Predstavnik ipak mora biti unesen, ali s provizijom NULL, jer da je s provizijom 0, to bi značilo da je Predstavnik povezan s Predstavnikom, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

#### Posebni gumb

> **Izbriši trgovačkog predstavnike**: omogućuje brisanje odabranih predstavnika.

### 2.6 Odredište 

Ovdje se nudi informacija unesena u *Šifarnik kupca > kartica Dostave*, samo ako postoje zadani podaci. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike unesene u šifarnik klijenta.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti čak i samo opisno, bez prethodnog unosa među kontaktima.

### 2.7 Drugi podaci

Ovdje se nudi informacija unesena u *Šifarniku subjekta > kartica Drugi podaci*, samo ako postoje zadani podaci.

## **3. Artikli**

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih može predložiti povezane procedure.

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na redak kako biste ispunili različite podatke ili koristiti gumb **Novo** prisutan na gornjem izborniku.

### 3.1 Obvezni podaci

**Broj linije**: ovo polje automatski će se popuniti postupnim unosom podataka u redak.

**Vrsta linije**: pruža mogućnost odabira, iz padajućeg izbornika, artikala s različitim karakteristikama.

:::note BILJEŠKA
Ako se krene izravno s unosom artikla, njegova *klasa*, *šifra* i *vrsta retka* - *Šifrirani artikl* automatski će se unijeti.
:::

> **Artikl sa klasom**: to su artikli šifrirani u evidenciji i mogu se knjižiti u analitičkom računovodstvu te evidentirati u skladištu.  
> **Artikl bez klase**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se zasebno sažimaju u pregledima dokumenata, ako je artikl trošak kodiran i od poreznog interesa, bit će knjižen u skladištu, ako nije kodiran ili nije od poreznog interesa, neće se knjižiti u skladištu.  
> **Bilješka**: to su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječu na knjiženje ili skladište.  
> **Gratis artikl**: artikl poklon upravlja se kao kodirani ili nekodirani artikl u porezne i skladišne svrhe, ali budući da je to poklon, zasebno se broji u pregledima dokumenta i ovisno o zastupljenosti PDV-a, obračunava se iznos PDV-a poklona na teret subjekta ili ne.  

**Klasa/Šifra/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz evidencije. Ako artikl ima varijante, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: nudi se primarna jedinica mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Varijante**: ako odabrani artikl ima varijante, bit će potrebno odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom, koji mogu imati drugačiju cijenu od standardne postavljene cijene. Prema tome, cijena artikla s varijantama može biti različita od cijene artikla bez varijanti. To može eventualno zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu primarne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili može biti preuzeta iz dokumenta koji se razmatra za obradu (npr. od narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prednost ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako ovaj podatak nije prisutan, predložena je vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.

### 3.2 Neobvezni podaci

**Barkod/Artikl kupca i Opis artikla kupca**: ovi će podaci biti preuzeti iz informacija dostupnih u *Šifarnik artikala*;

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Podaci kupca > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem *količine za upravljanje* (vezane uz glavnu JM) s *faktorom konverzije* postavljenim u *Šifarnik artikala > kartica Alternativne jedinice mjere*.

**Prisilno izuzeto**: ako je aktivno, ovaj znak ukazuje da je stavka artikla prisilno isporučena: jer kupac više ne želi taj artikl, ili proizvedena i otpremljena količina je manja od naručene količine, ali saldo neće biti proizveden pa će se količina prisilno isporučiti;

**Datum gotove robe i Procijenjeni datum dostave**: ove datume označavaju datum kada će materijal biti spreman (tj. kada će proizvodnja završiti) i datum kada se predviđa isporuka materijala;

**Skladište/Opis/Razlog**: u ovim poljima potrebno je navesti skladište za istovar materijala s odgovarajućim razlogom potrebnim za isporuku robe u trenutku izdavanja otpremnice ili fakture; ovi podaci postavljaju se u tablici [Tip naloga](/docs/configurations/tables/sales/sales-order-types) ;

**Ručna cijena**: omogućuje promjenu cijene i popusta te ih zadržavanje u dokumentima koji se stvaraju iz dokumenta u kojem je izmjena napravljena.

**Težine**: ukupna neto težina i ukupna bruto težina stavki artikla. Prikazane su težine artikala u evidenciji pomnožene s količinom retka.

#### Posebni gumbi

> **Sastavnica materijala**: omogućuje otvaranje osnovne razgradnje odabranog artikla kako biste mogli vidjeti detalje; (za više informacija o ovome obratite se članku Stablo sastavnica materijala i upravljanje strukturama).    
> **Proširi prvi nivo popisa**: : omogućuje dodavanje materijala (sirovina i poluproizvoda) iz osnovne razgradnje odabranog artikla u narudžbu kupca; stoga će biti prikazani materijali prvog nivoa sastava gotovog proizvoda. Ova opcija se, na primjer, često koristi za proizvode u Kitu (tj. sastavljene od više dijelova).    
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla u postojećem cjeniku (spremite dokument kako biste omogućili ove gumbe), ili stvaranje novog cjenika s odabranim artiklom i odgovarajućom cijenom.           
> **Podijeli količinu u više datuma dostave**: omogućuje podjelu količine stavke artikla u više redaka prema datumima isporuke. Odabirom retka i klikom na gumb otvorit će se obrazac **Različite dostave** unutar kojeg će biti navedeni *Datum pripravnosti robe*, *Datum isporuke* i *Količina* retka. U sljedećem retku trebat će navesti *Datum spremnosti robe* (koji bi trebao biti isti), *Datum isporuke* koji će biti različit i *Količinu* koja će biti poslana toga dana, a zatim će trebati promijeniti datum u prvom retku ažurirajući ga na preostalu količinu tako da zbroj količina dvaju redaka rezultira početnom količinom retka prije raspada. Potvrditi radnju gumbom *U redu*.      
> **Pakiranje**: omogućuje stvaranje UDC-a iz odabranog retka. Redak mora biti kodiran artikli spremljen u dokument. Korisnik mora imati prava unutar [Postavki unosa/izlaza](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) za utovar paleta. Osim toga, artikl mora biti upravljano kao UDC i prema postavkama Tipa UDC-a unesenim u evidenciju artikala, kartica  [Pakiranje](/docs/erp-home/registers/items/create-new-item), stvorit će se UDC poštujući kriterije.

      
### 3.1 Popusti/Cjenici

**Popusti**: Prikazuju se sva sniženja povezana s artiklom, svako s vlastitom osnovom i načinom dodjele. Sniženja se mogu preuzeti iz: podataka o klijentu, rješenja plaćanja dodijeljenog dokumentu, cjenika povezanog s klijentom. Svi prikazani podaci mogu se mijenjati. 

**Vrijednosti cjenika**: Prikazuje se cjenik iz kojeg je preuzet artikl, s datumom početka/kraja valjanosti i posebnim prodajnim uvjetima (npr. Razinama popusta) dodijeljenim artiklu u cjeniku. 

#### Poseban gumb* 
> **Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i,  ako postoji, varijantu artikla;   
 > **Tip platnog razreda**: U ovom se polju navodi vrsta popusta iz cjenika koji se treba primijeniti. Napominjemo da jedan cjenik može imati više različitih vrsta popusta za isti artikl. 


### 3.2 Podaci artikla

Ovdje se unose/dodaju dodatne informacije o artiklu. 

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i, ako postoji, varijantu artikla; 

**Projekt**: To je projekt povezan s dokumentom. To se može dodijeliti, u slučaju narudžbe kupca, uz pomoć postupka *Dobit iz naloga za posao* ili se može dodijeliti uz polje pomoći. 

**Marka**: predstavlja marku artikla, preuzetu iz njegove kartice ili iz cjenika artikla; 

**Napomene**: omogućuje unos napomena za svaki artikl koji želite da se pojavi u svim dokumentima.  

## Trgovački predstavnici  

**Trgovački predstavnici**: predstavnik povezan s odgovarajućom provizijom za odabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Postotak se može promijeniti. 

#### Poseban gumb* 
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog predstavnika s artiklom.


## Varijante 

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** u šifarnik artikla ili se mogu unijeti ručno. 
Omogućuje upravljanje varijantama artikla na način koji se razlikuje od onoga što je ponuđeno na retku s artiklima. 
Na primjer, na svakom se retku s artiklima može unijeti ukupna količina; zatim, u istoj kartici mogu se definirati različite količine za više varijanti odabranog artikla i čak za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla cijenjene po istoj cijeni kao i standardna konfiguracija artikla. 

#### Poseban gumb  
> **Izbriši**: omogućuje brisanje odabranog retka varijante.


### 3.4 Lotti e Serial number

U oba prikaza mogu se unijeti lotovi i serijski brojevi koji se moraju isprazniti iz skladišta, a koji su povezani s artiklom u *Šifarnik Artikla > kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item)* ili ih se može unijeti ručno. 

Ova operacija uvjetovana je prisustvom serija i serijskih brojeva u skladištu. 

Ako artikl ne podrazumijeva upravljanje lotovima/serijskim brojevima, ovaj će se karton onemogućiti.  

#### Posebni gumbi   
> **Izbriši lot**: omogućuje brisanje odabranog retka lota.     
> **Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

### 3.5 Analitika 

Može sadržavati informacije o troškovima/odbitku na koje su raspoređeni iznosi artikala. 

Ovi se podaci mogu unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita unaprijed uneseni u *šifarnik kontakata*, *šifarnik artikla* ili *kontni plan*). 

### 3.6 Dodatni podaci 

Prikazuje se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za trenutni dokument, s mogućnošću, putem odgovarajućeg okvira, odabira dodatnih podataka koje treba ispisati. 

### 3.7 Priloženi dokumenti 

Prikazuje se pojedinosti o eventualnom **Priloženom dokumentu** (naziv, vrsta dokumenta, eventualne napomene, naše/vaše referencije). Za upute o tome kako priložiti dokument, pogledajte članak u **Priloženim dokumentima**.

### 3.8 Odjeljak o vrijednostima  

Donji desni odjeljak sadrži sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikala. 

**Jedinična cijena**: vrijednost polja *Cijena*; 

**Količina**: vrijednost polja *Količina*; 

**Iznos u liniji**: Cijena artikla * *Količina artikla*; 

**Ukupno rabat**: zbroj popusta na artiklu, uključujući i konačne popuste; 

**Osnovica**: Brutalni iznos - Popusti; 

**Porez**: Osnovica * stopa PDV-a na artiklu; 

**Ukupno**: Osnovica + Porez. 

Polje **Stanje** prikazuje stanje artikla u eventualnom proizvodnom ciklusu i automatski se ažurira na temelju prisutnosti artikala u različitim dokumentima. Artikl ima stanje uneseno kada je narudžba spremljena i zadržava ga ako je narudžba potvrđena. Artikl je u proizvodnji kada se generira zadatak. Artikl je Proizveden nakon završetka proizvodnog ciklusa. 

## **4. Sažeci**

U različitim dijelovima ove kartice prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi. 

### 4.1 Konačna sniženja  

Mogu se unijeti samo konačna sniženja izražena u postotku, koja će se primijeniti na ukupni iznos dokumenta. 

Sniženja unesena u ovom dijelu izračunavaju se i prikazuju za svaki artikl u dokumentu, u *kartici Artikli > kartici Sniženja/Cjenici*. 

**Vrsta/Opis sniženja**: omogućuje odabir vrsta sniženja (predefiniranih u *Vrstama sniženja*), dodjeljujući prioritet vrsti sniženja i određujući je li sniženje izračunato na osnovu cijene prije sniženja ili u kaskadi s prethodno primijenjenim sniženjima.   
**Prioritet**: predstavlja prioritet primjene sniženja; sortiranje se vrši uzlazno.   
**Cijena prije sniženja**: definira da li se sniženje izračunava na temelju (*cijena x količina*) - (*prethodno izračunata sniženja*) ili (*cijena x količina*).  
**Vrijednost**: numerička vrijednost konačnog sniženja koje će se primijeniti.   


### 4.3  Sažetak provizije predstavnika 

Ovdje su sažete ukupne provizije koje je agent zaradio za ovu narudžbu, ako je agent povezan. Navest će se agent i vrijednost zarađene provizije. 

### 4.4 Troškovi/sniženja 

Prikazani su troškovi uneseni u šifarnik kontakta, u kartici *Troškovi/Sniženja*. 

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument. 

**Vrsta/Opis**: omogućuje odabir vrsta troškova (predefiniranih u Vrstama troškova), dodjeljujući vrsti postotak troškova koji se primjenjuje.   
**Postotak/Vrijednost**: polje koje određuje treba li se troškovi izračunati postotkom ili unaprijed određenom novčanom vrijednošću.   
**Postotak**: numerička vrijednost postotka troškova. 

### 4.5 Sažetak PDV-a 

Prikazuje se sažetak PDV-a dokumenta, za svaki PDV. 

### 4.6 Pregled dospjeća plaćanja 

Ovdje su navedeni rokovi plaćanja izračunati na temelju tipova plaćanja unesenih. 

### 4.7 Ostala polja  

**Završne napomene**: opisno polje koje korisnik može popuniti uz  *Pomoć za šifrirane napomene*. 
Dodatne napomene za klijenta mogu se unijeti, na primjer, o dostavi, koje će se zatim prikazati na ispisi Potvrde narudžbe u završnom dijelu ispisa

### 4.8 Ukupni iznos dokumenta  

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikala; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos artikala tipa poklona unesenih u kartici *Artikli*. 

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala - Ukupni primijenjeni popusti*;  

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala;   

**Neto iznos s primijenjenim konačnim popustima**: *Neto iznos artikala - Ukupni primijenjeni konačni popusti*;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikli *Vrste troškova*;   

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u kartici *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj troškova pečata unesenih u kartici *Troškovi*;     

**Trošak dokumentacije**: predstavlja vrijednost troškova unesenih u kartici *Troškovi*; 

**Osnovica**: *Neto iznos artikala - Konačni popusti + Ukupni nepodmireni troškovi + Ukupni dokumentirani troškovi*;

**PDV**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;