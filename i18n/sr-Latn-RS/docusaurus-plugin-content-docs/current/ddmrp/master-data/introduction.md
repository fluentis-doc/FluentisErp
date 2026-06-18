---
title: Uvod u DDMRP šifarnike
sidebar_position: 0
---

U ovom odeljku nalaze se matični podaci o artiklima kojima se upravlja prema DDMRP logici, odnosno takozvanim *bufferima* – strateškim zalihama koje se dimenzionišu i obnavljaju prema DDMRP metodologiji.

Pre svega, potrebno je obavestiti Fluentis da je određeni artikl DDMRP buffer putem kartice [**MRP Parametri**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), izborom odgovarajuće vrednosti u polju **Politika snabdevanja** među dostupnim opcijama (*dinamički bufferi*, *fiksni bufferi*, *min-max bufferi*).

**Dinamički bufferi** predviđaju promene tokom vremena za tri karakteristične zone (zelenu, žutu i crvenu), a samim tim i promene prosečnog nivoa zaliha.

**Fiksni bufferi** koriste nepromenljive vrednosti zona, pa je i prosečan nivo zaliha konstantan. Koriste se u situacijama sa ograničenim skladišnim kapacitetom, investicionim ograničenjima, bezbednosnim zahtevima i sličnim slučajevima.

**Min-max bufferi** koriste samo crvenu i zelenu zonu za upravljanje zalihama.