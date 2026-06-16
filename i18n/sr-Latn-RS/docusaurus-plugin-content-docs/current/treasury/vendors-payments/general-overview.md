---
title: Uvod
sidebar_position: 1
---

Modul plaćanja dobavljača prvenstveno se koristi za **kreiranje naloga za plaćanje**, najčešće za **bankovne transfere**. Modul omogućava elektronsko slanje **SEPA** (.xml) naloga za plaćanje putem bankovnog transfera.

Takođe je moguće upravljati **SDD nalozima** (SEPA Direct Debit), formatom koji je na evropskom nivou zamenio prethodni RID sistem i koristi se za automatsko terećenje bankarskih računa na osnovu prethodno datog odobrenja.

Modul omogućava i elektronski uvoz **obaveštenja o plaćanju za pasivne bankarske doznake**, koje se mogu autorizovati i platiti slanjem povratnog toka sa odobrenim doznakama banci, nakon čega se proces završava automatskim knjiženjem izvršenih plaćanja.

Prilikom kreiranja nove liste plaćanja korišćenjem podataka iz otvorenih stavki dobavljača, direktno kroz integraciju sa administrativnim modulom, moguće je izvršiti knjiženje povezanih transakcija, uključujući zatvaranje odgovarajućih otvorenih stavki u listi plaćanja i storniranje odgovarajućeg knjigovodstvenog salda.

**Preliminarna podešavanja za korišćenje modula:**

- **Podaci povezani sa vrstom bankarskog računa**: neophodni su za identifikaciju stavki, a podešavaju se tokom procedure Fast Start.
- Predlošci knjiženja koji se koriste za računovodstvenu obradu predstavljaju standardne predloške za plaćanja dobavljačima kreirane tokom Fast Start procedure.
- Tabela vrsta plaćanja: potrebno je povezati odgovarajuću tabelu koja se automatski popunjava tokom Fast Start procedure.
- Numeracija plaćanja dobavljača: koristi se za definisanje brojača dokumenata i takođe se automatski popunjava tokom Fast Start procedure.

**Parametri:**

[Parametri plaćanja dobavljača](/docs/configurations/parameters/treasury/vendor-payments-parameters)

---

| Funkcija | Značenje | Link ka video tutorijalu |
| --- | --- | --- |
| [Blokiranje pasivnih dospeća plaćanja](/docs/treasury/vendors-payments/procedures/block-passive-maturity-values) | Procedura za masovno upravljanje blokadom pasivnih dospeća plaćanja. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=05s" target="_blank" rel="noopener noreferrer">YouTube link</a> |
| **Automatsko kreiranje plaćanja dobavljačima** | Procedura za automatsko kreiranje plaćanja dobavljačima. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">YouTube link</a> |
| [Upravljanje plaćanjima](/docs/treasury/vendors-payments/procedures/payments-support-management) | Procedura za upravljanje bankarskim plaćanjima. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=5m37s" target="_blank" rel="noopener noreferrer">YouTube link</a> |
| [Knjiženje](/docs/finance-area/professional-men/accounting/payments-accounting/filter) | Procedura za knjiženje plaćanja dobavljačima. | <a href="https://youtu.be/CDCVq0iC29s&amp;t=5m40s" target="_blank" rel="noopener noreferrer">YouTube link</a> |

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkxoWgTkvUg" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>