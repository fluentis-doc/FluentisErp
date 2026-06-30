---
sidebar_position: 4
title: Režim oporezivanja marže
---

## Konfiguracija

Za korištenje režima oporezivanja marže potrebno je konfigurirati posebne knjige PDV-a, PDV stope i računovodstvene predloške.

### Konfiguracija PDV-a

Potrebno je definirati najmanje dvije posebne **knjige PDV-a** koja će se koristiti za evidentiranje nabave i prodaje u režimu oporezivanja marže.
U polju **Vrsta registra** potrebno je odabrati odgovarajuće vrijednosti:
- **Nabava – režim oporezivanja marže**
- **Prodaja – režim oporezivanja marže**

### Konfiguracija PDV stopa

Potrebno je kreirati odgovarajuće **[PDV stope](/docs/configurations/tables/finance/vat-rates)** koje će se koristiti u navedenim knjigama te ih označiti aktiviranjem opcije **PDV na maržu**.

![](/img/it-it/finance-area/other/VATMargine.png)

Kod PDV stopa koje se koriste za nabavu potrebno je definirati referentnu stopu PDV-a na maržu kako bi sustav mogao proporcionalno rasporediti iznos ostvarene marže na odgovarajuću PDV stopu.

### Konfiguracija računovodstvenih predložaka

Potrebno je definirati računovodstvene predloške koji koriste prethodno konfigurirane knjige PDV-a.
Računovodstveni predložak za prodaju mora biti povezan s odgovarajućom vrstom izlaznog računa kako bi bilo moguće izdavanje računa i njegovo slanje putem sustava za elektroničku razmjenu računa.
Radi sprječavanja korištenja neodgovarajućih PDV stopa preporučuje se aktivirati sekciju **Kontrola PDV stopa** unutar računovodstvenog predloška te ograničiti dopuštene stope.
Računovodstveni predložak za prodaju evidentira obvezu PDV-a na maržu koristeći:
- vrstu PDV transakcije **Prodaja – redovni režim**
- standardni zapis izlaznih računa.

![](/img/it-it/finance-area/other/VATMargine2.png)

### Parametri računovodstva

Kod knjiženja sustav koristi konto obveze za PDV na maržu te konto za storno prihoda od prodaje ostvarenog po osnovi marže.
Ti se podaci definiraju u parametrima glavne knjige u sljedećoj sekciji:

![](/img/it-it/finance-area/other/VATMargine3.png)

Potrebno je definirati:
- konto prihoda od prodaje,
- zadani računovodstveni predložak.

Polja **Datum posljednje obrade** i **Negativna vrijednost marže** ne unose se ručno. Njih Fluentis automatski ažurira nakon konačnog izvršavanja obračuna marže za obračunsko razdoblje.

## Obrada

U izborniku **Administracija > Izvještaji** odaberite **Obrada PDV-a na maržu**.
Prilikom pokretanja novog obračuna prikazuje se sljedeća forma:

![](/img/it-it/finance-area/other/VATMargine4.png)

Potrebno je definirati:

- godinu iz parametara računovodstva
- PDV registar koji će se koristiti za knjiženje obveze PDV-a na pozitivnu maržu
- računovodstveni predložak
- kupca koji će biti dodijeljen knjiženju PDV obveze
- razdoblje obrade (od – do).

Nakon unosa podataka obračun se pokreće pomoću gumba na alatnoj traci. Sustav zatim popunjava podatke u dvije kartice.

### Kartica PDV stope

Prva kartica prikazuje zbirne iznose svih PDV stopa evidentiranih u registrima nabave i prodaje za režim oporezivanja marže.
Kod nabave se dodatno prikazuju postoci raspodjele koji će se koristiti u izračunu marže.

![](/img/it-it/finance-area/other/VATMargine5.png)

### Kartica Obračun marže

Druga kartica prikazuje izračun marže primjenom odgovarajućih postotaka na PDV stope povezane s nabavom.

![](/img/it-it/finance-area/other/VATMargine6.png)

Ova kartica popunjava se samo ako obračun za odabrano razdoblje, uzimajući u obzir eventualne negativne marže iz prethodnih razdoblja, rezultira **pozitivnom maržom**.

## Konačna obrada

Nakon završetka obračuna moguće je ispisati rezultate.
Prilikom pokretanja ispisa sustav nudi mogućnost označavanja ispisa kao **konačnog**, čime obračun postaje zaključan i više ga nije moguće mijenjati.

![](/img/it-it/finance-area/other/VATMargine7.png)

Konačni ispis automatski ažurira u parametrima računovodstva:
- datum posljednje obrade
- vrijednost negativne marže prenesene u sljedeće obračunsko razdoblje.

Nakon potvrde konačnog obračuna omogućuje se knjiženje obveze PDV-a.

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Napomena
U PDV dijelu knjiženja evidentira se isključivo **iznos obveze PDV-a**, bez pripadajuće porezne osnovice.
:::

Na raspolaganju su i dodatne funkcije za:
- poništavanje knjiženja PDV obveze
- poništavanje konačnog obračuna.

![](/img/it-it/finance-area/other/VATMargine10.png)