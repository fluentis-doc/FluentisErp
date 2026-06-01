---
title: Zaduženje skladišta ulaznim računima
sidebar_position: 1
keywords:
- Fattura di acquisto
- Magazzino
---

Postupak se otvara putem putanje **Nabava > Ulazni računi > Procedure > Zaduženje skladišta ulaznim računima**. 

Ovaj postupak omogućuje izvođenje/ponovno izvođenje automatskog unosa u skladište članaka prisutnih na fakturi.

:::important ZAPAMTI
Računi mogu generirati skladišna kretanja samo ako su vrste Neposredni (Immediato).
:::

:::tip NAPOMENA
Ako dokument sadrži fiktivne artikle, postupak će uzeti u obzir vrstu nabave definiranu u MRP parametrima artikla:

- artikli vrste Nabava (Acquisto) neće biti uključeni u skladišnu knjižbu;
- artikli vrste Proizvodnja (Produzione) ili Kooperantska proizvodnja (Conto Lavoro) bit će knjiženi na skladište koristeći prvu razinu sastavnice (BOM-a).
:::

### Filter

Na ovoj kartici, korisnik ima mogućnost postavljanja filtera kako bi pronašao ulazne račune, odabrao ih, a zatim ih knjižio u skladištu.

**Datum zapisa zalihe**: omogućuje specificiranje datuma vezanog uz knjiženje u skladištu, ako taj datum već nije postavljen u [Parametri ulaznih računa](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > kartica *Utovar* (točnije, aktivirana zastava na *Kreiraj zapis s datumom dokumenta*).

:::important ZAPAMTI
Ako je u Parametrima ulaznih računa > kartica *Utovar* aktivirana opcija „Kreiraj zapis s datumom dokumenta”, skladišno knjiženje uvijek će biti izvršeno s datumom dokumenta, neovisno o vrijednosti unesenoj u polje *Datum zapisa zalihe* u ovom obrascu.
Ako navedena opcija nije aktivirana, koristit će se Datum skladišnog knjiženja ručno unesen u zaglavlju računa.
Ako Datum skladišnog knjiženja nije definiran, skladišno knjiženje bit će kreirano s datumom navedenim u polju Datum zapisa zalihe u ovom obrascu.
:::

*Posebni gumbi*

> **Traži**: omogućuje pretraživanje faktura za registraciju u skladištu.
> **Zaduženje**: omogućuje izvođenje knjiženja odabranih faktura u skladište, na temelju algoritama unosa i parametara unesenih na sljedećoj kartici *Parametri*.

### Parametri

Ako stavke na fakturi nemaju skladište i predložak za unos, kroz ovaj prozor korisnik ima mogućnost specificiranja načina postupanja s iznimkama za stavke članka.

Dostupne opcije su:

- **Ne knjiži cijeli račun**: ne dopušta djelomično knjiženje dokumenta;

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomično knjiženje dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: osigurava potpuno knjiženje dokumenta. Za sve artikle koji nemaju skladište i predložak u odabranim fakturama, postavlja odmah unesene podatke u polja: *Skladište* i *Predložak*.

*Posebni gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za knjiženje.

Nakon odabira faktura (iz kartice *Filter*) i postavljanja parametara, fakture se mogu knjižiti pomoću gumba *Zaduženje*.

### Sažetak

Na ovoj kartici korisnik ima mogućnost pretraživanja, pregleda i poništavanja izvršenih knjiženja koje zadovoljavaju određene uvjete poništavanja knjiženja u skladištu.

Podaci u donjim pregledima, **Računi** i **Zapis**, odnose se na odabrano knjiženje unosa u skladište u gornjem pregledu (nakon filtriranja podataka). Osim toga, u ovim posljednjim dvama pregledima moguće je pregledati fakturu i njezin unos u skladište (dvostruki klik na redak).

*Posebni gumbi*

> **Traži**: za pretraživanje učitanih faktura. Rezultat ovog postupka prikazuje se u rezultatnim pregledima.   
> **Izbriši zaduženje**: za poništavanje cjelokupnog knjiženja odabranog unosa u skladište, sa svim njezinim pojedinostima prikazanim u donja dva prikaza.
> **Povrat računa**: za poništavanje unosa dokumenta odabranog knjiženja. Ova operacija također će poništiti unos u skladište ako odgovara samo jednom dokumentu ili ažurirati njegove podatke ako odgovara više faktura.