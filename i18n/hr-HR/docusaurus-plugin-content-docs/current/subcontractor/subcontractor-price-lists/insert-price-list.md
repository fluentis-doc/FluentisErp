---
title: Unos cjenika podizvođača
sidebar_position: 1
---

U ovoj aplikaciji moguće je unositi i održavati cjenike podizvođača.

## Zaglavlje

U zaglavlju je potrebno odabrati **Dobavljača (kooperanta)**.

Prilikom otvaranja obrasca automatski se predlažu vrijednosti za:
- **Datum početka valjanosti** – predlaže se trenutni datum,
- **Valuta** – predlaže se valuta tvrtke.

Oba podatka korisnik može promijeniti.

Također se prikazuje eventualni **Popust iz kartice dobavljača**, a moguće je unijeti i **Napomene**.

U zaglavlju se nalazi i polje za **filtriranje artikala** unutar cjenika.

## Artikli

U ovom dijelu definiraju se artikli i eventualni popusti povezani s cjenikom.

- **Klasa / Artikl / Opis**: unosi se šifra artikla koji se uključuje u cjenik. Opis se automatski preuzima iz kartice artikla. Novi artikl moguće je dodati unosom u novi red ili korištenjem gumba **Novi artikl** na alatnoj traci.

- **Šifra / Opis varijante**: koristi se kada je uz šifru artikla potrebno razlikovati pojedine varijante artikla.

- **Šifra faze**: omogućuje povezivanje artikla s određenom **vanjskom fazom proizvodnje**(/docs/configurations/tables/production/standard-phases) koju obavlja kooperant. Na taj način moguće je definirati različitu cijenu za pojedinu fazu istog artikla. Nakon odabira automatski se popunjavaju polja **Faza** i **Podfaza**.

- **Mjerna jedinica**: može biti osnovna mjerna jedinica artikla ili jedna od alternativnih mjernih jedinica.

- **Količina**: predlaže se vrijednost 1 i predstavlja referentnu količinu za definiranu cijenu. Ako je količina različita od 1, cijena se pri obračunu dijeli s količinom definiranom u cjeniku.

- **Cijena**: jedinična cijena izražena u valuti cjenika.

- **PDV**: polje se automatski popunjava ako je vrijednost dostupna. Ako nije definirana, potrebno je ručno odabrati odgovarajuću PDV stopu.

- **Cijena s PDV-om**: sustav automatski izračunava vrijednost na temelju cijene i odabrane PDV stope.

- **Visina / Širina / Dubina**: informativni podaci vezani uz artikl. Sustav ih ne koristi u izračunima niti u automatskim obradama.

Za svaki artikl moguće je definirati jednu ili više vrsta popusta.

U polju **Vrsta razreda popusta** odabire se razred popusta koji će se koristiti, dok se u sljedećim poljima prikazuju podaci vezani uz artikle unesene u cjenik.

Razredi popusta definiraju se u tablici **Vrste popusta**.

Na desnoj strani obrasca nalazi se tablica u kojoj su prikazani svi popusti povezani s odabranim artiklom. Tablica se popunjava tek nakon što je odabran artikl iz cjenika.

### Popusti

Ovi popusti su fiksni popusti koji se prenose na dokumente.

Polja u tablici popusta:
- **Broj**: automatski ga popunjava sustav i označava redoslijed primjene popusta.
- **Vrsta popusta / Opis**: odabire se vrsta popusta. Standardno su dostupne tri vrste: *Komercijalni popust*, *Količinski popust* i *Vrijednosni popust*.
- **Vrijednost**: postotak popusta koji će se primijeniti.
- **Prioritet**: preuzima se iz postavki definiranih u tablici **Vrste popusta**.
- **Kaskada / Iznos**: vrijednost se automatski preuzima iz definicije vrste popusta.

### Rabat za količinu

Ova vrsta popusta omogućuje različite postotke popusta ovisno o naručenoj količini.
- **Vrsta**: odabrati vrstu popusta *Količinski popust*. Ovaj naziv bit će prikazan i na ispisima.
- **Količina**: količina pri kojoj se aktivira popust.
- **Postotak**: postotak popusta koji će se primijeniti nakon dostizanja zadane količine.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Rabat za vrijednost

Ova vrsta popusta aktivira se kada vrijednost retka dosegne određeni iznos.
- **Vrsta**: odabrati vrstu popusta *Vrijednosni popust*.
- **Vrijednost**: prag iznosa nakon kojeg se popust primjenjuje.
- **Postotak**: postotak popusta koji će se primijeniti nakon dostizanja definiranog iznosa.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Cijena za količinu

Kod ove vrste uvjeta jedinična cijena se mijenja kada se dostigne određena količina.
- **Količina**: količina od koje se primjenjuje posebna cijena.
- **Cijena**: cijena koja će se koristiti za naručenu količinu.

Ove pogodnosti mogu se zbrajati s drugim popustima koji su definirani za isti artikl.

### Napomene

Moguće je unositi informativne napomene povezane s određenom vrstom popusta ili promotivnom akcijom.

### Priloženi dokumenti

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />
