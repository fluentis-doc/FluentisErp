---
title: Inventar
sidebar_position: 6
---

Ovaj postupak koristi se za popunjavanje inventarne liste koja je kreirana u wpf s artiklima koji se čitaju pomoću barkoda. Ako se artikl pročita drugi put (isti Klasa/Kod/Lot (ako se upravlja po lotovima)) i navede na istoj lokaciji kao i prvi put, pojavit će se skočni prozor koji pita želite li **Dodati** ili **Zamijeniti** količinu koja je prethodno pročitana.

Za korištenje ovog obrasca nije potrebno unijeti nikakve parametre u tablicu [Parametri utovara/istovara po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note NAPOMENA
Moguće je promijeniti ponašanje inventarne liste u vezi s lokacijom pomoću zastavice **Zadrži lokaciju** u tablici [Vrste inventarnih lista](/docs/configurations/tables/logistics/stock-lists-types). Ako je ova zastavica aktivirana, lokacija koja je unesena tijekom inventara s WMS-om neće se mijenjati sve dok se ne pročita druga lokacija; međutim, ako je deaktivirana, lokacija će se morati unijeti svaki put prije potvrde artikla.  
:::

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu koja se odnosi na [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).

