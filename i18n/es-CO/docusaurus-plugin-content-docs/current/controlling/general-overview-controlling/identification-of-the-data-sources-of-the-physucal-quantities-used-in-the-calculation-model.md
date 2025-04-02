---
title: Individuazione delle fonti dati delle grandezze fisiche utilizzate nel modello di calcolo 
sidebar_position: 2.4
---

:::tip Nota
questa sezione è strettamente legata all'applicazione dei driver estesi del controlling
:::

Una volta che abbiamo identificato la necessità di gestire driver di ribaltamento su quantità fisiche sorgerà la necessità di individuare, come quinto step, le fonti da cui possiamo attingere i valori di queste grandezze fisiche: se parliamo di ore macchina, ore uomo, piuttosto che di tonnellate o altre unità dobbiamo anche individuare dove andiamo ad estrapolarle, così come le [*Unità di misura*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) che si vogliono utilizzare. Generalmente l’ambiente è quello di produzione e, se parliamo di ore macchina ed ore uomo, la fonte sono gli avanzamenti di produzione attraverso i quali siamo in grado mensilmente di andare a rilevare a consuntivo le ore uomo e le ore macchina impiegate per i nostri centri. Ma potrebbe anche essere un dato disponibile in un sistema esterno, dal quale ottenere un file excel da importare facilmente in ***FluentisERP*** tramite l'apposita procedura; oppure potrebbe essere ottenuta tramite la rilevazione delle ore del personale degli uffici tramite il caricamento delle ore nella Dichiarazione ore di progetto; oppure un caricamento generico manuale di inizio anno, da replicare o spalmare in modo proporzionato a seconda della *distribuzione periodi* associata al movimento fisico.

:::tip Nota
L'elaborazione dei [*Cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) basati sulle quantità, come tutti i cost driver, prevede di default il blocco dell'elaborazione quando la quantità necessaria per la ripartizione del dato d'origine non è presente in uno dei periodi che si sta elaborando. Questo settaggio è utile per non dimenticare la valorizzazione del dato d'origine, soprattutto quando questo è legato ad un inserimento manuale e non da ripresa dati da produzione.
E' comunque possibile disabilitare il blocco per applicare una media dei valori esistenti (si veda la *gestione errori* nei cost driver) quando ci si trovasse in casi dove può effettivamente mancare una quantità in un periodo (ad es. in periodi di chiusura aziendale tipo agosto)
:::