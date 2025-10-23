---
title: Tipovi prijema robe
sidebar_position: 4
---

Tablica se otvara putem puta **Tablice > Nabava > Tipovi prijema robe** i koristi se za određivanje svojstava primitka robe.

Polja koja se nalaze u tablici su:  

**Šifra**: šifra vrste primitka robe.

**Opis**: opis vrste primitka robe.

**Otpremnica**: Ako je aktivirano, sustav omogućuje generiranje otpremnice iz primitka robe. Ako nije aktivirano, neće biti moguće generirati otpremnicu iz primitka robe, pa će operacije skladišnog prijema i evidentiranja otpremnice ostati nepovezane.

**Račun**: ako je aktivirano, sustav omogućuje generiranje računa iz primitka robe. Ako nije aktivirano, neće biti moguće generirati račun iz primitka robe, te će skladišna prijema ostati nepovezana.  

**Narudžbina neubrojene količine artikla**: ako je označeno, prilikom realizacije redaka narudžbe s djelomičnim količinama u istom primitku robe, ovaj će zastavica omogućiti da se količine realizirane narudžbe prikazuju po pojedinačnim stavkama bez zbrajanja količina.  

**Numeracija**: određuje [Numeraciju](/docs/configurations/tables/fluentis-numerations) i pripadajući **Opis** koji su povezani s *Vrsta primitka robe*. 

**Kontrola kvalitete**: *Vrste primitka* koje imaju ovu zastavicu aktiviranu vidljive su u formi [Uvoz artikala za kontrolu](/docs/quality/item-control/items-control/item-control-import/) unutar područja *Kvaliteta*.

**Upravljanje osnovnim sredstvima**: ova zastavica omogućuje aktivaciju [Upravljanja osnovnim sredstvima](/docs/finance-area/fixed-assets/general-overview) za tu vrstu primitka te odabir **Vrsta operacije** ckoju želite izvršiti, a u slučaju nabave to će biti *Nabavna cijena*.

:::tip NAPOMENA 
Skladište i Klasu za prijem robe treba definirati u Parametrima Narudžbi dobavljača, kartica [Zaduženje](/docs/configurations/parameters/purchase/purchase-orders-parameters).  
:::