---
title: Kontroling
sidebar_position: 1
---

Područje kontrolinga u **Fluentis ERP** obuhvaća sve funkcionalnosti potrebne za pripremu simulacija međubilance, upravljanje rekalsifikacijama bilance putem [*Modela*](/docs/controlling/reclassifications/create-reclassification-model) koji se mogu slobodno konfigurirati, kao i unos i održavanje svih poslovnih knjiženja potrebnih za upravljačko računovodstvo po centrima troška.

Također su dostupne procedure za konsolidaciju bilance namijenjene višedruštvenim instalacijama, kao i mogućnost usporedbe povijesnih obrađenih podataka, prognoza prodaje i izračuna troškova proizvoda te budžeta po poslovnim jedinicama.

Upravljanje controllingom naravno je integrirano sa svim područjima **Fluentis ERP-a**: od dohvata dokumenata u tranzitu unutar ciklusa obveza i potraživanja, do vrednovanja kvantitativnih podataka (*vrijeme* i *količine*) unesenih u izvještaje proizvodnje, kao i vrednovanja troškova materijala i vanjskih usluga, pa sve do evidentiranja sati i troškova aktivnosti i intervencija u području projekata.

Korisnik može u svakom trenutku, prateći razvoj poslovnih potreba, slobodno konfigurirati strukturu [*Poslovnih centara*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) koji će se koristiti u analitičkom računovodstvu, oslanjajući se na njihovu [*multidimenzionalnu*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) i višerazinsku strukturu, ali i na sve logike [*cost drivera*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) za raspodjelu podataka između centara.

Fleksibilnost modula omogućuje dohvat podataka iz različitih područja *Fluentis ERP-a**, ali i učitavanje iz vanjskih Excel tablica ili ručni unos.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Privremeno zatvaranje</Link>
        <p>Omogućuje simulaciju izvanslužbenog međubilanca, koji ostaje pohranjen u sustavu, koristeći niz automatiziranih procedura koje ubrzavaju korake:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Kreiraj infracjelogodišnje zatvaranje</Link></p>
            <p>- kreira početni set podataka za razdoblje</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Ispravne knjižene</Link></p>
            <p>- upravljanje razgraničenjima</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Knjiženja integracije</Link></p>
            <p>- upravljanje vremenskim razgraničenjima</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Vrednovanje područja nabave i prodaje</Link></p>
            <p>- upravljanje računima za primiti/izdati iz dokumenata u tranzitu u aktivnom/pasivnom ciklusu</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Knjiženje zaliha</Link></p>
            <p>- evidentira početne/završne zalihe</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Dohvat amortizacije dugotrajne imovine</Link></p>
            <p>- kreira obračun amortizacije</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Konsolidacija</Link></p>
            <p>- za izradu konsolidirane bilance</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Izvanslužbene završne knjižene</Link></p>
            <p>- za ručno upravljanje</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling-recording-intro">Kontroling</Link>
        <p>U ovom modulu nalaze se sve procedure pravog kontrolinga.</p>
        <p>**Prva nota**: početna evidencija fizičkih podataka ili knjiženja iz analitičkog područja.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Evidencija fizičkih kretanja</Link>: vrednovano iz proizvodnje/projekta ili ručno</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Izvanslužbena knjiženja područja</Link>: vrednovana automatski iz amortizacija ili zaliha, ili pak ručno</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Standardne tarife centara</Link>: ručno upravljanje</p>
        <p>**Povijesni podaci upravljanja**: u ovom dijelu nalaze se svi povijesni zapisi različitih obrađenih baza podataka</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Povijest fizičkih tokova</Link>: povijesna baza podataka fizičkih kretanja</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Povijest amortizacija</Link>: povijesna baza obrađenih amortizacija</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Povijest upravljačkih knjiženja</Link>: mjesečna i prerađena baza podataka prema svim driverima</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Povijest indeksa</Link>: povijesna baza troškovnih indeksa obrađenih po različitim centrima</p>
        <p>**Procedure**: u ovom dijelu nalaze se procedure dohvata i obrade podataka</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Dohvat podataka iz proizvodnje</Link>: dohvat vremena i troškova iz projekata, vremena iz proizvodnje, troškova iz internih/vanjskih radova</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Dohvat podataka iz prodajnih računa</Link>: dohvat provizija i primijenjenih popusta</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Obrada razdoblja</Link>: obrada fizičkih podataka, amortizacija i baze podataka primjenom drivera</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Ažuriranje proizvodnih tarifa</Link>: usklađivanje tarifa proizvodnih centara</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Glavna konsolidacija</Link>: kreiranje grupnog jedinstvenog kontrolinga</p>
        <p>**Povijest projekta**: u ovom dijelu nalaze se svi povijesni podaci obrađenih baza za rad po projektima/nalozima</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Povijest fizičkih kretanja projekta/naloga</Link>: povijesna baza vremena i količina utrošenih na projekt/nalog</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">*Upravljačka knjiženja*</Link>: povijesna baza izravnih troškova i prihoda projekta</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Vrijednosti iz proizvodnje</Link>: materijali i radovi izravno korišteni na projektu/nalogu</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Konsolidacija projekta/naloga</Link>: rezultirajuća baza s izravnim, neizravnim troškovima i driverima za raspodjelu općih troškova</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Izvještavanje</Link>
        <p>Modul posvećen pripremi i obradi modela za prikaz podataka iz područja, bilo kao računovodstvenih, bilo analitičkih ili upravljačkih podataka.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Modeli reklasifikacije</Link>: za slobodno definiranje strukture željenih reklasifikacija, primjenom računa i centara specifičnih za poslovnu stvarnost</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reklasifikacije</Link>: rezultati primjene podataka na različite modele, reklasificirani i pohranjeni za kasnije analize</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Usporedbe</Link>: procedura koja omogućuje slobodno uspoređivanje više reklasifikacija ili više područja, razdoblja i dimenzija analize upravljačkog računovodstva</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Budžetiranje</Link>
        <p>Upravljanje periodičnim budžetskim podacima, po centrima troška i/ili projektima.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Izvanslužbene budžetske knjižene</Link></p>
        <p>- budžetske knjižene za godinu, moguće uvezene iz Excela</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Knjiženje budžeta</Link></p>
        <p>- knjižene izrađenog budžeta, mjesečno raspodijeljene po pojedinim razdobljima</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Trošak proizvoda</Link>
        <p>U ovom modulu vrednujemo podatke iz sastavnica proizvoda kako bismo provjerili njihovu profitabilnost.</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Prognoze prodaje</Link>
        <p>U ovom modulu možemo kreirati prognoze prodaje za godinu ili razdoblje, polazeći primjerice od povijesnih podataka iz dokumenata u području prodaje, a zatim ih dalje prerađivati.</p>
    </div>
