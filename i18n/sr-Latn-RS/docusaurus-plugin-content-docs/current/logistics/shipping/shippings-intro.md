---
title: Uvod
sidebar_position: 1
---

# Uvod

Novi alat razvijen je kako bi optimizovao i pojednostavio proces otpreme i omogućio efikasniju i integrisaniju kontrolu svih logističkih aktivnosti.

Modul **Upravljanje otpremama/dostavama** u sistemu Fluentis uključuje funkcionalnost **grupisanja**, koja omogućava objedinjavanje više pošiljki različitih pošiljalaca namenjenih istom geografskom području u jedan utovar ili kontejner.

Na taj način efikasnije se koristi raspoloživi prostor u prevoznim sredstvima, kao što su kamioni, brodski kontejneri ili avioni, uz istovremeno smanjenje troškova prevoza u odnosu na pojedinačne pošiljke.

Pored toga implementiran je i **napredni alat za planiranje**, koji omogućava pregled otprema prema vozilu, vozaču, prevozniku i kupcu. Zahvaljujući jednostavnoj funkciji *drag & drop*, korisnici mogu lako reorganizovati otpreme, pomeriti ih na raniji ili kasniji termin i promeniti dodeljeno vozilo ili vozača, čime se obezbeđuje fleksibilnije i efikasnije upravljanje logističkim procesima.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/logistics/shipping/shippings-intro">Otpreme/Dostave</Link>

<p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Otpreme/Dostave</Link></p>
<p>Zahvaljujući funkcionalnosti <i>groupage</i>, moguće je objediniti pošiljke različitih kupaca ili dobavljača u jednu transportnu jedinicu.</p>

<p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Kalendar</Link></p>
<p>Omogućava efikasno planiranje i upravljanje operativnim i logističkim aktivnostima, optimizujući resurse i poboljšavajući koordinaciju otprema.</p>

    </div>
</div>

## Za početak rada sa modulom **Otpreme/Dostave**

Pre korišćenja modula **Otpreme/Dostave** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- definisati [*Vrste otpreme*](/docs/configurations/tables/logistics/shipping-type)
- definisati [*Statuse otpreme*](/docs/configurations/tables/logistics/shipping-states)
- definisati [*Vozila*](/docs/logistics/motorvehicles/motorvehicle)
- definisati [*Vozače vozila*](/docs/logistics/motorvehicles/motorvehicle-drivers)
- definisati [*Razloge zastoja vozila*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)
- definisati [*Razloge odsustva vozača*](/docs/configurations/tables/logistics/driver-off-time-reasons)
- definisati [*Vozačke dozvole*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- definisati [*Vrste vlasništva vozila*](/docs/configurations/tables/logistics/motorvehicle-ownership)
- definisati [*Marke vozila*](/docs/configurations/tables/logistics/motorvehicle-brands)
- definisati [*Vrste goriva vozila*](/docs/configurations/tables/logistics/motorvehicle-gas-type)
- definisati [*Vrste vozila*]

## Povezanost sa ostalim modulima

Modul **Otpreme/Dostave** usko je povezan sa [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item) i [*Narudžbinama kupaca*](/docs/sales/sales-orders/settings), budući da je artikle moguće dodavati direktno iz narudžbine kupca.

Iz otpreme je takođe moguće direktno kreirati:

- [*Otpremnice (DDT)*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn)
- [*Izlazne račune*](/docs/sales/sales-invoices/general-overview)
- [*Picking*](/docs/logistics/picking/picking-intro)