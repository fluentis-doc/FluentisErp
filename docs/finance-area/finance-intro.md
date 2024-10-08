---
sidebar_position: 1
title: AMMINISTRATIVA
---

## Funzionalità

L'area dedicata alla **gestione amministrativa** di **Fluentis ERP** contempla le funzionalità necessarie alla corretta **tenuta delle scritture contabili**, alla redazione del **bilancio** di esercizio e all'adempimento della **fiscalità** tipicamente gestita direttamente dall'azienda.

Sono presenti inoltre funzionalità per la gestione **cespiti**, **leasing** e **mutui** passivi, oltre alle funzionalità fondamentali per chi opera con l’estero, quali la compilazione automatizzata degli elenchi **Intrastat** e le altre comunicazioni fiscali relative agli scambi con controparti estere.

La gestione della contabilità è integrata con il ciclo passivo ed attivo, la fatturazione elettronica, con il *Magazzino* e il *Controllo di gestione*.

### Dettaglio Funzionalità


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Registrazioni contabili</Link>
        <p>per l'inserimento di movimenti contabili e connessi movimenti iva e le procedure automatiche ad essi collegati (assestamenti e chiusure conti).</p>
        <p>Corredato delle necessarie</p>
        <p><Link to="/docs/finance-area/ledger-records/accounting-report/trial-balance" className="bold-link">stampe contabili</Link></p>
        <p>Estratti conto, Bilancio di verifica ecc.</p>
        <p><Link to="/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet" className="bold-link">stampe fiscali</Link></p>
        <p>giornale contabile, registri iva, liquidazioni iva ecc.</p>
         <p><Link to="/docs/finance-area/ledger-records/analytic-reports/cost-centres-analysis" className="bold-link">stampe analitica</Link></p>
        <p>per il controllo dei movimenti sui centri di costo della contabilità analitica</p>
    </div>
    <div className="card">
###   <Link to="/docs/quality/internal-origin-documents/internal-origin-document-intro">Nome modulo</Link>
        <p><Link to="/docs/quality/internal-origin-documents/internal-origin-document/internal-origin-document-management" className="bold-link">Nome funzionalità</Link></p>
        <p>A cosa serve</p>
        <p><Link to="/docs/quality/external-origin-documents/norms-and-lows" className="bold-link">Nome funzionalità</Link></p>
        <p>A cosa serve</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Registrazioni contabili</Link>
        <p>per l'inserimento di movimenti contabili e connessi movimenti iva e le procedure automatiche ad essi collegati (assestamenti e chiusure conti). Corredato delle necessarie stampe contabili e fiscali (mastrini, giornale, registri iva, liquidazioni iva ecc.)</p>
        <p><Link to="/docs/quality/external-origin-documents/norms-and-lows" className="bold-link">Nome funzionalità</Link></p>
        <p>A cosa serve</p>
    </div>
    <div className="card">
###   <Link to="/docs/quality/internal-origin-documents/internal-origin-document-intro">Nome modulo</Link>
        <p><Link to="/docs/quality/internal-origin-documents/internal-origin-document/internal-origin-document-management" className="bold-link">Nome funzionalità</Link></p>
        <p>A cosa serve</p>
        <p><Link to="/docs/quality/external-origin-documents/norms-and-lows" className="bold-link">Nome funzionalità</Link></p>
        <p>A cosa serve</p>
    </div>
</div>





