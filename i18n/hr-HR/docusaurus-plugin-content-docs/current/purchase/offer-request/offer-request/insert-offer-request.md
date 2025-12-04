---
title: Izradite upit za ponudu
sidebar_position: 3
---

Forma se otvara putem izbornika **Nabava > Zahtjev za ponudom > Novi zahtjev za ponudom** ili kroz filter pretrage Zahtjevi za ponudom, koristeći tipku Novi.

## *Kako kreirati zahtjev za ponudom*

<details>
 
<summary>Kliknite za prikaz osnovnih koraka</summary>
 
1. **Unesi obavezne podatke**: *Tip zahtjeva za ponudom* i *Dobavljač*. *Godina*, *Broj* i *Datum* bit će predloženi automatski.  
 
2. **Unesi ili izmijeni neobavezne podatke** u zaglavlju: poput datuma isporuke, eventualnih *popusta*, *odredišta*, itd.   
 
3. **Unesi artikle**: putem dvostrukog klika na polje *Kod artikla* otvara se pomoć za artikle koja omogućuje pretraživanje i odabir postojećeg artikla. Svi ostali podaci u retku, kao što su *jedinica mjere*, *količina*, *cijena*, bit će automatski predloženi, ali se mogu mijenjati.  
Alternativno, moguće je odabrati kao *Tip retka* *Neodređeni artikal* i ručno unijeti sljedeće podatke.
 
4. **Unesi eventualne popuste ili dodatne informacije** u karticama *Popusti* i *Podaci artikla*.  
 
5. **Provjeri odjeljak Sažetaka** i unesi eventualne završne popuste.   
 
6. Kada je ponuda provjerena i potvrđena, **unesi *Datum potvrde* u zaglavlju** kako bi dokument bio dostupan za konverziju u narudžbenicu.  
 
</details>

## **1. Gornji dio** {#upper-section}

Obavezna polja za unos zahtjeva za nabavu su sljedeća:

- **Tip**: obavezno polje. Ovisno o odabranom [Tipu RDO](/docs/configurations/tables/purchase/purchase-offer-type) aktiviraju se dodatne funkcionalnosti, npr. *Upravljanje sredstvima*.   
- **Datum/Godina/Broj**: po defaultu se predlaže trenutni datum, ali se može promijeniti.   
- **Broj**: predlaže se automatski na temelju odabranog Tip RDO-a.    
- **Dobavljač**: sadrži kontakt dobavljača kojem se traži ponuda.                  
- **Verzija**: prikazuje verziju ponude; novu verziju moguće je kreirati pomoću tipke **Nova verzija** na traci izbornika.        

:::note Napomena
Ako se dokument *automatski kreira* iz RDA, ovi podaci se preuzimaju iz *izvornog dokumenta* iz kojeg je generiran.
:::

## **2. Zaglavlje** {#header}

### 2.1 Podaci o dobavljaču

