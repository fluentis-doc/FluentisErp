---
sidebar_position: 1
title: ADMINISTRATIVNA 
---

## Funkcionalnosti 

Područje posvećeno **upravljanju administrativnim poslovima** u **Fluentis ERP** obuhvaća funkcionalnosti potrebne za pravilno **vođenje računovodstvenih evidencija**, izradu **godišnjeg financijskog izvještaja** i ispunjavanje **fiskalnih obaveza** koje obično obrađuje sama tvrtka.

Osim toga, prisutne su funkcionalnosti za upravljanje **imovinom**, **leasingom** i **dugoročnim kreditima**, uz osnovne funkcije za poslovanje s inozemstvom, poput automatiziranog popunjavanja **Intrastat** popisa i drugih fiskalnih komunikacija vezanih uz razmjenu s inozemnim partnerima.

Upravljanje računovodstvom integrirano je s aktivnim i pasivnim ciklusima, elektroničkim fakturiranjem, s *Skladištem* i *Kontrolingom*.

### Detalj Funkcionalnosti

```javascript
import Link from '@docusaurus/Link';
```

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Računovodstvene evidencije</Link>
        <p>za unos računovodstvenih transakcija i povezane porezne transakcije te automatske procedure povezane s njima (prilagodbe i zatvaranje računa).</p>
        <p>Uključuje potrebne</p>
        <p><Link to="/docs/finance-area/ledger-records/accounting-report/trial-balance" className="bold-link">računovodstvene ispiske</Link></p>
        <p>Izvode, Bilans stanja itd.</p>
        <p><Link to="/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet" className="bold-link">fiskalne ispiske</Link></p>
        <p>računovodstveni dnevnik, porezni registri, obračuni PDV-a itd.</p>
         <p><Link to="/docs/finance-area/ledger-records/analytic-reports/cost-centres-analysis" className="bold-link">analitičke ispiske</Link></p>
        <p>za kontrolu transakcija po troškovnim centrima analitičkog računovodstva.</p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/maturity-values/intro">Otvoreni računi</Link>
        <p>modul za upravljanje otvorenim računima koji hrane kalendare kupaca i dobavljača, prvenstveno se automatski ažurira računovodstvenim transakcijama i može se konzultirati na različite načine (na ekranu ili putem ispisa modula)</p>
        <p>Uključuje</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/loans-management" className="bold-link">Upravljanje dugoročnim kreditima (Gestione mutui passivi)</Link></p>
        <p>Za izračun planova otplate i automatsko knjiženje rata kredita.</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/dunned-maturity-values" className="bold-link">Upravljanje obavijestima o plaćanju</Link></p>
        <p>Za automatsko generiranje i slanje obavijesti klijentima.</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/commissions" className="bold-link">Provizije Agenta</Link></p>
        <p>Za upravljanje provizijama direktno iz računovodstva, kao alternativa prodajnom modulu.</p>
        <p><Link to="/docs/finance-area/maturity-values/procedures/cash-management" className="bold-link">Upravljanje likvidnošću</Link></p>
        <p>Za provjeru i upravljanje bankovnom dostupnošću te eventualno odgodu ili izmjenu obaveza ili promjenu banke.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/declarations/intro">Izvještaji</Link>
        <p>modul za obradu fiskalnih obračuna, posebno obveza vezanih uz PDV i odbitke.</p>
        <p>Uključuje razne funkcionalnosti poput</p>
        <p><Link to="/docs/finance-area/declarations/declarations/withholding-tax-certification" className="bold-link">Certifikacija elektroničkih odbitaka</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/periodic-vat-calculation" className="bold-link">Obavijest o periodičnom obračunu PDV-a</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/intent-declaration" className="bold-link">Izjava o namjerama</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/plafond/general-overview" className="bold-link">PDV plafon</Link></p>
        <p><Link to="/docs/finance-area/declarations/intrastat/general-overview" className="bold-link">Intrastat popisi</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/professional-men/general-overview">Primatelji</Link>
        <p>modul specifično posvećen upravljanju profesionalnim dobavljačima koji izdaju račune i podliježu odbicima (uključujući trgovačke agente).</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/model-f24/f24-management" className="bold-link">Model F24</Link></p>
        <p>Za automatizirano upravljanje PDV-om i odbicima.</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/calculate-commissions" className="bold-link">Izračun provizija</Link></p>
        <p>Za upravljanje agentima direktno iz administrativnog odjela kao alternativu prodaji.</p>
        <p><Link to="/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro" className="bold-link">Enasarco</Link></p>
        <p>Za knjiženje doprinosa za mirovinsko osiguranje agenata.</p>
        <p><Link to="/docs/finance-area/professional-men/reports/agent-reports" className="bold-link">Izvještaji agenata</Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/fixed-assets/general-overview">Imovina</Link>
        <p>modul za upravljanje dugotrajnom imovinom, s pripadajućim postupcima amortizacije i potrebnim ispisima.</p>
        <p>Uključuje razne funkcionalnosti kao što su</p>
        <p><Link to="/docs/finance-area/fixed-assets/depreciation-plans-simulation" className="bold-link">Simulacija planova amortizacije</Link></p>
        <p><Link to="/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation" className="bold-link">Standardna amortizacija</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/leasing/intro">Leasing</Link>
        <p>specifičan modul za upravljanje i knjiženje leasinga.</p>
        <p>Također uključuje</p>
        <p><Link to="/docs/finance-area/leasing/procedures/maxifee-accrual-calculation" className="bold-link">Izračun Maxicanone</Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/e-invoice/intro">Elektroničko fakturiranje</Link>
        <p>modul smješten u ovom dijelu priručnika iako je transverzalan, kako bi se prikazale potrebne pojedinosti s administrativnog gledišta i mogućnosti automatskog upravljanja i knjiženja elektroničkih faktura.</p>
        <p><Link to="/docs/finance-area/sdi-documents/sdi-documents-intro" className="bold-link">Uvod</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/configuration_einvoice" className="bold-link">Postavke za oznake i specifična polja elektroničke fakture</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/bizlink-connection" className="bold-link">Inicijalne konfiguracije</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/auto-invoice/parameters" className="bold-link">Automatsko fakturiranje</Link></p>
        <p>za određene vrste nabave poput obrnutog PDV-a, unutar EU i usluga izvan EU.</p>
        <p><Link to="/docs/finance-area/sdi-documents/incoming-purchase-documents" className="bold-link">Upravljanje elektroničkim fakturama nabave</Link></p>
        <p>Sadrži pododjeljke za automatsko knjiženje i izradu dokumenata pasivnog ciklusa.</p>
    </div>
