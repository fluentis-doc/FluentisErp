---
title: Uvod
sidebar_position: 1
---

# Uvod

Modul se nalazi u izborniku **Prodaja > Trgovački predstavnici (Agenti)**.

Modul pruža cjelovito rješenje za upravljanje, obračun i kontrolu provizija prodajnih agenata. Omogućuje automatski izračun ostvarenih provizija, generiranje obračuna i likvidacija te upravljanje naknadama za vanjske suradnike i zastupnike.

## Glavne funkcionalnosti

- **Upravljanje i obračun provizija** – sustav omogućuje definiranje, obračun i praćenje provizija agenata na temelju ostvarenih prodaja i ugovorenih uvjeta.

- **Generiranje obračuna provizija** – moguće je kreirati periodične obračune koji objedinjeno prikazuju sve ostvarene provizije za odabrano razdoblje.

- **Obračun naknada vanjskim suradnicima** – podržano je kreiranje posebnih naknada za profesionalne suradnike i zastupnike uz detaljno praćenje isplata.

- **Ispis obračuna i dokumentacije** – omogućuje ispis izvještaja, obračunskih listova i dokumentacije vezane uz provizije i izvršene obračune.

- **Izvještavanje i analitika** – dostupni su izvještaji za praćenje ostvarenih provizija, analiza prodajnih rezultata i procjenu uspješnosti agenata.

## Automatizacija i integracija

Modul obračuna agenata integriran je s ostalim područjima sustava Fluentis ERP te automatski preuzima podatke o prodaji i fakturiranju. Time se osigurava konzistentnost podataka i smanjuje mogućnost pogrešaka tijekom obračuna provizija.

Integracija omogućuje:

- automatsko preuzimanje podataka iz prodajnih dokumenata
- povezivanje provizija s računima i naplatama
- jednostavnije usklađivanje između prodaje, fakturiranja i obračuna agenata

Modul je također povezan s područjem **Administracije - Financije i računovodstvo**, gdje se obračuni provizija mogu automatski pretvoriti u obračune naknada za primatelje primitaka. Na temelju tih podataka moguće je automatski evidentirati:

- porez i prirez
- doprinose
- ENASARCO obveze (ako se koriste)
- ostala zakonska davanja

Podaci o obračunima uključuju se i u godišnje porezne evidencije te ostale propisane izvještaje.

## Preduvjeti za korištenje

Prije početka rada potrebno je definirati sljedeće šifrarnike:

- **Agenti**
- **Kategorije agenata**
- **Kategorije popusta**
- **Definicije provizijskih razreda**
- **Karakteristike agenata**

> **Tablice**: obrasce čine [Karakteristike predstavnika](/docs/configurations/tables/sales/agent-characteristics), [Raspon popusta](/docs/configurations/tables/sales/discount-range), Dodjela predstavnika, i [Definicija popusta](/docs/configurations/tables/sales/discount-range) i nalaze se u *Konfiguracija > Tablice > Prodaja*.

:::warning Pažnja
Osim definiranja podataka o agentima, potrebno je povezati agente s odgovarajućim kupcima. Tek nakon tog povezivanja sustav može ispravno obračunavati provizije na prodajnim dokumentima i uključivati ih u obračune provizija.
:::
 
