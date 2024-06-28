---
title: Artikli
sidebar_position: 4
---

Na ovom je kartici potrebno unijeti sve podatke o artiklima. 

Za sve što nije detaljno opisano u ovom dokumentu o općenitom radu formi, molimo pogledajte slijedeći link [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).


Podaci se unose [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) uz pomoć [pomoći u polju](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili ih mogu predložiti povezane procedure.


## Artikli 

Da biste unijeli **Novi artikl** u mrežu, jednostavno se pozicionirajte na red kako biste unijeli različite podatke ili koristite **Novo** koji se nalazi u vrpci.


### Obavezni podaci

**Broj linije**: Ovo polje će se automatski popuniti progresivno s unosom podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih vrsta članaka iz padajućeg izbornika.


:::note NAPOMENA
Ako se izravno kreće s unosom članka, njegova *klasa*, *kod* i *vrsta retka - Kodirani članak* automatski se unose.
:::

> **Artikl sa klasom**: to su članci kodirani u anagrafici i mogu se knjižiti u analitičkom knjigovodstvu i registrirati u skladištu.   
> **Artikl Nekodirani**: to su opisni članci koji se mogu knjižiti u analitičkom knjigovodstvu, ali ih nije moguće premjestiti u skladište.  
> **Trošak**: To su kodirani ili nekodirani članci koji se posebno sažimaju u riječima u riječi dokumenta, ako je članak troškova kodiran i od poreznog interesa, bit će premješten u skladište, ako nije kodiran ili nije od poreznog interesa, neće se premještati u skladište. 

**Bilješka o članku**: To su opisne bilješke koje se pojavljuju u ispisu dokumenta; ne utječe na računovodstvo i skladište.

**Razred/Kod/Opis članka**: Mogu se unijeti [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili u [pomoći u polju](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) koja će predložiti sve povezane podatke unesene u Šifarnik artikla.

Nakon unosa članka, njegov će se *Opis* automatski preuzeti iz šifarnika. Ako članak ima *Varijante*, trebat će odabrati željenu varijantu iz padajućeg izbornika *Varijante*. 

**Varijanta**: se odnosi na artikle s ovom posebnom konfiguracijom koji mogu imati drugačiju cijenu od one standardno postavljene. Stoga cijena članka s varijantama može biti drugačija od cijene članka bez varijanti. To može eventualno zahtijevati upravljanje varijantama članka u referentnom cjeniku.

**Količina**: predstavlja količinu glavne J.M. i prema zadanim postavkama ima vrijednost 1; može se unijeti ručno ili se može preuzeti iz dokumenta koji se razmatra za obradu (npr. od dobavljača).

**Jedinica mjere**: Predložena je glavna jedinicu mjere artikla, ali korisnik ima mogućnost odabrati drugu jedinicu mjere.

**Cijena**: Cijena se predlaže iz cjenika unesenog u anagrafiku kontakta; referentni cjenik za sami članak prikazan je u kartici *Popusti/Cjenici*.

Isti dokument može sadržavati članke s cijenama iz različitih cjenika ako su u podacima subjekta povezana više cjenika u nizu (vidi **Šifarnik kontakta**), isti dokument može sadržavati članke iz različitih cjenika.

Dvoklikom na polje **Popusti** (kartica *Popusti/Cjenici*), korisnik ima mogućnost odabrati drugu ponudu osim zadane, iz koje će se preuzeti cijena unesenog članka.

Ako nema cjenika, predloženi podatak je **posljednji Troškak** preuzeta iz podataka artikla, kartice **Troškovi**, ili će se dobiti prema postavkama parametara dokumenta.

**PDV**: Prioritet ima podatak unesen u PDV polje *šifarnik kontakta*. Ako toga nema, predložena je vrijednost iz *šifarnik artikla* ali korisnik može unijeti drugi podatak. Ovo je obavezno polje.

### Podaci koji nisu obavezni

**Tip prometa nabave**: prijedlog je unesen iz *Šifarnik artikla > kartica Općenito*. Ako nije dostupno, treba ga unijeti odabirom jedne od ponuđenih stavki iz odgovarajućeg padajućeg izbornika.

Nedostatak ovih podataka može uzrokovati pogreške u knjiženju računa koje će generirati otpremnicu ako postupak ne pronađe vrijednost čak ni u polju *Zadani trošak/Prihod* u šifarnik kontakta.

**Alternativna mjerna jedinica**: U ovim se poljima prikazuje količina u alternativnoj mjernoj jedinici ako je taj podatak dostupan u šifarniku artikla na kartici **Alternativna mjerna jedinica** (preuzima se onaj koji ima postavljenu oznaku **Zadano**) i ako su u postavkama dokumenta aktivirane funkcionalnosti: **Upravljanje dvostrukom mjerom** i **Automatski prijedlog alternativne mjere**.

**Alternativna količina**: prijedlog je vrijednosti povezane s alternativnom mjernom jedinicom., izračunato množenjem ili dijeljenjem *količine upravljanja* (vezano uz glavnu mjernu jedinicu.) s *faktorom pretvorbe postavljenim* u *Šifarnik artikla > kartica Alternativna mjerna jedinica*.

**Skladište/Opis/Razlog**: ovi podaci potrebni su za knjiženje robe u skladište. Preuzimaju se prema dokumentu kupnje iz tablice *Tip naloga/Otpremnica/ Ulazni račun* ili se unose ručno.

**Težine**: prikazane su ukupne neto i bruto težine redova članaka. Težine članaka u anagrafici pomnožene su količinom reda.

*Posebni gumbi*

> **Upravljanje pakiranjem**: otvora upravljanje pakiranjem koje će se koristiti u dokumentu kupnje. Gumb postaje aktivan kada je dokument spremljen, ali ne i knjižen. Klikom na ovaj gumb otvara se odgovarajući obrazac gdje se može unijeti količina, odabrati redak i izvršiti prijenos odabrane ambalaže u retke članaka pritiskom na gumb **Execute**. Na ovom se obrascu prikazuju članci koji su uneseni s ambalažom prirode i koji se nalaze u tablici Pakiranja za napraviti.  
> **Ažuriraj Mjesto**: Koristi se za ažuriranje lokacije prema uzroku i prikazuje ga u retku. Gumb postaje aktivan ako se odabere barem dva članka i otvara pomoć lokacija gdje možete odabrati novu lokaciju za sve odabrane članke za ovu proceduru.  
> **Storno**: Omogućuje poništavanje vrsta dokumenata koje imaju prirodu povrata.    
> **Ažuriraj prodajni cjenik**: Omogućuje ažuriranje cijene članka prema novom cjeniku (ako je unesen ažurirani cjenik). Klikom na padajući izbornik pored gumba, bit će moguće stvoriti novi cjenik ako još nije stvoren.

## Sconti/Listini

**Cjenik**: prikazuje cjenik iz kojeg je preuzet proizvod, s datumima početka/završetka važenja i posebnim uvjetima (npr. raspon popusta) dodijeljenim proizvodu u tom cjeniku.
  
**Popusti**: prikazani su svi popusti povezani s proizvodom, svaki s vlastitom osnovom za izračun i dodjelom.

*Poseban gumb*

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.


## Podaci artikla

**Lokacija**: prikazuje se samo ako je za odabrani proizvod odabrano skladište.  
**Projekt**: predstavlja projekt povezan s dokumentom. Također se može unijeti putem odgovarajuće pomoći za projekte.  
**Referenca naloga**: ako se otpremnica generira iz narudžbe, referenca na narudžbu bit će automatski upisana u ovom polju.  
**Bilješka**: omogućuje unos napomena o proizvodu koje će se zatim prikazati u svim dokumentima generiranim iz ovoga.


## Varijante 

Prikazuje varijante odabranog proizvoda, kodirane u kartici **Varijante** u kartici Artikli ili ih se može unijeti ručno.
Ova opcija omogućuje upravljanje varijacijama proizvoda na drugačiji način nego što je predloženo u retku proizvoda.
Na primjer, u svakom retku proizvoda moguće je unijeti ukupnu količinu; zatim, u istoj kartici, moguće je definirati različite količine za više varijacija odabranog proizvoda i to i za varijantu i atribut, tj. upravljanje veličinom/bojom.  
Ova operacija je moguća samo ako sve varijante odabranog proizvoda imaju istu cijenu kao cijena proizvoda u standardnoj konfiguraciji.

*Poseban gumb*

> **Otkaži**: omogućuje brisanje odabrane varijante.


## Lotovi i Serijski broj

Ove dvije mreže omogućuju unos partija i serijskih brojeva koji se moraju unijeti u skladište i koji su povezani s proizvodom u kartici *Šifranik artikla > kartica [Lotovi/Serijski broj ](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* ili ih je moguće unijeti ručno.

Ako proizvod ne podržava upravljanje Lotovima/Serijski brojevima, ova će kartica biti onemogućena.

*Posebni gumbi*

> **Izbriši lot**: omogućuje brisanje odabranog lota.  
> **Izbriši serijski broj**: omogućuje brisanje odabranog serijskog broja.

## Analitika 

Može sadržavati informacije o centrima troškova/dobiti na koje se distribuiraju vrijednosti proizvoda.

Ovi podaci mogu se unijeti ručno ili *automatski* (ako su centri troškova/dobiti već uneseni u *šifarnik kontakata*, *šifarnik artikala* ili *plan računa*).

*Posebni gumbi*

> **Izbriši centar troška**: Omogućuje brisanje odabrane stavke centra troškova.  
> **Izbriši profitne centre**: Omogućuje brisanje odabrane stavke centra dobiti.


## Dodatni podaci

Prikazuje popis **Dodatnih podataka** povezanih s odabranim artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutni dokument, uz opciju putem odgovarajuće oznake odabrati koje dodatne podatke želite ispisati.


## Dokumenti u privitku

Prikazuje pojedinosti o mogućem **Dokumentu u privitku** (naziv, vrsta dokumenta, eventualne napomene, naš/vaš referentni broj). Uputstva o tome kako dodati dokument potražite u članku **Priloži dokumente**.


## Odjeljak vrijednosti

Odjeljak prikazan u donjem desnom kutu pruža sažetak troškova koji doprinose formiranju konačne cijene odabranog artikla u mreži artikala.

**Jedinična cijena**: vrijednost polja Cijena;

**Količina**: vrijednost polja Količina;

**Iznos u liniji**: cijena artikla* količina artikla;

**Ukupno rabat**: zbroj popusta na artikl, uključujući i završne popuste;

**Osnovica**: Bruto iznos - Popusti;

**Porez**: Osnovica* stopa PDV-a za artikl;

**Ukupno**: Osnovica + Porez.