</div>

## Integracije s drugim područjima
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/finance-intro">Opće računovodstvo</Link>
        <p>Iz općeg računovodstva preuzimamo salda razdoblja, kako općeg tako i analitičkog računovodstva te projekata. Iz modula dugotrajne imovine vrednuju se podaci obračunatih amortizacija.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/logistics-intro">Logističko područje</Link>
        <p>Iz upravljanja skladištem uvozimo periodičnu valorizaciju zaliha.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-intro">Područje prodaje</Link>
        <p>Za evidentiranje računa koji tek trebaju biti izdani te provizija pripadajućih razdoblju prije njihove dospjelosti. Svi dokumenti iz područja prodaje vrednuju analitičko i projektno računovodstvo na svakoj stavci artikla.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchases-intro">Područje nabave i vanjskih radova</Link>
        <p>Za evidentiranje računa koji tek trebaju biti zaprimljeni, kako za robu u dolasku tako i za vanjske usluge koje još nisu fakturirane. Svi dokumenti iz područja nabave vrednuju analitičko i projektno računovodstvo na svakoj stavci artikla.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/project-management/project-management-intro">Upravljanje projektima</Link>
        <p>Iz područja projekata preuzimamo sate osoblja i podatke o vanjskim intervencijama.</p>
    </div>
    <div className="card">
###     <Link to="/docs/production/production-intro">Područje proizvodnje</Link>
        <p>Područje proizvodnje dostavlja kontrolingu podatke o vremenima (radna snaga i strojevi) te količinama utrošenim u fazama proizvodnje.</p>
    </div>
</div>

## Osnovni podaci
:::danger[Upozorenje]
Prije korištenja dostupnih funkcionalnosti kontrolinga, potrebno je postaviti niz parametara u [**Osnovnim tablicama**](/docs/controlling/controlling-parametrization/general-overview), koji ovise o ciljevima koje želite postići. Zbog svoje prirode, controlling može samo djelomično predvidjeti konfiguraciju tipa [**Fast start**](/docs/guide/fast-start).

## Tipičan radni tijek u području kontrolinga
Za proizvodnu tvrtku koja u potpunosti koristi procedure kontrolinga, periodični operativni tijek obično je sljedeći:
- Kreiranje međubilanca razdoblja, koji sadrži realizirane vrijednosti
- Preuzimanje podataka iz proizvodnje
- Obrada razdoblja
- Reklasifikacije bilance i usporedba reklasifikacija kontrolinga
- Konsolidirani izvještaj po projektu i/ili trošak proizvoda
- Procjena odstupanja od budžeta