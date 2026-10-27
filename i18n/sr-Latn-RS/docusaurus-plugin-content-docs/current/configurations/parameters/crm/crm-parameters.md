---
title: CRM parametri
sidebar_position: 2
---

CRM parametri nalaze se na putanji **Parametri > CRM > CRM parametri**, a njihovim podešavanjem definišu se određene funkcije modula, posebno one koje se odnose na automatsku promenu statusa aktivnosti nakon određenih operacija.

- **Osvojeni napredak verovatnoće**: polje se odnosi na tabelu [Verovatnoća uspeha](/docs/configurations/tables/crm/opportunities/probability-progress) i omogućava definisanje procenta verovatnoće uspeha koji će Fluentis postaviti za priliku ako se ona premesti u odeljak osvojenih prilika na Kanban tabli *Opportunity Progress*;

- **Izgubljeni napredak verovatnoće**: polje se odnosi na tabelu [Verovatnoća uspeha](/docs/configurations/tables/crm/opportunities/probability-progress) i omogućava definisanje procenta verovatnoće uspeha koji će Fluentis postaviti za priliku ako se ona premesti u odeljak izgubljenih prilika na Kanban tabli *Opportunity Progress*;

- **Maksimalan broj e-poruka**: u ovom polju potrebno je definisati maksimalan broj e-poruka koje Fluentis može da pošalje prilikom slanja biltena;

- **Interval slanja e-pošte (sekunde)**: u ovom polju potrebno je podesiti broj sekundi koji Fluentis mora da sačeka između slanja jedne e-poruke i sledeće prilikom slanja biltena.

- **Merna jedinica za dane**: potrebno je navesti mernu jedinicu koju Fluentis treba da koristi za dane.

- **Merna jedinica za sate**: potrebno je navesti podrazumevanu mernu jedinicu koju Fluentis treba da koristi za sate.

- **Reference tiketa**: u ovom polju moguće je navesti šablon kodiranja koji će se koristiti za referencu tiketa, koja će biti prikazana u ponudi povezanoj sa tiketom i kreiranoj putem postupka *Kreiranje ponuda iz tiketa* (dostupnog u modulu Tiketi).

- **Pretraga CRM kontakta i kao nadređenog kontakta**: ako je omogućeno, automatski uključuje istu opciju na svim ekranima za pretragu na kojima je dostupna – Pretraga ponuda, Pretraga kontakata, Pretraga izveštaja o posetama, kao i na karticama Ponude i Izveštaji o posetama u okviru CRM evidencije kontakta.

- **Kreiraj CRM kontakt iz novog zapisa klijenta**: ako je omogućeno, prilikom unosa novog klijenta u okviru kontakta, sistem automatski kreira novi CRM kontakt, ukoliko on već ne postoji.