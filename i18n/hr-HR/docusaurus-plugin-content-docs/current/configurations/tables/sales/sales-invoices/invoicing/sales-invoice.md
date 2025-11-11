---
title: Nova prodajna faktura
sidebar_position: 2
---

Forma se otvara:     
1. putem putanje **Prodaja > Fakture > Kreiraj prodajnu fakturu**     
ili     
2. putem tipke **Nova** koja se nalazi u formi [Pretraga prodajnih faktura](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

## *Kako kreirati prodajnu fakturu*  

## **1. Obavezni podaci**

Da bi se nastavilo s kreiranjem dokumenta, korisnik mora unijeti *obavezna* polja:  

- **Vrsta fakture**: unaprijed definirana u *Konfiguracija > Tablice > Prodaja > [Vrsta prodajne fakture](/docs/configurations/tables/sales/invoices-type)*.          
- **Broj**: svakom dokumentu dodjeljuje se broj prema numeraciji koju korisnik definira u tablici[Numeracija](/docs/configurations/tables/fluentis-numerations) i prema tipu dokumenta koji sadrži tu numeraciju. Numeracija povezana s vrstom fakture obično slijedi automatsku progresiju temeljenu na datumu i broju, s funkcijom nadoknade koja popunjava eventualne praznine u slijedu (npr. ako su dokumenti izbrisani). Ovo ponašanje definirano je pomoću dva specifična flaga u tablici numeracije. Ako korisnik želi ručno unijeti broj, može isključiti flag za progresiju datum-broj (koji osigurava povećanje numeracije za buduće datume) i flag za nadoknadu brojeva. Također mora uključiti flag za vanjsku numeraciju, čime sustavu signalizira da će numeracija biti upravljana ručno.       
- **Kupac**: pomoću [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili  [izravnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) podataka. Nakon odabira kupca, automatski se popunjavaju (ako postoje u registru) sljedeća polja, koja će biti objašnjena u sljedećim odjeljcima: valuta, država, jezik, zona, otprema, cjenik i eventualni popusti, uvjeti plaćanja, troškovi, agenti, odredište, prijevoznici, dodatni datumi.                 
- **Datum fakture**: označava datum kreiranja fakture. Ovaj datum je ključan za izračun dospijeća i eventualnih uvjeta plaćanja. Predlaže se današnji datum, koji se može izmijeniti; ako numeracija predviđa progresiju datuma i broja, a korisnik unese datum u prošlosti, Fluentis će provjeriti dostupnost brojeva za taj datum kako bi osigurao ispravnu progresiju, te će korisnika obavijestiti ako nema dostupnih brojeva za uneseni datum.

Nastavite kreiranje unoseći barem obavezne podatke na svakoj od donjih kartica.

## **2. Zaglavlje**

Nakon što su obavezni podaci uneseni u gornjem dijelu forme, korisnik može nastaviti unos sljedećih podataka:  
- [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- ili putem [pomoći za polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) 
- ili, ovisno o odabranoj proceduri, aplikacija popunjava polja **automatski**.

:::note Podsjetnik
Ako se dokument *automatski kreira*, ti se podaci preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.  
:::

Nakon unosa **Kupca**, automatski se predlažu svi specifični podaci na **kartici Zaglavlje**, prema postavkama iz [matice kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro),  u poljima koja odgovaraju njegovoj adresi i u *sljedećim odjeljcima*:    
- **Valuta**: odjeljak koji sadrži podatke o [Valuti](/docs/guide/common/glossary/glossary-intro#currency), [Tečaju](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: odjeljak koji sadrži podatke o [Državi](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language), [Zoni](/docs/guide/common/glossary/glossary-intro#zone).
- **Otprema**: odjeljak koji sadrži podatke o [Otpreme](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) (u zaglavlju dokumenta unosi se cjenik postavljen u matici kupca s flagom Default), zajedno s vrstom razine popusta i njegovim  [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Ostala polja  

- **Ispisano**: aktivira se kada se pokrene ispis dokumenta i označava da je dokument ispisan.      
- **Otpremljeno**: ovaj flag se automatski aktivira kada je dokument knjižen u skladištu, pomoću tipke na *traci izbornika* Automatsko otpremanje ili odgovarajućih procedura.  

:::note Napomena
Ako je faktura kreirana iz otpremnog dokumenta koji je već otpremljen, postoji opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira flag *Otpremljeno* i u fakturi.
:::  

- **Stornirano**: aktivni flag omogućuje poništavanje dokumenta; automatski se postavljaju flagovi *Otpremljeno* i *Vrednovano* kako bi se spriječilo da dokument bude vidljiv u procedurama.        
- **Knjiženo**: flag označava da je faktura proknjižena.     

:::note
Flagovi se mogu ukloniti pomoću procedura za vraćanje operacija.
:::

- **Bilješke kupca**: prikazuje informaciju unesenu u matici kupca; ako je dokument kreiran automatski iz narudžbe ili otpremnice, preuzimaju se isti podaci iz istog polja izvornog dokumenta. Može se unijeti i ručno. Desnim klikom miša može se otvoriti forma za unos dužeg teksta napomene; ako polje sadrži vrijednost, boja pozadine polja se mijenja.      
- **Naša referenca / Vaša referenca**: u ta se polja obično unosi interna referenca i referenca kupca za dotičnu fakturu.    
- **Referenca na broj narudžbe kupca**: ovo se polje automatski popunjava brojem narudžbe iz koje faktura potječe.      
- **Referenca na datum narudžbe kupca**: ovo se polje automatski popunjava datumom narudžbe iz koje faktura potječe; zajedno s prethodnim poljem stvara podatke potrebne za oznaku **2.1.2** XML datoteke elektroničke fakture. Ako nisu popunjeni, koristi se polje *Vaša referenca*. 
U slučaju da se faktura generira putem procedura:      
> *Kreiranje iz narudžbe kupca* – ova će se četiri polja popuniti podacima iz narudžbe kupca. Ovo vrijedi samo za fakture kreirane iz jedne narudžbe;   
>  *Izdavanje iz otpremnice* – ova će se polja popuniti podacima iz otpremnice. Ovo vrijedi samo za fakture kreirane iz jedne otpremnice.          

**Početne bilješke**: mogu se odabrati bilješke prethodno unesene u istoimenu tablicu koja se nalazi u *Konfiguracija > Korisnost > Upravljanje šifriranim bilješkama*. Za to korisnik treba napraviti dvoklik na polje **Početna bilješka** kako bi otvorio *Pomoć šifriranih bilješki* i odabrao podatke, ili desnim klikom miša može otvoriti prozor u kojem je moguće upisati vrlo dugačak tekst bilješke. Ako polje sadrži neku vrijednost, boja pozadine polja se mijenja.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici* koja se nalazi u *Početna stranica > Zaposlenik*. Podatak postaje **Obavezan** ako je opcija postavljena u paramatrima dokumenta.

- **Projekt**: pomoću [help polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom.   
Ova veza funkcionira samo na razini zaglavlja stavke.  
- **Audit Trail**: kao i kod svih dokumenata, ovaj odjeljak prikazuje datum stvaranja dokumenta s operaterom i datum posljednje izmjene dokumenta s operaterom.      
- **Vrsta reference**: ako račun potječe od drugog računa zbog storna dokumenta, ovdje se prikazuje vrsta računa izvornog dokumenta.    
- **Referenca računa (FT)**: ako je račun stvoren iz drugog računa, ovdje se prikazuju broj i datum izvornog dokumenta.        
- **Referenca SDI ID**: u ovom polju prikazuju se reference računa ako je poslan u SDI.       
- **Knjigovodstvena evidencija**: sadrži identifikator knjižnog zapisa ako je račun knjižen.        
- **Dostava**: u ovom odjeljku prikazuju se eventualni Troškovi prijevoza, Ambalaža i Vozilo uneseni u kartoteci kupca; polja se mogu mijenjati.    
- **Cjenik**: predlaže se cjenik s oznakom zadanom u Šifarnik kupca > Cjenici, koji će se koristiti za dokument; podatak se može mijenjati.    
- **Vrsta razreda popusta**: prikazuje vrstu razreda popusta unesenu u Šifarnik kupca > Cjenici predviđenu za zadanu vrstu cjenika.     
- **Datum početka primjene**: predstavlja datum početka za obračun rokova plaćanja.

#### Specifične tipke  

> **[Izdavanje po narudžbi kupca](/docs/sales/sales-invoices/invoicing/sales-invoice)**: pokreće proceduru za izradu računa na temelju narudžbe kupca. Aktivira se nakon unosa kupca i vrste računa.    
> **Izdavanje po otpremnici**: pokreće proceduru za izradu računa na temelju otpremnice. Aktivira se nakon unosa kupca i vrste računa.       
> **[Automatsko knjiženje](/docs/sales/sales-invoices/invoicing/sales-invoice)**: ova procedura omogućuje knjiženje robe iz skladišta za dokument, ako je *Ispisan*.        
> **Help primatelja/destinacije**: omogućuje pregled i unos primatelja/destinacija iz kartoteke kupca.       
> **Unesi agenta u stavke**: prenosi agenta unesenog u zaglavlje na stavke artikala u kartici *Agenti*.     
> **Unesi CIG/CUP u stavke**: prenosi kodove unose u zaglavlju na stavke artikala u odgovarajuće combo boxe.       
> **Obriši uplate**: briše uplate iz zaglavlja.   
> **Registar SDI dokumenata**: otvara SDI dokument povezan s računom, jednom kada je *Provjeren*.       
 
### 2.1 Plaćanja 

**Rješenja za plaćanje** automatski se preuzimaju iz *Šifarnik kupca > kartica Uplate* i mogu ih korisnici mijenjati ili brisati.

Ako je uz **Vrstu plaćanja** vezan financijski popust, iznos popusta se uzima u obzir samo u računovodstvene svrhe, tj. pri obračunu rokova plaćanja, a ne u ukupnom iznosu računa.  

Ako dokument nastaje iz:  

- *Narudžbe kupca*: vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz kartoteke kupca ili se prikazuje forma sa svim plaćanjima dokumenata koji se trebaju izdati, gdje korisnik odabire željenu vrstu plaćanja.  

- *Otpremnice*: mogu se zadržati plaćanja iz kartoteke kupca ili zadržati pojedinačna plaćanja iz svake otpremnice; u tom slučaju se u računu prikazuje vrsta plaćanja s osnovicom i PDV-om istim kao u otpremnici, te se dodaje nova stavka za eventualne dodatne stavke artikala u računu koje ne potječu iz otpremnice.

### 2.2 Popusti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.   

:::important Ricorda
Per poter gestire gli sconti su imponibile è necessario attivare da database il parametro generale GEN-GlobalSettings_CalculateDiscountOnAmount per la società di interesse.     
Se tale parametro non è attivo, gli sconti su imponibile saranno trasformati in sconti a cascata. 
:::
  
Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla bude unesen novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikla.

*Posebna tipka*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

### 2.3 Agenti

Ovdje se unosi šifra agenta i njegova provizija za svaku stavku artikla. Predlaže se šifra i postotak definirani u *Šifarnik kupca > kartica Agenti*.  

Ako provizija nije vezana uz kupca u njegovom šifarniku, agent se ipak mora unijeti, ali s provizijom NULL, jer ako bi bila 0, to bi značilo da je agent vezan uz kupca, ali ne prima proviziju.  

U slučaju generiranja računa iz narudžbe, ove će se informacije prenijeti identično kao kod narudžbe kupca.  

Ista se sekcija ponavlja za svaku stavku artikla u odgovarajućoj kartici Agenti.  

### 2.4 Dodatni podaci

Ovdje se nudi informacija unesena u *Kartica subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## Procedure zaglavlja:  

### *Elektroničko fakturiranje*    

Iz ove sekcije, dostupne u alatnoj traci računa, moguće je upravljati kreiranjem i slanjem elektroničkog računa prema SDI-u. Ova se procedura izvršava promjenom statusa dokumenta; statusi su sljedeći:    
- *Ne pregledano*: početni status dokumenata prije komunikacije sa SDI; dokument je generiran, ali još nisu poduzete akcije vezane uz upravljanje elektroničkim dokumentom; sljedeći statusi mogu biti: Provjereno, Otkazano ili Isključeno.             
- *Provjereno*: postavljanjem ovog statusa Fluentis provodi provjere dokumenta; ako nedostaju podaci za komunikaciju sa SDI, korisnik će biti obaviješten; od ovog statusa dalje aktivira se tipka Registar SDI dokumenata za pregled povijesti i XML stilskog lista; sljedeći statusi mogu biti: Generirano, Otkazano, Isključeno.          
- *Generirano*: XML datoteka elektroničkog dokumenta je kreirana. Od ovog trenutka moguće je nastaviti s daljnjim statusima za slanje datoteke u Fluentis Business Hub ili preuzeti XML datoteku za vanjske obrade; sljedeći statusi mogu biti: Potpisano, Za slanje, Otkazano, Isključeno.        
- *Potpisano*: dokument je vanjski potpisan certifikatom Cades/Xades i ponovno uvezen u Fluentis u novom formatu; sljedeći statusi mogu biti: Za slanje, Otkazano, Isključeno.       
- *Za slanje*: status se koristi ako je Fluentis Business Hub pravilno konfiguriran; dokument se stavlja u red za obradu slanja na SDI putem BizLink-a; nisu potrebne dodatne ručne radnje, potrebno je čekati rezultat od SDI-a.              
- *Otkazano*: dokument se ne šalje krajnjem korisniku, ali ostaje važeći za porezne svrhe (PDV).           
- *Isključeno*: dokument je kreiran, ali se ne šalje SDI-u (npr. interna storno nota ili kupac nije rezident u Italiji i nije obvezan na elektroničko fakturiranje sa slanjem SDI-u).    

### *Realizacija Otpremnice*

U zaglavlju računa, pritiskom na tipku **Realizacija Otpremnice** otvorit će se forma u kojoj je moguće filtrirati Otpremnice vezane uz kupca dokumenta.

Putem ove procedure moguće je kreirati račun od prodaje temeljen na realizaciji odgovarajuće Otpremnice. Dakle, moguće je unijeti artikle u račun, izvršavajući realizaciju u potpunosti ili djelomično za cijelu narudžbu ili pojedinu stavku.

Za korištenje ove procedure postoje početni uvjeti koje je potrebno poštovati:  
 -  kupac mora biti isti kao kod računa;  
 -  Otpremnica koja se želi realizirati mora imati označeno polje *Ispisano*;   

:::tip Napomena 
Sve bilješke unesene u zaglavlju Otpremnice (kao što su *Naš/Vaš referentni broj*, *Referenca na broj narudžbi kupca*, *Početne napomene*) prenose se u zaglavlje računa samo ako se podaci preuzimaju s jedne Otpremnice.  
:::

#### Postupak 

Filtri za kupca i valutu automatski će se popuniti prema kupcu odabranom na računu.

Kada su postavljeni svi željeni *Filtri* klikom na tipku *Traži* u mreži će se prikazati po jedan red za svaku Otpremnicu koja je ispisana, potvrđena i još nije realizirana ili je djelomično realizirana.

:::note Napomena
Procedura preuzima sve podatke prisutne u Otpremnici, što znači da će se primijeniti uvjeti kupnje koji su tada bili na snazi, čak i ako su se oni trenutno promijenili (npr. ažuriranje cjenika).
:::

:::note Napomena
Redovi tipa Napomena bit će uvijek vidljivi, čak i ako su već realizirani, sve dok svi redovi ostalih tipova nisu realizirani.
:::

U mreži rezultata korisnik može:

 1. odabrati *cijelu Otpremnicu*. Za to je dovoljno označiti kvačicu na početku reda;  
 2. odabrati samo *odabrane artikle* s *articoli* popisa. Za to je dovoljno označiti kvačicu na početku reda artikla;  
 3. odabrati samo *odabrane artikle* ali za *određenu količinu*. U tom slučaju potrebno je promijeniti količinu za realizaciju.

Za dovršetak postupka potrebno je kliknuti tipku *Prenesi*, koja će preuzeti sve podatke iz Otpremnice i prenijeti ih u račun.

#### Specifične tipke

> **Traži**: omogućuje pretraživanje dokumenata.  
> **Prenesi**: omogućuje prijenos podataka odabranog dokumenta u novi račun.   
> **Prisilna realizacija narudžbe**: omogućuje prisilnu realizaciju Otpremnice.  
> **Realizacija narudžbi**: omogućuje realizaciju Otpremnice.  
> **Proširi**: omogućuje proširenje cijelog stabla Otpremnica u donjoj mreži za prikaz sadržanih artikala.
> **Sažmi**: omogućuje sažimanje prikaza redova artikala i prikaz samo redova Otpremnice.    
> **Odaberi sve**: omogućuje odabir svih artikala s popisa. 
> **Poništi odabir svih**: omogućuje poništavanje odabira svih artikala s popisa. 

### *Realizacija iz narudžbi kupaca*

U zaglavlju računa, pritiskom na tipku **Realizacija iz narudžbi kupaca** otvorit će se forma u kojoj je moguće filtrirati narudžbe vezane uz kupca dokumenta.  

Putem ove procedure moguće je kreirati prodajni račun realizacijom odgovarajuće narudžbe kupca. Moguće je unijeti artikle u račun, realizirajući cijelu ili djelomičnu narudžbu ili pojedinačni red.  

Za korištenje ove procedure potrebno je ispuniti početne uvjete:  
 -  kupac narudžbi mora biti isti kao na računu;  
 -  narudžba koja se želi realizirati mora imati postavljen flag *Ispisano* i *Datum potvrde narudžbe*;
 -  tipovi dokumenata moraju biti kompatibilni: u tablici *Tipovi narudžbi* tip narudžbe koji se želi realizirati mora imati postavljen odgovarajući tip računa, dok u tablici *Tipovi računa* mora biti označeno *Narudžba* (što znači da račun proizlazi iz narudžbe).  

Zatim je potrebno u zaglavlju nove Otpremnice postaviti *Tip Otpremnice* koji se želi kreirati (koji mora odgovarati onom postavljenom u tablici *Tipovi narudžbi*) i *Kupca*. Nakon unosa ovih podataka, potrebno je kliknuti tipku *Realizacija narudžbi* za otvaranje forme realizacije.

:::tip Napomena 
Eventualne bilješke unesene u zaglavlju narudžbe (kao *Naš/Vaš referent*, *Referenca na broj narudžbi kupca*, *Početne napomene*) prenose se u zaglavlje računa samo u slučaju da se podaci preuzimaju iz jedne narudžbe.     
:::

#### Postupak 

Filteri za kupca i valutu bit će automatski postavljeni prema kupcu odabranom u računu. 

Nakon što su postavljeni svi željeni *Filteri*, klikom na tipku *Pretraživanje* prikazat će se u mreži jedan red za svaku narudžbu koja je *tpremljena, potvrđena i ne realizirana ili djelomično realizirana.

:::note Napomena
Postupak preuzima sve podatke iz narudžbe i posljedično će se primijeniti uvjeti kupnje koji su bili prisutni u narudžbi, čak i ako su trenutno promijenjeni (npr. ažuriranje cjenika).
:::

:::note Napomena
Redovi tipa Napomena uvijek će biti vidljivi, čak i ako su već realizirani, dok god svi redovi ostalih tipova nisu realizirani.
:::

U mreži rezultata korisnik ima mogućnost:

 1. odabrati *cijelu narudžbu*. Za to je dovoljno označiti checkbox na početku reda narudžbe.  
 2. odabrati samo *neke* od ponuđenih *artikala*. Za to je dovoljno označiti checkbox na početku reda artikla.
 3. odabrati samo *neke artikle* ali za *određenu količinu*. U tom slučaju potrebno je promijeniti količinu za realizaciju.  

Za dovršetak postupka potrebno je kliknuti tipku *Prijenos*, koja će preuzeti sve podatke iz narudžbe i prenijeti ih u račun.  

#### Specifične tipke

> **Pretraživanje**: omogućuje pretraživanje narudžbi.   
> **Prijenos**: omogućuje prijenos podataka odabrane narudžbe u novi račun.      
> **Izvršenje narudžbi**: omogućuje izvršenje narudžbe.    
> **Evasione ordini**: permette l'evasione dell'ordine.  
> **Proširi**: omogućuje proširenje cijelog stabla narudžbi u mreži ispod, za prikaz sadržanih artikala.   
> **Sažmi**: omogućuje sažimanje prikaza redova artikala i prikaz samo redova narudžbi.   
> **Odaberi sve**: omogućuje odabir svih artikala s liste.  
> **Poništi odabir svih**: omogućuje poništavanje odabira svih artikala s liste.   

### *Automatsko skidanje sa skladišta*

Druga procedura dostupna u zaglavlju je automatsko skidanje sa skladišta. Tipka se aktivira ako je dokument Otpremljen i ako račun nije povezan s otpremnicom koja je već skinuta.        
Podsjećamo da, ako su u [Parametri računa](/docs/configurations/parameters/sales/sales-invoices-parameters) omogućeni automatski skidi, ova procedura će se pokrenuti automatski nakon što je dokument Otpremljen.     
Kada se procedura pokrene, Fluentis provjerava prisutnost artikala na skladištu i računskih stavki u redovima računa te eventualnu prisutnost serija i serijskih brojeva ako su potrebni; u slučaju da procedura ne uspije, korisnik će biti obaviješten o grešci.       
Ako procedura uspije, kreira se [Zapis u skladištu](/docs/logistics/warehouse/stock-records/record) koji pomiče artikle iz dokumenta i postavlja se **Označeno kao skinuto** u zaglavlju.   

## **3. Artikli**

U ovoj kartici unose se svi artikli sa pripadajućim podacima.  

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju formi, pogledajte sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz upotrebu [helpa na polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili mogu biti predloženi iz povezanih procedura. 

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na red i popuniti potrebne podatke ili koristiti tipku **Novo** u traci izbornika. Dostupni stupci su sljedeći:  

**Tip linije** nudi mogućnost odabira, iz padajućeg  izbornika, artikala s različitim karakteristikama.

:::napomene Napomena
Ako se izravno započne s unosom artikla, njegova *klasa*, *šifra* i *tip retka - Šifrirani artikl* se automatski unesu.
:::

> **Artikl sa klasom**: to su artikli iz šifarnika i mogu se knjižiti u analitičko računovodstvo te registrirati u skladištu. <br />
> **Artikl bez klase**: to su opisni artikli i ne mogu se knjižiti u analitičko računovodstvo niti registrirati u skladištu. <br />
> **Trošak**: Ovo su ili artikli iz šifarnikai ili opisni artikli i tretiraju se na različite načine u sažecima dokumenata, ako je artikal troška šifriran i od fiskalnog interesa, bit će registriran u skladištu; ako je opisni ili nije od fiskalnog interesa, neće biti registriran u skladištu. <br />
> **Artikl bilješke**: to su opisne napomene navedene u ispisu dokumenta; ne utječe na računovodstvo i skladište.

- **Vrsta reda**: omogućuje odabir artikala s različitim karakteristikama iz padajuće liste:  
>- *Artikl kodificiran*: artikli iz šifarnika koji se mogu knjižiti u analitičko računovodstvo i registrirati u skladištu.   
>- *Artikl nekodificiran*: opisni artikli koji se mogu knjižiti u analitičko računovodstvo, ali se ne mogu pomaknuti kroz skladište.   
>- *Trošak*: artikli kodificirani ili opisni koji se sažimaju posebno u izvještajima; ako je artikl troška kodificiran i od fiskalnog interesa, bit će registriran u skladištu; ako nije kodificiran ili nije od fiskalnog interesa, neće biti registriran.    
>- *Artikl bilješke*: opisne napomene prikazane na ispisu dokumenta; ne utječu na računovodstvo ni na skladište.    
>- *Artikl poklon*: tretira se kao artikl kodificiran ili nekodificiran u fiskalne i skladišne svrhe; u izvještajima se prikazuje odvojeno; prema flagu *Povrat PDV-a*, PDV poklona se obračunava ili ne.     
>- *Avansna faktura*: redak za unos avansa u fakturi.    
>- *Storno avansne fakture*: zatvara redak avansa; podaci se mogu automatski unijeti prilikom odabira klase ili serijskog broja jer se automatski odabire vrsta reda 'Artikl kodificiran'.   

:::note[NAPOMENA]
Ako se izravno započne s unosom artikla, njegova klasa, kod i tip retka - Kodificirani artikal unose se automatski.
:::

- **Barkod**: Ako je u [Parametri faktura](/docs/configurations/parameters/sales/sales-invoices-parameters) omogućeno upravljanje Barcode-om, prikazat će se stupac Barcode u kojem se može odabrati podatak za artikl među Barcode-ovima unesenim u *Šifarnik artikala > Barcode*. 

**Klasa/Šifra/Opis artikla**: se ogu unijeti  [ručno ](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz upotrebu  [helpa u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koji će prikazati sve unesene podatke u *Šifarniku artikla*.

Nakon unosa artikla, njegov *Opis* bit će automatski preuzet iz šifarnika. Ako artikl ima *Varijante*, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

- **Artikl kupca**: Ako je u [Parametri faktura](/docs/configurations/parameters/sales/sales-invoices-parameters) omogućeno upravljanje artiklima kupca, prikazat će se stupac Artikl kupca, s kodom artikla koji je važeći za kupca primatelja dokumenta i unesen u *Šifarnik artikala > Kupci*.  

**Jedinica mjere**: predlaže se glavna mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.

**Količina**: predstavlja količinu glavne mjerne jedinice i kao zadanu vrijednost ima 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izuzimanje (na primjer iz narudžbe dobavljača)..

**Cijena**: Cijena se preuzima iz cjenika unesenog u karticu kontakta; cjenik referentnog artikla prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako je u kartici subjekta povezano više cjenika u nizu. (vidi [Šifarnik kontakata](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) ), isti dokument može sadržavati artikle iz različitih cjenika.

Kroz dvostruki klik u polju **Cjenici** (kartica *Popusti/Cjenici*) Korisnik ima mogućnost odabrati preuzimanje koje nije zadano, a iz kojeg se želi preuzeti cijena unesenog artikla.

:::note
Ako nema cjenika, predložena vrijednost je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-item)* ili će se dohvatiti prema postavkama parametara dokumenta. Ako ni ta vrijednost nije dostupna, prikazat će se cijena 0.  
:::

- **Osnovica**: u ovom polju se prikazuje Jedinična cijena pomnožena s količinom artikla, umanjena za popuste.         

- **Popusti artikla**: prikazuje se zbroj popusta predviđenih za artikl.      

- **Konačni popusti artikla**: prikazuje se zbroj konačnih popusta unesenih za artikl u Sažetke dokumenta.     

**PDV**: *prioritetan* je podatak unesen u polje Šifra PDV-a u *Šifarniku kontakta*. Ako ne postoji, predlaže se vrijednost koja je se nalazi u'*Šifarniku artikla*, no korisnik ima mogućnost unijeti i neki drugi podatak. Ovo polje je obavezno.

- **Promet prodaje**: prikazuje vrijednost unesenu u *Šifarnik artikala > kartica Općenito*. Ako ova vrijednost nije dostupna, neće se prikazati, ali prilikom knjiženja fakture uzet će se vrijednost iz polja *Trošak/Prinos prema zadanom kontu* u *Šifarnik klijenata > Financijski podaci > kartica Administrativa*, ili će se generirati poruka o pogrešci.  

#### Specifične tipke  

> **Ponovni izračun Conai**: ako je [Conai](/docs/sales/sales-flow/conai) omogućen za dokument, moguće je ponovo izračunati vrijednosti ovom tipkom nakon eventualnih izmjena.       

> **Ažuriraj podatke Conai u šifarniku artikala**: ako se u kartici *Conai materijali za artikl* promijene jedinice mjere i/ili težina, moguće je prenijeti te vrijednosti u Conai sekciju šifarnika artikala.  

> **Upravljanje ambalažom**: omogućuje otvaranje upravljanja ambalažom koja se vraća u dokumentu nabave. Tipka postaje aktivna ako je dokument spremljen, ali ne i učitan.
Klikom na tipku otvara se forma gdje se može unijeti količina, odabrati redak i izvršiti prijenos odabrane ambalaže u redove artikala klikom na tipku Execute. U ovoj formi prikazuju se artikli s prirodom Ambalaža koji su prisutni u tablici ambalaže za povrat.       
  
> **Ažuriranje cjenika**: klikom na padajući izbornik pored tipke pristupa se dvjema procedurama.
Prva procedura je **Ažuriraj trenutni cjenik**, koja omogućuje usklađivanje cijene artikla unutar cjenika nakon eventualne promjene cijene direktno u retku artikla.
Druga procedura je **Kreiraj novi cjenik s novim razdobljem**, koja omogućuje kreiranje novog personaliziranog cjenika za klijenta dokumenta; u pop-up prozoru se unose datumi početka i završetka valjanosti novog cjenika.     

> **Prikaži/Sakrij detalje**: klikom na ovu tipku prikazuju se ili skrivaju interne kartice unutar Artikala.  

> **Upravljanje avansima**: Fluentis omogućuje upravljanje fakturama avansa i njihovim storno zapisima; procedure se otvaraju klikom na ovu tipku.
> - **Kreiranje fakture avansa**  
Fakture avansa mogu imati posvećen [Tip dokumenta](/docs/configurations/tables/sales/invoices-type) ili ne, jer se upravljanje avansima odvija na razini artikala, a ne tablica. Upravljanje avansima stoga podrazumijeva kreiranje obične prodajne fakture, za koju su potrebni **Tip**, **Kupac** itd.
Nakon popunjavanja podataka o Zaglavlju, moguće je prijeći na kartici Artikli.  
U mreži artikala, unesite *Tip redka 6 Račun o predujmu*, slobodan opis, cijenu, PDV, i prihod koji bi trebao imati kao račun Predujmi kupaca, te eventualne druge podatke. Tako redak ove vrste određuje iznos predujma. Nakon što je račun dovršen, moguće ga je ispisati. U ovom trenutku račun o predujmu je potvrđen. Pri kreiranju drugih dokumenata za ovog kupca, Fluentis će me obavijestiti o postojanju računa o predujmu.  
> - **Storno fakture avansa**
Za storniranje fakture avansa potrebno je kreirati novu prodajnu fakturu za istog klijenta.   
U kartici Artikli, ako klijent ima barem jednu fakturu avansa, tipka Upravljanje avansima postaje aktivna. Klikom na nju otvara se odgovarajuća procedura.    
U kartici **Storno avansi** moguće je odabrati avanse koje treba poništiti; nakon odabira, pomoću tipke **Kreiraj storno** bit će kreirano poništenje, koje će biti prikazano u donjoj mreži.  
Pri zatvaranju obrasca bit će postavljeno pitanje o unosu nove vrijednosti poništenja na fakturi. U slučaju potvrde, bit će moguće konzultirati redak poništenja na kartici Artikli fakture, koja će prikazivati podatke o prethodno kreiranoj fakturi avansa.

Sljedeće kartice bit će analizirane u nastavku.

### 3.1 Popusti/Cjenici

**Popusti**: prikazuju se svi popusti povezani s artiklom, svaki s vlastitom osnovom za izračun i dodjelu. Popusti se mogu preuzeti: iz šifarnika kupca, iz uvjeta plaćanja dodijeljenog dokumentu, iz cjenika kupca. Svi predloženi podaci su promjenjivi.

**Cjenik**: prikazuje se cjenik iz kojeg je artikl preuzet, s datumom početka/kraja valjanosti, s posebnim uvjetima prodaje (npr. razred popusta) dodijeljenim artiklu u cjeniku.

*Posebna tipka*

> **Izbriši rabate**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjoj mreži.

### 3.2 Podaci artikla

- **Varijanta**: sadrži eventualnu varijantu artikla;  

**Alternativna JM**: u ovim poljima bit će prikazana količina u alternativnoj mjernoj jedinici u slučaju da je u *šifarniku artikla* ovaj podatak prisutan na kartici **Alternativne mjerne jedinice** (uzima se ona koja ima aktiviranu oznaku **Zadano**) i ako su u parametrima dokumenta aktivirane oznake: **Upravljanje dvostrukom mjernom jedinicom** i **Automatski prijedlog alternativne mjerne jedinice**.

**Alternativna količina**: predložena vrijednost za alternativnu mjernu jedinicu, izračunata množenjem ili dijeljenjem *upravljane količine* (one u glavnoj mjernoj jedinice) sa *faktorom pretvorbe* podešenim u *Šifarnik artikala > kartica Alternativne mjerne jedinice*.

- **Skladište, uzrok i lokacija**: prikazuju se skladište i uzrok koji će se automatski koristiti prilikom otpreme artikala iz skladišta. Podaci se preuzimaju iz tablice *Tipovi faktura*;          

- **Artikl**: prikazuje odabrani artikl;         

- **Projekt**: projekt povezan s dokumentom ili se može dodijeliti pomoću pomoćnog alata;  

- **PDV po odbitku**: ako je postavljen, PDV za poklon se uračunava u ukupni iznos fakture;       

- **Detalji izjava**: sadrži eventualnu [izjavu o namjeri](/docs/finance-area/declarations/declarations/intent-declaration) klijenta;  

- **Referenca narudžbe**: odnosi se na narudžbu iz koje je faktura kreirana;

- **Marka**: označava marku artikla, preuzetu iz šifrarnika artikala ili iz cjenika; 

- **Napomene**: omogućuje unos napomena za svaki artikl;

### 3.3 Agenti

**Trgovački predstavnik**: trgovački predstavnik povezan s odgovarajućom provizijom za odabrani artikal; podatak odgovara onome što je prisutno u *Zaglavlje> kartica Trgovački predstavnik*. Postotak se može promijeniti.

*Posebna tipka*

> **Izbriši Trgovačkog predstavnika**: omogućuje brisanje trgovačkog predstavnika povezanog s artiklom.

### 3.4 Serije i serijski brojevi

U ove dvije mreže mogu se unijeti serije i serijski brojevi koji se trebaju otpremiti iz skladišta i koji su povezani s artiklom u *Šifrarnik artikala > kartica [Serije i serijski brojevi]*(/docs/erp-home/registers/items/create-new-item) ili se mogu unijeti ručno.

Ova operacija ovisi o prisutnosti serija i serijskih brojeva u skladištu.

Ako artikl ne predviđa upravljanje serijama/serijskim brojevima, ova kartica će biti onemogućena.

:::tip Napomena
Ako u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) opcija *Obavezni serije i serijski brojevi* nije omogućena, dokument se može spremiti bez unosa serija/serijskih brojeva.      
Osim toga, ako je *Vrsta preuzimanja* serije definirana u [šifrarniku artikala](/docs/erp-home/registers/items/create-new-item) kao *FIFO* ili po *Datumu isteka*, prilikom knjiženja fakture u skladište serije će se predložiti automatski, ako ranije nisu unesene.   
:::

#### Pulsanti specifici

**Izbriši lot**: Omogućuje brisanje odabranog retka lota. 

**Izbriši serijski broj**: omogućuje brisanje odabranog retka serijskog broja.

### 3.5 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na kojima su distribuirane vrijednosti artikala.

Ovi podaci mogu se unijeti ručno ili *automatski* (u slučaju da su centri troškova/profita prethodno uneseni u *šifarnik kontakta*, *šifarnik artikla* ili u *kontni plan*).

### 3.6 Dodatni podaci

Donosi se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću unosa novih dodatnih podataka koji su korisni samo za predmetni dokument, uz mogućnost putem odgovarajuće oznake odabrati koje dodatne podatke ispisati.

### 3.7 Dokumenti u privitku

Prikazuje se detalj eventualnog **Priloženog dokumenta** (naziv, tip dokumenta, eventualne napomene, naš/vaša referenca). Za upute o tome kako priložiti dokument, upućujemo na članak [Priloži dokumente](/docs/guide/common/operations-with-data/attach-documents).

### 3.8 Sezione valori

Donji desni dio prikazuje sažetak troškova koji formiraju konačnu cijenu odabranog artikla u mreži artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u retku**: Cijena artikla * Količina artikla

**Ukupno rabat**: zbroj popusta na artikl, uključujući i konačne popuste;

**Osnovica**: Bruto osnovica - Popusti;

**Porez**: Iznos * stopa PDV-a artikla; 

**Ukupno**: Iznos + Porez.

## **4. Sažeci**

U različitim sekcijama ove kartice prikazane su glavne informacije cijelog dokumenta i neke specifične tipke.

### 4.1 PDV/dospijeća

#### Sažetak PDV-a

Vraća se sažetak PDV-a dokumenta, za svaki PDV kod.

#### Raspon rokova

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

Generalmente le scadenze si ricalcolano se viene modificato il pagamento in testata del documento. Le casistiche nelle quali non vengono aggiornate le scadenze, se modifico il pagamento in testata, sono le seguenti:      
-	Quando la fattura ha il link SDI ed ha stato diverso da NotExamined, Controlled, Canceled, Excluded 
-	Quando c’è almeno una scadenza con il flag ‘Modifica manuale’ attivo 
-	Quando la fattura ha il collegamento con uno o più Effetti oppure è collegata con una riga FSAdvanceInvoiceMaturity
-	Quando c’è lo sconto nella scadenza che però non proviene dal pagamento
-	Quando la somma dell’Importo nella griglia Pagamenti è maggiore dell’Imponibile della fattura
-	Oppure se le fatture sono state modificate fuori da Fluentis

In questi casi è necessario cliccare il bottone della barra degli strumenti 'Ricalcola e raggruppa scadenze'.    


### 4.2 Trgovački predstavnici/Rabati/Naknade

#### Konačna sniženja artikala  

Mogu se unijeti samo popusti, izraženi u postotku, koji će se primijeniti na ukupni iznos dokumenta.

Popusti uneseni u ovom odjeljku izračunavaju se i prikazuju na svakom artiklu dokumenta, u *kartica Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućava odabir tipologije popusta (predefinirane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)), dodijeljujući tipologiji prioritet primjene popusta i hoće li se popust obračunavati na osnovicu ili kaskadno u odnosu na već prethodno primijenjene popuste.
**Prioritet**: predstavlja prioritet primjene popusta; redoslijed koji se primjenjuje odvija se na rastući način. 
**Kaskadni/Osnovni**: za definirati da li izračun popusta koristi kao osnovu (cijena * količina) - (već obračunati popusti) ili (cijena * količina).  
**Vrijednost**: numerička vrijednost popusta koji treba primijeniti.  

#### Troškovi/Sniženja

Ovdje su troškovi uneseni u šifarniku kontakta, na kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na korišteni dokument.

**Tip/Opis**: omogućuje odabir tipa troškova (predefiniranih u *Tipovima troška*), dodjeljujući tipu postotak troška koji se treba primijeniti. 
**Postotak/Vrijednost**: polje koje identificira hoće li se troškovi izračunati s postotkom ili s unaprijed definiranim novčanim iznosom.  
**Postotak**: numerička vrijednost postotka troškova. 

#### Ostala polja

**Konačne napomene**: slobodno polje koje korisnik može ispuniti uz pomoć 'Help kodiranih napomena'.  

### 4.3 Ukupno dokumenta  

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

- **Ukupni postotak popusta**: moguće je unijeti dodatni konačni popust u postotku; unosom ovog polja automatski se popunjava i sljedeće polje.        

- **Ukupna vrijednost popusta**: moguće je unijeti konačni popust u vrijednosti.      

- **Zaokruživanje**: dodatno polje za zaokruživanje dokumenta na višu vrijednost. 

- **Ukupno za plaćanje**: prikazuje konačni iznos dokumenta.       

## **5. Prijevoz**

Ako je faktura prateća, potrebno je popuniti karticu Prijevoz.  
Podaci koji se unose su:

- **Primatelj**: predlaže se zadani primatelj unesen u šifrarniku klijenta; ako nije prisutan, koristi se adresa klijenta.     
- **Odredište**: predlaže se zadano odredište primatelja, ako je uneseno u šifrarniku klijenta.       
- **Broj za praćenje**: slobodno polje.     
- **Volumen**: predlaže se kumulativni volumen, rezultat zbroja volumena artikala (vrijednost se dohvaća iz Šifrarnika artikala > kartica Težine/Dimenzije), ako jedinica mjere volumena artikala odgovara onoj unesenu u parametrima fakture.    
- **Neto težina**: predlaže se kumulativna neto težina, rezultat zbroja težina artikala (vrijednost se dohvaća iz Šifrarnika artikala > kartica Težine/Dimenzije), ako jedinica mjere težine artikala odgovara onoj unesenu u parametrima fakture.    
- **Bruto težina**: predlaže se kumulativna bruto težina, rezultat zbroja težina artikala (vrijednost se dohvaća iz Šifrarnika artikala > kartica Težine/Dimenzije), ako jedinica mjere težine artikala odgovara onoj unesenu u parametrima fakture.         
-  **Vanjski izgled robe**: padajući izbornik koji upućuje na istoimenu tablicu.        
- **Paketi**: predlaže se broj paketa na temelju podataka unesenih u *Šifrarniku artikala > kartica Težine/Dimenzije*, u poljima *Artikli u jednom paketu* ili *Paketi za artikl*. Uzimaju se u obzir samo artikli koji imaju popunjeno ovo polje.       
- **Vrijednosti unesene ručno**: omogućuje izmjenu polja Volumen, Neto težina, Bruto težina i Paketi, koja inače preuzimaju podatke iz šifrarnika artikala bez mogućnosti izmjene.        
-  **Prijevoz**: potrebno je odabrati odgovornu osobu za prijevoz, stavljanjem kvačice kod Pošiljatelj, Primatelj ili Prijevoznik; ovisno o izboru, dolje prikazana sekcija će se promijeniti. Ako je prijevoz na trošak Pošiljatelja, moguće je unijeti Registraciju vozila, Prikolicu, Datum i Vrijeme početka prijevoza; ako je na trošak Primatelja, moguće je unijeti Registraciju vozila, Prikolicu, Datum i Vrijeme početka prijevoza; ako je na trošak Prijevoznika, dostupna polja su Knjigovodstvena evidencija prijevoznika, Registracija, Prikolica, Datum i Vrijeme prijevoza, eventualni Nalogodavac, Utovarivač, Vlasnik, Mjesto utovara.    

## **6. Povezani dokumenti**

U ovoj kartici moguće je pregledavati povezane dokumente.  
Za povezivanje dokumenata moguće je postupiti na dva načina:  
- korištenjem tipke u alatnoj traci **Dokumenti** moguće je odabrati hoće li se povezati već kodificirani dokument u Fluentisu ili kreirati novi dokument za povezivanje.  
- korištenjem desnog klika unutar mreže i odabirom *Priloži datoteku*, otvara se kreiranje novog dokumenta za povezivanje.   