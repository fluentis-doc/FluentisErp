---
title: Vrsta aktivnosti PDV-a
sidebar_position: 22
---

U ovoj je tablici moguće definirati vrste (aktivnosti) djelatnosti koje tvrtka obavlja za potrebe PDV-a, ako je to primjenjivo, te svakoj vrsti djelatnosti po potrebi dodijeliti razmjerni odbitak pretporeza (*pro-rata*).

Tako konfigurirane vrste djelatnosti povezuju se s odgovarajućim [**PDV knjigama**](/docs/configurations/tables/finance/vat-books).

Moguće je označiti glavnu djelatnost, u koju će se pri ispisu periodičnih obračuna PDV-a objediniti potraživanje ili obveza za PDV.

Ispis obračuna PDV-a automatski će prikazati detalje za svaku pojedinu djelatnost, kao i završni zbirni pregled.

**Šifra / Opis:** slobodno se definiraju radi imenovanja unesene vrste djelatnosti (npr. Proizvodnja, Nekretnine itd.).

**Pro-rata:** polje za unos postotka odbitka pretporeza (100 % označava puni odbitak, dok niži postotci, sve do 0 %, označavaju ograničeni odbitak). Polje funkcionira prema istoj logici kao opći *pro-rata* koji se definira u [**računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters), ali omogućuje detaljnije postavljanje zasebnog postotka za svaku pojedinu vrstu djelatnosti.

**Glavna aktivnost:** oznaka koja se dodjeljuje djelatnosti kojom se tvrtka pretežno bavi, odnosno glavnoj djelatnosti prema ostvarenom prometu, u skladu s poreznim propisima.