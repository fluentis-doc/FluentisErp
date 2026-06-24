---
title: Novi artikl
sidebar_position: 1.1
---

**Uvod**: [Identifikacija proizvoda i pripadajućih komponenti](/docs/erp-home/registers/items/master-item-intro)

:::important Čemu služi
Šifarnik artikala u Fluentisu ima ključnu ulogu u upravljanju i organizaciji podataka o artiklima poduzeća. Predstavlja središnju bazu podataka u kojoj se evidentiraju i ažuriraju informacije o svakom proizvodu, omogućujući jasan i sustavan pregled zaliha, troškova i skladišnih kretanja.

Podaci pohranjeni u šifarniku artikala uključuju identifikacijske informacije kao što su šifra artikla, opis, mjerna jedinica te podaci o dobavljačima. Također je moguće evidentirati cijene, pravila nabave i upravljanje serijama, čime se olakšavaju svakodnevni procesi nabave, prodaje i logistike.

Zahvaljujući ovom šifarniku, poduzeća mogu pratiti status artikala, automatizirati procese poput ponovnog naručivanja zaliha te izrađivati detaljna izvješća za učinkovitije planiranje nabave. Integracija s ostalim modulima Fluentisa omogućuje bolju koordinaciju skladišnih aktivnosti, povećava operativnu učinkovitost i doprinosi preciznijem upravljanju zalihama.
:::

Postupak kreiranja novog artikla pokreće se putem:

- **Početna > Artikli > Novi artikl**

ili

- **Početna > Artikli > Pretraživanje artikala**, klikom na gumb **Novo** na *ribbon* traci forme.

Otvara se forma **Šifarnik artikla - registar stavki**, koja se sastoji od gornjeg dijela za definiranje *obveznih karakteristika* artikla te donjeg dijela s karticama koje grupiraju njegove *specifične karakteristike*.

## 1. **Zaglavlje**

