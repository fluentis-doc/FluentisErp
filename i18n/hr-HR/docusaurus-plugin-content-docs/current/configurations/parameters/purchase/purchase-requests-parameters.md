---
title: Parametri zahtjeva za nabavu
sidebar_position: 5
---

Parametri zahtjeva za nabavu omogućuju definiranje osnovnih postavki za njihovo pravilno upravljanje u skladu sa zahtjevima pojedine tvrtke.

#### Gumbi

> **Spremi**: omogućuje spremanje postavljenih parametara.

> **Vrati izvorne vrijednosti**: omogućuje vraćanje parametara na početne vrijednosti.

### Općenito

**Nulta cijena ako nema cjenika**: cijena se traži u cjenicima. Ako cijena nije pronađena, a ova je opcija aktivirana, u retku zahtjeva za nabavu postavlja se cijena 0. Ako opcija nije aktivirana, a nije aktiviran ni drugi parametar, sustav u šifarniku artikala traži posljednju nabavnu cijenu. Ako je ne pronađe, postavlja cijenu 0.

**Posljednja nabavna cijena ako nema cjenika**: ako je ova opcija aktivirana, a cijena nije pronađena u cjeniku niti je pronađena posljednja nabavna cijena u šifarniku artikala, sustav uzima najveću cijenu među zahtjevima za nabavu istog dobavljača i istog artikla.

**Rastvori sastavnicu**: ako je opcija aktivirana, prilikom unosa artikla on se zamjenjuje prvim nivoom svoje sastavnice, ako ona postoji. Umjesto artikla „gotov proizvod”, zahtjev će se popuniti stavkama iz sastavnice unesenog artikla.

### Analitika

Na ovoj se kartici određuje redoslijed prioriteta za dohvat mjesta troška (CdC) ili mjesta dobiti (CdP) u retku dokumenta.

Prioriteti se mogu mijenjati pomoću gumba:

> **Pomakni gore** i **Pomakni dolje**

**Zadane vrijednosti**: mjesto troška ili mjesto dobiti preuzima se iz vrste fakturiranja, ako je ondje definirano. Za više informacija pogledajte tablicu [Vrste fakturiranja nabave](/docs/configurations/tables/purchase/purchase-invoices-type). Ako nije definirano u vrsti fakturiranja, sustav ga traži u *šifarniku dobavljača*. Ako ga ni ondje nema, traži ga u *šifarniku artikala*.