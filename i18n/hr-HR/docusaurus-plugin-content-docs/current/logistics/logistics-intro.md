---
title: LOGISTIKA
sidebar_position: 1
---

Područje **Logistika** u sustavu **Fluentis ERP** obuhvaća sve funkcionalnosti pravog logističkog odjela, omogućujući praćenje i sljedivost kretanja robe u skladištu te svih artikala unutar i izvan organizacije.

U ovom se području objedinjuju dokumenti vezani uz nabavni i prodajni proces, kao i interna skladišna kretanja povezana s procesima proizvodne transformacije.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/items/items-intro">Artikli</Link>
        <p><Link to="/docs/logistics/items/items-intro" className="bold-link">Artikli</Link></p>
        <p>Omogućuje detaljno upravljanje artiklima te osigurava sljedivost i učinkovito upravljanje zalihama unutar skladišta.</p>
        <p><Link to="/docs/logistics/items/stocks-visualization" className="bold-link">Pregled zaliha</Link></p>
        <p>Omogućuje jednostavan pregled skladišnih zaliha i usporedbu fizičkih i knjigovodstvenih količina.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/warehouse/warehouse-intro">Skladište</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Skladišna knjiženja</Link></p>
        <p>Omogućuje upravljanje ulaznim i izlaznim skladišnim kretanjima uz potpunu sljedivost zaliha.</p>
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Lokacije</Link></p>
        <p>Omogućuje povezivanje artikala s određenim skladišnim lokacijama radi povećanja logističke učinkovitosti.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Izvještaji upravljanja</Link></p>
        <p>Omogućuju detaljan pregled zaliha i skladišnih stanja te olakšavaju upravljanje i praćenje artikala.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Izvještaji računovodstva</Link></p>
        <p>Pružaju pregled skladišnih kretanja te podržavaju evidentiranje i kontrolu poslovnih transakcija.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-serial-number-intro">Lotovi i serijski brojevi</Link>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Šifarnik lotova</Link></p>
        <p>Omogućuje pretraživanje i pregled podataka o lotovima, uključujući povezana ulazna i izlazna skladišna kretanja.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Sljedivost lota</Link></p>
        <p>Generira izvještaje o statusu i korištenju lotova, unaprijed i unatrag kroz proizvodni lanac.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Stvaranje lota iz lota</Link></p>
        <p>Omogućuje kreiranje novog lota na temelju postojećeg uz upravljanje povezanim ulaznim i izlaznim kretanjima.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Stvaranje lota iz lota sa zamjenom artikla</Link></p>
        <p>Omogućuje kreiranje novog lota uz istovremenu promjenu povezanog artikla i upravljanje pripadajućim lotovima.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/serial-number-register" className="bold-link">Šifarnik serijskih brojeva</Link></p>
        <p>Omogućuje upravljanje i sljedivost svakog pojedinačnog artikla putem jedinstvenog serijskog broja, što je posebno korisno za artikle visoke vrijednosti ili kritične artikle.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-intro">Picking (Slaganje robe)</Link>
        <p><Link to="/docs/logistics/picking/picking-management" className="bold-link">Picking (Slaganje robe)</Link></p>
        <p>Omogućuje kreiranje lista za preuzimanje robe, olakšavajući odabir artikala za isporuku kupcima ili za interna skladišna kretanja.</p>
        <p><Link to="/docs/logistics/picking/unload-picking" className="bold-link">Razduženje</Link></p>
        <p>Kreira skladišna knjiženja i generira precizne evidencije za odabrane pickinge.</p>
        <p><Link to="/docs/logistics/picking/unload-check-row-management" className="bold-link">Razduženje prema potvrđenim stavkama</Link></p>
        <p>Izvršava otpis označenih redaka pickinga te olakšava kretanje robe na temelju potvrđenih stavaka.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">Utovarne jedinice</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Upravljanje utovarnim jedinicama</Link></p>
        <p>Omogućuje kreiranje, ulaz i izlaz utovarnih jedinica te osigurava učinkovitu kontrolu skladišnih kretanja.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista za preuzimanje utovarnih jedinica / Packing lista</Link></p>
        <p>Omogućuje upravljanje preuzimanjem utovarnih jedinica za otpremu te olakšava organizaciju artikala namijenjenih isporuci kupcima.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista za prijenos utovarnih jedinica</Link></p>
        <p>Omogućuje premještanje utovarnih jedinica unutar skladišta i pojednostavljuje upravljanje zalihama.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Fizičke inventure (zalihe)</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Fizička zaliha</Link></p>
        <p>Omogućuju izradu inventurnih lista i usporedbu fizičkih i knjigovodstvenih zaliha radi usklađivanja podataka.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Razlike u inventurnim listama</Link></p>
        <p>Omogućuju izračun odstupanja između knjigovodstvenih i fizičkih količina te generiranje knjiženja za usklađenje zaliha.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Arhiva zatvaranja skladišta</Link></p>
        <p>Sadrži podatke o zatvaranjima skladišta te omogućuje pregled povijesnih podataka o vrednovanju i zalihama.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Arhiva skladišta</Link></p>
        <p>Evidentira vrednovane inventure i omogućuje detaljan pregled stanja zaliha kroz vrijeme.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizacija skladišta</Link></p>
        <p>Omogućuje zatvaranje skladišta na određeni datum te kreiranje početnih knjiženja sa stanjem zaliha.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Procijenjena vrijednost inventara</Link></p>
        <p>Generira detaljne izvještaje o inventuri, uključujući količine i vrijednosti artikala na temelju prosječnog ili zadnjeg troška.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/load-plans/search-plan">Planovi utovara</Link>
        <p><Link to="/docs/logistics/load-plans/search-plan" className="bold-link">Planovi utovara</Link></p>
        <p>Optimiziraju raspored i smještaj robe unutar prijevoznog sredstva, osiguravajući stabilnost, sigurnost i učinkovitost tijekom transporta.</p>
     </div>
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Dostava</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Dostave</Link></p>
        <p>Pomoću groupage upravljanja moguće je objediniti pošiljke različitih kupaca ili dobavljača u jednu transportnu jedinicu.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Kalendar</Link></p>
        <p>Omogućuje učinkovito planiranje i upravljanje operativnim i logističkim aktivnostima, optimizirajući resurse i poboljšavajući koordinaciju otprema.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/motorvehicles/motorvehicle-management">Motorna vozila</Link>
        <p><Link to="/docs/logistics/motorvehicles/motorvehicle" className="bold-link">Upravljanje vozilima</Link></p>
        <p>Ključno za optimizaciju korištenja, održavanja i sigurnosti vozila u vlasništvu poduzeća.</p>
        <p><Link to="/docs/logistics/motorvehicles/material-consumption/material-consumption-filter" className="bold-link">Potrošnja materijala</Link></p>
        <p>Omogućuje upravljanje skladišnim kretanjima vezanima uz potrošnju materijala povezanih s vozilima.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">WMS</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Nabava</Link></p>
        <p>Omogućuje identifikaciju i precizan prijem pristigle robe, kreiranje otpremnice nabave te, prema potrebi, upravljanje utovarnim jedinicama.</p>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Logistika</Link></p>
        <p>Omogućuje upravljanje svim skladišnim kretanjima, provjeru stanja zaliha i provođenje inventure.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Utovarne jedinice</Link></p>
        <p>Omogućuje upravljanje svim skladišnim kretanjima koja koriste utovarne jedinice.</p>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Prodaja</Link></p>
        <p>Omogućuje upravljanje procesom otpreme robe kupcima.</p>
    </div>
</div>