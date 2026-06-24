---
title: Novi artikal
sidebar_position: 1.1
---

**Uvod**: [Identifikacija proizvoda i pripadajućih komponenti](/docs/erp-home/registers/items/master-item-intro)

:::important Čemu služi
Šifarnik artikala u Fluentisu ima ključnu ulogu u upravljanju i organizaciji podataka o artiklima preduzeća. Predstavlja centralnu bazu podataka u kojoj se evidentiraju i ažuriraju informacije o svakom proizvodu, omogućavajući jasan i sistematičan pregled zaliha, troškova i skladišnih kretanja.

Podaci pohranjeni u šifarniku artikala uključuju identifikacione informacije kao što su šifra artikla, opis, jedinica mere i podaci o dobavljačima. Takođe je moguće evidentirati cene, pravila nabavke i upravljanje serijama, čime se olakšavaju svakodnevni procesi nabavke, prodaje i logistike.

Zahvaljujući ovom šifarniku, preduzeća mogu pratiti status artikala, automatizovati procese poput ponovnog naručivanja zaliha te izrađivati detaljne izveštaje za efikasnije planiranje nabavke. Integracija sa ostalim modulima Fluentisa omogućava bolju koordinaciju skladišnih aktivnosti, povećava operativnu efikasnost i doprinosi preciznijem upravljanju zalihama.
:::

Postupak kreiranja novog artikla pokreće se putem:

- **Početna > Artikli > Novi artikal**

ili

- **Početna > Artikli > Pretraga artikala**, klikom na dugme **Novo** na *ribbon* traci forme.

Otvara se forma **Šifarnik artikla - registar artikala**, koja se sastoji od gornjeg dela za definisanje *obaveznih karakteristika* artikla i donjeg dela sa karticama koje grupišu njegove *specifične karakteristike*.

## 1. **Zaglavlje**

