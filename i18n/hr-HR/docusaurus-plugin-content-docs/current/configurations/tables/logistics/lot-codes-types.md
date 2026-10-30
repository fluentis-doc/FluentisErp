---
title: Vrsta šifre lota
sidebar_position: 26
---

:::important Čemu služi
Tablica Vrste šifre lota u Fluentisu ključan je alat za prilagodbu i upravljanje šiframa lotova koje se koriste u logistici i sljedivosti proizvoda. Ova tablica omogućuje definiranje različitih vrsta šifri lotova prema specifičnim potrebama poduzeća, s ciljem optimizacije postupaka upravljanja materijalima i osiguravanja ispravne identifikacije lotova.

U ovoj je tablici moguće unijeti nove šifre lotova navođenjem identifikacijske šifre i pripadajućeg opisa. Osim toga, moguće je konfigurirati parametre kao što su početna vrijednost rednog broja i upravljanje abecednim znakovima, čime se omogućuje veća fleksibilnost pri sastavljanju šifri lotova. Važno je napomenuti da svaka vrsta šifre mora biti povezana sa šifarnikom artikala kako bi se osigurala ispravna integracija tijekom postupaka automatskog kreiranja lota.

Konfiguracija ovih šifri lotova ne samo da olakšava kontrolu i sljedivost, već je ključna i u okruženjima s više skladišta, gdje je praćenje stanja zaliha od iznimne važnosti. Korisnici mogu pregledavati različite odjeljke tablice kako bi detaljno definirali karakteristike, povezivanja i redne brojeve lotova, čime se pridonosi učinkovitijem i preciznijem upravljanju materijalima unutar poduzeća.
:::

Tablica se nalazi na putanji **Tablice > Logistika > Vrsta šifre lota**.

U ovoj je tablici moguće definirati različite *vrste šifri lotova* i prilagoditi ih vlastitim potrebama.

### Pretraživanje šifri lotova

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u području s rezultatima.

### Unos šifri lotova

Za unos novih šifri potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

Potrebno je unijeti **Šifru** i **Opis** vrste šifre lota. Dostupna su i sljedeća polja:

- **Jedinično kretanje**: Označava da se lot poželjno vodi kao cjelina (role, kutije itd.). Trenutačno se ova oznaka koristi samo u prilagođenim rješenjima.
- **Popunjavanje progresivnosti**: Oznaka koja aktivira popunjavanje rednih brojeva.
- **Početna vrijednost progresivnosti**: Početna vrijednost numeričkog rednog broja za šifru *Brojčani redni broj*.
- **Početna vrijednost znaka**: Početna vrijednost rednog broja koji se koristi za šifru *Abecedni znakovi*.

**Vrsta šifre lota** zatim se mora povezati sa *šifarnikom artikala* u istoimenom polju na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item), kako bi se u postupcima automatskog kreiranja šifre lota za određeni artikl lot generirao prema ovdje definiranim pravilima.

Ispod glavne tablice nalaze se tri kartice:

- **Pojedinosti vrste šifre lota**
- **Pojedinosti definicije progresivnog broja vrste šifre lota**
- **Pojedinosti progresivnih ključnih vrijednosti vrste šifre lota**

### Pojedinosti vrste šifre lota

U tablici *Zadane šifre* nalaze se sve vrijednosti koje je moguće koristiti za sastavljanje lota koji se kreira. To su:

> *Klasa*: Prikazuje klasu artikla.

> *Matični broj*: Prikazuje šifru artikla.

> *Svojstvo*: Prikazuje svojstvo iz šifarnika artikala.

> *Robna kategorija*: Prikazuje robnu kategoriju iz šifarnika artikala.

> *Vrsta artikla*: Prikazuje vrstu artikla iz šifarnika artikala.

> *Varijanta*: Prikazuje varijantu artikla.

> *Brojčani redni broj*: Numerički redni broj.

> *Abecedni znakovi*: Abecedni redni broj, za razliku od *Brojčanog rednog broja*, koji je numerički.

> *Dan datuma unosa*: Prikazuje dan datuma unosa.

> *Mjesec datuma unosa*: Prikazuje mjesec datuma unosa.

> *Godina datuma unosa*: Prikazuje godinu datuma unosa.

> *Dan datuma isteka*: Prikazuje dan datuma isteka.

> *Mjesec datuma isteka*: Prikazuje mjesec datuma isteka.

> *Godina datuma isteka*: Prikazuje godinu datuma isteka.

> *Vrsta lota*: Prikazuje vrstu lota artikla.

> *Povezivanje godine i slova*: Prikazuje vrijednost povezanu s godinom u tablici [Povezivanje godine i slova](/docs/configurations/tables/general-settings/year-letter-association).

> *Povezivanje mjeseca i slova*: Prikazuje vrijednost povezanu s mjesecom u tablici [Povezivanje mjeseca i slova](/docs/configurations/tables/general-settings/month-letter-association).

> *Nadimak dobavljača*: Prikazuje nadimak dobavljača iz njegova šifarnika.

> *Broj primke*: Prikazuje broj ulazne primke.

> *Broj ulaznog računa*: Prikazuje broj ulaznog računa.

> *Lot dobavljača*: Prikazuje broj lota dobavljača.

Svaku od ovih stavki, ovisno o potrebama, potrebno je premjestiti u tablicu *Detalji vrste šifre lota* pomoću odgovarajućih gumba na vrpci s alatima.

Za svaku dodanu stavku moguće je definirati *Duljinu* i *Znak za popunjavanje*.

#### Posebni gumbi

> **Premjesti: Predef -> Detalji**: Omogućuje dodavanje jedne od stavki iz tablice *Zadane šifre* u tablicu *Detalji vrste šifre lota*. Ovaj gumb postaje aktivan tek nakon odabira retka u tablici *Zadane šifre* na kartici *Detalji vrste šifre lota*.

> **Premjesti: Detalji -> Predef**: Omogućuje uklanjanje jedne od stavki iz tablice *Detalji vrste šifre lota* i njezino vraćanje u tablicu *Zadane šifre*. Ovaj gumb postaje aktivan tek nakon odabira retka u tablici *Detalji vrste šifre lota* na kartici *Detalji vrste šifre lota*.

#### Pojedinosti definicije progresivnog broja vrste šifre lota

Na ovoj kartici moguće je definirati koje će stavke iz tablice *Zadane šifre* činiti osnovu šifre lota, odnosno onaj dio šifre koji ostaje nepromijenjen dok se redni broj mijenja. U ovom slučaju nije moguće odabrati stavke *Brojčani redni broj* i *Abecedni znakovi* jer se njihove vrijednosti stalno mijenjaju, dok je sve ostale stavke moguće odabrati.

#### Posebni gumbi

> **Premjesti: Predef -> Prog. def.**: Omogućuje dodavanje jedne od stavki iz tablice *Zadane šifre* u tablicu *Definicija rednog broja*. Ovaj gumb postaje aktivan tek nakon odabira retka u tablici *Zadane šifre* na kartici *Detalji definicije rednog broja vrste šifre lota*.

> **Premjesti: Prog. def. -> Predef**: Omogućuje uklanjanje jedne od stavki iz tablice *Definicija rednog broja* i njezino vraćanje u tablicu *Zadane šifre*. Ovaj gumb postaje aktivan tek nakon odabira retka u tablici *Definicija rednog broja* na kartici *Detalji definicije rednog broja vrste šifre lota*.

#### Pojedinosti progresivnih ključnih vrijednosti vrste šifre lota

Na ovoj se kartici prikazuju sve vrijednosti posljednjih rednih brojeva za svaku pojedinu osnovu šifre.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).