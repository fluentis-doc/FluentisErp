---
title: Nova Ponuda
sidebar_position: 1
---

Obrazac za **Nova prodajna ponuda** otvara se putem putanje **Prodaja > Nova ponuda** ponuda ili putem ikone ![](/img/neutral/common/new.png) koji se nalazi u obrascu za [Pretraživanje ponuda](/docs/sales/offers/search-offers).

U obrascu za unos automatski se nude trenutni **Datum** i **Godina**, ali ih korisnik može promijeniti. **Verzija** je postavljena na prvu, ali je također promjenjiva.

## **1. Dati obbligatori**

Da bi nastavili s kreiranjem prodajne ponude, korisnik mora unijeti  **obavezna polja**:

- **Vrsta ponude** predefiniran u Konfiguracija > Tablice > Prodaja > [Tipovi ponuda](/docs/configurations/tables/sales/sales-offer-type);

- **Broj** svakom dokumentu dodjeljuje se broj prema numeraciji koju je postavio korisnik u tablici [Numeracija ponuda](/docs/configurations/tables/fluentis-numerations) i vrsti dokumenta koja sadrži tu numeraciju. Također se možete pozvati na članak o [Parametrima narudžbi](/docs/configurations/parameters/sales/sales-orders-parameters) (za posebne parametre povlačenja brojeva);

- **Klijent**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili  [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka. Prilikom unosa klijenta, unijet će se i **Broj dokumenta**, koji je također promjenjiv.

## **2. Specifična polja**

**Datum potvrde ponude**: označava datum kada je ponuda potvrđena i može se pretvoriti u narudžbu.

**Datum zatvaranja**: označava datum kada je ponuda zatvorena.

**Otkazan datum**: datum kada će se Ponuda obrisati ako nije postala narudžba.

**Valjanost ponude**: rok valjanosti ponude; to je informativno polje.

#### Specifični gumbi

**Konverzija**: pretvara ponudu u Narudžbu.

**Nova verzija**: generira novu verziju ponude, povećavajući polje **Verzija**.

**Zamijeni predviđeni datum isporuke u redovima**: zamjenjuje u svim redovima stavke datum predviđene isporuke unesen u zaglavlje.

Nelle tab sottostanti vengono riportati i dati di anagrafica cliente, come la modalità di pagamento o gli sconti. Tutti questi dati possono essere modificati manualmente.

U donjim karticama prikazuju se osnovni podaci o klijentu, poput načina plaćanja ili popusta. Svi ovi podaci mogu se ručno mijenjati.

## **2. Stavke Ponude**

U ovoj kartici se unose stavke prema standardnim logikama Fluentisa.  

Iz vrpce citiramo sljedeće specifične tipke:

**Stvorite novi prototip**: ovaj gumb stvara [Prototip](/docs/erp-home/registers/production/standardization/new-prototype) za odabrani artikl; referenca na generiranu ponudu nalazi se u kartici Podaci o članku, polje Ponuda. Moguće je urediti generirani prototip iz odgovarajućeg modula.

**Pridruženi prototip**: ovim gumbom moguće je povezati ponudu s već postojećim [Prototipom](/docs/erp-home/registers/production/standardization/new-prototype); otvara se pomoćni prozor u kojem možete odabrati među dostupnim prototipovima za taj artikl.

**Uvoz iz Projekta**: ova funkcija otvara pomoćni prozor za *Stavke projekta*, u kojem možete odabrati stavke iz projekta koje želite uključiti u prodajnu ponudu. Skočni prozor se otvara izravno s filterom za klijenta koji je vlasnik ponude, kako bi omogućio pregled pripadajućih projekata.

## **3. Sažetak Ponude**

U ovoj kartici mogu se unijeti podaci koji su važeći za cijeli dokument:

**Konačni popusti artikala**: ovi popusti se primjenjuju na artikle i bit će vidljivi u kartici Artikli, kod svakog retka.

**Konačni troškovi/popusti/doplate**: ovi troškovi/popusti se primjenjuju na ukupnost dokumenta i ne raspoređuju se na retke artikala.