Osnovni i obavezni podaci koje svaki artikal mora imati, a nalaze se u prvom delu forme, jesu: [**Klasa**](/docs/guide/common/glossary/glossary-intro#item-class) (najviše 3 znaka), [**Šifra**](/docs/guide/common/glossary/glossary-intro#item-code) (najviše 50 znakova), kratki **Opis** i [**Jedinica mere**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note Napomena
Kombinacija klase i šifre mora biti jedinstvena za svaki artikal.
:::

#### Neobavezna polja
- **Drugi opis**: dodatni opis koji se može dodeliti artiklu;
- **Glavna konfiguracija/Verzija**: polje za izbor verzije artikla.

Nakon definisanja svih obaveznih karakteristika moguće je uneti dodatne specifične podatke kroz kartice koje se nalaze u donjem delu prozora i koje su opisane u sledećim dokumentima.

#### Specifična dugmad

> **Ažuriranje prodajnih cena formulom**: omogućava ažuriranje prodajnih cena na osnovu definisanih formula i postojećih cenovnika;
> [**MRP parametri**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): otvara *MRP parametre* artikla, gde se definišu postavke potrebne za upravljanje artiklom u proizvodnji. Ovo dugme se pojavljuje i u drugim formama vezanim za proizvodnju.

## 2. **Opšte**

:::important Čemu služi
Kartica **Opšte** sadrži glavne i logističke informacije o artiklu, poput šifre, opisa, jedinice mere i drugih opcionih klasifikacija, uključujući robnu kategoriju i vrstu artikla.
Ova kartica omogućava definisanje dodatnih podataka korisnih za upravljanje i praćenje artikala unutar poslovnih procesa, kao i lakšu organizaciju podataka i izradu izveštaja.
:::

#### Specifična polja

**Datum unosa**: polje koje se automatski popunjava prilikom kreiranja artikla i označava datum kreiranja artikla;  
**Stopa PDV-a**: padajući meni putem kojeg se bira i dodeljuje stopa PDV-a za artikal; ovo polje ima prioritet nad stopom PDV-a koja je dodeljena kupcu/dobavljaču u šifarniku kontakata;  
**PDV nabavke/prodaje za poljoprivredni sektor**: koristi poseban način obračuna;  
**Karakteristika i Model**: dva opciona polja kojima se artiklu može dodeliti dodatna klasifikacija prema grupacijama definisanim unutar upravljanja proizvodima preduzeća;  
**Promet nabavke**: padajući meni povezan sa vrstom *Prometa nabavke* definisanom u tabeli knjigovodstvenih konta za knjiženje ulaznih računa;  
**Vrsta artikla**: opciona tabela u koju se može uneti dodatna klasifikacija artikla prema internim grupacijama;  
**Nomenklatura**: u ovom polju putem pomoći bira se nomenklatura (odnosno carinska oznaka artikla) potrebna za Intrastat izveštavanje, deklarisanje robe pri uvozu i izvozu, kao i statističko praćenje trgovine unutar EU;  
**Dani plaćanja za kvarljivu robu**: povezano sa članom 62; za kvarljivu robu račun mora biti izdat i plaćen u roku od 30/60 dana, u zavisnosti od vrste artikla. Kontrola se vrši i na artiklu i na vrsti plaćanja kako ne bi bilo moguće izdati račun sa datumom dospeća dužim od dozvoljenog;  
**Datum poslednje izmene**: označava datum poslednje izmene artikla;  
**Fiskalna kategorija**: putem ovog menija bira se poreska kategorija kojoj artikal pripada, a koristi se za poreske skladišne izveštaje i grupisanje inventure po poreskim kategorijama;  
**Kategorija proizvoda**: statistički podatak poput karakteristike, koji se koristi u određenim izveštajima;  
**Promet prodaje**: kao i kod prometa nabavke, ovaj meni služi za upravljanje prihodnim kontima prilikom prodaje artikla;  
**Vrsta artikla**: polje koje se koristi za dodelu posebnih karakteristika artiklu kako bi mogao da se koristi u određenim specifičnim procedurama. U meniju se nalazi lista različitih vrsta prirode artikla (kliknite za [pojmovnik](/docs/guide/common/glossary/glossary-intro#item-nature));

> **Oprema/Alat**: artikal ove vrste može se povezati sa šifarnikom mernih instrumenata i opreme koja se koristi u fazama radnih ciklusa;  
> **Mašina/Postrojenje**: ova vrsta može se povezati sa šifarnikom mašina;  
> **Porodica artikala**: definiše artikal kao porodicu artikala/proizvoda koja se koristi u prognozama prodaje;  
> **Ambalaža**: koristi se za upravljanje povratnom ambalažom i za knjigovodstveno praćenje količina ambalaže kod kupaca i dobavljača;  
> **Usluge**: koristi se za upravljanje postprodajnim intervencijama;  
> **Pozajmica / Komponenta postrojenja**: koriste se u procesima održavanja;

#### Dostupne opcije

**Kontrola kvaliteta**: ako je opcija uključena, pokreće se proces kontrole kvaliteta, što znači da će artikal biti uključen u tok upravljanja kvalitetom;  
**Fiktivan**: ako je uključena, označava da se artikal ne sme skladišno evidentirati;  
**Fiskalni interes**: ako je uključena, artikal će biti uključen u poreske skladišne izveštaje;  
**ABC**: u logističkom upravljanju zalihama ABC predstavlja metodu klasifikacije inventara koja deli artikle u tri grupe: A, B i C, gde A sadrži najvažnije artikle, a C najmanje važne. Ova metoda omogućava fokusiranje na mali broj ključnih proizvoda umesto na veliki broj manje značajnih. Ako preduzeće koristi ovu metodu, u ovom polju će se nalaziti oznaka kategorije kojoj artikal pripada;  
**U gašenju**: ako je opcija uključena, označava da je artikal u fazi povlačenja iz upotrebe.  

Uslovi za prikaz upozorenja da je artikal u gašenju u dokumentima, na primer u porudžbinama kupaca, jesu:
- u [Parametrima porudžbina kupaca](/docs/configurations/parameters/sales/sales-orders-parameters) mora biti uključena opcija **Provera artikala u gašenju**;  
- u šifarniku artikla mora biti uključena opcija **U gašenju**, a **Datum gašenja** mora biti manji ili jednak datumu porudžbine.

**Datum isteka**: označava datum od kojeg je artikal stavljen u status gašenja;  
**Izuzimanje iz obračuna raspoloživosti**: ako je opcija uključena, sistem neće proveravati raspoloživost artikla pre njegove upotrebe;  
**Arhivirano**: ako je opcija uključena, artikal se više neće prikazivati među dostupnim artiklima jer se smatra zastarelim;  
**Autorska prava**: ako je opcija uključena, označava da artikal podleže autorskim pravima odnosno *royalty* naknadama i biće uključen u [Upravljanje *royalty* naknadama](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/).

## 3. **Administracija**

Unutar ove kartice definišu se poslovni centri (centri troška) i eventualni profitni centar artikla kako bi se, prilikom korišćenja artikla u dokumentima, automatski preneli odabrani centri koji će se koristiti tokom knjiženja.

**Mreža poslovnih centara**: omogućava povezivanje šifarnika artikla sa jednim ili više poslovnih centara;

#### Polja tabele poslovnih centara

> **Broj**: označava broj reda;  
> **Centar troška**: omogućava izbor šifre centra troška;  
> **Opis**: prikazuje opis centra troška;  
> **Procenat**: označava procenat raspodele između različitih centara troška unetih u mrežu (ako postoji samo jedan centar, vrednost je 100%);  
> **Odeljenje**: omogućava povezivanje centra troška sa artiklom u odnosu na izabranu poslovnu *Diviziju*;  
> **Datum početka / Datum završetka važenja**: omogućavaju definisanje perioda važenja povezanosti;  
> **Dimenzija**: omogućava definisanje dimenzije poslovnog centra (za više informacija pogledati tabelu [Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));  
> **Kategorija troška**: omogućava definisanje kategorije poslovnog centra (za više informacija pogledati tabelu [Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)).

:::note[Napomena]
Ako je parametar *Upravljanje kontrolingom*, koji se nalazi u kartici *Ostala podešavanja* tabele [**Preduzeće**](/docs/configurations/tables/general-settings/company), isključen, ovo polje se koristi za unos centra troška.
:::

**Profitni centar**: samo ako je parametar *Upravljanje kontrolingom*, koji se nalazi u kartici *Ostala podešavanja* tabele **Preduzeće**, isključen, ovo polje će biti dostupno i služiće za unos profitnog centra.

## 4. **Nabavka**

:::important[Čemu služi]
Kartica Nabavka u šifarniku artikala Fluentisa omogućava definisanje svih parametara potrebnih za optimalno upravljanje zalihama artikla. U prvom delu postavljaju se opšti podaci poput minimalne i maksimalne zalihe, koji određuju granice unutar kojih se količine na skladištu treba održavati. Ostali parametri uključuju nedelje pokrivenosti, dane zalihe i tačku ponovnog naručivanja koja određuje kada je potrebno izvršiti novu narudžbinu.
Dodatno su dostupna podešavanja za štampače etiketa i vrste izveštaja etiketa, korisna za upravljanje serijama u različitim statusima (*Jedinstvena*, *Usaglašena*, *Postoji greška*, *Karantin*). U drugom delu moguće je definisati iste parametre za svako skladište u kojem se artikal nalazi, čime se omogućava precizno i prilagođeno upravljanje zalihama.
:::

U ovoj kartici definišu se svi podaci potrebni za nabavku predmetnog artikla.  
Prozor se sastoji iz dva dela:

a. U prvom delu postavljaju se podaci za opštu nabavku artikla, a ne za pojedinačno skladište:

**Minimalna zaliha i maksimalna zaliha**: predstavljaju minimalne količine koje uvek moraju biti dostupne na skladištu za taj artikal, kao i maksimalne količine koje se mogu držati na skladištu;  
**Dani zalihe**: predstavljaju broj dana potrebnih za nadoknadu najmanje minimalne zalihe definisane za artikal;  
**Nedelje pokrivenosti**: definiše vremenski period (izražen u nedeljama) tokom kojeg zaliha pokriva potrebe za tim artiklom;  
**Indeks pokrivenosti**: polje u koje se unosi procenat koji planer ili MRP može, ali ne mora, koristiti za obnovu zaliha. Ako je u MRP parametrima aktivirana opcija *Uzmi u obzir indeks pokrivenosti*, tokom planiranja postupak će koristiti procenat definisan u ovom polju kako bi obnovio raspoloživost artikla u količini potrebnoj za pokrivanje potreba tokom broja nedelja definisanih u polju **Nedelje pokrivenosti**;  
**Nivo zalihe za ponovno naručivanje**: ovde se definiše količina pri kojoj je potrebno pokrenuti novu narudžbinu za artikal;  
**Dani za ponovno naručivanje**: broj dana potreban za obnovu zalihe materijala na skladištu;  
**Interval pregleda tačke ponovnog naručivanja**: definiše koliko često je potrebno pregledati i ažurirati tačku ponovne narudžbine;  
**Poslednji datum obračuna tačke ponovnog naručivanja**: prikazuje datum poslednje analize tokom koje je određena prethodno navedena tačka ponovne narudžbine.

Postoje i dve dodatne sekcije:

- **Štampači za etikete**: omogućavaju izbor podrazumevanih štampača za štampanje etiketa serija prema različitim *statusima serije*; moguće je izabrati štampač za statuse *Jedinstvena*, *Usaglašena*, *Postoji greška* i *Karantin*.

- **Vrste etiketa**: omogućavaju definisanje podrazumevanih izveštaja za štampanje etiketa serija prema različitim *statusima serije*; moguće je koristiti različite izveštaje za statuse *Jedinstvena*, *Usaglašena*, *Postoji greška* i *Karantin*.

b. U drugom delu prozora definišu se skladišta u kojima se artikal nalazi te se po potrebi mogu postaviti neki od prethodno navedenih podataka (minimalna/maksimalna zaliha i dani zalihe, tačka ponovnog naručivanja i dani za ponovno naručivanje, štampanje etiketa za statuse jedinstvena/usaglašena/neusaglašena/karantin) za svako pojedinačno skladište. (Na primer, minimalna ili maksimalna zaliha tog artikla u određenom skladištu, kao i ostali navedeni podaci.)

## 5. **Kategorije rabata nabavke**

U ovoj kartici unose se **Kategorije rabata** prema kojima se artikal nabavlja. Te kategorije koristi **Upravljanje cenama** modula nabavke.

## 6. **Kategorije rabata prodaje**

U ovoj kartici unose se **Kategorije rabata** prema kojima se artikal prodaje. Te kategorije koristi **Upravljanje cenama** modula prodaje.

## 7. **Kupci**

U ovoj kartici moguće je povezati artikal sa spiskom kupaca koji su ga kupili.

**Vrsta uzorka**: padajući meni za definisanje podrazumevanog načina uzorkovanja iz proizvodnog naloga za taj artikal (na primer jedan uzorak na svakih 100 komada ili jedan uzorak na svaka 3 naloga i sl.). Vrste uzorkovanja prethodno se definišu u tabeli dostupnoj putem menija **Tabele > Logistika**.
**Gornja tabela**:  
**Kupac**: potrebno je navesti konto/podkonto i naziv kupca;  
**Ekonomska serija**: unosi se ekonomska serija (minimalna količina koju kupac može naručiti) zajedno sa pripadajućom jedinicom mere;  
**Artikal kupca**: u ovom delu moguće je uneti šifru i opis koje kupac koristi za artikal u sopstvenoj bazi podataka; unosom te reference ona će se automatski prikazivati u svim dokumentima za tog kupca i taj artikal;  
**Sektor primene**: ovde se navodi područje primene kod kupca;  
**Vrsta uzorka**: ovde se bira vrsta uzorkovanja artikla za konkretnog kupca, koja može biti različita od one izabrane u početnom meniju prozora;  
**Tehnička kartica**: ako za artikal već postoji tehnička specifikacija, u ovom delu prikazuju se podaci o dokumentu;  
**Završno ispitivanje**: u ovo polje unose se eventualni podaci o vrsti, godini, šifri i opisu završnog ispitivanja;  
**Varijanta**: u ovo polje unosi se eventualna varijanta artikla izborom iz padajućeg menija koji sadrži prethodno definisane varijante iz tabele **Varijante artikla**;  
**Napomene**: deo u koji se mogu uneti dodatne napomene.

Donja tabela može sadržati informacije o [Dodatnim podacima](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Specifični gumbi  
> **Unesi kupce**: omogućava unos novog kupca;  
> **Obriši kupca**: omogućava brisanje prethodno unetog zapisa kupca.

## 8. **Barkod**

U okviru ove kartice moguće je uneti alternativne šifre, odnosno barkodove koji predstavljaju artikal.  
Barkodovi su kodovi koji sadrže osnovne informacije o artiklu sa kojim su povezani i korisni su za skladišne operacije. Ovi kodovi se očitavaju pomoću posebnih uređaja, tzv. mobilnih terminala, korišćenjem laserskih zraka ili LED skenera.  
Barkodovi mogu biti različitih vrsta.  
Dve vrste koje sistem podržava su:

- EAN13 (što znači da barkod može imati najviše 13 znakova)  
- EAN128 (što znači da barkod mora imati paran broj cifara).

U **Fluentis ERP-u** ne postoje unapred definisani parametri koji određuju kako barkod mora biti postavljen da bi odgovarao standardima EAN13 i EAN128, ali je moguće primeniti prilagođene algoritme koji prate standard i proveravaju ispravnost unetog barkoda prema navedenim pravilima.
Forma se sastoji od mreže u koju se može uneti **Novi** barkod pomoću dugmeta **Unesi** na ribbon traci ili direktnim dodavanjem novog reda.
U polju **Vrsta barkoda** bira se vrsta barkoda putem odgovarajućeg menija, dok se u polje **Barkod** unosi sam kod.

:::note[Napomena]
Ako je u tabeli [Vrste barkodova](https://docs.fluentis.com/FluentisErp/docs/configurations/tables/general-settings/barcode-types/) aktivirana opcija **Izvoz za javnu upravu**, provera jedinstvenosti barkoda sprovodi se samo na nivou pojedinačnog artikla. Ako je opcija isključena, provera jedinstvenosti sprovodi se globalno za sve artikle.
:::

#### Specifični gumbi  
> **Provera**: pritiskom na ovo dugme sistem proverava da li kod odgovara pravilima o dužini definisanim za izabranu vrstu barkoda;  
> **Obriši barkod**: omogućava brisanje prethodno unetog barkoda.

## 9. **Pakovanje**

:::important[Čemu služi]
Kartica Pakovanje u šifarniku artikala Fluentisa ključna je za definisanje načina pakovanja artikla određivanjem vrsta jedinica tereta (UDC) koje ga čine. Ova konfiguracija može imati hijerarhijsku strukturu, gde na primer jedna paleta može sadržati više kutija, a svaka kutija određeni broj artikala.
Precizno definisanje pakovanja veoma je važno jer omogućava automatsko generisanje potrebnih jedinica tereta za otpremu prilikom pripreme narudžbine.
Dodatno je moguće povezati specifične jedinice mere za zapreminu, kao i definisati opis za kupca ili dobavljača, čime se omogućava prilagođeno upravljanje prema potrebama pojedinog poslovnog partnera. Ova kartica predstavlja važan alat za optimizaciju logistike i upravljanje skladištem.
:::

Putem ove kartice definiše se način pakovanja artikla određivanjem vrsta jedinica tereta koje ga čine. Struktura može biti hijerarhijska, jer je moguće definisati, na primer, paletu kao način pakovanja koja sadrži određeni broj kutija, a svaka kutija određeni broj artikala. Definisanje pakovanja omogućava sistemu automatsko kreiranje potrebnih jedinica tereta za otpremu prilikom pripreme narudžbine za isporuku.
Prozor se sastoji od mreže unutar koje se unose sledeće informacije:

**Vrsta jedinice tereta / Tip palete**: u ova polja unosi se vrsta jedinice tereta, odnosno vrsta ambalaže, kao i vrsta sadržaja izborom željene stavke iz odgovarajućeg padajućeg menija; podaci dostupni u menijima prethodno su definisani u tabeli [Vrste jedinica tereta/paleta](/docs/configurations/tables/logistics/loading-unit-types);
**Količina**: u ovom polju navodi se količina koju ta jedinica tereta može sadržati;
**Prioritet**: u ovom polju definiše se prioritet pakovanja (na primer, ako paleta sadrži kutije, potrebno je odrediti prioritet kako bi sistem znao redosled kreiranja jedinica tereta);
**Konto / Podkonto / Naziv kupca-dobavljača**: u ovom polju navodi se kupac ili dobavljač koji zahteva ovu vrstu jedinice tereta. Na taj način moguće je definisati različite jedinice tereta za pojedinačnog kupca;
**Jedinica mere dimenzija**: u ovom polju bira se jedinica mere za dimenzije jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrednost se automatski preuzima iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);
**Visina / Širina / Dubina**: u ovim poljima definišu se dimenzije kompletne jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrednosti se automatski preuzimaju iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types) samo ako opcija **Promenljiva zapremina** nije aktivna. U suprotnom, podaci se ne predlažu i operater ih mora ručno uneti zbog nemogućnosti predviđanja rasporeda artikala unutar izabrane jedinice tereta. Vrednosti se uvek mogu ručno izmeniti, a pri svakoj izmeni automatski se ponovo izračunava **Zapremina**;
**Jedinica mere zapremine**: u ovom polju definiše se jedinica mere zapremine jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrednost se automatski preuzima iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);
**Zapremina**: u ovom polju navodi se zapremina kompletne jedinice tereta. Ako je opcija **Promenljiva zapremina** aktivna, prilikom unosa **Vrste jedinice tereta** vrednost se izračunava sabiranjem zapremine prazne jedinice tereta iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types), zapremine artikla (preuzete iz polja *Zapremina* na kartici Težine/Dimenzije šifarnika artikla pomnožene sa količinom) i zapremine sadržanih jedinica tereta. Ako opcija **Promenljiva zapremina** nije aktivna, automatski se preuzima zapremina prazne jedinice tereta iz navedene tabele. U slučaju promene dimenzija **Visina / Širina / Dubina**, zapremina se ponovo izračunava. Zapremina se takođe ponovo izračunava pri promenama zapremine **Vrste sadržane jedinice tereta**. Vrednost je uvek moguće ručno izmeniti;
**Promenljiva zapremina**: označava da se radi o jedinici tereta sa promenljivom zapreminom, odnosno da ukupna zapremina zavisi od sadržaja i načina slaganja; reč je o polju samo za čitanje koje se definiše u tabeli [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);
**Jedinica mere težine**: u ovom polju definiše se jedinica mere težine jedinice tereta; prilikom unosa **Vrste jedinice tereta**, vrednost se automatski preuzima iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types);
**Težina**: u ovom polju navodi se ukupna težina jedinice tereta; pri unosu **Vrste jedinice tereta** i **Količine**, vrednost se izračunava sabiranjem težine prazne jedinice tereta iz tabele [Vrste jedinica tereta](/docs/configurations/tables/logistics/loading-unit-types) i težine artikala (preuzete iz polja *Bruto težina* na kartici Težine/Dimenzije šifarnika artikla pomnožene sa količinom) ili težine sadržanih jedinica tereta. Vrednost se uvek može ručno izmeniti;
**Tolerancija dimenzija / Tolerancija količine**: koriste se u prilagođavanjima sistema i služe pri kreiranju liste za preuzimanje utovarnih jedinica iz plana utovara sa raspoloživim jedinicama tereta na skladištu. Procedura bi trebalo da uključi jedinice tereta čije dimenzije ili količine odstupaju od definisanih vrednosti za navedeni procenat. Trenutno se standardno ne koriste;
**Obavezne dimenzije**: ako je aktivno, označava da su navedene dimenzije obavezne i da ne mogu odstupati;
**Obavezna jedinica za utovar**: ako je aktivno, označava da se artikal mora obavezno voditi putem jedinica tereta u proizvodnim prijavama i WMS prijemu robe;
**Opis vrste jedinice tereta / Opis vrste sadržane jedinice tereta**: nakon unosa vrste jedinice tereta i vrste sadržane jedinice tereta, u ovim poljima automatski se prikazuju opisi izabranih vrsta.

