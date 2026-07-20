---
title: Upravljanje označenim redovima i Dostava iz komisioniranja
sidebar_position: 2
---

## Upravljanje označenim redovima

:::important Čemu služi
Funkcija upravljanja potvrdom preuzimanja u Fluentis WMS-u namijenjena je potvrđivanju stavki picking liste koje je operater stvarno preuzeo u skladištu. Ako je označena barem jedna stavka, postupci kreiranja otpremnice (DDT) i računa uzimaju u obzir samo označene stavke; u suprotnom se obrađuju sve stavke picking liste.
Ovakav način rada pojednostavljuje i ubrzava izradu otpremnica i računa te omogućava i ručni unos novih stavki artikala. Osim toga, tokom potvrđivanja stavki moguće je kreirati utovarne jedinice (UJ), grupišući potvrđene artikle unutar jedne ili više utovarnih jedinica. Nakon odabira stavke i unosa potrebnih podataka moguće je kreirati i upravljati novim utovarnim jedinicama koje sadrže potvrđene artikle.
:::

Iz postojećeg Pickinga moguće je očitati prisutne artikle i grupisati ih u UJ (utovarne jedinice). Iz WPF-a je zatim moguće nastaviti sa izradom otpremnica ili faktura.

:::note NAPOMENA
U obrascu za **Upravljanje označenim redovima** prikazaće se samo Pickinzi kreirani sa *vrstom Pickinga* koja ima aktiviranu opciju *obavezna utovarna jedinica* u tabeli [Vrste Pickinga](/docs/configurations/tables/logistics/picking-type/).
:::

Obrazac se otvara na filteru Pickinga, gde je moguće pregledati sve Pickinge u statusu *Neobrađeno* i *Djelimično obrađeno*.  
Rezultate je moguće filtrirati po *Vrsti Pickinga*, *Broju*, *Datumu* i *Klijentu*. Pomoću dugmeta *Otvori* moguće je otvoriti odabrani Picking.
Glavni obrazac sastoji se od sledećih kartica:

- **Artikli**
Ovde su prikazane sve stavke artikala prisutne u Pickingu.

**Posebna dugmad**
> **Detalji**: omogućava pozicioniranje na karticu **Potvrđeni artikli**;  
> **Potvrda**: nakon odabira stavke na kartici **Artikli**, otvara karticu **Potvrda** i predlaže odabrani artikl.

- **Potvrda**
Pomoću polja **Unesite kod** (korišćenjem barkod čitača) moguće je unijeti podatke o lotu, lokaciji, količini za preuzimanje i artiklu ako ga želite promijeniti u odnosu na predloženi. Ako korisnik potvrdi stavku za artikl kojim se upravlja po lotovima, a lot nije unesen, pojaviće se poruka koja podsjeća na unos lota. Takođe, na kartici postoji polje za **Unos utovarne jedinice** koje je potrebno popuniti kako bi se podaci mogli potvrditi.

**Posebna dugmad**
> **Detalji oznake**: omogućava pozicioniranje na karticu **Označeni artikli**;  
> **Potvrda**: omogućava potvrdu unesenih podataka te zatim učitava podatke sledeće stavke;  
> **Nova utovarna jedinica**: omogućava kreiranje nove *utovarne jedinice* nakon odabira njenog tipa.

- **Utovarna jedinica**
Omogućava pregled sadržaja kreiranih *utovarnih jedinica* za trenutni Picking.

**Posebna dugmad**

> **Otvori utovarnu jedinicu**: omogućava prikaz detalja odabrane *utovarne jedinice*. Takođe, poslednja otvorena *utovarna jedinica* biće predložena kao *utovarna jedinica* u koju će biti dodati sledeći potvrđeni artikli.

- **Označeni artikli**

Kartica **Označeni artikli** popunjava se tek nakon odabira artikla na kartici **Artikli** u Pickingu.
Dakle, sa liste artikala Pickinga odabire se jedan artikl, a na kartici **Označeni artikli** prikazuju se sva očitavanja tog odabranog artikla.
Kada je stavka *Pickinga* u potpunosti izvršena, automatski se premješta na kraj liste na kartici **Artikli**, a prikazaće se svi evidentirani podaci za odabrani artikl. Kada je red Pickinga potpuno potvrđen, ostaje prikazan na kartici **Artikli** i označava se crvenom bojom.
Odabirom tog reda i pritiskom na dugme **Detalji oznake** otvara se kartica **Označeni artikli**, gde je moguće pregledati potvrđene redove, koji se po potrebi mogu obrisati pomoću odgovarajućeg dugmeta **Obriši**.
Sa ove kartice moguće je odabrati potvrđeni artikl i obrisati ga.

