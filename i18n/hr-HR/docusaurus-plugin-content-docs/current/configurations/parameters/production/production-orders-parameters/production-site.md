---
title: Mjesto proizvodnje
sidebar_position: 3
---

Tablica omogućuje upravljanje šiframa različitih vrsta *mjesta proizvodnje*.

Omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

## Pretraživanje mjesta proizvodnje

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Pretraživanje** kako bi se rezultati prikazali u mreži s rezultatima.

## Unos novih mjesta proizvodnje

Za unos novog mjesta proizvodnje u obrascu za pretraživanje potrebno je kliknuti gumb **Novo**.

U gornjem dijelu obrasca za unos mjesto proizvodnje definira se pomoću polja **Šifra** i **Opis**.

## Izmjena mjesta proizvodnje

Za izmjenu mjesta proizvodnje u obrascu za pretraživanje odaberite željeno mjesto i dvaput kliknite njegov redak ili kliknite gumb **Izmjena**.

U načinu rada za izmjenu moguće je pregledavati i mijenjati parametre pripadajućih skladišta za to *mjesto proizvodnje*.

To su isti parametri koji se nalaze u [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), ali imaju prednost pred općim parametrima jer ih postupci upotrebljavaju umjesto općih parametara kada je navedeno mjesto proizvodnje.

Za detaljnije informacije o načinu primjene i prioritetima skladišta i predložaka skladišnih kretanja preporučuje se pregled dokumentacije o [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Polje **Kontakt** u zapisu **Mjesto proizvodnje** upotrebljava se u postupku [Otpreme](/docs/logistics/shipping/shippings) za predlaganje adrese mjesta utovara prilikom odabira odgovarajućeg mjesta proizvodnje.

## Konfiguracija i funkcioniranje mjesta proizvodnje

U nastavku su navedeni koraci potrebni za pravilnu konfiguraciju i upotrebu **mjesta proizvodnje**:

1. Izradite mjesto proizvodnje unosom šifre i opisa.
2. Povežite izrađeno mjesto proizvodnje s pojedinim skladištima koja mu pripadaju tako da ga unesete u polje *Mjesto proizvodnje* u tablici [Skladišta](/docs/configurations/parameters/production/production-orders-parameters/production-site). Mjesto proizvodnje moguće je povezati i sa strojem koji se upotrebljava, unosom u polje *Mjesto proizvodnje* u tablici [Strojevi](/docs/configurations/tables/production/machines/).
3. Dovršite konfiguraciju mjesta proizvodnje unosom skladišta — odabirući samo ona koja su povezana s tim mjestom — te pripadajućih predložaka ulaza i izlaza, kako je opisano u dokumentaciji o [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
4. U [Radnom nalogu za proizvodnju](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders) potrebno je navesti mjesto proizvodnje u odgovarajućem polju zaglavlja.
5. Postupci planiranja proizvodnje za taj artikl uzimat će u obzir njegovu raspoloživost i raspoloživost svih njegovih komponenti, analizirajući samo skladišta povezana s tim mjestom proizvodnje i zanemarujući raspoloživost na svim ostalim skladištima.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).