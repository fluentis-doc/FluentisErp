---
title: Uvod
sidebar_position: 1
---

# Uvod

Novi alat razvijen je kako bi optimizirao i pojednostavio proces otpreme te omogućio učinkovitiju i integriraniju kontrolu svih logističkih aktivnosti.

Modul **Upravljanje otpremama/dostavama** u sustavu Fluentis uključuje funkcionalnost **grupiranja**, koja omogućuje objedinjavanje više pošiljaka različitih pošiljatelja namijenjenih istom geografskom području u jedan utovar ili kontejner.

Na taj se način učinkovitije iskorištava raspoloživi prostor u prijevoznim sredstvima, poput kamiona, brodskih kontejnera ili zrakoplova, uz istodobno smanjenje troškova prijevoza u odnosu na pojedinačne pošiljke.

Uz to je implementiran i **napredni alat za planiranje**, koji omogućuje pregled otprema prema vozilu, vozaču, prijevozniku i kupcu. Zahvaljujući jednostavnoj funkciji *drag & drop*, korisnici mogu jednostavno reorganizirati otpreme, pomaknuti ih na raniji ili kasniji termin te promijeniti dodijeljeno vozilo ili vozača, čime se osigurava fleksibilnije i učinkovitije upravljanje logističkim procesima.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/logistics/shipping/shippings-intro">Otpreme/Dostave</Link>

<p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Otpreme/Dostave</Link></p>
<p>Zahvaljujući funkcionalnosti <i>groupage</i>, moguće je objediniti pošiljke različitih kupaca ili dobavljača u jednu transportnu jedinicu.</p>

<p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Kalendar</Link></p>
<p>Omogućuje učinkovito planiranje i upravljanje operativnim i logističkim aktivnostima, optimizirajući resurse i poboljšavajući koordinaciju otprema.</p>

    </div>
</div>

## Za početak rada s modulom **Otpreme/Dostave**

Prije korištenja modula **Otpreme/Dostave** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- definirati [*Vrste otpreme*](/docs/configurations/tables/logistics/shipping-type)
- definirati [*Statuse otpreme*](/docs/configurations/tables/logistics/shipping-states)
- definirati [*Vozila*](/docs/logistics/motorvehicles/motorvehicle)
- definirati [*Vozače vozila*](/docs/logistics/motorvehicles/motorvehicle-drivers)
- definirati [*Razloge zastoja vozila*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)
- definirati [*Razloge odsutnosti vozača*](/docs/configurations/tables/logistics/driver-off-time-reasons)
- definirati [*Vozačke dozvole*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- definirati [*Vrste vlasništva vozila*](/docs/configurations/tables/logistics/motorvehicle-ownership)
- definirati [*Marke vozila*](/docs/configurations/tables/logistics/motorvehicle-brands)
- definirati [*Vrste goriva vozila*](/docs/configurations/tables/logistics/motorvehicle-gas-type)
- definirati [*Vrste vozila*]

## Povezanost s ostalim modulima

Modul **Otpreme/Dostave** usko je povezan sa [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item) i [*Narudžbama kupaca*](/docs/sales/sales-orders/settings), budući da je artikle moguće dodavati izravno iz narudžbe kupca.

Iz otpreme je također moguće izravno kreirati:

- [*Otpremnice (DDT)*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn)
- [*Izlazne račune*](/docs/sales/sales-invoices/general-overview)
- [*Picking*](/docs/logistics/picking/picking-intro)