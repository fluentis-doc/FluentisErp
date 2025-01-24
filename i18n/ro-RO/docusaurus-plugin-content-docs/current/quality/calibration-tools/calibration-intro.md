---
title: Introducere
sidebar_position: 1
---

Acest modul permite catalogarea și întreținerea periodică și extraordinară a instrumentelor de monitorizare și măsurare utilizate pentru a asigura adecvarea produselor și furnizarea serviciilor oferite.

## Documente gestionate

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Instrumente de măsură</Link>
        <p>În această listă sunt memorate instrumentele de măsură utilizate pentru a asigura adecvarea produselor și furnizarea serviciilor oferite.</p>
        <p>Instrumentului de măsură îi pot fi asociate informațiile de achiziție, de responsabilitate, proprietățile tehnice/mecanice, de locație și de calibrare.</p>
        <p>Dacă instrumentul este supus calibrării iar calibrarea este internă, se pot defini activitățile care trebuie efectuate și valorile de identificat astfel încât calibrarea să aibă un rezultat pozitiv.</p>
        <p>Dacă instrumentul este supus calibrării iar calibrarea este externă, se poate defini entitatea terță care va efectua calibrarea.</p>
        <p>Dacă este introdusă o periodicitate temporală de calibrare, butonul de *Programare calibrări noi* permite crearea automată, pentru o perioadă dorită, a calibrărilor planificate.</p>
        <p>Sunt disponibile rapoartele standard: *Registru instrumente* grupate pe: *Instrument*, *Categorie*, *Furnizor*, *Locație*, *Utilizator*, *Scadență garanție* și *Scadență calibrare*, *Registru instrumente nesupuse calibrării* și *Fișă instrument de măsură*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Calibrare instrumente</Link>
        <p>În *Calibrare instrumente* este posibilă înregistrarea Calibrărilor interne și a Certificatelor de calibrare.</p>
        <p>Dacă instrumentul este supus calibrării iar calibrarea este internă, se pot insera, pentru pozițiile prevăzute, valorile detectate. Fluentis va atribui automat un rezultat pozitiv sau negativ, pentru fiecare poziție și în general.</p>
        <p>Dacă instrumentul este supus calibrării iar calibrarea este externă, se poate atașa Certificatul de calibrare primit de la terțul care a efectuat calibrarea. Rezultatul, în acest caz, va fi atribuit manual de operator.</p>
        <p>Sunt disponibile rapoartele standard: *Registru calibrări instrumente* grupate pe: *Raport*, *Instrument* și *Operator*.</p>
    </div>
</div>

## Pentru a începe să utilizezi

**Instrumentele de măsură**:
- inserați o [*Categorie instrumente de măsură*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)
- inserați un nou [*Instrument de măsură*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)

**Calibrarea instrumentelor**:
- inserați: un [*Tip calibrare*](/docs/configurations/tables/quality/calibration-tools/calibration-type), relativa *Numerare* și un [*Instrument de măsură*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)
- pentru a facilita gestionarea *Calibrării instrumentelor* setează [*Parametrii Calibrare instrumente*](/docs/configurations/parameters/quality/calibration-tools)
- inserați o nouă [*Calibrare instrument*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)

## Legături cu alte module

Modulul de *Calibrare instrumente* nu este asociat niciunui alt modul.