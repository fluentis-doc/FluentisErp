---
title: Uvod
sidebar_position: 1
---

Ovaj modul omogućuje katalogizaciju te periodično i izvanredno održavanje instrumenata za praćenje i mjerenje koji se koriste za osiguranje prikladnosti proizvoda i pružanje ponuđenih usluga.   


## Dokumenti kojima se upravlja uključuju

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Mjerni instrumenti</Link>
        <p>Evidencija u kojoj se pohranjuju podaci o mjernim instrumentima korištenim za osiguravanje prikladnosti proizvoda i pružanje ponuđenih usluga.</p>
        <p>Za mjerni instrument moguće je povezati informacije o kupnji, odgovornosti, tehničkim/mehaničkim svojstvima, lokaciji i kalibraciji.</p>
        <p>Ako je instrument podložan kalibraciji i kalibracija je interna, moguće je definirati koje se aktivnosti moraju obaviti i koje vrijednosti treba zabilježiti kako bi kalibracija bila uspješna.</p>
        <p>Ako je instrument podložan kalibraciji i kalibracija je eksterna, moguće je definirati koja će treća strana obaviti kalibraciju.</p>
        <p>Ako je unesen vremenski period kalibracije, tipka "Planiraj nove kalibracije" omogućuje automatsko kreiranje planiranih kalibracija za željeno razdoblje.</p>
        <p>Standardno su dostupna sljedeća izvješća: *Registar instrumenata* grupiranih prema: *Instrumentu*, *Kategoriji*, *Dobavljaču*, *Lokaciji*, *Korisniku*, *Isteku jamstva* i *Isteku kalibracije*, *Registar instrumenata koji nisu podložni kalibraciji* i *Kartica mjernog instrumenta*. </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Kalibracija uređaja</Link>
        <p>U upravljanju kalibracijom uređaja moguće je evidentirati interne kalibracije i certifikate kalibracije.</p>
        <p>Ako je instrument podložan kalibraciji i kalibracija je interna, moguće je unijeti zabilježene vrijednosti za predviđene pozicije. Fluentis će automatski dodijeliti pozitivan ili negativan ishod, za svaku pojedinačnu poziciju i općenito.</p>
        <p>Ako je instrument podložan kalibraciji i kalibracija je eksterna, moguće je priložiti certifikat kalibracije primljen od treće strane koja je obavila kalibraciju. U tom slučaju, ishod će ručno dodijeliti operater.</p>
        <p>Standardno su dostupna sljedeća izvješća: Registar kalibracija instrumenata grupiranih prema: *Izvješću*, *Instrumentu* i *Operateru*.</p>
    </div>
</div>


## Za početak korištenja   

   **Mjerni instrumenti**:
- morate se definirati [*Kategorija mjernog instrumenta*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)   
- mora se unijeti novi [*Mjerni instrument*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   

   **Kalibracija uređaja**:
- morate se definirati:[*Vrsta kalibracije*](/docs/configurations/tables/quality/calibration-tools/calibration-type), pripadajuća *Numeracija* i [*Mjerni instrument*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   
- kako bi se olakšalo upravljanje *kalibracijom instrumenata*, postaviti [*Parametri umjeravanja instrumenata*](/docs/configurations/parameters/quality/calibration-tools)   
- mora se unijeti nova [*Kalibracija uređaja*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)   


## Povezanost na druge module
Modul *Kalibracija instrumenta* nije spojen ni na jedan drugi modul.   
