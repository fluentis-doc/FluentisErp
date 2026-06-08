---
title: Uvod
sidebar_position: 1
---

# Uvod

Modul se nalazi u meniju **Prodaja > Trgovački predstavnici (Agenti)**.

Modul pruža kompletno rešenje za upravljanje, obračun i kontrolu provizija prodajnih agenata. Omogućava automatski obračun ostvarenih provizija, generisanje obračuna i likvidacija, kao i upravljanje naknadama za spoljne saradnike i zastupnike.

## Glavne funkcionalnosti

- **Upravljanje i obračun provizija** – sistem omogućava definisanje, obračun i praćenje provizija agenata na osnovu ostvarene prodaje i ugovorenih uslova.

- **Generisanje obračuna provizija** – moguće je kreirati periodične obračune koji objedinjeno prikazuju sve ostvarene provizije za izabrani period.

- **Obračun naknada spoljnim saradnicima** – podržano je kreiranje posebnih naknada za profesionalne saradnike i zastupnike uz detaljno praćenje isplata.

- **Štampa obračuna i dokumentacije** – omogućena je štampa izveštaja, obračunskih listova i dokumentacije povezane sa provizijama i izvršenim obračunima.

- **Izveštavanje i analitika** – dostupni su izveštaji za praćenje ostvarenih provizija, analizu prodajnih rezultata i procenu uspešnosti agenata.

## Automatizacija i integracija

Modul za obračun agenata integrisan je sa ostalim oblastima sistema Fluentis ERP i automatski preuzima podatke o prodaji i fakturisanju. Na taj način obezbeđuje se konzistentnost podataka i smanjuje mogućnost grešaka tokom obračuna provizija.

Integracija omogućava:

- automatsko preuzimanje podataka iz prodajnih dokumenata;
- povezivanje provizija sa računima i naplatama;
- jednostavnije usklađivanje između prodaje, fakturisanja i obračuna agenata.

Modul je takođe povezan sa oblašću **Administracija - Finansije i računovodstvo**, gde se obračuni provizija mogu automatski pretvoriti u obračune naknada za primaoce prihoda.

Na osnovu tih podataka moguće je automatski evidentirati:

- porez i prirez;
- doprinose;
- ENASARCO obaveze (ukoliko se koriste);
- ostala zakonska davanja.

Podaci o obračunima uključuju se i u godišnje poreske evidencije, kao i u druge zakonom propisane izveštaje.

## Preduslovi za korišćenje

Pre početka rada potrebno je definisati sledeće šifrarnike:

- **Agenti**
- **Kategorije agenata**
- **Kategorije popusta**
- **Definicije provizijskih razreda**
- **Karakteristike agenata**

> **Tabele**: obrasci obuhvataju [Karakteristike predstavnika](/docs/configurations/tables/sales/agent-characteristics), [Raspon popusta](/docs/configurations/tables/sales/discount-range), Dodelu predstavnika i [Definiciju popusta](/docs/configurations/tables/sales/discount-range), a nalaze se u meniju *Konfiguracija > Tabele > Prodaja*.

:::warning Pažnja
Pored definisanja podataka o agentima, neophodno je povezati agente sa odgovarajućim kupcima. Tek nakon uspostavljanja ove veze sistem može ispravno obračunavati provizije na prodajnim dokumentima i uključivati ih u obračune provizija.
:::