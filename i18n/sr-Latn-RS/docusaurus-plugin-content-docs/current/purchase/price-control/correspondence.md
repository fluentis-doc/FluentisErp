---
title: Dodeljivanje kategorija popusta
sidebar_position: 3
---

U ovom obrascu moguće je pregledati i unositi nova povezivanja kategorija popusta. Koristi se u postupku [Uvoza iz cena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price) i omogućava povezivanje dobavljačeve **Kategorije popusta** sa **Kategorijom popusta prodaje** i **Kategorijom popusta nabavke** definisanim u Fluentisu, u zavisnosti od uslova popusta koji se primenjuju na kupce i dobavljače.

Generička kategorija popusta (na primer ona matičnog proizvođača) povezuje se sa jednom kategorijom popusta za prodaju i jednom kategorijom popusta za nabavku.

Naime, distributeri od matičnog proizvođača mogu primiti katalog (uvezen postupkom [Cene dobavljača](/docs/purchase/purchase-price-lists/procedures/supplier-price)) u kojem je za artikle primenjena određena kategorija popusta. Distributeri zatim iste artikle prodaju primenjujući sopstvenu kategoriju popusta. Različiti dobavljači mogu imati istu **Kategoriju popusta**, ali različite **Kategorije popusta prodaje** i **Kategorije popusta nabavke**, jer imaju istog proizvođača, ali primenjuju različite uslove popusta.

Podaci prikazani u tabeli:

> - **Klasa artikla**: sadrži klasu artikla kojoj je dodeljena određena kategorija popusta.
> - **Konto / Podkonto / Opis**: sadrži šifarnik kojem je dodeljena kategorija popusta.
> - **Kategorija popusta za prodaju**: sadrži kategoriju popusta koju šifarnik koristi prilikom prodaje artikla. Vrednost se bira iz tabele [Kategorije popusta za upravljanje cenama](/docs/configurations/tables/sales/category-discounts-price-management/).
> - **Kategorija popusta nabavke**: sadrži kategoriju popusta koju šifarnik koristi prilikom nabavke artikla. Vrednost se bira iz tabele [Kategorije popusta nabavke](/docs/configurations/tables/purchase/category-discounts-price-management/).
> - **Formule ažuriranja**: omogućava povezivanje odgovarajuće [formule za ažuriranje politika cena i popusta](/docs/purchase/price-control/formulas), koja će se koristiti u postupcima ažuriranja cena.
> - **Od datuma važenja**: sadrži datum od kojeg će se određena kategorija popusta primenjivati za klasu artikla. Na taj način moguće je koristiti različite kategorije popusta u različitim periodima godine.
> - **Kategorija rabata**: ovo je polje koje povezuje modul nabavke sa modulom prodaje i sadrži kategoriju popusta koju primenjuje matični proizvođač. Mora sadržati istu **Kategoriju rabata** koja je navedena u obrascu [Cene dobavljača](/docs/purchase/purchase-price-lists/procedures/supplier-price).

Kako bi bilo moguće izvršiti [Uvoz iz cena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price), potrebno je dodati novi red u tabelu i navesti:

- *klasu* artikala koje želite da uvezete,
- *šifarnik kontakta* kojem će povezivanje biti dodeljeno,
- *kategorije popusta prodaje i nabavke* izabrane među onima definisanim u sistemu,
- *kategoriju popusta* proizvođača, jednaku onoj prikazanoj u tabeli artikala,
- po potrebi, *datum važenja* i *formulu*.