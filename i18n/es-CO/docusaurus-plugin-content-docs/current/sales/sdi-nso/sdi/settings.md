---
title: Impostazioni tecniche
sidebar_position: 9
---

Al fine di configurare correttamente la connessione tra il gestionale Fluentis e servizio Fluentis Business Hub, è necessario:
1) configurare in Arm il servizo Fluentis BizLink Tools Service                
2) aver comunicato il nome dell’istanza del Server SQL e il nome del Database da abilitare per la connessione al servizio Fluentis Business Hub (se non è stato fatto alla sottoscrizione del 
contratto, o se tali informazioni sono variate, è possibile farlo inviando una mail all’indirizzo fatturazione.elettronica@fluentis.com).

**CONFIGURARE IL SERVIZIO FLUENTIS BIZLINK TOOLS SERVICE**            

Per attivare correttamente il colloquio tra il gestionale Fluentis e il servizio Fluentis Business Hub, è necessario configurare il servizio Fluentis BizLink Tool Service, un servizio installato automaticamente con la 
versione applicativa 538 (e successive) e che permette di gestire la connessione a più database con un unico utente Bizlink.                  

:::tip[N.B.]
Per la corretta gestione delle impostazioni tecniche si raccomanda di aggiornare sempre Fluentis installando tutte le patch rilasciate per la versione di competenza.
:::

Per la configurazione del servizio Fluentis Bizlink Tools Service:
1) interrompere l’esecuzione del servizio Fluentis BizLink Tool Service (se attivo)
2) dal modulo ARM accedere alla voce di menu Connessioni > Utenti bizlink per creare l’ utente al quale associare le singole connessioni:
3) nella griglia Utenti Bizlink verificare la presenza del nuovo utente (configurato con la versione 538) FlConServiceUser (Effe elle Con Service User), impostato con password FlConServiceUserPwd (Effe elle Con Service User Pwd).                 
In corrispondenza dell’utente FlConServiceUser dovranno essere selezionate, nella griglia sulla parte destra della videata, le Connessioni ai database per i quali il servizio Fluentis BizLink Tool Service dovrà essere attivo (quindi i database sui quali si intende rendere operativa la fatturazione elettronica).
4) Riavviare il servizio Fluentis BizLink Tool Service                

Per verificare che il servizio abbia recepito le impostazioni dell’utente inserito, è possibile monitorare il file di log Fluentis.Bizlink.Tools.Service.Exe.txt, presente nella cartella di installazione del server Fluentis sottocartella “\Bin\Logs” (nel dubbio su quale sia la cartella di installazione di Fluentis verificare nella 
finestra proprietà del punto 1 il “percorso file eseguibile” del servizio). Il log deve presentare una tracciatura per l’avvio del servizio (“Starting service”) e tracciature di tipo INFO di 
agganci dei connettori (tra cui “INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector” che sono quelli della fatturazione elettronica). Nel caso sia presente solo la riga di avvio del servizio significa che non sono stati trovati i connettori Bizlink,oppure che non è stato configurato correttamente l’utente di connessione in Arm.
Nel caso compaia una tracciatura di tipo ERROR, andrà gestito lo specifico errore segnalato dopo aver aggiornato Fluentis all’ultima patch disponibile.               

Ad esempio nel caso il messaggio di errore sia “Il computer deve essere trusted per la delega e l’account utente corrente deve essere configurato per consentire la delega” si tratta di un problema relativo a come windows gestisce i certificati di sicurezza che può essere corretto modificando una chiave nel registro di configurazione:
1. Premere Windows + R
2. Scrivere “regedit” e premere enter
3. Navigare su HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb
4. Nella cartella, cliccare con il pulsante destro del mouse e selezionare Nuovo > Valore DWORD (32 Bit)
5. Rinominarlo ‘ProtectionPolicy’
6. Click destro su ‘Protection Policy’
7. Cliccare Modifica e cambiare la casella “Dati valore” a 1 e selezionare Base: Esadecimale

**COMUNICARE IL NOME DELL’ISTANZA SQL E IL NOME DEL DATABASE**           

Al fine di identificare univocamente il database per il colloquio con il servizio Fluentis Business Hub, è necessario reperire, dai server di installazione dei gestionali Fluentis, il nome dell’istanza SQL e il nome del database sul quale si intende attivare la Fatturazione Elettronica. Tali informazioni possono essere 
reperiti direttamente dalla connessione visualizzata in SQL Server Management Studio.         
Oppure, eseguendo l’istruzione SQL “select @@servername” sulla connessione attiva. In particolare questo metodo è necessario qualora sia stato rinominato il server dopo l’installazione di 
Fluentis: in questo caso, malgrado venga visualizzato il nuovo nome, Sql Server mantiene registrato il vecchio.
Tali informazioni vanno comunicate a Fluentis con una mail all’indirizzo di posta elettronica fatturazione.elettronica@fluentis.com, diversamente nel momento in cui viene eseguita la Verifica 
Connessione con il servizio FBH nella voce di menu Configurazione Fatturazione Elettronica, verrebbe restituito l’errore “Le credenziali sono valide ma l'esecuzione in questo contesto non è consentita”.