Osnovni i obvezni podaci koje svaki artikl mora imati, a nalaze se u prvom dijelu forme, jesu: [**Klasa**](/docs/guide/common/glossary/glossary-intro#item-class) (najviše 3 znaka), [**Šifra**](/docs/guide/common/glossary/glossary-intro#item-code) (najviše 50 znakova), kratki **Opis** te [**Jedinica mjere**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note Napomena
Kombinacija klase i šifre mora biti jedinstvena za svaki artikl.
:::

#### Neobvezna polja
- **Drugi opis**: dodatni opis koji se može dodijeliti artiklu;
- **Glavna konfiguracija/Verzija**: polje za odabir verzije artikla.

Nakon definiranja svih obveznih karakteristika, moguće je unijeti dodatne specifične podatke kroz kartice koje se nalaze u donjem dijelu prozora i koje su opisane u sljedećim dokumentima.

#### Specifični gumbi

> **Ažuriranje prodajnih cijena formulom**: omogućuje ažuriranje prodajnih cijena na temelju definiranih formula i postojećih cjenika;
> [**MRP parametri**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): otvara *MRP parametre* artikla, gdje se definiraju postavke potrebne za upravljanje artiklom u proizvodnji. Ovaj se gumb pojavljuje i u drugim formama vezanim uz proizvodnju.

## 2. **Općenito**

:::important Čemu služi
Kartica **Općenito** sadrži glavne i logističke informacije o artiklu, poput šifre, opisa, mjerne jedinice te drugih opcionalnih klasifikacija, uključujući robnu kategoriju i vrstu artikla.
Ova kartica omogućuje definiranje dodatnih podataka korisnih za upravljanje i praćenje artikala unutar poslovnih procesa te olakšava organizaciju podataka i izradu izvješća.
:::

#### Specifična polja  

**Datum unosa**: polje koje se automatski popunjava prilikom kreiranja artikla i označava datum kreiranja artikla;  
**Stopa PDV-a**: padajući izbornik putem kojeg se odabire i dodjeljuje PDV stopa za artikl; ovo polje ima prioritet nad PDV stopom koja je dodijeljena kupcu/dobavljaču u šifarniku kontakta;  
**PDV nabave/prodaje za poljoprivredni sektor**: koriste poseban način obračuna;  
**Karakteristika i Model**: dva neobvezna polja kojima se artiklu može dodijeliti dodatna klasifikacija prema grupiranjima definiranim unutar upravljanja proizvodima poduzeća;  
**Promet nabave**: padajući izbornik povezan s vrstom *Prometa nabave* definiranom u tablici knjigovodstvenih podkonta za knjiženje ulaznih računa;  
**Vrsta artikla**: neobvezna tablica u koju se može unijeti dodatna klasifikacija artikla prema internim grupiranjima;  
**Nomenklatura**: u ovom se polju putem pomoći odabire nomenklatura (odnosno carinska oznaka artikla) potrebna za Intrastat izvještavanje, deklariranje robe pri uvozu i izvozu te statističko praćenje trgovine unutar EU;  
**Dani plaćanja za kvarljivu robu**: povezano s člankom 62; za kvarljivu robu račun mora biti izdan i plaćen u roku od 30/60 dana, ovisno o vrsti artikla. Kontrola se provodi i na artiklu i na vrsti plaćanja kako ne bi bilo moguće izdati račun s datumom dospijeća duljim od dopuštenog;  
**Datum zadnje izmjene**: označava datum posljednje izmjene artikla;  
**Fiskalna kategorija**: putem ovog izbornika odabire se porezna kategorija kojoj artikl pripada, a koristi se za porezne skladišne izvještaje i grupiranje inventure po poreznim kategorijama;  
**Kategorija proizvoda**: statistički podatak poput karakteristike, koji se koristi u određenim izvještajima;  
**Promet prodaje**: kao i kod prometa nabave, ovaj izbornik služi za upravljanje prihodovnim kontima pri prodaji artikla;  
**Vrsta artikla**: polje koje se koristi za dodjelu posebnih karakteristika artiklu kako bi se mogao koristiti u određenim specifičnim procedurama. U izborniku se nalazi popis različitih vrsta prirode artikla (kliknite za [pojmovnik](/docs/guide/common/glossary/glossary-intro#item-nature));  

> **Oprema/Alat**: artikl ove vrste može se povezati sa šifarnikom mjernih instrumenata i opreme korištene u fazama radnih ciklusa.  
> **Stroj/Postrojenje**: ova vrsta može se povezati sa šifarnikom strojeva;  
> **Obitelj artikala**: definira artikl kao obitelj artikala/proizvoda koja se koristi u prognozama prodaje;  
> **Ambalaža**: koristi se za upravljanje povratnom ambalažom i za računovodstveno praćenje količina ambalaže kod kupaca i dobavljača;  
> **Usluge**: koristi se za upravljanje postprodajnim intervencijama;  
> **Posudba / Komponenta postrojenja**: koriste se u procesima održavanja;  

#### Dostupne opcije  

**Kontrola kvalitete**: ako je opcija uključena, pokreće proces kontrole kvalitete, što znači da će artikl biti uključen u tok upravljanja kvalitetom;  
**Fiktivan**: ako je uključena, označava da se artikl ne smije skladišno evidentirati;  
**Fiskalni interes**: ako je uključena, artikl će biti uključen u porezne skladišne izvještaje;  
**ABC**: u logističkom upravljanju zalihama ABC predstavlja metodu klasifikacije inventara koja dijeli artikle u tri skupine: A, B i C, gdje A sadrži najvažnije artikle, a C najmanje važne. Ova metoda omogućuje fokusiranje na mali broj ključnih proizvoda umjesto na veliki broj manje značajnih. Ako poduzeće koristi ovu metodu, u ovom će se polju nalaziti oznaka kategorije kojoj artikl pripada;  
**U odlasku**: ako je opcija uključena, označava da je artikl u fazi povlačenja iz upotrebe.  
Uvjeti za prikaz upozorenja da je artikl u gašenju u dokumentima, primjerice u narudžbama kupaca, su:  
- u [Parametrima narudžbi kupaca](/docs/configurations/parameters/sales/sales-orders-parameters) mora biti uključena opcija **Provjera artikala u gašenju**;  
- u šifarniku artikla mora biti uključena opcija **U gašenju**, a **Datum gašenja** mora biti manji ili jednak datumu narudžbe.  

**Datum roka isteka**: označava datum od kojeg je artikl stavljen u status gašenja;  
**Izuzimanje od izračuna raspoloživosti**: ako je opcija uključena, sustav neće provjeravati raspoloživost artikla prije njegove uporabe;  
**Arhivirano**: ako je opcija uključena, artikl se više neće prikazivati među dostupnim artiklima jer se smatra zastarjelim;  
**Autorska prava**: ako je opcija uključena, označava da je artikl podložan autorskim pravima odnosno *royalty* naknadama te će biti uključen u [Upravljanje *royalty* naknadama](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/).  

## 3. **Administracija**

Unutar ove kartice definiraju se poslovni centri (centri troška) i eventualni profitni centar artikla kako bi se, prilikom korištenja artikla u dokumentima, automatski prenijeli odabrani centri koji će se koristiti tijekom knjiženja.
**Mreža poslovnih centara**: omogućuje povezivanje šifarnika artikla s jednim ili više poslovnih centara;  

#### Polja tablice poslovnih centara  

> **Broj**: označava broj retka;  
> **Centar troška**: omogućuje odabir šifre centra troška;  
> **Opis**: prikazuje opis centra troška;  
> **Postotak**: označava postotak raspodjele između različitih centara troška unesenih u mrežu (ako postoji samo jedan centar, vrijednost je 100%);  
> **Odjel**: omogućuje povezivanje centra troška s artiklom u odnosu na odabranu poslovnu *Diviziju*;  
> **Datum početka / Datum završetka valjanosti**: omogućuju definiranje razdoblja valjanosti povezanosti;  
> **Dimenzija**: omogućuje definiranje dimenzije poslovnog centra (za više informacija pogledati tablicu [Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));  
> **Kategorija troška**: omogućuje definiranje kategorije poslovnog centra (za više informacija pogledati tablicu [Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)).

:::note[Napomena]
Ako je parametar *Upravljanje kontrolingom*, koji se nalazi u kartici *Ostale postavke* tablice [**Tvrtka**](/docs/configurations/tables/general-settings/company), isključen, ovo se polje koristi za unos centra troška.
:::

**Profitni centar**: samo ako je parametar *Upravljanje kontrolingom*, koji se nalazi u kartici *Ostale postavke* tablice **Tvrtka**, isključen, ovo će polje biti dostupno i služit će za unos profitnog centra.

## 4. **Nabava**

:::important[Čemu služi]
Kartica Nabava u šifarniku artikala Fluentisa omogućuje definiranje svih parametara potrebnih za optimalno upravljanje zalihama artikla. U prvom dijelu postavljaju se opći podaci poput minimalne i maksimalne zalihe, koji određuju granice unutar kojih se količine na skladištu trebaju održavati. Ostali parametri uključuju tjedne pokrivenosti, dane zalihe i točku ponovne narudžbe koja određuje kada je potrebno izvršiti novu narudžbu.
Dodatno su dostupne postavke za pisače etiketa i vrste izvještaja etiketa, korisne za upravljanje serijama u različitim statusima (*Jedinstvena*, *Usklađena*, *Postoji greška*, *Karantena*). U drugom dijelu moguće je definirati iste parametre za svako skladište u kojem se artikl nalazi, čime se omogućuje precizno i prilagođeno upravljanje zalihama.
:::

U ovoj se kartici definiraju svi podaci potrebni za nabavu predmetnog artikla.  
Prozor se sastoji od dva dijela:

a. U prvom dijelu postavljaju se podaci za opću nabavu artikla, a ne za pojedino skladište:

**Minimalna zaliha i maksimalna zaliha**: predstavljaju minimalne količine koje uvijek moraju biti dostupne na skladištu za taj artikl te maksimalne količine koje se mogu držati na skladištu;  
**Dani zalihe**: predstavljaju broj dana potrebnih za nadoknadu barem minimalne zalihe definirane za artikl;  
**Tjedni pokrivenosti**: definira vremensko razdoblje (izraženo u tjednima) tijekom kojeg zaliha pokriva potrebe za tim artiklom;  
**Indeks pokrivenosti**: polje u koje se unosi postotak koji planer ili MRP može, ali ne mora, koristiti za obnovu zaliha. Ako je u MRP parametrima aktivirana opcija *Uzmi u obzir indeks pokrivenosti*, tijekom planiranja postupak će koristiti postotak definiran u ovom polju kako bi obnovio raspoloživost artikla u količini potrebnoj za pokrivanje potreba tijekom broja tjedana definiranih u polju **Tjedni pokrivenosti**;  
**Razina zalihe za ponovno naručivanje**: ovdje se definira količina pri kojoj je potrebno pokrenuti novu narudžbu za artikl;  
**Dani za ponovnu naručivanje**: broj dana potreban za obnovu zalihe materijala na skladištu;  
**Interval pregleda točke ponovnog naručivanja**: definira koliko često je potrebno pregledati i ažurirati točku ponovne narudžbe;  
**Zadnji datum izračuna točke ponovne naručivanja**: prikazuje datum posljednje analize tijekom koje je određena prethodno navedena točka ponovne narudžbe.

Postoje i dvije dodatne sekcije:

- **Pisači za etikete**: omogućuju odabir zadanih pisača za ispis etiketa serija prema različitim *statusima serije*; moguće je odabrati pisač za statuse *Jedinstvena*, *Sukladna*, *Postoji greška* i *Karantena*.

- **Vrste etiketa**: omogućuju definiranje zadanih izvještaja za ispis etiketa serija prema različitim *statusima serije*; moguće je koristiti različite izvještaje za statuse *Jedinstvena*, *Sukladna*, *Postoji greška* i *Karantena*.

b. U drugom dijelu prozora definiraju se skladišta u kojima se artikl nalazi te se po potrebi mogu postaviti neki od prethodno navedenih podataka (minimalna/maksimalna zaliha i dani zalihe, točka ponovne narudžbe i dani za ponovnu narudžbu, ispis etiketa za statuse jedinstvena/sukladna/nesukladna/karantena) za svako pojedino skladište. (Primjerice, minimalna ili maksimalna zaliha tog artikla u određenom skladištu, kao i ostali navedeni podaci.)

## 5. **Kategorije popusta nabave**

U ovoj se kartici unose **Kategorije rabata** prema kojima se artikl nabavlja. Te kategorije koristi **Upravljanje cijenama** modula nabave.

## 6. **Kategorije popusta na prodaju**

U ovoj se kartici unose **Kategorije rabata** prema kojima se artikl prodaje. Te kategorije koristi **Upravljanje cijenama** modula prodaje.

## 7. **Kupci**

U ovoj je kartici moguće povezati artikl s popisom kupaca koji su ga kupili.

**Vrsta uzorka**: padajući izbornik za definiranje zadanog načina uzimanja uzoraka iz proizvodnog naloga za taj artikl (primjerice jedan uzorak na svakih 100 komada ili jedan uzorak na svaka 3 naloga i sl.). Vrste uzorkovanja prethodno se definiraju u tablici dostupnoj putem izbornika **Tablice > Logistika**.

**Gornja tablica**:  
**Kupac**: potrebno je navesti konto/podkonto i naziv kupca;  
**Ekonomska serija**: unosi se ekonomska serija (minimalna količina koju kupac može naručiti) zajedno s pripadajućom mjernom jedinicom;  
**Artikl kupca**: u ovom dijelu moguće je unijeti šifru i opis koje kupac koristi za artikl u vlastitoj bazi podataka; unosom te reference ona će se automatski prikazivati u svim dokumentima za tog kupca i taj artikl;  
**Sektor primjene**: ovdje se navodi područje primjene kod kupca;  
**Vrsta uzorka**: ovdje se odabire vrsta uzorkovanja artikla za konkretnog kupca, koja može biti različita od one odabrane u početnom izborniku prozora;  
**Tehnička kartica**: ako za artikl već postoji tehnička specifikacija, u ovom se dijelu prikazuju podaci o dokumentu;  
**Završno ispitivanje**: u ovo se polje unose eventualni podaci o vrsti, godini, šifri i opisu završnog ispitivanja;  
**Varijanta**: u ovo se polje unosi eventualna varijanta artikla odabirom iz padajućeg izbornika koji sadrži prethodno definirane varijante iz tablice **Varijante artikla**;  
**Napomene**: dio u koji se mogu unijeti dodatne napomene.

Donja tablica može sadržavati informacije o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Specifični gumbi  
> **Unesi kupce**: omogućuje unos novog kupca;  
> **Izbriši kupca**: omogućuje brisanje prethodno unesenog zapisa kupca.

## 8. **Barkod**

Unutar ove kartice moguće je unijeti alternativne šifre, odnosno barkodove koji predstavljaju artikl.  
Barkodovi su kodovi koji sadrže osnovne informacije o artiklu s kojim su povezani te su korisni za skladišne operacije. Ovi se kodovi očitavaju pomoću posebnih uređaja, tzv. mobilnih terminala, koristeći laserske zrake ili LED skenere.  
Barkodovi mogu biti različitih vrsta.  
Dvije vrste koje sustav podržava su:

- EAN13 (što znači da barkod može imati najviše 13 znakova)  
- EAN128 (što znači da barkod mora imati paran broj znamenki).

U **Fluentis ERP-u** ne postoje unaprijed definirani parametri koji određuju kako barkod mora biti postavljen da bi odgovarao standardima EAN13 i EAN128, ali je moguće primijeniti prilagođene algoritme koji slijede standard i provjeravaju ispravnost unesenog barkoda prema navedenim pravilima.  

Forma se sastoji od mreže u koju se može unijeti **Novi** barkod pomoću gumba **Unesi** na ribbon traci ili izravno dodavanjem novog retka.  

U polju **Vrsta barkoda** odabire se vrsta barkoda putem odgovarajućeg izbornika, dok se u polje **Barkod** unosi sam kod.

:::note[Napomena]
Ako je u tablici [Vrste barkodova](https://docs.fluentis.com/FluentisErp/docs/configurations/tables/general-settings/barcode-types/) aktivirana opcija **Izvoz za javnu upravu**, provjera jedinstvenosti barkoda provodi se samo na razini pojedinog artikla. Ako je opcija isključena, provjera jedinstvenosti provodi se globalno za sve artikle.
:::

#### Specifični gumbi  
> **Provjera**: pritiskom na ovaj gumb sustav provjerava odgovara li kod pravilima o duljini definiranima za odabranu vrstu barkoda;  
> **Izbriši barkod**: omogućuje brisanje prethodno unesenog barkoda.

## 9. **Pakiranje**

:::important[Čemu služi]
Kartica Pakiranje u šifarniku artikala Fluentisa ključna je za definiranje načina pakiranja artikla određivanjem vrsta jedinica tereta (UDC) koje ga čine. Ova konfiguracija može imati hijerarhijsku strukturu, gdje primjerice jedna paleta može sadržavati više kutija, a svaka kutija određeni broj artikala.
Precizno definiranje pakiranja vrlo je važno jer omogućuje automatsko generiranje potrebnih jedinica tereta za otpremu prilikom pripreme narudžbe.
Dodatno je moguće povezati specifične mjerne jedinice za volumen te definirati opis za kupca ili dobavljača, čime se omogućuje prilagođeno upravljanje prema potrebama pojedinog poslovnog partnera. Ova kartica predstavlja važan alat za optimizaciju logistike i upravljanje skladištem.
:::

Putem ove kartice definira se način pakiranja artikla određivanjem vrsta jedinica tereta koje ga čine. Struktura može biti hijerarhijska, jer je moguće definirati, primjerice, paletu kao način pakiranja koja sadrži određeni broj kutija, a svaka kutija određeni broj artikala. Definiranje pakiranja omogućuje sustavu automatsko kreiranje potrebnih jedinica tereta za otpremu prilikom pripreme narudžbe za isporuku. Prozor se sastoji od mreže unutar koje se unose sljedeće informacije:

**Vrsta jedinice tereta / Tip palete**: u ova se polja unosi vrsta jedinice tereta, odnosno vrsta ambalaže, te vrsta sadržaja odabirom željene stavke iz odgovarajućeg padajućeg izbornika; podaci dostupni u izbornicima prethodno su definirani u tablici [Vrste jedinica tereta/palete](/docs/configurations/tables/logistics/loading-unit-types);  
**Količina**: u ovom se polju navodi količina koju ta jedinica tereta može sadržavati;  
**Prioritet**: u ovom se polju definira prioritet pakiranja (primjerice, ako paleta sadrži kutije, potrebno je odrediti prioritet kako bi sustav znao redoslijed stvaranja jedinica tereta);  
**Konto / Podkonto / Naziv kupca/dobavljača**: u ovom se polju navodi kupac ili dobavljač koji zahtijeva ovu vrstu jedinice tereta. Na taj je način moguće definirati različite jedinice tereta za pojedinog kupca;  
**Jedinica mjere dimenzija**: u ovom se polju odabire mjerna jedinica za dimenzije jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrijednost se automatski preuzima iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);  
**Visina / Širina / Dubina**: u ovim se poljima definiraju dimenzije kompletne jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrijednosti se automatski preuzimaju iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types) samo ako opcija **Promjenjivi volumen** nije aktivna. U suprotnom se podaci ne predlažu te ih operater mora ručno unijeti zbog nemogućnosti predviđanja rasporeda artikala unutar odabrane jedinice tereta. Vrijednosti se uvijek mogu ručno izmijeniti, a pri svakoj izmjeni automatski se ponovno izračunava **Volumen**;  
**Jedinica mjere volumena**: u ovom se polju definira mjerna jedinica volumena jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrijednost se automatski preuzima iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);  
**Volumen**: u ovom se polju navodi volumen kompletne jedinice tereta. Ako je opcija **Promjenjivi volumen** aktivna, pri unosu **Vrste jedinice tereta** vrijednost se izračunava zbrajanjem volumena prazne jedinice tereta iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types), volumena artikla (preuzetog iz polja *Volumen* na kartici Težine / Dimenzije šifrarnika artikla pomnoženog s količinom) te volumena sadržanih jedinica tereta. Ako opcija **Promjenjivi volumen** nije aktivna, automatski se preuzima volumen prazne jedinice tereta iz navedene tablice. U slučaju promjene dimenzija **Visina / Širina / Dubina**, volumen se ponovno izračunava. Volumen se također ponovno izračunava pri promjenama volumena **Vrste sadržane jedinice tereta**. Vrijednost je uvijek moguće ručno izmijeniti;  
**Varijabilni volumen**: označava da se radi o jedinici tereta s promjenjivim volumenom, odnosno da ukupni volumen ovisi o sadržaju i načinu slaganja; riječ je o polju samo za čitanje koje se definira u tablici [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);  
**Jedinica mjere težine**: u ovom se polju definira mjerna jedinica težine jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrijednost se automatski preuzima iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);  
**Težina**: u ovom se polju navodi ukupna težina jedinice tereta; pri unosu **Vrste jedinice tereta** i **Količine**, vrijednost se izračunava zbrajanjem težine prazne jedinice tereta iz tablice [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types) te težine artikala (preuzete iz polja *Bruto težina* na kartici Težine / Dimenzije šifrarnika artikla pomnožene s količinom) ili težine sadržanih jedinica tereta. Vrijednost se uvijek može ručno izmijeniti;  
**Tolerancija dimenzija / Tolerancija količine**: koriste se u prilagodbama sustava te služe pri kreiranju popisa za preuzimanje utovarnih jedinica iz plana utovara s raspoloživim jedinicama tereta na skladištu. Procedura bi trebala uključiti jedinice tereta čije dimenzije ili količine odstupaju od definiranih vrijednosti za navedeni postotak. Trenutno se standardno ne koriste;  
**Obvezne dimenzije**: ako je aktivno, označava da su navedene dimenzije obvezne i ne mogu odstupati;  
**Obvezna jedinica za utovar**: ako je aktivno, označava da se artikl mora obvezno voditi putem jedinica tereta u proizvodnim prijavama i WMS prijemu robe;  
**Opis vrste jedinice tereta / Opis vrste sadržane jedinice tereta**: nakon unosa vrste jedinice tereta i vrste sadržane jedinice tereta, u ovim se poljima automatski prikazuju opisi odabranih vrsta.

