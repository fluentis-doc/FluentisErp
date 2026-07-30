---
title: Zaduženje skladišta pristiglom robom
sidebar_position: 4
---

Ovaj postupak pokreće se putem menija **Nabavka > Prijem robe > Procedure > Zaduženje skladišta pristiglom robom** i omogućava izvršavanje ili povraćaj skladišnih knjiženja za artikle sadržane u dokumentu **Prijem robe**.

Obrazac se sastoji od tri kartice: **Filter**, **Parametri** i **Povraćaj**.

### 1. Filter

Na ovoj kartici korisnik može definisati filtere za pretragu prijema robe koje treba knjižiti u skladište.

Moguće je filtrirati prema: **Dobavljaču**, **Broju prijema**, **Datumu prijema od/do**.

- **Datum zapisa**: omogućava određivanje datuma skladišnog knjiženja.

:::important Zapamtite
Ako je u [Parametri narudžbina dobavljaču](/docs/configurations/parameters/purchase/purchase-orders-parameters) > kartica **Utovar** uključena oznaka **Kreiraj zapis sa datumom dokumenta**, skladišno knjiženje uvek će biti izvršeno sa **Datumom prijema** definisanim u zaglavlju dokumenta, pri čemu će biti zanemaren **Datum skladišnog knjiženja** unet u ovom obrascu.

Ako **Datum zapisa** nije popunjen, skladišno knjiženje biće kreirano sa **Datumom skladišnog knjiženja** unetim u ovom obrascu ili, ako ni to polje nije popunjeno, sa trenutnim datumom.
:::

#### Specifična dugmad

> **Traži**: pretražuje prijeme robe koje treba knjižiti u skladište.  
> **Utovar**: izvršava skladišno knjiženje izabranih prijema robe prema parametrima definisanim na sledećoj kartici.

### 2. Parametri

Na kartici **Parametri** moguće je, pomoću odgovarajućih oznaka, odrediti način obrade artikala koji nisu kodifikovani ili nemaju definisano skladište i predložak u dokumentu.

Dostupne su sledeće mogućnosti:

- **Ignoriši prijem koji sadrži artikle bez klase**: ne dozvoljava delimično knjiženje dokumenta ako sadrži barem jedan artikal bez klase.
- **Ignoriši artikle bez klase u prijemu**: omogućava delimično knjiženje dokumenta, pri čemu se artikli bez klase preskaču.

- **Ignoriši prijem koji sadrži stavke bez skladišta/predloška**: ne dozvoljava delimično knjiženje dokumenta ako sadrži barem jedan artikal bez definisanog skladišta i predloška.
- **Ignoriši artikle prijema bez skladišta/predloška**: omogućava delimično knjiženje dokumenta, pri čemu se preskaču artikli koji nemaju definisano skladište i predložak.
- **Koristi ove vrednosti za stavke bez skladišta/predloška**: obezbeđuje potpuno knjiženje dokumenta. Za sve artikle u izabranim prijemima koji nemaju definisano skladište i predložak postavljaju se vrednosti unete u polja **Skladište** i **Predložak**.

:::important Zapamtite
Ako je u [Parametri narudžbina dobavljačima](/docs/configurations/parameters/purchase/purchase-orders-parameters) > kartica **Utovar** uključena oznaka **Prioritet skladišta i predloška knjiženja**, uvek će se koristiti **Skladište** i **Predložak** definisani u parametrima, pri čemu će biti zanemarene vrednosti unete u dokument prijema robe za svaki pojedinačni red artikla. U suprotnom će prednost imati vrednosti definisane u samom dokumentu.
:::

### 3. Povraćaj

Na ovoj kartici korisnik može pretraživati, pregledati i poništavati izvršena skladišna knjiženja.

Podaci prikazani u donjim tabelama, **Prijem robe** i **Zapisi**, odnose se na izabrano skladišno knjiženje iz gornje tabele (nakon primene filtera). U obe donje tabele moguće je dvostrukim klikom na red otvoriti dokument **Prijem robe**, odnosno pripadajuće **Skladišno knjiženje**.

#### Specifična dugmad

> **Traži**: pretražuje knjižene prijeme robe. Rezultati pretrage prikazuju se u tabelama sa rezultatima.  
> **Povraćaj**: briše celo izabrano skladišno knjiženje.