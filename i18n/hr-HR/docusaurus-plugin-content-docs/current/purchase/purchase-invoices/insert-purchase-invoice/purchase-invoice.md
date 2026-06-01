---
title: Kreiraj ulazne račune
sidebar_position: 1
---

Ovaj se obrazac otvara putem **Nabava > Ulazni računi > Kreiranje ulaznih računa** putem gumba **Novi** koji se nalazi u obrascu [Traži ulazne račune](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices).

U obrascu za unos automatski se predlaže trenutni **Datum** ali ga korisnik može promijeniti.

## **1. Obavezni podaci**

Za nastavak stvaranja ulaznog računa, korisnik mora unijeti obavezna polja:

- **Vrsta ulaznog računa** predefinirano u **Tablice > Nabava > [Tip ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type)**;

- **Datum** i **Broj** dokumenta dodijeljen od strane dobavljača;

- **Dobavljač**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

### 2.1 Podaci dobavljača

Unoseći **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno postavljenim podacima u [šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Dostava](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Način dostave](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Ostala opcionalna polja

**Status računa**: kada se račun stvori, nema aktivnih zastavica. Ovaj odjeljak uključuje sljedeća polja:  
> **Kontrolirano**: aktivna zastava omogućuje knjiženje računa;  
> **Knjiženo**: zastavica se automatski aktivira kada račun podržava  [postupak knjiženja](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
> **Utovareno**: zastavica postaje aktivna kada račun podržava [postupak učitavanja (stavljanja) na skladište]header-procedures/automatic-loading-on-warehouse). U slučaju da je račun stvoren iz već učitanog prijevoznog dokumenta, prisutan je opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira zastavicu Učitano i na računu.   
> **Otkazano**: aktivna zastavica omogućuje poništenje računa.

:::NAPOMENA
Oznake se mogu ukloniti postupkom vraćanja operacije.  
:::

**Bilješke dobavljača**: predlaže se informacija unesena u šifarnik dobavljača, dok se u slučaju automatskog stvaranja iz drugog dokumenta preuzimaju isti podaci koji se nalaze u odgovarajućem polju izvornog dokumenta.

Također se može ručno unijeti. Desnim klikom miša moguće je otvoriti formu za specificiranje dugog teksta bilješke; ako polje sadrži vrijednost, boja pozadine polja mijenja se.

**Naša/Vaša referenca**: kada se dovrši postupak:
- [Izvršenje narudžbenice](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), također se nudi informacija iz odgovarajućeg polja narudžbenice. 
 
Ovaj prijenos vrijedi samo ako je faktura stvorena preuzimanjem podataka iz samo jedne narudžbenice.

- [Valorizacija dostavnice kupnje](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), predlaže se informacija iz odgovarajućeg otpremnice.

Ovaj prijenos vrijedi samo ako je faktura izdana iz samo jedne otpremnice.  

**Početne bilješke**: ponovno će se predložiti informacije iz narudžbenice u slučaju [Izuzimanje iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Može se unijeti i ručno pomoću [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) kako bi se otvorile bilješke koje su već unesene u prethodnoj tablici koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje kodiranim bilješkama*. Korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *pomoćne kodirane napomene* i odabrao podatke ili desnim klikom miša otvoriti prozor kako bi naveo vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Projekt**: pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.

Ovo udruživanje funkcionira samo na razini zaglavlja članka.

**Status dokumenta**: odnosi se na tablicu stanja dokumenta; podatak mora unijeti korisnik i može se koristiti postupcima replikacije instaliranim u upravljanju poslovnicom s prodajnim mjestima.

**Referenca**: nakon što stvori [storno](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) fakture, korisnik mora povezati dvije fakture unoseći *broj*, *datum* i *vrstu* izvorne fakture;

**Knj. zap.**: navodi broj, datum i protokol knjiženja koji proizlazi iz knjiženja fakture.

### 2.3 Plaćanja

**Plaćanja** se automatski prenose iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je **Tip plaćanja** povezan sa financijskim popustom, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu računa.

Ako dokument potječe iz:

- *Narudžbe dobavljača*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta ili iz Šifarnika dobavljača; sva plaćanja dokumenata koji se moraju obraditi mogu se prikazati na jednom obrascu, a korisnik može odabrati željeni tip plaćanja.

- *Otpremnice*, plaćanja dobavljača mogu se zadržati ili pojedinačna plaćanja prisutna u svakoj otpremnici; u ovom slučaju, u računu se prikazuje tip plaćanja s osnovicom i PDV-om istim kao i otpremnici; nadalje, za eventualne redove artikala dodane u račun, a koje ne proizlaze iz otpremnice, dodaje se novi red.

#### Posebni gumb

**Izbriši plaćanje**: koristi se za brisanje odabranih redova plaćanja.

### 2.4 Popusti

Predlažu se samo predefinirani popusti preuzeti iz *Šifarnik dobavljača > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta prenose se u svaki novi red artikla koji se unese u dokument.

Ako nakon unosa redaka artikala unesete novi popust u zaglavlje, on se ne replicira u već unesene redove artikala.

#### Posebni gumb

**Otkaži (rabate)**: koristi se za brisanje odabranih redova popusta.

### 2.5 Pošiljka

Ovdje se predlaže informacija unesena u podaci dobavljača, kartica [Pošiljke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), samo ako postoje zadani podaci.

Padajući izbornik nudi sve *Primatelje* i *Odredišta* unesena u  Šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti samo kao opis bez prethodnog unosa među kontaktima.

### 2.6 Prijevoznik

U ovom polju moguće je unijeti prijevoznika koji će obaviti isporuku. Ako je prijevoznik definiran u kartici dobavljača, na kartici „Isporuka“, moći će se odabrati iz padajućeg izbornika u drugom stupcu. U suprotnom, dovoljno je dvostruko kliknuti na treći stupac (Prijevoznik) kako bi se odabrao jedan od kontakata tvrtke.

Po želji je moguće unijeti i podatke o registarskoj oznaci vozila prijevoznika te datum i vrijeme prijevoza.

### 2.7 Dodatni podaci

Ovdje se predlaže informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## Procedure:

### Automatski utovar (zaduživanje) skladištda

Ovaj postupak pokreće se pomoću gumba **Automatsko zaduživanje skladišta** koji se nalazi u zaglavlju dokumenta i poštuje niz prethodno postavljenih parametara na računu. Za detalje pogledajte identičan postupak: [Učitavanje računa o kupnji u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

Rezultat se može vidjeti u Logistika > [Zapisi](/docs/logistics/warehouse/stock-records/records) ili u proceduri [Zaduženje skladišta ulaznim računima](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

### Izvršenje otpremnice/primke

Postupak omogućuje izradu ulaznog računa preuzimanjem stavki iz jednog ili više dobavljačevih dokumenata. U zaglavlju računa, klikom na gumb „Izvršenje otpremnice/primke” otvara se prozor za odabir i filtriranje dokumenata vezanih uz odabranog dobavljača. Odabrane stavke mogu se prenijeti na račun, uz mogućnost potpunog ili djelomičnog zatvaranja dokumenata.

Kako bi se postupak mogao koristiti, moraju biti ispunjeni sljedeći uvjeti:

- dobavljač na odabranim dokumentima mora odgovarati dobavljaču navedenom na računu;
- dokument mora imati status Kontrolirano, a status Valorizirano ne smije biti postavljen.

#### Postupak

U zaglavlju novog ulaznog računa potrebno je odabrati vrstu računa koju želite kreirati te dobavljača. Nakon unosa tih podataka potrebno je kliknuti na gumb „Izvršenje otpremnice/primke” kako bi se otvorio obrazac za preuzimanje dokumenata.

Filteri za dobavljača i valutu automatski će se postaviti prema podacima dobavljača odabranog na računu.

U području za filtriranje moguće je odabrati način prikaza podataka u tabličnom prikazu (Grid), u hijerarhijskoj strukturi, ili kombinacijom oba prikaza istovremeno.

> Struktura hijerarhije omogućuje pregledniji prikaz DDT dokumenata dostupnih za preuzimanje te artikala sadržanih u svakom od njih. Također omogućuje masovni odabir svih artikala unutar pojedinog DDT-a jednostavnim označavanjem kućice (flag-a) na retku DDT dokumenta.

> Tablični prikaz (Grid) omogućuje veću prilagodbu obrasca dodavanjem polja putem Object Navigatora. U tom slučaju masovni odabir stavki obavlja se korištenjem tipki na tipkovnici, nakon čega je potrebno kliknuti na gumb „Odaberi/Odznači” na alatnoj traci (Ribbon Bar).

Nakon što se postave svi željeni filtri, klikom na gumb „Traži” u donjem dijelu prikazat će se svi dokumenti koji imaju status „Kontrolirano”, a još nisu valorizirani ili su valorizirani samo djelomično.

U prikazu rezultata korisnik zatim može:

- Odabrati sve ili samo pojedine artikle – dovoljno je označiti opciju (flag) na početku retka artikla. Količina za preuzimanje automatski će se postaviti jednako preostaloj količini.

- Odabrati pojedine artikle za djelomično preuzimanje – u tom slučaju potrebno je ručno izmijeniti polje Količina za preuzimanje.

Za dovršetak postupka potrebno je kliknuti na gumb „Prijenos”, nakon čega će sustav preuzeti sve podatke iz odabranih dokumenata i prenijeti ih na ulazni račun.

:::tip Zapamti 
Napomene unesene u zaglavlju dokumenta (kao što su Naša referenca, Vaša referenca ili Početne napomene) prenose se u zaglavlje računa samo ako se podaci preuzimaju iz jednog dokumenta. Ako se račun kreira preuzimanjem podataka iz više dokumenata, navedene napomene neće se automatski prenijeti u zaglavlje računa. 
:::

#### Posebni gumbi

> **Traži**: omogućuje pretraživanje DDT dokumenata dostupnih za prijenos.
> **Premještaj**: omogućuje prijenos odabranih artikala/narudžbi u dokument.
> **Označi sve**: označava sve artikle na popisu.
> **Odznači sve**: uklanja oznaku sa svih artikala na popisu.
> **Označi**: aktivira oznaku (flag) za sve retke koji su odabrani mišem.
> **Odznačiti**: deaktivira oznaku (flag) za sve retke koji su odabrani mišem.


### Izuzimanje iz narudžbe (od strane dobavljača)

Postupak omogućuje kreiranje ulaznog računa preuzimanjem jednog ili više dobavljačkih narudžbi.

U zaglavlju dokumenta, pritiskom na gumb „Izuzimanje iz narudžbe” otvara se obrazac u kojem je moguće filtrirati narudžbe povezane s dobavljačem navedenim na računu. Nakon toga moguće je prenijeti artikle na račun, pri čemu se može u cijelosti ili djelomično preuzeti cijela narudžba ili pojedina njezina stavka.

Za korištenje ove procedure potrebno je zadovoljiti sljedeće preduvjete:

- dobavljač na odabranoj narudžbi mora odgovarati dobavljaču navedenom na računu;
- narudžba mora imati status Ispisano i prethodno mora biti potvrđena.

#### Postupak

U zaglavlju novog ulaznog računa potrebno je odabrati vrstu računa koju želite kreirati te dobavljača. Nakon unosa tih podataka potrebno je kliknuti na gumb „Izuzimanje iz narudžbe” kako bi se otvorio obrazac za preuzimanje narudžbi.

Filteri za dobavljača i valutu automatski će se postaviti prema dobavljaču odabranom na računu.

U području za filtriranje moguće je odabrati način prikaza podataka: tablični prikaz (Grid), hijerarhijski prikaz (Struktura hijerarhije), ili kombinaciju oba prikaza istovremeno.

> Struktura hijerarhije omogućuje pregledniju podjelu pojedinih narudžbi i artikala sadržanih unutar svake od njih. Također omogućuje masovni odabir svih artikala iz određene narudžbe jednostavnim označavanjem opcije (flaga) na retku narudžbe.

> Tablični prikaz (Grid) omogućuje veću prilagodbu obrasca dodavanjem dodatnih polja putem Object Navigatora. U tom slučaju masovni odabir obavlja se korištenjem tipki na tipkovnici, nakon čega je potrebno kliknuti na gumb „Aktiviraj/Deaktiviraj samo odabrane retke” na alatnoj traci (Ribbon Bar).

Nakon što se postave svi željeni filtri, klikom na gumb „Traži” u donjem dijelu prozora prikazat će se sve narudžbe koje imaju status „Ispisano” i „Potvrđeno”, a koje još nisu preuzete (zatvorene) ili su preuzete samo djelomično.

:::note NAPOMENA
Postupak preuzima sve podatke sadržane u narudžbi, pa će se kao posljedica primijeniti uvjeti nabave definirani na narudžbi, čak i ako su oni u međuvremenu promijenjeni.
U slučaju preuzimanja više narudžbi koje imaju isti način plaćanja i/ili istu adresu isporuke, na račun će se prenijeti podaci iz narudžbi. U suprotnom će se koristiti podaci definirani u matičnim podacima dobavljača.
:::

U prikazu rezultata korisnik ima mogućnost:

- Odabrati sve ili samo pojedine ponuđene artikle – dovoljno je označiti opciju (flag) na početku retka artikla. Polje Količina za izvršenje automatski će se postaviti na vrijednost preostale količine.
Odabrati pojedine artikle za djelomično izvršenje – u tom slučaju potrebno je ručno izmijeniti vrijednost u polju Količina za izvršenje.

- Za dovršetak postupka potrebno je kliknuti na gumb „Izuzimanje”, nakon čega će sustav preuzeti sve podatke iz odabrane narudžbe (ili narudžbi) i prenijeti ih na ulazni račun.

:::tip Zapamti 
Napomene unesene u zaglavlju narudžbe (primjerice Naša referenca, Vaša referenca ili Početne napomene) prenose se u zaglavlje ulaznog računa samo ako se podaci preuzimaju iz jedne narudžbe.
Ako se račun kreira preuzimanjem podataka iz više narudžbi, navedene napomene neće se automatski prenijeti u zaglavlje računa.
:::

#### Posebni gumbi

> **Traži**: omogućuje pretraživanje narudžbi dobavljača.  
> **Izuzimanje**: omogućuje prijenos odabranih artikala/narudžbi.   
> **Prisilno izvršenje narudžbe**: omogućuje prisilno ispunjenje narudžbe.    
> **Označi sve**: omogućuje označavanje svih stavki na popisu.  
> **Odznači sve**: omogućuje odznačavanje svih stavki na popisu.  
> **Aktiviraj samo odabrane retke**: aktivira oznake (flagove) za sve retke koji su odabrani mišem.
> **Deaktiviraj samo odabrane retke**: deaktivira oznake (flagove) za sve retke koji su odabrani mišem.

:::tip Zapamti 
U slučaju višestrukih djelomičnih preuzimanja iste stavke artikla unutar istog računa, moguće je odabrati hoće li se količine zbrojiti u jednu stavku na računu ili će ostati prikazane kao zasebni retci. To se određuje u tablici Vrste ulaznih računa: ako je oznaka „Ne zbrajaj količine artikla pri preuzimanju” deaktivirana, količine će se zbrojiti u jedan redak računa; ako je oznaka aktivirana, svako djelomično preuzimanje bit će prikazano u zasebnom retku računa.
:::

### Sdi zatvaranje dokumenata

Klikom na gumb „SDI – Zatvaranje dokumenata” otvara se modul koji omogućuje ručno povezivanje narudžbi i DDT dokumenata nabave s računima generiranim iz zaprimljenih XML datoteka. Ovaj se postupak također automatski pokreće kada se povezivanje izvrši iz ekrana Ulazni dokumenti nabave. Modul je podijeljen u dva glavna dijela: lijevi dio namijenjen je prikazu DDT dokumenata i narudžbi; desni dio prikazuje stavke (artikle) računa.

Tablica narudžbi i primki/otpremnica sadrži sljedeće stupce:

- Broj povezanog retka računa
- Vrsta dokumenta
- Broj dokumenta
- Datum
- Broj retka
- Klasa artikla
- Šifre artikla
- Opis artikla
- Količina
- Cijena
- Ukupni popust
- Neto iznos
- Jedinična neto cijena

Retci koji su već povezani sa stavkama računa bit će označeni zelenom bojom kako bi ih bilo lakše prepoznati.

Tablica računa sadrži sljedeće stupce:

- Broj retka
- Klasa artikla
- Šifre artikla
- Opis artikla
- Količina
- Cijena
- Ukupni popust
- Neto iznos
- Jedinična neto cijena

Retci koji su već povezani sa stavkama dokumenata primki/otpremnica ili narudžbi bit će posebno označeni kako bi se olakšala provjera. U ovim tablicama prikazuju se samo retci dokumenata ili narudžbi koji još nisu obrađeni (preuzeti) niti su prethodno ručno povezani. 

Za uspostavu veze potrebno je u stupac „Broj povezanog retka računa” unijeti broj retka računa s kojim se želi povezati dokument, a zatim na alatnoj traci kliknuti gumb „Poveži”.

:::note Napomena
Isti broj retka računa ne može istovremeno biti povezan i s dokumentom primki/otpremnica i s narudžbom.
:::

Klikom na gumb „Poveži” retci koji imaju popunjeno polje „Broj povezanog retka računa” bit će povezani i obrađeni u odgovarajućim DDT dokumentima ili narudžbama. Gumb „Poništi povezivanje” (Rollback Associa) omogućuje uklanjanje uspostavljene veze te vraćanje ispravnog statusa obrade za povezane DDT dokumente ili narudžbe.

Tijekom postupka povezivanja sustav provodi nekoliko kontrola kako bi osigurao usklađenost podataka:

- Cijene: provjeravaju se razlike između cijena navedenih na narudžbama/dokumentima otpremnica-primka i cijena na automatski generiranom računu.
- Popusti: provjeravaju se odstupanja u ukupnim iznosima popusta.
- Jedinična neto cijena: provjeravaju se razlike između jedinične neto cijene navedene na računu i one na dokumentima/narudžbama.
- Ukupni iznos: provjeravaju se razlike između ukupnog iznosa računa i zbroja ukupnih iznosa povezanih stavki na dokumentima/narudžbama.

Ako jedna ili više navedenih provjera ne prođu uspješno, povezivanje se neće izvršiti automatski. U tom slučaju pogreška će biti prikazana u tablici pogrešaka, zajedno s brojem retka računa na koji se odnosi i opisom utvrđene nepravilnosti.


## **3. Artikli**

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Podaci se unose **ručno**, uz pomoć **polja za pomoć** ili ih mogu predložiti povezane procedure.

Da biste unijeli **Novi artikl** u obrazac, dovoljno je postaviti se na red kako biste popunili različite podatke ili koristiti gumb **Novo** u traci s vrpcom.

:::note Napomena
Ako je račun kreiran preuzimanjem podataka iz narudžbe ili iz dokumenta nabave, obavezni podaci bit će automatski preuzeti iz izvornog dokumenta.
:::

### 3.1 Obavezni podaci

**Red**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

> **Artikl sa šifrom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i knjižiti u skladištu.  
> **Artikl bez šifre**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Artikl troška**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od značenja za poreze, bit će knjižen u skladištu, ako nije kodiran ili nije od temelja za poreze, neće biti knjižen u skladištu.  
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.  
> **Gratis artikl**: artikl za poklon se tretira kao kodirani ili nekodirani artikl u fiskalne i skladišne svrhe, ali budući da je poklon, zasebno se evidentira u sažecima računa. Ako je postavljena zastavica 'Pravo naplate PDV-a' na kartici, izračunava se iznos PDV-a za poklon, koji može ili ne mora biti na teret dobavljača.  

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova *klasa*, *kod* i *vrsta linije* - *Artikl sa šifrom* unose se automatski.
:::

**Klasa/Artikl/Opis artikla**: mogu se unijeti ručno ili uz pomoć polja za pomoć koje će predložiti sve povezane informacije unesene u *Šifarnik artikla*.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijante*, mora se odabrati željena varijantu iz padajućeg izbornika *Varijante*. 

**Varijante**: ako odabrani artikl ima varijacije/varijante, mora se odabrati željena varijanta iz padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijantama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijantama artikla u referentnom cjeniku.

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere. 

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz **posljednje nabavne cijene** unesene u šifarnik artikla, ako u kartici [Postavkama narudžbenica dobavljača](/docs/erp-home/registers/items/create-new-item) nije postavljeno da se *trošak postavlja na nulu* u odsutnosti cjenika.

**Iznos**: automatski se izračunava nakon primjene svih popusta, odnosno predstavlja neto iznos stavke umanjen za odobrene popuste.

**Ukupno rabat**: prikazuje ukupan iznos svih popusta definiranih na kartici Popusti/Cjenici za pojedini redak artikla.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.

### Nije obavezno unijeti sljedeće podatke

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici *Generalno* u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak.   

Moguće je da nedostatak te informacije uzrokuje pogreške u knjiženju računa koji će biti generiran iz otpremnice ako postupak također ne pronađe vrijednost u polju Predefinirani *Trošak/Prihod računa* u šifarnik kontakta. 

**Alternativna mjerna jedinica**: ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjernih jedinica u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama** i **Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem *upraviteljske količine* (koja se odnosi na glavnu jedinicu mjere) s *faktorom pretvorbe* postavljenim u kartici *Alternativne mjernih jedinica u šifarnik artikla*.

**Skadište/Opis/Predložak**: Ovi podaci su potrebni za evidentiranje ulaza u skladištu. Preuzimaju se na osnovu dokumenta nabave iz tablice *Vrste narudžbi/Otpremnice/Primke* ili se unose ručno.

**Težine**: Navode se ukupne neto i bruto Težine stavki artikla. Navode se težine artikala iz šifarnika pomnožene s količinom stavke.

#### Posebni gumbi

> **Upravljanje ambalažom**: omogućuje otvaranje upravljanja pakiranjem za vraćene stavke u dokumentima nabave. Gumb postaje aktivan kada je dokument spremljen, ali ne učitan. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete unijeti količinu, odabrati stavku i izvršiti transfer odabranog pakiranja u stavke artikla pritiskom na gumb **Izvrši**. Na ovom se obrascu prikazuju artikli koji su uneseni s prirodom pakiranja i koji se nalaze u tablici **Vraćena pakiranja**.  
> **Storno**: omogućuje storniranje tipova dokumenata koji imaju prirodu povrata.    
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen ažurirani cjenik).
Klikom na padajući izbornik pored gumba, bit će moguće stvoriti novi cjenik ako još nije stvoren.

:::important Zapamti
Prilikom kreiranja ili ažuriranja cjenika putem ove procedure, u cjenik se prenose samo oni popusti koji su ručno uneseni na računu.
:::

### 3.3 Popusti/Cjenici  

**Cjenik**: nudi se cjenik iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u cjeniku;

**Ručna cijena**: automatski se aktivira kada je cijena artikla unesena ili izmijenjena ručno od strane korisnika.

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.

#### Poseban gumb
> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

:::important Zapamti
Za upravljanje popustima na poreznu osnovicu potrebno je u bazi podataka aktivirati opći parametar GEN-GlobalSettings_CalculateDiscountOnAmount za odgovarajuće poduzeće. Ako navedeni parametar nije aktivan, popusti na poreznu osnovicu automatski će se pretvoriti u kaskadne popuste.
:::

### 3.4 Podaci artikla

**Artikl**: prikazuje klasu, šifru i opis artikla odabranog u tabličnom prikazu (gridu).

**Varijante**: U ovom polju moguće je odabrati varijantu artikla među onima koje su prethodno definirane na kartici „Varijante” u matičnim podacima artikla. Ako su u cjeniku za pojedine varijante definirane različite cijene i/ili popusti, oni će se automatski ažurirati prilikom odabira druge varijante artikla.

**Napomene**: odnose se na pojedini redak artikla. Mogu se unijeti i putem pomoći za unaprijed definirane (kodificirane) napomene. Bit će prenesene u sve dokumente koji se naknadno generiraju iz ovog dokumenta.

**Skladište i predložak**: predlažu se skladište i predložak koji će se automatski koristiti prilikom knjiženja zaprimanja pripadajućih artikala na skladište. Ti se podaci preuzimaju iz Vrste ulaznih računa ili iz narudžbe odnosno otpremnica/primki, ako je račun nastao preuzimanjem narudžbe ili valorizacijom otpremnica/primki. Podaci se mogu ručno izmijeniti za svaki redak artikla pojedinačno.

**Lokacija**: automatski se predlaže ako je uz odabrani skladišni predložak definirana lokacija u tablici Skladišni predložak ili ako je za artikl definirana lokacija u Mapi lokacija po artiklu. Vrijednost se po potrebi može ručno unijeti ili izmijeniti.

**Alternativna mjerna jedinica / Alternativna količina**: ako je u matičnim podacima artikla definirana alternativna mjerna jedinica s aktiviranom oznakom Zadano, te je u Parametrima dobavljačkih narudžbi aktivirana opcija Automatski prijedlog alternativne mjerne jedinice, ove će se vrijednosti automatski predložiti prilikom unosa artikla.

**Cijena za alternativnu mjernu jedinicu**: ako je ova oznaka aktivna, znači da se cijena unesena na retku artikla odnosi na alternativnu mjernu jedinicu, a ne na osnovnu mjernu jedinicu artikla. Ova oznaka, zajedno s poljima Alternativna mjerna jedinica i Alternativna količina, vidljiva je samo ako je u Parametrima ulaznih računa aktivirana opcija Upravljanje dvostrukom mjernom jedinicom.

**Projekt**: predstavlja projekt koji se povezuje s dokumentom. Ako je projekt unesen u zaglavlju dokumenta, automatski će biti prenesen na sve retke artikala. U suprotnom, projekt se može odabrati putem odgovarajućeg pomoćnog izbornika za odabir projekata.

**Od/Do datuma obračuna**: omogućuju definiranje datuma obračunskog razdoblja za dokument. Ako je u tablici 'Poduzeće' aktivirana opcija *Controlling*, prilikom kreiranja računa iz otpremnice/primke ili iz povrata kooperantske proizvodnje (Conto Lavoro) kao datumi obračunskog razdoblja preuzimaju se datumi iz dokumenta skladišnog zaprimanja. Kod dokumenata koji nisu knjiženi na skladište ili kod artikala koji su ručno uneseni na račun, datumi obračunskog razdoblja podudaraju se s datumom računa.

**Povrat PDV-a**: ako je postavljeno, PDV poklona uzima se u obzir za ukupni iznos računa.

**Marka**: predstavlja marku artikla, koja se preuzima iz matičnih podataka artikla ili iz cjenika artikla.

**Referenca naloga**: u slučaju da je račun generiran iz narudžbe, referenca na narudžbu u ovom polju bit će automatski unesena.

### 3.5 Lotovi i Serijski broj

U oba pregleda mogu se unijeti i lotovi i serijski brojevi koji se moraju učitati u skladište i koji su povezani s artiklom *Šifarnik artikla > kartica* [Lotovi i Serijski broj](/docs/erp-home/registers/items/create-new-item) ili ih se može unijeti ručno. 

Ako artikl ne podržava upravljanje Lotovima/Serijskim brojevima, ova će kartica biti onemogućena.

:::note Zapamti
Ako je u Parametrima ulaznih DDT dokumenata deaktivirana opcija „Lotovi i serijski brojevi obvezni”, dokument će biti moguće spremiti i bez unosa lotova ili serijskih brojeva. Prilikom skladišnog knjiženja (zaprimanja) DDT dokumenta, lotovi će se automatski predložiti ako prethodno nisu bili uneseni.
:::

#### Posebni gumbi
> **Izbriši lot**: omogućuje brisanje odabrane partije.   
> **Izbriši serijski broj**: omogućuje brisanje odabrane linije serijskog broja

### 3.6 Analitika

Može sadržavati informacije o troškovnim/profitnim centrima na koje su raspodijeljene vrijednosti artikla.

Ovi podaci se mogu unositi ručno ili *automatski* (u slučaju da su troškovni/profitni centri prethodno uneseni u *šifarnik subjekta*, *šifarnik artikla* ili u *plan konta*).

#### Posebni gumbi
> **Obriši troškovna mjesta**: omogućuje brisanje odabrane linije troškovnog mjesta.     
> **Obriši profitna središta**: omogućuje brisanje odabrane linije profitnog središta.

### 3.7 Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz mogućnost, putem odgovarajuće oznake, odabira koje dodatne podatke isprintati.

### 3.8 Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumenti u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaša referenca). Upute o tome kako priložiti dokument potražite u artiklu **Priloži dokumente**.

### 3.9 CONAI materijali za artikl (Italija)

Ova kartica vidljiva je samo ako je za aktivno društvo uključeno upravljanje CONAI naknadama.
U ovom dijelu prikazuju se ambalažni materijali od kojih se sastoji artikl, zajedno s pripadajućom mjernom jedinicom, jediničnom težinom (umanjenom za eventualni postotak izuzeća definiran u matičnim podacima kupca) te ukupnom težinom, koja se izračunava množenjem broja prodanih artikala s jediničnom težinom.
Prilikom spremanja dokumenta ili pritiskom na gumb „Ponovni izračun CONAI”, Fluentis će automatski dodati jedan ili više redaka troškova, pri čemu će preuzeti artikl ambalažnog materijala, postaviti količinu jednaku zbroju količina te cijenu jednaku CONAI trošku definiranom za taj materijal.
Za više informacija o upravljanju CONAI naknadama u Fluentisu pogledajte povezanu dokumentaciju.

### 3.10 Troškovi za obračun

Kartice Troškovi za obračun i Troškovi (Spese) nisu podržane niti se koriste u trenutačnoj verziji Fluentisa.

### 3.11 Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u retku**: Cijena artikla * Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica (iznos)**: Iznos bez popusta - Popusti;

**Porez**: Osnovica* stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim sekcijama ovog taba prikazane su glavne informacije o cijelom dokumentu i neki posebni gumbi.

### 4.1 KOnačni popusti artikala

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, u kartici *Artikli > kartica Popusti/Listini*.

**Vrsta/Opis popusta**: Omogućuje odabir vrsta popusta (unaprijed definiranih u *Tipovi rabata*), dodjeljujući prioritet primjene popusta vrsti i određujući je li popust izračunat na osnovu oporezivog iznosa ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste.  
**Prioritet**: Predstavlja prioritet primjene popusta; redoslijed primjene raste.  
**Kaskada/Iznos**: Određuje je li izračun popusta zasnovan na (*cijena * količina*) - (*već izračunati popusti*) ili (*cijena * količina*).  
**Vrijednost**: Numerička vrijednost završnog popusta za primjenu.

### 4.2 Troškovi

Predlažu se troškovi uneseni u matične podatke kontakta, na kartici „Troškovi/Popusti”. U ovoj tablici troškove je potrebno unositi s pozitivnim predznakom, a popuste s negativnim predznakom. 

Ovi se elementi primjenjuju na cijeli dokument i ne raspoređuju se na pojedine retke artikala. Mogu uključivati: dodatne troškove, globalne popuste, povećanja cijene (dodatke) primijenjene na cijeli dokument. Ako su definirani u matičnim podacima kontakta, automatski će se predložiti prilikom kreiranja dokumenta.

**Vrsta/Opis**: Omogućuje odabir vrsta troškova (unaprijed definiranih u *Vrstama troškova*), dodjeljujući vrsti postotak troška za primjenu.   
**Iznos troška**: označava vrijednost troška izraženu u valuti dokumenta.  
**PDV**: označava PDV stopu koja će se primijeniti na unesene troškove.  
**Postotak/Vrijednost**: Polje koje određuje hoće li se troškovi izračunavati postotkom ili predefiniranom novčanom vrijednošću.  
**Postotak**: Numerička vrijednost postotka troška.  

:::note Napomena

Ako odabrana vrsta troška ima aktiviranu oznaku „Raspodijeljeno”, prilikom knjiženja računa na skladište trošak će se raspodijeliti na sve artikle proporcionalno ukupnim iznosima pojedinih stavki artikala. Rezultat raspodjele troška vidljiv je u skladišnoj knjižbi.

> 1. Ako artikli imaju definiranu cijenu: ukupni trošak raspodjeljuje se proporcionalno neto iznosima pojedinih artikala. Dobiveni iznos dodaje se početnoj cijeni artikla u polju Ukupni iznos skladišne knjižbe. Ako pojedine stavke imaju iznos 0, za potrebe raspodjele tretirat će se kao da imaju vrijednost 1, kako bi se trošak raspodijelio na sve artikle.
> 2. Ako svi artikli imaju cijenu 0: trošak se ravnomjerno raspodjeljuje na sve stavke artikala. Na temelju tako raspodijeljenog troška izračunava se iznos skladišnog kretanja / upravljački iznos u skladišnoj knjižbi, uzimajući u obzir količine pojedinih artikala.
:::

### 4.3 Sažetak PDV-a

Prikazuje sažetak PDV-a dokumenta, za svaki PDV.

### 4.4 Pregled dospijeća plaćanja

Prikazuje sažetak rokova plaćanja dokumenta, za svaki *tip* i *način plaćanja*. 

**Broj**: progresivna vrijednost reda. 

**Plaćanje**: predstavlja alfanumerički kod *Vrste plaćanja* preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*. 

**Iznos**: izračunati iznos roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*. (Automatski se provjeravaju kontrole i upozorenja o usklađenosti između vrijednosti rokova plaćanja i ukupnog iznosa fakture).

**Datum dospijeća**: datum izračunatog dospijeća roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*.

**Troškovi**: polje u kojem su prikazani troškovi naplate. 

**PDV**: Za primjenu na troškove naplate (može se postaviti i ručno)  

**Predložak plaćanja**: Na računu je moguće izravno unijeti predložak (kontnu osnovu) koji automatski generira knjiženje naplate ili plaćanja.
Napomena: potrebno je obratiti pozornost na predložak odabranog konta jer će sustav koristiti definirana konta čak i ako nije naveden analitički podkonto. Upravo iz tog razloga postoji i sljedeće polje.

**Konto/Podkonto klijenta/dobavljača**: konto koji se koristi za naplatu/plaćanje roka, zamjenjujući račun prisutan u predlošku plaćanja (ili naplate).

**Znak**: samo rokovi plaćanja koji imaju ovu zastavicu se zatim obrađuju u plaćanju s odabranim predloškom i postavljenim kontom. 

**Referentni modeli plaćanja**: Model za generiranje poziva na broj plaćanja. U nekim stranim lokalizacijama svaka dospjela stavka na računu ima šifru koju dodjeljuje izdavatelj računa. Ta je šifra strukturirana prema određenim modelima (tablica MB_PaymentReferenceModels) kako bi se mogla automatski generirati pomoću algoritma.

**Tipovi modela plaćanja**: ovo je šifra (strukturirana prema prethodnom modelu) koja se unosi u stavku i u plaćanja koja se šalju banci, kako bi se obavijestilo primatelja koja je dospjela obveza plaćena (i tako automatizirala uvoz bankovnih transakcija s zatvaranjem stavke). Tako se popunjava u stavci i datoteci Sepa.  

**Rok za avansno plaćanje**: ovo je polje predviđeno u SDI formatu računa i označava posljednji datum do kojeg se može ostvariti financijski popust za prijevremeno plaćanje. Nakon tog datuma više nije moguće primijeniti ugovoreni popust.

**Vrsta popusta**: vrsta financijskog popusta.

**Financijska vrijednost rabata**: označava vrijednost financijskog popusta koji se odobrava ako se račun plati unutar roka za prijevremeno plaćanje. Ovaj se iznos koristi za izračun umanjenja obveze odnosno potraživanja prilikom naplate ili plaćanja.

**Br. primitka**: eventualni broj primitka za primljene novce. 

**Jed.**: aktivira knjiženje zatvaranja rokova plaćanja u automatiziranim zapisima.

### 4.5 Ostala polja

**Završne napomene**: to je slobodno polje koje korisnik može ispuniti, uključujući *Pomoć kod kodiranih napomena*.


### 4.6 Ukupno - dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih stavki; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos stavki tipa poklon unesenih u karticu *Stavke*;    

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na stavkama, ali bez konačnih popusta. 

**Neto iznos artikala**: *Iznos stavki bez popusta - Ukupni primjenjeni rabati*;  

**Konačni popusti artikala**: predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos stavki; 

**Iznos umanjen za ukuoni popust**: *Neto iznos stavki - Ukupno konačnih rabata*;  

**Ukupno za stavke troškova**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao stavke *Vrste troškova*;  

**Troškovi naplate**: predstavlja zbroj unesenih troškova naplate u mrežu *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj unesenih troškova marke u mrežu *Troškovi*;  

**Ukupno troškovi/popusti/doplate**: predstavlja vrijednost unesenih troškova u mrežu *Troškovi*;  

**Osnovica**: *Neto iznos artikala - Konačni popusti + Ukupno za stavke troškova + Ukupno troškovi/popusti/doplate*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u pregledima PDV-a;  

**Ukupno**: *Osnovica + PDV*.
