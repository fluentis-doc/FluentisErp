---
title: Prognoze prodaje
sidebar_position: 11
---

Ova tabela sadrži prognoze prodaje gotovih proizvoda koji se proizvode u fabrici i ima maksimalni nivo detalja na nedeljnom nivou (nedeljna prognoza prodaje).

Za distributivne proizvode ne koristi se ova tabela, već tabela sa prognozama dnevne potrošnje.

Potreba za prognozom prodaje u DDMRP-u znatno je ređa nego u klasičnom MRP-u, jer se ne koristi *Master Production Schedule (MPS)*, pošto nije potrebno unapred predviđati potražnju na isti način kao kod tradicionalnog MRP planiranja.

Prognoza prodaje je potrebna samo kada je unapred poznato da će se potražnja za gotovim proizvodom značajno promeniti u kratkom vremenskom periodu (periodu uporedivom sa ukupnim vremenom proizvodnje gotovog proizvoda).

U takvim situacijama postojeće zalihe artikala u bufferima unutar sastavnice gotovog proizvoda ne bi bile dovoljne da omoguće proizvodnju potrebnih količina gotovih proizvoda u rokovima predviđenim prodajnom prognozom.

Ako bi promena potražnje bila značajna, ali postepena i raspoređena tokom perioda dužeg od ukupnog vremena proizvodnje, prognoze prodaje ne bi bile potrebne. U tom slučaju, **procedura za ažuriranje prosečne dnevne potrošnje (ADU)** na osnovu istorijskih podataka automatski bi prilagodila ADU novom nivou potražnje, što bi dovelo do povećanja zona buffera i prosečnog nivoa zaliha.

Tipične situacije koje zahtevaju korišćenje prognoza prodaje uključuju:

- Promotivne akcije
- Sezonske oscilacije potražnje
- Ulazak na novo tržište
- Povlačenje sa tržišta
- Uvođenje novih proizvoda
- Ukidanje postojećih proizvoda