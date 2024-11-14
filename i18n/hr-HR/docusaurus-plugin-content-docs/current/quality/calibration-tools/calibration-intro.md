---
title: Introduzione
sidebar_position: 1
---

Questo modulo permette la catalogazione e la manutenzione periodica e straordinaria degli strumenti di monitoraggio e misurazione utilizzati per garantire l’idoneità dei prodotti e l’erogazione dei servizi offerti.   


## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Strumenti di misura</Link>
        <p>In questa anagrafica vengono memorizzati gli strumenti di misura utilizzati per garantire l’idoneità dei prodotti e l’erogazione dei servizi offerti.</p>
        <p>Allo strumento di misura è possibile associare le informazioni di acquisto, di responsabilità, le proprietà tecniche/meccaniche, di ubicazione e di taratura.</p>
        <p>Se lo strumento è soggetto a taratura e la taratura è interna, è possibile definire quali sono le attività che devono essere fatte e i valori da rilevare affinché la taratura dia esito positivo.</p>
        <p>Se lo strumento è soggetto a taratura e la taratura è esterna, è possibile definire qual e l'ente terzo che effettuerà la taratura.</p>
        <p>Se inserita una periodicità temporale di taratura il pulsante di "Pianifica nuove tarature" permette la creazione automatica, per un periodo desiderato, delle tarature pianificate.</p>
        <p>A standard sono disponibili le reportistiche di: *Registro strumenti* raggruppati per: *Strumento*, *Categoria*, *Fornitore*, *Ubicazione*, *Utilizzatore*, *Scadenza garanzia* e *Scadenza taratura*, *Registro Strumenti non soggetti a taratura* e *Scheda Strumento di misura*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Taratura strumenti</Link>
        <p>Nella gestione Taratura strumenti è possibile la registrazione delle Tarature interne e dei Certificati di taratura.</p>
        <p>Se lo strumento è soggetto a taratura e la taratura è interna, è possibile inserire, per le posizioni previste, i valori rilevati. Fluentis assegnerà automaticamente un esito positivo o negativo, per singola posizione e generale.</p>
        <p>Se lo strumento è soggetto a taratura e la taratura è esterna, è possibile allegare il Certificato di taratura ricevuto dall'ente terzo che ha effettuato la taratura. L'esito, in questo caso, verrà attribuito manualmente dall'operatore.</p>
        <p>A standard sono disponibili le reportistiche di: *Registro tarature strumenti* raggruppati per: *Rapporto*, *Strumento* e *Operatore*.</p>
    </div>
</div>


## Per iniziare ad utilizzare   

gli **Strumenti di misura**:
- definire una [*Categoria Strumenti di misura*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)   
- inserire un nuovo [*Strumento di misura*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   

la **Taratura strumenti**:
- definire: un [*Tipo taratura*](/docs/configurations/tables/quality/calibration-tools/calibration-type) e uno [*Strumento di misura*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   
- per agevolare la gestione delle *Taratura strumenti* impostare i [*Parametri Taratura strumenti*](/docs/configurations/parameters/quality/calibration-tools)   
- inserire una nuova [*Taratura strumento*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)   


## Collegamenti con altri moduli
Il modulo della *Taratura strumenti* non è collegato ad alcun altro modulo.   
