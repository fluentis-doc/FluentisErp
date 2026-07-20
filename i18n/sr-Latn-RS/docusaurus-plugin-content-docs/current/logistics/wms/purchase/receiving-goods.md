---
title: Prijem robe
sidebar_position: 1
---

:::important Čemu služi
Modul za **prijem robe** ključan je alat za efikasno upravljanje skladišnim procesima. Ova funkcionalnost omogućava pravovremenu identifikaciju pristigle robe i precizno, organizovano knjiženje ulaza u skladište. Proces započinje odabirom neisporučenih ili delimično isporučenih narudžbina dobavljačima, uz korišćenje detaljnih filtera koji omogućavaju pregled artikala koji čekaju prijem.

Nakon odabira narudžbina, operater može generisati ulazni otpremni dokument (otpremnica/prijemnica) i uneti podatke o artiklima koji se primaju. Sistem podržava i kreiranje utovarnih jedinica (UJ) kada se one koriste, čime se dodatno unapređuju organizacija i sledljivost primljene robe. Unosom podataka o lotovima, količinama i drugim relevantnim informacijama obezbeđuje se potpuna kontrola nad skladišnim kretanjima.
:::

Ova procedura koristi se tokom prijema robe za identifikaciju artikala, kreiranje i knjiženje prijemnice.

Obrazac se otvara na filteru narudžbina dobavljačima, gde je moguće pregledati sve narudžbine u statusu *Neisporučeno* i *Delimično isporučeno*.

Rezultate je moguće filtrirati prema *Broju*, *Vrsti narudžbine*, *Godini*, *Artiklu* i *Dobavljaču*.

Nakon odabira jedne ili više narudžbina dobavljaču, moguće je pregledati neisporučene i delimično isporučene artikle pomoću dugmeta *Prikaži*, dok se putem dugmeta *Kreiraj prijemnicu* započinje unos artikala koji će biti uključeni u prijemnicu.

Glavni obrazac sastoji se od sledeće kartice:

- **Kreiraj prijemnicu**

Nakon odabira narudžbine dobavljaču, putem dugmeta *Kreiraj prijemnicu* otvara se kartica *Kreiraj prijemnicu*, pri čemu je fokus automatski postavljen na polja **prijemnice**, kako bi se najpre uneo broj dokumenta.

Kao [Vrsta prijemnice](/docs/configurations/tables/purchase/purchase-delivery-notes-type) biće predložena ona definisana u [Vrsti narudžbine dobavljaču](/docs/configurations/tables/purchase/purchase-orders-type/) korišćene narudžbine. Ako nije definisana, sistem će predložiti prvu [Vrstu prijemnice](/docs/configurations/tables/purchase/purchase-delivery-notes-type) dostupnu u tabeli, a korisnik je može ručno promeniti.

Takođe će biti prikazane informacije o prvom artiklu sa narudžbine, zajedno sa podacima zaglavlja same narudžbine.

> **Skladište**: određuje skladište u kojem će se vršiti skladišna knjiženja;          
> **Predložak skladišta**: određuje predložak skladišta koji će se koristiti za knjiženja;     
> **Tip otpremnice/prijemnice**: određuje vrstu prijemnice na osnovu koje će se kreirati otpremni dokument;                
> **Datum**: određuje datum prijemnice koja se kreira; podrazumevano se predlaže tekući datum;     
> **Narudžbina**: prikazuje broj narudžbine dobavljaču;           
> **Artikl**: prikazuje klasu, šifru i opis artikla koji se potvrđuje;           
> **Broj linije**: prikazuje broj reda artikla na narudžbini dobavljaču;          
> **Barkod**: omogućava očitavanje barkodova pomoću odgovarajućeg čitača radi izvršavanja različitih operacija;      
> **Lot dobavljača**: omogućava unos broja lota dobavljača;     
> **LT**: omogućava generisanje internog broja lota;           
> **Datum isteka**: prikazuje datum isteka lota;          
> **Naručena količina**: prikazuje naručenu količinu;    
> **Preostala količina**: prikazuje preostalu količinu za prijem;       
> **Količina**: određuje količinu koja će biti primljena u skladište;    
> **Predloži lokaciju**: prikazuje predloženu skladišnu lokaciju;              
> **Lokacija**: omogućava unos druge skladišne lokacije umesto predložene.

Prilikom kreiranja prijemnice skladište i predložak skladišta predlažu se prema sledećim pravilima:

