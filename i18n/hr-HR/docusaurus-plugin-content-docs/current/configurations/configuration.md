---
title: Konfiguracija Fluentis ERP-a
description: Cjelovit vodič za konfiguraciju Fluentis ERP-a
keywords: ["ERP", "ERP parametri", "ERP tablice", "Fast Start"]
tags: [ERP, Konfiguracija, Fluentis]
schema: TechArticle
sidebar_position: 1
---

# Konfiguracija Fluentis ERP-a

Područje **konfiguriranja** predstavlja polazišnu točku za pravilno korištenje Fluentis ERP-a.

Sastoji se od dva temeljna elementa: **tablica** i **parametara**.

Oba su elementa organizirana prema **funkcionalnim područjima**, uz skup **općih** elemenata koji su potrebni neovisno o operativnom području.

:::danger[Pozor]
Nepotpuna ili pogrešna konfiguracija ovih osnovnih podataka može onemogućiti pravilno korištenje ERP-a u određenom području.
:::

## Tablice

**Tablice** sadržavaju osnovne podatke potrebne za izradu dokumenata i operativnih informacija.

Primjerice, tablica **Vrste računa** definira različite dostupne vrste računa.

Za izradu novog računa potrebno je odabrati odgovarajuću vrstu putem pripadajućeg padajućeg izbornika (*combo box*).

> Tablice čine temelj sustava: njihovim pravilnim popunjavanjem osiguravaju se dosljednost i cjelovitost podataka u svim poslovnim područjima.

## Parametri

**Parametri** definiraju mogućnosti, zadane vrijednosti i postavke ponašanja postupaka obrade ili automatskog generiranja podataka.

Njihov nedostatak ili pogrešna konfiguracija mogu narušiti rad pojedinih automatiziranih funkcija.

Posebno, ako se zadani parametar ne spremi, može doći do blokiranja izvođenja povezanog postupka.

:::important[Fast Start]
Nakon instalacije sustava **Fluentis ERP** moguće je inicijalizirati okruženje [**Fast Start**](/docs/guide/fast-start), spremno za korištenje.

Ovo okruženje automatski unaprijed konfigurira brojne **tablice** i **parametre**, omogućujući brzo i sigurno pokretanje sustava.

Ključni element postupka *Fast Start* jest [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts), koji pripada administrativnom području.

Postupak *Fast Start* generira **standardni kontni plan**. Moguće je izmijeniti njegove opise te dodavati ili brisati konta (pod uvjetom da ih već ne koriste drugi generirani podaci, kao što su računovodstveni predlošci ili modeli financijskih izvještaja).

*Ako predloženi kontni plan ne odgovara stvarnom stanju u poduzeću*, preporučuje se ručno konfigurirati tablice i parametre željenih funkcionalnih područja te **uvesti prilagođeni kontni plan**.

Za provjeru najvažnijih tablica pogledajte **detaljan kontrolni popis** dostupan na prethodno navedenoj poveznici.
:::