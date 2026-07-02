---
title: Izveštaji agenta
sidebar_position: 1
---

Iz ove forme moguće je pokrenuti različite izveštaje vezane za upravljanje zastupnicima/agentima.

Vrsta izveštaja bira se putem odgovarajuće padajuće liste.

![](/img/it-it/finance-area/professional-men/reports/agent-reports/image01.png)

Kriterijumi filtriranja odgovaraju onima koji se koriste u izveštaju **[Pregled poreza po odbitku](/docs/finance-area/professional-men/reports/withholding-tax-situation)**, na koji se upućuje radi detaljnijih informacija.

## FIRR

Izveštaj se zasniva na podešavanjima definisanim u tabeli **[Kategorije zastupnika](/docs/configurations/tables/sales/agent-category#firr)**.

U obračun se uključuju sve naknade zastupnika evidentirane u sistemu, bez obzira na to da li su nastale automatskom konverzijom obračuna provizija ili su unete ručno.

Na izveštaju se prikazuje i broj meseci za koje se obračunava **FIRR**. Po pravilu je to **12 meseci**, osim ako je u matičnim podacima zastupnika (**Računovodstveni podaci > Detalji**) za tekuću godinu unet **datum završetka zastupničkog odnosa**.

U tom slučaju izveštaj uzima u obzir mesec završetka zastupničkog odnosa, a obračunski pragovi proporcionalno se prilagođavaju stvarnom trajanju ugovora.