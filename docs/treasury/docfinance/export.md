---
title: Esportazioni
sidebar_position: 2
---

Da questa maschera si eseguono le esportazioni dati per DocFinance, con tre diverse opzioni.

**Esporta anagrafica**: l'attivazione di questo flag imporrà al sistema di creare il file di allineamento del piano dei conti e delle anagrafiche. Una volta impostato si attiveranno i campi collegati successivi: 
-    **Data ultima esportazione** che consente di definire la data di riferimento per l'esportazione dei soli dati modificati/aggiunti nel piano dei conti: è consentito cancellare questa data in modo da creare un file completo di tutte le impostazioni di piano dei conti/anagrafiche (la cosa ha chiaramente un impatto significativo sui tempi necessari all'allineamento tra i due sistemi)
- Data Operazione, è la data di riferimento dell'esportazione che viene lanciata

**Creazione automatica cash flow**: con questo flag il programma andrà a creare un nuovo cash flow nel modulo omonimo, prima di procedere all'eventuale esportazione dati del punto successivo. La creazione avverrà con i parametri di default della procedura *Creazione automatica cash flow*: si rinvia alla documentazione specifica per ulteriori dettagli.

**Esporta cash flow**: con questo flag il sistema andrà a creare il file dei flussi finanziari, sia come partite contabili che come previsionali. Quando il flag viene impostato, si attiva il successivo flag *Derogabilità da anagrafici/tipi pagamento* 

A seconda che sia stato impostato il flag *Derogabilità da anagrafici/tipi pagamento* o meno, la logica di assegnazione della derogabilità cambia: in caso non sia impostato, la derogabilità per i fornitori sarà rilevata dal tipo di pagamento e per i clienti dall'anagrafica; in caso sia impostato, la derogabilità deriverà dall'anagrafica cliente/fornitore e se qui non è impostata sarà calcolata con codici fissi (‘01' per le riba, oppure ‘01' – ‘02' – ‘03' – ‘04' a seconda che la differenza tra data scadenza e data attuale restituisca una data scaduta, una differenza inferiore ai 30 giorni, dai 30 ai 90, oltre i 90).

:::note[Nota]
Per le impostazioni di Cash flow bastano due tipi flusso finanziario, come ad esempio


| Codice | Descr | Codice DocFinance |
| :-- | :-: | --: |
| 1 | Partite |CO |
| 2 | Contabilità |CO |

Ma è possibile creare ulteriori tipi flusso previsionali (OC/OF ad esempio) da passare come per le analisi di DocFinance.

:::



| Funzione | Significato |
| --- | --- |
| Salva | Con questo pulsante è possibile salvare le impostazioni da proporre di default nella maschera. |
| Esportazione | Esegue la creazione del/i file/s così come impostati nella maschera. |


:::important[Configurazioni preliminari]
Lo scambio dati avviene tramite file posizionali .txt secondo le specifiche tecniche di DocFinance, file che vengono depositati in cartelle esterne (locali o in rete). 

La creazione in export e la lettura in import avviene attraverso Bizlink.

Verificare la presenza, e creare se necessario, dei connettori Bizlink specifici.

![](/img/it-it/treasury/docfinance/docconn1.png)

Verificare ed impostare nei dettagli dei connettori la cartella locale (esistente sul server o sul PC) oppure il percorso di rete es. \NomePc\NomeCartella.

Questa cartella deve essere raggiungibile in lettura e scrittura anche da DocFinance. Consigliamo la creazione di una cartella dedicata esclusivamente a questo scambio dati.

I file esportati da Fluentis hanno tutti lo stesso nome file, pertanto ogni esportazione (lanciata manualmente dall'utente) va a sovrascrivere il file precedente. 

In import, invece, è BizLink a monitorare la cartella impostata e appena rileva un nuovo file andrà a prenderlo per importarlo: dev’essere una cartella diversa da quella dove esportiamo.

Si rimanda alla documentazione di Bizlink per le configurazioni specifiche del servizio (“Identificativo” e flag di gestione con autenticazione)

![](/img/it-it/treasury/docfinance/docconn2.png)

![](/img/it-it/treasury/docfinance/docconn3.png)

![](/img/it-it/treasury/docfinance/docconn4.png)


**ATTENZIONE:**

Nel connettore di importazione visibile nell' immagine precedente, il tag ***filemask***: è stato impostato come solitamente viene impostato per default su DocFinance: “ritcoge.txt”. 

Dunque saranno ricercati ed importati dalla cartella soltanto files con questo nome.

Il campo può essere impostato in modo specifico a seconda delle proprie configurazioni effettuate su DocFinance per l'export.

Essendo il file mask la regola di filtro per l'identificazione del nome file da importare, se la cartella viene utilizzata esclusivamente per file DocFinance, potrebbero essere utilizzati, nella definizione della regola, anche caratteri jolly creando una regola generica "*asterisco punto asterisco*" che acquisirà qualsiasi nome file di qualsiasi estensione.

Altro esempio: se in esportazione da DocFinance le configurazioni prevedono di aggiungere lettere o numeri per meglio identificare il file esportato (mese, periodo o iniziali della società) il file mask può essere impostato ad esempio così: "RitCoge*.txt".


**La cartella di import Fluentis, monitorata dal servizio Bizlink deve essere configurata, in termini di diritti di lettura e scrittura, in modo che possa essere accessibile dall'utente Bizlink (configurato su ARM). Altrimenti l'importazione non potrà avvenire.**

Ad esempio potrebbe essere configurata con diritti "everyone".
:::



