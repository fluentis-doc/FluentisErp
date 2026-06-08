---
title: Nova ponuda kupcu
sidebar_position: 3
---

Forma **Nova ponuda** otvara se putem menija **Prodaja > Nova ponuda** ili putem dugmeta **Novo** koje se nalazi u formi [Pretraga ponuda](/docs/sales/offers/search-offers).

## **1. Obavezni podaci**

- **Vrsta prodajne ponude**: sadrži tip ponude među onima definisanim u [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type).

- **Broj**: svakom dokumentu dodeljuje se broj prema numeraciji definisanoj u tabeli [Numeracija ponuda](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta kojoj je numeracija dodeljena.

- **Kupac**: unos kupca moguć je korišćenjem [pomoći za izbor podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

- **CRM kontakt**: ukoliko je ponuda namenjena *leadu* koji još nije kupac, moguće je uneti CRM kontakt umesto kupca.

- **Godina**: predlaže se tekuća godina.

- **Datum**: predlaže se tekući datum.

- **Verzija**: u ovo polje unosi se broj verzije ponude; za novu ponudu predlaže se prva verzija.

#### Neobavezni podaci

- **Prodajna prilika**: ukoliko kreirani [Tip ponude](/docs/configurations/tables/sales/sales-offer-type) ima povezan tip prilike u tabeli *Vrste ponuda*, prilikom čuvanja ponude automatski će se kreirati prilika za kupca ili kontakt. Ta prilika biće prikazana u ovom polju i korisnik je može menjati. Ukoliko se u ovo polje ručno unese postojeća prilika, ona će biti ažurirana.

## **2. Zaglavlje**

Nakon unosa podataka u gornjem delu moguće je nastaviti sa unosom podataka zaglavlja:

- **Valuta**: predlaže se valuta kupca.

- **Isporuka**: predlaže se način [Isporuke](/docs/configurations/tables/general-settings/shipments) definisan na kartici kupca.

- **Prodajni cenovnik**: predlaže se podrazumevani cenovnik sa kartice kupca zajedno sa pripadajućim tipom raspona definisanim za kupca.

- **Napomene kupca**: u ovoj sekciji moguće je uneti referencu kupca, početne i završne napomene; polje *Napomene kupca* prikazuje napomene unesene u [Podacima kartice kupca](/docs/erp-home/registers/contacts/create-new-contact/general).

- **Datum potvrde ponude**: označava datum kada je ponuda potvrđena i kada može biti konvertovana u narudžbinu.

- **Očekivani datum isporuke**: datum kada se očekuje isporuka robe; ovaj podatak prenosi se u narudžbinu nastalu iz ponude.

- **Datum zatvaranja**: označava datum zatvaranja ponude.

- **Datum poništenja**: datum od kojeg se ponuda smatra nevažećom ukoliko nije pretvorena u narudžbinu.

- **Važenje ponude**: krajnji datum važenja ponude; ovo je informativno polje.

#### Specifična dugmad

> **Nova verzija**: generiše novu verziju ponude povećavanjem vrednosti polja *Verzija*. Naredne verzije ponude nasleđuju priložene dokumente.

> **Zameni očekivani datum isporuke u stavkama**: zamenjuje očekivani datum isporuke u svim stavkama artikala datumom unetim u zaglavlju.

> **Konverzija**: omogućava pretvaranje prodajne ponude u narudžbinu kupca.
>
> Da bi proces bio uspešan, potrebno je definisati željeni tip narudžbine u tabeli [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type). Takođe, ponuda mora imati popunjen *Datum potvrde* u zaglavlju; u suprotnom, sistem će korisnika upozoriti da je potrebno potvrditi ponudu pre nastavka.
>
> Nakon pokretanja procedure prikazuje se prozor sa sledećim opcijama:
>
> - Ako su pojedine stavke ponude već konvertovane u narudžbinu, sistem će pitati da li treba kreirati novu narudžbinu sa svim stavkama ponude ili samo sa stavkama koje još nisu povezane.
>
> - **Kreiraj/Ažuriraj projekat**: označavanjem ove opcije sistemu se signalizira da, pored kreiranja narudžbine, treba kreirati ili ažurirati projekat. Ukoliko projekat treba kreirati, potrebno je izabrati opciju *Kreiraj novi prazan projekat*, *Kreiraj novi projekat iz ponude* ili *Kreiraj novi projekat iz ponude i šablona projekta*. U svim slučajevima potrebno je definisati **[Tip projekta](/docs/configurations/tables/project-management/project-type)**. U poslednjem slučaju potrebno je odabrati i projekat **Šablon**. Ako projekat već postoji i treba ga ažurirati podacima iz ponude, potrebno ga je izabrati u polju **Projekat**.
>
> - **Prenesi materijale/resurse iz stavki ponude kao stavke narudžbine**: prenosi resurse i materijale iz stavki ponude u narudžbinu ukoliko je struktura hijerarhijska.

Nakon potvrde, sistem generiše novu narudžbinu kupca koristeći podatke iz ponude. Narudžbina se može pregledati i uređivati u sekciji [Pretraga narudžbina kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Korisnik će dobiti i poruku o uspešno izvršenoj konverziji sa brojem konvertovane ponude i verzije, kao i brojem generisane narudžbine kupca.

Ukoliko su u ponudi izmenjeni podaci preuzeti sa kartice kupca, oni će biti preneti i u kreiranu narudžbinu:

- Napomene kupca
- Isporuka
- Plaćanja
- Popusti
- Agent
- Odredišta
- Prevoznici

- **Plaćanja**
- **Popusti**
- **Primaoci**
- **Prevoznici**
- **Agenti**
- **Dodatni podaci**
- **Informacije o e-mailu**

### 3.b.1 Aktivnosti

U ovoj kartici unose se karakteristike artikala u tabeli stavki. Dostupna polja su:

- **Broj stavke/Nivo**: sadrži broj stavke i WBS oznaku. Vrijednost se automatski postavlja, ali je moguće ručno mijenjati.

- **Vrsta čvora**: određuje da li je red:
  - **Root Node** (glavni čvor),
  - **Activity Node** (čvor aktivnosti),
  - **Work Package Node** (završni čvor projekta, jedini koji može sadržati šifrirane artikle).

- **Tip reda**: određuje vrstu stavke: Kodificiran, Nekodificiran, Trošak ili Napomena (podrazumijevana vrijednost).

- **Šifra artikla**: prikazuje klasu, šifru i opis odabranog šifriranog artikla.

- **Šifra varijante**: prikazuje eventualnu [Varijantu](/docs/erp-home/registers/items/create-new-item) artikla.

- **Opis artikla**: prikazuje opis artikla kada je tip reda Napomena ili Nekodificiran.

- **Prototip**: prikazuje povezani [Prototip](/docs/erp-home/registers/production/standardization/new-prototype).

- **Količina/JM/Cijena**: sadrži količinu, jedinicu mjere i cijenu odabranog artikla.

- **Alternativna količina**: sadrži alternativnu količinu i alternativnu jedinicu mjere.

- **JM cijena**: ako je opcija označena, jedinična cijena se množi alternativnom količinom radi izračuna ukupnog iznosa.

- **Cjenovnik**: omogućava povezivanje cjenovnika iz kojeg se preuzima cijena artikla, zajedno sa **Tipom skale** koji definiše primijenjeni popust.

- **Ručno unesena cijena**: označava da je cijena unesena ručno te se cijena iz cjenovnika neće primjenjivati.

- **Ažuriraj cijenu iz resursa**: ako je označeno, polje *Cijena* preuzima vrijednost iz kolone *Prihod* kartice *Resursi*.

- **Ažuriraj cijenu iz materijala**: ako je označeno, polje *Cijena* preuzima vrijednost iz kolone *Prihod* kartice *Materijali*.

- **Ažuriraj cijenu iz prototipa**: ako je označeno, polje *Cijena* preuzima vrijednost iz kolone *Prodajna cijena* povezanog prototipa.

- **Isključi resurse iz narudžbe kupca**: sprječava prenos resursa odabrane stavke u narudžbu kupca kreiranu konverzijom ponude.

- **Isključi materijale iz narudžbe kupca**: sprječava prenos materijala odabrane stavke u narudžbu kupca kreiranu konverzijom ponude.

- **Popusti**: prikazuje definisane popuste za kupca, uz mogućnost dodavanja novih.

- **Prihod od materijala/Prihod od resursa**: prikazuju vrijednosti iz kolone *Prihod* kartica *Materijali* i *Resursi* radi lakšeg uvida u formiranje ukupne cijene.

- **PDV**: označava PDV stopu koja se primjenjuje.

- **Promet prodaje**: označava [Promet prodaje](/docs/configurations/tables/sales/sales-turnover) artikla.

- **Planirani datum isporuke / Period planirane isporuke**: omogućava unos planiranog datuma ili perioda isporuke odabranog artikla.

### 3.b.2 Resursi

U ovoj kartici moguće je evidentirati prihode ostvarene radom različitih resursa.

Dostupna polja su:

- **Resurs**: unos prethodno definisanog [Resursa](/docs/project-management/registers/employee/new-employee) koji je izvršio aktivnost.

- **Jedinica mjere**: jedinica mjere koja se koristi za resurs. Predlaže se podrazumijevana vrijednost iz šifarnika resursa, ali ju je moguće izmijeniti.

- **Količina / Jedinični trošak / Ukupni trošak**: ukupni trošak automatski se izračunava množenjem količine i jediničnog troška.

- **Postotak / Vrijednost**: omogućava unos marže koja se primjenjuje na ukupni trošak, procentualno ili u apsolutnom iznosu.

- **Prihod**: automatski prikazuje ukupni trošak uvećan za maržu.

- **Napomena**: polje za slobodan unos bilješki.

- **Ekvivalent punog radnog vremena**: definiše odnos između evidentiranog vremena resursa i standardnog radnog vremena kompanije (npr. jedan dan rada zaposlenog sa pola radnog vremena odgovara 0,5 standardnog radnog dana).

### 3.b.3 Materijali

U ovoj kartici evidentiraju se prihodi ostvareni korištenjem materijala.

U početnim kolonama moguće je unijeti šifrirani ili nešifrirani artikl, napomenu, eventualnu varijantu artikla i PDV.

Preostala polja su:

- **Količina / Jedinični trošak / Ukupni trošak**: ukupni trošak automatski se izračunava množenjem količine i jediničnog troška.

- **Vrsta izvora troška**: omogućava izbor izvora za popunjavanje kolone *Jedinični trošak*. Dostupne opcije su:
  - posljednji trošak,
  - prosječni trošak,
  - standardni trošak,
  - neto cjenovnik dobavljača,
  - narudžba dobavljača,
  - ulazna faktura.

  Podrazumijevana vrijednost definiše se u [Parametrima ponuda](/docs/configurations/parameters/sales/offer-parameters).

- **Postotak / Vrijednost**: omogućava unos marže koja se primjenjuje na ukupni trošak, procentualno ili u apsolutnom iznosu.

- **Prihod**: automatski prikazuje ukupni trošak uvećan za maržu.

- **Opis dobavljača**: predlaže se preferirani dobavljač iz šifarnika artikla, ali ga je moguće izmijeniti. Ako je kao izvor troška odabran cjenovnik dobavljača, koristiće se važeći cjenovnik odabranog dobavljača.

  Taj dobavljač će takođe biti nosilac **Zahtjeva za ponudu** generisanog iz tog materijala.

- **Broj / Datum zahtjeva**: prikazuje eventualno kreirani **Zahtjev za ponudu** za materijal. Kada je aktivna kartica *Materijali*, u alatnoj traci dostupno je dugme *Kreiraj zahtjev za ponudu* koje generiše zahtjev za odabrani materijal.

- **Napomena**: polje za unos slobodnih bilješki.

Ostale kartice identične su karticama koje postoje u nehijerarhijskoj ponudi.

#### Specifična dugmad

> **Kreiraj novi prototip**: kreira novi [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabrani red artikla. Referenca na kreirani prototip prikazuje se u kartici Podaci artikla, u polju *Prototip*. Prototip je moguće dalje uređivati u odgovarajućem modulu.

> **Poveži prototip**: omogućava povezivanje ponude sa postojećim [Prototipom](/docs/erp-home/registers/production/standardization/new-prototype). Otvara se prozor za izbor jednog od dostupnih prototipova za odabrani artikl.

> **Otvori prototip**: aktivno je kada odabrani red već ima povezan prototip te omogućava njegovo otvaranje.

> **Uvoz iz projekta**: otvara pomoćnu formu *Artikli projekta*, iz koje je moguće odabrati artikle projekta i uključiti ih u prodajnu ponudu. Forma se automatski filtrira prema kupcu kojem pripada ponuda.

> **Novi podređeni red**: dodaje novi projekat/red kao podređeni element trenutno odabranom redu.

> **Novi red istog nivoa**: dodaje novi projekat/red na istoj hijerarhijskoj razini kao trenutno odabrani red.

> **Zamijeni WBS broj**: omogućava uključivanje broja projekta u WBS oznaku reda.

> **Sažmi**: sakriva sve redove hijerarhijskog stabla.

> **Proširi**: prikazuje sve redove hijerarhijskog stabla.

## **4. Sažeci ponude**

U ovoj kartici mogu se unijeti podaci koji vrijede za cijeli dokument.

### 4.1 Konačni popusti artikala

Moguće je unijeti samo popuste izražene u procentima koji će se primijeniti na ukupan iznos dokumenta.

Popusti uneseni u ovom odjeljku automatski se obračunavaju i prikazuju na svakoj stavci dokumenta u **Kartica Artikli > Kartica Popusti/Cjenovnici**.

- **Tip/Opis popusta**: omogućava izbor vrste popusta (definisane u [Tipovima popusta](/docs/configurations/tables/general-settings/discount-types)). Svakoj vrsti popusta dodjeljuje se prioritet primjene i način obračuna (osnovni ili kaskadni).

- **Prioritet**: određuje redoslijed primjene popusta. Popusti se obračunavaju prema rastućem redoslijedu prioriteta.

- **Kaskadni/Osnovni**: određuje osnovicu za obračun popusta:
  - **Osnovni**: popust se obračunava na iznos *(cijena × količina)*.
  - **Kaskadni**: popust se obračunava na iznos umanjen za prethodno obračunate popuste.

- **Vrijednost**: procentualna vrijednost popusta koja će biti primijenjena.

### 4.2 Konačni troškovi/popusti/dodaci

U ovoj kartici prikazuju se troškovi definisani u šifrarniku kontakta, na kartici **Troškovi/Popusti**.

Takođe je moguće unijeti dodatne troškove koji se odnose isključivo na trenutni dokument.

- **Tip/Opis**: omogućava izbor vrste troška (definisane u šifrarniku *Tipovi troškova*), kojoj je pridružen procenat troška za obračun.

- **Postotak/Vrijednost**: određuje da li će se trošak obračunavati procentualno ili kao unaprijed definisani novčani iznos.

- **Postotak**: numerička vrijednost procenta troška koji će biti primijenjen.