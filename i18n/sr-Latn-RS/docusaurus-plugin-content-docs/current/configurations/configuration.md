---
title: Konfiguracija Fluentis ERP-a
description: Sveobuhvatan vodič za konfiguraciju Fluentis ERP-a
keywords: ["ERP", "ERP parametri", "ERP tabele", "Fast Start"]
tags: [ERP, Konfiguracija, Fluentis]
schema: TechArticle
sidebar_position: 1
---

# Konfiguracija Fluentis ERP-a

Oblast **konfigurisanja** predstavlja polaznu tačku za pravilno korišćenje Fluentis ERP-a.

Sastoji se od dva osnovna elementa: **tabela** i **parametara**.

Oba elementa organizovana su prema **funkcionalnim oblastima**, uz skup **opštih** elemenata koji su potrebni nezavisno od operativne oblasti.

:::danger[Pažnja]
Nepotpuna ili pogrešna konfiguracija ovih osnovnih podataka može onemogućiti pravilno korišćenje ERP-a u određenoj oblasti.
:::

## Tabele

**Tabele** sadrže osnovne podatke potrebne za kreiranje dokumenata i operativnih informacija.

Na primer, tabela **Tipovi faktura** definiše različite dostupne tipove faktura.

Za kreiranje nove fakture potrebno je odabrati odgovarajući tip putem pripadajućeg padajućeg menija (*combo box*).

> Tabele čine osnovu sistema: njihovim pravilnim popunjavanjem obezbeđuju se doslednost i celovitost podataka u svim poslovnim oblastima.

## Parametri

**Parametri** definišu mogućnosti, podrazumevane vrednosti i podešavanja ponašanja postupaka obrade ili automatskog generisanja podataka.

Njihov nedostatak ili pogrešna konfiguracija mogu narušiti rad pojedinih automatizovanih funkcija.

Posebno, ako se podrazumevani parametar ne sačuva, može doći do blokiranja izvršavanja povezanog postupka.

:::important[Fast Start]
Nakon instalacije sistema **Fluentis ERP** moguće je inicijalizovati okruženje [**Fast Start**](/docs/guide/fast-start), spremno za korišćenje.

Ovo okruženje automatski unapred konfiguriše brojne **tabele** i **parametre**, omogućavajući brzo i sigurno pokretanje sistema.

Ključni element postupka *Fast Start* jeste [**Kontni plan**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts), koji pripada administrativnoj oblasti.

Postupak *Fast Start* generiše **standardni kontni plan**. Moguće je izmeniti njegove opise, kao i dodavati ili brisati konta (pod uslovom da ih već ne koriste drugi generisani podaci, kao što su računovodstveni šabloni ili modeli finansijskih izveštaja).

*Ako predloženi kontni plan ne odgovara stvarnom stanju u preduzeću*, preporučuje se ručno konfigurisanje tabela i parametara željenih funkcionalnih oblasti, kao i **uvoz prilagođenog kontnog plana**.

Za proveru najvažnijih tabela pogledajte **detaljnu kontrolnu listu** dostupnu na prethodno navedenoj poveznici.
:::