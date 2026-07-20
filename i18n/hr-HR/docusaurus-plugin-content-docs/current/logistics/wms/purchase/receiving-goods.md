---
title: Primanje robe
sidebar_position: 1
---

:::important Čemu služi
Modul za **zaprimanje robe** ključan je alat za učinkovito upravljanje skladišnim procesima. Ova funkcionalnost omogućuje pravovremenu identifikaciju pristigle robe te precizno i organizirano knjiženje ulaza u skladište. Proces započinje odabirom neisporučenih ili djelomično isporučenih narudžbi dobavljačima, uz korištenje detaljnih filtera koji omogućuju pregled artikala koji čekaju zaprimanje.

Nakon odabira narudžbi, operater može generirati ulazni otpremni dokument (otpremnica/primka) te unijeti podatke o artiklima koji se zaprimaju. Sustav podržava i kreiranje utovarnih jedinica (UJ) kada se one koriste, čime se dodatno poboljšavaju organizacija i sljedivost zaprimljene robe. Unosom podataka o lotovima, količinama i drugim relevantnim informacijama osigurava se potpuna kontrola nad skladišnim kretanjima.
:::

Ova se procedura koristi tijekom zaprimanja robe za identifikaciju artikala, kreiranje i knjiženje primke.

Obrazac se otvara na filteru narudžbi dobavljačima, gdje je moguće pregledati sve narudžbe u statusu *Neisporučeno* i *Djelomično isporučeno*. 

Rezultate je moguće filtrirati prema *Broju*, *Vrsti narudžbe*, *Godini*, *Artiklu* i *Dobavljaču*.

Nakon odabira jedne ili više narudžbi dobavljaču, moguće je pregledati neisporučene i djelomično isporučene artikle pomoću gumba *Prikaži*, dok se putem gumba *Kreiraj primku* započinje unos artikala koji će biti uključeni u primku.

Glavni obrazac sastoji se od sljedećih kartica:

- **Kreiraj primku**

Nakon odabira narudžbe dobavljaču, putem gumba *Kreiraj primku* otvara se kartica *Kreiraj primku*, pri čemu je fokus automatski postavljen na polja **primke**, kako bi se najprije unio broj dokumenta.      

Kao [Vrsta primke](/docs/configurations/tables/purchase/purchase-delivery-notes-type) predložit će se ona definirana u [Vrsti narudžbe dobavljaču](/docs/configurations/tables/purchase/purchase-orders-type/) korištene narudžbe. Ako nije definirana, sustav će predložiti prvu [Vrstu primke](/docs/configurations/tables/purchase/purchase-delivery-notes-type) dostupnu u tablici, a korisnik je može ručno promijeniti.        

Također će biti prikazane informacije o prvom artiklu s narudžbe, zajedno s podacima zaglavlja same narudžbe.

> **Skladište**: određuje skladište u kojem će se provoditi skladišna knjiženja;          
> **Predložak skladišta**: određuje predložak skladišta koji će se koristiti za knjiženja;     
> **Tip otpremnice/primke**: određuje vrstu primke na temelju koje će se kreirati otpremni dokument;                
> **Datum**: određuje datum primke koji se kreira; prema zadanim postavkama predlaže se tekući datum;     
> **Narudžba**: prikazuje broj narudžbe dobavljaču;           
> **Artikl**: prikazuje klasu, šifru i opis artikla koji se potvrđuje;           
> **Broj linije**: prikazuje broj retka artikla na narudžbi dobavljaču;          
> **Barkod**: omogućuje očitavanje barkodova pomoću odgovarajućeg čitača radi izvršavanja različitih operacija;      
> **Lot dobavljača**: omogućuje unos broja lota dobavljača;     
> **LT**: omogućuje generiranje internog broja lota;           
> **Datum isteka**: prikazuje datum isteka lota;          
> **Naručena količina**: prikazuje naručenu količinu;    
> **Preostala količina**: prikazuje preostalu količinu za zaprimanje;       
> **Količina**: određuje količinu koja će se zaprimiti na skladište;    
> **Predloži mjesto**: prikazuje predloženu skladišnu lokaciju;              
> **Lokacija**: omogućuje unos druge skladišne lokacije umjesto predložene.

Prilikom kreiranja primke skladište i predložak skladišta predlažu se prema sljedećim pravilima:

