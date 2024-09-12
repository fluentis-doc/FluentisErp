---
title: Obračun
sidebar_position: 3
---

U ovoj prozoru postavljaju se opći elementi za izračun provizije: 

**Uzročno održan**: polje je obavezno kako bi se automatski valorizirao i dio poreza na dohodak primijenjen na proviziju agenta. Bez ovog polja neće biti moguće automatski valorizirati proviziju iz agentovog iznosa; Polje je povezano s tablicom [Tipovi odbitka poreza](/docs/configurations/tables/finance/withholding-tax-types).

**Period namirenja**: označava periodičnost obračuna agenata;

**Vrsta dokumenta**: razmatra se **pri izračunu provizije agenata**: moguće je naznačiti da agent zarađuje proviziju na potvrđenu narudžbu, isporuku robe (tj. izdavanje DDT-a), izdavanje računa, dospijeće (nezavisno od naplate ili ne), plaćanje (tj. na temelju naplaćenog iznosa: ako klijent plati polovicu računa, agent će zaračunati polovicu provizije za taj dokument). Ovo podešenje NE može se promijeniti nakon što počnete stvarati obračune za agenta: bit će potrebno stvoriti novu karticu s novim postavkama (i koristiti postupak 'Dodjela agenata' za masovno ažuriranje šifarnika klijenata u Početna stranica > Kontakte).

:::note BILJEŠKA
Samo za [postupak izračuna provizija agenata koji upravlja modulom Administracija](/docs/finance-area/professional-men/procedures/calculate-commissions) dostupan je i dodatni način **Ukupno plaćanje**, u ovom slučaju, provizija će sazrijeti samo ako je račun plaćen u cijelosti, a neće se uzimati u obzir eventualni djelomični plaćanja.
:::