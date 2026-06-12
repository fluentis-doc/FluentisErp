---
title: Unos cenovnika podizvođača
sidebar_position: 1
---

U ovoj aplikaciji moguće je unositi i održavati cenovnike podizvođača.

## Zaglavlje

U zaglavlju je potrebno odabrati **Dobavljača (kooperanta)**.

Prilikom otvaranja obrasca automatski se predlažu sledeće vrednosti:

- **Datum početka važenja** – predlaže se tekući datum,
- **Valuta** – predlaže se valuta kompanije.

Oba podatka korisnik može promeniti.

Takođe se prikazuje eventualni **Popust sa kartice dobavljača**, a moguće je uneti i **Napomene**.

U zaglavlju se nalazi i polje za **filtriranje artikala** unutar cenovnika.

## Artikli

U ovom delu definišu se artikli i eventualni popusti povezani sa cenovnikom.

- **Klasa / Artikal / Opis**: unosi se šifra artikla koji se uključuje u cenovnik. Opis se automatski preuzima sa kartice artikla. Novi artikal moguće je dodati unosom u novi red ili korišćenjem dugmeta **Novi artikal** na alatnoj traci.

- **Šifra / Opis varijante**: koristi se kada je uz šifru artikla potrebno razlikovati pojedine varijante artikla.

- **Šifra faze**: omogućava povezivanje artikla sa određenom **spoljnom fazom proizvodnje**(/docs/configurations/tables/production/standard-phases) koju izvršava kooperant. Na taj način moguće je definisati različitu cenu za pojedinu fazu istog artikla. Nakon izbora automatski se popunjavaju polja **Faza** i **Podfaza**.

- **Jedinica mere**: može biti osnovna jedinica mere artikla ili jedna od alternativnih jedinica mere.

- **Količina**: podrazumevana vrednost je 1 i predstavlja referentnu količinu za definisanu cenu. Ako je količina različita od 1, cena se prilikom obračuna deli količinom definisanom u cenovniku.

- **Cena**: jedinična cena izražena u valuti cenovnika.

- **PDV**: polje se automatski popunjava ukoliko je vrednost dostupna. Ako nije definisana, potrebno je ručno odabrati odgovarajuću PDV stopu.

- **Cena sa PDV-om**: sistem automatski izračunava vrednost na osnovu cene i odabrane PDV stope.

- **Visina / Širina / Dubina**: informativni podaci vezani za artikal. Sistem ih ne koristi u obračunima niti u automatskim procesima.

Za svaki artikal moguće je definisati jednu ili više vrsta popusta.

U polju **Vrsta razreda popusta** bira se razred popusta koji će se koristiti, dok se u narednim poljima prikazuju podaci vezani za artikle unesene u cenovnik.

Razredi popusta definišu se u tabeli **Vrste popusta**.

Na desnoj strani obrasca nalazi se tabela u kojoj su prikazani svi popusti povezani sa odabranim artiklom. Tabela se popunjava tek nakon što je izabran artikal iz cenovnika.

### Popusti

Ovi popusti su fiksni popusti koji se prenose na dokumente.

Polja u tabeli popusta:

- **Broj**: automatski ga popunjava sistem i označava redosled primene popusta.
- **Vrsta popusta / Opis**: bira se vrsta popusta. Standardno su dostupne tri vrste: *Komercijalni popust*, *Količinski popust* i *Vrednosni popust*.
- **Vrednost**: procenat popusta koji će se primeniti.
- **Prioritet**: preuzima se iz podešavanja definisanih u tabeli **Vrste popusta**.
- **Kaskadno / Iznos**: vrednost se automatski preuzima iz definicije vrste popusta.

### Količinski rabat

Ova vrsta popusta omogućava različite procente popusta u zavisnosti od naručene količine.

- **Vrsta**: odabrati vrstu popusta *Količinski popust*. Ovaj naziv će biti prikazan i na ispisima.
- **Količina**: količina pri kojoj se aktivira popust.
- **Procenat**: procenat popusta koji će se primeniti nakon dostizanja zadate količine.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Vrednosni rabat

Ova vrsta popusta aktivira se kada vrednost stavke dostigne određeni iznos.

- **Vrsta**: odabrati vrstu popusta *Vrednosni popust*.
- **Vrednost**: prag iznosa nakon kojeg se popust primenjuje.
- **Procenat**: procenat popusta koji će se primeniti nakon dostizanja definisanog iznosa.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Cena za količinu

Kod ove vrste uslova jedinična cena se menja kada se dostigne određena količina.

- **Količina**: količina od koje se primenjuje posebna cena.
- **Cena**: cena koja će se koristiti za naručenu količinu.

Ove pogodnosti mogu se kombinovati sa drugim popustima koji su definisani za isti artikal.

### Napomene

Moguće je unositi informativne napomene povezane sa određenom vrstom popusta ili promotivnom akcijom.

### Priloženi dokumenti

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />