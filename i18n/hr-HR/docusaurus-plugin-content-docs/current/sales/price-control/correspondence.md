---
title: Pridruživanje kategorija popusta
sidebar_position: 5
---

U ovom obrascu moguće je pregledavati i definirati povezivanja između kategorija popusta.

Generička kategorija popusta (primjerice kategorija definirana na razini matične tvrtke) povezuje se s jednom kategorijom popusta za prodaju i jednom kategorijom popusta za nabavu.

Takvo povezivanje omogućuje pravilnu primjenu uvjeta popusta između modula nabave i prodaje.

Primjer:

- distributeri mogu preuzeti katalog artikala iz matične tvrtke putem procedure uvoza dobavljačkih cijena(/docs/purchase/purchase-price-lists/procedures/supplier-price) 
- matična tvrtka primjenjuje jednu kategoriju popusta
- distributeri mogu koristiti drugu kategoriju popusta za isti artikl

Na taj način moguće je primjenjivati različite komercijalne uvjete uz zadržavanje zajedničke baze artikala.

## Polja obrasca

- **Klasa artikla**: određuje klasu artikala kojoj pripada definirana kategorija popusta.

- **Konto / Podkonto / Naziv**: prikazuje poslovnog partnera kojem je dodijeljena kategorija popusta.

- **Kategorija popusta prodaje**: kategorija popusta koja se koristi kada poslovni partner prodaje artikl.

- **Kategorija popusta nabave**: kategorija popusta koja se koristi kada poslovni partner nabavlja artikl.

- **Formula ažuriranja politike cijena**: određuje formulu koja će se koristiti u procedurama ažuriranja cijena.

- **Od datuma valjanosti**: datum od kojeg se definirano povezivanje primjenjuje.

  Na taj je način moguće koristiti različite kategorije popusta za različita vremenska razdoblja.

- **Kategorija rabata**: generička kategorija popusta definirana na razini matične tvrtke.

  Ovo je polje koje povezuje modul **Nabava** s modulom **Prodaja**.