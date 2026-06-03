---
title: Uvod
sidebar_position: 1
---

# Uvod

Modul se nalazi u izborniku **Nabava > Zahtjev za nabavom** i omogućuje kreiranje, upravljanje i praćenje zahtjeva za nabavu. Korisnicima omogućuje evidentiranje potreba za nabavom materijala, robe ili usluga na temelju nedostatka zaliha, zahtjeva pojedinih odjela ili planiranih potreba poslovanja.

## Početna konfiguracija modula

Prije početka rada potrebno je definirati sljedeće šifarnike i postavke:

- [**Numeracije zahtjeva za nabavu**](/docs/configurations/tables/purchase/purchase-request-type) – definiranje numeracija koje će se koristiti za zahtjeve za nabavu.
- **Vrste zahtjeva za nabavu** – kreiranje i definiranje tipova zahtjeva za nabavu.
- [**Parametri zahtjeva za nabavu**](/docs/configurations/parameters/purchase/purchase-requests-parameters) – postavke specifične za upravljanje zahtjevima za nabavu.

## Povezanost s ostalim modulima

### Logistika

Iz izvještaja **Manjak zaliha**, dostupnog u izborniku **Logistika > Operativni izvještaji > Manjak zaliha**, moguće je automatski generirati zahtjeve za nabavu za artikle čija je raspoloživa količina manja od definirane minimalne zalihe ili točke naručivanja.

### Planiranje i proizvodnja

MRP (Material Requirements Planning) može generirati planirane nabavne naloge na temelju potreba proizvodnje i zahtjeva za materijalom.

Takve planirane naloge moguće je pretvoriti u zahtjeve za nabavu:

- automatski
- ručno, korištenjem procedure **Oslobađanje planiranih naloga**

### Zahtjevi za ponudom

Iz zahtjeva za nabavu moguće je generirati **Zahtjev za ponudom** korištenjem funkcije **Generator zahtjeva za ponudom (RDO)** dostupne unutar dokumenta zahtjeva za nabavu.

### Narudžbe dobavljača

Nakon odobrenja zahtjeva za nabavu, dokument se može pretvoriti u **Narudžbu dobavljača** korištenjem procedure **Automatsko generiranje narudžbi**.