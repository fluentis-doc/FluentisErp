---
title: Novi prodajni cenovnik
sidebar_position: 2
---

Za kreiranje **novog prodajnog cenovnika** potrebno je kliknuti **Novo** u obrascu za pretragu cenovnika.

Obrazac se sastoji od tri dela: **zaglavlje**, **artikli** i **detalji**.

## 1. Obavezni podaci

Obavezna polja zaglavlja za unos novog cenovnika su:

- **Cenovnik**: cenovnik može biti **opšti** (potencijalno važi za sve kupce) ili **korisnički** (važi za određenog kupca). Potrebno je odabrati odgovarajuću opciju kako bi se definisala vrsta cenovnika koja se kreira.

- **Vrsta cenovnika**: polje je dostupno samo za opšte cenovnike i sadrži definisanu [Vrstu cenovnika](/docs/configurations/tables/sales/sales-price-lists).

- **Kupac**: polje je dostupno samo za personalizovane cenovnike i određuje kupca za kojeg se kreira cenovnik. U tom slučaju aktivira se i polje **Kontakt**, koje omogućava odabir kontakt osobe definisane na kartici kupca. Iako taj podatak ne utiče na dokumente, koristan je za ograničavanje pristupa dokumentima pojedinim korisnicima.

:::important Važno
Da bi cenovnik bio dostupan kupcu, potrebno ga je povezati sa karticom kupca. Više informacija nalazi se u odgovarajućoj dokumentaciji.
:::

- **Valuta**: određuje valutu cenovnika. Prema podrazumevanim postavkama predlaže se valuta društva.

- **Datum početka važenja**: određuje datum od kojeg cenovnik postaje važeći. Sistem predlaže trenutni datum.

### Neobavezna polja

- **Cena sa PDV-om**: ako je opcija uključena, cenovnik koristi cene sa uključenim PDV-om. U tom slučaju u stavkama cenovnika neće biti prikazana kolona **Cena**, već samo kolona **Cena sa PDV-om**, koja uključuje osnovnu cenu i PDV. Vrednost se predlaže iz postavki vrste cenovnika, ali ju je moguće promeniti. U [Parametrima prodajnih cenovnika](/docs/configurations/parameters/sales/price-list-parameters) moguće je uključiti istovremeni prikaz cene bez PDV-a i cene sa PDV-om bez obzira na postavke vrste cenovnika.

- **Datum kraja važenja**: koristi se za definisanje datuma nakon kojeg cenovnik više nije važeći.

- **Minimalni cenovnik**: informativna oznaka koja označava cenovnik sa minimalnim prodajnim cenama.

- **Konfiguracija pretrage**: koristi se za prikaz određenih dodatnih podataka na nivou cenovnika ili za upravljanje pojedinim parametrima poslovnih procesa, na primer vrstom plaćanja.

Na vrhu obrasca nalazi se i **Filter artikala** koji omogućava brzo pretraživanje artikala unutar cenovnika, posebno korisno kod velikih cenovnika.

## 2. Artikli

U ovoj sekciji definišu se artikli i eventualni popusti povezani sa cenovnikom.
Dostupne kolone su:
- **Klasa / Artikal / Opis**: sadrži šifru artikla koji se uključuje u cenovnik. Novi artikal može se dodati unosom podataka u novi red ili korišćenjem dugmeta **Novi artikal** na alatnoj traci.

- **Šifra varijante / Opis varijante**: omogućava povezivanje varijanti artikla sa njihovim prodajnim cenama. Upravljanje cenama po varijantama moguće je isključivo putem cenovnika.

- **Jedinica mere**: može biti osnovna jedinica mere artikla ili jedna od alternativnih jedinica mere. Prilikom kreiranja dokumenata sistem će predložiti odgovarajući cenovnik prema odabranoj jedinici mere.

- **Marka**: prikazuje marku artikla ako je definisana.

- **Količina**: podrazumevana vrednost je 1 i predstavlja referentnu količinu za definisanu cenu. Ako je količina različita od 1, sistem će prilikom obračuna cene podeliti cenu sa količinom definisanom u cenovniku.

- **Cena**: cena izražena u valuti cenovnika. Kolona je vidljiva samo ako cenovnik nije definisan kao cenovnik sa PDV-om.

- **PDV**: vrednost se preuzima sa kartice kupca. Ako nije definisana, potrebno je ručno odabrati odgovarajući PDV kod.

- **Cena sa PDV-om**: sistem automatski izračunava vrednost sabiranjem osnovne cene i PDV-a definisanog u polju PDV.

- **Cenovni razred**: koristi se za odabir odgovarajućeg cenovnika prema dodatnim podacima artikla. Omogućava definisanje različitih prodajnih cena za isti artikal u zavisnosti od određenih karakteristika. Primer su odevni artikli kod kojih se cena može razlikovati u zavisnosti od veličine.