- Ako je skladište navedeno na narudžbini dobavljaču jedno od skladišta definisanih u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika, sistem će ga automatski predložiti.          
- Ako skladište navedeno na narudžbini dobavljaču nije među skladištima definisanim u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za tog korisnika, polja **Skladište** i **Predložak skladišta** ostaće prazna. U tom slučaju korisnik ih mora ručno uneti kako bi mogao da nastavi sa postupkom. Prilikom unosa sistem prikazuje poruku za potvrdu. Ako korisnik odabere **DA**, može odabrati jedno od skladišta definisanih u parametrima za tog korisnika; ako odabere **NE**, polja **Skladište** i **Predložak skladišta** ostaju prazna.      
- Ako na narudžbini dobavljaču nije definisano skladište, a u [Parametrima ulaza/izlaza robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) za korisnika postoji samo jedno skladište, sistem će automatski predložiti to skladište i pripadajući predložak skladišta. Ako je za korisnika definisano više skladišta, polja **Skladište** i **Predložak skladišta** ostaće prazna te će korisnik moći da odabere jedno od dostupnih skladišta bez prikazivanja dodatne poruke.

Pomoću polja **Input code** (odnosno korišćenjem barkod čitača) moguće je uneti podatke o lotu, skladišnoj lokaciji, evidentiranoj količini i artiklu, ako se želi primiti drugi artikl od onog koji je predložen, pod uslovom da se nalazi na prethodno odabranim narudžbinama.

Nakon unosa podataka za trenutni artikl, unos se potvrđuje dugmetom **Potvrdi**.

Nakon što su potvrđeni svi redovi narudžbine, korisnik se automatski preusmerava na karticu **Detalji otpremnice/prijemnice**, gde se pomoću dugmeta **Zatvori** čuva prijemnica i kreira pripadajuće skladišno knjiženje.

**Specifična dugmad**

> **Potvrda**: potvrđuje unete podatke za odabrani artikl;           
> **Potvrda + štampa**: potvrđuje unete podatke za artikl i otvara iskačući prozor za štampanje etiketa;       
> **Štampa**: omogućava štampanje etiketa;       
> **Zatvori**: čuva kreiranu prijemnicu i generiše pripadajuća skladišna knjiženja;        
> **Sledeći artikl (stavka)**: prelazi na sledeći artikl na narudžbini dobavljaču;       
> **Prethodni artikl (stavka)**: prelazi na prethodni artikl na narudžbini dobavljaču.

- **Detalji otpremnice/prijemnice**

U ovom obrascu prikazane su sve informacije o kreiranim stavkama.

**Specifična dugmad**

> **Obriši artikle**: briše odabrani red iz prijemnice.

- **Detalji narudžbine**

U ovom obrascu prikazane su sve informacije o odabranoj narudžbini dobavljaču.

## **Prijem robe sa utovarnim jedinicama**

Ako se artikl vodi kroz utovarne jedinice, tada na kartici [Pakovanje](/docs/erp-home/registers/items/create-new-item) šifarnika artikla mora postojati najmanje jedan red sa aktiviranom oznakom **Obavezna utovarna jedinica**, definisanim prioritetom i količinom.

Procedura prijema robe uzeće u obzir red sa najvišim prioritetom za tog dobavljača (ako je dobavljač definisan, u suprotnom će se koristiti red bez definisanog dobavljača), pri čemu oznaka **Obavezna utovarna jedinica** mora biti aktivna.

Nakon što su uneti svi podaci o artiklu, kao što je opisano u prethodnom primeru bez utovarnih jedinica, pritiskom na dugme **Potvrdi** otvara se novi obrazac za kreiranje utovarnih jedinica. U njemu su unapred popunjeni podaci artikla kao što su: *klasa*, *šifra* i *opis artikla*, kao i eventualna *varijanta* i *lot*.

**Preostala količina** u početku odgovara vrednosti unetoj u polje količine na glavnom obrascu. Ta vrednost se zatim dinamički ažurira nakon svakog dodavanja novog reda u tabelu.

Tabela je u početku prazna, dok su sledeća polja već popunjena:

> **Broj**: označava broj utovarnih jedinica tog tipa;         
> **Tip utovarne jedinice**: označava tip utovarne jedinice;       
> **Broj utovarne jedinice**: označava jedinstveni broj utovarne jedinice;         
> **Količina**: označava količinu sadržanu u toj utovarnoj jedinici.

Kursor je postavljen u polje **Referenca dobavljača**, kako bi operater mogao brzo i jednostavno da unese tu vrednost.

Nakon unosa te vrednosti (nije obavezna), dovoljno je pritisnuti dugme **Dalje** kako bi se red dodao u tabelu i ažurirala vrednost preostale količine.

