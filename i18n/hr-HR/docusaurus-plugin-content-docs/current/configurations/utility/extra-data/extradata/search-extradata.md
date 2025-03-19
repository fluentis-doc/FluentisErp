---
title: Extra Data
sidebar_position: 0
---

## Aspetti introduttivi

Gli **ExtraData** sono un mezzo per aggiungere **nuove proprietà** sia ad oggetti standard che custom di Fluentis senza dover ricorrere all'utilizzo di codice custom e quindi alla compilazione di progetti custom.     
Tutti i principali oggetti funzionali come articoi, ordini, fatture, sono già predisposti all'aggiunta di ExtraData.  

![](/img/en-US/extradata/20250311142958.png)
La form degli **ExtraData** è raggiungibile da **Configurazione** > **Utilità** > **ExtraData.**

### Categori di ExtraData

Gli ExtraData possono essere di n. 3 tipologie:
* **ExtraData semplici.**
* **ExtraData basati su un oggetto.**
* **ExtraData basati su un datasource.**

Ciascuna tipologia di ExtraData presenta delle caratteristiche peculiari.  

![](/img/en-US/extradata/20250311143520.png)

***La form degli ExtraData si presenta così come segue:*** 

### Ribbon Menu
Il RIbbon menu permette all'utente di svolgere le operazioni sugli ExtraData, nello specifico:
* Search: permette di cercare gli ExtraData presenti.
* New: permette di creare un nuovo ExtraData.
* Edit: permette di aprire in modalità read-write un ExtraData presente.
* View: permette di aprire in modalità read-only un ExtraData presente.
* Remove: permette di eliminare un ExtraData presente.

### Filtro Standard

Il filtro standard permette la ricerca degli ExtraData definiti in Fluentis per **codice**.  

![](/img/en-US/extradata/20250313155146.png)

### Corpo Centrale
Il corpo centrale presenta presenta una griglia dei risultati relativa ai singoli Extra Data definiti in Fluentis.  
Tale griglia si compone così come segue: 

    <table>
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Attributo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">ExtraData</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>
            
            <tr>
                <td rowspan="3">Business Object</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">Data Type</td>
                <td>Data type</td>
            </tr>
            <tr>
                <td>Name</td>
            </tr>

            <tr>
                <td rowspan="2">DataSource</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>Description</td>
            </tr>

            <tr>
                <td rowspan="2">Validity</td>
                <td>Start Validity</td>
            </tr>
            <tr>
                <td>End Validity</td>
            </tr>
        </tbody>
    </table>


Aprendo la form di dettaglio di un ExtraData, si avrà accesso al pannello di parametrizzazione dell'ExtraData.

![](/img/en-US/extradata/20250311160817.png)

La form è composta da n. 3 tab.
* Testata
* Attivazioni
* Propagazione

La **testata** fa riferimento alle informazioni relative all'Extra Data, e nel dettaglio:

* Codice.
* Tipo Contenuto.
* Tipo Widget.
* Nome.
* Oggetto di Business.
* Descrizione.
* Data di validità.
* Diritto di visualizzazione.
* Diritto di Modifica. 

Il tab delle **Attivazioni** fa riferimento agli **oggetti padre** di Fluentis su cui vengono agganciati gli ExtraData.  
Ciascun ExtraData può avere molti oggetti padre.   




