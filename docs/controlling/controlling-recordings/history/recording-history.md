---
title: Storico registrazioni gestionali
sidebar_position: 3
---

In questa maschera abbiamo la lista delle registrazioni create dalla procedura di ***Elaborazione periodi*** del controlling: si tratta della base dati, non modificabile, che contiene il dettaglio di ogni riga valorizzata, a partire dai valori mensilizzati di origine contabile fino al singolo ribaltamento dei Cost driver elaborati (ad esclusione di quelli del consuntivo di progetto, che hanno una procedura di calcolo e una form di visualizzazione a se stante).

:::tip Nota
Dato che l'***Elaborazione periodi*** del Controlling cancella e ricrea i valori dell'anno, avremo un'unica registrazione per ogni anno e area elaborata
:::

Possiamo aprire in visualizzazione ogni registrazione per andare a verificare i singoli step di elaborazione e il dettaglio dei dati elaborati, con piena visibilità di tutte le caratteristiche di origine del dato, della distribuzione periodi, del cost driver applicato e del ciclo di elaborazione: da questa form, quindi, possiamo risalire ai motivi logici di eventuali incongruenze causate da impostazioni incoerenti con i risultati ricercati.

I campi disponibili in griglia sono i seguenti:

- ***Sottoconto***
- [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), che sarà valorizzato solo per le righe legate ai driver
- ***Anno***
- ***Periodo***
- ***Dare***
- ***Avere***
- ***Valore fisso***, che sommato al successivo valore variabile darà il valore Dare o Avere precedente
- ***Valore variabile***, che sommato al precedente valore fisso darà il valore Dare o Avere precedente
- ***Divisione***
- ***Divisa***, sempre uguale alla divisa della società
- ***Distribuzione periodi*** associata alla riga
- ***Tipo riga***, che possono essere
    - *0* cioè righe di origine: si usa sia per le righe che nascono dalle chiusure o dalle registrazioni manuali di chiusura o di area, ma anche per le righe dei driver di attribuzione
    - *1* cioè righe cedute: per i driver di ribaltamento, sono le righe che stornano il valore dal *Centro aziendale*
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
    - *Consolidamento controlling* (15), cioè dalla procedura di *Consolidamento master* del controlling, in installazioni multisocietarie

:::tip Nota
Esistono altre 4 tipologie di origini dati, visibili nello storico del consolidato di progetto:
    - *tempo macchina* (11)
    - *tempo uomo* (12)
    - *attrezzaggio macchina* (13)
    - *attrezzaggio uomo* (14)
:::

- ***Numero***, ***Anno***, ***Riga***, ***Wbs***: riferimenti ai progetti, non valorizzati

Non è consentita la cancellazione nè la modifica o l'inserimento dati in griglia.