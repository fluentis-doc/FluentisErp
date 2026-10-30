---
title: Tipovi utovarnih jedinica
sidebar_position: 37
---

:::important Čemu služi
Tabela Tipovi utovarnih jedinica (UDC) u Fluentisu omogućava šifriranje i definisanje različitih kategorija utovarnih jedinica, pružajući strukturirani okvir koji olakšava rukovanje materijalima i njihovu sledljivost. Korisnici mogu unositi nove zapise, menjati postojeće ili ih brisati putem jednostavnog korisničkog interfejsa.

Postupak pretraživanja je jednostavan i omogućava brzo filtriranje željenih tipova utovarnih jedinica, uz prikaz rezultata u preglednoj tabeli. Svaki zapis može sadržati ključne podatke, kao što su jedinstvena alfanumerička šifra i opis, koji jasno određuju tip utovarne jedinice. Efikasno upravljanje utovarnim jedinicama ključno je za obezbeđivanje nesmetane i organizovane logistike i doprinosi poboljšanju operativne efikasnosti preduzeća.
:::

Tabela omogućava upravljanje šifriranjem različitih *tipova utovarnih jedinica*.

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

**Pretraživanje tipova utovarnih jedinica**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos tipova utovarnih jedinica**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

#### Posebna polja

> **Tip**: Označava šifru tipa utovarne jedinice.

> **Opis**: Označava opis tipa utovarne jedinice.

> **Tip grupe**: Označava tip grupe odabran u tabeli [Tipovi grupa](/docs/configurations/tables/logistics/loading-unit-group-type/), koji omogućava definisanje načina sastavljanja dela šifre utovarne jedinice.

> **Opis tipa grupe**: Označava opis tipa grupe.

> **Merna jedinica dimenzija**: Označava mernu jedinicu u kojoj su definisane visina, širina i dubina prazne utovarne jedinice. Prilikom unosa automatski se predlaže merna jedinica sa uključenom oznakom *Merna jedinica dimenzija* iz tabele [Merne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Visina / Širina / Dubina**: Označavaju vrednosti visine, širine i dubine prazne utovarne jedinice, izražene u mernoj jedinici definisanoj u polju **Merna jedinica dimenzija**.

> **Merna jedinica težine**: Označava mernu jedinicu u kojoj je definisana težina prazne utovarne jedinice. Prilikom unosa automatski se predlaže merna jedinica sa uključenom oznakom *Merna jedinica težine* iz tabele [Merne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Težina**: Označava vrednost težine prazne utovarne jedinice, izraženu u mernoj jedinici definisanoj u polju **Merna jedinica težine**.

> **Merna jedinica zapremine**: Označava mernu jedinicu u kojoj je definisana zapremina prazne utovarne jedinice. Prilikom unosa automatski se predlaže merna jedinica sa uključenom oznakom *Merna jedinica zapremine* iz tabele [Merne jedinice](/docs/configurations/tables/general-settings/measurement-units/).

> **Zapremina**: Označava vrednost zapremine prazne utovarne jedinice, izraženu u mernoj jedinici definisanoj u polju **Merna jedinica zapremine**. Vrednost se automatski izračunava na osnovu unetih vrednosti u poljima **Visina / Širina / Dubina**, ali ju je moguće i ručno izmeniti.

> **Promenljiva zapremina**: Ova opcija je podrazumevano aktivna i označava da je zapremina utovarne jedinice promenljiva, odnosno da se ukupna zapremina menja u zavisnosti od toga šta se i na koji način utovaruje, na primer na paletu. Ako opcija nije aktivna, zapremina utovarne jedinice se ne menja, kao u slučaju kontejnera.

> **Tip ambalaže**: Omogućava odabir tipa ambalaže koji se koristi, među tipovima unetim u tabelu [Tipovi ambalaže](/docs/configurations/tables/logistics/packing-type/).

> **Opis tipa ambalaže**: Označava opis korišćenog tipa ambalaže.

> **Numerisanje**: Označava numerisanje tipa utovarne jedinice.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).