## 10. **Troškovi**

:::important[Čemu služi]
Na kartici Troškovi u šifarniku artikala Fluentis korisnici mogu evidentirati različite vrste troškova povezanih s artiklom, uključujući posljednji trošak i ponderirani prosječni trošak, koji se automatski ažuriraju na temelju skladišnih kretanja. Posljednji trošak predstavlja zadnju evidentiranu nabavnu cijenu, dok je prosječni trošak rezultat skladišnih kretanja i koristi se za izračun vrijednosti zaliha.
Kartica također omogućuje definiranje standardnog troška, koji služi kao referentna vrijednost tijekom godine i obično se ažurira jednom godišnje. Osim toga, moguće je unijeti prodajnu cijenu koja predstavlja polazište za izradu prodajnih cjenika.
Ove informacije ključne su za vrednovanje skladišnih zaliha i financijsko planiranje te doprinose učinkovitijem upravljanju artiklima u skladištu.
:::

Unutar ove kartice unose se različiti troškovi povezani s artiklom.

#### Specifična polja

**Posljednji trošak** i **Prosječni trošak**: pod posljednjim troškom podrazumijeva se posljednja (najnovija) nabavna cijena, dok ponderirani prosječni trošak predstavlja prosječnu cijenu izračunanu na temelju skladišnih kretanja. Za oba troška, skladišna knjižna oznaka mora imati aktivirane opcije *Ažuriranje prosječnog troška / posljednjeg troška*, *Ažuriraj trošak artikla* i *Fiskalni interes*, kako bi se odgovarajuća kretanja uključila u izračun troškova.

