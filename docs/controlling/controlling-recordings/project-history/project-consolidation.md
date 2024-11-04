---
title: Consolidato di commessa
sidebar_position: 5
---

Ad ogni Elaborazione di un ***Consolidato di progetto*** creato dalla maschera di ***Elaborazione periodi*** troveremo qui dentro la relativa registrazione che ne contiene il dettaglio di tutti i costi e ricavi assegnati a progetti, siano questi diretti o indiretti da ribaltamento di cost driver applicati sui dati della dimensione direzionale.

I campi visualizzati sono:

- ***Sottoconto***
- [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): si tratta in questo caso del *Centro di progetto/commessa*, cioè del centro che ha il flag 'Default per dimensione progetti* piuttosto che del centro assegnato al progetto tramite la tabella di ***Associazione centri progetti/commesse***.
- [***Centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), che sarà valorizzato dal centro di origine del movimento, sia esso derivato da un cost driver o meno
- ***Anno***
- ***Periodo***
- ***Dare***
- ***Avere***
- ***Valore fisso***, che sommato al successivo valore variabile darà il valore Dare o Avere precedente
- ***Valore variabile***, che sommato al precedente valore fisso darà il valore Dare o Avere precedente
- ***Divisione***
- ***Divisa***, sempre uguale alla divisa della società
- ***Tipo riga***, che possono essere
    - *0* cioè righe di origine: si usa sia per le righe che nascono dalle chiusure o dalle registrazioni manuali di chiusura o di area, ma anche per le righe dei driver di attribuzione
    - *2* cioè righe ricevute: per i driver di ribaltamento, sono le righe che ribaltano il valore dal *Centro cedente* al *Centro aziendale*
:::tip Nota
Le righe di *attribuzione* sono sostanzialmente le righe di ribaltamento dei *Cost driver* che dal Centro di comodo *Conti da riassegnare* valorizzano i *Centri aziendali* effettivi della direzionale. I driver di *ribaltamento* sono sostanzialmente tutti gli altri.
:::
- ***Tipo distribuzione*** del driver applicato
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) applicato
- ***Sorgente***, cioè l'origine del dato, che può essere:
    - *Contabile* (1), cioè proveniente direttamente dalla *Chiusura infrannuale*
    - *Manuale* (2), cioè proveniente dalle *Registrazioni extracontabili di area*
    - *Formula* (3), cioè proveniente da registrazioni create dalle *Formule di calcolo*
    - *Ammortamenti* (4), cioè proveniente da registrazioni create dall'elaborazione degli ammortamenti del controlling
    - *Conguagli* (5), cioè proveniente da registrazioni dei conguagli infrannuali o annuali
    - *Driver delle tariffe* (6), cioè proveniente dai driver di applicazione delle tariffe 
    - *Rimanenze* (7), cioè proveniente da registrazioni delle rimanenze nel controlling
    - *Materiali produzione* (8), cioè proveniente da costi per i materiali di produzione
    - *Lavorazioni esterne* (9), cioè proveniente da costi del conto lavoro
    - *Trasformazioni di produzione* (10), cioè dalle lavorazioni interne in produzione
    - *tempo macchina* (11)
    - *tempo uomo* (12)
    - *attrezzaggio macchina* (13)
    - *attrezzaggio uomo* (14)
    - *Consolidamento controlling* (15), cioè dalla procedura di *Consolidamento master* del controlling, in installazioni multisocietarie
:::

- ***Tipo costo*** applicato alla riga, per le righe con ogirine *Materiali*

- ***Numero***, ***Anno***, ***Riga***, ***Wbs***: riferimenti ai progetti, non valorizzati

- [***Unità di misura***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), ***Articolo***, ***Descrizione articolo***, ***Fase***, ***Sottofase***, ***Numero***, ***Descrizione*** e ***Quantità*** dell'articolo prodotto o lavorato

Non è consentita la cancellazione nè la modifica o l'inserimento dati in griglia.