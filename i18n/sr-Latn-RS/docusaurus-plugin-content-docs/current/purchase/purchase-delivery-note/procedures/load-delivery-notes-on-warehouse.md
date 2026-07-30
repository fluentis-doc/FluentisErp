---
title: Zaduženje skladišta primkom
sidebar_position: 1
keywords:
- Primka
- Skladište
---

Postupak se pokreće putem menija **Nabavka > Primke > Procedure > Zaduženje skladišta primkom** i omogućava izvršavanje ili poništavanje knjiženja artikala iz primke u skladište.

:::
Primku je moguće proknjižiti u skladište i pomoću dugmeta [**Automatsko zaduženje skladišta**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) unutar samog dokumenta.
:::

:::
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir **tip nabavke** definisan u MRP parametrima artikla:

- artikli tipa **Nabavka** neće biti uključeni u skladišno knjiženje;
- artikli tipa **Proizvodnja** ili **Podizvođač** biće proknjiženi u skladište zajedno sa prvim nivoom sastavnice.
:::

### Filter

Omogućava unos kriterijuma za pretragu primki, njihov izbor i knjiženje u skladište.

- **Datum zapisa zalihe**: omogućava određivanje datuma skladišnog knjiženja.

:::
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters), na kartici **Utovar**, uključena oznaka **Kreiraj zapis sa datumom dokumenta**, skladišno knjiženje će uvek biti izvršeno sa datumom dokumenta, bez obzira na vrednost polja **Datum skladišnog knjiženja** unetu u ovom obrascu.

Ako navedena oznaka nije uključena, koristiće se **Datum zapisa** ručno unet u zaglavlju primke.

Ako **Datum zapisa** nije popunjen, skladišno knjiženje biće kreirano sa datumom unetim u polje **Datum skladišnog knjiženja** u ovom obrascu.
:::

*Specifična dugmad*:

> **Traži**: pretražuje primke koje je potrebno proknjižiti u skladište.  
> **Zapis**: izvršava skladišno knjiženje izabranih primki iz gornje tabele.

### Parametri

Ako neki redovi artikala u primci nemaju definisano skladište i predložak za knjiženje, u ovom obrascu korisnik može izabrati način obrade tih izuzetaka.

Dostupne su sledeće mogućnosti:

- **Nemoj knjižiti primku u celosti**: ne dozvoljava delimično knjiženje dokumenta;
- **Ignoriši stavke bez skladišta i predloška**: omogućava delimično knjiženje dokumenta;
- **Prihvati kao skladište i predložak sledeće podatke**: omogućava potpuno knjiženje dokumenta. Za sve artikle u izabranim primkama koji nemaju definisano skladište i predložak primeniće se vrednosti unete u polja **Skladište** i **Predložak**.

:::
Ako je u [Parametrima nabavne primke](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters), na kartici **Utovar**, uključena oznaka **Prioritet predloška skladišta i istovara**, uvek će se koristiti **Skladište** i **Predložak** definisani u parametrima, zanemarujući vrednosti unete za pojedine redove artikala u primci.
:::

*Specifično dugme*

> **Sačuvaj parametre**: čuva postavljene parametre knjiženja.

### Sažetak

Na ovoj kartici korisnik može pretraživati, pregledati i poništavati izvršena skladišna knjiženja, kako ona sprovedena ovim postupkom, tako i ona izvršena direktno iz dokumenta pomoću dugmeta **Automatsko zaduženje**.

Podaci u donjim tabelama, **Otpremnica/Primka** i **Zapis**, odnose se na skladišno knjiženje izabrano u gornjoj tabeli (nakon primene filtera). U obe tabele moguće je dvostrukim klikom na red otvoriti primku ili pripadajuće skladišno knjiženje.

*Specifična dugmad*:

> **Traži**: pretražuje proknjižene primke. Rezultati pretrage prikazuju se u tabelama rezultata.  
> **Obriši zapise**: poništava celo izabrano skladišno knjiženje.  
> **Obriši otpremnicu/primku**: uklanja skladišno knjiženje izabrane primke iz izabranog knjiženja. Ako se skladišno knjiženje odnosi samo na jednu primku, biće u potpunosti poništeno. Ako se odnosi na više primki, njegovi podaci će biti odgovarajuće ažurirani.