</div>

## Osnovni podaci
:::danger[Pažnja]
Prije korištenja dostupnih funkcionalnosti potrebno je upravljati nizom osnovnih podataka: oni su podijeljeni u dvije glavne skupine, [**Tablice**](/docs/configurations/tables/finance/general-overview) i [**Parametri**](/docs/configurations/parameters/finance/general-overview).

Alternativno, dostupna je procedura **Fast Start** opisana u nastavku.

Aktiviranjem Fast Starta bit će potrebno upravljati samo minimalnim skupom podataka kao što su [**Šifarnici**](/docs/erp-home/registers/registers-intro).
:::

## Procedura di Fast Start

:::important[**Fast Start**]
Glavna karakteristika administrativnog područja je njegova *Usaglašenost* s računovodstvenim i fiskalnim normama i mogućnost inicijalizacije [**okruženja *FastStart* potpuno spremnog za korištenje**](/docs/guide/fast-start) i konfiguriranog za poštivanje propisa te omogućavanje trenutnog korištenja.

Korisnik može u svakom trenutku konfigurisati prema vlastitim željama računovodstvene sheme, porezne kodove, registre itd...
:::


## Tok unosa podataka

Fleksibilnost modula omogućuje unos podataka na različite načine: 

- **Ručno**, putem [**izravnog unosa računovodstvenih isprava (l'immissione diretta di scritture contabili)**](/docs/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description). Ovom metodom obično se unose ispravci koji nisu obuhvaćeni automatskim postupcima (Prihodi i Razgraničenja i Amortizacije) kao što su **rezervacije za rizike i troškove, otpis potraživanja** itd., kao i evidencije poput **obračuna plaća zaposlenika** itd.
 
- **Automatski** zahvaljujući **interkonnekciji s drugim modulima upravljanja**, poput blagajne, kontrole i aktivnih i pasivnih ciklusa. Tipično se automatski evidentiraju **prihode i rashodi, isplate putem bankovnih transfera i pasivne Ri.Ba., naplate putem aktivnih Ri.Ba. ili menica, leasinga, otplata kredita** itd.

- **Pokretanje obrada i procedura**: koje čitaju osnovne podatke za **izvršavanje izračuna i proizvodnju dokumenata ili telematičkih tokova** (kao što je obrada **fiskalne prijave koja čita PDV podatke generirane računovodstvenim ispravama**) ili generiraju dodatne računovodstvene isprave ili općenito dodatne podatke (kao što su procedure izračuna i pohrane **prilagodbi** ili knjiženje **zatvaranja i ponovnog otvaranja računa** na kraju i početku godine). 


## Tipični radni postupak u administrativnom području

Unatoč tome što različiti moduli omogućuju fleksibilnost i mogućnost upravljanja podacima na različite načine, automatski ili ručno, prikazujemo tipični cjeloviti radni postupak koji uključuje administrativno područje i druga područja koja su mu neposredno povezana.

- [**Otvori inicijalne salda**](/docs/finance-area/ledger-records/records/automatic-accounts-opening/new) (pomoćni čarobnjak kao alternativa ručnom učitavanju putem računovodstvene isprave) ili [uvoz](/docs/applications/bizlink/import-posting-ledgers) iz drugog sustava ili automatsko ponovo otvaranje [zatvorenih računa prethodne godine](/docs/finance-area/ledger-records/records/automatic-account-closing/new/new-intro)
- [Uvoz otvorenih računa (Importazione delle partite aperte)](/docs/applications/bizlink/import-open-matutities), potreban samo u slučaju migracije iz prethodnog sustava.
- [Uvoz imovine (Importazione cespiti)](/docs/applications/bizlink/import-fixed-assets), potreban samo u slučaju migracije iz prethodnog sustava. Nabavke tijekom godine automatski dodaju informacije o imovini putem pripadajućih računovodstvenih isprava (koristeći odgovarajuće računovodstvene uzroke).
- **Računovodstvene evidencije** (automatski postupak) [**aktivnog**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) ciklusa i **pasivnog** (također od [elektroničkih računa](/docs/finance-area/sdi-documents/incoming-purchase-documents#contabilizzazione-automatica)).
- Upravljanje [**Otvorenim računima**](/docs/finance-area/maturity-values/intro), automatski, povezano s stvaranjem računovodstvenih transakcija kako za fakturiranje, tako i za naplatu i plaćanje.
- Računovodstvene evidencije **naplata** i **plaćanja** (automatski postupak, u alternativi ili za određene tipove može se obraditi putem ručnih evidencija). Za naplate, tipično je automatiziran postupak [**Bankovne uplatnice**](/docs/treasury/bills-holding/accounting/bills-accounting/accounting). Za plaćanja, tipično je automatiziran postupak [**Bankovnih transfeta**](/docs/treasury/vendors-payments/accounting/filter). Postupci su smješteni u [**blagajničkoj oblasti**](/docs/treasury/treasury-intro).
- Trenutni računovodstveni ispisi [izvoda](/docs/finance-area/ledger-records/accounting-report/account-statement) (*knjige*), [probni bilansi](/docs/finance-area/ledger-records/accounting-report/trial-balance), [godišnjeg izvještaja](/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet) i [računovodstvenog dnevnika](/docs/finance-area/ledger-records/fiscal-report/journal).
- Ispiši [knjige](/docs/finance-area/maturity-values/reports/account-statement-on-open-maturity-values) kupaca i dobavljača poput [kalendara dospijeća](/docs/finance-area/maturity-values/reports/customer-vendor-due-register) itd.
- [**Obračun**](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) periodičnog **PDV-a**.
- Ostale periodične [porezne obveze](/docs/finance-area/declarations/intro).  
- Upravljanje prijemom [računa](/docs/finance-area/professional-men/general-overview) od profesionalaca i [Trgovačkih agenata](/docs/sales/agents/procedures/create-professional-man-commission) (funkcionalnost smještena u području prodaje) i godišnja [certifikacija jedinstvenih odbitaka](/docs/finance-area/declarations/declarations/withholding-tax-certification) odbitaka.
- Obrada (opcionalno) putem funkcija područja [Kontrolinga](/docs/controlling/mid-year-closures/general-overview) za detaljne periodične računovodstvene situacije. Razdoblje predmet situacije može se slobodno odabrati i mogu se pridružiti određene automatske procedure za generiranje, proporcionalno analiziranom razdoblju, prilagodbe (rate i razlike) i amortizaciju imovine (u razdoblju), konačne zalihe i račune koji trebaju biti izvršeni i primljeni.
- [**Zapisi usklađenja**](/docs/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation) (rate i razlike i knjiženje koja treba primiti) automatski izračun (čitajući datume ekonomske odgovornosti u unesenim računovodstvenim transakcijama) i knjiženje; druge prilagodbe ručno unesene kao što su otpis potraživanja, rezervacije itd.
- Izračun i knjiženje [**amortizacija**](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): automatski s posebnom procedurom.
- Knjiženje završnih zaliha: ručno knjiženje koje se može osloniti na procedure logističkog područja za izračun [vrijednosti zaliha](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity).
- [**Zatvaranje računa**](/docs/finance-area/ledger-records/records/automatic-account-closing/new/new-intro): automatski postupak s mogućnošću automatskog ponovnog otvaranja u sljedećem razdoblju, ponovnog knjiženja prilagodbi i automatskog prebacivanja viška gubitaka iz razdoblja.