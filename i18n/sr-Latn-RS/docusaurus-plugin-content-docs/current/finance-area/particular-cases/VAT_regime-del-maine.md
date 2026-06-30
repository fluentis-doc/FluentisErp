---
sidebar_position: 4
title: Režim oporezivanja marže
---

## Konfiguracija

Za korišćenje režima oporezivanja marže potrebno je konfigurisati posebne PDV knjige, PDV stope i obrasce knjiženja.

### Konfiguracija PDV-a

Potrebno je definisati najmanje dve posebne **PDV knjige** koje će se koristiti za evidentiranje nabavke i prodaje u režimu oporezivanja marže.

U polju **Vrsta registra** potrebno je odabrati odgovarajuće vrednosti:

- **Nabavka – režim oporezivanja marže**
- **Prodaja – režim oporezivanja marže**

### Konfiguracija PDV stopa

Potrebno je kreirati odgovarajuće **[PDV stope](/docs/configurations/tables/finance/vat-rates)** koje će se koristiti u navedenim PDV knjigama i označiti ih aktiviranjem opcije **PDV na maržu**.

![](/img/it-it/finance-area/other/VATMargine.png)

Kod PDV stopa koje se koriste za nabavku potrebno je definisati referentnu stopu PDV-a na maržu kako bi sistem mogao proporcionalno raspodeliti ostvareni iznos marže na odgovarajuću PDV stopu.

### Konfiguracija obrazaca knjiženja

Potrebno je definisati obrasce knjiženja koji koriste prethodno konfigurisane PDV knjige.

Obrazac knjiženja za prodaju mora biti povezan sa odgovarajućom vrstom izlaznog računa kako bi bilo moguće izdavanje računa i njegovo slanje putem sistema za elektronsku razmenu računa.

Radi sprečavanja korišćenja neodgovarajućih PDV stopa preporučuje se aktiviranje sekcije **Kontrola PDV stopa** unutar obrasca knjiženja i ograničavanje dozvoljenih stopa.

Obrazac knjiženja za prodaju evidentira obavezu PDV-a na maržu koristeći:

- vrstu PDV transakcije **Prodaja – redovni režim**
- standardni zapis izlaznih računa.

![](/img/it-it/finance-area/other/VATMargine2.png)

### Parametri glavne knjige

Prilikom knjiženja sistem koristi konto obaveze za PDV na maržu, kao i konto za storno prihoda od prodaje ostvarenog po osnovu marže.

Ovi podaci definišu se u parametrima glavne knjige u sledećoj sekciji:

![](/img/it-it/finance-area/other/VATMargine3.png)

Potrebno je definisati:

- konto prihoda od prodaje,
- podrazumevani obrazac knjiženja.

Polja **Datum poslednje obrade** i **Negativna vrednost marže** ne unose se ručno. Fluentis ih automatski ažurira nakon konačnog izvršavanja obračuna marže za obračunski period.

## Obrada

U meniju **Administracija > Izveštaji** izaberite **Obrada PDV-a na maržu**.

Prilikom pokretanja novog obračuna prikazuje se sledeća forma:

![](/img/it-it/finance-area/other/VATMargine4.png)

Potrebno je definisati:

- godinu iz parametara računovodstva
- PDV registar koji će se koristiti za knjiženje obaveze PDV-a na pozitivnu maržu
- obrazac knjiženja
- kupca koji će biti dodeljen knjiženju obaveze za PDV
- period obrade (od – do).

Nakon unosa podataka obračun se pokreće pomoću dugmeta na traci sa alatkama. Sistem zatim popunjava podatke u dve kartice.

### Kartica PDV stope

Prva kartica prikazuje zbirne iznose svih PDV stopa evidentiranih u registrima nabavke i prodaje za režim oporezivanja marže.

Kod nabavke se dodatno prikazuju procenti raspodele koji će se koristiti u obračunu marže.

![](/img/it-it/finance-area/other/VATMargine5.png)

### Kartica Obračun marže

Druga kartica prikazuje obračun marže primenom odgovarajućih procenata na PDV stope povezane sa nabavkom.

![](/img/it-it/finance-area/other/VATMargine6.png)

Ova kartica se popunjava samo ako obračun za izabrani period, uzimajući u obzir eventualne negativne marže iz prethodnih perioda, rezultira **pozitivnom maržom**.

## Završna obrada

Nakon završetka obračuna moguće je odštampati rezultate.

Prilikom pokretanja štampe sistem nudi mogućnost označavanja štampe kao **konačne**, čime se obračun zaključava i više ga nije moguće menjati.

![](/img/it-it/finance-area/other/VATMargine7.png)

Konačna štampa automatski ažurira u parametrima računovodstva:

- datum poslednje obrade
- vrednost negativne marže prenete u naredni obračunski period.

Nakon potvrde konačnog obračuna omogućava se knjiženje obaveze za PDV.

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Napomena
U PDV delu knjiženja evidentira se isključivo **iznos obaveze za PDV**, bez pripadajuće poreske osnovice.
:::

Na raspolaganju su i dodatne funkcije za:

- poništavanje knjiženja obaveze za PDV
- poništavanje konačnog obračuna.

![](/img/it-it/finance-area/other/VATMargine10.png)