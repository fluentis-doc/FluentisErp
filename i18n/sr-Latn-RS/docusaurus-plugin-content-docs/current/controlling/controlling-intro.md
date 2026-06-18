---
title: Kontroling
sidebar_position: 1
---

Oblast kontrolinga u **Fluentis ERP-u** obuhvata sve funkcionalnosti potrebne za pripremu simulacija bilansa, upravljanje reklasifikacijama bilansa putem [*Modela*](/docs/controlling/reclassifications/create-reclassification-model) koji se mogu slobodno konfigurisati, kao i unos i održavanje svih poslovnih knjiženja potrebnih za upravljačko računovodstvo po centrima troškova.

Takođe su dostupne procedure za konsolidaciju bilansa namenjene *intercompany* instalacijama, kao i mogućnost poređenja istorijski obrađenih podataka, prognoza prodaje, obračuna troškova proizvoda i budžeta po poslovnim jedinicama.

Upravljanje kontrolingom je, naravno, integrisano sa svim oblastima **Fluentis ERP-a**: od preuzimanja dokumenata u obradi unutar ciklusa obaveza i potraživanja, preko vrednovanja kvantitativnih podataka (*vreme* i *količine*) unetih u proizvodne izveštaje, kao i vrednovanja troškova materijala i eksternih usluga, pa sve do evidentiranja sati i troškova aktivnosti i intervencija u oblasti projekata.

Korisnik može u svakom trenutku, prateći razvoj poslovnih potreba, slobodno konfigurisati strukturu [*Poslovnih centara*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) koji će se koristiti u analitičkom računovodstvu, oslanjajući se na njihovu [*multidimenzionalnu*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) i višeslojnu strukturu, kao i na sve logike [*nosilaca troškova (cost drivera)*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) za raspodelu podataka između centara.

Fleksibilnost modula omogućava preuzimanje podataka iz različitih oblasti **Fluentis ERP-a**, ali i učitavanje iz eksternih Excel tabela ili ručni unos.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Privremeno zatvaranje</Link>
        <p>Omogućava simulaciju bilansa, koja ostaje sačuvana u sistemu, korišćenjem niza automatizovanih procedura koje ubrzavaju procese:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Privremeno zatvaranje</Link></p>
            <p>- kreira početni skup podataka za izabrani period</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Zapisi usklađenja</Link></p>
            <p>- upravljanje usklađenjima</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Zapisi integracije</Link></p>
            <p>- upravljanje integracijama podataka</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Valorizacija nabavke i prodaje</Link></p>
            <p>- upravljanje ulaznim i izlaznim računima</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Knjiženje zaliha</Link></p>
            <p>- evidentira početna i završna stanja zaliha</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Preuzimanje amortizacije osnovnih sredstava</Link></p>
            <p>- kreira obračun amortizacije</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Konsolidacija</Link></p>
            <p>- za izradu konsolidovanog bilansa</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Zatvaranje vanbilansnih knjiženja</Link></p>
            <p>- za ručno upravljanje</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling-recording-intro">Kontroling</Link>
        <p>U ovom modulu nalaze se sve procedure namenjene upravljačkom kontrolingu.</p>
        <p>Dnevnik knjiženja (prima nota): početna evidencija fizičkih podataka ili knjiženja iz analitičke oblasti.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Evidencija fizičkih kretanja</Link>: valorizacija iz proizvodnje/projekata ili ručni unos</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Vanbilansna knjiženja</Link>: valorizacija amortizacije, zaliha ili ručni unos</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Troškovi radnih centara</Link>: ručno upravljanje</p>
        <p><strong>Istorija upravljanja</strong>: u ovom delu nalaze se svi istorijski zapisi različitih obrađenih baza podataka</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Istorija fizičkih tokova</Link>: arhiva podataka fizičkih kretanja</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Istorija amortizacije</Link>: arhiva obračunate amortizacije</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Istorija upravljačkih knjiženja</Link>: mesečna baza podataka obrađena svim nosiocima troškova</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Istorija indeksa</Link>: arhiva troškovnih indeksa obrađenih po različitim centrima</p>
        <p><strong>Procedure</strong>: u ovom delu nalaze se procedure za preuzimanje i obradu podataka</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Preuzimanje podataka iz proizvodnje</Link>: preuzimanje vremena i troškova sa projekata, vremena iz proizvodnje i troškova internih/eksternih obrada</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Preuzimanje podataka sa izlaznih računa</Link>: preuzimanje provizija i odobrenih popusta</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Obrada perioda</Link>: obrada fizičkih podataka, amortizacije i baze podataka primenom nosilaca troškova</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Ažuriranje tarifa proizvodnih centara</Link>: usklađivanje tarifa proizvodnih centara</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Glavna konsolidacija</Link>: kreiranje jedinstvenog grupnog kontrolinga</p>
        <p><strong>Istorija projekata</strong>: u ovom delu nalaze se svi istorijski podaci obrađeni za rad po projektima/nalozima</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Istorija fizičkih kretanja projekta/naloga</Link>: arhiva vremena i količina utrošenih na projekat/nalog</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">Upravljačka knjiženja</Link>: arhiva direktnih troškova i prihoda projekta</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Vrednosti proizvodnje</Link>: materijali i radovi direktno korišćeni na projektu/nalogu</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Konsolidacija projekta/naloga</Link>: arhiva direktnih, indirektnih troškova i nosilaca za raspodelu opštih troškova</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Izveštavanje</Link>
        <p>Modul namenjen pripremi i obradi modela za prikaz podataka iz oblasti, bilo računovodstvenih, analitičkih ili upravljačkih podataka.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Modeli reklasifikacije</Link>: za slobodno definisanje strukture željenih reklasifikacija, primenom konta i centara specifičnih za poslovno okruženje</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reklasifikacije</Link>: rezultati primene podataka na različite modele, reklasifikovani i sačuvani za kasnije analize</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Poređenja</Link>: procedura koja omogućava slobodno poređenje više reklasifikacija ili više oblasti, perioda i dimenzija analize upravljačkog računovodstva</p>
    </div>

    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Budžetiranje</Link>
        <p>Upravljanje periodičnim budžetskim podacima po centrima troškova i/ili projektima.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Vanbudžetska evidencija</Link></p>
        <p>- budžetska knjiženja za godinu, sa mogućnošću uvoza iz Excel-a</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Knjiženja budžeta</Link></p>
        <p>- knjiženja kreiranog budžeta, mesečno raspoređena po pojedinim periodima</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Trošak proizvoda</Link>
        <p>U ovom modulu vrednuju se podaci iz sastavnica proizvoda radi provere njihove profitabilnosti.</p>
    </div>

    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Predviđanje prodaje</Link>
        <p>U ovom modulu mogu se kreirati prognoze prodaje za godinu ili određeni period, polazeći od istorijskih podataka iz dokumenata oblasti prodaje, a zatim ih dalje obrađivati.</p>
    </div>