- [**Registrazioni contabili**](/docs/finance-area/ledger-records/intro): per l'inserimento di movimenti contabili e connessi movimenti iva e le procedure automatiche ad essi collegati (assestamenti e chiusure conti). Corredato delle necessarie stampe contabili e fiscali (mastrini, giornale, registri iva, liquidazioni iva ecc.)
- [**Dichiarazioni**](/docs/finance-area/declarations/intro): modulo per elaborare i dichiarativi fiscali, in particolar modo gli adempimenti connessi all'IVA ed alle ritenute d'acconto
- [**Partite**](/docs/finance-area/maturity-values/intro): modulo per la gestione delle partite aperte che alimentano gli scadenzari clienti e fornitori, viene alimentato prevalentemente in modo automatico ai movimenti contabili e può essere utilmente consultato in vari modi
- [**Percipienti**](/docs/finance-area/professional-men/general-overview): modulo specificamente dedicato alla gestione dei fornitori professionisti che emettono parcella e sono soggetti a ritenuta d'acconto (compresi gli agenti di commercio)
- [**Cespiti**](/docs/finance-area/fixed-assets/general-overview): modulo per la gestione dei beni ammortizzabili, con elative procedure di ammortamento e stampe necessarie
- [**Fatturazione elettronica**](/docs/finance-area/e-invoice/intro): modulo collocato in questa sezione della guida anche se trasversale, al fine di illustrare i necessari dettagli al punto di vista amministrativo e le possibilità i gestione e contabilizzazione automatica delle fatture elettroniche
- [**Leasing**](/docs/finance-area/leasing/intro): modulo specifico per la gestione e contabilizzazione dei leasing, all'interno del modulo partite sono collocate invece le funzionalità specifiche per i mutui passivi.

:::important[**Fast Start**]
La caratteristica principale dell'area amministrativa è la sua *Compliance* con le normative contabili e fiscali e la possibilità di inizializzare un [**ambiente *FastStart* totalmente pronto all'uso**](/docs/guide/fast-start) e configurato per rispettare le norme e permettere un utilizzo immediato.

L'utente può configurare comunque in ogni momento a suo piacimento schemi contabili, codici iva , registri ecc...
:::


## Flusso di inserimento dei dati

La flessibilità del modulo consente l'inserimento del dato in diversi modi: 

