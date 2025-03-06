---
title: Kreiraj prodajni račun
sidebar_position: 1
---

Obrazac se otvara putem putanja:

1. **Prodaje > Fakture > Kreiraj prodajni račun**   
ili   
2. putem gumba **Nova** koji se nalazi u obrascu [Pretraživanje faktura prodaje](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

:::note NAPOMENA
U fakturi prodaje automatski se predlažu trenutni **Datum** i **Godina**, ali vrijednosti se mogu promijeniti.
:::

## **1. Dati obbligatori**

Za nastavak stvaranja dokumenta, korisnik mora unijeti *obavezna* polja:

- **Tip fakture** predefiniran u *Konfiguracija > Tabele > Prodaja >  [Tip fakture prodaje](/docs/configurations/tables/sales/invoices-type)*.

- **Broj** svakom dokumentu dodijeljen je broj prema brojanju koje je korisnik odredio u tablici [Numeracija](/docs/configurations/tables/fluentis-numerations) i za tip dokumenta koji sadrži numeraciju.

- **Klijent**, korištenjem [polja za pomoć](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unoseći podatke.

Nastavite s kreiranjem unoseći barem obavezne podatke na svakom od sljedećih tabova.

## **2. Zaglavlje**

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

#### Ostala opcionalna polja

**Stanje računa**: prilikom stvaranja, račun nema aktivnih oznaka.  
Ova sekcija uključuje sljedeća polja:  
> **Ispisano** aktivira se kada se račun ispisa, označava da je račun isprintan.    
> **Knjiženo**: automatski se označava kada se račun knjiži.  
> **Otkazano**: aktivna oznaka omogućuje storno računa.   
> **Otpremljeno**: označava da je račun otpremljen iz skladišta, ručno ili *automatski* putem postupka *automatskog otpreme*.  

:::note NAPOMENA
U slučaju računa koji je stvoren iz već obrađenog dokumenta o prijevozu, prisutan je opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira oznaku *Preuzeto* čak i u računu.
:::

:::important VAŽNO
Oznake se mogu ukloniti postupkom **Povrati** operacije.
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

#### Posebni gumbi

> **Obrada iz narudžbenice kupca**: pokreće postupak za stvaranje računa iz narudžbenice kupca. Aktivira se kada su uneseni klijent i tip računa.  
> **Obrada iz otpremnice**: pokreće postupak za stvaranje računa iz otpremnice. Aktivira se kada su uneseni klijent i tip računa.  
> **Automatsk preuzimanje**: ovaj postupak omogućuje istovar zaliha dokumenta ako je označeno kao Ispisano.  
> **Pomoć za primatelja/odredište**: omogućuje pregled i unos primatelja/odredišta iz evidencije klijenata.  
> **Umetni agenta u linijama**: dodjeljuje Predstavnika unesenog u zaglavlje u retke stavki, u kartici Predstavnici.  
> **Umetni CIG/CUP u linijama**: Dodjeljuje unesene kodove u zaglavlje u retke stavki, u odgovarajući padajući izbornik.  
> **Otkaži plaćanja**: Briše plaćanja iz zaglavlja.  
> **Registar Sdi dokumenata**: Otvora SDI dokument koji se odnosi na račun, nakon Kontrolirano.

### 2.1 Plaćanja

**Uvijeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice. 

Ako dokument potječe iz:

- Narudžba kupca, vrste plaćanja mogu biti preuzete iz prvog dokumenta (narudžbenica), iz klijentovih podataka ili se mogu prikazati u obrascu sva plaćanja dokumenata za izvršenje, a korisnik odabire željeni način plaćanja.  

- Plaćanja mogu biti preuzeta iz klijentove kartice ili iz pojedinačnih plaćanja prisutnih u svakoj otpremnici. U ovom slučaju, u računu će se prikazati vrsta plaćanja s istim iznosom i PDV-om kao i u otpremnici, te će se dodati nova linija za bilo kakve stavke koje nisu proizašle iz otpremnice.

### 2.2 Popusti

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Popusti ponuđeni u zaglavlju dokumenta pojavit će se u svakom novom retku stavke u dokumentu.

Nakon što se unesu nove stavke, u zaglavlje se unese novi popust, on neće biti primijenjen na već unesene stavke.

#### Posebni gumb*  
> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

### 2.3 Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj anagrafici, Predstavnik ipak mora biti unesen, ali s provizijom NULL, jer da je s provizijom 0, to bi značilo da je Predstavnik povezan s Predstavnikom, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

### 2.4 Dodatni podaci

Ovdje se nudi informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## Procedure testata:  

### *Stvaranje prema picking listi*

Postupak omogućuje preuzimanje artikla iz izbora (Skladište/Izbor) u fakturu. Nakon ovog postupka, izbor će imati status *Izuzeto*.

#### Posebni gumbi

> **Pretraga izbora**: gumb za pretraživanje izbora;   
> **Označi sve**: gumb za odabir svih članaka iz izbora;  
> **Prebaci artikle**: gumb za prijenos odabranih članaka iz izbora.  

### *Stvaranje fakture iz packing list*

Omogućuje preuzimanje artikla iz popisa pakiranja. Popis pakiranja, nakon ovog postupka, će imati status *Učitaj*.

#### Posebni gumbi

> **Pretraga pakirna liste**: gumb za pretraživanje popisa pakiranja.  
> **Označi sve**: gumb za odabir svih članaka iz popisa pakiranja.  
> **Prebaci artikle**: gumb za prijenos odabranih članaka iz popisa pakiranja.  

### *Izvršenje narudžbi kupaca*

U zaglavlju fakture, pritiskom na gumb **Izvršenje narudžbi kupaca** otvorit će se forma gdje je moguće filtrirati narudžbe koje se odnose na klijenta iz dokumenta.

Kroz ovaj postupak moguće je kreirati prodajnu fakturu izvršenjem odgovarajuće narudžbe kupca. Moguće je unijeti artikle unutar fakture, potpuno ili djelomično ispunjavajući cijelu narudžbu ili red.

Da bi se koristio ovaj postupak, potrebno je poštivati sljedeće početne uvjete:  
 -  klijent narudžbi mora biti isti kao i na fakturi;
 -  narudžba koju želite izvršiti mora imati postavljenu oznaku *Ispisano* i *Datum potvrde narudžbe*;
 - vrste dokumenata moraju biti kompatibilne: u tablici  *Tipovi narudžbi* tip narudžbe koji želite izvršiti mora imati postavljenu odgovarajuću vrstu fakture, dok u tablici *Tipovi faktura* mora biti prisutna oznaka za *Narudžbu* (koja označava da faktura proizlazi iz narudžbe);

Zatim je potrebno postaviti u zaglavlju nove fakture *Tip otpremnice* koji želite kreirati (koji se mora podudarati s onim postavljenim u tablici *Tipovi narudžbi*) i *Klijenta*. Nakon što su ovi podaci uneseni, trebat će kliknuti na gumb *Izvršenje narudžbi* kako biste otvorili obrazac za izvršenje.

#### Postupak  

Filtri za klijenta i valutu automatski će se popuniti prema odabranom klijentu na fakturi.

Nakon što su svi željeni *Filtri* postavljeni, klikom na gumb *Traži* prikazat će se u rešetki jedan redak za svaku narudžbu koja je ispisana, potvrđena i neizvršena ili djelomično izvršena.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbi i kao rezultat će biti primijenjeni uvjeti kupnje koji su prisutni u narudžbi, čak i ako su se ti uvjeti promijenili (npr. ažuriranje cjenika).
:::

U rešetki rezultata, korisnik ima mogućnost:

 1. odabrati *cijelu narudžbu*. Da biste to učinili, dovoljno je odabrati oznaku na početku reda narudžbe.
 2. odabrati samo *neke* od ponuđenih *artikla*. Da biste to učinili, dovoljno je odabrati oznaku na početku retka artikla.
 3. odabrati samo neke *artikle*, ali samo za *određenu količinu*. U tom slučaju, količinu za izvršenje treba promijeniti.

Za dovršetak postupka, trebat će kliknuti na gumb *Prijenos*, koji će preuzeti sve podatke prisutne u narudžbi i prenijeti ih u fakturu.

#### Posebni gumbi 

> **Traži**: omogućuje pretraživanje narudžbi kupca.   
> **Prijenos**: omogućuje prijenos podataka odabrane narudžbe unutar nove fakture.   
> **Prisilno izvršenje narudžbe**: omogućuje prisilno izvršenje narudžbe.  
> **Izvršenje narudžbi**: omogućuje izvršenje narudžbe.  
> **Potpuno proširivanje**: omogućuje proširenje cijelog stabla narudžbi u donjoj rešetki kako bi se prikazali artikli unutar njih.  
> **Sažmi**: omogućuje skraćivanje prikaza redova artikla i prikazivanje samo redova narudžbe.   
> **Označi sve**: omogućuje odabir svih artikala s popisa.  
> **Odznači sve**: omogućuje poništavanje odabira svih artikala s popisa.  

### *Upravljanje avansima*

Fluentis omogućuje upravljanje fakturama za akontaciju i njihovim poništenjem.

**Stvaranje fakture za akontaciju**  
Fakture za akontaciju mogu imati poseban [Vrsta dokumenta](/docs/configurations/tables/sales/invoices-type) ili ne, budući da se upravljanje akontacijama ne odvija na razini tablice, već na razini stavki. Upravljanje akontacijama stoga uključuje stvaranje obične prodajne fakture, za koju su potrebni **Tip**, **Klijent**, itd.
Nakon što su podaci o zaglavlju popunjeni, možete prijeći na karticu *Stavke*. U prikazu stavki, unesite *Tip stavke 6 Faktura za akontaciju*, slobodan Opis, Cijenu, PDV, fakturirani iznos (koji bi trebao imati račun za Akontacije klijenata), i ostale podatke po potrebi. Dakle, ovaj tip stavke određuje iznos akontacije. Kada je faktura završena, možete je ispisati. Tada je faktura za akontaciju potvrđena. Prilikom stvaranja drugih dokumenata za ovog klijenta, Fluentis će vas obavijestiti o postojanju fakture za akontaciju.

**Storno račun**  
Za poništenje fakture za akontaciju potrebno je stvoriti novu prodajnu fakturu za istog klijenta. Na kartici Stavke, ako klijent ima barem jednu fakturu za akontaciju, gumb **Upravljanje avansima** na gornjem izborniku bit će aktivan. Klikom na njega otvara se odgovarajuća procedura.    
Na kartici **Storno avansa** moguće je odabrati akontacije za poništavanje; nakon odabira, pritiskom na gumb **Izradite stavku za poništenje fakture** bit će stvoren storno, koji će biti prikazan u donjoj mreži. Pri zatvaranju prozora bit će zatraženo potvrđivanje novog iznosa poništenja u fakturi.   
Ako je potvrđeno, moći ćete pregledati stavku poništenja na kartici Stavke fakture, koja će prikazivati podatke o prethodnoj fakturi za akontaciju.

## **3. Artikli**

U ovoj kartici unose se svi artikli s pripadajućim podacima.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih može predložiti povezane procedure.

Za unos **Novog artikla** u mrežu dovoljno je postaviti se na redak kako biste ispunili različite podatke ili koristiti gumb **Novo** prisutan na gornjem izborniku.


### Obvezni podaci

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
> **Račun za predujam**: artikl depozita koristi se za izradu depozitnih faktura;  
> **Storno račun**: linija artikla storno depozita zatvara liniju depozita i depoziti se mogu odabrati pomoću pomoći depozita. Ovi podaci mogu se automatski unijeti kada se unese klasa ili serija jer je automatski odabran tip reda *kodirani artikl*.

**Klasa/Šifra/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve povezane podatke unesene u Šifarnik artikala.

Nakon unosa artikla, njegov će se *Opis* automatski preuzeti iz evidencije. Ako artikl ima varijante, bit će potrebno odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: nudi se primarna jedinica mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Količina**: predstavlja količinu osnovne mjere, a pretpostavljena vrijednost je 1; može se unijeti ručno ili se može preuzeti iz razmatranog dokumenta za izvršenje (npr. iz narudžbe dobavljača).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakta; cjenik koji se odnosi na sami artikl prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u evidenciji subjekta povezani više cjenika u kaskadi (vidi **Šifarnik kontakata**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvostrukim klikom u polje **Cjenici** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će biti preuzeta cijena unesenog artikla.

U odsutnosti cjenika, predloženi podatak je **prodajna cijena** preuzeta iz *Šifarnik artikala > kartica [Troškovi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* ili će se povući prema postavkama parametara dokumenta. Ako ni to nije dostupno, bit će navedena cijena 0.

**PDV**: prednost ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako ovaj podatak nije prisutan, predložena je vrijednost iz *Šifarnika artikala*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.


### Neobvezni podaci

**Promet prodaje**: predložena je vrijednost unesena u *Šifarnik artikala > kartica Općenito*. 

Ako se ne preuzme, unesite ga odabirom jedne od ponuđenih stavki iz odgovarajućeg izbornika, inače nedostatak ovih podataka može uzrokovati pogreške u knjiženju fakture koja će biti generirana iz narudžbe, ako u *Podaci kupca > Računovodstveni podaci > kartica Administrativno* nije postavljena vrijednost u polju *Predefinirani prihod od kontrapartije*.

**Alternativna JMJ**: u ovim poljima bit će prikazana količina u alternativnoj jedinici mjere ako je u Šifarnik artikala ovaj podatak prisutan u kartici **Alternativne jedinice mjere** (uzima se ona koja ima postavljen zastavu **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljajte dvostrukom jedinicom mjere i Automatski prijedlog JM alternativa**.

**Alternativna količina**: predložena je vrijednost u vezi s alternativnom JM, izračunata množenjem ili dijeljenjem *količine za upravljanje* (vezane uz glavnu JM) s *faktorom konverzije* postavljenim u *Šifarnik artikala > kartica Alternativne jedinice mjere*.

**Težine**: ukupna neto težina i ukupna bruto težina stavki artikla. Prikazane su težine artikala u evidenciji pomnožene s količinom retka.

### 3.1 Popusti/Cjenici

**Popusti**: Prikazuju se sva sniženja povezana s artiklom, svako s vlastitom osnovom i načinom dodjele. Sniženja se mogu preuzeti iz: podataka o klijentu, rješenja plaćanja dodijeljenog dokumentu, cjenika povezanog s klijentom. Svi prikazani podaci mogu se mijenjati

**Vrijednosti cjenika**: Prikazuje se cjenik iz kojeg je preuzet artikl, s datumom početka/kraja valjanosti i posebnim prodajnim uvjetima (npr. Razinama popusta) dodijeljenim artiklu u cjeniku. 

#### Poseban gumb*   
> **Izbriši rabat**: omogućuje brisanje popusta povezanog s odabranim artiklom u gornjem retku.

### 3.2 Podaci artikla

**Varijante**: sadrži eventualnu varijantu artikla;    

**Skladište, uzrok i lokacija**: ponuđeno je skladište i uzrok koji će se automatski pojaviti prilikom pražnjenja artikala iz skladišta. Podaci su preuzeti iz tabele *Tipovi računa*;  

**Artikl**: prikazuje odabrani artikl;     

**Projekt**: to je projekt povezan s dokumentom ili se može dodijeliti uz pomoć pomoći; 

**Pravo naplate PDV-a**: ako je postavljena, PDV na poklon bit će uzet u obzir za ukupni račun;   

**Detaljne deklaracije**: sadrži eventualnu [izjavu o namjeri ](/docs/finance-area/declarations/declarations/intent-declaration) klijenta;

**Referenca naloga**: odnosi se na narudžbu iz koje je stvoren račun;

**Marka**: prikazuje marku artikla, preuzetu iz njegove ankete ili iz cjenika artikla;

**Bilješke**: omogućuje unos bilješki za svaki artikl;

### 3.3 Trgovački predstavnici

**Trgovački predstavnici**: predstavnik povezan s odgovarajućom provizijom za odabrani artikl; podatak odgovara onome što je navedeno u *Zaglavlje > kartica Trgovački predstavnici*. Postotak se može promijeniti. 

#### Poseban gumb* 
> **Izbriši trgovačkog predstavnike**: omogućuje brisanje povezanog predstavnika s artiklom.

### Varijante 

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** u šifarnik artikla ili se mogu unijeti ručno.
Omogućuje upravljanje varijantama artikla na način koji se razlikuje od onoga što je ponuđeno na retku s artiklima. 
Na primjer, na svakom se retku s artiklima može unijeti ukupna količina; zatim, u istoj kartici mogu se definirati različite količine za više varijanti odabranog artikla i čak za varijantu i atribut, odnosno upravljanje veličinom/bojom. Ova operacija je moguća samo ako su sve varijante artikla cijenjene po istoj cijeni kao i standardna konfiguracija artikla.  

### 3.4 Lotovi i serijski brojevi

U oba prikaza mogu se unijeti lotovi i serijski brojevi koji se moraju isprazniti iz skladišta, a koji su povezani s artiklom u *Šifarnik Artikla > kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili ih se može unijeti ručno. 

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

## **4. Sažeci**

U različitim dijelovima ove kartice prikazane su glavne informacije cijelog dokumenta i neki specifični gumbi. 

### 4.1 PDV/Rokovi 

#### Sažetak PDV-a

Prikazan je pregled PDV-a dokumenta, za svaki PDV.

#### Sažetak rokova

Prikazuje pregled rokova dokumenta, za svaki *tip i način plaćanja*.

**Broj**: progresivna vrijednost retka.    
**Plaćanje**: predstavlja alfanumerički kod *Način plaćanja preuzet iz zaglavlja dokumenta > kartica Plaćanja*.

**Iznos**: izračunati iznos roka. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka *Ručno uređivanje*. (Automatski se provjeravaju i upozorenja o podudarnosti vrijednosti rokova i ukupnog računa)

**Datum dospijeća**: izračunati datum dospijeća. Može se ručno postaviti, u kojem slučaju se automatski aktivira sljedeća oznaka Ručno uređivanje.

**Troškovi naplate**: polje u kojem su prikazani izračunati troškovi inkasa.

**PDV**: koji se primjenjuje na troškove inkasa (može se postaviti i ručno)

**Predložak plaćanja**: moguće je izravno unijeti u račun računsku sljedivost koja rezultira automatskim zapisom naplate/plaćanja. Obratiti pažnju na predložak računske sljedivosti jer će koristiti prisutne račune čak i bez podračuna, zbog čega postoji sljedeće polje.

**Račun s podračunom kupca/dobavljača** koji se koristi za naplatu/plaćanje (npr. gotovina ili banka) roka, što zamjenjuje prisutni račun u računskoj kauzalnosti plaćanja (ili inkasa)

**Primka broj**: eventualni broj računa za primljene novce

**Jed.**: aktivira računovodstvo zatvaranja rokova u automatskom zapisu

**Vrsta popusta**: vrsta financijskog popusta

**Dospjela vrijednost**: vrijednost financijskog popusta po naplati

**Detaljne deklaracije**: To je referenca na izjavu namjere. PDV primijenjen na troškove inkasa može uvijek biti PDV plafond, pa je stoga potrebno moći unijeti i povezanu izjavu namjere (kao kod redaka stavki i troškova)

**ULAZNI RAČUNI**:

**Znak**: samo rokovi s ovom oznakom kasnije se obrađuju u plaćanju s postavljenim računom i računom.

**Modeli referentnog plaćanja**: model stvaranja kodova plaćanja. U nekim stranim lokalizacijama svaki rok u računu ima kod dodijeljen od strane fakturanta: ovaj se kod strukturira prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se mogao izgraditi kod pomoću algoritma.

**Šifre modela plaćanja**: ovo je šifra (strukturirana kao prethodni model) koju treba navesti u stavci, a zatim u plaćanjima koje se šalju banci, kako bi ona obavijestila korisnika o tome koji je rok plaćen (i tako automatizirala uvoz iz bankovnih transakcija s zatvaranjem stavke). Odatle se ispunjava unutar stavke i u Sepa datoteci.

**Ograničenje datuma plaćanja unaprijed**: Ovo je polje predviđeno u SDI formatu računa, rok do kojeg se može primijeniti financijski popust.

Općenito, rokovi dospijeća ponovno se izračunavaju ako se promijeni plaćanje u zaglavlju dokumenta. Slučajevi u kojima se rokovi dospijeća ne ažuriraju ako se promijeni plaćanje u zaglavlju su sljedeći:

- Kada je račun povezan s SDI poveznicom i ima status različit od NotExamined, Controlled, Canceled, Excluded;  
- Kada postoji barem jedan rok dospijeća s aktivnom značajkom *Ručna izmjena*;  
- Kada je račun povezan s jednim ili više efektima ili povezan s linijom FSAdvanceInvoiceMaturity;     
- Kada postoji popust na rok dospijeća koji ne dolazi iz plaćanja;   
- Kada je ukupan iznos u mreži Plaćanja veći od osnovice računa;   
- Ili ako su računi mijenjani izvan Fluentisa.  

### 4.2 Trgovački predstavnici/Rabati/Naknade

#### Konačni popusti artikala 

Mogu se unijeti samo konačna sniženja izražena u postotku, koja će se primijeniti na ukupni iznos dokumenta. 

Sniženja unesena u ovom dijelu izračunavaju se i prikazuju za svaki artikl u dokumentu, u *kartici Artikli > kartici Sniženja/Cjenici*.

**Vrsta/Opis sniženja**: omogućuje odabir vrsta popusta (predefinirane u *Vrstama sniženja*), dodjeljujući vrsti prioritet primjene popusta i određujući je li popust na osnovicu ili se kumulativno primjenjuje s prethodno primijenjenim popustima.  
**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se vrši uzlazno.  
**Cijena prije sniženja**: određuje da li se popust izračunava na (*cijena x količina*) - (*prethodno izračunati popusti*) ili (*cijena x količina*).
**Vrijednost**: numerička vrijednost završnog popusta koji se primjenjuje.  

#### Troškovi/Popusti

Prikazani su troškovi uneseni u šifarnik kontakta, u kartici *Troškovi/Sniženja*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument. 

**Vrsta/Opis**: omogućuje odabir vrsta troškova (predefiniranih u Vrstama troškova), dodjeljujući vrsti postotak troškova koji se primjenjuje.   
**Postotak/Vrijednost**: polje koje određuje treba li se troškovi izračunati postotkom ili unaprijed određenom novčanom vrijednošću.   
**Postotak**: numerička vrijednost postotka troškova. 

#### Ostala polja

**Završne napomene**: opisno polje koje korisnik može popuniti uz  *Pomoć za šifrirane napomene*.

### 4.3 Ukupni iznos dokumenta 

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

**Ukupno**: *Osnovica + PDV*.

## **5. Prijevoz**

**Volumen**: prikazuje se ukupni volumen koji je rezultat zbroja volumena artikla (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere volumena artikla podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Neto težina**: prikazuje se ukupna neto težina koja je rezultat zbroja težina artikala (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere težine artikala podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Bruto težina**: prikazuje se ukupna bruto težina koja je rezultat zbroja težina artikala (vrijednost se preuzima iz *Šifarnika artikla > Težine/dimenzije*), kada se jedinica mjere težine artikala podudara s onom unesenom u parametrima računa. Razmatraju se samo artikli koji imaju ovaj polje ispunjeno;

**Broj paketa**: prikazuje se broj paketa, na temelju podataka unesenih u šifarniku artikala, u kartici Težine/dimenzije, u poljima *Artikli prisutni u paketu* ili *paket za oblikovanje artikla*. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Prijevoz napravio**: automatski se prikazuje *Prijevoz putem* određenog kanala prisutan u registru kupca.

Napomena: Za ponovno izračunavanje vrijednosti prijevoza u sažetku dokumenta potrebno je postaviti oznaku **Ponovno izračunavanje prijevoza** u parametrima povezanog dokumenta.