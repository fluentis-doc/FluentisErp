---
title: Uvod
sidebar_position: 1
---

Modul **Vrednosni papiri** u Fluentis ERP-u namenjen je upravljanju i praćenju komercijalnih instrumenata naplate, kao što su menice, bankarske doznake (Ri.Ba.) i drugi oblici odloženog plaćanja.

Modul omogućava upravljanje svim procesima vezanim za instrumente naplate, od njihovog kreiranja, predaje banci ili naplate uz klauzulu „uz dobru naplatu“, pa sve do evidentiranja konačnih uplata. Na taj način obezbeđuje potpunu kontrolu novčanih tokova koji proizlaze iz odloženih plaćanja.

## Operativni tok

- započinje preuzimanjem podataka iz izlaznih računa ili knjižnih stavki;

- nastavlja se zatvaranjem računa kupca, generisanjem prezentacionih lista i eventualnim kreiranjem konačnog nenaplaćenog dospeća.

Moguće je slobodno definisati različite vrste dospeća plaćanja prema potrebama poslovanja.

U sistemu je već dostupna (nakon početne Fast Start konfiguracije) **Bankarska doznaka (Ri.Ba.)**, trenutno najčešće korišćen instrument u Italiji.

## Spisak tabela potrebnih za upravljanje modulom

- [Numeracija vrednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration)
- [Numeracija prezentacionih lista](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration)
- [Tipovi vrednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types)
- [Tipovi prezentacionih lista vrednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- [Statusi vrednosnih papira](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status)
- [Statusi nenaplaćenih potraživanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status)
- [Načini plaćanja](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)

## Parametri potrebni za upravljanje modulom

- [Parametri portfelja vrednosnih papira](/docs/configurations/parameters/treasury/bills-portfolio-parameters)

## Procedure dostupne u modulu

| Funkcija | Značenje | Link ka video tutorijalu |
|-----------|-----------|-----------|
| [Preuzimanje vrednosnih papira iz računa](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices) | Pokreće proceduru za automatsko kreiranje instrumenata naplate na osnovu dospeća računa. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| [Preuzimanje vrednosnih papira iz dospeća plaćanja](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) | Pokreće proceduru za automatsko kreiranje instrumenata naplate na osnovu otvorenih stavki. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| [Knjiženje vrednosnih papira](/docs/treasury/bills-holding/accounting/bills-accounting) | Pokreće proceduru knjiženja instrumenata naplate i zatvaranja računa kupca. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| **Knjiženje vrednosnih papira dobavljača** | Pokreće proceduru knjiženja instrumenata naplate dobavljača i zatvaranja računa dobavljača. | |
| [Knjiženje prezentacionih lista](/docs/treasury/bills-holding/accounting/lists-accounting) | Pokreće proceduru knjiženja zbirnog naloga i evidentiranja iznosa na kontu predaje na naplatu. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| Knjiženje odobrenja | Pokreće proceduru knjiženja prezentacionih lista i valorizacije računa prezentacije. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| [Uvoz nenaplaćenih potraživanja](/docs/treasury/bills-holding/procedures/import-unpaids) | Pokreće proceduru uvoza datoteke sa nenaplaćenim dospelim instrumentima naplate. | |
| [Knjiženje nenaplaćenih dospeća](/docs/treasury/bills-holding/accounting/unpaid-accounting) | Pokreće proceduru knjiženja nenaplaćenih dospeća uz ponovno otvaranje stavki kupca prema parametrima modula. | |
| Knjiženje nenaplaćenog potraživanja po cesiji | Pokreće proceduru knjiženja nenaplaćenih potraživanja uz ponovno otvaranje stavki kupca i dobavljača prema parametrima modula. | |

## Izveštaji modula

| Funkcija | Opis | Link ka video tutorijalu |
|-----------|-----------|-----------|
| [Štampa prezentacionih lista](/docs/treasury/bills-holding/reports/print-presentation-lists) | Pokreće proceduru štampe prezentacionih lista instrumenata naplate predatih banci. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| [Izveštaj – Status portfelja vrednosnih papira](/docs/treasury/bills-holding/reports/bill-holding-situation) | Pokreće proceduru štampe statistike stanja portfelja instrumenata naplate. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |
| [Štampa liste nenaplaćenih potraživanja](/docs/treasury/bills-holding/reports/print-unpaid-list) | Pokreće proceduru štampe liste nenaplaćenih dospeća. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Video tutorijal</a> |

<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>