Unosom **Dobavljača** automatski se popunjavaju svi podaci u kartici **Zaglavlje**, prema informacijama unesenim ranije u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) uključujući:  
>- **Valuta**: sekcija s podacima o [Valuti](/docs/configurations/tables/general-settings/currencies), [Tečaju](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).     
>- **Dostava**: sekcija s podacima o [*Dostavama*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) te njegovom [rasponu valjanosti](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **Država**: sekcija s podacima o [*Država*](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language), [Zoni](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Plaćanja**: sekcija s podacima o [*Plaćanjima*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Popustima*, *Odredištu* i *Prijevozniku*.    

Sva ova polja mogu se izbrisati ili ručno izmijeniti od strane korisnika.

### 2.2 Neobavezni podaci zaglavlja

- **Bilješke**: ovo polje se može preuzeti iz kartice dobavljača ili iz RDA, ali ga je moguće unijeti i ručno.              
- **Naš/Vaš broj/reference**: u ovim poljima se obično upisuje interni referentni broj i referentni broj dobavljača za dokument. Ako je prisutan, preuzima se iz kartice dobavljača, inače se može unijeti ručno.    
- **Početne/Krajnje napomene**: mogu se odabrati bilješke koje su prethodno unesene u tablicu koja se nalazi na putu *Konfiguracija > Alati > Upravljanje kodiranim bilješkama*. Za to korisnik mora dvaput kliknuti na polje *Početne/Završne bilješke* kako bi otvorio pomoć za kodirane bilješke i odabrao podatke.
- **Projekt**: pomoću polja za odabir (help) moguće je povezati dokument s projektom. Ova veza funkcionira samo na razini zaglavlja dokumenta. Projekt se automatski unosi ako je RDO generirana iz RDA koja sadrži projekt.  
- **Datum potvrde ponude**: omogućuje unos datuma kada je ponuda potvrđena; nije obavezno polje. U postupku [Kreiranja narudžbenice iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) moguće je pregledati i pretvoriti RDO-ove koji nisu potvrđeni aktiviranjem odgovarajućeg flag-a u području filtera.    
- **Predviđeni datum isporuke**: se postavljena prije unosa artikala unutar RDO, bit će prikazana i na pojedinačnim redovima artikala. Alternativno, bit će dovoljno pritisnuti tipku *Zamijeni predviđeni datum isporuke u redovima* na traci izbornika kako bi se ažurirali datumi na redovima artikala.
- **Datum zatvaranja**: prilikom konverzije RDO-a u narudžbenicu, polje se automatski popunjava s trenutnim datumom ako je aktiviran flag za zatvaranje konvertiranih ponuda.  
- **Rok valjanosti ponude**: omogućuje postavljanje datuma do kojeg ponuda vrijedi.  

#### Specifične tipke  

> **Zamijeni predviđeni datum isporuke u stavkama**: nakon što se u zaglavlju unese predviđeni datum isporuke, moguće ga je masovno ažurirati i u svim već unesenim stavkama artikala.  

### 2.3 Plaćanja

[Načini plaćanja](/docs/configurations/tables/general-settings/payment-terms) sse automatski preuzimaju iz *Kartice dobavljača > kartica Plaćanja* i mogu ih korisnik izmijeniti ili obrisati.  
Ako je [Tip plaćanja](/docs/configurations/tables/general-settings/payment-types) povezan s financijskim popustom, iznos popusta se uzima u obzir samo u računovodstvene svrhe, odnosno pri obračunu dospjelih stavki dokumenta, a ne u ukupnom iznosu otpremnice.  

#### Specifične tipke  

> **Obriši plaćanja**: koristi se za brisanje odabranih redaka plaćanja.  

### 2.4 Popusti  

Prikazuju se samo unaprijed definirani popusti preuzeti iz *Kartice dobavljača > kartica Popusti* a ne oni vezani uz uvjete plaćanja ili pojedine artikle. Korisnik ih može mijenjati ili brisati.    

Predloženi popusti u zaglavlju dokumenta prenose se na svaki novi redak artikla unesen u dokument. Ako se nakon unosa redaka artikla unese novi popust u zaglavlju, on se neće replicirati u već unesene retke artikla.  

#### Specifične tipke  

> **Obriši unaprijed definirane popuste**: koristi se za brisanje odabranih popusta.  


### 2.5 Dodatni podaci  

Ovdje se prikazuju informacije unesene u *Karticu subjekta > kartica Dodatni podaci*, solo se esistono dati di default.

## **3. Artikli** {#items}

Za unos *Novog artikla* u mrežu dovoljno je postaviti se na redak i ispuniti tražene podatke ili koristiti tipku **Novi artikl** u traci izbornika.

### 3.1 Dati obbligatori

**Broj retka**: ovo polje će se automatski i progresivno popunjavati prilikom unosa podataka u retku.

- **Vrsta retka** omogućuje odabir artikala različitih karakteristika putem padajućeg izbornika:  
> - *Kodirani artikl*: artikli koji su kodirani u šifrarniku te se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu.   
> - *Nekodirani artikl*: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.    
> - *Artikl – trošak*: može biti kodiran ili nekodiran i prikazuje se odvojeno u sumarnim pregledima dokumenata. Ako je artikl–trošak kodiran i fiskalno relevantan, evidentira se u skladištu; ako je nekodiran ili nije fiskalno relevantan, ne evidentira se u skladištu.    
> - *Artikl – napomena*: opisne napomene koje se prikazuju na ispisu dokumenta; ne utječu na računovodstvo ni na skladišno poslovanje.  
> - *Artikl – poklon*: evidentira se kao kodirani ili nekodirani artikl u smislu fiskalnih i skladišnih pravila, ali se zbog svoje prirode prikazuje odvojeno u sumarnim pregledima dokumenta. Na temelju oznake Rivalsa IVA određuje se hoće li iznos PDV-a poklona biti terećen korisniku ili ne.  

:::note Bilješka
Ako se započne direktno s unosom artikla, njegova klasa, šifra i tip retka (*Kodirani artikl*) automatski će se popuniti.
:::

- **Klasa/Šifra/Opis artikla**: mogu se unijeti ručno ili putem „help“ prozora, koji prikazuje sve podatke ranije unesene u Šifrarnik artikala. Nakon što se artikl odabere, njegov se opis automatski preuzima iz anagrafike. Ako artikl ima varijante, željena se varijanta može odabrati u kartici Podaci artikla.  

- **Jedinica mjere**: sustav predlaže glavnu jedinicu mjere artikla, no ako su u anagrafici definirane alternativne jedinice mjere, korisnik može odabrati i neku drugu.  

- **Količina**: predstavlja količinu u glavnoj J.M., a početna vrijednost je 1. Može se ručno promijeniti ili se automatski preuzeti iz dokumenta koji se koristi za izvršenje.  

- **Cijena**: cijena se predlaže iz cjenika unesenog u karton kontakta; cjenik referentne cijene za sam artikal prikazan je na kartici *Podaci o artiklu*; isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u kartonu subjekta povezani više cjenika u nizu. Kroz dvostruki klik u polju Cjenici, korisnik ima mogućnost odabrati cjenik drugačiji od zadanog, iz kojeg će se preuzeti cijena unesenog artikla.  
U slučaju da cjenik nije prisutan, predložena vrijednost bit će preuzeta iz posljednje cijene u kartonu artikla. 

- **PDV**: prioritet ima stopa PDV-a unesena u anagrafici dobavljača. Ako nije definirana, preuzima se stopa iz anagrafike artikla. Korisnik ju po potrebi može promijeniti.

- **Jedinični iznos**: automatski se izračunava umanjen za eventualne popuste.

### 3.2 Neobavezni podaci

- **Promet nabave**: prikazuje vrijednost definiranu u kartici Općenito unutar anagrafike artikla.  

- **Datum zatvaranja**: označava datum zatvaranja ponude; automatski se popunjava ako je prilikom [kreiranja narudžbenice iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) označen parametar za zatvaranje povezanih ponuda.  

- **Procijenjeni datum isporuke**: predstavlja očekivani datum isporuke robe. Automatski se predlaže ako je *Predviđeni datum isporuke* prethodno postavljen u zaglavlju dokumenta.

- **Predviđeno razdoblje isporuke**: slobodno tekstualno polje u koje se može unijeti očekivano razdoblje isporuke robe.

### 3.3 Popusti {#discount}

- **Tip raspona**: prikazuje razred popusta koji će se primijeniti, a preuzima se iz anagrafike dobavljača ili iz cjenika.  

- **Ručno unesena cijena**: automatski se aktivira kada je cijena artikla ručno unesena ili izmijenjena.  

U tablici se prikazuju svi popusti povezani s artiklom, svaki s vlastitom osnovicom i pravilom primjene. Popusti se mogu preuzeti iz: anagrafike dobavljača, uvjeta plaćanja pridruženih dokumentu, cjenika ili iz [definicije politika popusta](/docs/purchase/price-control/definition). Svi ponuđeni podaci mogu se uređivati.

#### Posebne tipke

> **Obriši popuste**: omogućuje brisanje odabranog popusta iz pripadajuće tablice.

### 3.4 Podaci o artiklu {#items-data}

U ovoj kartici prikazane su i/ili se unose dodatne informacije vezane uz odabrani artikal.

>- **Artikal**: prikazuje artikal odabran u gornjoj tablici.   
>- **Varijanta**: u ovom polju moguće je odabrati varijantu artikla među onima koje su prethodno definirane u kartici [Varijante](/docs/erp-home/registers/items/create-new-item) anagrafike artikla. Ako su u cjeniku unesene različite cijene i/ili popusti za pojedine varijante, oni će se automatski ažurirati prilikom odabira druge varijante artikla.    
>- **Napomena**: bilješke vezane uz stavku artikla; mogu se unijeti ručno ili putem pomoći za kodirane napomene. Bit će prenesene u sve dokumente generirane iz ovog.  
>- **Skladište i predložak**: predložit će se skladište i pripadajuća vrsta promjene, koje će se automatski primijeniti prilikom knjiženja ulaza artikala u skladište.  

>- **Projekt**: predstavlja projekt koji se povezuje s dokumentom. Ako je projekt unesen u zaglavlju dokumenta, automatski će biti dodan svim stavkama artikala; alternativno se može odabrati putem pomoći za projekte.  
>- **Cjenik**: prikazuje cjenik iz kojeg je preuzeta cijena artikla, zajedno s datumom početka i završetka njegove valjanosti.  

>- **Alternativna jedinica mjere/Količina**: omogućuje postavljanje alternativne jedinice mjere i odgovarajuće količine za artikal odabran u tablici.  
>- **Cijena za alternativnu jedinicu mjere**: ako je aktivirano, označava da se cijena unesena u stavci odnosi na alternativnu, a ne na glavnu jedinicu mjere.   

>- **Marka**: predstavlja marku artikla, preuzetu iz njegove anagrafike ili iz cjenika.
>- **Zahtjev za nabavu**: ako je ponuda kreirana iz RDA, ovdje se prikazuje odgovarajući [Zahtjev za nabavu](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request).   


#### 3.4 Dodatni podaci {#extra-data}

Donosi se popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću unosa novih dodatnih podataka koji su korisni samo za predmetni dokument, uz mogućnost putem odgovarajuće oznake odabrati koje dodatne podatke ispisati.

#### 3.5 Documenti allegati {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Riepiloghi** {#summaries}

Nelle sezioni di questo tab sono presentate le informazioni principali dell'intero documento.

### 4.1 Sconti finali articoli

Gli sconti finali applicati a livello di singolo articolo vengono distribuiti (o "spalmati") su ciascuna riga articolo del documento. Questo significa che l'importo dello sconto è suddiviso proporzionalmente tra tutti gli articoli presenti nel documento, e lo sconto relativo sarà visibile nel tab Articoli per ogni singola riga.

- **Tipo/Descrizione sconto**: permette di scegliere le tipologie di sconto (predefiniti in [Tipi sconti](/docs/configurations/tables/general-settings/discount-types)), attribuendo alla tipologia la priorità di applicazione dello sconto e se lo sconto viene calcolato sull'imponibile o in cascata rispetto agli sconti precedentemente applicati.  

- **Priorità**: rappresenta la priorità di applicazione dello sconto; l'ordinamento da applicare avviene in modo crescente.  

- **Cascata/Imponibile**: per definire se il calcolo dello sconto usa come imponibile il (prezzo * quantità) - (sconti già calcolati) oppure (prezzo * quantità).  

- **Valore**: valore numerico dello sconto finale da applicare.  

### 4.2 Totali documento

- **Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli.

- **Acconto**: rappresenta il valore dell'eventuale acconto ricevuto per il documento.

- **Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*.

- **Totale sconti applicati**: rappresenta il valore totale degli sconti applicati sugli articoli, escludendo gli sconti finali.

- **Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*.

- **Sconti finali articoli**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli.

- **Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*.

- **Totale articoli spese**: rappresenta il valore delle spese inserite nel tab precedente come articoli di *Tipo spese*.

- **Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*.

- **Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*.

- **Totale spese/sconti/maggiorazioni**: rappresenta il valore totale delle spese inserite nella griglia *Spese*.

- **Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale articoli spese* + *Totale spese/sconti/maggiorazioni*.

- **IVA**: rappresenta la somma dei valori contenuti nei riepiloghi IVA.

- **Totale**: *Imponibile* + *IVA*.