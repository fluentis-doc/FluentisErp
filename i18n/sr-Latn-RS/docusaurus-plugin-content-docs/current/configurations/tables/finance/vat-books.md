---
title: Knjige PDV-a
sidebar_position: 20
---

Putanja obrasca: **Konfiguracija > Tabele > Administracija > PDV knjige**

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.

Registri koje kreira Fast Start već su pripremljeni za upravljanje sledećim vrstama dokumenata:

- domaća nabavka i prodaja
- nabavka i prodaja sa prenosom poreske obaveze (Reverse Charge), uključujući zaseban registar za prenos knjiženja nabavke
- nabavka i prodaja unutar EU, uključujući zaseban registar za prenos knjiženja nabavke
- nabavka i prodaja izvan EU
- primici od prodaje
- zbirni registar za štampanje obračuna PDV-a
:::

### Posebna dugmad

**Novo**: omogućava unos novog PDV registra (knjige).

**Unesi godinu**: omogućava unos nove godine za trenutno odabrani PDV registar.

**Otkaži**: omogućava brisanje trenutno odabranog PDV registra.

**Pregled pre štampanja**: omogućava pregled ispisa.

**Štampaj**: omogućava štampanje.

**Poništi završni izveštaj**: omogućava poništavanje konačnih ispisa registara. Otvara se dijaloški okvir u kojem je potrebno odabrati registar i period za koji se ispis poništava.

### Prvi odeljak

**Šifra**: alfanumerička identifikaciona šifra registra.

**Opis**: opis registra koji se po pravilu prikazuje u zvaničnim izveštajima.

**Tip registra**: unapred definisan tip registra. Posebnu pažnju treba posvetiti pravilnom podešavanju registara koji obuhvataju prenos knjiženja nabavke unutar EU ili knjiženja sa prenosom poreske obaveze (Reverse Charge). Ti registri podešavaju se kao *Prodaja*. Takođe je potrebno pravilno razlikovati nabavku i prodaju sa odloženim PDV-om i poseban režim prema članu 74 ter Uredbe predsednika Republike br. 633/72.

**Provera protokola**: aktiviranjem ove oznake blokira se konačno štampanje registra ako postoje praznine u numerisanju protokola ili nepravilnosti u njihovom redosledu.

**Za raspodelu**: ovom oznakom određuje se da registar treba da obuhvati postupak raspodele ukupnih primitaka od prodaje (*ventilacija corrispettivi*).

**Uključi u obračun (poravnanje)**: određuje koji se PDV registri uključuju u štampanje periodičnog obračuna PDV-a.

**Referentni registar nabavke**: polje je aktivno samo za registre prodaje i primitaka od prodaje. Služi za određivanje izvornog PDV registra nabavke iz kojeg potiču podaci za raspodelu ukupnih primitaka od prodaje.

**Opis**: opis referentnog registra nabavke.

**Numerisanje**: omogućava podešavanje zasebnog brojača za svaki registar, uz uobičajene standardne opcije dostupne i za ostale brojače u sistemu. Time se zamenjuje standardno numerisanje predviđeno za PDV registre. U italijanskoj lokalizaciji ovo polje se ne koristi.

**Opis**: opis povezanog brojača.

**Tip aktivnosti PDV-a**: padajući meni povezan sa tabelom Tip aktivnosti PDV-a, u kojoj je moguće slobodno definisati različite tipove delatnosti za potrebe PDV-a, na primer „Proizvodnja” i „Nekretnine”, i dodeliti im procenat odbitka prethodnog poreza (*pro-rata*). Dostupna je i oznaka kojom se određuje glavna delatnost, čije se vrednosti sabiraju u obračunu PDV-a.

**Opis**: opis tipa aktivnosti PDV-a.

### Drugi odeljak

Omogućava podešavanje brojača PDV protokola za svaku računovodstvenu godinu u polju „Početni PDV protokol”.

**Godina**: godina na koju se podaci odnose.

**Prva PDV referenca**: početni broj PDV protokola za odabranu godinu.

**Poslednja PDV referenca**: prikazuje poslednji broj PDV protokola koji je konačno odštampan u tom registru.

**Datum poslednjeg štampanja**: datum izvršenja poslednjeg konačnog štampanja.

**Broj poslednje odštampane stranice**: poslednji broj stranice obuhvaćen konačnim štampanjem.

:::tip Napomena
Štampanje ove tabele omogućava pregled poslednjeg perioda koji je konačno odštampan za svaki registar i godinu.
:::

:::important Pogledajte i
[**VIDEO-UPUTSTVA O ADMINISTRATIVNIM TABELAMA**](/docs/video/finance/intro)
:::