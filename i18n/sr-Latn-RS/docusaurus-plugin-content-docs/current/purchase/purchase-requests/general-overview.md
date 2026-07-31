---
title: Uvod
sidebar_position: 1
---

# Uvod

Modul se nalazi u meniju **Nabavka > Zahtev za nabavku** i omogućava kreiranje, upravljanje i praćenje zahteva za nabavku. Korisnicima omogućava evidentiranje potreba za nabavkom materijala, robe ili usluga na osnovu nedostatka zaliha, zahteva pojedinih odeljenja ili planiranih potreba poslovanja.

## Početna konfiguracija modula

Pre početka rada potrebno je definisati sledeće šifarnike i podešavanja:

- [**Numeracije zahteva za nabavku**](/docs/configurations/tables/purchase/purchase-request-type) – definisanje numeracija koje će se koristiti za zahteve za nabavku.
- **Tipovi zahteva za nabavku** – kreiranje i definisanje tipova zahteva za nabavku.
- [**Parametri zahteva za nabavku**](/docs/configurations/parameters/purchase/purchase-requests-parameters) – podešavanja specifična za upravljanje zahtevima za nabavku.

## Povezanost sa ostalim modulima

### Logistika

Iz izveštaja **Manjak zaliha**, dostupnog u meniju **Logistika > Operativni izveštaji > Manjak zaliha**, moguće je automatski generisati zahteve za nabavku za artikle čija je raspoloživa količina manja od definisane minimalne zalihe ili tačke naručivanja.

### Planiranje i proizvodnja

MRP (Material Requirements Planning) može generisati planirane naloge nabavke na osnovu potreba proizvodnje i zahteva za materijalom.

Takve planirane naloge moguće je pretvoriti u zahteve za nabavku:

- automatski
- ručno, korišćenjem procedure **Oslobađanje planiranih naloga**

### Zahtevi za ponudu

Iz zahteva za nabavku moguće je generisati **Zahtev za ponudu** korišćenjem funkcije **Generator zahteva za ponudu (RDO)** dostupne u okviru dokumenta zahteva za nabavku.

### Narudžbine dobavljača

Nakon odobrenja zahteva za nabavku, dokument se može pretvoriti u **Narudžbinu dobavljača** korišćenjem procedure **Automatsko generisanje narudžbina**.