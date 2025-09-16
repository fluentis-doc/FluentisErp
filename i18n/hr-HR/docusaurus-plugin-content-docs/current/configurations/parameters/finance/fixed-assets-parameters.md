---
title: Parametri osnovnih sredstava 
sidebar_position: 4
---

:::tip[FAst Start]
La tabella è interessata dalla procedura di [**Fast Start**](/docs/guide/fast-start)

Nel caso in cui si intenda configurare manualmente fare riferimento alla check list della pagina linkata
:::

Parametri modula Osnovna sredstva nalaze se u **Parametri > Administracija**.

## Podaci obrasca  

#### Specifične tipke

> **Spremi parametre**: omogućuje vam spremanje postavljenih parametara.   
> **Poništi postavke**: omogućuje poništavanje postavki.

#### Specifična polja 

- **Verificiraj predšifru**: ako je flag postavljena, predkod mora biti unaprijed definiran u tablici i ne može se slobodno postavljati prilikom izrade sredstva.

- **Pred-kodiranje za tvrtke**: uz ovu kvačicu aktivira se čitanje iz tablice **Kategorija osnovnog sredstva** i provjera predkodova bit će relativna za jednu tvrtku, a ne odnosi se na sve predkodove svih kompanija prisutnih u bazi podatak 
 
- **Prikaz količine**: ako je flag postavljen, prikazat će se količina.  

- **Zadani UM**: definira zadani UM ako je prethodni flag postavljen. 

- **Postotak pojedinačne imovine**: s postavljenim flagom aktivirat će se polje u zaglavlju imovine u kojem je moguće postaviti postotak amortizacije koji će imati prioritet nad postotkom postavljenim u kategoriji kojoj imovina pripada.  

- **Podjela menadžment**: ako je flag postavljena, bit će moguće dodijeliti željenu podjelu u registru imovine, u protivnom će polje za podjelu biti predloženo prema zadanim postavkama.   

- **Obrazac obračuna amortizacije**: polje za unos zadanog razloga koji će se predložiti u obrascu obračuna amortizacije.

- **Koristi nedopušteni konto**: ovaj flag omogućuje unaprijed postavljanje vrijednosti istog parametra unutar obrazaca za knjiženje amortizacije ili oporavka amortizacije kod međugodišnjih zatvaranja. Ako je aktiviran, isti flag će biti predložen kao aktivan unutar navedenih obrazaca, a nedopušteni dio amortizacije s poreznog gledišta automatski će se knjižiti na određeni konto definiran u tablici [**kategorije dugotrajne imovine**](/docs/configurations/tables/finance/fixed-asset-category).

- **Pojedinačni unos u računovodstvu amortizacije**: s ovim potvrdnim okvirom svaka kartica imovine će dovesti do jednog računovodstvenog unosa amortizacije.

**Omogućen računovodstveni centar**: ovaj flag omogućuje čitanje mjesta troška umetnutog u karticu **Detalji** kartice imovine koja se odnosi na kvotu amortizacije izračunatu računovodstvenom logikom, kao alternativu korištenju objektivne amortizacije kojom se upravlja u posebnoj kartici (Amortizacija za kontroliranje). 

## 2. Video tutorijali o parametrima dugotrajne imovine  

:::important Vidi također
[**VIDEO TUTORIJALI O PARAMETRIMA DUGOTRAJNE IMOVINE**](/docs/video/finance/intro)
:::
