---
title: Zaduženje skladišta primkom
sidebar_position: 1
keywords:
- Primka
- Skladište
---

Postupak se pokreće putem izbornika **Nabava > Primke > Procedure > Zaduženje skladišta primkom** te omogućuje izvršavanje ili poništavanje knjiženja artikala iz primke u skladište.

:::note Napomena
Primku je moguće proknjižiti u skladište i pomoću gumba [**Automatsko zaduženje skladišta**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) unutar samog dokumenta.
:::

:::tip Zapamtite
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir **tip nabave** definiranu u MRP parametrima artikla:

- artikli vrste **Nabava** neće biti uključeni u skladišno knjiženje;
- artikli vrste **Proizvodnja** ili **Podizvođač** bit će proknjiženi u skladište zajedno s prvom razinom sastavnice.
:::

### Filter

Omogućuju unos kriterija za pretraživanje primki, njihov odabir i knjiženje u skladište.

- **Datum zapisa zalihe**: omogućuje određivanje datuma skladišnog knjiženja.

:::important Zapamtite
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters), na kartici **Utovar**, uključena oznaka **Kreiraj zapis s datumom dokumenta**, skladišno će knjiženje uvijek biti izvršeno s datumom dokumenta, neovisno o vrijednosti polja **Datum skladišnog knjiženja** unesenoj u ovom obrascu.
Ako navedena oznaka nije uključena, koristit će se **Datum zapisa** ručno unesen u zaglavlju primke.
Ako **Datum zapisa** nije popunjen, skladišno će knjiženje biti kreirano s datumom unesenim u polje **Datum skladišnog knjiženja** u ovom obrascu.
:::

*Posebni gumbi*:

> **Traži**: pretražuje primke koje je potrebno proknjižiti u skladište.  
> **Zapis**: izvršava skladišno knjiženje odabranih primki iz gornje tablice.

### Parametri

Ako neki retci artikala u primci nemaju definirano skladište i predložak za knjiženje, u ovom obrascu korisnik može odabrati način obrade tih iznimaka.

Dostupne su sljedeće mogućnosti:

- **Nemoj knjižiti primku u cijelosti**: ne dopušta djelomično knjiženje dokumenta;
- **Ignoriraj stavke bez skladišta i predloška**: omogućuje djelomično knjiženje dokumenta;
- **Prihvati kao skladište i predložak sljedeće podatke**: omogućuje potpuno knjiženje dokumenta. Za sve artikle u odabranim primkama koji nemaju definirano skladište i predložak primijenit će se vrijednosti unesene u polja **Skladište** i **Predložak**.

:::important Zapamtite
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters), na kartici **Utovar**, uključena oznaka **Prioritet predloška skladišta i istovara**, uvijek će se koristiti **Skladište** i **Predložak** definirani u parametrima, zanemarujući vrijednosti unesene za pojedine retke artikala u primci.
:::

*Posebni gumb*

> **Spremi parametre**: sprema postavljene parametre knjiženja.

### Sažetak

Na ovoj kartici korisnik može pretraživati, pregledavati i poništavati izvršena skladišna knjiženja, kako ona provedena ovim postupkom, tako i ona izvršena izravno iz dokumenta pomoću gumba **Automatsko zaduženje**.
Podaci u donjim tablicama, **Otpremnica/Primka** i **Zapis**, odnose se na skladišno knjiženje odabrano u gornjoj tablici (nakon primjene filtra). U obje je tablice moguće dvostrukim klikom na redak otvoriti primku ili pripadajuće skladišno knjiženje.

*Posebni gumbi*:

> **Traži**: pretražuje proknjižene primke. Rezultati pretraživanja prikazuju se u tablicama rezultata.  
> **Izbriši zapise**: poništava cijelo odabrano skladišno knjiženje.  
> **Izbriši otpremnicu/primku**: uklanja skladišno knjiženje odabrane primke iz odabranog knjiženja. Ako se skladišno knjiženje odnosi samo na jednu primku, bit će u cijelosti poništeno. Ako se odnosi na više primki, njegovi će se podaci odgovarajuće ažurirati.