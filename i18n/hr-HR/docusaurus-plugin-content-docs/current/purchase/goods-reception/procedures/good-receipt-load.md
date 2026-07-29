---
title: Zaduženje skladišta pristiglom robom
sidebar_position: 4
---

Ovaj se postupak pokreće putem izbornika **Nabava > Prijem robe > Procedure > Zaduženje skladišta pristiglom robom** te omogućuje izvršavanje ili povrat skladišnih knjiženja za artikle sadržane u dokumentu **Prijem robe**.

Obrazac se sastoji od triju kartica: **Filter**, **Parametar** i **Povrat**.

### 1. Filter

Na ovoj kartici korisnik može definirati filtre za pretraživanje zaprimanja robe koja treba knjižiti u skladište.

Moguće je filtrirati prema: **Dobavljaču**, **Broju zaprimanja**, **Datumu zaprimanja od/do**.

- **Datum zapisa**: omogućuje određivanje datuma skladišnog knjiženja.

:::important Zapamtite
Ako je u [Parametri narudžbi dobavljaču](/docs/configurations/parameters/purchase/purchase-orders-parameters) > kartica **Utovar** uključena oznaka **Kreiraj zapis s datumom dokumenta**, skladišno knjiženje uvijek će biti izvršeno s **Datumom zaprimanja** definiranim u zaglavlju dokumenta, pri čemu će se zanemariti **Datum skladišnog knjiženja** unesen u ovom obrascu.

Ako **Datum zapisa** nije popunjen, skladišno knjiženje bit će kreirano s **Datumom skladišnog knjiženja** unesenim u ovom obrascu ili, ako ni to polje nije popunjeno, s trenutnim datumom.
:::

#### Posebni gumbi

> **Traži**: pretražuje zaprimanja robe koja treba knjižiti u skladište.  
> **Utovar**: izvršava skladišno knjiženje odabranih zaprimanja robe prema parametrima definiranim na sljedećoj kartici.

### 2. Parametar

Na kartici **Parametri** moguće je, pomoću odgovarajućih oznaka, odrediti način obrade artikala koji nisu kodificirani ili nemaju definirano skladište i predložak u dokumentu.

Dostupne su sljedeće mogućnosti:

- **Ignoriraj zaprimanje koji sadrži artikle bez klase**: ne dopušta djelomično knjiženje dokumenta ako sadrži barem jedan artikl bez klase.
- **Ignoriraj artikle bez klase u zaprimanju**: omogućuje djelomično knjiženje dokumenta, pri čemu se artikli bez klase preskaču.

- **Ignoriraj zaprimanje koje sadrži stavke bez skladišta/predloška**: ne dopušta djelomično knjiženje dokumenta ako sadrži barem jedan artikl bez definiranog skladišta i predloška.
- **Ignoriraj artikle zaprimanja bez skladišta/predloška**: omogućuje djelomično knjiženje dokumenta, pri čemu se preskaču artikli koji nemaju definirano skladište i predložak.
- **Koristi ove vrijednosti za stavke bez skladišta/predloška**: osigurava potpuno knjiženje dokumenta. Za sve artikle u odabranim zaprimanjima koji nemaju definirano skladište i predložak postavljaju se vrijednosti unesene u polja **Skladište** i **Predložak**.

:::important Zapamtite
Ako je u [Parametri narudžbi dobavljačima](/docs/configurations/parameters/purchase/purchase-orders-parameters) > kartica **Utovar** uključena oznaka **Prioritet skladišta i predloška knjiženja**, uvijek će se koristiti **Skladište** i **Predložak** definirani u parametrima, pri čemu će se zanemariti vrijednosti unesene u dokumentu zaprimanja robe za svaki pojedini redak artikla. U suprotnom će prednost imati vrijednosti definirane u samom dokumentu.
:::

### 3. Povrat

Na ovoj kartici korisnik može pretraživati, pregledavati i poništavati izvršena skladišna knjiženja.

Podaci prikazani u donjim tablicama, **Prihvat robe** i **Zapisi**, odnose se na odabrano skladišno knjiženje iz gornje tablice (nakon primjene filtara). U obje donje tablice moguće je dvostrukim klikom na redak otvoriti dokument **Zaprimanje robe** odnosno pripadajuće **Skladišno knjiženje**.

#### Posebni gumbi

> **Traži**: pretražuje knjižena zaprimanja robe. Rezultati pretraživanja prikazuju se u tablicama s rezultatima.  
> **Povrat**: briše cijelo odabrano skladišno knjiženje.