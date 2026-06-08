---
title: Nova ponuda kupcu
sidebar_position: 3
---

Forma **Nova ponuda** otvara se putem menija **Prodaja > Nova ponuda** ili putem dugmeta **Novo** koje se nalazi u formi [Pretraga ponuda](/docs/sales/offers/search-offers).

## **1. Obavezni podaci**

- **Vrsta prodajne ponude**: sadrži tip ponude među onima definisanim u [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type).

- **Broj**: svakom dokumentu dodeljuje se broj prema numeraciji definisanoj u tabeli [Numeracije ponuda](/docs/configurations/tables/fluentis-numerations) i prema vrsti dokumenta kojoj je numeracija dodeljena.

- **Kupac**: unos kupca moguć je korišćenjem [pomoći za izbor podataka](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [ručnim unosom](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

- **CRM kontakt**: ukoliko je ponuda namenjena *leadu* koji još nije kupac, moguće je uneti CRM kontakt umesto kupca.

- **Godina**: predlaže se tekuća godina.

- **Datum**: predlaže se tekući datum.

- **Verzija**: u ovo polje unosi se broj verzije ponude; za novu ponudu predlaže se prva verzija.

#### Neobavezni podaci

- **Prodajna prilika**: ukoliko kreirani [Tip ponude](/docs/configurations/tables/sales/sales-offer-type) ima povezan tip prilike definisan u tabeli Vrste ponuda, prilikom čuvanja ponude automatski će se kreirati prilika za kupca ili kontakt. Kreirana prilika biće prikazana u ovom polju i korisnik je može naknadno menjati. Ukoliko se ručno izabere postojeća prilika, ona će biti ažurirana.

## **2. Zaglavlje**

Nakon unosa osnovnih podataka moguće je nastaviti sa unosom podataka zaglavlja:

- **Valuta**: predlaže se valuta kupca.

- **Isporuka**: predlaže se način [Isporuke](/docs/configurations/tables/general-settings/shipments) definisan na kartici kupca.

- **Prodajni cenovnik**: predlaže se podrazumevani cenovnik sa kartice kupca zajedno sa pripadajućim tipom skale definisanim za kupca.

- **Napomene kupca**: u ovoj sekciji moguće je uneti referencu kupca, početne i završne napomene; polje *Napomene kupca* prikazuje napomene definisane na [kartici kupca](/docs/erp-home/registers/contacts/create-new-contact/general).

- **Datum potvrde ponude**: označava datum kada je ponuda potvrđena i kada može biti konvertovana u narudžbinu.

- **Očekivani datum isporuke**: datum kada se očekuje isporuka robe; ovaj podatak prenosi se u narudžbinu nastalu iz ponude.

- **Datum zatvaranja**: označava datum zatvaranja ponude.

- **Datum poništavanja**: datum od kojeg se ponuda smatra nevažećom ukoliko nije pretvorena u narudžbinu.

- **Važenje ponude**: krajnji datum važenja ponude; informativnog je karaktera.

#### Specifična dugmad

> **Nova verzija**: generiše novu verziju ponude povećavanjem vrednosti polja *Verzija*. Sve naredne verzije nasleđuju priložene dokumente.

> **Zameni očekivani datum isporuke u stavkama**: zamenjuje očekivani datum isporuke u svim stavkama artikala datumom definisanim u zaglavlju.

> **Konverzija**: omogućava pretvaranje prodajne ponude u narudžbinu kupca.

Da bi proces uspešno prošao, potrebno je definisati odgovarajući tip narudžbine u tabeli [Vrste ponuda](/docs/configurations/tables/sales/sales-offer-type). Takođe, ponuda mora imati popunjen *Datum potvrde* u zaglavlju; u suprotnom sistem će prikazati upozorenje da je potrebno potvrditi ponudu pre nastavka.

Prilikom pokretanja procedure otvara se prozor sa sledećim opcijama:

> - Ukoliko su pojedine stavke ponude već konvertovane u narudžbinu, sistem će pitati da li treba kreirati novu narudžbinu sa svim stavkama ili samo sa onima koje još nisu povezane.
>
> - **Kreiraj/Ažuriraj projekat**: označavanjem ove opcije sistem će pored kreiranja narudžbine kreirati ili ažurirati projekat. Moguće je:
>   - kreirati novi prazan projekat,
>   - kreirati novi projekat iz ponude,
>   - kreirati novi projekat iz ponude i predloška projekta.
>
> U svim slučajevima potrebno je definisati **[Tip projekta](/docs/configurations/tables/project-management/project-type)**. U poslednjem slučaju potrebno je izabrati i projekat **Predložak**. Ukoliko projekat već postoji, potrebno ga je izabrati u polju **Projekat**.
>
> - **Prenesi materijale/resurse iz stavki ponude kao stavke narudžbine**: prenosi resurse i materijale iz stavki ponude u narudžbinu ukoliko je struktura hijerarhijska.

Nakon potvrde, sistem generiše novu narudžbinu kupca koristeći podatke iz ponude. Narudžbina se može pregledati i uređivati kroz [Pretragu narudžbina kupaca](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Ukoliko su u ponudi promenjeni podaci preuzeti sa kartice kupca, oni će biti preneti i u kreiranu narudžbinu:

- Napomene kupca
- Isporuka
- Plaćanja
- Popusti
- Agent
- Primaoci
- Prevoznici

- **Plaćanja**
- **Popusti**
- **Primaoci**
- **Prevoznici**
- **Agenti**
- **Dodatni podaci**
- **Informacije o e-mailu**

## **3.a Stavke ponude**

U glavnoj tabeli unose se artikli.

Dostupne su sledeće kartice:

- **Popusti**: prikazuje cenovnik iz kojeg se preuzima cena artikla, kao i eventualne popuste iz cenovnika ili kartice kupca. Omogućava i unos dodatnih popusta. Opcija *Ručna cena* zadržava ručno unetu cenu i prenosi se prilikom konverzije ponude u narudžbinu.

- **Agenti**: prikazuje agente kupca sa pripadajućim provizijama.

- **Podaci o artiklu**: sadrži informacije o artiklu, poput varijanti, skladišta i alternativnih jedinica mere.

- **Dodatni podaci**

- **Priloženi dokumenti**

#### Specifična dugmad

- **Kreiraj novi prototip**: kreira [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za izabranu stavku artikla. Referenca na kreirani prototip prikazuje se na kartici Podaci o artiklu.

- **Poveži prototip**: omogućava povezivanje sa postojećim [Prototipom](/docs/erp-home/registers/production/standardization/new-prototype).

- **Otvori prototip**: aktivno je ukoliko stavka ima povezan prototip i omogućava njegovo otvaranje.

- **Uvezi iz projekta**: otvara pomoćni prozor *Artikli projekta* iz kojeg je moguće odabrati artikle projekta za unos u ponudu. Projekti se filtriraju prema kupcu kojem je ponuda namenjena.

## **3.b Stavke hijerarhijske ponude**

Ukoliko je ponuda definisana kao *hijerarhijska*, kartica Artikli razlikuje se od standardne.

Artikli se unose kroz strukturu stabla korišćenjem dugmadi na alatnoj traci. Karakteristike artikala definišu se na kartici *Aktivnosti*.

### 3.b.1 Aktivnosti

Na ovoj kartici definišu se karakteristike artikala.

Dostupna polja:

- **Broj stavke/Nivo**
- **Vrsta čvora**
- **Tip reda**
- **Šifra artikla**
- **Šifra varijante**
- **Opis artikla**
- **Prototip**
- **Količina/JM/Cena**
- **Alternativna količina**
- **Cena po alternativnoj jedinici**
- **Cenovnik**
- **Ručno uneta cena**
- **Ažuriraj cenu iz resursa**
- **Ažuriraj cenu iz materijala**
- **Ažuriraj cenu iz prototipa**
- **Isključi resurse u narudžbini kupca**
- **Isključi materijale u narudžbini kupca**
- **Popusti**
- **Prihodi od materijala / Prihodi od resursa**
- **PDV**
- **Promet prodaje**
- **Planirani datum isporuke / Period planirane isporuke**

### 3.b.2 Resursi

Na ovoj kartici definišu se prihodi ostvareni radom resursa.

Polja:

- **Resurs**
- **Jedinica mere**
- **Količina / Jedinični trošak / Ukupan trošak**
- **Procenat / Vrednost**
- **Prihod**
- **Napomena**
- **Ekvivalent punog radnog vremena**

### 3.b.3 Materijali

Na ovoj kartici definišu se prihodi ostvareni korišćenjem materijala.

Dostupna polja:

- **Količina / Jedinični trošak / Ukupan trošak**
- **Vrsta izvora troška**
- **Procenat / Vrednost**
- **Prihod**
- **Dobavljač**
- **Broj / Datum zahteva**
- **Napomena**

Ostale kartice identične su karticama standardne ponude.

#### Specifična dugmad

> **Kreiraj novi prototip**
> **Poveži prototip**
> **Otvori prototip**
> **Uvezi iz projekta**
> **Novi podređeni red**
> **Novi red istog nivoa**
> **Zameni WBS broj**
> **Sažmi**
> **Proširi**

## **4. Sažeci ponude**

U ovoj kartici unose se podaci koji važe za ceo dokument.

### 4.1 Konačni popusti na artikle

Moguće je uneti procentualne popuste koji će se primeniti na ukupan iznos dokumenta.

- **Tip/Opis popusta**
- **Prioritet**
- **Kaskadni/Osnovni**
- **Vrednost**

### 4.2 Konačni troškovi/popusti/dodaci

Ovde se prikazuju troškovi definisani na kartici kontakta, kao i troškovi specifični za dokument.

- **Tip/Opis**
- **Procenat/Vrednost**
- **Procenat**