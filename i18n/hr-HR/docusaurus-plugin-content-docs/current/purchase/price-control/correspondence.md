---
title: Pridruživanje kategorija popusta
sidebar_position: 3
---

U ovom je obrascu moguće pregledavati i unositi nova povezivanja kategorija popusta. Koristi se u postupku [Uvoza iz cijena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price) te omogućuje povezivanje dobavljačeve **Kategorije popusta** s **Kategorijom popusta prodaje** i **Kategorijom popusta nabave** definiranima u Fluentisu, ovisno o uvjetima popusta koji se primjenjuju na kupce i dobavljače.

Generička kategorija popusta (primjerice ona matičnog proizvođača) povezuje se s jednom kategorijom popusta za prodaju i jednom kategorijom popusta za nabavu.

Naime, distributeri od matičnog proizvođača mogu zaprimiti katalog (uvezen postupkom [Cijene dobavljača](/docs/purchase/purchase-price-lists/procedures/supplier-price)) u kojem je za artikle primijenjena određena kategorija popusta. Distributeri potom iste artikle prodaju primjenjujući vlastitu kategoriju popusta. Različiti dobavljači mogu imati istu **Kategoriju popusta**, ali različite **Kategorije popusta prodaje** i **Kategorije popusta nabave**, jer imaju istog proizvođača, ali primjenjuju različite uvjete popusta.

Podaci prikazani u tablici:

> - **Klasa artikla**: sadrži klasu artikla kojoj je pridružena određena kategorija popusta.
> - **Konto / Podkonto / Opis**: sadrži šifarnik kojem je pridružena kategorija popusta.
> - **Kategorija popusta na prodaju**: sadrži kategoriju popusta koju šifarnik koristi pri prodaji artikla. Vrijednost se odabire iz tablice [Kategorije popusta za upravljanje cijenama](/docs/configurations/tables/sales/category-discounts-price-management/).
> - **Kategorija popusta nabave**: sadrži kategoriju popusta koju šifarnik koristi pri nabavi artikla. Vrijednost se odabire iz tablice [Kategorije popusta nabave](/docs/configurations/tables/purchase/category-discounts-price-management/).
> - **Formule ažuriranja**: omogućuje povezivanje odgovarajuće [formule za ažuriranje politika cijena i popusta](/docs/purchase/price-control/formulas), koja će se koristiti u postupcima ažuriranja cijena.
> - **Od datuma valjanosti**: sadrži datum od kojeg će se određena kategorija popusta primjenjivati za klasu artikla. Na taj je način moguće koristiti različite kategorije popusta u različitim razdobljima godine.
> - **Kategorija rabata**: ovo je polje koje povezuje modul nabave s modulom prodaje te sadrži kategoriju popusta koju primjenjuje matični proizvođač. Mora sadržavati istu **Kategoriju rabata** koja je navedena u obrascu [Cijene dobavljača](/docs/purchase/purchase-price-lists/procedures/supplier-price).

Kako bi bilo moguće izvršiti [Uvoz iz cijena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price), potrebno je dodati novi redak u tablicu i navesti:

- *klasu* artikala koje želite uvesti,
- *šifarnik kontakta* kojem će povezivanje biti dodijeljeno,
- *kategorije popusta prodaje i nabave* odabrane među onima definiranima u sustavu,
- *kategoriju popusta* proizvođača, jednaku onoj prikazanoj u tablici artikala,
- po potrebi, *datum valjanosti* i *formulu*.