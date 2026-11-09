---
title: Accesso a Fluentis
sidebar_position: 1
---

Il sistema **Fluentis** è progettato per garantire un'esperienza operativa coerente attraverso **molteplici piattaforme**. L'interfaccia mantiene una logica di navigazione uniforme indipendentemente dal supporto di esecuzione, sia essa **un’applicazione desktop WPF** oppure un **client Web**, mentre dispone di un'interfaccia più tipizzata basata su tecnologia **MAUI** per il mondo mobile con riferimento ai dispositivi Android.  

Classi, algoritmi e flussi di lavoro sono **standardizzati**, permettendo all'utente di operare in ambienti differenti esclusivamente a livello di interfaccia, ma senza variazioni nelle procedure di navigazione o nell'accesso alle funzionalità principali.

## Client desktop WPF
Il client desktop è realizzato mediante la tecnologia **Windows Presentation Foundation** ed è compatibile esclusivamente con sistemi operativi basati su **Windows**.
Dopo aver installato il client WPF su PC windows, facendo doppio-click sul relativo collegamento creato sul desktop, si avvierà il programma **Fluentis**.  

La maschera di login si presenta con i seguenti campi di input:

<table>
  <tbody>
    <tr>
      <th>Username</th>
      <td>Username dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>Password</th>
      <td>Password dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>ARM Server Endpoint</th>
      <td>Endpoint del server ARM</td>
    </tr>
    <tr>
      <th>Single Sign On</th>
      <td>Se spuntato, permette l'accesso con Single Sign On</td>
    </tr>
  </tbody>
</table>

Il **Single Sign-On (SSO)** consente di accedere a Fluentis tramite **Active Directory**, senza dover inserire manualmente username e password. Le credenziali vengono recuperate automaticamente dalla sessione utente corrente. 

L'**Arm Server Endpoint** è l'indirizzo che identifica in maniera univoca il server Arm per la specifica versione di Fluentis.   
:::info
Ad esempio, ***server01\Arm804***
:::

## Client Blazor Web
**Fluentis** è disponibile anche in **versione web**, accessibile direttamente tramite un browser aggiornato. Questa modalità di utilizzo garantisce la compatibilità con diversi sistemi operativi, tra cui macOS e Linux, senza richiedere l'installazione di un'applicazione dedicata, ma semplicemente l'utilizzo di un browser web recente.

La maschera di login si presenta con i seguenti campi di input:

<table>
  <tbody>
    <tr>
      <th>Username</th>
      <td>Username dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>Password</th>
      <td>Password dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>ARM Server Endpoint</th>
      <td>Endpoint del server ARM</td>
    </tr>
  </tbody>
</table>

Non è disponibile la funzionalità di **Single Sign-On (SSO)**, che consente di recuperare automaticamente l’utente autenticato nella sessione corrente. È comunque possibile accedere utilizzando **l’account di dominio**, ma sarà necessario inserire manualmente le credenziali nei campi previsti.  


## Client Mobile MAUI

**Fluentis** è disponibile anche in **versione mobile per dispositivi Android**, consentendo di accedere e utilizzare l’applicativo direttamente dal proprio smartphone.

La maschera di login si presente con i seguenti campi di input:

<table>
  <tbody>
    <tr>
      <th>Username</th>
      <td>Username dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>Password</th>
      <td>Password dell'utente di Fluentis</td>
    </tr>
    <tr>
      <th>ARM Server Endpoint</th>
      <td>Endpoint del server ARM</td>
    </tr>
  </tbody>
</table>

Non è disponibile la funzionalità di **Single Sign-On (SSO)**, che consente di recuperare automaticamente l’utente autenticato nella sessione corrente. È comunque possibile accedere utilizzando **l’account di dominio**, ma sarà necessario inserire manualmente le credenziali nei campi previsti.  


















 




