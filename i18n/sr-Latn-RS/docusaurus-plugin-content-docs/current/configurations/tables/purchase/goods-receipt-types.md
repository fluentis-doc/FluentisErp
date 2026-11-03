---
title: Tipovi prijema robe
sidebar_position: 4
---

Tabela se otvara putem menija **Tabele > Nabavka > Tipovi prijema robe** i služi za određivanje svojstava primke.

Dostupna su sledeća polja:

**Šifra**: šifra tipa primke.

**Opis**: opis tipa primke.

**Otpremnica**: ako je ova opcija aktivirana, sistem omogućava generisanje otpremnice iz primke. Ako nije aktivirana, otpremnicu neće biti moguće generisati iz primke, pa će operacije skladišnog prijema i evidentiranja otpremnice ostati nepovezane.

**Faktura**: ako je ova opcija aktivirana, sistem omogućava generisanje fakture iz primke. Ako nije aktivirana, fakturu neće biti moguće generisati iz primke, pa će operacija skladišnog prijema ostati nepovezana.

**Nesabirana količina artikla narudžbine**: ako je ova opcija aktivirana, prilikom razduživanja redova narudžbine sa delimičnim količinama unutar iste primke omogućava se prikaz razduženih količina narudžbine u zasebnim redovima artikala, bez sabiranja količina.

**Numerisanje**: određuje [Numerisanje](/docs/configurations/tables/fluentis-numerations) i pripadajući **Opis** povezane sa *tipom primke*.

**Kontrola kvaliteta**: *tipovi primki* za koje je ova opcija aktivirana vidljivi su u obrascu [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) u području *Kvalitet*.

**Osnovna sredstva**: ova opcija omogućava aktiviranje [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za taj tip primke i izbor **Tipa operacije** koja se želi izvršiti. U slučaju nabavke, reč je o operaciji *Izvorni trošak*.

:::tip Napomena
Skladište i šablon koji će se koristiti za skladišni prijem primke definišu se u parametrima narudžbina dobavljača, na kartici [Prijem](/docs/configurations/parameters/purchase/purchase-orders-parameters).
:::