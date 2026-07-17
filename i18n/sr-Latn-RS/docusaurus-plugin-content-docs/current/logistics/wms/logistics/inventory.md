---
title: Inventura
sidebar_position: 6
---

:::important Čemu služi
Funkcionalnost **inventure** omogućava potpuno i detaljno upravljanje skladišnim zalihama. Operateri mogu kreirati inventure unosom broja, datuma inventure i drugih relevantnih podataka, uključujući napomene i podatke o operateru. Kroz izradu inventurnih lista moguće je dodeliti zadatke različitim operaterima kako bi se olakšao proces brojanja. Tokom inventure sistem podržava unos podataka pomoću čitača barkodova, omogućavajući brzo evidentiranje utvrđenih količina i upravljanje artiklima koji se vode po lotovima. Po završetku inventure sistem automatski usklađuje knjigovodstveno stanje sa stvarno utvrđenim stanjem, obezbeđujući tačnost i ažurnost skladišnih zaliha.
:::

Ova procedura koristi se za popunjavanje inventurne liste kreirane u WPF aplikaciji artiklima očitanim putem barkoda.

Operater putem WMS-a može pretražiti željenu inventuru te pritiskom na dugme **Traži** prikazati samo inventurne liste koje su dodeljene njemu ili nemaju dodeljenog operatera.

Odabirom liste i pritiskom na dugme **Izmeni** otvara se obrazac za unos u kojem se nakon očitavanja artikla i njegove lokacije automatski učitavaju pripadajući podaci, a operater unosi utvrđenu količinu.

Pritiskom na dugme **Potvrdi**, sistem u realnom vremenu ažurira inventurnu listu upravo unetim podacima.

Ako se očitani artikl vodi po lotovima, prikazaće se i dodatno polje za unos lota za koji se vrši inventura.

Ako se isti artikl očita drugi put (ista **Klasa/Šifra/Lot** ako se upravlja lotovima) i na istoj lokaciji kao prilikom prvog očitavanja, prikazaće se iskačući prozor sa pitanjem da li korisnik želi **Dodati** ili **Zameniti** prethodno unesenu količinu.

Nakon što su inventurne liste završene, u Fluentisu je moguće kreirati korektivna skladišna knjiženja putem procedure [Inventurne razlike](/docs/logistics/physical-inventory/stock-difference).

:::note Parametri po korisniku
Trenutni operater prema kojem se filtriraju ponuđene inventurne liste identifikuje se kao zaposleni čije polje **Korisničko ime** odgovara vrednosti polja **Prijava** korisnika prijavljenog u aplikaciju.

Za korišćenje ovog obrasca nije potrebno unositi nikakve parametre u tabelu [Parametri ulaza/izlaza po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).
:::

:::note Napomena
Ponašanje inventurne liste vezano za lokacije može se prilagoditi pomoću oznake **Zadrži lokaciju** u tabeli [Tipovi inventurnih lista](/docs/configurations/tables/logistics/stock-lists-types).

Ako je oznaka aktivna, tokom inventure u WMS-u uneta lokacija ostaje nepromenjena sve dok se ne očita druga lokacija.

Ako je oznaka neaktivna, lokaciju je potrebno ponovo uneti pre svake potvrde artikla.
:::

Za sve informacije o načinu kodiranja barkodova koji se očitavaju u polju **Barkod**, pogledajte dokumentaciju za [Tokenizer barkodova](/docs/configurations/tables/general-settings/barcode-tokenizer).