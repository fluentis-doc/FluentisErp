---
title: Uvoz cena dobavljača
sidebar_position: 3
---

# Uvoz iz cenovnika dobavljača

Funkcija se pokreće putem menija **Nabavka > Cenovnici dobavljača > Procedure > Uvoz cena dobavljača**.

Omogućava uvoz artikala koji su prethodno učitani postupkom uvoza cenovnika dobavljača ili artikala dostupnih za uvoz iz spoljnih izvora (npr. BizLink). Postupkom je moguće kreirati nove artikle, ažurirati postojeće kartice artikala i generisati novi cenovnik dobavljača sa ažuriranim cenama.

:::note Napomena
Pre pokretanja uvoza potrebno je definisati mapiranje između kategorija popusta koje koristi dobavljač i kategorija popusta definisanih u sistemu. Mapiranje se definiše u proceduri **Mapiranje kategorija nabavnih i prodajnih popusta**.
:::

# Filter

U glavnoj tabeli prikazuju se artikli pronađeni prema zadatim kriterijumima pretrage.

Artikle je moguće označiti za uvoz uključivanjem oznake na pojedinačnom redu. Artikli koji već postoje u sistemu prikazuju se različitom bojom radi lakšeg razlikovanja.

U donjoj tabeli prikazuju se svi artikli označeni za uvoz.

## Dostupne funkcije

- **Uvoz** – pokreće uvoz označenih artikala prema parametrima definisanim na kartici *Parametri*.

- **Proveri izbor** – označava sve redove trenutno izabrane u tabeli.

- **Poništi izbor** – uklanja oznaku sa svih izabranih redova.

# Parametri

Na ovoj kartici određuje se koje će informacije biti prenete na karticu artikla i na koji način će biti kreiran novi cenovnik dobavljača.

## Kreiranje artikala

- **Kreiraj artikle** – omogućava automatsko kreiranje novih artikala za sve izabrane zapise koji još ne postoje u sistemu.

## Ažuriranje podataka artikla

- **Ažuriraj podatke artikla** – omogućava izbor podataka koji će biti ažurirani na postojećim artiklima.

Moguće je ažurirati sledeće podatke:

- Opis artikla
- Komercijalni naziv
- Barkod
- Pakovanje
- Težinu
- Nomenklaturu
- Kategoriju nabavnog popusta
- Kategoriju prodajnog popusta
- Povratnu ambalažu

## Unos cenovnika dobavljača

- **Unos cenovnika dobavljača** – kreira novi cenovnik za sve izabrane artikle.

Obavezni podaci za kreiranje cenovnika su:

- Datum početka važenja
- Valuta

## Dobavljač / Konto

- Definiše dobavljača za kojeg se kreira cenovnik.
- Podatak se može automatski preneti i na karticu artikla kao podrazumevani dobavljač.

## Dodatni parametri za nove artikle

Sledeća podešavanja koriste se samo prilikom kreiranja novih artikala:

- **Klasa artikla** – koristi se ako klasa artikla nije definisana u uvezenim podacima.

- **Stopa PDV-a** – podrazumevana stopa PDV-a koja će biti dodeljena novom artiklu.

- **Jedinica mere artikla** – definiše glavnu jedinicu mere artikla.

- **Promet nabavke/prodaje** – određuje način fakturisanja za novi artikal.

- **Cena jedinice mere** – definiše jedinicu mere na koju se odnosi cena iz cenovnika dobavljača.

- **Jedinica mere težine** – definiše jedinicu mere koja će se koristiti za težinu artikla.

- **Formula** – određuje formulu za automatsko ažuriranje cena.

- **Tip popusta** – definiše podrazumevani tip popusta za novokreirani artikal.

- **Barkod** – određuje način obrade barkoda prilikom kreiranja artikla.

# Greške

Kartica **Greška** prikazuje sve zapise koji nisu uspešno obrađeni tokom uvoza.

U gornjoj tabeli prikazuju se artikli za koje je došlo do greške, dok se u donjoj tabeli prikazuje odgovarajući kod ili opis greške.

# Rezultati

Kartica **Rezultati** prikazuje sve artikle koji su uspešno uvezeni ili ažurirani tokom postupka.