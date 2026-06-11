---
title: Novi prodajni cjenik
sidebar_position: 2
---

Za kreiranje **novog prodajnog cjenika** potrebno je kliknuti **Novo** u obrascu za pretraživanje cjenika.

Obrazac se sastoji od tri dijela: **zaglavlje**, **artikli** i **detalji**.

## 1. Obavezni podaci

Obavezna polja zaglavlja za unos novog cjenika su:

- **Cjenik**: cjenik može biti **opći** (potencijalno vrijedi za sve kupce) ili **korisnički** (vrijedi za određenog kupca). Potrebno je odabrati odgovarajuću opciju kako bi se definirala vrsta cjenika koja se kreira.

- **Vrsta cjenika**: polje je dostupno samo za opće cjenike i sadrži definiranu [Vrstu cjenika](/docs/configurations/tables/sales/sales-price-lists).

- **Kupac**: polje je dostupno samo za personalizirane cjenike i određuje kupca za kojeg se kreira cjenik. U tom slučaju aktivira se i polje **Kontakt**, koje omogućuje odabir kontakt osobe definirane na kartici kupca. Iako taj podatak ne utječe na dokumente, koristan je za ograničavanje pristupa dokumentima na pojedine korisnike.

:::important Važno
Da bi cjenik bio dostupan kupcu, potrebno ga je povezati s karticom kupca. Više informacija nalazi se u odgovarajućoj dokumentaciji.
:::

- **Valuta**: određuje valutu cjenika. Prema zadanim postavkama predlaže se valuta društva.

- **Datum početka valjanosti**: određuje datum od kojeg cjenik postaje važeći. Sustav predlaže trenutni datum.

### Neobavezna polja

- **Cijena s PDV-om**: ako je opcija uključena, cjenik koristi cijene s uključenim PDV-om. U tom slučaju u stavkama cjenika neće biti prikazan stupac **Cijena**, već samo stupac **Cijena s PDV-om**, koji uključuje osnovnu cijenu i PDV. Vrijednost se predlaže iz postavki vrste cjenika, ali ju je moguće promijeniti. U [Parametrima prodajnih cjenika](/docs/configurations/parameters/sales/price-list-parameters) moguće je uključiti istovremeni prikaz cijene bez PDV-a i cijene s PDV-om bez obzira na postavke vrste cjenika.

- **Datum kraja valjanost**: koristi se za definiranje datuma nakon kojeg cjenik više nije važeći.

- **Minimalni cjenik**: informativna oznaka koja označava cjenik s minimalnim prodajnim cijenama.

- **Konfiguracija pretraživanja**: koristi se za prikaz određenih dodatnih podataka na razini cjenika ili za upravljanje pojedinim parametrima poslovnih procesa, primjerice vrstom plaćanja.

Na vrhu obrasca nalazi se i **Filtar artikala** koji omogućuje brzo pretraživanje artikala unutar cjenika, posebno korisno kod velikih cjenika.

## 2. Artikli

U ovoj sekciji definiraju se artikli i eventualni popusti povezani s cjenikom.
Dostupni stupci su:
- **Klasa / Artikl / Opis**: sadrži šifru artikla koji se uključuje u cjenik. Novi artikl može se dodati unosom podataka u novi redak ili korištenjem gumba **Novi artikl** na alatnoj traci.

- **Šifra varijante / Opis varijante**: omogućuje povezivanje varijanti artikla s njihovim prodajnim cijenama. Upravljanje cijenama po varijantama moguće je isključivo putem cjenika.

- **Jedinica mjere**: može biti osnovna jedinica mjere artikla ili jedna od alternativnih jedinica mjere. Prilikom kreiranja dokumenata sustav će predložiti odgovarajući cjenik prema odabranoj jedinici mjere.

- **Marka**: prikazuje marku artikla ako je definirana.

- **Količina**: zadana vrijednost je 1 i predstavlja referentnu količinu za definiranu cijenu. Ako je količina različita od 1, sustav će prilikom izračuna cijene podijeliti cijenu s količinom definiranoj u cjeniku.

- **Cijena**: cijena izražena u valuti cjenika. Stupac je vidljiv samo ako cjenik nije definiran kao cjenik s PDV-om.

- **PDV**: vrijednost se preuzima s kartice kupca. Ako nije definirana, potrebno je ručno odabrati odgovarajući PDV kod.

- **Cijena s PDV-om**: sustav automatski izračunava vrijednost zbrajanjem osnovne cijene i PDV-a definiranog u polju PDV.

- **Cjenovni razred**: koristi se za odabir odgovarajućeg cjenika prema dodatnim podacima artikla. Omogućuje definiranje različitih prodajnih cijena za isti artikl ovisno o određenim karakteristikama. Primjer su odjevni artikli kod kojih se cijena može razlikovati ovisno o veličini.

