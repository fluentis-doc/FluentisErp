---
title: Configurazioni Bizlink per l'interscambio con lo SDI
sidebar_position: 7
---

Fluentis permette lo scambio dei documenti elettronici in entrata ed in uscita con SDI. E' necessario controllare le seguenti impostazioni prima di sfruttare questa funzionalità, in quanto Fluentis deve poter comunicare con l'esterno attraverso lo strumento di BizLink.

## Tabella Configurazione documenti elettronici

Questa tabella è accessibile in Fluentis da Configurazione > Tabelle > Impostazione generali > Configurazione documenti elettronici.    
Il primo controllo da effettuare è cliccare *Verifica connessione* nella ribbon bar dopo aver aperto la tabella. Se tutte le impostazioni sono state effettuate correttamente, la connessione sarà abilitata. 

:::danger ATTENZIONE
Nel caso in cui riceviate un errore di contesto durante la verifica connessione, vuole dire che al momento dell'attivazione del servizio sono stati comunicati un nome server e un nome database errati. Sarà necessario contattare l'assistenza per fornire i dati corretti.
:::


## Tabella Utenti BizLink

Questa tabella è accessibile in ARM da Home > Connessioni > Utenti BizLink.    
Nella griglia di sinistra sono presenti gli Utenti codificati con la password, mentre nella griglia di destra sono presenti le Connessioni disponibili con i relativi nome server e database.
In questa tabella è necessario controllare che gli Utenti impostati nella griglia di sinistra abbiano il flag 'E' attivo' nella griglia di destra. 


## Servizi di BizLink

A questo punto è necessario aprire l'app Servizi nel proprio pc e arrestare il servizio di BizLink.     
Una volta arrestato il servizio, è necessario aprire la cartella Servizi (il cui percorso potete trovarlo nelle proprietà del servizio BizLink) e controllare le chiavi all'interno del file di configurazione. Esse devono coincidere con le seguenti:

```xml
        <"GlobalUser" value="FlConServiceUser"/>
        <"GlobalPwd" value="FlConServiceUserPwd"/>
        <"GlobalUrl" value="http://localhost/arm/"/>
```
L'utente e la Password devono essere uguali a quelli presenti nella Tabella Utenti BizLink precedentemente analizzata. Se non ne siete sicuri, consigliamo di effettuare un copia e incolla.      

A questo punto è possibile cancellare il file di testo presente nella cartella Servizi e riavviare il serivizo di BizLink. In questo modo, il file di testo verrà ricreato. Se non è presente il file testo, eseguire il file .exe.    
Se il file di testo non presenta errori, il servizio risulterà attivo. 

:::danger ATTENZIONE
Se il file .exe si chiude subito, allora il servizio è ancora attivo oppure c'è qualche problema sul file di configurazione.
:::