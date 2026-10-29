---
title: Vrsta aktivnosti PDV-a
sidebar_position: 22
---

U ovoj tabeli moguće je definisati tipove (aktivnosti) delatnosti koje preduzeće obavlja za potrebe PDV-a, ako je to primenljivo, i po potrebi svakoj vrsti delatnosti dodeliti srazmerni odbitak prethodnog poreza (*pro-rata*).

Tako konfigurisani tipovi delatnosti povezuju se sa odgovarajućim [**PDV knjigama**](/docs/configurations/tables/finance/vat-books).

Moguće je označiti glavnu delatnost, u koju će se prilikom štampanja periodičnih obračuna PDV-a objediniti potraživanje ili obaveza za PDV.

Štampanje obračuna PDV-a automatski će prikazati detalje za svaku pojedinačnu delatnost, kao i završni zbirni pregled.

**Šifra / Opis:** slobodno se definišu radi imenovanja unetog tipa delatnosti (npr. Proizvodnja, Nekretnine itd.).

**Pro-rata:** polje za unos procenta odbitka prethodnog poreza (100% označava puni odbitak, dok niži procenti, sve do 0%, označavaju ograničeni odbitak). Polje funkcioniše po istoj logici kao opšti *pro-rata* koji se definiše u [**računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters), ali omogućava detaljnije podešavanje zasebnog procenta za svaki pojedinačni tip delatnosti.

**Glavna delatnost:** oznaka koja se dodeljuje delatnosti kojom se preduzeće pretežno bavi, odnosno glavnoj delatnosti prema ostvarenom prometu, u skladu sa poreskim propisima.