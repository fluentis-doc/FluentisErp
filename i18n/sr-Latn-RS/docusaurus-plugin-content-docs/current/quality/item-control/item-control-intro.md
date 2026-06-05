---
title: Uvod
sidebar_position: 1
---

Modul omogućava evidentiranje svih potrebnih informacija kako bi se obezbedila ispravna proizvodnja i pružanje usluga u kontrolisanim uslovima.

## Upravljanje podacima

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/data-sheets/data-sheet-management">Tehnička uputstva</Link>
        <p>Tehnička uputstva katalogizuju sve informacije koje opisuju karakteristike proizvoda kao usklađene sa ugovorom, funkcionalnom specifikacijom ili određenom namenom.</p>
        <p>Tehnička uputstva mogu biti prilagođena određenom kupcu.</p>
        <p>Omogućeno je upravljanje revizijama i sledljivošću između povezanih tehničkih uputstava.</p>
        <p>Standardno su dostupni izveštaji: Tehnička kartica (za internu upotrebu) i Kartica proizvoda (za komercijalnu upotrebu).</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/control-plans/control-plan-management">Kontrolni planovi</Link>
        <p>Kontrolni planovi sadrže sve planirane kontrole, inspekcije, merenja i ciljne vrednosti potrebne za proveru da li materijali i proizvodi zadovoljavaju definisane zahteve.</p>
        <p>Kroz Kontrolne planove moguće je unapred definisati kontrole koje se izvršavaju tokom celog životnog ciklusa artikla: od prijema materijala i povrata iz kooperacije do kontrola pre, tokom i nakon proizvodnje.</p>
        <p>Kao i Tehnička uputstva, Kontrolni planovi mogu biti prilagođeni Kupcu i/ili Dobavljaču. Omogućeno je i upravljanje revizijama i sledljivošću između povezanih Kontrolnih planova.</p>
        <p>Za svaku planiranu kontrolu moguće je definisati da li se sprovodi interno ili kod treće strane, kategoriju i merni instrument koji se koristi, tip vrednosti (Da/Ne ili numerička), nominalnu vrednost, donju i gornju granicu sa apsolutnim ili procentualnim tolerancijama, broj potrebnih merenja i učestalost njihove primene.</p>
        <p>Primeri tipova Kontrolnih planova: Kontrola prijema, Kontrola prijema za kritične dobavljače, Proizvodna kontrola i Završno ispitivanje.</p>
        <p>Kao standard dostupan je izveštaj: Kontrolni plan.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/items-control/item-control-management">Kontrole artikala</Link>
        <p>Kontrole artikala omogućavaju evidentiranje izvršenih merenja, zabeleženih vrednosti i određivanje usklađenosti ili neusaglašenosti kontrolisanog materijala, poluproizvoda ili gotovog proizvoda.</p>
        <p>Dokumenti iz kojih je moguće vršiti kontrole artikala uključuju: prijem robe, primke, ulazne račune, prijave proizvodnje, faze proizvodnih naloga, povrate iz kooperacije i skladišna knjiženja.</p>
        <p>Za svaku vrstu dokumenta moguće je definisati detalj artikla koji će biti predmet kontrole: bez grupisanja, po Lotu, po Serijskom broju ili po Jedinici utovara, kao i vrstu kontrole koja će biti kreirana i prioritetni Kontrolni plan iz kojeg će se preuzeti testovi.</p>
        <p>Moguće je definisati boje redova za različita stanja Kontrola artikala, koje se prikazuju u pretrazi Kontrola artikala.</p>
        <p>Takođe je moguće podesiti da sistem automatski predloži negativan rezultat testa pri prvom neusaglašenom merenju ili na osnovu aritmetičke sredine svih evidentiranih vrednosti.</p>
        <p>Upravljanje kontrolama prikazuje kontrolisani artikal, izvorni Kontrolni plan, ukupan rezultat kontrole, podatke izvornog dokumenta i za svaki izvršeni test sve informacije nasleđene iz Kontrolnog plana, uključujući izmerene vrednosti, proseke, rezultate, operatera i korišćeni merni instrument.</p>
        <p>Iz upravljanja je moguće izvršiti i premeštanje artikala iz skladišta kontrole kvaliteta u skladišta usaglašenih ili neusaglašenih artikala.</p>
        <p>Putem M.E.S. rešenja integrisanog u Fluentis moguće je unositi tražene informacije na jednostavan i direktan način.</p>
        <p>Standardno su dostupni izveštaji: Lista kontrola artikala po artiklu, Lista kontrola artikala po kupcu/dobavljaču, Lista kontrola artikala po vrsti dokumenta i C/NC etiketa artikla.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management">Sertifikati analize</Link>
        <p>Sertifikati analize potvrđuju izvršene kontrole proizvoda, usklađenost sa granicama definisanim u Kontrolnim planovima i povezanim Tehničkim uputstvima, te prate prodaju proizvoda.</p>
        <p>Standardno su dostupni izveštaji: Sertifikat analize i Izjava o usklađenosti.</p>
    </div>
