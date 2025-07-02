---
title: Uvod
sidebar_position: 1
---

Modul Portfelj dospijeća plaćanja u Fluentis ERP-u osmišljen je za upravljanje i praćenje dospijeća plaćanja, kao što su mjenice, bankovne potvrde i drugi instrumenti odgođenog plaćanja.

Ovaj modul omogućuje upravljanje svim operacijama povezanim s dospijećima plaćanja – od njihove izrade, preko prezentacije banci na naplatu ili uz rezervu naplate, do knjiženja konačnih iznosa koji su naplaćeni – pružajući potpunu kontrolu nad novčanim tokovima koji proizlaze iz odgođenih plaćanja.

## Operativni tijek: 

- započinje preuzimanjem podataka iz prodajnih računa ili knjižnih stavki. 

- izvršava zatvaranje računa kupca, generiranje prezentacijskih lista te eventualno kreiranje konačnog nepodmirenog dospijeća.

Moguće je slobodno definirati različite potrebne vrste dospijeća plaćanja. 

U sustavu su već dostupne (nakon početne konfiguracije Fast Start) **Doznaka u gotovini**, trenutno najčešće korišteni instrument u Italiji.


## Popis tablica potrebnih za upravljanje modulom:

[Numeriranje vrijednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration),  

[Numeriranje popisa prezentacije](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration),  

[Tipovi vrijednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types),  

[Tipovi prezentacije popisa vrijednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types),  

[Statusi vrijednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status),  

[Status potraživanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status),  

[Načini placanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types).



## Parametri potrebni za upravljanje modulom:

[Parametri popisa vrijednosnih papira](/docs/configurations/parameters/treasury/bills-portfolio-parameters).

 

## Postupci dostupni u modulu

| Funkcija | Značenje | Detalji Video Tutorijala |
| --- | --- | --- |
|  [Preuzimanje vrijednosnih papira iz računa](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)  | Pokreće proceduru za automatsko kreiranje dospijeća iz dospijeća računa. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link za Video Tutorial</a> |
|  [Preuzimanje vrijednosnih papira iz dospijeća plaćanja](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)  | Pokreće proceduru za automatsko kreiranje dospijeća iz otvorenih stavki. |<a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |
|  [Knjiženje vrijednosnih papira](/docs/treasury/bills-holding/accounting/bills-accounting)  | Pokreće proceduru za knjiženje dospijeća i zatvaranje računa kupca. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |
|  **Knjiženje vrijednosnih papira prema dobavljaču**  | Pokreće proceduru za knjiženje dospijeća prema dobavljaču i zatvaranje računa dobavljača. | |
|  [Knjiženje popisa](/docs/treasury/bills-holding/accounting/lists-accounting)  | Richiama la procedura per effettuare la contabilizzazione della distinta e valorizzare il conto di presentazione. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Link al Video Tutorial</a> |
|  Knjiženje odobrenja  | Pokreće proceduru za knjiženje prezentacijskih lista i valorizaciju računa prezentacije. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |
|  [Neplaćeni uvoz](/docs/treasury/bills-holding/procedures/import-unpaids)  | 	Pokreće proceduru uvoza datoteke s nenaplaćenim dospjelim dospijećima. |
|  [Knjiženje nenaplaćenih dospjelih računa](/docs/treasury/bills-holding/accounting/unpaid-accounting)  | Pokreće proceduru knjiženja nenaplaćenih dospjelih računa uz ponovno otvaranje stavki kupca po parametrima modula. | |
|  Knjiženje neplaćenog na cesiju | Pokreće proceduru knjiženja nenaplaćenih računa uz ponovno otvaranje stavki kupca i dobavljača po parametrima modula. | |

## Ispisi modula

| Funkcija | Opis | Link na video tutorijal |
| --- | --- | --- |
|  [Ispis prezentacijskih lista](/docs/treasury/bills-holding/reports/print-presentation-lists)  | Pokreće proceduru ispisa prezentacijskih lista dospijeća u banci. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |
|  [Izvještaj - Status blokiranih računa](/docs/treasury/bills-holding/reports/bill-holding-situation)  | Pokreće proceduru ispisa statistike stanja portfelja dospijeća. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |
|  [Ispis liste nenaplaćenih](/docs/treasury/bills-holding/reports/print-unpaid-list)  | Pokreće proceduru ispisa liste nenaplaćenih dospijeća. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link na Video Tutorial</a> |



<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>



