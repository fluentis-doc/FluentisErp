---
title: Cijene dobavljača
sidebar_position: 2
---

# Cijene dobavljača

Funkcija se pokreće putem izbornika **Nabava > Cjenici dobavljača > Procedure > Cijene dobavljača**.

U ovom pregledu moguće je pregledavati rezultate [uvoza artikala i cjenika dobavljača](/docs/applications/bizlink/template-example/price-item-supplier). Svi artikli i pripadajuće cijene uvezeni iz vanjskih izvora (npr. BizLink) pohranjuju se u ovu evidenciju te ih je moguće pregledavati i obrađivati prije konačnog unosa u sustav.

Ova procedura posebno je korisna za obradu velikih kataloga dobavljača. Tijekom uvoza svi artikli iz kataloga prenose se u ovaj pregled, nakon čega korisnik može odabrati samo one artikle koje želi koristiti. Na taj način moguće je provjeriti nabavne cijene i podatke artikala prije nego što se artikli kreiraju u sustavu ili uključe u cjenik dobavljača.

## Podaci prikazani u pregledu

- **Klasa artikla** – prikazuje se samo ako artikl već postoji u sustavu. Novo uvezeni artikli bez postojeće kartice nemaju dodijeljenu klasu.

- **Šifra artikla** – slijedi ista pravila kao i klasa artikla. Uvezeni artikli mogu se razlikovati od postojećih i vizualno su označeni drugačijom bojom.

- **Dobavljač** – dobavljač iz čijeg je kataloga artikl uvezen. Nakon kreiranja artikla podatak se može automatski prenijeti kao zadani dobavljač artikla.

- **Datum uvoza** – datum kada je izvršen uvoz podataka.

- **Datum početka važenja** – datum početka važenja cijene preuzet iz izvorne datoteke ili kataloga.

- **Šifra / Opis artikla dobavljača** – šifra i naziv artikla kako ih definira dobavljač. Ti se podaci mogu prenijeti i na karticu artikla u dijelu preferiranih dobavljača.

- **Jedinica mjere** – jedinica mjere korištena u katalogu dobavljača.

- **Količina** – referentna količina na koju se odnosi definirana cijena.

- **Kategorija popusta** – kategorija popusta kojoj artikl pripada. Potrebno ju je povezati s odgovarajućom kategorijom nabavnih popusta definiranoj u sustavu.

- **Potkategorija popusta** – dodatna razina klasifikacije popusta. Korisna je kod vrlo velikih cjenika i složenih politika popusta. Ako se koristi, istu vrijednost potrebno je definirati i u postavkama politike popusta.

:::note Napomena
Prije korištenja funkcije **Uvoz iz cjenika dobavljača** potrebno je definirati mapiranje između [kategorija popusta dobavljača i kategorija nabavnih popusta u sustavu](/docs/purchase/price-control/correspondence). To se definira u proceduri [**Mapiranje kategorija nabavnih i prodajnih popusta**](/docs/purchase/price-control/definition).
:::

Nakon što se identificiraju artikli koje je potrebno uvesti, klikom na gumb **Uvoz** na alatnoj traci pokreće se procedura [Uvoz iz cijena dobavljača](/docs/purchase/purchase-price-lists/procedures/import-price).