Nakon svakog pritiska na dugme **Dalje**, fokus se ponovo vraća na polje **Referenca dobavljača**.

Odabirom reda u tabeli i pritiskom na dugme **Obriši**, red se uklanja, a preostala količina se automatski ažurira.

Operater takođe može izmijeniti već uneti red. Odabirom reda u tabeli svi podaci se prenose u polja za unos, gde ih korisnik može izmijeniti te pritiskom na dugme **Dalje** primijeniti promene na odabrani red.

Nakon završetka unosa i potvrde svih redova, pritiskom na dugme **Zatvori** korisnik se vraća na glavni obrazac. Ponovnim pritiskom na dugme **Zatvori** kreiraju se skladišna knjiženja vezana za upravo zaprimljenu prijemnicu te utovarne jedinice povezane sa njom.

**Parametri skladišnog knjiženja** koje je potrebno definisati u tabeli [Parametri skladišnog knjiženja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

Konkretno, koriste se na sledeći način:

> **ReceivingGoodsCreateDocument**: nakon odabira funkcije **Zaprimanje robe** i pritiska na dugme **Kreiraj prijemnicu**, skladište i skladišni predložak definisani u ovom parametru koriste se na stavkama upravo kreirane prijemnice.

> **LoadingUnitCreationFromPurchaseDeliveryNoteItem**: nakon odabira funkcije **Zaprimanje robe** i pritiska na dugme **Kreiranje prijemnice**, skladište i skladišni predložak definisani u ovom parametru koriste se za kreiranje i skladišno knjiženje novokreiranih utovarnih jedinica. Ovaj parametar je potreban samo ako se koriste utovarne jedinice.

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).

## **Zaprimanje robe sa ispisom etiketa**

Ako je potrebno kreirati etikete za artikle koji se zaprimaju, nakon unosa svih podataka o artiklu, kao što je prethodno opisano, operater treba pritisnuti dugme **Potvrda + ispis**, nakon čega će se otvoriti poseban obrazac za kreiranje etiketa.

U tom obrascu fokus je automatski postavljen na polje količine koja će se ispisivati na svakoj etiketi, kako bi korisnik mogao odmah uneti ili izmijeniti željenu vrijednost.

Takođe je moguće definisati broj etiketa za određenu količinu.

Nakon ispravnog unosa podataka potrebno je pritisnuti dugme **Dalje** kako bi se red sa etiketama dodao u centralnu tabelu. Istovremeno će se ažurirati vrijednost **Preostale količine**, koja je u početku jednaka količini navedenoj u glavnom obrascu.

U slučaju greške moguće je odabrati red i ukloniti ga pomoću dugmeta **Obriši**.

Nakon što su sve etikete definisane, moguće ih je ispisati odgovarajućim dugmetom. Zatim se pritiskom na dugme **Zatvori** korisnik vraća na glavni obrazac za kreiranje prijemnice, gde može nastaviti sa unosom novih stavki.

Operater takođe može ponovo otvoriti prethodno potvrđenu stavku koristeći dugme **Potvrda + ispis** te naknadno izmijeniti njene etikete.

Nakon završetka svih izmjena, pritiskom na dugme **Zatvori** kreira se prijemnica zajedno sa pripadajućim skladišnim knjiženjima.

U ovom slučaju koriste se isti **Parametri skladišnog knjiženja** kao i u prethodno opisanim slučajevima.

## **Zaprimanje robe sa alternativnim mjernim jedinicama**

Upravljanje alternativnim mjernim jedinicama aktivira se ako je uključena oznaka **Podrazumevano WMS** na kartici [Alternativne mjerne jedinice u šifarniku artikla](/docs/erp-home/registers/items/create-new-item).

U tom slučaju na obrascu za prijem robe prikazuju se dodatna polja za alternativnu mjernu jedinicu i alternativnu količinu. Faktor konverzije (FK) izračunava se dijeljenjem upravljane količine (**Upravljana MJ**) iz narudžbe dobavljaču sa alternativnom količinom (**Alternativna MJ**) iz iste narudžbe (ako je riječ o alternativnoj mjernoj jedinici označenoj kao **Podrazumevano WMS**):

**FK = Upravljana MJ / Alternativna MJ**

Unutar obrasca važe sljedeća pravila:

- ako se promijeni alternativna količina, upravljana količina izračunava se množenjem alternativne količine sa prethodno izračunatim faktorom konverzije;
- ako se promijeni upravljana količina, alternativna količina izračunava se dijeljenjem upravljane količine sa faktorom konverzije.

I u ovom slučaju koriste se isti **Parametri skladišnog knjiženja** kao i u prethodno opisanim slučajevima.