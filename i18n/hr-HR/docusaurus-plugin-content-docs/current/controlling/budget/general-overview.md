---
title: Uvod  
sidebar_position: 1
---

Od verzije Fluentis ERP 2025 moguće su dvije različite metode upravljanja proračunom.

1. Proračun po troškovnim mjestima, koji se integrira s kontrolingom radi vrednovanja određenog područja analize proračuna te se može vrednovati pomoću specifičnih pokretača troškova (nositelja troškova). Nakon toga uspoređuje se sa stvarnim podacima u sklopu funkcionalnosti Usporedba modela reklasifikacije.
Modul omogućuje učitavanje detaljnih podataka uvozom iz Excela, odnosno uvozom planiranih proračunskih podataka.

2. Upravljanje proračunom i bez potpune primjene modula kontrolinga. Obrada je moguća prema analitičkim kontima glavne knjige, troškovnim mjestima, profitnim centrima i modelu reklasifikacije.

## Početna konfiguracija modula 

Za korištenje modula potrebne su sljedeće tablice: 
- Tablica [**Tip područja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) potreban je specifičan tip koji će se povezati s područjima budžeta  
- Tablica  [**Područje**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) mora postojati barem jedno područje budžeta povezano s tipom područja budžeta  
- Konfiguracija strukture [**Centara troškova**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) poduzeća
- Za korisnike koji ne koriste cjeloviti modul kontrolinga (upravljanje proračunom bez korištenja izvanbilančnih knjiženja) moguće je konfigurirati tablicu **Vrste proračuna** (jednostavna tablica za definiranje kategorija i dodjeljivanje numeracije) i tablicu **Vrste razdoblja**(/docs/configurations/tables/controlling/forecast/period-types).

## Upravljani dokumenti
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Uvoz proračuna iz Excela pomoću Bizlinka</Link>
        <p>- za evidentiranje vanjske izrade proračuna u controllingu</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Knjiženja proračuna</Link>
        <p>- za ručnu intervenciju u podatke proračuna</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Povijest poslovnih zapisa</Link>
        <p>- za izradu budžeta na temelju podataka postojećeg izvještaja o izvršenju, primjenom [*Postotaka promjene*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages)</p>
    </div>
</div>