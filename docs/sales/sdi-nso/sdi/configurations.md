---
title: Configurazione della connessione a FBH
sidebar_position: 2
---

Al momento della sottoscrizione del servizio relativo alla fatturazione elettronica, verrà fornita una login e 
una password identificative della connessione personale a Fluentis BHUB. Si rende pertanto necessario 
configurare il gestionale al fine di poter gestire autonomamente e in modalità silente, la comunicazione con 
il SdI sia in fase di invio che in fase di ricezione delle notifiche di stato. 
Nella tabella di **Configurazione fatturazione elettronica**, è necessario inserire Login e Password di accesso al sistema Fluentis Business HUB rispettivamente nei campi *Operatore* e *Password*. Queste informazioni sono UNICHE per impianto, quindi prescindono dalle società eventualmente presenti.          

PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS DOVRA’ INSERIRE COME OPERATORE IL CODICE XXXXXXXX E LA PASSWORD XXXXXXXX.           

Poiché lo SDI prevede anche un ambiente di test al quale inviare dei documenti di prova senza che transitino 
nei canali ufficiali, nel caso in cui le credenziali inserite corrispondano ad un account di test (da non 
confondere con quello ufficiale che avrà un nome utente ed una password differenti) sarà necessario attivare 
il flag “E’ test” (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL CONTRATTO FE CON FLUENTIS).

Dopo aver inserito le credenziali di accesso è inoltre possibile verificare se la connessione risponde correttamente utilizzando il comando **Verifica connessione** posto nella ribbon bar.
Premendo il pulsante **Nuova Configurazione per Società**, si abilita l’inserimento nella griglia sottostante che dovrà essere compilato per configurare, per ogni 
società, l’invio dei documenti fatture in formato elettroniche, definendo per ognuna i seguenti valori:
- **Società e Descrizione società**: selezionare la società da abilitare dall’elenco dei valori proposti
automaticamente posizionandosi direttamente sul campo della griglia
- **Fatturazione elettronica firmata**: il check deve essere impostato nel caso in cui si intenda
gestire la firma digitale sui documenti fatture di vendita trasmessi al SdI
- **Fatturazione elettronica con PDF allegato**: il check abilita la funzione di generazione del file 
PDF relativo alla fattura inserita e lo inserisce nel file XML inviato al SdI. Se impostato, richiede 
obbligatoria anche l’impostazione del valore successivo Trasformazione e Decrizione: nel
campo deve essere indicata la Transformation di Fluentis destinata alla generazione del file 
PDF da allegare al file XML.
- **Trasformazione Arm per creazione file PDF fattura**: questo campo richiede la specifica della 
trasformazione di ARM da utilizzare nel caso in cui l’invio della fattura in formato elettronico 
preveda il file PDF allegato.
- **Cartella di creazione file**: questo campo è facoltativo e può essere compilato se si desidera 
conservare copia dei file XML generati in una cartella di file system esterna a Fluentis. Il file 
XML di fattura, all’interno del gestionale, sarà comunque sempre disponibile per la 
visualizzazione e la consultazione nelle varie funzioni di gestione dei documenti fattura e 
nell’archivio documentale. Il file viene copiato nella cartella indicata contestualmente alla sua 
creazione nelle procedure di gestione dei documenti di vendita. E’ possibile abilitare il dialogo di ricerca della cartella fisica facendo l’azione di doppio click del tasto sinistro del mouse in 
corrispondenza del campo. 
- **Cartella file firmati**: qualora venga adottata la scelta di firmare esternamente i file fattura, in 
questo campo dovrà essere indicata la cartella da cui Fluentis potrà acquisire tramite la 
procedura di upload, i file fattura firmati digitalmente. E’ possibile abilitare il dialogo di ricerca 
della cartella fisica facendo l’azione di doppio click del tasto sinistro del mouse in 
corrispondenza del campo.

Nello stesso dialogo, posizionandosi su una riga esistente e utilizzando il pulsante **Elimina la 
configurazione della Società**, verrà rimossa la riga selezionata.