</div>

## Početak korišćenja

### Tehnička uputstva

- potrebno je definisati [*Vrstu tehničkog uputstva*](/docs/configurations/tables/quality/item-control/data-sheets-type);
- potrebno je definisati [*Vrstu testa*](/docs/configurations/tables/quality/item-control/test-type) koja će se koristiti na kartici *Svojstva* u *Tehničkim uputstvima*;
- radi lakšeg upravljanja preporučuje se podešavanje [*Parametara kontrole artikala*](/docs/configurations/parameters/quality/item-control) u sekciji *Tehnička uputstva*;
- potrebno je kreirati novo [*Tehničko uputstvo*](/docs/quality/item-control/data-sheets/data-sheet-management).

### Kontrolni planovi

- potrebno je definisati [*Vrstu kontrolnog plana*](/docs/configurations/tables/quality/item-control/control-plan-type) i odgovarajuću *Numeraciju*;
- potrebno je definisati [*Vrstu testa*](/docs/configurations/tables/quality/item-control/test-type) koja će se koristiti na kartici *Planirani testovi* u [*Kontrolnim planovima*](/docs/quality/item-control/control-plans/control-plan-management);
- radi lakšeg upravljanja preporučuje se podešavanje [*Parametara kontrole artikala*](/docs/configurations/parameters/quality/item-control) u sekciji *Kontrolni planovi*;
- potrebno je kreirati novi [*Kontrolni plan*](/docs/quality/item-control/control-plans/control-plan-management).

### Kontrole artikala

- potrebno je definisati [*Vrstu kontrole artikala*](/docs/configurations/tables/quality/item-control/item-control-type) i [*Vrstu rezultata*](/docs/configurations/tables/quality/general/result-type);
- potrebno je definisati [*Kontrolni plan*](/docs/quality/item-control/control-plans/control-plan-management) i povezati ga sa artiklom ili fazom radnog ciklusa koja podleže kontroli kvaliteta;
- radi lakšeg upravljanja preporučuje se podešavanje [*Parametara kontrole artikala*](/docs/configurations/parameters/quality/item-control) u sekciji *Kontrole artikala*;
- potrebno je kreirati novu [*Kontrolu artikala*](/docs/quality/item-control/items-control/item-control-management) korišćenjem funkcionalnosti [*Uvoz artikala za kontrolu*](/docs/quality/item-control/items-control/item-control-import).

### Sertifikati analize

- potrebno je definisati [*Vrstu sertifikata analize*](/docs/configurations/tables/quality/item-control/c-o-a-type) i odgovarajuću *Numeraciju*;
- radi lakšeg upravljanja preporučuje se podešavanje [*Parametara kontrole artikala*](/docs/configurations/parameters/quality/item-control) u sekciji *Sertifikati analize*;
- potrebno je kreirati novi [*Sertifikat analize*](/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management).