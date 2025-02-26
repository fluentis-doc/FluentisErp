---
title: Kreiraj ulazne račune
sidebar_position: 1
---

Ovaj se obrazac otvara putem **Nabava > Ulazni računi > Kreiranje ulaznih računa** putem gumba **Novi** koji se nalazi u obrascu [Traži ulazne račune](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices).

U obrascu za unos automatski se predlaže trenutni **Datum** ali ga korisnik može promijeniti.

## **1. Dati obbligatori**

Za nastavak stvaranja računa za kupnju, korisnik mora unijeti obavezna polja:

- **Tip računa** predefinirana u **Tablice > Nabava > [Tip ulaznog računa](/docs/configurations/tables/purchase/purchase-invoices-type)**;

- **Datum** i **Broj** dokumenta dodijeljen od strane dobavljača;

- **Dobavljač**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

### 2.1 Dati fornitore

Unoseći **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno postavljenim podacima u [šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Dostava](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Način dostave](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Ostala opcionalna polja

**Status računa**: kada se račun stvori, nema aktivnih zastava. Ovaj odjeljak uključuje sljedeća polja:  
> **Kontrolirano**: aktivna zastava omogućuje knjiženje računa;  
> **Knjiženo**: zastava se automatski aktivira kada račun podržava  [postupak knjiženja](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
> **Utovareno**: zastava postaje aktivna kada račun podržava [postupak učitavanja]header-procedures/automatic-loading-on-warehouse). U slučaju da je račun stvoren iz već učitanog prijevoznog dokumenta, prisutan je opći parametar VE-PurchaseInvoices_VerifyLoadStatusDDT koji blokira zastavu Učitano i na računu.   
> **Otkazano**: aktivna zastava omogućuje poništenje računa.

:::NAPOMENA
Oznake se mogu ukloniti postupkom vraćanja operacije.  
:::

**Bilješke dobavljača**: predlaže se informacija unesena u kartoteku dobavljača, dok se u slučaju automatskog stvaranja iz drugog dokumenta preuzimaju isti podaci koji se nalaze u odgovarajućem polju izvornog dokumenta.

Također se može ručno unijeti. Desnim klikom miša moguće je otvoriti formu za specificiranje dugog teksta bilješke; ako polje sadrži vrijednost, boja pozadine polja mijenja se.

**Naša/Vaša referenca**: kada se dovrši postupak:
- [Izvršenje narudžbenice](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), također se nudi informacija iz odgovarajućeg polja narudžbenice. 
 
Ovaj prijenos vrijedi samo ako je faktura stvorena povlačenjem podataka iz samo jedne narudžbenice.

- [Valorizacija dostavnice kupnje](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), predlaže se informacija iz odgovarajućeg otpremnice.

Ovaj prijenos vrijedi samo ako je faktura izdana iz samo jedne otpremnice.  

**Početne bilješke**: ponovno će se predložiti informacije iz narudžbenice u slučaju [Izuzimanje iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Može se unijeti i ručno pomoću [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) kako bi se otvorile bilješke koje su već unesene u prethodnoj tablici koja se nalazi na putanji *Konfiguracija > Alati > Upravljanje kodiranim bilješkama*. Korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *pomoćne kodirane napomene* i odabrao podatke ili desnim klikom miša otvoriti prozor kako bi naveo vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Projekt**: pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.

Ovo udruživanje funkcionira samo na razini zaglavlja članka.

**Status dokumenta**: odnosi se na tablicu stanja dokumenta; podatak mora unijeti korisnik i može se koristiti postupcima replikacije instaliranim u upravljanju poslovnicom s prodajnim mjestima.

**Referenca**: nakon što stvori [storno](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) fakture, korisnik mora povezati dvije fakture unoseći *broj*, *datum* i *vrstu* izvorne fakture;

**Račun potraživanja**: navodi broj, datum i protokol knjiženja koji proizlazi iz knjiženja fakture.

### 2.3 Plaćanja

**Rješenja za plaćanje** automatski se prenose iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je **Tip plaćanja** povezan sa financijskim popustom, iznos popusta uzima se u obzir samo u računovodstvene svrhe, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu računa.

Ako dokument potječe iz:

- *Narudžbenice dobavljača*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta ili iz Šifarnika dobavljača; sva plaćanja dokumenata koji se moraju obraditi mogu se prikazati na jednom obrascu, a korisnik može odabrati željeni tip plaćanja.

- *Otpremnice*, plaćanja dobavljača mogu se zadržati ili pojedinačna plaćanja prisutna u svakoj otpremnici; u ovom slučaju, u računu se prikazuje tip plaćanja s osnovicom i PDV-om istim kao i otpremnici; nadalje, za eventualne redove artikala dodane u račun, a koje ne proizlaze iz otpremnice, dodaje se novi red.

#### Posebni gumb

**Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

### 2.4 Popusti

Predlažu se samo predefinirani popusti preuzeti iz *Šifarnik dobavljača > kartica Popusti* i mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta prenose se u svaki novi red artikla koji se unese u dokument.

Ako nakon unosa redaka artikala unesete novi popust u zaglavlje, on se ne replicira u već unesene redove artikala.

#### Posebni gumb

**Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

### 2.5 Pošiljka

Ovdje se predlaže informacija unesena u podaci dobavljača, kartica [Pošiljke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), samo ako postoje zadani podaci.

Padajući izbornik nudi sve *Primatelje* i *Odredišta* unesena u  Šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti samo kao opis bez prethodnog unosa među kontaktima.

### 2.6 Dodatni podaci

Ovdje se predlaže informacija unesena u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

### 2.8 Procedure testata

#### Izuzimanje iz narudžbe od strane dobavljača

Na zaglavlju dokumenta, pritiskom na dugme **Izuzimanje iz narudžbe od strane dobavljača** otvorit će se obrazac gdje možete filtrirati narudžbe dobavljača koje se odnose na dobavljača u dokumentu.

Moguće je zatim unijeti stavke unutar fakture, potpuno ili djelomično ispunjavajući cijelu narudžbu ili redak.

#### Posebni gumbi

> **Pretraži**: omogućuje pretraživanje narudžbi dobavljača.  
> **Prijenos**: omogućuje prijenos odabranih artikala/narudžbi.   
> **Prisilno izvršenje narudžbe**: omogućuje silovito ispunjenje narudžbe.  
> **Izvršenje narudžbi**: omogućuje ispunjenje narudžbe.   
> **Proširi**: omogućuje proširenje cijelog stabla narudžbi u donjoj mreži kako biste vidjeli sadržane stavke.   
> **Sažmi**: omogućuje skupljanje cijelog stabla narudžbi.   
> **Označi sve**: omogućuje označavanje svih stavki na popisu.  
> **Odznači sve**: omogućuje odznačavanje svih stavki na popisu.  

*Postupak*:

Za dobavljača i sve ostale filtre unesene u odjeljku *Filtriraj*, u donjoj mreži pojavit će se jedan red za svaku isprintanu, potvrđenu i neispunjenu ili djelomično ispunjenu narudžbu.

:::note NAPOMENA
Postupak preuzima sve podatke prisutne u narudžbi, a kao posljedica primijenit će se trenutni uvjeti kupnje prisutni u narudžbi, iako su se možda u međuvremenu promijenili.
:::

Koristite gumbe (**2**) za proširenje ![](/img/neutral/common/minus.png) / skupljanje ![](/img/neutral/common/plus.png) željenih narudžbi.

Koristite oznake (**3**) za označavanje  ![](/img/neutral/common/check.png) / odznačavanje ![](/img/it-it/purchase/purchase-invoices/insert-purchase-invoice/header-procedures/header-procedures/image14.png) pojedinačnih stavki ili cijele narudžbe.

Izvršite ispunjenje pomoću gumba **Prijenos**.

#### Automatski utovar skladištda

Ovaj postupak pokreće se pomoću gumba **Automatski utovar skladišta** koji se nalazi u zaglavlju dokumenta i poštuje niz prethodno postavljenih parametara na računu. Za detalje pogledajte identičan postupak: [Učitavanje računa o kupnji u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

Rezultat se može vidjeti u Logistika > [Zapisi](/docs/logistics/warehouse/stock-records/records) ili u postupku [Učitavanje računa o kupnji u skladište](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

## **3. Artikli**

U ovoj kartici unose se svi artikli sa pripadajućim podacima.

Podaci se unose **ručno**, uz pomoć **polja za pomoć** ili ih mogu predložiti povezane procedure.

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti se na red kako biste popunili različite podatke ili koristiti gumb **Novo** u traci s vrpcom.

### 3.1 DObavezni podaci

**Broj linije**: ovo polje popunit će se automatski i postupno unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz okvira za odabir.

:::note NAPOMENA
Ako se izravno krene s unosom artikla, njegova *klasa*, *kod* i *vrsta retka* - *Kodirani artikl* unose se automatski.
:::

> **Artikl sa klasom**: to su artikli kodirani u šifarniku i mogu se knjižiti u analitičkom računovodstvu i registrirati u skladištu.  
> **Artikl Ne-kodiran**: to su opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali ih nije moguće knjižiti u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji su posebno sažeti u sažecima dokumenata; ako je artikl troškova kodiran i od interesa za poreze, bit će pomican u skladištu, ako nije kodiran ili nije od interesa za poreze, neće se pomicati u skladištu.  
> **Napomena o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.  
> **Gratis artikl**: artikl za poklon se tretira kao kodirani ili nekodirani artikl u fiskalne i skladišne svrhe, ali budući da je poklon, zasebno se evidentira u sažecima računa. Ako je postavljena zastavica 'Pravo naplate PDV-a' na kartici, izračunava se iznos PDV-a za poklon, koji može ili ne mora biti na teret dobavljača.  

**Klasa/Kod/Opis artikla**: mogu se unijeti ručno ili uz pomoć polja za pomoć koje će predložiti sve povezane informacije unesene u *Šifarnik artikla*.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz evidencije. Ako artikl ima *Varijacije*, morat ćete odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Varijante**: ako odabrani artikl ima varijacije, morat ćete odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Količina**: predstavlja količinu glavne jedinice mjere i pretpostavljena je vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za izvršenje (npr. iz narudžbenice).

**Jedinica mjere**: automatski se predlaže glavna jedinica mjere artikla, ali korisnik može odabrati drugu jedinicu mjere. 

**Cijena**: cijena se predlaže iz cjenika unesenog u evidenciju kontakata; referentni cjenik za sam artikl prikazan je na kartici *Popusti/Cjenici*.

Isti dokument može sadržavati artikle s cijenama preuzetim iz različitih cjenika, ako su u šifarniku subjekta povezani više cjenika u kaskadi (vidi **Šifarnik klijenta**), isti dokument može sadržavati artikle iz različitih cjenika.

Dvoklikom u polje **Cjenici** (kartica *Popusti/Cjenici*) korisnik ima mogućnost odabira drugačije ponude od zadane, iz koje će se preuzeti cijena unesenog artikla.

Ako nema cjenika, predloženi podatak može se preuzeti iz **posljednje nabavne cijene** unesene u šifarnik artikla, ako u kartici [Postavkama narudžbenica dobavljača](/docs/erp-home/registers/items/create-new-items/item-registry/costs) nije postavljeno da se *trošak postavlja na nulu* u odsutnosti cjenika.

**PDV**: prioritet ima podatak unesen u polje PDV *Šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *Šifarnik artikla*, ali korisnik ima mogućnost unosa drugog podatka. To je obavezno polje.

### Nije obavezno unijeti sljedeće podatke

**Vrsta prometa nabave**: predloženi podatak je onaj unesen u kartici *Generalno* u šifarniku artikla. Ako to nije dostupno, neće biti predložen nikakav podatak.   

Moguće je da nedostatak te informacije uzrokuje pogreške u knjiženju računa koji će biti generiran iz otpremnice ako postupak također ne pronađe vrijednost u polju Predefinirani *Trošak/Prihod računa* u šifarnik kontakta. 

**Alternativna mjerna jedinica**: ova polja prikazuju količinu u alternativnoj mjeri ako je podatak dostupan u kartici **Alternativne mjernih jedinica u podacima artikla** (koristi se ona koja ima postavljenu zastavu za **Zadano**) i ako su u postavkama dokumenta aktivirane zastave: **Upravljanje dvostrukim mjerama** i **Automatski prijedlog alternativne mjere**.

**Alternativna količina**: predložena je vrijednost koja se odnosi na alternativnu mjeru, a izračunava se množenjem ili dijeljenjem *upraviteljske količine* (koja se odnosi na glavnu jedinicu mjere) s *faktorom pretvorbe* postavljenim u kartici *Alternativne mjernih jedinica u šifarnik artikla*.

**Skadište/Opis/Uzrok**: Ovi podaci su potrebni za evidentiranje ulaza u skladištu. Preuzimaju se na osnovu dokumenta nabave iz tablice *Vrste narudžbi/OTP/Primke* ili se unose ručno.

**Težine**: Navode se ukupne neto i bruto Težine stavki artikla. Navode se težine artikala iz šifarnika pomnožene s količinom stavke.

#### Posebni gumbi

> **Upravljanje pakiranjem**: omogućuje otvaranje upravljanja pakiranjem za vraćene stavke u dokumentima nabave. Gumb postaje aktivan kada je dokument spremljen, ali ne učitan. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje možete unijeti količinu, odabrati stavku i izvršiti transfer odabranog pakiranja u stavke artikla pritiskom na gumb **Izvrši**. Na ovom se obrascu prikazuju artikli koji su uneseni s prirodom pakiranja i koji se nalaze u tablici **Vraćena pakiranja**.  
> **Storno**: omogućuje storniranje tipova dokumenata koji imaju prirodu povrata.    
> **Ažurirajte cjenike**: omogućuje ažuriranje cijene artikla prema novom cjeniku (ako je unesen ažurirani cjenik).
Klikom na padajući izbornik pored gumba, bit će moguće stvoriti novi cjenik ako još nije stvoren.

### 3.3 Popusti/Cjenici  

**Cjenik**: nudi se cjenik iz kojeg je preuzet artikl, s datumom početka/završetka važenja te s posebnim uvjetima (npr. raspon popusta) dodijeljenim artiklu u cjeniku;

**Popusti**: nudi se svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjelom.

#### Poseban gumb*
> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

### 3.3 Podaci 

**Lokacija**: ponuđuje se samo ako je za odabrani artikl odabran skladište.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i pomoću odgovarajuće pomoći za projekte.

**Referenca naloga**: u slučaju da je račun generiran iz narudžbe, referenca na narudžbu u ovom polju bit će automatski unesena.

**Napomena**: mogu se unijeti bilješke o artiklu koje će kasnije biti navedene u svim dokumentima generiranim iz ovoga.

**Pravo naplate PDV-a**: ako je postavljeno, PDV poklona uzima se u obzir za ukupni iznos računa.

### 3.4 Podaci o artiklu 

**Lokacija**: nudi se samo ako je za odabrani artikl odabrano skladište.

## Varijante

Prikazuje se varijante odabranog artikla, kodirane u kartici **Varijante** šifarnika artikla ili se mogu unijeti ručno.Prilika je za upravljanje varijantama artikla na različit način od onoga što je ponuđeno na retku artikla.Primjerice, na svakom retku artikla moguće je unijeti ukupnu količinu; zatim, u istoj kartici, mogu se odrediti različite količine za više varijanti odabranog artikla, čak i za varijantu i atribut, odnosno upravljanje veličinom/bojom.Ova operacija je moguća samo ako su sve varijante artikla jednake cijene kao i standardna konfiguracija artikla.

#### Poseban gumb
> **Otkaži**: omogućuje brisanje odabranog retka varijante.

### 3.5 Lotovi i Serijski broj

U oba mrežna polja mogu se unijeti i partije i serijski brojevi koji se moraju učitati u skladište i koji su povezani s artiklom *Šifarnik artikla > kartica* [Lotovi i Serijski broj](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) ili ih se može unijeti ručno. 

Ako artikl ne podržava upravljanje Partijama/Serijskim brojevima, ova će kartica biti onemogućena.

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

### 3.11 Odjeljak s vrijednostima

Odjeljak prikazuje sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikla.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: Cijena artikla * Količina artikla;

**Ukupno rabat**: zbroj popusta artikla, uključujući i konačne popuste;

**Osnovica**: Iznos bez popusta - Popusti;

**Porez**: Osnovica* stopa PDV-a artikla;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim sekcijama ovog taba prikazane su glavne informacije o cijelom dokumentu i neki posebni gumbi.

### 4.1 Završni popusti

Mogu se unijeti samo popusti izraženi u postocima koji se primjenjuju na ukupan iznos dokumenta.

Popusti uneseni u ovoj sekciji izračunavaju se i prikazuju na svakom artiklu dokumenta, u kartici *Artikli > kartica Popusti/Listini*.

**Vrsta/Opis popusta**: Omogućuje odabir vrsta popusta (unaprijed definiranih u *Tipovi rabata*), dodjeljujući prioritet primjene popusta vrsti i određujući je li popust izračunat na osnovu oporezivog iznosa ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste.  
**Prioritet**: Predstavlja prioritet primjene popusta; redoslijed primjene raste.  
**Kaskada/Iznos**: Određuje je li izračun popusta zasnovan na (*cijena * količina*) - (*već izračunati popusti*) ili (*cijena * količina*).  
**Vrijednost**: Numerička vrijednost završnog popusta za primjenu.

### 4.2 Troškovi

Prikazani su troškovi uneseni u osnovne podatke o kontaktu, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutačni dokument.

**Vrsta/Opis**: Omogućuje odabir vrsta troškova (unaprijed definiranih u *Vrstama troškova*), dodjeljujući vrsti postotak troška za primjenu.  
**Postotak/Vrijednost**: Polje koje određuje hoće li se troškovi izračunavati postotkom ili predefiniranom novčanom vrijednošću.  
**Postotak**: Numerička vrijednost postotka troška.  

### 4.3 Sažeci PDV-a

Prikazuje sažetak PDV-a dokumenta, za svaki PDV.

### 4.4 Pregled dospjeća plaćanja

Prikazuje sažetak rokova plaćanja dokumenta, za svaki *tip* i *način plaćanja*. 

**Broj**: progresivna vrijednost reda. 

**Plaćanje**: predstavlja alfanumerički kod *Vrste plaćanja* preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*. 

**Iznos**: izračunati iznos roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*. (Automatski se provjeravaju kontrole i upozorenja o usklađenosti između vrijednosti rokova plaćanja i ukupnog iznosa fakture).

**Datum dospijeća**: datum izračunatog dospijeća roka plaćanja. Može se ručno promijeniti, u kojem slučaju se automatski aktivira sljedeća zastava *Ručno uređivanje*.

**Troškovi naplate**: polje u kojem su prikazani troškovi naplate. 

**PDV**: Za primjenu na troškove naplate (može se postaviti i ručno)  
**Razlog plačanja**: izravno se može unijeti u fakturu knjigovodstveni račun koji se koristi za naplatu (npr. blagajna ili banka). Obratite pažnju na predložak razloga jer će koristiti i račune koji su prisutni čak i bez podračuna, zbog čega postoji sljedeće polje.  

**Račun/podračun klijenta/dobavljača**, račun koji se koristi za naplatu/plaćanje roka, zamjenjujući račun prisutan u računskom razlogu plaćanja (ili naplate).

**Br. primitka**: eventualni broj primitka za primljene novce. 

**Jed.**: aktivira knjiženje zatvaranja rokova plaćanja u automatiziranim zapisima.

**Vrsta popusta**: vrsta financijskog popusta.

**Dospjela vrijednost**: vrijednost financijskog popusta na naplatu.

**Detaljne deklaracije**: to je referenca na izjavu o namjeri. PDV primijenjen na troškove naplate uvijek može biti PDV iznad pragova, pa je stoga potrebno omogućiti unos povezane izjave o namjeri (kao i za redove artikala i troškova).

**ULAZNI RAČUNI**:

**Znak**: samo rokovi plaćanja koji imaju ovu zastavu zatim se obrađuju u plaćanju s odabranim uzrokom i postavljenim računom. 

**Modeli plaćanja za referencu**: Model stvaranja koda plaćanja. U nekim stranim lokalizacijama svaki rok plaćanja u računu ima kod dodijeljen od strane fakturanta: ovaj je kod strukturiran prema određenim specifičnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao konstruirati algoritmom.

**Kodovi modela plaćanja**: ovo je kod (strukturiran prema prethodnom modelu) koji se unosi u stavku i stoga u plaćanja koja se šalju banci, kako bi ova obavijestila primatelja koja je dospjela obveza plaćena (i tako automatizirala uvoz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava u stavku i datoteci Sepa.  

**Rok plaćanja u gotovini**: Ovo je polje koje zahtijeva format računa Sdi, rok za primjenu financijskog popusta.

### 4.5 Popratni račun

Prikazuje mrežu u koju se može unijeti pripadajuća prateća faktura.

### 4.6 Ostala polja

**Završne napomene**: to je slobodno polje koje korisnik može ispuniti, uključujući *Pomoć kod kodiranih napomena*.

### 4.7 Ukupni dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih stavki; 

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;  

**Poklonjeni iznos**: predstavlja iznos stavki tipa poklon unesenih u karticu *Stavke*;    

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na stavkama, ali bez konačnih popusta. 

**Neto iznos artikala**: *Iznos stavki bez popusta - Ukupni primjenjeni rabati*;  

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postocima na bruto iznos stavki; 

**Neto iznos konačnih popusta**: *Neto iznos stavki - Ukupno konačnih rabata*;  

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao stavke *Vrste troškova*;  

**Troškovi naplate**: predstavlja zbroj unesenih troškova naplate u mrežu *Troškovi*;  

**Trošak ovjere**: predstavlja zbroj unesenih troškova marke u mrežu *Troškovi*;  

**Trošak dokumentacije**: predstavlja vrijednost unesenih troškova u mrežu *Troškovi*;  

**Osnovica**: *Neto iznos stavki - Konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u pregledima PDV-a;  

**Ukupno**: *Osnovica + PDV*.
