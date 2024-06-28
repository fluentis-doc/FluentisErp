---
title: Općenito
sidebar_position: 1
---

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

**Priroda artikla**: to je polje koje se koristi za definiranje članka i koristi se u nekim posebnim postupcima. U padajućem izborniku nalazi se popis različitih priroda koje možemo dodijeliti članku. (Kliknite za [rječnik](/docs/guide/glossary/glossary-intro#item-nature));

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

Za više informacija o načinima unosa i odabira podataka unutar formi, pogledajte članak [Unos i odabir podataka](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection).
