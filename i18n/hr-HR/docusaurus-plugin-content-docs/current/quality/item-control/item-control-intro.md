---
title: Uvod
sidebar_position: 1
---

Modul omogućuje evidentiranje svih potrebnih informacija kako bi se osigurala ispravna proizvodnja i pružanje usluga pod kontroliranim uvjetima.   


## Upravljanje podacima

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/data-sheets/data-sheet-management">Tehnička uputstva</Link>
        <p>Tehnička uputstva katalogiziraju sve informacije koje opisuju karakteristike proizvoda kao prikladne za ugovor, funkcionalnu specifikaciju ili određenu primjenu.</p>
        <p>Tehnička uputstva mogu se prilagoditi za određenog klijenta.</p>
        <p>Upravlja se revizijama i mogućnošću praćenja povezanosti između željenih tehničkih uputstva (kartica).</p>
        <p>Standardno su dostupna izvješća: Tehnička kartica (za internu upotrebu) i Kartica proizvoda (za komercijalnu upotrebu).</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/control-plans/control-plan-management">Kontrolni planovi</Link>
        <p>U Kontrolnim planovima katalogiziraju se sve planirane provjere, inspekcije, mjerenja i vrijednosti koje je potrebno postići kako bi se osiguralo da materijali i povezani proizvodi zadovoljavaju tražene karakteristike.</p>
        <p>Kroz Kontrolne planove moguće je unaprijed definirati provjere koje se trebaju provesti tijekom životnog ciklusa artikla: od provjera prilikom prihvata materijala, povrataka s podugovaranja, do kontrola tijekom proizvodnog ciklusa artikla: prije, tijekom i nakon izrade proizvoda.</p>
        <p>Kontrolni planovi kao i Tehnička uputstva, mogu se prilagoditi za Kupca i/ili Dobavljača. Također, u ovom dokumentu upravlja se revizijama i praćenjem povezanosti između željenih Kontrolnih planovima.</p>
        <p>Za svaku planiranu provjeru moguće je navesti: izvodi li se provjera interno ili kod treće strane, kategoriju i mjerni instrument koji će se koristiti, tražene tipove vrijednosti (Da/Ne ili Numeričke), nominalnu vrijednost, donju i gornju granicu koja se može specificirati u postotku ili apsolutnoj vrijednosti, broj mjerenja koja treba izvršiti i učestalost njihova provođenja.</p>
        <p>Nekoliko primjera mogućih tipova Kontrolnih planova: Kontrole pri prijemu, Kontrole pri prijemu za kritične dobavljače, Kontrole proizvodnje, Završna ispitivanja.</p>
        <p>Kao standard, dostupan je izvještaj: Kontrolni plan.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/items-control/item-control-management">Kontrola artikala</Link>
        <p>Kontrole artikla omogućuju registraciju izvršenih mjerenja, zabilježenih vrijednosti i posljedičnu naznaku usklađenosti ili neusklađenosti kontroliranog materijala, poluproizvoda ili gotovog proizvoda.</p>
        <p>Dokumenti iz kojih je moguće izvršiti kontrole nad artiklima: Primke robe, otpremnice i ulazne fakture, Izjave o proizvodnji, Faze proizvodnih naloga, Povrati iz kooperacije i Knjiženja ulaza. Za svaku vrstu dokumenta moguće je odrediti za koji detalj artikla se želi provesti provjera: Nijedan, po Lotu, po Serijskom broju ili po Jedinici tereta, vrstu kontrole koju treba generirati te iz koje vrste kontrolnog plana treba, s prioritetom, preuzeti ispitivanja koja treba provesti.</p>
        <p>Omogućuje se postavljanje boja reda za različita stanja Kontrola artikala, koje se potom prikazuju u filteru za Kontrole artikala.</p>
        <p>Također je moguće postaviti da sustav automatski predloži negativan ishod ispitivanja: kod prve evidentirane neusklađenosti vrijednosti ili na temelju aritmetičke sredine svih evidentiranih vrijednosti.</p>
        <p>Upravljanje unosom i pregledom zabilježenih mjerenja prikazuje: kontrolirani artikl, izvorni kontrolni plan, ukupni ishod mjerenja, detalje izvornog dokumenta i – za svako provedeno ispitivanje – sve informacije naslijeđene iz izvornog kontrolnog plana, vrijednost i prosjek zabilježenih vrijednosti u sesiji *Višestruko mjerenje vrijednosti*, ishod, operatera koji je evidentirao vrijednosti te korišteni mjerni instrument. Iz upravljanja je također moguće izvršiti prijenose artikala iz skladišta kontrole kvalitete u skladišta sukladnih i nesukladnih artikala.</p>
        <p>Putem M.E.S. rješenja, integriranog u Fluentis, moguće je unositi navedene tražene informacije na izravan i pojednostavljen način.  </p>
        <p>Standardno su dostupna izvješća: Popis kontrola artikla po artiklu, Popis kontrola artikla po kupcu/dobavljaču, Popis kontrola artikla po tipu dokumenta i Oznaka artikla C i NC.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management">Certifikati s analize</Link>
        <p>Certifikati s analize potvrđuju provedene provjere proizvoda, poštivanje granica navedenih u Kontrolnim planovia i povezanim Tehničkim uputstvima te prate prodaju proizvoda.</p>
        <p>Standardno su dostupna izvješća: Certifikat analize i Izjava o sukladnosti.</p>
    </div>