## 10. **Troškovi**

:::important[Čemu služi]
Na kartici Troškovi u šifarniku artikala Fluentis korisnici mogu evidentirati različite vrste troškova povezanih sa artiklom, uključujući poslednji trošak i ponderisani prosečni trošak, koji se automatski ažuriraju na osnovu skladišnih kretanja. Poslednji trošak predstavlja poslednju evidentiranu nabavnu cenu, dok je prosečni trošak rezultat skladišnih kretanja i koristi se za obračun vrednosti zaliha.
Kartica takođe omogućava definisanje standardnog troška, koji služi kao referentna vrednost tokom godine i obično se ažurira jednom godišnje. Pored toga, moguće je uneti prodajnu cenu koja predstavlja polaznu osnovu za kreiranje prodajnih cenovnika.
Ove informacije su ključne za vrednovanje skladišnih zaliha i finansijsko planiranje i doprinose efikasnijem upravljanju artiklima u skladištu.
:::

U okviru ove kartice unose se različiti troškovi povezani sa artiklom.

#### Specifična polja

**Poslednji trošak** i **Prosečni trošak**: pod poslednjim troškom podrazumeva se poslednja (najnovija) nabavna cena, dok ponderisani prosečni trošak predstavlja prosečnu cenu izračunatu na osnovu skladišnih kretanja. Za oba troška, skladišna knjižna oznaka mora imati aktivirane opcije *Ažuriranje prosečnog troška / poslednjeg troška*, *Ažuriraj trošak artikla* i *Fiskalni interes*, kako bi se odgovarajuća kretanja uključila u obračun troškova.
**Standardni trošak / Sledeći standardni trošak**: standardni trošak je trošak definisan ručno ili putem procedure obračuna troškova i predstavlja referentni trošak artikla tokom godine. Obično se ažurira na početku ili kraju godine. Za nabavne artikle uglavnom odgovara prosečnom trošku, dok se za ostale artikle izračunava procedurom [Obračun troška](/docs/controlling/cost-calculation/cost) iz oblasti *Controlling*, kao zbir troškova materijala i troškova proizvodnih operacija.
Svi navedeni troškovi mogu se koristiti za vrednovanje sastavnica proizvoda (BOM), skladišnih zaliha ili (za nabavne artikle) za vrednovanje proizvodnih naloga i pripadajućih skladišnih knjiženja prilikom prijema artikla iz proizvodnog naloga.
**Prodajna cena**: osnovna cena koja može poslužiti kao polazna osnova za kreiranje prodajnog cenovnika, na primer nacionalnog cenovnika. Ako za artikal ne postoji definisan cenovnik, dokumenti će koristiti ovu cenu (osim kod povrata robe, gde se prema podrazumevanim podešavanjima koristi vrednost poslednjeg troška, što je potrebno dodatno proveriti). Ovo polje se retko koristi.
**Kategorija rabata / Konfiguracija cenovnih razreda / Formule za ažuriranje politika rabata**: komercijalni podaci koji služe za ažuriranje cena. Formula ažuriranja koristi se u proceduri [Napredno kreiranje cenovnika](/docs/sales/sales-price-list/procedures/price-list-advanced).
**Bez komercijalnih uslova**: kada se artikal koristi u dokumentima, neće preuzimati cene ni rabate iz cenovnika u kojima se nalazi niti cenu iz šifarnika artikla, a za prodaju tog artikla neće se obračunavati provizije.

