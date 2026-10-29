---
title: Knjige PDV-a
sidebar_position: 20
---

Putanja obrasca: **Konfiguriranje > Tablice > Administracija > Knjige PDV-a**

:::tip[Fast Start]
Na ovu se tablicu odnosi postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.

Registri koje stvara Fast Start već su pripremljeni za upravljanje sljedećim vrstama dokumenata:

- domaća nabava i prodaja
- nabava i prodaja s prijenosom porezne obveze (Reverse Charge), uključujući zasebni registar za prijenos knjiženja nabave
- nabava i prodaja unutar EU-a, uključujući zasebni registar za prijenos knjiženja nabave
- nabava i prodaja izvan EU-a
- primici od prodaje
- zbirni registar za ispis obračuna PDV-a
:::

### Posebni gumbi

**Novo**: omogućuje unos novog PDV registra (knjige).

**Umetni godinu**: omogućuje unos nove godine za trenutno odabrani PDV registar.

**Otkaži**: omogućuje brisanje trenutno odabranog PDV registra.

**Prethodni pregled**: omogućuje pregled ispisa.

**Ispiši**: omogućuje ispis.

**Otkaži zaključni izvještaj**: omogućuje poništavanje konačnih ispisa registara. Otvara se dijaloški okvir u kojem je potrebno odabrati registar i razdoblje za koje se ispis poništava.

### Prvi odjeljak

**Šifra**: alfanumerička identifikacijska šifra registra.

**Opis**: opis registra koji se u pravilu prikazuje na službenim izvještajima.

**Tip registra**: unaprijed definirana vrsta registra. Posebnu pozornost treba posvetiti pravilnom postavljanju registara koji obuhvaćaju prijenos knjiženja nabave unutar EU-a ili knjiženja s prijenosom porezne obveze (Reverse Charge). Ti se registri postavljaju kao *Prodaja*. Također je potrebno pravilno razlikovati nabavu i prodaju s odgođenim PDV-om te posebni režim prema članku 74 ter Uredbe predsjednika Republike br. 633/72.

**Provjera protokola**: aktiviranjem ove oznake blokira se konačni ispis registra ako postoje praznine u numeriranju protokola ili nepravilnosti u njihovu redoslijedu.

**Za raspodjelu**: ovom se oznakom određuje da registar treba obuhvatiti postupak raspodjele ukupnih primitaka od prodaje (*ventilacija corrispettivi*).

**Uključi u obračun (podmirenje)**: određuje koji se PDV registri uključuju u ispis periodičnog obračuna PDV-a.

**Referentni zapis nabave**: polje je aktivno samo za registre prodaje i primitaka od prodaje. Služi za određivanje izvornog PDV registra nabave iz kojeg potječu podaci za raspodjelu ukupnih primitaka od prodaje.

**Opis**: opis referentnog registra nabave.

**Numeracija**: omogućuje postavljanje zasebnog brojača za svaki registar, uz uobičajene standardne opcije dostupne i za ostale brojače u sustavu. Time se zamjenjuje standardno numeriranje predviđeno za PDV registre. U talijanskoj lokalizaciji ovo se polje ne koristi.

**Opis**: opis povezanog brojača.

**Vrsta aktivnosti PDV-a**: padajući izbornik povezan s tablicom Vrsta djelatnosti PDV-a, u kojoj je moguće slobodno definirati različite vrste djelatnosti za potrebe PDV-a, primjerice „Proizvodnja” i „Nekretnine”, te im dodijeliti postotak odbitka pretporeza (*pro-rata*). Dostupna je i oznaka kojom se određuje glavna djelatnost, čije se vrijednosti zbrajaju u obračunu PDV-a.

**Opis**: opis vrste djelatnosti PDV-a.

### Drugi odjeljak

Omogućuje postavljanje brojača PDV protokola za svaku računovodstvenu godinu u polju „Početni PDV protokol”.

**Godina**: godina na koju se podaci odnose.

**Prva PDV referenca**: početni broj PDV protokola za odabranu godinu.

**Zadnja PDV referenca**: prikazuje posljednji broj PDV protokola koji je konačno ispisan u tom registru.

**Zadnji datum ispisa**: datum izvršenja posljednjeg konačnog ispisa.

**Broj posljednje ispisane stranice**: posljednji broj stranice obuhvaćen konačnim ispisom.

:::tip Napomena
Ispis ove tablice omogućuje pregled posljednjeg razdoblja koje je konačno ispisano za svaki registar i godinu.
:::

:::important Vidi također
[**VIDEOUPUTE O ADMINISTRATIVNIM TABLICAMA**](/docs/video/finance/intro)
:::