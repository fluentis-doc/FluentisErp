---
title: Nova otpremnica 
sidebar_position: 2
---

Forma **Kreiraj otpremnicu prodaje** otvara se putem **Prodaja > Otpremnice > Kreiraj otpremnicu prodaje** ili putem **tipka Novo** koji se nalazi u formi [Pretraživanje otpremnica prodaje](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn).

## *Kako kreirati otpremnicu prodaje*

##  **1. Obavezni podaci**

Za nastavak kreiranja otpremnice prodaje, korisnik mora unijeti obavezna polja:  
- **Tip otpremnice**: unaprijed definiran u *Konfiguracija > Tablice > Prodaja > [Tipovi otpremnica](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji koju je korisnik definirao i prema tipu dokumenta koji sadrži numeraciju. Numeracija pridružena tipu otpremnice obično predviđa automatski napredak temeljen na datumu i broju, s funkcijom nadoknade koja pokriva eventualne praznine u nizu (npr. uzrokovane brisanjem dokumenata). Ovo ponašanje kontroliraju dva specifična zastavica u tablici numeracije. Ako korisnik želi unijeti broj ručno, može onemogućiti zastavicu napredovanja datum-broj (koja osigurava povećanje numeracije u budućim datumima) i zastavicu za nadoknadu brojeva. Nadalje, mora omogućiti zastavicu vanjske numeracije, čime sustavu signalizira da će numeraciju upravljati ručno.      
- **Kupac**: može se unijeti pomoću [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), upisom [direktno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  ili korištenjem automatske procedure, ako se odluči kreirati dokumente putem [Izdavanje otpremnice iz narudžbe kupca](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn).  Nakon unosa kupca, automatski se popunjavaju, ako postoje u kartici kupca, sljedeća polja koja ćemo objasniti u kasnijim sekcijama: valuta, država, jezik, zona, dostava, cjenik i eventualni popusti, plaćanja, troškovi, agenti, destinacija, prijevoznici, dodatni datum.                 
- **Datum**: označava datum kreiranja otpremnice. Ovaj datum je ključan za izračun rokova i eventualnih uvjeta plaćanja. Predlaže se današnji datum, koji se može mijenjati; u slučaju da numeracija predviđa napredak po datumu i broju, ako unesem datum iz prošlosti, Fluentis će provjeriti dostupnost brojeva za taj datum kako bi osigurao napredak, a ako nisu dostupni, obavijestit će korisnika da za taj datum nema slobodnih brojeva.  

Forma sadrži niz kartica.

## **2. Kartica zaglavlje**

Nakon što su odabrani obavezni podaci u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili putem [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, ovisno o odabranoj proceduri, aplikacija popunjava polja *automatski*.  

:::note Podsjetnik
Ako se dokument *automatski generira*, ti se podaci *preuzimaju iz izvornog dokumenta* iz kojeg je nastao.  
:::

Nakon unosa **Kupca**, automatski se *predlažu* svi podaci specifični za karticu **Zaglavlje**, prema podacima prethodno unesenim u [kartici kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u poljima koja odgovaraju njegovoj adresi i u *sekcijama*:  
- **Valuta**: sekcija koja sadrži podatke [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: sekcija koja sadrži podatke [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Dostava**: sekcija koja sadrži podatke [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) (in testata documento viene inserito il listino inserito in anagrafica cliente con il flag Default) con il tipo scaglione di sconto e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

####  Ostala polja zaglavlja 

- **Ispisano**: aktivira se kada se pokrene ispis dokumenta i označava da je dokument ispisan; ova je oznaka važna i za omogućavanje prijenosa otpremnice u druge dokumente.        
- **Otprem­ljeno**: ova se oznaka automatski aktivira kada se dokument proknjiži u skladištu, pomoću gumba *Automatsko otpremanje* na alatnoj traci ili putem dostupnih postupaka.     
- **Vrednovano**: ova se oznaka aktivira kada se otpremnica uključi u fakturu.  
- **Djelomično vrednovano**: ova oznaka pokazuje da je otpremnica samo djelomično uključena u fakturu. 
- **Prisilno vrednovano**: ova se oznaka aktivira ako je otpremnica zatvorena prisilno, s prisilnim zatvaranjem stavki; primjerice, kada preostala roba neće biti isporučena, pa se dokument smatra zatvorenim iako formalno nije.    
- **Poništeno**: aktivna oznaka omogućuje poništavanje narudžbe.        

:::note
Oznake se mogu ukloniti pomoću postupaka za vraćanje operacija.    
:::

- **Jedinstveni kod projekta / Identifikacijski kod natječaja (CUP/CIG)**: ako je u [poreznim informacijama](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) kartice kupca omogućeno upravljanje CIG i CUP kodovima, moguće je unijeti te podatke u dokument.      
- **Napomene kupca**: ovo se polje preuzima iz narudžbe kojom je stvorena otpremnica, ali se može unijeti i ručno.    
- **Naša referenca / Vaša referenca**: u ta se polja obično unosi interna oznaka i oznaka kupca za dokument; ako se otpremnica generira automatski iz drugog dokumenta, ta će se polja popuniti podacima iz izvornog dokumenta (ovo vrijedi samo ako je otpremnica kreirana na temelju jednog izvornog dokumenta).     
- **Referenca na broj narudžbe kupca**: ovo se polje automatski popunjava brojem narudžbe iz koje je nastala otpremnica.    
- **Referenca na datum narudžbe kupca**: ovo se polje automatski popunjava datumom narudžbe iz koje je nastala otpremnica; zajedno s prethodnim poljem čini podatke potrebne za oznaku 2.1.2 XML datoteke elektroničke fakture. Ako nisu popunjeni, uzima se polje „Vaša referenca“.        
- **Početne napomene otpremnice**: moguće je odabrati napomene koje su prethodno unesene u istoimenu tablicu na putu *Konfiguracija > Uslužni alati > Upravljanje kodiranim napomenama*; korisnik mora dvaput kliknuti na polje kako bi otvorio pomoć i odabrao podatke, ili ih može unijeti ručno.  .       
- **Projekt**: omogućuje povezivanje projekta s dokumentom.        
- **Operater**: omogućuje unos korisnika koji izrađuje dokument. Zaposlenici su prethodno uneseni u tablicu *Home > Zaposlenici*; ovo polje postaje obavezno ako je tako definirano u [Parametrima](/docs/configurations/parameters/sales/dn-parameters) dokumenta.       
- **Status izvršenja**: kada se narudžba izvrši putem otpremnica ili računa, status se automatski mijenja iz *Neizvršeno* u *Djelomično izvršeno* ili *Izvršeno*; korisnik može prisilno označiti narudžbu kao izvršenu, čak i ako nije u potpunosti, pri čemu se sprema i datum izvršenja.    
- **Datum početka**: označava datum od kojeg počinje računanje rokova plaćanja.         
- **Audit Trail**: kao i u svim dokumentima, ova sekcija prikazuje datum kreiranja dokumenta i operatera koji ga je izradio, te datum i korisnika zadnje izmjene.      

#### Posebne tipke  

> [Izvršenje iz narudžbi](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (pogledati pripadajuću dokumentaciju).        
> [Automatsko otpremanje](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (pogledati pripadajuću dokumentaciju).    
> **Pomoć za primatelje / odredišta**: otvara pomoćni prozor u kojem se može odabrati primatelj/odredište dokumenta među onima koji su definirani za kupca u njegovoj kartici.       
> **Unesi agenta u retke**: otvara prozor za unos agenta čiji će se podaci primijeniti na sve retke artikala, dodajući se eventualno postojećim agentima.              
> **Zamijeni CIG/CUP u retcima**: nakon što se CIG i/ili CUP unesu u zaglavlje, moguće ih je masovno zamijeniti u već postojećim retcima artikala.          
> **Obriši**: briše odabrane popuste u kartici *Popusti* unutar zaglavlja.           

U zaglavlju se zatim nalaze i određene kartice koje analiziramo u nastavku.  

### 2.1 Plaćanja  

**Uvjeti plaćanja** automatski se preuzimaju iz izvornog dokumenta ili iz kartice *Kupac > tab Plaćanja* i mogu se mijenjati ili brisati.          
Ako je vrsti plaćanja pridružen financijski popust, iznos popusta uzima se u obzir samo u računovodstvene svrhe (rokovi plaćanja), a ne u ukupnom iznosu narudžbe.  

#### Posebna tipka*
> **Obriši plaćanja**: koristi se za brisanje odabranih redaka plaćanja.  

### 2.2 Popusti

Prikazuju se samo unaprijed definirani popusti preuzeti iz kartice *Kupac > kartica Popusti* i mogu se uređivati ili brisati.  

:::important Podsjetnik  
Da bi se omogućilo upravljanje popustima na osnovicu, potrebno je u bazi podataka aktivirati opći parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće društvo. Ako taj parametar nije aktivan, popusti na osnovicu bit će pretvoreni u kaskadne popuste.         
:::

Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Agenti

Ovdje se navodi šifra agenta i njegova provizija za svaki redak artikla.  
Predlažu se šifra i postotak definirani u *Kartici kupca > kartica Agenti*.  
Ako provizija nije povezana s kupcem u njegovoj kartici, agent se svejedno mora unijeti, ali s **NULL** provizijom — jer ako bi provizija bila **0**, to bi značilo da je agent povezan, ali da nema pravo na proviziju.  
Ista će se sekcija prikazati za svaki redak artikla u odgovarajućoj **kartici Agenti**.  

####  Posebna tipka
> **Obriši agente**: omogućuje brisanje odabranih agenata.  

### 2.4 Dodatni podaci

Ovdje se nudi informacija unesena u *Kartica subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## Postupci u zaglavlju:

### *Izvršenje iz narudžbe*

U zaglavlju otpremnice, pritiskom na tipku **Izvršenje iz narudžbe**, otvara se obrazac u kojem je moguće filtrirati potvrđene narudžbe kupaca i prenijeti ih u otpremnicu. 
Istu je operaciju moguće pokrenuti i iz [Pretrage narudžbi](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Pomoću ove procedure moguće je stvoriti prodajnu otpremnicu izvršenjem odgovarajuće narudžbe kupca. Tada je moguće umetnuti artikle u otpremnicu, izvršavajući cijelu narudžbu ili samo dio — pojedine retke.


Da bi se postupak mogao koristiti, moraju biti ispunjeni sljedeći uvjeti:  

 -  kupac ili kupci narudžbi moraju biti isti kao u otpremnici;  
 -  narudžba koja se želi izvršiti mora imati označeno *Ispisano* i *Datum potvrde narudžbe*;   
 -  u tablici [Vrste otpremnica](/docs/configurations/tables/sales/delivery-notes-type) mora biti označena opcija *Narudžba* (koja označava da otpremnica može nastati iz narudžbe);       
 - samo ako se postupak pokreće iz Pretrage narudžbi, vrste dokumenata moraju biti kompatibilne: u tablici [Vrste narudžbi](/docs/configurations/tables/sales/sales-order-types) narudžba koja se želi izvršiti mora imati dodijeljenu odgovarajuću vrstu otpremnice.   

Zatim je potrebno u zaglavlju nove otpremnice postaviti *Vrstu otpremnice* koju se želi kreirati (koja mora odgovarati onoj definiranoj u tablici *Vrste narudžbi*) i odabrati *Kupca*.  
Nakon što se ti podaci unesu, potrebno je kliknuti na tipku *Izvršenje narudžbi* kako bi se otvorio obrazac za izvršenje.  

:::tip Podsjetnik    
Eventualne napomene unesene u zaglavlju narudžbe (kao što su *Naša/Vaša referenca*, *Referenca na broj narudžbe kupca* ili *Početne napomene*) prenose se u zaglavlje otpremnice samo ako se podaci preuzimaju iz jedne jedine narudžbe.  
:::

#### Postupak:

Filtri za kupca i valutu automatski će se postaviti prema kupcu odabranom u otpremnici.  

Nakon što postavite sve željene *Filtre*, klikom na tipku *Pretraži* u mreži će se prikazati po jedan redak za svaku narudžbu koja je ispisana, potvrđena i još neizvršena ili djelomično izvršena.  

:::note Napomena
Procedura preuzima sve podatke iz narudžbe, pa će se primijeniti i uvjeti kupnje iz narudžbe, čak i ako su se ti uvjeti u međuvremenu promijenili.  
:::

:::note Napomena
Redci tipa Napomena uvijek će biti vidljivi, čak i ako su već izvršeni, sve dok svi redci drugih tipova ne budu izvršeni.  
:::

U mreži rezultata korisnik može:  

 1. odabrati *cijelu narudžbu*. Za to je dovoljno označiti kvačicu na početku retka narudžbe.   
 2. odabrati samo *neke* od *ponuđenih artikala*. Za to je dovoljno označiti kvačicu na početku retka artikla.    
 3. odabrati samo *neke artikle* za *određenu količinu*. U tom slučaju korisnik mora promijeniti količinu za izvršenje.  

Za završetak postupka potrebno je kliknuti tipku *Prijenos*, koja će preuzeti sve podatke iz narudžbe i prenijeti ih u otpremnicu.  

#### Posebne tipke  

> **Pretraži** – omogućuje pretraživanje narudžbi dobavljača.    
> **Prijenos** – omogućuje prijenos podataka odabrane narudžbe u novu otpremnicu.   
> **Prisilno izvršenje narudžbe** – omogućuje prisilno izvršenje narudžbe; ako su odabrani samo neki redci, prisilno će se izvršiti samo ti redci (uz dodavanje oznake *Izvršeno prisilno* na retku artikla); ako se izvrši cijela narudžba, status se ažurira i u zaglavlju.   
> **Izvršenje narudžbi** – omogućuje izvršenje narudžbe.    
> **Proširi** – omogućuje proširenje cijelog stabla narudžbi u mreži, kako bi se prikazali svi artikli.     
> **Sakrij** – omogućuje sažimanje prikaza redaka artikala, prikazujući samo redke narudžbi.     
> **Odaberi sve** – omogućuje odabir svih artikala na popisu.    
> **Poništi odabir svih** – omogućuje poništavanje odabira svih artikala na popisu.   

### *Automatsko skladištenje*  

Druga procedura u zaglavlju otpremnice je automatsko skladištenje. Tipka se aktivira ako je dokument *Ispisan*.  
Podsjećamo da, ako su u [Parametrima otpremnice](/docs/configurations/parameters/sales/dn-parameters) omogućena automatska skladištenja, procedura će se pokrenuti automatski nakon što je dokument ispisan.        
Nakon pokretanja, Fluentis provjerava prisutnost zaliha i knjiženja u retcima otpremnice te eventualnu prisutnost serija i serijskih brojeva ako su potrebni; u slučaju da procedura ne uspije, korisnik će biti obaviješten o pogrešci.        
Ako procedura uspije, stvorit će se [Skladišna evidencija](/docs/logistics/warehouse/stock-records/record) koja će pomaknuti artikle dokumenta i u zaglavlje otpremnice će biti postavljena oznaka **Skladišteno**.    

## **3. Artikli**

Na ovoj kartici unose se svi artikli zajedno s pripadajućim podacima.

Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom radu formi, pogledajte sljedeći link: [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura.  

Za unos **Novog artikla** u mrežu, dovoljno je postaviti se na redak i ispuniti potrebne podatke ili koristiti tipku **Novi** u traci izbornika. Dostupni stupci su sljedeći:  

**Broj retka**: ovo polje će se automatski i progresivno popunjavati prilikom unosa podataka u retku.  

- **Tip retka**: omogućuje odabir, iz padajuće liste, artikala s različitim karakteristikama:      
>- *Kodirani artikl*: artikli koji su kodirani u šifarniku i mogu se knjižiti u analitičku evidenciju te registrirati u skladištu.    
>- *Nekodirani artikl*: opisni artikli koji se mogu knjižiti u analitičku evidenciju, ali se ne mogu premještati u skladištu.    
>- *Troškovni artikl*: artikli koji mogu biti kodirani ili nekodirani i prikazuju se odvojeno u sažecima dokumenata; ako je troškovni artikl kodiran i relevantan za porez, bit će premješten u skladište; ako je nekodiran ili nije relevantan za porez, neće biti premješten u skladište.  
>- *Napomena artikl*: opisne napomene koje se prikazuju na ispisa dokumenta; ne utječu na knjigovodstvo niti skladište. 
>- *Poklon artikl*: poklon artikl se obrađuje kao kodirani ili nekodirani artikl za porezne i skladišne svrhe, ali se kao poklon vodi odvojeno u sažecima dokumenta; prema oznaci *Rivalsa iva*, obračunava se PDV na poklon ili ne, ovisno o subjektu.  

:::note[NAPOMENA]
Ako se artikl unosi izravno, njegova klasa, šifra i tip retka - *Kodirani artikl* automatski se popunjavaju.  
:::

- **Barkod**: ako je u [Parametrima otpremnice](/docs/configurations/parameters/sales/dn-parameters) omogućeno upravljanje barkodovima, prikazat će se stupac *Barkod* gdje se može odabrati barkod artikla između onih unesenih u *Šifarnik artikla > Barkod*.  

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

- **Artikl klijenta**: ako je u [Parametrima otpremnice](/docs/configurations/parameters/sales/dn-parameters) omogućeno upravljanje artiklima klijenta, prikazat će se stupac *Artikl klijenta*, s kodom artikla važećim za klijenta kojem je dokument adresiran, unesenim u *Šifarnik artikla > Klijenti*. 

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača)..

**Cijena**: Cijena se preuzima iz cjenika unesenog u karticu kontakta; cjenik referentnog artikla prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako je u kartici subjekta povezano više cjenika u nizu. (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) ), isti dokument može sadržavati artikle iz različitih cjenika.

Kroz dvostruki klik u polju **Cjenici** (kartica *Popusti/Cjenici*) Korisnik ima mogućnost odabrati preuzimanje koje nije zadano, a iz kojeg se želi preuzeti cijena unesenog artikla.

:::note
Ako cjenik nije prisutan, predložena vrijednost bit će **prodajna cijena** preuzeta iz *Šifarnik artikla > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)*  ili će se dohvatiti prema postavkama parametara dokumenta. Ako ni taj podatak nije dostupan, prikazat će se cijena 0.

- **Osnovica**: u ovom polju prikazuje se jedinična cijena pomnožena s količinom artikla, umanjena za popuste.      

- **Popusti artikla**: prikazuje se zbroj popusta predviđenih za artikl.      

- **Konačni popusti artikla**: prikazuje se zbroj konačnih popusta unesenih za artikl u sažetku dokumenta.   

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

- **Promet prodaje**: prikazuje se vrijednost unesena u *Šifarnik artikla > kartica Općenito*. Ako taj podatak nije prisutan, neće se prikazivati nijedna vrijednost, a prilikom knjiženja otpremnice bit će korištena vrijednost unesena u polju *Trošak/Priručni prihod unaprijed definiran* u *Šifarnik klijenta > Financijski podaci > kartica Administracija*, ili će se generirati poruka o pogrešci.  

- **U otpremnici**: ovaj indikator je uključen prema zadanim postavkama, ali ga je moguće isključiti ako artikl ne treba biti prenesen u fakturu i stoga neće sudjelovati u procedurama popunjavanja otpremnice.    

- **Neto težina**: prikazuje se neto težina unesena u šifarniku artikla, pomnožena s količinom artikla u retku.         

- **Bruto težina**: prikazuje se bruto težina unesena u šifarniku artikla, pomnožena s količinom artikla u retku.      


#### Specifičnie tipke

> **Preračun Conai**: ako je [Conai](/docs/sales/sales-flow/conai)  omogućen za dokument, moguće je preračunati vrijednosti ovim gumbom nakon eventualnih izmjena.      

> **Ažuriraj podatke Conai u šifarniku artikla**: ako su u kartici *Conai materijali za artikl* izmijenjene jedinice mjere i/ili težina, moguće je prenijeti te vrijednosti u Conai sekciju šifarnika artikla.         

> **Upravljanje ambalažom**: omogućuje otvaranje upravljanja ambalažom koja se vraća u dokumentu nabave. Tipka je aktivna ako je dokument spremljen, ali ne i učitan. Klikom na tipku otvara se forma gdje se unosi količina, odabire redak i vrši prijenos odabrane ambalaže u retke artikla klikom na tipku **Izvrši**. U ovoj formi prikazuju se artikli uneseni s vrstom Ambalaža koji se nalaze u tablici Ambalaže na povrat.    

>  **Ažuriranje cjenika**: klikom na strelicu pored tipke otvaraju se dvije opcije. Prva je **Ažuriraj trenutni cjenik**, koja omogućuje usklađivanje cijene artikla s internim cjenikom nakon eventualne promjene cijene u retku artikla. Druga opcija, **Kreiraj novi cjenik s novim razdobljem valjanosti**, omogućuje izradu novog cjenika prilagođenog kupcu dokumenta; u pop-up prozoru bit će potrebno unijeti datum početka i završetka valjanosti novog cjenika. 

> **Prikaži/Sakrij detalje**: klikom na ovu tipku prikazuju se ili skrivaju kartice unutar sekcije Artikli.   


### 3.1 Popusti/Cjenici

Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 3.2 Podaci

Unutar ove kartice prikazuju se i unose dodatne informacije vezane uz artikl.

**Alternativna JM**: u ovim poljima bit će prikazana količina u alternativnoj mjernoj jedinici u slučaju da je u *šifarniku artikla* ovaj podatak prisutan na kartici **Alternativne mjerne jedinice** (uzima se ona koja ima aktiviranu oznaku **Zadano**) i ako su u parametrima dokumenta aktivirane oznake: **Upravljanje dvostrukom mjernom jedinicom** i **Automatski prijedlog alternativne mjerne jedinice**.

**Alternativna količina**: predložena vrijednost za alternativnu mjernu jedinicu, izračunata množenjem ili dijeljenjem *upravljane količine* (one u glavnoj mjernoj jedinice) sa *faktorom pretvorbe* podešenim u *Šifarnik artikala > kartica Alternativne mjerne jedinice*.

- **Skladište i predložak**: prikazuju se skladište i predložak koji će se automatski koristiti prilikom otpreme artikala iz skladišta. Podaci se preuzimaju iz *Vrste otpremnica* ili se unose ručno.   
- **Varijanta**: moguće je odabrati varijantu artikla, ako je kodificirana unutar *Kartica artikla > Varijante*.      
- **Stanje realizacije**: u ovom odjeljku moguće je provjeriti je li artikl valoriziran, djelomično valoriziran ili prisilno valoriziran.      
- **Projekt**: projekt povezan s dokumentom ili se može dodijeliti pomoću pomoći na polju.       
- **Povrat PDV-a**: ako je postavljeno, PDV za dar se uzima u obzir za ukupni iznos dokumenta.     
- **Referenca narudžbe**: odnosi se na narudžbu iz koje je stvorena otpremnica.   
- **Naša referenca/vaša referenca**: u ovim poljima obično se unosi interna referenca i referenca klijenta za dokument; ako se otpremnica generira automatski, polja će se popuniti podacima iz izvornog dokumenta.         
- **Broj/Datum reference**: prikazuju broj i datum narudžbe klijenta izvora.      
- **Marka**: predstavlja marku artikla, preuzetu iz njegove kartice ili cjenika artikla.    
- **U fakturi**: ovaj zastavica se postavlja prema zadanim postavkama, ali se može onemogućiti ako artikl ne treba biti prenesen u fakturu i ne smije se pojavljivati u postupcima realizacije otpremnice.        
- **Napomena**: omogućuje dodavanje bilješki za svaki artikl.      
- **Detalj deklaracija**: prikazuje [Deklaraciju o namjeri](/docs/finance-area/declarations/declarations/intent-declaration)  koja se koristi za prijedlog PDV-a artikla; iz padajućeg izbornika moguće je promijeniti referentnu deklaraciju, ako postoji više valjanih deklaracija.   

### 3.3 Agenti

**Trgovački predstavnik**: trgovački predstavnik povezan s odgovarajućom provizijom za odabrani artikal; podatak odgovara onome što je prisutno u *Zaglavlje> kartica Trgovački predstavnik*. Postotak se može promijeniti.

*Posebna tipka*

> **Izbriši Trgovačkog predstavnika**: omogućuje brisanje trgovačkog predstavnika povezanog s artiklom.

### 3.4  Serije i serijski brojevi  

U dvije tablice mogu se unijeti serije i serijski brojevi koji se moraju skinuti sa skladišta.  
Ova operacija ovisi o postojanju serija i serijskih brojeva u skladištu.   

Ako artikl ne predviđa upravljanje serijama/serijskim brojevima, ovaj tab će biti onemogućen.  

:::tip Zapamti
Ako je u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) zastavica *Obavezne serije i serijski brojevi* isključena, bit će moguće spremiti dokument bez unosa serija/serijskih brojeva.  
Također, ako je *Tip preuzimanja* serije kodificirane u [kartici artikla](/docs/erp-home/registers/items/create-new-item) *FIFO* ili s *Datumom isteka*, serije će biti predložene automatski prilikom knjiženja otpremnice u skladište, ako prethodno nisu unesene.  
:::

####  Tipke specifične  

**Izbriši lot**: Omogućuje brisanje odabranog retka lota.

**Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.  

### 3.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na kojima su distribuirane vrijednosti artikala.

Ovi podaci mogu se unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita prethodno uneseni u *šifarnik kontakta*, *šifarnik artikla* ili u *kontni plan*).  

### 3.6 Dodatni podaci

Donosi se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću unosa novih dodatnih podataka koji su korisni samo za predmetni dokument, uz mogućnost putem odgovarajuće oznake odabrati koje dodatne podatke ispisati.  

### 3.7 Priloženi dokumenti

Prikazuje se detalj eventualnog **Priloženog dokumenta** (naziv, tip dokumenta, eventualne napomene, naš/vaša referenca). Za upute o tome kako priložiti dokument, upućujemo na članak [Priloži dokumente](/docs/guide/common/operations-with-data/attach-documents).

### 3.8 Sekcija vrijednosti

Donji desni dio prikazuje sažetak troškova koji formiraju konačnu cijenu odabranog artikla u mreži artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u retku**: Cijena artikla * Količina artikla

**Ukupno rabat**: zbroj popusta na artikl, uključujući i konačne popuste;

**Osnovica**: Bruto osnovica - Popusti;

**Porez**: Iznos * stopa PDV-a artikla; 

**Ukupno**: Iznos + Porez.


## **4. Sažeci**


U Sažecima se prikazuju glavni podaci cijelog dokumenta.


### 4.1 Završni popusti artikala  

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  


### 4.2 Sažetak provizija agenata  

U ovoj kartici prikazuju se provizije predviđene za svakog agenta.   


### 4.3 Troškovi/Popusti/Doplate na kraju 

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 

- **Detalj deklaracija**: unosi se eventualna deklaracija o namjeri koja je važeća za klijenta.


### 4.4 Sažetak PDV-a

Prikazuje se sažetak PDV-a dokumenta za svaki PDV kod.


### 4.5 Sažetak dospijeća

Predstavlja sažetak dospijeća dokumenta, za svaki *način* i *uvjete* plaćanja. 
**Broj**: Progresivni broj retka.

**Plaćanje**: Predstavlja alfanumerički kod *Tipa plaćanja* preuzet iz *Zaglavlje > kartica Plaćanja*.  

**Iznos**: Izračunati iznos dospijeća, može se ručno urediti, pri čemu se automatski aktivira oznaka *Ručno uređivanje* (automatski se pokreću provjere i obavijesti o usklađenosti između vrijednosti roka dospijeća i ukupnog iznosa računa).

**Datum dospijeća**: Izračunati datum dospijeća, može se ručno urediti, pri čemu se automatski aktivira oznaka *Ručno uređivanje*.

**Troškovi naplate**: Polje u kojem se navode izračunati troškove naplate.

**PDV**: Primijena na troškove naplate (može se postaviti i ručno).

**Predložak plaćanja**: Moguće je izravno unijeti u fakturu računovodstveni predložak kojim će se automatski knjižiti naplate/plaćanja. Napomena: obratite pažnju na predložak jer će koristiti konta prisutna čak i bez podkonta, zbog čega je i prisutno sljedeće polje.

**Konto kupca / dobavljača**: Konto koje se koristi za naplatu/plaćanje (npr. blagajna ili banka) dospijeća, zamjenjujući konto prisutan u računovodstvenom predlošku plaćanja (ili naplate)

**Br. potvrde**: Eventualni broj potvrde za primljena sredstva.
	
**Jed.**: Aktivira knjiženje zatvaranja dospjelog plaćanja u automatskom knjiženju.

**Tip popusta**: Tip popusta.

**Vrijednost popusta**: Vrijednost popusta na iznos po naplati.

**Detalji izjava o namjeri**: Radi se o upućivanju na izjavu o namjeri. Na troškove naplate može se primijeniti PDV oslobođen temeljem izjave o namjeri (tzv. korištenje prava na oslobođenje od PDV-a prema izvozniku), stoga je potrebno omogućiti da se i ovdje poveže odgovarajuća izjava o namjeri (kao i kod stavaka artikala i stavaka troškova).

**ULAZNI RAČUNI:**

**Znak**: samo se dospijeća koja imaju ovu oznaku obrađuju u plaćanju s posrapredloškom i postavljenim kontom (solo le scadenze che hanno questo flag vengono poi gestite in pagamento con causale e conto impostato).
	
**Modeli poziva na broj plaćanja**: Model za kreiranje poziva na broj plaćanja. U nekim državama svaka dospjelost na računu ima kod koji dodjeljuje izdavatelj računa; taj je kod strukturiran prema određenim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao generirati pomoću algoritma.

**Šifre modela plaćanja**: Ovo je šifra (strukturirana prema prethodno navedenom modelu) koja se prenosi u otvorenu stavku, a zatim i u naloge za plaćanje koji se šalju banci, kako bi banka mogla obavijestiti primatelja koja je dospjelost podmirena (čime se omogućuje automatizirani uvoz bankovnih izvoda i zatvaranje otvorenih stavaka). Odatle se šifra prenosi u otvorenu stavku i u SEPA datoteku.

**Datum za primjenu popusta pri plaćanju predujma** Ovo je polje predviđeno u strukturi računa za SDI, a odnosi se na krajnji datum do kojeg se može primijeniti financijski popust.



### 4.6 Totali documento


**Bruto iznos artikala**: predstavlja zbroj vrijednosti svih artikala;

**Predujam**: predstavlja vrijednost eventualnog primljenog predujma;

**Iznos poklona**: predstavlja iznos artikala tipa poklon unesenih u karticu *Articoli*.

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost popusta primijenjenih na artikle, ali bez konačnih popusta. 

**Neto iznos artikala**: *Bruto iznos artikala* – *Ukupni primijenjeni popusti*; 

**Ukupni konačni rabati**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikala; 

**Ukupno s neto finalnim rabatima**: *Neto iznos artikala* - *Ukupni konačni rabati*;

**Nedokumentirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnoj kartici kao artikle *Tip trošak*; 

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u mreži *Naknade*; 

**Troškovi ovjere**: predstavlja zbroj troškova ovjere unesenih u mreži *Naknade*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u mreži *Naknade*; 

**Osnovica**: *Neto iznos artikala* – *Konačni rabati* + *Ukupno nedokumentirani troškovi* + *Ukupno dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica* + *PDV*.


## **5. Transport**

Prisutni podaci su: 

- **Primatelj**: predlaže se primatelj po defaultu unesen u kartici klijenta; ako nije prisutan, uzima se adresa klijenta.     
- **Odredište**: predlaže se odredište primatelja po defaultu, ako je uneseno u kartici klijenta.          
- **Broj praćenja**: slobodno polje.    
- **Volumen**: predlaže se kumulativni volumen, rezultat zbroja volumena artikala (vrijednost se uzima iz *Kartice artikla > kartica Težine/Dimenzije*), kada jedinica mjere volumena artikala odgovara onoj unesenu u [parametrima otpremnice](/docs/configurations/parameters/sales/dn-parameters).   
- **Neto težina**: predlaže se kumulativna neto težina, rezultat zbroja težina artikala (vrijednost se uzima iz *Kartice artikla > kartica Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenu u parametrima otpremnice.    
- **Bruto težina**: predlaže se kumulativna bruto težina, rezultat zbroja težina artikala (vrijednost se uzima iz *Kartice artikla > kartica Težine/Dimenzije*), kada jedinica mjere težine artikala odgovara onoj unesenu u parametrima otpremnice.       
- **Vanjski izgled dobara**: padajući izbornik koji se odnosi na istoimenu tablicu.        
- **Paketi**: predlaže se broj paketa, na temelju podataka unesenih u *Kartice artikla > kartica Težine/Dimenzije*, u poljima *Artikli u paketu* ili *Paketa po artiklu*. U obzir se uzimaju samo artikli koji imaju ovo polje popunjeno.         
- **Vrijednosti promijenjene ručno**: omogućuje promjenu polja Volumen, Neto težina, Bruto težina i Paketi, koja inače preuzimaju podatke iz kartice artikla bez mogućnosti izmjene.      
- **Ulaz/Izlaz carinske službe**: polja koja se koriste za eTransport u rumunskoj verziji, povezana s karticom Carinska služba.    
- **Ulaz/Izlaz graničnog prijelaza**: polja koja se koriste za eTransport u rumunskoj verziji, povezana s karticom Granični prijelaz.         
- **Transport**: potrebno je odabrati osobu koja će obaviti transport, stavljanjem zastavice kod Pošiljatelj, Primatelj ili Prijevoznik; ovisno o odabiru, dolje prikazana sekcija će se promijeniti.  
  - Ako je transport na teret Pošiljatelja: moguće je unijeti Registraciju vozila, Prikolicu, Datum i Vrijeme početka transporta.  
  - Ako je transport na teret Primatelja: moguće je unijeti Registraciju vozila, Prikolicu, Datum i Vrijeme početka transporta.  
  - Ako je transport na teret Prijevoznika: dostupna polja su Kartica prijevoznika, Registracija vozila, Prikolica, Datum i Vrijeme transporta, eventualni Nalogodavac, Utovarivač, Vlasnik, Mjesto utovara.  

## **6. Povezani dokumenti**

U ovoj kartici moguće je pregledavati povezane dokumente.  
Za dodavanje dokumenata moguće je postupiti na dva načina:
- korištenjem tipke **Dokumenti** u alatnoj traci, može se odabrati želite li povezati već kodificirani dokument u Fluentisu ili stvoriti novi dokument za povezivanje. 
- korištenjem desnog klika izravno u tablici i odabirom *Priloži datoteku*, pokreće se stvaranje novog dokumenta za povezivanje.   