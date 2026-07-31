---
title: Izvršenja (Preuzimanja)
sidebar_position: 5
---

Ciklus izvršenja u Fluentisu služi za strukturirano i integrisano upravljanje celokupnim operativnim tokom nabavke, od početne faze zahteva za ponudom do završne faze fakturisanja. Svaku fazu karakterišu specifični postupci i konfiguracije koje obezbeđuju nesmetano i integrisano upravljanje radnim tokom.

## Pretvaranje ponude u narudžbinu

Postupak konverzije iz ponude dobavljača u narudžbinu za nabavku može se pokrenuti:

- Iz menija [Procedure](/docs/purchase/offer-request/procedures/order-creation): izborom *Nabavka > Zahtev za ponudom > Procedure > Kreiranje narudžbine dobavljaču iz ponude dobavljača*.

Za izvršavanje konverzije potrebno je konfigurisati željeni tip narudžbine dobavljaču u tabeli [Tip zahteva za ponudom](/docs/configurations/tables/purchase/purchase-offer-type).

Tokom postupka konverzije pojavljuje se *pop-up* prozor sa sledećim opcijama:

- Zahtev za ponudom: omogućava kreiranje jedne narudžbine za svaki zahtev za ponudom.
- Račun: omogućava grupisanje zahteva za ponudom prema dobavljaču.
- Zatvori povezane ponude: unosi *Datum zatvaranja* za sve ZOP-ove koji se pretvaraju u narudžbine.

Nakon potvrde konverzije, sistem generiše novu narudžbinu dobavljaču koristeći podatke iz zahteva za ponudom i obaveštava korisnika putem *pop-up* prozora o uspešno izvršenom postupku.
Za više detalja pogledajte odgovarajuću stranicu dokumentacije.

## Pretvaranje zahteva za nabavku u narudžbinu

Postupak kreiranja narudžbine dobavljaču iz zahteva za nabavku može se pokrenuti:

- Iz menija [Procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): *Nabavka > Narudžbina dobavljačima > Procedure > Automatsko kreiranje narudžbina*.

Ovaj postupak omogućava kreiranje jedne ili više narudžbina iz jednog ili više zahteva za nabavku i sastoji se od pet kartica:

- Filtriraj iz: omogućava definisanje filtera za izbor dokumenata (sa statusom „Odobreno“) koji se pretvaraju u narudžbinu.
- Izbor dobavljača: omogućava izbor dobavljača kome će narudžbina biti dodeljena, prema kriterijumima kao što su najbolja nabavna cena, preferirani dobavljač, najbolji uslovi plaćanja itd.
- Prototipovi narudžbine: prikazuje sažetak narudžbina koje će biti kreirane i omogućava kreiranje nove narudžbine ili dodavanje stavki postojećoj narudžbini.
- Parametri: konfiguriše opcije za kreiranje narudžbine, kao što su tip narudžbine i podaci koji će se koristiti ako nisu definisani na artiklima. Takođe je moguće uključiti raspoloživosti iz različitih modula sistema.
- Operacije: omogućava prikaz, filtriranje i poništavanje prethodnih operacija.

Nakon potvrde prototipa narudžbine, pritiskom na dugme *Generiši prototipove narudžbine* sistem kreira narudžbine prema izabranim parametrima.

Isti postupak može se koristiti i za kreiranje narudžbina dobavljaču iz narudžbina kupaca. Više detalja dostupno je na ovoj [stranici](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).

## Prenos iz narudžbina u primke

Postupak prenosa narudžbina u primku (DDT) dostupan je na dva načina:

- Iz menija [Procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): putanja *Nabavka > Primke > Procedure > Preuzimanje iz narudžbine*.
- Preuzimanje iz [Zaglavlja](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) narudžbine: korišćenjem dugmeta *Premesti* otvara se prozor za izbor potvrđenih narudžbina dobavljača koje se mogu preneti u otpremnicu.

Ovaj postupak omogućava pretvaranje jedne ili više narudžbina u jednu ili više primki. Pre pokretanja potrebno je konfigurisati željeni tip primke u tabeli [Tipovi narudžbina dobavljača](/docs/configurations/tables/purchase/purchase-orders-type/). Automatsko kreiranje primke moguće je samo ako je narudžbina odštampana i potvrđena.

Uslovi za izvršenje:

- Dobavljač na narudžbinama mora odgovarati dobavljaču na primci.
- Narudžbina koja se izvršava mora imati oznaku "Odštampano" i evidentiran *Datum potvrde*.
- Ako se izvršenje pokreće iz zaglavlja primke, *Tip narudžbine* mora imati pridružen *Tip primke*.

Pravila grupisanja narudžbina u primke definišu se u sledećim parametrima: [Parametri grupisanja primke](/docs/configurations/parameters/purchase/dn-grouping).

Nakon izbora narudžbina i postavljanja filtera, klikom na *Premesti* generiše se primka sa preuzetim podacima iz narudžbina. Ako je izvršenje uspešno obavljeno, narudžbina će automatski promeniti status u *"Izvršeno"* ili *"Delimično izvršeno"*.

Izvršenje narudžbine u primku može se završiti i iz zaglavlja samog računa putem dugmeta *Izvršenje (Preuzimanje) narudžbine (Evasione da ordine)*.

## Prenos primki u račune

Postupak evidentiranja primke u račun može se pokrenuti na dva načina:

- Iz menija [Procedure](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): klikom na *Nabavka > Ulazni računi > Procedure > Valorizacija primke*.
- Iz [Zaglavlja] prodajnog računa: korišćenjem dugmeta *Izvršenje otpremnice/primke* u zaglavlju računa.

Ovaj postupak omogućava kreiranje jednog ili više računa na osnovu jedne ili više primki. Sastoji se od tri glavne kartice:

- Valorizacija: omogućava unos filtera za izbor primki koje će biti fakturisane (sa statusom „Kontrolisano”) i određivanje datuma kreiranja računa.
- Parametri: konfiguriše tip računa koji će biti kreiran, ako nije definisan u tabeli [Tipovi primki](/docs/configurations/tables/purchase/purchase-delivery-notes-type/), kao i koje će reference otpremnice biti prenete na račun.
- Prethodni: omogućava pregled, filtriranje i poništavanje ranijih postupaka fakturisanja.

Uslovi grupisanja primki u račun mogu se definisati u [Parametrima grupisanja ulaznih računa](/docs/configurations/parameters/purchase/invoice-grouping/).

Nakon izbora primki i postavljanja parametara, kreiranje računa pokreće se klikom na *Valorizacija primke*.

Prenos primki u račun može se završiti i iz samog zaglavlja računa putem dugmeta *Izvršenje otpremnice/primke*.