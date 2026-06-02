---
title: Uvod
sidebar_position: 1
---

# Uvod

Modul se nalazi u izborniku **Nabava > Narudžba dobavljačima** i predstavlja jedan od međukoraka nabavnog procesa. Narudžbe dobavljača formalni su dokumenti koje izdaje odjel nabave radi naručivanja robe ili usluga od dobavljača prema unaprijed definiranim uvjetima. Sadrže podatke o artiklima ili uslugama koje se nabavljaju, uključujući količine, cijene, rokove isporuke, uvjete plaćanja i ostale ugovorne odredbe.

# Početna konfiguracija modula

Preporučuje se **konfiguracija** niza tablica i ispravno postavljanje osnovnih algoritama prije nego što se pristupi generiranju Otpremnice.

> **Tablice**: ovdje su obuhvaćene tablice Fakturiranja kupovine, Numeracije narudžbi dobavljača, [Vrste narudžbi dobavljača](/docs/configurations/tables/purchase/purchase-orders-type) i [Vrste zaprimanja robe](/docs/configurations/tables/purchase/goods-receipt-types).

> **Parametri**: ovaj obrazac se odnosi na [Parametre narudžbi dobavljača](/docs/configurations/parameters/purchase/purchase-orders-parameters).

Konkretnije:

- **Numeracije** – definiranje numeracija koje će se koristiti za narudžbe.
- **Tipovi narudžbi dobavljača** – kreiranje i definiranje vrsta narudžbi koje će se koristiti.
- **Parametri narudžbi dobavljača** – postavke specifične za upravljanje narudžbama dobavljača.

# Povezanost s ostalim modulima

Narudžbe dobavljača mogu se unositi ručno ili automatski generirati na temelju postojećih dokumenata. Podržani načini automatskog kreiranja uključuju:

:::info Zahtjevi za nabavom
Procedura **Automatsko kreiranje narudžbi** omogućuje izradu narudžbi dobavljača na temelju odobrenih zahtjeva za nabavu.
:::

:::info Upit za ponudu
Narudžbe dobavljača mogu se generirati iz upita za ponudu korištenjem procedure **Izrada narudžbe dobavljača iz zahtjeva za ponudu**.
:::

:::info Narudžba kupaca
Procedura **Automatsko kreiranje narudžbi** omogućuje i izradu narudžbe dobavljača na temelju narudžbe kupca. Alternativno, narudžbu je moguće generirati iz pregleda narudžbi kupaca korištenjem funkcije **Kreiranje narudžbi dobavljača**.
:::

:::info Nalog za nabavom
Narudžbe dobavljača mogu se generirati i preuzimanjem cijele ili dijela nabavne komese, na temelju unaprijed definiranih i ugovorenih uvjeta s dobavljačem.
:::

Nakon potvrde, narudžba dobavljača može se realizirati putem primke (DDT-a) ili ulaznog računa. Time se omogućuje evidentiranje robe na skladištu i naknadno knjiženje računa unutar sustava, uz potpunu kontrolu zaliha i financijskih tokova.

Modul također omogućuje kreiranje **zaprimanja robe**, pri čemu korisnik može realizirati narudžbu dobavljača, evidentirati dolazak robe, rasporediti artikle na skladišne lokacije te izvršiti službeni skladišni prijem robe.

