---
title: Mesto proizvodnje
sidebar_position: 3
---

Tabela omogućava upravljanje šiframa različitih vrsta *mesta proizvodnje*.

Omogućava unos novih zapisa ili pretragu postojećih radi pregleda, izmene ili brisanja.

## Pretraga mesta proizvodnje

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon podešavanja željenih filtera, dovoljno je kliknuti na dugme **Pretraga** kako bi se rezultati prikazali u mreži sa rezultatima.

## Unos novih mesta proizvodnje

Za unos novog mesta proizvodnje potrebno je u obrascu za pretragu kliknuti na dugme **Novo**.

U gornjem delu obrasca za unos mesto proizvodnje definiše se pomoću polja **Šifra** i **Opis**.

## Izmena mesta proizvodnje

Za izmenu mesta proizvodnje potrebno je u obrascu za pretragu izabrati željeno mesto i dvaput kliknuti na njegov red ili kliknuti na dugme **Izmena**.

U režimu izmene moguće je pregledati i menjati parametre pripadajućih skladišta za to *mesto proizvodnje*.

To su isti parametri koji se nalaze u [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), ali imaju prednost u odnosu na opšte parametre, jer ih postupci koriste umesto opštih parametara kada je navedeno mesto proizvodnje.

Za detaljnije informacije o načinu primene i prioritetima skladišta i šablona skladišnih kretanja preporučuje se pregled dokumentacije o [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Polje **Kontakt** u zapisu **Mesto proizvodnje** koristi se u postupku [Otpreme](/docs/logistics/shipping/shippings) za predlaganje adrese mesta utovara prilikom izbora odgovarajućeg mesta proizvodnje.

## Konfiguracija i funkcionisanje mesta proizvodnje

U nastavku su navedeni koraci potrebni za pravilnu konfiguraciju i upotrebu **mesta proizvodnje**:

1. Kreirajte mesto proizvodnje unosom šifre i opisa.
2. Povežite kreirano mesto proizvodnje sa pojedinačnim skladištima koja mu pripadaju tako što ćete ga uneti u polje *Mesto proizvodnje* u tabeli [Skladišta](/docs/configurations/parameters/production/production-orders-parameters/production-site). Mesto proizvodnje moguće je povezati i sa mašinom koja se koristi, unosom u polje *Mesto proizvodnje* u tabeli [Mašine](/docs/configurations/tables/production/machines/).
3. Dovršite konfiguraciju mesta proizvodnje unosom skladišta — birajući samo ona koja su povezana sa tim mestom — i pripadajućih ulaznih i izlaznih šablona, kao što je opisano u dokumentaciji o [Parametrima naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
4. U [Radnom nalogu za proizvodnju](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders) potrebno je navesti mesto proizvodnje u odgovarajućem polju zaglavlja.
5. Postupci planiranja proizvodnje za taj artikal uzeće u obzir njegovu raspoloživost i raspoloživost svih njegovih komponenti, analizirajući samo skladišta povezana sa tim mestom proizvodnje i zanemarujući raspoloživost na svim ostalim skladištima.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).