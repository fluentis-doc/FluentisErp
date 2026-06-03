---
title: Uvoz cijena dobavljača
sidebar_position: 3
---

# Uvoz iz cjenika dobavljača

Funkcija se pokreće putem izbornika **Nabava > Cjenici dobavljača > Procedure > Uvoz cijena dobavljača**.

Omogućuje uvoz artikala koji su prethodno učitani postupkom uvoza cjenika dobavljača ili artikala dostupnih za uvoz iz vanjskih izvora (npr. BizLink). Postupkom je moguće kreirati nove artikle, ažurirati postojeće kartice artikala te generirati novi cjenik dobavljača s ažuriranim cijenama.

:::note Napomena
Prije pokretanja uvoza potrebno je definirati mapiranje između kategorija popusta koje koristi dobavljač i kategorija popusta definiranih u sustavu. Mapiranje se definira u proceduri **Mapiranje kategorija nabavnih i prodajnih popusta**.
:::

# Filter

U glavnoj tablici prikazuju se artikli pronađeni prema zadanim kriterijima pretraživanja.

Artikle je moguće označiti za uvoz uključivanjem oznake na pojedinom retku. Artikli koji već postoje u sustavu prikazuju se različitom bojom radi lakšeg razlikovanja.

U donjoj tablici prikazuju se svi artikli označeni za uvoz.

## Dostupne funkcije

- **Uvoz** – pokreće uvoz označenih artikala prema parametrima definiranim u kartici *Parametri*.

- **Provjeri odabir** – označava sve retke trenutno odabrane u tablici.

- **Poništi odabir** – uklanja oznaku sa svih odabranih redaka.

# Parametri

U ovoj kartici određuje se koje će se informacije prenijeti na karticu artikla te na koji će se način kreirati novi cjenik dobavljača.

## Kreiranje artikala

- **Kreiraj artikle** – omogućuje automatsko kreiranje novih artikala za sve odabrane zapise koji još ne postoje u sustavu.

## Ažuriranje podataka artikla

- **Ažuriraj podatke artikla** – omogućuje odabir podataka koji će se ažurirati na postojećim artiklima.

Moguće je ažurirati sljedeće podatke:

- Opis artikla
- Komercijalni naziv
- Barkod
- Pakiranje
- Težinu
- Nomenklaturu
- Kategoriju nabavnog popusta
- Kategoriju prodajnog popusta
- Povratna ambalaža

## Unos cjenika dobavljača

- **Unos cjenik dobavljača** – kreira novi cjenik za sve odabrane artikle.

Obavezni podaci za kreiranje cjenika su:

- Datum početka valjanosti
- Valuta

## Dobavljač / Konto

- Definira dobavljača za kojeg se kreira cjenik.
- Podatak se može automatski prenijeti i na karticu artikla kao zadani dobavljač.

## Dodatni parametri za nove artikle

Sljedeće postavke koriste se samo prilikom kreiranja novih artikala:

- **Klasa artikla** – koristi se ako klasa artikla nije definirana u uvezenim podacima.

- **PDV stopa** – zadana stopa PDV-a koja će biti dodijeljena novom artiklu.

- **Jedinica mjere artikla** – definira glavnu jedinicu mjere artikla.

- **Promet nabave/prodaje** – određuje način fakturiranja za novi artikl.

- **Cijena jedinica mjere** – definira jedinicu mjere na koju se odnosi cijena iz cjenika dobavljača.

- **Jedinica mjere težine** – definira jedinicu mjere koja će se koristiti za težinu artikla.

- **Formula** – određuje formulu za automatsko ažuriranje cijena.

- **Vrsta popusta** – definira zadanu vrstu popusta za novokreirani artikl.

- **Barkod** – određuje način obrade barkoda prilikom kreiranja artikla.

# Greške

Kartica **Greška** prikazuje sve zapise koji nisu uspješno obrađeni tijekom uvoza.

U gornjoj tablici prikazuju se artikli za koje je došlo do pogreške, dok se u donjoj tablici prikazuje pripadajući kod ili opis greške.

# Rezultati

Kartica **Rezultati** prikazuje sve artikle koji su uspješno uvezeni ili ažurirani tijekom postupka.

