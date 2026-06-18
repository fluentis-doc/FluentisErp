---
title: Upravljanje tiketima
sidebar_position: 1
---

Sa forme za pretragu tiketa moguće je pregledati već unete tikete. Generalno, upravljanje tiketima koriste članovi internog tima korisničke podrške kompanije. Sa ovog ekrana moguće je otvoriti postojeće tikete u režimu izmene ili pregleda, kao i kreirati nove tikete.

Pored toga, dugme **Kreiranje ponude iz tiketa** na traci sa alatkama omogućava kreiranje [Ponude](/docs/sales/offers/insert-offer) direktno iz odabranih tiketa. Artikal/usluga uneta u tiket postaće stavka ponude, a u ponudi će biti prikazani i ostali podaci uneseni u tiket: Projekat, Klijent, Iznosi stavki (u ovom slučaju treba obratiti pažnju ako postoje važeći cenovnici za klijenta – ponuda će promeniti iznose prema cenovniku povezanom sa klijentom). Ova procedura dostupna je i unutar pojedinačnih tiketa.

Klikom na *Novo* moguće je uneti novi tiket. Upravljanje tiketima sastoji se iz dva dela: zaglavlja i donjih pregleda, koji su opisani u nastavku.

## Zaglavlje

Zaglavlje sadrži sledeća polja:

**Tip/Godina/Redni broj**: ovi podaci se automatski popunjavaju ako je operateru dodeljena podrazumevana vrsta tiketa u [Podešavanjima operatera za CRM](/docs/configurations/parameters/crm/ticket-parameters); broj je progresivan.

**Datum kreiranja/Rok**: datum kreiranja se automatski unosi sa današnjim datumom; datum roka je polje koje se mora uneti ručno.

**Datum zatvaranja/Zatvoreno**: označavanjem opcije Zatvoreno automatski se upisuje datum zatvaranja.

**Klijent**: ovo polje se automatski popunjava ako je operateru dodeljen podrazumevani klijent u [Podešavanjima operatera za CRM](/docs/configurations/parameters/crm/ticket-parameters); u suprotnom ga je moguće uneti ručno.

**Kontakt**: moguće je uneti i alternativni [Kontakt](/docs/crm/home-crm/contacts/new-contact).

**Projekat**: moguće je navesti projekat na koji se tiket odnosi.

**Operacije tiketa**: u ovom polju prikazane su moguće [Operacije](/docs/configurations/tables/crm/tickets/operations) za ovu vrstu tiketa.

**Kontakt osoba**: u ovom polju prikazana je *kontakt osoba* klijenta, preuzeta iz šifarnika; međutim, polje je moguće izmeniti.

**Ozbiljnost tiketa**: ovo polje sadrži informacije o [Ozbiljnosti](/docs/configurations/tables/crm/tickets/severity).

**Predmet**: ovo polje je moguće ručno popuniti.

**Status**: moguće je dodeliti status tiketu; prikazuju se statusi uneseni u odgovarajuću [Vrstu tiketa](/docs/configurations/tables/crm/tickets/ticket-type).

**Fakturisano/Fakturabilno**: ove oznake pokazuju da li je tiket već fakturisan ili treba da bude fakturisan.

**Kriterijumi fakturisanja**: navodi se da li su kriterijumi fakturisanja definisani ponudama ili stvarno obavljenim radom.

**Period fakturisanja**: određuje da li će se fakturisanje vršiti u realnom vremenu ili po isporuci.

Analizirajmo donje kartice.

## Detalji tiketa

Ova kartica sastoji se od dva polja:

**Jezik** (automatski popunjeno) i **Opis** (obavezno polje).

## Korisnici

Na ovoj kartici prikazani su operateri koji obavljaju aktivnosti na tiketu; prilikom kreiranja novog tiketa automatski se popunjavaju polja **Operater** i **Datum prve dodele**.

## Procena/Napor

Ova kartica se aktivira nakon klika na dugme *Tehnička procena* na traci sa alatkama. U zavisnosti od vrste tiketa koji se kreira, biće ponuđen odgovarajući [Predložak](/docs/configurations/tables/crm/tickets/template-ticket) sa pripadajućim podacima već unetim u odgovarajuću tabelu. Korisnik može menjati sva polja. Polja koja se ne preuzimaju iz tabela Vrste tiketa ili predloška i koja se zato moraju ručno popuniti su:

**Stvarni datum početka**: ovde je moguće uneti datum stvarnog početka radova, koji može biti različit od **Predviđenog datuma početka**, smeštenog pored i automatski popunjenog datumom kreiranja tiketa;

**Komercijalno/Tehničko**: u ova polja unose se odgovarajući operateri, a isti će biti prikazani i na sledećoj kartici *Komercijalna procena*.

U donjoj tabeli važno je navesti/izmeniti kolonu **Predviđeno trajanje**, jer će popunjavanje ove kolone automatski popuniti i polja **Procenjeno vreme napora** i **Radni sati**, te će služiti za dalje kreiranje komercijalne procene.

Nakon završetka tehničke procene kliknite na dugme *Završi tehničku procenu*: time će se ponovo zaključati uređivanje kartice Procena/Napor. Da biste je ponovo uređivali, kliknite na dugme *Poništi tehničku procenu*.

## Podaci o zatvaranju

Ova kartica sastoji se od polja **Datum zatvaranja** i **Napomena**; oba polja su slobodnog unosa i nisu obavezna.

## Povezani tiketi

Na ovoj kartici moguće je uneti eventualno povezane tikete. Da biste to uradili, možete koristiti polje za pretragu dvostrukim klikom na kolonu **Broj**.

## Beleške

Na ovoj kartici moguće je unositi/brisati beleške. Da biste to uradili, koristite dugmad *Nova beleška* i *Obriši belešku*. Kolone **Operater** i **Datum unosa** automatski se popunjavaju. Oznaka **rezervisana informacija** označava da beleška treba da bude dostupna samo operateru koji ju je uneo.

## Komercijalna procena

Ova kartica se aktivira nakon klika na dugme *Komercijalna procena* na traci sa alatkama. U zavisnosti od [Vrste tiketa](/docs/configurations/tables/crm/tickets/ticket-type) koji se kreira i pripadajućeg [Predloška](/docs/configurations/tables/crm/tickets/template-ticket), biće ponuđeni određeni podaci, poput Opisa. Korisnik može menjati sve podatke.

Polje **Tehničko/Komercijalno** preuzima se sa kartice *Tehnička procena*.

U donjoj mreži važno je proveriti/izmeniti kolonu **Ukupna komercijalna količina**. Ova kolona prikazuje predviđeno trajanje izračunato iz tehničke procene, ali ga komercijalista može povećati/smanjiti, čime se formira konačna procena. Ova kolona će takođe popuniti polje ispod mreže: **Ukupno komercijalno predviđeno trajanje**.

Nakon završetka komercijalne procene kliknite na dugme *Završi komercijalnu procenu*: time će se ponovo zaključati uređivanje kartice Procena/Napor. Da biste je ponovo uređivali, kliknite na dugme *Poništi komercijalnu procenu*.

Kada završite komercijalnu procenu, možete kreirati ponudu putem procedure *Kreiranje ponuda iz tiketa*.

## Ponude

Na ovoj kartici prikazane su eventualne povezane ponude nastale iz tiketa korišćenjem procedure *Kreiranje ponuda iz tiketa*.