### 2.1 Detalji

U ovoj sekciji za svaki artikl cjenika moguće je definirati različite vrste popusta.
U polju **Tip raspon** moguće je odrediti zadanu vrstu popusta koja će se koristiti za cjenik. Ako je za kupca definirana druga vrsta rabatne ljestvice, ona ima prioritet nad postavkom definiranom u cjeniku.
Na karticama ispod moguće je definirati različite vrste popusta za isti artikl. Jedan artikl može imati više povezanih popusta, dok se konkretna rabatna ljestvica odabire prilikom unosa dokumenta.

U nastavku su opisane dostupne vrste popusta.

#### 2.1.1 Popusti

Ovi popusti su fiksni i prenose se na dokumente neovisno o količini ili drugim parametrima. Tipičan primjer su komercijalni popusti.
Dostupna polja:
- **Prioritet**: vrijednost se preuzima iz tablice [Vrste popusta](/docs/configurations/tables/general-settings/discount-types) i određuje prioritet prilikom pronalaženja i primjene popusta.

- **Vrsta popusta / Opis**: omogućuje odabir vrste popusta među definiranim vrstama.

- **Vrijednost**: postotak popusta koji će se primijeniti.

- **Kaskadno / Na osnovicu**: vrijednost se također preuzima iz tablice [Vrste popusta](/docs/configurations/tables/general-settings/discount-types). Ako je odabrano **Kaskadno**, popust se obračunava na osnovicu umanjenu za prethodno obračunate popuste. Ako je odabrano **Na osnovicu**, popust se obračunava na punu osnovicu.

#### 2.1.2 Rabat za količinu

Ova vrsta popusta omogućuje primjenu različitih postotaka popusta ovisno o prodanoj količini.
Dostupna polja:
- **Vrsta**: odabir vrste popusta među definiranim vrstama.

- **Količina**: količina pri kojoj se aktivira popust.

- **Postotak**: postotak popusta koji će se primijeniti nakon dostizanja definirane količine.

Primjer:
Ako su definirani pragovi za 2, 3 i više komada, tada će se za:
- 2 komada primijeniti popust od 7 %
- 3 komada primijeniti popust od 10 %
- veće količine primijeniti odgovarajući definirani popust

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

#### 2.1.3 Rabat za vrijednost

Kod ove vrste popusta popust se aktivira nakon dostizanja određenog iznosa po stavci dokumenta.
Dostupna polja:
- **Vrsta**: odabir vrste popusta među definiranim vrstama.

- **Vrijednost**: minimalni iznos nakon kojeg se aktivira popust.

- **Postotak**: postotak popusta koji će se primijeniti nakon dostizanja definirane vrijednosti.

Primjer:
- za iznos manji od 100 EUR ne primjenjuje se popust
- za iznos između 100 i 200 EUR primjenjuje se popust od 2 %
- za iznos između 200 i 300 EUR primjenjuje se popust od 4 %
- za iznos veći od 300 EUR primjenjuje se popust od 6 %

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

#### 2.1.4 Cijena za količinu

Kod ove vrste pravila jedinična cijena mijenja se nakon dostizanja određene količine.
Dostupna polja:
- **Količina**: količina nakon koje se primjenjuje posebna cijena.

- **Jedinična cijena**: jedinična cijena koja će se koristiti za definiranu količinu.

Na taj način moguće je definirati različite prodajne cijene za isti artikl ovisno o naručenoj količini.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

Primjer:
Ako je količina po retku manja od definirane granične vrijednosti, koristi se standardna cijena iz cjenika.
Kada količina dosegne definirane pragove, primjenjuju se posebne jedinične cijene. Primjerice:
- za količinu između 100 i 120 jedinica jedinična cijena može iznositi 10
- za veću količinu može se primijeniti jedinična cijena 9
- za sljedeće pragove mogu se definirati dodatne cijene prema poslovnim pravilima

#### 2.1.5 Napomene

U informativne svrhe moguće je unijeti napomene povezane s određenom vrstom popusta ili promotivne akcije.

#### 2.1.6 Odredište

Ova funkcionalnost omogućuje definiranje posebnih cijena za određena odredišta kupca.
Također je moguće ograničiti primjenu posebne cijene na određeno vremensko razdoblje.
Dostupna polja:
- **Odredište**: mora biti adresa definirana na kartici kontakta i povezana s kupcem za fakturiranje.

- **Datum od / do**: određuje razdoblje tijekom kojeg će se za odabrano odredište koristiti posebna cijena umjesto standardne cijene iz cjenika.

- **Cijena**: posebna cijena koja će se primjenjivati za odabrano odredište.

## 3. Dodatni podaci

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## 4. Priloženi dokumenti

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />