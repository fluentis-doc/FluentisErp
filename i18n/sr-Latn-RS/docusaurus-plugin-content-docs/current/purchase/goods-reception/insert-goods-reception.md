---
title: Unos primanja Robe
sidebar_position: 3
---

Putanje za stvaranje novog **Primanja Robe**:

- idite na **Nabava > Prijem robe > Izradite prijem robe**  

- ili putem gumba **Novo** koji se nalazi u obrascu


## **1. Obavezni podaci**

**Dobavljač**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unošenje podataka.

**Tip dokumenta**: predefiniran u *Konfiguracija > Tablice > Nabava > Vrste primanja robe*. Ovo polje određuje raspon numeracije dokumenta koji se unosi i automatski predlaže **Broj** temeljem datuma unosa i posljednjeg unesenog broja;   
**Broj**: automatski se predlaže prema vrsti, ali se može ručno izmijeniti uvijek poštujući pravilo napretka između datuma i broja;   
**Datum prijema**: automatski se predlaže trenutni datum, ali se može ručno izmijeniti uvijek poštujući pravilo napretka između datuma i broja.

## **1. Artikli**

**Tip linije** pruža mogućnost odabira različitih artikala iz padajućeg izbornika.

:::note NAPOMENA 
Ako se krene izravno s unosom artikla, njegova *klasa*, *kod* i *vrsta reda* - *Kodirani artikl* automatski će biti uneseni.
:::
> **Artikl s klasom**: artikli kodirani u općem registru koji se mogu evidentirati u analitičkom računovodstvu i evidentirati u skladištu.   
> **Artikl bez klase**: opisni artikli koji se mogu evidentirati u analitičkom računovodstvu, ali se ne mogu kretati u skladištu.   
> **Trošak**: kodirani ili nekodirani artikli koji se razlikuju u sažecima dokumenata; ako je kodirani artikl trošak i ima poreznu relevantnost, bit će zabilježen u skladištu, ako nije kodiran ili nema poreznu relevantnost, neće se zabilježiti u skladištu.   
> **Opis**: opisne napomene navedene u ispisi dokumenta; ne utječe na računovodstvo i skladište.

**Kod**: odnosi se na *Barkodni kod artikla* unesen u *Artikli > Kartica Barkodni kod*.  