**Posebna dugmad**

> **Obriši**: omogućava brisanje odabranog reda.

**Parametri utovara/istovara** moraju biti definisani u tabeli [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

Parametri su navedeni dva puta zato što je potrebno povezati dva različita tipa skladišnih kretanja: jedno za ulaz i drugo za izlaz (bez protustavke).
Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).

## Dostava iz komisioniranja

:::important Čemu služi
Na temelju postojeće picking liste, ali bez korišćenja utovarnih jedinica koje se kreiraju putem forme [Upravljanje potvrdom preuzimanja](/docs/logistics/wms/sales/check-row-management), forma **Potvrda Pickinga** omogućava potvrđivanje pojedinačnih stavki picking liste radi premještanja artikala između skladišta ili skladišnih lokacija, uz direktno kreiranje skladišnih knjiženja prenosa.

Nakon toga je u WPF aplikaciji moguće nastaviti sa kreiranjem otpremnice (DDT) ili računa.
:::

Obrazac za **Potvrdu Pickinga** koristi se za potvrdu pojedinačnih redova Pickinga bez korišćenja utovarnih jedinica, koje se umjesto toga koriste u formi [Upravljanje označenim redovima](/docs/logistics/wms/sales/check-row-management).
Nakon toga je iz WPF-a moguće nastaviti sa kreiranjem otpremnice ili računa.

:::note NAPOMENA
U obrascu za **Potvrdu Pickinga** prikazuju se samo Pickinzi kreirani sa *vrstom Pickinga* kod koje je opcija *obavezna utovarna jedinica* deaktivirana u tabeli [Vrste Pickinga](/docs/configurations/tables/logistics/picking-type/).
:::

Obrazac se otvara sa filterom za Picking, gde je moguće pregledati sve Pickinge u statusu *Neobrađeno* ili *Djelimično obrađeno* i sa *vrstom Pickinga* kod koje je opcija *obavezna utovarna jedinica* deaktivirana.
Rezultate je moguće filtrirati prema:
- *Vrsti Pickinga*
- *Broju*
- *Datumu*
- *Klijentu*

Pomoću dugmeta **Otvori** moguće je otvoriti odabrani Picking.
Glavni obrazac sastoji se od sledećih kartica:

- **Artikli**
Na ovoj kartici prikazuju se svi redovi artikala prisutni u Pickingu.

**Posebna dugmad**
> **Detalji**: omogućava prelazak na karticu **Potvrđeni artikli**;  
> **Potvrda**: nakon odabira reda na kartici **Artikli**, otvara karticu **Potvrda** i predlaže odabrani artikl.

- **Potvrda**
Pomoću polja **Unesite kod** (korišćenjem barkod čitača) moguće je unijeti podatke o lotu, lokaciji, količini za preuzimanje i artiklu ako ga želite promijeniti u odnosu na predloženi. Ako korisnik potvrdi red za artikl kojim se upravlja po lotovima, a lot nije unesen, prikazaće se poruka koja podsjeća na unos lota.

**Posebna dugmad**

> **Detalji**: omogućava prelazak na karticu **Potvrđeni artikli**;  
> **Potvrda**: omogućava potvrdu unesenih podataka i zatim učitava podatke sledećeg reda.

- **Potvrđeni artikli**
Kartica **Potvrđeni artikli** popunjava se tek nakon odabira artikla na kartici **Artikli** Pickinga.
Dakle, sa liste artikala Pickinga odabire se artikl, a na kartici **Potvrđeni artikli** prikazuju se sva očitavanja za odabrani artikl.
Kada je red *Pickinga* u potpunosti obrađen, automatski se premješta na kraj liste na kartici **Artikli** i označava crvenom bojom. Odabirom tog reda i pritiskom na dugme **Detalji** otvara se kartica **Potvrđeni artikli**, gde je moguće pregledati potvrđene redove, koji se po potrebi mogu obrisati pomoću dugmeta **Obriši**.

Sa ove kartice moguće je odabrati potvrđeni artikl i obrisati ga.

**Posebna dugmad**
> **Obriši**: omogućava brisanje odabranog reda.

**Parametri za ulaz/izlaz robe** moraju biti definisani u tabeli [Parametri za ulaz/izlaz robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note NAPOMENA
Za ovaj obrazac potrebno je definisati odgovarajući tip prenosa sa pripadajućom protustavkom.
:::

:::note Napomena
Važno je napomenuti da skladišni predložak koji se koristi mora biti predložak izlaza robe sa povezanim predloškom ulaza robe kao protustavkom.
:::

Za svaki Picking biće kreirano samo jedno skladišno knjiženje izlaza sa jednom protustavkom koja sadrži sva kretanja potvrđenih artikala.
Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).