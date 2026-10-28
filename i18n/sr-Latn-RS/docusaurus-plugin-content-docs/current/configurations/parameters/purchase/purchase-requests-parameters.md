---
title: Parametri zahteva za nabavku
sidebar_position: 5
---

Parametri zahteva za nabavku omogućavaju definisanje osnovnih podešavanja za njihovo pravilno upravljanje u skladu sa zahtevima pojedinačnog preduzeća.

#### Dugmad

> **Sačuvaj**: omogućava čuvanje podešenih parametara.

> **Vrati izvorne vrednosti**: omogućava vraćanje parametara na početne vrednosti.

### Opšte

**Nulta cena ako ne postoji cenovnik**: cena se traži u cenovnicima. Ako cena nije pronađena, a ova opcija je aktivirana, u redu zahteva za nabavku postavlja se cena 0. Ako opcija nije aktivirana, a nije aktiviran ni drugi parametar, sistem u šifarniku artikala traži poslednju nabavnu cenu. Ako je ne pronađe, postavlja cenu 0.

**Poslednja nabavna cena ako ne postoji cenovnik**: ako je ova opcija aktivirana, a cena nije pronađena u cenovniku niti je u šifarniku artikala pronađena poslednja nabavna cena, sistem uzima najveću cenu među zahtevima za nabavku istog dobavljača i istog artikla.

**Rastvori sastavnicu**: ako je opcija aktivirana, prilikom unosa artikla on se zamenjuje prvim nivoom svoje sastavnice, ako ona postoji. Umesto artikla „gotov proizvod”, zahtev će biti popunjen stavkama iz sastavnice unetog artikla.

### Analitika

Na ovoj kartici određuje se redosled prioriteta za preuzimanje troškovnog mesta (CdC) ili profitnog mesta (CdP) u redu dokumenta.

Prioriteti se mogu menjati pomoću dugmadi:

> **Pomeri nagore** i **Pomeri nadole**

**Podrazumevane vrednosti**: troškovno ili profitno mesto preuzima se iz vrste fakturisanja, ako je tamo definisano. Za više informacija pogledajte tabelu [Vrste nabavnog fakturisanja](/docs/configurations/tables/purchase/purchase-invoices-type). Ako podatak nije definisan u vrsti fakturisanja, sistem ga traži u *šifarniku dobavljača*. Ako ga nema ni tamo, traži ga u *šifarniku artikala*.