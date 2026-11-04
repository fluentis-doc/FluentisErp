---
title: Tipovi vrijednosnih papira
sidebar_position: 3
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju namjeravate izvršiti ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

- **Šifra/Opis:** korisnik ih može slobodno definirati za šifriranje mogućih vrsta vrijednosnih papira.
- **Numeracija:** služi za automatsku numeraciju vrijednosnih papira (riječ je o standardnom Fluentisovu brojaču s pripadajućim dostupnim opcijama).
- **Vrsta vrijednosnog papira:** unaprijed definirane vrijednosti označavaju moguće vrste vrijednosnih papira.

:::tip[Važno]
- **Konto – Podkonto – Opis:** analitički konto unesen u ovo polje upotrebljavat će se kao **protukonto prilikom zatvaranja kupca** u postupku [**_knjiženja vrijednosnih papira_**](/docs/treasury/bills-holding/accounting/bills-accounting).
:::

:::important[Potrebno napraviti!]
Vrstu vrijednosnog papira moguće je (**preporučuje se** radi filtriranja otvorenih stavki povezanih s vrstom plaćanja u postupku kreiranja vrijednosnih papira iz otvorenih stavki ili računa) **povezati s vrstom plaćanja** u [**istoimenoj tablici**](/docs/configurations/tables/general-settings/payment-types#tipi-effetti).
:::

:::note[Napomena]
Samo vrijednosni papiri vrste mjenice mogu se obrađivati u postupku knjiženja neplaćenih mjenica po cesiji u modulu Neplaćene stavke.
:::

Opcija **Upravljanje djelomičnim iznosom** omogućuje kreiranje vrijednosnih papira kojima se otvorene stavke zatvaraju *djelomično*, uz navođenje iznosa. Za to je predviđeno ručno upravljanje unutar samog vrijednosnog papira.

:::danger[Upozorenje]
Uključivanjem ove opcije, postupak automatskog generiranja vrijednosnog papira iz otvorenih stavki (ili računa) neće u vrijednosni papir unijeti referencu na otvorenu stavku. Posljedično, prilikom knjiženja vrijednosnog papira neće doći do zatvaranja otvorene stavke, koja će ostati otvorena.

Naime, uključivanje ove opcije podrazumijeva ručno upravljanje i upravo je za njega namijenjena.
:::

Veza **Glavna blagajna** ne upotrebljava se u talijanskoj lokalizaciji. Služi za evidentiranje vrijednosnih papira iz blagajničkih uređaja.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>