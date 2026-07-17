---
title: Inventura
sidebar_position: 6
---

:::important Čemu služi
Funkcionalnost **inventure** omogućuje potpuno i detaljno upravljanje skladišnim zalihama. Operateri mogu kreirati inventure unosom broja, datuma inventure i drugih relevantnih podataka, uključujući napomene i podatke o operateru. Kroz izradu inventurnih lista moguće je dodijeliti zadatke različitim operaterima kako bi se olakšao proces brojanja. Tijekom inventure sustav podržava unos podataka pomoću čitača barkodova, omogućujući brzo evidentiranje utvrđenih količina i upravljanje artiklima koji se vode po lotovima. Po završetku inventure sustav automatski usklađuje knjižno stanje sa stvarno utvrđenim stanjem, osiguravajući točnost i ažurnost skladišnih zaliha.
:::

Ova procedura koristi se za popunjavanje inventurne liste kreirane u WPF aplikaciji artiklima očitanima putem barkoda.

Operater putem WMS-a može pretražiti željenu inventuru te pritiskom na gumb **Traži** prikazati samo inventurne liste koje su dodijeljene njemu ili nemaju dodijeljenog operatera.

Odabirom liste i pritiskom na gumb **Izmijeni** otvara se obrazac za unos u kojem se nakon očitavanja artikla i njegove lokacije automatski učitavaju pripadajući podaci, a operater unosi utvrđenu količinu.

Pritiskom na gumb **Potvrdi**, sustav u stvarnom vremenu ažurira inventurnu listu upravo unesenim podacima.

Ako se očitani artikl vodi po lotovima, prikazat će se i dodatno polje za unos lota za koji se radi inventura.

Ako se isti artikl očita drugi put (ista **Klasa/Šifra/Lot** ako se upravlja lotovima) i na istoj lokaciji kao prilikom prvog očitanja, prikazat će se skočni prozor s pitanjem želi li korisnik **Dodati** ili **Zamijeniti** prethodno unesenu količinu.

Nakon što su inventurne liste dovršene, u Fluentisu je moguće kreirati korektivna skladišna knjiženja putem procedure [Inventurne razlike](/docs/logistics/physical-inventory/stock-difference).

:::note Parametri po korisniku
Trenutni operater prema kojem se filtriraju ponuđene inventurne liste identificira se kao zaposlenik čije polje **Korisničko ime** odgovara vrijednosti polja **Prijava** korisnika prijavljenog u aplikaciju.

Za korištenje ovog obrasca nije potrebno unositi nikakve parametre u tablicu [Parametri ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).
:::

:::note Napomena
Ponašanje inventurne liste vezano uz lokacije može se prilagoditi pomoću oznake **Zadrži lokaciju** u tablici [Tipovi inventurnih lista](/docs/configurations/tables/logistics/stock-lists-types).

Ako je oznaka aktivna, tijekom inventure u WMS-u unesena lokacija ostaje nepromijenjena sve dok se ne očita druga lokacija.

Ako je oznaka neaktivna, lokaciju je potrebno ponovno unijeti prije svake potvrde artikla.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).