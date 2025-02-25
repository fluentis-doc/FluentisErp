---
title: Unos upita za ponudu
sidebar_position: 1
---

Ova značajka omogućuje unos novog upita za ponudu.

**Vrsta**: obavezno polje. Ovisno o odabranoj **Vrsti RDO** aktivirat će se određene značajke. Pri unosu vrste, bit će automatski popunjeni  **Datum/Godina/Broj**;   
**Dobavljač**: sadrži šifarnik kontakta.                
**Verzija**: sadrži verziju ponude; moguće je stvoriti novu verziju pomoću gumba **Nova verzija** u ribbon traci.       

### Kartica Zaglavlje 

:::note NAPOMENA
Ako se dokument *automatski generira* iz RDA, ovi podaci bit će preuzeti iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unosom **Dobavljača** automatski se *nude* svi specifični podaci na kartici **Zaglavlje**, prema podacima postavljenim unaprijed u [Šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima njegove adrese i u *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Tečaj](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/common/glossary/glossary-intro#shipment), [Luka](/docs/guide/common/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/common/glossary/glossary-intro#packing), [Cjenik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegovo [vrijeme važenja](/docs/guide/common/glossary/glossary-intro#validity-date)


**Napomene**: ovo polje preuzima se iz šifarnika dobavljača, ali se može unijeti i ručno.            
**Naša/Vaša referenca**: u ovim poljima obično se navodi interna referenca i referenca dobavljača za dokument.   
**Početne bilješke**: možete odabrati bilješke koje su prethodno unesene u istoimenoj tablici koja se nalazi u putanji *Konfiguracija > Pomoćna sredstva > Upravljanje kodiranim bilješkama*. Da biste to postigli, korisnik mora dvaput kliknuti na polje **Početne bilješke** kako bi otvorio *pomoć kodiranih bilješki* i odabrao podatke, ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.
**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu Zaposlenici koja se nalazi u putanji *Početna stranica > Zaposlenici*. Ova informacija postaje **obavezna** ako je opcija postavljena u parametrima samog dokumenta.


*Posebni gumbi*

> **Zamijeni prethodni datum isporuke u redovima**: nakon što ste odredili datum tražene isporuke i/ili datum predviđene isporuke u zaglavlju, moguće je masovno zamijeniti te datume u već unesenim redovima artikala.

## Plaćanja

**Informacije o načinima plaćanja** automatski se prenose iz *Šifarnika dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

*Posebni gumbi*

> **Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

## Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnik dobavljača > kartica Popusti*, a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Ponuđeni popusti u zaglavlju dokumenta prenose se u svaki novi redak artikla unesen u dokument.

Ako nakon unosa redaka artikla dodate novi popust u zaglavlju, taj popust se neće replicirati u već unesenim redovima artikala.

*Posebni gumbi*
>  **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.


## Dodatni podaci 

Ovdje se prikazuju informacije unesene u *Šifarnik subjekata > kartica Dodatni podaci*, samo ako postoje zadani podaci.


### Kartica artikli

Na ovoj kartici unose se svi artikli s pripadajućim podacima.

Za detalje o zajedničkom radu obrazaca pogledajte sljedeći link  [Značajke, gumbe i zajednička polja](/docs/guide/common).

Podaci se unose [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili ih modu predložiti povezane procedure. 

Da biste unijeli **Novi artikl** u mrežu, dovoljno je postaviti kursor na redak i ispuniti razne podatke ili koristiti gumb **Novo** u traci vrpce.

### Obavezni podaci

**Broj linije**: ovo polje će se automatski i progresivno popunjavati pri unosu podataka u redak.

**Tip linije**: pruža mogućnost odabira različitih artikla iz padajućeg izbornika.

:::note NAPOMENA
Ako krenete izravno s unosom artikla, njegova *klasa*, *kod* i *vrsta reda* - *Kodirani artikl* automatski će se unijeti.
:::
> **Artikl sa klasom**: to su kodirani artikli u šifarniku i mogu se knjižiti u analitičkoj knjigovodstvu te evidentirati u skladištu.  
> **Artikl ne-kodirani**: to su opisni artikli koji se mogu knjižiti u analitičkoj knjigovodstvu, ali se ne mogu evidentirati u skladištu.  
> **Trošak**: to su kodirani ili nekodirani artikli koji se razlikuju u zbrojevima dokumenata. Ako je artikl troška kodiran i fiskalno značajan, knjižit će se u skladištu; ako nije kodiran ili nije fiskalno značajan, neće se knjižiti u skladištu.  
> **Napomene o artiklu**: to su opisne napomene koje se prikazuju u ispisu dokumenta; ne utječe na knjiženje u knjigovodstvu i skladištu.

**Klasa/Kod/ Opis artikla**: Mogu se unijeti [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili uz [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) koje će predložiti sve relevantne podatke unesene u Šifarniku artikla.

Nakon unosa artikla, njegov će se opis automatski preuzeti iz šifarnika. Ako artikl ima *varijacije*, trebat će odabrati željenu varijantu iz padajućeg izbornika *Varijante*.

**Jedinica mjere**: predložena je glavna jedinica mjere artikla, ali korisnik ima mogućnost odabira druge jedinice mjere.

**Varijante**: ako odabrani artikl ima varijacije, trebat će odabrati željenu varijantu iz ovog padajućeg izbornika. Odabir varijante koristan je za artikle s ovom posebnom konfiguracijom koji mogu imati različitu cijenu od postavljene standardne cijene. Stoga, cijena artikla s varijacijama može biti različita od cijene artikla bez varijacija. To eventualno može zahtijevati upravljanje varijacijama artikla u referentnom cjeniku.


## Popusti

**Popusti**: ponuđeni su svi popusti povezani s artiklom, svaki s vlastitom osnovom izračuna i dodjele.

*Poseban gumb*

> **Izbriši rabate**: omogućuje brisanje odabranog popusta iz odgovarajuće mreže.

## Podaci artikla 

Unutar ovog taba, prikazuju se/unose dodatne informacije koje se odnose na artikl.

**Projekt**: predstavlja projekt povezan s dokumentom. Može se unijeti i putem odgovarajuće pomoći za projekte.

**Artikl/Varijanta**: prikazuje odabrani artikl u gornjoj mreži i njegovu varijantu;

**Zahtjev za kupnju**: ako je ponuda stvorena iz zahtjeva, prikazuje se povezani [Zahtjev za kupnju](/docs/purchase/purchase-requests/insert-purchase-request);

**Napomene**: napomene vezane uz redak artikla, mogu se unijeti i putem pomoći kodiranih napomena. Bit će prikazane u svim dokumentima generiranim iz ovoga.

**Marka**: predstavlja marku artikla, preuzetu iz njezine evidencije ili iz cjenika artikla.

## Dodatni podaci

Prikazuje popis povezanih **Dodatnih podataka** s artiklom, s mogućnošću dodavanja novih dodatnih podataka korisnih samo za trenutačni dokument, uz mogućnost odabira koje dodatne podatke želite isprintati putem odgovarajuće zastavice.

## Priloženi dokumenti

Prikazuje detalje eventualno **Priloženog Dokumenta** (naziv, vrsta dokumenta, eventualne napomene, naš/ vaš referentni broj). Upute o prilaženju dokumenta mogu se pronaći u artiklu **Prilaganje dokumenata**.

### Kartica Sažeci

U različitim sekcijama ovog taba prikazane su ključne informacije o cijelom dokumentu i neki specifični gumbi.

**Konačni popusti artikala**:

Mogu se unijeti samo popusti izraženi u postotku, primjenjivi na ukupnu vrijednost dokumenta.

Uneseni popusti u ovoj sekciji izračunavaju se i prikazuju za svaki artikl u dokumentu, u kartici *Artikli > kartica Popusti/Cjenici*.

**Tip/Opis popusta**: omogućuje odabir vrsta popusta (predefinirane u **Vrstama popusta**), dodjeljujući svakoj vrsti prioritet primjene popusta i određujući je li popust izračunat na osnovu osnovice ili se primjenjuje kaskadno u odnosu na prethodno primijenjene popuste. 

**Prioritet**: predstavlja prioritet primjene popusta; sortiranje se primjenjuje uzlazno. 

**Osnovica**: definira koristi li izračun popusta osnovicu (*cijena količina*) - (*već izračunati popusti*) ili (*cijena količina*). 

**Vrijednost**: numerička vrijednost završnog popusta za primjenu.