## 11. **Opisi artikla na jeziku**

Ova kartica omogućava unos **Opisa na jeziku** i **Opisa 2** artikla na različitim radnim jezicima koji se koriste u sistemu.

#### Specifična polja

**Jezik**: putem ovog menija bira se jezik koji se želi dodati; dostupni jezici prethodno su definisani u odgovarajućoj tabeli.
**Opis na jeziku**: u ovo polje ručno se unosi opis artikla na izabranom jeziku.
**Opis 2**: u ovo polje ručno se unosi sekundarni opis artikla na izabranom jeziku.

## 12. **Dodatni podaci**

Za više informacija pogledati dokumentaciju vezanu za [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Preferirani dobavljač**

:::important[Čemu služi]
Kartica Preferirani dobavljači unutar šifarnika artikala u Fluentisu predstavlja ključnu funkcionalnost za upravljanje nabavkom. Omogućava precizno definisanje preferiranih dobavljača za svaki artikal, čime se olakšava proces nabavke i obezbeđuje izbor najpogodnijih dobavljača.
Interfejs je podeljen na dva glavna dela. Prvi deo odnosi se na opšte informacije o dobavljačima, kao što je izbor podrazumevanog dobavljača koji postaje glavni kanal nabavke za dati artikal. Ovde korisnici mogu definisati i važne parametre poput maksimalne količine za naručivanje, tolerancije količina i cena, kao i podatke vezane za narudžbenice dobavljačima.
Drugi deo sadrži detaljnu mrežu u koju je moguće unositi specifične informacije za svakog dobavljača, kao što su vreme nabavke i dodatne napomene.
:::

U ovoj kartici moguće je definisati preferirane dobavljače za pojedinačni artikal i odrediti jednog podrazumevanog dobavljača kako bi sistem uvek predlagao naručivanje od istog dobavljača. Prozor se sastoji od dve celine:

### 1. Opšte informacije za sve preferirane dobavljače

Podaci definisani u ovom delu važe za sve preferirane dobavljače ukoliko su zajednički:
> - **Obavezan izveštaj dobavljača**: ako je aktivno, artikal se može nabavljati isključivo od podrazumevanog dobavljača navedenog u mreži drugog dela ekrana;
> - **Maksimalan broj stavki dokumenta**: najveći broj redova narudžbenice dobavljaču koji se može kreirati za određeni artikal/dobavljača dok je aktivna opcija **Blokiraj redove narudžbenice**;
> - **Jedinica mere nabavke**: definiše jedinicu mere za nabavku materijala;
> - **Maksimalna dobavljiva količina**: definiše najveću količinu koju je moguće naručiti od tog dobavljača za predmetni artikal;
> - **Blokiranje reda narudžbenice**: ako je aktivno, onemogućava unos novih redova narudžbenice dobavljaču;
> - **Datum blokade**: datum od kojeg blokada redova narudžbenice stupa na snagu;
> - **% tolerancije viška i manjka primljene količine**: definiše dozvoljeno odstupanje količine isporučene od strane dobavljača;
> - **% tolerancije prekoračenja cene**: definiše dozvoljeno odstupanje dobavljačke cene u odnosu na ugovorenu cenu;
> - **Dozvoli cenu 0**: ako je aktivno, omogućava izdavanje narudžbenica dobavljaču sa cenom 0 za predmetni artikal.

### 2. Mreža dobavljača

U drugom delu nalazi se mreža u kojoj se definišu podrazumevani i ostali dobavljači za nabavku artikla, kao i podaci specifični za svakog dobavljača:

> - **Dobavljač**: unosi se konto/podkonto i naziv dobavljača;
> - **Podrazumevano**: označava podrazumevanog dobavljača kada postoji više dobavljača;
> - **Ekonomski lot**: definiše minimalnu ekonomsku količinu i njene višekratnike. Ako se koristi samo minimalna količina, preporučuje se postaviti *višekratnik* na 1;
> - **Artikal dobavljača**: omogućava unos šifre i opisa koje dobavljač koristi za identifikaciju artikla;
> - **Vreme nabavke**: definiše vreme potrebno dobavljaču za proizvodnju ili nabavku artikla, vreme transporta i ukupno vreme potrebno za obnovu zaliha;
> - **Narudžbenica**: sadrži podatke vezane za narudžbenicu (JM, blokadu reda, datum blokade, maksimalan broj redova, maksimalnu količinu i tolerancije količine);
> - **Proizvođač**: unosi se konto i naziv proizvođača materijala;
> - **Poreklo**: označava poreklo robe, na primer zemlju porekla ili poreklo životinjskog ili biljnog materijala;
> - **Kontrole pri prijemu**: definišu eventualne kontrole koje je potrebno sprovesti prilikom prijema materijala pre njegove upotrebe;
> - **Varijante**: omogućavaju unos varijante artikla vezane za određenog dobavljača;
> - **Napomene**: prostor za dodatne napomene vezane za konkretnog dobavljača.

## 14. **Slike**

Ova kartica omogućava povezivanje slika sa artiklom.
Putem dugmeta **Dodaj sliku** moguće je umetnuti sliku unutar kartice.
Ova funkcionalnost se ne koristi često jer je u svakoj formi dostupna funkcija [**Priloži dokumente**](/docs/guide/common/common-buttons), koja omogućava dodavanje različitih vrsta dokumenata, uključujući i slike.

## 15. **Dobavljački cenovnici**

U ovoj kartici prikazuju se svi dobavljački cenovnici u kojima se artikal nalazi.
Mreža je dostupna samo za pregled (*read only*).

## 16. **Prodajni cenovnici**

U ovoj kartici prikazuju se svi kupčevi/prodajni cenovnici u kojima se artikal nalazi.
Mreža je dostupna samo za pregled (*read only*).

## 17. **Lotovi i serijski brojevi**

:::important[Čemu služi]
Kartica **Lotovi i serijski brojevi** u šifarniku artikala Fluentis omogućava detaljno upravljanje materijalima kroz dve varijante: upravljanje po lotovima i upravljanje pomoću serijskih brojeva.

Upravljanje lotovima omogućava organizaciju artikala u homogene grupe koje mogu biti nabavne ili proizvodne. Svaki lot identifikovan je jedinstvenom šifrom koja omogućava praćenje kretanja i zaliha, čak i u okruženju sa više skladišta. Unutar upravljanja lotovima moguće je definisati način izdavanja (FIFO, prema datumu isteka ili ručno) i odabrati vrstu šifre lota koja određuje način kodiranja. Ova funkcionalnost je posebno važna za osetljive proizvode kao što su prehrambeni i farmaceutski artikli.
Alternativno, upravljanje serijskim brojevima omogućava praćenje svakog pojedinačnog komada putem jedinstvenog serijskog broja. To je naročito korisno za artikle visoke vrednosti ili kritične proizvode kod kojih je potrebno precizno pratiti svaku jedinicu. Dostupne opcije uključuju način generisanja serijskog broja (ručno ili automatski), kao i vremensku validnost samog broja.
Ova kartica predstavlja ključni element za obezbeđivanje sledljivosti, usklađenosti sa propisima i efikasnog upravljanja zalihama, čime doprinosi optimizaciji logističkih procesa.
:::

Artikal se može voditi po lotovima ili po serijskim brojevima, a za svaku šifru artikla moguće je kreirati podgrupe koje se takođe mogu voditi po lotovima ili serijskim brojevima.
Lotovi predstavljaju grupe homogenih količina artikala koje ulaze u preduzeće (nabavni lotovi) ili se proizvode unutar preduzeća (proizvodni lotovi).
Svaki lot mora biti identifikovan jedinstvenom šifrom iz koje je moguće dobiti informacije koje ga karakterišu. Ovu šifru preduzeće može definisati u prozoru **Vrsta šifre lota**, dok je kod nabavnih lotova moguće koristiti i šifru lota dobavljača.
Lot mora biti sledljiv, a u slučaju više skladišta šifra lota mora omogućiti praćenje stanja zaliha po pojedinačnom skladištu.
U ovoj kartici definišu se parametri u zavisnosti od izabranog načina upravljanja artiklom, koji se aktivira putem oznaka **Upravljanje lotovima** i **Upravljanje serijskim brojevima**.

### Upravljanje lotovima

**Vrsta izdavanja**: određuje da li se koristi FIFO metoda, izdavanje prema datumu isteka ili ručni izbor lota od strane operatera;
**Vrsta šifre lota**: omogućava izbor vrste šifre lota (i pripadajućih karakteristika za njeno generisanje) definisane u prozoru *Vrsta šifre lota*, a koja se sastoji od kombinacije više polja;
**Početni status lota**: pojedini lot obično ima status koji definiše njegovu validnost. Za određene vrste materijala, naročito prehrambene i farmaceutske proizvode, status je obavezan (na primer, farmaceutski lot koji zahteva analize pre upotrebe može imati početni status *u karantinu* do završetka analiza). Za takve proizvode status se povezuje i sa datumom isteka kako bi se sprečila prodaja ili korišćenje robe kojoj je istekao rok trajanja. U zavisnosti od statusa lota moguće je odabrati upravljanje putem RFID-a ili jedinstvenog RFID-a;
**RFID upravljanje**: ako je aktivirano, artikal se prati pomoću RFID tehnologije (radiofrekventna identifikacija) putem aplikacije;
**Jedinstveni RFID**: ako je aktivirano, RFID kod povezan sa artiklom jedinstven je za taj artikal;
**Tip isteka lota**: omogućava izbor načina određivanja isteka lota (tačan datum isteka, poslednji dan meseca isteka ili prvi dan meseca isteka);
**Promena roka**: ako je aktivirano, omogućava ručnu izmenu datuma isteka lota;
**Predviđena blokada lota izražena u danima**: polja **Upozorenje blokade** i **Blokada** omogućavaju definisanje broja dana unapred za upozorenje na blokiranje lota i dana kada lot postaje blokiran;
**Lot za jednog dobavljača**: ako je aktivirano, označava da lot može sadržati samo artikle istog dobavljača.

Alternativno, artikal se može voditi putem **upravljanja serijskim brojevima**. U tom slučaju za svaki pojedinačni komad generiše se jedinstveni serijski broj koji omogućava njegovu identifikaciju i praćenje unutar sistema. Ovakav način upravljanja posebno je pogodan za artikle koji se smatraju *kritičnim* ili *visokovrednim*, kod kojih je potrebno pratiti svaki pojedinačni komad, a ne samo ukupnu količinu.

### Upravljanje serijskim brojevima

**Tip šifre serijskog broja**: omogućava izbor podrazumevane vrste iz tabele **Vrsta šifre serijskog broja**;
**Broj dana važenja serijskog broja**: određuje koliko dana će serijski broj biti važeći;
**Generisanje serijskog broja**: određuje način kreiranja serijskog broja, ručno ili automatski. Ako je postavljeno na automatsko, za sva skladišna kretanja sa uzrokom tipa *ulaz* i aktiviranom oznakom *Kreiraj serijski broj* (na samom uzroku), nakon unosa lota serijski brojevi biće automatski generisani.

## 18. **Napomene**

Ova kartica omogućava povezivanje slobodnih napomena sa artiklom.

## 19. **Matrice**

Ova kartica aktivira se samo ako je u zaglavlju artikla definirana [Konfiguracija](/docs/configurations/tables/CPQ/principal-configurations).
Koristi se kada je potrebno upravljati matricama za kombiniranje atributa artikla te omogućava definisanje svih mogućih kombinacija za određeni artikal.
Prvi korak je dodela jedinstvene vrednosti **Šifra** i izbor **[Definicije matrice](/docs/configurations/tables/CPQ/matrices-definition)** (koja sadrži skup atributa koji će činiti matricu). Na osnovu izabrane definicije, u karticama ispod biće moguće odabrati samo one [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) vrednosti koje su validne za tu matricu.
U sekciji *Dozvoljene vrednosti dimenzija* sledeći korak je izbor pojedinačnih Extra Data atributa putem padajućeg menija **Atribut**. Nakon izbora atributa, u mreži *Dostupni rezultati* prikazuju se njegove vrednosti (na primer, ako izaberemo atribut Veličina, prikazaće se vrednosti XS, S, M, L, XL itd.).
Vrednosti koje želimo učiniti dostupnim za matricu potrebno je premestiti u mrežu *Dozvoljene vrednosti*, čime određujemo koje će se vrednosti koristiti u kombinacijama matrice.
Nakon definisanja validnih vrednosti za svaki atribut, automatski se pojavljuju nove kartice – po jedna za svaku pomoćnu matricu i jedna kartica za kompletnu matricu koja objedinjuje sve pomoćne matrice i prikazuje sve moguće kombinacije.
U karticama generisanim za pomoćne matrice potrebno je označiti validne kombinacije vrednosti. Za svaku kombinaciju potrebno je uključiti oznaku samo ako je kombinacija dozvoljena.
U kartici *Kompletna matrica* generiše se jedinstvena matrica sa svim validnim kombinacijama definisanim u prethodnim karticama.
Tako definisana matrica može se koristiti u objektima za koje je konfigurisana.

## 20. **Težine / Dimenzije**

:::important[Čemu služi]
Kartica Težine i dimenzije u šifarniku artikala Fluentis ključna je za logističko upravljanje artiklima. U ovoj sekciji moguće je definisati dimenzije i težine artikala, čime se olakšavaju skladišne operacije i procesi nabavke. Sistem omogućava unos dimenzija (dužina, širina i visina) uz odabranu mernu jedinicu i automatski izračunava zapreminu.
Pored toga, moguće je definisati bruto, neto i specifičnu težinu, što su važni podaci za planiranje otpreme i upravljanje troškovima.
:::

#### Dimenzije artikla

U padajućem meniju korisnik može odabrati mernu jedinicu za dimenzije, a u poljima ispod uneti prvu, drugu i treću dimenziju te njihove vrednosti kako bi definisao visinu, širinu i dubinu artikla.

#### Zapremina

U padajućem meniju bira se merna jedinica zapremine, a u odgovarajuće polje unosi se vrednost zapremine.

#### Vrsta materijala

U padajućem meniju bira se vrsta materijala među unapred definisanim tipovima iz tabele **Tabele > Logistika > Vrste materijala**. Takođe je moguće definisati vrstu profila materijala zajedno sa pripadajućim dimenzijama.

#### Težina

U padajućem meniju bira se merna jedinica težine, a u poljima ispod unose se bruto težina, neto težina i specifična težina.
Bruto i neto težina prenose se u sve dokumente povezane sa artiklom.

#### Vrsta jedinice tereta (palete)

U padajućem meniju definiše se način pakovanja artikla (paleta, euro-paleta i sl.), a u polju ispod moguće je navesti broj artikala po jedinici tereta.
Na osnovu vrste jedinice tereta i broja artikala po jedinici tereta, prilikom kreiranja planova utovara sistem može automatski izračunati količine i ambalažu potrebnu za pripremu transporta.

Važno je napomenuti da se ove vrednosti koriste samo ako nisu definisane detaljnije vrednosti u kartici [Pakovanje](/docs/erp-home/registers/items/create-new-item).

#### Broj paketa

Ova sekcija služi za upravljanje brojem paketa u dokumentima. Moguće je definisati obračun na osnovu broja artikala po paketu ili broja paketa potrebnih za formiranje artikla, izborom odgovarajućeg parametra.
Nakon toga sistem će u dokumentima automatski izračunavati broj paketa.

## 21. **Kvalitet**

U ovoj kartici definišu se različite informacije potrebne za procese kontrole kvaliteta (ukoliko se koriste) za predmetni artikal.

#### Lokacije skladištenja

U ovoj sekciji definiše se mesto unutar skladišta na kojem će artikal biti uskladišten. Moguće je definisati:
**Vrsta lokacije**: određuje gde želimo smestiti artikal;
**Lokacija za jedan artikal**: ako je aktivirana, ova oznaka znači da se na toj lokaciji može nalaziti samo taj tip artikla. Nije moguće istovremeno skladištiti dva različita artikla na istoj lokaciji;
**Lokacija za jedan lot**: ako je aktivirana, ova oznaka znači da se na toj lokaciji može nalaziti ne samo jedan tip artikla, već i samo jedan lot tog artikla, odnosno nije moguće istovremeno skladištiti više lotova istog artikla.

#### Skladišna kretanja

U ovoj sekciji definišu se informacije korisne za skladišne evidencije artikla:
**Dozvoljeno ručno knjiženje ulaza**: ako je aktivirano, artikal se može ručno zaprimati u skladište;
**Blokada kretanja**: koristi se u prilagođavanjima za blokiranje snimanja ručne evidencije ako odgovarajuća vrednost (standardna ili stvarna vrednost artikla ili lota) premaši definisanu **Maksimalnu vrednost ulaza / Maksimalnu vrednost izlaza**. Ne koristi se u standardnoj verziji;
**Maksimalna vrednost ulaza / Maksimalna vrednost izlaza**: koriste se u prilagođavanjima (zajedno sa oznakom **Blokada kretanja**) kao referentne vrednosti za blokiranje snimanja ručne evidencije ako odgovarajuća vrednost premaši zadatu granicu. Ne koriste se u standardnoj verziji;
**Trošak za upotrebu**: u ovoj podsekciji definiše se da li će se artikal vrednovati prema stvarnom ili standardnom trošku.

#### Nabavka

U ovoj sekciji definiše se da li je prilikom prijema nabavljenog materijala potrebno sprovoditi ulazne kontrole:
**Kontrole pri prijemu**: putem padajućeg menija bira se vrsta kontrole (interna / nenormirana / normirana / službena), a putem pomoćnog izbora određuje se **Vrsta plana kontrole** među planovima definisanim u formi dostupnoj putem menija **Kvalitet > Planovi kontrole**;
**Kontrole pri prijemu nisu potrebne**: ako je aktivirano, označava da ulazne kontrole nisu potrebne.

#### Proizvodnja

U ovoj sekciji definišu se informacije povezane sa kontrolom kvaliteta u proizvodnji:
**% tolerancije proizvedene količine**: određuje dozvoljeno odstupanje proizvedene količine u plus ili minus;
**Tehnička kartica**: u ovim poljima bira se tehnička specifikacija i njena vrsta, ukoliko postoje za predmetni artikal;
**Tehnička kartica nije obavezna**: aktivira se ukoliko za materijal nije potrebna tehnička specifikacija.

#### Kvalitet

U ovoj sekciji definiše se vreme potrebno za sprovođenje preliminarnih kontrola kvaliteta artikla:

**Analiza pripremnog vremena (Lead time)**: ako je aktivirano, označava da su za materijal potrebne kontrole kvaliteta koje zahtevaju određeni broj dana naveden u susednom polju. To služi za određivanje nakon koliko dana od prijema materijala on može biti korišćen u proizvodnji ili, u slučaju gotovog proizvoda, nakon koliko dana od proizvodnje može biti otpremljen.

#### Postprodaja

U ovoj završnoj sekciji definiše se eventualna garancija za materijal i broj dana trajanja garancije aktiviranjem oznake **Sa garancijom** i unosom broja dana garancije u pripadajuće polje. Ako materijal nema garanciju, oznaka ostaje neaktivna.

## 22. **Troškovi**

U ovoj kartici moguće je dodavati i upravljati troškovima povezanim sa artiklom, na primer raznim naknadama, troškovima zbrinjavanja otpada i slično.
Ti troškovi prethodno se definišu u odgovarajućoj tabeli **Troškovi**.
Ekran se sastoji od mreže u koju se unose troškovi koje želimo povezati sa artiklom.
**Vrsta**: putem padajućeg menija bira se vrsta troška iz liste prethodno definisanih troškova;
**Opis**: polje se automatski popunjava nakon izbora vrste troška i prikazuje njegov opis;
**Iznos**: u ovo polje ručno se unosi iznos troška u referentnoj valuti;
**Datum**: određuje datum početka važenja troška za artikal;
**Datum završetka**: omogućava unos datuma završetka važenja troška za artikal.

Ako je potrebno dodati više vrsta troškova, dovoljno je preći u sledeći red i ponoviti postupak unosa.

:::note Napomena
Troškovi uneseni u ovoj kartici prenose se u karticu *Pregled* unutar narudžbina kupaca, u sekciju **Troškovi**.
:::

## 23. **Alternativne merne jedinice**

:::important[Čemu služi]
Kartica Alternativne merne jedinice u šifarniku artikala Fluentis pruža važnu funkcionalnost za upravljanje različitim mernim jedinicama povezanim sa pojedinačnim artiklom. U ovoj kartici moguće je definisati alternativnu mernu jedinicu, korisnu za artikle kojima se može upravljati u više različitih mernih jedinica.
Takav pristup pojednostavljuje procese nabavke i skladišnog poslovanja jer različiti korisnici mogu koristiti mernu jedinicu koja im više odgovara ili bolje odgovara njihovim operativnim potrebama.
Kartica sadrži sekciju za definisanje faktora konverzije između osnovne i alternativne merne jedinice, čime se omogućava automatski obračun potrebnih količina.
Dostupne opcije uključuju podešavanja za određivanje da li je merna jedinica podrazumevana ili obavezna, kao i definisanje prioritetnih mernih jedinica koje će imati prednost tokom rada u WMS modulu.

Korišćenjem ovih funkcionalnosti preduzeća mogu efikasnije upravljati zalihama i porudžbinama te prilagoditi podatke o mernim jedinicama svojim operativnim potrebama, uz bolju interoperabilnost sa drugim sistemima, poput *Warehouse Management System-a* (WMS).
:::

U ovoj kartici definiše se alternativna merna jedinica artikla, kada je to potrebno.

Artikal se može koristiti u obe merne jedinice, uz definisanje odnosa između njih.
**Merna jedinica** i **Opis**: ovde se definiše alternativna merna jedinica zajedno sa njenim opisom;
**Faktor konverzije**: definiše faktor konverzije između osnovne i alternativne merne jedinice; *alternativna količina* u dokumentima izračunava se prema podešavanjima definisanim u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters);
**Podrazumevano**: ako je aktivirano, označava podrazumevanu mernu jedinicu među onima definisanim za artikal;
**Obavezno**: ako je aktivirano, faktor konverzije postaje nepromenljiv. Kada se unese količina u osnovnoj mernoj jedinici, sistem automatski izračunava alternativnu količinu i obrnuto. Aktiviranjem ove opcije oznaka **Prioritetno** postaje suvišna i automatski se deaktivira;
**Prioritetno**: ako je aktivirano, promena *osnovne količine* ne menja *alternativnu količinu* jer ona ima prioritet. Ako se promeni *alternativna količina*, sistem ponovo izračunava *osnovnu količinu* prema definisanom faktoru konverzije;
**Podrazumevano za WMS**: ako je aktivirano, ova merna jedinica koristiće se kao podrazumevana unutar WMS sistema.

## 24. **Varijante**

:::important[Čemu služi]
Kartica Varijante u šifarniku artikala Fluentis omogućava unos i upravljanje varijantama pojedinačnog artikla. Ova funkcionalnost posebno je korisna kada je potrebno kreirati novi artikal koji se od postojećeg razlikuje samo po manjoj karakteristici.
U takvim slučajevima preporučuje se kreiranje varijante umesto potpuno novog artikla, naročito kada osnovne karakteristike izvornog artikla ostaju nepromenjene.
Primer ove funkcionalnosti nalazi se u modnoj industriji: može postojati artikal „majica“, a zatim se za njega definišu varijante po veličini i boji, dok sve osnovne karakteristike artikla ostaju iste.
Kartica se sastoji od dve mreže. Prva sadrži podatke o varijantama kao što su šifra, opis, minimalna i maksimalna zaliha, tačka naručivanja, dani zalihe, prosečan trošak i prodajna cena. To su podaci koji razlikuju pojedinačnu varijantu od osnovnog artikla.
U drugoj mreži moguće je, ukoliko postoji, definisati i specifičan barkod za pojedinačnu varijantu.
Kartica Varijante predstavlja snažan alat za upravljanje manjim razlikama među sličnim artiklima i pojednostavljuje evidenciju i upravljanje zalihama.
:::

U ovoj kartici moguće je unositi i pregledati varijante određenog artikla.
Ponekad je novi artikal koji treba kreirati veoma sličan već postojećem artiklu i razlikuje se samo po jednoj manjoj karakteristici koja nema značajan uticaj na podatke u ostalim karticama artikla. U tom slučaju nije potrebno kreirati novi artikal, već samo novu varijantu postojećeg artikla.
Primer može biti modna industrija: definiše se artikal *majica*, a zatim se kreiraju varijante prema veličini i boji, dok osnovne karakteristike artikla ostaju iste.
Kartica se sastoji od dve mreže.
U prvoj mreži definišu se varijante sa sledećim podacima: šifra i opis, minimalna i maksimalna zaliha, tačka naručivanja i pripadajući broj dana, broj dana zalihe, poslednji, prosečni i standardni trošak, kao i prodajna cena.
Podaci prikazani u ovoj mreži jedini su podaci koji razlikuju varijantu od osnovnog artikla. Za sve ostale informacije koriste se podaci definisani u ostalim karticama artikla.
U donjoj mreži moguće je, ukoliko postoji, definisati i barkod specifičan za pojedinačnu varijantu.

## 25. **Ikonice**

U ovoj kartici moguće je povezati jednu ili više ikonica sa artiklima definisanim u šifarniku artikala.
Piktogrami se mogu koristiti za vizuelni prikaz specifičnih karakteristika artikla, kao što su materijali, namena, sertifikati ili druga važna svojstva.
Posebno je korisna mogućnost označavanja simbola opasnosti u skladu sa važećim propisima, čime se olakšava brzo prepoznavanje artikala koji zahtevaju posebnu pažnju tokom rukovanja, skladištenja i transporta.
Povezivanje ikonica doprinosi boljoj vizuelnoj komunikaciji bezbednosnih informacija i podržava pravilno upravljanje proizvodima unutar različitih poslovnih procesa.
Za dodavanje nove ikonice dovoljno je kliknuti na prvi slobodan red i odabrati je iz tabele [Ikonice](/docs/configurations/tables/general-settings/pictograms).
Takođe je moguće uneti i posebnu napomenu povezanu sa odabranom ikonicom.