</div>


## Per iniziare ad utilizzare   

le **Schede tecniche**:
- devi definire un [*Tipo scheda tecnica*](/docs/configurations/tables/quality/item-control/data-sheets-type)   
- devi definire un [*Tipo prova*](/docs/configurations/tables/quality/item-control/test-type) che verrà utilizzato nella sessione/tabulatore *Proprietà* delle *Schede tecniche*   
- per agevolare la gestione delle *Schede tecniche* impostare i [*Parametri Controllo articoli*](/docs/configurations/parameters/quality/item-control) nella sessione delle *Schede tecniche*   
- devi inserire una nuova [*Scheda tecnica*](/docs/quality/item-control/data-sheets/data-sheet-management)   

i **Piani di controllo**:
- devi definire un [*Tipo piano di controllo*](/docs/configurations/tables/quality/item-control/control-plan-type) e relativa *Numerazione*   
- devi definire un [*Tipo prova*](/docs/configurations/tables/quality/item-control/test-type) che verrà utilizzato nella sessione/tabulatore *Prove pianificate* dei [*Piani di controllo*](/docs/quality/item-control/control-plans/control-plan-management)   
- per agevolare la gestione dei *Piani di controllo* impostare i [*Parametri Controllo articoli*](/docs/configurations/parameters/quality/item-control) nella sessione dei *Piani di controllo*   
- devi inserire un nuovo [*Piano di controllo*](/docs/quality/item-control/control-plans/control-plan-management)   

i **Controlli articolo**:   
- devi definire: un [*Tipo controllo articolo*](/docs/configurations/tables/quality/item-control/item-control-type) e uno [*Tipo esito*](/docs/configurations/tables/quality/general/result-type)   
- devi definire un [*Piano di controllo*](/docs/quality/item-control/control-plans/control-plan-management) e associarlo ad un articolo nella sessione/tabulatore *Articoli associati* oppure ad una fase di un Ciclo di lavoro soggetta a Controllo qualità   
- per agevolare la gestione dei *Controlli articolo* impostare i [*Parametri Controllo articoli*](/docs/configurations/parameters/quality/item-control) nella sessione/tabulatore del *Controlli articolo*   
- devi inserire un nuovo [*Controllo articolo*](/docs/quality/item-control/items-control/item-control-management) tramite la funzionalità di [*Importa articoli da controllare*](/docs/quality/item-control/items-control/item-control-import)    

i **Certificati di analisi**:   
- devi definire un [*Tipo certificati di analisi*](/docs/configurations/tables/quality/item-control/c-o-a-type) e relativa *Numerazione*   
- per agevolare la gestione dei *Certificati di analisi* impostare i [*Parametri Controllo articoli*](/docs/configurations/parameters/quality/item-control) nella sessione dei *Certificati di analisi*   
- devi inserire un nuovo [*Certificato di analisi*](/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management)   