**Klasa/Kod/Opis artikla**: mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz pomoć [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve relevantne podatke unesene u Šifarniku artikala.

Nakon unosa artikla, njegov će *Opis* automatski biti preuzet iz šifarnika. Ako artikl ima *Varijacije*, trebat će odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Varijante**: ako odabrani artikl ima varijacije, potrebno je odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Prema tome, cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To eventualno može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.

**Šifra stavke dobavljača**: odnosi se na tablicu *Dobavljačkih artikala*;     
**Varijanta dobavljačkog artikla**: odnosi se na tablicu *Varijanti dobavljačkih artikala*;      
**Mjerna jedinica**: predlaže se glavna Mjerna jedinica artikla, ali korisnik ima mogućnost odabrati drugu mjernu jedinicu.   
**Količina dokumenta**: predstavlja količinu glavne mjern jedinice;   unosi se količina odnosi se na izvršenu narudžbu dobavljača, nije obavezan podatak;     
**Primljena količina**: predstavlja stvarno primljenu količinu;     
**Alternativna mjerna jedinica**: predlaže se alternativna mjerna jedinica prisutna u kartici Alternativne mjere Općeg registra artikala s postavljenom zastavicom Default;   
**Alternativna količina**: predlaže se vrijednost povezana s alternativnom mjernom jedinicom, izračunata množeći ili dijeleći upravnu količinu (u odnosu na glavnu mjerne jedinice) s faktorom konverzije postavljenim u Šifarnik artikala > kartica Alternativne mjere;   
**Cijena**: predstavlja cijenu prisutnu u narudžbi dobavljača, ako je red primanja isporučio red narudžbe dobavljača, ili zadnji trošak općeg registra artikala;   
**Opcija**: obvezni podatak koji odgovara tablici Opcija osnovne specifikacije;   
**Skladište**: skladište za primanje robe, preuzima se iz narudžbe dobavljača ako red primanja isporučuje red narudžbe dobavljača ili ga može [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unijeti korisnik;   
**Predložak**: uzrok primanja robe, preuzima se iz narudžbe dobavljača ako red primanja isporučuje red narudžbe dobavljača ili ga može [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unijeti korisnik;   
**Referenca narudžbe**: ako je red stvoren isporukom reda narudžbe dobavljača, naveden je broj isporučene narudžbe;     
**Lokacija**: ako uzrok ima zadanu lokaciju, predložena je ta lokacija, inače se može [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unijeti ako se skladište upravlja lokacijama.

#### Posebni gumbi 

> **Izvršavanje iz narudžbe**: omogućuje stvaranje primanja robe izvršavanjem redova iz narudžbe dobavljača pomoću postupka [Izvršavanje iz narudžbi dobavljača](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).

> **Upravljanje pakiranjem**: omogućuje otvaranje upravljanja pakiranjem koje će se koristiti u kupovinskom dokumentu. Gumb postaje aktivan ako je dokument spremljen, ali ne i učitan. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje se može unijeti količina, odabrati redak i izvršiti prijenos odabranog pakiranja u redove artikala pritiskom na gumb **Izvrši**. Na ovom obrascu prikazani su artikli koji su uneseni kao Vrsta: Pakiranje i koji se nalaze u tablici **Pakiranja za napraviti**.

### 2.1 Lotovi

Prikazani su lotovi koji se moraju uvesti u skladište i koji su povezani s artiklom u Šifarnik artikala > kartica [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) ili se mogu ručno unijeti.

#### Poseban gumb 

> **Izbriši lot**: omogućuje brisanje odabranog reda lota.

### 2.2 Podaci artikla

Unutar ove kartice prikazuju se/unose dodatne informacije vezane uz artikl.

- **Artikl**: prikazuje artikl odabran u gornjem pregledu.   

- **Varijanta**: u ovom polju moguće je odabrati varijantu artikla među onima koje su prethodno definirane u kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u matičnim podacima artikla. Ako su u cjeniku definirane različite cijene i/ili popusti za pojedine varijante, oni će se automatski ažurirati prilikom odabira druge varijante artikla.  

- **Skladište i predložak**: omogućuje unos skladišta i pripadajućeg predloška koji će se koristiti za knjiženje zaprimanja povezanih artikala na skladište. Ako je redak artikla preuzet iz narudžbe dobavljaču, automatski će se predložiti skladište i predložak uneseni u narudžbi; u suprotnom se mogu ručno unijeti za svaki redak artikla. Ako polja nisu popunjena, prilikom knjiženja prijema robe koristit će se vrijednosti definirane u parametrima narudžbi dobavljača, u kartici [Zaprimanje].(/docs/configurations/parameters/purchase/purchase-orders-parameters). 

- **Projekt**: predstavlja projekt koji se povezuje s dokumentom. Ako je projekt unesen u zaglavlju dokumenta, automatski će se prenijeti na sve retke artikala; alternativno, može se odabrati putem odgovarajuće pomoći za odabir projekata.

- **Alternativna mjerna jedinica / alternativna količina**: ako je u [matičnim podacima artikla] (/docs/erp-home/registers/items/create-new-item) definirana alternativna mjerna jedinica s oznakom *Zadano* te je u parametrima narudžbi dobavljača aktivirana oznaka *Automatski prijedlog alternativne mjerne jedinice*, te će se vrijednosti automatski predložiti prilikom unosa artikla.

### 2.3 Analitika

**Izbriši profitne centre**: omogućuje brisanje odabranog reda centra dobiti.

#### Posebni gumbi

> **Izbriši centar troška**: omogućuje brisanje odabranog reda centra troškova;   
> **Izbriši profitne centre**: omogućuje brisanje odabranog reda centra profita.


### 2.4 Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s artiklom, s mogućnošću dodavanja novih dodatnih podataka koji su korisni samo za taj dokument, uz mogućnost odabira, putem odgovarajuće oznake, koji dodatni podaci će se ispisati.