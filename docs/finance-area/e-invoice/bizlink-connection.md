---
title: Configurazioni Bizlink per l'interscambio con lo SDI
sidebar_position: 7
---

Fluentis consente lo scambio dei documenti elettronici in entrata ed in uscita con SDI (Sistema di Interscambio). E' necessario controllare le seguenti impostazioni prima di utilizzare questa funzionalità, in quanto Fluentis deve poter comunicare con l'esterno attraverso il servizio di BizLink.  
Le impostazioni da verificare sono tre:
- Tabella configurazione documenti elettronici.
- Tabella utenti BizLink.
- Servizio BizLink.

## Tabella Configurazione documenti elettronici

Questa tabella è accessibile in Fluentis da Configurazione > Tabelle > Impostazione generali > Configurazione documenti elettronici.    
Il primo controllo da effettuare è cliccare *Verifica connessione* nella ribbon bar dopo aver aperto la tabella. Se tutte le impostazioni sono state effettuate correttamente, la connessione sarà abilitata come da immagine sottostante.

![image](/img/it-it/finance-area/e-invoice/bizlink/checkConnections.png)

:::danger ATTENZIONE
Nel caso in cui riceviate un errore di contesto durante la verifica connessione, o comunque un messaggio diverso da quello dell'immagine sopra, significa che al momento dell'attivazione del servizio sono stati comunicati un nome server MSSQL e/o un nome database errati. Sarà necessario contattare il commerciale di riferimento oppure l'assistenza per fornire i dati corretti come riportato qui sotto.
:::

Per poter riportare il nome del server MSSQL e il nome del database corretti, eseguire la seguente query sul database di Fluentis sul quale si vuole attivare il servizio di fatturazione elettronica e comunicare il risultato tramite screenshot e testo in modo da poterlo copiare, al commerciale con il quale avete sottoscritto il contratto di FBH.    

```sql
select @@SERVERNAME as NomeServer, DB_NAME() as NomeDatabase
```


## Tabella Utenti BizLink

Questa tabella è accessibile in ARM da Home > Connessioni > Utenti BizLink.    
Nella griglia di sinistra sono presenti gli Utenti codificati con la password, mentre nella griglia di destra sono presenti le Connessioni disponibili con i relativi nomi server e database.
In questa tabella è necessario controllare che gli Utenti impostati nella griglia di sinistra abbiano il flag 'attivo' nella griglia di destra per le connessioni in cui vogliamo che funzioni il servizio FBH. Inoltre, tali credenziali dovranno corrispondere alle credenziali di GlobalUser e GlobalPwd del servizio di BizLink.

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users.png)

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users2.png)

## Servizio di BizLink
Il servizio di BizLink può essere installato sia su server Windows che su server GNU/Linux con Docker.  
Per tutti i dettagli relativi all'installazione del servizio si rimanda alla specifica documentazione dedicata a seguente [**LINK**](https://docs.fluentis.com/Advanced/FluentisLiveUpdate/docs/integration/BizLink/).  
Vediamo ora come configurare il servizio in entrambi gli scenari e infine come verificarne il corretto funzionamento.   


### Configurazione in ambiente Windows Server

Per essere certi che i parametri di configurazione del servizio di BizLink siano correttamente impostati è necessario aprire il file di configurazione `appsettings.json`.  
Solitamente questo file è accessibile al seguente percorso `C:\Program Files (x86)\Fluentis S.R.L\Fluentis BizLink SelfApp Service`.   
E' necessario assicurarsi che all'interno del file appsettings.json siano presenti le seguenti coppie chiave-valore.  

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```
Tali coppie chiave-valore devono coincidere con i parametri indicati in Arm di cui al paragrafo precedente.  
Nel caso si apportino delle varazioni al file `appsettings.json` è necessario procedere a riavviare il servizio di BizLink. 

---



### Configurazione in ambiente GNU/Linux con Docker.
Per essere certi che i parametri di configurazione del servizio di BizLink siano correttamente impostati è necessario aprire il file di configurazione `appsettings.json`.  
Solitamente questo file è accessibile al seguente percorso `/opt/fluentis/fluentis/bizLink`.   
E' necessario assicurarsi che all'interno del file appsettings.json siano presenti le seguenti coppie chiave-valore.  

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```

Nel caso si apportino delle varazioni al file `appsettings.json` è necessario procedere a riavviare il container di BizLink. 


 ```
sudo docker compose down && sudo docker compose up -d
 ```
### BizLink Monitor 
Il BizLink Monitor è una pagina web che permette all'utente di avere visibilità dei connettori impostati in Fluentis.  
Se in questa pagina vedete i due connettori FBH come da immagine sotto significa che avete configurato correttamente BizLink.  
Per accedere al **BizLink Monitor** è necessario digitare nella barra degli indirizzi del browser web il seguente indirizzo:
```
http://localhost:5070/
```
:::danger Attenzione
Il termine localhost andrà sostituito con il nome del server dove è installato BizLink.    
:::

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-monitor.png)

## Conclusioni

Per poter configurare il servizio di fatturazione elettronica presso il cliente servono 2 punti fondamentali:  
1. Contratto FBH e form "Configurazione documenti elettronici" funzionante.  
2. Servizio di BizLink attivo e correttamente configurato.  
 
Se il punto 1 non funziona verificare con il commerciale di riferimento.  
Se il punto 2 non funziona contattare l'assistenza Fluentis.  