**Standardni trošak / Sljedeći standardni trošak**: standardni trošak je trošak definiran ručno ili putem procedure izračuna troškova te predstavlja referentni trošak artikla tijekom godine. Obično se ažurira na početku ili kraju godine. Za nabavne artikle uglavnom odgovara prosječnom trošku, dok se za ostale artikle izračunava procedurom [Izračun troška](/docs/controlling/cost-calculation/cost) iz područja *Controlling*, kao zbroj troškova materijala i troškova proizvodnih operacija.

Svi navedeni troškovi mogu se koristiti za vrednovanje sastavnica proizvoda (BOM), skladišnih zaliha ili (za nabavne artikle) za vrednovanje proizvodnih naloga i pripadajućih skladišnih knjiženja prilikom zaprimanja artikla iz proizvodnog naloga.

**Prodajna cijena**: osnovna cijena koja može poslužiti kao polazište za izradu prodajnog cjenika, primjerice nacionalnog cjenika. Ako za artikl ne postoji definiran cjenik, dokumenti će koristiti ovu cijenu (osim kod povrata robe, gdje se prema zadanim postavkama koristi vrijednost posljednjeg troška, što je potrebno dodatno provjeriti). Ovo polje se rijetko koristi.
**Kategorija popusta / Konfiguracija cjenovnih razreda / Formule za ažuriranje politika popusta**: komercijalni podaci koji služe za ažuriranje cijena. Formula ažuriranja koristi se u proceduri [Napredno kreiranje cjenika](/docs/sales/sales-price-list/procedures/price-list-advanced).
**Bez komercijalnih uvjeta**: kada se artikl koristi u dokumentima, neće preuzimati cijene ni popuste iz cjenika u kojima se nalazi niti cijenu iz šifrarnika artikla, a za prodaju tog artikla neće se obračunavati provizije.

