---
title: Tip šifre lota
sidebar_position: 26
---

:::important Čemu služi
Tabela Tipovi šifara lota u Fluentisu predstavlja ključni alat za prilagođavanje i upravljanje šiframa lotova koje se koriste u logistici i sledljivosti proizvoda. Ova tabela omogućava definisanje različitih tipova šifara lotova prema specifičnim potrebama preduzeća, sa ciljem optimizacije postupaka upravljanja materijalima i obezbeđivanja ispravne identifikacije lotova.

U ovoj tabeli moguće je uneti nove šifre lotova navođenjem identifikacione šifre i odgovarajućeg opisa. Pored toga, moguće je podesiti parametre kao što su početna vrednost rednog broja i upravljanje abecednim znakovima, čime se omogućava veća fleksibilnost pri sastavljanju šifara lotova. Važno je napomenuti da svaki tip šifre mora biti povezan sa šifarnikom artikala kako bi se obezbedila ispravna integracija tokom postupaka automatskog kreiranja lota.

Podešavanje ovih šifara lotova ne samo da olakšava kontrolu i sledljivost već je ključno i u okruženjima sa više skladišta, gde je praćenje stanja zaliha od izuzetne važnosti. Korisnici mogu pregledavati različite odeljke tabele kako bi detaljno definisali karakteristike, povezivanja i redne brojeve lotova, čime se doprinosi efikasnijem i preciznijem upravljanju materijalima u okviru preduzeća.
:::

Tabela se nalazi na putanji **Tabele > Logistika > Tip šifre lota**.

U ovoj tabeli moguće je definisati različite *tipove šifara lotova* i prilagoditi ih sopstvenim potrebama.

### Pretraživanje šifara lotova

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u području sa rezultatima.

### Unos šifara lotova

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Potrebno je uneti **Šifru** i **Opis** tipa šifre lota. Dostupna su i sledeća polja:

- **Jedinično kretanje**: Označava da je poželjno voditi lot kao celinu (rolne, kutije itd.). Trenutno se ova oznaka koristi samo u prilagođenim rešenjima.
- **Popunjavanje progresivnosti**: Oznaka koja aktivira popunjavanje rednih brojeva.
- **Početna vrednost progresivnosti**: Početna vrednost numeričkog rednog broja za šifru *Brojčani redni broj*.
- **Početna vrednost znaka**: Početna vrednost rednog broja koji se koristi za šifru *Abecedni znakovi*.

**Tip šifre lota** zatim mora da se poveže sa *šifarnikom artikala* u istoimenom polju na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item), kako bi se tokom postupaka automatskog kreiranja šifre lota za određeni artikal lot generisao prema ovde definisanim pravilima.

Ispod glavne tabele nalaze se tri kartice:

- **Detalji tipa šifre lota**
- **Detalji definicije progresivnog broja tipa šifre lota**
- **Detalji progresivnih ključnih vrednosti tipa šifre lota**

### Detalji tipa šifre lota

U tabeli *Podrazumevane šifre* nalaze se sve vrednosti koje je moguće koristiti za sastavljanje lota koji se kreira. To su:

> *Klasa*: Prikazuje klasu artikla.

> *Matični broj*: Prikazuje šifru artikla.

> *Svojstvo*: Prikazuje svojstvo iz šifarnika artikala.

> *Robna kategorija*: Prikazuje robnu kategoriju iz šifarnika artikala.

> *Tip artikla*: Prikazuje tip artikla iz šifarnika artikala.

> *Varijanta*: Prikazuje varijantu artikla.

> *Brojčani redni broj*: Numerički redni broj.

> *Abecedni znakovi*: Abecedni redni broj, za razliku od *Brojčanog rednog broja*, koji je numerički.

> *Dan datuma unosa*: Prikazuje dan datuma unosa.

> *Mesec datuma unosa*: Prikazuje mesec datuma unosa.

> *Godina datuma unosa*: Prikazuje godinu datuma unosa.

> *Dan datuma isteka*: Prikazuje dan datuma isteka.

> *Mesec datuma isteka*: Prikazuje mesec datuma isteka.

> *Godina datuma isteka*: Prikazuje godinu datuma isteka.

> *Tip lota*: Prikazuje tip lota artikla.

> *Povezivanje godine i slova*: Prikazuje vrednost povezanu sa godinom u tabeli [Povezivanje godine i slova](/docs/configurations/tables/general-settings/year-letter-association).

> *Povezivanje meseca i slova*: Prikazuje vrednost povezanu sa mesecom u tabeli [Povezivanje meseca i slova](/docs/configurations/tables/general-settings/month-letter-association).

> *Nadimak dobavljača*: Prikazuje nadimak dobavljača iz njegovog šifarnika.

> *Broj primke*: Prikazuje broj ulazne primke.

> *Broj ulazne fakture*: Prikazuje broj ulazne fakture.

> *Lot dobavljača*: Prikazuje broj lota dobavljača.

Svaku od ovih stavki, u zavisnosti od potreba, potrebno je premestiti u tabelu *Detalji tipa šifre lota* pomoću odgovarajućih dugmadi na traci sa alatkama.

Za svaku dodatu stavku moguće je definisati *Dužinu* i *Znak za popunjavanje*.

#### Posebna dugmad

> **Premesti: Predef -> Detalji**: Omogućava dodavanje jedne od stavki iz tabele *Podrazumevane šifre* u tabelu *Detalji tipa šifre lota*. Ovo dugme postaje aktivno tek nakon odabira reda u tabeli *Podrazumevane šifre* na kartici *Detalji tipa šifre lota*.

> **Premesti: Detalji -> Predef**: Omogućava uklanjanje jedne od stavki iz tabele *Detalji tipa šifre lota* i njeno vraćanje u tabelu *Podrazumevane šifre*. Ovo dugme postaje aktivno tek nakon odabira reda u tabeli *Detalji tipa šifre lota* na kartici *Detalji tipa šifre lota*.

#### Detalji definicije progresivnog broja tipa šifre lota

Na ovoj kartici moguće je definisati koje će stavke iz tabele *Podrazumevane šifre* činiti osnovu šifre lota, odnosno onaj deo šifre koji ostaje nepromenjen dok se redni broj menja. U ovom slučaju nije moguće odabrati stavke *Brojčani redni broj* i *Abecedni znakovi* jer se njihove vrednosti stalno menjaju, dok je sve ostale stavke moguće odabrati.

#### Posebna dugmad

> **Premesti: Predef -> Prog. def.**: Omogućava dodavanje jedne od stavki iz tabele *Podrazumevane šifre* u tabelu *Definicija rednog broja*. Ovo dugme postaje aktivno tek nakon odabira reda u tabeli *Podrazumevane šifre* na kartici *Detalji definicije rednog broja tipa šifre lota*.

> **Premesti: Prog. def. -> Predef**: Omogućava uklanjanje jedne od stavki iz tabele *Definicija rednog broja* i njeno vraćanje u tabelu *Podrazumevane šifre*. Ovo dugme postaje aktivno tek nakon odabira reda u tabeli *Definicija rednog broja* na kartici *Detalji definicije rednog broja tipa šifre lota*.

#### Detalji progresivnih ključnih vrednosti tipa šifre lota

Na ovoj kartici prikazuju se sve vrednosti poslednjih rednih brojeva za svaku pojedinačnu osnovu šifre.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).