---
title: Esportazioni
sidebar_position: 2
---

Da questa maschera si eseguono le esportazioni dati per DocFinance, con tre diverse opzioni.

**Esporta anagrafica**: l'attivazione di questo flag imporrà al sistema di creare il file di allineamento del piano dei conti e delle anagrafiche. Una volta impostato si attiveranno i campi collegati successivi, dove impostare il nome file e il percorso condiviso di creazione (entrambi i dati saranno memorizzati per essere riproposti alla creazione successiva). Il primo campo ‘Data ultima esportazione' consente di definire la data di riferimento per l'esportazione dei soli dati modificati/aggiunti nel piano dei conti: è consentito cancellare questa data in modo da creare un file completo di tutte le impostazioni di piano dei conti/anagrafiche (la cosa ha chiaramente un impatto significativo sui tempi necessari all'allineamento tra i due sistemi)

**Creazione automatica cash flow**: con questo flag il programma andrà a creare un nuovo cash flow nel modulo omonimo, prima di procedere all'eventuale esportazione dati del punto successivo. La creazione avverrà con i parametri di default della procedura ‘Creazione automatica cash flow': si rinvia alla documentazione specifica per ulteriori dettagli.

**Esporta cash flow**: con questo flag il sistema andrà a creare il file dei flussi finanziari, sia come partite contabili che come previsionali. Quando il flag viene impostato, si attiva il successivo flag ‘Derogabilità da anagrafici/tipi pagamento' e i campi con i nomi e il percorso condiviso di creazione del file (entrambi memorizzati). In dettaglio, a seconda che sia stato impostato il flag ‘Derogabilità da anagrafici/tipi pagamento' o meno, la logica di assegnazione della derogabilità cambia: in caso non sia impostato, la derogabilità per i fornitori sarà rilevato dal tipo di pagamento e per i clienti dall'anagrafica; in caso sia impostato, la derogabilità deriverà dall'anagrafica cliente/fornitore e se qui non è impostata sarà calcolata con codici fissi (‘01' per le riba, oppure ‘01' – ‘02' – ‘03' – ‘04' a seconda che la differenza tra data scadenza e data attuale restituisca una data scaduta, una differenza inferiore ai 30 giorni, dai 30 ai 90, oltre i 90).

Alla base della maschera va definito l'utente che andrà ad eseguire la creazione dei file. È necessario che questo abbia accesso alle cartelle condivise impostate per la creazione dei file.

RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni nel merito della procedura. La lista delle funzionalità possibili è di seguito rappresentata:



| Funzione | Significato |
| --- | --- |
| Salva | Con questo pulsante è possibile salvare le impostazioni da proporre di default nella maschera. |
| Esportazione | Esegue la creazione del/i file/s così come impostati nella maschera. |






