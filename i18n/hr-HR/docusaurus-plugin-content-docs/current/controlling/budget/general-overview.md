---
title: Uvod  
sidebar_position: 1
---

Modul Izrada proračuna omogućuje upravljanje budžetom po centru troška, pri čemu se integrira s kontrolingom unutar ***Fluentis Erp*** kako bi se valoriziralo određeno analitičko područje budžeta. Ovo područje može biti valorizirano specifičnim nositeljima troškova te se uspoređuje s konačnim podacima unutar usporedbe reklasifikacija. Modul je dio kontrolinga i omogućuje učitavanje detaljnih podataka putem uvoza iz Excela s planiranim podacima budžeta. 

## Početna konfiguracija modula 

Za korištenje modula potrebne su sljedeće tablice: 
- Tablica [**Tip područja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) potreban je specifičan tip koji će se povezati s područjima budžeta  
- Tablica  [**Područje**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) mora postojati barem jedno područje budžeta povezano s tipom područja budžeta  
- Konfiguracija strukture [**Centara troškova**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) poduzeća 

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