</div>

## Integracije sa drugim oblastima

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/finance-intro">Opšte računovodstvo</Link>
        <p>Iz opšteg računovodstva preuzimaju se salda perioda, kako opšteg tako i analitičkog računovodstva i projekata. Iz modula osnovnih sredstava vrednuju se podaci obračunate amortizacije.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/logistics-intro">Logistička oblast</Link>
        <p>Iz upravljanja skladištem preuzima se periodična valorizacija zaliha.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-intro">Oblast prodaje</Link>
        <p>Za evidentiranje računa i provizija koje tek treba izdati u pripadajućem periodu pre njihovog dospeća. Svi dokumenti iz oblasti prodaje vrednuju analitičko i projektno računovodstvo na svakoj stavci artikla.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchases-intro">Oblast nabavke i eksternih usluga</Link>
        <p>Za evidentiranje računa koji tek treba da budu primljeni, kako za robu u dolasku tako i za spoljne usluge koje još nisu fakturisane. Svi dokumenti iz oblasti nabavke vrednuju analitičko i projektno računovodstvo na svakoj stavci artikla.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/project-management/project-management-intro">Upravljanje projektima</Link>
        <p>Iz oblasti projekata preuzimaju se sati zaposlenih i podaci o eksternim intervencijama.</p>
    </div>
    <div className="card">
###     <Link to="/docs/production/production-intro">Oblast proizvodnje</Link>
        <p>Oblast proizvodnje dostavlja kontrolingu podatke o vremenima (radna snaga i mašine) i količinama utrošenim u fazama proizvodnje.</p>
    </div>
</div>

## Osnovni podaci

:::danger[Upozorenje]
Pre korišćenja dostupnih funkcionalnosti kontrolinga potrebno je podesiti niz parametara u [**Osnovnim tabelama**](/docs/controlling/controlling-parametrization/general-overview), koji zavise od ciljeva koje želite da ostvarite. Zbog svoje prirode, kontroling može samo delimično predvideti konfiguraciju tipa [**Fast start**](/docs/guide/fast-start).
:::

## Tipičan tok rada u oblasti kontrolinga

Za proizvodno preduzeće koje u potpunosti koristi procedure kontrolinga, periodični operativni tok obično je sledeći:

- Kreiranje bilansa perioda koji sadrži ostvarene vrednosti
- Preuzimanje podataka iz proizvodnje
- Obrada perioda
- Reklasifikacija bilansa i poređenje reklasifikacija kontrolinga
- Konsolidovani izveštaj po projektu i/ili obračun troška proizvoda
- Analiza odstupanja u odnosu na budžet