## 11. **Opisi artikla na jeziku**

Ova kartica omogućuje unos **Opisa na jeziku** i **Opisa 2** artikla na različitim radnim jezicima koji se koriste u sustavu.

#### Specifična polja

**Jezik**: putem ovog izbornika odabire se jezik koji se želi dodati; dostupni jezici prethodno su definirani u odgovarajućoj tablici.
**Jezik opisa**: u ovo se polje ručno unosi opis artikla na odabranom jeziku.
**Opis 2**: u ovo se polje ručno unosi sekundarni opis artikla na odabranom jeziku.

## 12. **Dodatni podaci**

Za više informacija pogledati dokumentaciju vezanu uz [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Preferencijalni dobavljač**

:::important[Čemu služi]
Kartica Preferirani dobavljači unutar šifarnika artikala u Fluentisu ključna je funkcionalnost za upravljanje nabavom. Omogućuje precizno definiranje preferiranih dobavljača za svaki artikl, čime se olakšava proces nabave i osigurava odabir najprikladnijih dobavljača.
Sučelje je podijeljeno na dva glavna dijela. Prvi dio odnosi se na opće informacije o dobavljačima, poput odabira zadanog dobavljača koji postaje glavni kanal nabave za predmetni artikl. Ovdje korisnici mogu definirati i važne parametre poput maksimalne količine za naručivanje, tolerancija količina i cijena te podataka vezanih uz narudžbe dobavljačima.
Drugi dio sadrži detaljnu mrežu u koju je moguće unositi specifične informacije za svakog dobavljača, poput vremena nabave i dodatnih napomena.
:::

U ovoj kartici moguće je definirati preferirane dobavljače za pojedini artikl te odrediti jednog zadanog dobavljača kako bi sustav uvijek predlagao narudžbu kod istog dobavljača.
Prozor se sastoji od dvije cjeline:

1. U prvom dijelu definiraju se opće informacije koje vrijede za sve preferirane dobavljače, ako su podaci zajednički:
> - **Obvezno izvješće dobavljača**: ako je aktivno, artikl se može nabavljati isključivo od zadanog dobavljača navedenog u mreži drugog dijela ekrana;  
> - **Maksimalan broj linija dokaza**: najveći broj redaka narudžbe dobavljaču koji se može kreirati za određeni artikl/dobavljača dok je aktivna opcija **Blokiraj retke narudžbe**;  
> - **Jedinica mjere nabave**: definira mjernu jedinicu za nabavu materijala;  
> - **Maksimalna dobavljiva vrijednost**: definira najveću količinu koju je moguće naručiti od tog dobavljača za predmetni artikl;  
> - **Blokiranje linije narudžbe**: ako je aktivno, onemogućuje unos novih redaka narudžbe dobavljaču;  
> - **Datum blokade**: datum od kojeg blokada redaka narudžbe stupa na snagu;  
> - **% tolerancije viška i manjka primljene količine**: definira dopušteno odstupanje količine isporučene od strane dobavljača;  
> - **% tolerancije prekoračene cijene**: definira dopušteno odstupanje dobavljačke cijene u odnosu na ugovorenu cijenu;  
> - **Dopusti cijenu 0**: ako je aktivno, omogućuje izdavanje narudžbi dobavljaču s cijenom 0 za predmetni artikl.

2. U drugom dijelu nalazi se mreža u kojoj se definiraju zadani i ostali dobavljači za nabavu artikla te podaci specifični za svakog dobavljača:
> - **Dobavljač**: unosi se konto/podkonto i naziv dobavljača;  
> - **Zadano**: označava zadanog dobavljača kada postoji više dobavljača;  
> - **Ekonomski lot**: definira minimalnu ekonomsku količinu i njezine višekratnike. Ako se koristi samo minimalna količina, preporučuje se postaviti *višekratnik* na 1;  
> - **Artikl dobavljača**: omogućuje unos šifre i opisa koje dobavljač koristi za identifikaciju artikla;  
> - **Vrijeme nabave**: definira vrijeme potrebno dobavljaču za proizvodnju ili nabavu artikla, vrijeme transporta te ukupno vrijeme potrebno za obnovu zalihe;  
> - **Narudžbenica**: sadrži podatke vezane uz narudžbu (JM, blokadu retka, datum blokade, maksimalan broj redaka, maksimalnu količinu te tolerancije količine);  
> - **Proizvođač**: unosi se konto i naziv proizvođača materijala;  
> - **Izvor**: označava podrijetlo robe, primjerice zemlju podrijetla ili podrijetlo životinjskog ili biljnog materijala;  
> - **Kontrole u prihvaćanju**: definiraju eventualne kontrole koje je potrebno provesti prilikom zaprimanja materijala prije njegove uporabe;  
> - **Varijante**: omogućuje unos varijante artikla vezane uz određenog dobavljača;  
> - **Napomene**: prostor za dodatne napomene vezane uz predmetnog dobavljača.

## 14. **Slike**

Ova kartica omogućuje povezivanje slika s artiklom.
Putem gumba **Dodaj sliku** moguće je umetnuti sliku unutar kartice.
Ova se funkcionalnost ne koristi često jer je u svakoj formi dostupna funkcija [**Priloži dokumente**](/docs/guide/common/common-buttons), koja omogućuje dodavanje različitih vrsta dokumenata, uključujući i slike.

## 15. **Dobavljački cjenici**

U ovoj kartici prikazuju se svi dobavljački cjenici u kojima se artikl nalazi. Mreža je dostupna samo za pregled (*read only*).

## 16. **Prodajni cjenici**

U ovoj kartici prikazuju se svi kupčevi/prodajni cjenici u kojima se artikl nalazi. Mreža je dostupna samo za pregled (*read only*).

## 17. **Lotovi i serijski brojevi**

:::important[Čemu služi]
Kartica „Lotovi i serijski brojevi” u šifarniku artikala Fluentis omogućuje detaljno upravljanje materijalima kroz dvije varijante: upravljanje po lotovima i upravljanje pomoću serijskih brojeva.

Upravljanje lotovima omogućuje organizaciju artikala u homogene skupine koje mogu biti nabavne ili proizvodne. Svaki lot identificiran je jedinstvenom šifrom koja omogućuje praćenje kretanja i zaliha, čak i u okruženju s više skladišta. Unutar upravljanja lotovima moguće je definirati način izdavanja (FIFO, prema datumu isteka ili ručno) te odabrati vrstu šifre lota koja određuje način kodiranja. Ova funkcionalnost posebno je važna za osjetljive proizvode poput prehrambenih i farmaceutskih artikala.
Alternativno, upravljanje serijskim brojevima omogućuje praćenje svakog pojedinog komada putem jedinstvenog serijskog broja. To je osobito korisno za artikle visoke vrijednosti ili kritične proizvode kod kojih je potrebno precizno pratiti svaku jedinicu. Dostupne opcije uključuju način generiranja serijskog broja (ručno ili automatski) te vremensku valjanost samog broja.
Ova kartica predstavlja ključan element za osiguravanje sljedivosti, usklađenosti s propisima i učinkovitog upravljanja zalihama, čime doprinosi optimizaciji logističkih procesa.
:::

Artikl se može voditi po lotovima ili po serijskim brojevima, a za svaku šifru artikla moguće je kreirati podskupine koje se također mogu voditi po lotovima ili serijskim brojevima.
Lotovi predstavljaju skupine homogenih količina artikala koje ulaze u poduzeće (nabavni lotovi) ili se proizvode unutar poduzeća (proizvodni lotovi).
Svaki lot mora biti identificiran jedinstvenom šifrom iz koje je moguće dohvatiti informacije koje ga karakteriziraju. Ovu šifru poduzeće može definirati u prozoru **Vrsta šifre lota**, dok je kod nabavnih lotova moguće koristiti i šifru lota dobavljača.
Lot mora biti sljediv, a u slučaju više skladišta šifra lota mora omogućiti praćenje stanja zaliha po pojedinom skladištu.
U ovoj kartici definiraju se parametri ovisno o odabranom načinu upravljanja artiklom, koji se aktivira putem oznaka **Upravljanje lotovima** i **Upravljanje serijskim brojevima**.

### Upravljanje lotovima

**Vrsta izdavanja**: određuje koristi li se FIFO metoda, izdavanje prema datumu isteka ili ručni odabir lota od strane operatera;  
**Vrsta šifre lota**: omogućuje odabir vrste šifre lota (i pripadajućih karakteristika za njezino generiranje) definirane u prozoru *Vrsta šifre lota*, a koja se sastoji od kombinacije više polja;  
**Početni status lota**: pojedini lot obično ima status koji definira njegovu valjanost. Za određene vrste materijala, osobito prehrambene i farmaceutske proizvode, status je obvezan (primjerice, farmaceutski lot koji zahtijeva analize prije uporabe može imati početni status *u karanteni* do završetka analiza). Za takve proizvode status se povezuje i s datumom isteka kako bi se spriječila prodaja ili korištenje robe kojoj je istekao rok trajanja. Ovisno o statusu lota, moguće je odabrati upravljanje putem RFID-a ili jedinstvenog RFID-a;  
**Upravljan RFID**: ako je aktivirano, artikl se prati pomoću RFID tehnologije (radiofrekvencijska identifikacija) putem aplikacije;  
**Jedinstveni RFID**: ako je aktivirano, RFID kod povezan s artiklom jedinstven je za taj artikl;  
**Tip isteka lota**: omogućuje odabir načina određivanja isteka lota (točan datum isteka, posljednji dan mjeseca isteka ili prvi dan mjeseca isteka);  
**Promjena roka**: ako je aktivirano, omogućuje ručnu izmjenu datuma isteka lota;  
**Predviđena blokada lota izražena u danima**: polja **Upozorenje blokade** i **Blokada** omogućuju definiranje broja dana unaprijed za upozorenje na blokiranje lota te dana kada lot postaje blokiran;  
**Lot za jednog dobavljača**: ako je aktivirano, označava da lot može sadržavati samo artikle istog dobavljača.

Alternativno, artikl se može voditi putem **upravljanja serijskim brojevima**. U tom slučaju za svaki pojedini komad generira se jedinstveni serijski broj koji omogućuje njegovu identifikaciju i praćenje unutar sustava. Ovakav način upravljanja posebno je prikladan za artikle koji se smatraju *kritičnima* ili *visokovrijednima*, kod kojih je potrebno pratiti svaki pojedinačni komad, a ne samo ukupnu količinu.

### Upravljanje serijskim brojevima

**Tip šifre serijskog broja**: omogućuje odabir zadane vrste iz tablice **Vrsta šifre serijskog broja**;  
**Broj dana valjanosti serijskog broja**: određuje koliko dana će serijski broj biti valjan;  
**Generiranje serijskog broja**: određuje način kreiranja serijskog broja, ručno ili automatski. Ako je postavljeno na automatsko, za sva skladišna kretanja s uzrokom tipa *ulaz* i aktiviranom oznakom *Kreiraj serijski broj* (na samom uzroku), nakon unosa lota serijski brojevi bit će automatski generirani.

## 18. **Napomene**

Ova kartica omogućuje povezivanje slobodnih napomena s artiklom.

## 19. **Matrice**

Ova kartica aktivira se samo ako je u zaglavlju artikla definirana [Konfiguracija](/docs/configurations/tables/CPQ/principal-configurations).
Koristi se kada je potrebno upravljati matricama za kombiniranje atributa artikla te omogućuje definiranje svih mogućih kombinacija za određeni artikl.
Prvi korak je dodjela jedinstvene vrijednosti **Šifra** te odabir **[Definicije matrice](/docs/configurations/tables/CPQ/matrices-definition)** (koja sadrži skup atributa koji će činiti matricu). Na temelju odabrane definicije, u karticama ispod bit će moguće odabrati samo one [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) vrijednosti koje su valjane za tu matricu.
U sekciji *Dopuštene vrijednosti dimenzija* sljedeći korak je odabir pojedinačnih Extra Data atributa putem padajućeg izbornika **Atribut**. Nakon odabira atributa, u mreži *Dostupni rezultati* prikazuju se njegove vrijednosti (primjerice, ako odaberemo atribut Veličina, prikazat će se vrijednosti XS, S, M, L, XL itd.).
Vrijednosti koje želimo učiniti dostupnima za matricu potrebno je premjestiti u mrežu *Dopuštene vrijednosti*, čime određujemo koje će se vrijednosti koristiti u kombinacijama matrice.
Nakon definiranja valjanih vrijednosti za svaki atribut, automatski se pojavljuju nove kartice – po jedna za svaku pomoćnu matricu te jedna kartica za kompletnu matricu koja objedinjuje sve pomoćne matrice i prikazuje sve moguće kombinacije.
U karticama generiranim za pomoćne matrice potrebno je označiti valjane kombinacije vrijednosti. Za svaku kombinaciju potrebno je uključiti oznaku samo ako je kombinacija dopuštena.
U kartici *Potpuna matrica* generira se jedinstvena matrica sa svim valjanim kombinacijama definiranim u prethodnim karticama.
Tako definirana matrica može se koristiti u objektima za koje je konfigurirana.

## 20. **Težine / Dimenzije**

:::important[Čemu služi]
Kartica Težine i dimenzije u šifarniku artikala Fluentis ključna je za logističko upravljanje artiklima. U ovoj sekciji moguće je definirati dimenzije i težine artikala, čime se olakšavaju skladišne operacije i procesi nabave. Sustav omogućuje unos dimenzija (duljina, širina i visina) uz odabranu mjernu jedinicu te automatski izračun volumena.
Osim toga, moguće je definirati bruto, neto i specifičnu težinu, što su važni podaci za planiranje otpreme i upravljanje troškovima.
:::

#### Dimenzije artikla

U padajućem izborniku korisnik može odabrati mjernu jedinicu za dimenzije, a u poljima ispod unijeti prvu, drugu i treću dimenziju te njihove vrijednosti kako bi definirao visinu, širinu i dubinu artikla.

#### Volumen

U padajućem izborniku odabire se mjerna jedinica volumena, a u pripadajuće polje unosi se vrijednost volumena.

#### Vrsta materijala

U padajućem izborniku odabire se vrsta materijala između unaprijed definiranih tipova iz tablice **Tablice > Logistika > Vrste materijala**. Također je moguće definirati vrstu profila materijala zajedno s pripadajućim dimenzijama.

#### Težina

U padajućem izborniku odabire se mjerna jedinica težine, a u poljima ispod unose se bruto težina, neto težina i specifična težina.
Bruto i neto težina prenose se u sve dokumente povezane s artiklom.

#### Vrsta jedinice tereta (palete)

U padajućem izborniku definira se način pakiranja artikla (paleta, europaleta i sl.), a u polju ispod moguće je navesti broj artikala po jedinici tereta.
Na temelju vrste jedinice tereta i broja artikala po jedinici tereta, pri kreiranju planova utovara sustav može automatski izračunati količine i ambalažu potrebnu za pripremu transporta. Važno je napomenuti da se ove vrijednosti koriste samo ako nisu definirane detaljnije vrijednosti u kartici [Pakiranje](/docs/erp-home/registers/items/create-new-item).

#### Broj paketa

Ova sekcija služi za upravljanje brojem paketa u dokumentima. Moguće je definirati izračun na temelju broja artikala po paketu ili broja paketa potrebnih za formiranje artikla, odabirom odgovarajućeg parametra. Nakon toga sustav će u dokumentima automatski izračunavati broj paketa.

## 21. **Kvaliteta**

U ovoj kartici definiraju se različite informacije potrebne za procese kontrole kvalitete (ako se koriste) za predmetni artikl.

#### Lokacije skladištenja

U ovoj sekciji definira se mjesto unutar skladišta na kojem će artikl biti pohranjen. Moguće je definirati:

**Vrsta lokacije**: određuje gdje želimo smjestiti artikl;  
**Lokacija za jedan artikl**: ako je aktivirana, ova oznaka znači da se na toj lokaciji može nalaziti samo taj tip artikla. Nije moguće istovremeno skladištiti dva različita artikla na istoj lokaciji;  
**Lokacija za jedan lot**: ako je aktivirana, ova oznaka znači da se na toj lokaciji može nalaziti ne samo jedan tip artikla, već i samo jedan lot tog artikla, odnosno nije moguće istovremeno skladištiti više lotova istog artikla.

#### Skladišna kretanja

U ovoj sekciji definiraju se informacije korisne za skladišne evidencije artikla:

**Dopušteno ručno knjiženje ulaza**: ako je aktivirano, artikl se može ručno zaprimati u skladište;  
**Blokada kretanja**: koristi se u prilagodbama za blokiranje spremanja ručne evidencije ako odgovarajuća vrijednost (standardna ili stvarna vrijednost artikla ili lota) premaši definiranu **Maksimalnu vrijednost ulaza / Maksimalnu vrijednost izlaza**. Ne koristi se u standardnoj verziji;  
**Maksimalna vrijednost ulaza / Maksimalna vrijednost istovara**: koriste se u prilagodbama (zajedno s oznakom **Blokada kretanja**) kao referentne vrijednosti za blokiranje spremanja ručne evidencije ako odgovarajuća vrijednost premaši zadani limit. Ne koriste se u standardnoj verziji;  
**Trošak za upotrebu**: u ovoj podsekciji definira se hoće li se artikl vrednovati prema stvarnom ili standardnom trošku.

#### Nabava

U ovoj sekciji definira se trebaju li se prilikom zaprimanja nabavljenog materijala provoditi ulazne kontrole:

**Kontrole pri zaprimanju**: putem padajućeg izbornika odabire se vrsta kontrole (interna / nenormirana / normirana / službena), a putem pomoćnog odabira određuje se **Vrsta plana kontrole** među planovima definiranima u formi dostupnoj putem izbornika **Kvaliteta > Planovi kontrole**;  
**Kontrole pri zaprimanju nisu potrebne**: ako je aktivirano, označava da ulazne kontrole nisu potrebne.

#### Proizvodnja

U ovoj sekciji definiraju se informacije povezane s kontrolom kvalitete u proizvodnji:

**% tolerancije na proizvedenu količinu**: određuje dopušteno odstupanje proizvedene količine u plus ili minus;  
**Tehnička kartica**: u ovim poljima odabire se tehnička specifikacija i njezina vrsta, ako postoje za predmetni artikl;  
**Tehnička kartica nije obavezna**: aktivira se ako za materijal nije potrebna tehnička specifikacija.

#### Kvaliteta

U ovoj sekciji definira se vrijeme potrebno za provođenje preliminarnih kontrola kvalitete artikla:

**Analiza pripremnog vremena (Lead time)**: ako je aktivirano, označava da su za materijal potrebne kontrole kvalitete koje zahtijevaju određeni broj dana naveden u susjednom polju. To služi za određivanje nakon koliko dana od zaprimanja materijala on može biti korišten u proizvodnji ili, u slučaju gotovog proizvoda, nakon koliko dana od proizvodnje može biti otpremljen.

#### Postprodaja

U ovoj završnoj sekciji definira se eventualno jamstvo za materijal i broj dana trajanja jamstva aktiviranjem oznake **S jamstvom** te unosom broja dana jamstva u pripadajuće polje. Ako materijal nema jamstvo, oznaka ostaje neaktivna.

## 22. **Troškovi**

U ovoj kartici moguće je dodavati i upravljati troškovima povezanim s artiklom, primjerice raznim naknadama, troškovima zbrinjavanja otpada i slično.
Ti se troškovi prethodno definiraju u odgovarajućoj tablici **Troškovi**.
Zaslon se sastoji od mreže u koju se unose troškovi koje želimo povezati s artiklom.

**Vrsta**: putem padajućeg izbornika odabire se vrsta troška iz popisa prethodno definiranih troškova;  
**Opis**: polje se automatski popunjava nakon odabira vrste troška te prikazuje njegov opis;  
**Iznos**: u ovo polje ručno se unosi iznos troška u referentnoj valuti;  
**Datum**: određuje datum početka valjanosti troška za artikl;  
**Datum završetka**: omogućuje unos datuma završetka valjanosti troška za artikl.
Ako je potrebno dodati više vrsta troškova, dovoljno je prijeći u sljedeći red i ponoviti postupak unosa.

:::note Napomena
Troškovi uneseni u ovoj kartici prenose se u karticu *Sažeci* unutar narudžbi kupaca, u sekciju **Troškovi**.
:::

## 23. **Alternativne mjerne jedinice**

:::important[Čemu služi]
Kartica Alternativne mjerne jedinice u šifarniku artikala Fluentis pruža važnu funkcionalnost za upravljanje različitim mjernim jedinicama povezanim s pojedinim artiklom. U ovoj kartici moguće je definirati alternativnu mjernu jedinicu, korisnu za artikle kojima se može upravljati u više različitih mjernih jedinica.

Takav pristup pojednostavljuje procese nabave i skladišnog poslovanja jer različiti korisnici mogu koristiti mjernu jedinicu koja im više odgovara ili bolje odgovara njihovim operativnim potrebama.
Kartica sadrži sekciju za definiranje faktora konverzije između osnovne i alternativne mjerne jedinice, čime se omogućuje automatski izračun potrebnih količina.
Dostupne opcije uključuju postavke za određivanje je li mjerna jedinica zadana ili obvezna te definiranje prioritetnih mjernih jedinica koje će imati prednost tijekom rada u WMS modulu.
Korištenjem ovih funkcionalnosti poduzeća mogu učinkovitije upravljati zalihama i narudžbama te prilagoditi podatke o mjernim jedinicama svojim operativnim potrebama, uz bolju interoperabilnost s drugim sustavima, poput *Warehouse Management Systema* (WMS).
:::

U ovoj kartici definira se alternativna mjerna jedinica artikla, kada je to potrebno.
Artikl se može koristiti u obje mjerne jedinice, uz definiranje odnosa između njih.

**Mjerna jedinica** i **Opis**: ovdje se definira alternativna mjerna jedinica zajedno s njezinim opisom;  
**Faktor pretvorbe**: definira faktor pretvorbe između osnovne i alternativne mjerne jedinice; *alternativna količina* u dokumentima izračunava se prema postavkama definiranim u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters);  
**Zadano**: ako je aktivirano, označava zadanu mjernu jedinicu među onima definiranim za artikl;  
**Obvezno**: ako je aktivirano, faktor konverzije postaje nepromjenjiv. Kada se unese količina u osnovnoj mjernoj jedinici, sustav automatski izračunava alternativnu količinu i obratno. Aktiviranjem ove opcije oznaka **Prioritetno** postaje suvišna i automatski se deaktivira;  
**Prioritet**: ako je aktivirano, promjena *osnovne količine* ne mijenja *alternativnu količinu* jer ona ima prioritet. Ako se promijeni *alternativna količina*, sustav ponovno izračunava *osnovnu količinu* prema definiranom faktoru konverzije;  
**Zadani WMS**: ako je aktivirano, ova mjerna jedinica koristit će se kao zadana unutar WMS sustava.

