---
title: Cene dobavljača
sidebar_position: 2
---

# Cene dobavljača

Funkcija se pokreće putem menija **Nabavka > Cenovnici dobavljača > Procedure > Cene dobavljača**.

U ovom pregledu moguće je pregledati rezultate [uvoza artikala i cenovnika dobavljača](/docs/applications/bizlink/template-example/price-item-supplier). Svi artikli i odgovarajuće cene uvezeni iz spoljnih izvora (npr. BizLink) čuvaju se u ovoj evidenciji i mogu se pregledati i obraditi pre konačnog unosa u sistem.

Ova procedura je posebno korisna za obradu velikih kataloga dobavljača. Tokom uvoza svi artikli iz kataloga prenose se u ovaj pregled, nakon čega korisnik može izabrati samo one artikle koje želi da koristi. Na taj način moguće je proveriti nabavne cene i podatke o artiklima pre nego što se artikli kreiraju u sistemu ili uključe u cenovnik dobavljača.

## Podaci prikazani u pregledu

- **Klasa artikla** – prikazuje se samo ako artikal već postoji u sistemu. Novo uvezeni artikli bez postojeće kartice nemaju dodeljenu klasu.

- **Šifra artikla** – prati ista pravila kao i klasa artikla. Uvezeni artikli mogu se razlikovati od postojećih i vizuelno su označeni drugom bojom.

- **Dobavljač** – dobavljač iz čijeg je kataloga artikal uvezen. Nakon kreiranja artikla ovaj podatak može se automatski preneti kao podrazumevani dobavljač artikla.

- **Datum uvoza** – datum kada je izvršen uvoz podataka.

- **Datum početka važenja** – datum početka važenja cene preuzet iz izvorne datoteke ili kataloga.

- **Šifra / Opis artikla dobavljača** – šifra i naziv artikla kako ih definiše dobavljač. Ti podaci mogu se preneti i na karticu artikla u delu preferiranih dobavljača.

- **Jedinica mere** – jedinica mere korišćena u katalogu dobavljača.

- **Količina** – referentna količina na koju se odnosi definisana cena.

- **Kategorija popusta** – kategorija popusta kojoj artikal pripada. Potrebno ju je povezati sa odgovarajućom kategorijom nabavnih popusta definisanom u sistemu.

- **Potkategorija popusta** – dodatni nivo klasifikacije popusta. Korisna je kod veoma velikih cenovnika i složenih politika popusta. Ako se koristi, istu vrednost potrebno je definisati i u podešavanjima politike popusta.

:::note Napomena
Pre korišćenja funkcije **Uvoz iz cenovnika dobavljača** potrebno je definisati mapiranje između [kategorija popusta dobavljača i kategorija nabavnih popusta u sistemu](/docs/purchase/price-control/correspondence). To se definiše u proceduri [**Mapiranje kategorija nabavnih i prodajnih popusta**](/docs/purchase/price-control/definition).
:::

Nakon što se identifikuju artikli koje je potrebno uvesti, klikom na dugme **Uvoz** na alatnoj traci pokreće se procedura [Uvoz iz cena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price).