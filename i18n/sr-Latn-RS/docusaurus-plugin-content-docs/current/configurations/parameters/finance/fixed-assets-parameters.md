---
title: Parametri osnovnih sredstava
sidebar_position: 4
---

:::tip[Brzi početak]
Tabela je obuhvaćena postupkom [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju želite da izvršite ručno, potrebno je da pratite kontrolnu listu na povezanoj stranici.
:::

Parametri modula Osnovna sredstva nalaze se na putanji **Parametri > Administracija**.

## Podaci obrasca

#### Specifična dugmad

> **Sačuvaj parametre**: omogućava čuvanje podešenih parametara.
> **Poništi podešavanja**: omogućava poništavanje podešavanja.

**#### Specifična polja**

- **Proveri prefiks šifre**: ako je ova oznaka aktivirana, prefiks šifre mora biti unapred definisan u tabeli i ne može se slobodno unositi prilikom kreiranja osnovnog sredstva.

- **Prefiks šifre po preduzeću**: aktiviranjem ove opcije omogućava se preuzimanje podataka iz tabele **Kategorije osnovnih sredstava**, a provera prefiksa šifre vrši se za pojedinačno preduzeće, umesto za sve prefikse šifara svih preduzeća prisutnih u bazi podataka.

- **Prikaz količine**: ako je ova oznaka aktivirana, prikazuje se količina.

- **Podrazumevana merna jedinica**: definiše podrazumevanu mernu jedinicu ako je prethodna opcija aktivirana.

- **Procenat za pojedinačno sredstvo**: aktiviranjem ove opcije omogućava se prikaz polja u zaglavlju osnovnog sredstva, u koje se može uneti procenat amortizacije koji ima prednost u odnosu na procenat definisan za kategoriju kojoj sredstvo pripada.

- **Podela upravljanja**: ako je ova oznaka aktivirana, moguće je dodeliti željenu podelu u registru osnovnih sredstava. U suprotnom se u polju za podelu predlaže podrazumevana vrednost.

- **Šablon obračuna amortizacije**: polje za unos podrazumevanog računovodstvenog razloga koji će biti predložen u obrascu za obračun amortizacije.

- **Koristi nedozvoljeni račun**: ova oznaka omogućava unapred definisanje vrednosti istog parametra u obrascima za knjiženje amortizacije ili povraćaj amortizacije tokom međugodišnjeg zatvaranja. Ako je aktivirana, ista oznaka biće podrazumevano aktivna i u navedenim obrascima, a deo amortizacije koji nije poreski priznat automatski će se knjižiti na odgovarajući račun definisan u tabeli [**Kategorije osnovnih sredstava**](/docs/configurations/tables/finance/fixed-asset-category).

- **Pojedinačno knjiženje amortizacije**: ako je ovo polje za potvrdu aktivirano, za svaku karticu osnovnog sredstva kreiraće se zasebno računovodstveno knjiženje amortizacije.

- **Omogućen računovodstveni centar**: ova oznaka omogućava preuzimanje mesta troška unetog na kartici **Detalji** kartice osnovnog sredstva, koje se odnosi na iznos amortizacije izračunat prema računovodstvenoj logici. Ovo predstavlja alternativu korišćenju analitičke amortizacije, kojom se upravlja na posebnoj kartici (*Amortizacija za kontroling*).

## 2. Video-tutorijali o parametrima osnovnih sredstava

:::important Pogledajte i
[**VIDEO-TUTORIJALI O PARAMETRIMA OSNOVNIH SREDSTAVA**](/docs/video/finance/intro)
:::