## 24. **Varijante**

:::important[Čemu služi]
Kartica Varijante u šifarniku artikala Fluentis omogućuje unos i upravljanje varijantama pojedinog artikla. Ova funkcionalnost posebno je korisna kada je potrebno kreirati novi artikl koji se od postojećeg razlikuje samo u manjoj karakteristici.
U takvim slučajevima preporučuje se kreiranje varijante umjesto potpuno novog artikla, osobito kada osnovne karakteristike izvornog artikla ostaju nepromijenjene.
Primjer ove funkcionalnosti nalazi se u modnoj industriji: može postojati artikl „majica“, a zatim se za njega definiraju varijante po veličini i boji, dok sve osnovne karakteristike artikla ostaju iste.
Kartica se sastoji od dvije mreže. Prva sadrži podatke o varijantama kao što su šifra, opis, minimalna i maksimalna zaliha, točka naručivanja, dani zalihe, prosječni trošak i prodajna cijena. To su podaci koji razlikuju pojedinu varijantu od osnovnog artikla.
U drugoj mreži moguće je, ako postoji, definirati i specifični barkod za pojedinu varijantu.
Kartica Varijante predstavlja snažan alat za upravljanje manjim razlikama među sličnim artiklima te pojednostavljuje evidenciju i upravljanje zalihama.
:::

