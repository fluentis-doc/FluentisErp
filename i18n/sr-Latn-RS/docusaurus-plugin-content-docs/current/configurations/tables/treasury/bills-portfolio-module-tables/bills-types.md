---
title: Tipovi hartija od vrednosti
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da izvršite ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

- **Šifra/Opis:** korisnik ih može slobodno definisati za šifriranje mogućih tipova hartija od vrednosti.
- **Numeracija:** služi za automatsko numerisanje hartija od vrednosti (reč je o standardnom Fluentisovom brojaču sa pripadajućim dostupnim opcijama).
- **Tip hartije od vrednosti:** unapred definisane vrednosti označavaju moguće tipove hartija od vrednosti.

:::tip[Važno]
- **Konto – Podkonto – Opis:** analitički konto unet u ovo polje koristiće se kao **protivkonto prilikom zatvaranja kupca** u postupku [**knjiženja hartija od vrednosti**](/docs/treasury/bills-holding/accounting/bills-accounting).
:::

:::important[Potrebno je uraditi!]
Tip hartije od vrednosti moguće je (**preporučuje se**, radi filtriranja otvorenih stavki povezanih sa tipom plaćanja u postupku kreiranja hartija od vrednosti iz otvorenih stavki ili faktura) **povezati sa tipom plaćanja** u [**istoimenoj tabeli**](/docs/configurations/tables/general-settings/payment-types#tipi-effetti).
:::

:::note[Napomena]
Samo hartije od vrednosti tipa menice mogu se obrađivati u postupku knjiženja neplaćenih menica po cesiji u modulu Neplaćene stavke.
:::

Opcija **Upravljanje delimičnim iznosom** omogućava kreiranje hartija od vrednosti kojima se otvorene stavke zatvaraju *delimično*, uz navođenje iznosa. Za to je predviđeno ručno upravljanje unutar same hartije od vrednosti.

:::danger[Upozorenje]
Uključivanjem ove opcije, postupak automatskog generisanja hartije od vrednosti iz otvorenih stavki (ili faktura) neće u hartiju od vrednosti uneti referencu na otvorenu stavku. Posledično, prilikom knjiženja hartije od vrednosti neće doći do zatvaranja otvorene stavke, koja će ostati otvorena.

Naime, uključivanje ove opcije podrazumeva ručno upravljanje i upravo je za njega namenjena.
:::

Veza **Glavna blagajna** ne koristi se u italijanskoj lokalizaciji. Služi za evidentiranje hartija od vrednosti iz blagajničkih uređaja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>