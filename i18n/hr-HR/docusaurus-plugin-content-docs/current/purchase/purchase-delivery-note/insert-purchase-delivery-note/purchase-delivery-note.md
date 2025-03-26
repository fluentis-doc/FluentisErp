---
title: Unos Otpremnice dobavljača
sidebar_position: 1
---


Putanje za stvaranje nove otpremnice:

- odlazak na **Nabava > Otpremnice dobavljača > Kreiraj primku** 

- ili putem gumba **Novo** koji se nalazi u obrascu [Pretraga primki](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note).

U ovom dijelu automatski se predlaže trenutni **Datum** koji se može promijeniti prema potrebi dokumenta.

## **1. Obavezni podaci**

**Vrsta dostavnice u nabavi** predefinirana u *Konfiguracija > Tablice > Nabava > Vrste dostavnica u nabavi*; 
**Broj** i **Datum** dokumenta dodijeljeni od strane dobavljača.  
**Dobavljač**, pomoću *polja za pomoć* ili *ručnim* unosom podataka.

Obrazac sadrži niz kartica.

## **2. Zaglavlje**

Nakon odabira obveznih podataka u gornjem dijelu, korisnik može nastaviti [ručni](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unos sljedećih podataka ili koristiti [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)ili, prema odabranim postupcima, aplikacija *automatski* popunjava polja..

:::note NAPOMENA 
Ako se dokument stvara *automatski*, ovi podaci preuzimaju se iz izvornog dokumenta iz kojeg je generiran.
:::

### 2.1 Dati fornitore

Unoseći **Dobavljača** automatski se *predlažu* svi specifični podaci iz kartice **Zaglavlje** prema prethodno postavljenim podacima u  [šifarnik dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) u odgovarajućim poljima adrese i *odjeljcima*: 

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Način dostave](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval važenja](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Ostala opcionalna polja

**Status otpremnice**: kad se otpremnica kreira, nema aktivnih oznaka. Ovaj odjeljak uključuje polja:  
> **Provjereno**: aktivna oznaka omogućava knjiženje/vrednovanje otpremnice;   
> **Vrednovano**: automatski je označeno kada se otpremnica vrednuje;  
> **Knjiženo**: automatski je označeno kada se otpremnica knjiži;    
> **Utovareno**: postaje aktivno kada otpremnica podržava postupak  [utovara u skladište](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).    
> **Opozvano**: aktivna oznaka omogućuje poništavanje otpremnice. 

:::note NAPOMENE
Oznake se mogu ukloniti postupkom vraćanja operacije.
:::

**Bilješke dobavljača**: ovo polje preuzima se iz evidencije dobavljača, dok će u slučaju stvaranja iz narudžbenice biti preuzeti isti podaci sadržani u odgovarajućem polju narudžbenice dobavljača. 

Može se unijeti i ručno. Desnim klikom miša moguće je otvoriti obrazac kako biste naveli vrlo dugu napomenu; ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Naša/Vaša referenca**: kada se dovrši postupak [Izvršenje narudžbenice](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), također se nudi informacija iz odgovarajućeg polja narudžbenice. 

Ovaj prijenos vrijedi samo u slučaju otpremnice stvorene prema podacima preuzetim iz jedne narudžbenice.

**Početne napomene**: bit će ponuđene informacije iz narudžbenice u slučaju [Izvršenje otpremnica iz narudžbe](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Mogu se unijeti i ručno koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) kako biste otvorili napomene koje su prethodno unesene u odgovarajuću tablicu koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje kodiranim napomenama*. Korisnik mora dvaput kliknuti na polje **Početne napomene** kako bi otvorio *pomoćne kodirane napomene* napomene i odabrao podatke ili desnim klikom miša otvoriti prozor kako bi naveo vrlo dugu napomenu. Ako polje sadrži vrijednost, boja pozadine polja se mijenja.

**Projekt**: pomoću [pomoćnog polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom.  
Ovo povezivanje funkcionira samo na razini zaglavlja članka.

**Status dokumenta**: odnosi se na tablicu **Status dokumenta**; podatak mora unijeti korisnik i može se koristiti postupcima replikacije instaliranima za upravljanje jednim mjestom s prodajnim mjestima.

**Specifični gumbi**

> **Izuzimanje iz narudžbe**: poziva postupak za stvaranje otpremnice iz narudžbenice dobavljača. Aktivira se unosom dobavljača i vrste otpremnice. Narudžbenica koja se izvršava mora imati postavljenu zastavu *Ispisano* i *Datum potvrde narudžbe*.    
> **Automatski zaduživanje skladišta**: koristi se za automatsko unošenje artikala u skladište. Ovo polje bit će uredno nakon što se aktivira polje *Provjereno* i unese *Broj* dokumenta.

### 2.3 Plaćanja

**Rješenja plaćanja** automatski su preuzeta *Šifarnika dobavljača > kartica Plaćanja* i mogu ih korisnik mijenjati/brisati.

Ako je s **Tipom plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u knjigovodstvene svrhe, tj. U rokovima plaćanja dokumenta, a ne u ukupnom iznosu dostavnice.

Ako dokument potječe iz *Narudžbenice dobavljača*, tipovi plaćanja mogu se preuzeti iz prvog dokumenta, iz obrasca dobavljača ili se mogu vidjeti u obrascu dokumenata koje treba izvršiti, a korisnik odabire željeni tip plaćanja.

#### Poseban gumb

**Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.

### 2.4 Popusti 

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnika dobavljača > kartica Popusti* i korisnik ih može mijenjati/brisati.

Popusti koji su ponuđeni u zaglavlju dokumenta prenose se u svaki novi redak članka unesen u dokument.

Ako nakon unosa redaka članka unesete novi popust u zaglavlje, to se ne replicira u već unesene retke članka.

#### Poseban gumb

**Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.


### Primatelj 

Ovdje se nudi informacija unesena u Obrasca dobavljača, kartica **Dostave**, samo ako postoje zadani podaci.

Padajući izbornik nudi sve primatelje i destinacije unesene u Obrasca dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti čak i samo opisno, bez prethodnog unosa među kontaktima.

### 2.5 Dodatni podaci 

Ovdje se nudi informacija unesena u *Šifarnika subjekta > kartica Dodatni podaci*, samo ako postoje zadani podaci.

## **Procedure testata:**

### *Automatsko unošenje u skladište*

Ovaj postupak pokreće se pomoću istoimenog gumba smještenog u zaglavlju dokumenta i poštuje niz parametara postavljenih unaprijed u otpremnicu (za pojedinosti pogledajte isti postupak: [Zaduženje skladišta Primkom](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) ).

Rezultat se može pregledati u odjelu Logistika > [Registracije](/docs/logistics/warehouse/stock-records/records) ili u postupku [Zaduženje skladišta Primkom](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).

### *Izvršavanje narudžbe od dobavljača*

U zaglavlju dostavnica, pritiskom na gumb **Izvršavanje od narudžbe** otvorit će se obrazac gdje je moguće filtrirati narudžbe dobavljača koje se odnose na dobavljača dokumenta.

Putem ove procedure moguće je stvoriti otpremnicu kupnje izvršavanjem odgovarajuće narudžbe dobavljača. Dakle, moguće je unijeti stavke unutar otpremnice a potpuno ili djelomično izvršavajući cijelu narudžbu ili redak.

Da biste koristili ovu proceduru, moraju se zadovoljiti određeni uvjeti:

 -  dobavljač narudžbi mora biti isti kao i dobavljač otpremnice;
 -  narudžba koju želite izvršiti mora imati aktivnu zastavicu *Printed* i već mora biti *Potvrđena*;
 -  vrste dokumenata moraju biti kompatibilne: u tablici *Vrste narudžbi*, vrsta narudžbe koju želite izvršiti mora imati postavljenu odgovarajuću vrstu otpremnice, dok u tablici *Vrste otpremnice* mora biti postavljena zastava na Narudžba (koja označava da otpremnica potječe iz narudžbe).

Zatim će trebati postaviti vrstu otpremnica koju želite stvoriti u zaglavlju nove otpremnice (koja se mora podudarati s onom postavljenom u tablici *Vrste narudžbi*) i *Dobavljača*. Nakon što se unesu ovi podaci, trebat će kliknuti na gumb *Izvršavanje narudžbi* kako bi otvorili obrazac za izvršavanje.

#### Postupak

Filtri za dobavljača i valutu automatski će se prenijeti na temelju dobavljača odabranog u otpremnici.

Nakon postavljanja svih željenih *Filtara*, pritiskom na gumb za *Traži*, pojavit će se jedan redak za svaku tiskanu, potvrđenu i neizvršenu ili djelomično izvršenu narudžbu.

:::note UPOZORENJE 
Postupak preuzima sve podatke prisutne u narudžbi, pa će stoga biti primijenjeni uvjeti kupnje prisutni u narudžbi, čak i ako su se trenutačno promijenili.
:::

U mreži rezultata, korisnik ima mogućnost:

1. Odabrati *cijelu narudžbu*. Za to jednostavno označite okvir na početku reda narudžbe.
2.	Odabrati samo *neke* od predloženih *artikala*. Da biste to učinili, označite okvir na početku reda artikla.
3.	Odabrati samo *neke artikle* i samo određenu količinu. U ovom slučaju, morate promijeniti količinu za izvršavanje.

Da biste dovršili postupak, kliknite gumb *Prijenos*, koji će preuzeti sve podatke iz narudžbe i prenijeti ih u otpremnicu.

#### Posebni gumbi

> **Traži**: omogućuje pretraživanje narudžbi dobavljača.  
> **Prijenos**: prenosi podatke odabrane narudžbe u novu otpremnicu.  
> **Prisilno izvršavanje narudžbe**: prisiljava izvršavanje narudžbe.  
> **Izvršenje narudžbi**: izvršava narudžbu.   
> **Proširi**: proširuje cijelo stablo narudžbi u donjoj mreži kako biste vidjeli artikle sadržane u njima.  
> **Sažmi**: sažima prikaz redaka artikala i prikazuje samo retke narudžbe.  
> **Označi sve**: odabire sve artikle s popisa.  
> **Odznači sve**: poništava odabir svih artikala s popisa.  

## **3. Artikli**

Na ovom je kartici potrebno unijeti sve podatke o artiklima. 

Za sve što nije detaljno opisano u ovom dokumentu o općenitom radu formi, molimo pogledajte slijedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).


Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) uz pomoć [pomoći u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.

Da biste unijeli **Novi artikl** u mrežu, jednostavno se pozicionirajte na red kako biste unijeli različite podatke ili koristite **Novo** koji se nalazi u vrpci.


### 3.1 Obavezni podaci

**Broj linije**: Ovo polje će se automatski popuniti progresivno s unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih vrsta članaka iz padajućeg izbornika.


:::note NAPOMENA
Ako se izravno kreće s unosom članka, njegova *klasa*, *kod* i *vrsta retka - Kodirani članak* automatski se unose.
:::

> **Artikl sa klasom**: to su članci kodirani u anagrafici i mogu se knjižiti u analitičkom knjigovodstvu i registrirati u skladištu.   
> **Artikl Nekodirani**: to su opisni članci koji se mogu knjižiti u analitičkom knjigovodstvu, ali ih nije moguće premjestiti u skladište.  
> **Trošak**: To su kodirani ili nekodirani članci koji se posebno sažimaju u riječima u riječi dokumenta, ako je članak troškova kodiran i od poreznog interesa, bit će premješten u skladište, ako nije kodiran ili nije od poreznog interesa, neće se premještati u skladište. 

**Bilješka o članku**: To su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.

**Razred/Kod/Opis članka**: Mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili u [pomoći u polju](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koja će predložiti sve povezane podatke unesene u Šifarnik artikla.

Nakon unosa članka, njegov će se *Opis* automatski preuzeti iz šifarnika. Ako članak ima *Varijante*, trebat će odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Varijanta**: se odnosi na artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od one standardno postavljene. Stoga cijena članka s varijantama može biti drugačija od cijene članka bez varijanti. To može eventualno zahtijevati upravljanje varijantama članka u referentnom cjeniku.

**Količina**: predstavlja količinu glavne J.M. i prema zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za obradu (npr. od dobavljača).

**Jedinica mjere**: Predložena je glavna jedinicu mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Cijena**: Cijena se predlaže iz cjenika unesenog u anagrafiku kontakta; referentni cjenik za sami članak prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati članke s cijenama iz različitih cjenika ako su u podacima subjekta povezana više cjenika u nizu (vidi **Šifarnik kontakta**), isti dokument može sadržavati članke iz različitih cjenika.

Dvoklikom na polje **Popusti** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će se preuzeti cijena unesenog članka.

Ako nema cjenika, predloženi podatak je **posljednji Troškak** preuzeta iz podataka artikla, kartice **Troškovi**, ili će se dobiti prema postavkama parametara dokumenta.

**PDV**: Prioritet ima podatak unesen u PDV polje *šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *šifarnik artikla* ali korisnik može unijeti drugi podatak. Ovo je obavezno polje.

### 3.2 Podaci koji nisu obavezni

**Tip prometa nabave**: prijedlog je unesen iz *Šifarnik artikla > kartica Općenito*. Ako nije dostupno, treba ga unijeti odabirom jedne od ponuđenih stavki iz odgovarajućeg padajućeg izbornika.

Nedostatak ovih podataka može uzrokovati pogreške u knjiženju računa koje će generirati otpremnicu ako postupak ne pronađe vrijednost čak ni u polju *Zadani trošak/Prihod* u šifarnik kontakta.

**Alternativna mjerna jedinica**: U ovim se poljima prikazuje količina u alternativnoj mjernoj jedinici ako je taj podatak dostupan u šifarniku artikla na kartici **Alternativna mjerna jedinica** (preuzima se onaj koji ima postavljenu oznaku **Zadano**) i ako su u postavkama dokumenta aktivirane funkcionalnosti: **Upravljanje dvostrukom mjerom** i **Automatski prijedlog alternativne mjere**.

**Alternativna količina**: prijedlog je vrijednosti povezane s alternativnom mjernom jedinicom., izračunato množenjem ili dijeljenjem *količine upravljanja* (vezano uz glavnu mjernu jedinicu.) s *faktorom pretvorbe postavljenim* u *Šifarnik artikla > kartica Alternativna mjerna jedinica*.

**Skladište/Opis/Razlog**: ovi podaci potrebni su za knjiženje robe u skladište. Preuzimaju se prema dokumentu kupnje iz tablice *Tip naloga/Otpremnica/ Ulazni račun* ili se unose ručno.

**Težine**: prikazane su ukupne neto i bruto težine redova članaka. Težine članaka u anagrafici pomnožene su količinom reda.

#### Posebni gumbi

> **Upravljanje pakiranjem**: otvora upravljanje pakiranjem koje će se koristiti u dokumentu kupnje. Gumb postaje aktivan kada je dokument spremljen, ali ne i knjižen. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje se može unijeti količina, odabrati redak i izvršiti prijenos odabrane ambalaže u retke članaka pritiskom na gumb **Execute**. Na ovom se obrascu prikazuju članci koji su uneseni s ambalažom prirode i koji se nalaze u tablici Pakiranja za napraviti.  
> **Ažuriraj Mjesto**: Koristi se za ažuriranje lokacije prema uzroku i prikazuje ga u retku. Gumb postaje aktivan ako se odabere barem dva članka i otvara pomoć lokacija gdje možete odabrati novu lokaciju za sve odabrane članke za ovu proceduru.  
> **Storno**: Omogućuje poništavanje vrsta dokumenata koje imaju prirodu povrata.    
> **Ažuriraj prodajni cjenik**: Omogućuje ažuriranje cijene članka prema novom cjeniku (ako je unesen ažurirani cjenik). Klikom na padajući izbornik pored gumba, bit će moguće stvoriti novi cjenik ako još nije stvoren.

### 3.3 Sconti/Listini

**Cjenik**: prikazuje cjenik iz kojeg je preuzet proizvod, s datumima početka/završetka važenja i posebnim uvjetima (npr. raspon popusta) dodijeljenim proizvodu u tom cjeniku.
  
**Popusti**: prikazani su svi popusti povezani s proizvodom, svaki s vlastitom osnovom za izračun i dodjelom.

#### Poseban gumb

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.


### 3.4 Podaci artikla

**Lokacija**: prikazuje se samo ako je za odabrani proizvod odabrano skladište.  
**Projekt**: predstavlja projekt povezan s dokumentom. Također se može unijeti putem odgovarajuće pomoći za projekte.  
**Referenca naloga**: ako se otpremnica generira iz narudžbe, referenca na narudžbu bit će automatski upisana u ovom polju.  
**Bilješka**: omogućuje unos napomena o proizvodu koje će se zatim prikazati u svim dokumentima generiranim iz ovoga.


#### Varijante 

Prikazuje varijante odabranog proizvoda, kodirane u kartici **Varijante** u kartici Artikli ili ih se može unijeti ručno.
Ova opcija omogućuje upravljanje varijacijama proizvoda na drugačiji način nego što je predloženo u retku proizvoda.
Na primjer, u svakom retku proizvoda moguće je unijeti ukupnu količinu; zatim, u istoj kartici, moguće je definirati različite količine za više varijacija odabranog proizvoda i to i za varijantu i atribut, tj. upravljanje veličinom/bojom.  
Ova operacija je moguća samo ako sve varijante odabranog proizvoda imaju istu cijenu kao cijena proizvoda u standardnoj konfiguraciji.

#### Poseban gumb

> **Otkaži**: omogućuje brisanje odabrane varijante.

### 3.5 Lotovi i Serijski broj

Ove dvije mreže omogućuju unos partija i serijskih brojeva koji se moraju unijeti u skladište i koji su povezani s proizvodom u kartici *Šifranik artikla > kartica [Lotovi/Serijski broj ](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili ih je moguće unijeti ručno.

Ako proizvod ne podržava upravljanje Lotovima/Serijski brojevima, ova će kartica biti onemogućena.

#### Posebni gumbi

> **Izbriši lot**: omogućuje brisanje odabranog lota.  
> **Izbriši serijski broj**: omogućuje brisanje odabranog serijskog broja.

### 3.6 Analitika 

Može sadržavati informacije o centrima troškova/dobiti na koje se distribuiraju vrijednosti proizvoda.

Ovi podaci mogu se unijeti ručno ili *automatski* (ako su centri troškova/dobiti već uneseni u *šifarnik kontakata*, *šifarnik artikala* ili *plan računa*).

#### Posebni gumbi

> **Izbriši centar troška**: Omogućuje brisanje odabrane stavke centra troškova.  
> **Izbriši profitne centre**: Omogućuje brisanje odabrane stavke centra dobiti.


### 3.7 Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s odabranim artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz opciju putem odgovarajuće oznake odabrati koje dodatne podatke želite ispisati.


### 3.8 Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumentu u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaš referentni broj). Uputstva o tome kako dodati dokument potražite u članku **Priloži dokumente**.


### 3.9 Odjeljak vrijednosti

Odjeljak prikazan u donjem desnom kutu pruža sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: cijena artikla* količina artikla;

**Ukupno rabat**: zbroj popusta na artikl, uključujući i završne popuste;

**Osnovica**: Bruto iznos - Popusti;

**Porez**: Osnovica* stopa PDV-a za artikl;

**Ukupno**: Osnovica + Porez.

## **4. Sažeci**

U različitim sekcijama ove kartice prikazane su osnovne informacije o cijelom dokumentu i određeni posebni gumbi.

### 4.1 Konačni popusti

Mogu se unijeti samo popusti izraženi u postotku koji se primjenjuju na ukupan iznos dokumenta.

Uneseni popusti u ovoj sekciji izračunavaju se i prikazuju za svaki članak dokumenta, u *kartici Artikli > kartica Popusti/Listini*.

**Vrsta/Opis popusta**: omogućuje odabir vrsta popusta (unaprijed definirane u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovicu ili se kumulira s prethodno primijenjenim popustima.   
**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se vrši uzlaznim redoslijedom.   
**Kaskada/Iznos**: definira hoće li se popust izračunavati na osnovicu (cijena*količina - primijenjeni popusti) ili na osnovicu(cijena*količina).   
**Vrijednost**: numerička vrijednost konačnog popusta za primjenu.


### 4.2 Troškovi

Prikazuje troškove unesene u podacima o kontaktu, u kartici *Troškovi/Popusti*.

Također postoji mogućnost unosa troškova koji se odnose samo na trenutni dokument.

**Vrsta/Opis**: omogućuje odabir vrsta troškova (unaprijed definirane u Vrstama troškova), dodjeljujući svakoj vrsti postotak troška za primjenu.   
**Postotak/Vrijednost**: polje koje određuje je li trošak izračunat postotkom ili unaprijed određenim novčanim iznosom.   
**Postotak**: numerička vrijednost postotka troška.  


### 4.3 Sažetak PDV-a 

Prikazuje sažetak PDV-a dokumenta za svaki PDV kod.

### 4.4 Pregled dospjeća plaćanja

Predstavlja sažetak rokova dokumenta za svaki *tip* i *uvjet* plaćanja.

**Broj**: progresivna vrijednost retka. 

**Plaćanje**: predstavlja alfanumerički kod Tipa plaćanja preuzet iz *Zaglavlja dokumenta > kartica Plaćanja*.

**Iznos**: iznos izračunatog roka plaćanja. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka *Ručno mijenjanje*. (Automatski se vrše provjere i upozorenja na usklađenost iznosa rokova s ukupnim iznosom računa).

**Datum dospijeća**: datum izračunatog roka plaćanja. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka Ručno mijenjanje.

**Troškovi naplate**: polje u kojem se prikazuju izračunati troškovi naplate.

**PDV**: primjenjuje se na troškove naplate (može se također postaviti ručno).

**Razlog plaćanja**: moguće je izravno uključiti računsku stavku u račun koja dovodi do automatskog evidentiranja naplate/plaćanja. Važno je pažljivo pratiti predložak računa jer će koristiti i račune koji nemaju podračun, zbog čega postoji sljedeće polje.

**Konto podkonto kupca/dobavljača** računa koji koristi za naplatu/plaćanje (npr., blagajna ili banka).

**Br. priznanice**: eventualni broj priznanice za primljena sredstva.

**Jed.**: omogućuje knjiženje zatvaranja rokova u automatski generirane knjižne redove.

**Vrsta popusta**: Vrsta financijskog popusta.

**Dospjela vrijednost**: vrijednost financijskog popusta na naplatu
Detaljne deklaracije: referenca na izjavu o namjeri. PDV primijenjen na troškove naplate uvijek može biti na gornju/donju vrijednost PDV-a, pa je stoga potrebno omogućiti unos izjave o namjeri i ovdje (kao i za člancima i troškovima).

**ULAZNI RAČUNI**:

**Znak**: samo rokovi označeni ovom oznakom zatim se obrađuju u plaćanju s određenom oznakom i postavljenim kontom

**Modeli referentnih plaćanja**: model stvaranja koda plaćanja. U nekim stranim lokalizacijama svaki rok plaćanja u računu ima kod koji dodjeljuje izdavatelj računa: ovaj je kod strukturiran prema određenim posebnim modelima (tablica MB_PaymentReferenceModels), kako bi se kod mogao konstruirati prema određenom algoritmu.

**Kodovi modela plaćanja**: ovo je kod (strukturiran kao i prethodni model) koji se unosi u račun i stoga zatim u plaćanja koja se šalju banci, kako bi ova obavijestila primatelja koja dospjela plaćanja su plaćena (i tako automatizirala uvoz bankovnih transakcija s zatvaranjem stavke). Odatle se popunjava unutar stavke i u Sepa datoteci.

**Datum dospijeća plaćanja** unaprijed je predviđeno u formatu Sdi faktura, datum do kojeg se primjenjuje financijski popust.

### 4.5 Dodatna polja

**Volumen**: ponuđena je zbrojna zapremina, rezultat zbroja zapremina članaka (vrijednost se preuzima iz *Šifarnik artikla  > kartica Težina/Dimenzije*), kada se jedinica mjere zapremine artikla podudara s onom unesenom u parametre otpremnice. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Neto/bruto težina**: ponuđena je zbrojna neto težina, rezultat zbroja težina članaka (vrijednost se preuzima iz *Šifarnik artikla > kartica Težina/ Dimenzije*), kada se jedinica mjere težine članaka podudara s onom unesenom u parametre dostavnice. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Paketi**: ponuđen je broj paketa, na temelju podataka unesenih u *šifarnik artikla > kartica Težina/ Dimenzije*, u poljima *Artikli prisutni samo u jednom paketu* ili *Paketi za artikl*. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Vrijednost ručno promijenjena**:

### 4.6 Ukupno za dokument

**Iznos stavki bez popusta**: predstavlja zbroj vrijednosti svih artikla;

**Zaduženje**: predstavlja vrijednost eventualne akontacije primljene za dokument;

**Poklonjeni iznos**: predstavlja iznos artikla vrste poklona unesenih u karticu *Artikli*;

**Ukupni primjenjeni rabati**: predstavlja ukupnu vrijednost primijenjenih popusta na artikle, ali bez završnih popusta.

**Neto iznos predmeta**: *Iznos stavki bez popusta - Ukupni primjenjeni rabati*;

**Ukupno konačnih rabata**: predstavlja vrijednost konačnih popusta izraženih u postotku na bruto iznos artikla;

**Neto iznos konačnih rabata**: *Neto iznos predmeta - Ukupno konačnih rabata*;

**Neregistrirani troškovi**: predstavlja vrijednost troškova unesenih u prethodnu karticu kao artikala *Tip troška*;

**Troškovi naplate**: predstavlja zbroj troškova naplate unesenih u rešetku *Troškovi*;

**Trošak ovjere**: predstavlja zbroj troškova marke unesenih u rešetku *Troškovi*;

**Dokumentirani troškovi**: predstavlja vrijednost troškova unesenih u rešetku *Troškovi*;

**Osnovica**: *Neto iznos artikla - konačni popusti + Ukupni nedokumentirani troškovi + Ukupni dokumentirani troškovi*;

**Porez**: predstavlja zbroj vrijednosti sadržanih u sažecima PDV-a;

**Ukupno**: *Osnovica + PDV*.

## **5. Transport**

Ovo je odjeljak koji sadrži informacije o prijevozu artikala.

Padajući izbornici nude sve **primatelje**, **destinacije** i **prijevoznike** unesene u *Šifarnik kontakta > kartica [Pošiljke](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* ali se također mogu ručno unijeti.

:::note NAPOMENA 
Ako su polja već popunjena, to znači da su preuzeta iz *Zaglavlje dokumenta > kartica Primatelji* ali ih se može izmijeniti (ova akcija će ažurirati podatke u odgovarajućem kartici zaglavlja).
:::

**Prijevoz**: u ovom dijelu automatski se nudi prijevoz odabran u *Šifarnik kontakta > kartica [Dostave](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio gumbi: Pošiljatelj/Primatelj/Prijevoznik), ali podaci se mogu mijenjati.

**Volumen**: nudi se kumulativni volumen, rezultat zbroja volumena članaka (vrijednost se preuzima iz *Šifarnik artikla> kartica Težina/Dimenzije*), kada se jedinica mjere volumena članaka podudara s onom unesenom u parametre otpremnice. Razmatraju se samo članci koji imaju ovo polje ispunjeno.

**Neto/bruto težina**: nudi se kumulativna neto težina, rezultat zbroja težina članaka (vrijednost se preuzima iz *Šifarnik artikla > kartica Težina/Dimenzije)*, kada se jedinica mjere težine članaka podudara s onom unesenom u parametre otpremnice. Razmatraju se samo artikli koji imaju ovo polje ispunjeno.

**Paketi**: nudi se broj paketa, na temelju podataka unesenih u *Šifarnik artikla > kartica Težina/Dimenzije*, u poljima *Artikli prisutni samo u jednom paketu* ili *Paketi za artikl*. Razmatraju se samo članci koji imaju ovo polje ispunjeno.