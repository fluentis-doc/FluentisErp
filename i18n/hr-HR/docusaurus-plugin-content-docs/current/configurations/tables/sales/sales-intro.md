---
title: PRODAJA
sidebar_position: 1
---

Područje **Prodaje** u **Fluentis ERP** dizajnirano je za osiguranje potpune i optimizirane uprave poslovnim aktivnostima, nudeći modularnu i međusobno povezanu strukturu koja podržava cijeli proces prodaje, od kreiranja ponuda do analize marži. 

## Prethidna komfiguracija područja 

Prije korištenja dostupnih funkcionalnosti potrebno je upravljati nizom osnovnih podataka: oni su podijeljeni u dvije glavne grupe, [**Tablice**](/docs/configurations/tables/sales/agent-category)  [**Parametri**](/docs/configurations/parameters/sales/general-overview).

Alternativno, dostupan je postupak [**Fast Start**](/docs/guide/fast-start) za koji je potrebno upravljati samo minimalnim skupom podataka poput [**Šifrarnici**](/docs/erp-home/registers/registers-intro).


## Moduli prodaje

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/offers/settings">Ponude</Link>
        <p>Kreiranje, praćenje i ažuriranje komercijalnih ponuda, integrirajući ih izravno s poslovnim procesima.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Narudžbe</Link>
        <p>Upravljanje i organizacija procesa nabave dobara i usluga od strane kupaca.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-delivery-notes/general-overview">DDT</Link>
        <p>Traganje i dokumentacija kretanja robe u izlazu.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-invoices/general-overview">Računi</Link>
        <p>Potvrda o prodajnoj transakciji, s naznakom dobara ili usluga koje su pružene, troškova, PDV-a i uvjeta plaćanja.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">POS</Link>
        <p>Upravljanje prodajom izravno na blagajni, s alatima za izradu i upravljanje računima, izdavanje potvrda i automatsko ažuriranje zaliha u skladištu.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Obračun trgovačkih predstavnika</Link>
        <p>Upravljanje prodajom izravno na blagajni, s naprednim alatima za izradu i upravljanje računima, izdavanje potvrda i automatsko ažuriranje zaliha u skladištu.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Prodajni cjenici</Link>
        <p>Lista cijena proizvoda ili usluga koje se nude kako bi se olakšao proces prodaje i uključili eventualni primjenjivi popusti.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Upravljanje cijenama</Link>
        <p>Upravljanje dodatnim popustima temeljenim na komercijalnoj kategoriji kojoj kupac pripada ili drugim politikama definiranja popusta.</p>
    </div>
</div>

## Integrazioni con altre aree

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">Logistica</Link>
        <p>Ažuriranje automatskih **zaliha** u stvarnom vremenu tijekom registracije prodajnih dokumenata.</p>
        <p>Mogućnost generiranja **Pripreme** i **Planova utovara** izravno iz narudžbi kupaca, s daljnjom transformacijom u **OTD** i **Fakture** za optimizirano upravljanje isporukama.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Planiranje i proizvodnja</Link>
        <p>Podrška **Demand Planningu** putem integracije s prodajnim procesima, osobito korisno za proizvodne modele poput: **Make to Order (MTO)**, **Engineering to Order (ETO)**, **Assembly to Order (ATO)**.</p> 
        <p>Ova povezanost osigurava usklađenost između prodajnih naloga i proizvodnih aktivnosti, poboljšavajući planiranje resursa i operativnu učinkovitost.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Knjigovodstvo</Link>
        <p>Integracija osigurava glatko i precizno upravljanje administrativnim transakcijama proizašlim iz prodajnih dokumenata, smanjujući pogreške i automatizirajući računovodstveno bilježenje.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Kontrola poslovanja</Link>
        <p>Omogućuje napredne alate za analizu praćenja **profitnih marži** u svakom prodajnom procesu.</p>
        <p>Omogućuje detaljnu analizu komercijalnih performansi, podržavajući optimizaciju prodajnih strategija i poboljšanje profitabilnosti tvrtke.</p>
    </div>
</div>

## Tipični operativni tok područja  

1. **Prikupljanje prilika**: ponude se upravljaju putem CRM modula, prikupljajući informacije o postojećim i potencijalnim kupcima.    
2. **Pretvorba ponuda u naloge**: prihvaćene ponude se pretvaraju u naloge, centralizirajući informacije za nastavak procesa.   
3. **Automatsko kreiranje dokumenata**: iz naloga se automatski generiraju Otpremnice i Računi prodaje.    
4. **Maloprodaja (POS)**: operacije na prodajnom mjestu upravljaju se putem POS modula, koji evidentira prodaju i ažurira računovodstvo u stvarnom vremenu.   
5. **Upravljanje cijenama**: ažuriranje i evidentiranje cijena i popusta vezanih za kodirane artikle.    
6. **Likvidacija provizija**: provizije za agente se automatski izračunavaju i likvidiraju, pojednostavljujući upravljanje komisijama.  