### 2.1 Detalji

U ovoj sekciji za svaki artikal cenovnika moguće je definisati različite vrste popusta.
U polju **Tip raspona** moguće je odrediti podrazumevanu vrstu popusta koja će se koristiti za cenovnik. Ako je za kupca definisana druga vrsta rabatne lestvice, ona ima prioritet nad postavkom definisanom u cenovniku.
Na karticama ispod moguće je definisati različite vrste popusta za isti artikal. Jedan artikal može imati više povezanih popusta, dok se konkretna rabatna lestvica odabira prilikom unosa dokumenta.

U nastavku su opisane dostupne vrste popusta.

#### 2.1.1 Popusti

Ovi popusti su fiksni i prenose se na dokumente nezavisno od količine ili drugih parametara. Tipičan primer su komercijalni popusti.
Dostupna polja:
- **Prioritet**: vrednost se preuzima iz tabele [Vrste popusta](/docs/configurations/tables/general-settings/discount-types) i određuje prioritet prilikom pronalaženja i primene popusta.

- **Vrsta popusta / Opis**: omogućava odabir vrste popusta među definisanim vrstama.

- **Vrednost**: procenat popusta koji će se primeniti.

- **Kaskadno / Na osnovicu**: vrednost se takođe preuzima iz tabele [Vrste popusta](/docs/configurations/tables/general-settings/discount-types). Ako je odabrano **Kaskadno**, popust se obračunava na osnovicu umanjenu za prethodno obračunate popuste. Ako je odabrano **Na osnovicu**, popust se obračunava na punu osnovicu.

#### 2.1.2 Rabat na količinu

Ova vrsta popusta omogućava primenu različitih procenata popusta u zavisnosti od prodate količine.
Dostupna polja:
- **Vrsta**: odabir vrste popusta među definisanim vrstama.

- **Količina**: količina pri kojoj se aktivira popust.

- **Procenat**: procenat popusta koji će se primeniti nakon dostizanja definisane količine.

Primer:
Ako su definisani pragovi za 2, 3 i više komada, tada će se za:
- 2 komada primeniti popust od 7 %
- 3 komada primeniti popust od 10 %
- veće količine primeniti odgovarajući definisani popust

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

#### 2.1.3 Rabat na vrednost

Kod ove vrste popusta popust se aktivira nakon dostizanja određenog iznosa po stavci dokumenta.
Dostupna polja:
- **Vrsta**: odabir vrste popusta među definisanim vrstama.

- **Vrednost**: minimalni iznos nakon kojeg se aktivira popust.

- **Procenat**: procenat popusta koji će se primeniti nakon dostizanja definisane vrednosti.

Primer:
- za iznos manji od 100 EUR ne primenjuje se popust
- za iznos između 100 i 200 EUR primenjuje se popust od 2 %
- za iznos između 200 i 300 EUR primenjuje se popust od 4 %
- za iznos veći od 300 EUR primenjuje se popust od 6 %

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

#### 2.1.4 Cena za količinu

Kod ove vrste pravila jedinična cena menja se nakon dostizanja određene količine.
Dostupna polja:
- **Količina**: količina nakon koje se primenjuje posebna cena.

- **Jedinična cena**: jedinična cena koja će se koristiti za definisanu količinu.

Na taj način moguće je definisati različite prodajne cene za isti artikal u zavisnosti od naručene količine.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

Primer:
Ako je količina po stavci manja od definisane granične vrednosti, koristi se standardna cena iz cenovnika.
Kada količina dostigne definisane pragove, primenjuju se posebne jedinične cene. Na primer:
- za količinu između 100 i 120 jedinica jedinična cena može iznositi 10
- za veću količinu može se primeniti jedinična cena 9
- za sledeće pragove mogu se definisati dodatne cene prema poslovnim pravilima

#### 2.1.5 Napomene

U informativne svrhe moguće je uneti napomene povezane sa određenom vrstom popusta ili promotivne akcije.

#### 2.1.6 Odredište

Ova funkcionalnost omogućava definisanje posebnih cena za određena odredišta kupca.
Takođe je moguće ograničiti primenu posebne cene na određeni vremenski period.
Dostupna polja:
- **Odredište**: mora biti adresa definisana na kartici kontakta i povezana sa kupcem za fakturisanje.

- **Datum od / do**: određuje period tokom kojeg će se za odabrano odredište koristiti posebna cena umesto standardne cene iz cenovnika.

- **Cena**: posebna cena koja će se primenjivati za odabrano odredište.

## 3. Dodatni podaci

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## 4. Priloženi dokumenti

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />