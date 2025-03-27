---
title: Šifarnik artikala
sidebar_position: 1
---

Postupak stvaranja novog artikla otvara se putem sljedećeg puta:
- **Početna stranica > Artikl > Stvaranje novog artikla**,

Ili 

- **Početna stranica > Artikli > Traži artikle** klikom na gumb **Novo** koji se nalazi na ribbon Bar za oblikovanje određene forme.

Otvorit će se obrazac **Šifarnik artikala** s odjeljkom u kojem ćete definirati *obavezne karakteristike* artikla i donjim odjeljkom s različitim Karticama koje grupiraju *specifične karakteristike*.

## 1. **Testata**

Osnovne i obavezne karakteristike koje svaki članak mora imati, a koje nalazimo u prvom dijelu obrasca, uključuju: [**Klasa**](/docs/guide/common/glossary/glossary-intro#item-class), [**Šifra**](/docs/guide/common/glossary/glossary-intro#item-code), kratak **Opis** i [**Jedinica mjere**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note BILJEŠKE 
Komplet razreda i koda mora biti jedinstven za taj određeni članak. 
:::
Druge karakteristike nisu obavezne:
- **Drugi opis**: drugi opis koji se može dodijeliti artiklu;
- **Konfiguracija/Verzija**: combo izbornik putem kojeg se odabire verzija artikla;

Nakon što su definirane sve obavezne značajke članka, nastavlja se s unosom specifičnijih značajki putem različitih kartica koje se nalaze u drugom dijelu prozora, a koje su obrađene u sljedećim dokumentima.

*Posebni gumbi*  

> **Ažuriranje LF LV s Formulom**: gumb koji omogućuje ažuriranje prodajnih cijena putem određenih formula, polazeći od cjenika;      
> [**Parametri MRP**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): gumb koji omogućuje pristup *MRP Parametrima* tog članka, gdje se definiraju parametri potrebni za upravljanje tim člankom u proizvodnji; ovaj gumb pronaći ćete i unutar drugih obrazaca koji se odnose na proizvodni dio.  

## 3. **Općenito**

Unutar ove Kartice moguće je definirati sljedeće opće podatke:

**Datum unosa**: polje koje se automatski popunjava prilikom stvaranja artikla i označava datum stvaranja artikla;

**Stopa PDV-a**: polje za odabir koje omogućuje odabir i unos stope PDV-a koja se odnosi na taj artikl; ovo polje ima prioritet u odnosu na stopu PDV-a koja je dodijeljena klijentu/dobavljaču u šifarniku kontakata;

**PDV na poljoprivredne kupnje / PDV na poljoprivredne prodaje**: koji imaju različitu metodu upravljanja;

**Značajka i Model**: dva su neobavezna polja u kojima se dodatno definira artikl prema raznim grupama koje se uspostavljaju unutar poslovanja s proizvodima; 

**Promet nabave**: izbornik koji je povezan s vrstom *Prometa kupnje* koja je definirana u tablici podračuna za knjiženje kupoprodajnih računa;

**Vrsta artikla**: ovo je opcionalna tablica u kojoj se može unijeti dodatan opis artikla na temelju drugih internih grupiranja;

**Nomenklatura**: u ovim poljima se putem pomoći bira nomenklatura (odnosno carinska tarifa artikla) koja je važna za Intrastat deklaraciju robe uvozom ili izvozom, kao i za statičke svrhe u trgovini artiklima unutar EU-a;

**Dani plaćanja za pokvarljivu robu**: povezano s člankom 62; za pokvarljivu robu račun treba biti izdan i plaćen unutar roka od 30/60 dana, ovisno o vrsti artikla.
U ovom slučaju, provjerava se kako na artiklu, tako i na vrsti plaćanja koja se unosi kako ne bi bilo moguće izdati račune s datumima dospijeća koji su duži od navedenog roka;
	
**Data posljednje izmjene**: označava datum posljednje izmjene artikla;

**Porezna kategorija**: putem ovog odabira možete odabrati poreznu kategoriju kojoj pripada artikl, a koristi se za fiskalna izvješća o zalihi kako biste mogli grupirati inventar po poreznoj kategoriji;

**Kategorija proizvoda**: podaci kao karakteristika, koristi se u određenim posebnim izvješćima; 

**Prihodi od prodaje**: kao i kod fakturiranja kupovine, ovaj odabir služi za upravljanje podračunima prihoda od prodaje za artikl; 

**Priroda artikla**: to je polje koje se koristi za definiranje članka i koristi se u nekim posebnim postupcima. U padajućem izborniku nalazi se popis različitih priroda koje možemo dodijeliti članku. (Kliknite za [rječnik](/docs/guide/common/glossary/glossary-intro#item-nature));

> **Oprema/Alat/Stroj**: grupa članaka posvećena proizvodnom dijelu;	   
> **Obitelj artikala**: definira artikl za prognoze prodaje;	   
> **Pakiranje**: koristi se za upravljanje povratnom ambalažom, za računovodstvo (da biste razumjeli koliko ambalaže imate na skladištu i koliko ste dali kupcu ili dobavljaču, kako biste shvatili koliko vam je potrebno vratiti);	   
> **Usluge**: za upravljanje intervencijama nakon prodaje;	   
> **Posudba/Razno/Komponenta postrojenja**: služe za upravljanje održavanjem;	  
**Artikl za set**: za upravljanje fiksnim artiklom koji se ne uzima u obzir prilikom određivanja dostupnosti na skladištu.

Na kraju, nalazimo niz flaga:	

**Kontrola kvalitete**: ako je ovaj flag aktivan, pokreće se proces kontrole kvalitete, što znači da će artikl biti uključen u tok kvalitete;

**Fiktivno**: ako je ovaj flag aktivan, koristi se kako bi se deklariralo da artikl ne smije biti kretan;

**Zatezna kamata**: ako je ovaj flag aktivan, koristi se za uključivanje artikla u porezne ispise skladišta;

**ABC**: za ABC u logističkom upravljanju zalihama podrazumijeva se metoda kategorizacije inventara koja uključuje podjelu artikala u tri klase, nazvane A, B i C, gdje A sadrži najvažnije artikle, a C manje važne artikle. To je metoda koja pomaže fokusirati pažnju na nekoliko bitnih proizvoda umjesto na mnogo proizvoda koji su manje važni. Ako tvrtka koristi ovu metodu, u ovom polju će biti slovo koje određuje kategoriju kojoj artikl pripada;

**U odlasku**: ako aktivan, ovaj flag označava da je artikl na izmaku zaliha.        
Uvjeti za dobivanje upozorenja da artikl nestaje u dokumentima, na primjer, u Narudžbama kupaca, su:

- u [parametrima Narudžbi kupaca](/docs/configurations/parameters/sales/sales-orders-parameters) mora biti postavljen flag "Provjeri zalihe artikala";             
- u šifarnik artikla mora biti postavljen flag "U odlasku" i, nadalje "Datum isteka" mora biti manji ili jednak datumu narudžbe.          

**Datum u isteku**: označava od kada je artikl u fazi isteka zaliha;

**Artikl bez izračuna dostupnosti**: ako je flag aktiviran, sustav neće uzeti u obzir dostupnost za korištenje artikla.;

**Arhivirano**: ako je zastava aktivirana, artikl se više neće pojavljivati na popisu artikala koje možete koristiti, jer je postao zastario;

Za više informacija o načinima unosa i odabira podataka unutar formi, pogledajte članak [Unos i odabir podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

## 3. **Administracija**  

Unutar ove Kartice unose se poslovni centri (troškovni centri) i eventualni profitni centar za artikl, tako da se pozivajući artikl u dokumentima prikazuje odabrani centar ili centri, koje se zatim koriste u fazi knjiženja.

**Tablica poslovnih centara**: omogućuje povezivanje artikla s jednim ili više poslovnih centara;   

Polja tablice poslovnih centara:
> **Broj**: označava broj reda;        
> **Troškovno mjesto**: omogućuje pozivanje koda troškovnog centra;         
> **Opis**: pokazuje opis;         
> **Postotak**: pokazuje postotak raspodjele među različitim centrima troškova unesenima u mrežu (ako je centar jedinstven, bit će 100%);            
> **Odjel**: omogućuje povezivanje povezanosti centra troškova s artiklom u vezi s odabranom poslovnom *Podjelom*;          
> **Datum početka / Datum završetka valjanosti**:omogućuje specificiranje veličine poslovnog centra (za dodatne pojedinosti pogledajte tablicu [Poslovnih Centara](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));             
> **Kategorija**: pomogućuje određivanje kategorije poslovnog centra (za dodatne pojedinosti pogledajte tablicu [Poslovnih Centara](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)).      

:::note BILJEŠKE 
Ako je opcija *Upravljanje kontrolingom*, prisutna u kartici *Dodatne postavke* u tablici [**Poduzeće**](/docs/configurations/tables/general-settings/company) isključena, ovo polje se koristi za unos centra troškova. 
:::

**Profitni centar**: samo ako je opcija  *Upravljanje kontrolingom*, prisutna u kartici *Dodatne postavke* u tablici **Poduzeće** isključena, bit će omogućeno i služit će za unos profitnog centra.

Za dodatne informacije o načinima unosa i upravljanja poslovnim / troškovnim centrima, pogledajte članak  
[Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers).

## 4. **Nabava**

U ovoj Kartici definiraju se svi podaci potrebni za nabavu predmetnog članka.

Prozor se sastoji od dvije dijelove: 

1. U prvom dijelu postavljaju se podaci za opskrbu općenito za artikl, a ne za pojedini skladište:

**Minimalna zaliha i maksimalna zaliha**: predstavlja minimalne količine koje uvijek moraju biti prisutne u skladištu za taj artikl i maksimalne količine koje se mogu čuvati u skladištu;

**Dani zalihe**: dani potrebni za popunjavanje minimalnih zaliha koje su određene za taj artikl;

**Tjedni pokrivanja**: označava vremenski interval (izračunat u tjednima) tijekom kojeg zaloga pokriva potrebu za tim artiklom;

**Indeks pokrivenosti**: ovo je polje koje se može uređivati, a unosi se postotak koji se može ili ne mora uzeti u obzir od strane planera ili MRP-a za obnavljanje zaliha.

Ako se u parametrima MRP postavi flag *Uzmi u obzir indeks pokrivanja* u trenutku planiranja, postupak će uzeti u obzir postotak naveden u ovom polju kako bi obnovio dostupnost artikla za količinu koja će pokriti potrebu n broj tjedana koje ste odlučili navesti u polju **Tjedni pokrivanja**;

**Točka za ponovno naručivanje**: ovdje se označava kod kojeg se iznosa potrebno naručiti ponovo taj artikl;

**Dani za ponovno naručivanje**: dani potrebni za obnovu materijala na skladištu;

**Vremenski interval pregleda točke ponovnog naručivanja**: naznačava se svaki koliko vremena se treba pregledati i ažurirati bod ponovnog naručivanja;

**Zadnji datum izračuna točke ponovnog naručivanja**: naznačen je datum posljednjeg izračuna kada je provedena analiza i kada je postavljena točka naručivanja gore navede;

Nakon toga postoje dvije sekcije nazvane:

- **Pisači za etikete**: omogućuje odabir zadanih pisača za ispis etiketa lotova za različite  *Lot Status-e*; tako će biti moguće odabrati pisač za Lot Status-e *Jedinstveno*, *Suglasno*, *Nesuglasno*, e *Karantena*.

- **Vrsta etikete**: omogućuje određivanje zadanih izvještaja za ispis za lotove u različitim Statusima lotova; stoga će biti moguće odabrati različite izvještaje ovisno o statusu lota  *Jedinstveno*, *Suglasno*, *Nesuglasno*, e *Karantena*.

2. U drugom dijelu prozora, pak, navode se različiti skladišta u kojima se može pronaći artikl, a po potrebi je moguće odrediti neke od prethodno navedenih podataka (minimalna/maksimalna zaliha i dani za zalihu, točka ponovnog naručivanja i dani za ponovno naručivanje, ispis etikete za jedinstveni/suglasni/nesuglasni/karantinski status) za svako pojedinačno skladište. (npr. minimalna ili maksimalna zaliha koju možete imati za taj artikl u određenom skladištu, i tako dalje za ostale informacije).

## 5.Kategorija popusta na nabavu**

U ovoj kartici unose se **Kategorije popusta** s kojima se kupuje proizvod. Ove kategorije koriste se u **Upravljanju cijenama** modula kupnje.

## 6. Kategorija popusta na prodaju**

U ovoj kartici unose se **Kategorije popusta** prema kojima se prodaje artikl. Ove kategorije koristi **Upravljanje cijenama** iz modula prodaje.

## 7. **Klijenti**

U ovoj Kartici moguće je povezati popis klijenata koji su kupili ovaj proizvod.

**Tip uzorkovanja**: combo za definiranje zadane metode uzimanja uzoraka s proizvodnog naloga za taj artikl (na primjer, jedan uzorak svakih 100 komada ili 1 uzorak svakih 3 naloga itd.). Tipovi uzimanja uzoraka prethodno su kodirani unutar tablice u putanji **Tablice > Logistika**;

Gornja mreža:

**Kupac**: potrebno je navesti klijenta, konto/podkonto i opis;

**Ekonomski lot**: treba navesti ekonomski lot (minimalna količina koju kupac može kupiti) s odgovarajućom jedinicom mjere;

**Artikl kupca**: u ovom odjeljku možete navesti šifru i opis koji kupac dodjeljuje artiklu unutar svoje baze podataka; navođenjem njihove reference u ovom odjeljku, ista će biti navedena u svim dokumentima vezanim uz tog kupca za taj artikl;

**Sektorsko korištenje**: ovdje je naznačen sektor upotrebe klijenta;

**Vrsta uzorka**: u ovom slučaju odabire se vrsta uzorkovanja artikla prema klijentu s kojim je povezan, što može biti drugačije od one odabrane u početnoj kombinaciji prozora; 

**Tehnička kartica**: u slučaju da već postoji tehnički list za ovaj artikl, u ovoj sekciji se navode detalji dokumenta;

**Završno ispitivanje**: u ovom polju unesite eventualne informacije o vrsti, godini, kodu i opisu konačne provjere;

**Varijanta**: u ovom polju unesite eventualnu varijantu tog artikla, odabirom iz kombo okvira koji sadrži varijante prethodno kodirane u tablici **Varijante Artikla**;

**Napomene**: odjeljak u kojem možete unijeti eventualne napomene.

Donja mreža može sadržavati informacije o [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata).

*Posebni gumbi*: 
> **Unesi kupce**: omogućuje unos novog klijenta;    
> **Novi povlašteni kupac**:     
> **Izbriši kupca**: omogućuje brisanje unesenog klijenta.

## 8. **Barkodovi**

U ovoj Kartici možete unijeti eventualne alternativne kodove, poznate i kao barkodovi, koji predstavljaju artikl.

Barkodovi su trake s kodom koji sadrže neke od osnovnih informacija o kodiranju povezane s artiklom kojem su dodijeljeni i korisni su za operacije u skladištu. Ovi se kodovi čitaju putem određenih uređaja poznatih kao mobilni uređaji pomoću laserskih zraka ili LED traka. 

Bar kodovi mogu biti različitih vrsta. 
Dvije vrste kojima upravlja baza podataka su:
- EAN13 (označava da maksimalna duljina barkoda može biti 13 znakova)   
- EAN128 (označava da barkod mora imati paran broj znakova)

U **Fluentis ERP** nisu unaprijed definirani parametri koji ukazuju kako postaviti barkod kodiranje da bi se poštovali standardi EAN13 i 128, ali mogu se primijeniti prilagođeni algoritmi koji slijede standarde i provjeravaju uneseni barkod kako bi se osiguralo da poštuje navedene norme.

Obrazac se sastoji od mreže unutar koje se unosi **Novi** barkod putem gumba **Umetni** koji se nalazi na ribbor bar, ili izravno na novi redak.

U polju **Tip barkoda** odabire se, putem odgovarajuće kombinacije, vrsta barkoda koju želite kodirati, a u polje **Barkod** unosi se kod barkoda.

![](/img/it-it/erp-home/registers/items/create-new-items/item-registry/barcode/barcode_01.png)

*Posebni gumbi*:

> **Provjera**: pritiskom na ovaj gumb, sustav će provjeriti odgovara li kod navedenim pravilima o duljini koju kod treba imati prema vrsti koju unosimo;  
> **Izbriši barkodove**: omogućuje brisanje prethodno unesenih barkodova.

## 9. **Pakiranje**

Putem ove Kartice definiramo način pakiranja artikla određujući koji su tipovi JZU (Jedinice za utovar) uključeni.

Može biti strukturiran kao stablo, na primjer, možemo odrediti paletu kao način pakiranja, koja može sadržavati određeni broj kutija, a svaka od njih može sadržavati određeni broj artikala.

Definiranje pakiranja omogućuje sustavu stvaranje potrebnih  JZU ova za otpremu u trenutku kada moramo pripremiti narudžbu za dostavu;

Na prozoru se nalazi mreža unutar koje se unose sljedeće informacije:

**Tip JZU /Tip JZU sadržaj**: u ova polja unosimo vrstu JZU, odnosno vrstu pakiranja, te vrstu sadržaja odabirom odgovarajućeg unosa iz pripadajućeg padajućeg izbornika; podaci unutar ovih padajućih izbornika prethodno su definirani u pripadajućoj tablici (Konfiguracija > Tablice > Logistika);

**Količina**: u ovom polju se navodi količina za određenu JZU;

**Prioritet**: u ovom polju se navodi prioritet pakiranja (na primjer, ako imamo paletu unutar koje imamo kutije, trebat će odrediti prioritet kako bi sustav pri stvaranju JZU ova već znao redoslijed pakiranja);

**Konto/Detaljni konto**: u ta polja unesite račun i podračun klijenta/dobavljača;

**Dimenzija jedinice mjere**: ovom polju odabire se Jedinica mjere (JM) za JZU;

**Visina/Širina/Dubina**: u ovim poljima se specificiraju dimenzije pakiranja;

**Opis tipa JZU/ Opis tipa JZU sadržaja/Opis klijenta/dobavljača**: u ovim poljima, nakon što unesete vrstu JZU, vrstu JZU sadržaja i klijenta/ponuđača računa/podračuna, automatski će se prikazati opisi odabranih vrsta;

**Jedinica mjere volumena**: u ovom polju ćemo navesti jedinicu mjere za volumen;

**Tolerancija dimenzija/Tolerancija količine**: koriste se u prilagodbama i potrebni su kada se iz plana utovara stvara popis JZU-a s dostupnim JZU -ima na skladištu. Postupak bi trebao dodati na popis JZU-a JZU s dimenzijama ili količinama koje se razlikuju od onih navedenih u pakiranju za određeni postotak. Nisu korišteni kao standard;

**Obavezne dimenzije**: ako je ova opcija aktivna, flag označava da su navedene dimenzije obavezne;

**Obvezna utovarna jedinica**: ako je ova opcija aktivna, flag označava da se ovaj artikl mora obavezno upravljati putem jedinice za utovar u proizvodnim izjavama.

## 10. **Troškovi**

Unutar ove Kartice unose se različiti troškovi povezani s artiklom. 

Ovo su polja koja se mogu uređivati i u kojima će se definirati:

**Zadnji trošak** i **Prosječni trošak**: pod pojmom Zadnja cijena misli se na posljednju cijenu kupnje (najnoviju), dok se pod pojmom Prosječni trošak ponderiran misli na prosječnu cijenu koja proizlazi iz zaliha skladišta. Za oba troška, uzrok koji se koristi za promet u skladištu mora imati označenu zastavu za ažuriranje *Prosječnog troška/Cijene zadnjeg ulaza*, kao i flag *Ažuriraj cijenu artikla*. 

**Standardni trošak/ Sljedeća standardna cijena**: standardna cijena je trošak koji se postavlja ručno ili putem postupka obračuna troškova i označava referentni trošak za određeni artikl koji se koristi tijekom godine. Obično je trošak koji se ažurira na početku ili kraju godine. Za artikle koji se kupuju obično odgovara srednjem trošku, dok se za ostale artikle izračunava postupkom [Izračuna troškova](/docs/controlling/cost-calculation/cost) koji se nalazi u području *kontroling*, kao zbroj troškova materijala i troškova faza proizvodnje.

Ovi troškovi mogu se koristiti za vrednovanje osnovne specifikacije, zaliha u skladištu ili (za kupljene artikle) za vrednovanje radnih naloga (i povezanih unosa u skladište) prilikom evidentiranja artikla radnog naloga u skladište.

**Prodajna cijena**: osnovna cijena koja se može koristiti za stvaranje cjenika u slučaju da se razmatra početni nacionalni cjenik. Ako nema cjenika za ovaj artikl, artikl će koristiti ovu cijenu u dokumentima (osim kod dokumenata povrata gdje artikl zadano preuzima cijenu naznačenu kao posljednju cijenu, što treba pažljivo provjeriti) (ne koristi se često).

**Kategorija popusta/ Konfiguracija raspona cijena /Formula za ažuriranje politike popusta**: Ovo su podaci čisto komercijalne prirode koji služe za ažuriranje cijena.

Koristit će se u dokumentima, ali nikada neće prikazivati popuste iz listina u kojima je sadržan, i neće se računati provizije na prodaji ovog artikla.

## 11. **Jezik za opis predmeta**

Ova kartica omogućuje unos **Opisa na jeziku** i drugog **Opisa 2** članka na različitim radnim jezicima koji se koriste.

Na prozoru se nalazi mreža gdje se unose sljedeće informacije:

**Jezik**: pomoću ovog izbornika odabirete jezik koji želite dodati; jezici među kojima možete odabrati već su prethodno kodirani u odgovarajućoj tablici;

**Jezik opisa**: u ovom polju ručno ćete unijeti opis artikla na odabranom jeziku;

**Opis 2**: u ovom polju ručno ćete unijeti dodatni opis artikla na odabranom jeziku.

## 12. **Dodatni podaci**

Obratite se na dokumentaciju vezanu uz [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Preferencijalni dobavljači**

U ovoj Kartici možete definirati pojedinačne preferirane dobavljače za svaki proizvod, navodeći zadani dobavljač kako biste sustavu omogućili uvijek naručivanje od istog dobavljača.

Prozor se sastoji od dvije sekcije:

1. U prvom dijelu navode se informacije o svim preferiranim dobavljačima, u slučaju kada su ove informacije općenite, kao što su:

**Maksimalni broj ispitnih linija**: ako je ovaj flag aktiviran, to znači da se ovaj proizvod može nabaviti samo od zadanih dobavljača koji će biti navedeni u mreži u drugom dijelu ekrana;

**Numero massimo righe di prova**: ako je ovaj flag aktiviran, to znači da se ovaj proizvod može nabaviti samo od zadanih dobavljača koji će biti navedeni u mreži u drugom dijelu ekrana;

**Jedinica mjere za nabavu**: u ovom polju navodi se jedinica mjere za nabavu tog materijala;

**Maksimalna dobavljiva vrijednost**: u ovom polju označava se maksimalna količina koja se može naručiti od tog dobavljača za taj artikl;

**Blokiranje linije narudžbe**: ako je aktivno, ovaj flag označava da se želi blokirati mogućnost unosa novih redova narudžbi od dobavljača;

**Datum blokiranja**: označava datum kada se aktivira blokada redova narudžbi od dobavljača;

**% tolerancija na količinu primljenu u višku i manjku**: u ovim dvama poljima navodi se postotak tolerancije na količinu koju dobavljač isporučuje više ili manje za taj materijal;

**% tolerancija na količinu primljenu u višku i manjku**: u ovim dvama poljima navodi se postotak tolerancije na cijenu dobavljača u višku i manjku u odnosu na utvrđenu cijenu;

**Dopusti cijenu nula**: ako je aktivno, ovaj flag omogućuje izdavanje narudžbi dobavljača s cijenom nula za taj artikl.

2. U drugom dijelu prozora nalazi se mreža u kojoj će se označiti zadani dobavljač i eventualni drugi dobavljači koji se koriste za kupnju artikla i pripadni podaci za svakog dobavljača:

**Dobavljač**: označit će se račun/podračun i opis dobavljača;

**Zadano**: ovaj flag, ako je aktivan, označava zadani dobavljač u slučaju više dobavljača;

**Ekonomski lot**: u ovoj sekciji ćete navesti za svakog dobavljača minimalnu ekonomsku količinu i njene višekratnike;

**Artikl dobavljača**: u ovom dijelu možete dodati šifru i opis koji dobavljač koristi za identifikaciju artikla;

**Vrijeme nabave**: ovo će se naznačiti za svakog dobavljača: upravljanje, odnosno vrijeme potrebno dobavljaču za reprodukciju/nabavu tog predmeta, isporuka, odnosno vrijeme potrebno za dostavu materijala od dobavljača, ukupno vrijeme, što je zbroj prethodna dva podatka koji označava ukupno vrijeme potrebno za ponovno snabdijevanje zaliha materijala;

**Narudžbenica**: u ovoj sekciji navode se informacije za svakog pojedinog dobavljača koje se odnose na narudžbe već navedene (Jedinica mjere, blokada retka, datum blokade, maksimalni broj redova, maksimalna vrijednost, % tolerancije količine primljene u višku/nedostatku);

**Proizvođač**: u ovoj sekciji ćete navesti račun i opis proizvođača materijala;

**Kontrole prihvaćanja**: unutar ovog polja navode se eventualne provjere koje je potrebno provesti prilikom prihvata materijala prije nego što ga se može koristiti;

**Varijanta**: u ovo polje unosi se eventualna varijanta tog artikla, odabirom iz kombinacije koja sadrži varijante prethodno kodirane u tabeli **Varijante Artikla**;

**Napomene**: u ovom odjeljku moguće je unijeti eventualne napomene vezane uz navedenog dobavljača.

## 14. **Slike**

Ova Kartica omogućuje povezivanje slike s artiklom.

Pomoću gumba **Dodaj sliku** moguće je unijeti sliku unutar ove kartica.

Ova procedura nije često korištena jer u svakom obrascu postoji funkcija [**Priloži dokumente**](/docs/guide/common/common-buttons#document-manager) koja omogućuje prilaganje različitih vrsta dokumenata, uključujući i slike.

## 15. **Cjenik dobavljača**

U ovoj Kartici navedeni su svi dobavljački cjenici u kojima je proizvod prisutan. Mreža je samo za čitanje.

## 16. **Prodajni cjenici**

U ovoj Kartici prikazuju se svi cjenici za kupce u kojima je proizvod prisutan. Mreža je samo read only. 

## 17. **Lotovi i serijski broj**

Artikl se može upravljati u Lotovima ili prema Serijskim Brojevima, a od svakog koda artikla mogu se stvoriti podgrupe koje se također mogu upravljati u lotovima ili prema serijskim brojevima.

Lotovi su skupine homogenih količina artikala koje ulaze u tvrtku (kupovni lotovi) ili se proizvode u samoj tvrtki (proizvodni lotovi).

Svaki lot mora imati jedinstvenu oznaku iz koje se dobivaju određene informacije koje karakteriziraju sam lot. Ovu oznaku tvrtka može definirati u prozoru **Vrsta šifre lota** ili, u slučaju kupovnih lotova, može odlučiti zadržati istu oznaku lota kao i dobavljač.

Svaki lot mora biti moguće pratiti, a u slučaju više skladišta, pomoću oznake lota trebalo bi biti moguće pratiti podatke o zalihama za svako pojedino skladište.

Unutar ove kartice, definirat će se parametri ovisno o vrsti upravljanja koju ćete odabrati za određeni proizvod i koja će se primjenjivati putem odgovarajućih flaga koje se nalaze na početku ove kartice  **Upravljano serijama** - **Upravljano serijskim brojevima**.

### Upravlajnje lotovima 

**Vrsta preuzimanja lota**: ako picking, prema datumu isteka ili ručno;

**Vrsta šifre lota**: u ovom slučaju odabire se vrsta koda lota (i povezane karakteristike postavljene za njegovo kreiranje) koju ste definirali u prozoru *Vrsta koda lota*, a koja proizlazi iz konkatenacije više polja.  

**Početni status lota**: obično je svaki pojedinačni lot karakteriziran određenim stanjem koje određuje njegovu valjanost. Za određene vrste materijala, kao što su prehrambeni i farmaceutski proizvodi, stanje je obavezno (npr. u farmaceutskom sektoru, lot koji zahtijeva analizu prije upotrebe bit će u početnom stanju 'karantene' dok se analize ne dovrše); za ove vrste proizvoda stanje će biti popraćeno datumom isteka kako bi se spriječila prodaja i uporaba isteklih proizvoda. Na temelju stanja lota, može se odabrati da se upravlja putem Rfid-a ili jedinstvenog Rfid-a;

**Upravljano RFid-om**: ako je aktivirano, artikl će se upravljati putem tehnologije RFID-a (radiofrekvencija) pomoću aplikacije;   

**Fluentis Mobile**: ova tehnologija se temelji na pohrani podataka pomoću posebnih oznaka koje služe za identifikaciju informacija o artiklima. Pomoću mobilnog uređaja, ove oznake se mogu daljinski upitati putem radiofrekvencijske tehnologije;   

**Jedinstveni RFID**: ako aktiviran, RFID kod povezan s artiklom je jedinstven za taj artikl;   

**Tipovi roka trajanja lota**: odaberite vrstu roka trajanja koju želite dodijeliti lotu (datum isteka, zadnji dan mjeseca isteka, prvi dan mjeseca isteka);   

**Ažuriranje datuma isteka lota**: ako je aktivirano, omogućuje ručno mijenjanje datuma isteka lota;

**Unaprijed blokirajte lot izraženo u danima**: dva polja, **Upozorenje na blokadu** i **Blokada** omogućuju izražavanje u danima, kada upozoriti da će taj lot biti blokiran i odrediti dan blokade lota;

**Loto jednog dobavljača**: ako je aktivirano, označava da će taj lot sadržavati samo artikle od istog dobavljača.; 

Može se alternativno odabrati upravljanje artiklom putem **Serijskog broja**. U ovom slučaju, za svaki komad se stvara jedinstveni serijski broj koji jednoznačno identificira taj komad unutar strukture kako bi se pratila njegova putanja. Ovaj tip upravljanja posebno je pogodan za artikle koji se smatraju *kritičnima* ili *visokovrijednima*, za koje je potrebno pratiti svaki pojedini komad, a ne cjelokupnu količinu.

### Upravljanje serijskim brojem

**Tip koda serijskog broja**: odabrati prema predefiniranom tipu u tablici **Tip šifre serijskog broja**;  

**Dani važenja serijskog broja**: označava koliko dana će ovaj kod biti važeći;  

**Generacija serijskog broja**: za postavljanje načina stvaranja serijskog broja, bilo ručno ili automatski;  

**Upravljanje bojom i količinom**: polje koje je usko povezano s modnom industrijom.  


## 18. **Napomene**

Ova je Kartica namijenjena povezivanju slobodnih napomena s artiklom.

## 19. **Matrici**

Questo tab si attiva solo se è stata impostata una [Configurazione](/docs/configurations/tables/CPQ/principal-configurations) nella testata dell'Articolo.           
Viene gestito nel caso in cui sia necessario gestire le matrici per la combinazione degli attributi di un articolo e permette di definire le combinazioni possibili per l'articolo.        
Come prima cosa è necessario assegnare **Codice** univoco identificativo e **[Definizione di matrice](/docs/configurations/tables/CPQ/matrices-definition)** (che contiene il set di attributi che comporrà la matrice); in base alla definizione selezionata, nei tab sottostanti sarà possibile selezionare solo gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) validi per questa matrice. 

Spostandosi nella sezione *Valori dimensione consentiti*, il passo successivo è selezionare, uno ad uno, gli Extra Data dal combo box **Attributo**. Una volta selezionato l'attributo, nella griglia *Risultati disponibili* vengono visualizzati i valori dell'Extra Data (per esempio, se selezioniamo l'attributo Taglia, in questa griglia saranno visualizzati i valori dell Extra Data: XS, S, M, L, XL, ecc.). Una volta selezionati i valori dell'attributo che vogliamo rendere validi per questa matrice, è necessario trascinarli nella griglia *Valori ammessi* per indicare che quei valori saranno validi per le combinazioni della matrice.        
Una volta scelti i valori validi per ogni attributo, automaticamente compariranno dei nuovi tab, uno per ogni matrice di supporto e un tab per la matrice completa, che unirà le varie matrici di supporto per averne una unica con tutte le combinazioni possibili.        
Spostandosi nei tab generati dalle matrici di supporto, è necessario flaggare le combinazioni di valori valide. Per ogni combinazione, quindi, è necessario inserire il flag solo se valida.        
Nel tab della *Matrice completa*, invece, viene generata una matrice unica con tutte le combinazioni valide, impostate nel tab precedente.      
La matrice ora può essere utilizzata negli oggetti per i quali è stata configurata. 

## 20. **Težine/Dimenzije**

Ovo sadržava nekoliko sekcija:

**Dimenzije članka**

U kombinirkoj oko imate mogućnost odabrati mjerne jedinice dimenzije među ponuđenim opcijama, a zatim u donjem dijelu možete navesti prvu, drugu i treću dimenziju i odgovarajuću vrijednost ako postoje, kako biste mogli navesti visinu, širinu i dubinu.

**Volumen**

U padajućem izborniku odabrat će se jedinica mjere za volumen, a u donjem polju unijet će se vrijednost referentnog volumena.

**Vrsta materijala**

U kombinaciji se odabire vrsta materijala iz prethodno definirane tablice Tipovi materijala u odjeljku **Tablice > Logistika > Vrsta materijala**.

**Težina**

U kombinaciji odaberite mjerne jedinice za težinu, a zatim unesite bruto težinu, neto težinu i specifičnu težinu u odgovarajuća polja. Bruto težina i neto težina su težine koje se navode u različitim dokumentima povezanim s artiklom.

**Vrsta JZU**

U odabiru se definira pakiranje artikla (palete, europaleti itd.), a u donjem polju može se navesti broj artikala po JZU. Na temelju tipa JZU -a i artikala po tipu JZU -a prilikom stvaranja planova utovara automatski će se izračunati količine i pakiranje za pripremu kamiona.

**Broj paketa**

Ova sekcija služi za upravljanje brojem paketa u dokumentima; moguće ih je upravljati na temelju broja artikala po paketu ili broja paketa potrebnih za formiranje artikla, postavljanjem oznake na parametar koji želite koristiti za ovaj izračun; na taj način će se automatski prikazati izračun broja paketa u dokumentima.

## 21. **Kvaliteta**

Na ovoj Kartici će se definirati niz informacija koje su korisne za procese kontrole kvalitete (ako ih ima) za taj proizvod..

#### Lokacije 

In questa sezione si andrà a definire il luogo all'interno del magazzino in cui l'articolo dovrà essere ubicato; in particolare si potranno definire:

**Vrsta lokacije**: odnosno gdje želimo smjestiti artikl;

**Lokacija mono-artikal**: ako je aktivno, ovaj flag označava da se na toj lokaciji može smjestiti samo određena vrsta artikla; ne mogu postojati dva različita artikla na istoj lokaciji istovremeno;

**Lokacija mono-lot**: ako je ovaj flag aktivan, to znači da se na toj lokaciji može smjestiti ne samo jedna vrsta artikla, već se na toj lokaciji može smjestiti samo jedan lot tog artikla i ne više lotova istog artikla istovremeno;

#### Skladišna kretanja

U ovoj sekciji definiraju se informacije koje su korisne za evidenciju skladišta za ovaj artikl, kao što su:

**Ručno opterećenje dopušteno**: ako je aktivno, ovaj flag označava da se ovaj artikl može ručno utovariti u skladište;

**Pomicanje blokova**: koristi se u prilagodbama kako bi se spriječilo spremanje ručnog pravila ako pripadajuća vrijednost (iz standarda ili stvarne vrijednosti artikla ili serije) premašuje specificiranu **Maksimalnu Vrijednost** za utovar/istovar. Ne koristi se u standardu;

**Maksimalna Vrijednost utovara/Maksimalna Vrijednost istovara**: koriste se u prilagodbama (uz flag Pomicanje blokova) kao referentne vrijednosti za sprječavanje spremanja ručnog pravila ako pripadajuća vrijednost (iz standarda ili stvarne vrijednosti artikla ili serije) premašuje navedenu vrijednost. Ne koriste se u standardu;

**Trošak za korištenje**: u ovom pododjeljku označava se kako se planira vrednovati artikl, da li se uzima u obzir stvarni trošak ili standardni trošak;

#### Nabava

U ovom sekciji naznačuje se treba li se prilikom primanja materijala za kupnju provesti ulazne provjere materijala ili nisu potrebne, navođenjem:

**Kontrole u prihvaćanju**: putem kombiniranog okvira odabire se vrsta kontrole koja se mora obaviti (unutarnja/nespecificirana/specificirana/službena), a pomoću polja uz to, putem pomoći, odabire se vrsta plana kontrole između kodificiranih planova kontrole dostupnih u odgovarajućem obrascu koji se pristupa putem putanje **Kvaliteta > Kontrolni planovi**.

**Kontrole pri prihvaćanju nisu obavezne**: ako je ovaj flag aktiviran, označava da nisu potrebne kontrole pri prihvaćanju; 

#### Proizvodnja

U ovoj sekciji se specificiraju informacije koje se odnose na proizvodnju materijala, uvijek povezane s kontrolom kvalitete, poput:

**% tolerancije na proizvedenu količinu**: ovdje će se navesti postotak tolerancije na količinu proizvedenu više i/ili manje,

**Tehnička kartica**: u ovim poljima odabire se, gdje je dostupno, tehnički list i vrsta tehničkog lista vezani za ovaj artikl;

**Tehnički podaci potrebni**: u slučaju da materijal ne zahtijeva tehnički list, ovaj će se flag aktivirati;

#### Kvaliteta

U ovom sekciji navodi se vremenski period analize potreban za provođenje preliminarnih kontrola nad artiklom.

**Analiza pripremnog vremena**: ako je aktivna ovaj flag, to znači da je za taj materijal potrebna kontrola kvalitete koja zahtijeva određeni vremenski period (u danima), što je naznačeno u susjednom polju; ovo služi za određivanje koliko dana nakon primitka materijala može biti korišten u proizvodnji ili, u slučaju gotovog proizvoda, koliko dana nakon proizvodnje materijala može biti poslan;

#### Postprodaja

U ovoj završnoj sekciji navest ćemo eventualnu jamstvo koje se pruža za materijal i odgovarajuće dane jamstva, aktivirajući opciju **S Jamstvom** i unoseći broj dana jamstva u odgovarajuće polje; u slučaju da materijal nema jamstvo, opcija će biti isključena.

## 22. **Troškovi**

Unutar ove kartice možete dodavati/upravljati troškovima koji se odnose na artikl, a mogu biti na primjer razni troškovi, troškovi zbrinjavanja, itd.

Ovi troškovi se kodiraju u odgovarajućoj tablici **Troškovi**.

Zaslon se sastoji od mreže u koju se unose troškovi koje želite upravljati za taj artikl među onima koji su prethodno kodirani u vrstama troškova.

**Tip**: kroz ovu kombinaciju odabiremo vrstu troška koju želimo dodati iz popisa troškova putem odgovarajuće kombinacije;

**Opis**: polje koje se automatski popunjava nakon odabira vrste troška i prikazuje opis odabrane stavke troška;

**Iznos**: u ovo polje ručno unosimo iznos tog troška u referentnoj valuti;

**Datum**: putem ovog izbornika unosimo datum početka važenja ovog troška za ovaj artikl;

**Datum završetka**: u ovom polju možete unijeti eventualni datum završetka važenja troška za taj artikl.

U slučaju da je potrebno dodati više vrsta troškova, dovoljno je prijeći na donji redak i ponoviti postupak dodavanja troška koji je upravo opisan.

:::note NAPOMENA
Troškovi uneseni u ovoj kartici prikazuju se u kartici *Sažetci* klijentskih narudžbi u odjeljku **Troškovi**.
:::

## 23. **Alternativna J.M.**
Na ovoj kartici se naznačuje, gdje je to potrebno, alternativna mjerna jedinica za artikl.

Artikl se može upravljati u oba mjerna sustava i uspostavljati odnose između njih.

**JMJ** i **Opis**: navesti ćete alternativnu jedinicu mjere s njenim opisom;

**Faktor pretvorbe**: ovdje se definira faktor konverzije između glavne jedinice mjere i alternativne jedinice mjere; alternativna količina u dokumentima izračunava se prema postavkama u [Početnim Magazinskim Parametrima](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters).

**Zadano**: ako je aktivno, ovaj flag označava koja je jedinica mjere referentna među br. mogućih alternativa za artikl;

**Obvezna**: ako je aktivno, ovaj flag određuje neizmjenjivost faktora konverzije. Kada se unese upravljačka mjerna jedinica putem faktora konverzije, sustav automatski izračunava alternativnu mjernu jedinicu, i obrnuto;

**Prioritetno**: ko je aktivno, ovaj flag ukazuje na to koja jedinica mjere treba biti navedena u prodajnim dokumentima;

**Zadani WMS**: ako je aktivno, označava da će ova jedinica mjere biti korištena kao zadana unutar WMS-a.

## 24. **Varijante**

U ovoj Kartici moguće je dodati i/ili pregledati varijante određenog artikla. Ponekad, ako je novi artikl koji treba stvoriti vrlo sličan već postojećem i razlikuje se samo po maloj karakteristici koja ne utječe značajno na informacije prisutne na različitim karticama postojećeg artikla, umjesto stvaranja novog artikla jednostavno se stvaraju varijante tog artikla.

*Primjer* može biti u modnoj industriji: unese se artikl majica, a zatim se mogu stvoriti varijacije za veličinu i boju, ali osnovne karakteristike artikla majica ostaju iste.

Kartica se sastoji od dvije mreže. U prvoj mreži unose se varijante s informacijama o kodu i opisu, minimalnoj i maksimalnoj zalihama, točki naručivanja i pripadajućim danima, danima zaliha, posljednjoj, prosječnoj, standardnoj cijeni i, na kraju, prodajnoj cijeni.

Informacije koje se nalaze u mreži jedine su informacije koje razlikuju varijantu od glavnog artikla; za sve informacije koje nisu prisutne u mreži, dovoljno je osloniti se na one prisutne u različitim karticama tog artikla.

U donjoj mreži možete unijeti, ako postoji, određeni barkod za tu varijantu.