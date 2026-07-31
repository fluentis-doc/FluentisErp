---
title: Uvod
sidebar_position: 1
---

Ovaj modul omogućava katalogizaciju, periodično i vanredno održavanje instrumenata za praćenje i merenje koji se koriste za obezbeđivanje usklađenosti proizvoda i pružanje ponuđenih usluga.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Merni instrumenti</Link>
        <p>Šifarnik u kojem se čuvaju podaci o mernim instrumentima koji se koriste za obezbeđivanje usklađenosti proizvoda i pružanje ponuđenih usluga.</p>
        <p>Za merni instrument moguće je povezati informacije o nabavci, odgovornosti, tehničkim/mehaničkim svojstvima, lokaciji i kalibraciji.</p>
        <p>Ako instrument podleže kalibraciji i kalibracija je interna, moguće je definisati koje aktivnosti treba izvršiti i koje vrednosti treba evidentirati kako bi kalibracija bila uspešna.</p>
        <p>Ako instrument podleže kalibraciji i kalibracija je eksterna, moguće je definisati koja će treća strana izvršiti kalibraciju.</p>
        <p>Ako je definisan vremenski period kalibracije, dugme "Planiranje novih kalibracija" omogućava automatsko kreiranje planiranih kalibracija za željeni period.</p>
        <p>Standardno su dostupni sledeći izveštaji: *Registar instrumenata* grupisan prema: *Instrumentu*, *Kategoriji*, *Dobavljaču*, *Lokaciji*, *Korisniku*, *Isteku garancije* i *Isteku kalibracije*, *Registar instrumenata koji ne podležu kalibraciji* i *Kartica mernog instrumenta*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Kalibracija uređaja</Link>
        <p>U upravljanju kalibracijom uređaja moguće je evidentirati interne kalibracije i sertifikate kalibracije.</p>
        <p>Ako instrument podleže kalibraciji i kalibracija je interna, moguće je uneti evidentirane vrednosti za predviđene pozicije. Fluentis će automatski dodeliti pozitivan ili negativan rezultat za svaku pojedinačnu poziciju i ukupno.</p>
        <p>Ako instrument podleže kalibraciji i kalibracija je eksterna, moguće je priložiti sertifikat kalibracije primljen od treće strane koja je izvršila kalibraciju. U tom slučaju rezultat ručno dodeljuje operater.</p>
        <p>Standardno su dostupni sledeći izveštaji: Registar kalibracija instrumenata grupisan prema: *Izveštaju*, *Instrumentu* i *Operateru*.</p>
    </div>
</div>

## Za početak korišćenja

**Merni instrumenti**:

- potrebno je definisati [*Kategoriju mernog instrumenta*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)
- potrebno je uneti novi [*Merni instrument*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)

**Kalibracija uređaja**:

- potrebno je definisati [*Tip kalibracije*](/docs/configurations/tables/quality/calibration-tools/calibration-type), odgovarajuću *Numeraciju* i [*Merni instrument*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)
- radi lakšeg upravljanja *kalibracijom instrumenata* potrebno je podesiti [*Parametre kalibracije instrumenata*](/docs/configurations/parameters/quality/calibration-tools)
- potrebno je uneti novu [*Kalibraciju uređaja*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)

## Povezanost sa drugim modulima

Modul *Kalibracija uređaja* nije povezan ni sa jednim drugim modulom.