U ovoj kartici moguće je unositi i pregledavati varijante određenog artikla.
Ponekad je novi artikl koji treba kreirati vrlo sličan već postojećem artiklu te se razlikuje samo u jednoj manjoj karakteristici koja nema značajan utjecaj na podatke u ostalim karticama artikla. U tom slučaju nije potrebno kreirati novi artikl, već samo novu varijantu postojećeg artikla.
Primjer može biti modna industrija: definira se artikl *majica*, a zatim se kreiraju varijante prema veličini i boji, dok osnovne karakteristike artikla ostaju iste.
Kartica se sastoji od dvije mreže.
U prvoj mreži definiraju se varijante sa sljedećim podacima: šifra i opis, minimalna i maksimalna zaliha, točka naručivanja i pripadajući broj dana, broj dana zalihe, posljednji, prosječni i standardni trošak te prodajna cijena.
Podaci prikazani u ovoj mreži jedini su podaci koji razlikuju varijantu od osnovnog artikla. Za sve ostale informacije koriste se podaci definirani u ostalim karticama artikla.
U donjoj mreži moguće je, ako postoji, definirati i barkod specifičan za pojedinu varijantu.

## 25. **Ikonice**

U ovoj kartici moguće je povezati jedan ili više ikona s artiklima definiranim u šifarniku artikala.
Piktogrami se mogu koristiti za vizualni prikaz specifičnih karakteristika artikla, kao što su materijali, namjena, certifikati ili druga važna svojstva.
Posebno je korisna mogućnost označavanja simbola opasnosti u skladu s važećim propisima, čime se olakšava brzo prepoznavanje artikala koji zahtijevaju posebnu pažnju tijekom rukovanja, skladištenja i transporta.
Povezivanje ikona doprinosi boljoj vizualnoj komunikaciji sigurnosnih informacija te podržava ispravno upravljanje proizvodima unutar različitih poslovnih procesa.
Za dodavanje nove ikone dovoljno je kliknuti na prvi slobodan redak i odabrati ga iz tablice [Ikone](/docs/configurations/tables/general-settings/pictograms).
Također je moguće unijeti i posebnu napomenu povezanu s odabranom ikonom.