- Ako je skladište navedeno na narudžbi dobavljaču jedno od skladišta definiranih u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika, sustav će ga automatski predložiti.          
- Ako skladište navedeno na narudžbi dobavljaču nije među skladištima definiranim u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika, polja **Skladište** i **Predložak skladišta** ostat će prazna. U tom slučaju korisnik ih mora ručno unijeti kako bi mogao nastaviti s postupkom. Prilikom unosa sustav prikazuje poruku za potvrdu. Ako korisnik odabere **DA**, može odabrati jedno od skladišta definiranih u parametrima za tog korisnika; ako odabere **NE**, polja **Skladište** i **Predložak skladišta** ostaju prazna.      
- Ako na narudžbi dobavljaču nije definirano skladište, a u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika postoji samo jedno skladište, sustav će automatski predložiti to skladište i pripadajući predložak skladišta. Ako je za korisnika definirano više skladišta, polja **Skladište** i **Predložak skladišta** ostat će prazna te će korisnik moći odabrati jedno od dostupnih skladišta bez prikazivanja dodatne poruke.

Pomoću polja **Input code** (odnosno korištenjem barkod čitača) moguće je unijeti podatke o lotu, skladišnoj lokaciji, evidentiranoj količini i artiklu, ako se želi zaprimiti drugi artikl od onoga koji je predložen, pod uvjetom da se nalazi na prethodno odabranim narudžbama.

Nakon unosa podataka za trenutni artikl, unos se potvrđuje gumbom **Potvrdi**.     

Nakon što su potvrđeni svi retci narudžbe, korisnik se automatski preusmjerava na karticu **Detalji otpremnice/primke**, gdje se pomoću gumba **Zatvori** sprema primka i kreira pripadajuće skladišno knjiženje.

**Specifični gumbi**

> **Potvrda**: potvrđuje unesene podatke za odabrani artikl;           
> **Potvrda + ispis**: potvrđuje unesene podatke za artikl te otvara skočni prozor za ispis etiketa;       
> **Ispis**: omogućuje ispis etiketa;       
> **Zatvori**: sprema kreiranu primku i generira pripadajuća skladišna knjiženja;        
> **Sljedeći artikl (predmet)**: prelazi na sljedeći artikl na narudžbi dobavljaču;       
> **Prethodni artikl (predmet)**: prelazi na prethodni artikl na narudžbi dobavljaču.

- **Detalji otpremnice/primke**       

U ovom obrascu prikazane su sve informacije o kreiranim stavkama.

**Specifični gumbi**

> **Izbriši artikle**: briše odabrani redak iz primke.   

- **Detalji narudžbe**

U ovom obrascu prikazane su sve informacije o odabranoj narudžbi dobavljaču.

## **Zaprimanje robe s utovarnim jedinicama**

Ako se artikl vodi kroz utovarne jedinice, tada na kartici [Pakiranje](/docs/erp-home/registers/items/create-new-item) šifarnika artikla mora postojati barem jedan redak s aktiviranom oznakom **Obavezna utovarna jedinica**, definiranim prioritetom i količinom.

Procedura zaprimanja robe uzet će u obzir redak s najvišim prioritetom za tog dobavljača (ako je dobavljač definiran, u suprotnom će se koristiti redak bez definiranog dobavljača), pri čemu oznaka **Obavezna utovarna jedinica** mora biti aktivna.

Nakon što su uneseni svi podaci o artiklu, kao što je opisano u prethodnom primjeru bez utovarnih jedinica, pritiskom na gumb **Potvrdi** otvara se novi obrazac za kreiranje utovarnih jedinica. U njemu su unaprijed popunjeni podaci artikla kao što su: *klasa*, *šifra* i *opis artikla*, kao i eventualna *varijanta* i *lot*.

**Preostala količina** u početku odgovara vrijednosti unesenoj u polje količine na glavnom obrascu. Ta se vrijednost zatim dinamički ažurira nakon svakog dodavanja novog retka u tablicu.

Tablica je u početku prazna, dok su sljedeća polja već popunjena:

> **Broj**: označava broj utovarnih jedinica tog tipa;         
> **Tip utovarne jedinice**: označava tip utovarne jedinice;       
> **Broj utovarne jedinice**: označava jedinstveni broj utovarne jedinice;         
> **Količina**: označava količinu sadržanu u toj utovarnoj jedinici.

Kursor je postavljen u polje **Referenca dobavljača**, kako bi operater mogao brzo i jednostavno unijeti tu vrijednost.

Nakon unosa te vrijednosti (nije obavezna), dovoljno je pritisnuti gumb **Dalje** kako bi se redak dodao u tablicu i ažurirala vrijednost preostale količine.

Nakon svakog pritiska na gumb **Dalje**, fokus se ponovno vraća na polje **Referenca dobavljača**.

Odabirom retka u tablici i pritiskom na gumb **Obriši**, redak se uklanja, a preostala količina automatski ažurira.

Operater također može izmijeniti već uneseni redak. Odabirom retka u tablici svi podaci prenose se u polja za unos, gdje ih korisnik može izmijeniti te pritiskom na gumb **Dalje** primijeniti promjene na odabrani redak.

Nakon završetka unosa i potvrde svih redaka, pritiskom na gumb **Zatvori** korisnik se vraća na glavni obrazac. Ponovnim pritiskom na gumb **Zatvori** kreiraju se skladišna knjiženja vezana uz upravo zaprimljenu primku te utovarne jedinice povezane s njim.

**Parametri skladišnog knjiženja** koje je potrebno definirati u tablici [Parametri skladišnog knjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

Konkretno, koriste se na sljedeći način:

> **ReceivingGoodsCreateDocument**: nakon odabira funkcije **Zaprimanje robe** i pritiska na gumb **Kreiraj primku**, skladište i skladišni predložak definirani u ovom parametru koriste se na stavkama upravo kreirane primke.

> **LoadingUnitCreationFromPurchaseDeliveryNoteItem**: nakon odabira funkcije **Zaprimanje robe** i pritiska na gumb **Kreiranje primku**, skladište i skladišni predložak definirani u ovom parametru koriste se za kreiranje i skladišno knjiženje novokreiranih utovarnih jedinica. Ovaj je parametar potreban samo ako se koriste utovarne jedinice.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

## **Zaprimanje robe s ispisom etiketa**

Ako je potrebno kreirati etikete za artikle koji se zaprimaju, nakon unosa svih podataka o artiklu, kao što je prethodno opisano, operater treba pritisnuti gumb **Potvrda + ispis**, nakon čega će se otvoriti poseban obrazac za kreiranje etiketa.

U tom je obrascu fokus automatski postavljen na polje količine koja će se ispisivati na svakoj etiketi, kako bi korisnik mogao odmah unijeti ili izmijeniti željenu vrijednost.

Također je moguće definirati broj etiketa za određenu količinu.

Nakon ispravnog unosa podataka potrebno je pritisnuti gumb **Dalje** kako bi se redak s etiketama dodao u središnju tablicu. Istovremeno će se ažurirati vrijednost **Preostale količine**, koja je u početku jednaka količini navedenoj u glavnom obrascu.

U slučaju pogreške moguće je odabrati redak i ukloniti ga pomoću gumba **Obriši**.

Nakon što su sve etikete definirane, moguće ih je ispisati odgovarajućim gumbom. Zatim se pritiskom na gumb **Zatvori** korisnik vraća na glavni obrazac za kreiranje primke, gdje može nastaviti s unosom novih stavki.

Operater također može ponovno otvoriti prethodno potvrđenu stavku koristeći gumb **Potvrda + ispis** te naknadno izmijeniti njezine etikete.

Nakon završetka svih izmjena, pritiskom na gumb **Zatvori** kreira se primka zajedno s pripadajućim skladišnim knjiženjima.

U ovom slučaju koriste se isti **Parametri skladišnog knjiženja** kao i u prethodno opisanim slučajevima.

## **Zaprimanje robe s alternativnim mjernim jedinicama**

Upravljanje alternativnim mjernim jedinicama aktivira se ako je uključena oznaka **Zadano WMS** na kartici [Alternativne mjerne jedinice u šifarniku artikla](/docs/erp-home/registers/items/create-new-item).

U tom slučaju na obrascu za zaprimanje robe prikazuju se dodatna polja za alternativnu mjernu jedinicu i alternativnu količinu. Faktor pretvorbe (FP) izračunava se dijeljenjem upravljane količine (**Upravljana MJ**) iz narudžbe dobavljaču s alternativnom količinom (**Alternativna MJ**) iz iste narudžbe (ako je riječ o alternativnoj mjernoj jedinici označenoj kao **Zadano WMS**):

**FP = Upravljana MJ / Alternativna MJ**

Unutar obrasca vrijede sljedeća pravila:

- ako se promijeni alternativna količina, upravljana količina izračunava se množenjem alternativne količine s prethodno izračunatim faktorom pretvorbe;
- ako se promijeni upravljana količina, alternativna količina izračunava se dijeljenjem upravljane količine s faktorom pretvorbe.

I u ovom slučaju koriste se isti **Parametri skladišnog knjiženja** kao i u prethodno opisanim slučajevima.