- **Manualmente**, attraverso [**l'immissione diretta di scritture contabili**](/docs/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description). Con questa modalità vengono generalmente inserire le scritture di assestamento NON comprese nelle procedure automatiche (Ratei e Risconti ed Ammortamenti) quali **stanziamenti a fondi rischi ed oneri, svalutazione crediti** ecc... oltre a scritture quali **rilevazioni paghe dipendenti** ecc.
 
- **Automaticamente** grazie all'**interconnessione con gli altri moduli del gestionale**, quali la tesoreria, il controlling e i cicli attivo e passivo. Tipicamente vengono registrati in automatico le **fatture attive e passive, i pagamenti tramite bonifico e Ri.Ba. passive, gli incassi tramite emissione di Ri.Ba. attive o cambiali, i canoni leasing, le rate mutuo** ecc.

- **Lancio di elaborazioni e procedure**: che vanno a leggere i dati di base per **eseguire dei calcoli e produrre dei documenti o flussi telematici**, (quali ad esempio l'elaborazione di un **dichiarativo fiscale** che va a leggere i dati IVA generati dalle scritture contabili) oppure generano delle ulteriori scritture contabili o più in generale degli ulteriori dati (quali ad esempio le procedure di calcolo e memorizzazione delle **scritture di assestamento** o delle scritture di **chiusura e riapertura dei conti** a fine ed inizio anno) 


## Flusso di lavoro tipico area amministrativa

Benchè i vari moduli permettano flessibilità e possibilità di gestire i dati in diversi modi, automaticamente o manualmente, illustriamo un tipico flusso di lavoro completo che coinvolge l'area amministrativa e le altre aree ad essa strettamente collegate.

- [**Apertura iniziale dei saldi**](/docs/finance-area/ledger-records/records/automatic-accounts-opening/new) di bilancio (wizard ausiliario in alternativa al caricamento manuale tramite scrittura contabile) o [import](/docs/applications/bizlink/import-posting-ledgers) da altro sistema o riapertura automatica di [chiusura anno precedente](/docs/finance-area/ledger-records/records/automatic-account-closing/new/new-intro)
- [Importazione delle partite aperte](/docs/applications/bizlink/import-open-matutities), necessaria solo nel caso di migrazione da sistema precedente
- [Importazione cespiti](/docs/applications/bizlink/import-fixed-assets), necessaria solo nel caso di migrazione da sistema precedente. Gli acquisti in corso d'anno caricano automaticamente le schede cespiti tramite le rispettive registrazioni contabili (usando le causali contabili opportune)
- **Registrazioni contabili** (procedura automatica) del ciclo [**attivo**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) e **passivo** (anche da [fatture elettroniche](/docs/finance-area/sdi-documents/incoming-purchase-documents#contabilizzazione-automatica) ricevute)
- Gestione delle [**Partite Aperte**](/docs/finance-area/maturity-values/intro), automatica, agganciata alla creazione dei movimenti contabili sia di fatturazione, sia di incasso e pagamento
- Registrazioni di **incassi** e **pagamenti** (procedura automatica, in alternativa o per alcune tipologie si può procedere con registrazioni manuali). Per gli incassi tipicamente automatizzato il flusso [**Ricevute bancarie**](/docs/treasury/bills-holding/accounting/bills-accounting/accounting). Per i pagamenti tipicamente automatizzato il flusso dei [**Bonifici**](/docs/treasury/vendors-payments/accounting/filter). Procedure collocate in [**area tesoreria**](/docs/treasury/treasury-intro)
- Stampe contabili correnti di [estratti conto](/docs/finance-area/ledger-records/accounting-report/account-statement) (*mastrini*), [bilanci di verifica](/docs/finance-area/ledger-records/accounting-report/trial-balance), [d'esercizio](/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet) e [giornale contabile](/docs/finance-area/ledger-records/fiscal-report/journal).
- Stampe [partitari](/docs/finance-area/maturity-values/reports/account-statement-on-open-maturity-values) clienti-fornitori quali [scadenzari](/docs/finance-area/maturity-values/reports/customer-vendor-due-register) ecc.
- [**Liquidazione**](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) periodica dell'**IVA**
- Altri [adempimenti](/docs/finance-area/declarations/intro.md) fiscali periodici
- Gestione del ricevimento delle [parcelle](/docs/finance-area/professional-men/general-overview) di professionisti e [Agenti](/docs/sales/agents/procedures/create-professional-man-commission) di commercio (funzionalità collocata in area Vendite) e [certificazione unica](/docs/finance-area/declarations/declarations/withholding-tax-certification) delle ritenute d'acconto annuale
- Elaborazione (facoltativa) tramite le funzioni dell'area [Controlling](/docs/controlling/mid-year-closures/general-overview) di situazioni contabili periodiche dettagliate. Il periodo oggetto della situazione può essere scelto liberamente e possono essere associate alcune procedure automatiche per generare, proporzionalmente al periodo oggetto di analisi, gli assestamenti contabili (ratei e risconti di periodo) gli ammortamenti cespiti (di periodo), le rimanenze finali e le fatture da emettere e ricevere.
- [**Scritture di assestamento**](/docs/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation) (ratei e risconti e fatture a ricevere) procedura automatica di calcolo (leggendo le date di competenza economica nei movimenti contabili inseriti) e contabilizzazione; altre scritture di assestamento inserite manualmente quali svalutazione crediti, accantonamenti ecc.
- Calcolo e contabilizzazione [**ammortamenti**](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): automatico con procedura apposita
- Stanziamento rimanenze finali: scrittura manuale da inserire potendosi appoggiare sulle procedure di area logistica per il calcolo delle [giacenze valorizzate](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity).
- [**Chiusura dei conti**](/docs/finance-area/ledger-records/records/automatic-account-closing/new/new-intro): procedura automatica con possibilità di riapertura automatica nell'esercizio successivo, riapertura delle scritture di assestamento, giroconto automatico utile perdita di esercizio.