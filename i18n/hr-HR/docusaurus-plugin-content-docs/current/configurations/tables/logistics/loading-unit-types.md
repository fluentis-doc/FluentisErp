---
title: Tipovi utovarnih jedinica
sidebar_position: 37
---

:::important Čemu služi
Tablica Vrste utovarnih jedinica (UDC) u Fluentisu omogućuje šifriranje i definiranje različitih kategorija utovarnih jedinica, pružajući strukturirani okvir koji olakšava rukovanje materijalima i njihovu sljedivost. Korisnici mogu unositi nove zapise, mijenjati postojeće ili ih brisati putem jednostavnog korisničkog sučelja.

Postupak pretraživanja jednostavan je i omogućuje brzo filtriranje željenih vrsta utovarnih jedinica, uz prikaz rezultata u preglednoj tablici. Svaki zapis može sadržavati ključne podatke, kao što su jedinstvena alfanumerička šifra i opis, koji jasno određuju vrstu utovarne jedinice. Učinkovito upravljanje utovarnim jedinicama ključno je za osiguravanje nesmetane i organizirane logistike te pridonosi poboljšanju operativne učinkovitosti poduzeća.
:::

Tablica omogućuje upravljanje šifriranjem različitih vrsta *utovarnih jedinica*.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

**Pretraživanje vrsta utovarnih jedinica**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici s rezultatima.

**Unos vrsta utovarnih jedinica**

Za unos novih šifri potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

#### Posebna polja

> **Tip**: Označava šifru vrste utovarne jedinice.

> **Opis**: Označava opis vrste utovarne jedinice.

> **Vrsta grupe**: Označava vrstu grupe odabranu u tablici [Vrste grupa](/docs/configurations/tables/logistics/loading-unit-group-type/), koja omogućuje definiranje načina sastavljanja dijela šifre utovarne jedinice.

> **Opis vrste grupe**: Označava opis vrste grupe.

> **Mjerna jedinica dimenzija**: Označava mjernu jedinicu u kojoj su definirane visina, širina i dubina prazne utovarne jedinice. Prilikom unosa automatski se predlaže mjerna jedinica s uključenom oznakom *Mjerna jedinica dimenzija* iz tablice [Mjerne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Visina / Širina / Dubina**: Označavaju vrijednosti visine, širine i dubine prazne utovarne jedinice, izražene u mjernoj jedinici definiranoj u polju **Mjerna jedinica dimenzija**.

> **Mjerna jedinica težine**: Označava mjernu jedinicu u kojoj je definirana težina prazne utovarne jedinice. Prilikom unosa automatski se predlaže mjerna jedinica s uključenom oznakom *Mjerna jedinica težine* iz tablice [Mjerne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Težina**: Označava vrijednost težine prazne utovarne jedinice, izraženu u mjernoj jedinici definiranoj u polju **Mjerna jedinica težine**.

> **Mjerna jedinica volumena**: Označava mjernu jedinicu u kojoj je definiran volumen prazne utovarne jedinice. Prilikom unosa automatski se predlaže mjerna jedinica s uključenom oznakom *Mjerna jedinica volumena* iz tablice [Mjerne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Volumen**: Označava vrijednost volumena prazne utovarne jedinice, izraženu u mjernoj jedinici definiranoj u polju **Mjerna jedinica težine**. Vrijednost se automatski izračunava na temelju unesenih vrijednosti u poljima **Visina / Širina / Dubina**, ali ju je moguće i ručno izmijeniti.

> **Promjenjivi volumen**: Prema zadanim postavkama ova je opcija aktivna i označava da je volumen utovarne jedinice promjenjiv, odnosno da se ukupni volumen mijenja ovisno o tome što se i na koji način utovaruje, primjerice na paletu. Ako opcija nije aktivna, volumen utovarne jedinice ne mijenja se, kao u slučaju kontejnera.

> **Vrsta ambalaže**: Omogućuje odabir vrste ambalaže koja se koristi, među vrstama unesenima u tablicu [Vrste ambalaže](/docs/configurations/tables/logistics/packing-type/).

> **Opis vrste ambalaže**: Označava opis korištene vrste ambalaže.

> **Numeriranje**: Označava numeriranje vrste utovarne jedinice.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).