---
title: Introduzione
sidebar_position: 1
---

**Fluentis ERP** consente di gestire la Produzione e tutti i suoi aspetti operativi nelle aziende del settore Manifatturiero e Industriale che devono gestire situazioni, anche complesse, di preventivazione, consuntivazione costi, materiali ed attività.
Gli algoritmi di **Fluentis** permettono di gestire tutti i processi aziendali interni ed esterni dell'intero ciclo di vita del prodotto, dalla preventivazione alla progettazione, all'approvvigionamento dei materiali e delle risorse produttive, alla Pianificazione della Produzione interna e/o in Conto Lavoro, alla Raccolta Dati di Produzione e Controllo costi, senza dimenticare il collegamento in ottica Industry 4.0 degli impianti di Produzione e Magazzini Automatici.

In Fluentis ERP l'applicazione del modello MES è stata progettata implementando una numerosa serie di parametri, per la gestione integrata dei dati provenienti dai processi produttivi che influenzano in modo considerevole la redditività dell'azienda. Nel software MES di Fluentis possiamo notare come i documenti relativi agli ordini di produzione, effettivamente lanciati, ma non necessariamente esecutivi, definiscano la sequenza tramite la quale, in ciascun reparto, e ancora più in dettaglio in ogni centro di lavoro, si trovi la definizione di tutte le informazioni necessarie all'esecuzione dell'attività produttiva.
I materiali, le fasi e sottofasi, gli attrezzaggi ed in genere tutta la documentazione a supporto è finalizzata a rendere l'esecuzione dell'attività il più automatizzata, organizzata e fluida possibile.
L'algoritmo principale di un ERP specializzato in ambito Produzione è definito dal MRP, il sistema di pianificazione che si occupa di verificare la corretta allocazione dei materiali e delle risorse necessarie alla realizzazione dell'attività produttiva. L'algoritmo del MRP viene configurato in funzione di una serie corposa di parametri, al fine di adattarsi al meglio in funzione del tipo di realtà produttiva rappresentata dall'azienda.

## Moduli dell'area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/mrp">MRP - Material Requirement Planning</Link>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>La procedura MRP (Material Requirements Planning) è un sistema integrato di pianificazione delle risorse che aiuta le aziende a ottimizzare la gestione dell'inventario e della produzione, sincronizzando la disponibilità dei materiali con le esigenze di produzione per migliorare l'efficienza operativa e ridurre i costi.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/production-intro">MES - Manufacturing Execution System</Link>
        <p><Link to="/docs/production/pp-production-in-progress/production-orders/search-production-orders" className="bold-link">Ordini di produzione</Link></p>
        <p>Il modulo è progettato per ottimizzare e semplificare la pianificazione dei processi produttivi. Consente di gestire ordini in stato "Lanciato" ed "Esecutivo", permettendo una chiara distinzione tra gli ordini pronti per l'avvio e quelli già in fase di esecuzione.</p>
        <p><Link to="/docs/production/pp-production-in-progress/task/manual-task" className="bold-link">Tasks</Link></p>
        <p>La funzionalità **Creazione manuale Task** consente di creare e gestire manualmente i **Task** di produzione raggruppando le Fasi di lavorazione (non ancora dichiarate) di Ordini di Produzione in stato *Lanciato* e/o *Esecutivo*, a partire da un Materiale previsto da utilizzare.</p>
        <p><Link to="/docs/production/pp-production-in-progress/picking-materials-list" className="bold-link">Lista prelievo materiali</Link></p>
        <p>Permette di gestire e movimentare efficacemente i materiali destinati alla produzione.</p>
        <p><Link to="/docs/production/pp-production-in-progress/signals/sisgnals" className="bold-link">Dichiarazioni di produzione</Link></p>
        <p>Questo modulo consente agli utenti di generare dichiarazioni di produzione tracciando lo stato di avanzamento di ogni fase, garantendo così una completa visibilità e controllo del processo produttivo</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/signals-record" className="bold-link">Registrazione dichiarazioni</Link></p>
        <p>Questa procedura consente di registrare più dichiarazioni di produzione contemporaneamente.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/production-orders-release" className="bold-link">Rilascio ordini di produzione</Link></p>
        <p>La procedura di rilascio degli ordini di produzione in Fluentis consente di cambiare lo stato degli ordini da *Lanciato* a *Esecutivo*, generando contestualmente i movimenti di magazzino necessari.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/mes/mes-intro">Fluentis MES</Link>
        <p><Link to="/docs/production/mes/workstation" className="bold-link">Workstation</Link></p>
        <p>Consentono una gestione efficiente delle operazioni produttive, permettendo di codificare, filtrare e associare risorse. Grazie alla loro interfaccia intuitiva, gli utenti possono ottimizzare il flusso di lavoro e migliorare l'efficienza operativa</p>
        <p><Link to="/docs/production/mes/production-resources" className="bold-link">Risorse di produzione</Link></p>
        <p>Permette di personalizzare in maniera semplice e veloce il layout e il comportamento del singolo centro di lavoro, adattando il sistema alle specifiche esigenze aziendali.</p>
        <p><Link to="/docs/production/mes/mes-main-form" className="bold-link">MES</Link></p>
        <p>È progettata per ottimizzare e semplificare il processo di dichiarazione delle attività produttive. Questa interfaccia consente agli operatori di monitorare e gestire in tempo reale le risorse di produzione, facilitando l'inserimento dei dati relativi alle fasi di lavorazione e alle quantità prodotte.</p>
    </div>
</div>

