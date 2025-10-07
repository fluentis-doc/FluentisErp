---
title: La form principale di Fluentis
sidebar_position: 2
---

La form principale di **Fluentis** è composta da più zone con funzionalità diverse:

## Ribbon Bar 

La barra multifunzione contiene i menu principali, Home, con alcune impostazioni di base, ed i menu specifici per le varie aree funzionali.



### Tab Home

Il tab contiene:
- i combo-box per selezionare la **Società** e/o la **Divisione** che vengono utilizzate per l'inserimento dei dati

- il combo-box per selezionare la **Lingua** desiderata,
    
- il combo-box per scegliere il **Menù** di Fluentis,

:::note Menu    
In base al menu attivato, viene completata la ribbon bar del tab **Home** con le informazioni trasversali a tutta l'applicazione e si aggiungono i tab che corrispondono alle aree di Fluentis.
:::
    
- i **Temi** che l'utente può scegliere per cambiare lo sfondo dell'applicazione in base alle sue esigenze visive,
    
- lo spazio disponibile per visualizzare le *form aperte dall'utente*,
    
- la **freccia** per nascondere o visualizzare l'intera ribbon bar.
    
### I tab delle Aree

Contengono una serie di ribbon raggruppati per tipo/modulo. Per esempio, il tab *Acquisti* contiene tutti i documenti del ciclo attivo: richieste, ordini, DDT, fatture ecc.

### Help
    
Per informazioni dettagliate sulla form in uso, l'utente può consultare la documentazione usando **F1** oppure premendo il pulsante **?**.

## Panello sinistro

Contiene la [Form Navigator](/docs/form-navigator/data-grid-settings) con informazioni sulla form attiva e possibilità di gestione degli elementi della form stessa.

## Panello destro

Contiene:

**[Strumenti](/docs/applications/applications-intro)** contiene diverse applicazioni complementari: 

- Application Resource Manager: una selezione ridotta di comandi utili presenti anche nell'applicazione omonima per la gestione "backend" del sistema.
- Audit Trail: un componente che permette la tracciabilità delle operazioni degli utenti 
- BizLink: il componente trasversale che gestisce tutte le comunicazioni input ed output (esportazione e importazione dati) 
- Gestione Documentale: il componente trasversale che gestisce l'archiviazione documentale contestuale alle varie form, oppure l'archiviazione automatica dei file esportati dall'ERP (quali ad esempio le fatture elettroniche, i tracciati telematici dei documenti fiscali e bancari ecc.) 
- Supervisor: il componente che permette di automatizzare controlli eseguiti direttamente sulla    base dati
- Applicazioni non supportate: presenti per retro-compatibilità e/o funzionalità obsolete

**[Object Navigator](/docs/object-navigator/object-navigator-intro)** contiene informazioni sull'oggetto attivo, utile a personalizzare le form con l'aggiunta di ulteriori dati o informazioni.

**[Context Panel](/docs/panels/context-panel)** in base alle impostazioni, Fluentis permette di visualizzare informazioni contestuali al campo selezionato (esempio: se selezionate l'articolo l'applicazione mostra la sua disponibilità).

**[Configurazione](/docs/configurations/configuration)** contiene informazioni che consentiranno la definizione della gestione dei moduli.


## Barra di stato

Nella parte inferiore dell'applicazione è presente una barra di stato che contiene informazioni sulla connessione al database e sono, in ordine visualizzata: *Utente*, *Server\Database*, *Società*, (*Divisione*).

## Barra Multifunzione

**Settings**: Permette di accedere ad una serie di funzionalità di sistema:

- Solutions: che fornisce informazioni sui pacchetti software disponibili
- Informazioni: che visualizza un popup contenente la versione correntemente in uso
- Stampa, che permette la gestione stampanti
- Licenza: che contiene infomazioni sulla licenza e sui pacchetti software disponibili in base alla propri licenza
- Startup Forms: una utility che permette di configurare quali form eseguire automaticamente all'apertura dell'applicazione
- Impostazioni: parametri per la scelta del layout grafico dell'applicazione (si tratta di layout alternativi rispetto a quello standard) oltre alla scelta di visualizzare o meno la barra di stato e la memorizzazione dei dati di login.
- Chiudi: termina l'applicazione
 

**Attività**: permette un rapido collegamento con la gestione delle attività pending (derivanti dalle procedure di WorkFlow configurate);

**Calendario**: permette la gestione del calendario, che può essere agganciato con Exchange o Outlook.
:::note Sincronizzare il *calendario Outlook* con il *calendario Fluentis*. 

1. Configurare l'utente in **ARM** e definire nel tab **Altre Caratteristiche** la mail: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)


2. Successivamente, premendo il bottone *Percorso predefinito per Outlook*, verrà richiesto quale calendario configurare tra quelli che trova e il campo **Percorso predefinito per Outlook** verrà compilato automaticamente: 

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)


A questo punto, spostandosi in **Calendario** (barra di stato), dopo aver *riavviato* Fluentis, si noterà che la sincronizzazione con Outlook è avvenuta con successo:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)


Vedi anche [Pianificazione a calendario delle risorse](/docs/project-management/transverse-procedures).
:::


**Dashboards**: permette una rapida sintesi dei fatti salienti della gestione con un interfaccia statistica molto potente e facilmente customizzabile;

**Trova**: permette di visualizzare tutti i comandi dell'applicazione. Usato insieme al campo di ricerca che si trova in alto, nel menu principale, possiamo trovare un comando specifico oppure dei comandi raggruppati;



